import React from 'react';
import { SidebarPro } from './SidebarPro';
import { TikTokPreviewInline } from './TikTokPreviewInline';
import {
  Plus,
  Search,
  MoreVertical,
  Copy,
  Archive,
  Edit3,
  FileText,
  Clock,
  Calendar,
  ChevronRight,
  Sparkles,
  Save,
  Undo,
  Redo,
  Wand2,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  X,
  Lightbulb,
  Target,
  Zap,
  GripVertical,
  Trash2,
  ArrowUpDown,
  Eye,
  ChevronUp,
  List,
  Grid3x3,
  PlayCircle,
  Film,
  Smartphone,
  FileDown,
  Split,
  Merge,
  Type,
  ImageIcon,
  Maximize2,
  Minimize2,
} from 'lucide-react';

// Types
type ContentType = 'Product Review' | 'Tutorial' | 'Entertainment' | 'Education' | 'Story' | 'Challenge';
type ScriptStatus = 'Draft' | 'Ready' | 'Used' | 'Archived';
type WorkflowStatus = 'In Progress' | 'Ready to Schedule' | 'Scheduled' | 'Published';
type TargetGoal = 'Growth' | 'Engagement' | 'Monetization';
type SlotType = 'Trust' | 'Test' | 'Risk';

type SceneRole = 'Hook' | 'Context' | 'Value / Main Point' | 'Proof / Example' | 'CTA / Ending';
type SceneIntent = 'Grab attention' | 'Explain problem' | 'Deliver value' | 'Drive action' | 'Build context' | 'Provide proof';

interface StoryboardFrame {
  id: string;
  imageUrl: string;
  caption: string;
  timestamp: string;
}

interface SceneCard {
  id: string;
  index: number;
  role: SceneRole;
  intent: SceneIntent;
  scriptContent: string;
  executionNotes: string;
  onScreenText?: string;
  durationHint?: string;
  isAIGenerated: boolean;
  lastEditedBy: 'ai' | 'user';
  editedAt: Date;
  storyboard?: StoryboardFrame[];
}

interface Script {
  id: string;
  title: string;
  contentType: ContentType;
  targetGoal: TargetGoal;
  slotType?: SlotType;
  status: ScriptStatus;
  workflowStatus: WorkflowStatus;
  createdAt: Date;
  updatedAt: Date;
  linkedSlot?: string;
  scheduledDate?: Date;
  scenes: SceneCard[];
  version: number;
}

type PreviewMode = 'text' | 'captions' | 'shot';

// Scene Role Badge Component
function SceneRoleBadge({ role }: { role: SceneRole }) {
  const getBadgeStyles = () => {
    switch (role) {
      case 'Hook':
        return 'bg-[#fef3c7] text-[#92400e] border-[#fde68a]';
      case 'Context':
        return 'bg-[#dbeafe] text-[#1e40af] border-[#bfdbfe]';
      case 'Value / Main Point':
        return 'bg-[#dcfce7] text-[#166534] border-[#bbf7d0]';
      case 'Proof / Example':
        return 'bg-[#e9d5ff] text-[#6b21a8] border-[#d8b4fe]';
      case 'CTA / Ending':
        return 'bg-[#ffe4e6] text-[#be123c] border-[#fecdd3]';
      default:
        return 'bg-[#f5f5f5] text-[#666666] border-[#e0e0e0]';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase tracking-wider ${getBadgeStyles()}`}
    >
      {role}
    </span>
  );
}

// Refactored Script Editor Component
function ScriptEditorRefactored({
  script,
  onBack,
  onSave,
}: {
  script: Script;
  onBack: () => void;
  onSave: (updatedScript: Script) => void;
}) {
  const [editedScript, setEditedScript] = React.useState<Script>(script);
  const [selectedSceneId, setSelectedSceneId] = React.useState<string | null>(
    script.scenes.length > 0 ? script.scenes[0].id : null
  );
  const [previewMode, setPreviewMode] = React.useState<PreviewMode>('text');
  const [copilotExpanded, setCopilotExpanded] = React.useState(false);
  const [copilotInput, setCopilotInput] = React.useState('');
  const [expandedSections, setExpandedSections] = React.useState<Record<string, { core: boolean; direction: boolean; storyboard: boolean }>>({});
  const [exportMenuOpen, setExportMenuOpen] = React.useState(false);
  const [lastSaved, setLastSaved] = React.useState<Date>(new Date());
  const [draggedSceneId, setDraggedSceneId] = React.useState<string | null>(null);

  // Initialize expanded sections for all scenes - only run once on mount
  React.useEffect(() => {
    const initialSections: Record<string, { core: boolean; direction: boolean; storyboard: boolean }> = {};
    script.scenes.forEach(scene => {
      initialSections[scene.id] = { core: true, direction: true, storyboard: false };
    });
    setExpandedSections(initialSections);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedScene = selectedSceneId
    ? editedScript.scenes.find(s => s.id === selectedSceneId)
    : null;

  // Scene Management Functions
  const handleAddScene = (afterIndex: number) => {
    const newScene: SceneCard = {
      id: `s${Date.now()}`,
      index: afterIndex + 1,
      role: 'Context',
      intent: 'Build context',
      scriptContent: '',
      executionNotes: '',
      onScreenText: '',
      isAIGenerated: false,
      lastEditedBy: 'user',
      editedAt: new Date(),
    };

    const updatedScenes = [
      ...editedScript.scenes.slice(0, afterIndex),
      newScene,
      ...editedScript.scenes.slice(afterIndex),
    ].map((scene, idx) => ({ ...scene, index: idx + 1 }));

    setEditedScript(prev => ({
      ...prev,
      scenes: updatedScenes,
      updatedAt: new Date(),
      version: prev.version + 1,
    }));
    setSelectedSceneId(newScene.id);
  };

  const handleDeleteScene = (sceneId: string) => {
    if (editedScript.scenes.length <= 1) return;

    const updatedScenes = editedScript.scenes
      .filter(s => s.id !== sceneId)
      .map((scene, idx) => ({ ...scene, index: idx + 1 }));

    setEditedScript(prev => ({
      ...prev,
      scenes: updatedScenes,
      updatedAt: new Date(),
      version: prev.version + 1,
    }));

    // Select next available scene
    if (selectedSceneId === sceneId) {
      setSelectedSceneId(updatedScenes.length > 0 ? updatedScenes[0].id : null);
    }
  };

  const handleDuplicateScene = (sceneId: string) => {
    const sceneIndex = editedScript.scenes.findIndex(s => s.id === sceneId);
    if (sceneIndex === -1) return;

    const originalScene = editedScript.scenes[sceneIndex];
    const duplicatedScene: SceneCard = {
      ...originalScene,
      id: `s${Date.now()}`,
      index: sceneIndex + 2,
    };

    const updatedScenes = [
      ...editedScript.scenes.slice(0, sceneIndex + 1),
      duplicatedScene,
      ...editedScript.scenes.slice(sceneIndex + 1),
    ].map((scene, idx) => ({ ...scene, index: idx + 1 }));

    setEditedScript(prev => ({
      ...prev,
      scenes: updatedScenes,
      updatedAt: new Date(),
      version: prev.version + 1,
    }));
  };

  const handleUpdateScene = (sceneId: string, field: keyof SceneCard, value: any) => {
    setEditedScript(prev => ({
      ...prev,
      scenes: prev.scenes.map(s =>
        s.id === sceneId
          ? { ...s, [field]: value, lastEditedBy: 'user' as const, editedAt: new Date() }
          : s
      ),
      updatedAt: new Date(),
    }));
  };

  const handleRewriteScene = (sceneId: string) => {
    // Simulate AI rewrite
    const scene = editedScript.scenes.find(s => s.id === sceneId);
    if (!scene) return;

    alert('AI Rewrite triggered for this scene. In production, this would call your AI service.');
  };

  const handleSplitScene = (sceneId: string) => {
    const sceneIndex = editedScript.scenes.findIndex(s => s.id === sceneId);
    if (sceneIndex === -1) return;

    const originalScene = editedScript.scenes[sceneIndex];
    const midpoint = Math.floor(originalScene.scriptContent.length / 2);

    const scene1: SceneCard = {
      ...originalScene,
      scriptContent: originalScene.scriptContent.slice(0, midpoint).trim(),
    };

    const scene2: SceneCard = {
      ...originalScene,
      id: `s${Date.now()}`,
      index: sceneIndex + 2,
      scriptContent: originalScene.scriptContent.slice(midpoint).trim(),
    };

    const updatedScenes = [
      ...editedScript.scenes.slice(0, sceneIndex),
      scene1,
      scene2,
      ...editedScript.scenes.slice(sceneIndex + 1),
    ].map((scene, idx) => ({ ...scene, index: idx + 1 }));

    setEditedScript(prev => ({
      ...prev,
      scenes: updatedScenes,
      updatedAt: new Date(),
      version: prev.version + 1,
    }));
  };

  const handleMergeWithNext = (sceneId: string) => {
    const sceneIndex = editedScript.scenes.findIndex(s => s.id === sceneId);
    if (sceneIndex === -1 || sceneIndex >= editedScript.scenes.length - 1) return;

    const currentScene = editedScript.scenes[sceneIndex];
    const nextScene = editedScript.scenes[sceneIndex + 1];

    const mergedScene: SceneCard = {
      ...currentScene,
      scriptContent: `${currentScene.scriptContent}\n\n${nextScene.scriptContent}`.trim(),
      executionNotes: `${currentScene.executionNotes}\n${nextScene.executionNotes}`.trim(),
    };

    const updatedScenes = [
      ...editedScript.scenes.slice(0, sceneIndex),
      mergedScene,
      ...editedScript.scenes.slice(sceneIndex + 2),
    ].map((scene, idx) => ({ ...scene, index: idx + 1 }));

    setEditedScript(prev => ({
      ...prev,
      scenes: updatedScenes,
      updatedAt: new Date(),
      version: prev.version + 1,
    }));
  };

  const handleSave = () => {
    onSave(editedScript);
    setLastSaved(new Date());
    alert('Script saved successfully!');
  };

  const handleExport = (type: 'copy' | 'pdf' | 'scheduling') => {
    switch (type) {
      case 'copy':
        const scriptText = editedScript.scenes
          .map(s => `Scene ${s.index}: ${s.role}\n${s.scriptContent}`)
          .join('\n\n');
        navigator.clipboard.writeText(scriptText);
        alert('Script copied to clipboard!');
        break;
      case 'pdf':
        alert('PDF export would be triggered here.');
        break;
      case 'scheduling':
        alert('Export to Scheduling page would be triggered here.');
        break;
    }
    setExportMenuOpen(false);
  };

  const handleDragStart = (sceneId: string) => {
    setDraggedSceneId(sceneId);
  };

  const handleDragOver = (e: React.DragEvent, targetSceneId: string) => {
    e.preventDefault();
    if (!draggedSceneId || draggedSceneId === targetSceneId) return;

    const draggedIndex = editedScript.scenes.findIndex(s => s.id === draggedSceneId);
    const targetIndex = editedScript.scenes.findIndex(s => s.id === targetSceneId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    const newScenes = [...editedScript.scenes];
    const [draggedScene] = newScenes.splice(draggedIndex, 1);
    newScenes.splice(targetIndex, 0, draggedScene);

    const updatedScenes = newScenes.map((scene, idx) => ({ ...scene, index: idx + 1 }));

    setEditedScript(prev => ({
      ...prev,
      scenes: updatedScenes,
      updatedAt: new Date(),
    }));
  };

  const handleDragEnd = () => {
    setDraggedSceneId(null);
  };

  const toggleSection = (sceneId: string, section: 'core' | 'direction' | 'storyboard') => {
    setExpandedSections(prev => ({
      ...prev,
      [sceneId]: {
        ...prev[sceneId],
        [section]: !prev[sceneId]?.[section],
      },
    }));
  };

  const formatTimeSince = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <div className="flex h-screen bg-[#fafafa] overflow-hidden">
      {/* LEFT: Scene Flow Navigation with Drag & Drop */}
      <div className="w-80 bg-white border-r border-[#e0e0e0] flex flex-col">
        <div className="px-5 py-4 border-b border-[#e0e0e0]">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#666666] hover:text-[#1a1a1a] transition-colors mb-4"
            style={{ fontSize: '13px', fontWeight: '500' }}
          >
            <ChevronRight className="w-3.5 h-3.5 rotate-180" />
            Back to Scripts
          </button>
          <h3 className="text-[#1a1a1a] mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>
            Scene Flow
          </h3>
          <p className="text-[#999999]" style={{ fontSize: '12px' }}>
            {editedScript.scenes.length} {editedScript.scenes.length === 1 ? 'scene' : 'scenes'} · Drag to reorder
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {editedScript.scenes.map((scene) => (
              <div
                key={scene.id}
                draggable
                onDragStart={() => handleDragStart(scene.id)}
                onDragOver={(e) => handleDragOver(e, scene.id)}
                onDragEnd={handleDragEnd}
                onClick={() => {
                  setSelectedSceneId(scene.id);
                  document.getElementById(`scene-${scene.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`group cursor-pointer p-3.5 rounded-xl border-2 transition-all ${
                  selectedSceneId === scene.id
                    ? 'bg-[#f5f5f5] border-[#1a1a1a] shadow-md'
                    : 'bg-white border-[#e5e5e5] hover:border-[#999999] hover:shadow-sm'
                } ${draggedSceneId === scene.id ? 'opacity-50' : ''}`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <GripVertical className="w-4 h-4 text-[#cccccc] group-hover:text-[#666666] transition-colors flex-shrink-0" />
                  <span className="text-[#999999] font-mono" style={{ fontSize: '11px', fontWeight: '700' }}>
                    {String(scene.index).padStart(2, '0')}
                  </span>
                  <SceneRoleBadge role={scene.role} />
                </div>
                <p
                  className={`text-[#666666] line-clamp-2 ${selectedSceneId === scene.id ? 'font-medium' : ''}`}
                  style={{ fontSize: '12px', lineHeight: '1.5' }}
                >
                  {scene.scriptContent || <em className="text-[#cccccc]">Empty scene...</em>}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-[#e0e0e0]">
          <button
            onClick={() => handleAddScene(editedScript.scenes.length)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#1a1a1a] text-white rounded-xl hover:bg-[#404040] transition-colors"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            <Plus className="w-4 h-4" />
            Add Scene
          </button>
        </div>
      </div>

      {/* CENTER: Main Editing Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar: Script Progress & Actions */}
        <div className="bg-white border-b border-[#e0e0e0]">
          {/* Progress Status Bar */}
          <div className="px-8 py-3 bg-[#fafafa] border-b border-[#e0e0e0]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-[#666666]" />
                  <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                    {editedScript.scenes.length} Scenes
                  </span>
                </div>
                {selectedScene && (
                  <>
                    <div className="w-px h-4 bg-[#e0e0e0]" />
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#666666]" />
                      <span className="text-[#666666]" style={{ fontSize: '13px' }}>
                        Editing: <span className="text-[#1a1a1a] font-semibold">Scene {String(selectedScene.index).padStart(2, '0')}</span> · {selectedScene.role}
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => alert('Reorder scenes UI would open')}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#e0e0e0] text-[#666666] rounded-lg hover:bg-[#fafafa] hover:border-[#999999] transition-colors"
                  style={{ fontSize: '12px', fontWeight: '600' }}
                >
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  Reorder Scenes
                </button>
                <div className="relative">
                  <button
                    onClick={() => setExportMenuOpen(!exportMenuOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#e0e0e0] text-[#666666] rounded-lg hover:bg-[#fafafa] hover:border-[#999999] transition-colors"
                    style={{ fontSize: '12px', fontWeight: '600' }}
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    Export
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {exportMenuOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setExportMenuOpen(false)} />
                      <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl border border-[#e0e0e0] shadow-xl z-20 overflow-hidden">
                        <button
                          onClick={() => handleExport('copy')}
                          className="w-full px-4 py-2.5 text-left hover:bg-[#f5f5f5] transition-colors flex items-center gap-3"
                        >
                          <Copy className="w-4 h-4 text-[#666666]" />
                          <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '500' }}>
                            Copy Script
                          </span>
                        </button>
                        <button
                          onClick={() => handleExport('pdf')}
                          className="w-full px-4 py-2.5 text-left hover:bg-[#f5f5f5] transition-colors flex items-center gap-3"
                        >
                          <FileText className="w-4 h-4 text-[#666666]" />
                          <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '500' }}>
                            Export PDF
                          </span>
                        </button>
                        <button
                          onClick={() => handleExport('scheduling')}
                          className="w-full px-4 py-2.5 text-left hover:bg-[#f5f5f5] transition-colors flex items-center gap-3 border-t border-[#e0e0e0]"
                        >
                          <Calendar className="w-4 h-4 text-[#666666]" />
                          <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '500' }}>
                            Export to Scheduling
                          </span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Title & Main Actions */}
          <div className="px-8 py-4">
            <div className="flex items-center justify-between mb-3">
              <input
                type="text"
                value={editedScript.title}
                onChange={(e) => setEditedScript(prev => ({ ...prev, title: e.target.value }))}
                className="flex-1 text-[#1a1a1a] bg-transparent border-none outline-none"
                style={{ fontSize: '24px', fontWeight: '700' }}
                placeholder="Script Title"
              />
              <div className="flex items-center gap-2 ml-4">
                <button
                  title="Undo"
                  className="p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors text-[#666666] hover:text-[#1a1a1a]"
                >
                  <Undo className="w-4 h-4" />
                </button>
                <button
                  title="Redo"
                  className="p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors text-[#666666] hover:text-[#1a1a1a]"
                >
                  <Redo className="w-4 h-4" />
                </button>
                <div className="w-px h-6 bg-[#e0e0e0] mx-1" />
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white rounded-xl hover:bg-[#404040] transition-colors"
                  style={{ fontSize: '14px', fontWeight: '600' }}
                >
                  <Save className="w-4 h-4" />
                  Save
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f5f5f5] rounded-lg">
                <FileText className="w-3.5 h-3.5 text-[#666666]" />
                <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '600' }}>
                  {editedScript.contentType}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f5f5f5] rounded-lg">
                <Target className="w-3.5 h-3.5 text-[#666666]" />
                <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '600' }}>
                  {editedScript.targetGoal}
                </span>
              </div>
              <div className="ml-auto flex items-center gap-2 text-[#999999]">
                <span style={{ fontSize: '11px' }}>Last saved {formatTimeSince(lastSaved)}</span>
                <span style={{ fontSize: '11px' }}>·</span>
                <span style={{ fontSize: '11px', fontWeight: '600' }}>v{editedScript.version}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scene Cards with Organized Fields */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="max-w-5xl mx-auto space-y-6">
            {editedScript.scenes.map((scene, idx) => (
              <div key={scene.id} className="space-y-6">
                <div
                  id={`scene-${scene.id}`}
                  className={`bg-white rounded-2xl border-2 transition-all ${
                    selectedSceneId === scene.id
                      ? 'border-[#1a1a1a] shadow-lg'
                      : 'border-[#e5e5e5] hover:border-[#cccccc]'
                  }`}
                  onClick={() => setSelectedSceneId(scene.id)}
                >
                  {/* Scene Header - Minimal Toolbar */}
                  <div className="flex items-center justify-between px-6 py-4 bg-[#fafafa] border-b border-[#e0e0e0] rounded-t-2xl">
                    <div className="flex items-center gap-3">
                      <span className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700' }}>
                        Scene {String(scene.index).padStart(2, '0')}
                      </span>
                      <select
                        value={scene.role}
                        onChange={(e) => handleUpdateScene(scene.id, 'role', e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1.5 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20"
                        style={{ fontSize: '12px', fontWeight: '600' }}
                      >
                        <option value="Hook">Hook</option>
                        <option value="Context">Context</option>
                        <option value="Value / Main Point">Value / Main Point</option>
                        <option value="Proof / Example">Proof / Example</option>
                        <option value="CTA / Ending">CTA / Ending</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {/* Only 3 high-frequency actions visible */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRewriteScene(scene.id);
                        }}
                        title="AI Rewrite"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#e0e0e0] text-[#666666] rounded-lg hover:bg-[#fafafa] hover:border-[#1a1a1a] transition-colors"
                        style={{ fontSize: '12px', fontWeight: '600' }}
                      >
                        <Wand2 className="w-3.5 h-3.5" />
                        Rewrite
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDuplicateScene(scene.id);
                        }}
                        title="Duplicate Scene"
                        className="p-2 rounded-lg hover:bg-white transition-colors text-[#666666] hover:text-[#1a1a1a]"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteScene(scene.id);
                        }}
                        title="Delete Scene"
                        className="p-2 rounded-lg hover:bg-white transition-colors text-[#666666] hover:text-[#dc2626]"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      
                      {/* More menu for additional actions */}
                      <div className="w-px h-5 bg-[#e0e0e0] mx-1" />
                      <button
                        onClick={(e) => e.stopPropagation()}
                        title="More options"
                        className="p-2 rounded-lg hover:bg-white transition-colors text-[#666666]"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Scene Content - Organized into Collapsible Groups */}
                  <div className="p-6 space-y-5">
                    {/* GROUP A: Core */}
                    <div className="space-y-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection(scene.id, 'core');
                        }}
                        className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#666666] transition-colors"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            expandedSections[scene.id]?.core ? '' : '-rotate-90'
                          }`}
                        />
                        <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Core
                        </span>
                      </button>

                      {expandedSections[scene.id]?.core && (
                        <div className="space-y-4 pl-6">
                          <div>
                            <label className="block text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                              Scene Intent
                            </label>
                            <select
                              value={scene.intent}
                              onChange={(e) => handleUpdateScene(scene.id, 'intent', e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                              className="w-full px-3 py-2.5 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20"
                              style={{ fontSize: '13px' }}
                            >
                              <option value="Grab attention">Grab attention</option>
                              <option value="Explain problem">Explain problem</option>
                              <option value="Deliver value">Deliver value</option>
                              <option value="Drive action">Drive action</option>
                              <option value="Build context">Build context</option>
                              <option value="Provide proof">Provide proof</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                              Script Content
                            </label>
                            <textarea
                              value={scene.scriptContent}
                              onChange={(e) => handleUpdateScene(scene.id, 'scriptContent', e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                              placeholder="What will you say in this scene?"
                              className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] placeholder:text-[#cccccc] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 resize-none"
                              style={{ fontSize: '14px', lineHeight: '1.6', minHeight: '140px' }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* GROUP B: Direction */}
                    <div className="space-y-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection(scene.id, 'direction');
                        }}
                        className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#666666] transition-colors"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            expandedSections[scene.id]?.direction ? '' : '-rotate-90'
                          }`}
                        />
                        <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Direction
                        </span>
                      </button>

                      {expandedSections[scene.id]?.direction && (
                        <div className="space-y-4 pl-6">
                          <div>
                            <label className="flex items-center gap-2 text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                              <Edit3 className="w-3.5 h-3.5" />
                              Execution Notes
                            </label>
                            <textarea
                              value={scene.executionNotes}
                              onChange={(e) => handleUpdateScene(scene.id, 'executionNotes', e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                              placeholder="Camera angles, tone, expressions..."
                              className="w-full px-4 py-3 bg-[#fafafa] border border-[#e0e0e0] rounded-lg text-[#1a1a1a] placeholder:text-[#cccccc] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1a1a1a]/20 resize-none"
                              style={{ fontSize: '13px', lineHeight: '1.5', minHeight: '80px' }}
                            />
                          </div>

                          <div>
                            <label className="flex items-center gap-2 text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                              <Type className="w-3.5 h-3.5" />
                              On-screen Text
                            </label>
                            <input
                              type="text"
                              value={scene.onScreenText || ''}
                              onChange={(e) => handleUpdateScene(scene.id, 'onScreenText', e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                              placeholder="Text overlays, captions, subtitles..."
                              className="w-full px-4 py-2.5 bg-[#fafafa] border border-[#e0e0e0] rounded-lg text-[#1a1a1a] placeholder:text-[#cccccc] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1a1a1a]/20"
                              style={{ fontSize: '13px' }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* GROUP C: Storyboard */}
                    <div className="space-y-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection(scene.id, 'storyboard');
                        }}
                        className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#666666] transition-colors"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            expandedSections[scene.id]?.storyboard ? '' : '-rotate-90'
                          }`}
                        />
                        <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Storyboard
                        </span>
                      </button>

                      {expandedSections[scene.id]?.storyboard && (
                        <div className="pl-6">
                          {scene.storyboard && scene.storyboard.length > 0 ? (
                            <div className="grid grid-cols-3 gap-3">
                              {scene.storyboard.map((frame) => (
                                <div key={frame.id} className="relative group">
                                  <img
                                    src={frame.imageUrl}
                                    alt={frame.caption}
                                    className="w-full h-32 object-cover rounded-lg border border-[#e0e0e0]"
                                  />
                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                    <button className="p-2 bg-white rounded-lg">
                                      <Trash2 className="w-3.5 h-3.5 text-[#dc2626]" />
                                    </button>
                                  </div>
                                  <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/70 text-white rounded text-[10px] font-semibold">
                                    {frame.timestamp}
                                  </span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                alert('Generate storyboard frames with AI');
                              }}
                              className="flex items-center gap-2 px-4 py-3 bg-[#fafafa] border border-[#e0e0e0] rounded-lg text-[#666666] hover:bg-white hover:border-[#1a1a1a] transition-colors w-full"
                              style={{ fontSize: '13px', fontWeight: '600' }}
                            >
                              <ImageIcon className="w-4 h-4" />
                              Generate Storyboard Frames
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quick Actions at Bottom of Each Scene */}
                  <div className="px-6 py-4 bg-[#fafafa] border-t border-[#e0e0e0] rounded-b-2xl flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddScene(scene.index);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#e0e0e0] text-[#666666] rounded-lg hover:bg-[#fafafa] hover:border-[#1a1a1a] transition-colors"
                      style={{ fontSize: '11px', fontWeight: '600' }}
                    >
                      <Plus className="w-3 h-3" />
                      Insert Scene Below
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSplitScene(scene.id);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#e0e0e0] text-[#666666] rounded-lg hover:bg-[#fafafa] hover:border-[#1a1a1a] transition-colors"
                      style={{ fontSize: '11px', fontWeight: '600' }}
                    >
                      <Split className="w-3 h-3" />
                      Split Scene
                    </button>
                    {idx < editedScript.scenes.length - 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMergeWithNext(scene.id);
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#e0e0e0] text-[#666666] rounded-lg hover:bg-[#fafafa] hover:border-[#1a1a1a] transition-colors"
                        style={{ fontSize: '11px', fontWeight: '600' }}
                      >
                        <Merge className="w-3 h-3" />
                        Merge with Next
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        alert('Copilot will suggest scene reordering');
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#e0e0e0] text-[#666666] rounded-lg hover:bg-[#fafafa] hover:border-[#1a1a1a] transition-colors ml-auto"
                      style={{ fontSize: '11px', fontWeight: '600' }}
                    >
                      <Lightbulb className="w-3 h-3" />
                      Suggest Reorder
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Preview + Copilot */}
      <div className="w-[400px] bg-white border-l border-[#e0e0e0] flex flex-col overflow-hidden">
        {/* Preview Section with Mode Tabs */}
        <div className="border-b border-[#e0e0e0]">
          <div className="flex items-center justify-between px-5 py-3 bg-[#fafafa] border-b border-[#e0e0e0]">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#666666]" />
              <h3 className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '700' }}>
                TikTok Preview
              </h3>
            </div>
            {selectedSceneId && (
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white rounded-md border border-[#e0e0e0]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                <span className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                  Live
                </span>
              </div>
            )}
          </div>

          {/* Preview Mode Tabs */}
          <div className="flex items-center gap-1 p-2 bg-[#fafafa] border-b border-[#e0e0e0]">
            <button
              onClick={() => setPreviewMode('text')}
              className={`flex-1 px-3 py-1.5 rounded-lg transition-all ${
                previewMode === 'text'
                  ? 'bg-white text-[#1a1a1a] shadow-sm'
                  : 'text-[#666666] hover:text-[#1a1a1a]'
              }`}
              style={{ fontSize: '11px', fontWeight: '600' }}
            >
              Text
            </button>
            <button
              onClick={() => setPreviewMode('captions')}
              className={`flex-1 px-3 py-1.5 rounded-lg transition-all ${
                previewMode === 'captions'
                  ? 'bg-white text-[#1a1a1a] shadow-sm'
                  : 'text-[#666666] hover:text-[#1a1a1a]'
              }`}
              style={{ fontSize: '11px', fontWeight: '600' }}
            >
              Captions
            </button>
            <button
              onClick={() => setPreviewMode('shot')}
              className={`flex-1 px-3 py-1.5 rounded-lg transition-all ${
                previewMode === 'shot'
                  ? 'bg-white text-[#1a1a1a] shadow-sm'
                  : 'text-[#666666] hover:text-[#1a1a1a]'
              }`}
              style={{ fontSize: '11px', fontWeight: '600' }}
            >
              Shot
            </button>
          </div>

          <div style={{ height: '480px' }} className="bg-[#fafafa]">
            <TikTokPreviewInline 
              scene={selectedScene || null}
            />
          </div>
        </div>

        {/* Copilot Section - Collapsible */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 bg-[#fafafa] border-b border-[#e0e0e0]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <h3 className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '700' }}>
                Script Copilot
              </h3>
            </div>
            <button
              onClick={() => setCopilotExpanded(!copilotExpanded)}
              className="p-1.5 rounded-lg hover:bg-white transition-colors text-[#666666]"
              title={copilotExpanded ? 'Collapse' : 'Expand'}
            >
              {copilotExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>

          {selectedScene && (
            <div className="px-5 py-2 bg-[#f5f5f5] border-b border-[#e0e0e0]">
              <p className="text-[#666666]" style={{ fontSize: '11px' }}>
                Working on: <span className="text-[#1a1a1a] font-semibold">Scene {String(selectedScene.index).padStart(2, '0')}</span> ({selectedScene.role})
              </p>
            </div>
          )}

          {!copilotExpanded ? (
            // Collapsed State: Only Input + Quick Actions
            <div className="p-4 space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={copilotInput}
                  onChange={(e) => setCopilotInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && copilotInput.trim()) {
                      alert(`Copilot: ${copilotInput}`);
                      setCopilotInput('');
                    }
                  }}
                  placeholder="Ask Copilot..."
                  className="flex-1 px-3 py-2 bg-[#f5f5f5] rounded-lg text-[#1a1a1a] placeholder:text-[#999999] outline-none focus:ring-2 focus:ring-[#7c3aed]/20"
                  style={{ fontSize: '12px' }}
                />
                <button
                  onClick={() => {
                    if (copilotInput.trim()) {
                      alert(`Copilot: ${copilotInput}`);
                      setCopilotInput('');
                    }
                  }}
                  disabled={!copilotInput.trim()}
                  className="p-2 bg-[#7c3aed] text-white rounded-lg hover:bg-[#6d28d9] transition-colors disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => selectedScene && handleRewriteScene(selectedScene.id)}
                  className="flex flex-col items-center gap-1.5 px-2 py-2.5 bg-white border border-[#e0e0e0] rounded-lg hover:border-[#7c3aed] hover:bg-[#faf5ff] transition-colors"
                >
                  <Wand2 className="w-4 h-4 text-[#7c3aed]" />
                  <span className="text-[#666666]" style={{ fontSize: '10px', fontWeight: '600' }}>
                    Rewrite
                  </span>
                </button>
                <button
                  onClick={() => selectedScene && handleSplitScene(selectedScene.id)}
                  className="flex flex-col items-center gap-1.5 px-2 py-2.5 bg-white border border-[#e0e0e0] rounded-lg hover:border-[#7c3aed] hover:bg-[#faf5ff] transition-colors"
                >
                  <Split className="w-4 h-4 text-[#7c3aed]" />
                  <span className="text-[#666666]" style={{ fontSize: '10px', fontWeight: '600' }}>
                    Split
                  </span>
                </button>
                <button
                  onClick={() => selectedScene && handleAddScene(selectedScene.index)}
                  className="flex flex-col items-center gap-1.5 px-2 py-2.5 bg-white border border-[#e0e0e0] rounded-lg hover:border-[#7c3aed] hover:bg-[#faf5ff] transition-colors"
                >
                  <Plus className="w-4 h-4 text-[#7c3aed]" />
                  <span className="text-[#666666]" style={{ fontSize: '10px', fontWeight: '600' }}>
                    Insert
                  </span>
                </button>
              </div>

              <button
                onClick={() => setCopilotExpanded(true)}
                className="w-full px-3 py-2 bg-[#fafafa] border border-[#e0e0e0] text-[#666666] rounded-lg hover:bg-white hover:border-[#7c3aed] transition-colors"
                style={{ fontSize: '11px', fontWeight: '600' }}
              >
                Show full capabilities
              </button>
            </div>
          ) : (
            // Expanded State: Full Chat Interface
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-xl px-4 py-3 bg-gradient-to-br from-[#f5f3ff] to-[#faf5ff] border border-[#e9d5ff]">
                    <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#1a1a1a' }}>
                      Hi! I can help you build your script scene by scene. I can:
                    </p>
                    <ul className="mt-2 space-y-1 text-[#666666]" style={{ fontSize: '11px', lineHeight: '1.5' }}>
                      <li>• Insert a new scene at any position</li>
                      <li>• Rewrite a selected scene</li>
                      <li>• Split one scene into two</li>
                      <li>• Merge adjacent scenes</li>
                      <li>• Suggest scene reordering</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-[#e0e0e0]">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={copilotInput}
                    onChange={(e) => setCopilotInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && copilotInput.trim()) {
                        alert(`Copilot: ${copilotInput}`);
                        setCopilotInput('');
                      }
                    }}
                    placeholder="Ask about scenes..."
                    className="flex-1 px-3 py-2 bg-[#f5f5f5] rounded-lg text-[#1a1a1a] placeholder:text-[#999999] outline-none focus:ring-2 focus:ring-[#7c3aed]/20"
                    style={{ fontSize: '12px' }}
                  />
                  <button
                    onClick={() => {
                      if (copilotInput.trim()) {
                        alert(`Copilot: ${copilotInput}`);
                        setCopilotInput('');
                      }
                    }}
                    disabled={!copilotInput.trim()}
                    className="p-2 bg-[#7c3aed] text-white rounded-lg hover:bg-[#6d28d9] transition-colors disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScriptEditorRefactored;
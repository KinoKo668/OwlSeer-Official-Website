import React from 'react';
import { TikTokPreviewInline } from './TikTokPreviewInline';
import { SlotSelectorModal } from './SlotSelectorModal';
import {
  Plus,
  ChevronRight,
  Sparkles,
  Save,
  Undo,
  Redo,
  Wand2,
  MessageSquare,
  Send,
  ChevronDown,
  X,
  Lightbulb,
  Target,
  GripVertical,
  Trash2,
  Eye,
  ChevronUp,
  Film,
  FileText,
  MoreVertical,
  Copy,
  Download,
  Calendar,
  ArrowUpDown,
  Split,
  Merge,
} from 'lucide-react';

// Types
type ScriptStatus = 'Draft' | 'Ready' | 'Used' | 'Archived';
type TargetGoal = 'Growth' | 'Engagement' | 'Monetization';

// Mock scheduling slots data - in real app this would come from Scheduling state
const mockSchedulingSlots = [
  {
    id: 'slot-1',
    title: 'Morning Tech News',
    purpose: 'Share latest tech updates',
    status: 'draft' as const,
    date: new Date(2026, 0, 23),
    slotType: 'Core Content' as const,
  },
  {
    id: 'slot-2',
    title: 'Product Review: iPhone 16',
    purpose: 'Review new iPhone features',
    status: 'script-ready' as const,
    date: new Date(2026, 0, 24),
    slotType: 'Core Content' as const,
  },
  {
    id: 'slot-3',
    title: 'Budget Laptop Guide',
    purpose: 'Help audience choose affordable laptops',
    status: 'draft' as const,
    date: new Date(2026, 0, 25),
    slotType: 'Core Content' as const,
  },
  {
    id: 'slot-4',
    title: 'Experimental Content',
    purpose: 'Test new content format',
    status: 'scheduled' as const,
    date: new Date(2026, 0, 26),
    slotType: 'Experiment' as const,
  },
  {
    id: 'slot-5',
    title: 'Weekly Tech Tips',
    purpose: 'Share productivity tips',
    status: 'draft' as const,
    date: new Date(2026, 0, 27),
    slotType: 'Core Content' as const,
  },
];

interface SceneCard {
  id: string;
  index: number;
  role: 'Hook' | 'Context' | 'Value / Main Point' | 'Proof / Example' | 'CTA / Ending';
  intent: string;
  scriptContent: string;
  executionNotes?: string;
  onScreenText?: string;
  storyboardFrames?: string[];
  durationHint?: string;
  isAIGenerated: boolean;
  lastEditedBy: 'user' | 'ai';
  editedAt: Date;
}

interface Script {
  id: string;
  title: string;
  contentType: string;
  targetGoal: TargetGoal;
  status: ScriptStatus;
  workflowStatus: string;
  createdAt: Date;
  updatedAt: Date;
  scenes: SceneCard[];
  version: number;
}

interface CopilotMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestionType?: 'rewrite' | 'split' | 'insert';
}

interface ScriptEditorNewProps {
  script: Script;
  onBack: () => void;
  onSave: (updatedScript: Script) => void;
}

// Scene Role Badge Component
function SceneRoleBadge({ role }: { role: string }) {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    'Hook': { bg: 'bg-[#fef3c7]', text: 'text-[#92400e]', border: 'border-[#fde68a]' },
    'Context': { bg: 'bg-[#dbeafe]', text: 'text-[#1e40af]', border: 'border-[#bfdbfe]' },
    'Value / Main Point': { bg: 'bg-[#f0fdf4]', text: 'text-[#166534]', border: 'border-[#bbf7d0]' },
    'Proof / Example': { bg: 'bg-[#f5f3ff]', text: 'text-[#6b21a8]', border: 'border-[#e9d5ff]' },
    'CTA / Ending': { bg: 'bg-[#fce7f3]', text: 'text-[#9f1239]', border: 'border-[#fbcfe8]' },
  };

  const color = colors[role] || colors['Context'];

  return (
    <div className={`inline-flex items-center px-2 py-0.5 rounded-md border ${color.bg} ${color.border}`}>
      <span className={`${color.text} uppercase tracking-wide`} style={{ fontSize: '10px', fontWeight: '700' }}>
        {role}
      </span>
    </div>
  );
}

export function ScriptEditorNew({ script, onBack, onSave }: ScriptEditorNewProps) {
  const [editedScript, setEditedScript] = React.useState<Script>(script);
  const [selectedSceneId, setSelectedSceneId] = React.useState<string | null>(
    script.scenes.length > 0 ? script.scenes[0].id : null
  );
  const [copilotExpanded, setCopilotExpanded] = React.useState(false);
  const [previewMode, setPreviewMode] = React.useState<'text' | 'captions' | 'shot'>('text');
  const [showExportMenu, setShowExportMenu] = React.useState(false);
  const [draggedSceneId, setDraggedSceneId] = React.useState<string | null>(null);
  const [copilotMessages, setCopilotMessages] = React.useState<CopilotMessage[]>([
    {
      id: 'm1',
      role: 'assistant',
      content: 'Hi! I can help you with your script. What would you like to work on?',
      timestamp: new Date(),
    },
  ]);
  const [copilotInput, setCopilotInput] = React.useState('');
  const [lastSaved, setLastSaved] = React.useState<Date>(new Date());
  const [expandedSections, setExpandedSections] = React.useState<Record<string, Record<string, boolean>>>({});
  const [showSlotSelector, setShowSlotSelector] = React.useState(false);
  const [isSceneFlowCollapsed, setIsSceneFlowCollapsed] = React.useState(true);

  // Initialize expanded sections for all scenes
  React.useEffect(() => {
    const initialExpanded: Record<string, Record<string, boolean>> = {};
    editedScript.scenes.forEach(scene => {
      initialExpanded[scene.id] = {
        core: true,
        direction: true,
        storyboard: false,
      };
    });
    setExpandedSections(initialExpanded);
  }, []);

  const selectedScene = editedScript.scenes.find(s => s.id === selectedSceneId);

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
      storyboardFrames: [],
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
    if (editedScript.scenes.length === 1) return;

    const updatedScenes = editedScript.scenes
      .filter(s => s.id !== sceneId)
      .map((scene, idx) => ({ ...scene, index: idx + 1 }));

    setEditedScript(prev => ({
      ...prev,
      scenes: updatedScenes,
      updatedAt: new Date(),
      version: prev.version + 1,
    }));

    if (selectedSceneId === sceneId) {
      setSelectedSceneId(updatedScenes[0]?.id || null);
    }
  };

  const handleDuplicateScene = (sceneId: string) => {
    const sceneIndex = editedScript.scenes.findIndex(s => s.id === sceneId);
    if (sceneIndex === -1) return;

    const scene = editedScript.scenes[sceneIndex];
    const duplicatedScene: SceneCard = {
      ...scene,
      id: `s${Date.now()}`,
      index: sceneIndex + 2,
      lastEditedBy: 'user',
      editedAt: new Date(),
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

  const handleReorderScenes = (fromIndex: number, toIndex: number) => {
    const newScenes = [...editedScript.scenes];
    const [movedScene] = newScenes.splice(fromIndex, 1);
    newScenes.splice(toIndex, 0, movedScene);

    const updatedScenes = newScenes.map((scene, idx) => ({ ...scene, index: idx + 1 }));

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
  };

  const handleCopilotSend = () => {
    if (!copilotInput.trim()) return;

    const userMessage: CopilotMessage = {
      id: `m${Date.now()}`,
      role: 'user',
      content: copilotInput,
      timestamp: new Date(),
    };

    setCopilotMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: CopilotMessage = {
        id: `m${Date.now() + 1}`,
        role: 'assistant',
        content: `I understand you want to "${copilotInput}". Let me help with that for Scene ${String(selectedScene?.index || 1).padStart(2, '0')}.`,
        timestamp: new Date(),
      };
      setCopilotMessages(prev => [...prev, aiMessage]);
    }, 1000);

    setCopilotInput('');
  };

  const toggleSection = (sceneId: string, section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sceneId]: {
        ...prev[sceneId],
        [section]: !prev[sceneId]?.[section],
      },
    }));
  };

  return (
    <div className="flex h-screen bg-[#fafafa] overflow-hidden">
      {/* LEFT: Scene Flow Panel - Narrower */}
      <div 
        className={`bg-white border-r border-[#e0e0e0] flex flex-col transition-all duration-300 ${
          isSceneFlowCollapsed ? 'w-14' : 'w-72'
        }`}
      >
        <div className={`px-4 py-4 border-b border-[#e0e0e0] flex items-center ${isSceneFlowCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isSceneFlowCollapsed && (
            <div>
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-[#666666] hover:text-[#1a1a1a] transition-colors mb-4"
                style={{ fontSize: '13px', fontWeight: '500' }}
              >
                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                Back to Scripts
              </button>
              <h3 className="text-[#1a1a1a] mb-1" style={{ fontSize: '15px', fontWeight: '700' }}>
                Scene Flow
              </h3>
              <p className="text-[#999999]" style={{ fontSize: '12px' }}>
                {editedScript.scenes.length} {editedScript.scenes.length === 1 ? 'scene' : 'scenes'}
              </p>
            </div>
          )}
          <button
            onClick={() => setIsSceneFlowCollapsed(!isSceneFlowCollapsed)}
            className="p-1.5 rounded-lg hover:bg-[#f5f5f5] text-[#666666] transition-colors"
            title={isSceneFlowCollapsed ? "Expand Scene Flow" : "Collapse Scene Flow"}
          >
            <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isSceneFlowCollapsed ? '' : 'rotate-180'}`} />
          </button>
        </div>

        {/* Scene List - Draggable */}
        <div className="flex-1 overflow-y-auto p-3">
          <div className="space-y-2">
            {editedScript.scenes.map((scene, index) => (
              <div
                key={scene.id}
                draggable={!isSceneFlowCollapsed}
                onDragStart={() => setDraggedSceneId(scene.id)}
                onDragOver={(e) => {
                  e.preventDefault();
                  if (draggedSceneId && draggedSceneId !== scene.id) {
                    const fromIndex = editedScript.scenes.findIndex(s => s.id === draggedSceneId);
                    handleReorderScenes(fromIndex, index);
                  }
                }}
                onDragEnd={() => setDraggedSceneId(null)}
                onClick={() => {
                  setSelectedSceneId(scene.id);
                  document.getElementById(`scene-${scene.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`w-full text-left rounded-lg border transition-all cursor-pointer ${
                  selectedSceneId === scene.id
                    ? 'bg-[#f5f5f5] border-[#1a1a1a] shadow-sm'
                    : 'bg-white border-[#e0e0e0] hover:border-[#999999]'
                } ${isSceneFlowCollapsed ? 'p-2 flex justify-center' : 'p-3'}`}
                title={isSceneFlowCollapsed ? `Scene ${scene.index}: ${scene.role}` : undefined}
              >
                {isSceneFlowCollapsed ? (
                  <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '700' }}>
                    {String(scene.index).padStart(2, '0')}
                  </span>
                ) : (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <GripVertical className="w-3.5 h-3.5 text-[#999999] flex-shrink-0 cursor-grab active:cursor-grabbing" />
                      <span className="text-[#999999]" style={{ fontSize: '11px', fontWeight: '700' }}>
                        {String(scene.index).padStart(2, '0')}
                      </span>
                      <SceneRoleBadge role={scene.role} />
                    </div>
                    <p className="text-[#666666] line-clamp-1 pl-5" style={{ fontSize: '12px' }}>
                      {scene.scriptContent || <em className="text-[#999999]">Empty scene</em>}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 border-t border-[#e0e0e0]">
          <button
            onClick={() => handleAddScene(editedScript.scenes.length)}
            className={`flex items-center justify-center gap-2 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#404040] transition-colors ${
              isSceneFlowCollapsed ? 'w-8 h-8 p-0' : 'w-full px-4 py-2.5'
            }`}
            style={{ fontSize: '13px', fontWeight: '600' }}
            title="Add Scene"
          >
            <Plus className="w-4 h-4" />
            {!isSceneFlowCollapsed && "Add Scene"}
          </button>
        </div>
      </div>

      {/* CENTER: Scene Card Workspace - Wider */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Status Bar */}
        <div className="bg-[#f5f5f5] border-b border-[#e0e0e0] px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-[#666666]" style={{ fontSize: '13px' }}>
                <span className="font-semibold text-[#1a1a1a]">{editedScript.scenes.length} scenes</span>
              </div>
              <div className="w-px h-4 bg-[#e0e0e0]" />
              <div className="text-[#666666]" style={{ fontSize: '13px' }}>
                Editing: <span className="font-semibold text-[#1a1a1a]">Scene {String(selectedScene?.index || 1).padStart(2, '0')}</span>
                {selectedScene && (
                  <span className="ml-2">· <span className="text-[#1a1a1a]">{selectedScene.role}</span></span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#e0e0e0] rounded-lg hover:bg-[#fafafa] transition-colors text-[#666666]" style={{ fontSize: '12px', fontWeight: '500' }}>
                <ArrowUpDown className="w-3.5 h-3.5" />
                Reorder Scenes
              </button>
            </div>
          </div>
        </div>

        {/* Header with Title and Actions */}
        <div className="bg-white border-b border-[#e0e0e0] px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <input
              type="text"
              value={editedScript.title}
              onChange={(e) => setEditedScript(prev => ({ ...prev, title: e.target.value }))}
              className="flex-1 text-[#1a1a1a] bg-transparent border-none outline-none"
              style={{ fontSize: '20px', fontWeight: '700' }}
              placeholder="Script Title"
            />
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors text-[#666666]">
                <Undo className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors text-[#666666]">
                <Redo className="w-4 h-4" />
              </button>
              <div className="w-px h-6 bg-[#e0e0e0] mx-1" />
              
              {/* Save Button */}
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#404040] transition-colors"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                <Save className="w-4 h-4" />
                Save
              </button>

              {/* Export Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowExportMenu(!showExportMenu)}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-[#1a1a1a] border border-[#e0e0e0] rounded-lg hover:bg-[#fafafa] transition-colors"
                  style={{ fontSize: '14px', fontWeight: '600' }}
                >
                  <Download className="w-4 h-4" />
                  Export
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {showExportMenu && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-[#e0e0e0] rounded-lg shadow-lg py-1 z-10">
                    <button className="w-full px-4 py-2 text-left text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors flex items-center gap-2" style={{ fontSize: '13px' }}>
                      <Copy className="w-3.5 h-3.5 text-[#666666]" />
                      Copy Script
                    </button>
                    <button className="w-full px-4 py-2 text-left text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors flex items-center gap-2" style={{ fontSize: '13px' }}>
                      <FileText className="w-3.5 h-3.5 text-[#666666]" />
                      Export PDF
                    </button>
                    <button 
                      onClick={() => {
                        setShowExportMenu(false);
                        setShowSlotSelector(true);
                      }}
                      className="w-full px-4 py-2 text-left text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors flex items-center gap-2" 
                      style={{ fontSize: '13px' }}
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#666666]" />
                      Export to Scheduling
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
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
            </div>
            <div className="flex items-center gap-3 text-[#999999]" style={{ fontSize: '11px' }}>
              <span>Last saved: {lastSaved.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>

        {/* Scene Cards - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6 bg-[#f0f0f0]">
          <div className="max-w-4xl mx-auto space-y-6">
            {editedScript.scenes.map((scene, idx) => (
              <div key={scene.id}>
                {/* Scene Card */}
                <div
                  id={`scene-${scene.id}`}
                  className={`bg-white rounded-xl border transition-all ${
                    selectedSceneId === scene.id
                      ? 'border-[#1a1a1a] shadow-lg ring-1 ring-[#1a1a1a]/5'
                      : 'border-[#e0e0e0] hover:border-[#999999]'
                  }`}
                  onClick={() => setSelectedSceneId(scene.id)}
                >
                  {/* Scene Header - Simplified to 3 Main Actions */}
                  <div className="flex items-center justify-between px-5 py-3 bg-[#fafafa] border-b border-[#e0e0e0] rounded-t-xl">
                    <div className="flex items-center gap-3">
                      <button className="p-1 text-[#999999] hover:text-[#1a1a1a] cursor-grab active:cursor-grabbing">
                        <GripVertical className="w-4 h-4" />
                      </button>

                      <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '700' }}>
                        Scene {String(scene.index).padStart(2, '0')}
                      </span>

                      <select
                        value={scene.role}
                        onChange={(e) => handleUpdateScene(scene.id, 'role', e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-white border border-[#e0e0e0] rounded-md text-[#1a1a1a] text-[11px] font-semibold uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 cursor-pointer hover:border-[#999999] transition-colors"
                      >
                        <option value="Hook">Hook</option>
                        <option value="Context">Context</option>
                        <option value="Value / Main Point">Value / Main Point</option>
                        <option value="Proof / Example">Proof / Example</option>
                        <option value="CTA / Ending">CTA / Ending</option>
                      </select>

                      <input
                        type="text"
                        value={scene.durationHint || ''}
                        onChange={(e) => handleUpdateScene(scene.id, 'durationHint', e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        placeholder="2-4s"
                        className="w-16 px-2 py-1 bg-white border border-[#e0e0e0] rounded-md text-[#666666] text-[11px] text-center focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20"
                      />

                      {scene.lastEditedBy === 'ai' && (
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-[#ede9fe] rounded-md">
                          <Sparkles className="w-3 h-3 text-[#7c3aed]" />
                          <span className="text-[#7c3aed]" style={{ fontSize: '10px', fontWeight: '600' }}>
                            AI
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Only 3 Main Actions + More Menu */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Rewrite functionality
                          handleUpdateScene(scene.id, 'lastEditedBy', 'ai');
                        }}
                        className="p-1.5 rounded-lg hover:bg-white transition-colors text-[#7c3aed]"
                        title="Rewrite with AI"
                      >
                        <Wand2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDuplicateScene(scene.id);
                        }}
                        className="p-1.5 rounded-lg hover:bg-white transition-colors text-[#666666]"
                        title="Duplicate"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteScene(scene.id);
                        }}
                        disabled={editedScript.scenes.length === 1}
                        className="p-1.5 rounded-lg hover:bg-white transition-colors text-[#dc2626] disabled:opacity-30"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="w-px h-4 bg-[#e0e0e0] mx-1" />
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg hover:bg-white transition-colors text-[#666666]"
                        title="More options"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Scene Content - Grouped Fields */}
                  <div className="p-5 space-y-4">
                    {/* Group A: Core */}
                    <div className="border border-[#e0e0e0] rounded-lg">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection(scene.id, 'core');
                        }}
                        className="w-full flex items-center justify-between px-4 py-2.5 bg-[#fafafa] hover:bg-[#f5f5f5] transition-colors rounded-t-lg"
                      >
                        <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                          Core
                        </span>
                        <ChevronDown className={`w-4 h-4 text-[#666666] transition-transform ${expandedSections[scene.id]?.core ? 'rotate-180' : ''}`} />
                      </button>
                      {expandedSections[scene.id]?.core && (
                        <div className="p-4 space-y-4">
                          {/* Scene Intent */}
                          <div>
                            <label className="flex items-center gap-2 text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                              <Lightbulb className="w-3.5 h-3.5" />
                              Scene Intent
                            </label>
                            <input
                              type="text"
                              value={scene.intent}
                              onChange={(e) => handleUpdateScene(scene.id, 'intent', e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                              placeholder="What is this scene's purpose?"
                              className="w-full px-3 py-2 bg-[#fafafa] border border-[#e0e0e0] rounded-lg text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20"
                              style={{ fontSize: '13px' }}
                            />
                          </div>

                          {/* Script Content */}
                          <div>
                            <label className="flex items-center gap-2 text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                              <MessageSquare className="w-3.5 h-3.5" />
                              Script Content
                            </label>
                            <textarea
                              value={scene.scriptContent}
                              onChange={(e) => handleUpdateScene(scene.id, 'scriptContent', e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                              placeholder="What will you say in this scene?"
                              className="w-full px-3 py-3 bg-[#fafafa] border border-[#e0e0e0] rounded-lg text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 resize-none"
                              style={{ fontSize: '14px', lineHeight: '1.6', minHeight: '120px' }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Group B: Direction */}
                    <div className="border border-[#e0e0e0] rounded-lg">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection(scene.id, 'direction');
                        }}
                        className="w-full flex items-center justify-between px-4 py-2.5 bg-[#fafafa] hover:bg-[#f5f5f5] transition-colors rounded-t-lg"
                      >
                        <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                          Direction
                        </span>
                        <ChevronDown className={`w-4 h-4 text-[#666666] transition-transform ${expandedSections[scene.id]?.direction ? 'rotate-180' : ''}`} />
                      </button>
                      {expandedSections[scene.id]?.direction && (
                        <div className="p-4 space-y-4">
                          {/* Execution Notes */}
                          <div>
                            <label className="flex items-center gap-2 text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                              <Film className="w-3.5 h-3.5" />
                              Execution Notes
                            </label>
                            <textarea
                              value={scene.executionNotes || ''}
                              onChange={(e) => handleUpdateScene(scene.id, 'executionNotes', e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                              placeholder="Shot composition, camera angles, props..."
                              className="w-full px-3 py-2 bg-[#fafafa] border border-[#e0e0e0] rounded-lg text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 resize-none"
                              style={{ fontSize: '13px', lineHeight: '1.5', minHeight: '80px' }}
                            />
                          </div>

                          {/* On-screen Text */}
                          <div>
                            <label className="flex items-center gap-2 text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                              <FileText className="w-3.5 h-3.5" />
                              On-screen Text
                            </label>
                            <input
                              type="text"
                              value={scene.onScreenText || ''}
                              onChange={(e) => handleUpdateScene(scene.id, 'onScreenText', e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                              placeholder="Captions, overlays, text animations..."
                              className="w-full px-3 py-2 bg-[#fafafa] border border-[#e0e0e0] rounded-lg text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20"
                              style={{ fontSize: '13px' }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Group C: Storyboard */}
                    <div className="border border-[#e0e0e0] rounded-lg">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection(scene.id, 'storyboard');
                        }}
                        className="w-full flex items-center justify-between px-4 py-2.5 bg-[#fafafa] hover:bg-[#f5f5f5] transition-colors rounded-t-lg"
                      >
                        <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                          Storyboard
                        </span>
                        <ChevronDown className={`w-4 h-4 text-[#666666] transition-transform ${expandedSections[scene.id]?.storyboard ? 'rotate-180' : ''}`} />
                      </button>
                      {expandedSections[scene.id]?.storyboard && (
                        <div className="p-4">
                          {/* AI Generate Button */}
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              // AI generation logic
                            }}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 mb-4 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white rounded-lg hover:from-[#6d28d9] hover:to-[#9333ea] transition-all shadow-sm"
                            style={{ fontSize: '13px', fontWeight: '600' }}
                          >
                            <Sparkles className="w-4 h-4" />
                            Generate Storyboard with AI
                          </button>

                          <div className="grid grid-cols-3 gap-3">
                            {scene.storyboardFrames && scene.storyboardFrames.length > 0 ? (
                              scene.storyboardFrames.map((frame, fIdx) => (
                                <div key={fIdx} className="aspect-video bg-[#f5f5f5] rounded-lg border border-[#e0e0e0]" />
                              ))
                            ) : (
                              <div className="col-span-3 text-center py-8 text-[#999999]" style={{ fontSize: '12px' }}>
                                No storyboard frames yet
                              </div>
                            )}
                          </div>
                          <button 
                            onClick={(e) => e.stopPropagation()}
                            className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#fafafa] border border-[#e0e0e0] rounded-lg hover:bg-white transition-colors text-[#666666]" 
                            style={{ fontSize: '12px', fontWeight: '500' }}
                          >
                            <Plus className="w-3.5 h-3.5" />
                            Add Frame Manually
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Insert Scene Button Between Cards */}
                {idx < editedScript.scenes.length - 1 && (
                  <div className="flex items-center gap-3 px-12 py-3 justify-center">
                    <button
                      onClick={() => handleAddScene(idx + 1)}
                      className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-white border border-[#e0e0e0] rounded-full hover:border-[#1a1a1a] hover:bg-[#1a1a1a] transition-all group"
                      title="Insert scene"
                    >
                      <Plus className="w-3.5 h-3.5 text-[#999999] group-hover:text-white transition-colors" />
                    </button>
                    <div className="flex-1 border-t border-dashed border-[#e0e0e0]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Preview + Copilot Panel */}
      <div className="w-96 bg-white border-l border-[#e0e0e0] flex flex-col">
        {/* TikTok Preview */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#fafafa]">
          <TikTokPreviewInline
            scene={selectedScene ? {
              ...selectedScene,
              executionNotes: selectedScene.executionNotes || '',
              storyboard: selectedScene.storyboardFrames?.map((url, i) => ({
                id: `frame-${i}`,
                imageUrl: url,
                caption: '',
                timestamp: '0:00'
              }))
            } : null}
          />
        </div>

        {/* Copilot Section */}
        <div className={`border-t border-[#e0e0e0] bg-white transition-all duration-300 ease-in-out shadow-[0_-4px_20px_rgba(0,0,0,0.03)] ${copilotExpanded ? 'h-[500px]' : 'h-auto'}`}>
          {/* Copilot Header - Collapsible */}
          <button
            onClick={() => setCopilotExpanded(!copilotExpanded)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#fafafa] transition-colors border-b border-transparent hover:border-[#e0e0e0]"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[#1a1a1a] leading-none mb-0.5" style={{ fontSize: '13px', fontWeight: '600' }}>
                  OwlSeer Copilot
                </span>
                {selectedScene && (
                  <span className="text-[#999999] leading-none" style={{ fontSize: '10px' }}>
                    Context: Scene {String(selectedScene.index).padStart(2, '0')}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-medium px-1.5 py-0.5 bg-[#f5f5f5] text-[#666666] rounded">Beta</span>
              <ChevronDown className={`w-4 h-4 text-[#666666] transition-transform duration-300 ${copilotExpanded ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {/* Collapsed State: Quick Actions */}
          {!copilotExpanded && (
            <div className="px-4 pb-3">
              <input
                type="text"
                value={copilotInput}
                onChange={(e) => setCopilotInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCopilotSend()}
                placeholder="Ask about this scene..."
                className="w-full px-3 py-2 bg-[#f5f5f5] rounded-lg text-[#1a1a1a] placeholder:text-[#999999] outline-none focus:ring-2 focus:ring-[#7c3aed]/20"
                style={{ fontSize: '12px' }}
              />
            </div>
          )}

          {/* Expanded State: Full Copilot */}
          {copilotExpanded && (
            <div className="flex flex-col h-[calc(100%-48px)]">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fafafa]/50">
                {copilotMessages.map((message) => (
                  <div key={message.id} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.role === 'assistant' && (
                       <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center shadow-sm flex-shrink-0 mt-1">
                          <Sparkles className="w-3.5 h-3.5 text-white" />
                       </div>
                    )}
                    <div 
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 shadow-sm ${
                        message.role === 'user' 
                          ? 'bg-[#1a1a1a] text-white rounded-tr-sm' 
                          : 'bg-white border border-[#e0e0e0] text-[#1a1a1a] rounded-tl-sm'
                      }`}
                    >
                      <p style={{ fontSize: '12px', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>{message.content}</p>
                    </div>
                    {message.role === 'user' && (
                       <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6B7280] to-[#4B5563] flex items-center justify-center shadow-sm flex-shrink-0 mt-1">
                          <span className="text-white text-[9px] font-bold">CA</span>
                       </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="px-5 pt-4 pb-3.5 bg-white border-t border-[#e0e0e0]">
                <div className="relative">
                  <textarea
                    value={copilotInput}
                    onChange={(e) => setCopilotInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleCopilotSend();
                      }
                    }}
                    placeholder="Ask anything about your content strategy..."
                    className="w-full bg-transparent text-[#1F2937] placeholder:text-[#B8BDC6] focus:outline-none resize-none scrollbar-hide mb-3"
                    rows={1}
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.5',
                      minHeight: '24px',
                      maxHeight: '120px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                    }}
                  />
                  <div className="flex items-center justify-end">
                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={handleCopilotSend}
                        disabled={!copilotInput.trim()}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all ${
                          !copilotInput.trim() 
                            ? 'bg-[#E5E7EB] cursor-not-allowed' 
                            : 'bg-[#1a1a1a] hover:bg-[#404040] cursor-pointer'
                        }`}
                      >
                        <span 
                          className={!copilotInput.trim() ? 'text-[#9CA3AF]' : 'text-white'} 
                          style={{ fontSize: '13px', fontWeight: '600' }}
                        >
                          Send
                        </span>
                        <Send className={`w-3.5 h-3.5 ${!copilotInput.trim() ? 'text-[#9CA3AF]' : 'text-white'}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Slot Selector Modal */}
      <SlotSelectorModal
        isOpen={showSlotSelector}
        onClose={() => setShowSlotSelector(false)}
        onSelect={(slot) => {
          // Handle slot selection - link script to this slot
          console.log('Selected slot:', slot);
          // In real implementation, this would update the scheduling data
          setShowSlotSelector(false);
        }}
        slots={mockSchedulingSlots}
      />
    </div>
  );
}
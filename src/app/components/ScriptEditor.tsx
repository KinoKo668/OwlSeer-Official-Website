import React from 'react';
import {
  ChevronLeft,
  Save,
  Eye,
  Sparkles,
  Wand2,
  CheckCircle2,
  Plus,
  Lightbulb,
  Film,
  Target,
  ArrowRight,
  MoreVertical,
  Copy,
  Trash2,
  GripVertical,
  MessageSquare,
  Clock,
  Type,
  X,
  ChevronDown,
  ChevronUp,
  Video,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';

// Types
type SceneRole = 'Hook' | 'Context' | 'Value' | 'Proof' | 'CTA';

interface SceneCard {
  id: string;
  role: SceneRole;
  content: string;
  duration?: string;
  intent?: string;
  executionNotes?: string;
  onScreenText?: string;
}

interface Script {
  id: string;
  title: string;
  status: 'Draft' | 'Ready' | 'Published';
  scenes: SceneCard[];
  slotType?: string;
  aspectRatio?: string;
  shootingStyle?: string;
}

interface ScriptEditorProps {
  script: Script;
  onBack: () => void;
  onPreview: () => void;
  onSave: (script: Script) => void;
  onMarkReady: () => void;
}

const SCENE_ROLE_CONFIG = {
  Hook: { icon: Lightbulb, color: '#fbbf24', label: 'Hook', placeholder: 'Grab attention in the first 3 seconds...' },
  Context: { icon: Film, color: '#3b82f6', label: 'Context', placeholder: 'Set up the problem or situation...' },
  Value: { icon: Sparkles, color: '#8b5cf6', label: 'Value', placeholder: 'Deliver the main point or solution...' },
  Proof: { icon: Target, color: '#10b981', label: 'Proof', placeholder: 'Show evidence, demo, or example...' },
  CTA: { icon: ArrowRight, color: '#ec4899', label: 'CTA', placeholder: 'End with clear call-to-action...' },
};

export function ScriptEditor({
  script,
  onBack,
  onPreview,
  onSave,
  onMarkReady,
}: ScriptEditorProps) {
  const [localScript, setLocalScript] = React.useState(script);
  const [showAISuggestions, setShowAISuggestions] = React.useState(false);
  const [lastSaved, setLastSaved] = React.useState<Date | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(false);
  const [draggedIndex, setDraggedIndex] = React.useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = React.useState<number | null>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = React.useRef<number | null>(null);

  const handleUpdateTitle = (title: string) => {
    setLocalScript(prev => ({ ...prev, title }));
    setHasUnsavedChanges(true);
  };

  const handleUpdateScene = (sceneId: string, field: keyof SceneCard, value: string) => {
    setLocalScript(prev => ({
      ...prev,
      scenes: prev.scenes.map(scene =>
        scene.id === sceneId ? { ...scene, [field]: value } : scene
      ),
    }));
    setHasUnsavedChanges(true);
  };

  const handleAddScene = () => {
    const newScene: SceneCard = {
      id: `s${Date.now()}`,
      role: 'Context',
      content: '',
      duration: '5s',
      intent: '',
      executionNotes: '',
      onScreenText: '',
    };
    setLocalScript(prev => ({
      ...prev,
      scenes: [...prev.scenes, newScene],
    }));
    setHasUnsavedChanges(true);
  };

  const handleDuplicateScene = (sceneId: string) => {
    const scene = localScript.scenes.find(s => s.id === sceneId);
    if (!scene) return;

    const duplicatedScene: SceneCard = {
      ...scene,
      id: `s${Date.now()}`,
    };

    const sceneIndex = localScript.scenes.findIndex(s => s.id === sceneId);
    const updatedScenes = [
      ...localScript.scenes.slice(0, sceneIndex + 1),
      duplicatedScene,
      ...localScript.scenes.slice(sceneIndex + 1),
    ];

    setLocalScript(prev => ({
      ...prev,
      scenes: updatedScenes,
    }));
    setHasUnsavedChanges(true);
  };

  const handleDeleteScene = (sceneId: string) => {
    if (localScript.scenes.length <= 1) {
      alert('Cannot delete the last scene');
      return;
    }

    if (confirm('Delete this scene?')) {
      setLocalScript(prev => ({
        ...prev,
        scenes: prev.scenes.filter(s => s.id !== sceneId),
      }));
      setHasUnsavedChanges(true);
    }
  };

  const handleMoveSceneUp = (sceneId: string) => {
    const sceneIndex = localScript.scenes.findIndex(s => s.id === sceneId);
    if (sceneIndex === 0) return; // Already at the top

    const updatedScenes = [...localScript.scenes];
    [updatedScenes[sceneIndex - 1], updatedScenes[sceneIndex]] = 
      [updatedScenes[sceneIndex], updatedScenes[sceneIndex - 1]];

    setLocalScript(prev => ({
      ...prev,
      scenes: updatedScenes,
    }));
    setHasUnsavedChanges(true);
  };

  const handleMoveSceneDown = (sceneId: string) => {
    const sceneIndex = localScript.scenes.findIndex(s => s.id === sceneId);
    if (sceneIndex === localScript.scenes.length - 1) return; // Already at the bottom

    const updatedScenes = [...localScript.scenes];
    [updatedScenes[sceneIndex], updatedScenes[sceneIndex + 1]] = 
      [updatedScenes[sceneIndex + 1], updatedScenes[sceneIndex]];

    setLocalScript(prev => ({
      ...prev,
      scenes: updatedScenes,
    }));
    setHasUnsavedChanges(true);
  };

  const handleInsertSceneAfter = (afterIndex: number) => {
    const newScene: SceneCard = {
      id: `s${Date.now()}`,
      role: 'Context',
      content: '',
      duration: '5s',
      intent: '',
      executionNotes: '',
      onScreenText: '',
    };

    const updatedScenes = [
      ...localScript.scenes.slice(0, afterIndex + 1),
      newScene,
      ...localScript.scenes.slice(afterIndex + 1),
    ];

    setLocalScript(prev => ({
      ...prev,
      scenes: updatedScenes,
    }));
    setHasUnsavedChanges(true);
  };

  const handleSave = () => {
    onSave(localScript);
    setLastSaved(new Date());
    setHasUnsavedChanges(false);
  };

  // Auto-scroll logic when dragging near edges
  const handleDragMove = React.useCallback((clientY: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const rect = container.getBoundingClientRect();
    const scrollThreshold = 100; // pixels from edge to trigger scroll
    const scrollSpeed = 10; // pixels per frame

    // Calculate distance from top and bottom
    const distanceFromTop = clientY - rect.top;
    const distanceFromBottom = rect.bottom - clientY;

    // Clear any existing scroll interval
    if (autoScrollIntervalRef.current) {
      cancelAnimationFrame(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }

    // Auto-scroll up
    if (distanceFromTop < scrollThreshold && distanceFromTop > 0) {
      const scroll = () => {
        if (container.scrollTop > 0) {
          const speedMultiplier = 1 - (distanceFromTop / scrollThreshold);
          container.scrollTop -= scrollSpeed * speedMultiplier;
          autoScrollIntervalRef.current = requestAnimationFrame(scroll);
        }
      };
      autoScrollIntervalRef.current = requestAnimationFrame(scroll);
    }
    // Auto-scroll down
    else if (distanceFromBottom < scrollThreshold && distanceFromBottom > 0) {
      const scroll = () => {
        const maxScroll = container.scrollHeight - container.clientHeight;
        if (container.scrollTop < maxScroll) {
          const speedMultiplier = 1 - (distanceFromBottom / scrollThreshold);
          container.scrollTop += scrollSpeed * speedMultiplier;
          autoScrollIntervalRef.current = requestAnimationFrame(scroll);
        }
      };
      autoScrollIntervalRef.current = requestAnimationFrame(scroll);
    }
  }, []);

  const stopAutoScroll = React.useCallback(() => {
    if (autoScrollIntervalRef.current) {
      cancelAnimationFrame(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  // Clean up on unmount
  React.useEffect(() => {
    return () => {
      if (autoScrollIntervalRef.current) {
        cancelAnimationFrame(autoScrollIntervalRef.current);
      }
    };
  }, []);

  // Calculate total estimated duration
  const totalDuration = localScript.scenes.reduce((acc, scene) => {
    const duration = parseInt(scene.duration?.replace('s', '') || '0');
    return acc + duration;
  }, 0);

  // Calculate total word count
  const totalWords = localScript.scenes.reduce((acc, scene) => {
    const words = scene.content.trim().split(/\s+/).filter(w => w.length > 0).length;
    return acc + words;
  }, 0);

  return (
    <div className="h-screen bg-[#fafafa] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-[#e0e0e0] px-4 py-3 flex-shrink-0">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={onBack}
            className="p-2 -ml-2 rounded-lg hover:bg-[#f5f5f5] active:scale-95 transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-[#666666]" />
          </button>
          <input
            type="text"
            value={localScript.title}
            onChange={(e) => handleUpdateTitle(e.target.value)}
            className="flex-1 text-[#1a1a1a] bg-transparent outline-none"
            style={{ fontSize: '17px', fontWeight: '600' }}
            placeholder="Script title..."
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAISuggestions(!showAISuggestions)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] text-white active:scale-98 transition-all"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            <Sparkles className="w-4 h-4" />
            AI Optimize
          </button>
          <button
            onClick={onPreview}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#f5f5f5] text-[#1a1a1a] active:scale-98 transition-all"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
        </div>
      </div>

      {/* AI Suggestions Panel */}
      {showAISuggestions && (
        <div className="bg-gradient-to-br from-[#fef3c7] to-[#fde68a] border-b border-[#fbbf24] px-4 py-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#fbbf24] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[#92400e] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                AI Suggestions
              </p>
              <p className="text-[#92400e] mb-3" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                Your hook could be more attention-grabbing. Try starting with a pattern interrupt or bold statement.
              </p>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1.5 rounded-lg bg-[#fbbf24] text-white active:scale-95 transition-all"
                  style={{ fontSize: '12px', fontWeight: '600' }}
                >
                  Apply Fix
                </button>
                <button
                  onClick={() => setShowAISuggestions(false)}
                  className="px-3 py-1.5 rounded-lg bg-white text-[#92400e] active:scale-95 transition-all"
                  style={{ fontSize: '12px', fontWeight: '600' }}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Script Stats Bar */}
      <div className="bg-white border-b border-[#e0e0e0] px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              <span className="text-[#666666]" style={{ fontSize: '12px' }}>
                {localScript.scenes.length} scenes
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-[#999999]" />
              <span className="text-[#666666]" style={{ fontSize: '12px' }}>
                {totalWords} words
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#999999]" />
              <span className="text-[#666666]" style={{ fontSize: '12px' }}>
                ~{totalDuration}s
              </span>
            </div>
          </div>
          {hasUnsavedChanges && (
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
              <span className="text-[#fbbf24]" style={{ fontSize: '11px', fontWeight: '600' }}>
                Unsaved
              </span>
            </div>
          )}
          {lastSaved && !hasUnsavedChanges && (
            <span className="text-[#10b981]" style={{ fontSize: '11px', fontWeight: '600' }}>
              Saved
            </span>
          )}
        </div>
      </div>

      {/* Scenes Editor */}
      <div className="flex-1 overflow-y-auto" ref={scrollContainerRef}>
        <div className="p-4 space-y-4">
          {localScript.scenes.map((scene, index) => (
            <SceneEditorCard
              key={scene.id}
              scene={scene}
              index={index}
              onUpdate={(field, content) => handleUpdateScene(scene.id, field, content)}
              onDuplicate={() => handleDuplicateScene(scene.id)}
              onDelete={() => handleDeleteScene(scene.id)}
              onMoveUp={() => handleMoveSceneUp(scene.id)}
              onMoveDown={() => handleMoveSceneDown(scene.id)}
              onInsertAfter={() => handleInsertSceneAfter(index)}
              onDragStart={() => setDraggedIndex(index)}
              onDragOver={() => setDragOverIndex(index)}
              onDragMove={handleDragMove}
              onDragEnd={() => {
                stopAutoScroll();
                if (draggedIndex !== null && dragOverIndex !== null && draggedIndex !== dragOverIndex) {
                  const updatedScenes = [...localScript.scenes];
                  const [draggedScene] = updatedScenes.splice(draggedIndex, 1);
                  updatedScenes.splice(dragOverIndex, 0, draggedScene);
                  setLocalScript(prev => ({
                    ...prev,
                    scenes: updatedScenes,
                  }));
                  setHasUnsavedChanges(true);
                }
                setDraggedIndex(null);
                setDragOverIndex(null);
              }}
            />
          ))}

          {/* Add Scene Button */}
          <button
            onClick={handleAddScene}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-[#e0e0e0] text-[#999999] hover:border-[#3b82f6] hover:text-[#3b82f6] active:scale-98 transition-all"
            style={{ fontSize: '14px', fontWeight: '600' }}
          >
            <Plus className="w-4 h-4" />
            Add Scene
          </button>
        </div>
      </div>

      {/* Fixed Bottom Actions */}
      <div className="flex-shrink-0 bg-white border-t border-[#e0e0e0] px-4 py-3 pb-safe">
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#3b82f6] text-white active:scale-98 transition-all"
            style={{ fontSize: '15px', fontWeight: '600' }}
          >
            <Save className="w-4 h-4" />
            Save Draft
          </button>
          {localScript.status === 'Draft' && (
            <button
              onClick={onMarkReady}
              className="px-4 py-3 rounded-xl bg-[#10b981] text-white active:scale-98 transition-all"
              style={{ fontSize: '15px', fontWeight: '600' }}
            >
              <CheckCircle2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Scene Editor Card Component
interface SceneEditorCardProps {
  scene: SceneCard;
  index: number;
  onUpdate: (field: keyof SceneCard, content: string) => void;
  onDuplicate: () => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onInsertAfter: () => void;
  onDragStart: () => void;
  onDragOver: () => void;
  onDragMove: (clientY: number) => void;
  onDragEnd: () => void;
}

function SceneEditorCard({ scene, index, onUpdate, onDuplicate, onDelete, onMoveUp, onMoveDown, onInsertAfter, onDragStart, onDragOver, onDragMove, onDragEnd }: SceneEditorCardProps) {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showAdvanced, setShowAdvanced] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const config = SCENE_ROLE_CONFIG[scene.role];
  const Icon = config.icon;

  // Calculate word count
  const wordCount = scene.content.trim().split(/\s+/).filter(w => w.length > 0).length;
  const charCount = scene.content.length;

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true);
    onDragStart();
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    onDragOver();
  };

  const handleDrag = (e: React.DragEvent) => {
    // Only call onDragMove if we have valid coordinates
    if (e.clientY > 0) {
      onDragMove(e.clientY);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    onDragEnd();
  };

  return (
    <div
      className={`bg-white rounded-xl border-2 overflow-hidden transition-all ${
        isDragging ? 'opacity-50 scale-95 border-[#3b82f6]' : 'border-[#e0e0e0]'
      }`}
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      {/* Scene Header */}
      <div
        className="px-4 py-3 flex items-center gap-3"
        style={{ backgroundColor: `${config.color}10` }}
      >
        <div className="flex items-center gap-2 flex-shrink-0">
          <GripVertical className="w-4 h-4 text-[#d0d0d0]" />
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center text-white"
            style={{ backgroundColor: config.color, fontSize: '11px', fontWeight: '700' }}
          >
            {index + 1}
          </div>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: config.color }}
          >
            <Icon className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
            {scene.role}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-[#999999]">
            <Type className="w-3 h-3" />
            <span style={{ fontSize: '11px' }}>{wordCount}w</span>
          </div>
          <div className="flex items-center gap-1 text-[#999999]">
            <Clock className="w-3 h-3" />
            <span style={{ fontSize: '11px' }}>{scene.duration}</span>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1.5 rounded-lg hover:bg-white/50 active:scale-95 transition-all"
            >
              <MoreVertical className="w-4 h-4 text-[#666666]" />
            </button>

            {showMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowMenu(false)}
                />
                <div className="absolute right-0 top-8 z-20 bg-white rounded-xl border border-[#e0e0e0] shadow-lg overflow-hidden w-44">
                  <button
                    onClick={() => {
                      onMoveUp();
                      setShowMenu(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2.5 hover:bg-[#f5f5f5] transition-colors"
                  >
                    <ArrowUp className="w-4 h-4 text-[#666666]" />
                    <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '500' }}>
                      Move Up
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      onMoveDown();
                      setShowMenu(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2.5 hover:bg-[#f5f5f5] transition-colors border-t border-[#e0e0e0]"
                  >
                    <ArrowDown className="w-4 h-4 text-[#666666]" />
                    <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '500' }}>
                      Move Down
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      onDuplicate();
                      setShowMenu(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2.5 hover:bg-[#f5f5f5] transition-colors border-t border-[#e0e0e0]"
                  >
                    <Copy className="w-4 h-4 text-[#666666]" />
                    <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '500' }}>
                      Duplicate
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      onDelete();
                      setShowMenu(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2.5 hover:bg-[#fef2f2] transition-colors border-t border-[#e0e0e0]"
                  >
                    <Trash2 className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-[#dc2626]" style={{ fontSize: '13px', fontWeight: '500' }}>
                      Delete
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Scene Content - Main Script */}
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <MessageSquare className="w-3.5 h-3.5 text-[#999999]" />
          <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
            Script
          </span>
        </div>
        <textarea
          value={scene.content}
          onChange={(e) => onUpdate('content', e.target.value)}
          placeholder={config.placeholder}
          className="w-full min-h-[120px] px-3 py-2.5 bg-[#fafafa] border border-[#e0e0e0] rounded-lg resize-none outline-none text-[#1a1a1a] placeholder:text-[#d0d0d0] focus:border-[#3b82f6] focus:bg-white transition-all"
          style={{ fontSize: '14px', lineHeight: '1.6' }}
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-[#999999]" style={{ fontSize: '11px' }}>
            {charCount} characters
          </span>
          {scene.role === 'Hook' && wordCount > 0 && (
            <button
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gradient-to-r from-[#ec4899]/10 to-[#8b5cf6]/10 border border-[#ec4899]/20 text-[#ec4899] active:scale-95 transition-all"
              style={{ fontSize: '11px', fontWeight: '600' }}
            >
              <Wand2 className="w-3 h-3" />
              Improve
            </button>
          )}
        </div>
      </div>

      {/* Advanced Options Toggle */}
      <div className="px-4 pb-4">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-[#f5f5f5] hover:bg-[#e0e0e0] active:scale-98 transition-all"
        >
          <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
            {showAdvanced ? 'Hide' : 'Show'} Advanced Options
          </span>
          {showAdvanced ? (
            <ChevronUp className="w-4 h-4 text-[#666666]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#666666]" />
          )}
        </button>
      </div>

      {/* Advanced Options Panel */}
      {showAdvanced && (
        <div className="px-4 pb-4 space-y-4 border-t border-[#e0e0e0] pt-4">
          {/* Intent */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Lightbulb className="w-3.5 h-3.5 text-[#999999]" />
              <label className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
                Intent (What this scene achieves)
              </label>
            </div>
            <input
              type="text"
              value={scene.intent || ''}
              onChange={(e) => onUpdate('intent', e.target.value)}
              placeholder="e.g., Build credibility, create curiosity..."
              className="w-full px-3 py-2 bg-[#fafafa] border border-[#e0e0e0] rounded-lg outline-none text-[#1a1a1a] placeholder:text-[#d0d0d0] focus:border-[#3b82f6] focus:bg-white transition-all"
              style={{ fontSize: '13px' }}
            />
          </div>

          {/* On-Screen Text */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Type className="w-3.5 h-3.5 text-[#999999]" />
              <label className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
                On-Screen Text / Captions
              </label>
            </div>
            <input
              type="text"
              value={scene.onScreenText || ''}
              onChange={(e) => onUpdate('onScreenText', e.target.value)}
              placeholder="Text overlay or key caption..."
              className="w-full px-3 py-2 bg-[#fafafa] border border-[#e0e0e0] rounded-lg outline-none text-[#1a1a1a] placeholder:text-[#d0d0d0] focus:border-[#3b82f6] focus:bg-white transition-all"
              style={{ fontSize: '13px' }}
            />
          </div>

          {/* Execution Notes */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Video className="w-3.5 h-3.5 text-[#999999]" />
              <label className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
                Execution Notes (How to shoot/deliver)
              </label>
            </div>
            <textarea
              value={scene.executionNotes || ''}
              onChange={(e) => onUpdate('executionNotes', e.target.value)}
              placeholder="Camera angle, tone, B-roll ideas..."
              rows={2}
              className="w-full px-3 py-2 bg-[#fafafa] border border-[#e0e0e0] rounded-lg resize-none outline-none text-[#1a1a1a] placeholder:text-[#d0d0d0] focus:border-[#3b82f6] focus:bg-white transition-all"
              style={{ fontSize: '13px', lineHeight: '1.5' }}
            />
          </div>
        </div>
      )}

      {/* Insert Scene Below Button */}
      <div className="px-4 pb-4">
        <button
          onClick={onInsertAfter}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0] text-[#666666] hover:bg-[#e8f0fe] hover:border-[#3b82f6] hover:text-[#3b82f6] active:scale-98 transition-all"
          style={{ fontSize: '12px', fontWeight: '600' }}
        >
          <Plus className="w-3.5 h-3.5" />
          Insert Scene Below
        </button>
      </div>
    </div>
  );
}
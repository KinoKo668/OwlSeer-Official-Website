import React, { useState, useEffect } from 'react';
import { X, Info, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { useIsMobile } from './ui/use-mobile';

type SlotType = 'Core Content' | 'Monetized Content' | 'Experiment' | 'Timely';
type AspectRatio = '9:16' | '16:9' | '1:1';
type ShootingStyle = 'on-camera' | 'off-camera' | 'edit-first';
type ContentType = 'Tutorial' | 'Review' | 'Story' | 'Skit' | 'Unboxing' | 'Compilation';
type TargetLength = '15s' | '30s' | '60s' | '90s' | 'Custom';

interface CreateScriptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateScript: (data: ScriptFormData) => void;
  initialData?: Partial<ScriptFormData>;
  isEditMode?: boolean;
}

export interface ScriptFormData {
  title: string;
  slotType: SlotType;
  aspectRatio: AspectRatio;
  shootingStyle: ShootingStyle;
  contentType?: ContentType;
  targetLength?: TargetLength;
  folder?: string;
  notes?: string;
}

const slotTypeColors = {
  'Core Content': '#3b82f6',
  'Monetized Content': '#f97316',
  'Experiment': '#a855f7',
  'Timely': '#10b981',
};

const slotTypeTooltips = {
  'Core Content': 'Primary content for consistency & growth',
  'Monetized Content': 'Sponsored/affiliate/conversion-focused',
  'Experiment': 'Testing new hooks, formats, or topics',
  'Timely': 'Time-sensitive trends/news',
};

const shootingStyleData = {
  'on-camera': {
    icon: '🗣️',
    title: 'On-Camera',
    subtitle: '有出镜：口播/表演',
    description: 'Camera is on you. The audience watches your delivery.',
    creates: 'Word-for-word script + emotion/pause marks + Teleprompter mode',
    bestFor: 'Tips, opinions, personal brand',
    editorStarts: 'Teleprompter Script',
  },
  'off-camera': {
    icon: '📷',
    title: 'Off-Camera Filming',
    subtitle: '不出镜但实拍：手部/产品/场景',
    description: 'Camera is on hands/products/scenes. You direct off-camera.',
    creates: 'Shot List / storyboard + optional voiceover beats',
    bestFor: 'Tutorials, unboxing, ASMR',
    editorStarts: 'Shot List',
  },
  'edit-first': {
    icon: '💻',
    title: 'Edit-First (No Filming)',
    subtitle: '纯素材剪辑：素材库/AI/混剪',
    description: 'No filming. Build it from stock/AI/external clips.',
    creates: 'Asset checklist + search keywords/AI prompts + editing outline',
    bestFor: 'Compilations, explainers, recap',
    editorStarts: 'Asset Checklist',
  },
};

export function CreateScriptModal({ isOpen, onClose, onCreateScript, initialData, isEditMode = false }: CreateScriptModalProps) {
  const isMobile = useIsMobile();
  const [title, setTitle] = useState('Untitled Script');
  const [slotType, setSlotType] = useState<SlotType>('Core Content');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('9:16');
  const [shootingStyle, setShootingStyle] = useState<ShootingStyle>('on-camera');
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [contentType, setContentType] = useState<ContentType | undefined>(undefined);
  const [targetLength, setTargetLength] = useState<TargetLength | undefined>(undefined);
  const [folder, setFolder] = useState<string | undefined>(undefined);
  const [notes, setNotes] = useState('');
  const [hasChanges, setHasChanges] = useState(false);
  const [showDiscardDialog, setShowDiscardDialog] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<SlotType | null>(null);

  // Reset state when modal opens or initialData changes
  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        // Edit mode - populate with initial data
        setTitle(initialData.title || 'Untitled Script');
        setSlotType(initialData.slotType || 'Core Content');
        setAspectRatio(initialData.aspectRatio || '9:16');
        setShootingStyle(initialData.shootingStyle || 'on-camera');
        setContentType(initialData.contentType);
        setTargetLength(initialData.targetLength);
        setFolder(initialData.folder);
        setNotes(initialData.notes || '');
      } else {
        // Create mode - reset to defaults
        setTitle('Untitled Script');
        setSlotType('Core Content');
        setAspectRatio('9:16');
        setShootingStyle('on-camera');
        setContentType(undefined);
        setTargetLength(undefined);
        setFolder(undefined);
        setNotes('');
      }
      setShowMoreOptions(false);
      setHasChanges(false);
      setShowDiscardDialog(false);
      setActiveTooltip(null);
    }
  }, [isOpen, initialData]);

  const isValid = title.trim().length > 0;

  const handleClose = () => {
    if (hasChanges) {
      setShowDiscardDialog(true);
    } else {
      onClose();
    }
  };

  const handleConfirmDiscard = () => {
    setShowDiscardDialog(false);
    onClose();
  };

  const handleCreate = () => {
    if (!isValid) return;

    onCreateScript({
      title,
      slotType,
      aspectRatio,
      shootingStyle,
      contentType,
      targetLength,
      folder,
      notes: notes || undefined,
    });

    onClose();
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    setHasChanges(true);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
        onClick={handleClose}
        style={isMobile ? { paddingBottom: '80px' } : {}}
      >
        {/* Modal */}
        <div
          className={`bg-white rounded-xl w-full max-w-[600px] flex flex-col shadow-xl ${
            isMobile ? 'max-h-[85vh]' : 'max-h-[90vh]'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex-shrink-0 px-6 pt-6 pb-4 border-b border-[#e0e0e0]">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700' }}>
                  {isEditMode ? 'Edit Script' : 'Create New Script'}
                </h2>
                <p className="text-[#666666] mt-1" style={{ fontSize: '13px' }}>
                  {isEditMode ? 'Update script settings and details.' : 'Set the basics. You can refine details later.'}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-[#666666] hover:text-[#1a1a1a] transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {/* SECTION A — Basics */}
            <div className="space-y-5">
              {/* Script Title */}
              <div>
                <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                  Script Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g., iPhone 15 Honest Review"
                  className="w-full px-4 py-2.5 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all"
                  style={{ fontSize: '14px' }}
                />
                {title.trim().length === 0 && (
                  <p className="text-[#dc2626] mt-1.5" style={{ fontSize: '12px' }}>
                    Title is required
                  </p>
                )}
              </div>

              {/* Slot Type */}
              <div>
                <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                  Slot Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(slotTypeColors) as SlotType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSlotType(type);
                        setHasChanges(true);
                      }}
                      className={`relative flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                        slotType === type
                          ? 'border-[#1a1a1a] bg-[#fafafa]'
                          : 'border-[#e0e0e0] hover:border-[#cccccc]'
                      }`}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: slotTypeColors[type] }}
                      />
                      <span className="text-[#1a1a1a] flex-1 text-left" style={{ fontSize: '13px', fontWeight: '600' }}>
                        {type}
                      </span>
                      <div className="relative">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTooltip(activeTooltip === type ? null : type);
                          }}
                          className="text-[#999999] hover:text-[#666666] transition-colors cursor-pointer"
                        >
                          <Info className="w-3.5 h-3.5" />
                        </div>
                        {activeTooltip === type && (
                          <div className="absolute right-0 top-6 w-56 bg-[#1a1a1a] text-white px-3 py-2 rounded-lg shadow-lg z-10">
                            <p style={{ fontSize: '12px', lineHeight: '1.4' }}>
                              {slotTypeTooltips[type]}
                            </p>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Aspect Ratio */}
              <div>
                <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                  Aspect Ratio
                </label>
                <div className="inline-flex bg-[#f5f5f5] rounded-lg p-1">
                  {(['9:16', '16:9', '1:1'] as AspectRatio[]).map((ratio) => (
                    <button
                      key={ratio}
                      onClick={() => {
                        setAspectRatio(ratio);
                        setHasChanges(true);
                      }}
                      className={`px-4 py-2 rounded-md transition-all ${
                        aspectRatio === ratio
                          ? 'bg-white text-[#1a1a1a] shadow-sm'
                          : 'text-[#666666] hover:text-[#1a1a1a]'
                      }`}
                      style={{ fontSize: '13px', fontWeight: '600' }}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* SECTION B — Shooting Style */}
            <div className="mt-6 pt-6 border-t border-[#e0e0e0]">
              <label className="block text-[#1a1a1a] mb-1" style={{ fontSize: '13px', fontWeight: '600' }}>
                Shooting Style
              </label>
              <p className="text-[#666666] mb-4" style={{ fontSize: '12px' }}>
                Choose how you'll produce the video. We'll set up the right script format.
              </p>

              <div className="space-y-3">
                {(Object.keys(shootingStyleData) as ShootingStyle[]).map((style) => {
                  const data = shootingStyleData[style];
                  const isSelected = shootingStyle === style;

                  return (
                    <button
                      key={style}
                      onClick={() => {
                        setShootingStyle(style);
                        setHasChanges(true);
                      }}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        isSelected
                          ? 'border-[#1a1a1a] bg-[#fafafa]'
                          : 'border-[#e0e0e0] hover:border-[#cccccc]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl flex-shrink-0">{data.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '700' }}>
                              {data.title}
                            </h3>
                            <span className="text-[#999999]" style={{ fontSize: '12px' }}>
                              {data.subtitle}
                            </span>
                          </div>
                          <p className="text-[#666666] mb-2" style={{ fontSize: '13px' }}>
                            {data.description}
                          </p>
                          <div className="space-y-1.5">
                            <div className="flex items-start gap-2">
                              <span className="text-[#666666] flex-shrink-0" style={{ fontSize: '12px', fontWeight: '600' }}>
                                Creates:
                              </span>
                              <span className="text-[#1a1a1a]" style={{ fontSize: '12px' }}>
                                {data.creates}
                              </span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#f5f5f5] rounded-md">
                              <span className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                                Best for:
                              </span>
                              <span className="text-[#1a1a1a]" style={{ fontSize: '11px' }}>
                                {data.bestFor}
                              </span>
                            </div>
                          </div>
                        </div>
                        {isSelected && (
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SECTION C — More Options */}
            <div className="mt-6 pt-6 border-t border-[#e0e0e0]">
              <button
                onClick={() => setShowMoreOptions(!showMoreOptions)}
                className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#666666] transition-colors"
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                More options (optional)
                {showMoreOptions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showMoreOptions && (
                <div className="mt-4 space-y-4">
                  {/* Content Type */}
                  <div>
                    <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                      Content Type
                    </label>
                    <select
                      value={contentType || ''}
                      onChange={(e) => {
                        setContentType(e.target.value as ContentType);
                        setHasChanges(true);
                      }}
                      className="w-full px-4 py-2.5 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all bg-white"
                      style={{ fontSize: '13px' }}
                    >
                      <option value="">Select type...</option>
                      <option value="Tutorial">Tutorial</option>
                      <option value="Review">Review</option>
                      <option value="Story">Story</option>
                      <option value="Skit">Skit</option>
                      <option value="Unboxing">Unboxing</option>
                      <option value="Compilation">Compilation</option>
                    </select>
                  </div>

                  {/* Target Length */}
                  <div>
                    <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                      Target Length
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {(['15s', '30s', '60s', '90s', 'Custom'] as TargetLength[]).map((length) => (
                        <button
                          key={length}
                          onClick={() => {
                            setTargetLength(length);
                            setHasChanges(true);
                          }}
                          className={`px-4 py-2 rounded-lg border transition-all ${
                            targetLength === length
                              ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                              : 'border-[#e0e0e0] text-[#666666] hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
                          }`}
                          style={{ fontSize: '13px', fontWeight: '600' }}
                        >
                          {length}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Folder / Series */}
                  <div>
                    <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                      Folder / Series
                    </label>
                    <select
                      value={folder || ''}
                      onChange={(e) => {
                        setFolder(e.target.value);
                        setHasChanges(true);
                      }}
                      className="w-full px-4 py-2.5 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all bg-white"
                      style={{ fontSize: '13px' }}
                    >
                      <option value="">None</option>
                      <option value="create-new">+ Create new...</option>
                      <option value="tech-reviews">Tech Reviews</option>
                      <option value="daily-vlogs">Daily Vlogs</option>
                      <option value="tutorials">Tutorials</option>
                    </select>
                  </div>

                  {/* Notes for AI */}
                  <div>
                    <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                      Notes for AI
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => {
                        setNotes(e.target.value);
                        setHasChanges(true);
                      }}
                      placeholder="Any constraints, keywords, or must-include points…"
                      rows={3}
                      className="w-full px-4 py-2.5 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all resize-none"
                      style={{ fontSize: '13px' }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex-shrink-0 px-6 py-4 border-t border-[#e0e0e0] flex items-center justify-end gap-3">
            <button
              onClick={handleClose}
              className="px-4 py-2.5 text-[#666666] hover:text-[#1a1a1a] transition-colors"
              style={{ fontSize: '13px', fontWeight: '600' }}
            >
              Cancel
            </button>
            <button
              onClick={handleCreate}
              disabled={!isValid}
              className={`px-6 py-2.5 rounded-lg transition-all ${
                isValid
                  ? 'bg-[#1a1a1a] text-white hover:bg-[#000000]'
                  : 'bg-[#e0e0e0] text-[#999999] cursor-not-allowed'
              }`}
              style={{ fontSize: '13px', fontWeight: '600' }}
            >
              {isEditMode ? 'Update Script' : 'Create Script'}
            </button>
          </div>
        </div>
      </div>

      {/* Discard Changes Dialog */}
      {showDiscardDialog && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-[400px] p-6">
            <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '16px', fontWeight: '700' }}>
              Discard changes?
            </h3>
            <p className="text-[#666666] mb-6" style={{ fontSize: '13px' }}>
              You have unsaved changes. Are you sure you want to close?
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowDiscardDialog(false)}
                className="px-4 py-2 text-[#666666] hover:text-[#1a1a1a] transition-colors"
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                Keep Editing
              </button>
              <button
                onClick={handleConfirmDiscard}
                className="px-4 py-2 bg-[#dc2626] text-white rounded-lg hover:bg-[#b91c1c] transition-colors"
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
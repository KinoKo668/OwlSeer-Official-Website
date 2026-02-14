import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, TrendingDown, Sparkles, Plus, Check, X, Pencil, Trash2, MoreVertical, Send, Zap, ArrowRight } from 'lucide-react';

interface GoalBreakdown {
  label: string;
  current: number;
  target: number;
  percentage: number;
}

interface Action {
  id: string;
  label: string;
  checked: boolean;
}

interface QuickWin {
  title: string;
  description: string;
  onGenerate?: () => void;
  onComplete?: () => void;
}

interface WeeklyOverviewCardProps {
  completionRate?: number;
  weekOverWeekChange?: number;
  breakdown?: GoalBreakdown[];
  actions?: Action[];
  weekRange?: string;
  coachNote?: string;
  quickWin?: QuickWin;
  onSendToCopilot?: (action: string) => void;
  onViewFullReport?: () => void;
}

export function WeeklyOverviewCard({
  completionRate = 72,
  weekOverWeekChange = 12,
  breakdown = [
    { label: 'Followers', current: 1200, target: 1500, percentage: 80 },
    { label: 'Views', current: 45000, target: 75000, percentage: 60 },
    { label: 'Posts', current: 4, target: 5, percentage: 80 },
  ],
  actions = [
    { id: '1', label: 'Create 10 topic ideas', checked: false },
    { id: '2', label: 'Write 3 scripts', checked: false },
    { id: '3', label: 'Schedule 4 posts', checked: false },
  ],
  weekRange = 'Jan 12-18',
  coachNote = "You're on track! Keep up the momentum with consistent posting.",
  quickWin,
  onSendToCopilot,
  onViewFullReport,
}: WeeklyOverviewCardProps) {
  const [localActions, setLocalActions] = useState(actions);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newTaskText, setNewTaskText] = useState('');
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [animatedRate, setAnimatedRate] = useState(0);
  const [quickWinCompleted, setQuickWinCompleted] = useState(false);
  const [quickWinMenuOpen, setQuickWinMenuOpen] = useState(false);
  const [editingQuickWin, setEditingQuickWin] = useState(false);
  const [quickWinTitle, setQuickWinTitle] = useState('');
  const [quickWinDesc, setQuickWinDesc] = useState('');
  const [localQuickWin, setLocalQuickWin] = useState<QuickWin | undefined>(quickWin);
  const [deletingQuickWin, setDeletingQuickWin] = useState(false);

  useEffect(() => {
    setLocalQuickWin(quickWin);
    if (quickWin) {
      setQuickWinTitle(quickWin.title);
      setQuickWinDesc(quickWin.description);
    }
  }, [quickWin]);

  const handleStartEditQuickWin = () => {
    setEditingQuickWin(true);
    setQuickWinMenuOpen(false);
  };

  const handleSaveQuickWin = () => {
    if (localQuickWin && quickWinTitle.trim()) {
      setLocalQuickWin({
        ...localQuickWin,
        title: quickWinTitle.trim(),
        description: quickWinDesc.trim(),
      });
      setEditingQuickWin(false);
    }
  };

  const handleCancelEditQuickWin = () => {
    setEditingQuickWin(false);
    if (localQuickWin) {
      setQuickWinTitle(localQuickWin.title);
      setQuickWinDesc(localQuickWin.description);
    }
  };

  const handleDeleteQuickWin = () => {
    setLocalQuickWin(undefined);
    setDeletingQuickWin(false);
  };

  // Track if animation has already run for this completion rate
  const lastCompletionRate = useRef<number>(0);
  const animationRunning = useRef<boolean>(false);

  // CountUp animation for completion rate - FIXED: Prevent infinite loop
  useEffect(() => {
    // Skip if rate hasn't changed or animation is already running
    if (completionRate === lastCompletionRate.current || animationRunning.current) {
      return;
    }

    animationRunning.current = true;
    lastCompletionRate.current = completionRate;

    const duration = 1000;
    const steps = 60;
    const increment = completionRate / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= completionRate) {
        setAnimatedRate(completionRate);
        clearInterval(timer);
        animationRunning.current = false;
      } else {
        setAnimatedRate(Math.floor(current));
      }
    }, duration / steps);

    return () => {
      clearInterval(timer);
      animationRunning.current = false;
    };
  }, [completionRate]);

  const handleToggle = (id: string) => {
    setLocalActions((prev) =>
      prev.map((action) =>
        action.id === id ? { ...action, checked: !action.checked } : action
      )
    );
  };

  const handleStartEdit = (id: string, currentLabel: string) => {
    setEditingId(id);
    setEditText(currentLabel);
    setMenuOpenId(null);
  };

  const handleSaveEdit = (id: string) => {
    if (editText.trim()) {
      setLocalActions((prev) =>
        prev.map((action) =>
          action.id === id ? { ...action, label: editText.trim() } : action
        )
      );
    }
    setEditingId(null);
    setEditText('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const handleAddNewTask = () => {
    if (newTaskText.trim()) {
      const newTask = {
        id: Date.now().toString(),
        label: newTaskText.trim(),
        checked: false,
      };
      setLocalActions((prev) => [...prev, newTask]);
      setNewTaskText('');
      setIsAddingNew(false);
    }
  };

  const handleCancelAddNew = () => {
    setNewTaskText('');
    setIsAddingNew(false);
  };

  const handleDeleteAction = (id: string) => {
    setLocalActions((prev) => prev.filter((action) => action.id !== id));
    setDeletingId(null);
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'from-[#059669] to-[#10B981]';
    if (percentage >= 50) return 'from-[#D97706] to-[#F59E0B]';
    return 'from-[#DC2626] to-[#EF4444]';
  };

  const getProgressBgColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-[#D1FAE5]';
    if (percentage >= 50) return 'bg-[#FEF3C7]';
    return 'bg-[#FEE2E2]';
  };

  return (
    <>
      <div className="bg-card rounded-[12px] border border-border shadow-sm overflow-hidden">
        {/* Header */}
        <div className="border-b border-border px-6 py-3 bg-gradient-to-r from-muted/50 to-card">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2.5">
              <h3 className="text-card-foreground" style={{ fontSize: '18px', fontWeight: '700' }}>
                This Week
              </h3>
              <span className="text-muted-foreground" style={{ fontSize: '13px', fontWeight: '500' }}>
                {weekRange}
              </span>
            </div>
            <button
              onClick={onViewFullReport}
              className="text-[#0F766E] hover:text-[#0D9488] transition-colors"
              style={{ fontSize: '13px', fontWeight: '600' }}
            >
              View Full Report →
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Goal Progress Section */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2.5">
              <h4 className="text-card-foreground" style={{ fontSize: '14px', fontWeight: '700' }}>
                Goal Progress
              </h4>
            </div>

            {/* Main Progress Bar */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-1.5">
                <span 
                  className="text-card-foreground tabular-nums" 
                  style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1' }}
                >
                  {animatedRate}%
                </span>
              </div>
              <div className="relative h-2.5 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${getProgressColor(completionRate)} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${animatedRate}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Breakdown Items */}
            <div className="space-y-2">
              {breakdown.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-card-foreground" style={{ fontSize: '13px', fontWeight: '600' }}>
                        {item.label}
                      </span>
                      <span className="text-card-foreground tabular-nums" style={{ fontSize: '13px', fontWeight: '600' }}>
                        {item.current.toLocaleString()} / {item.target.toLocaleString()}
                      </span>
                    </div>
                    <div className={`h-1.5 ${getProgressBgColor(item.percentage)} dark:bg-muted rounded-full overflow-hidden`}>
                      <div
                        className={`h-full bg-gradient-to-r ${getProgressColor(item.percentage)} rounded-full transition-all duration-700`}
                        style={{ width: `${item.percentage}%` }}
                      >
                        <div className="h-full bg-gradient-to-r from-white/30 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                  <span
                    className="text-muted-foreground font-mono flex-shrink-0 w-10 text-right tabular-nums"
                    style={{ fontSize: '12px', fontWeight: '600' }}
                  >
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4"></div>

          {/* Today's Actions Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-card-foreground" style={{ fontSize: '14px', fontWeight: '700' }}>
                Today's Actions <span className="text-muted-foreground ml-1">({localActions.filter(a => !a.checked).length})</span>
              </h4>
            </div>

            <div className="space-y-2">
              {/* Quick Win - Special Action Item */}
              {localQuickWin && !quickWinCompleted && (
                <div className="relative rounded-[10px] bg-gradient-to-br from-[#0F766E] to-[#14B8A6] overflow-hidden group shadow-sm">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-40 pointer-events-none"></div>
                  
                  {/* Content - Standard Task Structure */}
                  <div className="relative flex items-center gap-3 p-3">
                    {/* Checkbox */}
                    <input
                      type="checkbox"
                      checked={false}
                      onChange={() => {
                        setQuickWinCompleted(true);
                        localQuickWin.onComplete?.();
                      }}
                      disabled={editingQuickWin}
                      className="w-4 h-4 rounded border-white/50 bg-white/20 text-white focus:ring-2 focus:ring-white/50 focus:ring-offset-0 cursor-pointer transition-all flex-shrink-0"
                    />
                    
                    {editingQuickWin ? (
                      <div className="flex-1 min-w-0 flex flex-col gap-2">
                        <input
                          type="text"
                          value={quickWinTitle}
                          onChange={(e) => setQuickWinTitle(e.target.value)}
                          placeholder="Quick Win Title"
                          className="w-full px-2 py-1 bg-white/20 text-white placeholder-white/50 border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-white/50"
                          style={{ fontSize: '14px', fontWeight: '700' }}
                          autoFocus
                        />
                        <input
                          type="text"
                          value={quickWinDesc}
                          onChange={(e) => setQuickWinDesc(e.target.value)}
                          placeholder="Description"
                          className="w-full px-2 py-1 bg-white/20 text-white placeholder-white/50 border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-white/50"
                          style={{ fontSize: '12px' }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSaveQuickWin();
                            if (e.key === 'Escape') handleCancelEditQuickWin();
                          }}
                        />
                        <div className="flex gap-2 mt-1">
                          <button
                            onClick={handleSaveQuickWin}
                            className="px-3 py-1 bg-white text-[#0F766E] rounded text-xs font-bold hover:bg-white/90"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancelEditQuickWin}
                            className="px-3 py-1 bg-white/20 text-white rounded text-xs font-bold hover:bg-white/30"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Icon + Text Content */}
                        <div className="flex items-start gap-2.5 flex-1 min-w-0">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="text-white/90" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.02em' }}>
                                QUICK WIN
                              </span>
                            </div>
                            <h5 className="text-white mb-0.5" style={{ fontSize: '14px', fontWeight: '700', lineHeight: '1.3' }}>
                              {localQuickWin.title}
                            </h5>
                            <p className="text-white/75" style={{ fontSize: '12px', lineHeight: '1.35' }}>
                              {localQuickWin.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Send to Copilot Button */}
                        <button
                          onClick={localQuickWin.onGenerate}
                          className="opacity-100 transition-all p-1.5 rounded-lg bg-white hover:bg-white/90 text-[#0F766E] shadow-sm flex-shrink-0"
                          title="Send to Copilot"
                        >
                          <Sparkles className="w-4 h-4 text-[#0F766E]" />
                        </button>

                        {/* More Menu */}
                        <div className="relative">
                          <button
                            onClick={() => setQuickWinMenuOpen(!quickWinMenuOpen)}
                            className="opacity-100 transition-all p-1.5 rounded-lg bg-white hover:bg-white/90 text-[#0F766E] shadow-sm flex-shrink-0"
                            title="More"
                          >
                            <MoreVertical className="w-4 h-4 text-[#0F766E]" />
                          </button>
                          {quickWinMenuOpen && (
                            <>
                              <div 
                                className="fixed inset-0 z-40" 
                                onClick={() => setQuickWinMenuOpen(false)}
                              />
                              <div className="absolute right-0 top-full mt-1 bg-popover border border-border shadow-lg rounded-[10px] z-50 overflow-hidden min-w-[140px]">
                                <button
                                  onClick={handleStartEditQuickWin}
                                  className="w-full text-left px-4 py-2.5 text-popover-foreground hover:bg-muted transition-colors flex items-center gap-2"
                                  style={{ fontSize: '13px', fontWeight: '600' }}
                                >
                                  <Pencil className="w-4 h-4" />
                                  Edit
                                </button>
                                <button
                                  onClick={() => {
                                    setDeletingQuickWin(true);
                                    setQuickWinMenuOpen(false);
                                  }}
                                  className="w-full text-left px-4 py-2.5 text-[#EF4444] hover:bg-[#FEE2E2] dark:hover:bg-[#7F1D1D]/30 transition-colors flex items-center gap-2"
                                  style={{ fontSize: '13px', fontWeight: '600' }}
                                >
                                  <Trash2 className="w-4 h-4" />
                                  Delete
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Regular Actions */}
              {localActions.map((action) => (
                <div
                  key={action.id}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-all group"
                >
                  <input
                    type="checkbox"
                    checked={action.checked}
                    onChange={() => handleToggle(action.id)}
                    className="w-4 h-4 rounded border-input text-[#0F766E] focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-0 cursor-pointer transition-all"
                    disabled={editingId === action.id}
                  />
                  {editingId === action.id ? (
                    <>
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSaveEdit(action.id);
                          if (e.key === 'Escape') handleCancelEdit();
                        }}
                        autoFocus
                        className="flex-1 px-2 py-1 border border-[#0F766E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F766E] bg-background text-foreground"
                        style={{ fontSize: '14px', fontWeight: '500' }}
                      />
                      <button
                        onClick={() => handleSaveEdit(action.id)}
                        className="p-1.5 rounded-lg bg-[#059669] text-white hover:bg-[#047857] transition-all"
                        title="Save"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="p-1.5 rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-all"
                        title="Cancel"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <>
                      <span
                        className={`flex-1 transition-all ${
                          action.checked ? 'text-muted-foreground line-through' : 'text-card-foreground'
                        }`}
                        style={{ fontSize: '14px', fontWeight: '500' }}
                      >
                        {action.label}
                      </span>
                      <button
                        onClick={() => onSendToCopilot?.(action.label)}
                        className="opacity-0 group-hover:opacity-100 transition-all p-1.5 rounded-lg hover:bg-[#D1FAE5] dark:hover:bg-[#0F766E]/20 text-muted-foreground hover:text-[#0F766E] dark:hover:text-[#2DD4BF]"
                        title="Send to Copilot"
                      >
                        <Sparkles className="w-4 h-4" />
                      </button>
                      <div className="relative">
                        <button
                          onClick={() => menuOpenId === action.id ? setMenuOpenId(null) : setMenuOpenId(action.id)}
                          className="opacity-0 group-hover:opacity-100 transition-all p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-card-foreground"
                          title="More"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                        {menuOpenId === action.id && (
                          <>
                            <div 
                              className="fixed inset-0 z-40" 
                              onClick={() => setMenuOpenId(null)}
                            />
                            <div className="absolute right-0 top-full mt-1 bg-popover border border-border shadow-lg rounded-[10px] z-50 overflow-hidden min-w-[140px]">
                              <button
                                onClick={() => handleStartEdit(action.id, action.label)}
                                className="w-full text-left px-4 py-2.5 text-popover-foreground hover:bg-muted transition-colors flex items-center gap-2"
                                style={{ fontSize: '13px', fontWeight: '600' }}
                              >
                                <Pencil className="w-4 h-4" />
                                Edit
                              </button>
                              <button
                                onClick={() => {
                                  setDeletingId(action.id);
                                  setMenuOpenId(null);
                                }}
                                className="w-full text-left px-4 py-2.5 text-[#EF4444] hover:bg-[#FEE2E2] dark:hover:bg-[#7F1D1D]/30 transition-colors flex items-center gap-2"
                                style={{ fontSize: '13px', fontWeight: '600' }}
                              >
                                <Trash2 className="w-4 h-4" />
                                Delete
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}

              {/* Add New Task */}
              {isAddingNew ? (
                <div className="flex items-center gap-3 p-3 rounded-lg border border-[#0F766E] bg-[#F0FDFA] dark:bg-[#0F766E]/10">
                  <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleAddNewTask();
                      if (e.key === 'Escape') handleCancelAddNew();
                    }}
                    placeholder="Enter task..."
                    autoFocus
                    className="flex-1 px-2 py-1 border border-[#0F766E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F766E] bg-background text-foreground"
                    style={{ fontSize: '14px', fontWeight: '500' }}
                  />
                  <button
                    onClick={handleAddNewTask}
                    className="p-1.5 rounded-lg bg-[#059669] text-white hover:bg-[#047857] transition-all"
                    title="Save"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleCancelAddNew}
                    className="p-1.5 rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-all"
                    title="Cancel"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAddingNew(true)}
                  className="w-full py-2.5 rounded-lg border-2 border-dashed border-border text-muted-foreground hover:border-[#0F766E] hover:text-[#0F766E] hover:bg-[#F0FDFA] dark:hover:bg-[#0F766E]/10 transition-all flex items-center justify-center gap-2"
                  style={{ fontSize: '13px', fontWeight: '600' }}
                >
                  <Plus className="w-4 h-4" />
                  Add to plan
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      {(deletingId || deletingQuickWin) && (() => {
        const isQuickWin = !!deletingQuickWin;
        const label = isQuickWin ? localQuickWin?.title : localActions.find(a => a.id === deletingId)?.label;
        
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-card rounded-[12px] border border-border shadow-2xl p-6 max-w-md w-full mx-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#FEE2E2] dark:bg-[#7F1D1D]/30 rounded-full">
                  <Trash2 className="w-6 h-6 text-[#EF4444]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-card-foreground mb-2" style={{ fontSize: '18px', fontWeight: '700' }}>
                    {isQuickWin ? 'Delete Quick Win' : 'Delete Task'}
                  </h3>
                  <p className="text-muted-foreground mb-1" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    Are you sure you want to delete this {isQuickWin ? 'quick win' : 'task'}?
                  </p>
                  <p className="text-card-foreground font-medium" style={{ fontSize: '14px' }}>
                    "{label}"
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setDeletingId(null);
                    setDeletingQuickWin(false);
                  }}
                  className="flex-1 py-2.5 rounded-lg border-2 border-border bg-card text-card-foreground hover:bg-muted hover:border-[#0F766E] transition-all"
                  style={{ fontSize: '14px', fontWeight: '600' }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (isQuickWin) {
                      handleDeleteQuickWin();
                    } else if (deletingId) {
                      handleDeleteAction(deletingId);
                    }
                  }}
                  className="flex-1 py-2.5 rounded-lg bg-[#EF4444] text-white hover:bg-[#DC2626] transition-all shadow-lg"
                  style={{ fontSize: '14px', fontWeight: '700' }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}

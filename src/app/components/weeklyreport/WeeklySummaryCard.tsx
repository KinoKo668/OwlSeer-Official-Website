import React from 'react';
import { ArrowRight, Plus, Send, Sparkles, Pencil, Check, X, Trash2, MoreVertical } from 'lucide-react';
import { CoachNote } from './CoachNote';

interface WeeklySummaryCardProps {
  actions?: Array<{ id: string; label: string; checked: boolean }>;
  onActionToggle?: (id: string) => void;
  onOpenFullReport?: () => void;
  onApplyToNextWeek?: () => void;
  coachNoteStatus?: 'good' | 'medium' | 'low';
  onSendToCopilot?: (action: string) => void;
  onSendAllToCopilot?: () => void;
}

export function WeeklySummaryCard({
  actions = [
    { id: '1', label: 'Create 10 topic ideas', checked: false },
    { id: '2', label: 'Write 3 scripts', checked: false },
    { id: '3', label: 'Schedule 4 posts', checked: false },
  ],
  onActionToggle,
  onOpenFullReport,
  onApplyToNextWeek,
  coachNoteStatus,
  onSendToCopilot,
  onSendAllToCopilot,
}: WeeklySummaryCardProps) {
  const [localActions, setLocalActions] = React.useState(actions);
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [editText, setEditText] = React.useState('');
  const [isAddingNew, setIsAddingNew] = React.useState(false);
  const [newTaskText, setNewTaskText] = React.useState('');
  const [deletingId, setDeletingId] = React.useState<string | null>(null);
  const [menuOpenId, setMenuOpenId] = React.useState<string | null>(null);

  const handleToggle = (id: string) => {
    setLocalActions((prev) =>
      prev.map((action) =>
        action.id === id ? { ...action, checked: !action.checked } : action
      )
    );
    onActionToggle?.(id);
  };

  const handleStartEdit = (id: string, currentLabel: string) => {
    setEditingId(id);
    setEditText(currentLabel);
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

  const handleStartDelete = (id: string) => {
    setDeletingId(id);
  };

  const handleCancelDelete = () => {
    setDeletingId(null);
  };

  const handleOpenMenu = (id: string) => {
    setMenuOpenId(id);
  };

  const handleCloseMenu = () => {
    setMenuOpenId(null);
  };

  return (
    <>
      <div className="bg-white rounded-[12px] border border-[#E5E7EB] shadow-sm">
        {/* Header */}
        <div className="border-b border-[#E5E7EB] px-5 py-3.5">
          <h3 className="text-[#111827]" style={{ fontSize: '14px', fontWeight: '700' }}>
            Today's Suggestion
          </h3>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="space-y-3">
            {localActions.map((action) => (
              <div
                key={action.id}
                className="flex items-center gap-3 p-3 rounded-lg border border-[#E5E7EB] hover:bg-[#F8F9FA] transition-colors group"
              >
                <input
                  type="checkbox"
                  checked={action.checked}
                  onChange={() => handleToggle(action.id)}
                  className="w-4 h-4 rounded border-[#D1D5DB] text-[#0F766E] focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-0 cursor-pointer"
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
                      className="flex-1 px-2 py-1 border border-[#0F766E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
                      style={{ fontSize: '14px', fontWeight: '500' }}
                    />
                    <button
                      onClick={() => handleSaveEdit(action.id)}
                      className="p-1.5 rounded-lg bg-[#059669] text-white hover:bg-[#047857] transition-colors"
                      title="Save"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="p-1.5 rounded-lg bg-[#E5E7EB] text-[#374151] hover:bg-[#D1D5DB] transition-colors"
                      title="Cancel"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <span
                      className={`flex-1 ${action.checked ? 'text-[#9CA3AF] line-through' : 'text-[#111827]'}`}
                      style={{ fontSize: '14px', fontWeight: '500' }}
                    >
                      {action.label}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        onSendToCopilot?.(action.label);
                      }}
                      className="opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-[#D1FAE5] text-[#374151] hover:text-[#0F766E]"
                      title="Send to Copilot"
                    >
                      <Sparkles className="w-4 h-4" />
                    </button>
                    <div className="relative">
                      <button
                        onClick={() => menuOpenId === action.id ? handleCloseMenu() : handleOpenMenu(action.id)}
                        className="opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-[#F8F9FA] text-[#374151] hover:text-[#111827]"
                        title="More"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                      {menuOpenId === action.id && (
                        <>
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={handleCloseMenu}
                          />
                          <div className="absolute right-0 top-full mt-1 bg-white border border-[#E5E7EB] shadow-lg rounded-[12px] z-50 overflow-hidden min-w-[140px]">
                            <button
                              onClick={() => {
                                handleStartEdit(action.id, action.label);
                                handleCloseMenu();
                              }}
                              className="w-full text-left px-4 py-2.5 text-[#111827] hover:bg-[#F8F9FA] transition-colors flex items-center gap-2"
                              style={{ fontSize: '13px', fontWeight: '600' }}
                            >
                              <Pencil className="w-4 h-4" />
                              Edit
                            </button>
                            <button
                              onClick={() => {
                                handleStartDelete(action.id);
                                handleCloseMenu();
                              }}
                              className="w-full text-left px-4 py-2.5 text-[#EF4444] hover:bg-[#FEE2E2] transition-colors flex items-center gap-2"
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
            {isAddingNew ? (
              <div className="flex items-center gap-3 p-3 rounded-lg border border-[#E5E7EB] hover:bg-[#F8F9FA] transition-colors group">
                <input
                  type="text"
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddNewTask();
                    if (e.key === 'Escape') handleCancelAddNew();
                  }}
                  autoFocus
                  className="flex-1 px-2 py-1 border border-[#0F766E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
                  style={{ fontSize: '14px', fontWeight: '500' }}
                />
                <button
                  onClick={handleAddNewTask}
                  className="p-1.5 rounded-lg bg-[#059669] text-white hover:bg-[#047857] transition-colors"
                  title="Save"
                >
                  <Check className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCancelAddNew}
                  className="p-1.5 rounded-lg bg-[#E5E7EB] text-[#374151] hover:bg-[#D1D5DB] transition-colors"
                  title="Cancel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAddingNew(true)}
                className="w-full py-2.5 rounded-lg border-2 border-dashed border-[#D1D5DB] text-[#374151] hover:border-[#0F766E] hover:text-[#111827] hover:bg-[#F8F9FA] transition-all flex items-center justify-center gap-2"
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                <Plus className="w-4 h-4" />
                Add to plan
              </button>
            )}
          </div>

          {/* Coach Note */}
          {coachNoteStatus && (
            <div className="mt-4">
              <CoachNote status={coachNoteStatus} />
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      {deletingId && (() => {
        const taskToDelete = localActions.find(a => a.id === deletingId);
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-[12px] border border-[#E5E7EB] shadow-2xl p-6 max-w-md w-full mx-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#FEE2E2] rounded-full">
                  <Trash2 className="w-6 h-6 text-[#EF4444]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#111827] mb-2" style={{ fontSize: '18px', fontWeight: '700' }}>
                    Delete Task
                  </h3>
                  <p className="text-[#374151] mb-1" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    Are you sure you want to delete this task?
                  </p>
                  <p className="text-[#111827] font-medium" style={{ fontSize: '14px' }}>
                    "{taskToDelete?.label}"
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleCancelDelete}
                  className="flex-1 py-2.5 rounded-lg border-2 border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F8F9FA] hover:border-[#0F766E] transition-all"
                  style={{ fontSize: '14px', fontWeight: '600' }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteAction(deletingId)}
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
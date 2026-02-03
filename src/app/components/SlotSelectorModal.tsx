import React from 'react';
import { X, Search, Calendar, Clock, CheckCircle2, Circle, Target, Zap } from 'lucide-react';

// Types
type TaskStatus = 'draft' | 'script-ready' | 'scheduled' | 'due' | 'published-on-plan' | 'published-off-plan' | 'not-published-yet';
type SlotType = 'Core Content' | 'Experiment' | 'Monetized Content';

interface ContentSlot {
  id: string;
  title: string;
  purpose: string;
  status: TaskStatus;
  date: Date;
  slotType?: SlotType;
  isToday?: boolean;
  isPriority?: boolean;
  linkedScriptId?: string;
}

interface SlotSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (slot: ContentSlot) => void;
  selectedSlotId?: string;
  slots: ContentSlot[];
}

export function SlotSelectorModal({
  isOpen,
  onClose,
  onSelect,
  selectedSlotId,
  slots,
}: SlotSelectorModalProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filterStatus, setFilterStatus] = React.useState<TaskStatus | 'All'>('All');

  if (!isOpen) return null;

  // Filter slots - only show upcoming slots without scripts
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const filteredSlots = slots.filter(slot => {
    const matchesSearch = slot.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'All' || slot.status === filterStatus;
    const isUpcoming = slot.date >= today;
    const isAvailable = !slot.linkedScriptId || slot.id === selectedSlotId;
    return matchesSearch && matchesStatus && isUpcoming && isAvailable;
  });

  const statusConfig = {
    'draft': { color: '#999999', bg: '#f5f5f5', label: 'Draft' },
    'script-ready': { color: '#8b5cf6', bg: '#f3e8ff', label: 'Script Ready' },
    'scheduled': { color: '#3b82f6', bg: '#dbeafe', label: 'Scheduled' },
    'due': { color: '#f59e0b', bg: '#fef3c7', label: 'Due' },
    'published-on-plan': { color: '#10b981', bg: '#d1fae5', label: 'Published on Plan' },
    'published-off-plan': { color: '#f59e0b', bg: '#fef3c7', label: 'Published off Plan' },
    'not-published-yet': { color: '#ef4444', bg: '#fee2e2', label: 'Not Published Yet' },
  };

  const slotTypeConfig = {
    'Core Content': { color: '#3b82f6', icon: Target },
    'Experiment': { color: '#8b5cf6', icon: Zap },
    'Monetized Content': { color: '#10b981', icon: Circle },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e0e0e0]">
          <h2 className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700' }}>
            Select Publishing Slot
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors"
          >
            <X className="w-5 h-5 text-[#666666]" />
          </button>
        </div>

        {/* Search & Filters */}
        <div className="px-6 py-4 border-b border-[#e0e0e0] space-y-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search publishing slots..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#f5f5f5] border border-transparent rounded-lg outline-none focus:border-[#3b82f6] transition-colors"
              style={{ fontSize: '14px' }}
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            {(['All', 'draft', 'script-ready'] as const).map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterStatus === status
                    ? 'bg-[#3b82f6] text-white'
                    : 'bg-[#f5f5f5] text-[#666666] hover:bg-[#e0e0e0]'
                }`}
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                {status === 'All' ? 'All' : statusConfig[status as TaskStatus].label}
              </button>
            ))}
          </div>
        </div>

        {/* Slot List */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {filteredSlots.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-[#d0d0d0] mx-auto mb-3" />
              <p className="text-[#999999]" style={{ fontSize: '14px' }}>
                {searchQuery ? 'No slots found' : 'No available publishing slots'}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {filteredSlots.map(slot => {
                const config = statusConfig[slot.status];
                const isSelected = slot.id === selectedSlotId;
                const slotTypeConf = slot.slotType ? slotTypeConfig[slot.slotType] : null;
                const SlotIcon = slotTypeConf?.icon;

                return (
                  <button
                    key={slot.id}
                    onClick={() => {
                      onSelect(slot);
                      onClose();
                    }}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      isSelected
                        ? 'border-[#3b82f6] bg-[#eff6ff]'
                        : 'border-[#e0e0e0] hover:border-[#3b82f6]/50 hover:bg-[#f5f5f5]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className="px-2 py-0.5 rounded-md flex items-center gap-1"
                            style={{ backgroundColor: config.bg }}
                          >
                            <span style={{ fontSize: '11px', fontWeight: '600', color: config.color }}>
                              {config.label}
                            </span>
                          </div>
                          
                          {slot.isToday && (
                            <div className="px-2 py-0.5 rounded-md bg-[#fef3c7]">
                              <span style={{ fontSize: '11px', fontWeight: '600', color: '#92400e' }}>
                                Today
                              </span>
                            </div>
                          )}

                          {slot.isPriority && (
                            <div className="px-2 py-0.5 rounded-md bg-[#fee2e2]">
                              <span style={{ fontSize: '11px', fontWeight: '600', color: '#991b1b' }}>
                                Priority
                              </span>
                            </div>
                          )}

                          {slotTypeConf && SlotIcon && (
                            <div className="flex items-center gap-1 text-[#999999]">
                              <SlotIcon className="w-3 h-3" style={{ color: slotTypeConf.color }} />
                              <span style={{ fontSize: '11px' }}>{slot.slotType}</span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-[#1a1a1a] mb-1" style={{ fontSize: '15px', fontWeight: '600' }}>
                          {slot.title}
                        </h3>

                        <p className="text-[#666666] mb-2" style={{ fontSize: '13px' }}>
                          {slot.purpose}
                        </p>

                        <div className="flex items-center gap-2 text-[#999999]">
                          <Calendar className="w-3 h-3" />
                          <span style={{ fontSize: '12px' }}>
                            {slot.date.toLocaleDateString('en-US', { 
                              weekday: 'short', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-[#3b82f6] flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#e0e0e0] flex items-center justify-between">
          <p className="text-[#999999]" style={{ fontSize: '13px' }}>
            {filteredSlots.length} slot{filteredSlots.length !== 1 ? 's' : ''} available
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#f5f5f5] text-[#1a1a1a] hover:bg-[#e0e0e0] transition-colors"
            style={{ fontSize: '14px', fontWeight: '600' }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
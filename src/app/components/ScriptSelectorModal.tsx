import React from 'react';
import { X, Search, FileText, CheckCircle2, Circle, Clock, Sparkles } from 'lucide-react';

// Types
type ScriptStatus = 'Draft' | 'Ready' | 'Used' | 'Archived';

interface Script {
  id: string;
  title: string;
  contentType: string;
  status: ScriptStatus;
  updatedAt: Date;
  scenes?: Array<{ id: string; role: string }>;
}

interface ScriptSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (script: Script) => void;
  selectedScriptId?: string;
  scripts: Script[];
}

export function ScriptSelectorModal({
  isOpen,
  onClose,
  onSelect,
  selectedScriptId,
  scripts,
}: ScriptSelectorModalProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filterStatus, setFilterStatus] = React.useState<ScriptStatus | 'All'>('All');

  if (!isOpen) return null;

  // Filter scripts
  const filteredScripts = scripts.filter(script => {
    const matchesSearch = script.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'All' || script.status === filterStatus;
    const isAvailable = script.status === 'Ready' || script.status === 'Draft';
    return matchesSearch && matchesStatus && isAvailable;
  });

  const statusConfig = {
    Draft: { color: '#999999', bg: '#f5f5f5', icon: Circle },
    Ready: { color: '#10b981', bg: '#dcfce7', icon: CheckCircle2 },
    Used: { color: '#3b82f6', bg: '#dbeafe', icon: CheckCircle2 },
    Archived: { color: '#6b7280', bg: '#f3f4f6', icon: Circle },
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
            Select Script
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
              placeholder="Search scripts..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#f5f5f5] border border-transparent rounded-lg outline-none focus:border-[#3b82f6] transition-colors"
              style={{ fontSize: '14px' }}
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            {(['All', 'Ready', 'Draft'] as const).map(status => (
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
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Script List */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {filteredScripts.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-[#d0d0d0] mx-auto mb-3" />
              <p className="text-[#999999]" style={{ fontSize: '14px' }}>
                {searchQuery ? 'No scripts found' : 'No available scripts'}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {filteredScripts.map(script => {
                const config = statusConfig[script.status];
                const StatusIcon = config.icon;
                const isSelected = script.id === selectedScriptId;

                return (
                  <button
                    key={script.id}
                    onClick={() => {
                      onSelect(script);
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
                            <StatusIcon className="w-3 h-3" style={{ color: config.color }} />
                            <span style={{ fontSize: '11px', fontWeight: '600', color: config.color }}>
                              {script.status}
                            </span>
                          </div>
                          <span className="text-[#999999]" style={{ fontSize: '12px' }}>
                            {script.contentType}
                          </span>
                        </div>

                        <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '15px', fontWeight: '600' }}>
                          {script.title}
                        </h3>

                        <div className="flex items-center gap-3 text-[#999999]">
                          <span style={{ fontSize: '12px' }}>
                            {script.scenes?.length || 0} scenes
                          </span>
                          <span style={{ fontSize: '12px' }}>•</span>
                          <span style={{ fontSize: '12px' }}>
                            Updated {script.updatedAt.toLocaleDateString()}
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
            {filteredScripts.length} script{filteredScripts.length !== 1 ? 's' : ''} available
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#f5f5f5] text-[#1a1a1a] hover:bg-[#e0e0e0] transition-colors"
              style={{ fontSize: '14px', fontWeight: '600' }}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Create new script
                onClose();
                // This would open the create script modal
              }}
              className="px-4 py-2 rounded-lg bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-colors flex items-center gap-2"
              style={{ fontSize: '14px', fontWeight: '600' }}
            >
              <Sparkles className="w-4 h-4" />
              Create New Script
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

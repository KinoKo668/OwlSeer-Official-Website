import React from 'react';
import {
  ArrowLeft,
  Search,
  Filter,
  UserPlus,
  UserMinus,
  Shield,
  Settings as SettingsIcon,
  FileText,
  Clock,
  X,
  ChevronDown,
} from 'lucide-react';

type AuditLogEntry = {
  id: string;
  actor: string;
  actorEmail: string;
  action: string;
  target: string;
  timestamp: string;
  ip?: string;
  actionType: 'invite' | 'remove' | 'role' | 'settings' | 'content';
};

interface AuditLogMobileProps {
  onBack: () => void;
}

export function AuditLogMobile({ onBack }: AuditLogMobileProps) {
  const [auditActorSearch, setAuditActorSearch] = React.useState('');
  const [auditActionFilter, setAuditActionFilter] = React.useState<string>('all');
  const [showFilters, setShowFilters] = React.useState(false);

  const [auditLogs] = React.useState<AuditLogEntry[]>([
    {
      id: 'log1',
      actor: 'Sarah Chen',
      actorEmail: 'sarah.chen@email.com',
      action: 'Updated member role',
      target: 'Alex Morgan → Admin',
      timestamp: '2 hours ago',
      ip: '192.168.1.1',
      actionType: 'role',
    },
    {
      id: 'log2',
      actor: 'Alex Morgan',
      actorEmail: 'alex.m@email.com',
      action: 'Invited member',
      target: 'sam.rivera@email.com',
      timestamp: '5 days ago',
      ip: '192.168.1.2',
      actionType: 'invite',
    },
    {
      id: 'log3',
      actor: 'Sarah Chen',
      actorEmail: 'sarah.chen@email.com',
      action: 'Invited member',
      target: 'casey.p@email.com',
      timestamp: '2 days ago',
      ip: '192.168.1.1',
      actionType: 'invite',
    },
    {
      id: 'log4',
      actor: 'Jordan Lee',
      actorEmail: 'jordan.lee@email.com',
      action: 'Updated content',
      target: 'Video #128',
      timestamp: '1 day ago',
      ip: '192.168.1.3',
      actionType: 'content',
    },
    {
      id: 'log5',
      actor: 'Alex Morgan',
      actorEmail: 'alex.m@email.com',
      action: 'Changed security settings',
      target: 'Enabled 2FA requirement',
      timestamp: '3 days ago',
      ip: '192.168.1.2',
      actionType: 'settings',
    },
    {
      id: 'log6',
      actor: 'Sarah Chen',
      actorEmail: 'sarah.chen@email.com',
      action: 'Removed member',
      target: 'John Doe',
      timestamp: '1 week ago',
      ip: '192.168.1.1',
      actionType: 'remove',
    },
  ]);

  // Filtered audit logs
  const filteredAuditLogs = auditLogs.filter((log) => {
    const matchesAction = auditActionFilter === 'all' || log.actionType === auditActionFilter;
    const matchesActor =
      log.actor.toLowerCase().includes(auditActorSearch.toLowerCase()) ||
      log.actorEmail.toLowerCase().includes(auditActorSearch.toLowerCase());
    return matchesAction && matchesActor;
  });

  const getActionIcon = (actionType: string) => {
    switch (actionType) {
      case 'invite':
        return <UserPlus className="w-4 h-4" />;
      case 'remove':
        return <UserMinus className="w-4 h-4" />;
      case 'role':
        return <Shield className="w-4 h-4" />;
      case 'settings':
        return <SettingsIcon className="w-4 h-4" />;
      case 'content':
        return <FileText className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getActionColor = (actionType: string) => {
    switch (actionType) {
      case 'invite':
        return 'bg-[#dcfce7] text-[#16a34a]';
      case 'remove':
        return 'bg-[#fef2f2] text-[#dc2626]';
      case 'role':
        return 'bg-[#eff6ff] text-[#3b82f6]';
      case 'settings':
        return 'bg-[#f5f3ff] text-[#8b5cf6]';
      case 'content':
        return 'bg-[#fef3c7] text-[#f59e0b]';
      default:
        return 'bg-[#f5f5f5] text-[#666666]';
    }
  };

  const activeFiltersCount = auditActionFilter !== 'all' ? 1 : 0;

  return (
    <div className="space-y-3">{/* No header - TeamSettingsMobile provides it */}
      {/* Filter Button at top */}
      <div className="px-4 pt-4">
        <button
          onClick={() => setShowFilters(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white active:bg-[#f5f5f5] transition-colors"
          style={{ fontSize: '14px', fontWeight: '600' }}
        >
          <Filter className="w-4 h-4 text-[#666666]" />
          <span className="text-[#666666]">Filter Actions</span>
          {activeFiltersCount > 0 && (
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#3b82f6] text-white" style={{ fontSize: '11px', fontWeight: '700' }}>
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
          <input
            type="text"
            placeholder="Search by actor..."
            value={auditActorSearch}
            onChange={(e) => setAuditActorSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:border-[#3b82f6] transition-colors"
            style={{ fontSize: '14px' }}
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="px-4">{/* Content area */}
        {filteredAuditLogs.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-[#d0d0d0] mx-auto mb-3" />
            <p className="text-[#999999]" style={{ fontSize: '14px' }}>
              No audit logs found
            </p>
          </div>
        ) : (
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#e0e0e0]" />

            {/* Timeline Items */}
            <div className="space-y-4">
              {filteredAuditLogs.map((log, index) => (
                <div key={log.id} className="relative pl-12">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-3 top-3 w-5 h-5 rounded-full flex items-center justify-center ${getActionColor(
                      log.actionType
                    )}`}
                  >
                    {getActionIcon(log.actionType)}
                  </div>

                  {/* Log Card */}
                  <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
                    {/* Actor */}
                    <div className="mb-2">
                      <span className="text-[#1a1a1a]" style={{ fontSize: '15px', fontWeight: '600' }}>
                        {log.actor}
                      </span>
                      <span className="text-[#999999] ml-1" style={{ fontSize: '13px' }}>
                        ({log.actorEmail})
                      </span>
                    </div>

                    {/* Action */}
                    <div className="mb-2">
                      <span className="text-[#666666]" style={{ fontSize: '14px' }}>
                        {log.action}
                      </span>
                    </div>

                    {/* Target */}
                    <div className="inline-flex px-2.5 py-1 rounded-lg bg-[#f5f5f5] mb-3">
                      <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                        {log.target}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-[#999999]" style={{ fontSize: '12px' }}>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{log.timestamp}</span>
                      </div>
                      {log.ip && (
                        <>
                          <span>•</span>
                          <span style={{ fontFamily: 'monospace' }}>{log.ip}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Load More Placeholder */}
        {filteredAuditLogs.length > 0 && (
          <div className="text-center py-6">
            <button
              className="px-4 py-2 rounded-lg border border-[#e0e0e0] bg-white text-[#666666] active:bg-[#f5f5f5] transition-colors"
              style={{ fontSize: '13px', fontWeight: '600' }}
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white rounded-t-2xl w-full">
            <div className="p-4 border-b border-[#e0e0e0] flex items-center justify-between">
              <h3 className="text-[#1a1a1a]" style={{ fontSize: '17px', fontWeight: '700' }}>
                Filter Actions
              </h3>
              <button onClick={() => setShowFilters(false)} className="p-2 rounded-lg hover:bg-[#f5f5f5]">
                <X className="w-5 h-5 text-[#666666]" />
              </button>
            </div>
            <div className="p-4 space-y-2">
              {[
                { value: 'all', label: 'All Actions' },
                { value: 'invite', label: 'Member Invites', icon: <UserPlus className="w-4 h-4" /> },
                { value: 'remove', label: 'Member Removals', icon: <UserMinus className="w-4 h-4" /> },
                { value: 'role', label: 'Role Changes', icon: <Shield className="w-4 h-4" /> },
                { value: 'settings', label: 'Settings Changes', icon: <SettingsIcon className="w-4 h-4" /> },
                { value: 'content', label: 'Content Updates', icon: <FileText className="w-4 h-4" /> },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setAuditActionFilter(filter.value)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border transition-colors ${
                    auditActionFilter === filter.value
                      ? 'border-[#3b82f6] bg-[#eff6ff]'
                      : 'border-[#e0e0e0] bg-white active:bg-[#f5f5f5]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {filter.icon && (
                      <span className={auditActionFilter === filter.value ? 'text-[#3b82f6]' : 'text-[#666666]'}>
                        {filter.icon}
                      </span>
                    )}
                    <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                      {filter.label}
                    </span>
                  </div>
                  {auditActionFilter === filter.value && (
                    <div className="w-5 h-5 rounded-full bg-[#3b82f6] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className="p-4 border-t border-[#e0e0e0] space-y-2">
              <button
                onClick={() => setAuditActionFilter('all')}
                className="w-full px-4 py-3 rounded-lg bg-[#f5f5f5] text-[#1a1a1a] active:bg-[#e0e0e0] transition-colors"
                style={{ fontSize: '15px', fontWeight: '600' }}
              >
                Clear Filter
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="w-full px-4 py-3 rounded-lg bg-[#3b82f6] text-white active:bg-[#2563eb] transition-colors"
                style={{ fontSize: '15px', fontWeight: '600' }}
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
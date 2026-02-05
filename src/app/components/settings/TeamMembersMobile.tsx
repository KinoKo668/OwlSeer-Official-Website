import React from 'react';
import {
  ArrowLeft,
  UserPlus,
  Users,
  Search,
  MoreVertical,
  Crown,
  Mail,
  X,
  ChevronDown,
} from 'lucide-react';

type TeamMember = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'Owner' | 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Invited' | 'Suspended';
  lastActive: string;
  joined: string;
};

interface TeamMembersMobileProps {
  onBack: () => void;
}

export function TeamMembersMobile({ onBack }: TeamMembersMobileProps) {
  const [showInviteModal, setShowInviteModal] = React.useState(false);
  const [showMemberMenu, setShowMemberMenu] = React.useState<string | null>(null);
  const [showRoleSelector, setShowRoleSelector] = React.useState<string | null>(null);
  const [showFilters, setShowFilters] = React.useState(false);
  const [memberSearch, setMemberSearch] = React.useState('');
  const [roleFilter, setRoleFilter] = React.useState<string>('all');
  const [statusFilter, setStatusFilter] = React.useState<string>('all');

  // Members data
  const [members, setMembers] = React.useState<TeamMember[]>([
    {
      id: '1',
      name: 'Sarah Chen',
      email: 'sarah.chen@email.com',
      role: 'Owner',
      status: 'Active',
      lastActive: '2 min ago',
      joined: 'Jan 2024',
    },
    {
      id: '2',
      name: 'Alex Morgan',
      email: 'alex.m@email.com',
      role: 'Admin',
      status: 'Active',
      lastActive: '1 hour ago',
      joined: 'Mar 2024',
    },
    {
      id: '3',
      name: 'Jordan Lee',
      email: 'jordan.lee@email.com',
      role: 'Editor',
      status: 'Active',
      lastActive: '3 hours ago',
      joined: 'Apr 2024',
    },
    {
      id: '4',
      name: 'Taylor Kim',
      email: 'taylor.k@email.com',
      role: 'Viewer',
      status: 'Active',
      lastActive: 'Yesterday',
      joined: 'May 2024',
    },
    {
      id: '5',
      name: 'Casey Park',
      email: 'casey.p@email.com',
      role: 'Editor',
      status: 'Invited',
      lastActive: 'Never',
      joined: 'Pending',
    },
  ]);

  // Invite modal state
  const [inviteEmails, setInviteEmails] = React.useState('');
  const [inviteRole, setInviteRole] = React.useState<'Admin' | 'Editor' | 'Viewer'>('Editor');

  const handleRoleChange = (memberId: string, newRole: string) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === memberId ? { ...m, role: newRole as any } : m))
    );
    setShowRoleSelector(null);
    alert('Role updated successfully');
  };

  const handleResendInvite = (email: string) => {
    alert(`Invite resent to ${email}`);
    setShowMemberMenu(null);
  };

  const handleDeactivate = (memberId: string) => {
    if (confirm('Deactivate this member?')) {
      setMembers((prev) =>
        prev.map((m) => (m.id === memberId ? { ...m, status: 'Suspended' as const } : m))
      );
      setShowMemberMenu(null);
    }
  };

  const handleRemove = (memberId: string) => {
    if (confirm('Remove this member from the team?')) {
      setMembers((prev) => prev.filter((m) => m.id !== memberId));
      setShowMemberMenu(null);
    }
  };

  const handleSendInvites = () => {
    const emails = inviteEmails
      .split(/[\n,]/)
      .map((e) => e.trim())
      .filter((e) => e);

    if (emails.length === 0) {
      alert('Please enter at least one email address');
      return;
    }

    alert(`${emails.length} invite(s) sent successfully`);
    setShowInviteModal(false);
    setInviteEmails('');
  };

  // Filtered members
  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(memberSearch.toLowerCase()) ||
      member.email.toLowerCase().includes(memberSearch.toLowerCase());
    const matchesRole = roleFilter === 'all' || member.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const activeFiltersCount = (roleFilter !== 'all' ? 1 : 0) + (statusFilter !== 'all' ? 1 : 0);

  return (
    <>
      {/* Action Bar */}
      <div className="bg-white border-b border-[#e0e0e0] px-4 py-3">
        <button
          onClick={() => setShowInviteModal(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1a1a1a] text-white active:bg-[#000000] transition-colors"
          style={{ fontSize: '14px', fontWeight: '600' }}
        >
          <UserPlus className="w-4 h-4" />
          <span>Invite Members</span>
        </button>
      </div>

      {/* Search & Filters */}
      <div className="bg-white border-b border-[#e0e0e0] px-4 py-3 space-y-3">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
          <input
            type="text"
            placeholder="Search members..."
            value={memberSearch}
            onChange={(e) => setMemberSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:border-[#3b82f6] transition-colors"
            style={{ fontSize: '14px' }}
          />
        </div>

        {/* Filter Button */}
        <button
          onClick={() => setShowFilters(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#e0e0e0] bg-white active:bg-[#f5f5f5] transition-colors"
          style={{ fontSize: '13px', fontWeight: '600' }}
        >
          <span className="text-[#666666]">Filters</span>
          {activeFiltersCount > 0 && (
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#3b82f6] text-white" style={{ fontSize: '11px', fontWeight: '700' }}>
              {activeFiltersCount}
            </span>
          )}
          <ChevronDown className="w-4 h-4 text-[#999999]" />
        </button>
      </div>

      {/* Members List */}
      <div className="px-4 py-4 space-y-3">{/* No header - TeamSettingsMobile provides it */}
        {filteredMembers.length === 0 ? (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-[#d0d0d0] mx-auto mb-3" />
            <p className="text-[#999999]" style={{ fontSize: '14px' }}>
              No members found
            </p>
          </div>
        ) : (
          filteredMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl border border-[#e0e0e0] p-4">
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0] flex items-center justify-center flex-shrink-0">
                  {member.avatar ? (
                    <img src={member.avatar} alt={member.name} loading="lazy" decoding="async" className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <Users className="w-6 h-6 text-[#999999]" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#1a1a1a] truncate" style={{ fontSize: '15px', fontWeight: '600' }}>
                      {member.name}
                    </span>
                    {member.role === 'Owner' && <Crown className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />}
                  </div>
                  <div className="text-[#666666] truncate mb-2" style={{ fontSize: '13px' }}>
                    {member.email}
                  </div>

                  {/* Role Selector */}
                  {member.role === 'Owner' ? (
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#fef3c7] text-[#f59e0b]" style={{ fontSize: '12px', fontWeight: '600' }}>
                      Owner
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowRoleSelector(showRoleSelector === member.id ? null : member.id)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f5f5f5] text-[#1a1a1a] active:bg-[#e0e0e0] transition-colors"
                      style={{ fontSize: '12px', fontWeight: '600' }}
                    >
                      {member.role}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  )}

                  {/* Role Dropdown */}
                  {showRoleSelector === member.id && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setShowRoleSelector(null)} />
                      <div className="absolute mt-1 bg-white border border-[#e0e0e0] rounded-lg shadow-lg py-1 z-20 min-w-[120px]">
                        <button
                          onClick={() => handleRoleChange(member.id, 'Admin')}
                          className="w-full px-4 py-2 text-left hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                          style={{ fontSize: '13px', fontWeight: '600' }}
                        >
                          Admin
                        </button>
                        <button
                          onClick={() => handleRoleChange(member.id, 'Editor')}
                          className="w-full px-4 py-2 text-left hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                          style={{ fontSize: '13px', fontWeight: '600' }}
                        >
                          Editor
                        </button>
                        <button
                          onClick={() => handleRoleChange(member.id, 'Viewer')}
                          className="w-full px-4 py-2 text-left hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                          style={{ fontSize: '13px', fontWeight: '600' }}
                        >
                          Viewer
                        </button>
                      </div>
                    </>
                  )}

                  {/* Status & Activity */}
                  <div className="flex items-center gap-2 mt-2">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded-full ${
                        member.status === 'Active'
                          ? 'bg-[#dcfce7] text-[#16a34a]'
                          : member.status === 'Invited'
                          ? 'bg-[#fef3c7] text-[#f59e0b]'
                          : 'bg-[#f5f5f5] text-[#666666]'
                      }`}
                      style={{ fontSize: '11px', fontWeight: '600' }}
                    >
                      {member.status}
                    </span>
                    <span className="text-[#999999]" style={{ fontSize: '11px' }}>
                      • {member.lastActive}
                    </span>
                  </div>
                </div>

                {/* Actions Menu */}
                {member.role !== 'Owner' && (
                  <div className="relative">
                    <button
                      onClick={() => setShowMemberMenu(showMemberMenu === member.id ? null : member.id)}
                      className="p-2 rounded-lg hover:bg-[#f5f5f5] active:bg-[#e0e0e0] transition-colors"
                    >
                      <MoreVertical className="w-4 h-4 text-[#666666]" />
                    </button>

                    {showMemberMenu === member.id && (
                      <>
                        <div className="fixed inset-0 z-10" onClick={() => setShowMemberMenu(null)} />
                        <div className="absolute right-0 top-full mt-1 bg-white border border-[#e0e0e0] rounded-lg shadow-lg py-1 z-20 min-w-[180px]">
                          {member.status === 'Invited' && (
                            <button
                              onClick={() => handleResendInvite(member.email)}
                              className="w-full px-4 py-2.5 text-left hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                              style={{ fontSize: '13px', fontWeight: '500' }}
                            >
                              Resend Invite
                            </button>
                          )}
                          {member.status === 'Active' && (
                            <button
                              onClick={() => handleDeactivate(member.id)}
                              className="w-full px-4 py-2.5 text-left hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                              style={{ fontSize: '13px', fontWeight: '500' }}
                            >
                              Deactivate Member
                            </button>
                          )}
                          <button
                            onClick={() => handleRemove(member.id)}
                            className="w-full px-4 py-2.5 text-left hover:bg-[#fef2f2] transition-colors text-[#dc2626]"
                            style={{ fontSize: '13px', fontWeight: '500' }}
                          >
                            Remove from Team
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white rounded-t-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b border-[#e0e0e0] flex items-center justify-between">
              <h3 className="text-[#1a1a1a]" style={{ fontSize: '17px', fontWeight: '700' }}>
                Invite Members
              </h3>
              <button onClick={() => setShowInviteModal(false)} className="p-2 rounded-lg hover:bg-[#f5f5f5]">
                <X className="w-5 h-5 text-[#666666]" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {/* Email Input */}
              <div>
                <label className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-[#666666]" />
                  <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                    Email Addresses
                  </span>
                </label>
                <textarea
                  value={inviteEmails}
                  onChange={(e) => setInviteEmails(e.target.value)}
                  placeholder="Enter email addresses (one per line or comma separated)"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                  style={{ fontSize: '14px' }}
                />
              </div>

              {/* Role Selector */}
              <div>
                <label className="block mb-2 text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                  Role
                </label>
                <div className="space-y-2">
                  {(['Admin', 'Editor', 'Viewer'] as const).map((role) => (
                    <button
                      key={role}
                      onClick={() => setInviteRole(role)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border transition-colors ${
                        inviteRole === role
                          ? 'border-[#3b82f6] bg-[#eff6ff]'
                          : 'border-[#e0e0e0] bg-white active:bg-[#f5f5f5]'
                      }`}
                    >
                      <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                        {role}
                      </span>
                      {inviteRole === role && (
                        <div className="w-5 h-5 rounded-full bg-[#3b82f6] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-[#e0e0e0] space-y-2">
              <button
                onClick={handleSendInvites}
                className="w-full px-4 py-3 rounded-lg bg-[#3b82f6] text-white active:bg-[#2563eb] transition-colors"
                style={{ fontSize: '15px', fontWeight: '600' }}
              >
                Send Invites
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white rounded-t-2xl w-full">
            <div className="p-4 border-b border-[#e0e0e0] flex items-center justify-between">
              <h3 className="text-[#1a1a1a]" style={{ fontSize: '17px', fontWeight: '700' }}>
                Filters
              </h3>
              <button onClick={() => setShowFilters(false)} className="p-2 rounded-lg hover:bg-[#f5f5f5]">
                <X className="w-5 h-5 text-[#666666]" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {/* Role Filter */}
              <div>
                <label className="block mb-2 text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                  Role
                </label>
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#3b82f6]"
                  style={{ fontSize: '14px' }}
                >
                  <option value="all">All Roles</option>
                  <option value="Owner">Owner</option>
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block mb-2 text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                  Status
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#3b82f6]"
                  style={{ fontSize: '14px' }}
                >
                  <option value="all">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Invited">Invited</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
            </div>
            <div className="p-4 border-t border-[#e0e0e0] space-y-2">
              <button
                onClick={() => {
                  setRoleFilter('all');
                  setStatusFilter('all');
                }}
                className="w-full px-4 py-3 rounded-lg bg-[#f5f5f5] text-[#1a1a1a] active:bg-[#e0e0e0] transition-colors"
                style={{ fontSize: '15px', fontWeight: '600' }}
              >
                Clear Filters
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="w-full px-4 py-3 rounded-lg bg-[#3b82f6] text-white active:bg-[#2563eb] transition-colors"
                style={{ fontSize: '15px', fontWeight: '600' }}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
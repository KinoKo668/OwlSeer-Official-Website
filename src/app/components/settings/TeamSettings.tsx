import React from 'react';
import {
  Users,
  UserPlus,
  Shield,
  Lock,
  FileText,
  Copy,
  Check,
  MoreVertical,
  Search,
  X,
  Upload,
  Crown,
  AlertCircle,
  Mail,
  Link as LinkIcon,
  Clock,
  Key,
  Globe,
  LogOut,
  ChevronDown,
  Settings,
} from 'lucide-react';
import { Card, CardContent } from '../Card';
import { useIsMobile } from '../ui/use-mobile';
import { TeamSettingsMobile } from './TeamSettingsMobile';

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

type PendingInvite = {
  id: string;
  email: string;
  role: 'Owner' | 'Admin' | 'Editor' | 'Viewer';
  invitedAt: string;
  expiresAt: string;
  invitedBy: string;
};

type AuditLogEntry = {
  id: string;
  actor: string;
  actorEmail: string;
  action: string;
  target: string;
  timestamp: string;
  ip?: string;
};

export function TeamSettings() {
  const isMobile = useIsMobile();
  
  // All hooks must be called before any conditional returns
  // Desktop version state
  const [activeSubSection, setActiveSubSection] = React.useState<'overview' | 'members' | 'invites' | 'roles' | 'security' | 'audit'>('overview');
  const [showInviteModal, setShowInviteModal] = React.useState(false);
  const [showTransferOwnershipModal, setShowTransferOwnershipModal] = React.useState(false);
  const [showRemoveMemberModal, setShowRemoveMemberModal] = React.useState(false);
  const [showDeactivateMemberModal, setShowDeactivateMemberModal] = React.useState(false);
  const [showRevokeInviteModal, setShowRevokeInviteModal] = React.useState(false);
  const [showSignOutAllModal, setShowSignOutAllModal] = React.useState(false);
  const [selectedMember, setSelectedMember] = React.useState<TeamMember | null>(null);
  const [selectedInvite, setSelectedInvite] = React.useState<PendingInvite | null>(null);
  
  // Team overview state
  const [teamName, setTeamName] = React.useState('TechCreator Studio');
  const [teamLogo, setTeamLogo] = React.useState<string | null>(null);
  const [workspaceId] = React.useState('ws_7x9k2m4n8p1q');
  const [copiedWorkspaceId, setCopiedWorkspaceId] = React.useState(false);
  const logoInputRef = React.useRef<HTMLInputElement>(null);
  const copyWorkspaceTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const copyInviteTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Owner info
  const owner = {
    name: 'Sarah Chen',
    email: 'sarah.chen@email.com',
    avatar: null,
  };

  // Current user (for permission checks)
  const currentUserRole = 'Owner'; // In production, this would come from auth context

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

  // Pending invites
  const [pendingInvites, setPendingInvites] = React.useState<PendingInvite[]>([
    {
      id: 'inv1',
      email: 'casey.p@email.com',
      role: 'Editor',
      invitedAt: '2 days ago',
      expiresAt: 'In 5 days',
      invitedBy: 'Sarah Chen',
    },
    {
      id: 'inv2',
      email: 'sam.rivera@email.com',
      role: 'Viewer',
      invitedAt: '5 days ago',
      expiresAt: 'In 2 days',
      invitedBy: 'Alex Morgan',
    },
  ]);

  // Audit log
  const [auditLogs] = React.useState<AuditLogEntry[]>([
    {
      id: 'log1',
      actor: 'Sarah Chen',
      actorEmail: 'sarah.chen@email.com',
      action: 'Updated member role',
      target: 'Alex Morgan → Admin',
      timestamp: '2 hours ago',
      ip: '192.168.1.1',
    },
    {
      id: 'log2',
      actor: 'Alex Morgan',
      actorEmail: 'alex.m@email.com',
      action: 'Invited member',
      target: 'sam.rivera@email.com',
      timestamp: '5 days ago',
      ip: '192.168.1.2',
    },
    {
      id: 'log3',
      actor: 'Sarah Chen',
      actorEmail: 'sarah.chen@email.com',
      action: 'Invited member',
      target: 'casey.p@email.com',
      timestamp: '2 days ago',
      ip: '192.168.1.1',
    },
    {
      id: 'log4',
      actor: 'Jordan Lee',
      actorEmail: 'jordan.lee@email.com',
      action: 'Updated content',
      target: 'Video #128',
      timestamp: '1 day ago',
      ip: '192.168.1.3',
    },
  ]);

  // Invite modal state
  const [inviteEmails, setInviteEmails] = React.useState('');
  const [inviteRole, setInviteRole] = React.useState<'Admin' | 'Editor' | 'Viewer'>('Editor');
  const [inviteMessage, setInviteMessage] = React.useState('');
  const [useInviteLink, setUseInviteLink] = React.useState(false);
  const [inviteLink] = React.useState('https://owlseer.app/invite/ws_7x9k2m4n8p1q');
  const [copiedInviteLink, setCopiedInviteLink] = React.useState(false);

  // Security settings
  const [require2FA, setRequire2FA] = React.useState(false);
  const [allowedDomains, setAllowedDomains] = React.useState<string[]>(['email.com']);
  const [newDomain, setNewDomain] = React.useState('');

  // Search and filters
  const [memberSearch, setMemberSearch] = React.useState('');
  const [roleFilter, setRoleFilter] = React.useState<string>('all');
  const [statusFilter, setStatusFilter] = React.useState<string>('all');
  const [auditActionFilter, setAuditActionFilter] = React.useState<string>('all');
  const [auditActorSearch, setAuditActorSearch] = React.useState('');

  // Open member menu
  const [openMenuId, setOpenMenuId] = React.useState<string | null>(null);

  const handleLogoClick = () => {
    logoInputRef.current?.click();
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setTeamLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const copyWorkspaceId = () => {
    navigator.clipboard.writeText(workspaceId);
    setCopiedWorkspaceId(true);
    // Clear existing timeout if any
    if (copyWorkspaceTimeoutRef.current) {
      clearTimeout(copyWorkspaceTimeoutRef.current);
    }
    copyWorkspaceTimeoutRef.current = setTimeout(() => setCopiedWorkspaceId(false), 2000);
  };

  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopiedInviteLink(true);
    // Clear existing timeout if any
    if (copyInviteTimeoutRef.current) {
      clearTimeout(copyInviteTimeoutRef.current);
    }
    copyInviteTimeoutRef.current = setTimeout(() => setCopiedInviteLink(false), 2000);
  };

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    return () => {
      if (copyWorkspaceTimeoutRef.current) {
        clearTimeout(copyWorkspaceTimeoutRef.current);
      }
      if (copyInviteTimeoutRef.current) {
        clearTimeout(copyInviteTimeoutRef.current);
      }
    };
  }, []);

  const handleRoleChange = (memberId: string, newRole: string) => {
    setMembers(prev =>
      prev.map(m => m.id === memberId ? { ...m, role: newRole as any } : m)
    );
    // Show toast notification
    alert('Role updated');
  };

  const handleRemoveMember = () => {
    if (selectedMember) {
      setMembers(prev => prev.filter(m => m.id !== selectedMember.id));
      setShowRemoveMemberModal(false);
      setSelectedMember(null);
    }
  };

  const handleDeactivateMember = () => {
    if (selectedMember) {
      setMembers(prev =>
        prev.map(m => m.id === selectedMember.id ? { ...m, status: 'Suspended' as const } : m)
      );
      setShowDeactivateMemberModal(false);
      setSelectedMember(null);
    }
  };

  const handleResendInvite = (email: string) => {
    alert(`Invite resent to ${email}`);
  };

  const handleRevokeInvite = () => {
    if (selectedInvite) {
      setPendingInvites(prev => prev.filter(i => i.id !== selectedInvite.id));
      setShowRevokeInviteModal(false);
      setSelectedInvite(null);
    }
  };

  const handleSendInvites = () => {
    // Parse emails
    const emails = inviteEmails
      .split(/[\n,]/)
      .map(e => e.trim())
      .filter(e => e);
    
    if (emails.length === 0) {
      alert('Please enter at least one email address');
      return;
    }

    // Add to pending invites
    const newInvites: PendingInvite[] = emails.map((email, idx) => ({
      id: `inv_${Date.now()}_${idx}`,
      email,
      role: inviteRole,
      invitedAt: 'Just now',
      expiresAt: 'In 7 days',
      invitedBy: owner.name,
    }));

    setPendingInvites(prev => [...newInvites, ...prev]);
    setShowInviteModal(false);
    setInviteEmails('');
    setInviteMessage('');
    alert(`${emails.length} invite(s) sent successfully`);
  };

  const addDomain = () => {
    if (newDomain && !allowedDomains.includes(newDomain)) {
      setAllowedDomains(prev => [...prev, newDomain]);
      setNewDomain('');
    }
  };

  const removeDomain = (domain: string) => {
    setAllowedDomains(prev => prev.filter(d => d !== domain));
  };

  // Filtered members
  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(memberSearch.toLowerCase()) ||
                         member.email.toLowerCase().includes(memberSearch.toLowerCase());
    const matchesRole = roleFilter === 'all' || member.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Filtered audit logs
  const filteredAuditLogs = auditLogs.filter(log => {
    const matchesAction = auditActionFilter === 'all' || log.action.includes(auditActionFilter);
    const matchesActor = log.actor.toLowerCase().includes(auditActorSearch.toLowerCase()) ||
                        log.actorEmail.toLowerCase().includes(auditActorSearch.toLowerCase());
    return matchesAction && matchesActor;
  });

  const rolePermissions = {
    Owner: {
      description: 'Full control over workspace, team, and billing',
      permissions: ['Full access to all features', 'Manage team members and roles', 'Transfer ownership', 'Delete workspace', 'Manage billing and subscription'],
    },
    Admin: {
      description: 'Manage team and content, cannot change billing',
      permissions: ['Manage all content', 'Invite and remove members', 'Change member roles (except Owner)', 'Configure AI settings', 'View audit logs'],
    },
    Editor: {
      description: 'Create and edit content, limited team access',
      permissions: ['Create and edit content', 'Schedule posts', 'Use AI features', 'View team members', 'Cannot manage team or settings'],
    },
    Viewer: {
      description: 'Read-only access to content and analytics',
      permissions: ['View content and analytics', 'View schedules', 'Cannot edit or create content', 'Cannot access settings', 'Cannot see billing'],
    },
  };

  const subSections = [
    { id: 'overview', label: 'Team Overview', icon: <Settings className="w-4 h-4" /> },
    { id: 'members', label: 'Members', icon: <Users className="w-4 h-4" /> },
    { id: 'invites', label: 'Pending Invites', icon: <UserPlus className="w-4 h-4" /> },
    { id: 'roles', label: 'Roles & Permissions', icon: <Shield className="w-4 h-4" /> },
    { id: 'security', label: 'Security', icon: <Lock className="w-4 h-4" /> },
    { id: 'audit', label: 'Audit Log', icon: <FileText className="w-4 h-4" /> },
  ];

  // If mobile, render mobile version (after all hooks are called)
  if (isMobile) {
    return <TeamSettingsMobile />;
  }

  // Desktop version
  return (
    <div className="flex h-full">
      {/* Left Sidebar Navigation */}
      <div className="w-64 bg-white border-r border-[#e0e0e0] flex-shrink-0 overflow-y-auto">
        <div className="p-4 space-y-1">
          {subSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSubSection(section.id as any)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left ${
                activeSubSection === section.id
                  ? 'bg-[#f5f5f5] text-[#1a1a1a]'
                  : 'text-[#666666] hover:bg-[#fafafa] hover:text-[#1a1a1a]'
              }`}
              style={{ fontSize: '14px', fontWeight: activeSubSection === section.id ? '600' : '500' }}
            >
              <span className={activeSubSection === section.id ? 'text-[#1a1a1a]' : 'text-[#999999]'}>
                {section.icon}
              </span>
              <span>{section.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 md:py-8">
          {/* TEAM OVERVIEW */}
          {activeSubSection === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '20px', fontWeight: '700' }}>
                  Team Overview
                </h2>
                <p className="text-[#666666]" style={{ fontSize: '14px' }}>
                  Manage your team profile and workspace settings
                </p>
              </div>

              <Card>
                <CardContent className="space-y-6">
                  {/* Team Name */}
                  <div>
                    <label className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-[#666666]" />
                      <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                        Team Name
                      </span>
                    </label>
                    <input
                      type="text"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors"
                      style={{ fontSize: '14px' }}
                    />
                  </div>

                  {/* Team Logo */}
                  <div>
                    <label className="flex items-center gap-2 mb-3">
                      <Upload className="w-4 h-4 text-[#666666]" />
                      <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                        Team Logo
                      </span>
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="relative group">
                        <div className="w-20 h-20 rounded-lg bg-[#f5f5f5] border-2 border-[#e0e0e0] overflow-hidden flex items-center justify-center">
                          {teamLogo ? (
                            <img src={teamLogo} alt="Team Logo" className="w-full h-full object-cover" />
                          ) : (
                            <Users className="w-10 h-10 text-[#999999]" />
                          )}
                        </div>
                        <div
                          onClick={handleLogoClick}
                          className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center"
                        >
                          <Upload className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <button
                            onClick={handleLogoClick}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                            style={{ fontSize: '13px', fontWeight: '600' }}
                          >
                            <Upload className="w-4 h-4" />
                            <span>{teamLogo ? 'Change Logo' : 'Upload Logo'}</span>
                          </button>
                          {teamLogo && (
                            <button
                              onClick={() => setTeamLogo(null)}
                              className="px-4 py-2 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#fef2f2] hover:border-[#dc2626] hover:text-[#dc2626] transition-colors text-[#666666]"
                              style={{ fontSize: '13px', fontWeight: '600' }}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        <p className="text-[#999999]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                          JPG, PNG or SVG. Max size 2MB. Recommended: 200x200px
                        </p>
                      </div>
                      <input
                        ref={logoInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="hidden"
                      />
                    </div>
                  </div>

                  <div className="border-t border-[#e0e0e0]" />

                  {/* Workspace ID */}
                  <div>
                    <label className="flex items-center gap-2 mb-2">
                      <Key className="w-4 h-4 text-[#666666]" />
                      <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                        Workspace ID
                      </span>
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={workspaceId}
                        readOnly
                        className="flex-1 px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-[#fafafa] text-[#666666] cursor-not-allowed"
                        style={{ fontSize: '14px', fontFamily: 'monospace' }}
                      />
                      <button
                        onClick={copyWorkspaceId}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                        style={{ fontSize: '13px', fontWeight: '600' }}
                      >
                        {copiedWorkspaceId ? (
                          <>
                            <Check className="w-4 h-4 text-green-600" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-[#999999] mt-1" style={{ fontSize: '12px' }}>
                      Read-only identifier for API and integrations
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Owner Section */}
              <Card>
                <CardContent>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Crown className="w-5 h-5 text-[#f59e0b]" />
                        <h3 className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700' }}>
                          Workspace Owner
                        </h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0] flex items-center justify-center">
                          {owner.avatar ? (
                            <img src={owner.avatar} alt={owner.name} className="w-full h-full object-cover rounded-lg" />
                          ) : (
                            <Users className="w-6 h-6 text-[#999999]" />
                          )}
                        </div>
                        <div>
                          <div className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                            {owner.name}
                          </div>
                          <div className="text-[#666666]" style={{ fontSize: '13px' }}>
                            {owner.email}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative group">
                      <button
                        onClick={() => currentUserRole === 'Owner' && setShowTransferOwnershipModal(true)}
                        disabled={currentUserRole !== 'Owner'}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          currentUserRole === 'Owner'
                            ? 'border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] text-[#1a1a1a]'
                            : 'border-[#e0e0e0] bg-[#fafafa] text-[#999999] cursor-not-allowed'
                        }`}
                        style={{ fontSize: '13px', fontWeight: '600' }}
                      >
                        Transfer Ownership
                      </button>
                      {currentUserRole !== 'Owner' && (
                        <div className="absolute bottom-full mb-2 right-0 bg-[#1a1a1a] text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                          Only the current owner can transfer ownership
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* MEMBERS */}
          {activeSubSection === 'members' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '20px', fontWeight: '700' }}>
                    Team Members
                  </h2>
                  <p className="text-[#666666]" style={{ fontSize: '14px' }}>
                    Manage your team members and their roles
                  </p>
                </div>
                <button
                  onClick={() => setShowInviteModal(true)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1a1a1a] text-white hover:bg-[#000000] transition-colors"
                  style={{ fontSize: '14px', fontWeight: '600' }}
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Invite Members</span>
                </button>
              </div>

              {/* Filters */}
              <Card>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                      <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={memberSearch}
                        onChange={(e) => setMemberSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors"
                        style={{ fontSize: '14px' }}
                      />
                    </div>
                    <select
                      value={roleFilter}
                      onChange={(e) => setRoleFilter(e.target.value)}
                      className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors"
                      style={{ fontSize: '14px' }}
                    >
                      <option value="all">All Roles</option>
                      <option value="Owner">Owner</option>
                      <option value="Admin">Admin</option>
                      <option value="Editor">Editor</option>
                      <option value="Viewer">Viewer</option>
                    </select>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors"
                      style={{ fontSize: '14px' }}
                    >
                      <option value="all">All Status</option>
                      <option value="Active">Active</option>
                      <option value="Invited">Invited</option>
                      <option value="Suspended">Suspended</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              {/* Members Table */}
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#e0e0e0]">
                          <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Member
                          </th>
                          <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Role
                          </th>
                          <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Status
                          </th>
                          <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Last Active
                          </th>
                          <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Joined
                          </th>
                          <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredMembers.map((member) => (
                          <tr key={member.id} className="border-b border-[#e0e0e0] hover:bg-[#fafafa] transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0] flex items-center justify-center">
                                  {member.avatar ? (
                                    <img src={member.avatar} alt={member.name} className="w-full h-full object-cover rounded-lg" />
                                  ) : (
                                    <Users className="w-5 h-5 text-[#999999]" />
                                  )}
                                </div>
                                <div>
                                  <div className="text-[#1a1a1a] flex items-center gap-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                                    {member.name}
                                    {member.role === 'Owner' && <Crown className="w-3.5 h-3.5 text-[#f59e0b]" />}
                                  </div>
                                  <div className="text-[#666666]" style={{ fontSize: '13px' }}>
                                    {member.email}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              {member.role === 'Owner' ? (
                                <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                                  Owner
                                </span>
                              ) : (
                                <select
                                  value={member.role}
                                  onChange={(e) => handleRoleChange(member.id, e.target.value)}
                                  className="px-3 py-1.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors"
                                  style={{ fontSize: '13px', fontWeight: '600' }}
                                >
                                  <option value="Admin">Admin</option>
                                  <option value="Editor">Editor</option>
                                  <option value="Viewer">Viewer</option>
                                </select>
                              )}
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`inline-flex px-2.5 py-1 rounded-full ${
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
                            </td>
                            <td className="px-6 py-4 text-[#666666]" style={{ fontSize: '13px' }}>
                              {member.lastActive}
                            </td>
                            <td className="px-6 py-4 text-[#666666]" style={{ fontSize: '13px' }}>
                              {member.joined}
                            </td>
                            <td className="px-6 py-4">
                              {member.role !== 'Owner' && (
                                <div className="relative">
                                  <button
                                    onClick={() => setOpenMenuId(openMenuId === member.id ? null : member.id)}
                                    className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors"
                                  >
                                    <MoreVertical className="w-4 h-4 text-[#666666]" />
                                  </button>
                                  {openMenuId === member.id && (
                                    <>
                                      <div
                                        className="fixed inset-0 z-10"
                                        onClick={() => setOpenMenuId(null)}
                                      />
                                      <div className="absolute right-0 top-full mt-1 bg-white border border-[#e0e0e0] rounded-lg shadow-lg py-1 z-20 min-w-[160px]">
                                        {member.status === 'Invited' && (
                                          <>
                                            <button
                                              onClick={() => {
                                                handleResendInvite(member.email);
                                                setOpenMenuId(null);
                                              }}
                                              className="w-full px-4 py-2 text-left hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                                              style={{ fontSize: '13px' }}
                                            >
                                              Resend invite
                                            </button>
                                            <button
                                              onClick={() => {
                                                copyInviteLink();
                                                setOpenMenuId(null);
                                              }}
                                              className="w-full px-4 py-2 text-left hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                                              style={{ fontSize: '13px' }}
                                            >
                                              Copy invite link
                                            </button>
                                          </>
                                        )}
                                        {member.status === 'Active' && (
                                          <button
                                            onClick={() => {
                                              setSelectedMember(member);
                                              setShowDeactivateMemberModal(true);
                                              setOpenMenuId(null);
                                            }}
                                            className="w-full px-4 py-2 text-left hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                                            style={{ fontSize: '13px' }}
                                          >
                                            Deactivate
                                          </button>
                                        )}
                                        <div className="border-t border-[#e0e0e0] my-1" />
                                        <button
                                          onClick={() => {
                                            setSelectedMember(member);
                                            setShowRemoveMemberModal(true);
                                            setOpenMenuId(null);
                                          }}
                                          className="w-full px-4 py-2 text-left hover:bg-[#fef2f2] transition-colors text-[#dc2626]"
                                          style={{ fontSize: '13px' }}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </>
                                  )}
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* PENDING INVITES */}
          {activeSubSection === 'invites' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '20px', fontWeight: '700' }}>
                    Pending Invites
                  </h2>
                  <p className="text-[#666666]" style={{ fontSize: '14px' }}>
                    Manage invitations that haven't been accepted yet
                  </p>
                </div>
                <button
                  onClick={() => setShowInviteModal(true)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1a1a1a] text-white hover:bg-[#000000] transition-colors"
                  style={{ fontSize: '14px', fontWeight: '600' }}
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Send Invites</span>
                </button>
              </div>

              <Card>
                <CardContent className="p-0">
                  {pendingInvites.length === 0 ? (
                    <div className="px-6 py-12 text-center">
                      <Mail className="w-12 h-12 text-[#e0e0e0] mx-auto mb-3" />
                      <p className="text-[#666666]" style={{ fontSize: '14px' }}>
                        No pending invites
                      </p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-[#e0e0e0]">
                            <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                              Email
                            </th>
                            <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                              Role
                            </th>
                            <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                              Invited By
                            </th>
                            <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                              Invited
                            </th>
                            <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                              Expires
                            </th>
                            <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {pendingInvites.map((invite) => (
                            <tr key={invite.id} className="border-b border-[#e0e0e0] hover:bg-[#fafafa] transition-colors">
                              <td className="px-6 py-4 text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                                {invite.email}
                              </td>
                              <td className="px-6 py-4 text-[#666666]" style={{ fontSize: '13px' }}>
                                {invite.role}
                              </td>
                              <td className="px-6 py-4 text-[#666666]" style={{ fontSize: '13px' }}>
                                {invite.invitedBy}
                              </td>
                              <td className="px-6 py-4 text-[#666666]" style={{ fontSize: '13px' }}>
                                {invite.invitedAt}
                              </td>
                              <td className="px-6 py-4 text-[#666666]" style={{ fontSize: '13px' }}>
                                {invite.expiresAt}
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => handleResendInvite(invite.email)}
                                    className="px-3 py-1.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                                    style={{ fontSize: '12px', fontWeight: '600' }}
                                  >
                                    Resend
                                  </button>
                                  <button
                                    onClick={() => {
                                      setSelectedInvite(invite);
                                      setShowRevokeInviteModal(true);
                                    }}
                                    className="px-3 py-1.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#fef2f2] hover:border-[#dc2626] hover:text-[#dc2626] transition-colors text-[#666666]"
                                    style={{ fontSize: '12px', fontWeight: '600' }}
                                  >
                                    Revoke
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* ROLES & PERMISSIONS */}
          {activeSubSection === 'roles' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '20px', fontWeight: '700' }}>
                  Roles & Permissions
                </h2>
                <p className="text-[#666666]" style={{ fontSize: '14px' }}>
                  Understand what each role can do in your workspace
                </p>
              </div>

              {/* Info Banner */}
              <div className="p-4 rounded-lg bg-[#eff6ff] border border-[#bfdbfe]">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#1e40af] mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Principle of Least Privilege
                    </div>
                    <p className="text-[#1e40af]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                      Always assign the minimum level of access needed. Viewer role provides read-only access to content and analytics without editing capabilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Roles Grid */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(rolePermissions).map(([role, info]) => (
                  <Card key={role}>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-2">
                        {role === 'Owner' && <Crown className="w-5 h-5 text-[#f59e0b]" />}
                        {role === 'Admin' && <Shield className="w-5 h-5 text-[#3b82f6]" />}
                        {role === 'Editor' && <Users className="w-5 h-5 text-[#10b981]" />}
                        {role === 'Viewer' && <Users className="w-5 h-5 text-[#6b7280]" />}
                        <h3 className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700' }}>
                          {role}
                        </h3>
                      </div>
                      <p className="text-[#666666] mb-4" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                        {info.description}
                      </p>
                      <div className="space-y-2">
                        {info.permissions.map((permission, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                            <span className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                              {permission}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Permissions Matrix */}
              <Card>
                <CardContent>
                  <h3 className="text-[#1a1a1a] mb-4" style={{ fontSize: '16px', fontWeight: '700' }}>
                    Permissions Matrix
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#e0e0e0]">
                          <th className="text-left px-4 py-3 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Feature
                          </th>
                          <th className="text-center px-4 py-3 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Owner
                          </th>
                          <th className="text-center px-4 py-3 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Admin
                          </th>
                          <th className="text-center px-4 py-3 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Editor
                          </th>
                          <th className="text-center px-4 py-3 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Viewer
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { feature: 'Content Studio', owner: true, admin: true, editor: true, viewer: false },
                          { feature: 'Scheduling & Slots', owner: true, admin: true, editor: true, viewer: false },
                          { feature: 'Account Intelligence', owner: true, admin: true, editor: true, viewer: true },
                          { feature: 'Connected Accounts', owner: true, admin: true, editor: false, viewer: false },
                          { feature: 'Team Settings', owner: true, admin: true, editor: false, viewer: false },
                          { feature: 'Billing', owner: true, admin: false, editor: false, viewer: false },
                        ].map((row, idx) => (
                          <tr key={idx} className="border-b border-[#e0e0e0]">
                            <td className="px-4 py-3 text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                              {row.feature}
                            </td>
                            <td className="px-4 py-3 text-center">
                              {row.owner ? <Check className="w-4 h-4 text-[#10b981] mx-auto" /> : <X className="w-4 h-4 text-[#e0e0e0] mx-auto" />}
                            </td>
                            <td className="px-4 py-3 text-center">
                              {row.admin ? <Check className="w-4 h-4 text-[#10b981] mx-auto" /> : <X className="w-4 h-4 text-[#e0e0e0] mx-auto" />}
                            </td>
                            <td className="px-4 py-3 text-center">
                              {row.editor ? <Check className="w-4 h-4 text-[#10b981] mx-auto" /> : <X className="w-4 h-4 text-[#e0e0e0] mx-auto" />}
                            </td>
                            <td className="px-4 py-3 text-center">
                              {row.viewer ? <Check className="w-4 h-4 text-[#10b981] mx-auto" /> : <X className="w-4 h-4 text-[#e0e0e0] mx-auto" />}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* SECURITY */}
          {activeSubSection === 'security' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '20px', fontWeight: '700' }}>
                  Security Settings
                </h2>
                <p className="text-[#666666]" style={{ fontSize: '14px' }}>
                  Configure security policies for your workspace
                </p>
              </div>

              {/* 2FA Requirement */}
              <Card>
                <CardContent>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="w-5 h-5 text-[#666666]" />
                        <h3 className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700' }}>
                          Require Two-Factor Authentication
                        </h3>
                      </div>
                      <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                        Force all team members to enable 2FA for enhanced security. Members without 2FA will be prompted to set it up on next login.
                      </p>
                    </div>
                    <button
                      onClick={() => setRequire2FA(!require2FA)}
                      className={`relative flex-shrink-0 w-12 h-6 rounded-full transition-colors ml-4 ${
                        require2FA ? 'bg-[#1a1a1a]' : 'bg-[#e0e0e0]'
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          require2FA ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Allowed Email Domains */}
              <Card>
                <CardContent>
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-5 h-5 text-[#666666]" />
                    <h3 className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700' }}>
                      Allowed Email Domains
                    </h3>
                  </div>
                  <p className="text-[#666666] mb-4" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                    Restrict team invitations to specific email domains. Leave empty to allow all domains.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {allowedDomains.map((domain) => (
                      <div
                        key={domain}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0]"
                      >
                        <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                          {domain}
                        </span>
                        <button
                          onClick={() => removeDomain(domain)}
                          className="text-[#666666] hover:text-[#dc2626] transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={newDomain}
                      onChange={(e) => setNewDomain(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addDomain()}
                      placeholder="example.com"
                      className="flex-1 px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors"
                      style={{ fontSize: '14px' }}
                    />
                    <button
                      onClick={addDomain}
                      className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                      style={{ fontSize: '13px', fontWeight: '600' }}
                    >
                      Add Domain
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Sign Out All Sessions */}
              <Card>
                <CardContent>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <LogOut className="w-5 h-5 text-[#666666]" />
                        <h3 className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700' }}>
                          Sign Out All Sessions
                        </h3>
                      </div>
                      <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                        Force all team members to sign out from all devices and sessions. Use this if you suspect unauthorized access.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowSignOutAllModal(true)}
                      className="flex-shrink-0 px-4 py-2 rounded-lg border border-[#dc2626] bg-white hover:bg-[#fef2f2] transition-colors text-[#dc2626] ml-4"
                      style={{ fontSize: '13px', fontWeight: '600' }}
                    >
                      Sign Out All
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* SSO/SCIM Enterprise Feature */}
              <Card>
                <CardContent>
                  <div className="relative">
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#fef3c7] border border-[#fbbf24]">
                        <Lock className="w-3 h-3 text-[#f59e0b]" />
                        <span className="text-[#f59e0b]" style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                          Enterprise
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Key className="w-5 h-5 text-[#999999]" />
                      <h3 className="text-[#999999]" style={{ fontSize: '16px', fontWeight: '700' }}>
                        SSO & SCIM
                      </h3>
                    </div>
                    <p className="text-[#999999] mb-4" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                      Enable single sign-on with Okta, Azure AD, or Google Workspace. Automate user provisioning with SCIM.
                    </p>
                    <button
                      className="px-4 py-2 rounded-lg bg-[#1a1a1a] text-white hover:bg-[#000000] transition-colors"
                      style={{ fontSize: '13px', fontWeight: '600' }}
                    >
                      Upgrade to Enterprise
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* AUDIT LOG */}
          {activeSubSection === 'audit' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '20px', fontWeight: '700' }}>
                  Audit Log
                </h2>
                <p className="text-[#666666]" style={{ fontSize: '14px' }}>
                  Track all team activity and changes in your workspace
                </p>
              </div>

              {/* Filters */}
              <Card>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                      <input
                        type="text"
                        placeholder="Search by actor..."
                        value={auditActorSearch}
                        onChange={(e) => setAuditActorSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors"
                        style={{ fontSize: '14px' }}
                      />
                    </div>
                    <select
                      value={auditActionFilter}
                      onChange={(e) => setAuditActionFilter(e.target.value)}
                      className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors"
                      style={{ fontSize: '14px' }}
                    >
                      <option value="all">All Actions</option>
                      <option value="Invited">Invitations</option>
                      <option value="Updated">Updates</option>
                      <option value="Removed">Removals</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              {/* Audit Log Table */}
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#e0e0e0]">
                          <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Actor
                          </th>
                          <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Action
                          </th>
                          <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Target
                          </th>
                          <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Time
                          </th>
                          <th className="text-left px-6 py-4 text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            IP Address
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredAuditLogs.map((log) => (
                          <tr key={log.id} className="border-b border-[#e0e0e0] hover:bg-[#fafafa] transition-colors">
                            <td className="px-6 py-4">
                              <div>
                                <div className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                                  {log.actor}
                                </div>
                                <div className="text-[#666666]" style={{ fontSize: '12px' }}>
                                  {log.actorEmail}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-[#666666]" style={{ fontSize: '13px' }}>
                              {log.action}
                            </td>
                            <td className="px-6 py-4 text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                              {log.target}
                            </td>
                            <td className="px-6 py-4 text-[#666666]" style={{ fontSize: '13px' }}>
                              {log.timestamp}
                            </td>
                            <td className="px-6 py-4 text-[#666666]" style={{ fontSize: '12px', fontFamily: 'monospace' }}>
                              {log.ip}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* MODALS */}

      {/* Invite Members Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[12px] w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="px-6 py-5 border-b border-[#e0e0e0] flex items-center justify-between">
              <div>
                <h3 className="text-[#1a1a1a]" style={{ fontSize: '18px', fontWeight: '700' }}>
                  Invite Team Members
                </h3>
                <p className="text-[#666666] mt-1" style={{ fontSize: '13px' }}>
                  Add new members to your workspace
                </p>
              </div>
              <button
                onClick={() => setShowInviteModal(false)}
                className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#666666]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
              {/* Email Input */}
              <div>
                <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                  Email Addresses
                </label>
                <textarea
                  value={inviteEmails}
                  onChange={(e) => setInviteEmails(e.target.value)}
                  placeholder="Enter email addresses (comma or line separated)&#10;example1@email.com, example2@email.com"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors resize-none"
                  style={{ fontSize: '14px' }}
                />
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                  Assign Role
                </label>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value as any)}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors"
                  style={{ fontSize: '14px' }}
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>

              {/* Optional Message */}
              <div>
                <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                  Optional Message
                </label>
                <textarea
                  value={inviteMessage}
                  onChange={(e) => setInviteMessage(e.target.value)}
                  placeholder="Add a personal message to the invitation (optional)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors resize-none"
                  style={{ fontSize: '14px' }}
                />
              </div>

              {/* Invite Method Toggle */}
              <div className="pt-4 border-t border-[#e0e0e0]">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-[#1a1a1a] mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Use Invite Link
                    </div>
                    <p className="text-[#666666]" style={{ fontSize: '12px' }}>
                      Generate a shareable link instead of sending email invitations
                    </p>
                  </div>
                  <button
                    onClick={() => setUseInviteLink(!useInviteLink)}
                    className={`relative flex-shrink-0 w-12 h-6 rounded-full transition-colors ${
                      useInviteLink ? 'bg-[#1a1a1a]' : 'bg-[#e0e0e0]'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                        useInviteLink ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {useInviteLink && (
                  <div className="p-4 rounded-lg bg-[#fafafa] border border-[#e0e0e0]">
                    <div className="flex items-center gap-2 mb-2">
                      <LinkIcon className="w-4 h-4 text-[#666666]" />
                      <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                        Invite Link
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={inviteLink}
                        readOnly
                        className="flex-1 px-3 py-2 rounded-lg border border-[#e0e0e0] bg-white text-[#666666] text-sm"
                        style={{ fontSize: '12px', fontFamily: 'monospace' }}
                      />
                      <button
                        onClick={copyInviteLink}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                        style={{ fontSize: '12px', fontWeight: '600' }}
                      >
                        {copiedInviteLink ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-green-600" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <button
                      className="mt-2 text-[#666666] hover:text-[#1a1a1a] transition-colors"
                      style={{ fontSize: '12px', fontWeight: '600' }}
                    >
                      Reset link
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="px-6 py-4 border-t border-[#e0e0e0] flex items-center justify-end gap-3">
              <button
                onClick={() => setShowInviteModal(false)}
                className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Cancel
              </button>
              <button
                onClick={handleSendInvites}
                className="px-4 py-2.5 rounded-lg bg-[#1a1a1a] text-white hover:bg-[#000000] transition-colors"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Send Invites
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Transfer Ownership Modal */}
      {showTransferOwnershipModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[12px] w-full max-w-md">
            <div className="px-6 py-5 border-b border-[#e0e0e0]">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-[#f59e0b]" />
                <h3 className="text-[#1a1a1a]" style={{ fontSize: '18px', fontWeight: '700' }}>
                  Transfer Ownership
                </h3>
              </div>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                This is a critical action. You will lose ownership access and become an Admin. This cannot be undone without the new owner's approval.
              </p>
            </div>
            <div className="px-6 py-4 border-t border-[#e0e0e0] flex items-center justify-end gap-3">
              <button
                onClick={() => setShowTransferOwnershipModal(false)}
                className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowTransferOwnershipModal(false);
                  alert('Ownership transfer initiated');
                }}
                className="px-4 py-2.5 rounded-lg bg-[#f59e0b] text-white hover:bg-[#d97706] transition-colors"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Transfer Ownership
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Remove Member Modal */}
      {showRemoveMemberModal && selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[12px] w-full max-w-md">
            <div className="px-6 py-5 border-b border-[#e0e0e0]">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-[#dc2626]" />
                <h3 className="text-[#1a1a1a]" style={{ fontSize: '18px', fontWeight: '700' }}>
                  Remove Team Member
                </h3>
              </div>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                Are you sure you want to remove <strong>{selectedMember.name}</strong> from the team? They will lose access to all workspace resources.
              </p>
            </div>
            <div className="px-6 py-4 border-t border-[#e0e0e0] flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setShowRemoveMemberModal(false);
                  setSelectedMember(null);
                }}
                className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Cancel
              </button>
              <button
                onClick={handleRemoveMember}
                className="px-4 py-2.5 rounded-lg bg-[#dc2626] text-white hover:bg-[#b91c1c] transition-colors"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Remove Member
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Deactivate Member Modal */}
      {showDeactivateMemberModal && selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[12px] w-full max-w-md">
            <div className="px-6 py-5 border-b border-[#e0e0e0]">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-[#f59e0b]" />
                <h3 className="text-[#1a1a1a]" style={{ fontSize: '18px', fontWeight: '700' }}>
                  Deactivate Member
                </h3>
              </div>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                Deactivate <strong>{selectedMember.name}</strong>? They will be signed out and unable to access the workspace until reactivated.
              </p>
            </div>
            <div className="px-6 py-4 border-t border-[#e0e0e0] flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setShowDeactivateMemberModal(false);
                  setSelectedMember(null);
                }}
                className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Cancel
              </button>
              <button
                onClick={handleDeactivateMember}
                className="px-4 py-2.5 rounded-lg bg-[#f59e0b] text-white hover:bg-[#d97706] transition-colors"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Deactivate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Revoke Invite Modal */}
      {showRevokeInviteModal && selectedInvite && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[12px] w-full max-w-md">
            <div className="px-6 py-5 border-b border-[#e0e0e0]">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-[#dc2626]" />
                <h3 className="text-[#1a1a1a]" style={{ fontSize: '18px', fontWeight: '700' }}>
                  Revoke Invitation
                </h3>
              </div>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                Are you sure you want to revoke the invitation for <strong>{selectedInvite.email}</strong>? The invite link will become invalid.
              </p>
            </div>
            <div className="px-6 py-4 border-t border-[#e0e0e0] flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setShowRevokeInviteModal(false);
                  setSelectedInvite(null);
                }}
                className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Cancel
              </button>
              <button
                onClick={handleRevokeInvite}
                className="px-4 py-2.5 rounded-lg bg-[#dc2626] text-white hover:bg-[#b91c1c] transition-colors"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Revoke Invite
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sign Out All Sessions Modal */}
      {showSignOutAllModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[12px] w-full max-w-md">
            <div className="px-6 py-5 border-b border-[#e0e0e0]">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-[#dc2626]" />
                <h3 className="text-[#1a1a1a]" style={{ fontSize: '18px', fontWeight: '700' }}>
                  Sign Out All Sessions
                </h3>
              </div>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                This will force all team members (including you) to sign out from all devices. Everyone will need to sign in again. Use this only if you suspect unauthorized access.
              </p>
            </div>
            <div className="px-6 py-4 border-t border-[#e0e0e0] flex items-center justify-end gap-3">
              <button
                onClick={() => setShowSignOutAllModal(false)}
                className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowSignOutAllModal(false);
                  alert('All sessions have been terminated');
                }}
                className="px-4 py-2.5 rounded-lg bg-[#dc2626] text-white hover:bg-[#b91c1c] transition-colors"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Sign Out All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

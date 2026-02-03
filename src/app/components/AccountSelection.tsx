import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, Check, Plus, ArrowRight, Building2, User, Loader2, X, 
  Search, MoreHorizontal, LogOut, Settings as SettingsIcon, AlertCircle, RefreshCw, Trash2,
  ChevronLeft, Copy, Mail, ShoppingBag, Store, Shield, Command
} from 'lucide-react';

interface AccountSelectionProps {
  onContinue: () => void;
  onBack: () => void;
}

// Types
type Tab = 'resources' | 'members' | 'settings';
type MemberStatus = 'active' | 'pending';
type TeamRole = 'Owner' | 'Admin' | 'Editor' | 'Viewer';

interface Account {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string;
  followers: string;
  status: 'active' | 'expired';
}

interface Member {
  id: string;
  name: string;
  email: string;
  role: TeamRole;
  status: MemberStatus;
  joinedAt: string;
  avatarUrl?: string;
}

interface Team {
  id: string;
  name: string;
  description: string;
  role: TeamRole;
  members: Member[];
  accounts: Account[];
  createdAt: string;
}

interface PendingInvite {
  id: string;
  teamName: string;
  inviterName: string;
  role: string;
}

// Mock Data
const CURRENT_USER = {
  name: 'Alex Johnson',
  email: 'alex.j@example.com',
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
};

const PENDING_INVITES: PendingInvite[] = [
  {
    id: 'invite-1',
    teamName: 'Creative Studio X',
    inviterName: 'Mike Design',
    role: 'Editor'
  }
];

const INITIAL_TEAMS: Team[] = [
  {
    id: 'team-1',
    name: 'Growth Team Alpha',
    description: 'Main growth hacking team for TikTok accounts.',
    role: 'Owner',
    createdAt: '2023-01-15',
    members: [
      { id: 'm1', name: 'Alex Johnson', email: 'alex.j@example.com', role: 'Owner', status: 'active', joinedAt: '2023-01-15', avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
      { id: 'm2', name: 'Sarah Chen', email: 'sarah@example.com', role: 'Admin', status: 'active', joinedAt: '2023-02-10', avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
      { id: 'm3', name: 'Mike Design', email: 'mike@example.com', role: 'Editor', status: 'active', joinedAt: '2023-03-05', avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike' },
      { id: 'm4', name: 'Pending User', email: 'pending@example.com', role: 'Viewer', status: 'pending', joinedAt: '2023-10-01' }
    ],
    accounts: [
      {
        id: 'acc-1',
        username: 'techreviewsarah',
        displayName: 'Sarah Chen',
        avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        followers: '125K',
        status: 'active'
      },
      {
        id: 'acc-2',
        username: 'sarahtech',
        displayName: 'Sarah | Tech Tips',
        avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tech',
        followers: '45K',
        status: 'expired'
      }
    ]
  },
  {
    id: 'team-2',
    name: 'Marketing Pro',
    description: 'Marketing campaigns and analytics.',
    role: 'Admin',
    createdAt: '2023-05-20',
    members: [
       { id: 'm1', name: 'Alex Johnson', email: 'alex.j@example.com', role: 'Admin', status: 'active', joinedAt: '2023-05-20', avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' }
    ],
    accounts: [
      {
        id: 'acc-3',
        username: 'dailygadgets',
        displayName: 'Daily Gadgets',
        avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gadgets',
        followers: '12K',
        status: 'active'
      }
    ]
  }
];

export function AccountSelection({ onContinue, onBack }: AccountSelectionProps) {
  // State
  const [teams, setTeams] = useState<Team[]>(INITIAL_TEAMS);
  const [invites, setInvites] = useState<PendingInvite[]>(PENDING_INVITES);
  const [selectedTeamId, setSelectedTeamId] = useState<string>(teams[0].id);
  const [activeTab, setActiveTab] = useState<Tab>('resources');
  
  // UI State
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [isCreatingTeam, setIsCreatingTeam] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');
  const [isConnectingAccount, setIsConnectingAccount] = useState(false);
  
  // Modals
  const [accountMenuOpenId, setAccountMenuOpenId] = useState<string | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState<{isOpen: boolean, accountId: string, accountName: string} | null>(null);
  const [deleteTeamModalOpen, setDeleteTeamModalOpen] = useState(false);
  const [deleteConfirmationInput, setDeleteConfirmationInput] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Settings Edit State
  const [isEditingTeam, setIsEditingTeam] = useState(false);
  const [editTeamName, setEditTeamName] = useState('');
  const [editTeamDesc, setEditTeamDesc] = useState('');

  // Members Invite State
  const [inviteEmail, setInviteEmail] = useState('');
  const [isInviting, setIsInviting] = useState(false);

  const currentTeam = teams.find(t => t.id === selectedTeamId) || teams[0];

  // URL Sync
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlTeamId = params.get('teamId');
    const urlTab = params.get('tab') as Tab;

    if (urlTeamId && teams.find(t => t.id === urlTeamId)) {
      setSelectedTeamId(urlTeamId);
    }
    if (urlTab && ['resources', 'members', 'settings'].includes(urlTab)) {
      setActiveTab(urlTab);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('teamId', selectedTeamId);
    params.set('tab', activeTab);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [selectedTeamId, activeTab]);

  // Debounce Search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handlers
  const handleCreateTeam = () => {
    if (!newTeamName.trim()) return;
    const newTeam: Team = {
      id: `team-${Date.now()}`,
      name: newTeamName,
      description: 'New team workspace',
      role: 'Owner',
      members: [{ ...CURRENT_USER, id: 'u1', role: 'Owner', status: 'active', joinedAt: new Date().toISOString() }],
      accounts: [],
      createdAt: new Date().toISOString()
    };
    setTeams([...teams, newTeam]);
    setSelectedTeamId(newTeam.id);
    setNewTeamName('');
    setIsCreatingTeam(false);
  };

  const handleConnectAccount = () => {
    setIsConnectingAccount(true);
    setTimeout(() => {
      const newAccount: Account = {
        id: `acc-${Date.now()}`,
        username: `new_user_${Math.floor(Math.random() * 1000)}`,
        displayName: 'New Connected User',
        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`,
        followers: '0',
        status: 'active'
      };
      const updatedTeams = teams.map(team => {
        if (team.id === selectedTeamId) {
          return { ...team, accounts: [...team.accounts, newAccount] };
        }
        return team;
      });
      setTeams(updatedTeams);
      setIsConnectingAccount(false);
    }, 1500);
  };

  const handleRemoveAccount = () => {
    if (!deleteModalOpen) return;
    setIsDeleting(true);
    setTimeout(() => {
      const updatedTeams = teams.map(team => {
        if (team.id === selectedTeamId) {
          return {
            ...team,
            accounts: team.accounts.filter(a => a.id !== deleteModalOpen.accountId)
          };
        }
        return team;
      });
      setTeams(updatedTeams);
      setIsDeleting(false);
      setDeleteModalOpen(null);
      setDeleteConfirmationInput('');
    }, 1000);
  };

  const handleDeleteTeam = () => {
    setIsDeleting(true);
    setTimeout(() => {
      const updatedTeams = teams.filter(t => t.id !== selectedTeamId);
      setTeams(updatedTeams);
      if (updatedTeams.length > 0) {
        setSelectedTeamId(updatedTeams[0].id);
      }
      setIsDeleting(false);
      setDeleteTeamModalOpen(false);
      setDeleteConfirmationInput('');
    }, 1500);
  };

  const handleSaveTeamSettings = () => {
    const updatedTeams = teams.map(team => {
      if (team.id === selectedTeamId) {
        return { ...team, name: editTeamName, description: editTeamDesc };
      }
      return team;
    });
    setTeams(updatedTeams);
    setIsEditingTeam(false);
  };

  const handleInviteMember = () => {
    if (!inviteEmail) return;
    setIsInviting(true);
    setTimeout(() => {
      const updatedTeams = teams.map(team => {
        if (team.id === selectedTeamId) {
          const newMember: Member = {
            id: `m-${Date.now()}`,
            name: inviteEmail.split('@')[0],
            email: inviteEmail,
            role: 'Viewer',
            status: 'pending',
            joinedAt: new Date().toISOString()
          };
          return { ...team, members: [...team.members, newMember] };
        }
        return team;
      });
      setTeams(updatedTeams);
      setInviteEmail('');
      setIsInviting(false);
    }, 1000);
  };

  const filteredAccounts = currentTeam.accounts.filter(acc => 
    acc.displayName.toLowerCase().includes(debouncedSearch.toLowerCase()) || 
    acc.username.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900 selection:bg-[#0F766E]/20">
      
      {/* SIDEBAR: Teams Navigation */}
      <aside className="w-[280px] bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 z-20">
        {/* Sidebar Header */}
        <div className="h-16 flex items-center px-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0F766E] to-[#0D9488] rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
              O
            </div>
            <span className="font-semibold text-gray-900 tracking-tight">OwlSeer</span>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto p-3 space-y-6 custom-scrollbar">
          
          {/* User Profile Mini */}
          <div className="px-2">
            <button className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group text-left">
              <img src={CURRENT_USER.avatarUrl} alt={CURRENT_USER.name} className="w-9 h-9 rounded-full border border-gray-200 bg-gray-50" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">{CURRENT_USER.name}</div>
                <div className="text-xs text-gray-500 truncate">{CURRENT_USER.email}</div>
              </div>
              <SettingsIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Pending Invites */}
          {invites.length > 0 && (
            <div className="px-2">
              <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">Invites</div>
              <div className="space-y-2">
                {invites.map(invite => (
                  <div key={invite.id} className="p-3 bg-amber-50 border border-amber-100 rounded-xl">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-gray-900 text-sm truncate">{invite.teamName}</span>
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5"></span>
                    </div>
                    <div className="text-xs text-gray-600 mb-2">By {invite.inviterName}</div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          const newTeam: Team = {
                            id: `team-invite-${Date.now()}`,
                            name: invite.teamName,
                            description: 'Invited team',
                            role: invite.role as any,
                            members: [],
                            accounts: [],
                            createdAt: new Date().toISOString()
                          };
                          setTeams([newTeam, ...teams]);
                          setInvites(invites.filter(i => i.id !== invite.id));
                        }}
                        className="flex-1 bg-white border border-amber-200 text-amber-700 text-xs font-medium py-1 rounded hover:bg-amber-100 transition-colors"
                      >
                        Accept
                      </button>
                      <button onClick={() => setInvites(invites.filter(i => i.id !== invite.id))} className="px-2 text-gray-400 hover:text-gray-600"><X className="w-3 h-3" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Teams List */}
          <div className="px-2">
            <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2 flex justify-between items-center">
              <span>Teams</span>
              <button onClick={() => setIsCreatingTeam(true)} className="hover:text-[#0F766E] transition-colors"><Plus className="w-3.5 h-3.5" /></button>
            </div>
            
            <div className="space-y-1">
              {teams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => setSelectedTeamId(team.id)}
                  className={`w-full text-left p-2.5 rounded-lg flex items-center justify-between group transition-all duration-200 ${
                    selectedTeamId === team.id
                      ? 'bg-white shadow-sm border border-gray-200'
                      : 'hover:bg-gray-100/80 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      selectedTeamId === team.id ? 'bg-[#0F766E] text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {team.name.substring(0, 1).toUpperCase()}
                    </div>
                    <div className="truncate">
                      <div className={`text-sm font-medium truncate ${selectedTeamId === team.id ? 'text-gray-900' : 'text-gray-600'}`}>{team.name}</div>
                      <div className="text-[10px] text-gray-400">{team.members.length} members</div>
                    </div>
                  </div>
                  {selectedTeamId === team.id && <div className="w-1.5 h-1.5 rounded-full bg-[#0F766E]"></div>}
                </button>
              ))}

              {isCreatingTeam && (
                <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm mt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <input
                    type="text"
                    value={newTeamName}
                    onChange={(e) => setNewTeamName(e.target.value)}
                    placeholder="Team Name"
                    autoFocus
                    className="w-full px-2 py-1.5 mb-2 bg-gray-50 border border-gray-200 rounded text-sm focus:border-[#0F766E] focus:ring-0 outline-none"
                    onKeyDown={(e) => e.key === 'Enter' && handleCreateTeam()}
                  />
                  <div className="flex justify-end gap-2">
                    <button onClick={() => setIsCreatingTeam(false)} className="px-2 py-1 text-xs text-gray-500 hover:text-gray-700">Cancel</button>
                    <button onClick={handleCreateTeam} disabled={!newTeamName.trim()} className="px-2 py-1 bg-[#0F766E] text-white text-xs rounded hover:bg-[#0D655E] disabled:opacity-50">Create</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-100">
          <button onClick={onBack} className="w-full flex items-center justify-center gap-2 p-2 text-sm text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 ml-[280px] h-screen overflow-hidden flex flex-col bg-white">
        
        {/* Workspace Header */}
        <header className="h-16 px-8 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">{currentTeam.name}</h1>
            <span className="px-2 py-0.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-gray-600">
              {currentTeam.role}
            </span>
          </div>
          
          {/* Tabs Navigation */}
          <nav className="flex items-center gap-1">
            {(['resources', 'members', 'settings'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                  activeTab === tab 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </header>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 max-w-7xl mx-auto w-full">
          
          {/* RESOURCES TAB */}
          {activeTab === 'resources' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* Header Section */}
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Connected Assets</h2>
                  <p className="text-sm text-gray-500 mt-1">Manage your TikTok accounts and external integrations.</p>
                </div>
                <button 
                  onClick={handleConnectAccount} 
                  disabled={isConnectingAccount}
                  className="px-4 py-2 bg-[#0F766E] text-white rounded-lg text-sm font-medium hover:bg-[#0D655E] active:bg-[#0F766E] transition-all flex items-center gap-2 shadow-sm hover:shadow"
                >
                  {isConnectingAccount ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                  Add Account
                </button>
              </div>

              {/* Accounts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAccounts.map((account) => {
                  const isExpired = account.status === 'expired';
                  return (
                    <div key={account.id} className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-[#0F766E]/30 hover:shadow-md transition-all duration-200 flex flex-col h-full relative overflow-hidden">
                      {isExpired && <div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-full -mr-8 -mt-8 z-0"></div>}
                      
                      <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="flex items-center gap-3">
                          <img src={account.avatarUrl} alt={account.displayName} className={`w-12 h-12 rounded-full border-2 ${isExpired ? 'border-red-100 grayscale' : 'border-gray-100'}`} />
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm">{account.displayName}</h3>
                            <p className="text-xs text-gray-500">@{account.username}</p>
                          </div>
                        </div>
                        
                        <div className="relative group/menu">
                          <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"><MoreHorizontal className="w-4 h-4" /></button>
                          <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hidden group-hover/menu:block z-20 animate-in fade-in zoom-in-95 duration-100">
                            <button onClick={() => setDeleteModalOpen({isOpen: true, accountId: account.id, accountName: account.displayName})} className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"><Trash2 className="w-3.5 h-3.5" /> Remove</button>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {account.followers}</span>
                          <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Protected</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-50 mt-auto">
                        {isExpired ? (
                          <button className="w-full py-2 bg-red-50 text-red-700 rounded-lg text-xs font-semibold hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
                            <RefreshCw className="w-3 h-3" /> Re-authorize
                          </button>
                        ) : (
                          <button onClick={onContinue} className="w-full py-2 border border-gray-200 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50 hover:text-gray-900 transition-colors flex items-center justify-center gap-2 group/btn">
                            Enter Console <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
                
                {/* Empty State / Add Card */}
                {filteredAccounts.length === 0 && !isConnectingAccount && (
                  <button onClick={handleConnectAccount} className="flex flex-col items-center justify-center p-8 rounded-xl border-2 border-dashed border-gray-200 hover:border-[#0F766E]/50 hover:bg-gray-50/50 transition-all group h-full min-h-[200px]">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Plus className="w-5 h-5 text-gray-400 group-hover:text-[#0F766E]" />
                    </div>
                    <span className="text-sm font-medium text-gray-600 group-hover:text-[#0F766E]">Connect Account</span>
                  </button>
                )}
              </div>

              {/* Integrations Section */}
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-[#0F766E] rounded-full"></span> Integrations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity cursor-not-allowed">
                    <div className="w-10 h-10 bg-[#95BF47]/10 rounded-lg flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-[#95BF47]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Shopify</h4>
                      <p className="text-xs text-gray-500">Sync products & sales data</p>
                    </div>
                    <span className="ml-auto text-[10px] font-medium bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase">Soon</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity cursor-not-allowed">
                    <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center">
                      <Store className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">TikTok Shop</h4>
                      <p className="text-xs text-gray-500">Direct e-commerce integration</p>
                    </div>
                    <span className="ml-auto text-[10px] font-medium bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase">Soon</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* MEMBERS TAB */}
          {activeTab === 'members' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
                  <p className="text-sm text-gray-500 mt-1">{currentTeam.members.length} active members</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-72 group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#0F766E] transition-colors" />
                    <input 
                      type="email" 
                      placeholder="Invite by email..." 
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      className="w-full pl-9 pr-20 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E]/20 transition-all bg-white"
                      onKeyDown={(e) => e.key === 'Enter' && handleInviteMember()}
                    />
                    <button 
                      onClick={handleInviteMember} 
                      disabled={!inviteEmail || isInviting} 
                      className="absolute right-1 top-1 bottom-1 px-3 bg-[#0F766E] text-white rounded-md text-xs font-semibold hover:bg-[#0D655E] disabled:opacity-50 transition-colors"
                    >
                      {isInviting ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Invite'}
                    </button>
                  </div>
                  <button className="p-2 border border-gray-200 bg-white rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" title="Copy Invite Link">
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 font-medium">User</th>
                      <th className="px-6 py-3 font-medium">Role</th>
                      <th className="px-6 py-3 font-medium">Status</th>
                      <th className="px-6 py-3 font-medium">Joined</th>
                      <th className="px-6 py-3 text-right font-medium"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {currentTeam.members.map((member) => (
                      <tr key={member.id} className="group hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {member.avatarUrl ? (
                              <img src={member.avatarUrl} alt={member.name} className="w-9 h-9 rounded-full bg-gray-100" />
                            ) : (
                              <div className="w-9 h-9 rounded-full bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center font-bold text-xs">
                                {member.name.substring(0, 2).toUpperCase()}
                              </div>
                            )}
                            <div>
                              <div className="font-semibold text-gray-900">{member.name}</div>
                              <div className="text-xs text-gray-500">{member.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                            member.role === 'Owner' ? 'bg-purple-50 text-purple-700 border-purple-100' : 
                            member.role === 'Admin' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                            'bg-gray-50 text-gray-600 border-gray-200'
                          }`}>
                            {member.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {member.status === 'active' ? (
                            <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Active
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 text-xs font-medium text-amber-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Pending
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-500 text-xs tabular-nums">
                          {new Date(member.joinedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === 'settings' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="max-w-3xl">
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900">General Settings</h2>
                <p className="text-sm text-gray-500 mt-1">Manage team profile and preferences.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8 space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Team Name</label>
                    <input 
                      type="text" 
                      defaultValue={currentTeam.name}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                    <textarea 
                      defaultValue={currentTeam.description}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E]/20 outline-none transition-all resize-none"
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Metadata</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Team ID</div>
                    <div className="text-sm font-mono text-gray-900 bg-white border border-gray-200 rounded px-2 py-1 inline-block select-all">{currentTeam.id}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Created At</div>
                    <div className="text-sm text-gray-900 font-medium">{new Date(currentTeam.createdAt).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Your Role</div>
                    <div className="text-sm font-medium text-[#0F766E]">{currentTeam.role}</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-sm font-bold text-red-600 mb-4 uppercase tracking-wider flex items-center gap-2">
                  Danger Zone
                </h3>
                <div className="bg-red-50/50 border border-red-100 rounded-xl p-5 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Delete Team</h4>
                    <p className="text-xs text-gray-500 mt-1 max-w-sm">
                      Permanently delete this team and all associated data. This action cannot be undone.
                      {currentTeam.accounts.length > 0 && <span className="block mt-1 text-red-600 font-medium">Please remove all connected accounts first.</span>}
                    </p>
                  </div>
                  <button 
                    onClick={() => setDeleteTeamModalOpen(true)}
                    disabled={currentTeam.accounts.length > 0}
                    className="px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 hover:border-red-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                  >
                    Delete Team
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Delete Account Modal */}
      <AnimatePresence>
        {deleteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => setDeleteModalOpen(null)} />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }} className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative z-10 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto border-4 border-red-50"><AlertCircle className="w-6 h-6 text-red-600" /></div>
              <h3 className="text-lg font-bold text-center text-gray-900 mb-2">Disconnect Account?</h3>
              <p className="text-center text-gray-500 mb-6 text-sm">Are you sure you want to remove <span className="font-bold text-gray-900">{deleteModalOpen.accountName}</span>? This will stop all data syncing immediately.</p>
              <div className="flex gap-3">
                <button onClick={() => setDeleteModalOpen(null)} className="flex-1 py-2.5 rounded-lg border border-gray-300 font-medium text-gray-700 hover:bg-gray-50 transition-colors">Cancel</button>
                <button onClick={handleRemoveAccount} className="flex-1 py-2.5 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors shadow-sm flex items-center justify-center gap-2">{isDeleting && <Loader2 className="w-4 h-4 animate-spin" />} Confirm Remove</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Team Modal */}
      <AnimatePresence>
        {deleteTeamModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => setDeleteTeamModalOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }} className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative z-10 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto border-4 border-red-50"><AlertCircle className="w-6 h-6 text-red-600" /></div>
              <h3 className="text-lg font-bold text-center text-gray-900 mb-2">Delete Team?</h3>
              <p className="text-center text-gray-500 mb-6 text-sm">This action cannot be undone. All workspace data will be permanently deleted.</p>
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Type <span className="select-all font-mono bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">delete</span> to confirm</label>
                <input type="text" value={deleteConfirmationInput} onChange={(e) => setDeleteConfirmationInput(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-sm" placeholder="delete" />
              </div>
              <div className="flex gap-3">
                <button onClick={() => setDeleteTeamModalOpen(false)} className="flex-1 py-2.5 rounded-lg border border-gray-300 font-medium text-gray-700 hover:bg-gray-50 transition-colors">Cancel</button>
                <button onClick={handleDeleteTeam} disabled={deleteConfirmationInput !== 'delete' || isDeleting} className="flex-1 py-2.5 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm flex items-center justify-center gap-2">{isDeleting && <Loader2 className="w-4 h-4 animate-spin" />} Delete Team</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

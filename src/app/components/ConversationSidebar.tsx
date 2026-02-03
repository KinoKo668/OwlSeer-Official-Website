import React from 'react';
import { Search, Plus, MoreVertical, Trash2, Edit3, PanelLeftClose } from 'lucide-react';

interface Conversation {
  id: string;
  title: string;
  messages: any[];
  createdAt: Date;
  updatedAt: Date;
}

interface ConversationSidebarProps {
  conversations: Conversation[];
  currentConversationId: string | null;
  onSelectConversation: (id: string) => void;
  onNewConversation: () => void;
  onDeleteConversation: (id: string) => void;
  onRenameConversation: (id: string, newTitle: string) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function ConversationSidebar({
  conversations,
  currentConversationId,
  onSelectConversation,
  onNewConversation,
  onDeleteConversation,
  onRenameConversation,
  isCollapsed = false,
  onToggleCollapse,
}: ConversationSidebarProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [openMenuId, setOpenMenuId] = React.useState<string | null>(null);
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [editTitle, setEditTitle] = React.useState('');
  const menuRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenuId(null);
      }
    };

    if (openMenuId) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openMenuId]);

  // Focus input when entering edit mode
  React.useEffect(() => {
    if (editingId && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editingId]);

  const handleDeleteClick = (e: React.MouseEvent, convId: string) => {
    e.stopPropagation();
    onDeleteConversation(convId);
    setOpenMenuId(null);
  };

  const handleRenameClick = (e: React.MouseEvent, convId: string, currentTitle: string) => {
    e.stopPropagation();
    setEditingId(convId);
    setEditTitle(currentTitle);
    setOpenMenuId(null);
  };

  const handleRenameSubmit = (convId: string) => {
    if (editTitle.trim() && editTitle !== conversations.find(c => c.id === convId)?.title) {
      onRenameConversation(convId, editTitle.trim());
    }
    setEditingId(null);
    setEditTitle('');
  };

  const handleRenameCancel = () => {
    setEditingId(null);
    setEditTitle('');
  };

  const handleMenuClick = (e: React.MouseEvent, convId: string) => {
    e.stopPropagation();
    setOpenMenuId(openMenuId === convId ? null : convId);
  };

  // Add sample conversations if list is empty
  const displayConversations = React.useMemo(() => {
    if (conversations.length > 0) {
      return conversations;
    }
    
    // Sample conversations for demo
    return [
      {
        id: 'sample-1',
        title: 'Plan my content for next week',
        messages: [],
        createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 min ago
        updatedAt: new Date(Date.now() - 1000 * 60 * 30),
      },
      {
        id: 'sample-2',
        title: 'Find winning video ideas',
        messages: [],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
      },
      {
        id: 'sample-3',
        title: 'Weekly report review',
        messages: [],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
      },
      {
        id: 'sample-4',
        title: 'Rewrite hooks for TikTok',
        messages: [],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
      },
      {
        id: 'sample-5',
        title: 'Account growth diagnosis',
        messages: [],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
      },
      {
        id: 'sample-6',
        title: 'Generate shooting script for tech review',
        messages: [],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      },
      {
        id: 'sample-7',
        title: 'Monetization safety check',
        messages: [],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4), // 4 days ago
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4),
      },
      {
        id: 'sample-8',
        title: 'How to improve engagement rate',
        messages: [],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
      },
      {
        id: 'sample-9',
        title: 'Content ideas for Q1 2026',
        messages: [],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6), // 6 days ago
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6),
      },
      {
        id: 'sample-10',
        title: 'Analyze competitor strategies',
        messages: [],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 7 days ago
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
      },
      {
        id: 'sample-11',
        title: 'Best posting times for my audience',
        messages: [],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10), // 10 days ago
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
      },
      {
        id: 'sample-12',
        title: 'Brand deal negotiation tips',
        messages: [],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14), // 14 days ago
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14),
      },
    ] as Conversation[];
  }, [conversations]);

  // Filter conversations based on search
  const filteredConversations = displayConversations.filter((conv) =>
    conv.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // If collapsed, show minimal version
  if (isCollapsed) {
    return (
      <div className="w-0 flex-shrink-0 bg-white border-r border-[#e0e0e0] flex flex-col overflow-hidden transition-all duration-300" />
    );
  }

  return (
    <div className="w-[280px] flex-shrink-0 bg-sidebar border-r border-border flex flex-col overflow-hidden transition-all duration-300">
      {/* Top Area */}
      <div className="p-4 border-b border-border">
        {/* Header Row with Collapse Button */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-foreground text-[15px] font-semibold">Conversations</h3>
          {onToggleCollapse && (
            <button
              onClick={onToggleCollapse}
              className="p-1.5 rounded-lg hover:bg-accent transition-colors group"
              title="Hide sidebar"
            >
              <PanelLeftClose className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
            </button>
          )}
        </div>

        {/* New Chat Button */}
        <button
          onClick={onNewConversation}
          className="w-full px-4 py-2.5 rounded-[12px] bg-[#0F766E] text-white hover:bg-[#0F766E]/90 dark:bg-primary dark:text-primary-foreground transition-all flex items-center justify-center gap-2 mb-3"
          style={{ fontSize: '14px', fontWeight: '600' }}
        >
          <Plus className="w-4 h-4" />
          New chat
        </button>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-muted/50 border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:bg-background transition-colors"
            style={{ fontSize: '13px' }}
          />
        </div>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto px-2 py-2">
        {filteredConversations.length > 0 ? (
          <div className="space-y-1">
            {filteredConversations.map((conv) => {
              const isActive = conv.id === currentConversationId;
              const isMenuOpen = openMenuId === conv.id;
              const isEditing = editingId === conv.id;
              
              return (
                <div key={conv.id} className="relative group">
                  {isEditing ? (
                    // Edit Mode
                    <div className="px-3 py-3 pr-10">
                      <input
                        ref={inputRef}
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleRenameSubmit(conv.id);
                          } else if (e.key === 'Escape') {
                            handleRenameCancel();
                          }
                        }}
                        onBlur={() => handleRenameSubmit(conv.id)}
                        className="w-full px-2 py-1 rounded-md bg-muted border border-primary text-foreground focus:outline-none"
                        style={{ fontSize: '14px', fontWeight: '500' }}
                      />
                    </div>
                  ) : (
                    // View Mode
                    <>
                      <button
                        onClick={() => onSelectConversation(conv.id)}
                        className={`w-full text-left px-3 py-3 pr-10 rounded-lg transition-all ${
                          isActive
                            ? 'bg-accent border-l-2 border-l-primary'
                            : 'hover:bg-accent/50'
                        }`}
                        style={{ minHeight: '48px' }}
                      >
                        <h4
                          className="text-foreground truncate"
                          style={{
                            fontSize: '14px',
                            fontWeight: isActive ? '600' : '500',
                          }}
                        >
                          {conv.title}
                        </h4>
                      </button>
                      
                      {/* More Menu Button */}
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <button
                          onClick={(e) => handleMenuClick(e, conv.id)}
                          className={`p-1.5 rounded-md transition-colors ${
                            isMenuOpen 
                              ? 'bg-accent' 
                              : 'opacity-0 group-hover:opacity-100 hover:bg-accent'
                          }`}
                        >
                          <MoreVertical className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </div>
                      
                      {/* Dropdown Menu - Outside opacity container */}
                      {isMenuOpen && (
                        <div
                          className="absolute right-2 top-12 w-40 bg-popover border border-border shadow-xl rounded-[12px] py-1.5 z-50"
                          style={{ 
                            opacity: 1,
                            backdropFilter: 'none',
                            WebkitBackdropFilter: 'none'
                          }}
                          ref={menuRef}
                        >
                          <button
                            onClick={(e) => handleRenameClick(e, conv.id, conv.title)}
                            className="w-full px-4 py-2.5 text-left text-popover-foreground hover:bg-accent transition-colors flex items-center gap-2.5 rounded-[8px] mx-1"
                            style={{ fontSize: '13px', fontWeight: '500' }}
                          >
                            <Edit3 className="w-4 h-4 text-muted-foreground" />
                            Rename
                          </button>
                          <button
                            onClick={(e) => handleDeleteClick(e, conv.id)}
                            className="w-full px-4 py-2.5 text-left text-popover-foreground hover:bg-accent transition-colors flex items-center gap-2.5 rounded-[8px] mx-1"
                            style={{ fontSize: '13px', fontWeight: '500' }}
                          >
                            <Trash2 className="w-4 h-4 text-muted-foreground" />
                            Delete
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center py-12 px-4">
            <p className="text-muted-foreground text-center" style={{ fontSize: '13px' }}>
              {searchQuery ? 'No matching chats' : 'No conversations yet'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
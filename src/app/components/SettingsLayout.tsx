import React from 'react';
import {
  User,
  Link2,
  Sparkles,
  Zap,
  CreditCard,
  Bell,
  Shield,
  ChevronRight,
  Users,
} from 'lucide-react';
import { SidebarPro } from './SidebarPro';
import { BottomTabBar } from './BottomTabBar';
import { MeMobile } from './MeMobile';
import { MobileSettingsPage } from './MobileSettingsPage';
import { useIsMobile } from './ui/use-mobile';

interface SettingsLayoutProps {
  onNavigate?: (page: string) => void;
  conversations?: Array<{
    id: string;
    title: string;
    messages: any[];
    createdAt: Date;
    updatedAt: Date;
  }>;
  currentConversationId?: string | null;
  onSelectConversation?: (id: string) => void;
  onDeleteConversation?: (id: string) => void;
  children: React.ReactNode;
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export function SettingsLayout({
  onNavigate,
  conversations = [],
  currentConversationId,
  onSelectConversation,
  onDeleteConversation,
  children,
  activeSection = 'overview',
  onSectionChange,
}: SettingsLayoutProps) {
  const sections = [
    { id: 'overview', label: 'Overview', icon: <ChevronRight className="w-4 h-4" /> },
    { id: 'account', label: 'Account', icon: <User className="w-4 h-4" /> },
    { id: 'connected', label: 'Connected Accounts', icon: <Link2 className="w-4 h-4" /> },
    { id: 'billing', label: 'Billing & Usage', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'ai', label: 'AI Preferences', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'content', label: 'Content & Automation', icon: <Zap className="w-4 h-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    { id: 'security', label: 'Security & Privacy', icon: <Shield className="w-4 h-4" /> },
    { id: 'team', label: 'Team', icon: <Users className="w-4 h-4" /> },
  ];

  const isMobile = useIsMobile();

  // Mobile: Show overview list or sub-page with back button
  if (isMobile) {
    if (activeSection === 'overview') {
      // Show mobile overview list
      return <MeMobile onNavigate={onNavigate} onSectionChange={onSectionChange} />;
    } else {
      // Show mobile sub-page with back button
      const currentSection = sections.find(s => s.id === activeSection);
      const sectionTitle = currentSection?.label || 'Settings';
      
      return (
        <MobileSettingsPage
          title={sectionTitle}
          onBack={() => onSectionChange?.('overview')}
          onNavigate={onNavigate}
        >
          {children}
        </MobileSettingsPage>
      );
    }
  }

  // Desktop: Show full layout with sidebar and tabs
  return (
    <div className="flex h-screen bg-[#fafafa]">
      <SidebarPro
        activeItem="settings"
        onNavigate={onNavigate}
        conversations={conversations}
        currentConversationId={currentConversationId}
        onSelectConversation={onSelectConversation}
        onDeleteConversation={onDeleteConversation}
        className="hidden md:flex"
      />

      {/* Main Content Area with Top Tabs */}
      <div className="flex-1 flex flex-col overflow-hidden pb-[64px] md:pb-0">
        {/* Header with Tabs */}
        <div className="bg-white border-b border-[#e0e0e0] flex-shrink-0">
          <div className="px-4 md:px-8 pt-4 md:pt-6 pb-0">
            <h1 className="text-[#1a1a1a] mb-1" style={{ fontSize: '24px', fontWeight: '700' }}>
              Settings
            </h1>
            <p className="text-[#666666] mb-4" style={{ fontSize: '14px' }}>
              Manage your account, connected services, and AI automation preferences
            </p>
          </div>

          {/* Horizontal Tabs */}
          <div className="px-4 md:px-8 overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onSectionChange?.(section.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-all whitespace-nowrap ${
                    activeSection === section.id
                      ? 'border-[#1a1a1a] text-[#1a1a1a]'
                      : 'border-transparent text-[#666666] hover:text-[#1a1a1a] hover:border-[#e0e0e0]'
                  }`}
                  style={{ 
                    fontSize: '14px', 
                    fontWeight: activeSection === section.id ? '600' : '500',
                  }}
                >
                  <span className={activeSection === section.id ? 'text-[#1a1a1a]' : 'text-[#999999]'}>
                    {section.icon}
                  </span>
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>

      {/* Bottom Tab Bar - Mobile Only */}
      <BottomTabBar 
        activeItem="me" 
        onNavigate={onNavigate}
      />
    </div>
  );
}
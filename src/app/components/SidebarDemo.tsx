import React from 'react';
import { SidebarPro } from './SidebarPro';
import { DevTools } from './DevTools';
import { Check } from 'lucide-react';
import { HomeHeader } from './HomeHeader';
import { OnboardingCard } from './OnboardingCard';
import { AccountStatusSnapshot } from './AccountStatusSnapshot';
import { NextBestAction } from './NextBestAction';
import { BrandDeals } from './BrandDeals';
import { ContentSchedule } from './ContentSchedule';
import { AccountStats } from './AccountStats';
import { AuthPage } from './AuthPage';
import { ContentProfile } from './ContentProfile';
import { AccountConnection } from './AccountConnection';
import { CreatorStruggles } from './CreatorStruggles';
import { GoalSetting } from './GoalSetting';
import { AIProcessing } from './AIProcessing';
import { InsightCheckpoint } from './InsightCheckpoint';
import { DashboardContent } from './Dashboard';
import { Copilot } from './Copilot';
import { Settings } from './Settings';
import { AccountIntelligence } from './AccountIntelligence';
import { SchedulingSlots } from './SchedulingSlots';
import { HashtagRadar } from './HashtagRadar';

interface SidebarDemoProps {
  onNavigate?: (page: string) => void;
}

export function SidebarDemo({ onNavigate }: SidebarDemoProps) {
  const [currentPage, setCurrentPage] = React.useState<'auth' | 'content-profile' | 'account-connection' | 'creator-struggles' | 'goal-setting' | 'ai-processing' | 'insight-checkpoint' | 'home' | 'sidebar-demo' | 'copilot' | 'settings' | 'intelligence' | 'scheduling' | 'hashtag'>('hashtag');
  
  // Shared conversation state for Copilot and Home
  const [conversations, setConversations] = React.useState<Array<{
    id: string;
    title: string;
    messages: any[];
    createdAt: Date;
    updatedAt: Date;
  }>>([]);
  const [currentConversationId, setCurrentConversationId] = React.useState<string | null>(null);

  const handlePageChange = (page: typeof currentPage) => {
    setCurrentPage(page);
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const handleSelectConversation = (conversationId: string) => {
    setCurrentConversationId(conversationId);
    // Navigate to Copilot page when selecting a conversation
    handlePageChange('copilot');
  };

  const handleDeleteConversation = (conversationId: string) => {
    setConversations((prev) => prev.filter((c) => c.id !== conversationId));
    if (currentConversationId === conversationId) {
      setCurrentConversationId(null);
    }
  };

  // If not on sidebar-demo page, show the selected page
  if (currentPage === 'auth') {
    return (
      <>
        <AuthPage onContinue={() => handlePageChange('account-connection')} />
        <DevTools currentPage={currentPage} onPageChange={handlePageChange} />
      </>
    );
  }

  if (currentPage === 'account-connection') {
    return (
      <>
        <AccountConnection 
          onContinue={() => handlePageChange('content-profile')}
          onBack={() => handlePageChange('auth')}
        />
        <DevTools currentPage={currentPage} onPageChange={handlePageChange} />
      </>
    );
  }

  if (currentPage === 'content-profile') {
    return (
      <>
        <ContentProfile 
          onContinue={(data) => {
            // In a real app, you'd save this data
            handlePageChange('creator-struggles');
          }}
          onBack={() => handlePageChange('account-connection')}
        />
        <DevTools currentPage={currentPage} onPageChange={handlePageChange} />
      </>
    );
  }

  if (currentPage === 'creator-struggles') {
    return (
      <>
        <CreatorStruggles 
          onContinue={() => handlePageChange('goal-setting')}
          onBack={() => handlePageChange('content-profile')}
        />
        <DevTools currentPage={currentPage} onPageChange={handlePageChange} />
      </>
    );
  }

  if (currentPage === 'goal-setting') {
    return (
      <>
        <GoalSetting 
          onContinue={() => handlePageChange('ai-processing')}
          onBack={() => handlePageChange('creator-struggles')}
        />
        <DevTools currentPage={currentPage} onPageChange={handlePageChange} />
      </>
    );
  }

  if (currentPage === 'ai-processing') {
    return (
      <>
        <AIProcessing onComplete={() => handlePageChange('insight-checkpoint')} />
        <DevTools currentPage={currentPage} onPageChange={handlePageChange} />
      </>
    );
  }

  if (currentPage === 'insight-checkpoint') {
    return (
      <>
        <InsightCheckpoint 
          onContinue={() => handlePageChange('home')}
          onBack={() => handlePageChange('ai-processing')}
        />
        <DevTools currentPage={currentPage} onPageChange={handlePageChange} />
      </>
    );
  }

  if (currentPage === 'home') {
    return (
      <>
        <div className="flex h-screen bg-[#fafafa]">
          <SidebarPro 
            activeItem="home" 
            onNavigate={handlePageChange}
            conversations={conversations}
            currentConversationId={currentConversationId}
            onSelectConversation={handleSelectConversation}
            onDeleteConversation={handleDeleteConversation}
          />
          <DashboardContent />
        </div>
        <DevTools currentPage={currentPage} onPageChange={handlePageChange} />
      </>
    );
  }

  if (currentPage === 'copilot') {
    return (
      <>
        <Copilot 
          onNavigate={handlePageChange}
          conversations={conversations}
          setConversations={setConversations}
          currentConversationId={currentConversationId}
          setCurrentConversationId={setCurrentConversationId}
        />
        <DevTools currentPage={currentPage} onPageChange={handlePageChange} />
      </>
    );
  }

  if (currentPage === 'settings') {
    return (
      <>
        <Settings 
          onNavigate={handlePageChange}
          conversations={conversations}
          currentConversationId={currentConversationId}
          onSelectConversation={handleSelectConversation}
          onDeleteConversation={handleDeleteConversation}
        />
        <DevTools currentPage={currentPage} onPageChange={handlePageChange} />
      </>
    );
  }

  if (currentPage === 'intelligence') {
    return (
      <>
        <AccountIntelligence 
          onNavigate={handlePageChange}
          conversations={conversations}
          currentConversationId={currentConversationId}
          onSelectConversation={handleSelectConversation}
          onDeleteConversation={handleDeleteConversation}
        />
        <DevTools currentPage={currentPage} onPageChange={handlePageChange} />
      </>
    );
  }

  if (currentPage === 'scheduling') {
    return (
      <>
        <SchedulingSlots 
          onNavigate={handlePageChange}
          conversations={conversations}
          currentConversationId={currentConversationId}
          onSelectConversation={handleSelectConversation}
          onDeleteConversation={handleDeleteConversation}
        />
        <DevTools currentPage={currentPage} onPageChange={handlePageChange} />
      </>
    );
  }

  if (currentPage === 'hashtag') {
    return (
      <>
        <HashtagRadar 
          onNavigate={handlePageChange}
          conversations={conversations}
          currentConversationId={currentConversationId}
          onSelectConversation={handleSelectConversation}
          onDeleteConversation={handleDeleteConversation}
        />
        <DevTools currentPage={currentPage} onPageChange={handlePageChange} />
      </>
    );
  }

  // Default: Show sidebar demo page
  return (
    <>
      <div className="flex h-screen bg-[#fafafa]">
        {/* Professional Sidebar */}
        <SidebarPro activeItem="sidebar-demo" onNavigate={handlePageChange} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="max-w-2xl text-center space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <h1
                className="text-foreground"
                style={{ fontSize: '32px', fontWeight: '600', lineHeight: '1.2' }}
              >
                Professional SaaS Sidebar
              </h1>
              <p
                className="text-muted-foreground"
                style={{ fontSize: 'var(--text-body)', lineHeight: '1.5' }}
              >
                OWLSEER - Enterprise-grade vertical navigation with grouped sections, badges, and professional styling.
              </p>
            </div>

            {/* Feature List */}
            <div className="bg-white rounded-[12px] border border-[var(--card-border)] p-6 shadow-sm text-left">
              <h3
                className="text-foreground mb-4"
                style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
              >
                Professional Sidebar Features:
              </h3>
              <ul className="space-y-3">
                {[
                  'Fixed width 260px with clean spacing',
                  'Modern abstract logo with gradient background',
                  'Grouped navigation sections (Overview, Strategy & Data, Operations)',
                  'Active state with dark background highlighting',
                  'AI badge on Copilot menu item',
                  'Professional footer with Pro Plan status and user profile',
                  'Hover effects and smooth transitions',
                  'Consistent with black/white design system',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-[#1a1a1a]/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#1a1a1a]" />
                      </div>
                    </div>
                    <span
                      className="text-muted-foreground"
                      style={{ fontSize: 'var(--text-secondary)', lineHeight: '1.6' }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Hint */}
            <div className="bg-[#f5f5f5] rounded-[12px] border border-[#e0e0e0] p-4">
              <p
                className="text-[#666666]"
                style={{ fontSize: 'var(--text-secondary)', lineHeight: '1.5' }}
              >
                💡 <strong>Tip:</strong> Use the dev tools in the bottom-right corner to navigate to other pages and explore the complete onboarding flow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dev Tools */}
      <DevTools currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
}
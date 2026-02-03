import React from 'react';
import { SettingsLayout } from './SettingsLayout';
import { SettingsOverview } from './settings/SettingsOverview';
import { AccountSettings } from './settings/AccountSettings';
import { ConnectedAccountsSettings } from './settings/ConnectedAccountsSettings';
import { AIPreferencesSettings } from './settings/AIPreferencesSettings';
import { ContentAutomationSettings } from './settings/ContentAutomationSettings';
import { NotificationsSettings } from './settings/NotificationsSettings';
import { SecurityPrivacySettings } from './settings/SecurityPrivacySettings';

interface SettingsProps {
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
}

export function Settings({
  onNavigate,
  conversations = [],
  currentConversationId,
  onSelectConversation,
  onDeleteConversation,
}: SettingsProps) {
  const [activeSection, setActiveSection] = React.useState('overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <SettingsOverview onNavigateToSection={setActiveSection} />;
      case 'account':
        return <AccountSettings />;
      case 'connected':
        return <ConnectedAccountsSettings />;
      case 'ai':
        return <AIPreferencesSettings />;
      case 'content':
        return <ContentAutomationSettings />;
      case 'notifications':
        return <NotificationsSettings />;
      case 'security':
        return <SecurityPrivacySettings />;
      default:
        return <SettingsOverview onNavigateToSection={setActiveSection} />;
    }
  };

  return (
    <SettingsLayout
      onNavigate={onNavigate}
      conversations={conversations}
      currentConversationId={currentConversationId}
      onSelectConversation={onSelectConversation}
      onDeleteConversation={onDeleteConversation}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
    >
      {renderContent()}
    </SettingsLayout>
  );
}
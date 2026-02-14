import React from 'react';
import { MobileHeader, TikTokAccount } from './MobileHeader';
import { MobileTabBarWithIndicator } from './MobileTabBarWithIndicator';

interface MobileLayoutProps {
  children: React.ReactNode;
  currentAccount?: TikTokAccount;
  accounts?: TikTokAccount[];
  onAccountChange?: (accountId: string) => void;
  language?: 'en' | 'zh';
  onLanguageChange?: () => void;
  onNotificationClick?: () => void;
  activeTab?: 'home' | 'copilot' | 'studio' | 'intelligence' | 'me';
  onNavigate?: (page: string) => void;
  showHeader?: boolean;
  showBottomNav?: boolean;
  showAccountSelector?: boolean;
  showNotifications?: boolean;
  showLanguageToggle?: boolean;
  hasNotifications?: boolean;
}

/**
 * MobileLayout - Unified mobile app layout wrapper
 * Provides consistent header, content area, and bottom navigation
 */
export function MobileLayout({
  children,
  currentAccount,
  accounts = [],
  onAccountChange,
  language = 'en',
  onLanguageChange,
  onNotificationClick,
  activeTab = 'home',
  onNavigate,
  showHeader = true,
  showBottomNav = true,
  showAccountSelector = true,
  showNotifications = true,
  showLanguageToggle = true,
  hasNotifications = true,
}: MobileLayoutProps) {
  return (
    <div className="simulation-overview-theme simulation-dark-surface relative flex flex-col h-screen bg-sidebar transition-colors duration-300">
      {/* Top Header */}
      {showHeader && currentAccount && (
        <MobileHeader
          currentAccount={currentAccount}
          accounts={accounts}
          onAccountChange={onAccountChange}
          language={language}
          onLanguageChange={onLanguageChange}
          onNotificationClick={onNotificationClick}
          showAccountSelector={showAccountSelector}
          showNotifications={showNotifications}
          showLanguageToggle={showLanguageToggle}
          hasNotifications={hasNotifications}
        />
      )}

      {/* Main Scrollable Content - Add bottom padding for Tab Bar + Home Indicator */}
      <div 
        className="flex-1 overflow-y-auto scrollbar-hide" 
        style={{ paddingBottom: showBottomNav ? '81px' : '0' }}
      >
        {children}
      </div>

      {/* Bottom Tab Bar - Fixed at bottom with 21px space for Home Indicator */}
      {showBottomNav && (
        <MobileTabBarWithIndicator activeItem={activeTab} onNavigate={onNavigate} />
      )}
    </div>
  );
}

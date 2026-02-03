import React from 'react';
import { Bell, ChevronDown, CheckCircle2, Menu } from 'lucide-react';

export interface TikTokAccount {
  id: string;
  name: string;
  displayName: string;
  followers: string;
  avatar: string;
  level?: number;
}

interface MobileHeaderProps {
  currentAccount: TikTokAccount;
  accounts?: TikTokAccount[];
  onAccountChange?: (accountId: string) => void;
  language?: 'en' | 'zh';
  onLanguageChange?: () => void;
  onNotificationClick?: () => void;
  onMenuClick?: () => void;
  showAccountSelector?: boolean;
  showNotifications?: boolean;
  showLanguageToggle?: boolean;
  showMenu?: boolean;
  hasNotifications?: boolean;
}

export function MobileHeader({
  currentAccount,
  accounts = [],
  onAccountChange,
  language = 'en',
  onLanguageChange,
  onNotificationClick,
  onMenuClick,
  showAccountSelector = true,
  showNotifications = true,
  showLanguageToggle = true,
  showMenu = false,
  hasNotifications = true,
}: MobileHeaderProps) {
  const [accountDropdownOpen, setAccountDropdownOpen] = React.useState(false);

  return (
    <>
      <div className="bg-white border-b border-[#e0e0e0] px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        {/* Left Side - Account Selector or Menu */}
        {showMenu ? (
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors"
          >
            <Menu className="w-6 h-6 text-[#666666]" />
          </button>
        ) : showAccountSelector ? (
          <div className="relative">
            <button
              onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
              className="flex items-center gap-2 hover:bg-[#f5f5f5] px-3 py-2 rounded-lg transition-colors"
            >
              <div
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#404040] flex items-center justify-center text-white flex-shrink-0"
                style={{ fontSize: '12px', fontWeight: '700' }}
              >
                {currentAccount.avatar}
              </div>
              <div className="text-left">
                <div className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                  {currentAccount.name}
                </div>
                <div className="text-[#999999]" style={{ fontSize: '11px' }}>
                  {currentAccount.followers} followers
                </div>
              </div>
              {accounts.length > 1 && <ChevronDown className="w-4 h-4 text-[#666666]" />}
            </button>

            {/* Account Dropdown */}
            {accountDropdownOpen && accounts.length > 1 && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setAccountDropdownOpen(false)}
                />
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl border border-[#e0e0e0] shadow-lg overflow-hidden z-20">
                  {accounts.map((account) => (
                    <button
                      key={account.id}
                      onClick={() => {
                        onAccountChange?.(account.id);
                        setAccountDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-[#f5f5f5] transition-colors ${
                        currentAccount.id === account.id ? 'bg-[#f5f5f5]' : ''
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#404040] flex items-center justify-center text-white flex-shrink-0"
                        style={{ fontSize: '14px', fontWeight: '700' }}
                      >
                        {account.avatar}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                          {account.name}
                        </div>
                        <div className="text-[#999999]" style={{ fontSize: '12px' }}>
                          {account.displayName} • {account.followers}
                        </div>
                      </div>
                      {currentAccount.id === account.id && (
                        <CheckCircle2 className="w-5 h-5 text-[#16a34a]" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="w-10" /> // Spacer
        )}

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          {showLanguageToggle && (
            <button
              onClick={onLanguageChange}
              className="px-3 py-1.5 rounded-lg bg-[#f5f5f5] text-[#666666] hover:bg-[#e0e0e0] transition-colors"
              style={{ fontSize: '12px', fontWeight: '600' }}
            >
              {language === 'en' ? 'EN' : '中文'}
            </button>
          )}

          {/* Notifications */}
          {showNotifications && (
            <button
              onClick={onNotificationClick}
              className="p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors relative"
            >
              <Bell className="w-5 h-5 text-[#666666]" />
              {hasNotifications && (
                <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#dc2626]"></div>
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

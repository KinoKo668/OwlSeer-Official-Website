import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { ChevronLeft, ChevronDown, Check } from 'lucide-react';

interface TikTokAccount {
  id: string;
  username: string;
  displayName: string;
  avatarUrl?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  followers: number;
  isConnected: boolean;
}

interface HomeHeaderProps {
  // Current TikTok Account Info
  avatarUrl?: string;
  handle: string;
  displayName: string;
  isConnected: boolean;
  lastSyncedText: string;
  // Account Level
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  // Navigation
  onBack?: () => void;
  // Account Switching
  accounts?: TikTokAccount[];
  currentAccountId?: string;
  onAccountSwitch?: (accountId: string) => void;
  onManageAccounts?: () => void;
}

export function HomeHeader({
  avatarUrl,
  handle,
  displayName,
  isConnected,
  lastSyncedText,
  level,
  onBack,
  accounts = [],
  currentAccountId,
  onAccountSwitch,
  onManageAccounts,
}: HomeHeaderProps) {
  const [accountDropdownOpen, setAccountDropdownOpen] = React.useState(false);

  const formatNumber = (num: number): string => {
    if (num === undefined || num === null) {
      return '0';
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  const getLevelColor = (level: number): string => {
    if (level >= 6) return 'bg-[#e8eaf6] text-[#3949ab]'; // Purple for high level
    if (level >= 4) return 'bg-[#e3f2fd] text-[#1976d2]'; // Blue for mid level
    return 'bg-[#f5f5f5] text-[#616161]'; // Gray for low level
  };

  return (
    <div className="border-b border-[rgba(0,0,0,0.08)] bg-white">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Left: Current TikTok Account Block */}
          <div className="flex items-center gap-4">
            {onBack && (
              <button
                className="text-muted-foreground hover:text-foreground"
                onClick={onBack}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <Avatar className="w-12 h-12">
              <AvatarImage src={avatarUrl} alt={displayName} />
              <AvatarFallback className="bg-[#f0f0f2] text-foreground">
                {displayName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <span
                  className="text-foreground"
                  style={{ fontSize: 'var(--text-body)', fontWeight: '500' }}
                >
                  {displayName}
                </span>
                <span
                  className="text-muted-foreground"
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  @{handle}
                </span>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full ${getLevelColor(level)}`}
                  style={{ fontSize: 'var(--text-secondary)', fontWeight: '600' }}
                >
                  L{level}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className="text-muted-foreground"
                  style={{ fontSize: 'var(--text-secondary)' }}
                >
                  {lastSyncedText}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Account Switcher */}
          {accounts.length > 1 && (
            <div className="relative">
              <button
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#e0e0e0] hover:bg-[#f5f5f5] transition-colors"
              >
                <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
                  Switch Account
                </span>
                <ChevronDown className="w-4 h-4 text-[#666666]" />
              </button>

              {accountDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setAccountDropdownOpen(false)}
                  ></div>
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl border border-[#e0e0e0] shadow-xl z-20 overflow-hidden">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-[#e0e0e0] bg-[#fafafa]">
                      <h3 className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '700' }}>
                        Your TikTok Accounts
                      </h3>
                      <p className="text-[#999999] mt-0.5" style={{ fontSize: '11px' }}>
                        {accounts.length} account{accounts.length !== 1 ? 's' : ''} connected
                      </p>
                    </div>

                    {/* Account List */}
                    <div className="max-h-96 overflow-y-auto">
                      {accounts.map((account) => (
                        <button
                          key={account.id}
                          onClick={() => {
                            if (onAccountSwitch) {
                              onAccountSwitch(account.id);
                            }
                            setAccountDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 hover:bg-[#f5f5f5] transition-colors border-b border-[#f0f0f0] last:border-b-0 ${
                            account.id === currentAccountId ? 'bg-[#f0fdf4]' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10 flex-shrink-0">
                              <AvatarImage src={account.avatarUrl} alt={account.displayName} />
                              <AvatarFallback className="bg-[#f0f0f2] text-[#1a1a1a]">
                                {account.displayName.charAt(0).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>

                            <div className="flex-1 min-w-0 text-left">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-[#1a1a1a] truncate" style={{ fontSize: '13px', fontWeight: '600' }}>
                                  {account.displayName}
                                </span>
                                <span
                                  className={`inline-flex items-center px-1.5 py-0.5 rounded-full ${getLevelColor(account.level)} flex-shrink-0`}
                                  style={{ fontSize: '10px', fontWeight: '600' }}
                                >
                                  L{account.level}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[#999999] truncate" style={{ fontSize: '11px' }}>
                                  @{account.username}
                                </span>
                                <span className="text-[#cccccc]" style={{ fontSize: '11px' }}>
                                  •
                                </span>
                                <span className="text-[#999999] flex-shrink-0" style={{ fontSize: '11px' }}>
                                  {formatNumber(account.followers)} followers
                                </span>
                              </div>
                            </div>

                            {account.id === currentAccountId && (
                              <Check className="w-5 h-5 text-[#16a34a] flex-shrink-0" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="px-4 py-3 border-t border-[#e0e0e0] bg-[#fafafa]">
                      <button
                        onClick={() => {
                          if (onManageAccounts) {
                            onManageAccounts();
                          }
                          setAccountDropdownOpen(false);
                        }}
                        className="w-full px-4 py-2 rounded-lg bg-white border border-[#e0e0e0] hover:bg-[#f5f5f5] transition-colors text-center"
                      >
                        <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                          Manage Accounts
                        </span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
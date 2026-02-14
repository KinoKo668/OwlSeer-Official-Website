import React from 'react';
import { Mail, Globe, Shield, RefreshCw, Plus, Star, Users, TrendingUp, Check, AlertCircle, ExternalLink, CheckCircle2, XCircle } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../Card';
import { Modal, ModalHeader, ModalContent, ModalFooter } from '../Modal';

interface TikTokAccount {
  id: string;
  username: string;
  displayName: string;
  followers: number;
  isPrimary: boolean;
  region: string;
  lastSync: string;
  avatar?: string;
  accountType?: string;
  isConnected: boolean;
}

interface ConnectedAccountsSettingsProps {
  autoOpenAddModal?: boolean;
}

export function ConnectedAccountsSettings({ autoOpenAddModal = false }: ConnectedAccountsSettingsProps) {
  const [showAddAccountModal, setShowAddAccountModal] = React.useState(false);

  React.useEffect(() => {
    if (autoOpenAddModal) {
      setShowAddAccountModal(true);
    }
  }, [autoOpenAddModal]);
  const [isConnecting, setIsConnecting] = React.useState(false);
  const [showDisconnectModal, setShowDisconnectModal] = React.useState(false);
  const [disconnectAccountId, setDisconnectAccountId] = React.useState<string | null>(null);
  const [confirmationText, setConfirmationText] = React.useState('');
  const [confirmationInput, setConfirmationInput] = React.useState('');
  const connectTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const [tiktokAccounts, setTiktokAccounts] = React.useState<TikTokAccount[]>([
    {
      id: '1',
      username: '@techreviewsarah',
      displayName: 'Sarah Chen',
      followers: 324500,
      isPrimary: true,
      region: 'United States',
      lastSync: '2 minutes ago',
      isConnected: true,
    },
    {
      id: '2',
      username: '@sarahcooks',
      displayName: 'Sarah\'s Kitchen',
      followers: 89200,
      isPrimary: false,
      region: 'United States',
      lastSync: '15 minutes ago',
      isConnected: false,
    },
  ]);
  const [gmailConnected] = React.useState(false);

  const handleSetPrimary = (accountId: string) => {
    setTiktokAccounts(accounts =>
      accounts.map(account => ({
        ...account,
        isPrimary: account.id === accountId,
      }))
    );
  };

  const handleDisconnect = (accountId: string) => {
    setTiktokAccounts(accounts => accounts.filter(account => account.id !== accountId));
  };

  const handleAccountTypeChange = (accountId: string, accountType: string) => {
    setTiktokAccounts(accounts =>
      accounts.map(account =>
        account.id === accountId ? { ...account, accountType } : account
      )
    );
  };

  const handleConnectAccount = () => {
    setIsConnecting(true);
    // Simulate OAuth flow
    connectTimeoutRef.current = setTimeout(() => {
      setIsConnecting(false);
      setShowAddAccountModal(false);
      // In real implementation, this would redirect to TikTok OAuth
      alert('Redirecting to TikTok authorization...');
    }, 1500);
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (connectTimeoutRef.current) {
        clearTimeout(connectTimeoutRef.current);
      }
    };
  }, []);

  const formatFollowers = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const isMobile = false;

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-6 md:py-10">
      <div className="space-y-8">
        {/* TikTok Accounts Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-[#111827] mb-1.5" style={{ fontSize: '18px', fontWeight: '600' }}>
                TikTok Accounts
              </h3>
              <p className="text-[#6b7280]" style={{ fontSize: '14px' }}>
                Manage multiple TikTok accounts. Your primary account is used for AI recommendations.
              </p>
            </div>
            <button 
              onClick={() => setShowAddAccountModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-[8px] bg-[#111827] text-white hover:bg-[#000000] transition-all duration-200 shadow-sm hover:shadow-md" 
              style={{ fontSize: '14px', fontWeight: '500' }}
            >
              <Plus className="w-4 h-4" />
              <span>Add Account</span>
            </button>
          </div>

          <div className="space-y-4">
            {tiktokAccounts.map((account) => (
              <div
                key={account.id}
                className={`group relative bg-white ${
                  isMobile ? 'rounded-[10px] border p-4' : 'rounded-[12px] border p-5'
                } border-[#eaeaea] hover:border-[#d4d4d4] transition-all duration-200`}
                style={{ 
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Connection Status Indicator - Left Border */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-[12px] ${
                    account.isConnected ? 'bg-[#10b981]' : 'bg-[#9ca3af]'
                  }`}
                />

                {/* Main Content */}
                <div className={`${isMobile ? 'space-y-4' : 'flex items-start justify-between gap-6'}`}>
                  {/* Left: Account Info */}
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    {/* Avatar */}
                    <div className={`${isMobile ? 'w-14 h-14' : 'w-16 h-16'} rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#404040] flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <svg className={`${isMobile ? 'w-8 h-8' : 'w-9 h-9'}`} viewBox="0 0 24 24" fill="white">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Header Row */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1.5">
                            <h4 className="text-[#111827] truncate" style={{ fontSize: isMobile ? '16px' : '17px', fontWeight: '600' }}>
                              {account.username}
                            </h4>
                            {account.isPrimary && (
                              <div className="flex items-center gap-1 px-2 py-0.5 rounded-[6px] bg-gradient-to-r from-[#fef9c3] to-[#fef3c7]" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.02em' }}>
                                <Star className="w-3 h-3 text-[#f59e0b] fill-[#f59e0b]" />
                                <span className="text-[#92400e]">PRIMARY</span>
                              </div>
                            )}
                          </div>
                          <p className="text-[#6b7280] mb-2.5" style={{ fontSize: isMobile ? '13px' : '14px', fontWeight: '400' }}>
                            {account.displayName}
                          </p>

                          {/* Stats Badges */}
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#f9fafb] border border-[#f0f0f0]">
                              <Users className={`${isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-[#6b7280]`} />
                              <span className="text-[#111827]" style={{ fontSize: isMobile ? '12px' : '13px', fontWeight: '600' }}>
                                {formatFollowers(account.followers)}
                              </span>
                            </div>

                            {account.isConnected ? (
                              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#dcfce7] border border-[#bbf7d0]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
                                <span className="text-[#065f46]" style={{ fontSize: isMobile ? '11px' : '12px', fontWeight: '600' }}>
                                  Connected
                                </span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#f3f4f6] border border-[#e5e7eb]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#9ca3af]"></div>
                                <span className="text-[#6b7280]" style={{ fontSize: isMobile ? '11px' : '12px', fontWeight: '600' }}>
                                  Disconnected
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Desktop Actions */}
                        {!isMobile && (
                          <div className="flex flex-col gap-2">
                            {!account.isPrimary && (
                              <button
                                onClick={() => handleSetPrimary(account.id)}
                                className="px-4 py-2 rounded-[8px] border border-[#e5e7eb] bg-white hover:bg-[#f9fafb] hover:border-[#d1d5db] hover:shadow-sm transition-all duration-200 text-[#374151]"
                                style={{ fontSize: '13px', fontWeight: '500' }}
                              >
                                Set Primary
                              </button>
                            )}
                            <button
                              onClick={() => {
                                setDisconnectAccountId(account.id);
                                setConfirmationText(`Are you sure you want to disconnect ${account.username}?`);
                                setShowDisconnectModal(true);
                              }}
                              className="px-4 py-2 rounded-[8px] border border-[#e5e7eb] bg-white hover:bg-[#fef2f2] hover:border-[#f87171] hover:text-[#dc2626] hover:shadow-sm transition-all duration-200 text-[#6b7280]"
                              style={{ fontSize: '13px', fontWeight: '500' }}
                            >
                              Disconnect
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Meta Information Grid */}
                      <div className={`grid ${isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-2 gap-x-6 gap-y-2'} mt-3 pt-3 border-t border-[#f3f4f6]`}>
                        <div className="flex items-center gap-2">
                          <Globe className="w-3.5 h-3.5 text-[#9ca3af] flex-shrink-0" />
                          <span className="text-[#6b7280] truncate" style={{ fontSize: '12px' }}>
                            {account.region}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <RefreshCw className="w-3.5 h-3.5 text-[#9ca3af] flex-shrink-0" />
                          <span className="text-[#6b7280] truncate" style={{ fontSize: '12px' }}>
                            {account.lastSync}
                          </span>
                        </div>
                        <div className={`flex items-center gap-2 ${isMobile ? '' : 'col-span-2'}`}>
                          <Shield className="w-3.5 h-3.5 text-[#9ca3af] flex-shrink-0" />
                          <span className="text-[#6b7280] truncate" style={{ fontSize: '12px' }}>
                            Profile, Analytics, Publishing
                          </span>
                        </div>
                      </div>

                      {/* Account Type Selector - Collapsed */}
                      <div className="mt-4 pt-4 border-t border-[#f3f4f6]">
                        <label className="flex items-center justify-between mb-2">
                          <span className="text-[#374151]" style={{ fontSize: '13px', fontWeight: '600' }}>
                            Account Type
                            {account.isPrimary && (
                              <span className="ml-2 px-1.5 py-0.5 rounded bg-[#fef3c7] text-[#92400e]" style={{ fontSize: '9px', fontWeight: '700' }}>
                                FOR AI
                              </span>
                            )}
                          </span>
                          {!account.accountType && (
                            <span className="text-[#9ca3af]" style={{ fontSize: '11px' }}>
                              Not set
                            </span>
                          )}
                        </label>
                        <select
                          value={account.accountType || ''}
                          onChange={(e) => handleAccountTypeChange(account.id, e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-[#e5e7eb] bg-white text-[#374151] hover:border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:ring-opacity-20 focus:border-[#10b981] transition-all"
                          style={{ fontSize: '13px' }}
                        >
                          <option value="" disabled>Select account type…</option>
                          <option value="brand">🏢 Brand / Business</option>
                          <option value="creator">✨ Content Creator</option>
                          <option value="agency">🎯 Agency (MCN / Management)</option>
                          <option value="ecommerce">🛍️ Ecommerce Seller</option>
                          <option value="local">📍 Local Business</option>
                        </select>
                      </div>

                      {/* Mobile Actions */}
                      {isMobile && (
                        <div className="flex gap-2 mt-4">
                          {!account.isPrimary && (
                            <button
                              onClick={() => handleSetPrimary(account.id)}
                              className="flex-1 px-4 py-2.5 rounded-lg border border-[#e5e7eb] bg-white hover:bg-[#f9fafb] transition-all text-[#374151]"
                              style={{ fontSize: '14px', fontWeight: '600' }}
                            >
                              Set Primary
                            </button>
                          )}
                          <button
                            onClick={() => {
                              setDisconnectAccountId(account.id);
                              setConfirmationText(`Are you sure you want to disconnect ${account.username}?`);
                              setShowDisconnectModal(true);
                            }}
                            className="flex-1 px-4 py-2.5 rounded-lg border border-[#e5e7eb] bg-white hover:bg-[#fef2f2] hover:text-[#dc2626] transition-all text-[#6b7280]"
                            style={{ fontSize: '14px', fontWeight: '600' }}
                          >
                            Disconnect
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Primary Account Info Banner */}
                {account.isPrimary && (
                  <div className="mt-5 pt-5 border-t border-[#f0f0f0]">
                    <div className="flex items-start gap-3 p-3.5 rounded-[10px] bg-gradient-to-r from-[#f0fdf4] via-[#ecfdf5] to-[#dcfce7]" style={{ boxShadow: '0 1px 3px rgba(16, 185, 129, 0.08)' }}>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)' }}>
                        <TrendingUp className="w-4 h-4 text-[#10b981]" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#065f46] mb-1" style={{ fontSize: '13px', fontWeight: '600' }}>
                          Primary Account Benefits
                        </p>
                        <p className="text-[#059669]" style={{ fontSize: '12px', lineHeight: '1.6', fontWeight: '400' }}>
                          AI insights, content plans, and weekly recommendations are generated from this account.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Add Account Info */}
          <div className="mt-4 p-4 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0]">
            <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
              <strong className="text-[#1a1a1a]">Why connect multiple accounts?</strong> Manage all your TikTok creator profiles in one place. Switch between accounts to view analytics, plan content, and track monetization opportunities across your entire creator portfolio.
            </p>
          </div>
        </div>
      </div>

      {/* Add Account Modal */}
      <Modal isOpen={showAddAccountModal} onClose={() => setShowAddAccountModal(false)} size="md">
        <ModalHeader onClose={() => setShowAddAccountModal(false)}>
          <div>
            <h3 className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700' }}>
              Add TikTok Account
            </h3>
            <p className="text-[#666666] mt-1" style={{ fontSize: '14px' }}>
              Connect another TikTok account to manage multiple creator profiles
            </p>
          </div>
        </ModalHeader>

        <ModalContent>
          <div className="space-y-5">
            {/* TikTok Logo and Info */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-[#fafafa] border border-[#e0e0e0]">
              <div className="w-14 h-14 rounded-lg bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-[#1a1a1a] mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>
                  TikTok for Creators
                </h4>
                <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                  Securely connect your TikTok account via OAuth 2.0
                </p>
              </div>
            </div>

            {/* What we'll access */}
            <div>
              <h4 className="text-[#1a1a1a] mb-3" style={{ fontSize: '15px', fontWeight: '700' }}>
                What we'll access
              </h4>
              <div className="space-y-2.5">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Profile Information
                    </p>
                    <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                      Username, display name, bio, and profile picture
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Analytics & Insights
                    </p>
                    <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                      Views, engagement rates, follower growth, and content performance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Publishing Permissions
                    </p>
                    <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                      Schedule and publish content with your approval
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="p-4 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0]">
              <div className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-[#166534] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#166534]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                    <strong>Your data is secure:</strong> We never post content without your explicit approval. All data is encrypted and stored following industry standards. You can disconnect anytime.
                  </p>
                </div>
              </div>
            </div>

            {/* Warning for existing accounts */}
            {tiktokAccounts.length > 0 && (
              <div className="p-4 rounded-lg bg-[#fffbeb] border border-[#fde68a]">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-[#92400e] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#92400e]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                      <strong>Note:</strong> Your current primary account (@{tiktokAccounts.find(a => a.isPrimary)?.username.replace('@', '')}) will continue to receive AI recommendations. You can change your primary account anytime in settings.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Learn more */}
            <button className="flex items-center gap-2 text-[#666666] hover:text-[#1a1a1a] transition-colors" style={{ fontSize: '13px', fontWeight: '600' }}>
              <span>Learn more about our data practices</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </ModalContent>

        <ModalFooter>
          <button
            onClick={() => setShowAddAccountModal(false)}
            className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#666666]"
            style={{ fontSize: '14px', fontWeight: '600' }}
          >
            Cancel
          </button>
          <button
            onClick={handleConnectAccount}
            disabled={isConnecting}
            className="px-6 py-2.5 rounded-lg bg-[#1a1a1a] text-white hover:bg-[#000000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontSize: '14px', fontWeight: '600' }}
          >
            {isConnecting ? 'Connecting...' : 'Connect TikTok Account'}
          </button>
        </ModalFooter>
      </Modal>

      {/* Disconnect Account Modal */}
      <Modal 
        isOpen={showDisconnectModal} 
        onClose={() => {
          setShowDisconnectModal(false);
          setConfirmationInput('');
        }} 
        size="md"
      >
        <ModalHeader onClose={() => {
          setShowDisconnectModal(false);
          setConfirmationInput('');
        }}>
          <div>
            <h3 className="text-[#dc2626]" style={{ fontSize: '20px', fontWeight: '700' }}>
              Disconnect TikTok Account
            </h3>
          </div>
        </ModalHeader>

        <ModalContent>
          <div className="space-y-5">
            {/* Warning Banner */}
            <div className="p-4 rounded-lg bg-[#fef2f2] border-2 border-[#fca5a5]">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-[#dc2626] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#991b1b] mb-2" style={{ fontSize: '14px', fontWeight: '700' }}>
                    Warning: This action cannot be undone
                  </p>
                  <p className="text-[#991b1b]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                    Disconnecting this account will permanently delete all accumulated data associated with it.
                  </p>
                </div>
              </div>
            </div>

            {/* What will be lost */}
            <div>
              <p className="text-[#1a1a1a] mb-3" style={{ fontSize: '14px', fontWeight: '700' }}>
                You will lose access to:
              </p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Analytics & Insights History
                    </p>
                    <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                      All historical performance data, engagement metrics, and growth trends
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                      AI-Generated Content Plans
                    </p>
                    <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                      Saved content ideas, scripts, and personalized recommendations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Scheduled Posts & Drafts
                    </p>
                    <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                      All scheduled content and saved drafts in the queue
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Account Settings & Preferences
                    </p>
                    <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                      Custom configurations, automation rules, and account-specific settings
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Confirmation Input */}
            <div>
              <label className="block mb-2">
                <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '700' }}>
                  Type <span className="px-1.5 py-0.5 rounded bg-[#f3f4f6] font-mono text-[#dc2626]">DISCONNECT</span> to confirm:
                </span>
              </label>
              <input
                type="text"
                value={confirmationInput}
                onChange={(e) => setConfirmationInput(e.target.value)}
                placeholder="Type DISCONNECT here"
                className="w-full px-4 py-3 rounded-lg border-2 border-[#e5e7eb] focus:outline-none focus:border-[#dc2626] focus:ring-2 focus:ring-[#fca5a5] focus:ring-opacity-20 transition-all"
                style={{ fontSize: '14px' }}
                autoComplete="off"
              />
              <p className="mt-2 text-[#666666]" style={{ fontSize: '12px' }}>
                This confirmation is required to prevent accidental disconnections.
              </p>
            </div>
          </div>
        </ModalContent>

        <ModalFooter>
          <button
            onClick={() => {
              setShowDisconnectModal(false);
              setConfirmationInput('');
            }}
            className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#666666]"
            style={{ fontSize: '14px', fontWeight: '600' }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (disconnectAccountId) {
                handleDisconnect(disconnectAccountId);
              }
              setShowDisconnectModal(false);
              setConfirmationInput('');
            }}
            disabled={confirmationInput !== 'DISCONNECT'}
            className="px-6 py-2.5 rounded-lg bg-[#dc2626] text-white hover:bg-[#b91c1c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#dc2626]"
            style={{ fontSize: '14px', fontWeight: '600' }}
          >
            Disconnect Account
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

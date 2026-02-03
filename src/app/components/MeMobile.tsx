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
  Globe,
  Moon,
  LogOut,
  HelpCircle,
  FileText,
  Settings as SettingsIcon,
  Check,
  Crown,
  Coins,
} from 'lucide-react';
import { MobileLayout } from './MobileLayout';

type Language = 'en' | 'zh';

const translations = {
  en: {
    // Header
    settings: 'Settings',
    
    // Profile Section
    profile: 'Profile',
    editProfile: 'Edit Profile',
    accountLevel: 'Account Level',
    
    // Quick Stats
    currentPlan: 'Current Plan',
    growthPlan: 'Growth Plan',
    creditsLeft: 'AI Credits Left',
    upgrade: 'Upgrade',
    
    // Settings Sections
    accountSettings: 'Account Settings',
    account: 'Account',
    accountDesc: 'Personal information and preferences',
    
    connectedAccounts: 'Connected Accounts',
    connectedDesc: 'Manage TikTok and other integrations',
    
    subscriptionBilling: 'Subscription & Billing',
    billingDesc: 'Manage plan, payment, and usage',
    
    aiPreferences: 'AI Preferences',
    aiDesc: 'Control AI strategy and behavior',
    
    contentAutomation: 'Content & Automation',
    contentDesc: 'Automation rules and preferences',
    
    notifications: 'Notifications',
    notificationsDesc: 'Push, email, and alert settings',
    
    securityPrivacy: 'Security & Privacy',
    securityDesc: 'Password, 2FA, and data privacy',
    
    team: 'Team',
    teamDesc: 'Workspace and collaboration settings',
    
    // App Settings
    appSettings: 'App Settings',
    language: 'Language',
    theme: 'Theme',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    
    // Support
    support: 'Support & About',
    helpCenter: 'Help Center',
    documentation: 'Documentation',
    termsPrivacy: 'Terms & Privacy',
    version: 'Version',
    
    // Actions
    signOut: 'Sign Out',
    
    // Status
    connected: 'Connected',
    notConnected: 'Not Connected',
    active: 'Active',
  },
  zh: {
    settings: '设置',
    
    profile: '个人资料',
    editProfile: '编辑资料',
    accountLevel: '账户等级',
    
    currentPlan: '当前计划',
    growthPlan: 'Growth 计划',
    creditsLeft: 'AI 积分余额',
    upgrade: '升级',
    
    accountSettings: '账户设置',
    account: '账户',
    accountDesc: '个人信息和偏好设置',
    
    connectedAccounts: '连接的账户',
    connectedDesc: '管理 TikTok 和其他集成',
    
    subscriptionBilling: '订阅与账单',
    billingDesc: '管理计划、付款和使用情况',
    
    aiPreferences: 'AI 偏好',
    aiDesc: '控制 AI 策略和行为',
    
    contentAutomation: '内容与自动化',
    contentDesc: '自动化规则和偏好',
    
    notifications: '通知',
    notificationsDesc: '推送、邮件和提醒设置',
    
    securityPrivacy: '安全与隐私',
    securityDesc: '密码、双重验证和数据隐私',
    
    team: '团队',
    teamDesc: '工作区和协作设置',
    
    appSettings: '应用设置',
    language: '语言',
    theme: '主题',
    lightMode: '浅色模式',
    darkMode: '深色模式',
    
    support: '支持与关于',
    helpCenter: '帮助中心',
    documentation: '文档',
    termsPrivacy: '条款与隐私',
    version: '版本',
    
    signOut: '退出登录',
    
    connected: '已连接',
    notConnected: '未连接',
    active: '活跃',
  },
};

interface MeMobileProps {
  onNavigate?: (page: string) => void;
  onSectionChange?: (section: string) => void;
}

export function MeMobile({ onNavigate, onSectionChange }: MeMobileProps) {
  const [language, setLanguage] = React.useState<Language>('en');
  const [selectedAccount, setSelectedAccount] = React.useState('TechReviews_US');

  const t = translations[language];

  const mockAccounts = [
    {
      id: 'TechReviews_US',
      name: 'TechReviews_US',
      displayName: '@techreviews_us',
      followers: '125.6K',
      avatar: 'TR',
      level: 5,
    },
    {
      id: 'SarahTech',
      name: 'SarahTech',
      displayName: '@sarahtech',
      followers: '45.2K',
      avatar: 'ST',
      level: 3,
    },
  ];

  const currentAccount = mockAccounts.find(acc => acc.id === selectedAccount) || mockAccounts[0];

  // Handle settings section navigation
  const handleSectionClick = (section: string) => {
    onSectionChange?.(section);
    onNavigate?.('settings');
  };

  return (
    <MobileLayout
      currentAccount={currentAccount}
      accounts={mockAccounts}
      onAccountChange={setSelectedAccount}
      language={language}
      onLanguageChange={() => setLanguage(language === 'en' ? 'zh' : 'en')}
      activeTab="me"
      onNavigate={onNavigate}
      showAccountSelector={false}
      showNotifications={false}
      showLanguageToggle={false}
    >
      {/* Custom Header with Profile */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#404040] px-4 pt-6 pb-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white" style={{ fontSize: '24px', fontWeight: '700' }}>
            {t.settings}
          </h1>
          <button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            style={{ fontSize: '12px', fontWeight: '600' }}
          >
            {language === 'en' ? 'EN' : '中文'}
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-[#e0e0e0] flex items-center justify-center text-[#1a1a1a] flex-shrink-0"
              style={{ fontSize: '20px', fontWeight: '700' }}
            >
              {currentAccount.avatar}
            </div>
            <div className="flex-1">
              <h2 className="text-white mb-1" style={{ fontSize: '18px', fontWeight: '700' }}>
                {currentAccount.name}
              </h2>
              <p className="text-white/70 mb-1" style={{ fontSize: '13px' }}>
                {currentAccount.displayName}
              </p>
              <div className="flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5 text-[#fbbf24]" />
                <span className="text-[#fbbf24]" style={{ fontSize: '12px', fontWeight: '600' }}>
                  Level {currentAccount.level}
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-white/70 mb-1" style={{ fontSize: '11px', fontWeight: '600' }}>
                {t.currentPlan}
              </p>
              <div className="flex items-center gap-1.5">
                <span className="text-white" style={{ fontSize: '14px', fontWeight: '700' }}>
                  {t.growthPlan}
                </span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-white/70 mb-1" style={{ fontSize: '11px', fontWeight: '600' }}>
                {t.creditsLeft}
              </p>
              <div className="flex items-center gap-1.5">
                <Coins className="w-3.5 h-3.5 text-[#fbbf24]" />
                <span className="text-white" style={{ fontSize: '14px', fontWeight: '700' }}>
                  1,750
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Content */}
      <div className="p-4 space-y-6 -mt-4">
        {/* Account Settings Section */}
        <div>
          <h3 className="text-[#999999] mb-3 px-2" style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {t.accountSettings}
          </h3>
          <div className="bg-white rounded-xl border border-[#e0e0e0] overflow-hidden">
            <SettingsItem
              icon={<User className="w-5 h-5 text-[#3b82f6]" />}
              title={t.account}
              description={t.accountDesc}
              onClick={() => handleSectionClick('account')}
            />
            <SettingsItem
              icon={<Link2 className="w-5 h-5 text-[#10b981]" />}
              title={t.connectedAccounts}
              description={t.connectedDesc}
              badge="1"
              onClick={() => handleSectionClick('connected')}
            />
            <SettingsItem
              icon={<CreditCard className="w-5 h-5 text-[#8b5cf6]" />}
              title={t.subscriptionBilling}
              description={t.billingDesc}
              onClick={() => handleSectionClick('billing')}
            />
            <SettingsItem
              icon={<Users className="w-5 h-5 text-[#f59e0b]" />}
              title={t.team}
              description={t.teamDesc}
              onClick={() => handleSectionClick('team')}
              showBorder={false}
            />
          </div>
        </div>

        {/* AI & Automation Section */}
        <div>
          <h3 className="text-[#999999] mb-3 px-2" style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            AI & Automation
          </h3>
          <div className="bg-white rounded-xl border border-[#e0e0e0] overflow-hidden">
            <SettingsItem
              icon={<Sparkles className="w-5 h-5 text-[#ec4899]" />}
              title={t.aiPreferences}
              description={t.aiDesc}
              onClick={() => handleSectionClick('ai')}
            />
            <SettingsItem
              icon={<Zap className="w-5 h-5 text-[#f59e0b]" />}
              title={t.contentAutomation}
              description={t.contentDesc}
              onClick={() => handleSectionClick('content')}
              showBorder={false}
            />
          </div>
        </div>

        {/* Preferences Section */}
        <div>
          <h3 className="text-[#999999] mb-3 px-2" style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Preferences
          </h3>
          <div className="bg-white rounded-xl border border-[#e0e0e0] overflow-hidden">
            <SettingsItem
              icon={<Bell className="w-5 h-5 text-[#3b82f6]" />}
              title={t.notifications}
              description={t.notificationsDesc}
              onClick={() => handleSectionClick('notifications')}
            />
            <SettingsItem
              icon={<Shield className="w-5 h-5 text-[#dc2626]" />}
              title={t.securityPrivacy}
              description={t.securityDesc}
              onClick={() => handleSectionClick('security')}
              showBorder={false}
            />
          </div>
        </div>

        {/* App Settings Section */}
        <div>
          <h3 className="text-[#999999] mb-3 px-2" style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {t.appSettings}
          </h3>
          <div className="bg-white rounded-xl border border-[#e0e0e0] overflow-hidden">
            <SettingsToggleItem
              icon={<Globe className="w-5 h-5 text-[#3b82f6]" />}
              title={t.language}
              value={language === 'en' ? 'English' : '中文'}
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            />
            <SettingsToggleItem
              icon={<Moon className="w-5 h-5 text-[#8b5cf6]" />}
              title={t.theme}
              value={t.lightMode}
              onClick={() => {}}
              showBorder={false}
            />
          </div>
        </div>

        {/* Support & About Section */}
        <div>
          <h3 className="text-[#999999] mb-3 px-2" style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {t.support}
          </h3>
          <div className="bg-white rounded-xl border border-[#e0e0e0] overflow-hidden">
            <SettingsItem
              icon={<HelpCircle className="w-5 h-5 text-[#3b82f6]" />}
              title={t.helpCenter}
              onClick={() => {}}
            />
            <SettingsItem
              icon={<FileText className="w-5 h-5 text-[#666666]" />}
              title={t.documentation}
              onClick={() => {}}
            />
            <SettingsItem
              icon={<Shield className="w-5 h-5 text-[#666666]" />}
              title={t.termsPrivacy}
              onClick={() => {}}
            />
            <SettingsItem
              icon={<SettingsIcon className="w-5 h-5 text-[#666666]" />}
              title={t.version}
              value="1.0.0"
              showChevron={false}
              showBorder={false}
            />
          </div>
        </div>

        {/* Sign Out Button */}
        <button
          onClick={() => {}}
          className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white border border-[#e0e0e0] text-[#dc2626] hover:bg-[#fef2f2] transition-colors active:scale-98"
          style={{ fontSize: '15px', fontWeight: '600' }}
        >
          <LogOut className="w-5 h-5" />
          {t.signOut}
        </button>

        {/* Bottom Spacing for Tab Bar */}
        <div className="h-4"></div>
      </div>
    </MobileLayout>
  );
}

// Settings Item Component
interface SettingsItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  value?: string;
  badge?: string;
  showChevron?: boolean;
  showBorder?: boolean;
  onClick?: () => void;
}

function SettingsItem({
  icon,
  title,
  description,
  value,
  badge,
  showChevron = true,
  showBorder = true,
  onClick,
}: SettingsItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-4 hover:bg-[#f5f5f5] transition-colors active:scale-98 ${
        showBorder ? 'border-b border-[#e0e0e0]' : ''
      }`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1 text-left">
        <div className="flex items-center gap-2">
          <span className="text-[#1a1a1a]" style={{ fontSize: '15px', fontWeight: '600' }}>
            {title}
          </span>
          {badge && (
            <span className="px-2 py-0.5 rounded-full bg-[#3b82f6] text-white" style={{ fontSize: '11px', fontWeight: '700' }}>
              {badge}
            </span>
          )}
        </div>
        {description && (
          <p className="text-[#999999] mt-0.5" style={{ fontSize: '13px', lineHeight: '1.4' }}>
            {description}
          </p>
        )}
      </div>
      {value && (
        <span className="text-[#999999]" style={{ fontSize: '14px', fontWeight: '500' }}>
          {value}
        </span>
      )}
      {showChevron && <ChevronRight className="w-5 h-5 text-[#d0d0d0] flex-shrink-0" />}
    </button>
  );
}

// Settings Toggle Item Component
interface SettingsToggleItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  showBorder?: boolean;
  onClick?: () => void;
}

function SettingsToggleItem({
  icon,
  title,
  value,
  showBorder = true,
  onClick,
}: SettingsToggleItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-4 hover:bg-[#f5f5f5] transition-colors active:scale-98 ${
        showBorder ? 'border-b border-[#e0e0e0]' : ''
      }`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1 text-left">
        <span className="text-[#1a1a1a]" style={{ fontSize: '15px', fontWeight: '600' }}>
          {title}
        </span>
      </div>
      <span className="text-[#3b82f6]" style={{ fontSize: '14px', fontWeight: '600' }}>
        {value}
      </span>
      <ChevronRight className="w-5 h-5 text-[#d0d0d0] flex-shrink-0" />
    </button>
  );
}

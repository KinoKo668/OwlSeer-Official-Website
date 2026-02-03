import React from 'react';
import {
  User,
  Link2,
  Sparkles,
  Zap,
  Bell,
  Shield,
  ChevronRight,
  Check,
  AlertCircle,
  CreditCard,
  Users,
} from 'lucide-react';
import { Card } from '../Card';

interface SettingsOverviewProps {
  onNavigateToSection: (section: string) => void;
}

export function SettingsOverview({ onNavigateToSection }: SettingsOverviewProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 md:py-8">
      {/* Quick Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-8">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#999999] mb-1" style={{ fontSize: '13px' }}>
                Account Status
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#16a34a]"></div>
                <span className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700' }}>
                  Active
                </span>
              </div>
            </div>
            <User className="w-8 h-8 text-[#e0e0e0]" />
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#999999] mb-1" style={{ fontSize: '13px' }}>
                Connected Accounts
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700' }}>
                  1 of 2
                </span>
              </div>
            </div>
            <Link2 className="w-8 h-8 text-[#e0e0e0]" />
          </div>
        </Card>
      </div>

      {/* Settings Sections Grid */}
      <div className="space-y-3">
        <SettingsSectionCard
          icon={<User className="w-5 h-5" />}
          title="Account"
          description="Personal information, time zone, and language preferences"
          status="Complete"
          onClick={() => onNavigateToSection('account')}
        />

        <SettingsSectionCard
          icon={<Link2 className="w-5 h-5" />}
          title="Connected Accounts"
          description="Manage TikTok and Gmail integrations"
          status="1 connected"
          statusColor="warning"
          onClick={() => onNavigateToSection('connected')}
        />

        <SettingsSectionCard
          icon={<CreditCard className="w-5 h-5" />}
          title="Billing & Usage"
          description="Manage subscription, payment method, and AI credits usage"
          status="Growth Plan • 1,750 credits left"
          onClick={() => onNavigateToSection('billing')}
        />

        <SettingsSectionCard
          icon={<Users className="w-5 h-5" />}
          title="Team"
          description="Workspace defaults and future team collaboration settings"
          status="Personal workspace"
          onClick={() => onNavigateToSection('team')}
        />

        <SettingsSectionCard
          icon={<Sparkles className="w-5 h-5" />}
          title="AI Preferences"
          description="Control AI strategy and proactiveness level"
          status="Balanced mode"
          onClick={() => onNavigateToSection('ai')}
        />

        <SettingsSectionCard
          icon={<Zap className="w-5 h-5" />}
          title="Content & Automation"
          description="Configure automated content planning and approval workflows"
          status="2 active automations"
          onClick={() => onNavigateToSection('content')}
        />

        <SettingsSectionCard
          icon={<Bell className="w-5 h-5" />}
          title="Notifications"
          description="Choose what updates you want to receive"
          status="4 enabled"
          onClick={() => onNavigateToSection('notifications')}
        />

        <SettingsSectionCard
          icon={<Shield className="w-5 h-5" />}
          title="Security & Privacy"
          description="Manage your data, security settings, and account deletion"
          status="Protected"
          onClick={() => onNavigateToSection('security')}
        />
      </div>
    </div>
  );
}

interface SettingsSectionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: string;
  statusColor?: 'success' | 'warning' | 'neutral';
  onClick: () => void;
}

function SettingsSectionCard({
  icon,
  title,
  description,
  status,
  statusColor = 'neutral',
  onClick,
}: SettingsSectionCardProps) {
  const statusColors = {
    success: 'text-[#16a34a]',
    warning: 'text-[#ea580c]',
    neutral: 'text-[#666666]',
  };

  return (
    <button
      onClick={onClick}
      className="w-full p-5 rounded-[12px] border border-[#e0e0e0] bg-white hover:border-[#1a1a1a] hover:shadow-sm transition-all text-left group"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-[#f5f5f5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a1a1a] transition-colors">
          <span className="text-[#666666] group-hover:text-white transition-colors">
            {icon}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[#1a1a1a] mb-1" style={{ fontSize: '15px', fontWeight: '700' }}>
            {title}
          </h3>
          <p className="text-[#666666] mb-2" style={{ fontSize: '13px', lineHeight: '1.5' }}>
            {description}
          </p>
          <div className="flex items-center gap-2">
            <Check className={`w-3.5 h-3.5 ${statusColors[statusColor]}`} />
            <span className={statusColors[statusColor]} style={{ fontSize: '12px', fontWeight: '600' }}>
              {status}
            </span>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-[#c0c0c0] group-hover:text-[#1a1a1a] transition-colors flex-shrink-0" />
      </div>
    </button>
  );
}
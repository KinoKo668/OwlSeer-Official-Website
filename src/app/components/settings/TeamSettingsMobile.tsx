import React from 'react';
import {
  Users,
  UserPlus,
  Shield,
  Lock,
  FileText,
  Settings,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';
import { BottomTabBar } from '../BottomTabBar';

// Lazy load sub-components at module level (outside component) to prevent recreation on each render
const TeamOverviewMobile = React.lazy(() =>
  import('./TeamOverviewMobile').then((m) => ({ default: m.TeamOverviewMobile }))
);
const TeamMembersMobile = React.lazy(() =>
  import('./TeamMembersMobile').then((m) => ({ default: m.TeamMembersMobile }))
);
const PendingInvitesMobile = React.lazy(() =>
  import('./PendingInvitesMobile').then((m) => ({ default: m.PendingInvitesMobile }))
);
const RolesPermissionsMobile = React.lazy(() =>
  import('./RolesPermissionsMobile').then((m) => ({ default: m.RolesPermissionsMobile }))
);
const SecuritySettingsMobile = React.lazy(() =>
  import('./SecuritySettingsMobile').then((m) => ({ default: m.SecuritySettingsMobile }))
);
const AuditLogMobile = React.lazy(() =>
  import('./AuditLogMobile').then((m) => ({ default: m.AuditLogMobile }))
);

interface TeamSettingsMobileProps {
  onNavigate?: (page: string) => void;
}

export function TeamSettingsMobile({ onNavigate }: TeamSettingsMobileProps) {
  const [activeSubSection, setActiveSubSection] = React.useState<string | null>(null);

  // Mock data for badges
  const activeMembersCount = 5;
  const pendingInvitesCount = 2;

  const sections = [
    {
      id: 'overview',
      label: 'Team Overview',
      description: 'Team name, logo, and workspace info',
      icon: <Settings className="w-5 h-5" />,
      badge: null,
    },
    {
      id: 'members',
      label: 'Members',
      description: 'Manage team members and roles',
      icon: <Users className="w-5 h-5" />,
      badge: activeMembersCount,
    },
    {
      id: 'invites',
      label: 'Pending Invites',
      description: 'View and manage pending invitations',
      icon: <UserPlus className="w-5 h-5" />,
      badge: pendingInvitesCount,
    },
    {
      id: 'roles',
      label: 'Roles & Permissions',
      description: 'Understand team role capabilities',
      icon: <Shield className="w-5 h-5" />,
      badge: null,
    },
    {
      id: 'security',
      label: 'Security',
      description: 'Two-factor auth and restrictions',
      icon: <Lock className="w-5 h-5" />,
      badge: null,
    },
    {
      id: 'audit',
      label: 'Audit Log',
      description: 'View team activity history',
      icon: <FileText className="w-5 h-5" />,
      badge: null,
    },
  ];

  // If a subsection is selected, render full page with its own header
  if (activeSubSection) {
    const currentSection = sections.find(s => s.id === activeSubSection);
    const sectionTitle = currentSection?.label || 'Team';
    
    return (
      <div className="flex flex-col h-full bg-[#fafafa]">
        {/* Header */}
        <div className="bg-white border-b border-[#e0e0e0] flex-shrink-0">
          <div className="px-4 py-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveSubSection(null)}
                className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-[#f5f5f5] active:bg-[#e0e0e0] transition-colors"
                aria-label="Back to Team Settings"
              >
                <ArrowLeft className="w-5 h-5 text-[#1a1a1a]" />
              </button>
              <h1 className="text-[#1a1a1a] flex-1" style={{ fontSize: '20px', fontWeight: '700' }}>
                {sectionTitle}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide pb-[80px]">
          <TeamSettingsSubSection
            section={activeSubSection}
            onBack={() => setActiveSubSection(null)}
            onNavigate={onNavigate}
          />
        </div>

        {/* Bottom Tab Bar */}
        <BottomTabBar activeItem="settings" onNavigate={onNavigate} />
      </div>
    );
  }

  // Main menu - just content, no header (MobileSettingsPage provides it)
  return (
    <div className="px-4 py-4">
      <div className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSubSection(section.id)}
            className="w-full bg-white rounded-xl border border-[#e0e0e0] p-4 active:bg-[#f5f5f5] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#f5f5f5] flex items-center justify-center text-[#666666]">
                {section.icon}
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[#1a1a1a]" style={{ fontSize: '15px', fontWeight: '600' }}>
                    {section.label}
                  </span>
                  {section.badge !== null && (
                    <span
                      className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-[#3b82f6] text-white"
                      style={{ fontSize: '11px', fontWeight: '700' }}
                    >
                      {section.badge}
                    </span>
                  )}
                </div>
                <p className="text-[#999999] mt-0.5" style={{ fontSize: '13px' }}>
                  {section.description}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#d0d0d0] flex-shrink-0" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Sub-section router component
interface TeamSettingsSubSectionProps {
  section: string;
  onBack: () => void;
  onNavigate?: (page: string) => void;
}

function TeamSettingsSubSection({ section, onBack, onNavigate }: TeamSettingsSubSectionProps) {
  // Sub-components are now lazy loaded at module level (above)
  // Use useMemo to cache the component based on section to prevent unnecessary re-renders
  const content = React.useMemo(() => {
    switch (section) {
      case 'overview':
        return <TeamOverviewMobile onBack={onBack} />;
      case 'members':
        return <TeamMembersMobile onBack={onBack} />;
      case 'invites':
        return <PendingInvitesMobile onBack={onBack} />;
      case 'roles':
        return <RolesPermissionsMobile onBack={onBack} />;
      case 'security':
        return <SecuritySettingsMobile onBack={onBack} />;
      case 'audit':
        return <AuditLogMobile onBack={onBack} />;
      default:
        return null;
    }
  }, [section, onBack]);

  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center h-full">
          <div className="text-[#999999]" style={{ fontSize: '14px' }}>
            Loading...
          </div>
        </div>
      }
    >
      {content}
    </React.Suspense>
  );
}
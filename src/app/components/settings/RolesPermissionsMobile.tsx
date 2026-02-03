import React from 'react';
import {
  ArrowLeft,
  Crown,
  Shield,
  Edit3,
  Eye,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface RolesPermissionsMobileProps {
  onBack: () => void;
}

type RoleType = 'Owner' | 'Admin' | 'Editor' | 'Viewer';

interface RoleInfo {
  role: RoleType;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  permissions: string[];
}

export function RolesPermissionsMobile({ onBack }: RolesPermissionsMobileProps) {
  const [expandedRole, setExpandedRole] = React.useState<RoleType | null>('Owner');

  const roles: RoleInfo[] = [
    {
      role: 'Owner',
      icon: <Crown className="w-5 h-5" />,
      color: 'text-[#f59e0b]',
      bgColor: 'bg-[#fef3c7]',
      borderColor: 'border-[#fbbf24]',
      description: 'Full control over workspace, team, and billing',
      permissions: [
        'Full access to all features',
        'Manage team members and roles',
        'Transfer ownership',
        'Delete workspace',
        'Manage billing and subscription',
        'Configure all settings',
        'View audit logs',
      ],
    },
    {
      role: 'Admin',
      icon: <Shield className="w-5 h-5" />,
      color: 'text-[#3b82f6]',
      bgColor: 'bg-[#eff6ff]',
      borderColor: 'border-[#3b82f6]',
      description: 'Manage team and content, cannot change billing',
      permissions: [
        'Manage all content',
        'Invite and remove members',
        'Change member roles (except Owner)',
        'Configure AI settings',
        'View audit logs',
        'Cannot access billing',
        'Cannot delete workspace',
      ],
    },
    {
      role: 'Editor',
      icon: <Edit3 className="w-5 h-5" />,
      color: 'text-[#8b5cf6]',
      bgColor: 'bg-[#f5f3ff]',
      borderColor: 'border-[#8b5cf6]',
      description: 'Create and edit content, limited team access',
      permissions: [
        'Create and edit content',
        'Schedule posts',
        'Use AI features',
        'View team members',
        'Cannot manage team or settings',
        'Cannot access billing',
        'Cannot invite members',
      ],
    },
    {
      role: 'Viewer',
      icon: <Eye className="w-5 h-5" />,
      color: 'text-[#666666]',
      bgColor: 'bg-[#f5f5f5]',
      borderColor: 'border-[#e0e0e0]',
      description: 'Read-only access to content and analytics',
      permissions: [
        'View content and analytics',
        'View schedules',
        'Cannot edit or create content',
        'Cannot access settings',
        'Cannot see billing',
        'Cannot invite members',
      ],
    },
  ];

  const toggleRole = (role: RoleType) => {
    setExpandedRole(expandedRole === role ? null : role);
  };

  return (
    <div className="px-4 py-4 space-y-3">{/* No header - TeamSettingsMobile provides it */}
      {roles.map((roleInfo) => {
        const isExpanded = expandedRole === roleInfo.role;

        return (
          <div
            key={roleInfo.role}
            className={`bg-white rounded-xl border-2 overflow-hidden transition-all ${
              isExpanded ? roleInfo.borderColor : 'border-[#e0e0e0]'
            }`}
          >
            {/* Role Header */}
            <button
              onClick={() => toggleRole(roleInfo.role)}
              className={`w-full p-4 transition-colors ${
                isExpanded ? roleInfo.bgColor : 'bg-white active:bg-[#f5f5f5]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${roleInfo.bgColor} ${roleInfo.color}`}
                >
                  {roleInfo.icon}
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700' }}>
                      {roleInfo.role}
                    </span>
                    {roleInfo.role === 'Owner' && (
                      <span
                        className="px-2 py-0.5 rounded-full bg-[#fbbf24] text-white"
                        style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                      >
                        Highest
                      </span>
                    )}
                  </div>
                  <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.4' }}>
                    {roleInfo.description}
                  </p>
                </div>
                <div className={`${roleInfo.color} flex-shrink-0`}>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>
            </button>

            {/* Permissions List (Expanded) */}
            {isExpanded && (
              <div className="border-t border-[#e0e0e0] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="w-4 h-4 text-[#10b981]" />
                  <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                    Permissions
                  </span>
                </div>
                <div className="space-y-2">
                  {roleInfo.permissions.map((permission, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-1.5 flex-shrink-0" />
                      <span className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                        {permission}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Info Card */}
      <div className="bg-[#eff6ff] border border-[#3b82f6] rounded-xl p-4 mt-6">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[#1e40af] mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
              Role Assignment
            </h4>
            <p className="text-[#1e40af]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
              Only Owners and Admins can change member roles. The Owner role can only be transferred, not assigned.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
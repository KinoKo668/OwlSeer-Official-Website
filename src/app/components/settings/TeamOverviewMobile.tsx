import React from 'react';
import {
  ArrowLeft,
  Users,
  Upload,
  Key,
  Copy,
  Check,
  Crown,
  ChevronRight,
} from 'lucide-react';

interface TeamOverviewMobileProps {
  onBack: () => void;
}

export function TeamOverviewMobile({ onBack }: TeamOverviewMobileProps) {
  const [teamName, setTeamName] = React.useState('TechCreator Studio');
  const [teamLogo, setTeamLogo] = React.useState<string | null>(null);
  const [workspaceId] = React.useState('ws_7x9k2m4n8p1q');
  const [copiedWorkspaceId, setCopiedWorkspaceId] = React.useState(false);
  const [showTransferOwnershipModal, setShowTransferOwnershipModal] = React.useState(false);
  const logoInputRef = React.useRef<HTMLInputElement>(null);
  const copyTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Owner info
  const owner = {
    name: 'Sarah Chen',
    email: 'sarah.chen@email.com',
    avatar: null,
  };

  // Current user (for permission checks)
  const currentUserRole = 'Owner'; // In production, this would come from auth context

  const handleLogoClick = () => {
    logoInputRef.current?.click();
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setTeamLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const copyWorkspaceId = () => {
    navigator.clipboard.writeText(workspaceId);
    setCopiedWorkspaceId(true);
    // Clear existing timeout if any
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }
    copyTimeoutRef.current = setTimeout(() => setCopiedWorkspaceId(false), 2000);
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="px-4 py-4 space-y-4">{/* Content - No header, MobileSettingsPage provides it */}

      {/* Team Logo Section */}
      <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
        <div className="flex items-center gap-2 mb-3">
          <Upload className="w-4 h-4 text-[#666666]" />
          <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
            Team Logo
          </span>
        </div>
        <div className="flex flex-col items-center py-4">
          <button
            onClick={handleLogoClick}
            className="relative group mb-3"
          >
            <div className="w-24 h-24 rounded-full bg-[#f5f5f5] border-2 border-[#e0e0e0] overflow-hidden flex items-center justify-center">
              {teamLogo ? (
                <img src={teamLogo} alt="Team Logo" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              ) : (
                <Users className="w-12 h-12 text-[#999999]" />
              )}
            </div>
            <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-active:opacity-100 transition-opacity flex items-center justify-center">
              <Upload className="w-6 h-6 text-white" />
            </div>
          </button>
          <button
            onClick={handleLogoClick}
            className="px-4 py-2 rounded-lg bg-[#f5f5f5] text-[#1a1a1a] active:bg-[#e0e0e0] transition-colors"
            style={{ fontSize: '14px', fontWeight: '600' }}
          >
            {teamLogo ? 'Change Logo' : 'Upload Logo'}
          </button>
          {teamLogo && (
            <button
              onClick={() => setTeamLogo(null)}
              className="mt-2 px-4 py-2 rounded-lg text-[#dc2626] active:bg-[#fef2f2] transition-colors"
              style={{ fontSize: '14px', fontWeight: '600' }}
            >
              Remove Logo
            </button>
          )}
          <p className="text-[#999999] text-center mt-3" style={{ fontSize: '12px', lineHeight: '1.5' }}>
            JPG, PNG or SVG. Max size 2MB.<br />Recommended: 200x200px
          </p>
        </div>
        <input
          ref={logoInputRef}
          type="file"
          accept="image/*"
          onChange={handleLogoChange}
          className="hidden"
        />
      </div>

      {/* Team Name */}
      <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
        <label className="flex items-center gap-2 mb-2">
          <Users className="w-4 h-4 text-[#666666]" />
          <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
            Team Name
          </span>
        </label>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#3b82f6] transition-colors"
          style={{ fontSize: '15px' }}
        />
      </div>

      {/* Workspace ID */}
      <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
        <label className="flex items-center gap-2 mb-2">
          <Key className="w-4 h-4 text-[#666666]" />
          <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
            Workspace ID
          </span>
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={workspaceId}
            readOnly
            className="flex-1 px-4 py-3 rounded-lg border border-[#e0e0e0] bg-[#fafafa] text-[#666666]"
            style={{ fontSize: '14px', fontFamily: 'monospace' }}
          />
          <button
            onClick={copyWorkspaceId}
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#f5f5f5] text-[#1a1a1a] active:bg-[#e0e0e0] transition-colors flex-shrink-0"
            style={{ fontSize: '14px', fontWeight: '600' }}
          >
            {copiedWorkspaceId ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
        <p className="text-[#999999] mt-2" style={{ fontSize: '12px' }}>
          Read-only identifier for API and integrations
        </p>
      </div>

      {/* Owner Section */}
      <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
        <div className="flex items-center gap-2 mb-3">
          <Crown className="w-5 h-5 text-[#f59e0b]" />
          <h3 className="text-[#1a1a1a]" style={{ fontSize: '15px', fontWeight: '700' }}>
            Workspace Owner
          </h3>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0] flex items-center justify-center flex-shrink-0">
            {owner.avatar ? (
              <img src={owner.avatar} alt={owner.name} loading="lazy" decoding="async" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <Users className="w-6 h-6 text-[#999999]" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[#1a1a1a] truncate" style={{ fontSize: '15px', fontWeight: '600' }}>
              {owner.name}
            </div>
            <div className="text-[#666666] truncate" style={{ fontSize: '13px' }}>
              {owner.email}
            </div>
          </div>
        </div>
        <button
          onClick={() => currentUserRole === 'Owner' && setShowTransferOwnershipModal(true)}
          disabled={currentUserRole !== 'Owner'}
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors ${
            currentUserRole === 'Owner'
              ? 'bg-[#f5f5f5] text-[#1a1a1a] active:bg-[#e0e0e0]'
              : 'bg-[#fafafa] text-[#999999] cursor-not-allowed'
          }`}
          style={{ fontSize: '14px', fontWeight: '600' }}
        >
          <span>Transfer Ownership</span>
          {currentUserRole === 'Owner' && <ChevronRight className="w-4 h-4" />}
        </button>
        {currentUserRole !== 'Owner' && (
          <p className="text-[#999999] text-center mt-2" style={{ fontSize: '12px' }}>
            Only the current owner can transfer ownership
          </p>
        )}
      </div>

      {/* Transfer Ownership Modal */}
      {showTransferOwnershipModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white rounded-t-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b border-[#e0e0e0]">
              <h3 className="text-[#1a1a1a] text-center" style={{ fontSize: '17px', fontWeight: '700' }}>
                Transfer Ownership
              </h3>
            </div>
            <div className="p-4">
              <div className="bg-[#fef3c7] border border-[#fbbf24] rounded-xl p-4 mb-4">
                <p className="text-[#92400e]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  ⚠️ This action cannot be undone. You will lose owner privileges and become an Admin.
                </p>
              </div>
              <p className="text-[#666666] mb-4" style={{ fontSize: '14px' }}>
                Select a team member to transfer ownership to:
              </p>
              {/* Member list would go here */}
              <div className="space-y-2 mb-4">
                <button className="w-full flex items-center gap-3 p-3 rounded-lg border border-[#e0e0e0] active:bg-[#f5f5f5] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#f5f5f5] flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#999999]" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Alex Morgan
                    </div>
                    <div className="text-[#666666]" style={{ fontSize: '12px' }}>
                      Admin
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="p-4 border-t border-[#e0e0e0] space-y-2">
              <button
                className="w-full px-4 py-3 rounded-lg bg-[#dc2626] text-white active:bg-[#b91c1c] transition-colors"
                style={{ fontSize: '15px', fontWeight: '600' }}
              >
                Confirm Transfer
              </button>
              <button
                onClick={() => setShowTransferOwnershipModal(false)}
                className="w-full px-4 py-3 rounded-lg bg-[#f5f5f5] text-[#1a1a1a] active:bg-[#e0e0e0] transition-colors"
                style={{ fontSize: '15px', fontWeight: '600' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
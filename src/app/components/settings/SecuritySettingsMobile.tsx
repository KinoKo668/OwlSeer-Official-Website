import React from 'react';
import {
  ArrowLeft,
  Lock,
  Shield,
  Globe,
  LogOut,
  Plus,
  X,
  AlertTriangle,
} from 'lucide-react';

interface SecuritySettingsMobileProps {
  onBack: () => void;
}

export function SecuritySettingsMobile({ onBack }: SecuritySettingsMobileProps) {
  const [require2FA, setRequire2FA] = React.useState(false);
  const [allowedDomains, setAllowedDomains] = React.useState<string[]>(['email.com']);
  const [newDomain, setNewDomain] = React.useState('');
  const [showAddDomain, setShowAddDomain] = React.useState(false);
  const [showSignOutModal, setShowSignOutModal] = React.useState(false);

  const addDomain = () => {
    if (newDomain && !allowedDomains.includes(newDomain)) {
      setAllowedDomains((prev) => [...prev, newDomain]);
      setNewDomain('');
      setShowAddDomain(false);
    }
  };

  const removeDomain = (domain: string) => {
    if (allowedDomains.length > 1) {
      setAllowedDomains((prev) => prev.filter((d) => d !== domain));
    } else {
      alert('You must have at least one allowed domain');
    }
  };

  const handleSignOutAll = () => {
    setShowSignOutModal(false);
    alert('All team members have been signed out successfully');
  };

  return (
    <div className="px-4 py-4 space-y-4">{/* No header - TeamSettingsMobile provides it */}
      {/* Two-Factor Authentication */}
      <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-[#666666]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[#1a1a1a] mb-1" style={{ fontSize: '15px', fontWeight: '600' }}>
              Two-Factor Authentication
            </h3>
            <p className="text-[#666666] mb-3" style={{ fontSize: '13px', lineHeight: '1.5' }}>
              Require all team members to enable 2FA for enhanced security
            </p>
            <button
              onClick={() => setRequire2FA(!require2FA)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                require2FA ? 'bg-[#3b82f6]' : 'bg-[#e0e0e0]'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  require2FA ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
        {require2FA && (
          <div className="mt-3 pt-3 border-t border-[#e0e0e0]">
            <div className="flex items-start gap-2 px-3 py-2 rounded-lg bg-[#eff6ff]">
              <Lock className="w-4 h-4 text-[#3b82f6] flex-shrink-0 mt-0.5" />
              <p className="text-[#1e40af]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                Members without 2FA will be prompted to set it up on their next login
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Email Domain Restrictions */}
      <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
            <Globe className="w-5 h-5 text-[#666666]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[#1a1a1a] mb-1" style={{ fontSize: '15px', fontWeight: '600' }}>
              Email Domain Restrictions
            </h3>
            <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
              Only allow invitations to specific email domains
            </p>
          </div>
        </div>

        {/* Allowed Domains List */}
        <div className="space-y-2 mb-3">
          {allowedDomains.map((domain) => (
            <div
              key={domain}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0]"
            >
              <Globe className="w-4 h-4 text-[#666666] flex-shrink-0" />
              <span className="flex-1 text-[#1a1a1a]" style={{ fontSize: '14px', fontFamily: 'monospace' }}>
                {domain}
              </span>
              <button
                onClick={() => removeDomain(domain)}
                className="p-1 rounded-lg hover:bg-[#fef2f2] active:bg-[#fee2e2] transition-colors"
              >
                <X className="w-4 h-4 text-[#dc2626]" />
              </button>
            </div>
          ))}
        </div>

        {/* Add Domain Button */}
        <button
          onClick={() => setShowAddDomain(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border-2 border-dashed border-[#e0e0e0] text-[#666666] active:bg-[#f5f5f5] transition-colors"
          style={{ fontSize: '14px', fontWeight: '600' }}
        >
          <Plus className="w-4 h-4" />
          <span>Add Domain</span>
        </button>
      </div>

      {/* Sign Out All Sessions */}
      <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
            <LogOut className="w-5 h-5 text-[#dc2626]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[#1a1a1a] mb-1" style={{ fontSize: '15px', fontWeight: '600' }}>
              Sign Out All Sessions
            </h3>
            <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
              Force all team members to sign in again on all devices
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowSignOutModal(true)}
          className="w-full px-4 py-3 rounded-lg bg-[#dc2626] text-white active:bg-[#b91c1c] transition-colors"
          style={{ fontSize: '14px', fontWeight: '600' }}
        >
          Sign Out All Members
        </button>
      </div>

      {/* Add Domain Modal */}
      {showAddDomain && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white rounded-t-2xl w-full">
            <div className="p-4 border-b border-[#e0e0e0] flex items-center justify-between">
              <h3 className="text-[#1a1a1a]" style={{ fontSize: '17px', fontWeight: '700' }}>
                Add Allowed Domain
              </h3>
              <button
                onClick={() => {
                  setShowAddDomain(false);
                  setNewDomain('');
                }}
                className="p-2 rounded-lg hover:bg-[#f5f5f5]"
              >
                <X className="w-5 h-5 text-[#666666]" />
              </button>
            </div>
            <div className="p-4">
              <label className="block mb-2 text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                Domain Name
              </label>
              <input
                type="text"
                value={newDomain}
                onChange={(e) => setNewDomain(e.target.value)}
                placeholder="example.com"
                className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:border-[#3b82f6] transition-colors"
                style={{ fontSize: '15px', fontFamily: 'monospace' }}
                autoFocus
              />
              <p className="text-[#999999] mt-2" style={{ fontSize: '12px' }}>
                Only emails from this domain will be allowed to join the team
              </p>
            </div>
            <div className="p-4 border-t border-[#e0e0e0]">
              <button
                onClick={addDomain}
                disabled={!newDomain}
                className={`w-full px-4 py-3 rounded-lg transition-colors ${
                  newDomain
                    ? 'bg-[#3b82f6] text-white active:bg-[#2563eb]'
                    : 'bg-[#f5f5f5] text-[#999999] cursor-not-allowed'
                }`}
                style={{ fontSize: '15px', fontWeight: '600' }}
              >
                Add Domain
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sign Out All Confirmation Modal */}
      {showSignOutModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white rounded-t-2xl w-full">
            <div className="p-4 border-b border-[#e0e0e0]">
              <h3 className="text-[#1a1a1a] text-center" style={{ fontSize: '17px', fontWeight: '700' }}>
                Sign Out All Members
              </h3>
            </div>
            <div className="p-4">
              <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-4 mb-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#991b1b] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Are you sure?
                    </p>
                    <p className="text-[#991b1b]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                      This will immediately sign out all team members from all devices. They will need to sign in again to access the workspace.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#fafafa] rounded-xl p-4">
                <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  Use this if you suspect unauthorized access or want to enforce a security policy change.
                </p>
              </div>
            </div>
            <div className="p-4 border-t border-[#e0e0e0] space-y-2">
              <button
                onClick={handleSignOutAll}
                className="w-full px-4 py-3 rounded-lg bg-[#dc2626] text-white active:bg-[#b91c1c] transition-colors"
                style={{ fontSize: '15px', fontWeight: '600' }}
              >
                Yes, Sign Out Everyone
              </button>
              <button
                onClick={() => setShowSignOutModal(false)}
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
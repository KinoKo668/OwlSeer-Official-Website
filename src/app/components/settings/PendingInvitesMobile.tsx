import React from 'react';
import {
  ArrowLeft,
  Mail,
  Clock,
  Copy,
  Check,
  Send,
  X as XIcon,
  AlertTriangle,
} from 'lucide-react';

type PendingInvite = {
  id: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  invitedAt: string;
  expiresAt: string;
  invitedBy: string;
  isExpiringSoon?: boolean;
};

interface PendingInvitesMobileProps {
  onBack: () => void;
}

export function PendingInvitesMobile({ onBack }: PendingInvitesMobileProps) {
  const [copiedLink, setCopiedLink] = React.useState<string | null>(null);
  const [showRevokeModal, setShowRevokeModal] = React.useState<PendingInvite | null>(null);
  const copyTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const [pendingInvites, setPendingInvites] = React.useState<PendingInvite[]>([
    {
      id: 'inv1',
      email: 'casey.p@email.com',
      role: 'Editor',
      invitedAt: '2 days ago',
      expiresAt: 'In 5 days',
      invitedBy: 'Sarah Chen',
      isExpiringSoon: false,
    },
    {
      id: 'inv2',
      email: 'sam.rivera@email.com',
      role: 'Viewer',
      invitedAt: '5 days ago',
      expiresAt: 'In 2 days',
      invitedBy: 'Alex Morgan',
      isExpiringSoon: true,
    },
  ]);

  const handleResend = (invite: PendingInvite) => {
    alert(`Invite resent to ${invite.email}`);
  };

  const handleCopyLink = (inviteId: string) => {
    const link = `https://owlseer.app/invite/${inviteId}`;
    navigator.clipboard.writeText(link);
    setCopiedLink(inviteId);
    // Clear existing timeout if any
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }
    copyTimeoutRef.current = setTimeout(() => setCopiedLink(null), 2000);
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleRevoke = () => {
    if (showRevokeModal) {
      setPendingInvites((prev) => prev.filter((i) => i.id !== showRevokeModal.id));
      setShowRevokeModal(null);
      alert('Invite revoked successfully');
    }
  };

  return (
    <div className="px-4 py-4">{/* No header - TeamSettingsMobile provides it */}
      {pendingInvites.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-[#f5f5f5] flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-[#d0d0d0]" />
          </div>
          <p className="text-[#1a1a1a] mb-2" style={{ fontSize: '16px', fontWeight: '600' }}>
            No Pending Invites
          </p>
          <p className="text-[#999999]" style={{ fontSize: '14px' }}>
            All team invitations have been accepted
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {pendingInvites.map((invite) => (
            <div
              key={invite.id}
              className={`bg-white rounded-xl border p-4 ${
                invite.isExpiringSoon ? 'border-[#fbbf24]' : 'border-[#e0e0e0]'
              }`}
            >
              {/* Expiring Soon Warning */}
              {invite.isExpiringSoon && (
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#fef3c7] mb-3">
                  <AlertTriangle className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
                  <span className="text-[#92400e]" style={{ fontSize: '12px', fontWeight: '600' }}>
                    Expires soon
                  </span>
                </div>
              )}

              {/* Email & Role */}
              <div className="mb-3">
                <div className="flex items-start gap-2 mb-2">
                  <Mail className="w-4 h-4 text-[#666666] mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[#1a1a1a] break-all" style={{ fontSize: '15px', fontWeight: '600' }}>
                      {invite.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-6">
                  <span
                    className="inline-flex px-2.5 py-1 rounded-full bg-[#f5f5f5] text-[#1a1a1a]"
                    style={{ fontSize: '12px', fontWeight: '600' }}
                  >
                    {invite.role}
                  </span>
                </div>
              </div>

              {/* Meta Info */}
              <div className="space-y-1 mb-4 ml-6">
                <div className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '12px' }}>
                  <span>Invited by {invite.invitedBy}</span>
                </div>
                <div className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '12px' }}>
                  <Clock className="w-3 h-3" />
                  <span>Sent {invite.invitedAt}</span>
                </div>
                <div
                  className={`flex items-center gap-2 ${
                    invite.isExpiringSoon ? 'text-[#f59e0b]' : 'text-[#666666]'
                  }`}
                  style={{ fontSize: '12px' }}
                >
                  <Clock className="w-3 h-3" />
                  <span>Expires {invite.expiresAt}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleResend(invite)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#3b82f6] text-white active:bg-[#2563eb] transition-colors"
                  style={{ fontSize: '13px', fontWeight: '600' }}
                >
                  <Send className="w-4 h-4" />
                  <span>Resend</span>
                </button>
                <button
                  onClick={() => handleCopyLink(invite.id)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#f5f5f5] text-[#1a1a1a] active:bg-[#e0e0e0] transition-colors"
                  style={{ fontSize: '13px', fontWeight: '600' }}
                >
                  {copiedLink === invite.id ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setShowRevokeModal(invite)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#fef2f2] text-[#dc2626] active:bg-[#fee2e2] transition-colors"
                  style={{ fontSize: '13px', fontWeight: '600' }}
                >
                  <XIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Revoke Confirmation Modal */}
      {showRevokeModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white rounded-t-2xl w-full">
            <div className="p-4 border-b border-[#e0e0e0]">
              <h3 className="text-[#1a1a1a] text-center" style={{ fontSize: '17px', fontWeight: '700' }}>
                Revoke Invite
              </h3>
            </div>
            <div className="p-4">
              <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-4 mb-4">
                <p className="text-[#991b1b]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  ⚠️ This will permanently delete the invitation link. {showRevokeModal.email} will no longer be able to join the team using this invite.
                </p>
              </div>
              <div className="bg-[#fafafa] rounded-xl p-4">
                <div className="text-[#666666] mb-1" style={{ fontSize: '12px' }}>
                  Email
                </div>
                <div className="text-[#1a1a1a] break-all" style={{ fontSize: '14px', fontWeight: '600' }}>
                  {showRevokeModal.email}
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-[#e0e0e0] space-y-2">
              <button
                onClick={handleRevoke}
                className="w-full px-4 py-3 rounded-lg bg-[#dc2626] text-white active:bg-[#b91c1c] transition-colors"
                style={{ fontSize: '15px', fontWeight: '600' }}
              >
                Revoke Invite
              </button>
              <button
                onClick={() => setShowRevokeModal(null)}
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
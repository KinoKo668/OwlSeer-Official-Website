import React from 'react';
import { TrendingUp, AlertCircle, CalendarRange, DollarSign, Mail, CheckCircle, Send } from 'lucide-react';
import { Card, CardContent } from '../Card';

export function NotificationsSettings() {
  const [notifyAccountHealth, setNotifyAccountHealth] = React.useState(true);
  const [notifyRisks, setNotifyRisks] = React.useState(true);
  const [notifyContentPlans, setNotifyContentPlans] = React.useState(true);
  const [notifyDeals, setNotifyDeals] = React.useState(true);
  
  // Email management states
  const [notificationEmail, setNotificationEmail] = React.useState('sarah.chen@email.com');
  const [isEditingEmail, setIsEditingEmail] = React.useState(false);
  const [newEmail, setNewEmail] = React.useState('');
  const [verificationCode, setVerificationCode] = React.useState('');
  const [isCodeSent, setIsCodeSent] = React.useState(false);
  const [isVerifying, setIsVerifying] = React.useState(false);
  const [countdown, setCountdown] = React.useState(0);
  const [isEmailVerified, setIsEmailVerified] = React.useState(true);

  React.useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleStartEditing = () => {
    setIsEditingEmail(true);
    setNewEmail(notificationEmail);
    setIsCodeSent(false);
    setVerificationCode('');
  };

  const handleCancelEditing = () => {
    setIsEditingEmail(false);
    setNewEmail('');
    setIsCodeSent(false);
    setVerificationCode('');
    setCountdown(0);
  };

  const handleSendCode = () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      alert('Please enter a valid email address');
      return;
    }

    // Simulate sending verification code
    setIsCodeSent(true);
    setCountdown(60);
    alert(`Verification code sent to ${newEmail}`);
  };

  const handleVerifyAndSave = () => {
    if (!verificationCode) {
      alert('Please enter the verification code');
      return;
    }

    if (verificationCode.length !== 6) {
      alert('Verification code must be 6 digits');
      return;
    }

    // Simulate verification
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      // In real implementation, verify the code with backend
      setNotificationEmail(newEmail);
      setIsEditingEmail(false);
      setIsCodeSent(false);
      setVerificationCode('');
      setIsEmailVerified(true);
      alert('Email updated successfully!');
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 md:py-8">
      {/* Email Settings Section */}
      <Card>
        <CardContent className="space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-4 h-4 text-[#666666]" />
              <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                Notification Email
              </span>
            </div>
            
            {!isEditingEmail ? (
              <div className="flex items-center gap-3">
                <div className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-[#fafafa]">
                  <span className="text-[#1a1a1a]" style={{ fontSize: '14px' }}>
                    {notificationEmail}
                  </span>
                  {isEmailVerified && (
                    <CheckCircle className="w-4 h-4 text-[#16a34a]" />
                  )}
                </div>
                <button
                  onClick={handleStartEditing}
                  className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                  style={{ fontSize: '13px', fontWeight: '600' }}
                >
                  Change Email
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {/* New Email Input */}
                <div className="flex items-center gap-3">
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="Enter new email address"
                    className="flex-1 px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors"
                    style={{ fontSize: '14px' }}
                    disabled={isCodeSent}
                  />
                  {!isCodeSent ? (
                    <button
                      onClick={handleSendCode}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1a1a1a] text-white hover:bg-[#000000] transition-colors whitespace-nowrap"
                      style={{ fontSize: '13px', fontWeight: '600' }}
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Code</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleSendCode}
                      disabled={countdown > 0}
                      className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#666666] whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontSize: '13px', fontWeight: '600' }}
                    >
                      {countdown > 0 ? `Resend (${countdown}s)` : 'Resend Code'}
                    </button>
                  )}
                </div>

                {/* Verification Code Input */}
                {isCodeSent && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={verificationCode}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                          setVerificationCode(value);
                        }}
                        placeholder="Enter 6-digit code"
                        maxLength={6}
                        className="flex-1 px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors tracking-wider"
                        style={{ fontSize: '16px', fontWeight: '600', letterSpacing: '0.3em' }}
                      />
                    </div>
                    <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                      We've sent a 6-digit verification code to <strong>{newEmail}</strong>. Please check your inbox.
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={handleCancelEditing}
                    className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#666666]"
                    style={{ fontSize: '13px', fontWeight: '600' }}
                  >
                    Cancel
                  </button>
                  {isCodeSent && (
                    <button
                      onClick={handleVerifyAndSave}
                      disabled={!verificationCode || verificationCode.length !== 6 || isVerifying}
                      className="px-6 py-2.5 rounded-lg bg-[#1a1a1a] text-white hover:bg-[#000000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontSize: '13px', fontWeight: '600' }}
                    >
                      {isVerifying ? 'Verifying...' : 'Verify & Save'}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card className="mt-6">
        <CardContent className="space-y-4">
          <div className="mb-4">
            <h3 className="text-[#1a1a1a] mb-1" style={{ fontSize: '15px', fontWeight: '700' }}>
              Notification Preferences
            </h3>
            <p className="text-[#666666]" style={{ fontSize: '13px' }}>
              Choose what notifications you want to receive at {notificationEmail}
            </p>
          </div>

          <ToggleSetting
            icon={<TrendingUp className="w-4 h-4" />}
            label="Account health alerts"
            description="Get notified about traffic changes, engagement shifts, and lifecycle transitions"
            checked={notifyAccountHealth}
            onChange={setNotifyAccountHealth}
          />

          <ToggleSetting
            icon={<AlertCircle className="w-4 h-4" />}
            label="Risk warnings"
            description="Immediate alerts for format drift, posting errors, or safety concerns"
            checked={notifyRisks}
            onChange={setNotifyRisks}
          />

          <ToggleSetting
            icon={<CalendarRange className="w-4 h-4" />}
            label="Content plan updates"
            description="Weekly summaries of AI-generated content suggestions and plans"
            checked={notifyContentPlans}
            onChange={setNotifyContentPlans}
          />

          <ToggleSetting
            icon={<DollarSign className="w-4 h-4" />}
            label="Brand deal opportunities"
            description="Notifications when new brand partnerships are detected or suggested"
            checked={notifyDeals}
            onChange={setNotifyDeals}
          />
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex items-center justify-between pt-6">
        <p className="text-[#999999]" style={{ fontSize: '13px' }}>
          Changes are saved automatically
        </p>
        <button className="px-6 py-2.5 rounded-lg bg-[#1a1a1a] text-white hover:bg-[#000000] transition-colors" style={{ fontSize: '14px', fontWeight: '600' }}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

interface ToggleSettingProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function ToggleSetting({ icon, label, description, checked, onChange }: ToggleSettingProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-3 flex-1">
        <div className="w-8 h-8 rounded-lg bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-[#1a1a1a] mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
            {label}
          </h4>
          <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
            {description}
          </p>
        </div>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 cursor-pointer ${
          checked ? 'bg-[#1a1a1a]' : 'bg-[#e0e0e0]'
        }`}
      >
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}
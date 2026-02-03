import React, { useState, useEffect } from 'react';
import { X, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

interface EmailVerificationModalProps {
  currentEmail: string;
  onClose: () => void;
  onSuccess: (newEmail: string) => void;
}

export function EmailVerificationModal({
  currentEmail,
  onClose,
  onSuccess,
}: EmailVerificationModalProps) {
  const [step, setStep] = useState<'input' | 'verify' | 'success'>('input');
  const [newEmail, setNewEmail] = useState('');
  const [code, setCode] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Countdown timer for resend
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendCode = async () => {
    setError('');
    
    if (!newEmail || !validateEmail(newEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    if (newEmail.toLowerCase() === currentEmail.toLowerCase()) {
      setError('New email must be different from current email');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setStep('verify');
    setCountdown(60);
  };

  const handleVerifyCode = async () => {
    setError('');
    
    if (!code || code.length !== 6) {
      setError('Please enter a 6-digit verification code');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock validation - in real app, this would call backend
    if (code === '123456') {
      setStep('success');
      setTimeout(() => {
        onSuccess(newEmail);
        onClose();
      }, 1500);
    } else {
      setError('Invalid verification code. Try 123456 for demo.');
    }
    
    setIsLoading(false);
  };

  const handleResendCode = async () => {
    if (countdown > 0) return;
    
    setError('');
    setCode('');
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setCountdown(60);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e0e0e0]">
          <h2 className="text-[#1a1a1a]" style={{ fontSize: '18px', fontWeight: '700' }}>
            {step === 'input' && 'Change Email Address'}
            {step === 'verify' && 'Verify Email'}
            {step === 'success' && 'Email Updated'}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-[#f5f5f5] flex items-center justify-center transition-colors"
            disabled={isLoading}
          >
            <X className="w-5 h-5 text-[#666666]" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {step === 'input' && (
            <div className="space-y-4">
              {/* Current Email */}
              <div>
                <label className="block text-[#666666] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                  Current Email
                </label>
                <div className="px-4 py-3 rounded-lg bg-[#f5f5f5] text-[#999999]" style={{ fontSize: '14px' }}>
                  {currentEmail}
                </div>
              </div>

              {/* New Email */}
              <div>
                <label className="block text-[#666666] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                  New Email Address
                </label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => {
                    setNewEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter new email address"
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  style={{ fontSize: '14px' }}
                  autoFocus
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-start gap-2 px-3 py-2 rounded-lg bg-[#fef2f2] border border-[#fecaca]">
                  <AlertCircle className="w-4 h-4 text-[#dc2626] flex-shrink-0 mt-0.5" />
                  <p className="text-[#dc2626]" style={{ fontSize: '13px' }}>
                    {error}
                  </p>
                </div>
              )}

              {/* Info */}
              <div className="flex items-start gap-2 px-3 py-2 rounded-lg bg-[#f0f9ff] border border-[#bae6fd]">
                <Mail className="w-4 h-4 text-[#0284c7] flex-shrink-0 mt-0.5" />
                <p className="text-[#0284c7]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                  We'll send a verification code to your new email address to confirm the change.
                </p>
              </div>
            </div>
          )}

          {step === 'verify' && (
            <div className="space-y-4">
              {/* Email Sent Info */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#f0f9ff] flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-8 h-8 text-[#0284c7]" />
                </div>
                <p className="text-[#666666] mb-1" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  We've sent a 6-digit verification code to:
                </p>
                <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                  {newEmail}
                </p>
              </div>

              {/* Verification Code Input */}
              <div>
                <label className="block text-[#666666] mb-2 text-center" style={{ fontSize: '13px', fontWeight: '600' }}>
                  Verification Code
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                    setCode(value);
                    setError('');
                  }}
                  placeholder="000000"
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] text-[#1a1a1a] text-center tracking-widest focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  style={{ fontSize: '24px', fontWeight: '600', letterSpacing: '0.5em' }}
                  maxLength={6}
                  autoFocus
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-start gap-2 px-3 py-2 rounded-lg bg-[#fef2f2] border border-[#fecaca]">
                  <AlertCircle className="w-4 h-4 text-[#dc2626] flex-shrink-0 mt-0.5" />
                  <p className="text-[#dc2626]" style={{ fontSize: '13px' }}>
                    {error}
                  </p>
                </div>
              )}

              {/* Resend Code */}
              <div className="text-center">
                <button
                  onClick={handleResendCode}
                  disabled={countdown > 0 || isLoading}
                  className="text-[#666666] hover:text-[#1a1a1a] disabled:text-[#999999] disabled:cursor-not-allowed transition-colors"
                  style={{ fontSize: '13px', fontWeight: '500' }}
                >
                  {countdown > 0 ? `Resend code in ${countdown}s` : 'Resend verification code'}
                </button>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#f0fdf4] flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8 text-[#16a34a]" />
              </div>
              <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '16px', fontWeight: '600' }}>
                Email Updated Successfully
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '14px' }}>
                Your email has been changed to {newEmail}
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {step !== 'success' && (
          <div className="px-6 py-4 border-t border-[#e0e0e0] flex gap-3">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] text-[#666666] transition-colors disabled:opacity-50"
              style={{ fontSize: '14px', fontWeight: '600' }}
            >
              Cancel
            </button>
            <button
              onClick={step === 'input' ? handleSendCode : handleVerifyCode}
              disabled={isLoading || (step === 'input' && !newEmail) || (step === 'verify' && code.length !== 6)}
              className="flex-1 px-4 py-2.5 rounded-lg bg-[#1a1a1a] hover:bg-[#000000] text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontSize: '14px', fontWeight: '600' }}
            >
              {isLoading ? 'Processing...' : step === 'input' ? 'Send Code' : 'Verify'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

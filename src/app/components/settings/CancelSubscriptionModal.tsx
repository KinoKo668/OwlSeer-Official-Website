import React, { useState } from 'react';
import {
  X,
  AlertCircle,
  Pause,
  TrendingDown,
  Gift,
  Calendar,
  CheckCircle,
  ChevronLeft,
  Clock,
  Download,
} from 'lucide-react';

interface CancelSubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPlan: {
    name: string;
    price: number;
    billingCycle: string;
    nextBillingDate: string;
  };
}

type CancelReason =
  | 'too-expensive'
  | 'not-using'
  | 'missing-features'
  | 'too-complex'
  | 'quality-issues'
  | 'technical-issues'
  | 'switching-tools'
  | 'temporary-break'
  | 'other';

type RetentionOption = 'pause' | 'downgrade' | 'discount' | null;

interface SurveyData {
  primaryReason: CancelReason | null;
  priceRange?: string;
  notUsingReasons?: string[];
  missingFeatures?: string[];
  complexityIssues?: string[];
  qualityIssues?: string[];
  technicalIssues?: string[];
  switchingTo?: string;
  returnTimeframe?: string;
  freeText?: string;
  contactPermission: boolean;
}

const reasonLabels: Record<CancelReason, string> = {
  'too-expensive': 'Too expensive',
  'not-using': 'Not using it enough',
  'missing-features': 'Missing features I need',
  'too-complex': 'Product is too complex / hard to set up',
  'quality-issues': 'Quality not good enough (scripts/insights not helpful)',
  'technical-issues': 'Technical issues / bugs',
  'switching-tools': 'Switching to another tool',
  'temporary-break': 'Temporary break',
  'other': 'Other',
};

export function CancelSubscriptionModal({
  isOpen,
  onClose,
  currentPlan,
}: CancelSubscriptionModalProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [surveyData, setSurveyData] = useState<SurveyData>({
    primaryReason: null,
    contactPermission: false,
  });
  const [confirmationChecked, setConfirmationChecked] = useState(false);
  const [showExitWarning, setShowExitWarning] = useState(false);

  const handleClose = () => {
    if (currentStep > 1 && currentStep < 3) {
      setShowExitWarning(true);
    } else {
      resetAndClose();
    }
  };

  const resetAndClose = () => {
    setCurrentStep(1);
    setSurveyData({ primaryReason: null, contactPermission: false });
    setConfirmationChecked(false);
    setShowExitWarning(false);
    onClose();
  };

  const handleSurveyContinue = () => {
    if (!surveyData.primaryReason) return;
    setCurrentStep(2);
  };

  const handleConfirmCancel = () => {
    if (!confirmationChecked) return;
    
    // Submit cancellation data
    console.log('Cancellation confirmed', {
      surveyData,
    });
    
    setCurrentStep(3);
  };

  const handleKeepSubscription = () => {
    resetAndClose();
  };

  if (!isOpen) return null;

  const totalSteps = 2;
  const stepLabels = ['Feedback', 'Confirm'];

  return (
    <>
      {/* Main Modal */}
      <div
        className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <div
          className="bg-white rounded-xl w-full max-w-[640px] max-h-[90vh] flex flex-col shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Step Indicator */}
          <div className="flex-shrink-0 px-6 pt-6 pb-4 border-b border-[#e0e0e0]">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                {currentStep < 4 && (
                  <div className="flex items-center gap-2 mb-3">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div
                          className={`h-1.5 w-12 rounded-full transition-all ${
                            i + 1 <= currentStep
                              ? 'bg-[#1a1a1a]'
                              : 'bg-[#e0e0e0]'
                          }`}
                        />
                        {i < totalSteps - 1 && (
                          <div className="text-[#cccccc]" style={{ fontSize: '12px' }}>
                            •
                          </div>
                        )}
                      </div>
                    ))}
                    <span className="text-[#999999] ml-2" style={{ fontSize: '12px' }}>
                      Step {currentStep} of {totalSteps}
                    </span>
                  </div>
                )}
                {currentStep === 1 && (
                  <>
                    <h2 className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700' }}>
                      Help us improve (30 seconds)
                    </h2>
                    <p className="text-[#666666] mt-1" style={{ fontSize: '14px' }}>
                      Your feedback helps us prioritize what to build next.
                    </p>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <h2 className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700' }}>
                      Confirm cancellation
                    </h2>
                    <p className="text-[#666666] mt-1" style={{ fontSize: '14px' }}>
                      Review what happens when you cancel
                    </p>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <h2 className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700' }}>
                      Subscription canceled
                    </h2>
                    <p className="text-[#666666] mt-1" style={{ fontSize: '14px' }}>
                      {`You'll keep access until ${currentPlan.nextBillingDate}`}
                    </p>
                  </>
                )}
              </div>
              <button
                onClick={handleClose}
                className="text-[#666666] hover:text-[#1a1a1a] transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {/* Step 1: Survey */}
            {currentStep === 1 && (
              <div className="space-y-6">
                {/* Primary Reason */}
                <div>
                  <label className="block text-[#1a1a1a] mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>
                    What's your primary reason for canceling? <span className="text-[#dc2626]">*</span>
                  </label>
                  <div className="space-y-2">
                    {(Object.keys(reasonLabels) as CancelReason[]).map((reason) => (
                      <button
                        key={reason}
                        onClick={() => setSurveyData({ ...surveyData, primaryReason: reason })}
                        className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                          surveyData.primaryReason === reason
                            ? 'border-[#1a1a1a] bg-[#fafafa]'
                            : 'border-[#e0e0e0] hover:border-[#cccccc]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            surveyData.primaryReason === reason
                              ? 'border-[#1a1a1a]'
                              : 'border-[#cccccc]'
                          }`}>
                            {surveyData.primaryReason === reason && (
                              <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                            )}
                          </div>
                          <span className="text-[#1a1a1a]" style={{ fontSize: '14px' }}>
                            {reasonLabels[reason]}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Follow-up Questions */}
                {surveyData.primaryReason === 'too-expensive' && (
                  <div>
                    <label className="block text-[#1a1a1a] mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>
                      What price would feel fair?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['<$19/mo', '$19–$39', '$39–$59', '$59–$79', '$79+'].map((range) => (
                        <button
                          key={range}
                          onClick={() => setSurveyData({ ...surveyData, priceRange: range })}
                          className={`px-4 py-2 rounded-lg border transition-all ${
                            surveyData.priceRange === range
                              ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                              : 'border-[#e0e0e0] text-[#666666] hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
                          }`}
                          style={{ fontSize: '13px', fontWeight: '600' }}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {surveyData.primaryReason === 'not-using' && (
                  <div>
                    <label className="block text-[#1a1a1a] mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>
                      What stopped you? (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      {[
                        'No time',
                        'Didn\'t see results',
                        'Forgot to return',
                        'Didn\'t know what to do next',
                        'Waiting to launch',
                      ].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#e0e0e0] hover:border-[#cccccc] cursor-pointer transition-all"
                        >
                          <input
                            type="checkbox"
                            checked={surveyData.notUsingReasons?.includes(option)}
                            onChange={(e) => {
                              const current = surveyData.notUsingReasons || [];
                              setSurveyData({
                                ...surveyData,
                                notUsingReasons: e.target.checked
                                  ? [...current, option]
                                  : current.filter((r) => r !== option),
                              });
                            }}
                            className="w-4 h-4 rounded border-2 border-[#cccccc]"
                          />
                          <span className="text-[#1a1a1a]" style={{ fontSize: '14px' }}>
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {surveyData.primaryReason === 'missing-features' && (
                  <div>
                    <label className="block text-[#1a1a1a] mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Which features would you like to see? (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      {[
                        'YouTube support',
                        'Better script templates',
                        'Auto planning / scheduling',
                        'Team collaboration',
                        'More analytics',
                        'Brand deal workflow',
                        'Other',
                      ].map((feature) => (
                        <label
                          key={feature}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#e0e0e0] hover:border-[#cccccc] cursor-pointer transition-all"
                        >
                          <input
                            type="checkbox"
                            checked={surveyData.missingFeatures?.includes(feature)}
                            onChange={(e) => {
                              const current = surveyData.missingFeatures || [];
                              setSurveyData({
                                ...surveyData,
                                missingFeatures: e.target.checked
                                  ? [...current, feature]
                                  : current.filter((f) => f !== feature),
                              });
                            }}
                            className="w-4 h-4 rounded border-2 border-[#cccccc]"
                          />
                          <span className="text-[#1a1a1a]" style={{ fontSize: '14px' }}>
                            {feature}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {surveyData.primaryReason === 'too-complex' && (
                  <div>
                    <label className="block text-[#1a1a1a] mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Where did you get stuck? (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      {[
                        'Onboarding',
                        'Connecting accounts',
                        'Understanding metrics',
                        'Content Studio',
                        'Scheduling',
                      ].map((issue) => (
                        <label
                          key={issue}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#e0e0e0] hover:border-[#cccccc] cursor-pointer transition-all"
                        >
                          <input
                            type="checkbox"
                            checked={surveyData.complexityIssues?.includes(issue)}
                            onChange={(e) => {
                              const current = surveyData.complexityIssues || [];
                              setSurveyData({
                                ...surveyData,
                                complexityIssues: e.target.checked
                                  ? [...current, issue]
                                  : current.filter((i) => i !== issue),
                              });
                            }}
                            className="w-4 h-4 rounded border-2 border-[#cccccc]"
                          />
                          <span className="text-[#1a1a1a]" style={{ fontSize: '14px' }}>
                            {issue}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {surveyData.primaryReason === 'quality-issues' && (
                  <div>
                    <label className="block text-[#1a1a1a] mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>
                      What was off? (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      {[
                        'Hooks',
                        'Structure',
                        'Tone',
                        'Not niche-specific',
                        'Too generic',
                        'Wrong language',
                      ].map((issue) => (
                        <label
                          key={issue}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#e0e0e0] hover:border-[#cccccc] cursor-pointer transition-all"
                        >
                          <input
                            type="checkbox"
                            checked={surveyData.qualityIssues?.includes(issue)}
                            onChange={(e) => {
                              const current = surveyData.qualityIssues || [];
                              setSurveyData({
                                ...surveyData,
                                qualityIssues: e.target.checked
                                  ? [...current, issue]
                                  : current.filter((i) => i !== issue),
                              });
                            }}
                            className="w-4 h-4 rounded border-2 border-[#cccccc]"
                          />
                          <span className="text-[#1a1a1a]" style={{ fontSize: '14px' }}>
                            {issue}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {surveyData.primaryReason === 'technical-issues' && (
                  <div>
                    <label className="block text-[#1a1a1a] mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>
                      What happened? (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      {[
                        'Slow',
                        'Errors',
                        'Payments',
                        'Data not updating',
                        'Login',
                        'Other',
                      ].map((issue) => (
                        <label
                          key={issue}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#e0e0e0] hover:border-[#cccccc] cursor-pointer transition-all"
                        >
                          <input
                            type="checkbox"
                            checked={surveyData.technicalIssues?.includes(issue)}
                            onChange={(e) => {
                              const current = surveyData.technicalIssues || [];
                              setSurveyData({
                                ...surveyData,
                                technicalIssues: e.target.checked
                                  ? [...current, issue]
                                  : current.filter((i) => i !== issue),
                              });
                            }}
                            className="w-4 h-4 rounded border-2 border-[#cccccc]"
                          />
                          <span className="text-[#1a1a1a]" style={{ fontSize: '14px' }}>
                            {issue}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {surveyData.primaryReason === 'switching-tools' && (
                  <div>
                    <label className="block text-[#1a1a1a] mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Which tool are you switching to?
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {['CapCut', 'Jasper', 'vidIQ', 'Notion', 'ChatGPT'].map((tool) => (
                        <button
                          key={tool}
                          onClick={() => setSurveyData({ ...surveyData, switchingTo: tool })}
                          className={`px-4 py-2 rounded-lg border transition-all ${
                            surveyData.switchingTo === tool
                              ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                              : 'border-[#e0e0e0] text-[#666666] hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
                          }`}
                          style={{ fontSize: '13px', fontWeight: '600' }}
                        >
                          {tool}
                        </button>
                      ))}
                    </div>
                    <input
                      type="text"
                      placeholder="Other tool name..."
                      value={surveyData.switchingTo && !['CapCut', 'Jasper', 'vidIQ', 'Notion', 'ChatGPT'].includes(surveyData.switchingTo) ? surveyData.switchingTo : ''}
                      onChange={(e) => setSurveyData({ ...surveyData, switchingTo: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all"
                      style={{ fontSize: '14px' }}
                    />
                  </div>
                )}

                {surveyData.primaryReason === 'temporary-break' && (
                  <div>
                    <label className="block text-[#1a1a1a] mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>
                      When might you return?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['<1 month', '1–3 months', '3–6 months', 'Not sure'].map((timeframe) => (
                        <button
                          key={timeframe}
                          onClick={() => setSurveyData({ ...surveyData, returnTimeframe: timeframe })}
                          className={`px-4 py-2 rounded-lg border transition-all ${
                            surveyData.returnTimeframe === timeframe
                              ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                              : 'border-[#e0e0e0] text-[#666666] hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
                          }`}
                          style={{ fontSize: '13px', fontWeight: '600' }}
                        >
                          {timeframe}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Free Text */}
                <div>
                  <label className="block text-[#1a1a1a] mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>
                    Anything else you'd like to share? <span className="text-[#999999]">(Optional)</span>
                  </label>
                  <textarea
                    value={surveyData.freeText || ''}
                    onChange={(e) => setSurveyData({ ...surveyData, freeText: e.target.value })}
                    placeholder="Your feedback is valuable to us..."
                    rows={4}
                    className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all resize-none"
                    style={{ fontSize: '14px' }}
                  />
                </div>

                {/* Contact Permission */}
                <label className="flex items-start gap-3 px-4 py-3 rounded-lg border border-[#e0e0e0] hover:border-[#cccccc] cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    checked={surveyData.contactPermission}
                    onChange={(e) =>
                      setSurveyData({ ...surveyData, contactPermission: e.target.checked })
                    }
                    className="w-4 h-4 rounded border-2 border-[#cccccc] mt-0.5"
                  />
                  <span className="text-[#666666]" style={{ fontSize: '14px' }}>
                    You may contact me about my feedback.
                  </span>
                </label>
              </div>
            )}

            {/* Step 2: Confirmation */}
            {currentStep === 2 && (
              <div className="space-y-6">
                {/* Summary Panel */}
                <div className="p-5 rounded-xl border-2 border-[#e0e0e0] bg-[#fafafa]">
                  <div className="space-y-4">
                    <div>
                      <div className="text-[#999999] mb-1" style={{ fontSize: '12px', fontWeight: '500' }}>
                        CURRENT PLAN
                      </div>
                      <div className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700' }}>
                        {currentPlan.name} — ${currentPlan.price}/{currentPlan.billingCycle}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#e0e0e0]">
                      <div className="text-[#999999] mb-2" style={{ fontSize: '12px', fontWeight: '500' }}>
                        NEXT BILLING DATE
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-[#666666]" />
                        <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                          {currentPlan.nextBillingDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What Happens */}
                <div>
                  <h3 className="text-[#1a1a1a] mb-3" style={{ fontSize: '15px', fontWeight: '700' }}>
                    What happens if you cancel today:
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                          You will keep access until {currentPlan.nextBillingDate}
                        </p>
                        <p className="text-[#666666] mt-0.5" style={{ fontSize: '13px' }}>
                          Use all features until your current billing period ends
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                          Your plan will not renew
                        </p>
                        <p className="text-[#666666] mt-0.5" style={{ fontSize: '13px' }}>
                          No future charges will be made
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                          Your projects and scripts remain in your account
                        </p>
                        <p className="text-[#666666] mt-0.5" style={{ fontSize: '13px' }}>
                          All your work is saved and can be accessed when you return
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                          AI credits will remain usable until {currentPlan.nextBillingDate}
                        </p>
                        <p className="text-[#666666] mt-0.5" style={{ fontSize: '13px' }}>
                          Unused credits expire at the end of your billing period
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Confirmation Checkbox */}
                <label className="flex items-start gap-3 p-4 rounded-lg border-2 border-[#e0e0e0] hover:border-[#1a1a1a] cursor-pointer transition-all bg-white">
                  <input
                    type="checkbox"
                    checked={confirmationChecked}
                    onChange={(e) => setConfirmationChecked(e.target.checked)}
                    className="w-4 h-4 rounded border-2 border-[#cccccc] mt-0.5"
                  />
                  <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '500' }}>
                    I understand my subscription will end on {currentPlan.nextBillingDate} and won't renew.
                  </span>
                </label>
              </div>
            )}

            {/* Step 3: Success */}
            {currentStep === 3 && (
              <div className="space-y-6">
                {/* Success Icon */}
                <div className="flex flex-col items-center text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-[#f0fdf4] flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-[#22c55e]" />
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '600' }}>
                      Your subscription has been canceled
                    </p>
                    <p className="text-[#666666]" style={{ fontSize: '14px' }}>
                      You'll keep full access until {currentPlan.nextBillingDate}
                    </p>
                  </div>
                </div>

                {/* Thank You Message */}
                <div className="p-4 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0]">
                  <p className="text-[#666666] text-center" style={{ fontSize: '13px' }}>
                    Thank you for your feedback. We're constantly improving OWLSEER and hope to see you again soon.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex-shrink-0 px-6 py-4 border-t border-[#e0e0e0]">
            {currentStep === 1 && (
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={handleKeepSubscription}
                  className="px-5 py-2.5 rounded-lg border border-[#e0e0e0] text-[#666666] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-colors"
                  style={{ fontSize: '14px', fontWeight: '600' }}
                >
                  Keep subscription
                </button>
                <button
                  onClick={handleSurveyContinue}
                  className={`px-6 py-2.5 rounded-lg transition-all ${
                    surveyData.primaryReason
                      ? 'bg-[#1a1a1a] text-white hover:bg-[#000000]'
                      : 'bg-[#e0e0e0] text-[#999999] cursor-not-allowed'
                  }`}
                  style={{ fontSize: '14px', fontWeight: '600' }}
                >
                  Continue
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex items-center gap-2 px-4 py-2.5 text-[#666666] hover:text-[#1a1a1a] transition-colors"
                  style={{ fontSize: '14px', fontWeight: '600' }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleKeepSubscription}
                    className="px-5 py-2.5 rounded-lg border border-[#e0e0e0] text-[#666666] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-colors"
                    style={{ fontSize: '14px', fontWeight: '600' }}
                  >
                    Keep subscription
                  </button>
                  <button
                    onClick={handleConfirmCancel}
                    disabled={!confirmationChecked}
                    className={`px-6 py-2.5 rounded-lg transition-all ${
                      confirmationChecked
                        ? 'bg-[#dc2626] text-white hover:bg-[#b91c1c]'
                        : 'bg-[#e0e0e0] text-[#999999] cursor-not-allowed'
                    }`}
                    style={{ fontSize: '14px', fontWeight: '600' }}
                  >
                    Cancel subscription
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="flex justify-center">
                <button
                  onClick={resetAndClose}
                  className="px-8 py-2.5 rounded-lg bg-[#1a1a1a] text-white hover:bg-[#000000] transition-colors"
                  style={{ fontSize: '14px', fontWeight: '600' }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Exit Warning Dialog */}
      {showExitWarning && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-[400px] p-6">
            <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '18px', fontWeight: '700' }}>
              Leave cancellation flow?
            </h3>
            <p className="text-[#666666] mb-6" style={{ fontSize: '14px' }}>
              Your progress won't be saved if you close now.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowExitWarning(false)}
                className="px-4 py-2 text-[#666666] hover:text-[#1a1a1a] transition-colors"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Stay
              </button>
              <button
                onClick={resetAndClose}
                className="px-4 py-2 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#000000] transition-colors"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
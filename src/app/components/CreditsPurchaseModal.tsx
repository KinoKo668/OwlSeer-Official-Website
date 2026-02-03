import React from 'react';
import { X, Check, Zap } from 'lucide-react';

interface CreditsPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCredits?: number;
}

export function CreditsPurchaseModal({
  isOpen,
  onClose,
  currentCredits = 1250,
}: CreditsPurchaseModalProps) {
  if (!isOpen) return null;

  const creditPackages = [
    {
      id: 'small',
      name: '500 Credits',
      credits: 500,
      price: 49,
      popular: false,
      features: [
        '500 AI Credits',
        'Valid for 12 months',
        'All AI features included',
      ],
    },
    {
      id: 'medium',
      name: '1,500 Credits',
      credits: 1500,
      price: 129,
      popular: true,
      features: [
        '1,500 AI Credits',
        'Valid for 12 months',
        'All AI features included',
        '15% savings',
      ],
    },
    {
      id: 'large',
      name: '5,000 Credits',
      credits: 5000,
      price: 399,
      popular: false,
      features: [
        '5,000 AI Credits',
        'Valid for 12 months',
        'All AI features included',
        '25% savings',
        'Priority support',
      ],
    },
  ];

  const handlePurchase = (packageId: string) => {
    console.log('Purchasing package:', packageId);
    // Handle purchase logic here
    alert(`Purchase initiated for ${packageId} package`);
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[12px] w-full max-w-[1100px] shadow-2xl flex flex-col overflow-hidden"
        style={{ maxHeight: 'calc(100vh - 80px)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white border-b border-[#E5E7EB] px-6 py-5 flex items-center justify-between flex-shrink-0 rounded-t-[12px]">
          <div>
            <h2 className="text-[#111827]" style={{ fontSize: '22px', fontWeight: '700' }}>
              Purchase Additional Credits
            </h2>
            <p className="text-[#9CA3AF] mt-1" style={{ fontSize: '13px' }}>
              Boost your AI capabilities with additional credits
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F8F9FA] transition-colors"
          >
            <X size={18} className="text-[#374151]" />
          </button>
        </div>

        {/* Current Balance */}
        <div className="px-6 py-4 bg-[#F8F9FA] border-b border-[#E5E7EB] flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[#9CA3AF] mb-1" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px' }}>
                CURRENT BALANCE
              </div>
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-[#0F766E]" fill="#0F766E" />
                <span className="text-[#111827]" style={{ fontSize: '26px', fontWeight: '700' }}>
                  {currentCredits.toLocaleString()}
                </span>
                <span className="text-[#9CA3AF]" style={{ fontSize: '14px' }}>
                  credits
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[#9CA3AF] mb-1" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px' }}>
                YOUR PLAN
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#E5E7EB]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#059669]"></div>
                <span className="text-[#111827]" style={{ fontSize: '14px', fontWeight: '600' }}>
                  Growth Plan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Packages */}
        <div className="px-6 py-6 flex-shrink-0">
          <div className="grid grid-cols-3 gap-5 mb-5">
            {creditPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-[12px] border-2 p-5 transition-all hover:shadow-md ${
                  pkg.popular
                    ? 'border-[#0F766E] bg-[#F8F9FA]'
                    : 'border-[#E5E7EB] bg-white hover:border-[#9CA3AF]'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                    <div className="px-3 py-1 rounded-full bg-[#0F766E] text-white" style={{ fontSize: '11px', fontWeight: '700' }}>
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Package Header */}
                <div className="text-center mb-4 pt-1">
                  <div className="text-[#111827] mb-2" style={{ fontSize: '18px', fontWeight: '700' }}>
                    {pkg.name}
                  </div>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-[#111827]" style={{ fontSize: '36px', fontWeight: '700', lineHeight: '1' }}>
                      ${pkg.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-[#374151] mb-4">
                    <Zap size={16} className="text-[#0F766E]" fill="#0F766E" />
                    <span style={{ fontSize: '14px', fontWeight: '600' }}>
                      {pkg.credits.toLocaleString()} credits
                    </span>
                  </div>
                </div>

                {/* Purchase Button */}
                <button
                  onClick={() => handlePurchase(pkg.id)}
                  className={`w-full py-2.5 rounded-lg font-semibold transition-all mb-5 ${
                    pkg.popular
                      ? 'bg-[#0F766E] text-white hover:bg-[#0d6660]'
                      : 'bg-white text-[#111827] border-2 border-[#0F766E] hover:bg-[#0F766E] hover:text-white'
                  }`}
                  style={{ fontSize: '14px' }}
                >
                  Purchase Now
                </button>

                {/* Features */}
                <div className="space-y-2.5">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check size={16} className="text-[#059669] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-[#374151]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Info Footer */}
          <div className="p-5 rounded-[12px] bg-[#F8F9FA] border border-[#E5E7EB]">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-[#111827] mb-1.5" style={{ fontSize: '13px', fontWeight: '700' }}>
                  Flexible Usage
                </div>
                <p className="text-[#9CA3AF]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                  Use credits across all AI features: content generation, analysis, and optimization.
                </p>
              </div>
              <div>
                <div className="text-[#111827] mb-1.5" style={{ fontSize: '13px', fontWeight: '700' }}>
                  No Expiration Pressure
                </div>
                <p className="text-[#9CA3AF]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                  Credits are valid for 12 months from purchase. Use them at your own pace.
                </p>
              </div>
              <div>
                <div className="text-[#111827] mb-1.5" style={{ fontSize: '13px', fontWeight: '700' }}>
                  Stackable Credits
                </div>
                <p className="text-[#9CA3AF]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                  Purchase multiple packs anytime. All credits accumulate in your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
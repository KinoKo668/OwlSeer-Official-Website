import React, { useState } from 'react';
import { X, Check, Sparkles, TrendingUp, Rocket } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPlan?: 'creator' | 'growth' | 'scale';
}

interface PlanFeature {
  text: string;
  highlight?: boolean;
}

interface Plan {
  id: 'creator' | 'growth' | 'scale';
  name: string;
  monthlyPrice: number;
  icon: React.ReactNode;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
}

export function PricingModal({ isOpen, onClose, currentPlan }: PricingModalProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  if (!isOpen) return null;

  const plans: Plan[] = [
    {
      id: 'creator',
      name: 'Creator',
      monthlyPrice: 39,
      icon: <Sparkles size={20} strokeWidth={2} />,
      description: 'Perfect for individual creators',
      features: [
        { text: 'Up to 3 TikTok accounts' },
        { text: 'AI content suggestions' },
        { text: 'Basic analytics' },
        { text: 'Content scheduling' },
        { text: 'Email support' },
      ],
    },
    {
      id: 'growth',
      name: 'Growth',
      monthlyPrice: 75,
      icon: <TrendingUp size={20} strokeWidth={2} />,
      description: 'Ideal for growing creators',
      popular: true,
      features: [
        { text: 'Up to 10 TikTok accounts' },
        { text: 'Advanced AI optimization' },
        { text: 'Advanced analytics' },
        { text: 'Team collaboration' },
        { text: 'Priority support' },
        { text: 'Weekly consultations', highlight: true },
      ],
    },
    {
      id: 'scale',
      name: 'Scale',
      monthlyPrice: 245,
      icon: <Rocket size={20} strokeWidth={2} />,
      description: 'Enterprise solution',
      features: [
        { text: 'Unlimited accounts' },
        { text: 'Enterprise AI' },
        { text: 'Custom analytics' },
        { text: 'Advanced team tools' },
        { text: 'White-label options' },
        { text: 'Dedicated manager', highlight: true },
        { text: '24/7 priority support', highlight: true },
      ],
    },
  ];

  const getPrice = (monthlyPrice: number) => {
    if (billingCycle === 'yearly') {
      return (monthlyPrice * 0.8).toFixed(2);
    }
    return monthlyPrice.toFixed(2);
  };

  const getSavings = (monthlyPrice: number) => {
    return (monthlyPrice * 0.2).toFixed(2);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-[1200px] bg-white rounded-[12px] shadow-2xl flex flex-col" style={{ height: 'calc(100vh - 80px)', maxHeight: '900px' }}>
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E5E7EB] flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-[#111827]" style={{ fontSize: '22px', fontWeight: '700' }}>
                Choose Your Plan
              </h2>
              <p className="text-[#9CA3AF] mt-1" style={{ fontSize: '13px' }}>
                Upgrade to unlock more features and scale your content
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-[#F8F9FA] transition-colors flex items-center justify-center"
            >
              <X size={18} className="text-[#374151]" />
            </button>
          </div>

          {/* Billing Cycle Toggle - Removed */}
          {/* <div className="flex items-center justify-center gap-2">
            <button ... />
            <button ... />
          </div> */}
        </div>

        {/* Pricing Cards */}
        <div className="flex-1 px-6 py-5 overflow-hidden">
          <div className="grid grid-cols-3 gap-5 h-full">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-[12px] border-2 transition-all flex flex-col ${
                  plan.popular
                    ? 'border-[#0F766E] shadow-md'
                    : 'border-[#E5E7EB] hover:border-[#9CA3AF]'
                } ${
                  currentPlan === plan.id
                    ? 'bg-[#F8F9FA]'
                    : 'bg-white'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-3 py-1 rounded-full bg-[#0F766E] text-white" style={{ fontSize: '11px', fontWeight: '700' }}>
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Current Plan Badge */}
                {currentPlan === plan.id && (
                  <div className="absolute -top-2.5 right-3 z-10">
                    <div className="px-3 py-1 rounded-full bg-[#059669] text-white" style={{ fontSize: '11px', fontWeight: '700' }}>
                      CURRENT
                    </div>
                  </div>
                )}

                <div className="p-5 flex flex-col h-full">
                  {/* Icon & Name */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                      plan.popular ? 'bg-[#0F766E] text-white' : 'bg-[#F8F9FA] text-[#374151]'
                    }`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-[#111827]" style={{ fontSize: '19px', fontWeight: '700' }}>
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[#111827]" style={{ fontSize: '34px', fontWeight: '700' }}>
                        ${getPrice(plan.monthlyPrice)}
                      </span>
                      <span className="text-[#9CA3AF]" style={{ fontSize: '13px', fontWeight: '500' }}>
                        /mo
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#9CA3AF] line-through" style={{ fontSize: '12px' }}>
                          ${plan.monthlyPrice.toFixed(2)}
                        </span>
                        <span className="text-[#059669]" style={{ fontSize: '12px', fontWeight: '600' }}>
                          Save ${getSavings(plan.monthlyPrice)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-[#9CA3AF] mb-4" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    disabled={currentPlan === plan.id}
                    className={`w-full py-2.5 rounded-lg font-semibold transition-all mb-4 ${
                      currentPlan === plan.id
                        ? 'bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed'
                        : plan.popular
                        ? 'bg-[#0F766E] text-white hover:bg-[#0d6660]'
                        : 'bg-white text-[#111827] border-2 border-[#0F766E] hover:bg-[#0F766E] hover:text-white'
                    }`}
                    style={{ fontSize: '14px' }}
                  >
                    {currentPlan === plan.id ? 'Current Plan' : 'Upgrade Now'}
                  </button>

                  {/* Features List */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="text-[#9CA3AF] mb-2.5" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px' }}>
                      FEATURES
                    </div>
                    <div className="space-y-2.5">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2.5">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            feature.highlight 
                              ? 'bg-[#059669]' 
                              : 'bg-[#E5E7EB]'
                          }`}>
                            <Check 
                              size={11} 
                              strokeWidth={3} 
                              className={feature.highlight ? 'text-white' : 'text-[#9CA3AF]'} 
                            />
                          </div>
                          <span 
                            className={feature.highlight ? 'text-[#111827] font-semibold' : 'text-[#374151]'} 
                            style={{ fontSize: '12px', lineHeight: '1.5' }}
                          >
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#E5E7EB] bg-[#F8F9FA] flex-shrink-0">
          <p className="text-center text-[#9CA3AF]" style={{ fontSize: '12px' }}>
            {billingCycle === 'yearly' 
              ? '7-day free trial · Billed annually · Cancel anytime'
              : '7-day free trial · Cancel anytime · No hidden fees'}
          </p>
        </div>
      </div>
    </div>
  );
}
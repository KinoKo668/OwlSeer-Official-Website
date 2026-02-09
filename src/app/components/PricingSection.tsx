import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Zap, Star, Shield, Users } from 'lucide-react';

const PricingCard = ({ 
  plan, 
  price, 
  period, 
  features, 
  isPopular, 
  ctaText, 
  onCtaClick 
}: { 
  plan: string; 
  price: string; 
  period: string; 
  features: string[]; 
  isPopular?: boolean; 
  ctaText: string; 
  onCtaClick: () => void;
}) => (
  <div className={`relative p-6 md:p-8 rounded-3xl border ${isPopular ? 'border-[#1AAE82] bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10' : 'border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900'} transition-all duration-300 hover:shadow-xl flex flex-col h-full`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1AAE82] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
        Most Popular
      </div>
    )}
    
    <div className="mb-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-gray-900 dark:text-white">{price}</span>
        <span className="text-gray-500 dark:text-gray-400 font-medium">/{period}</span>
      </div>
    </div>
    
    <div className="flex-1 space-y-4 mb-8">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-[#1AAE82]/10 flex items-center justify-center shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-[#1AAE82]" />
          </div>
          <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature}</span>
        </div>
      ))}
    </div>
    
    <button 
      onClick={onCtaClick}
      className={`w-full py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
        isPopular 
          ? 'bg-[#1AAE82] hover:bg-[#15956F] text-white shadow-lg hover:shadow-[#1AAE82]/30' 
          : 'bg-gray-900 dark:bg-slate-800 hover:bg-gray-800 dark:hover:bg-slate-700 text-white hover:shadow-lg'
      }`}
    >
      {ctaText} <ArrowRight className="w-4 h-4" />
    </button>
  </div>
);

export function PricingSection({ onSignUp, t }: { onSignUp: () => void, t: any }) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300" id="pricing">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display">
            {t?.title || 'Simple, Transparent Pricing'}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {t?.subtitle || 'Start your 14-day free trial. Cancel anytime.'}
          </p>
          
          {/* Toggle - Removed */}
          {/* <div className="inline-flex items-center p-1 bg-gray-100 dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700">
             ...
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Creator Tier */}
          <PricingCard 
            plan={t?.plans?.creator?.name || "Creator"}
            price={billingCycle === 'annual' ? "$31" : "$39"}
            period={t?.period || "mo"}
            features={t?.plans?.creator?.features || [
              "Up to 3 TikTok accounts",
              "AI content suggestions",
              "Basic analytics",
              "Content scheduling",
              "Email support"
            ]}
            ctaText={t?.cta?.trial || "Start Free Trial"}
            onCtaClick={onSignUp}
          />

          {/* Growth Tier */}
          <PricingCard 
            plan={t?.plans?.growth?.name || "Growth"}
            price={billingCycle === 'annual' ? "$60" : "$75"}
            period={t?.period || "mo"}
            isPopular={true}
            features={t?.plans?.growth?.features || [
              "Up to 10 TikTok accounts",
              "Advanced AI optimization",
              "Advanced analytics",
              "Team collaboration",
              "Priority support",
              "Weekly consultations"
            ]}
            ctaText={t?.cta?.buy || "Buy Now"}
            onCtaClick={onSignUp}
          />

          {/* Scale Tier */}
          <PricingCard 
            plan={t?.plans?.scale?.name || "Scale"}
            price={billingCycle === 'annual' ? "$196" : "$245"}
            period={t?.period || "mo"}
            features={t?.plans?.scale?.features || [
              "Unlimited accounts",
              "Enterprise AI",
              "Custom analytics",
              "Advanced team tools",
              "White-label options",
              "Dedicated manager",
              "24/7 priority support"
            ]}
            ctaText={t?.cta?.buy || "Buy Now"}
            onCtaClick={onSignUp}
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-6">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> {t?.footer?.secure || "Secure payment"}</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> {t?.footer?.trial || "14-day free trial"}</span>
            <span className="flex items-center gap-2"><Users className="w-4 h-4" /> {t?.footer?.cancel || "Cancel anytime"}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

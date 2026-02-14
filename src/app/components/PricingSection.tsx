import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Shield, Users, Zap } from 'lucide-react';
import { usePerformance } from '../contexts';

type BillingCycle = 'monthly' | 'annual';
type PlanKey = 'creator' | 'growth' | 'scale';

const planPricing: Record<PlanKey, { monthly: string; annual: string; summary: string }> = {
  creator: {
    monthly: '$39',
    annual: '$31',
    summary: 'Solo creator plan to launch your content flywheel fast.'
  },
  growth: {
    monthly: '$75',
    annual: '$60',
    summary: 'Small-team plan for repeatable, high-volume content output.'
  },
  scale: {
    monthly: '$245',
    annual: '$196',
    summary: 'Agency and multi-account plan focused on conversion and speed.'
  }
};

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' }
};

function PricingCard({
  planName,
  summary,
  price,
  period,
  features,
  isPopular,
  popularLabel,
  ctaText,
  onCtaClick,
  reduceMotion
}: {
  planName: string;
  summary: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  popularLabel?: string;
  ctaText: string;
  onCtaClick: () => void;
  reduceMotion: boolean;
}) {
  return (
    <div
      style={{ contain: 'layout style' }}
      className={`perf-heavy-card relative flex h-full flex-col rounded-[26px] border p-5 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:rounded-[30px] sm:p-6 md:p-8 ${
        reduceMotion ? '' : 'transition-all duration-500 hover:-translate-y-1'
      } ${
        isPopular
          ? 'border-emerald-300 bg-gradient-to-b from-emerald-500/15 via-white/82 to-white/75 dark:border-emerald-400/45 dark:from-emerald-500/24 dark:via-slate-900/78 dark:to-slate-900/64'
          : 'border-white/85 bg-white/75 dark:border-white/10 dark:bg-slate-900/58'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg">
          {popularLabel || 'Most Popular'}
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl dark:text-white">{planName}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{summary}</p>
        <div className="mt-5 flex items-end gap-2">
          <span className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{price}</span>
          <span className="pb-1 text-sm text-slate-500 dark:text-slate-400">/{period}</span>
        </div>
      </div>

      <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent sm:my-7 dark:via-white/10" />

      <div className="flex-1 space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/12 dark:bg-emerald-500/18">
              <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-300" />
            </span>
            <span className="text-[13px] leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300">{feature}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onCtaClick}
        className={`group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 sm:mt-8 sm:py-3.5 ${
          isPopular
            ? 'bg-emerald-500 text-white shadow-[0_16px_45px_-24px_rgba(16,185,129,0.9)] hover:bg-emerald-600'
            : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200'
        }`}
      >
        {ctaText}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
}

export function PricingSection({ onSignUp, t }: { onSignUp: () => void; t: any }) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const { reduceMotion } = usePerformance();
  const revealProps = reduceMotion ? {} : reveal;

  const planKeys: PlanKey[] = ['creator', 'growth', 'scale'];
  const period = t?.period || 'mo';
  const popularLabel = t?.labels?.mostPopular || 'Most Popular';

  return (
    <section
      id="pricing"
      className="perf-content-auto relative overflow-hidden py-20 md:py-24 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 {...revealProps} className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-5xl dark:text-white">
            {t?.title || 'Simple, Transparent Pricing'}
          </motion.h2>
          <motion.p
            {...revealProps}
            transition={reduceMotion ? { duration: 0 } : { delay: 0.08 }}
          className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base md:text-lg dark:text-slate-300"
          >
            {t?.subtitle || 'Start your 7-day free trial. Cancel anytime.'}
          </motion.p>

          <motion.div
            {...revealProps}
            transition={reduceMotion ? { duration: 0 } : { delay: 0.16 }}
            className="perf-lite-card mt-8 inline-flex w-full max-w-xs items-center justify-center rounded-full border border-white/85 bg-white/72 p-1 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.95)] backdrop-blur-md sm:w-auto sm:max-w-none dark:border-white/10 dark:bg-slate-900/60"
          >
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                billingCycle === 'monthly'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {t?.monthly || 'Monthly'}
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                billingCycle === 'annual'
                  ? 'bg-emerald-500 text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {t?.yearly || 'Yearly'}
              <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                {t?.save || '20% OFF'}
              </span>
            </button>
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {planKeys.map((key, index) => (
            <motion.div key={key} {...revealProps} transition={reduceMotion ? { duration: 0 } : { delay: 0.12 + index * 0.06 }}>
              <PricingCard
                planName={t?.plans?.[key]?.name || key}
                summary={t?.plans?.[key]?.summary || planPricing[key].summary}
                price={billingCycle === 'annual' ? planPricing[key].annual : planPricing[key].monthly}
                period={period}
                features={t?.plans?.[key]?.features || []}
                isPopular={key === 'growth'}
                popularLabel={popularLabel}
                ctaText={key === 'creator' ? t?.cta?.trial || 'Start Free Trial' : t?.cta?.buy || 'Buy Now'}
                onCtaClick={onSignUp}
                reduceMotion={reduceMotion}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          {...revealProps}
          transition={reduceMotion ? { duration: 0 } : { delay: 0.32 }}
          className="perf-lite-card mt-8 grid gap-3 rounded-[24px] border border-white/85 bg-white/72 p-4 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:mt-10 sm:gap-4 sm:rounded-[26px] sm:p-5 md:grid-cols-3 dark:border-white/10 dark:bg-slate-900/60"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <Shield className="h-4 w-4 text-emerald-500" />
            {t?.footer?.secure || 'Secure payment'}
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <Zap className="h-4 w-4 text-emerald-500" />
            {t?.footer?.trial || '7-day free trial'}
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <Users className="h-4 w-4 text-emerald-500" />
            {t?.footer?.cancel || 'Cancel anytime'}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

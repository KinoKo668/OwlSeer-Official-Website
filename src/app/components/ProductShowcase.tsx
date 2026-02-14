import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { usePerformance } from '../contexts';

const cardReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' }
};

const defaultOpportunityMock = {
  eyebrow: 'Trend Radar',
  title: 'High-fit opportunity detected',
  score: '94 score',
  metrics: [
    { label: 'Velocity', value: '+128%' },
    { label: 'Competition', value: 'Low' },
    { label: 'View Pool', value: '45M' }
  ],
  bullets: ['High overlap with your top-performing audience segment.', 'Recommended posting window opens in the next 6 hours.']
};

const MockOpportunityCard = ({ t }: { t?: any }) => {
  const content = t || defaultOpportunityMock;
  const metrics = content.metrics || defaultOpportunityMock.metrics;
  const bullets = content.bullets || defaultOpportunityMock.bullets;

  return (
    <div className="rounded-[24px] border border-[#D0FAE4]/80 bg-[#F6F7FB] p-5 shadow-[0_18px_46px_-34px_rgba(16,185,129,0.35)] backdrop-blur-md dark:border-emerald-500/30 dark:bg-slate-900/75">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#007A55]/80 dark:text-emerald-300/80">{content.eyebrow || defaultOpportunityMock.eyebrow}</p>
          <h4 className="mt-2 text-lg font-semibold text-[#0F172B] dark:text-white">{content.title || defaultOpportunityMock.title}</h4>
        </div>
        <div className="rounded-xl bg-[#00BC7D]/10 px-3 py-1 text-sm font-semibold text-[#007A55] dark:text-emerald-300">{content.score || defaultOpportunityMock.score}</div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {metrics.map((item: any) => (
          <div key={`${item.label}-${item.value}`} className="rounded-xl border border-[#D0FAE4]/80 bg-[#F6F7FB] px-3 py-2 dark:border-emerald-500/30 dark:bg-slate-900/70">
            <div className="text-[10px] font-medium uppercase tracking-wider text-[#62748E] dark:text-slate-400">{item.label}</div>
            <div className="mt-1 text-base font-semibold text-[#0F172B] dark:text-white">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-2">
        {bullets.map((bullet: string) => (
          <p key={bullet} className="flex items-center gap-2 text-sm text-[#45556C] dark:text-slate-300">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            {bullet}
          </p>
        ))}
      </div>
    </div>
  );
};

const defaultPlanningMock = {
  eyebrow: 'Execution Plan',
  title: "This week's production cadence",
  postCount: '3 posts',
  schedule: [
    { day: 'Mon', date: '24', task: 'Trend-first opener', tag: 'Growth' },
    { day: 'Wed', date: '26', task: 'Trust-building story', tag: 'Community' },
    { day: 'Fri', date: '28', task: 'Conversion CTA video', tag: 'Revenue' }
  ]
};

const MockPlanningCard = ({ t }: { t?: any }) => {
  const content = t || defaultPlanningMock;
  const schedule = content.schedule || defaultPlanningMock.schedule;

  return (
    <div className="rounded-[24px] border border-[#FEF3C6]/80 bg-[#F6F7FB] p-5 shadow-[0_18px_46px_-34px_rgba(245,158,11,0.32)] backdrop-blur-md dark:border-amber-500/30 dark:bg-slate-900/75">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BB4D00]/80 dark:text-amber-300/80">{content.eyebrow || defaultPlanningMock.eyebrow}</p>
          <h4 className="mt-2 text-lg font-semibold text-[#0F172B] dark:text-white">{content.title || defaultPlanningMock.title}</h4>
        </div>
        <div className="rounded-xl bg-[#FD9900]/10 px-3 py-1 text-sm font-semibold text-[#BB4D00] dark:text-amber-300">{content.postCount || defaultPlanningMock.postCount}</div>
      </div>
      <div className="space-y-3">
        {schedule.map((item: any, index: number) => (
          <div key={`${item.day}-${item.date}-${index}`} className="grid grid-cols-[44px_1fr_auto] items-center gap-3 rounded-xl border border-[#FEF3C6]/80 bg-[#F6F7FB] px-3 py-2 dark:border-amber-500/30 dark:bg-slate-900/70">
            <div className="text-center">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#62748E] dark:text-slate-400">{item.day}</div>
              <div className="text-base font-semibold text-[#0F172B] dark:text-white">{item.date}</div>
            </div>
            <div className="text-sm font-medium text-[#314158] dark:text-slate-200">{item.task}</div>
            <span className="rounded-lg bg-[#FD9900]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#BB4D00] dark:text-amber-300">{item.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const defaultAnalyticsMock = {
  eyebrow: 'Performance DNA',
  title: 'Replicate what already wins',
  pill: 'Top 5%',
  metrics: [
    { label: 'Hook Strength', value: '9.8/10', width: 'w-[95%]' },
    { label: 'Audience Retention', value: '72%', width: 'w-[72%]' },
    { label: 'CTA Completion', value: '38%', width: 'w-[38%]' }
  ]
};

const MockAnalyticsCard = ({ t }: { t?: any }) => {
  const content = t || defaultAnalyticsMock;
  const metrics = content.metrics || defaultAnalyticsMock.metrics;

  return (
    <div className="rounded-[24px] border border-[#DFF2FE]/80 bg-[#F6F7FB] p-5 shadow-[0_18px_46px_-34px_rgba(14,165,233,0.32)] backdrop-blur-md dark:border-sky-500/30 dark:bg-slate-900/75">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0069A8]/80 dark:text-sky-300/80">{content.eyebrow || defaultAnalyticsMock.eyebrow}</p>
          <h4 className="mt-2 text-lg font-semibold text-[#0F172B] dark:text-white">{content.title || defaultAnalyticsMock.title}</h4>
        </div>
        <span className="rounded-xl bg-[#00A6F4]/10 px-3 py-1 text-sm font-semibold text-[#0069A8] dark:text-sky-300">{content.pill || defaultAnalyticsMock.pill}</span>
      </div>
      <div className="space-y-4">
        {metrics.map((item: any) => (
          <div key={`${item.label}-${item.value}`}>
            <div className="mb-1 flex items-center justify-between text-xs font-medium text-[#62748E] dark:text-slate-400">
              <span>{item.label}</span>
              <span className="font-semibold text-[#314158] dark:text-slate-200">{item.value}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-800">
              <div className={`h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 ${item.width}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  statA: string;
  statB: string;
  bullets: string[];
  link: string;
  learnMoreColor: string;
  panelTone: 'emerald' | 'amber' | 'sky';
  mock: React.ReactNode;
};

const panelToneClassMap = {
  emerald: {
    outer: 'border-white/85 bg-gradient-to-b from-[#F6F7FB] to-[#F6F7FB] dark:border-white/10 dark:from-slate-900/85 dark:to-slate-900/55',
    glow: 'from-emerald-500/15 via-emerald-500/5 to-transparent'
  },
  amber: {
    outer: 'border-white/85 bg-gradient-to-b from-[#F6F7FB] to-[#F6F7FB] dark:border-white/10 dark:from-slate-900/85 dark:to-slate-900/55',
    glow: 'from-amber-500/15 via-amber-500/5 to-transparent'
  },
  sky: {
    outer: 'border-white/85 bg-gradient-to-b from-[#F6F7FB] to-[#F6F7FB] dark:border-white/10 dark:from-slate-900/85 dark:to-slate-900/55',
    glow: 'from-sky-500/15 via-sky-500/5 to-transparent'
  }
};

export function ProductShowcase({ t, onNavigate }: { t: any; onNavigate: (page: string) => void }) {
  const { reduceMotion } = usePerformance();
  const revealProps = reduceMotion ? {} : cardReveal;

  const features: FeatureItem[] = [
    {
      id: 'opportunities',
      title: t?.opportunities?.title || 'Spot Trends Before They Peak',
      description:
        t?.opportunities?.desc ||
        'Stop chasing yesterday’s viral hits. Our AI analyzes millions of signals to find high-potential topics tailored specifically to your niche.',
      statA: t?.opportunities?.statA || '24/7 signal scan',
      statB: t?.opportunities?.statB || 'Opportunity-first ranking',
      bullets: t?.opportunities?.bullets || ['Find rising topics before saturation.', 'Prioritize topics with proven niche fit.'],
      link: '/social/use-cases/trend-prediction',
      learnMoreColor: 'text-[#009966] dark:text-emerald-300',
      panelTone: 'emerald',
      mock: <MockOpportunityCard t={t?.opportunities?.mock} />
    },
    {
      id: 'planning',
      title: t?.planning?.title || 'Execution, Not Just Planning',
      description:
        t?.planning?.desc ||
        'Turn strategy into action. Get a weekly production schedule that balances high-growth risks with stable, trust-building content.',
      statA: t?.planning?.statA || 'Weekly cadence map',
      statB: t?.planning?.statB || 'Balanced content mix',
      bullets: t?.planning?.bullets || ['Convert recommendations into an exact shoot calendar.', 'Maintain consistency without burning creative energy.'],
      link: '/social/use-cases/posting-schedule',
      learnMoreColor: 'text-[#E17100] dark:text-amber-300',
      panelTone: 'amber',
      mock: <MockPlanningCard t={t?.planning?.mock} />
    },
    {
      id: 'analytics',
      title: t?.analytics?.title || 'Decode Your Content DNA',
      description:
        t?.analytics?.desc ||
        'Understand exactly why your best videos perform. We break down your content into structural elements to replicate success.',
      statA: t?.analytics?.statA || 'Frame-level diagnosis',
      statB: t?.analytics?.statB || 'Repeatable winning patterns',
      bullets: t?.analytics?.bullets || ['Pinpoint what drives retention and completion.', 'Iterate faster with evidence-backed edits.'],
      link: '/social/use-cases/content-diagnosis',
      learnMoreColor: 'text-[#0084D1] dark:text-sky-300',
      panelTone: 'sky',
      mock: <MockAnalyticsCard t={t?.analytics?.mock} />
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-24 lg:py-28" aria-label="Product workflow showcase">
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div {...revealProps} className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0F172B] sm:text-4xl md:text-[48px] md:leading-[48px] dark:text-white">
            {t?.heading?.title || 'From insight to publish-ready output in one flow'}
          </h2>
          <p className="mx-auto mt-4 max-w-[740px] text-sm leading-7 text-[#45556C] sm:text-base md:text-[18px] md:leading-[29px] dark:text-slate-300">
            {t?.heading?.subtitle ||
              'OwlSeer removes the gap between strategy and execution so creators can move from signal to script with confidence.'}
          </p>
        </motion.div>

        <motion.div {...revealProps} transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.05 }} className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="min-h-[90px] rounded-2xl border border-white/80 bg-[#F6F7FB] px-4 py-3 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.32)] backdrop-blur-[6px] dark:border-white/10 dark:bg-slate-900/55">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#62748E] dark:text-slate-400">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {t?.highlights?.decisionCycle?.label || 'Decision Cycle'}
            </div>
            <p className="mt-2 text-sm font-medium text-[#314158] dark:text-slate-200">{t?.highlights?.decisionCycle?.desc || 'Signal detection to execution in minutes, not days.'}</p>
          </div>
          <div className="min-h-[90px] rounded-2xl border border-white/80 bg-[#F6F7FB] px-4 py-3 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.32)] backdrop-blur-[6px] dark:border-white/10 dark:bg-slate-900/55">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#62748E] dark:text-slate-400">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {t?.highlights?.growthSignal?.label || 'Growth Signal'}
            </div>
            <p className="mt-2 text-sm font-medium text-[#314158] dark:text-slate-200">{t?.highlights?.growthSignal?.desc || 'Prioritize opportunities with velocity and niche fit.'}</p>
          </div>
          <div className="min-h-[90px] rounded-2xl border border-white/80 bg-[#F6F7FB] px-4 py-3 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.32)] backdrop-blur-[6px] dark:border-white/10 dark:bg-slate-900/55">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#62748E] dark:text-slate-400">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {t?.highlights?.executionQuality?.label || 'Execution Quality'}
            </div>
            <p className="mt-2 text-sm font-medium text-[#314158] dark:text-slate-200">{t?.highlights?.executionQuality?.desc || 'Every recommendation includes reasoning you can trust.'}</p>
          </div>
        </motion.div>

        <div className="mt-10 space-y-8">
          {features.map((feature, index) => {
            const panelTone = panelToneClassMap[feature.panelTone];
            const isReverse = index === 1;

            return (
              <motion.article
                key={feature.id}
                {...revealProps}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.08 * index }}
                className="relative p-2 sm:p-3 md:p-4"
              >
                <div className={`relative grid items-center gap-8 lg:grid-cols-2 ${isReverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-[#0F172B] sm:text-[32px] sm:leading-[42px] dark:text-white">{feature.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#45556C] sm:text-base sm:leading-[26px] dark:text-slate-300">{feature.description}</p>

                    <div className="mt-6 space-y-3">
                      {feature.bullets.map((bullet) => (
                        <p key={bullet} className="flex items-start gap-2.5 text-sm text-[#45556C] dark:text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          {bullet}
                        </p>
                      ))}
                    </div>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/80 bg-white/70 px-4 py-3 backdrop-blur-[6px] dark:border-white/10 dark:bg-slate-950/45">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#62748E] dark:text-slate-400">{t?.labels?.capability || 'Capability'}</div>
                        <div className="mt-1 text-sm font-semibold text-[#1D293D] dark:text-slate-100">{feature.statA}</div>
                      </div>
                      <div className="rounded-2xl border border-white/80 bg-white/70 px-4 py-3 backdrop-blur-[6px] dark:border-white/10 dark:bg-slate-950/45">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#62748E] dark:text-slate-400">{t?.labels?.outcome || 'Outcome'}</div>
                        <div className="mt-1 text-sm font-semibold text-[#1D293D] dark:text-slate-100">{feature.statB}</div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onNavigate(feature.link)}
                      className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-300 hover:translate-x-1 ${feature.learnMoreColor}`}
                      aria-label={`Learn more about ${feature.title}`}
                    >
                      {t?.labels?.learnMore || 'Learn more'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="relative">
                    <div className={`rounded-[30px] border p-4 shadow-[0_16px_38px_-30px_rgba(15,23,42,0.3)] backdrop-blur-xl ${panelTone.outer}`}>
                      {feature.mock}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

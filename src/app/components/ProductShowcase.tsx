import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BarChart2,
  Calendar,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react';
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
    <div className="perf-lite-card rounded-[24px] border border-emerald-100/80 bg-white/85 p-5 shadow-[0_26px_70px_-45px_rgba(16,185,129,0.6)] backdrop-blur-md dark:border-emerald-500/20 dark:bg-slate-900/70">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700/80 dark:text-emerald-300/80">
            {content.eyebrow || defaultOpportunityMock.eyebrow}
          </p>
          <h4 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{content.title || defaultOpportunityMock.title}</h4>
        </div>
        <div className="rounded-xl bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          {content.score || defaultOpportunityMock.score}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {metrics.map((item: any) => (
          <div key={`${item.label}-${item.value}`} className="rounded-xl border border-emerald-100/80 bg-white/70 px-3 py-2 dark:border-emerald-500/20 dark:bg-slate-900/70">
            <div className="text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">{item.label}</div>
            <div className="mt-1 text-base font-semibold text-slate-900 dark:text-white">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-2">
        {bullets.map((bullet: string) => (
          <p key={bullet} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
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
    <div className="perf-lite-card rounded-[24px] border border-amber-100/80 bg-white/85 p-5 shadow-[0_26px_70px_-45px_rgba(245,158,11,0.55)] backdrop-blur-md dark:border-amber-500/20 dark:bg-slate-900/70">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600/80 dark:text-amber-300/80">
            {content.eyebrow || defaultPlanningMock.eyebrow}
          </p>
          <h4 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{content.title || defaultPlanningMock.title}</h4>
        </div>
        <div className="rounded-xl bg-amber-500/10 px-3 py-1 text-sm font-semibold text-amber-700 dark:text-amber-300">
          {content.postCount || defaultPlanningMock.postCount}
        </div>
      </div>
      <div className="space-y-3">
        {schedule.map((item: any, index: number) => (
          <div
            key={`${item.day}-${item.date}-${index}`}
            className="grid grid-cols-[44px_1fr_auto] items-center gap-3 rounded-xl border border-amber-100/80 bg-white/70 px-3 py-2 dark:border-amber-500/20 dark:bg-slate-900/70"
          >
            <div className="text-center">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{item.day}</div>
              <div className="text-base font-semibold text-slate-900 dark:text-white">{item.date}</div>
            </div>
            <div className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.task}</div>
            <span className="rounded-lg bg-amber-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
              {item.tag}
            </span>
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
    <div className="perf-lite-card rounded-[24px] border border-sky-100/80 bg-white/85 p-5 shadow-[0_26px_70px_-45px_rgba(14,165,233,0.55)] backdrop-blur-md dark:border-sky-500/20 dark:bg-slate-900/70">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700/80 dark:text-sky-300/80">
            {content.eyebrow || defaultAnalyticsMock.eyebrow}
          </p>
          <h4 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{content.title || defaultAnalyticsMock.title}</h4>
        </div>
        <span className="rounded-xl bg-sky-500/10 px-3 py-1 text-sm font-semibold text-sky-700 dark:text-sky-300">
          {content.pill || defaultAnalyticsMock.pill}
        </span>
      </div>
      <div className="space-y-4">
        {metrics.map((item: any) => (
          <div key={`${item.label}-${item.value}`}>
            <div className="mb-1 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
              <span>{item.label}</span>
              <span className="font-semibold text-slate-700 dark:text-slate-200">{item.value}</span>
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

type WorkflowFeature = {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  accentText: string;
  statA: string;
  statB: string;
  bullets: string[];
  component: React.ReactNode;
  link: string;
};

export function ProductShowcase({ t, onNavigate }: { t: any; onNavigate: (page: string) => void }) {
  const { reduceMotion } = usePerformance();
  const revealProps = reduceMotion ? {} : cardReveal;

  const features: WorkflowFeature[] = [
    {
      id: 'opportunities',
      step: t?.opportunities?.step || 'Step 01',
      title: t?.opportunities?.title || 'Spot Trends Before They Peak',
      description:
        t?.opportunities?.desc ||
        'Stop chasing yesterday’s viral hits. Our AI analyzes millions of signals to find high-potential topics tailored specifically to your niche.',
      icon: <Target className="h-5 w-5" />,
      accent: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
      accentText: 'text-emerald-600 dark:text-emerald-300',
      statA: t?.opportunities?.statA || '24/7 signal scan',
      statB: t?.opportunities?.statB || 'Opportunity-first ranking',
      bullets: t?.opportunities?.bullets || ['Find rising topics before saturation.', 'Prioritize topics with proven niche fit.'],
      component: <MockOpportunityCard t={t?.opportunities?.mock} />,
      link: '/social/use-cases/trend-prediction'
    },
    {
      id: 'planning',
      step: t?.planning?.step || 'Step 02',
      title: t?.planning?.title || 'Execution, Not Just Planning',
      description:
        t?.planning?.desc ||
        'Turn strategy into action. Get a weekly production schedule that balances high-growth risks with stable, trust-building content.',
      icon: <Calendar className="h-5 w-5" />,
      accent: 'from-amber-500/20 via-amber-500/5 to-transparent',
      accentText: 'text-amber-600 dark:text-amber-300',
      statA: t?.planning?.statA || 'Weekly cadence map',
      statB: t?.planning?.statB || 'Balanced content mix',
      bullets: t?.planning?.bullets || ['Convert recommendations into an exact shoot calendar.', 'Maintain consistency without burning creative energy.'],
      component: <MockPlanningCard t={t?.planning?.mock} />,
      link: '/social/use-cases/posting-schedule'
    },
    {
      id: 'analytics',
      step: t?.analytics?.step || 'Step 03',
      title: t?.analytics?.title || 'Decode Your Content DNA',
      description:
        t?.analytics?.desc ||
        'Understand exactly why your best videos perform. We break down your content into structural elements to replicate success.',
      icon: <BarChart2 className="h-5 w-5" />,
      accent: 'from-sky-500/20 via-sky-500/5 to-transparent',
      accentText: 'text-sky-600 dark:text-sky-300',
      statA: t?.analytics?.statA || 'Frame-level diagnosis',
      statB: t?.analytics?.statB || 'Repeatable winning patterns',
      bullets: t?.analytics?.bullets || ['Pinpoint what drives retention and completion.', 'Iterate faster with evidence-backed edits.'],
      component: <MockAnalyticsCard t={t?.analytics?.mock} />,
      link: '/social/use-cases/content-diagnosis'
    }
  ];

  return (
    <section
      className="perf-content-auto relative overflow-hidden py-20 md:py-24 lg:py-28"
      aria-label="Product workflow showcase"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...revealProps} className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:mt-6 sm:text-3xl md:text-5xl dark:text-white">
            {t?.heading?.title || 'From insight to publish-ready output in one flow'}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base md:text-lg dark:text-slate-300">
            {t?.heading?.subtitle ||
              'OwlSeer removes the gap between strategy and execution so creators can move from signal to script with confidence.'}
          </p>
        </motion.div>

        <motion.div
          {...revealProps}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.05 }}
          className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-3"
        >
          <div className="perf-lite-card rounded-2xl border border-white/80 bg-white/70 px-4 py-3 shadow-[0_20px_55px_-45px_rgba(15,23,42,0.85)] backdrop-blur-md dark:border-white/10 dark:bg-slate-900/55">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <Clock3 className="h-4 w-4 text-emerald-500" />
              {t?.highlights?.decisionCycle?.label || 'Decision Cycle'}
            </div>
            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              {t?.highlights?.decisionCycle?.desc || 'Signal detection to execution in minutes, not days.'}
            </p>
          </div>
          <div className="perf-lite-card rounded-2xl border border-white/80 bg-white/70 px-4 py-3 shadow-[0_20px_55px_-45px_rgba(15,23,42,0.85)] backdrop-blur-md dark:border-white/10 dark:bg-slate-900/55">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              {t?.highlights?.growthSignal?.label || 'Growth Signal'}
            </div>
            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              {t?.highlights?.growthSignal?.desc || 'Prioritize opportunities with velocity and niche fit.'}
            </p>
          </div>
          <div className="perf-lite-card rounded-2xl border border-white/80 bg-white/70 px-4 py-3 shadow-[0_20px_55px_-45px_rgba(15,23,42,0.85)] backdrop-blur-md dark:border-white/10 dark:bg-slate-900/55">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              {t?.highlights?.executionQuality?.label || 'Execution Quality'}
            </div>
            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              {t?.highlights?.executionQuality?.desc || 'Every recommendation includes reasoning you can trust.'}
            </p>
          </div>
        </motion.div>

        <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
          {features.map((feature, index) => (
            <motion.article
              key={feature.id}
              {...revealProps}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.08 * index }}
              className={`perf-heavy-card group relative grid gap-6 rounded-[28px] border border-white/85 bg-white/70 p-5 shadow-[0_32px_95px_-60px_rgba(15,23,42,0.9)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/55 sm:gap-8 sm:p-6 md:rounded-[34px] md:p-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}
            >
              <div className={`pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-r ${feature.accent} opacity-70 md:rounded-[34px]`} />
              <div className="relative">
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900 sm:mt-5 sm:text-2xl md:text-[2rem] dark:text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base dark:text-slate-300">{feature.description}</p>

                <div className="mt-5 space-y-2.5 sm:mt-6">
                  {feature.bullets.map((bullet) => (
                    <p key={bullet} className="flex items-start gap-2.5 text-[13px] text-slate-600 sm:text-sm dark:text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {bullet}
                    </p>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/80 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-slate-950/45">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      {t?.labels?.capability || 'Capability'}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-100">{feature.statA}</div>
                  </div>
                  <div className="rounded-2xl border border-white/80 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-slate-950/45">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      {t?.labels?.outcome || 'Outcome'}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-100">{feature.statB}</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate(feature.link)}
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1 sm:mt-7 ${feature.accentText}`}
                  aria-label={`Learn more about ${feature.title}`}
                >
                  {t?.labels?.learnMore || 'Learn more'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="relative flex items-center">
                <div className="perf-heavy-card w-full rounded-[24px] border border-white/85 bg-gradient-to-b from-white/90 to-white/55 p-3 shadow-[0_28px_75px_-50px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:rounded-[30px] sm:p-4 dark:border-white/10 dark:from-slate-900/85 dark:to-slate-900/55">
                  {feature.component}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

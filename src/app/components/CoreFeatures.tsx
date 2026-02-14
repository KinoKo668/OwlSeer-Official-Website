import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, MoreHorizontal, TrendingUp, Zap } from 'lucide-react';
import avatarPng from '../../../头像.png';
import { usePerformance } from '../contexts';

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' }
};

const cardShell =
  'relative overflow-hidden rounded-[28px] border border-white/85 bg-white/75 p-5 shadow-[0_28px_90px_-60px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 sm:rounded-[30px] sm:p-6 dark:border-white/10 dark:bg-slate-900/60';

const defaultChatContent = {
  user: 'Give me a stronger hook for my next niche video.',
  assistantLabel: 'Suggested Hook',
  assistant: "Stop copying generic intros. Here's the 3-second opener that keeps your viewers."
};

const MockChatUI = ({ t }: { t?: any }) => {
  const content = t || defaultChatContent;

  return (
    <div className="perf-lite-card w-full rounded-2xl border border-white/80 bg-white/90 shadow-[0_18px_55px_-45px_rgba(15,23,42,0.9)] dark:border-white/10 dark:bg-slate-900/80">
      <div className="flex items-center gap-2 border-b border-slate-200/70 px-4 py-3 dark:border-slate-700/70">
        <div className="h-2 w-2 rounded-full bg-red-400" />
        <div className="h-2 w-2 rounded-full bg-amber-400" />
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex gap-2">
          <div className="grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-[10px] dark:bg-slate-700">👤</div>
          <div className="max-w-[80%] rounded-xl rounded-tl-none bg-slate-100 px-3 py-2 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {content.user || defaultChatContent.user}
          </div>
        </div>
        <div className="flex flex-row-reverse gap-2">
          <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-emerald-200/70 bg-white p-0.5 dark:border-emerald-400/30 dark:bg-slate-900">
            <img src={avatarPng} alt="OwlSeer avatar" className="h-full w-full rounded-full object-contain" loading="lazy" />
          </div>
          <div className="max-w-[92%] rounded-xl rounded-tr-none border border-emerald-200/70 bg-emerald-500/8 px-3 py-2 text-xs text-slate-700 dark:border-emerald-400/20 dark:bg-emerald-500/12 dark:text-slate-200">
            <p className="mb-1 font-semibold text-emerald-600 dark:text-emerald-300">{content.assistantLabel || defaultChatContent.assistantLabel}</p>
            {content.assistant || defaultChatContent.assistant}
          </div>
        </div>
      </div>
    </div>
  );
};

const MockTrendList = ({ viewsLabel }: { viewsLabel: string }) => (
  <div className="space-y-2">
    {[
      { tag: '#DeskSetup', score: 98, trend: 'up', vol: '2.4M' },
      { tag: '#Productivity', score: 94, trend: 'up', vol: '1.8M' },
      { tag: '#TechReview', score: 89, trend: 'up', vol: '850K' },
      { tag: '#Minimalism', score: 82, trend: 'up', vol: '1.2M' },
      { tag: '#BuildInPublic', score: 79, trend: 'down', vol: '420K' }
    ].map((item) => (
      <div
        key={item.tag}
        className="flex items-center justify-between rounded-xl border border-white/80 bg-white/70 px-3 py-2 dark:border-white/10 dark:bg-slate-900/70"
      >
        <div>
          <div className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">{item.tag}</div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400">
            {item.vol} {viewsLabel}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">{item.score}</span>
          <ArrowUpRight className={`h-3.5 w-3.5 ${item.trend === 'down' ? 'rotate-90 text-rose-500' : 'text-emerald-500'}`} />
        </div>
      </div>
    ))}
  </div>
);

const MockAnalyticsChart = ({ animate }: { animate: boolean }) => (
  <div className="flex h-full items-end gap-1.5 pb-1">
    {[24, 30, 28, 42, 48, 40, 54, 62, 58, 70, 78, 74].map((height, index) => (
      animate ? (
        <motion.div
          key={height}
          initial={{ height: 0 }}
          whileInView={{ height: `${height}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.04 }}
          className={`flex-1 rounded-t-md ${index > 8 ? 'bg-gradient-to-t from-emerald-500 to-cyan-500' : 'bg-slate-200 dark:bg-slate-700'}`}
        />
      ) : (
        <div
          key={height}
          style={{ height: `${height}%` }}
          className={`flex-1 rounded-t-md ${index > 8 ? 'bg-gradient-to-t from-emerald-500 to-cyan-500' : 'bg-slate-200 dark:bg-slate-700'}`}
        />
      )
    ))}
  </div>
);

const MockGoalRing = ({ label, animate }: { label: string; animate: boolean }) => (
  <div className="relative grid h-20 w-20 shrink-0 place-items-center sm:h-24 sm:w-24">
    <svg viewBox="0 0 96 96" className="h-full w-full -rotate-90">
      <circle cx="48" cy="48" r="38" stroke="currentColor" strokeWidth="8" fill="none" className="text-slate-200 dark:text-slate-800" />
      {animate ? (
        <motion.circle
          cx="48"
          cy="48"
          r="38"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="238.64"
          initial={{ strokeDashoffset: 238.64 }}
          whileInView={{ strokeDashoffset: 59.66 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-emerald-500"
        />
      ) : (
        <circle
          cx="48"
          cy="48"
          r="38"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="238.64"
          strokeDashoffset="59.66"
          className="text-emerald-500"
        />
      )}
    </svg>
    <div className="absolute text-center">
      <div className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">75%</div>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</div>
    </div>
  </div>
);

export const CoreFeatures = ({ t }: { t: any }) => {
  const { reduceMotion } = usePerformance();
  const revealProps = reduceMotion ? {} : reveal;
  const shouldAnimate = !reduceMotion;

  const metrics =
    t?.metrics || [
      { label: 'Publishing speed', value: '3x faster' },
      { label: 'Planning confidence', value: 'Signal-backed' },
      { label: 'Execution consistency', value: 'Weekly cadence' }
    ];

  const copilotBadge = t?.copilot?.badge || 'Real-time generation';
  const viewsLabel = t?.trend?.list?.viewsLabel || 'views';
  const ringLabel = t?.goals?.ringLabel || 'Goal';
  const tasks =
    t?.goals?.tasks || [
      { task: 'Record opening hook variation', done: true },
      { task: 'Review trend shortlist', done: false },
      { task: 'Schedule high-intent post', done: false }
    ];
  const analyticsBadge = t?.analytics?.badge || '+124% YoY';

  return (
    <section className="perf-content-auto relative overflow-hidden py-20 md:py-24 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            {...revealProps}
            transition={reduceMotion ? { duration: 0 } : { delay: 0.08 }}
            className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:mt-6 sm:text-3xl md:text-5xl dark:text-white"
          >
            {t?.title || 'Everything you need to'}{' '}
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-500 bg-clip-text text-transparent">
              {t?.titleHighlight || 'dominate'}
            </span>
          </motion.h2>
          <motion.p
            {...revealProps}
            transition={reduceMotion ? { duration: 0 } : { delay: 0.16 }}
            className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base md:text-lg dark:text-slate-300"
          >
            {t?.subtitle || 'A unified operating system for modern creators. Stop juggling disjointed tools.'}
          </motion.p>
        </div>

        <motion.div
          {...revealProps}
          transition={reduceMotion ? { duration: 0 } : { delay: 0.22 }}
          className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-3"
        >
          {metrics.map((metric: any) => (
            <div
              key={metric.label}
              className="perf-lite-card rounded-2xl border border-white/85 bg-white/70 px-4 py-3 shadow-[0_16px_50px_-40px_rgba(15,23,42,0.9)] backdrop-blur-md dark:border-white/10 dark:bg-slate-900/55"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{metric.label}</div>
              <div className="mt-1 text-base font-semibold text-slate-800 dark:text-slate-100">{metric.value}</div>
            </div>
          ))}
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 lg:auto-rows-[minmax(180px,auto)] lg:grid-cols-12">
          <motion.div {...revealProps} className={`${cardShell} perf-heavy-card lg:col-span-7`}>
            <div className="perf-decor-blur absolute right-[-20%] top-[-20%] h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/20" />
            <div className="relative flex h-full flex-col gap-6 sm:flex-row">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 sm:text-xl dark:text-white">{t?.copilot?.title || 'AI Strategy Copilot'}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t?.copilot?.desc ||
                    'Your 24/7 creative partner. Generate high-conversion scripts, brainstorm hooks, and get instant feedback on your ideas.'}
                </p>
                <div className="mt-5 inline-flex items-center rounded-full border border-emerald-200/80 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-700 dark:border-emerald-400/30 dark:text-emerald-300">
                  {copilotBadge}
                </div>
              </div>
              <div className="perf-lite-card flex-1 rounded-2xl border border-white/75 bg-white/60 p-3 sm:p-4 dark:border-white/10 dark:bg-slate-950/40">
                <MockChatUI t={t?.copilot?.chat} />
              </div>
            </div>
          </motion.div>

          <motion.div
            {...revealProps}
            transition={reduceMotion ? { duration: 0 } : { delay: 0.07 }}
            className={`${cardShell} perf-heavy-card lg:col-span-5 lg:row-span-2`}
          >
            <div className="perf-decor-blur absolute right-[-25%] top-[-15%] h-56 w-56 rounded-full bg-amber-500/12 blur-3xl dark:bg-amber-500/18" />
            <div className="relative flex h-full flex-col">
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl dark:text-white">{t?.trend?.title || 'Trend Intelligence'}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {t?.trend?.desc || 'Spot opportunities before they peak. Our AI analyzes millions of data points to find your next viral topic.'}
              </p>
              <div className="perf-lite-card mt-5 rounded-2xl border border-white/80 bg-white/60 p-3 sm:p-4 dark:border-white/10 dark:bg-slate-950/40">
                <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  {t?.trend?.liveSignals || 'Live Signals'}
                </div>
                <MockTrendList viewsLabel={viewsLabel} />
              </div>
            </div>
          </motion.div>

          <motion.div
            {...revealProps}
            transition={reduceMotion ? { duration: 0 } : { delay: 0.12 }}
            className={`${cardShell} perf-heavy-card lg:col-span-4`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t?.goals?.title || 'Smart Goals'}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {t?.goals?.desc || 'Turn vague ambitions into actionable daily tasks.'}
                </p>
              </div>
              <MockGoalRing label={ringLabel} animate={shouldAnimate} />
            </div>
            <div className="mt-4 space-y-2">
              {tasks.map((item: any) => (
                <div key={item.task} className="perf-lite-card flex items-center gap-2 rounded-xl border border-white/80 bg-white/65 px-3 py-2 dark:border-white/10 dark:bg-slate-950/45">
                  <div className={`h-4 w-4 rounded border ${item.done ? 'border-emerald-500 bg-emerald-500' : 'border-slate-300 dark:border-slate-600'}`} />
                  <span className={`text-xs font-medium ${item.done ? 'text-slate-400 line-through' : 'text-slate-600 dark:text-slate-300'}`}>{item.task}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...revealProps}
            transition={reduceMotion ? { duration: 0 } : { delay: 0.16 }}
            className={`${cardShell} perf-heavy-card lg:col-span-3`}
          >
            <div className="inline-flex rounded-full bg-emerald-500/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              {analyticsBadge}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{t?.analytics?.title || 'Deep Analytics'}</h3>
            <div className="perf-lite-card mt-4 h-28 rounded-2xl border border-white/80 bg-white/65 p-3 dark:border-white/10 dark:bg-slate-950/45">
              <MockAnalyticsChart animate={shouldAnimate} />
            </div>
          </motion.div>

        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {[
            { icon: Calendar, label: t?.features?.scheduling || 'Smart Scheduling' },
            { icon: TrendingUp, label: t?.features?.prediction || 'Viral Prediction' },
            { icon: MoreHorizontal, label: t?.features?.multiAccount || 'Multi-Account' },
            { icon: Zap, label: t?.features?.reports || 'Instant Reports' }
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              {...revealProps}
              transition={reduceMotion ? { duration: 0 } : { delay: 0.25 + index * 0.06 }}
              className="perf-lite-card flex items-center gap-2 rounded-2xl border border-white/80 bg-white/70 px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-[0_16px_50px_-40px_rgba(15,23,42,0.9)] backdrop-blur-md sm:px-4 sm:py-3 sm:text-sm dark:border-white/10 dark:bg-slate-900/55 dark:text-slate-200"
            >
              <feature.icon className="h-4 w-4 text-emerald-500" />
              {feature.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

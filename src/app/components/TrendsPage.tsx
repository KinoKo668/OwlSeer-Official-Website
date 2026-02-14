import React from 'react';
import { ArrowRight, BarChart3, Compass, Database, LineChart, Radar, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts';
import { MarketingPageLayout } from './MarketingPageLayout';

interface TrendsPageProps {
  onNavigate?: (page: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const COPY = {
  en: {
    badge: 'GEO Data Layer',
    title: 'OwlSeer Trends',
    subtitle: 'A public trend intelligence surface designed for AI search citation and long-term SEO recovery.',
    description:
      'This page is the marketing authority layer. Product execution remains in the interactive Trend Radar demo.',
    pillarsTitle: 'Authority signals',
    pillars: [
      {
        title: 'Trend Velocity',
        desc: 'Track rising and decaying momentum before saturation.',
        icon: LineChart,
      },
      {
        title: 'Competition Density',
        desc: 'Measure trend crowding to avoid low-return participation.',
        icon: Radar,
      },
      {
        title: 'Evidence-backed Notes',
        desc: 'Each recommendation links back to transparent signal definitions.',
        icon: Database,
      },
    ],
    tracksTitle: 'Vertical tracks',
    tracks: [
      {
        title: 'Social',
        status: 'Live',
        desc: 'TikTok-first trend monitoring with creator workflow orientation.',
      },
      {
        title: 'Commerce',
        status: 'Coming soon',
        desc: 'Creator-to-cart trend opportunities by product intent and buyer stage.',
      },
      {
        title: 'Ads',
        status: 'Coming soon',
        desc: 'Paid media signal overlays for creative and channel allocation.',
      },
    ],
    primary: 'Open Trend Radar Demo',
    secondary: 'Read Methodology',
    trustLabel: 'Public data references and platform-safe methodology',
  },
  zh: {
    badge: 'GEO 数据层',
    title: 'OwlSeer Trends',
    subtitle: '面向 AI 搜索引用与长期 SEO 回收的公开趋势智能页面。',
    description:
      '该页面属于营销权威层；产品执行能力仍位于交互式 Trend Radar 演示中。',
    pillarsTitle: '权威信号',
    pillars: [
      {
        title: '趋势速度',
        desc: '在趋势饱和前识别上升与衰减拐点。',
        icon: LineChart,
      },
      {
        title: '竞争密度',
        desc: '量化趋势拥挤度，避免低回报投入。',
        icon: Radar,
      },
      {
        title: '证据化说明',
        desc: '每条建议都可追溯到透明的信号定义。',
        icon: Database,
      },
    ],
    tracksTitle: '垂类轨道',
    tracks: [
      {
        title: 'Social',
        status: '已上线',
        desc: '以 TikTok 为核心的趋势监测与创作者工作流。',
      },
      {
        title: 'Commerce',
        status: '即将上线',
        desc: '按商品意图与购买阶段识别内容转化机会。',
      },
      {
        title: 'Ads',
        status: '即将上线',
        desc: '叠加投放信号，优化创意与渠道分配。',
      },
    ],
    primary: '打开 Trend Radar 演示',
    secondary: '查看方法论',
    trustLabel: '公开数据引用与平台合规方法',
  },
} as const;

export function TrendsPage({ onNavigate, isDarkMode, setIsDarkMode }: TrendsPageProps) {
  const { language } = useLanguage();
  const copy = COPY[language === 'zh' ? 'zh' : 'en'];

  return (
    <MarketingPageLayout
      canonicalPath="/trends"
      title={`${copy.title} | OwlSeer`}
      description={copy.subtitle}
      keywords={['trend intelligence', 'trend velocity', 'creator trend radar', 'geo authority page']}
      onNavigate={onNavigate}
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
    >
      <section className="border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#1AAE82]/10 text-[#1AAE82]">
            <Compass className="w-3.5 h-3.5" />
            {copy.badge}
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white font-display">
            {copy.title}
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-4xl">{copy.subtitle}</p>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400 max-w-4xl">{copy.description}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate?.('trends')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1AAE82] text-white font-semibold hover:bg-[#15956F] transition-colors"
            >
              {copy.primary}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate?.('methodology')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-slate-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            >
              {copy.secondary}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-display mb-6">
            {copy.pillarsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {copy.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"
              >
                <pillar.icon className="w-6 h-6 text-[#1AAE82]" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
            <div className="flex items-center gap-2 text-[#1AAE82] text-sm font-semibold">
              <BarChart3 className="w-4 h-4" />
              {copy.tracksTitle}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
              {copy.tracks.map((track) => (
                <div key={track.title} className="rounded-2xl border border-gray-200 dark:border-slate-800 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{track.title}</h3>
                    <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#1AAE82]/10 text-[#1AAE82]">
                      {track.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{track.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <ShieldCheck className="w-4 h-4 text-[#1AAE82]" />
              {copy.trustLabel}
            </div>
          </div>
        </div>
      </section>
    </MarketingPageLayout>
  );
}

import React from 'react';
import { ArrowRight, Clock3, Megaphone, Sparkles, Target } from 'lucide-react';
import { useLanguage } from '../contexts';
import { MarketingPageLayout } from './MarketingPageLayout';

interface AdsComingSoonPageProps {
  onNavigate?: (page: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const COPY = {
  en: {
    badge: 'Coming Soon',
    title: 'OwlSeer Ads',
    subtitle: 'A dedicated AI command layer for paid social growth.',
    description:
      'OwlSeer Ads is being prepared for campaign diagnostics, creative testing intelligence, and budget-aware optimization.',
    highlights: [
      'Creative testing matrix with signal-level recommendations',
      'Audience and placement diagnostics tied to campaign outcomes',
      'Actionable optimization loops for budget efficiency',
    ],
    primary: 'Join Waitlist',
    secondary: 'See Social Product',
  },
  zh: {
    badge: '即将上线',
    title: 'OwlSeer Ads',
    subtitle: '面向付费增长场景的 AI 指挥层。',
    description:
      'OwlSeer Ads 正在构建中，将覆盖广告诊断、创意测试智能与预算效率优化。',
    highlights: [
      '基于信号的创意测试矩阵与建议',
      '受众与版位诊断并关联投放结果',
      '围绕预算效率的可执行优化闭环',
    ],
    primary: '加入候补',
    secondary: '查看 Social 产品',
  },
} as const;

export function AdsComingSoonPage({
  onNavigate,
  isDarkMode,
  setIsDarkMode,
}: AdsComingSoonPageProps) {
  const { language } = useLanguage();
  const content = COPY[language === 'zh' ? 'zh' : 'en'];

  return (
    <MarketingPageLayout
      canonicalPath="/ads"
      title={`${content.title} - ${content.badge}`}
      description={content.description}
      keywords={['paid social ai', 'ad creative intelligence', 'campaign optimization ai']}
      onNavigate={onNavigate}
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
    >
      <section className="border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#1AAE82]/10 text-[#1AAE82]">
            <Clock3 className="w-3.5 h-3.5" />
            {content.badge}
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white font-display">
            {content.title}
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl">{content.subtitle}</p>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-3xl">{content.description}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate?.('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1AAE82] text-white font-semibold hover:bg-[#15956F] transition-colors"
            >
              {content.primary}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate?.('how-it-works')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-slate-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            >
              {content.secondary}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <Megaphone className="w-6 h-6 text-[#1AAE82]" />
            <p className="mt-4 text-gray-700 dark:text-gray-300">{content.highlights[0]}</p>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <Target className="w-6 h-6 text-[#1AAE82]" />
            <p className="mt-4 text-gray-700 dark:text-gray-300">{content.highlights[1]}</p>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <Sparkles className="w-6 h-6 text-[#1AAE82]" />
            <p className="mt-4 text-gray-700 dark:text-gray-300">{content.highlights[2]}</p>
          </div>
        </div>
      </section>
    </MarketingPageLayout>
  );
}


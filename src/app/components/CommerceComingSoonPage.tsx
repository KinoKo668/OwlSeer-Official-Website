import React from 'react';
import { ArrowRight, Clock3, PackageSearch, ShoppingCart, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts';
import { MarketingPageLayout } from './MarketingPageLayout';

interface CommerceComingSoonPageProps {
  onNavigate?: (page: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const COPY = {
  en: {
    badge: 'Coming Soon',
    title: 'OwlSeer Commerce',
    subtitle: 'AI growth intelligence for social commerce teams.',
    description:
      'We are preparing a dedicated Commerce layer for creator-to-cart workflows, product-led content planning, and conversion diagnostics.',
    highlights: [
      'Product-feed aware content opportunity detection',
      'Creator-to-cart funnel diagnosis with actionable fixes',
      'Campaign orchestration across SKU, creator, and timeline',
    ],
    primary: 'View Pricing',
    secondary: 'Contact Sales',
  },
  zh: {
    badge: '即将上线',
    title: 'OwlSeer Commerce',
    subtitle: '为社交电商团队打造的 AI 增长智能层。',
    description:
      '我们正在构建专属 Commerce 能力，覆盖从内容到转化的全链路诊断与执行。',
    highlights: [
      '基于商品与内容信号的机会识别',
      '创作者到成交链路的转化诊断与修复建议',
      '按 SKU、创作者、时间维度统一编排活动',
    ],
    primary: '查看定价',
    secondary: '联系销售',
  },
} as const;

export function CommerceComingSoonPage({
  onNavigate,
  isDarkMode,
  setIsDarkMode,
}: CommerceComingSoonPageProps) {
  const { language } = useLanguage();
  const content = COPY[language === 'zh' ? 'zh' : 'en'];

  return (
    <MarketingPageLayout
      canonicalPath="/commerce"
      title={`${content.title} - ${content.badge}`}
      description={content.description}
      keywords={['social commerce ai', 'creator commerce analytics', 'commerce growth intelligence']}
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
              onClick={() => onNavigate?.('pricing')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1AAE82] text-white font-semibold hover:bg-[#15956F] transition-colors"
            >
              {content.primary}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate?.('contact')}
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
            <ShoppingCart className="w-6 h-6 text-[#1AAE82]" />
            <p className="mt-4 text-gray-700 dark:text-gray-300">{content.highlights[0]}</p>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <PackageSearch className="w-6 h-6 text-[#1AAE82]" />
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


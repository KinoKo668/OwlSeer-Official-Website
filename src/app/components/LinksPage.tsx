import React from 'react';
import { ArrowRight, BookOpen, Compass, Contact, PlayCircle, Tags } from 'lucide-react';
import { useLanguage } from '../contexts';
import { MarketingPageLayout } from './MarketingPageLayout';

interface LinksPageProps {
  onNavigate?: (page: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const COPY = {
  en: {
    title: 'OwlSeer Links',
    subtitle: 'Official Link-in-Bio hub for OwlSeer channels and product entry points.',
    cards: [
      { title: 'Try Interactive Sample', desc: 'Explore the product experience without account setup.', page: 'simulation' },
      { title: 'Read Guides', desc: 'Step-by-step playbooks for creators and teams.', page: 'guides' },
      { title: 'Pricing & Plans', desc: 'See product tiers and trial options.', page: 'pricing' },
      { title: 'Signals Framework', desc: 'Understand the signal system behind recommendations.', page: 'signals' },
      { title: 'Contact Team', desc: 'Talk with support or commercial team.', page: 'contact' },
    ],
  },
  zh: {
    title: 'OwlSeer Links',
    subtitle: 'OwlSeer 官方 Link-in-Bio 页面，集中展示核心入口。',
    cards: [
      { title: '体验互动样例', desc: '无需注册即可查看产品体验。', page: 'simulation' },
      { title: '阅读 Guides', desc: '面向创作者与团队的步骤化方法。', page: 'guides' },
      { title: '定价与套餐', desc: '查看产品层级与试用方案。', page: 'pricing' },
      { title: 'Signals 框架', desc: '了解推荐背后的信号体系。', page: 'signals' },
      { title: '联系团队', desc: '联系支持或商业团队。', page: 'contact' },
    ],
  },
} as const;

const ICONS = [PlayCircle, BookOpen, Tags, Compass, Contact];

export function LinksPage({ onNavigate, isDarkMode, setIsDarkMode }: LinksPageProps) {
  const { language } = useLanguage();
  const content = COPY[language === 'zh' ? 'zh' : 'en'];

  return (
    <MarketingPageLayout
      canonicalPath="/links"
      title={content.title}
      description={content.subtitle}
      keywords={['link in bio', 'owlseer links', 'creator resource hub']}
      onNavigate={onNavigate}
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
    >
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center font-display">
            {content.title}
          </h1>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{content.subtitle}</p>

          <div className="mt-10 space-y-4">
            {content.cards.map((card, index) => {
              const Icon = ICONS[index] || ArrowRight;
              return (
                <button
                  key={card.title}
                  onClick={() => onNavigate?.(card.page)}
                  className="w-full text-left rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-5 hover:border-[#1AAE82]/50 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1AAE82]/10 text-[#1AAE82] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{card.title}</h2>
                        <ArrowRight className="w-4 h-4 text-[#1AAE82]" />
                      </div>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{card.desc}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </MarketingPageLayout>
  );
}


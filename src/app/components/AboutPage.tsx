import React from 'react';
import { ArrowRight, Brain, Compass, Shield } from 'lucide-react';
import { useLanguage } from '../contexts';
import { MarketingPageLayout } from './MarketingPageLayout';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const COPY = {
  en: {
    title: 'About OwlSeer',
    subtitle: 'From Social launch to multi-vertical AI growth intelligence.',
    mission:
      'OwlSeer starts with Social growth intelligence and is being built toward a unified platform for Social, Commerce, Ads, and Studio.',
    principles: [
      { title: 'Signal-first decisions', desc: 'Every recommendation should trace back to measurable evidence.' },
      { title: 'Operator-grade workflows', desc: 'Designed for creators, teams, and agencies that execute daily.' },
      { title: 'Responsible AI output', desc: 'Clear boundaries for what AI should and should not automate.' },
    ],
    cta: 'Read Methodology',
  },
  zh: {
    title: '关于 OwlSeer',
    subtitle: '从 Social 首发，演进到多垂类 AI 增长智能平台。',
    mission:
      'OwlSeer 以 Social 增长智能为起点，正在持续扩展到 Social、Commerce、Ads、Studio 的统一平台。',
    principles: [
      { title: '信号驱动决策', desc: '每条建议都应可追溯到可量化证据。' },
      { title: '面向运营执行', desc: '为创作者、团队与代理机构的日常执行场景设计。' },
      { title: '负责任的 AI 输出', desc: '明确 AI 可做与不可做的边界。' },
    ],
    cta: '查看方法论',
  },
} as const;

const ICONS = [Brain, Compass, Shield];

export function AboutPage({ onNavigate, isDarkMode, setIsDarkMode }: AboutPageProps) {
  const { language } = useLanguage();
  const content = COPY[language === 'zh' ? 'zh' : 'en'];

  return (
    <MarketingPageLayout
      canonicalPath="/about"
      title={content.title}
      description={content.subtitle}
      keywords={['about owlseer', 'ai growth intelligence', 'company mission']}
      onNavigate={onNavigate}
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
    >
      <section className="border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white font-display">{content.title}</h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">{content.subtitle}</p>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-3xl">{content.mission}</p>
          <button
            onClick={() => onNavigate?.('methodology')}
            className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1AAE82] text-white font-semibold hover:bg-[#15956F] transition-colors"
          >
            {content.cta}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.principles.map((item, index) => {
            const Icon = ICONS[index] || Brain;
            return (
              <div key={item.title} className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                <Icon className="w-6 h-6 text-[#1AAE82]" />
                <h2 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </MarketingPageLayout>
  );
}


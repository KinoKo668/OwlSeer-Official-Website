import React from 'react';
import { Download, FileText, Image, Mail } from 'lucide-react';
import { useLanguage } from '../contexts';
import { MarketingPageLayout } from './MarketingPageLayout';

interface PressPageProps {
  onNavigate?: (page: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const COPY = {
  en: {
    title: 'Press & Media',
    subtitle: 'Official media resources for OwlSeer brand references.',
    description:
      'This page serves as the canonical source for brand facts, logo usage guidance, and media contact for editorial requests.',
    resourcesTitle: 'Media Kit',
    resources: [
      { title: 'Brand Fact Sheet', desc: 'Company profile, product scope, and positioning.' },
      { title: 'Logo Pack', desc: 'Primary logo, monochrome variants, and spacing guide.' },
      { title: 'Product Screenshots', desc: 'Approved product visuals for press usage.' },
    ],
    contactTitle: 'Press Contact',
  },
  zh: {
    title: '媒体与品牌资料',
    subtitle: 'OwlSeer 官方媒体素材与品牌引用入口。',
    description:
      '本页作为品牌事实、Logo 使用规范与媒体沟通的权威来源。',
    resourcesTitle: '媒体资料包',
    resources: [
      { title: '品牌事实表', desc: '公司信息、产品范围与定位说明。' },
      { title: 'Logo 素材包', desc: '主 Logo、单色版本与留白规范。' },
      { title: '产品截图', desc: '可用于媒体发布的官方产品视觉素材。' },
    ],
    contactTitle: '媒体联系',
  },
} as const;

const ICONS = [FileText, Image, Download];

export function PressPage({ onNavigate, isDarkMode, setIsDarkMode }: PressPageProps) {
  const { language } = useLanguage();
  const content = COPY[language === 'zh' ? 'zh' : 'en'];

  return (
    <MarketingPageLayout
      canonicalPath="/press"
      title={content.title}
      description={content.description}
      keywords={['owlseer press', 'media kit', 'brand assets']}
      onNavigate={onNavigate}
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
    >
      <section className="border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white font-display">{content.title}</h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">{content.subtitle}</p>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-3xl">{content.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{content.resourcesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.resources.map((resource, index) => {
              const Icon = ICONS[index] || FileText;
              return (
                <div key={resource.title} className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                  <Icon className="w-6 h-6 text-[#1AAE82]" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{resource.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{resource.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{content.contactTitle}</h3>
            <a
              href="mailto:press@owlseer.com"
              className="mt-3 inline-flex items-center gap-2 text-[#1AAE82] hover:underline"
            >
              <Mail className="w-4 h-4" />
              press@owlseer.com
            </a>
          </div>
        </div>
      </section>
    </MarketingPageLayout>
  );
}


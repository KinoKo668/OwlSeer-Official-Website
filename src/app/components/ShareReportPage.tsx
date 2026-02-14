import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ArrowRight, FileSearch, ShieldCheck, Share2 } from 'lucide-react';
import { useLanguage } from '../contexts';
import { translations } from '../data/translations';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { SEO } from './SEO';

const LANGUAGE_TO_SCHEMA_LANG: Record<string, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  ja: 'ja-JP',
  ko: 'ko-KR',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
};

interface ShareReportPageProps {
  onNavigate?: (page: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

export function ShareReportPage({
  onNavigate,
  isDarkMode,
  setIsDarkMode,
}: ShareReportPageProps) {
  const { reportId } = useParams<{ reportId?: string }>();
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;

  const params = new URLSearchParams(location.search);
  const shouldIndex = params.get('index') === '1' || params.get('index') === 'true';
  const normalizedReportId = reportId || 'unknown-report';
  const canonicalUrl = `https://owlseer.com/share/${encodeURIComponent(normalizedReportId)}`;

  const content = language === 'zh'
    ? {
        title: 'OwlSeer 分享报告',
        description: '公开分享的增长诊断报告入口。用于跨平台传播与团队协作评审。',
        badge: 'PLG 分享入口',
        indexing: shouldIndex ? '当前可被索引（index=1）' : '当前默认不索引（可用 ?index=1 开启）',
        primary: '打开产品演示',
        secondary: '查看定价',
        panelTitle: '报告信息',
        policyTitle: '抓取策略',
      }
    : {
        title: 'OwlSeer Shared Report',
        description: 'Public diagnostic report entry for cross-platform sharing and collaborative review.',
        badge: 'PLG Share Entry',
        indexing: shouldIndex ? 'Indexable mode is ON (index=1)' : 'Noindex mode is ON by default (use ?index=1)',
        primary: 'Open Product Demo',
        secondary: 'View Pricing',
        panelTitle: 'Report Metadata',
        policyTitle: 'Indexing Policy',
      };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${content.title} - ${normalizedReportId}`,
    description: content.description,
    inLanguage: LANGUAGE_TO_SCHEMA_LANG[language] || 'en-US',
    url: canonicalUrl,
    isAccessibleForFree: true,
  };

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] text-gray-900 dark:text-gray-100 selection:bg-[#1AAE82]/30">
      <SEO
        title={`${content.title} | ${normalizedReportId}`}
        description={content.description}
        keywords={['shared report', 'tiktok growth report', 'owlseer share']}
        canonicalUrl={canonicalUrl}
        ogType="article"
        noindex={!shouldIndex}
        structuredData={structuredData}
        lang={language}
      />

      <Navbar
        onTrySample={() => handleNavigate('simulation')}
        onSignUp={() => handleNavigate('auth')}
        onNavigate={handleNavigate}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={t}
      />

      <main className="pt-[72px]">
        <section className="py-20 border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#1AAE82]/10 text-[#1AAE82]">
              <Share2 className="w-3.5 h-3.5" />
              {content.badge}
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight font-display text-gray-900 dark:text-white">
              {content.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{content.description}</p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1AAE82]">{content.panelTitle}</p>
                  <p className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{normalizedReportId}</p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1AAE82]" />
                  {content.policyTitle}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-gray-200 dark:border-slate-800 p-5 bg-[#F8FAFC] dark:bg-[#020617]">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                  <FileSearch className="w-4 h-4 text-[#1AAE82]" />
                  {content.indexing}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => handleNavigate('simulation')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1AAE82] text-white font-semibold hover:bg-[#15956F] transition-colors"
                >
                  {content.primary}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleNavigate('pricing')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-slate-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {content.secondary}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

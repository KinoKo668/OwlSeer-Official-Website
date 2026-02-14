import React, { useState } from 'react';
import { useLanguage } from '../../contexts';
import { motion } from 'motion/react';
import { 
  Navbar 
} from '../layout/Navbar';
import { 
  Footer 
} from '../layout/Footer';
import { SEO } from '../SEO';
import { getCanonicalUrl, seoConfig, generateAlternates } from '../../data/seoConfig';
import { translations } from '../../data/translations';
import { 
  ArrowRight,
  TrendingUp, 
  BarChart2,
  FileText,
  Lock,
  Scale
} from 'lucide-react';
import { PlatformFocusSlider } from './components/PlatformFocusSlider';
import { ComparisonRow } from './components/ComparisonRow';
import { FlipCard } from './components/FlipCard';

export function CompareVidIQPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  // Content based on language
  const trans = translations as any;
  const content = trans[language]?.compareVidIQ || trans.en?.compareVidIQ;

  if (!content) {
    return <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#020617] text-gray-500">{trans[language]?.compareVidIQ?.ui?.loading || trans.en?.compareVidIQ?.ui?.loading || 'Loading content...'}</div>;
  }

  const ui = content.ui || {
    badge: 'Head-to-Head',
    coreInsight: 'Core Insight',
    tableHeaders: {
      feature: 'Feature',
      owlseer: 'OwlSeer',
      competitor: 'VidIQ'
    },
    missingBlockTitle: 'Experience what VidIQ is missing',
    actionButtons: {
      trendRadar: 'Trend Radar',
      scriptStudio: 'Script Studio',
      weeklyReport: 'Weekly Report'
    },
    platformFocusLabel: 'Platform Focus',
    transparencyNote: 'Transparency Note'
  };
  
  // SEO
  const seo = seoConfig.compareVidIQ?.[language as 'en' | 'zh'] || seoConfig.compareVidIQ?.en || {
    title: 'OwlSeer vs VidIQ | TikTok Tool Comparison',
    description: 'Compare OwlSeer and VidIQ. See why OwlSeer is the best choice for TikTok creators.',
    keywords: ['owlseer vs vidiq', 'tiktok analytics comparison'],
    canonicalUrl: 'https://owlseer.com/vs/owlseer-vs-vidiq'
  };

  const [focus, setFocus] = useState(100); // Default to TikTok/OwlSeer (100)

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans text-gray-900 dark:text-white selection:bg-[#1AAE82]/20 selection:text-[#1AAE82]">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={getCanonicalUrl('/vs/owlseer-vs-vidiq', language)}
        lang={language}
        alternates={generateAlternates('/vs/owlseer-vs-vidiq')}
      />

      <Navbar 
        onTrySample={() => handleNavigate('landing')} 
        onSignUp={() => handleNavigate('auth')}
        onNavigate={handleNavigate}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={t}
      />

      <main className="relative bg-white pt-[72px] dark:bg-[#020617]">
        <section className="perf-content-auto relative z-10 overflow-hidden pt-32 pb-40">
          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-300/55 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1AAE82] backdrop-blur-md dark:border-emerald-500/35 dark:bg-slate-900/60 sm:text-sm">
                <Scale className="h-4 w-4" />
                <span className="opacity-90">{ui.badge}</span>
              </div>

              <h1 className="mx-auto mb-8 max-w-5xl font-display text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white md:text-7xl lg:text-8xl">
                {content.hero.title}
              </h1>
              <p className="mx-auto mb-12 max-w-3xl text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 md:text-2xl">
                {content.hero.lead}
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
                <button
                  onClick={() => handleNavigate('auth')}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#059669] to-[#10b981] px-10 py-4 text-base font-semibold text-white shadow-[0_20px_48px_-30px_rgba(16,185,129,0.9)] transition-all duration-300 hover:from-[#047857] hover:to-[#059669] sm:text-lg"
                >
                  {content.cta.primary} <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleNavigate('landing')}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/85 bg-white/75 px-10 py-4 text-base font-semibold text-gray-800 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.85)] backdrop-blur-md transition-all duration-300 hover:bg-white dark:border-white/12 dark:bg-slate-900/60 dark:text-white dark:hover:bg-slate-900/75 sm:text-lg"
                >
                  {content.cta.secondary}
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10 mt-[-1px] overflow-hidden bg-[#f6f7fb] dark:bg-[#070c14]">
          {/* 2. CORE INSIGHT */}
          <section className="perf-content-auto mx-auto mb-24 max-w-5xl px-4 pt-20 sm:mb-28 sm:px-6 lg:px-8 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              className="rounded-[30px] border border-white/85 bg-white/72 p-7 shadow-[0_30px_85px_-58px_rgba(15,23,42,0.95)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 sm:p-10 md:p-14"
            >
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#1AAE82]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{ui.coreInsight}</span>
              </div>
              <p className="font-display text-xl font-medium leading-relaxed text-slate-900 dark:text-white md:text-3xl">
                "{content.tldr}"
              </p>
            </motion.div>
          </section>

          {/* 3. COMPARISON TABLE */}
          <section className="perf-content-auto mx-auto mb-24 max-w-5xl px-4 sm:mb-28 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-14">
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-6xl">
                {content.table.title}
              </h2>
            </div>

            <PlatformFocusSlider focus={focus} setFocus={setFocus} />

            <div className="overflow-hidden rounded-[30px] border border-white/85 bg-white/72 shadow-[0_32px_88px_-60px_rgba(15,23,42,0.95)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
              <div className="grid grid-cols-1 gap-4 border-b border-slate-100 bg-white/50 p-5 text-xs font-bold uppercase tracking-widest text-slate-500 dark:border-white/10 dark:bg-slate-800/35 md:grid-cols-3 md:gap-6 md:p-7">
                <div>{ui.tableHeaders?.feature}</div>
                <div className={`transition-colors duration-300 ${focus > 50 ? 'text-[#1AAE82]' : ''}`}>{ui.tableHeaders?.owlseer}</div>
                <div className={`transition-colors duration-300 ${focus < 50 ? 'text-sky-500' : ''}`}>{ui.tableHeaders?.competitor}</div>
              </div>

              <div className="p-2.5 sm:p-3">
                {content.table.rows.map((row: any, idx: number) => (
                  <ComparisonRow
                    key={idx}
                    feature={row.feature}
                    owlseer={row.owlseer}
                    vidiq={row.vidiq}
                    focus={focus}
                  />
                ))}
              </div>
            </div>

            <div className="mt-12 text-center sm:mt-14">
              <p className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">{ui.missingBlockTitle}</p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <button
                  onClick={() => handleNavigate('trends')}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/85 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.8)] backdrop-blur-md transition-all duration-300 hover:bg-white dark:border-white/10 dark:bg-slate-900/62 dark:text-white dark:hover:bg-slate-900/75"
                >
                  <TrendingUp className="h-4 w-4" /> {ui.actionButtons?.trendRadar}
                </button>
                <button
                  onClick={() => handleNavigate('studio')}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/85 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.8)] backdrop-blur-md transition-all duration-300 hover:bg-white dark:border-white/10 dark:bg-slate-900/62 dark:text-white dark:hover:bg-slate-900/75"
                >
                  <FileText className="h-4 w-4" /> {ui.actionButtons?.scriptStudio}
                </button>
                <button
                  onClick={() => handleNavigate('weekly-report')}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/85 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.8)] backdrop-blur-md transition-all duration-300 hover:bg-white dark:border-white/10 dark:bg-slate-900/62 dark:text-white dark:hover:bg-slate-900/75"
                >
                  <BarChart2 className="h-4 w-4" /> {ui.actionButtons?.weeklyReport}
                </button>
              </div>
            </div>
          </section>

          {/* 4. CHOOSE SECTION */}
          <section className="perf-content-auto mx-auto mb-24 max-w-7xl px-4 sm:mb-28 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
              <FlipCard
                title={content.chooseOwlSeer.title}
                features={content.chooseOwlSeer.items}
                type="owlseer"
              />
              <FlipCard
                title={content.chooseVidIQ.title}
                features={content.chooseVidIQ.items}
                type="vidiq"
              />
            </div>
          </section>

          {/* 5. PLATFORM FOCUS */}
          <section className="perf-content-auto mx-auto mb-24 max-w-4xl px-4 sm:mb-28 sm:px-6 lg:px-8">
            <div className="rounded-[30px] border border-white/85 bg-white/72 p-7 shadow-[0_32px_88px_-60px_rgba(15,23,42,0.95)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 sm:p-10 md:p-14">
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#1AAE82]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{ui.platformFocusLabel}</span>
              </div>
              <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                {content.platformFocus.title}
              </h2>
              <div className="space-y-6 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                <p>{content.platformFocus.p1}</p>
                <p>{content.platformFocus.p2}</p>
                <div className="mt-8 rounded-2xl border border-[#1AAE82]/25 bg-[#1AAE82]/10 p-6">
                  <p className="font-medium italic text-slate-900 dark:text-white">
                    "{content.platformFocus.highlight}"
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. BOUNDARY & CTA */}
          <section className="perf-content-auto relative overflow-hidden bg-gradient-to-b from-[#f6f7fb] via-[#ecfaf3] to-white px-4 pb-24 text-center dark:from-[#070c14] dark:via-[#0b1721] dark:to-slate-900 sm:px-6 sm:pb-28 lg:px-8">
            <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/15" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl dark:bg-sky-500/12" />

            <div className="relative z-10 mx-auto max-w-5xl">
              <div className="mb-12 inline-block max-w-3xl rounded-2xl border border-white/85 bg-white/80 p-6 shadow-[0_20px_44px_-34px_rgba(15,23,42,0.9)] backdrop-blur-md dark:border-white/10 dark:bg-slate-900/62">
                <h4 className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  <Lock className="h-3 w-3" /> {ui.transparencyNote}
                </h4>
                <div className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <p>{content.boundary.transparency}</p>
                  <p>{content.boundary.note}</p>
                </div>
              </div>

              <h2 className="mb-8 font-display text-4xl font-bold leading-[0.95] text-slate-900 dark:text-white sm:text-5xl md:text-7xl">
                {content.cta.title}
              </h2>
              <p className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl md:text-3xl md:font-light">
                {content.cta.subtitle}
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
                <button
                  onClick={() => handleNavigate('auth')}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#059669] to-[#10b981] px-12 py-4 text-base font-semibold text-white shadow-[0_22px_50px_-32px_rgba(16,185,129,0.9)] transition-all duration-300 hover:from-[#047857] hover:to-[#059669] sm:text-xl"
                >
                  {content.cta.primary}
                </button>
                <button
                  onClick={() => handleNavigate('landing')}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/85 bg-white/82 px-12 py-4 text-base font-semibold text-slate-800 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.85)] backdrop-blur-md transition-all duration-300 hover:bg-white dark:border-white/12 dark:bg-slate-900/62 dark:text-white dark:hover:bg-slate-900/75 sm:text-xl"
                >
                  {content.cta.secondary}
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { SEO } from '../SEO';
import { getCanonicalUrl, seoConfig, generateAlternates } from '../../data/seoConfig';
import { translations } from '../../data/translations';
import {
  ArrowRight,
  Calculator,
  Calendar,
  FileText,
  Lock,
  Store,
  Target,
  TrendingUp,
} from 'lucide-react';

type SolutionItem = {
  title: string;
  desc: string;
  icon: string;
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trend: TrendingUp,
  Script: FileText,
  Schedule: Calendar,
  Goal: Target,
};

const mergeLocalBusinessContent = (languageContent: any) => {
  const base = (translations.en as any).localBusiness || {};
  const current = languageContent || {};

  return {
    ...base,
    ...current,
    hero: { ...(base.hero || {}), ...(current.hero || {}) },
    painPoints: {
      ...(base.painPoints || {}),
      ...(current.painPoints || {}),
      items: current?.painPoints?.items || base?.painPoints?.items || [],
    },
    solution: {
      ...(base.solution || {}),
      ...(current.solution || {}),
      items: current?.solution?.items || base?.solution?.items || [],
    },
    results: {
      ...(base.results || {}),
      ...(current.results || {}),
      stats: current?.results?.stats || base?.results?.stats || [],
    },
    formats: {
      ...(base.formats || {}),
      ...(current.formats || {}),
      items: current?.formats?.items || base?.formats?.items || [],
    },
    calculator: {
      ...(base.calculator || {}),
      ...(current.calculator || {}),
      result: {
        ...(base?.calculator?.result || {}),
        ...(current?.calculator?.result || {}),
      },
    },
    boundary: { ...(base.boundary || {}), ...(current.boundary || {}) },
    cta: { ...(base.cta || {}), ...(current.cta || {}) },
  };
};

const SolutionCard = ({ item }: { item: SolutionItem }) => {
  const Icon = iconMap[item.icon] || TrendingUp;

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:border-[#1AAE82]/40 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#1AAE82]/10 text-[#1AAE82]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
      <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">{item.desc}</p>
    </div>
  );
};

const ROICalculator = ({ content }: { content: any }) => {
  const [followers, setFollowers] = useState(1000);
  const [aov, setAov] = useState(50);

  const estWalkIns = Math.round(followers * 0.02 + (followers > 2500 ? 20 : 8));
  const estRevenue = estWalkIns * aov;

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
        <Calculator className="h-5 w-5 text-[#1AAE82]" />
        {content.title}
      </h3>

      <div className="space-y-6">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-gray-600 dark:text-gray-300">{content.followers}</span>
            <span className="font-bold text-gray-900 dark:text-white">{followers}</span>
          </div>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={followers}
            onChange={(e) => setFollowers(Number(e.target.value))}
            className="w-full accent-[#1AAE82]"
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-gray-600 dark:text-gray-300">{content.aov}</span>
            <span className="font-bold text-gray-900 dark:text-white">${aov}</span>
          </div>
          <input
            type="range"
            min="10"
            max="200"
            step="5"
            value={aov}
            onChange={(e) => setAov(Number(e.target.value))}
            className="w-full accent-[#1AAE82]"
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl bg-gray-50 p-4 dark:bg-slate-800/60">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{content?.result?.customers}</p>
          <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">+{estWalkIns}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{content?.result?.revenue}</p>
          <p className="mt-1 text-2xl font-bold text-[#1AAE82]">+${estRevenue.toLocaleString()}</p>
        </div>
      </div>

      <button className="mt-5 w-full rounded-xl bg-[#1AAE82] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#15956F]">
        {content.cta}
      </button>
    </div>
  );
};

export function LocalBusinessPage({
  onNavigate,
  isDarkMode,
  setIsDarkMode,
}: {
  onNavigate: (page: any) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;

  const content = useMemo(() => {
    const localized = (t as any).localBusiness;
    return mergeLocalBusinessContent(localized);
  }, [t]);

  const seo = (seoConfig.localBusiness as any)?.[language] || seoConfig.localBusiness?.en;

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-[#020617] dark:text-white">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={getCanonicalUrl('/solutions/local-business', language)}
        lang={language}
        alternates={generateAlternates('/solutions/local-business')}
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

      <main className="pt-[72px]">
        <section className="border-b border-gray-200 bg-gradient-to-b from-white to-[#f7fcfa] py-24 dark:border-slate-800 dark:from-[#020617] dark:to-[#031a13]">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1AAE82]/25 bg-[#1AAE82]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#1AAE82]">
                <Store className="h-4 w-4" />
                {content.hero.badge}
              </div>
              <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">
                {content.hero.title}
              </h1>
              <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300 md:text-xl">
                {content.hero.lead}
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => handleNavigate('auth')}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1AAE82] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-[#15956F]"
                >
                  {content.hero.primary}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleNavigate('landing')}
                  className="rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-bold text-gray-900 transition-colors hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                >
                  {content.hero.secondary}
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 text-lg leading-8 text-gray-700 dark:border-slate-800 dark:bg-slate-900 dark:text-gray-200">
            {content.tldr}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{content.painPoints.title}</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {(content.painPoints.items || []).map((item: any, idx: number) => (
              <div
                key={`${item.title}-${idx}`}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#1AAE82]">0{idx + 1}</p>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{content.solution.title}</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {(content.solution.items || []).map((item: SolutionItem, idx: number) => (
              <SolutionCard key={`${item.title}-${idx}`} item={item} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{content.results.title}</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {(content.results.stats || []).map((stat: any, idx: number) => (
              <div key={`${stat.label}-${idx}`} className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="text-4xl font-bold text-[#1AAE82]">{stat.value}</div>
                <div className="mt-2 text-base font-semibold text-gray-900 dark:text-white">{stat.label}</div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{content.formats.title}</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {(content.formats.items || []).map((item: any, idx: number) => (
              <div key={`${item.title}-${idx}`} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <ROICalculator content={content.calculator} />
        </section>

        <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="mb-5 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">{content.cta.title}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">{content.cta.subtitle}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => handleNavigate('auth')}
              className="rounded-full bg-[#1AAE82] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-[#15956F]"
            >
              {content.cta.primary}
            </button>
            <button
              onClick={() => handleNavigate('landing')}
              className="rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-bold text-gray-900 transition-colors hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              {content.cta.secondary}
            </button>
          </div>
          <div className="mt-10 inline-flex items-start gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-left text-xs leading-6 text-gray-500 dark:border-slate-800 dark:bg-slate-900 dark:text-gray-400">
            <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[#1AAE82]" />
            <span>{content.boundary.note}</span>
          </div>
        </section>
      </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

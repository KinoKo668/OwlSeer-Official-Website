import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, 
  ArrowRight, 
  Zap,
  Lock,
  Search,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { addLanguagePrefix, useLanguage } from '../contexts/LanguageContext';
import { translations as globalTranslations } from '../data/translations';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { SEO } from './SEO';
import { AuroraBackground } from './ui/aurora-background';
import {
  guideCardsByLanguage,
  WEEKLY_RECOMMENDED_GUIDE_SLUG,
  normalizeGuideLink,
} from '../data/guides/guideSpecs';

// --- Types ---
type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

interface Guide {
  id: string;
  slug?: string;
  title: string;
  level: DifficultyLevel;
  time: string;
  description: string;
  isNew?: boolean;
  link: string;
  category?: string;
}

// --- Translations ---
const pageTranslations = {
  en: {
    meta: {
      title: "TikTok Strategy Guides | OwlSeer",
      description: "Step-by-step TikTok growth guides from beginner to advanced. Data-backed frameworks with examples, checkpoints, and next steps. Pick your level."
    },
    hero: {
      title: "TikTok Strategy Guides",
      lead: "Long-form, step-by-step guides for TikTok growth. From beginner fundamentals to advanced optimization — each guide is structured for action, not just reading.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Browse the Blog"
    },
    tldr: {
      title: "TL;DR",
      beforeWeeklyBrief: "Guides go deeper than blog posts. Each guide walks through a complete workflow with data-backed steps, drawing from OwlSeer's",
      weeklyBriefLink: "weekly brief",
      betweenLinks: "format and",
      signalFrameworkLink: "signal framework",
      afterSignalFramework: "Guides are organized by difficulty level and estimated completion time."
    },
    categories: {
      title: "Browse Guides by Level",
      all: "All Levels",
      beginnerDescription: "For creators with <10K followers or new to data-driven strategy.",
      intermediateDescription: "For creators with 10K-100K followers optimizing their strategy.",
      advancedDescription: "For creators with 100K+ followers or agencies managing accounts."
    },
    filters: {
      all: "All Guides",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced"
    },
    format: {
      title: "What Each Guide Includes",
      intro: "Every guide follows a consistent structure:",
      items: [
        { label: "Difficulty badge", detail: "Beginner, Intermediate, or Advanced" },
        { label: "Estimated time", detail: "How long the guide takes to complete (15-45 minutes)" },
        { label: "Prerequisites", detail: "What you need before starting" },
        { label: "Step-by-step instructions", detail: "Numbered steps with screenshots and examples" },
        { label: "OwlSeer feature links", detail: "Direct links to the tools referenced in each step", href: "/social/simulation" },
        { label: "Checkpoint questions", detail: "Self-assessment prompts to confirm you are on track" },
        { label: "Next steps", detail: "What to read or do after completing the guide" }
      ]
    },
    thisWeek: {
      title: "This Week's Recommended Guide",
      subtitle: "Based on current platform trends",
      bodyBeforeLink: "Based on current platform trends and common creator challenges, we highlight one guide each week. The recommendation draws from the same intelligence that powers OwlSeer's",
      weeklyBriefLink: "weekly brief",
      bodyAfterLink: "if many creators are facing a particular challenge, the recommended guide addresses it.",
      cta: "Read Guide"
    },
    cards: {
      followAlong: "Follow Along in OwlSeer"
    },
    states: {
      noResults: "No guides found matching your criteria.",
      clearFilters: "Clear Filters",
      showing: "Showing {{current}} of {{total}} guides"
    },
    beginnerCta: {
      text: "Ready to follow this guide with your own data?",
      action: "Connect your account"
    },
    boundary: {
      title: "Boundary Box",
      labels: {
        data: "Data we use",
        limit: "What we do not do",
        note: "Variability note"
      },
      data: "Guides reference OwlSeer's signal framework, feature set, and aggregated user patterns.",
      limit: "Guides are educational frameworks, not guaranteed growth plans. Results depend on your niche, content execution, and consistency. Guides do not replace personalized AI recommendations from your OwlSeer account.",
      note: "TikTok features and best practices evolve. We update guides when significant platform changes affect the content. Check publication dates for currency."
    },
    cta: {
      title: "Start Learning",
      lead: "Pick a guide that matches your level and complete it this week. Or connect your account for personalized recommendations.",
      primary: "Start Free Trial",
      secondary: "Browse the Blog"
    }
  },
  zh: {
    meta: {
      title: "TikTok 策略指南 | OwlSeer",
      description: "从入门到高级的分步 TikTok 增长指南。包含数据支持的框架、示例、检查点和后续步骤。选择适合你的等级。"
    },
    hero: {
      title: "TikTok 策略指南",
      lead: "长篇分步指南：从入门基础到高级优化。按难度分级，每篇都以可执行为目标，而不只是阅读。",
      ctaPrimary: "开始免费试用",
      ctaSecondary: "浏览博客"
    },
    tldr: {
      title: "摘要",
      beforeWeeklyBrief: "指南比博客文章更深入。每篇指南都以数据支持的步骤覆盖完整工作流，参考了 OwlSeer 的",
      weeklyBriefLink: "每周简报",
      betweenLinks: "格式和",
      signalFrameworkLink: "信号框架",
      afterSignalFramework: "指南按难度等级和预计完成时间组织。"
    },
    categories: {
      title: "按等级浏览指南",
      all: "全部等级",
      beginnerDescription: "适合粉丝少于 1 万或刚开始数据化策略的创作者。",
      intermediateDescription: "适合 1 万到 10 万粉丝、正在优化策略的创作者。",
      advancedDescription: "适合 10 万以上粉丝创作者或管理多账号的机构。"
    },
    filters: {
      all: "全部指南",
      beginner: "入门",
      intermediate: "进阶",
      advanced: "高级"
    },
    format: {
      title: "每篇指南包含什么",
      intro: "每篇指南都遵循一致结构：",
      items: [
        { label: "难度标签", detail: "入门、进阶或高级" },
        { label: "预计时间", detail: "完成指南所需时间（15-45 分钟）" },
        { label: "先决条件", detail: "开始前需要准备的条件" },
        { label: "分步说明", detail: "带截图和示例的编号步骤" },
        { label: "OwlSeer 功能链接", detail: "每一步对应工具的直达入口", href: "/social/simulation" },
        { label: "检查点问题", detail: "用于确认你是否在正确轨道上的自测问题" },
        { label: "后续步骤", detail: "完成本篇指南后下一步该做什么" }
      ]
    },
    thisWeek: {
      title: "本周推荐指南",
      subtitle: "基于当前平台趋势",
      bodyBeforeLink: "基于当前平台趋势和常见创作者挑战，我们每周会高亮一篇推荐指南。该推荐依据与 OwlSeer",
      weeklyBriefLink: "每周简报",
      bodyAfterLink: "相同的智能分析，如果许多创作者都遇到同一问题，推荐指南会优先覆盖它。",
      cta: "阅读指南"
    },
    cards: {
      followAlong: "在 OwlSeer 中跟做"
    },
    states: {
      noResults: "没有找到符合条件的指南。",
      clearFilters: "清除筛选",
      showing: "当前展示 {{current}} / {{total}} 篇指南"
    },
    beginnerCta: {
      text: "准备好用你自己的数据跟做这篇指南了吗？",
      action: "连接你的账号"
    },
    boundary: {
      title: "边界框",
      labels: {
        data: "我们使用的数据",
        limit: "我们不做的事",
        note: "变动说明"
      },
      data: "指南基于 OwlSeer 的信号框架、功能体系和聚合用户模式。",
      limit: "指南是教育框架，不承诺增长结果。实际效果取决于你的细分赛道、内容执行和持续性。指南不能替代 OwlSeer 账号中的个性化 AI 推荐。",
      note: "TikTok 功能和最佳实践会持续变化。我们会在平台发生显著变化并影响内容时更新指南，请以发布日期判断时效性。"
    },
    cta: {
      title: "开始学习",
      lead: "选择适合你的等级并在本周完成一篇指南，或连接账号获取个性化推荐。",
      primary: "开始免费试用",
      secondary: "浏览博客"
    }
  }
};

// --- Guide Data ---
const guidesData: Record<string, Guide[]> = {
  en: guideCardsByLanguage.en,
  zh: guideCardsByLanguage.zh,
};

const DifficultyBadge = ({ level }: { level: DifficultyLevel }) => {
  const styles = {
    Beginner: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    Intermediate: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    Advanced: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"
  };

  return (
    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${styles[level]}`}>
      {level}
    </span>
  );
};

export const GuidesPage = ({ 
  onNavigate, 
  isDarkMode, 
  setIsDarkMode 
}: { 
  onNavigate: (page: string) => void, 
  isDarkMode: boolean, 
  setIsDarkMode: (isDark: boolean) => void 
}) => {
  const { language, setLanguage } = useLanguage();
  const t = (pageTranslations as any)[language] || pageTranslations.en;
  const globalT = globalTranslations[language] || globalTranslations.en;
  const guides = guidesData[language] || guidesData.en;
  
  const [activeFilter, setActiveFilter] = useState<DifficultyLevel | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGuides = useMemo(() => {
    return guides.filter(guide => {
      const matchesFilter = activeFilter === 'All' || guide.level === activeFilter;
      const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           guide.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery, guides]);

  const recommendedGuide = guides.find((guide) => guide.slug === WEEKLY_RECOMMENDED_GUIDE_SLUG) || guides[0];
  const searchPlaceholder = language === 'zh' ? '搜索指南标题或描述...' : 'Search guide title or description...';
  const noResultsText = t.states.noResults;
  const clearFiltersText = t.states.clearFilters;
  const resultCountText = t.states.showing
    .replace('{{current}}', String(filteredGuides.length))
    .replace('{{total}}', String(guides.length));
  const hasBeginnerGuideInView = filteredGuides.some((guide) => guide.level === 'Beginner');
  const weeklyBriefPath = normalizeGuideLink('/sample-explorer/intelligence#this-weeks-brief');
  const signalFrameworkPath = addLanguagePrefix('/social/signals', language);

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans text-gray-900 dark:text-white selection:bg-[#1AAE82]/30 transition-colors duration-300">
      <SEO 
        title={t.meta.title}
        description={t.meta.description}
        keywords={["tiktok strategy guides", "tiktok growth guide", "tiktok for beginners", "advanced tiktok strategy", "tiktok tutorials"]}
        lang={language}
      />

      <Navbar 
        onTrySample={() => onNavigate('/social/simulation')}
        onSignUp={() => onNavigate('/social/auth')}
        onNavigate={onNavigate}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={globalT} 
      />

      <main className="bg-white dark:bg-[#020617]">
        <div className="relative overflow-hidden">
          <AuroraBackground
            colorStops={isDarkMode ? ['#020617', '#1AAE82', '#020617'] : ['#FFFFFF', '#E0F2FE', '#FFFFFF']}
            speed={0.3}
            blend={0.5}
            baseColor={isDarkMode ? 0.0 : 1.0}
            className="absolute inset-0 z-0 opacity-40"
          />

          <section className="relative z-10 mx-auto max-w-7xl px-4 pb-28 pt-40 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1AAE82]/20 bg-[#1AAE82]/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#1AAE82]">
                <GraduationCap className="h-4 w-4" />
                <span>{t.hero.title}</span>
              </div>

              <h1 className="mx-auto mb-8 max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white md:text-7xl lg:text-8xl">
                {t.hero.title}
              </h1>

              <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:text-2xl">
                {t.hero.lead}
              </p>

              <div className="flex flex-col justify-center gap-5 sm:flex-row">
                <button
                  onClick={() => onNavigate('/social/auth')}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#1AAE82] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-[#1AAE82]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#15956F] hover:shadow-[#1AAE82]/40"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onNavigate('/social/blog')}
                  className="flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 font-medium text-gray-900 transition-all hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  {t.hero.ctaSecondary}
                </button>
              </div>
            </motion.div>
          </section>
        </div>

        <section className="relative z-20 mx-auto -mt-8 mb-20 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/50 bg-white/80 p-10 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/80 md:p-14">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 md:text-xl">
              {t.tldr.beforeWeeklyBrief}{' '}
              <button
                onClick={() => onNavigate(weeklyBriefPath)}
                className="inline-flex items-center border-b-2 border-[#1AAE82]/30 font-bold text-[#1AAE82] transition-colors hover:border-[#1AAE82] hover:text-[#15956F]"
              >
                {t.tldr.weeklyBriefLink}
              </button>{' '}
              {t.tldr.betweenLinks}{' '}
              <button
                onClick={() => onNavigate(signalFrameworkPath)}
                className="inline-flex items-center border-b-2 border-[#1AAE82]/30 font-bold text-[#1AAE82] transition-colors hover:border-[#1AAE82] hover:text-[#15956F]"
              >
                {t.tldr.signalFrameworkLink}
              </button>{' '}
              {t.tldr.afterSignalFramework}
            </p>
          </div>
        </section>

        <section className="mx-auto mb-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">{t.categories.title}</h2>
            <button
              onClick={() => setActiveFilter('All')}
              className={`inline-flex w-fit items-center rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                activeFilter === 'All'
                  ? 'border-[#1AAE82]/30 bg-[#1AAE82]/10 text-[#1AAE82]'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-[#1AAE82]/20 hover:text-[#1AAE82] dark:border-slate-700 dark:bg-slate-900 dark:text-gray-300'
              }`}
            >
              {t.categories.all}
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { key: 'Beginner', title: t.filters.beginner, description: t.categories.beginnerDescription },
              { key: 'Intermediate', title: t.filters.intermediate, description: t.categories.intermediateDescription },
              { key: 'Advanced', title: t.filters.advanced, description: t.categories.advancedDescription }
            ].map((level) => (
              <button
                key={level.key}
                onClick={() => setActiveFilter(level.key as DifficultyLevel)}
                className={`rounded-2xl border p-5 text-left transition-all ${
                  activeFilter === level.key
                    ? 'border-[#1AAE82]/40 bg-[#1AAE82]/5 shadow-lg shadow-[#1AAE82]/10'
                    : 'border-gray-200 bg-white hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900'
                }`}
              >
                <div className="mb-3">
                  <DifficultyBadge level={level.key as DifficultyLevel} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{level.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{level.description}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="relative w-full xl:max-w-xl">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-gray-100 bg-gray-50 py-3 pl-10 pr-4 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#1AAE82]/50 dark:border-slate-700 dark:bg-slate-800/50"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {t.filters.all}
                </span>
                {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                      activeFilter === filter
                        ? 'bg-[#1AAE82] text-white shadow-lg shadow-[#1AAE82]/20'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    {filter === 'All'
                      ? t.filters.all
                      : filter === 'Beginner'
                        ? t.filters.beginner
                        : filter === 'Intermediate'
                          ? t.filters.intermediate
                          : t.filters.advanced}
                  </button>
                ))}
                <span className="ml-2 rounded-full border border-[#1AAE82]/20 bg-[#1AAE82]/5 px-3 py-1 text-xs font-semibold text-[#1AAE82]">
                  {resultCountText}
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredGuides.length > 0 ? (
                filteredGuides.map((guide) => (
                  <motion.article
                    key={guide.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 8 }}
                    className="group relative cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-none"
                    onClick={() => onNavigate(normalizeGuideLink(guide.link))}
                  >
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-[#1AAE82] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        <span title={guide.time}>
                          <DifficultyBadge level={guide.level} />
                        </span>
                        {guide.isNew && (
                          <span className="rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-1 text-[10px] font-bold text-blue-600 dark:text-blue-400">
                            NEW
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 rounded-md bg-gray-50 px-2 py-1 text-xs font-mono text-gray-400 dark:bg-slate-800">
                        <Clock className="h-3 w-3" />
                        {guide.time}
                      </div>
                    </div>

                    <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-[#1AAE82] dark:text-white">
                      {guide.title}
                    </h3>
                    <p className="mb-8 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{guide.description}</p>

                    <div className="mt-auto flex items-center justify-between gap-4">
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          onNavigate(normalizeGuideLink(guide.link));
                        }}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#1AAE82] transition-colors hover:text-[#15956F]"
                      >
                        {t.cards.followAlong}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{guide.category}</span>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="text-gray-500 dark:text-gray-400">{noResultsText}</p>
                  <button
                    onClick={() => {
                      setActiveFilter('All');
                      setSearchQuery('');
                    }}
                    className="mt-4 font-bold text-[#1AAE82] hover:underline"
                  >
                    {clearFiltersText}
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>

          {hasBeginnerGuideInView && (
            <div className="mt-8 rounded-2xl border border-[#1AAE82]/20 bg-[#1AAE82]/5 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{t.beginnerCta.text}</p>
                <button
                  onClick={() => onNavigate('/social/auth')}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#1AAE82] px-5 py-2 text-sm font-bold text-white transition-all hover:bg-[#15956F]"
                >
                  {t.beginnerCta.action}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </section>

        <section className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{t.format.title}</h2>
            <p className="mb-8 text-gray-600 dark:text-gray-300">{t.format.intro}</p>
            <ul className="space-y-4">
              {t.format.items.map((item: any, index: number) => (
                <li key={`${item.label}-${index}`} className="flex items-start gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1AAE82]" />
                  <span>
                    {item.href ? (
                      <button
                        onClick={() => onNavigate(normalizeGuideLink(item.href))}
                        className="font-semibold text-[#1AAE82] underline underline-offset-2 hover:text-[#15956F]"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <strong className="font-semibold text-gray-900 dark:text-white">{item.label}</strong>
                    )}
                    : {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{t.thisWeek.title}</h2>
            <p className="max-w-4xl text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
              {t.thisWeek.bodyBeforeLink}{' '}
              <button
                onClick={() => onNavigate(weeklyBriefPath)}
                className="inline-flex items-center border-b-2 border-[#1AAE82]/30 font-semibold text-[#1AAE82] transition-colors hover:border-[#1AAE82] hover:text-[#15956F]"
              >
                {t.thisWeek.weeklyBriefLink}
              </button>{' '}
              {t.thisWeek.bodyAfterLink}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-gray-900 shadow-2xl"
            onClick={() => onNavigate(normalizeGuideLink(recommendedGuide.link))}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-[#1AAE82]/40 opacity-70 animate-pulse" />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-40 transition-transform duration-700 ease-out group-hover:scale-105" />

            <div className="relative z-20 flex flex-col items-start justify-between gap-12 p-8 md:flex-row md:items-center md:p-16">
              <div className="max-w-2xl space-y-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#1AAE82] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#1AAE82]/30">
                    {t.thisWeek.subtitle}
                  </span>
                  <span className="flex items-center gap-2 text-sm font-medium tracking-wide text-slate-300">
                    <Sparkles className="h-3 w-3 text-amber-400" />
                    {t.thisWeek.title}
                  </span>
                </div>

                <h3 className="text-4xl font-bold leading-tight text-white md:text-5xl">{recommendedGuide.title}</h3>
                <p className="max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">{recommendedGuide.description}</p>

                <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
                  <DifficultyBadge level={recommendedGuide.level} />
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-[#1AAE82]" />
                    {recommendedGuide.time}
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                <button className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#1AAE82] group-hover:bg-[#1AAE82]">
                  {t.thisWeek.cta}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto mb-24 max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-8 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/30">
            <h3 className="mb-6 flex items-center gap-3 text-lg font-bold text-gray-900 dark:text-white">
              <Lock size={20} className="text-gray-400" />
              {t.boundary.title}
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                <strong className="text-gray-900 dark:text-gray-200">{t.boundary.labels.data}:</strong> {t.boundary.data}
              </p>
              <p>
                <strong className="text-gray-900 dark:text-gray-200">{t.boundary.labels.limit}:</strong> {t.boundary.limit}
              </p>
              <p>
                <strong className="text-gray-900 dark:text-gray-200">{t.boundary.labels.note}:</strong> {t.boundary.note}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-20 max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">{t.cta.title}</h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-600 dark:text-gray-300 md:text-2xl">{t.cta.lead}</p>
          <div className="flex flex-col justify-center gap-5 sm:flex-row">
            <button
              onClick={() => onNavigate('/social/auth')}
              className="rounded-full bg-[#1AAE82] px-10 py-5 text-xl font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#15956F]"
            >
              {t.cta.primary}
            </button>
            <button
              onClick={() => onNavigate('/social/blog')}
              className="rounded-full border border-gray-200 bg-white px-10 py-5 text-xl font-medium text-gray-900 transition-all hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              {t.cta.secondary}
            </button>
          </div>
        </section>
      </main>

      <Footer t={globalT.footer} onNavigate={onNavigate} />
    </div>
  );
};

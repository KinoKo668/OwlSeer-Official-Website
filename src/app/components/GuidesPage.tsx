import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Filter,
  Zap,
  Lock,
  Search,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations as globalTranslations } from '../data/translations';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { SEO } from './SEO';

// --- Types ---
type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

interface Guide {
  id: string;
  title: string;
  level: DifficultyLevel;
  time: string;
  description: string;
  isNew?: boolean;
  link: string;
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
      content: "Guides go deeper than blog posts. Each guide walks through a complete workflow with data-backed steps, drawing from OwlSeer's weekly brief format and signal framework. Guides are organized by difficulty level and estimated completion time.",
      link: "weekly brief"
    },
    filters: {
      all: "All Guides",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced"
    },
    thisWeek: {
      title: "This Week's Recommended Guide",
      subtitle: "Based on current platform trends",
      cta: "Read Guide"
    },
    format: {
      title: "What Each Guide Includes",
      items: [
        "Difficulty badge",
        "Estimated time (15-45 mins)",
        "Prerequisites",
        "Step-by-step instructions",
        "OwlSeer feature links",
        "Checkpoint questions",
        "Next steps"
      ]
    },
    boundary: {
      title: "Boundary Box",
      data: "Data we use: Guides reference OwlSeer's signal framework, feature set, and aggregated user patterns.",
      limit: "What we do not do: Guides are educational frameworks, not guaranteed growth plans. Results depend on your niche, content execution, and consistency. Guides do not replace personalized AI recommendations from your OwlSeer account.",
      note: "Variability note: TikTok features and best practices evolve. We update guides when significant platform changes affect the content. Check publication dates for currency."
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
      description: "从入门到高级的分步 TikTok 增长指南。包含数据支持的框架、示例、检查点和后续步骤。选择适合您的等级。"
    },
    hero: {
      title: "TikTok 策略指南",
      lead: "长篇分步指南：从入门基础到高级优化。按难度分级，每篇含步骤、截图、检查点和后续行动。",
      ctaPrimary: "开始免费试用",
      ctaSecondary: "浏览博客"
    },
    tldr: {
      title: "摘要",
      content: "指南比博客文章更深入。每篇指南都通过数据支持的步骤贯穿完整的工作流，借鉴了 OwlSeer 的每周简报格式和信号框架。指南按难度级别和预计完成时间组织。",
      link: "每周简报"
    },
    filters: {
      all: "全部指南",
      beginner: "入门",
      intermediate: "进阶",
      advanced: "高级"
    },
    thisWeek: {
      title: "本周推荐指南",
      subtitle: "基于当前平台趋势",
      cta: "阅读指南"
    },
    format: {
      title: "每篇指南包含",
      items: [
        "难度标签",
        "预计时间 (15-45 分钟)",
        "先决条件",
        "分步说明",
        "OwlSeer 功能链接",
        "检查点问题",
        "后续步骤"
      ]
    },
    boundary: {
      title: "边界框",
      data: "我们使用的数据：指南参考了 OwlSeer 的信号框架、功能集和聚合用户模式。",
      limit: "我们不做的：指南是教育框架，不是保证增长的计划。结果取决于您的利基市场、内容执行和一致性。指南不能替代 OwlSeer 帐户中的个性化 AI 推荐。",
      note: "变异性说明：TikTok 功能和最佳实践不断发展。当平台发生重大变化影响内容时，我们会更新指南。请检查发布日期以确保时效性。"
    },
    cta: {
      title: "开始学习",
      lead: "选择适合您水平的指南并在本周完成。或者连接您的帐户以获取个性化推荐。",
      primary: "开始免费试用",
      secondary: "浏览博客"
    }
  }
};

// --- Mock Data ---
const guidesData: Record<string, Guide[]> = {
  en: [
    {
      id: 'g1',
      title: "Getting Started with OwlSeer: A Complete Walkthrough",
      level: "Beginner",
      time: "15 min",
      description: "Set up your account, connect your TikTok, and understand your dashboard basics.",
      link: "/how-it-works"
    },
    {
      id: 'g2',
      title: "Understanding Your TikTok Signals: What to Look At First",
      level: "Beginner",
      time: "20 min",
      description: "Learn how to interpret key metrics and what they mean for your content strategy.",
      link: "/signals"
    },
    {
      id: 'g3',
      title: "Your First Data-Driven Content Week: A 7-Day Plan",
      level: "Beginner",
      time: "25 min",
      description: "A step-by-step plan to create content based on data insights for your first week.",
      link: "/use-cases/posting-schedule"
    },
    {
      id: 'g4',
      title: "Mastering Hook Rates: The 3-Second Framework",
      level: "Intermediate",
      time: "30 min",
      description: "Optimize your video openings to capture attention and improve retention.",
      isNew: true,
      link: "/signals"
    },
    {
      id: 'g5',
      title: "Building a Hashtag Strategy from Trend Radar Data",
      level: "Intermediate",
      time: "35 min",
      description: "Leverage trend data to select high-impact hashtags for your niche.",
      link: "/use-cases/hashtag-strategy"
    },
    {
      id: 'g6',
      title: "Reading Your Weekly Report: What Matters and What to Skip",
      level: "Intermediate",
      time: "20 min",
      description: "Focus on the most actionable insights in your weekly performance report.",
      link: "/sample-explorer/weekly-report"
    },
    {
      id: 'g7',
      title: "Cross-Signal Analysis: Finding Hidden Patterns in Your Data",
      level: "Advanced",
      time: "40 min",
      description: "Combine multiple signals to uncover deep insights about your audience behavior.",
      link: "/use-cases/content-diagnosis"
    },
    {
      id: 'g8',
      title: "Scaling Content Production with Script Studio",
      level: "Advanced",
      time: "45 min",
      description: "Streamline your workflow to produce more high-quality content in less time.",
      link: "/use-cases/script-generation"
    },
    {
      id: 'g9',
      title: "Agency Playbook: Managing 10+ Accounts with OwlSeer",
      level: "Advanced",
      time: "45 min",
      description: "Best practices for agencies to manage multiple client accounts efficiently.",
      link: "/solutions/agencies"
    },
    {
      id: 'g10',
      title: "Advanced Trend Timing: When to Ride and When to Skip",
      level: "Advanced",
      time: "30 min",
      description: "Decide which trends are worth your effort based on timing and velocity.",
      link: "/use-cases/trend-prediction"
    }
  ],
  zh: [
    {
      id: 'g1',
      title: "OwlSeer 入门：完整流程演示",
      level: "Beginner",
      time: "15 分钟",
      description: "设置帐户，连接 TikTok，并了解仪表板基础知识。",
      link: "/how-it-works"
    },
    {
      id: 'g2',
      title: "理解您的 TikTok 信号：首先看什么",
      level: "Beginner",
      time: "20 分钟",
      description: "学习如何解读关键指标及其对内容策略的意义。",
      link: "/zh/signals"
    },
    {
      id: 'g3',
      title: "您的第一个数据驱动内容周：7 天计划",
      level: "Beginner",
      time: "25 分钟",
      description: "基于数据洞察为您第一周创建内容的分步计划。",
      link: "/zh/use-cases/posting-schedule"
    },
    {
      id: 'g4',
      title: "掌握完播率：3 秒框架",
      level: "Intermediate",
      time: "30 分钟",
      description: "优化视频开头以吸引注意力并提高留存率。",
      isNew: true,
      link: "/zh/signals"
    },
    {
      id: 'g5',
      title: "基于趋势雷达数据构建标签策略",
      level: "Intermediate",
      time: "35 分钟",
      description: "利用趋势数据为您的利基市场选择高影响力的标签。",
      link: "/zh/use-cases/hashtag-strategy"
    },
    {
      id: 'g6',
      title: "解读每周报告：关注重点与忽略内容",
      level: "Intermediate",
      time: "20 分钟",
      description: "专注于每周表现报告中最具可操作性的洞察。",
      link: "/zh/sample-explorer/weekly-report"
    },
    {
      id: 'g7',
      title: "跨信号分析：发现数据中的隐藏模式",
      level: "Advanced",
      time: "40 分钟",
      description: "结合多个信号以揭示有关受众行为的深度洞察。",
      link: "/zh/use-cases/content-diagnosis"
    },
    {
      id: 'g8',
      title: "使用脚本工作室扩展内容制作",
      level: "Advanced",
      time: "45 分钟",
      description: "简化工作流程，在更短的时间内制作更多高质量内容。",
      link: "/zh/use-cases/script-generation"
    },
    {
      id: 'g9',
      title: "代理商手册：使用 OwlSeer 管理 10+ 帐户",
      level: "Advanced",
      time: "45 分钟",
      description: "代理商高效管理多个客户帐户的最佳实践。",
      link: "/zh/solutions/agencies"
    },
    {
      id: 'g10',
      title: "高级趋势时机：何时跟进与何时跳过",
      level: "Advanced",
      time: "30 分钟",
      description: "根据时机和速度决定哪些趋势值得您投入精力。",
      link: "/zh/use-cases/trend-prediction"
    }
  ]
};

const DifficultyBadge = ({ level }: { level: DifficultyLevel }) => {
  const colors = {
    Beginner: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    Intermediate: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800",
    Advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800"
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${colors[level]}`}>
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

  const recommendedGuide = guides.find(g => g.id === 'g4') || guides[0];

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans text-gray-900 dark:text-white selection:bg-[#1AAE82]/30 transition-colors duration-300">
      <SEO 
        title={t.meta.title}
        description={t.meta.description}
        keywords={["tiktok strategy guides", "tiktok growth guide", "tiktok for beginners", "advanced tiktok strategy"]}
        lang={language}
      />

      <Navbar 
        onTrySample={() => onNavigate('/simulation')}
        onSignUp={() => onNavigate('/auth')}
        onNavigate={onNavigate}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={globalT} 
      />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1AAE82]/10 text-[#1AAE82] text-xs font-bold uppercase tracking-wider mb-6 border border-[#1AAE82]/20">
              <BookOpen className="w-3 h-3" /> Knowledge Hub
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-gray-900 dark:text-white font-display">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              {t.hero.lead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('/auth')}
                className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                {t.hero.ctaPrimary} <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => onNavigate('/blog')}
                className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-full font-medium transition-all flex items-center justify-center gap-2"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>
          </motion.div>
        </section>

        {/* TL;DR Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-20">
          <div className="bg-[#FEFCE8] dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 rounded-2xl p-6 md:p-8 relative">
            <div className="absolute -top-3 -left-3 bg-yellow-400 text-yellow-900 p-2 rounded-full shadow-sm">
              <Zap className="w-5 h-5" fill="currentColor" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-700 dark:text-yellow-500 mb-3 ml-2">{t.tldr.title}</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed font-medium">
              {t.tldr.content.split(t.tldr.link).map((part: string, i: number, arr: string[]) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <button 
                      onClick={() => onNavigate('/sample-explorer/weekly-report')}
                      className="text-[#1AAE82] underline decoration-2 underline-offset-2 hover:text-[#15956F] font-bold mx-1"
                    >
                      {t.tldr.link}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>
        </section>

        {/* Recommended Guide */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Star size={200} />
            </div>
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                   <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/10 animate-pulse">
                     {t.thisWeek.title}
                   </span>
                   <span className="text-slate-300 text-sm">{t.thisWeek.subtitle}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">{recommendedGuide.title}</h2>
                <p className="text-slate-300 text-lg">{recommendedGuide.description}</p>
                <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
                  <DifficultyBadge level={recommendedGuide.level} />
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {recommendedGuide.time}</span>
                </div>
              </div>
              <button 
                onClick={() => onNavigate(recommendedGuide.link)}
                className="shrink-0 px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                {t.thisWeek.cta} <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Main Content: Filters & List */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Sidebar / Filters */}
            <div className="w-full md:w-64 shrink-0 space-y-8">
              <div className="sticky top-24">
                <div className="mb-6 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search guides..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1AAE82]/50 text-sm"
                  />
                </div>

                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4" /> {t.filters.all}
                </h3>
                <div className="space-y-2">
                  {['All', 'Beginner', 'Intermediate', 'Advanced'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter as any)}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${
                        activeFilter === filter 
                          ? 'bg-[#1AAE82]/10 text-[#1AAE82]' 
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>
                        {filter === 'All' ? t.filters.all : 
                         filter === 'Beginner' ? t.filters.beginner : 
                         filter === 'Intermediate' ? t.filters.intermediate : 
                         t.filters.advanced}
                      </span>
                      {activeFilter === filter && <CheckCircle className="w-4 h-4" />}
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-100 dark:border-slate-800">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm">{t.format.title}</h4>
                  <ul className="space-y-2">
                    {t.format.items.map((item: string, i: number) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-[#1AAE82] mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Guide List */}
            <div className="flex-1">
              <div className="grid gap-6">
                {filteredGuides.length > 0 ? (
                  filteredGuides.map((guide) => (
                    <motion.div
                      key={guide.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-lg hover:border-[#1AAE82]/30 transition-all cursor-pointer relative overflow-hidden"
                      onClick={() => onNavigate(guide.link)}
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-gray-100 dark:bg-slate-800 group-hover:bg-[#1AAE82] transition-colors" />
                      
                      <div className="flex flex-col md:flex-row gap-4 justify-between items-start mb-4">
                         <div className="flex gap-2 flex-wrap">
                           <DifficultyBadge level={guide.level} />
                           {guide.isNew && (
                             <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                               NEW
                             </span>
                           )}
                         </div>
                         <div className="flex items-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                           <Clock className="w-3.5 h-3.5" /> {guide.time}
                         </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#1AAE82] transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                        {guide.description}
                      </p>
                      
                      <div className="flex items-center text-[#1AAE82] font-bold text-sm">
                        Follow Along in OwlSeer <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-20 text-gray-500 dark:text-gray-400">
                    No guides found matching your criteria.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Boundary Box */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-24">
          <div className="border border-gray-200 dark:border-slate-800 rounded-xl p-6 bg-gray-50/50 dark:bg-slate-900/50">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Lock size={18} className="text-gray-400" /> {t.boundary.title}
            </h3>
            <div className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <p><strong className="text-gray-700 dark:text-gray-300">Data:</strong> {t.boundary.data.replace("Data we use:", "")}</p>
              <p><strong className="text-gray-700 dark:text-gray-300">Limitations:</strong> {t.boundary.limit.replace("What we do not do:", "")}</p>
              <p><strong className="text-gray-700 dark:text-gray-300">Note:</strong> {t.boundary.note.replace("Variability note:", "")}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.cta.lead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('/auth')}
              className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              {t.cta.primary}
            </button>
            <button 
              onClick={() => onNavigate('/blog')}
              className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-full font-medium transition-all"
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

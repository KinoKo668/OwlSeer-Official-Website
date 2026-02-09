import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Check, 
  X as XIcon,
  Zap, 
  Play, 
  Lock,
  Scale,
  Target,
  Layers
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations as globalTranslations } from '../../data/translations';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { SEO } from '../SEO';

// --- Translations ---
const pageTranslations = {
  en: {
    meta: {
      title: "OwlSeer vs TubeSpanner — TikTok Comparison",
      description: "Compare OwlSeer and TubeSpanner for TikTok. Platform depth vs breadth — signal analysis, trend prediction, and scripts vs multi-platform dashboards."
    },
    hero: {
      title: "OwlSeer vs TubeSpanner: TikTok-Native vs Multi-Platform",
      lead: "TubeSpanner serves multiple video platforms. OwlSeer focuses exclusively on TikTok. This comparison helps you decide based on your platform priority and analytics depth needs.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Explore Demo"
    },
    tldr: {
      content: "TubeSpanner covers YouTube, TikTok, and Instagram from one dashboard. OwlSeer goes deeper on TikTok — 30+ signals, AI trend prediction with competition level analysis, data-driven scripts, and a conversational copilot. Choose breadth (TubeSpanner) or depth (OwlSeer).",
      link: "competition level analysis"
    },
    comparison: {
      title: "Feature-by-Feature Comparison",
      headers: ["Feature", "OwlSeer", "TubeSpanner"],
      rows: [
        { feature: "Platform coverage", owlseer: "TikTok only", tubespanner: "YouTube + TikTok + Instagram" },
        { feature: "TikTok signal depth", owlseer: "30+ weighted signals", tubespanner: "Basic engagement metrics" },
        { feature: "Trend prediction", owlseer: "AI velocity + competition + match scoring", tubespanner: "Trending content aggregation" },
        { feature: "Script generation", owlseer: "Personalized hook-body-CTA scripts", tubespanner: "No script generation" },
        { feature: "Competition analysis", owlseer: "Per-trend competition level scoring", tubespanner: "General competitor tracking" },
        { feature: "Content diagnosis", owlseer: "Signal-level issue detection + fixes", tubespanner: "Performance summaries" },
        { feature: "AI copilot", owlseer: "Conversational with account context", tubespanner: "No conversational AI" },
        { feature: "Cross-platform analytics", owlseer: "TikTok only", tubespanner: "Multi-platform dashboards" }
      ]
    },
    when: {
      title: "When to Choose Each Tool",
      owlseer: {
        title: "Choose OwlSeer when:",
        points: [
          "TikTok is where you invest the majority of your content effort.",
          "You want deep signal analysis and AI-generated scripts from your data.",
          "You need trend predictions with timing precision.",
          "OwlSeer treats TikTok as a primary platform, not an add-on."
        ]
      },
      tubespanner: {
        title: "Choose TubeSpanner when:",
        points: [
          "You manage content across YouTube, TikTok, and Instagram simultaneously.",
          "You need a unified view across multiple platforms.",
          "TikTok is one of several platforms you manage.",
          "You prefer breadth of platform coverage over depth of TikTok-specific analytics."
        ]
      },
      coexist: "Both tools can coexist. Some creators use TubeSpanner for cross-platform overview and OwlSeer for TikTok-specific strategy."
    },
    boundary: {
      title: "Boundary Box",
      data: "Data we use: Feature comparisons based on publicly available product information as of February 2026.",
      limit: "What we do not do: This is not a sponsored comparison. Features may have changed since publication.",
      note: "Variability note: Multi-platform tools evolve rapidly. Verify current features on each tool's website."
    },
    cta: {
      title: "Try TikTok-Native Analytics",
      primary: "Start Free Trial",
      secondary: "Explore Demo"
    }
  },
  zh: {
    meta: {
      title: "OwlSeer vs TubeSpanner — TikTok 对比",
      description: "对比 OwlSeer 和 TubeSpanner 的 TikTok 分析功能。平台深度与广度的较量——信号分析、趋势预测和脚本 vs 多平台仪表板。"
    },
    hero: {
      title: "OwlSeer vs TubeSpanner：TikTok 专精 vs 多平台覆盖",
      lead: "TubeSpanner 覆盖多个视频平台。OwlSeer 专注 TikTok 深度分析。选择广度还是深度取决于你的平台优先级。",
      ctaPrimary: "开始免费试用",
      ctaSecondary: "探索演示"
    },
    tldr: {
      content: "TubeSpanner 从一个仪表板覆盖 YouTube、TikTok 和 Instagram。OwlSeer 在 TikTok 上更深入——30+ 信号、带有竞争水平分析的 AI 趋势预测、数据驱动的脚本和对话式 Copilot。选择广度 (TubeSpanner) 或深度 (OwlSeer)。",
      link: "竞争水平分析"
    },
    comparison: {
      title: "功能对比",
      headers: ["功能", "OwlSeer", "TubeSpanner"],
      rows: [
        { feature: "平台覆盖", owlseer: "仅限 TikTok", tubespanner: "YouTube + TikTok + Instagram" },
        { feature: "TikTok 信号深度", owlseer: "30+ 加权信号", tubespanner: "基础互动指标" },
        { feature: "趋势预测", owlseer: "AI 速度 + 竞争 + 匹配评分", tubespanner: "趋势内容聚合" },
        { feature: "脚本生成", owlseer: "个性化钩子-正文-CTA 脚本", tubespanner: "无脚本生成" },
        { feature: "竞争分析", owlseer: "每个趋势的竞争水平评分", tubespanner: "一般竞争对手追踪" },
        { feature: "内容诊断", owlseer: "信号级问题检测 + 修复", tubespanner: "表现摘要" },
        { feature: "AI Copilot", owlseer: "带账号上下文的对话式 AI", tubespanner: "无对话式 AI" },
        { feature: "跨平台分析", owlseer: "仅限 TikTok", tubespanner: "多平台仪表板" }
      ]
    },
    when: {
      title: "何时选择每种工具",
      owlseer: {
        title: "选择 OwlSeer 当：",
        points: [
          "TikTok 是你投入大部分内容精力的地方。",
          "你想要深度信号分析和基于你数据的 AI 生成脚本。",
          "你需要具有时间精度的趋势预测。",
          "OwlSeer 将 TikTok 视为主要平台，而不是附加组件。"
        ]
      },
      tubespanner: {
        title: "选择 TubeSpanner 当：",
        points: [
          "你同时管理 YouTube、TikTok 和 Instagram 上的内容。",
          "你需要跨多个平台的统一视图。",
          "TikTok 只是你管理的几个平台之一。",
          "你更喜欢平台覆盖的广度而不是 TikTok 特定分析的深度。"
        ]
      },
      coexist: "两种工具可以共存。一些创作者使用 TubeSpanner 进行跨平台概览，使用 OwlSeer 进行 TikTok 特定策略。"
    },
    boundary: {
      title: "边界框",
      data: "我们使用的数据：基于 2026 年 2 月公开产品信息的特征对比。",
      limit: "我们不做的：这不是赞助对比。自发布以来功能可能已更改。",
      note: "变异性说明：多平台工具快速迭代。请在每个工具的网站上验证当前功能。"
    },
    cta: {
      title: "尝试 TikTok 原生分析",
      primary: "开始免费试用",
      secondary: "探索演示"
    }
  }
};

export const TubeSpannerComparePage = ({ 
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

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans text-gray-900 dark:text-white selection:bg-[#1AAE82]/30 transition-colors duration-300">
      <SEO 
        title={t.meta.title}
        description={t.meta.description}
        keywords={["owlseer vs tubespanner", "tubespanner alternative", "tiktok analytics tool", "multi-platform analytics"]}
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
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1AAE82]/10 text-[#1AAE82] text-xs font-bold uppercase tracking-wider mb-6 border border-[#1AAE82]/20">
              <Scale className="w-3 h-3" /> Comparison
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
                onClick={() => onNavigate('/simulation')}
                className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-full font-medium transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" /> {t.hero.ctaSecondary}
              </button>
            </div>
          </motion.div>
        </section>

        {/* TL;DR Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-24">
          <div className="bg-[#FEFCE8] dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 rounded-2xl p-6 md:p-8 relative">
            <div className="absolute -top-3 -left-3 bg-yellow-400 text-yellow-900 p-2 rounded-full shadow-sm">
              <Zap className="w-5 h-5" fill="currentColor" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-700 dark:text-yellow-500 mb-3 ml-2">TL;DR</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed font-medium">
              {t.tldr.content.split(t.tldr.link).map((part: string, i: number, arr: string[]) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <button 
                      onClick={() => onNavigate('/simulation/trends')}
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

        {/* Comparison Table */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">{t.comparison.title}</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-slate-800/50">
                    <th className="p-4 md:p-6 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/3">{t.comparison.headers[0]}</th>
                    <th className="p-4 md:p-6 text-lg font-bold text-[#1AAE82] w-1/3 border-l border-r border-gray-100 dark:border-slate-800 bg-emerald-50/30 dark:bg-emerald-900/10">
                      {t.comparison.headers[1]}
                    </th>
                    <th className="p-4 md:p-6 text-lg font-bold text-gray-700 dark:text-gray-300 w-1/3">
                      {t.comparison.headers[2]}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                  {t.comparison.rows.map((row: any, i: number) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 md:p-6 font-medium text-gray-900 dark:text-white">
                        {row.feature}
                      </td>
                      <td className="p-4 md:p-6 text-gray-800 dark:text-gray-200 border-l border-r border-gray-100 dark:border-slate-800 bg-emerald-50/10 dark:bg-emerald-900/5 font-medium">
                        {row.owlseer}
                      </td>
                      <td className="p-4 md:p-6 text-gray-600 dark:text-gray-400">
                        {row.tubespanner}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* When to Choose */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">{t.when.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Choose OwlSeer */}
            <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Target size={120} className="text-[#1AAE82]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1AAE82] mb-6 relative z-10">{t.when.owlseer.title}</h3>
              <ul className="space-y-4 relative z-10">
                {t.when.owlseer.points.map((point: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#1AAE82] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Choose TubeSpanner */}
            <div className="bg-gray-50 dark:bg-slate-800/30 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Layers size={120} />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 relative z-10">{t.when.tubespanner.title}</h3>
              <ul className="space-y-4 relative z-10">
                {t.when.tubespanner.points.map((point: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8 italic max-w-2xl mx-auto">
            {t.when.coexist}
          </p>
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
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
            {t.cta.title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('/auth')}
              className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              {t.cta.primary}
            </button>
            <button 
              onClick={() => onNavigate('/simulation')}
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

/**
 * @page AI Tools Comparison Page
 * 
 * Based on T4-04-compare-ai-tools-comparison.md
 */

import React, { useState, useRef } from 'react';
import { useLanguage } from '../../contexts';
import { motion, useInView } from 'motion/react';
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
  Check, 
  X, 
  ArrowRight, 
  Sparkles, 
  BarChart2, 
  Youtube, 
  Zap,
  Info,
  BrainCircuit,
  LayoutDashboard
} from 'lucide-react';

// --- Local Content ---
const localContent = {
  en: {
    hero: {
      title: "AI Tools for TikTok: The Complete Landscape",
      lead: "From generic chat bots to specialized growth engines. Understand the trade-offs between General AI, Analytics Tools, and TikTok-Native solutions.",
      primaryCta: "Start Free Trial",
      secondaryCta: "Explore Sample"
    },
    insight: {
      title: "Core Distinction",
      content: "The market is split: General AI writes text but lacks data. Analytics tools show data but can't write. OwlSeer bridges this gap by using your account signals to drive content generation.",
    },
    landscape: {
      title: "The Four Categories",
      categories: [
        {
          title: "General-Purpose AI",
          examples: "ChatGPT, Claude, Gemini",
          strengths: "Versatile text generation, brainstorming, editing.",
          weaknesses: "Blind to your actual data. No trend awareness. Zero personalization.",
          output: "Generic scripts that sound like everyone else.",
          icon: <BrainCircuit className="w-6 h-6 text-blue-400" />
        },
        {
          title: "TikTok Analytics",
          examples: "TikTok Native, Pentos, Exolyt",
          strengths: "Raw metrics, demographics, video-level stats.",
          weaknesses: "Data without direction. No content generation or strategy advice.",
          output: "Spreadsheets and charts without a plan.",
          icon: <BarChart2 className="w-6 h-6 text-purple-400" />
        },
        {
          title: "YouTube-First Tools",
          examples: "VidIQ, TubeSpanner",
          strengths: "Great for YouTube SEO and cross-platform management.",
          weaknesses: "TikTok features are often an afterthought. Shallow signal analysis.",
          output: "YouTube strategies forced onto TikTok.",
          icon: <Youtube className="w-6 h-6 text-red-400" />
        },
        {
          title: "TikTok-Native AI",
          examples: "OwlSeer",
          strengths: "30+ dedicated signals. Real-time trend prediction. Data-driven scripts.",
          weaknesses: "Specialized only for TikTok (for now).",
          output: "Ready-to-shoot scripts based on what's working now.",
          icon: <Zap className="w-6 h-6 text-[#1AAE82]" />
        }
      ]
    },
    matrix: {
      title: "Capability Matrix",
      columns: ["Capability", "General AI", "Analytics Tools", "YouTube-First", "OwlSeer"],
      rows: [
        { cap: "Script Generation", vals: ["Generic Text", "—", "—", "Data-Driven"] },
        { cap: "Signal Depth", vals: ["—", "Basic", "Basic", "30+ Signals"] },
        { cap: "Trend Prediction", vals: ["—", "Historical", "Lists", "Velocity + Comp"] },
        { cap: "Schedule", vals: ["Generic", "Historical", "Generic", "Heatmap"] },
        { cap: "Diagnosis", vals: ["—", "Metrics", "Overview", "Signal-Level"] },
        { cap: "AI Copilot", vals: ["Yes (No Data)", "—", "—", "Yes (With Data)"] },
        { cap: "Reports", vals: ["—", "Manual", "Partial", "Automated"] },
        { cap: "Personalization", vals: ["None", "Limited", "Limited", "Deep"] }
      ]
    },
    honest: {
      title: "The Honest Verdict",
      p1: "OwlSeer isn't for everyone. If you're a YouTuber first, stick with VidIQ. If you just want free brainstorming, use ChatGPT.",
      p2: "But if TikTok is your battleground, you need a specialized weapon. OwlSeer is the only tool that connects the dots between your data, current trends, and the scripts you write.",
      p3: "We chose depth over breadth. We don't do everything — we do TikTok mastery."
    },
    boundary: {
      note: "Transparency: Comparison based on public features as of Feb 2026. We respect our competitors; this is simply a guide to finding the right tool for your specific needs."
    },
    cta: {
      title: "Experience the Difference",
      primary: "Start Free Trial",
      secondary: "View Sample"
    }
  },
  zh: {
    hero: {
      title: "TikTok AI 工具全景图",
      lead: "从通用聊天机器人到专用增长引擎。了解通用 AI、分析工具和 TikTok 原生解决方案之间的权衡。",
      primaryCta: "开始免费试用",
      secondaryCta: "探索演示"
    },
    insight: {
      title: "核心区别",
      content: "市场是分裂的：通用 AI 能写文本但缺数据；分析工具由数据但不会写。OwlSeer 通过利用你的账户信号驱动内容生成，架起了这座桥梁。",
    },
    landscape: {
      title: "四大类别",
      categories: [
        {
          title: "通用型 AI",
          examples: "ChatGPT, Claude, Gemini",
          strengths: "多功能文本生成、头脑风暴、润色。",
          weaknesses: "对你的数据一无所知。无趋势感知。零个性化。",
          output: "听起来像其他人的通用脚本。",
          icon: <BrainCircuit className="w-6 h-6 text-blue-400" />
        },
        {
          title: "TikTok 分析工具",
          examples: "TikTok 原生, Pentos, Exolyt",
          strengths: "原始指标、人口统计、视频级数据。",
          weaknesses: "有数据无方向。没有内容生成或策略建议。",
          output: "没有计划的表格和图表。",
          icon: <BarChart2 className="w-6 h-6 text-purple-400" />
        },
        {
          title: "YouTube 优先工具",
          examples: "VidIQ, TubeSpanner",
          strengths: "擅长 YouTube SEO 和跨平台管理。",
          weaknesses: "TikTok 功能通常是事后补充。信号分析浅薄。",
          output: "强加于 TikTok 的 YouTube 策略。",
          icon: <Youtube className="w-6 h-6 text-red-400" />
        },
        {
          title: "TikTok 原生 AI",
          examples: "OwlSeer",
          strengths: "30+ 专用信号。实时趋势预测。数据驱动脚本。",
          weaknesses: "目前仅专注于 TikTok。",
          output: "基于当前有效策略的可拍摄脚本。",
          icon: <Zap className="w-6 h-6 text-[#1AAE82]" />
        }
      ]
    },
    matrix: {
      title: "能力矩阵",
      columns: ["能力", "通用 AI", "分析工具", "YouTube 优先", "OwlSeer"],
      rows: [
        { cap: "脚本生成", vals: ["通用文本", "—", "—", "数据驱动"] },
        { cap: "信号深度", vals: ["—", "基础", "基础", "30+ 信号"] },
        { cap: "趋势预测", vals: ["—", "历史数据", "列表", "速度 + 竞争"] },
        { cap: "发布排期", vals: ["通用", "历史数据", "通用", "热力图"] },
        { cap: "问题诊断", vals: ["—", "指标", "概览", "信号级"] },
        { cap: "AI Copilot", vals: ["是 (无数据)", "—", "—", "是 (带数据)"] },
        { cap: "周报", vals: ["—", "手动", "部分", "全自动"] },
        { cap: "个性化", vals: ["无", "有限", "有限", "深度"] }
      ]
    },
    honest: {
      title: "诚恳的结论",
      p1: "OwlSeer 不适合所有人。如果你是 YouTube 优先，请坚持使用 VidIQ。如果你只想要免费的头脑风暴，请使用 ChatGPT。",
      p2: "但如果 TikTok 是你的主战场，你需要一件专用武器。OwlSeer 是唯一能连接你的数据、当前趋势和你编写的脚本的工具。",
      p3: "我们选择了深度而非广度。我们不做所有事——我们只做 TikTok 精通。"
    },
    boundary: {
      note: "透明度：对比基于 2026 年 2 月的公开功能。我们尊重竞争对手；这只是帮助你找到适合需求的工具的指南。"
    },
    cta: {
      title: "体验不同之处",
      primary: "开始免费试用",
      secondary: "查看演示"
    }
  }
};

// --- Components ---

const LandscapeCard = ({ item, index }: { item: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group rounded-[28px] border border-white/85 bg-white/75 p-6 shadow-[0_26px_76px_-54px_rgba(15,23,42,0.92)] backdrop-blur-xl transition-all duration-300 hover:border-emerald-200/80 dark:border-white/10 dark:bg-slate-900/58 dark:hover:border-emerald-500/30 sm:p-8"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-slate-700 transition-transform duration-300 group-hover:scale-105 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
          {item.icon}
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.examples}</p>
        </div>
      </div>
      
      <div className="space-y-5">
        <div>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <Check className="w-3 h-3" strokeWidth={3} /> Strengths
          </span>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.strengths}</p>
        </div>
        <div>
          <span className="text-xs font-bold text-red-500 dark:text-red-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <X className="w-3 h-3" strokeWidth={3} /> Weaknesses
          </span>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.weaknesses}</p>
        </div>
        <div className="border-t border-slate-100 pt-5 dark:border-white/10">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">Output Reality</span>
          <p className="text-sm font-medium italic text-slate-900 dark:text-white">"{item.output}"</p>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureMatrix = ({ content }: { content: any }) => {
  return (
    <div className="overflow-x-auto rounded-[28px] border border-white/85 bg-white/75 shadow-[0_26px_76px_-54px_rgba(15,23,42,0.92)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/58">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-white/55 dark:bg-slate-900/35">
          <tr>
            {content.columns.map((col: string, idx: number) => (
              <th key={idx} className={`p-5 text-base font-bold whitespace-nowrap text-slate-900 dark:text-white sm:p-6 ${idx === 4 ? 'text-[#1AAE82] bg-[#1AAE82]/8 rounded-t-2xl' : ''}`}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-white/10">
          {content.rows.map((row: any, idx: number) => (
            <tr key={idx} className="group transition-colors hover:bg-slate-50/65 dark:hover:bg-slate-800/30">
              <td className="p-5 font-bold whitespace-nowrap text-slate-900 dark:text-white sm:p-6">{row.cap}</td>
              <td className="p-5 text-center font-medium text-slate-500 dark:text-slate-400 sm:p-6">{row.vals[0]}</td>
              <td className="p-5 text-center font-medium text-slate-500 dark:text-slate-400 sm:p-6">{row.vals[1]}</td>
              <td className="p-5 text-center font-medium text-slate-500 dark:text-slate-400 sm:p-6">{row.vals[2]}</td>
              <td className="p-5 text-center font-bold text-[#1AAE82] bg-[#1AAE82]/8 shadow-[inset_0_0_20px_rgba(26,174,130,0.06)] group-last:rounded-b-2xl sm:p-6">
                {row.vals[3]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export function AiToolsComparisonPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  // SEO
  const seo = seoConfig.aiToolsComparison?.[language as 'en' | 'zh'] || seoConfig.aiToolsComparison?.en || {
    title: 'AI TikTok Tools Compared | OwlSeer',
    description: 'Compare AI tools for TikTok: ChatGPT, analytics platforms, YouTube-first tools, and OwlSeer. Feature matrix with honest trade-offs.',
    keywords: ['ai tools tiktok comparison', 'chatgpt tiktok', 'tiktok ai tools', 'tiktok content ai'],
    canonicalUrl: 'https://owlseer.com/vs/ai-tools-comparison'
  };

  // Local Content
  const content = localContent[language as 'en' | 'zh'] || localContent.en;

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans selection:bg-[#1AAE82]/30 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={getCanonicalUrl('/vs/ai-tools-comparison', language)}
        lang={language}
        alternates={generateAlternates('/vs/ai-tools-comparison')}
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
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-300/55 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1AAE82] backdrop-blur-md dark:border-emerald-500/35 dark:bg-slate-900/60">
                <LayoutDashboard className="h-3.5 w-3.5" /> Market Analysis
              </div>
              <h1 className="mx-auto mb-8 max-w-5xl font-display text-5xl font-bold leading-[1.1] text-gray-900 dark:text-white md:text-7xl lg:text-8xl">
                {content.hero.title}
              </h1>
              <p className="mx-auto mb-12 max-w-3xl text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 md:text-2xl">
                {content.hero.lead}
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
                <button
                  onClick={() => handleNavigate('auth')}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#059669] to-[#10b981] px-8 py-4 text-base font-semibold text-white shadow-[0_20px_48px_-30px_rgba(16,185,129,0.9)] transition-all duration-300 hover:from-[#047857] hover:to-[#059669] sm:text-lg"
                >
                  {content.hero.primaryCta}
                </button>
                <button
                  onClick={() => handleNavigate('landing')}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/85 bg-white/75 px-8 py-4 text-base font-semibold text-gray-800 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.85)] backdrop-blur-md transition-all duration-300 hover:bg-white dark:border-white/12 dark:bg-slate-900/60 dark:text-white dark:hover:bg-slate-900/75 sm:text-lg"
                >
                  {content.hero.secondaryCta}
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10 mt-[-1px] overflow-hidden bg-[#f6f7fb] dark:bg-[#070c14]">
          {/* 2. CORE INSIGHT */}
          <section className="perf-content-auto mx-auto mb-24 max-w-4xl px-4 pt-20 sm:mb-28 sm:px-6 lg:px-8 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[30px] border border-white/85 bg-white/72 p-7 shadow-[0_30px_85px_-58px_rgba(15,23,42,0.95)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 sm:p-10"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-[#1AAE82]" />
              <div className="flex items-start gap-5 sm:gap-6">
                <div className="hidden shrink-0 rounded-xl bg-[#1AAE82]/10 p-3 text-[#1AAE82] md:block">
                  <Info className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-[#1AAE82]">{content.insight.title}</h3>
                  <p className="font-display text-lg leading-relaxed text-slate-800 dark:text-slate-200 sm:text-xl">
                    {content.insight.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* 3. LANDSCAPE SECTION */}
          <section className="perf-content-auto mx-auto mb-24 max-w-7xl px-4 sm:mb-28 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-14">
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                {content.landscape.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
              {content.landscape.categories.map((cat: any, idx: number) => (
                <LandscapeCard key={idx} item={cat} index={idx} />
              ))}
            </div>
          </section>

          {/* 4. MATRIX SECTION */}
          <section className="perf-content-auto mx-auto mb-24 max-w-7xl px-4 sm:mb-28 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-14">
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                {content.matrix.title}
              </h2>
            </div>
            <FeatureMatrix content={content.matrix} />
          </section>

          {/* 5. HONEST TAKE SECTION */}
          <section className="perf-content-auto mx-auto mb-24 max-w-6xl px-4 sm:mb-28 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[34px] border border-white/85 bg-gradient-to-br from-white/88 via-white/72 to-emerald-50/65 p-8 text-center shadow-[0_34px_95px_-62px_rgba(15,23,42,0.95)] backdrop-blur-xl dark:border-white/10 dark:from-slate-900/80 dark:via-slate-900/65 dark:to-emerald-900/15 md:p-14">
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent dark:via-emerald-500/45" />
              <h2 className="mb-8 font-display text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                {content.honest.title}
              </h2>
              <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg md:text-xl md:font-light">
                <p>{content.honest.p1}</p>
                <p className="font-medium text-slate-900 dark:text-white">{content.honest.p2}</p>
                <p>{content.honest.p3}</p>
              </div>
            </div>
          </section>

          {/* 6. BOUNDARY & CTA */}
          <section className="perf-content-auto bg-gradient-to-b from-[#f6f7fb] via-[#ecfaf3] to-white px-4 pb-24 text-center dark:from-[#070c14] dark:via-[#0b1721] dark:to-slate-900 sm:px-6 sm:pb-28 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 inline-block rounded-2xl border border-white/85 bg-white/80 p-5 text-left shadow-[0_20px_44px_-34px_rgba(15,23,42,0.9)] backdrop-blur-md dark:border-white/10 dark:bg-slate-900/62">
                <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {content.boundary.note}
                </p>
              </div>

              <h2 className="mb-8 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
                {content.cta.title}
              </h2>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
                <button
                  onClick={() => handleNavigate('auth')}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#059669] to-[#10b981] px-10 py-4 text-base font-semibold text-white shadow-[0_22px_50px_-32px_rgba(16,185,129,0.9)] transition-all duration-300 hover:from-[#047857] hover:to-[#059669] sm:text-lg"
                >
                  {content.cta.primary}
                </button>
                <button
                  onClick={() => handleNavigate('landing')}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/85 bg-white/82 px-10 py-4 text-base font-semibold text-slate-800 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.85)] backdrop-blur-md transition-all duration-300 hover:bg-white dark:border-white/12 dark:bg-slate-900/62 dark:text-white dark:hover:bg-slate-900/75 sm:text-lg"
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

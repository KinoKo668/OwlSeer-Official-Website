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
import { seoConfig, generateAlternates } from '../../data/seoConfig';
import { translations } from '../../data/translations';
import { 
  Check, 
  X, 
  ArrowRight, 
  Sparkles, 
  BarChart2, 
  Youtube, 
  Zap,
  Info
} from 'lucide-react';

// --- Local Content ---
const localContent = {
  en: {
    hero: {
      title: "AI Tools for TikTok Content: A Comprehensive Comparison",
      lead: "From general-purpose AI (ChatGPT, Claude) to specialized tools (OwlSeer, VidIQ), this page compares the AI landscape for TikTok content creation — what each tool does well and where it falls short.",
      primaryCta: "Start Free Trial",
      secondaryCta: "Explore Demo"
    },
    tldr: "General-purpose AI generates text without account data. TikTok analytics tools provide metrics without content generation. OwlSeer bridges both — analyzing your account through 30+ signals and generating personalized scripts visible in the Script Studio grid. This comparison maps the landscape honestly.",
    landscape: {
      title: "The AI Tool Landscape for TikTok",
      categories: [
        {
          title: "Category 1 — General-Purpose AI",
          examples: "(ChatGPT, Claude, Gemini)",
          strengths: "Versatile text generation, brainstorming, editing.",
          weaknesses: "No access to your TikTok data, no trend awareness, no audience personalization.",
          output: "Generic scripts that work for any creator — which means they are optimized for none.",
          icon: <Sparkles className="w-6 h-6 text-blue-500" />
        },
        {
          title: "Category 2 — TikTok Analytics Tools",
          examples: "(TikTok Creator Tools, Pentos, Exolyt)",
          strengths: "Platform metrics, audience demographics, video-level analytics.",
          weaknesses: "Data without recommendations, no script generation, no trend prediction with timing.",
          output: "Numbers without a strategy.",
          icon: <BarChart2 className="w-6 h-6 text-purple-500" />
        },
        {
          title: "Category 3 — YouTube-First Tools",
          examples: "(VidIQ, TubeSpanner)",
          strengths: "Cross-platform coverage, YouTube SEO expertise.",
          weaknesses: "TikTok features are secondary, limited signal depth, no TikTok-specific script generation.",
          output: "YouTube-optimized insights applied to a different platform.",
          icon: <Youtube className="w-6 h-6 text-red-500" />
        },
        {
          title: "Category 4 — TikTok-Native AI Strategy",
          examples: "(OwlSeer)",
          strengths: "30+ TikTok-specific signals, AI trend prediction, data-driven script generation, automated reports.",
          weaknesses: "TikTok only — not a multi-platform solution.",
          output: "Personalized TikTok strategy from data to ready-to-shoot scripts.",
          icon: <Zap className="w-6 h-6 text-[#1AAE82]" />
        }
      ]
    },
    matrix: {
      title: "Feature Matrix",
      columns: ["Capability", "General AI", "Analytics Tools", "YouTube-First", "OwlSeer"],
      rows: [
        { cap: "Script generation", vals: ["Generic text", "None", "None", "Data-driven, personalized"] },
        { cap: "TikTok signal depth", vals: ["None", "Basic metrics", "Basic metrics", "30+ weighted signals"] },
        { cap: "Trend prediction", vals: ["No real-time data", "Historical trends", "Trending lists", "AI velocity + competition"] },
        { cap: "Posting schedule", vals: ["Generic advice", "Historical best times", "Generic best times", "Personalized heatmap"] },
        { cap: "Content diagnosis", vals: ["Generic feedback", "Performance metrics", "Performance overview", "Signal-level detection"] },
        { cap: "AI conversation", vals: ["Yes (no data)", "None", "None", "Yes (with account data)"] },
        { cap: "Weekly reports", vals: ["None", "Manual export", "Some automation", "Automated + recommendations"] },
        { cap: "Audience personalization", vals: ["None", "Limited", "Limited", "Deep (30+ signals)"] }
      ]
    },
    honest: {
      title: "The Honest Take",
      p1: "OwlSeer is not the right tool for everyone. If you primarily create for YouTube, VidIQ is better. If you need multi-platform analytics, TubeSpanner or Pentos cover more ground. If you want free brainstorming and editing, ChatGPT or Claude work well.",
      p2: "OwlSeer's advantage is specific: it is the only tool that connects TikTok account data → signal analysis → trend prediction → script generation → scheduling in a single workflow. If TikTok is where you invest your content effort, this integration saves hours and produces better-targeted content.",
      p3: "The trade-off is platform exclusivity. OwlSeer does one platform deeply, not many platforms broadly."
    },
    boundary: {
      note: "Data we use: Comparisons are based on publicly available product information as of February 2026. We represent competitor features in good faith. This is not a sponsored or affiliate comparison. Features evolve — verify directly with each tool."
    },
    cta: {
      title: "See the Difference in Action",
      primary: "Start Free Trial",
      secondary: "Explore Demo"
    }
  },
  zh: {
    hero: {
      title: "TikTok 内容 AI 工具：全面对比",
      lead: "从通用 AI (ChatGPT, Claude) 到专用工具 (OwlSeer, VidIQ)，本页面对比了 TikTok 内容创作的 AI 版图——每款工具的优势和不足。",
      primaryCta: "开始免费试用",
      secondaryCta: "探索演示"
    },
    tldr: "通用 AI 生成没有账号数据的文本。TikTok 分析工具提供没有内容生成的指标。OwlSeer 连接两者——通过 30+ 信号分析您的账号，并在脚本工作室网格中生成个性化脚本。此对比诚实地映射了这一版图。",
    landscape: {
      title: "TikTok AI 工具版图",
      categories: [
        {
          title: "类别 1 — 通用 AI",
          examples: "(ChatGPT, Claude, Gemini)",
          strengths: "多功能文本生成、头脑风暴、编辑。",
          weaknesses: "无法访问您的 TikTok 数据，无趋势感知，无受众个性化。",
          output: "适合任何创作者的通用脚本——这意味着它们不针对任何人优化。",
          icon: <Sparkles className="w-6 h-6 text-blue-500" />
        },
        {
          title: "类别 2 — TikTok 分析工具",
          examples: "(TikTok Creator Tools, Pentos, Exolyt)",
          strengths: "平台指标、受众人口统计、视频级分析。",
          weaknesses: "有数据无建议，无脚本生成，无带时机的趋势预测。",
          output: "没有策略的数字。",
          icon: <BarChart2 className="w-6 h-6 text-purple-500" />
        },
        {
          title: "类别 3 — YouTube 优先工具",
          examples: "(VidIQ, TubeSpanner)",
          strengths: "跨平台覆盖，YouTube SEO 专业知识。",
          weaknesses: "TikTok 功能是次要的，信号深度有限，无 TikTok 专用脚本生成。",
          output: "应用于不同平台的 YouTube 优化洞察。",
          icon: <Youtube className="w-6 h-6 text-red-500" />
        },
        {
          title: "类别 4 — TikTok 原生 AI 策略",
          examples: "(OwlSeer)",
          strengths: "30+ TikTok 专用信号，AI 趋势预测，数据驱动脚本生成，自动化报告。",
          weaknesses: "仅限 TikTok——不是多平台解决方案。",
          output: "从数据到可拍摄脚本的个性化 TikTok 策略。",
          icon: <Zap className="w-6 h-6 text-[#1AAE82]" />
        }
      ]
    },
    matrix: {
      title: "功能矩阵",
      columns: ["能力", "通用 AI", "分析工具", "YouTube 优先", "OwlSeer"],
      rows: [
        { cap: "脚本生成", vals: ["通用文本", "无", "无", "数据驱动，个性化"] },
        { cap: "TikTok 信号深度", vals: ["无", "基础指标", "基础指标", "30+ 加权信号"] },
        { cap: "趋势预测", vals: ["无实时数据", "历史趋势", "趋势列表", "AI 速度 + 竞争"] },
        { cap: "发布时间表", vals: ["通用建议", "历史最佳时间", "通用最佳时间", "个性化热力图"] },
        { cap: "内容诊断", vals: ["通用反馈", "表现指标", "表现概览", "信号级问题检测"] },
        { cap: "AI 对话", vals: ["是 (无数据)", "无", "无", "是 (带账号数据)"] },
        { cap: "周报", vals: ["无", "手动导出", "部分自动化", "全自动 + 建议"] },
        { cap: "受众个性化", vals: ["无", "有限", "有限", "深度 (30+ 信号)"] }
      ]
    },
    honest: {
      title: "诚实评价",
      p1: "OwlSeer 并不适合所有人。如果您主要为 YouTube 创作，VidIQ 更好。如果您需要多平台分析，TubeSpanner 或 Pentos 覆盖面更广。如果您想要免费的头脑风暴和编辑，ChatGPT 或 Claude 很好用。",
      p2: "OwlSeer 的优势是具体的：它是唯一在单一工作流中连接 TikTok 账号数据 → 信号分析 → 趋势预测 → 脚本生成 → 排期的工具。如果 TikTok 是您投入内容精力的地方，这种整合可以节省数小时并产出针对性更好的内容。",
      p3: "权衡是平台排他性。OwlSeer 深度专注于一个平台，而不是广泛覆盖多个平台。"
    },
    boundary: {
      note: "我们使用的数据：对比基于 2026 年 2 月的公开产品信息。我们真诚地展示竞品功能。这不是赞助或联盟对比。功能会演变——请直接向各工具核实。"
    },
    cta: {
      title: "看看实际差异",
      primary: "开始免费试用",
      secondary: "探索演示"
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
      className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-xl">
          {item.icon}
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.examples}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Strengths</span>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.strengths}</p>
        </div>
        <div>
          <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Weaknesses</span>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.weaknesses}</p>
        </div>
        <div className="pt-4 border-t border-gray-100 dark:border-slate-800">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Output</span>
          <p className="text-sm font-medium text-gray-900 dark:text-white mt-1 italic">"{item.output}"</p>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureMatrix = ({ content }: { content: any }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-gray-50 dark:bg-slate-800/50">
            {content.columns.map((col: string, idx: number) => (
              <th key={idx} className={`p-4 font-bold text-gray-900 dark:text-white whitespace-nowrap ${idx === 4 ? 'text-[#1AAE82]' : ''}`}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
          {content.rows.map((row: any, idx: number) => (
            <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-slate-800/30 transition-colors">
              <td className="p-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{row.cap}</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">{row.vals[0]}</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">{row.vals[1]}</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">{row.vals[2]}</td>
              <td className="p-4 font-bold text-[#1AAE82] bg-[#1AAE82]/5">{row.vals[3]}</td>
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
    canonicalUrl: 'https://owlseer.com/compare/ai-tools-comparison'
  };

  // Local Content
  const content = localContent[language as 'en' | 'zh'] || localContent.en;

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans selection:bg-[#1AAE82]/30 text-gray-900 dark:text-gray-100">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        lang={language}
        alternates={generateAlternates('/compare/ai-tools-comparison')}
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
        {/* 1. HERO SECTION */}
        <section className="relative pt-20 pb-20 overflow-hidden">
           <div className="absolute inset-0 bg-white dark:bg-[#020617]">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#1AAE82] opacity-20 blur-[100px]"></div>
           </div>

           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
             >
               <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6 leading-tight">
                 {content.hero.title}
               </h1>
               <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                 {content.hero.lead}
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button 
                   onClick={() => handleNavigate('auth')}
                   className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl shadow-lg shadow-[#1AAE82]/20 transition-all hover:-translate-y-1"
                 >
                   {content.hero.primaryCta}
                 </button>
                 <button 
                   onClick={() => handleNavigate('landing')}
                   className="px-8 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-all"
                 >
                   {content.hero.secondaryCta}
                 </button>
               </div>
             </motion.div>
           </div>
        </section>

        {/* 2. TL;DR SECTION */}
        <section className="py-12 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 flex gap-4 items-start">
              <div className="p-2 bg-[#1AAE82]/10 rounded-lg text-[#1AAE82] shrink-0 mt-1">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1AAE82] uppercase tracking-wider mb-2">TL;DR</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {content.tldr}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. LANDSCAPE SECTION */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#020617]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">
                {content.landscape.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.landscape.categories.map((cat: any, idx: number) => (
                <LandscapeCard key={idx} item={cat} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. MATRIX SECTION */}
        <section className="py-24 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">
                {content.matrix.title}
              </h2>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-xl overflow-hidden">
              <FeatureMatrix content={content.matrix} />
            </div>
          </div>
        </section>

        {/* 5. HONEST TAKE SECTION */}
        <section className="py-24 bg-gray-50 dark:bg-slate-800/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-8">
              {content.honest.title}
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>{content.honest.p1}</p>
              <p className="font-medium text-gray-900 dark:text-white">{content.honest.p2}</p>
              <p>{content.honest.p3}</p>
            </div>
          </div>
        </section>

        {/* 6. BOUNDARY & CTA */}
        <section className="py-24 bg-[#111827] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1AAE82]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12 text-left">
              <h4 className="text-[#1AAE82] font-bold mb-2 text-sm uppercase tracking-wider">Transparency Note</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {content.boundary.note}
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">
              {content.cta.title}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleNavigate('auth')}
                className="px-10 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl shadow-lg shadow-[#1AAE82]/30 transition-all hover:-translate-y-1"
              >
                {content.cta.primary}
              </button>
              <button 
                onClick={() => handleNavigate('landing')}
                className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all"
              >
                {content.cta.secondary}
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

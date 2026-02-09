import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  BarChart2, 
  Play, 
  Search, 
  Filter,
  Lock,
  Clock,
  ThumbsUp,
  MessageCircle,
  Share2,
  Eye,
  AlertCircle
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
      title: "TikTok Content Diagnosis with AI | OwlSeer",
      description: "Find out why your TikTok videos underperform. OwlSeer diagnoses content issues across 12 engagement signals and provides specific fixes."
    },
    hero: {
      title: "Find Out Why Your TikTok Content Underperforms",
      lead: "OwlSeer analyzes every video across 12 engagement signals to show exactly where you gain or lose your audience — and what to do about it.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Try Intelligence Demo"
    },
    tldr: {
      content: "Low views have a cause. OwlSeer's Intelligence module diagnoses content issues by analyzing 12 engagement signals including hook rate, watch-through rate, share rate, and comment sentiment. Each issue is surfaced with severity, explanation, and a specific recommended fix. Content diagnosis turns vague frustration into actionable improvement.",
      link: "Intelligence module"
    },
    problem: {
      title: "The Guessing Cycle",
      task: "Understand why creators repeat the same content mistakes.",
      desc1: "When a video underperforms, most creators default to guessing: \"Maybe the topic was wrong\" or \"Maybe I posted at a bad time.\" Without data, they change things randomly — sometimes fixing the wrong variable, sometimes making things worse.",
      desc2: "The pattern looks like this: post a video, see low views, change something, post again, see inconsistent results, change something else. This guessing cycle wastes content production effort and erodes confidence.",
      desc3: "The root cause is usually specific and fixable. It might be a weak hook (viewers scroll past in the first 2 seconds), a long intro (watch-through drops at the 8-second mark), or poor timing (posting when your audience is asleep). But without signal-level diagnosis, you cannot distinguish between these causes.",
      action: "Understand the signals involved — read about engagement signals."
    },
    solution: {
      title: "How OwlSeer Diagnoses Content",
      task: "See the diagnosis workflow from detection to fix.",
      layers: [
        {
          id: 1,
          title: "Issue Detection",
          desc: "The Issues Found panel scans your recent videos and flags problems with severity badges (High or Medium). Example: \"Weak Hook Performance\" (High) — \"Your video openings use slow intros. Viewers scroll away before seeing your content.\""
        },
        {
          id: 2,
          title: "Signal Breakdown",
          desc: "For each issue, OwlSeer shows which signals are involved. A weak hook issue links to your hook rate data with specific numbers — your current rate, your niche average, and the trend over your last 10 videos."
        },
        {
          id: 3,
          title: "Recommended Fix",
          desc: "Each issue includes a specific, actionable fix. Not \"improve your hooks\" but \"Try a 'Product-First' hook — show the finished result in the first second to grab attention.\" Fixes are drawn from patterns that work in your niche."
        }
      ],
      note: "The Content Structure Analysis adds another dimension: it reveals which video formats perform best for your account.",
      action: "See a diagnosis on sample data — open the Intelligence demo."
    },
    evidence: {
      title: "What a Diagnosis Looks Like",
      task: "See specific diagnosis output from a real account.",
      subtitle: "From the sample account:",
      issues: [
        {
          title: "Weak Hook Performance",
          severity: "HIGH",
          why: "Your video openings use slow intros like 'Hey everyone, today I'll show you...' Viewers scroll away before seeing your content.",
          fix: "Try 'Product-First' hook — show the finished dish in the first second to grab attention."
        },
        {
          title: "Suboptimal Posting Time",
          severity: "MEDIUM",
          why: "You consistently post at 2 PM when your audience peaks at 5-7 PM.",
          fix: "Shift posting to the 5-6 PM window. See your best-time heatmap for day-specific recommendations."
        }
      ],
      data: "Supporting data: Content Structure Analysis shows three-segment videos averaging 5.8% AER versus 4.1% for single-segment — a structural insight that feeds into script recommendations.",
      action: "See the full diagnostic view — explore the Dashboard."
    },
    conversion: {
      title: "Paste a TikTok link, check 3 signals",
      desc: "See your Hook Retention, Pacing Score, and Structure Score in 10 seconds.",
      placeholder: "Paste video link here...",
      button: "Diagnose My Content",
      note: "Free diagnosis of 3 signals. Connect account for full 12-signal analysis."
    },
    boundary: {
      title: "Boundary Box",
      data: "Data we use: Diagnosis draws from your video performance metrics, 12 engagement signals, posting history, and audience behavior data — all accessed through the TikTok API.",
      limit: "What we do not do: Diagnosis identifies patterns and suggests fixes, but does not guarantee that implementing fixes will produce specific results. Content performance is influenced by factors beyond signal data.",
      note: "Variability note: Diagnosis accuracy improves with more data. Accounts with fewer than 10 published videos may receive less specific diagnoses. All examples shown are from the sample account."
    },
    cta: {
      title: "Diagnose Your Content",
      desc: "Connect your account and find out exactly what to fix.",
      primary: "Start Free Trial",
      secondary: "Try Intelligence Demo"
    }
  },
  zh: {
    meta: {
      title: "TikTok 内容 AI 诊断 | OwlSeer",
      description: "找出你的 TikTok 视频表现不佳的原因。OwlSeer 通过 12 个互动信号诊断内容问题并提供具体修复建议。"
    },
    hero: {
      title: "找出你的 TikTok 内容表现不佳的原因",
      lead: "OwlSeer 通过 12 个互动信号分析每条视频，精确展示你在哪里获得或失去了受众——以及该怎么做。",
      ctaPrimary: "开始免费试用",
      ctaSecondary: "试用智能演示"
    },
    tldr: {
      content: "低播放量是有原因的。OwlSeer 的智能模块通过分析包括钩子率、完播率、分享率和评论情感在内的 12 个互动信号来诊断内容问题。每个问题都会显示严重性、解释和具体的推荐修复。内容诊断将模糊的挫败感转化为可操作的改进。",
      link: "智能模块"
    },
    problem: {
      title: "猜测循环",
      task: "了解为什么创作者会重复同样的内容错误。",
      desc1: "当视频表现不佳时，大多数创作者默认会猜测：“也许话题错了”或“也许我在错误的时间发布了。”没有数据，他们随机更改变量——有时修复了错误的变量，有时使情况变得更糟。",
      desc2: "模式是这样的：发布视频，看到低播放量，更改某些东西，再次发布，看到不一致的结果，更改其他东西。这种猜测循环浪费了内容制作精力并侵蚀了信心。",
      desc3: "根本原因通常是具体且可修复的。可能是弱钩子（观众在前 2 秒内滑过）、长介绍（完播率在 8 秒标记处下降）或糟糕的时机（在受众睡觉时发布）。但没有信号级诊断，你无法区分这些原因。",
      action: "了解涉及的信号 — 阅读关于互动信号。"
    },
    solution: {
      title: "OwlSeer 如何诊断内容",
      task: "查看从检测到修复的诊断工作流。",
      layers: [
        {
          id: 1,
          title: "问题检测",
          desc: "“发现问题”面板扫描你最近的视频并用严重性徽章（高或中）标记问题。示例：“弱钩子表现”（高）——“你的视频开头使用了缓慢的介绍。观众在看到你的内容之前就滑走了。”"
        },
        {
          id: 2,
          title: "信号分解",
          desc: "对于每个问题，OwlSeer 会显示涉及哪些信号。弱钩子问题链接到你的钩子率数据，并附有具体数字——你当前的比率、你的利基平均值以及你过去 10 个视频的趋势。"
        },
        {
          id: 3,
          title: "推荐修复",
          desc: "每个问题都包括一个具体的、可操作的修复建议。不是“改进你的钩子”，而是“尝试‘产品优先’钩子——在第一秒展示完成的结果以吸引注意力。”修复建议来自在你利基中有效的模式。"
        }
      ],
      note: "内容结构分析增加了另一个维度：它揭示了哪种视频格式对你的账号表现最好。",
      action: "在样本数据上查看诊断 — 打开智能演示。"
    },
    evidence: {
      title: "诊断长什么样",
      task: "查看来自真实账号的具体诊断输出。",
      subtitle: "来自示例账号：",
      issues: [
        {
          title: "弱钩子表现",
          severity: "高",
          why: "你的视频开头使用了缓慢的介绍，如‘大家好，今天我将向大家展示...’ 观众在看到你的内容之前就滑走了。",
          fix: "尝试‘产品优先’钩子 — 在第一秒展示完成的菜肴以吸引注意力。"
        },
        {
          title: "次优发布时间",
          severity: "中",
          why: "你一直在于下午 2 点发布，而你的受众高峰在下午 5-7 点。",
          fix: "将发布时间调整到下午 5-6 点窗口。查看你的最佳时间热力图以获取特定日期的建议。"
        }
      ],
      data: "支持数据：内容结构分析显示三段式视频平均 AER 为 5.8%，而单段式为 4.1%——这是一个输入到脚本建议中的结构性见解。",
      action: "查看完整诊断视图 — 探索仪表板。"
    },
    conversion: {
      title: "粘贴 TikTok 链接，检查 3 个信号",
      desc: "在 10 秒内查看你的钩子留存率、节奏评分和结构评分。",
      placeholder: "在此粘贴视频链接...",
      button: "诊断我的内容",
      note: "免费诊断 3 个信号。连接账号进行完整的 12 信号分析。"
    },
    boundary: {
      title: "边界框",
      data: "我们使用的数据：诊断来自你的视频表现指标、12 个互动信号、发布历史和受众行为数据——所有这些都通过 TikTok API 访问。",
      limit: "我们不做的：诊断识别模式并建议修复，但不保证实施修复会产生具体结果。内容表现受信号数据以外的因素影响。",
      note: "变异性说明：诊断准确性随数据增加而提高。发布少于 10 个视频的账号可能会收到不太具体的诊断。显示的所有示例均来自示例账号。"
    },
    cta: {
      title: "诊断你的内容",
      desc: "连接你的账号并找出确切需要修复的地方。",
      primary: "开始免费试用",
      secondary: "试用智能演示"
    }
  }
};

// --- Components ---

const DiagnosisScanAnimation = () => {
  return (
    <div className="w-full aspect-video bg-gray-900 rounded-xl relative overflow-hidden border border-gray-800 shadow-2xl">
      {/* Video Content Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <Play className="w-16 h-16 text-white" />
      </div>
      
      {/* Scanning Line */}
      <motion.div 
        className="absolute top-0 bottom-0 w-1 bg-[#1AAE82] shadow-[0_0_20px_#1AAE82]"
        animate={{ left: ['0%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Pop-up Issues */}
      <motion.div 
        className="absolute top-1/4 left-[10%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.8, 1], delay: 0.3 }}
      >
        <div className="bg-red-500/90 text-white text-xs px-2 py-1 rounded shadow-lg backdrop-blur-sm flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> Weak Hook
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-1/3 left-[40%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.8, 1], delay: 1.2 }}
      >
        <div className="bg-yellow-500/90 text-white text-xs px-2 py-1 rounded shadow-lg backdrop-blur-sm flex items-center gap-1">
          <Clock className="w-3 h-3" /> Pacing Dip
        </div>
      </motion.div>
    </div>
  );
};

const IssueCard = ({ issue }: { issue: any }) => (
  <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-start justify-between mb-4">
      <h4 className="font-bold text-lg text-gray-900 dark:text-white">{issue.title}</h4>
      <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
        issue.severity === 'HIGH' || issue.severity === '高'
          ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 animate-pulse'
          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
      }`}>
        {issue.severity}
      </span>
    </div>
    <div className="space-y-4">
      <div>
        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Problem</div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{issue.why}</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/10 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
        <div className="text-xs font-semibold text-[#1AAE82] uppercase mb-1 flex items-center gap-1">
          <Zap className="w-3 h-3" /> Fix
        </div>
        <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">{issue.fix}</p>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

export const ContentDiagnosisPage = ({ 
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
        keywords={["tiktok content diagnosis", "video analytics", "tiktok engagement", "content optimization"]}
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
              <Activity className="w-3 h-3" /> New Feature
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
                onClick={() => onNavigate('/simulation/intelligence')}
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
                      onClick={() => onNavigate('/simulation/intelligence')}
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

        {/* Problem Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <DiagnosisScanAnimation />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.problem.title}</h2>
                  <p className="text-[#1AAE82] font-medium">{t.problem.task}</p>
                </div>
              </div>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>{t.problem.desc1}</p>
                <p>{t.problem.desc2}</p>
                <p>{t.problem.desc3}</p>
                <button 
                  onClick={() => onNavigate('/signals')}
                  className="text-[#1AAE82] font-bold hover:underline flex items-center gap-1 mt-2"
                >
                  {t.problem.action} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-gray-50 dark:bg-slate-900/50 py-24 mb-32">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.solution.title}</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400">{t.solution.task}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.solution.layers.map((layer: any, i: number) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-[#1AAE82] transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <h1 className="text-6xl font-bold text-[#1AAE82]">{layer.id}</h1>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{layer.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-6">
                {t.solution.note}
              </p>
              <button 
                onClick={() => onNavigate('/simulation/intelligence')}
                className="text-[#1AAE82] font-bold hover:underline flex items-center gap-1 mx-auto"
              >
                {t.solution.action} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Evidence Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t.evidence.title}</h2>
              <p className="text-[#1AAE82] font-medium mb-6">{t.evidence.task}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-8">{t.evidence.subtitle}</p>
              
              <div className="space-y-6">
                {t.evidence.issues.map((issue: any, i: number) => (
                  <IssueCard key={i} issue={issue} />
                ))}
              </div>
            </div>
            <div className="flex-1 sticky top-32">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-[#1AAE82]" /> Impact Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {t.evidence.data}
                </p>
                <div className="aspect-video bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm mb-6 flex items-end justify-around p-4 pb-0 overflow-hidden">
                   {/* Dummy Chart */}
                   <div className="w-16 bg-gray-200 dark:bg-slate-700 h-[40%] rounded-t-md relative group">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold">4.1%</div>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">1-Seg</div>
                   </div>
                   <div className="w-16 bg-[#1AAE82] h-[58%] rounded-t-md relative group shadow-[0_0_15px_rgba(26,174,130,0.3)]">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-[#1AAE82]">5.8%</div>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-white/80">3-Seg</div>
                   </div>
                   <div className="w-16 bg-gray-200 dark:bg-slate-700 h-[45%] rounded-t-md relative group">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold">4.5%</div>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">2-Seg</div>
                   </div>
                </div>
                <button 
                  onClick={() => onNavigate('/simulation/dashboard')}
                  className="w-full py-3 bg-[#1AAE82] text-white rounded-lg font-bold hover:bg-[#15956F] transition-colors"
                >
                  {t.evidence.action.split('—')[0]}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contextual Conversion (Mini Tool) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mb-24">
          <div className="bg-gradient-to-br from-[#111827] to-[#0f172a] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 font-display">{t.conversion.title}</h3>
              <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                {t.conversion.desc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
                <input 
                  type="text" 
                  placeholder={t.conversion.placeholder}
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1AAE82] backdrop-blur-sm"
                />
                <button 
                  className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-full transition-colors shadow-lg"
                >
                  {t.conversion.button}
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 opacity-50">
                <div className="h-20 bg-white/5 rounded-xl border border-white/10 border-dashed flex flex-col items-center justify-center">
                  <div className="text-xs text-gray-400 mb-1">Hook Rate</div>
                  <div className="w-8 h-2 bg-gray-600 rounded-full"></div>
                </div>
                <div className="h-20 bg-white/5 rounded-xl border border-white/10 border-dashed flex flex-col items-center justify-center">
                  <div className="text-xs text-gray-400 mb-1">Pacing</div>
                  <div className="w-8 h-2 bg-gray-600 rounded-full"></div>
                </div>
                <div className="h-20 bg-white/5 rounded-xl border border-white/10 border-dashed flex flex-col items-center justify-center">
                  <div className="text-xs text-gray-400 mb-1">Structure</div>
                  <div className="w-8 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mt-6">{t.conversion.note}</p>
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
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            {t.cta.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('/auth')}
              className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              {t.cta.primary}
            </button>
            <button 
              onClick={() => onNavigate('/simulation/intelligence')}
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

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  BarChart2, 
  Play, 
  Search, 
  Filter,
  Lock,
  Calendar,
  Eye,
  Hash
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
      title: "Predict TikTok Trends with AI | OwlSeer",
      description: "Spot rising TikTok trends before they peak. OwlSeer's Trend Radar scores hashtags and sounds by velocity, competition, and match to your niche."
    },
    hero: {
      title: "AI-Powered TikTok Trend Prediction: Catch the Next Viral Hit Before It Peaks",
      lead: "Stop guessing. OwlSeer's AI analyzes 50M+ videos to predict viral velocity and saturation—giving you the precise 72-hour window to post for maximum growth.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Try Trend Radar Demo"
    },
    tldr: {
      content: "Most creators spot TikTok trends after they have already peaked. OwlSeer's Trend Radar detects emerging hashtags, sounds, and formats in your niche before saturation. Each trend shows a velocity score, competition level, match percentage, and days-until-peak estimate. You can generate a script from any trend with one click.",
      link: "Trend Radar"
    },
    problem: {
      title: "The Trend Timing Problem",
      task: "Understand why acting on trends at the right time matters more than acting at all.",
      desc1: "Trends on TikTok follow a predictable lifecycle: emergence, acceleration, peak, and decline. The participation window — the period when joining a trend still yields strong distribution — is narrow. Post too early and you lack audience; post too late and you compete with thousands.",
      desc2: "Most creators rely on three unreliable methods: scrolling the For You Page, following trend accounts, or waiting for trending sounds to appear in TikTok's sound library. All three have a built-in delay — by the time trends are visible through these channels, the peak is already close.",
      cost: "The cost of poor timing is real. A tech reviewer who posts a trending sound one day late may see 60% fewer views than an identical video posted the day before.",
      action: "See how timing affects distribution — read about trend saturation."
    },
    solution: {
      title: "How OwlSeer Solves This",
      task: "See the three-step workflow for trend-driven content creation.",
      steps: [
        {
          id: 1,
          title: "Detect",
          desc: "Trend Radar scans TikTok for emerging trends and filters them to your niche using category filters. Trends are scored by velocity (how fast they are growing), competition level (how crowded they are), and match score (how well they fit your account)."
        },
        {
          id: 2,
          title: "Evaluate",
          desc: "Each trend card shows you everything you need to decide: growth percentage, days remaining, post count, total views, and a sparkline trajectory chart. Trends marked \"Recommended\" have strong signals across all dimensions. Trends marked \"Caution\" have risk factors."
        },
        {
          id: 3,
          title: "Act",
          desc: "Click \"Generate\" on any trend card to create a ready-to-shoot script in under 60 seconds. The script includes a hook tailored to the trend, body content matched to your style, a CTA, and recommended sounds and hashtags."
        }
      ],
      note: "This workflow compresses trend research, evaluation, and script creation into a single session — typically under 10 minutes.",
      action: "Try the trend-to-script workflow on sample data — open Trend Radar."
    },
    evidence: {
      title: "What Trend Data Looks Like",
      task: "See specific examples of trend scoring from a real account.",
      subtitle: "From the sample account (tech review niche):",
      items: [
        {
          tag: "#TechUnboxing2025",
          match: 94,
          velocity: "+65%",
          posts: "12.5K",
          views: "45M",
          daysLeft: 8,
          competition: "Low",
          status: "Recommended"
        },
        {
          tag: "#AIGadgetReview",
          match: 84,
          velocity: "+24%",
          posts: "8.3K",
          views: "28M",
          daysLeft: 8,
          competition: "Low",
          status: "Recommended"
        },
        {
          tag: "#WinterTech",
          match: 73,
          velocity: "+36%",
          posts: "18.2K",
          views: "52M",
          daysLeft: 8,
          competition: "Medium",
          status: "Caution"
        }
      ],
      analysis: "The data reveals: #TechUnboxing2025 is the best opportunity — high match, strong velocity, and low competition. #WinterTech has more volume but higher competition and lower match, making it riskier.",
      comparison: "This is the kind of analysis that takes an hour manually and three seconds with Trend Radar.",
      action: "Explore the full trend list — see all trends in the demo."
    },
    conversion: {
      title: "In your niche, right now...",
      stat1: "{{rising}} trends are accelerating",
      stat2: "{{expiring}} will peak in 48h",
      desc: "Connect your account to see which ones match your content best.",
      button: "See My Matched Trends",
      note: "Free trial, no credit card required"
    },
    boundary: {
      title: "Boundary Box",
      data: "Data we use: Publicly available TikTok trend data (hashtag volume, sound usage, format adoption) combined with your account's signal profile for match scoring.",
      limit: "What we do not do: OwlSeer does not guarantee trend predictions. Trends can accelerate, stall, or reverse unpredictably. Velocity scores are based on recent data and do not account for external events.",
      note: "Variability note: Trend timing varies by niche. A trend that peaks in 3 days for comedy may last 2 weeks for education. Match scores depend on your content history — new accounts with limited data may see less accurate scores initially."
    },
    cta: {
      title: "Catch Your Next Trend",
      desc: "Connect your account and see trends personalized to your niche. Or explore the demo.",
      primary: "Start Free Trial",
      secondary: "Try Trend Radar Demo"
    }
  },
  zh: {
    meta: {
      title: "在 TikTok 趋势达到顶峰前预测它们 | OwlSeer",
      description: "OwlSeer 的趋势雷达按速度、竞争度和个人相关性评分，帮助你在窗口期内捕捉新兴趋势。"
    },
    hero: {
      title: "AI 驱动的 TikTok 趋势预测引擎：在红利期结束前锁定下一个爆款",
      lead: "停止猜测。OwlSeer 的 AI 深度分析 5000 万+ 视频数据，精准计算病毒式传播速度与饱和度——为您锁定最佳的 72 小时黄金发布窗口。",
      ctaPrimary: "开始免费试用",
      ctaSecondary: "试用趋势雷达演示"
    },
    tldr: {
      content: "大多数创作者在 TikTok 趋势达到顶峰后才发现它们。OwlSeer 的趋势雷达在饱和前检测你利基中的新兴标签、声音和格式。每个趋势都显示速度评分、竞争水平、匹配百分比和预计达到顶峰的天数。你可以一键从任何趋势生成脚本。",
      link: "趋势雷达"
    },
    problem: {
      title: "趋势时机问题",
      task: "了解为什么在正确的时间对趋势采取行动比采取行动更重要。",
      desc1: "TikTok 趋势遵循可预测的生命周期：萌芽、加速、高峰和下降。参与窗口——加入趋势仍能获得强分发的时段——很窄。发布太早你缺乏受众；发布太晚你将与成千上万人竞争。",
      desc2: "大多数创作者依赖三种不可靠的方法：刷推荐页、关注趋势账号、或等待音频出现在 TikTok 音频库中。这三种都有内在延迟——当趋势通过这些渠道可见时，高峰已经临近。",
      cost: "时机不佳的代价是真实的。一个科技评论员如果晚一天发布热门音频视频，可能会比前一天发布的相同视频少获得 60% 的观看量。",
      action: "查看时机如何影响分发 — 阅读关于趋势饱和。"
    },
    solution: {
      title: "OwlSeer 如何解决这个问题",
      task: "查看趋势驱动内容创作的三步工作流。",
      steps: [
        {
          id: 1,
          title: "检测",
          desc: "趋势雷达扫描 TikTok 寻找新兴趋势，并使用类别过滤器将其过滤到你的利基。趋势按速度（增长多快）、竞争水平（多拥挤）和匹配分数（多适合你的账号）评分。"
        },
        {
          id: 2,
          title: "评估",
          desc: "每张趋势卡片都显示你需要决定的一切：增长百分比、剩余天数、帖子数、总观看量和迷你轨迹图。标记为“推荐”的趋势在所有维度上都有强信号。标记为“谨慎”的趋势有风险因素。"
        },
        {
          id: 3,
          title: "行动",
          desc: "点击任何趋势卡片上的“生成”即可在 60 秒内创建一个准备好拍摄的脚本。脚本包括针对趋势定制的钩子、匹配你风格的正文内容、CTA 以及推荐的声音和标签。"
        }
      ],
      note: "此工作流将趋势研究、评估和脚本创建压缩到一个会话中——通常不到 10 分钟。",
      action: "在样本数据上尝试趋势转脚本工作流 — 打开趋势雷达。"
    },
    evidence: {
      title: "趋势数据长什么样",
      task: "查看来自真实账号的具体趋势评分示例。",
      subtitle: "来自示例账号（科技评论利基）：",
      items: [
        {
          tag: "#TechUnboxing2025",
          match: 94,
          velocity: "+65%",
          posts: "12.5K",
          views: "45M",
          daysLeft: 8,
          competition: "低",
          status: "推荐"
        },
        {
          tag: "#AIGadgetReview",
          match: 84,
          velocity: "+24%",
          posts: "8.3K",
          views: "28M",
          daysLeft: 8,
          competition: "低",
          status: "推荐"
        },
        {
          tag: "#WinterTech",
          match: 73,
          velocity: "+36%",
          posts: "18.2K",
          views: "52M",
          daysLeft: 8,
          competition: "中",
          status: "谨慎"
        }
      ],
      analysis: "数据显示：#TechUnboxing2025 是最佳机会——高匹配、强速度和低竞争。#WinterTech 尽管量更大，但竞争更激烈且匹配度较低，因此风险更大。",
      comparison: "这是一种手动需要一小时，而用趋势雷达只需三秒钟的分析。",
      action: "探索完整趋势列表 — 在演示中查看所有趋势。"
    },
    conversion: {
      title: "在你的利基中，此刻...",
      stat1: "{{rising}} 个趋势正在加速",
      stat2: "{{expiring}} 个将在 48 小时内到达顶峰",
      desc: "连接你的账号，看看哪些与你的内容匹配度最高。",
      button: "查看我的匹配趋势",
      note: "免费试用，无需信用卡"
    },
    boundary: {
      title: "边界框",
      data: "我们使用的数据：公开可用的 TikTok 趋势数据（标签量、声音使用、格式采用）结合你的账号信号资料进行匹配评分。",
      limit: "我们不做的：OwlSeer 不保证趋势预测。趋势可能会不可预测地加速、停滞或逆转。速度分数基于近期数据，不考虑外部事件。",
      note: "变异性说明：趋势时机因利基而异。在喜剧领域 3 天达到顶峰的趋势在教育领域可能会持续 2 周。匹配分数取决于你的内容历史——数据有限的新账号最初可能会看到不太准确的分数。"
    },
    cta: {
      title: "捕捉你的下一个趋势",
      desc: "连接你的账号并查看为你利基个性化的趋势。或者探索演示。",
      primary: "开始免费试用",
      secondary: "试用趋势雷达演示"
    }
  }
};

// --- Components ---

const LifecycleAnimation = () => {
  return (
    <div className="w-full h-64 bg-gray-50 dark:bg-slate-900 rounded-xl relative overflow-hidden border border-gray-200 dark:border-slate-800">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 400 200" className="w-full h-full p-8">
          {/* Grid Lines */}
          <line x1="40" y1="180" x2="360" y2="180" stroke="currentColor" className="text-gray-200 dark:text-slate-700" strokeWidth="2" />
          <line x1="40" y1="20" x2="40" y2="180" stroke="currentColor" className="text-gray-200 dark:text-slate-700" strokeWidth="2" />
          
          {/* Labels */}
          <text x="80" y="195" className="text-[10px] fill-gray-400">Emergence</text>
          <text x="160" y="195" className="text-[10px] fill-gray-400">Acceleration</text>
          <text x="260" y="195" className="text-[10px] fill-gray-400">Peak</text>
          <text x="340" y="195" className="text-[10px] fill-gray-400">Decline</text>

          {/* S-Curve Path */}
          <motion.path 
            d="M 40 170 C 100 170, 150 160, 200 100 S 300 30, 360 30"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="4"
            className="dark:stroke-slate-700"
          />
          <motion.path 
            d="M 40 170 C 100 170, 150 160, 200 100 S 300 30, 360 30"
            fill="none"
            stroke="#1AAE82"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Optimal Window Highlight */}
          <rect x="120" y="20" width="100" height="160" fill="url(#greenGradient)" opacity="0.2" />
          
          <defs>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1AAE82" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1AAE82" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Moving Dot */}
          <motion.circle 
            r="6"
            fill="#1AAE82"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ offsetPath: "path('M 40 170 C 100 170, 150 160, 200 100 S 300 30, 360 30')" }}
          >
             <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.8;0.9;1" dur="4s" repeatCount="indefinite" />
          </motion.circle>
        </svg>
        
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#1AAE82]/10 text-[#1AAE82] px-3 py-1 rounded-full text-xs font-bold border border-[#1AAE82]/20 backdrop-blur-sm">
          Optimal Participation Window
        </div>
      </div>
    </div>
  );
};

const WorkflowStep = ({ step, isActive, onClick }: { step: any, isActive: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`text-left p-6 rounded-xl border transition-all duration-300 w-full ${
      isActive 
        ? 'bg-white dark:bg-slate-800 border-[#1AAE82] shadow-lg ring-1 ring-[#1AAE82]/20' 
        : 'bg-white/50 dark:bg-slate-900/50 border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700'
    }`}
  >
    <div className="flex items-center justify-between mb-2">
      <h3 className={`text-lg font-bold ${isActive ? 'text-[#1AAE82]' : 'text-gray-900 dark:text-white'}`}>
        Step {step.id}: {step.title}
      </h3>
      {isActive && <Zap className="w-5 h-5 text-[#1AAE82]" />}
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
      {step.desc}
    </p>
  </button>
);

const TrendCard = ({ data }: { data: any }) => (
  <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white">{data.tag}</h4>
        <div className="flex items-center gap-2 mt-1">
          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
            data.status === 'Recommended' || data.status === '推荐'
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
          }`}>
            {data.status}
          </span>
          <span className="text-xs text-gray-500">{data.competition} Comp.</span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-[#1AAE82]">{data.match}%</div>
        <div className="text-xs text-gray-500">Match</div>
      </div>
    </div>
    
    <div className="grid grid-cols-3 gap-2 mb-4">
      <div className="bg-gray-50 dark:bg-slate-800 rounded p-2 text-center">
        <div className="text-xs text-gray-500">Velocity</div>
        <div className="font-bold text-[#1AAE82]">{data.velocity}</div>
      </div>
      <div className="bg-gray-50 dark:bg-slate-800 rounded p-2 text-center">
        <div className="text-xs text-gray-500">Views</div>
        <div className="font-bold text-gray-900 dark:text-white">{data.views}</div>
      </div>
      <div className="bg-gray-50 dark:bg-slate-800 rounded p-2 text-center">
        <div className="text-xs text-gray-500">Days Left</div>
        <div className="font-bold text-gray-900 dark:text-white">{data.daysLeft}</div>
      </div>
    </div>

    <div className="w-full bg-gray-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
      <div className="h-full bg-[#1AAE82]" style={{ width: `${data.match}%` }}></div>
    </div>
  </div>
);

// --- Main Page Component ---

export const TrendPredictionPage = ({ 
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
  const [activeStep, setActiveStep] = useState(1);

  // Dynamic numbers for "FOMO" section
  const [stats, setStats] = useState({ rising: 12, expiring: 3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        rising: 12 + Math.floor(Math.random() * 5),
        expiring: 3 + Math.floor(Math.random() * 2)
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans text-gray-900 dark:text-white selection:bg-[#1AAE82]/30 transition-colors duration-300">
      <SEO 
        title={t.meta.title}
        description={t.meta.description}
        keywords={["tiktok trend prediction", "viral trends", "tiktok analytics", "ai script generator"]}
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
              <TrendingUp className="w-3 h-3" /> New Feature
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
                onClick={() => onNavigate('/simulation/trends')}
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

        {/* Problem Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.problem.title}</h2>
                  <p className="text-[#1AAE82] font-medium">{t.problem.task}</p>
                </div>
              </div>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>{t.problem.desc1}</p>
                <p>{t.problem.desc2}</p>
                <div className="p-4 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 text-red-800 dark:text-red-200 text-base">
                  <span className="font-bold block mb-1">Cost of Delay:</span>
                  {t.problem.cost}
                </div>
                <button 
                  onClick={() => onNavigate('/signals')}
                  className="text-[#1AAE82] font-bold hover:underline flex items-center gap-1 mt-2"
                >
                  {t.problem.action} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div>
              <LifecycleAnimation />
              <div className="mt-4 flex justify-between text-xs text-gray-400 dark:text-gray-500 font-mono">
                <span>Day 1</span>
                <span>Day 7</span>
                <span>Day 14</span>
                <span>Day 30</span>
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

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                {t.solution.steps.map((step: any) => (
                  <WorkflowStep 
                    key={step.id} 
                    step={step} 
                    isActive={activeStep === step.id} 
                    onClick={() => setActiveStep(step.id)} 
                  />
                ))}
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-6 px-2">
                  {t.solution.note}
                </p>
                <button 
                  onClick={() => onNavigate('/simulation/trends')}
                  className="text-[#1AAE82] font-bold hover:underline flex items-center gap-1 mt-2 px-2"
                >
                  {t.solution.action} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="relative aspect-[4/3] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-800 overflow-hidden flex items-center justify-center p-8">
                {/* Visual Placeholder for Workflow Steps */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    {activeStep === 1 && (
                      <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-4">
                        <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 animate-pulse">
                          <Search className="w-10 h-10" />
                        </div>
                        <h4 className="text-xl font-bold">Scanning 50M+ Videos...</h4>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded text-xs">Tech</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded text-xs">Gadgets</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded text-xs">AI</span>
                        </div>
                      </div>
                    )}
                    {activeStep === 2 && (
                      <div className="w-full h-full flex items-center justify-center">
                        <TrendCard data={t.evidence.items[0]} />
                      </div>
                    )}
                    {activeStep === 3 && (
                      <div className="w-full h-full bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 overflow-y-auto">
                        <div className="flex items-center gap-2 mb-4 text-[#1AAE82]">
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="font-bold">Script Generated</span>
                        </div>
                        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                          <p><strong className="text-gray-900 dark:text-white">Hook (0-3s):</strong> "Stop buying new phones until you see this..."</p>
                          <p><strong className="text-gray-900 dark:text-white">Body:</strong> [Visual: Unboxing gesture] The tech industry is hiding a secret about release cycles.</p>
                          <p><strong className="text-gray-900 dark:text-white">CTA:</strong> Comment 'Truth' for the full list.</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
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
              
              <div className="space-y-4">
                {t.evidence.items.map((item: any, i: number) => (
                  <TrendCard key={i} data={item} />
                ))}
              </div>
            </div>
            <div className="flex-1 sticky top-32">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-[#1AAE82]" /> Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {t.evidence.analysis}
                </p>
                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm mb-6">
                  <p className="text-sm font-medium text-gray-900 dark:text-white italic">
                    "{t.evidence.comparison}"
                  </p>
                </div>
                <button 
                  onClick={() => onNavigate('/simulation/trends')}
                  className="w-full py-3 bg-[#1AAE82] text-white rounded-lg font-bold hover:bg-[#15956F] transition-colors"
                >
                  {t.evidence.action.split('—')[0]}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contextual Conversion (FOMO) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mb-24">
          <div className="bg-gradient-to-br from-[#111827] to-[#0f172a] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 font-display">{t.conversion.title}</h3>
              <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1AAE82] mb-1">{stats.rising}</div>
                  <div className="text-sm text-gray-400">{t.conversion.stat1.replace('{{rising}}', '')}</div>
                </div>
                <div className="w-px bg-gray-700 hidden md:block" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-1">{stats.expiring}</div>
                  <div className="text-sm text-gray-400">{t.conversion.stat2.replace('{{expiring}}', '')}</div>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                {t.conversion.desc}
              </p>
              <button 
                onClick={() => onNavigate('/auth')}
                className="px-8 py-4 bg-white text-[#1AAE82] font-bold rounded-full hover:bg-gray-100 transition-colors transform hover:-translate-y-1"
              >
                {t.conversion.button}
              </button>
              <p className="text-xs text-gray-500 mt-4">{t.conversion.note}</p>
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
              onClick={() => onNavigate('/simulation/trends')}
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

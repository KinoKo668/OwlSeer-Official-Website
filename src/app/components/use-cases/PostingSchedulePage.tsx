import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Zap, 
  Play, 
  Lock,
  BarChart2,
  CheckCircle2,
  AlertTriangle
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
      title: "Best Time to Post on TikTok — AI-Powered | OwlSeer",
      description: "Find your best posting times for TikTok with AI. OwlSeer maps your audience's active hours and generates personalized posting schedules."
    },
    hero: {
      title: "Find Your Best Time to Post on TikTok — Based on Your Audience",
      lead: "OwlSeer maps your audience's active hours and generates personalized posting schedules. Stop following generic advice and start posting when your specific viewers are watching.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Try Scheduling Demo"
    },
    tldr: {
      content: "Generic \"best time to post\" articles do not know your audience. OwlSeer's active hour mapping signal tracks when your specific followers and viewers are on TikTok. The best-time heatmap shows optimal hours by day of week, and scheduling places your content at those times with AI-recommended best-time badges.",
      link: "active hour mapping"
    },
    problem: {
      title: "Why Generic Posting Times Fail",
      task: "Understand why \"post at 7 PM\" advice does not work for everyone.",
      desc1: "Every \"best time to post on TikTok\" article offers the same generic windows: early morning, lunch, and evening. These averages are drawn from millions of accounts and represent no one's audience specifically.",
      desc2: "Your audience is different. A tech reviewer's audience may peak at 9 PM on weeknights (after work, browsing on the couch). A fitness creator's audience may peak at 6 AM (pre-workout scroll). A parenting creator's audience may peak at 2 PM (naptime). Generic advice treats all three the same.",
      desc3: "Why timing matters: TikTok evaluates a video's early engagement signals within the first 30-60 minutes of posting. If you post when your audience is asleep, that initial window generates weak signals, and the algorithm deprioritizes the video for broader distribution. The same video posted 4 hours later might perform 2-3x better simply because more of your audience was active.",
      action: "See how audience activity is measured — read about active hour mapping."
    },
    solution: {
      title: "How OwlSeer Personalizes Your Schedule",
      task: "See the three tools that optimize your posting timing.",
      tools: [
        {
          id: 1,
          title: "Best-Time Heatmap",
          desc: "The heatmap in the Intelligence module shows a 7-day by 24-hour grid of audience activity. Dark green cells are peak engagement windows. Medium green are good secondary slots. Empty cells indicate low-activity periods. The heatmap is derived from your audience's actual behavior — not generic data."
        },
        {
          id: 2,
          title: "Best-Time Badges",
          desc: "When you schedule content in the Calendar, AI-generated badges appear on time slots. Green badges mark top-3 slots for the day. Amber badges mark secondary options. These badges update weekly as audience behavior shifts."
        },
        {
          id: 3,
          title: "Posting Cadence Tracking",
          desc: "The Content Supply and Rhythm panel tracks your posting frequency and consistency. If your cadence drops below your established pattern, OwlSeer alerts you — because posting consistency is itself a signal that affects distribution."
        }
      ],
      note: "Together, these tools answer three questions: When should I post today? Am I posting often enough? How does my schedule compare to what the data recommends?",
      action: "See your personalized heatmap — open the Intelligence demo."
    },
    conversion: {
      title: "How much time do you spend researching when to post?",
      desc: "Drag the slider to tell us. Then see how OwlSeer automates it.",
      sliderLabel: "Hours per week:",
      resultTitle: "You waste ~{{hours}} hours/month",
      resultDesc: "OwlSeer automates this instantly using 12+ audience signals.",
      button: "Find My Best Times",
      note: "Based on real audience data · Personalized heatmap ready in 2 weeks"
    },
    boundary: {
      title: "Boundary Box",
      data: "Data we use: Audience active-hour data derived from engagement timing patterns on your published content. Best-time calculations use your audience's observed behavior.",
      limit: "What we do not do: OwlSeer does not auto-publish to TikTok. Scheduling is for planning; you post manually or use TikTok's native scheduler. We do not guarantee that posting at recommended times will produce specific view counts.",
      note: "Variability note: Heatmap accuracy requires 2+ weeks of data. Audience behavior shifts seasonally, around holidays, and in response to platform changes. Best-time recommendations evolve accordingly."
    },
    cta: {
      title: "Find Your Best Posting Times",
      desc: "Connect your account. Your personalized heatmap generates after 2 weeks of data.",
      primary: "Start Free Trial",
      secondary: "Try Scheduling Demo"
    }
  },
  zh: {
    meta: {
      title: "TikTok 最佳发布时间 — AI 驱动 | OwlSeer",
      description: "用 AI 找到你在 TikTok 上的最佳发布时间。OwlSeer 映射你受众的活跃时间并生成个性化的发布时间表。"
    },
    hero: {
      title: "找到你在 TikTok 上的最佳发布时间——基于你的受众",
      lead: "OwlSeer 映射你受众的活跃时间并生成个性化的发布时间表。停止遵循通用建议，开始在你的特定观众观看时发布。",
      ctaPrimary: "开始免费试用",
      ctaSecondary: "试用排程演示"
    },
    tldr: {
      content: "通用的“最佳发布时间”文章并不了解你的受众。OwlSeer 的活跃时间映射信号追踪你的特定关注者和观众何时在 TikTok 上。最佳时间热力图显示每周各天的最佳时间，排程功能利用 AI 推荐的最佳时间标签将你的内容安排在这些时间。",
      link: "活跃时间映射"
    },
    problem: {
      title: "为什么通用发布时间不管用",
      task: "了解为什么“晚上 7 点发布”的建议并非对每个人都有效。",
      desc1: "每篇“TikTok 最佳发布时间”文章都提供相同的通用窗口：清晨、午餐和晚上。这些平均值来自数百万个账户，并不具体代表任何人的受众。",
      desc2: "你的受众是不同的。科技评论员的受众可能在工作日晚上 9 点达到高峰（下班后，在沙发上浏览）。健身创作者的受众可能在早上 6 点达到高峰（锻炼前浏览）。育儿创作者的受众可能在下午 2 点达到高峰（午睡时间）。通用建议将这三者一视同仁。",
      desc3: "为什么时机很重要：TikTok 在发布后的前 30-60 分钟内评估视频的早期互动信号。如果你在受众睡觉时发布，那个初始窗口产生的信号很弱，算法会降低视频的广泛分发优先级。同一视频晚 4 小时发布可能会表现好 2-3 倍，仅仅是因为更多受众活跃。",
      action: "查看如何衡量受众活跃度 — 阅读关于活跃时间映射。"
    },
    solution: {
      title: "OwlSeer 如何个性化你的时间表",
      task: "查看优化你发布时机的三个工具。",
      tools: [
        {
          id: 1,
          title: "最佳时间热力图",
          desc: "智能模块中的热力图显示 7 天 x 24 小时的受众活跃度网格。深绿色单元格是互动高峰窗口。中绿色是好的次要时段。空白单元格表示低活跃期。热力图源自你受众的实际行为——而非通用数据。"
        },
        {
          id: 2,
          title: "最佳时间标签",
          desc: "当你在日历中安排内容时，AI 生成的标签会出现在时间段上。绿色标签标记当天的前 3 个时段。琥珀色标签标记次要选项。随着受众行为的变化，这些标签每周更新。"
        },
        {
          id: 3,
          title: "发布节奏追踪",
          desc: "内容供应与节奏面板追踪你的发布频率和一致性。如果你的节奏低于既定模式，OwlSeer 会提醒你——因为发布一致性本身就是一个影响分发的信号。"
        }
      ],
      note: "这些工具共同回答了三个问题：我今天应该什么时候发布？我发布的频率够吗？我的时间表与数据推荐的相比如何？",
      action: "查看你的个性化热力图 — 打开智能演示。"
    },
    conversion: {
      title: "你每周花多少时间研究什么时候发布？",
      desc: "拖动滑块告诉我们。然后看看 OwlSeer 如何自动完成。",
      sliderLabel: "每周小时数：",
      resultTitle: "你每月浪费约 {{hours}} 小时",
      resultDesc: "OwlSeer 使用 12+ 个受众信号即时自动完成此操作。",
      button: "找到我的最佳时间",
      note: "基于真实受众数据 · 2 周后生成个性化热力图"
    },
    boundary: {
      title: "边界框",
      data: "我们使用的数据：来自你已发布内容的互动时间模式的受众活跃时间数据。最佳时间计算使用你受众的观察行为。",
      limit: "我们不做的：OwlSeer 不会自动发布到 TikTok。排程用于规划；你手动发布或使用 TikTok 的原生排程器。我们不保证在推荐时间发布会产生具体的观看次数。",
      note: "变异性说明：热力图准确性需要 2 周以上的数据。受众行为会随季节、假期和平台变化而变化。最佳时间推荐会相应演变。"
    },
    cta: {
      title: "找到你的最佳发布时间",
      desc: "连接你的账号。你的个性化热力图在 2 周数据后生成。",
      primary: "开始免费试用",
      secondary: "试用排程演示"
    }
  }
};

// --- Components ---

const HeatmapPreview = () => {
  const hours = 24;
  const days = 7;
  
  // Generate a pseudo-random heatmap pattern
  const getIntensity = (d: number, h: number) => {
    // Simulate active hours (e.g., evenings 6-10pm, some lunch hours)
    if (h >= 18 && h <= 22) return 3; // High
    if (h >= 12 && h <= 13) return 2; // Medium
    if (h >= 8 && h <= 9) return 1;   // Low
    return 0; // None
  };

  return (
    <div className="w-full aspect-[4/3] bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-4 shadow-sm flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Audience Activity</span>
        </div>
        <div className="flex gap-2 text-[10px]">
          <span className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500 rounded-sm"></div> High</span>
          <span className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-300 rounded-sm"></div> Med</span>
        </div>
      </div>
      
      <div className="flex-1 grid grid-cols-[auto_1fr] gap-2">
        {/* Days Y-axis */}
        <div className="flex flex-col justify-between text-[10px] text-gray-400 font-mono py-1">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <div key={d}>{d}</div>)}
        </div>
        
        {/* Heatmap Grid */}
        <div className="grid grid-rows-7 gap-1">
          {Array.from({ length: days }).map((_, d) => (
            <div key={d} className="grid grid-cols-24 gap-px">
              {Array.from({ length: hours }).map((_, h) => {
                const intensity = getIntensity(d, h);
                let bgClass = 'bg-gray-100 dark:bg-slate-800';
                if (intensity === 3) bgClass = 'bg-emerald-500';
                if (intensity === 2) bgClass = 'bg-emerald-300';
                if (intensity === 1) bgClass = 'bg-emerald-100 dark:bg-emerald-900/30';
                
                return (
                  <motion.div
                    key={h}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (d * 24 + h) * 0.005 }}
                    className={`rounded-sm ${bgClass}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      
      {/* Hours X-axis */}
      <div className="flex justify-between text-[10px] text-gray-400 font-mono pl-8 mt-1">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>23:59</span>
      </div>
    </div>
  );
};

const ROICalculator = ({ t }: { t: any }) => {
  const [hours, setHours] = useState(1);
  
  return (
    <div className="bg-gradient-to-br from-[#111827] to-[#0f172a] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/20 rounded-full blur-[80px]" />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 font-display">{t.title}</h3>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto">
          {t.desc}
        </p>
        
        <div className="max-w-md mx-auto mb-10">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>0 hr</span>
            <span className="text-[#1AAE82] font-bold">{hours} hrs</span>
            <span>3+ hrs</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="3" 
            step="0.5"
            value={hours}
            onChange={(e) => setHours(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#1AAE82]"
          />
          <p className="text-xs text-gray-500 mt-2">{t.sliderLabel}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-red-400 mb-1">
              {Math.round(hours * 4)} hrs
            </div>
            <div className="text-xs text-gray-400">Wasted Monthly</div>
          </div>
          <div className="bg-[#1AAE82]/10 border border-[#1AAE82]/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-[#1AAE82] mb-1">
              0 hrs
            </div>
            <div className="text-xs text-gray-400">With OwlSeer</div>
          </div>
        </div>
        
        <button 
          className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-full transition-colors shadow-lg transform hover:-translate-y-1"
        >
          {t.button}
        </button>
        <p className="text-xs text-gray-500 mt-6">{t.note}</p>
      </div>
    </div>
  );
};

// --- Main Page Component ---

export const PostingSchedulePage = ({ 
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
        keywords={["tiktok posting schedule", "best time to post tiktok", "tiktok analytics", "social media scheduling"]}
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
              <Calendar className="w-3 h-3" /> New Feature
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
                onClick={() => onNavigate('/simulation/scheduling')}
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
                      onClick={() => onNavigate('/signals')}
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
              <HeatmapPreview />
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
              {t.solution.tools.map((tool: any, i: number) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#1AAE82]/10 text-[#1AAE82] rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{tool.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {tool.desc}
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

        {/* Contextual Conversion (ROI Calculator) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mb-24">
          <ROICalculator t={t.conversion} />
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
              onClick={() => onNavigate('/simulation/scheduling')}
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

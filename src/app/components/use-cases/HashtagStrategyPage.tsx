import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Hash, 
  ArrowRight, 
  Zap, 
  Play, 
  Lock,
  BarChart2,
  TrendingUp,
  Activity,
  Layers,
  Search,
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
      title: "TikTok Hashtag Strategy — AI-Powered | OwlSeer",
      description: "Build a data-driven TikTok hashtag strategy. OwlSeer recommends hashtags based on momentum, competition, and match to your niche."
    },
    hero: {
      title: "Build a TikTok Hashtag Strategy That Actually Works",
      lead: "OwlSeer tracks hashtag momentum, competition, and niche relevance to recommend the right tags for every video — no guessing, no copying competitors.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Try Trend Radar Demo"
    },
    tldr: {
      content: "Hashtags are not decorative. They are a discovery mechanism. OwlSeer's Trend Radar tracks hashtag momentum — the growth rate of hashtag usage over time — and combines it with competition level and your personal match score to recommend hashtags that maximize discoverability for each video.",
      link: "Trend Radar"
    },
    problem: {
      title: "The Three Hashtag Mistakes",
      task: "Identify the most common hashtag errors and their impact.",
      mistakes: [
        {
          title: "Mistake 1 — The same tags every time.",
          desc: "Creators default to 5-10 familiar hashtags for every video, regardless of topic. This limits discoverability to the same audience segments and signals to the algorithm that your content is not evolving."
        },
        {
          title: "Mistake 2 — Only trending hashtags.",
          desc: "Using only high-volume trending tags means your content competes with millions of videos. A hashtag with 50 billion views sounds impressive, but your video is a needle in a haystack."
        },
        {
          title: "Mistake 3 — Irrelevant tags.",
          desc: "Using popular tags unrelated to your content (e.g., #FYP on every video) dilutes your signal to the algorithm. TikTok may show your content to the wrong audience, resulting in low engagement that hurts future distribution."
        }
      ],
      fix: "The fix is not more hashtags — it is better hashtag selection based on data: which tags are growing, which are saturated, and which align with your content.",
      action: "See how hashtag momentum is tracked — read about the hashtag momentum signal."
    },
    solution: {
      title: "How OwlSeer Recommends Hashtags",
      task: "See how data replaces guesswork in hashtag selection.",
      points: [
        {
          id: 1,
          title: "Hashtag Momentum",
          desc: "The hashtag list in Trend Radar shows each hashtag's growth rate over a rolling 7-day window. Rising hashtags offer the best balance of visibility and competition. Flat or declining hashtags signal saturation."
        },
        {
          id: 2,
          title: "Competition Level",
          desc: "Each hashtag has a competition level indicator — Low, Medium, or High. Low-competition hashtags with rising momentum are the sweet spot: growing audience, limited competition."
        },
        {
          id: 3,
          title: "Match Score",
          desc: "Hashtag recommendations are personalized to your account. A hashtag that is trending in beauty will not appear in recommendations for a tech creator unless cross-over relevance is detected."
        }
      ],
      mix: {
        title: "The Recommended Mix",
        broad: "1-2 broad hashtags (reach)",
        niche: "2-3 niche hashtags (targeted)",
        trending: "1-2 trending hashtags (boost)"
      },
      action: "See hashtag recommendations on sample data — open Trend Radar."
    },
    evidence: {
      title: "Hashtag Data in Action",
      task: "See how hashtag metrics inform specific choices.",
      subtitle: "From the sample account (tech review niche):",
      table: {
        headers: ["Hashtag", "Match", "Growth", "Posts", "Competition"],
        rows: [
          ["#TechUnboxing2025", "94%", "+65%", "12.5K", "Low"],
          ["#AIGadgetReview", "84%", "+24%", "8.3K", "Low"],
          ["#WinterTech", "73%", "+36%", "18.2K", "Medium"]
        ]
      },
      recommendation: {
        title: "Recommended mix for the next video:",
        items: [
          { type: "Broad", tag: "#TechTok", reason: "high volume, baseline discoverability" },
          { type: "Niche", tag: "#AIGadgetReview", reason: "84% match, low competition, rising" },
          { type: "Trending", tag: "#TechUnboxing2025", reason: "94% match, +65% growth, 8 days remaining" }
        ]
      },
      comparison: "This mix took 5 seconds with Trend Radar. Manual research to reach the same conclusion would take 30-45 minutes of hashtag browsing."
    },
    conversion: {
      title: "See 5 trending hashtags in your niche",
      desc: "Enter your niche to see what's rising and what's saturated. Data updates every 6-12 hours.",
      placeholder: "Select Niche",
      niches: ["Tech", "Beauty", "Fitness", "Education", "Food", "Comedy", "Business"],
      button: "See My Hashtags",
      note: "Free preview of 5 tags · Connect account for personalized mix"
    },
    boundary: {
      title: "Boundary Box",
      data: "Data we use: Publicly available TikTok hashtag usage data — post counts, view totals, and growth rates. Match scores use your account's content history and audience profile.",
      limit: "What we do not do: OwlSeer does not guarantee that any hashtag combination will produce specific view counts. Hashtag performance depends on content quality, timing, trend lifecycle, and algorithm behavior.",
      note: "Variability note: Hashtag recommendations update every 6-12 hours. Recommendations shown in the demo are snapshots that may not reflect current conditions. Hashtag strategy effectiveness varies by niche and account size."
    },
    cta: {
      title: "Get Personalized Hashtag Recommendations",
      desc: "Connect your account and see which hashtags match your niche right now.",
      primary: "Start Free Trial",
      secondary: "Try Trend Radar Demo"
    }
  },
  zh: {
    meta: {
      title: "TikTok 标签策略 — AI 驱动 | OwlSeer",
      description: "构建数据驱动的 TikTok 标签策略。OwlSeer 根据动量、竞争和利基匹配度推荐标签。"
    },
    hero: {
      title: "构建一个真正有效的 TikTok 标签策略",
      lead: "OwlSeer 追踪标签动量、竞争和利基相关性，为每个视频推荐正确的标签——无需猜测，无需复制竞争对手。",
      ctaPrimary: "开始免费试用",
      ctaSecondary: "试用趋势雷达演示"
    },
    tldr: {
      content: "标签不是装饰品。它们是一种发现机制。OwlSeer 的趋势雷达追踪标签动量——标签使用随时间的增长率——并将其与竞争水平和你的个人匹配分数结合起来，为每个视频推荐最大化可发现性的标签。",
      link: "趋势雷达"
    },
    problem: {
      title: "三个标签错误",
      task: "识别最常见的标签错误及其影响。",
      mistakes: [
        {
          title: "错误 1 — 每次都用相同的标签。",
          desc: "创作者默认为每个视频使用 5-10 个熟悉的标签，无论主题如何。这限制了对相同受众细分的可发现性，并向算法发出你的内容没有发展的信号。"
        },
        {
          title: "错误 2 — 只用热门标签。",
          desc: "只使用高容量的热门标签意味着你的内容要与数百万个视频竞争。一个拥有 500 亿次观看的标签听起来很厉害，但你的视频只是大海捞针。"
        },
        {
          title: "错误 3 — 不相关的标签。",
          desc: "使用与你内容无关的热门标签（例如每个视频都用 #FYP）会稀释你给算法的信号。TikTok 可能会将你的内容展示给错误的受众，导致互动率低，从而损害未来的分发。"
        }
      ],
      fix: "修正方法不是更多标签——而是基于数据的更好选择：哪些标签在增长，哪些已饱和，哪些与你的内容一致。",
      action: "查看如何追踪标签动量 — 阅读关于标签动量信号。"
    },
    solution: {
      title: "OwlSeer 如何推荐标签",
      task: "查看数据如何取代标签选择中的猜测。",
      points: [
        {
          id: 1,
          title: "标签动量",
          desc: "趋势雷达中的标签列表显示每个标签在 7 天滚动窗口内的增长率。上升的标签提供可见性和竞争的最佳平衡。平缓或下降的标签表示饱和。"
        },
        {
          id: 2,
          title: "竞争水平",
          desc: "每个标签都有一个竞争水平指标——低、中或高。具有上升动量的低竞争标签是最佳点：受众增长，竞争有限。"
        },
        {
          id: 3,
          title: "匹配分数",
          desc: "标签推荐是个性化到你的账号的。一个在美妆领域热门的标签不会出现在科技创作者的推荐中，除非检测到跨界相关性。"
        }
      ],
      mix: {
        title: "推荐组合",
        broad: "1-2 个广泛标签（覆盖面）",
        niche: "2-3 个利基标签（针对性）",
        trending: "1-2 个趋势标签（助推）"
      },
      action: "在样本数据上查看标签推荐 — 打开趋势雷达。"
    },
    evidence: {
      title: "标签数据实战",
      task: "查看标签指标如何告知具体选择。",
      subtitle: "来自示例账号（科技评论利基）：",
      table: {
        headers: ["标签", "匹配", "增长", "帖子", "竞争"],
        rows: [
          ["#TechUnboxing2025", "94%", "+65%", "12.5K", "低"],
          ["#AIGadgetReview", "84%", "+24%", "8.3K", "低"],
          ["#WinterTech", "73%", "+36%", "18.2K", "中"]
        ]
      },
      recommendation: {
        title: "下一个视频的推荐组合：",
        items: [
          { type: "广泛", tag: "#TechTok", reason: "高容量，基准可发现性" },
          { type: "利基", tag: "#AIGadgetReview", reason: "84% 匹配，低竞争，上升中" },
          { type: "趋势", tag: "#TechUnboxing2025", reason: "94% 匹配，+65% 增长，剩余 8 天" }
        ]
      },
      comparison: "这个组合用趋势雷达只花了 5 秒。手动研究得出相同结论需要 30-45 分钟的标签浏览。"
    },
    conversion: {
      title: "查看你利基中的 5 个趋势标签",
      desc: "输入你的利基，看看哪些正在上升，哪些已经饱和。数据每 6-12 小时更新。",
      placeholder: "选择利基",
      niches: ["科技", "美妆", "健身", "教育", "美食", "喜剧", "商业"],
      button: "查看我的标签",
      note: "免费预览 5 个标签 · 连接账号获取个性化组合"
    },
    boundary: {
      title: "边界框",
      data: "我们使用的数据：公开可用的 TikTok 标签使用数据——帖子数、总观看量和增长率。匹配分数使用你的账号内容历史和受众资料。",
      limit: "我们不做的：OwlSeer 不保证任何标签组合会产生特定的观看次数。标签表现取决于内容质量、时机、趋势生命周期和算法行为。",
      note: "变异性说明：标签推荐每 6-12 小时更新。演示中显示的推荐是快照，可能不反映当前状况。标签策略的有效性因利基和账号规模而异。"
    },
    cta: {
      title: "获取个性化标签推荐",
      desc: "连接你的账号，看看现在哪些标签与你的利基匹配。",
      primary: "开始免费试用",
      secondary: "试用趋势雷达演示"
    }
  }
};

// --- Components ---

const HashtagCloud = () => {
  const tags = [
    { name: "#TechTok", size: 1.2, color: "bg-emerald-500", x: 20, y: 30 },
    { name: "#AI", size: 1.5, color: "bg-emerald-400", x: 50, y: 50 },
    { name: "#Gadgets", size: 1.0, color: "bg-emerald-600", x: 80, y: 20 },
    { name: "#Review", size: 0.9, color: "bg-yellow-500", x: 30, y: 70 },
    { name: "#2025", size: 1.1, color: "bg-red-500", x: 70, y: 80 },
  ];

  return (
    <div className="w-full aspect-video bg-gray-900 rounded-xl relative overflow-hidden border border-gray-800 shadow-2xl p-4">
      {tags.map((tag, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full flex items-center justify-center text-white font-bold shadow-lg ${tag.color}`}
          style={{ 
            width: `${tag.size * 60}px`, 
            height: `${tag.size * 60}px`,
            left: `${tag.x}%`,
            top: `${tag.y}%`
          }}
          animate={{ 
            y: [0, -10, 0],
            x: [0, 5, 0]
          }}
          transition={{ 
            duration: 3 + i, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.5
          }}
        >
          <span className="text-xs">{tag.name}</span>
        </motion.div>
      ))}
      <div className="absolute bottom-4 left-4 flex gap-4 text-[10px] text-gray-400">
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Low Comp</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-500"></div> Med Comp</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500"></div> High Comp</div>
      </div>
    </div>
  );
};

const MixBar = ({ t }: { t: any }) => (
  <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-6 shadow-sm">
    <h4 className="font-bold text-gray-900 dark:text-white mb-4">{t.title}</h4>
    <div className="flex h-4 rounded-full overflow-hidden mb-4">
      <div className="w-[20%] bg-blue-500" title="Broad"></div>
      <div className="w-[50%] bg-[#1AAE82]" title="Niche"></div>
      <div className="w-[30%] bg-purple-500" title="Trending"></div>
    </div>
    <div className="grid grid-cols-3 gap-2 text-xs">
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        <span className="text-gray-600 dark:text-gray-400">{t.broad}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#1AAE82]"></div>
        <span className="text-gray-600 dark:text-gray-400">{t.niche}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
        <span className="text-gray-600 dark:text-gray-400">{t.trending}</span>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

export const HashtagStrategyPage = ({ 
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
        keywords={["tiktok hashtag strategy", "hashtag analytics", "tiktok trends", "hashtag generator"]}
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
              <Hash className="w-3 h-3" /> New Feature
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
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.problem.title}</h2>
                  <p className="text-[#1AAE82] font-medium">{t.problem.task}</p>
                </div>
              </div>
              <div className="space-y-6">
                {t.problem.mistakes.map((mistake: any, i: number) => (
                  <div key={i} className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-gray-100 dark:border-slate-800">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{mistake.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{mistake.desc}</p>
                  </div>
                ))}
                <p className="text-gray-600 dark:text-gray-300 mt-4 italic">{t.problem.fix}</p>
                <button 
                  onClick={() => onNavigate('/signals')}
                  className="text-[#1AAE82] font-bold hover:underline flex items-center gap-1 mt-2"
                >
                  {t.problem.action} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <HashtagCloud />
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

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {t.solution.points.map((point: any, i: number) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#1AAE82]/10 text-[#1AAE82] rounded-full flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{point.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-8">
                <MixBar t={t.solution.mix} />
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm text-center">
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                    "{t.evidence.comparison}"
                  </p>
                  <button 
                    onClick={() => onNavigate('/simulation/trends')}
                    className="text-[#1AAE82] font-bold hover:underline flex items-center gap-1 mx-auto"
                  >
                    {t.solution.action} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
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
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-slate-800">
                    <tr>
                      {t.evidence.table.headers.map((h: string, i: number) => (
                        <th key={i} className="px-4 py-3 rounded-t-lg">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.evidence.table.rows.map((row: string[], i: number) => (
                      <tr key={i} className="bg-white dark:bg-slate-900 border-b dark:border-slate-800">
                        {row.map((cell, j) => (
                          <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-bold text-[#1AAE82]' : 'text-gray-600 dark:text-gray-300'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-4">{t.evidence.recommendation.title}</h3>
              <div className="space-y-4">
                {t.evidence.recommendation.items.map((item: any, i: number) => (
                  <div key={i} className="flex gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold h-fit shrink-0 ${
                      item.type === 'Broad' || item.type === '广泛' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      item.type === 'Niche' || item.type === '利基' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                      'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                    }`}>
                      {item.type}
                    </span>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{item.tag}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{item.reason}</div>
                    </div>
                  </div>
                ))}
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
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
                <select className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#1AAE82] backdrop-blur-sm cursor-pointer">
                   <option className="bg-slate-900">{t.conversion.placeholder}</option>
                   {t.conversion.niches.map((niche: string) => (
                     <option key={niche} value={niche} className="bg-slate-900">{niche}</option>
                   ))}
                </select>
                <button 
                  className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl transition-colors shadow-lg"
                >
                  {t.conversion.button}
                </button>
              </div>
              
              <p className="text-xs text-gray-500">{t.conversion.note}</p>
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

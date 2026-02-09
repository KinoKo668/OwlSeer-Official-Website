/**
 * @page Agencies Solution Page
 * 
 * Based on T2-07-solutions-agencies.md
 */

import React, { useState, useEffect, useRef } from 'react';
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
  Zap, 
  Clock, 
  Check, 
  ArrowRight, 
  TrendingUp, 
  Calendar, 
  FileText, 
  Users,
  LayoutDashboard,
  BarChart,
  Bot,
  Sparkles
} from 'lucide-react';

// --- Local Content (to avoid modifying translations.ts blindly) ---
const localContent = {
  en: {
    hero: {
      title: "Scale Your Agency: Manage Multiple TikTok Accounts with One AI Dashboard",
      lead: "Stop burning out on manual reporting. OwlSeer's white-label automation handles analytics, scripting, and benchmarking—so you can scale your client roster without adding headcount.",
      primaryCta: "Start Agency Trial",
      secondaryCta: "See the Demo"
    },
    tldr: "OwlSeer automates the agency workflow. Replace manual spreadsheets with AI-driven insights. Generate white-label weekly reports instantly. Benchmark clients against niche competitors. Create brand-specific scripts in seconds. One strategist, 10x output.",
    painPoints: {
      title: "Agency Challenges We Solve",
      subtitle: "Stop letting strategy bottlenecks slow down your growth.",
      cards: [
        {
          title: "Each client needs custom research.",
          desc: "Understanding every client's niche, competitors, and audience takes hours. Multiply by 10-20 accounts and strategy becomes the bottleneck.",
          solutionTitle: "Multi-Account AI Dashboard",
          solutionDesc: "Switch between client accounts instantly. AI automatically segments each client by niche and competitor set."
        },
        {
          title: "Reporting takes forever.",
          desc: "Pulling metrics, building decks, and writing insights for each client consumes half the workweek. Clients expect weekly reports but the manual process cannot scale.",
          solutionTitle: "White-Label Automated Reports",
          solutionDesc: "Generate professional, branded PDF reports every Monday. Includes AI-written insights and growth metrics. Zero manual work."
        },
        {
          title: "Hard to prove ROI.",
          desc: "Clients ask \"Is this working?\" and agencies struggle to point to concrete, data-backed answers beyond vanity metrics like follower count.",
          solutionTitle: "Competitor Benchmarking",
          solutionDesc: "Prove value with data. Show exactly how your client outperforms their direct competitors on engagement and growth velocity."
        }
      ]
    },
    solution: {
      title: "Built for Agency Workflows",
      items: [
        {
          title: "Multi-Account Dashboard",
          desc: "Switch between client accounts instantly. Each client gets a full analysis personalized to their niche."
        },
        {
          title: "Cross-Client Benchmarking",
          desc: "Compare each client against similar creators. Show clients exactly where they stand."
        },
        {
          title: "Automated Reports",
          desc: "Weekly Intelligence Reports generate for every client account every Monday."
        },
        {
          title: "Scalable Script Production",
          desc: "Generate client-specific scripts at scale. Personalized to the client's brand voice."
        }
      ],
      action: "Explore Agency Features"
    },
    results: {
      title: "Agency Results",
      stats: [
        { value: 50, suffix: "%", label: "Less Time", subLabel: "on per-client strategy" },
        { value: 3, suffix: "x", label: "More Clients", subLabel: "per strategist" },
        { value: 2, suffix: "min", label: "Report Gen", subLabel: "vs 2-3 hours manually" }
      ],
      disclaimer: "Results vary by agency size, client mix, and workflow integration. Onboarding typically takes 1-2 weeks per client account."
    },
    features: {
      title: "Everything you need to scale",
      items: [
        "Multi-Account Management",
        "Cross-Client Benchmarking",
        "Automated Weekly Reports",
        "AI Script Generation",
        "Competitor Analysis",
        "Trend Radar",
        "Engagement Signals",
        "Priority Support"
      ]
    },
    boundary: {
      note: "Data we use: Each client account is analyzed independently using their own TikTok API data. Cross-client data is never mixed. OwlSeer does not provide white-label branding in the current version."
    },
    cta: {
      title: "Ready to Scale Your TikTok Services?",
      subtitle: "Start with one client account. Add more as your team gets comfortable.",
      primary: "Start Agency Trial",
      secondary: "See the Demo"
    },
    roi: {
      headline: "How many hours could your team save this month?",
      clientCountLabel: "Number of TikTok client accounts",
      hoursPerClientLabel: "Hours per client per week (research + reporting)",
      outputTitle: "OwlSeer could save your team",
      outputSubtitle: "in strategist time.",
      disclaimer: "Based on 50% strategy time reduction at industry-average billable rate ($75/hr)."
    }
  },
  zh: {
    hero: {
      title: "代理商扩展引擎：用一个 AI 仪表盘统一管理客户账号",
      lead: "停止在手动报告上浪费生命。OwlSeer 的白标自动化系统接管分析、脚本编写和基准测试——助您在不增加人手的情况下，持续扩展客户规模。",
      primaryCta: "开始代理商试用",
      secondaryCta: "观看演示"
    },
    tldr: "OwlSeer 实现代理商工作流自动化。用 AI 驱动的洞察取代手动电子表格。即时生成白标周报。将客户与利基竞争对手进行基准对比。秒级生成品牌专属脚本。一位策略师，10 倍产出。",
    painPoints: {
      title: "我们要解决的代理商挑战",
      subtitle: "别让策略瓶颈拖慢你的增长。",
      cards: [
        {
          title: "每个客户都需要定制研究",
          desc: "了解每个客户的细分市场、竞争对手和受众需要数小时。乘以 10-20 个账户，策略就成了瓶颈。",
          solutionTitle: "多账号 AI 仪表盘",
          solutionDesc: "即时切换多个客户账号。AI 自动按利基市场和竞争对手集对每个客户进行细分。"
        },
        {
          title: "报告耗时太长",
          desc: "为每个客户提取指标、制作 PPT 和撰写洞察消耗了一半的工作周。客户期望周报，但人工流程无法扩展。",
          solutionTitle: "白标自动化报告",
          solutionDesc: "每周一生成专业的品牌 PDF 报告。包含 AI 撰写的洞察和增长指标。零人工干预。"
        },
        {
          title: "难以证明 ROI",
          desc: "客户问“这有效果吗？”，代理商很难除了粉丝数等虚荣指标外，拿出具体的数据支持的答案。",
          solutionTitle: "竞争对手基准对比",
          solutionDesc: "用数据证明价值。向客户确切展示他们在互动率和增长速度上如何超越直接竞争对手。"
        }
      ]
    },
    solution: {
      title: "专为代理商工作流打造",
      items: [
        {
          title: "多账号仪表盘",
          desc: "即时切换客户账号。每个客户获得针对其细分市场的完整分析。"
        },
        {
          title: "跨客户基准对比",
          desc: "将每个客户与类似创作者进行比较。向客户展示确切定位。"
        },
        {
          title: "自动化报告",
          desc: "每周一为每个客户账号自动生成每周情报报告。"
        },
        {
          title: "规模化脚本生产",
          desc: "规模化生成特定于客户的脚本。针对客户的品牌声音进行个性化。"
        }
      ],
      action: "探索代理商功能"
    },
    results: {
      title: "代理商成果",
      stats: [
        { value: 50, suffix: "%", label: "策略时间减少", subLabel: "每个客户" },
        { value: 3, suffix: "倍", label: "客户管理数", subLabel: "每位策略师" },
        { value: 2, suffix: "分", label: "报告生成", subLabel: "对比人工 2-3 小时" }
      ],
      disclaimer: "结果因代理商规模、客户组合和工作流整合而异。每个客户账号的入驻通常需要 1-2 周。"
    },
    features: {
      title: "扩展业务所需的一切",
      items: [
        "多账号管理",
        "跨客户基准对比",
        "自动化周报",
        "AI 脚本生成",
        "竞争对手分析",
        "趋势雷达",
        "互动信号",
        "优先支持"
      ]
    },
    boundary: {
      note: "我们使用的数据：每个客户账号都使用其自己的 TikTok API 数据独立分析。跨客户数据从未混合。OwlSeer 当前版本不提供白标品牌。"
    },
    cta: {
      title: "准备好扩展你的 TikTok 服务了吗？",
      subtitle: "从一个客户账号开始。随着团队适应再增加更多。",
      primary: "开始代理商试用",
      secondary: "观看演示"
    },
    roi: {
      headline: "你的团队这个月能节省多少小时？",
      clientCountLabel: "TikTok 客户账号数量",
      hoursPerClientLabel: "每客户每周小时数（研究 + 报告）",
      outputTitle: "OwlSeer 可以为你的团队节省",
      outputSubtitle: "策略师时间。",
      disclaimer: "基于行业平均计费率（$75/小时）和 50% 的策略时间减少计算。"
    }
  }
};

// --- Components ---

// 1. Pain Point Card (Same as ContentCreatorsPage)
const PainPointCard = ({ title, desc, solutionTitle, solutionDesc, delay }: { title: string, desc: string, solutionTitle: string, solutionDesc: string, delay: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div 
      ref={ref}
      className="relative w-full h-[320px] cursor-pointer perspective-1000 group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="w-full h-full relative preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front - Pain */}
        <motion.div 
          className="absolute inset-0 backface-hidden bg-white dark:bg-slate-900 rounded-2xl p-8 border border-red-100 dark:border-red-900/30 shadow-lg flex flex-col justify-center items-center text-center"
          initial={{ x: 0 }}
          animate={isInView ? { x: [0, -6, 6, -3, 3, 0] } : {}}
          transition={{ duration: 0.4, delay: delay, ease: "easeInOut" }}
        >
          <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500 mb-4">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">"{title}"</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
          <div className="mt-4 text-xs text-gray-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Tap to see solution <TrendingUp className="w-3 h-3" />
          </div>
        </motion.div>

        {/* Back - Solution */}
        <div 
          className="absolute inset-0 backface-hidden bg-[#1AAE82] rounded-2xl p-8 shadow-xl flex flex-col justify-center items-center text-center text-white rotate-y-180"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
            <Check className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">{solutionTitle}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{solutionDesc}</p>
        </div>
      </motion.div>
    </div>
  );
};

// 2. Count Up Stat (Same as ContentCreatorsPage)
const CountUpStat = ({ target, suffix = "", label, subLabel }: { target: number, suffix?: string, label: string, subLabel?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
      <div className="text-4xl md:text-5xl font-bold text-[#1AAE82] mb-2 font-display">
        {count}{suffix}
      </div>
      <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">{label}</div>
      {subLabel && <div className="text-sm text-gray-500 dark:text-gray-400">{subLabel}</div>}
    </div>
  );
};

// 3. ROI Calculator (New for Agencies)
const ROICalculator = ({ content }: { content: any }) => {
  const [clientCount, setClientCount] = useState(5);
  const [hoursPerClient, setHoursPerClient] = useState(3);

  const savedHours = Math.round(clientCount * hoursPerClient * 0.5);
  const monthlySavings = Math.round(savedHours * 4 * 75);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-slate-800 shadow-xl max-w-3xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1AAE82] to-blue-500" />
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {content.headline}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Sliders */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">{content.clientCountLabel}</label>
              <span className="text-[#1AAE82] font-bold">{clientCount}</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="20" 
              value={clientCount} 
              onChange={(e) => setClientCount(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#1AAE82]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1</span>
              <span>10</span>
              <span>20</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">{content.hoursPerClientLabel}</label>
              <span className="text-[#1AAE82] font-bold">{hoursPerClient}</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value={hoursPerClient} 
              onChange={(e) => setHoursPerClient(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#1AAE82]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-6 border border-gray-100 dark:border-slate-700 flex flex-col justify-center">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{content.outputTitle}</div>
          <div className="text-3xl font-bold text-[#1AAE82] mb-1">{savedHours} hours/week</div>
          <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">= ${monthlySavings.toLocaleString()}/month</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{content.outputSubtitle}</div>
        </div>
      </div>

      <div className="text-center pt-4 border-t border-gray-100 dark:border-slate-800">
        <p className="text-xs text-gray-400 mb-4">{content.disclaimer}</p>
        <a 
          href="/auth"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl shadow-lg shadow-[#1AAE82]/20 transition-all hover:-translate-y-1"
        >
          {content.headline.includes("save") ? "Start Agency Trial" : "开始代理商试用"} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

// 4. Multi-Account Dashboard Preview (New for Agencies)
const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState(0);
  const clients = [
    { name: "@FitnessStudioX", color: "text-blue-500", bg: "bg-blue-500" },
    { name: "@OrganicBeautyCo", color: "text-green-500", bg: "bg-green-500" },
    { name: "@TechStartupHQ", color: "text-purple-500", bg: "bg-purple-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-800 overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-100 dark:border-slate-800 p-4 flex items-center gap-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="h-8 w-px bg-gray-100 dark:bg-slate-800 mx-2" />
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {clients.map((client, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === idx 
                  ? 'bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white' 
                  : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {client.name}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 relative min-h-[300px]">
        {clients.map((client, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: activeTab === idx ? 1 : 0, 
              x: activeTab === idx ? 0 : 20,
              pointerEvents: activeTab === idx ? 'auto' : 'none'
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 p-6"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${client.bg} bg-opacity-10 flex items-center justify-center ${client.color}`}>
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{client.name}</h3>
                  <p className="text-sm text-gray-500">Agency Managed Account</p>
                </div>
              </div>
              <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">
                Active
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
                <div className="text-xs text-gray-500 mb-1">Engagement Rate</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{(4.2 + idx).toFixed(1)}%</div>
                <div className="text-xs text-green-500 font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +{12 + idx}%
                </div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
                <div className="text-xs text-gray-500 mb-1">Followers</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{(12.5 + idx * 2).toFixed(1)}k</div>
                <div className="text-xs text-green-500 font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +{5 + idx}%
                </div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
                <div className="text-xs text-gray-500 mb-1">Trend Matches</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{8 + idx}</div>
                <div className="text-xs text-blue-500 font-bold">New this week</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center gap-3">
                  <Bot className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Weekly Report Generated</span>
                </div>
                <span className="text-xs text-gray-400">2m ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">3 New Scripts Ready</span>
                </div>
                <span className="text-xs text-gray-400">1h ago</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export function AgenciesPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  // SEO
  const seo = seoConfig.agencies?.[language as 'en' | 'zh'] || seoConfig.agencies?.en;

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
        alternates={generateAlternates('/solutions/agencies')}
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
        <section className="relative pt-20 pb-32 overflow-hidden">
           <div className="absolute inset-0 bg-white dark:bg-[#020617]">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#1AAE82] opacity-20 blur-[100px]"></div>
           </div>

           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
             >
               <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6 leading-tight max-w-4xl mx-auto">
                 {content.hero.title}
               </h1>
               <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
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
                <Zap className="w-5 h-5" />
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

        {/* 3. PAIN POINTS SECTION */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#020617]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">
                {content.painPoints.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {content.painPoints.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.painPoints.cards.map((card: any, idx: number) => (
                <PainPointCard 
                  key={idx}
                  title={card.title}
                  desc={card.desc}
                  solutionTitle={card.solutionTitle}
                  solutionDesc={card.solutionDesc}
                  delay={idx * 0.2}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. SOLUTION SECTION */}
        <section className="py-24 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-6">
                  {content.solution.title}
                </h2>
                <div className="space-y-8">
                  {content.solution.items.map((item: any, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 }}
                      className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors border-l-4 border-transparent hover:border-[#1AAE82]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#1AAE82]/10 flex items-center justify-center flex-shrink-0 text-[#1AAE82]">
                        {idx === 0 ? <LayoutDashboard className="w-5 h-5" /> : 
                         idx === 1 ? <BarChart className="w-5 h-5" /> :
                         idx === 2 ? <FileText className="w-5 h-5" /> :
                         <Bot className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 pl-4">
                  <a href="/features" className="text-[#1AAE82] font-bold hover:underline flex items-center gap-1">
                    {content.solution.action} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#1AAE82]/30 to-blue-500/30 rounded-2xl blur-2xl opacity-50" />
                <DashboardPreview />
              </div>
            </div>
          </div>
        </section>

        {/* 5. RESULTS SECTION */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#020617]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">
                {content.results.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.results.stats.map((stat: any, idx: number) => (
                <CountUpStat 
                  key={idx}
                  target={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  subLabel={stat.subLabel}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 6. ROI CALCULATOR */}
        <section className="py-24 bg-gray-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <ROICalculator content={content.roi} />
          </div>
        </section>

        {/* 7. FEATURES CHECKLIST */}
        <section className="py-24 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 font-display text-gray-900 dark:text-white">{content.features.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {content.features.items.map((item: string, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#1AAE82]/20 flex items-center justify-center flex-shrink-0 text-[#1AAE82]">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1AAE82]/10 text-[#1AAE82] text-sm font-bold">
                <Sparkles className="w-4 h-4" /> All included in Agency Plan
              </div>
            </div>
          </div>
        </section>

        {/* 8. BOUNDARY & CTA */}
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
            <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto">
              {content.cta.subtitle}
            </p>
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

/**
 * @page Brands Solution Page
 * 
 * Based on T2-08-solutions-brands.md
 */

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts';
import { motion, useInView, AnimatePresence } from 'motion/react';
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
  ShieldCheck, 
  TrendingUp, 
  MessageSquare, 
  BarChart2, 
  AlertTriangle,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Lock,
  Search
} from 'lucide-react';

// --- Local Content ---
const localContent = {
  en: {
    hero: {
      title: "Authentic Brand Presence on TikTok: Stop Being Awkward, Start Being Viral",
      lead: "Don't just repurpose ads. OwlSeer's AI Brand Safety Engine ensures your content is culturally relevant, reputation-safe, and algorithmically optimized for 2026 audiences.",
      primaryCta: "Start Brand Trial",
      secondaryCta: "See the Demo"
    },
    tldr: "Repurposing ads kills reach. OwlSeer's Brand Safety Engine (0-100 score) filters risky trends instantly. Tone-Matched Scripts adapt your brand voice to TikTok culture. Join the 1% of brands that feel native, not intrusive.",
    problem: {
      title: "Why Most Brand TikToks Fall Flat",
      subtitle: "Understand the gap between brand content and TikTok-native content.",
      items: [
        {
          title: "Repurposed content",
          desc: "Taking a polished Instagram ad and posting it on TikTok produces content that feels out of place. TikTok audiences expect raw, personality-driven content."
        },
        {
          title: "Wrong trends",
          desc: "Brands jump on trending sounds without checking reputational risk. A financial services brand dueting a dance trend reads as tone-deaf."
        },
        {
          title: "No data, just vibes",
          desc: "Without understanding which content resonates with their specific audience, brands guess at topics — producing inconsistent results."
        }
      ]
    },
    solution: {
      title: "Brand-Specific Features",
      items: [
        {
          title: "Trend Matching with Brand Safety",
          desc: "Match scores filter trends by brand relevance. The brand safety score (0-100 scale) flags trends that carry reputational risk.",
          icon: <ShieldCheck className="w-5 h-5" />
        },
        {
          title: "On-Brand Script Generation",
          desc: "Generate scripts that match your brand voice. Specify tone (professional, friendly, educational) and the AI adapts hook style.",
          icon: <MessageSquare className="w-5 h-5" />
        },
        {
          title: "Cultural Timing",
          desc: "Trend Radar detects trend lifecycle stages so brands can participate at the right moment — early enough to be relevant.",
          icon: <TrendingUp className="w-5 h-5" />
        },
        {
          title: "Competitive Context",
          desc: "Benchmark Context shows how your brand account compares to peer accounts in your category.",
          icon: <BarChart2 className="w-5 h-5" />
        }
      ],
      action: "Explore Brand Features"
    },
    results: {
      title: "Brand Results",
      stats: [
        { value: 2, suffix: "x", label: "Engagement", subLabel: "vs repurposed content" },
        { value: 85, suffix: "%", label: "Less \"Cringe\"", subLabel: "reduction in off-brand feedback" },
        { value: 40, suffix: "%", label: "Faster Approval", subLabel: "cycles with data-backed briefs" }
      ],
      disclaimer: "Results vary by brand, industry, and team adoption. Brand safety scoring effectiveness depends on trend data freshness."
    },
    features: {
      title: "Build Your Brand's TikTok Presence",
      items: [
        "Brand Safety Scoring (0-100)",
        "Tone-Matched Scripts",
        "Trend Relevance Filtering",
        "Competitor Benchmarking",
        "Trend Lifecycle Alerts",
        "Engagement Prediction",
        "Audience Overlap Analysis",
        "Risk Assessment"
      ]
    },
    boundary: {
      note: "Data we use: Brand account metrics through TikTok API, combined with platform-wide trend data. OwlSeer does not manage brand reputation beyond trend-level safety scoring. We do not provide legal compliance review."
    },
    cta: {
      title: "Build Your Brand's TikTok Presence",
      subtitle: "Start with your brand account. See which trends fit — and which to avoid.",
      primary: "Start Brand Trial",
      secondary: "See the Demo"
    },
    conversion: {
      headline: "Is your brand's TikTok content authentic or awkward?",
      subheadline: "Enter your brand's TikTok handle for a free Brand Fit Score.",
      placeholder: "@brandname",
      button: "Check My Brand Fit",
      resultTitle: "Brand Fit Score",
      fullReport: "Get Full Brand Report"
    }
  },
  zh: {
    hero: {
      title: "品牌 TikTok 原生化引擎：告别“官方号”的尴尬，打造真实爆款",
      lead: "别再把广告片搬运到 TikTok 了。OwlSeer 的 AI 品牌安全引擎确保您的内容既符合文化潮流，又规避声誉风险，精准击中 2026 年年轻受众的算法偏好。",
      primaryCta: "开始品牌试用",
      secondaryCta: "观看演示"
    },
    tldr: "搬运广告等于自杀。OwlSeer 独有的品牌安全评分 (0-100) 即时过滤高风险趋势。语调匹配脚本将您的品牌声音转化为 TikTok 原生语言。加入那 1% 真正懂平台的品牌行列。",
    problem: {
      title: "为什么大多数品牌 TikTok 表现平平",
      subtitle: "理解品牌内容与 TikTok 原生内容之间的差距。",
      items: [
        {
          title: "搬运内容",
          desc: "将精致的 Instagram 广告发布到 TikTok 上会显得格格不入。TikTok 受众期待的是原生的、有个性的内容。"
        },
        {
          title: "跟错趋势",
          desc: "品牌在没有检查声誉风险的情况下盲目跟风。金融服务品牌模仿舞蹈趋势会被视为缺乏敏感度。"
        },
        {
          title: "靠直觉而非数据",
          desc: "不了解哪些内容能引起特定受众的共鸣，品牌只能猜测话题——导致结果不稳定。"
        }
      ]
    },
    solution: {
      title: "品牌专属功能",
      items: [
        {
          title: "附带品牌安全评分的趋势匹配",
          desc: "匹配分数过滤趋势相关性。品牌安全评分（0-100）标记带有声誉风险的趋势。",
          icon: <ShieldCheck className="w-5 h-5" />
        },
        {
          title: "品牌调性脚本生成",
          desc: "生成符合你品牌声音的脚本。指定语气（专业、友好、教育），AI 会调整钩子风格。",
          icon: <MessageSquare className="w-5 h-5" />
        },
        {
          title: "文化时机把握",
          desc: "趋势雷达检测趋势生命周期阶段，以便品牌在正确的时刻参与——既要相关又要及时。",
          icon: <TrendingUp className="w-5 h-5" />
        },
        {
          title: "竞争对比",
          desc: "基准背景显示你的品牌账号与同类同行的对比情况。",
          icon: <BarChart2 className="w-5 h-5" />
        }
      ],
      action: "探索品牌功能"
    },
    results: {
      title: "品牌成果",
      stats: [
        { value: 2, suffix: "倍", label: "互动率", subLabel: "对比搬运内容" },
        { value: 85, suffix: "%", label: "尴尬感减少", subLabel: "负面反馈减少" },
        { value: 40, suffix: "%", label: "审批更快", subLabel: "基于数据的简报" }
      ],
      disclaimer: "结果因品牌、行业和团队采用情况而异。品牌安全评分的有效性取决于趋势数据的时效性。"
    },
    features: {
      title: "打造你的品牌 TikTok 存在感",
      items: [
        "品牌安全评分 (0-100)",
        "调性匹配脚本",
        "趋势相关性过滤",
        "竞争对手基准",
        "趋势生命周期提醒",
        "互动预测",
        "受众重叠分析",
        "风险评估"
      ]
    },
    boundary: {
      note: "我们使用的数据：通过 TikTok API 获取的品牌账号指标，结合全平台趋势数据。OwlSeer 不管理趋势级安全评分以外的品牌声誉。我们不提供法律合规审查。"
    },
    cta: {
      title: "打造你的品牌 TikTok 存在感",
      subtitle: "从你的品牌账号开始。看看哪些趋势适合——哪些应该避免。",
      primary: "开始品牌试用",
      secondary: "观看演示"
    },
    conversion: {
      headline: "你的品牌 TikTok 内容是真实还是尴尬？",
      subheadline: "输入你的品牌 TikTok 账号，获取免费品牌适配评分。",
      placeholder: "@品牌名称",
      button: "检查品牌适配度",
      resultTitle: "品牌适配评分",
      fullReport: "获取完整品牌报告"
    }
  }
};

// --- Components ---

// 1. Split-Screen Comparison (Problem Section)
const SplitScreenComparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[300px] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row mb-12">
      {/* Divider */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={isInView ? { scale: [1, 1.1, 1] } : {}}
        transition={{ delay: 1, duration: 0.4 }}
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-white z-20 hidden md:block -translate-x-1/2 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
      />

      {/* Left: Repurposed (Bad) */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex-1 bg-gray-100 dark:bg-slate-800 relative p-6 flex flex-col justify-between grayscale opacity-80"
      >
        <div className="absolute top-4 left-4 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-red-200">
          Before: Repurposed
        </div>
        
        <div className="mt-10 space-y-3">
          <div className="flex items-center gap-2 text-red-500 text-sm">
            <AlertTriangle className="w-4 h-4" /> Studio lighting (Not native)
          </div>
          <div className="flex items-center gap-2 text-red-500 text-sm">
            <AlertTriangle className="w-4 h-4" /> No hook in first 2s
          </div>
          <div className="flex items-center gap-2 text-red-500 text-sm">
            <AlertTriangle className="w-4 h-4" /> Forced product placement
          </div>
        </div>

        <div className="mt-auto bg-white/50 dark:bg-black/20 p-3 rounded-lg backdrop-blur-sm">
          <div className="text-xs text-gray-500 uppercase font-bold mb-1">Engagement Rate</div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="text-2xl font-bold text-gray-400"
          >
            1.2%
          </motion.div>
        </div>
      </motion.div>

      {/* Right: Native (Good) */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="flex-1 bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 relative p-6 flex flex-col justify-between"
      >
        <div className="absolute top-4 right-4 bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-green-200">
          After: OwlSeer Guided
        </div>

        <div className="mt-10 space-y-3">
          <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
            <Check className="w-4 h-4" /> Curiosity hook
          </div>
          <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
            <Check className="w-4 h-4" /> TikTok-native format
          </div>
          <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
            <Check className="w-4 h-4" /> Authentic integration
          </div>
        </div>

        <div className="mt-auto bg-white dark:bg-black/40 p-3 rounded-lg shadow-sm border border-green-100 dark:border-green-900/30">
          <div className="text-xs text-gray-500 uppercase font-bold mb-1">Engagement Rate</div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="text-2xl font-bold text-[#1AAE82]"
          >
            4.8%
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// 2. Brand Safety Gauge (Solution Section)
const BrandSafetyGauge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isInView) {
      const target = 87;
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setScore(target);
          clearInterval(timer);
        } else {
          setScore(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 shadow-lg relative overflow-hidden">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Brand Safety Score</h3>
        <p className="text-xs text-gray-500">Real-time risk assessment</p>
      </div>

      <div className="relative w-48 h-24 mx-auto mb-4 overflow-hidden">
        {/* Gauge Background */}
        <div className="absolute top-0 left-0 w-full h-full rounded-t-full border-[12px] border-gray-100 dark:border-slate-800" />
        {/* Gauge Segments */}
        <div className="absolute top-0 left-0 w-full h-full rounded-t-full border-[12px] border-transparent border-l-red-500 rotate-[-45deg] origin-bottom transform translate-y-full" style={{ clipPath: 'polygon(0 0, 40% 0, 50% 100%, 0 100%)' }} />
        
        {/* Needle */}
        <motion.div 
          className="absolute bottom-0 left-1/2 w-1 h-20 bg-gray-800 dark:bg-white origin-bottom rounded-full z-10"
          initial={{ rotate: -90 }}
          animate={isInView ? { rotate: (score / 100) * 180 - 90 } : {}}
          transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ translateX: '-50%' }}
        />
        <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-gray-900 dark:bg-white rounded-full -translate-x-1/2 translate-y-1/2 z-20" />
      </div>

      <div className="text-center">
        <motion.div 
          key={score}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className={`text-4xl font-bold font-display ${
            score > 70 ? 'text-[#1AAE82]' : score > 40 ? 'text-yellow-500' : 'text-red-500'
          }`}
        >
          {score}
        </motion.div>
        <div className="text-sm font-bold mt-1 text-gray-900 dark:text-white">Safe to Post</div>
        <div className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100 dark:border-slate-800">
          Powered by 12k+ scans today
        </div>
      </div>
    </div>
  );
};

// 3. Tone Matching Preview (Solution Section)
const ToneMatchingPreview = () => {
  const tones = [
    { name: "Professional", color: "bg-blue-50 text-blue-600 border-blue-200", icon: <Lock className="w-3 h-3" />, text: "Data-driven approach to..." },
    { name: "Friendly", color: "bg-green-50 text-green-600 border-green-200", icon: <Sparkles className="w-3 h-3" />, text: "You won't believe how easy..." },
    { name: "Educational", color: "bg-purple-50 text-purple-600 border-purple-200", icon: <Zap className="w-3 h-3" />, text: "Here are 3 ways to fix..." }
  ];

  return (
    <div className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-gray-100 dark:border-slate-800/50">
      <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 text-center">Tone Matching</div>
      <div className="space-y-3">
        {tones.map((tone, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className={`p-3 rounded-xl border ${tone.color.replace('text-', 'border-opacity-30 ')} bg-white dark:bg-slate-900 flex items-center gap-3 shadow-sm`}
          >
            <div className={`w-8 h-8 rounded-lg ${tone.color} flex items-center justify-center`}>
              {tone.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-gray-900 dark:text-white flex justify-between">
                {tone.name}
                <span className="text-[10px] text-gray-400 font-normal">AI Generated</span>
              </div>
              <div className="text-xs text-gray-500 truncate">{tone.text}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 4. Brand Fit Tool (Conversion Hook)
const BrandFitTool = ({ content }: { content: any }) => {
  const [handle, setHandle] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const checkFit = () => {
    if (!handle) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult({
        score: 72,
        pros: "Strong trend match potential",
        cons: "Tone needs native adaptation"
      });
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-slate-800 shadow-xl max-w-2xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1AAE82] to-blue-500" />
      
      {!result ? (
        <>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {content.headline}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {content.subheadline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input 
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                placeholder={content.placeholder}
                className="w-full pl-4 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-[#1AAE82] focus:border-transparent outline-none transition-all"
              />
            </div>
            <button 
              onClick={checkFit}
              disabled={!handle || loading}
              className={`px-6 py-3 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 whitespace-nowrap ${
                !handle || loading
                  ? 'bg-gray-300 dark:bg-slate-700 cursor-not-allowed' 
                  : 'bg-[#1AAE82] hover:bg-[#15956F] shadow-lg shadow-[#1AAE82]/20'
              }`}
            >
              {loading ? (
                <Sparkles className="w-5 h-5 animate-spin" />
              ) : (
                content.button
              )}
            </button>
          </div>
        </>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-4">
             <div className="font-bold text-gray-900 dark:text-white">{handle}</div>
             <button onClick={() => setResult(null)} className="text-sm text-gray-400 hover:text-gray-600">Reset</button>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 flex-shrink-0">
               <svg className="w-full h-full transform -rotate-90">
                 <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100 dark:text-slate-800" />
                 <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={251.2} strokeDashoffset={251.2 * (1 - result.score/100)} className="text-[#1AAE82]" />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-900 dark:text-white">
                 {result.score}
               </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                <Check className="w-4 h-4" /> {result.pros}
              </div>
              <div className="flex items-center gap-2 text-sm text-yellow-600 font-medium">
                <AlertTriangle className="w-4 h-4" /> {result.cons}
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <a 
              href="/auth"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl shadow-lg shadow-[#1AAE82]/20 transition-all hover:-translate-y-1"
            >
              {content.fullReport} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// 5. Count Up Stat (Reused)
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

export function BrandsPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  // SEO
  const seo = seoConfig.brands?.[language as 'en' | 'zh'] || seoConfig.brands?.en;

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
        alternates={generateAlternates('/solutions/brands')}
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

        {/* 3. PROBLEM SECTION (Split Screen) */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#020617]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">
                {content.problem.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {content.problem.subtitle}
              </p>
            </div>

            <SplitScreenComparison />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {content.problem.items.map((item: any, idx: number) => (
                 <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800">
                   <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500 mb-4 font-bold">
                     {idx + 1}
                   </div>
                   <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                   <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                 </div>
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
                        {item.icon}
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
              
              <div className="space-y-8">
                <BrandSafetyGauge />
                <ToneMatchingPreview />
              </div>
            </div>
          </div>
        </section>

        {/* 5. BRAND FIT TOOL (Conversion) */}
        <section className="py-24 bg-gray-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <BrandFitTool content={content.conversion} />
          </div>
        </section>

        {/* 6. RESULTS SECTION */}
        <section className="py-24 bg-white dark:bg-[#020617]">
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
            <p className="text-center text-xs text-gray-400 mt-8 max-w-2xl mx-auto">
              {content.results.disclaimer}
            </p>
          </div>
        </section>

        {/* 7. FEATURES CHECKLIST */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-slate-900">
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

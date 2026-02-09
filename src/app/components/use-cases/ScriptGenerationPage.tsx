import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PenTool, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Play, 
  FileText,
  Mic,
  Hash,
  Sparkles,
  Lock,
  Calendar,
  ChevronRight
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
      title: "AI TikTok Script Generation | OwlSeer",
      description: "Generate TikTok scripts in 60 seconds from your engagement data. Hook, body, CTA, sounds, and hashtags — all personalized to your audience."
    },
    hero: {
      title: "Generate TikTok Scripts from Your Data in 60 Seconds",
      lead: "OwlSeer creates ready-to-shoot scripts personalized to your audience — with hooks, body content, CTAs, sounds, and hashtags, all derived from your engagement signals.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Try Script Studio Demo"
    },
    tldr: {
      content: "Script block wastes hours. OwlSeer's Script Studio generates complete scripts from your account data in under 60 seconds. Each script follows a hook-body-CTA structure calibrated to your audience's retention patterns. Hooks are based on your hook rate data, sounds come from sound velocity trends, and hashtags from hashtag momentum. You keep full control — customize tone, edit sections, or regenerate individual parts.",
      link: "Script Studio"
    },
    problem: {
      title: "Why Script Writing Is the Bottleneck",
      task: "Understand why writing scripts slows down most creators.",
      desc1: "TikTok rewards consistency. Creators who post 3-5 times per week grow faster than those who post sporadically. But producing 3-5 quality scripts per week requires significant time — topic research, hook writing, body structuring, CTA crafting, sound selection, and hashtag research. For most solo creators, this takes 2-4 hours per week.",
      desc2: "The alternative — posting without a script — leads to meandering content, weak hooks, and missed CTAs. Unscripted content typically has lower hook rates and watch-through rates because it lacks the tight structure that holds attention.",
      desc3: "Generic AI writing tools (ChatGPT, Jasper) can speed up writing, but they produce generic scripts that do not account for what works specifically with your audience. A script that works for a comedy creator would fail for a tech reviewer.",
      action: "See how data-driven scripts differ from generic ones — open Script Studio."
    },
    solution: {
      title: "How OwlSeer Generates Scripts",
      task: "See the three inputs that make each script personalized.",
      sources: [
        {
          id: 1,
          title: "Your Engagement Signals",
          icon: <Zap className="w-5 h-5" />,
          desc: "The AI analyzes your hook rate and watch-through rate to determine which formats work best. If three-segment scripts outperform single-segment by 40%, the AI defaults to three-segment structure."
        },
        {
          id: 2,
          title: "Current Trend Data",
          icon: <Sparkles className="w-5 h-5" />,
          desc: "Scripts can incorporate trending sounds and hashtags from Trend Radar. If you generate a script from a trending topic, the hook references the trend and the recommendations align with current momentum."
        },
        {
          id: 3,
          title: "Your Content Profile",
          icon: <FileText className="w-5 h-5" />,
          desc: "OwlSeer tracks your niche, brand voice, and past content to maintain consistency. A fitness creator gets different hook patterns than a finance educator, even for similar topics."
        }
      ],
      output: "The output is a complete scene-by-scene script: Hook (0-3s), Body (3-45s), CTA (last 5-10s) — plus recommended sound, hashtags, video length, and posting time.",
      action: "Try generating a script — open Script Studio demo."
    },
    workflow: {
      title: "The Script Workflow",
      task: "See how scripts fit into your weekly content process.",
      steps: [
        { day: "Mon", task: "Review Weekly Report & Recommendations" },
        { day: "Mon/Tue", task: "Generate 3-5 Scripts in Script Studio" },
        { day: "Wed-Fri", task: "Film Scripts (using shooting outline)" },
        { day: "Schedule", task: "Place on Calendar at AI-recommended times" }
      ],
      stat: "Total scripting time per week: 15-30 minutes (down from 2-4 hours)."
    },
    conversion: {
      title: "Get a Free Sample Hook",
      desc: "Tell us your niche and topic, see how OwlSeer writes your opening.",
      nichePlaceholder: "Select Niche",
      topicPlaceholder: "Enter a topic (e.g. iPhone 16 review)",
      button: "Generate My Hook",
      niches: ["Tech", "Beauty", "Fitness", "Education", "Food", "Comedy", "Business"],
      note: "Free preview of 1 sample hook. Connect account for full personalized scripts."
    },
    boundary: {
      title: "Boundary Box",
      data: "Data we use: Scripts draw from your engagement signals, content history, trend data, and niche patterns. Sound and hashtag recommendations use real-time platform data.",
      limit: "What we do not do: Scripts are starting points, not final products. Creators should review and personalize each script to match their voice, filming setup, and brand.",
      note: "Variability note: Script relevance improves with more account data. New accounts may receive more template-driven scripts initially. AI-generated hooks and CTAs may need light editing for personal voice."
    },
    cta: {
      title: "Write Your First Script in 60 Seconds",
      desc: "Connect your account and generate a personalized script immediately.",
      primary: "Start Free Trial",
      secondary: "Try Script Studio Demo"
    }
  },
  zh: {
    meta: {
      title: "AI TikTok 脚本生成 | OwlSeer",
      description: "在 60 秒内从你的互动数据生成 TikTok 脚本。钩子、正文、CTA、音频和标签——全部为你的受众定制。"
    },
    hero: {
      title: "60 秒内从你的数据生成 TikTok 脚本",
      lead: "OwlSeer 为你的受众定制可直接拍摄的脚本——钩子、正文、CTA、音频和标签，全部来自你的互动信号。",
      ctaPrimary: "开始免费试用",
      ctaSecondary: "试用脚本工作室演示"
    },
    tldr: {
      content: "脚本写作浪费数小时。OwlSeer 的脚本工作室在 60 秒内从你的账号数据生成完整脚本。每个脚本都遵循针对你受众留存模式校准的钩子-正文-CTA 结构。钩子基于你的钩子率数据，音频来自音频速度趋势，标签来自标签势能。你保持完全控制——自定义语气、编辑部分或重新生成个别部分。",
      link: "脚本工作室"
    },
    problem: {
      title: "为什么脚本写作是瓶颈",
      task: "了解为什么编写脚本会拖慢大多数创作者的速度。",
      desc1: "TikTok 奖励一致性。每周发布 3-5 次的创作者比偶尔发布的创作者增长得更快。但每周制作 3-5 个高质量脚本需要大量时间——话题研究、钩子编写、正文构建、CTA 制作、音频选择和标签研究。对于大多数独立创作者来说，这每周需要 2-4 小时。",
      desc2: "替代方案——没有脚本直接发布——导致内容松散、钩子薄弱和 CTA 缺失。无脚本内容的钩子率和完播率通常较低，因为它缺乏保持注意力的紧凑结构。",
      desc3: "通用 AI 写作工具（ChatGPT, Jasper）可以加快写作速度，但它们产生的是通用脚本，不考虑什么对你的受众特别有效。一个对喜剧创作者有效的脚本对科技评论员来说会失败。",
      action: "查看数据驱动脚本与通用脚本的区别 — 打开脚本工作室。"
    },
    solution: {
      title: "OwlSeer 如何生成脚本",
      task: "查看使每个脚本个性化的三个输入。",
      sources: [
        {
          id: 1,
          title: "你的互动信号",
          icon: <Zap className="w-5 h-5" />,
          desc: "AI 分析你的钩子率和完播率以确定哪种格式效果最好。如果三段式脚本比单段式表现好 40%，AI 会默认使用三段式结构。"
        },
        {
          id: 2,
          title: "当前趋势数据",
          icon: <Sparkles className="w-5 h-5" />,
          desc: "脚本可以包含来自趋势雷达的趋势音频和标签。如果你从趋势话题生成脚本，钩子会引用该趋势，建议会与当前势能保持一致。"
        },
        {
          id: 3,
          title: "你的内容画像",
          icon: <FileText className="w-5 h-5" />,
          desc: "OwlSeer 跟踪你的利基、品牌声音和过去的内容以保持一致性。健身创作者会得到与金融教育者不同的钩子模式，即使是类似的话题。"
        }
      ],
      output: "输出是一个完整的分场景脚本：钩子 (0-3s)、正文 (3-45s)、CTA (最后 5-10s) — 加上推荐的音频、标签、视频时长和发布时间。",
      action: "尝试生成一个脚本 — 打开脚本工作室演示。"
    },
    workflow: {
      title: "脚本工作流",
      task: "查看脚本如何融入你的每周内容流程。",
      steps: [
        { day: "周一", task: "查看周报和智能建议" },
        { day: "周一/周二", task: "在脚本工作室生成 3-5 个脚本" },
        { day: "周三-周五", task: "拍摄脚本（使用拍摄大纲）" },
        { day: "安排", task: "在 AI 推荐的时间放置在日历上" }
      ],
      stat: "每周脚本总时间：15-30 分钟（从 2-4 小时减少）。"
    },
    conversion: {
      title: "获取免费样本钩子",
      desc: "告诉我们你的利基和话题，看看 OwlSeer 如何编写你的开场。",
      nichePlaceholder: "选择利基",
      topicPlaceholder: "输入一个话题（例如 iPhone 16 评测）",
      button: "生成我的钩子",
      niches: ["科技", "美妆", "健身", "教育", "美食", "喜剧", "商业"],
      note: "免费预览 1 个样本钩子。连接账号获取完整个性化脚本。"
    },
    boundary: {
      title: "边界框",
      data: "我们使用的数据：脚本来自你的互动信号、内容历史、趋势数据和利基模式。音频和标签建议使用实时平台数据。",
      limit: "我们不做的：脚本是起点而非成品。创作者应审查并个性化每个脚本以匹配他们的声音、拍摄设置和品牌。",
      note: "变异性说明：脚本相关性随账号数据增加而提高。新账号最初可能会收到更偏模板化的脚本。AI 生成的钩子和 CTA 可能需要针对个人声音进行轻微编辑。"
    },
    cta: {
      title: "在 60 秒内编写你的第一个脚本",
      desc: "连接你的账号并立即生成一个个性化脚本。",
      primary: "开始免费试用",
      secondary: "试用脚本工作室演示"
    }
  }
};

// --- Components ---

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState(0); // 0: Hook, 1: Body, 2: CTA
  
  useEffect(() => {
    const fullText = [
      "HOOK: Stop buying new phones until you see this...",
      "BODY: The tech industry is hiding a secret about release cycles. When you look at the specs...",
      "CTA: Comment 'Truth' for the full list."
    ];
    
    let currentText = "";
    let currentIndex = 0;
    let currentPhase = 0;
    
    const interval = setInterval(() => {
      if (currentPhase >= 3) {
        clearInterval(interval);
        return;
      }
      
      const targetText = fullText[currentPhase];
      
      if (currentIndex < targetText.length) {
        currentText += targetText[currentIndex];
        setText(prev => prev + targetText[currentIndex]);
        currentIndex++;
      } else {
        setPhase(prev => prev + 1);
        currentPhase++;
        currentIndex = 0;
        setText(prev => prev + "\n\n");
        currentText = "";
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm shadow-2xl border border-gray-800 h-64 overflow-hidden relative">
      <div className="absolute top-4 right-4 flex gap-2">
        <div className={`px-2 py-0.5 rounded text-[10px] font-bold ${phase >= 1 ? 'bg-green-500/20 text-green-400' : 'bg-gray-800 text-gray-600'}`}>HOOK</div>
        <div className={`px-2 py-0.5 rounded text-[10px] font-bold ${phase >= 2 ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-800 text-gray-600'}`}>BODY</div>
        <div className={`px-2 py-0.5 rounded text-[10px] font-bold ${phase >= 3 ? 'bg-orange-500/20 text-orange-400' : 'bg-gray-800 text-gray-600'}`}>CTA</div>
      </div>
      <div className="whitespace-pre-wrap text-gray-300">
        {text}
        <motion.span 
          animate={{ opacity: [0, 1, 0] }} 
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-[#1AAE82] ml-1 align-middle"
        />
      </div>
    </div>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t < 47 ? t + 1 : t);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700">
      <div className="text-4xl font-bold font-mono text-[#1AAE82] mb-1">
        0:{time.toString().padStart(2, '0')}
      </div>
      <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Generation Time</div>
    </div>
  );
};

// --- Main Page Component ---

export const ScriptGenerationPage = ({ 
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
        keywords={["tiktok script generator", "ai script writing", "content automation", "viral hooks"]}
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
              <PenTool className="w-3 h-3" /> New Feature
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
                onClick={() => onNavigate('/simulation/script-studio')}
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
                      onClick={() => onNavigate('/simulation/script-studio')}
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
                <p>{t.problem.desc3}</p>
                <button 
                  onClick={() => onNavigate('/simulation/script-studio')}
                  className="text-[#1AAE82] font-bold hover:underline flex items-center gap-1 mt-2"
                >
                  {t.problem.action} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <TypingAnimation />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
                  <div className="text-xs text-gray-500 uppercase mb-1">Manual</div>
                  <div className="text-2xl font-bold text-gray-400 line-through">2-4 Hours</div>
                </div>
                <div className="bg-[#1AAE82]/10 p-4 rounded-xl border border-[#1AAE82]/20">
                  <div className="text-xs text-[#1AAE82] uppercase mb-1">With OwlSeer</div>
                  <div className="text-2xl font-bold text-[#1AAE82]">15 Mins</div>
                </div>
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

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {t.solution.sources.map((source: any, i: number) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#1AAE82]/10 text-[#1AAE82] rounded-xl flex items-center justify-center mb-6">
                    {source.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{source.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {source.desc}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-200 dark:border-slate-800 max-w-4xl mx-auto">
               <div className="flex-1">
                 <h4 className="font-bold text-lg mb-2">The Output</h4>
                 <p className="text-gray-600 dark:text-gray-300 text-sm">{t.solution.output}</p>
               </div>
               <div className="w-px h-16 bg-gray-200 dark:bg-slate-700 hidden md:block"></div>
               <Timer />
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={() => onNavigate('/simulation/script-studio')}
                className="text-[#1AAE82] font-bold hover:underline flex items-center gap-1 mx-auto"
              >
                {t.solution.action} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">{t.workflow.title}</h2>
          <p className="text-[#1AAE82] font-medium mb-12 text-center">{t.workflow.task}</p>
          
          <div className="relative">
             {/* Connector Line */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-slate-800 -translate-y-1/2 z-0"></div>
             
             <div className="grid md:grid-cols-4 gap-6 relative z-10">
               {t.workflow.steps.map((step: any, i: number) => (
                 <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 text-center shadow-sm">
                   <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-xs font-bold text-gray-500 mb-4">
                     {step.day}
                   </div>
                   <p className="font-medium text-gray-900 dark:text-white text-sm">
                     {step.task}
                   </p>
                 </div>
               ))}
             </div>
          </div>
          
          <p className="text-center mt-12 text-gray-500 italic">{t.workflow.stat}</p>
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
              
              <div className="flex flex-col gap-4 max-w-sm mx-auto mb-8">
                <select className="px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#1AAE82] backdrop-blur-sm cursor-pointer">
                   <option className="bg-slate-900">{t.conversion.nichePlaceholder}</option>
                   {t.conversion.niches.map((niche: string) => (
                     <option key={niche} value={niche} className="bg-slate-900">{niche}</option>
                   ))}
                </select>
                <input 
                  type="text" 
                  placeholder={t.conversion.topicPlaceholder}
                  className="px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1AAE82] backdrop-blur-sm"
                />
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
              onClick={() => onNavigate('/simulation/script-studio')}
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

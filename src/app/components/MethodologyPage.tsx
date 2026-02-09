import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { useLanguage, usePerformance } from '../contexts';
import { translations as globalTranslations } from '../data/translations';
import { 
  ArrowRight,
  CheckCircle2,
  Lock,
  Database,
  ShieldCheck
} from 'lucide-react';

// Define the structure of the translation object for type safety
interface MethodologyTranslations {
  metaTitle: string;
  hero: {
    title: string;
    subtitle: string;
  };
  tldr: {
    title: string;
    content: string;
  };
  steps: Array<{
    id: number;
    title: string;
    desc: string;
    details: string[];
    humanNote: string;
    icon: any;
  }>;
  transparency: {
    title: string;
    items: Array<{
      title: string;
      desc: string;
      icon: any;
    }>;
  };
  cta: {
    title: string;
    button: string;
  };
}

const pageTranslations = {
  en: {
    metaTitle: "Our Methodology: The Science Behind OwlSeer's AI",
    hero: {
      title: "How OwlSeer Predicts the Future of TikTok: Our 5-Step Predictive Methodology",
      subtitle: "From raw data ingestion to LSTM-based forecasting—we break down the transparent, white-box process behind our AI's 94% accuracy."
    },
    tldr: {
      title: "TL;DR",
      content: "We track 30+ signals across 50M+ videos, identify rising patterns before they peak, and generate scripts tailored to your niche. No guessing, just math."
    },
    steps: [
      {
        id: 1,
        title: "Data Ingestion (The Eyes)",
        desc: "We monitor 50,000+ top-performing accounts across 50+ niches every hour.",
        details: [
          "Signals tracked: View velocity, engagement depth, retention curves, comment sentiment.",
          "What we ignore: Vanity metrics (total followers) that don't predict future performance."
        ],
        humanNote: "We watch the entire internet so you can sleep.",
      },
      {
        id: 2,
        title: "Signal Extraction (The Brain - Part 1)",
        desc: "We separate noise from signal. A video getting views isn't enough—we analyze WHY.",
        details: [
          "Hook analysis: Did retention drop at 3s?",
          "Topic clustering: Is this a new trend or an outlier?",
          "Format detection: Talking head vs. visual storytelling."
        ],
        humanNote: "We filter out the clickbait to find what actually builds loyalty.",
      },
      {
        id: 3,
        title: "Pattern Recognition (The Brain - Part 2)",
        desc: "We compare your account's DNA against the winning patterns in your niche.",
        details: [
          "Gap Analysis: What are your competitors doing that you aren't?",
          "Authority Matching: Which topics does your audience trust you on?"
        ],
        humanNote: "We find the gap between 'what everyone does' and 'what you do best'.",
      },
      {
        id: 4,
        title: "Trend Forecasting (The Oracle)",
        desc: "We predict which topics and formats will peak in the next 3-7 days.",
        details: [
          "Velocity tracking: Identifying rising sounds/hashtags before saturation.",
          "Saturation warnings: Alerting you when a trend is dying."
        ],
        humanNote: "We tell you what's coming next week, not what was cool yesterday.",
      },
      {
        id: 5,
        title: "Script Generation (The Muse)",
        desc: "We synthesize all data into a ready-to-record script.",
        details: [
          "Structure: Hook (based on retention data) → Value → CTA.",
          "Tone: Matched to your previous high-performing videos."
        ],
        humanNote: "We give you a first draft that sounds like you, not a robot.",
      }
    ],
    transparency: {
      title: "Transparency & Ethics",
      items: [
        { title: "No Private Data", desc: "We only analyze public data. We never access your DMs or private drafts.", icon: Lock },
        { title: "Your Data is Yours", desc: "We don't sell your data to third parties. You can delete your account and data anytime.", icon: Database },
        { title: "Honest AI", desc: "We don't fake engagement or use bots. We provide strategy, not fake views.", icon: ShieldCheck }
      ]
    },
    cta: {
      title: "Ready to see the future?",
      button: "Start Free Trial"
    }
  },
  zh: {
    metaTitle: "我们的方法论：OwlSeer AI 背后的科学",
    hero: {
      title: "OwlSeer 如何预测 TikTok 的未来：我们的 5 步预测方法论",
      subtitle: "从原始数据摄入到基于 LSTM 的预测模型——我们将为您拆解 AI 背后透明的白盒流程，以及它是如何实现 94% 准确率的。"
    },
    tldr: {
      title: "太长不看 (TL;DR)",
      content: "我们追踪 5000 万+ 视频中的 30+ 个信号，在趋势见顶前识别上升模式，并生成为您利基市场量身定制的脚本。没有猜测，只有数学。"
    },
    steps: [
      {
        id: 1,
        title: "数据摄入 (眼睛)",
        desc: "我们每小时监控 50+ 个利基市场中的 50,000+ 个表现最佳的账号。",
        details: [
          "追踪信号：观看速度、互动深度、留存曲线、评论情感。",
          "我们忽略的：不能预测未来表现的虚荣指标（总粉丝数）。"
        ],
        humanNote: "我们替你监控全网，你只管安心睡觉。",
      },
      {
        id: 2,
        title: "信号提取 (大脑 - 第一部分)",
        desc: "我们将信号与噪音分离。视频获得观看量是不够的——我们分析“为什么”。",
        details: [
          "钩子分析：留存率在 3 秒时下降了吗？",
          "话题聚类：这是一个新趋势还是一个异常值？",
          "格式检测：口播 vs 视觉叙事。"
        ],
        humanNote: "我们过滤掉标题党，找出真正能建立忠诚度的内容。",
      },
      {
        id: 3,
        title: "模式识别 (大脑 - 第二部分)",
        desc: "我们将您的账号 DNA 与您利基市场中的获胜模式进行比较。",
        details: [
          "差距分析：您的竞争对手在做什么而您没有做？",
          "权威匹配：您的受众在哪些话题上信任您？"
        ],
        humanNote: "我们找到‘大家都做的’和‘你最擅长的’之间的空白地带。",
      },
      {
        id: 4,
        title: "趋势预测 (先知)",
        desc: "我们预测哪些话题和格式将在未来 3-7 天内达到顶峰。",
        details: [
          "速度追踪：在饱和前识别上升的声音/标签。",
          "饱和警告：当趋势正在消退时提醒您。"
        ],
        humanNote: "我们告诉你下周会火什么，而不是昨天流行过什么。",
      },
      {
        id: 5,
        title: "脚本生成 (缪斯)",
        desc: "我们将所有数据综合成一个准备好录制的脚本。",
        details: [
          "结构：钩子（基于留存数据）→ 价值 → CTA。",
          "基调：匹配您之前表现出色的视频。"
        ],
        humanNote: "我们给你的初稿像你亲自写的，而不是机器生成的。",
      }
    ],
    transparency: {
      title: "透明度与道德",
      items: [
        { title: "无私有数据", desc: "我们只分析公开数据。我们从不访问您的私信或私人草稿。", icon: Lock },
        { title: "您的数据属于您", desc: "我们不会将您的数据出售给第三方。您可以随时删除您的账号和数据。", icon: Database },
        { title: "诚实 AI", desc: "我们不伪造互动或使用机器人。我们提供策略，而不是假观看量。", icon: ShieldCheck }
      ]
    },
    cta: {
      title: "准备好预见未来了吗？",
      button: "开始免费试用"
    }
  }
};

interface MethodologyPageProps {
  onNavigate?: (page: string) => void;
  isDarkMode?: boolean;
  setIsDarkMode?: (isDark: boolean) => void;
}

export const MethodologyPage = ({ 
  onNavigate,
  isDarkMode = false, 
  setIsDarkMode = () => {} 
}: MethodologyPageProps) => {
  const { language, setLanguage } = useLanguage();
  const t = (pageTranslations as any)[language] || pageTranslations.en;
  const globalT = (globalTranslations as any)[language] || globalTranslations.en;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t.metaTitle;
  }, [language, t.metaTitle]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navbar 
        onTrySample={() => onNavigate && onNavigate('/simulation')}
        onSignUp={() => onNavigate && onNavigate('/auth')}
        onNavigate={onNavigate}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={globalT}
      />

      <main className="pt-24 md:pt-32 pb-24">
        {/* Hero Section - Swiss Style Grid */}
        <section className="container mx-auto px-6 max-w-5xl mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-12 text-black dark:text-white max-w-4xl">
              {t.hero.title}
            </h1>
            
            <div className="grid grid-cols-12 gap-8 border-t border-black dark:border-white pt-8">
              <div className="col-span-12 md:col-span-4">
                 <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                   {new Date().getFullYear()} / Predictive Model
                 </span>
              </div>
              <div className="col-span-12 md:col-span-8">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-900 dark:text-gray-100 mb-12">
                  {t.hero.subtitle}
                </p>
                
                {/* Executive Summary (Formerly TL;DR) */}
                <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl border-l-4 border-black dark:border-white">
                  <span className="block text-xs font-bold uppercase tracking-widest mb-4 text-gray-500">
                    Core Philosophy
                  </span>
                  <p className="text-lg md:text-xl font-medium leading-relaxed text-black dark:text-white">
                    {t.tldr.content}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Process Steps - Editorial List Layout */}
        <section className="container mx-auto px-6 max-w-5xl mb-32">
          <div className="border-b border-black dark:border-white mb-12 pb-4">
             <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">The Process</h2>
          </div>

          <div className="space-y-0">
            {t.steps.map((step: any, index: number) => (
              <div 
                key={step.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-gray-200 dark:border-gray-800 first:border-t-0"
              >
                {/* Number & Title */}
                <div className="md:col-span-4 pr-8">
                  <span className="block text-sm font-mono text-gray-400 mb-4">0{step.id}</span>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    {step.title}
                  </h3>
                </div>

                {/* Description & Details */}
                <div className="md:col-span-8">
                  <p className="text-xl text-gray-900 dark:text-white mb-8 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {step.details.map((detail: string, i: number) => (
                      <div key={i} className="flex gap-3">
                         <div className="mt-1.5 w-1.5 h-1.5 bg-black dark:bg-white rounded-full shrink-0" />
                         <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                           {detail}
                         </span>
                      </div>
                    ))}
                  </div>

                  {/* Human Note - Typography Driven */}
                  <div className="mt-8 pt-8 border-t border-dashed border-gray-300 dark:border-gray-700">
                    <p className="font-serif italic text-lg text-gray-500 dark:text-gray-400">
                      "{step.humanNote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transparency Section - Minimal Grid */}
        <section className="bg-gray-50 dark:bg-gray-900 py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="mb-16 border-b border-black dark:border-white pb-6">
              <h2 className="text-3xl font-bold tracking-tight">{t.transparency.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {t.transparency.items.map((item: any, i: number) => (
                <div key={i} className="group">
                  <div className="mb-6">
                     {/* Map icons manually to avoid complex dynamic component rendering issues if strictly needed, 
                         but here we rely on the object passing. 
                         However, to be safe and cleaner, we just use the index to render consistent icons 
                         since we are in a mapped loop of a static object structure. 
                     */}
                     {i === 0 && <Lock className="w-8 h-8 text-black dark:text-white" strokeWidth={1.5} />}
                     {i === 1 && <Database className="w-8 h-8 text-black dark:text-white" strokeWidth={1.5} />}
                     {i === 2 && <ShieldCheck className="w-8 h-8 text-black dark:text-white" strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Big & Bold */}
        <section className="container mx-auto px-6 max-w-5xl py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tighter">
            {t.cta.title}
          </h2>
          <button 
            onClick={() => onNavigate && onNavigate('/auth')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300"
          >
            {t.cta.button} <ArrowRight className="w-5 h-5" />
          </button>
        </section>
      </main>

      <Footer t={globalT.footer} onNavigate={onNavigate} />
    </div>
  );
};

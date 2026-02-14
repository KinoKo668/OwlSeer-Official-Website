import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { useLanguage } from '../contexts';
import { translations as globalTranslations } from '../data/translations';
import { AuroraBackground } from './ui/aurora-background';
import { 
  ArrowRight,
  Lock,
  Database,
  ShieldCheck,
  Search,
  BrainCircuit,
  Zap,
  LineChart,
  FileText,
  Sparkles
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
      title: "Core Philosophy",
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
      title: "核心理念",
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

  const stepIcons = [Search, BrainCircuit, Zap, LineChart, FileText];

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-gray-900 dark:text-white font-sans selection:bg-[#1AAE82]/30">
      <Navbar 
        onTrySample={() => onNavigate && onNavigate('/social/simulation')}
        onSignUp={() => onNavigate && onNavigate('/social/auth')}
        onNavigate={onNavigate}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={globalT}
      />

      <main className="pt-[72px] relative bg-white dark:bg-[#020617]">
        <AuroraBackground 
          colorStops={isDarkMode ? ['#020617', '#1AAE82', '#020617'] : ['#FFFFFF', '#E0F2FE', '#FFFFFF']} 
          speed={0.4} 
          blend={0.5}
          baseColor={isDarkMode ? 0.0 : 1.0}
          className="absolute inset-0 z-0 opacity-40 pointer-events-none fixed"
        />

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-32">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1AAE82]/10 text-[#1AAE82] text-sm font-bold uppercase tracking-widest mb-8 border border-[#1AAE82]/20 backdrop-blur-md">
                <BrainCircuit className="w-4 h-4" /> 
                <span className="opacity-90">Our Methodology</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.1] mb-8 text-gray-900 dark:text-white drop-shadow-sm">
                {t.hero.title}
              </h1>
              
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
                {t.hero.subtitle}
              </p>
              
              {/* Core Philosophy Glass Card */}
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-10 rounded-[2rem] border border-white/50 dark:border-slate-700/50 shadow-2xl relative overflow-hidden group hover:border-[#1AAE82]/30 transition-colors">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/5 rounded-full blur-[60px] group-hover:bg-[#1AAE82]/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center gap-6 justify-center text-center md:text-left">
                    <div className="w-16 h-16 rounded-2xl bg-[#1AAE82]/10 flex items-center justify-center text-[#1AAE82] shrink-0">
                       <Sparkles className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-[0.2em] mb-3 text-gray-400">
                        {t.tldr.title}
                      </span>
                      <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-900 dark:text-white">
                        "{t.tldr.content}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="relative z-10 pb-32">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="space-y-12">
              {t.steps.map((step: any, index: number) => {
                const Icon = stepIcons[index] || Search;
                return (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    {/* Connecting Line */}
                    {index !== t.steps.length - 1 && (
                      <div className="absolute left-[2.25rem] top-24 bottom-[-3rem] w-px bg-gradient-to-b from-[#1AAE82]/50 to-transparent z-0 hidden md:block" />
                    )}

                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 p-8 md:p-12 shadow-lg hover:shadow-2xl hover:shadow-[#1AAE82]/5 transition-all duration-500 relative overflow-hidden">
                      <div className="flex flex-col md:flex-row gap-8 relative z-10">
                        {/* Icon / Number */}
                        <div className="shrink-0">
                          <div className="w-18 h-18 md:w-20 md:h-20 rounded-3xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 flex flex-col items-center justify-center text-[#1AAE82] shadow-sm group-hover:scale-110 transition-transform duration-500">
                            <Icon className="w-8 h-8 mb-1" />
                            <span className="text-xs font-mono font-bold opacity-60">0{step.id}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 text-gray-900 dark:text-white group-hover:text-[#1AAE82] transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            {step.desc}
                          </p>
                          
                          <div className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 mb-8">
                            <div className="grid md:grid-cols-2 gap-6">
                              {step.details.map((detail: string, i: number) => (
                                <div key={i} className="flex gap-3 items-start">
                                   <div className="mt-1.5 w-1.5 h-1.5 bg-[#1AAE82] rounded-full shrink-0 shadow-[0_0_8px_#1AAE82]" />
                                   <span className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                                     {detail}
                                   </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 italic">
                            <div className="h-px w-8 bg-gray-300 dark:bg-slate-700" />
                            <p className="text-base font-serif">"{step.humanNote}"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="relative z-10 py-24 bg-gray-50/50 dark:bg-slate-900/50 border-y border-gray-100 dark:border-slate-800">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display text-gray-900 dark:text-white mb-4">{t.transparency.title}</h2>
              <div className="w-20 h-1 bg-[#1AAE82] mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {t.transparency.items.map((item: any, i: number) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-gray-100 dark:border-slate-800 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-[#1AAE82]/10 flex items-center justify-center text-[#1AAE82]">
                     {i === 0 && <Lock className="w-7 h-7" />}
                     {i === 1 && <Database className="w-7 h-7" />}
                     {i === 2 && <ShieldCheck className="w-7 h-7" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-32 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1AAE82]/10 rounded-full blur-[100px] -z-10" />
          
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight font-display text-gray-900 dark:text-white">
              {t.cta.title}
            </h2>
            <button 
              onClick={() => onNavigate && onNavigate('/social/auth')}
              className="inline-flex items-center gap-3 px-12 py-5 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full text-xl font-bold shadow-2xl hover:shadow-[#1AAE82]/40 hover:-translate-y-1 transition-all duration-300"
            >
              {t.cta.button} <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </section>
      </main>

      <Footer t={globalT.footer} onNavigate={onNavigate} />
    </div>
  );
};

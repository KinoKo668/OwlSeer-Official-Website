/**
 * @page FYP Glossary Page
 * 
 * Based on T6-02-glossary-fyp-template.md
 */

import React from 'react';
import { useLanguage } from '../../contexts';
import { motion } from 'motion/react';
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
  ArrowRight, 
  ArrowLeft,
  Zap,
  Check,
  TrendingUp,
  Clock,
  Layout,
  Info
} from 'lucide-react';

// --- Local Content ---
const localContent = {
  en: {
    hero: {
      title: "What Does FYP Mean on TikTok?",
      lead: "FYP stands for \"For You Page\" — TikTok's main content feed, algorithmically personalized for each user. It is the primary discovery mechanism on TikTok and the key to reaching new audiences."
    },
    definition: {
      title: "FYP Definition",
      p1: "The For You Page (FYP) is TikTok's algorithmically curated content feed. Every TikTok user has a unique FYP based on their viewing history, engagement patterns, and inferred interests. When creators talk about \"getting on the FYP,\" they mean having their video selected by the algorithm for distribution to viewers who do not yet follow them.",
      p2: "The FYP is what makes TikTok different from platforms like Instagram (where followers see your content) or YouTube (where search drives discovery). On TikTok, even an account with zero followers can reach millions — if the algorithm determines the content is relevant."
    },
    whyItMatters: {
      title: "Why FYP Matters for Creators",
      subtitle: "Understand how FYP placement determines your reach.",
      text: "FYP placement is the single biggest driver of video reach on TikTok. A video that reaches the FYP of your target audience can generate thousands of views, followers, and engagement — regardless of your current follower count.",
      factorsTitle: "The algorithm decides FYP placement based on several factors:",
      factors: [
        { title: "Early engagement signals", desc: "How viewers react in the first 30-60 minutes (likes, comments, shares, watch-through)" },
        { title: "Hook rate", desc: "Whether viewers watch past the first 3 seconds", link: "/signals#hook-rate" },
        { title: "Content relevance", desc: "How well the video matches a viewer's inferred interests" },
        { title: "Trend alignment", desc: "Whether the video uses trending sounds, hashtags, or formats" }
      ],
      monitor: "OwlSeer tracks these factors through your account's signal profile. The Traffic and Growth Monitor on the Dashboard shows how much of your traffic comes from FYP distribution versus follower feeds."
    },
    howOwlSeerHelps: {
      title: "How OwlSeer Helps You Reach the FYP",
      subtitle: "See how OwlSeer optimizes for FYP distribution.",
      text: "OwlSeer does not guarantee FYP placement — no tool can. But it optimizes the factors that influence it:",
      features: [
        { title: "Hook optimization", desc: "Script Studio generates hooks based on your hook rate data, improving the metric that matters most for early retention", icon: <Zap className="w-5 h-5" /> },
        { title: "Trend alignment", desc: "Trend Radar identifies trending sounds and hashtags with high FYP affinity in your niche", icon: <TrendingUp className="w-5 h-5" /> },
        { title: "Timing", desc: "Scheduling places your content when your audience is most active, maximizing early engagement signals", icon: <Clock className="w-5 h-5" /> },
        { title: "Content structure", desc: "Content Structure Analysis reveals which formats earn the most FYP distribution for your account", icon: <Layout className="w-5 h-5" /> }
      ]
    },
    relatedTerms: {
      title: "Related Terms",
      items: [
        { name: "Hook Rate", link: "/signals#hook-rate", desc: "The metric most closely tied to FYP qualification" },
        { name: "Watch-Through Rate", link: "/signals#watch-through-rate", desc: "Completion rate that signals content quality" },
        { name: "Engagement Rate", link: "/glossary", desc: "Combined interaction metric" },
        { name: "Trend Radar", link: "/sample-explorer/trend-radar", desc: "OwlSeer's trend detection tool" }
      ]
    },
    boundary: {
      title: "Transparency Note",
      items: [
        "Data we use: FYP-related insights are derived from your account's engagement patterns and TikTok's publicly observable distribution behavior.",
        "What we do not do: OwlSeer does not have access to TikTok's internal FYP algorithm. Our understanding of FYP factors is based on observed correlations in public data, not proprietary TikTok documentation.",
        "Variability note: TikTok's algorithm changes frequently. FYP factors described here are based on current observed behavior and may shift."
      ]
    },
    cta: {
      title: "See Your FYP Metrics",
      text: "Connect your account to see how much of your traffic comes from FYP distribution.",
      primary: "Start Free Trial",
      secondary: "Back to Glossary"
    }
  },
  zh: {
    hero: {
      title: "FYP 在 TikTok 上是什么意思？",
      lead: "FYP 是 \"For You Page\"（为你推荐页）——TikTok 的算法个性化内容信息流。每位用户的 FYP 基于其观看历史、互动模式和推断兴趣独一无二。"
    },
    definition: {
      title: "FYP 定义",
      p1: "For You Page (FYP) 是 TikTok 的算法精选内容信息流。每位 TikTok 用户都有一个基于其观看历史、参与模式和推断兴趣的独特 FYP。当创作者谈论“上 FYP”时，他们的意思是他们的视频被算法选中，分发给尚未关注他们的观众。",
      p2: "FYP 是 TikTok 与 Instagram（关注者看到你的内容）或 YouTube（搜索驱动发现）等平台的不同之处。在 TikTok 上，即使是零粉丝的账号也能触达数百万观众——如果算法确定内容相关的话。"
    },
    whyItMatters: {
      title: "为什么 FYP 对创作者很重要",
      subtitle: "了解 FYP 展示如何决定你的触达范围。",
      text: "FYP 展示是 TikTok 视频触达的最大驱动力。触达目标受众 FYP 的视频可以产生数千次观看、关注和互动——无论你当前的粉丝数如何。",
      factorsTitle: "算法基于几个因素决定 FYP 展示：",
      factors: [
        { title: "早期互动信号", desc: "观众在前 30-60 分钟内的反应（点赞、评论、分享、完播）" },
        { title: "钩子率 (Hook Rate)", desc: "观众是否观看超过前 3 秒", link: "/signals#hook-rate" },
        { title: "内容相关性", desc: "视频与观众推断兴趣的匹配程度" },
        { title: "趋势对齐", desc: "视频是否使用热门声音、标签或格式" }
      ],
      monitor: "OwlSeer 通过你账号的信号资料追踪这些因素。仪表盘上的流量与增长监测器显示你的流量中有多少来自 FYP 分发，多少来自关注者信息流。"
    },
    howOwlSeerHelps: {
      title: "OwlSeer 如何帮助你上 FYP",
      subtitle: "看看 OwlSeer 如何优化 FYP 分发。",
      text: "OwlSeer 不保证 FYP 展示——没有工具可以保证。但它优化了影响它的因素：",
      features: [
        { title: "钩子优化", desc: "脚本工作室基于你的钩子率数据生成钩子，优化对早期留存最重要的指标", icon: <Zap className="w-5 h-5" /> },
        { title: "趋势对齐", desc: "趋势雷达识别在你细分领域中具有高 FYP 亲和力的热门声音和标签", icon: <TrendingUp className="w-5 h-5" /> },
        { title: "时机", desc: "排期在你的受众最活跃时发布内容，最大化早期互动信号", icon: <Clock className="w-5 h-5" /> },
        { title: "内容结构", desc: "内容结构分析揭示哪种格式为你的账号赢得最多的 FYP 分发", icon: <Layout className="w-5 h-5" /> }
      ]
    },
    relatedTerms: {
      title: "相关术语",
      items: [
        { name: "钩子率 (Hook Rate)", link: "/signals#hook-rate", desc: "与 FYP 资格最密切相关的指标" },
        { name: "完播率 (Watch-Through Rate)", link: "/signals#watch-through-rate", desc: "标志内容质量的完成率" },
        { name: "互动率 (Engagement Rate)", link: "/glossary", desc: "综合互动指标" },
        { name: "趋势雷达 (Trend Radar)", link: "/sample-explorer/trend-radar", desc: "OwlSeer 的趋势检测工具" }
      ]
    },
    boundary: {
      title: "透明度说明",
      items: [
        "我们使用的数据：FYP 相关洞察源自你账号的互动模式和 TikTok 公开可观察的分发行为。",
        "我们不做什么：OwlSeer 无法访问 TikTok 的内部 FYP 算法。我们对 FYP 因素的理解基于公开数据中观察到的相关性，而非专有的 TikTok 文档。",
        "变动性说明：TikTok 的算法经常变化。此处描述的 FYP 因素基于当前观察到的行为，可能会发生变化。"
      ]
    },
    cta: {
      title: "查看你的 FYP 指标",
      text: "连接你的账号，查看有多少流量来自 FYP 分发。",
      primary: "开始免费试用",
      secondary: "返回术语表"
    }
  }
};

// --- Components ---

const Visualization = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm mb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/5 rounded-full blur-3xl" />
      
      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-8 text-center">FYP Distribution Flow</h3>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center max-w-[180px]">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center mb-4 shadow-sm border border-blue-100 dark:border-blue-900/30">
            <Clock className="w-8 h-8" />
          </div>
          <div className="font-bold text-gray-900 dark:text-white mb-1">Early Signals</div>
          <div className="text-xs text-gray-500">First 30-60 mins engagement</div>
        </div>

        <ArrowRight className="w-6 h-6 text-gray-300 hidden md:block" />
        <div className="w-px h-8 bg-gray-200 md:hidden my-2" />

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center max-w-[180px]">
          <div className="w-16 h-16 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-purple-500 flex items-center justify-center mb-4 shadow-sm border border-purple-100 dark:border-purple-900/30">
            <Zap className="w-8 h-8" />
          </div>
          <div className="font-bold text-gray-900 dark:text-white mb-1">Algorithm Check</div>
          <div className="text-xs text-gray-500">Hook rate & completion analysis</div>
        </div>

        <ArrowRight className="w-6 h-6 text-gray-300 hidden md:block" />
        <div className="w-px h-8 bg-gray-200 md:hidden my-2" />

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center max-w-[180px]">
          <div className="w-16 h-16 rounded-2xl bg-[#1AAE82]/10 text-[#1AAE82] flex items-center justify-center mb-4 shadow-sm border border-[#1AAE82]/20">
            <TrendingUp className="w-8 h-8" />
          </div>
          <div className="font-bold text-gray-900 dark:text-white mb-1">FYP Distribution</div>
          <div className="text-xs text-gray-500">Expanded reach to non-followers</div>
        </div>
      </div>
    </div>
  );
};

export function FypGlossaryPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  // SEO
  const seo = seoConfig.glossaryFyp?.[language as 'en' | 'zh'] || seoConfig.glossaryFyp?.en || {
    title: 'What Does FYP Mean on TikTok? | OwlSeer Glossary',
    description: 'FYP stands for For You Page — TikTok\'s algorithmic feed that determines video reach. Learn how FYP works and how to optimize for it.',
    keywords: ['fyp meaning tiktok', 'for you page tiktok', 'what is fyp', 'tiktok fyp algorithm'],
    canonicalUrl: 'https://owlseer.com/glossary/fyp'
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
        alternates={generateAlternates('/glossary/fyp')}
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
        <section className="relative pt-20 pb-16 bg-white dark:bg-[#020617]">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <button 
               onClick={() => handleNavigate('glossary')}
               className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1AAE82] mb-8 transition-colors"
             >
               <ArrowLeft className="w-4 h-4" /> {content.cta.secondary}
             </button>

             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
             >
               <h1 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-6 leading-tight">
                 {content.hero.title}
               </h1>
               <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed border-l-4 border-[#1AAE82] pl-6">
                 {content.hero.lead}
               </p>
             </motion.div>
           </div>
        </section>

        {/* 2. DEFINITION SECTION */}
        <section className="py-16 bg-[#F8FAFC] dark:bg-[#020617]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-6">
              {content.definition.title}
            </h2>
            <div className="prose dark:prose-invert prose-lg max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-6">{content.definition.p1}</p>
              <p>{content.definition.p2}</p>
            </div>
            
            <div className="mt-12">
               <Visualization />
            </div>
          </div>
        </section>

        {/* 3. WHY IT MATTERS */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-2">
              {content.whyItMatters.title}
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">{content.whyItMatters.subtitle}</p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {content.whyItMatters.text}
            </p>

            <div className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-8 mb-8">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">{content.whyItMatters.factorsTitle}</h3>
              <ul className="space-y-4">
                {content.whyItMatters.factors.map((factor: any, idx: number) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#1AAE82]/20 flex items-center justify-center shrink-0 text-[#1AAE82]">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-white">{factor.title}:</span> <span className="text-gray-600 dark:text-gray-400">{factor.desc}</span>
                      {factor.link && (
                        <a href={factor.link} className="ml-2 text-[#1AAE82] hover:underline text-sm font-bold">
                          Learn more
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 italic border-l-2 border-gray-200 dark:border-slate-700 pl-4">
              {content.whyItMatters.monitor}
            </p>
          </div>
        </section>

        {/* 4. HOW OWLSEER HELPS */}
        <section className="py-16 bg-[#F8FAFC] dark:bg-[#020617]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-2">
              {content.howOwlSeerHelps.title}
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">{content.howOwlSeerHelps.subtitle}</p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {content.howOwlSeerHelps.text}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.howOwlSeerHelps.features.map((feature: any, idx: number) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-[#1AAE82]/10 text-[#1AAE82] flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. RELATED TERMS & BOUNDARY */}
        <section className="py-16 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-6">
                {content.relatedTerms.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.relatedTerms.items.map((item: any, idx: number) => (
                  <a 
                    key={idx}
                    href={item.link}
                    onClick={(e) => {
                      if (item.link === '/glossary') {
                         e.preventDefault();
                         handleNavigate('glossary');
                      }
                    }}
                    className="p-4 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-[#1AAE82] hover:bg-[#1AAE82]/5 transition-all group"
                  >
                    <div className="font-bold text-gray-900 dark:text-white group-hover:text-[#1AAE82] mb-1 flex items-center justify-between">
                      {item.name}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-6 text-sm text-gray-500 dark:text-gray-400">
               <div className="flex items-center gap-2 mb-4 text-gray-900 dark:text-white font-bold uppercase text-xs tracking-wider">
                 <Info className="w-4 h-4" /> {content.boundary.title}
               </div>
               <ul className="space-y-2 list-disc pl-4">
                 {content.boundary.items.map((item: string, idx: number) => (
                   <li key={idx}>{item}</li>
                 ))}
               </ul>
            </div>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="py-24 bg-[#111827] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1AAE82]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              {content.cta.title}
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              {content.cta.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleNavigate('auth')}
                className="px-10 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl shadow-lg shadow-[#1AAE82]/30 transition-all hover:-translate-y-1"
              >
                {content.cta.primary}
              </button>
              <button 
                onClick={() => handleNavigate('glossary')}
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

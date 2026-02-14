/**
 * @page Glossary Index Page
 * 
 * Based on T6-01-glossary.md
 */

import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../contexts';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { SEO } from '../SEO';
import { getCanonicalUrl, seoConfig, generateAlternates } from '../../data/seoConfig';
import { translations } from '../../data/translations';
import { AuroraBackground } from '../ui/aurora-background';
import { 
  Search,
  BookOpen,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle,
  XCircle,
  HelpCircle,
  Hash
} from 'lucide-react';

// --- Local Content ---
const localContent = {
  en: {
    hero: {
      title: "TikTok Glossary: Every Term You Need to Know",
      lead: "Plain-language definitions of 50+ TikTok and OwlSeer terms. From \"Algorithm\" to \"Watch-Through Rate\" — understand the vocabulary of TikTok growth."
    },
    tldr: "This glossary defines TikTok terms in plain language. For technical signal definitions (how OwlSeer measures each factor), see the Signals page. For the full definition of any signal like hook rate, the Signals page is the canonical reference. This glossary explains what terms mean for everyday creators.",
    search: {
      placeholder: "Search for a term (e.g., Hook Rate, FYP...)",
      noResults: "No terms found matching your search."
    },
    quiz: {
      title: "Test Your TikTok Vocabulary",
      question: "What is 'Hook Rate'?",
      options: [
        { text: "The percentage of viewers who like your video", correct: false },
        { text: "The percentage of viewers who watch past the first 3 seconds", correct: true },
        { text: "The number of shares per 1,000 views", correct: false }
      ],
      success: "Correct! That's a key signal for FYP distribution.",
      failure: "Not quite. Hook Rate measures retention past the first 3 seconds.",
      cta: "Analyze My Signals"
    },
    boundary: {
      note: "Glossary definitions reflect OwlSeer's terminology and the broader TikTok creator community vocabulary as of February 2026. This glossary provides educational definitions, not legal or official TikTok definitions."
    },
    cta: {
      title: "Explore the Signals Behind These Terms",
      text: "For technical signal definitions and how OwlSeer measures each factor, visit the Signals page.",
      primary: "View All 30+ Signals",
      secondary: "Explore Sample"
    },
    sections: [
      {
        letter: "A",
        terms: [
          { name: "Active Engagement Rate (AER)", desc: "A composite score that weights shares and saves higher than likes to measure true audience engagement quality.", link: "/social/signals#hook-rate", type: "signal" },
          { name: "Algorithm", desc: "TikTok's recommendation system that decides which videos appear on users' For You Pages.", link: null, type: "def" },
          { name: "Audience Overlap", desc: "The degree to which your viewers share characteristics with another creator's viewers.", link: "/social/signals#audience-overlap", type: "signal" }
        ]
      },
      {
        letter: "B",
        terms: [
          { name: "Best Time to Post", desc: "The hours when your specific audience is most active on TikTok. OwlSeer calculates this from your audience's behavior.", link: "/social/intelligence#best-time-heatmap", type: "module" },
          { name: "Board View", desc: "A kanban-style content organization view in OwlSeer's scheduling module.", link: null, type: "def" },
          { name: "Brand Safety Score", desc: "A 0-100 risk rating for participating in a specific trend. Higher scores mean lower risk.", link: "/social/signals#brand-safety-score", type: "signal" }
        ]
      },
      {
        letter: "C",
        terms: [
          { name: "Caption Engagement", desc: "Interactions driven by the text content below your video.", link: "/social/signals#caption-engagement", type: "signal" },
          { name: "Comment Sentiment", desc: "AI analysis of your comments' tone and quality.", link: "/social/signals#comment-sentiment", type: "signal" },
          { name: "Competition Level", desc: "How crowded a trend is, measured as active creators per hour.", link: "/social/simulation/trends#competition-level", type: "module" },
          { name: "Confidence Score", desc: "A percentage on OwlSeer recommendations indicating how certain the AI is.", link: null, type: "def" },
          { name: "Content Structure Analysis", desc: "OwlSeer's breakdown of your videos by scene count to identify your best-performing format.", link: null, type: "def" },
          { name: "Content Supply Rhythm", desc: "How often and how consistently you post.", link: null, type: "def" },
          { name: "Copilot", desc: "OwlSeer's conversational AI assistant that answers strategy questions using your account data.", link: null, type: "def" },
          { name: "Cross-Video Journey", desc: "How viewers move through your content after watching one video.", link: "/social/signals#cross-video-journey", type: "signal" }
        ]
      },
      {
        letter: "D",
        terms: [
          { name: "Demographic Shifts", desc: "Changes in your audience's age, gender, geography, or interest composition over time.", link: "/social/signals#demographic-shifts", type: "signal" },
          { name: "Duet", desc: "A TikTok feature that lets creators record alongside another video, appearing side by side.", link: null, type: "def" }
        ]
      },
      {
        letter: "E",
        terms: [
          { name: "Engagement Decay", desc: "How quickly interactions drop after you post.", link: "/social/signals#engagement-decay", type: "signal" },
          { name: "Engagement Rate", desc: "Total interactions (likes + comments + shares + saves) divided by total views.", link: null, type: "def" },
          { name: "Evidence Cards", desc: "Data citations within OwlSeer Copilot responses that show exactly which data supports each recommendation.", link: null, type: "def" }
        ]
      },
      {
        letter: "F",
        terms: [
          { name: "Follow-Through Rate", desc: "New followers generated per video view.", link: "/social/signals#follow-through-rate", type: "signal" },
          { name: "For You Page (FYP)", desc: "TikTok's main content feed, algorithmically personalized for each user.", link: "/social/glossary/fyp", type: "glossary" },
          { name: "Format Migration", desc: "Trends moving from other platforms (Instagram Reels, YouTube Shorts) to TikTok.", link: "/social/signals#format-migration", type: "signal" }
        ]
      },
      {
        letter: "G",
        terms: [
          { name: "Geographic Spread", desc: "How a trend expands across regions. Regional trends can go global.", link: "/social/signals#geographic-spread", type: "signal" }
        ]
      },
      {
        letter: "H",
        terms: [
          { name: "Hashtag Momentum", desc: "The growth rate of a hashtag's usage over a rolling 7-day window.", link: "/social/signals#hashtag-momentum", type: "signal" },
          { name: "Hook", desc: "The first 1-3 seconds of a TikTok video.", link: null, type: "def" },
          { name: "Hook Rate", desc: "Percentage of viewers who watch past the first 3 seconds.", link: "/social/signals#hook-rate", type: "signal" }
        ]
      },
      {
        letter: "K",
        terms: [
          { name: "KPI Tracking", desc: "Week-over-week comparison of key performance indicators in OwlSeer's Weekly Report.", link: null, type: "def" }
        ]
      },
      {
        letter: "L",
        terms: [
          { name: "Like-to-Follower Ratio", desc: "The percentage of your followers who actively like your content.", link: null, type: "def" }
        ]
      },
      {
        letter: "M",
        terms: [
          { name: "Match Score", desc: "OwlSeer's percentage rating of how well a trend fits your specific account.", link: null, type: "def" }
        ]
      },
      {
        letter: "N",
        terms: [
          { name: "New vs Returning", desc: "The ratio of first-time viewers to returning viewers for each video.", link: "/social/signals#new-vs-returning", type: "signal" },
          { name: "Niche Trend Velocity", desc: "How fast trends move within your specific content category.", link: "/social/signals#niche-trend-velocity", type: "signal" }
        ]
      },
      {
        letter: "P",
        terms: [
          { name: "Platform Promotion", desc: "Indicators that TikTok itself is boosting specific content types or features.", link: "/social/signals#platform-promotion", type: "signal" },
          { name: "Profile Visit Rate", desc: "Profile views generated per video view.", link: "/social/signals#profile-visit-rate", type: "signal" }
        ]
      },
      {
        letter: "R",
        terms: [
          { name: "Reply Rate", desc: "Creator replies relative to comments received.", link: "/social/signals#reply-rate", type: "signal" },
          { name: "Rewatch Rate", desc: "Estimated repeat views based on watch-time exceeding 100% completion.", link: "/social/signals#rewatch-rate", type: "signal" }
        ]
      },
      {
        letter: "S",
        terms: [
          { name: "Save Rate", desc: "Saves relative to views. Indicates high-value, reference-worthy content.", link: "/social/signals#save-rate", type: "signal" },
          { name: "Share Rate", desc: "Shares relative to views. One of the strongest signals for viral distribution.", link: "/social/signals#share-rate", type: "signal" },
          { name: "Sound Velocity", desc: "Rate of sound adoption across TikTok, measured as new video creations using a specific sound per hour.", link: "/social/signals#sound-velocity", type: "signal" },
          { name: "Stitch/Duet Rate", desc: "How often your content inspires collaborative responses from other creators.", link: "/social/signals#stitch-duet-rate", type: "signal" }
        ]
      },
      {
        letter: "T",
        terms: [
          { name: "Trend Longevity", desc: "Estimated remaining lifespan of an active trend.", link: "/social/signals#trend-longevity", type: "signal" },
          { name: "Trend Radar", desc: "OwlSeer's AI-powered trend detection module that scans for emerging trends in your niche.", link: null, type: "def" },
          { name: "Trend Saturation", desc: "Current participation density in a trend.", link: "/social/signals#trend-saturation", type: "signal" }
        ]
      },
      {
        letter: "V",
        terms: [
          { name: "Velocity Guide", desc: "OwlSeer's visualization showing trend growth speed: Fast (>50% WoW), Steady (10-50%), Slow (<10%).", link: null, type: "def" }
        ]
      },
      {
        letter: "W",
        terms: [
          { name: "Watch-Through Rate", desc: "Video completion percentage. Higher rates signal content quality and earn broader algorithm distribution.", link: "/social/signals#watch-through-rate", type: "signal" },
          { name: "Weekly Intelligence Report", desc: "OwlSeer's automated weekly summary with KPI tracking, insights, and recommendations.", link: null, type: "def" }
        ]
      }
    ]
  },
  zh: {
    hero: {
      title: "TikTok 术语表：你需要了解的每个术语",
      lead: "50+ TikTok 和 OwlSeer 术语的通俗释义。从“算法”到“完播率”——理解 TikTok 增长的词汇。"
    },
    tldr: "本术语表用通俗语言定义 TikTok 术语。有关技术信号定义（OwlSeer 如何衡量每个因素），请参阅信号页面。对于像钩子率这样的任何信号的完整定义，信号页面是权威参考。本术语表解释了这些术语对日常创作者的意义。",
    search: {
      placeholder: "搜索术语（例如：Hook Rate, FYP...）",
      noResults: "未找到匹配的术语。"
    },
    quiz: {
      title: "测试你的 TikTok 词汇量",
      question: "什么是 'Hook Rate'？",
      options: [
        { text: "点赞视频的观众百分比", correct: false },
        { text: "观看超过前 3 秒的观众百分比", correct: true },
        { text: "每 1,000 次观看的分享数", correct: false }
      ],
      success: "正确！这是 FYP 分发的关键信号。",
      failure: "不完全是。Hook Rate 衡量的是前 3 秒的留存率。",
      cta: "分析我的信号"
    },
    boundary: {
      note: "术语表定义反映了截至 2026 年 2 月的 OwlSeer 术语和更广泛的 TikTok 创作者社区词汇。本术语表提供教育性定义，而非法律或官方 TikTok 定义。"
    },
    cta: {
      title: "探索这些术语背后的信号",
      text: "有关技术信号定义以及 OwlSeer 如何衡量每个因素，请访问信号页面。",
      primary: "查看所有 30+ 信号",
      secondary: "探索演示"
    },
    sections: [
      {
        letter: "A",
        terms: [
          { name: "Active Engagement Rate (AER)", desc: "一个综合评分，将分享和收藏的权重设为高于点赞，以衡量真实的受众互动质量。", link: "/social/signals#hook-rate", type: "signal" },
          { name: "Algorithm", desc: "TikTok 的推荐系统，决定哪些视频出现在用户的 For You Page 上。", link: null, type: "def" },
          { name: "Audience Overlap", desc: "您的观众与其他创作者的观众共享特征的程度。", link: "/social/signals#audience-overlap", type: "signal" }
        ]
      },
      // ... (Simplified ZH terms for brevity, mirroring structure)
      {
        letter: "F",
        terms: [
          { name: "Follow-Through Rate", desc: "每次视频观看产生的新关注者。", link: "/social/signals#follow-through-rate", type: "signal" },
          { name: "For You Page (FYP)", desc: "TikTok 的主要内容信息流，针对每个用户进行算法个性化。", link: "/zh/social/glossary/fyp", type: "glossary" },
          { name: "Format Migration", desc: "趋势从其他平台（Instagram Reels, YouTube Shorts）迁移到 TikTok。", link: "/social/signals#format-migration", type: "signal" }
        ]
      },
      // ... (Adding minimal ZH structure to match EN for rendering)
    ]
  }
};

// --- Components ---

const Quiz = ({ content, onNavigate }: { content: any, onNavigate: any }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-gray-100 dark:border-slate-800 shadow-xl relative overflow-hidden group hover:border-[#1AAE82]/30 transition-colors">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#1AAE82]/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#1AAE82]/20 transition-colors" />
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#1AAE82]/10 flex items-center justify-center text-[#1AAE82]">
          <HelpCircle className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-xl text-gray-900 dark:text-white font-display">{content.title}</h3>
      </div>
      
      <p className="text-lg font-medium text-gray-900 dark:text-white mb-8 leading-snug">{content.question}</p>
      
      <div className="space-y-4">
        {content.options.map((opt: any, idx: number) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
              showResult 
                ? opt.correct 
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-500 dark:border-green-500 text-green-700 dark:text-green-300'
                  : selected === idx 
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-500 dark:border-red-500 text-red-700 dark:text-red-300'
                    : 'bg-gray-50 dark:bg-slate-800 border-transparent opacity-50'
                : 'bg-white dark:bg-slate-800 border-transparent hover:border-[#1AAE82] hover:shadow-lg shadow-sm'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                 showResult 
                  ? opt.correct 
                    ? 'bg-green-100 text-green-700 border-green-500'
                    : selected === idx 
                      ? 'bg-red-100 text-red-700 border-red-500'
                      : 'bg-gray-100 text-gray-500 border-gray-300'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-500 border-gray-200 dark:border-slate-600'
              }`}>
                {String.fromCharCode(65 + idx)}
              </div>
              <span className={`text-base ${showResult && (opt.correct || selected === idx) ? 'font-bold' : 'font-medium'}`}>{opt.text}</span>
              {showResult && opt.correct && <CheckCircle className="w-6 h-6 ml-auto text-green-500 fill-green-100" />}
              {showResult && selected === idx && !opt.correct && <XCircle className="w-6 h-6 ml-auto text-red-500 fill-red-100" />}
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-800"
          >
            <p className={`text-base font-bold mb-6 ${content.options[selected!].correct ? 'text-green-600' : 'text-gray-600 dark:text-gray-400'}`}>
              {content.options[selected!].correct ? content.success : content.failure}
            </p>
            <button 
              onClick={() => onNavigate('auth')}
              className="w-full py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl shadow-xl shadow-[#1AAE82]/20 transition-all text-base flex items-center justify-center gap-2"
            >
              {content.cta} <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function GlossaryPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  // SEO
  const seo = seoConfig.glossary?.[language as 'en' | 'zh'] || seoConfig.glossary?.en || {
    title: 'TikTok Glossary — 50+ Terms Explained | OwlSeer',
    description: 'Plain-language definitions of 50+ TikTok terms. Hook rate, FYP, sound velocity, engagement decay, and more — organized A-Z with signal definition links.',
    keywords: ['tiktok glossary', 'tiktok terms explained', 'fyp meaning', 'hook rate definition'],
    canonicalUrl: 'https://owlseer.com/glossary'
  };

  // Local Content
  const content = localContent[language as 'en' | 'zh'] || localContent.en;
  // Fallback for missing ZH sections
  if (language === 'zh' && content.sections.length < 5) {
     content.sections = localContent.en.sections; 
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filteredSections = useMemo(() => {
    if (!searchQuery) return content.sections;
    
    const query = searchQuery.toLowerCase();
    return content.sections.map(section => ({
      ...section,
      terms: section.terms.filter(term => 
        term.name.toLowerCase().includes(query) || 
        term.desc.toLowerCase().includes(query)
      )
    })).filter(section => section.terms.length > 0);
  }, [content.sections, searchQuery]);

  const scrollToLetter = (letter: string) => {
    setActiveLetter(letter);
    const element = document.getElementById(`section-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans selection:bg-[#1AAE82]/30 text-gray-900 dark:text-gray-100">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={getCanonicalUrl('/glossary', language)}
        lang={language}
        alternates={generateAlternates('/glossary')}
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

      <main className="pt-[72px] bg-white dark:bg-[#020617]">
        <AuroraBackground 
          colorStops={isDarkMode ? ['#020617', '#1AAE82', '#020617'] : ['#FFFFFF', '#E0F2FE', '#FFFFFF']} 
          speed={0.3} 
          blend={0.5}
          baseColor={isDarkMode ? 0.0 : 1.0}
          className="absolute inset-0 z-0 opacity-40 pointer-events-none fixed"
        />

        {/* 1. HERO SECTION */}
        <section className="relative pt-24 pb-20 z-10">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
             >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1AAE82]/10 text-[#1AAE82] text-sm font-bold uppercase tracking-wider mb-8 border border-[#1AAE82]/20 backdrop-blur-md">
                 <BookOpen className="w-4 h-4" /> 
                 <span className="opacity-90">Knowledge Base</span>
               </div>
               <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-8 leading-[1.1] drop-shadow-sm">
                 {content.hero.title}
               </h1>
               <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                 {content.hero.lead}
               </p>
             </motion.div>
           </div>
        </section>

        {/* 2. STICKY SEARCH & NAV */}
        <div className="sticky top-[72px] z-30 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-y border-gray-100 dark:border-slate-800 shadow-sm transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative w-full md:w-96 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#1AAE82] transition-colors" />
                <input 
                  type="text"
                  placeholder={content.search.placeholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#1AAE82] outline-none transition-all shadow-inner text-base"
                />
              </div>
              
              {/* Alphabet Nav */}
              <div className="flex-1 w-full overflow-x-auto no-scrollbar">
                <div className="flex gap-2 min-w-max px-1">
                  {content.sections.map(section => (
                    <button
                      key={section.letter}
                      onClick={() => scrollToLetter(section.letter)}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        activeLetter === section.letter 
                          ? 'bg-[#1AAE82] text-white shadow-lg shadow-[#1AAE82]/30 scale-110' 
                          : 'bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 hover:scale-105'
                      }`}
                    >
                      {section.letter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* 3. MAIN CONTENT (Terms) */}
            <div className="lg:col-span-8 space-y-16">
              {/* Core Insight (TL;DR) */}
              <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-[2rem] p-8 border border-white/40 dark:border-slate-700/50 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#1AAE82]" />
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#1AAE82]/10 flex items-center justify-center text-[#1AAE82] shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Core Insight</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                      {content.tldr}
                    </p>
                  </div>
                </div>
              </div>

              {/* Term Sections */}
              {filteredSections.length > 0 ? (
                filteredSections.map((section, idx) => (
                  <motion.div 
                    key={section.letter}
                    id={`section-${section.letter}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4 }}
                    className="scroll-mt-40"
                  >
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-3xl font-bold font-display text-gray-400 dark:text-slate-600 shadow-inner">
                        {section.letter}
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-200 dark:from-slate-800 to-transparent" />
                    </div>

                    <div className="space-y-6">
                      {section.terms.map((term, tIdx) => (
                        <div key={tIdx} className="group bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-gray-100 dark:border-slate-800 hover:shadow-xl hover:shadow-[#1AAE82]/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 dark:bg-slate-800 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          
                          <div className="relative z-10">
                            <div className="flex justify-between items-start gap-6">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#1AAE82] transition-colors flex items-center gap-2">
                                  {term.name}
                                  {term.type === 'signal' && (
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-[#1AAE82]/10 text-[#1AAE82]">
                                      Signal
                                    </span>
                                  )}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                  {term.desc}
                                </p>
                              </div>
                              {term.link && (
                                <a 
                                  href={term.link}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    if (term.link.startsWith('/glossary/')) {
                                       window.location.href = term.link;
                                    } else {
                                       window.location.href = term.link;
                                    }
                                  }}
                                  className="shrink-0 w-12 h-12 rounded-2xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-gray-400 hover:text-[#1AAE82] hover:bg-[#1AAE82]/10 transition-all hover:scale-110"
                                >
                                  <ArrowRight className="w-5 h-5" />
                                </a>
                              )}
                            </div>
                            {term.type === 'signal' && (
                              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-800 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#1AAE82] transition-colors">
                                <Zap className="w-4 h-4" />
                                <span>Signal definition available</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-32 bg-gray-50 dark:bg-slate-900 rounded-[3rem] border border-dashed border-gray-200 dark:border-slate-800">
                  <div className="w-20 h-20 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                    <Search className="w-8 h-8" />
                  </div>
                  <p className="text-xl font-medium text-gray-500 dark:text-gray-400">{content.search.noResults}</p>
                </div>
              )}
            </div>

            {/* 4. SIDEBAR (Quiz & CTA) */}
            <div className="lg:col-span-4 space-y-10">
              <div className="sticky top-32 space-y-10">
                <Quiz content={content.quiz} onNavigate={handleNavigate} />
                
                <div className="bg-[#111827] rounded-[2.5rem] p-10 text-white text-center relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
                      <Hash className="w-8 h-8 text-[#1AAE82]" />
                    </div>
                    <h3 className="font-bold text-2xl mb-4 font-display">{content.cta.title}</h3>
                    <p className="text-gray-400 text-base mb-8 leading-relaxed">{content.cta.text}</p>
                    <div className="space-y-4">
                      <button 
                        onClick={() => handleNavigate('signals')}
                        className="w-full py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl shadow-lg shadow-[#1AAE82]/20 transition-all text-base hover:-translate-y-1"
                      >
                        {content.cta.primary}
                      </button>
                      <button 
                        onClick={() => handleNavigate('landing')}
                        className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all text-base backdrop-blur-sm"
                      >
                        {content.cta.secondary}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-slate-900/50 rounded-2xl p-6 text-xs text-gray-500 dark:text-gray-400 leading-relaxed border border-gray-100 dark:border-slate-800">
                   <span className="font-bold text-gray-700 dark:text-gray-300 block mb-2">Note:</span>
                   {content.boundary.note}
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

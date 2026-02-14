/**
 * @page Landing Page - OwlSeer Homepage
 * 
 * SEO Keywords: TikTok content strategy platform | AI video script generator | TikTok analytics alternative
 * TikTok growth tool | content planning for creators | viral video strategy | TikTok marketing automation
 * best TikTok tool 2026 | AI content creator tools | TikTok engagement optimizer
 * 
 * Long-tail Keywords: best AI tool for TikTok creators 2026 | how to grow TikTok followers with AI
 * TikTok script writing tool | automated TikTok content planning | data-driven TikTok strategy
 * 
 * 中文关键词: TikTok内容策略 | AI脚本生成器 | 短视频营销工具 | 抖音运营助手 | 创作者增长工具
 * TikTok数据分析 | AI视频脚本 | 内容规划平台 | 短视频创作者工具
 */

import React, { useState, useEffect, useMemo, memo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { usePerformance, useLanguage } from '../contexts';
import { 
  ArrowRight, 
  BarChart2, 
  TrendingUp, 
  Users, 
  ChevronDown,
  Menu,
  X,
  Shield,
  Zap,
  Sparkles,
  Heart,
  MessageCircle,
  Share2,
  Moon,
  Sun,
  Globe,
  BookOpen,
  HelpCircle,
  Layout,
  CirclePlay,
  Monitor,
  Smartphone,
  Laptop
} from 'lucide-react';

import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { ProductShowcase } from './ProductShowcase';
import { CoreFeatures } from './CoreFeatures';
import { PricingSection } from './PricingSection';
import { OwlSeerLogo } from './OwlSeerLogo';
import { translations, languages } from '../data/translations';
import { SEO } from './SEO';
import { getCanonicalUrl, seoConfig, getLocalizedStructuredDataSchemas, generateAlternates } from '../data/seoConfig';
import { HeroAuroraBackground } from './ui/hero-aurora-background';
import avatarPng from '../../../头像.png';

// --- Types & Interfaces ---

interface StatProps {
  value: string;
  label: string;
  sublabel: string;
  delay: number;
}

// --- Constants ---

// --- Components ---


const RandomStars = () => {
  const [stars, setStars] = useState<Array<{ top: string; left: string; delay: number; duration: number; size: number; color: string }>>([]);

  useEffect(() => {
    // Generate random stars on client side only
    const newStars = [...Array(12)].map((_, i) => ({
      top: (Math.random() * 140 - 20) + '%', // -20% to 120%
      left: (Math.random() * 140 - 20) + '%', // -20% to 120%
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
      size: Math.random() > 0.5 ? 16 : 10,
      color: Math.random() > 0.6 ? '#5EEAD4' : '#1AAE82'
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute -inset-12 pointer-events-none">
      {stars.map((star, i) => (
        <motion.div 
          key={i}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ 
            duration: star.duration, 
            repeat: Infinity, 
            ease: "easeInOut", 
            delay: star.delay,
            repeatDelay: Math.random() * 2
          }}
          className="absolute"
          style={{ top: star.top, left: star.left, color: star.color }}
        >
          <svg width={star.size} height={star.size} viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-sm">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

// Shared Background Component - REMOVED in favor of AuroraBackground


// Optimized Hero component with performance mode support
const Hero = memo(({ onTrySample, onSignUp, t }: { onTrySample: () => void, onSignUp: () => void, t: any }) => {
  const { enableAnimations, enableParallax, enableBlur, reduceMotion } = usePerformance();
  const { scrollY } = useScroll();
  
  // Simplified scroll transforms - only apply when parallax is enabled
  const heroContentOpacity = useTransform(
    scrollY, 
    [0, 400], 
    [1, 1] // Disable opacity fade-out on scroll
  );
  const heroContentScale = useTransform(
    scrollY, 
    [0, 400], 
    enableParallax ? [1, 0.95] : [1, 1]
  );

  const platforms = ['TikTok', 'YouTube', 'X', 'Instagram'];
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);

  useEffect(() => {
    // Force reset to TikTok (index 0) to ensure it starts there
    setCurrentPlatformIndex(0);

    // Skip platform rotation animation in reduced motion mode
    if (reduceMotion) return;
    
    // TEMPORARY: Fixed to TikTok as requested. Uncomment to restore rolling behavior.
    /*
    const interval = setInterval(() => {
      setCurrentPlatformIndex((prev) => (prev + 1) % platforms.length);
    }, 2500);
    return () => clearInterval(interval);
    */
  }, [reduceMotion]);

  const currentPlatform = platforms[currentPlatformIndex];

  // Animation configuration based on performance mode
  const animationConfig = useMemo(() => ({
    initial: reduceMotion ? false : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion 
      ? { duration: 0 } 
      : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }), [reduceMotion]);

  const renderSubtitle = (text: string) => {
    if (!text.includes('{platform}')) return text;
    const parts = text.split('{platform}');
    return (
      <>
        {parts[0]}
        <span className="mx-1 inline-flex h-[1.2em] items-center overflow-hidden align-baseline leading-none">
          {reduceMotion ? (
            // Static version for reduced motion
            <span className="inline-block leading-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1AAE82] to-[#2DD4BF]">
              {currentPlatform}
            </span>
          ) : (
            <AnimatePresence mode="wait">
              <motion.span
                key={currentPlatform}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block leading-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1AAE82] to-[#2DD4BF]"
              >
                {currentPlatform}
              </motion.span>
            </AnimatePresence>
          )}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section 
      className="relative z-0 flex min-h-[100svh] items-center justify-center overflow-hidden pb-10 pt-[78px] md:min-h-[100vh] md:pb-0 md:pt-[72px]"
      aria-label="Hero section - AI TikTok Content Strategy Platform"
    >
      


      {/* --- Main Content --- */}
      <motion.div 
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8"
        style={enableParallax ? {
          opacity: heroContentOpacity,
          scale: heroContentScale,
        } : undefined}
      >
        {/* H1 Headline */}
        <motion.h1
          {...animationConfig}
          transition={{ ...animationConfig.transition, delay: reduceMotion ? 0 : 0.1 } as any}
          className="relative mx-auto mb-5 max-w-5xl font-display text-[2.45rem] font-bold leading-[1.08] tracking-tight text-gray-900 dark:text-white sm:mb-6 sm:text-5xl md:text-7xl lg:text-8xl"
          style={{ textShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
        >
          {t.title} <br className="md:hidden" />
          <span className="relative inline-block mx-2">
            <span className={`relative inline-block pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#1AAE82] via-[#5EEAD4] to-[#15956F] ${!reduceMotion ? 'animate-gradient-x bg-[length:200%_auto]' : ''}`}>
              {t.titleHighlight}
            </span>
            
            {/* Random Twinkling Stars (Client-side Random) */}
            {/* {!reduceMotion && <RandomStars />} */}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...animationConfig}
          transition={{ ...animationConfig.transition, delay: reduceMotion ? 0 : 0.2 } as any}
          className="mx-auto mb-8 max-w-xl text-base font-normal leading-relaxed tracking-normal text-gray-500 dark:text-gray-300 sm:mb-10 sm:max-w-2xl sm:text-lg md:text-xl"
        >
          {renderSubtitle(t.subtitle)}
          {t.subtitle2 ? (
            <>
              <br className="hidden md:block" />
              <span className="text-gray-900 dark:text-white font-semibold relative inline-block mt-1">
                {t.subtitle2}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1AAE82] opacity-50"></span>
              </span>
            </>
          ) : null}
        </motion.p>

        {/* CTA Button Area */}
        <motion.div
          {...animationConfig}
          transition={{ ...animationConfig.transition, delay: reduceMotion ? 0 : 0.3 } as any}
          className="mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:gap-6"
        >
          <button 
            onClick={onTrySample}
            className="group relative w-full overflow-hidden rounded-full bg-gray-900 px-7 py-3.5 shadow-[0_16px_40px_-22px_rgba(15,23,42,0.55)] will-change-transform transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_26px_58px_-26px_rgba(16,185,129,0.68)] dark:bg-white sm:w-auto sm:px-8 sm:py-4"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#149A74] via-[#1AAE82] to-[#2DD4BF] bg-[length:180%_100%] opacity-0 transition-[opacity,background-position] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[position:100%_0] group-hover:opacity-100" />
            <div className="pointer-events-none absolute -left-1/3 top-[-130%] h-[340%] w-1/3 -translate-x-full rotate-[20deg] bg-white/40 opacity-0 blur-xl transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[420%] group-hover:opacity-70 dark:bg-white/35" />
            <span className="relative flex items-center justify-center gap-3 text-base font-bold text-white transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white dark:text-gray-900 sm:text-lg">
              {t.ctaPrimary} 
              <ArrowRight className="w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5" />
            </span>
          </button>
          
          <button 
            onClick={onSignUp}
            className="group flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-3.5 font-semibold text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white sm:w-auto sm:py-4"
          >
            <div className="flex items-center justify-center">
              <Zap className="w-4 h-4 text-[#1AAE82] fill-[#1AAE82] opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
            </div>
            <span className="text-[15px]">{t.ctaSecondaryButton || 'Start Now'}</span>
          </button>
        </motion.div>
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-b from-transparent via-white/70 to-white dark:via-[#070c14]/72 dark:to-[#070c14]"
      />
    </section>
  );
});



const defaultValuePropositionContent = {
  badge: 'Strategic Clarity',
  title: 'Stop guessing what to post',
  subtitle: 'OwlSeer tells you what to do next on TikTok.',
  cards: [
    { title: 'Actionable Plans', desc: 'Get a complete content plan in under 3 minutes.' },
    { title: 'AI Scripts', desc: 'AI-generated scripts ready to shoot today.' },
    { title: 'Data-Driven', desc: 'For creators tired of random posting.' }
  ],
  trust: ['No miracle promises', 'No auto-posting', 'No password required'],
  metrics: [
    { label: 'Plan turnaround', value: '< 3 min' },
    { label: 'Signals analyzed', value: '30+' },
    { label: 'Publishing rhythm', value: 'Weekly' }
  ],
  cta: {
    primary: 'See It In Action',
    secondary: 'How it works'
  }
};

const ValueProposition = ({ t, onTrySample, onNavigate, onSignUp }: { t: any; onTrySample: () => void; onNavigate: (page: string) => void; onSignUp: () => void }) => {
  const { reduceMotion } = usePerformance();
  const content = t || defaultValuePropositionContent;
  const cards = (content.cards || defaultValuePropositionContent.cards).map((card: any, index: number) => {
    const icons = [
      <Zap key="plans" className="h-6 w-6 text-[#1AAE82]" />,
      <CirclePlay key="scripts" className="h-6 w-6 text-[#1AAE82]" />,
      <BarChart2 key="data" className="h-6 w-6 text-[#1AAE82]" />
    ];
    return { ...card, icon: icons[index] };
  });

  return (
    <section
      className="perf-content-auto relative overflow-hidden py-20 md:py-24 lg:py-28"
      aria-label="Value proposition - Why choose OwlSeer"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div>
            <div className="inline-flex items-center rounded-full border border-emerald-200/70 bg-white/75 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 backdrop-blur-md dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-200">
              {content.badge || defaultValuePropositionContent.badge}
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-5xl dark:text-white">
              {content.title || defaultValuePropositionContent.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
              {content.subtitle || defaultValuePropositionContent.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={onSignUp}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1AAE82] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_45px_-26px_rgba(16,185,129,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#15956F] sm:w-auto"
              >
                {content.cta?.primary || defaultValuePropositionContent.cta.primary}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate('how-it-works')}
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-md transition-all duration-300 hover:bg-white dark:border-white/15 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-900 sm:w-auto"
              >
                {content.cta?.secondary || defaultValuePropositionContent.cta.secondary}
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {(content.metrics || defaultValuePropositionContent.metrics).map((metric: any) => (
              <div
                key={metric.label}
                className="perf-lite-card rounded-2xl border border-white/85 bg-white/72 px-4 py-4 shadow-[0_20px_55px_-45px_rgba(15,23,42,0.95)] backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{metric.label}</div>
                <div className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((item: any, i: number) => (
            <div
              key={item.title}
              className={`perf-heavy-card group rounded-[26px] border border-white/85 bg-white/75 p-6 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.9)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 ${
                reduceMotion ? '' : 'transition-all duration-500 hover:-translate-y-1'
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-200/70 bg-emerald-500/10 dark:border-emerald-400/30 dark:bg-emerald-500/15">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="perf-lite-card mt-10 flex flex-col items-start gap-3 rounded-2xl border border-white/85 bg-white/72 px-4 py-3 text-sm shadow-[0_20px_55px_-45px_rgba(15,23,42,0.95)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-center dark:border-white/10 dark:bg-slate-900/60">
          <div className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <Shield className="h-4 w-4 text-emerald-500" />
            {(content.trust || defaultValuePropositionContent.trust)[0]}
          </div>
          <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block dark:bg-slate-600" />
          <div className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <X className="h-4 w-4 text-emerald-500" />
            {(content.trust || defaultValuePropositionContent.trust)[1]}
          </div>
          <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block dark:bg-slate-600" />
          <div className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <Shield className="h-4 w-4 text-emerald-500" />
            {(content.trust || defaultValuePropositionContent.trust)[2]}
          </div>
        </div>
      </div>
    </section>
  );
};

export function LandingPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const { language, setLanguage } = useLanguage();
  const { reduceMotion } = usePerformance();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isZh = language === 'zh';

  const finalCtaCopy = {
    badge: isZh ? 'AI 增长信号引擎（TikTok）' : 'AI Growth Signals for TikTok',
    titlePrefix: isZh ? '在发布前就知道什么内容' : 'Know What',
    titleHighlight: isZh ? '会增长' : 'Will Grow',
    titleSuffix: isZh ? '。' : 'Before You Post.',
    subtitle: isZh
      ? 'OwlSeer 分析 30+ 预测信号，帮你优先发布高概率增长内容。用数据决策，不再靠猜。'
      : 'OwlSeer analyzes 30+ predictive signals to identify high-probability content. Publish with data, not guesswork.',
    trustNoCard: isZh ? '无需信用卡' : 'No credit card required'
  };

  useEffect(() => {
    (window as any).navigateToHowItWorks = () => onNavigate('how-it-works');
    (window as any).navigateToPricing = () => onNavigate('pricing');
    (window as any).navigateToFeatures = () => onNavigate('features');
    (window as any).navigateToBlog = () => onNavigate('blog');
    (window as any).navigateToFAQ = () => onNavigate('faq');
    (window as any).navigateToContact = () => onNavigate('contact');
    (window as any).navigateToSecurity = () => onNavigate('security');
    (window as any).navigateToPrivacy = () => onNavigate('privacy');
    (window as any).navigateToTerms = () => onNavigate('terms');
    (window as any).navigateToCookies = () => onNavigate('cookies');
    return () => { 
      delete (window as any).navigateToHowItWorks; 
      delete (window as any).navigateToPricing;
      delete (window as any).navigateToFeatures;
      delete (window as any).navigateToBlog;
      delete (window as any).navigateToFAQ;
      delete (window as any).navigateToContact;
      delete (window as any).navigateToSecurity;
      delete (window as any).navigateToPrivacy;
      delete (window as any).navigateToTerms;
      delete (window as any).navigateToCookies;
    };
  }, [onNavigate]);

  // Removed local useEffect for dark mode class toggling (handled in App.tsx)

  const handleTrySample = () => {
    // Navigate to the simulation page for Try Sample
    onNavigate('simulation');
  };

  const handleSignUp = () => {
    onNavigate('auth');
  };

  // Get SEO config based on language
  const seo = seoConfig.home[language as 'en' | 'zh'] || seoConfig.home.en;
  const localizedSchemas = getLocalizedStructuredDataSchemas(language);
  const homeStructuredData = [
    localizedSchemas.organization,
    localizedSchemas.softwareApplication,
    localizedSchemas.webSite
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#1AAE82]/20 selection:text-[#1AAE82]">
      {/* SEO Meta Tags */}
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={getCanonicalUrl('/', language)}
        lang={language}
        alternates={generateAlternates('/')}
        structuredData={homeStructuredData}
      />
      
      <style>{`
        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-down {
          animation: scroll-down 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 4s linear infinite;
        }
        @keyframes shine {
          from {
            background-position: 0% center;
          }
          to {
            background-position: -200% center;
          }
        }
      `}</style>
      
      <Navbar 
        onTrySample={handleTrySample} 
        onSignUp={handleSignUp}
        onNavigate={onNavigate}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={t}
      />
      
      <main className="relative bg-white dark:bg-[#020617]">
        <HeroAuroraBackground 
          colorStops={['#7DFF68', '#51FFB2', '#FFFFFF']}
          amplitude={1.0}
          speed={1.0}
          blend={0.5}
          baseColor={isDarkMode ? 0.0 : 1.0}
        >
          <Hero onTrySample={handleTrySample} onSignUp={handleSignUp} t={t.hero} />
        </HeroAuroraBackground>
        <div className="relative z-10 mt-[-1px] overflow-hidden bg-gradient-to-b from-white via-[#f6f7fb] to-[#f6f7fb] dark:from-[#070c14] dark:via-[#070c14] dark:to-[#070c14]">
          <ProductShowcase t={t.productShowcase} onNavigate={onNavigate} />
          <CoreFeatures t={t.coreFeatures} />
          <ValueProposition t={t.valueProposition} onTrySample={handleTrySample} onNavigate={onNavigate} onSignUp={handleSignUp} />
          <PricingSection onSignUp={handleSignUp} t={t.pricingSection} />
        
        <section
          className="perf-content-auto relative overflow-hidden bg-gradient-to-b from-[#f6f7fb] via-[#effcf5] to-white py-20 md:py-24 lg:py-28 dark:from-[#070c14] dark:via-[#0b1721] dark:to-slate-900"
          aria-label="Call to action - Start your free trial"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="perf-decor-blur absolute -right-16 top-0 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/15" />
            <div className="perf-decor-blur absolute -left-14 top-20 h-64 w-64 rounded-full bg-teal-200/35 blur-3xl dark:bg-teal-400/12" />
            <div className="perf-decor-blur absolute bottom-[-140px] left-1/2 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-emerald-200/35 blur-[130px] dark:bg-emerald-500/10" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="space-y-8">


                <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
                  {finalCtaCopy.titlePrefix}{' '}
                  <span className="bg-gradient-to-r from-[#059669] via-[#10b981] to-[#047857] bg-clip-text text-transparent">
                    {finalCtaCopy.titleHighlight}
                  </span>
                  <br />
                  {finalCtaCopy.titleSuffix}
                </h2>

                <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                  {finalCtaCopy.subtitle}
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={handleSignUp}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#059669] to-[#10b981] px-8 py-4 text-base font-semibold text-white shadow-[0_24px_60px_-32px_rgba(16,185,129,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#047857] hover:to-[#059669] sm:w-auto"
                  >
                    {t.finalCta?.start || 'Start Your Free Trial'}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={handleTrySample}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/85 px-8 py-4 text-base font-semibold text-slate-700 backdrop-blur-md transition-all duration-300 hover:bg-white sm:w-auto dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    <CirclePlay className="h-4 w-4" />
                    {t.finalCta?.demo || 'View Sample'}
                  </button>
                </div>


              </div>

              <div className={`relative mx-auto -mt-8 w-full max-w-[52rem] lg:w-[108%] lg:max-w-none ${reduceMotion ? '' : '[perspective:1800px]'}`}>
                <div className="perf-decor-blur pointer-events-none absolute inset-x-8 bottom-[-1.8rem] h-16 rounded-full bg-emerald-900/18 blur-3xl dark:bg-black/45" />

                <div
                  className={`relative origin-bottom-left ${reduceMotion ? '' : 'will-change-transform [transform-style:preserve-3d]'} md:-ml-6 lg:-ml-16`}
                  style={reduceMotion ? undefined : { transform: 'rotateX(6deg) rotateY(-12deg) rotateZ(6deg)' }}
                >
                  <div className="perf-heavy-card relative rounded-[28px] border border-white/85 bg-white/90 p-4 shadow-[0_56px_120px_-60px_rgba(15,23,42,0.98)] backdrop-blur-xl sm:p-5 dark:border-white/10 dark:bg-slate-900/72">
                    <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(130deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0)_45%)] dark:bg-[linear-gradient(130deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0)_45%)]" />
                    <div className="pointer-events-none absolute -right-2 top-3 h-[calc(100%-1.2rem)] w-2.5 rounded-r-[14px] bg-gradient-to-b from-slate-200/80 to-slate-400/70 dark:from-slate-700/75 dark:to-slate-900/80" />
                    <div className="pointer-events-none absolute -bottom-2 left-4 right-3 h-2.5 rounded-b-[12px] bg-gradient-to-r from-slate-300/70 to-slate-500/70 dark:from-slate-700/80 dark:to-slate-900/90" />

                    <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="rounded-lg bg-slate-100 px-3 py-1 text-xs text-slate-500 dark:bg-white/10 dark:text-slate-300">
                        app.owlseer.com
                      </div>
                    </div>

                    <div className="flex gap-5">
                      {/* Sidebar Skeleton */}
                      <div className="hidden w-12 flex-col gap-3 sm:flex">
                        <div className="mb-2 grid h-8 w-8 place-items-center rounded-lg bg-emerald-600 text-white overflow-hidden">
                          <img src={avatarPng} alt="OwlSeer Avatar" className="h-full w-full object-cover" />
                        </div>
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="h-1.5 w-6 rounded-full bg-slate-200 dark:bg-white/10" />
                        ))}
                      </div>

                      {/* Main Dashboard Content */}
                      <div className="flex-1 space-y-4">
                        {/* Header Row */}
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-slate-800 dark:text-white">Dashboard</span>
                          <div className="flex gap-2">
                            <div className="h-2 w-16 rounded-full bg-slate-200 dark:bg-white/10" />
                            <div className="h-6 w-6 rounded-full bg-slate-200 dark:bg-white/10" />
                          </div>
                        </div>

                        {/* KPI Cards Row */}
                        <div className="grid grid-cols-3 gap-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="rounded-lg bg-slate-50 p-2.5 dark:bg-white/5">
                              <div className="mb-1.5 h-1.5 w-8 rounded-full bg-slate-200 dark:bg-white/10" />
                              <div className="h-3 w-12 rounded-full bg-slate-300 dark:bg-white/20" />
                            </div>
                          ))}
                        </div>

                        {/* Chart Widget */}
                        <div className="relative h-28 rounded-xl bg-slate-50 p-3 dark:bg-white/5">
                          <div className="mb-2 flex justify-between">
                            <div className="h-2 w-16 rounded-full bg-slate-200 dark:bg-white/10" />
                            <div className="h-2 w-8 rounded-full bg-slate-200 dark:bg-white/10" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 top-8 opacity-60">
                            <svg viewBox="0 0 400 100" className="h-full w-full" preserveAspectRatio="none">
                              <path d="M0,80 C100,70 150,90 200,40 C250,-10 300,50 400,20" fill="none" stroke="#10b981" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                              <path d="M0,80 C100,70 150,90 200,40 C250,-10 300,50 400,20 V100 H0 Z" fill="url(#gradient)" opacity="0.2" />
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#10b981" />
                                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>

                        {/* List Items */}
                        <div className="space-y-2">
                          {[1, 2].map((i) => (
                            <div key={i} className="flex items-center gap-3 rounded-lg border border-slate-100 p-2 dark:border-white/5">
                              <div className="h-6 w-6 rounded bg-slate-100 dark:bg-white/10" />
                              <div className="space-y-1">
                                <div className="h-1.5 w-24 rounded-full bg-slate-200 dark:bg-white/10" />
                                <div className="h-1.5 w-12 rounded-full bg-slate-100 dark:bg-white/5" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {!reduceMotion && (
                  <>
                    <div
                      className="perf-heavy-card absolute -right-4 -top-6 hidden w-40 rounded-xl border border-white/70 bg-white/90 p-3 shadow-[0_30px_65px_-35px_rgba(15,23,42,0.88)] backdrop-blur-lg sm:block dark:border-white/10 dark:bg-slate-900/70"
                      style={{ transform: 'rotateX(6deg) rotateY(-12deg) rotateZ(6deg) translateZ(20px)' }}
                    >
                      <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
                        <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
                        Trend Velocity
                      </div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">+138%</div>
                      <div className="mt-2 flex items-end gap-1">
                        <span className="h-3 w-2 rounded-t bg-emerald-200 dark:bg-emerald-500/30" />
                        <span className="h-5 w-2 rounded-t bg-emerald-300 dark:bg-emerald-500/40" />
                        <span className="h-4 w-2 rounded-t bg-emerald-400 dark:bg-emerald-500/50" />
                        <span className="h-6 w-2 rounded-t bg-emerald-500 dark:bg-emerald-500/65" />
                        <span className="h-8 w-2 rounded-t bg-emerald-600 dark:bg-emerald-400/80" />
                      </div>
                    </div>

                    <div
                      className="perf-heavy-card absolute -right-4 top-24 hidden w-40 rounded-xl border border-white/70 bg-white/90 p-3 shadow-[0_30px_65px_-35px_rgba(15,23,42,0.88)] backdrop-blur-lg md:block dark:border-white/10 dark:bg-slate-900/70"
                      style={{ transform: 'rotateX(6deg) rotateY(-12deg) rotateZ(6deg) translateZ(40px)' }}
                    >
                      <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
                        <BarChart2 className="h-3.5 w-3.5 text-indigo-500" />
                        Script Performance
                      </div>
                      <div className="mb-2 inline-flex rounded-full bg-indigo-100 px-2 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                        Top 13%
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-1.5 overflow-hidden rounded-full bg-indigo-100 dark:bg-indigo-500/15">
                          <div className="h-full w-[87%] rounded-full bg-indigo-500" />
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-500/15">
                          <div className="h-full w-[65%] rounded-full bg-emerald-500" />
                        </div>
                      </div>
                    </div>

                    <div
                  className="perf-heavy-card absolute -right-4 top-48 hidden w-40 rounded-xl border border-white/70 bg-white/90 p-3 shadow-[0_30px_65px_-35px_rgba(15,23,42,0.88)] backdrop-blur-lg sm:block dark:border-white/10 dark:bg-slate-900/70"
                  style={{ transform: 'rotateX(6deg) rotateY(-12deg) rotateZ(6deg) translateZ(60px)' }}
                >
                      <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
                        <Shield className="h-3.5 w-3.5 text-emerald-500" />
                        Viral Potential
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">87%</span>
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-500 text-white">✓</span>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                        <div className="h-full w-[87%] rounded-full bg-emerald-500" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="perf-lite-card flex items-center gap-4 rounded-2xl border border-white/85 bg-white/70 p-4 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.95)] backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/55">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300">
                  <BarChart2 className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{isZh ? '30+ 预测信号' : '30+ Predictive'}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">{isZh ? 'Signals 引擎' : 'Signals'}</div>
                </div>
              </div>

              <div className="perf-lite-card flex items-center gap-4 rounded-2xl border border-white/85 bg-white/70 p-4 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.95)] backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/55">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-500/15 dark:text-teal-300">
                  <Zap className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{isZh ? '趋势增速' : 'Trend Velocity'}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">{isZh ? '实时更新' : 'Real-time'}</div>
                </div>
              </div>

              <div className="perf-lite-card flex items-center gap-4 rounded-2xl border border-white/85 bg-white/70 p-4 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.95)] backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/55">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300">
                  <Shield className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{isZh ? '内容风险' : 'Content Risk'}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">{isZh ? '评分体系' : 'Score'}</div>
                </div>
              </div>

              <div className="perf-lite-card flex items-center gap-4 rounded-2xl border border-white/85 bg-white/70 p-4 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.95)] backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/55">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{isZh ? '爆款潜力' : 'Viral Potential'}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">{isZh ? '概率评估' : 'Forecast'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
      
      <Footer t={t.footer} onNavigate={onNavigate} />
    </div>
  );
}

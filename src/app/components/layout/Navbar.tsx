import React, { useState, useEffect, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { addLanguagePrefix, type Language, usePerformance } from '../../contexts';
import { 
  ArrowRight, 
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  CirclePlay
} from 'lucide-react';
import { OwlSeerLogo } from '../OwlSeerLogo';
import { languages } from '../../data/translations';

interface NavbarProps {
  onTrySample: () => void;
  onSignUp: () => void;
  onNavigate?: (page: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
  t: any;
}

export const Navbar = memo(({ 
  onTrySample, 
  onSignUp, 
  onNavigate,
  language, 
  setLanguage, 
  isDarkMode, 
  setIsDarkMode,
  t 
}: NavbarProps) => {
  const { enableBlur, reduceMotion } = usePerformance();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = React.useRef<any>(null);
  const liquidFilterId = 'owlseer-navbar-liquid-distort';
  const [supportsSvgBackdropFilter, setSupportsSvgBackdropFilter] = useState(false);
  const capsuleRadiusClass = 'rounded-full';
  const panelRadiusClass = 'rounded-[20px]';
  const nav = t?.nav || {};
  const navLinks = nav.links || {};
  const navDesc = nav.desc || {};
  const navActions = nav.actions || {};
  const navDarkMode = nav.darkMode || {};
  const DESKTOP_DROPDOWN_CLOSE_DELAY_MS = 500;

  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      // Fallback for window globals
      if (page === 'pricing') (window as any).navigateToPricing?.();
      if (page === 'features') (window as any).navigateToFeatures?.();
      if (page === 'how-it-works') (window as any).navigateToHowItWorks?.();
      if (page === 'blog') (window as any).navigateToBlog?.();
      if (page === 'trends-hub') window.location.href = addLanguagePrefix('/social/trends', language);
      if (page === 'tools') window.location.href = addLanguagePrefix('/social/tools', language);
       if (page === 'faq') (window as any).navigateToFAQ?.();
       if (page === 'contact') (window as any).navigateToContact?.();
       if (page === 'security') (window as any).navigateToSecurity?.();
       if (page === 'privacy') (window as any).navigateToPrivacy?.();
       if (page === 'terms') (window as any).navigateToTerms?.();
       if (page === 'cookies') (window as any).navigateToCookies?.();
       if (page === 'landing') window.location.href = addLanguagePrefix('/', language); 
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!enableBlur || typeof window === 'undefined' || typeof CSS === 'undefined') {
      setSupportsSvgBackdropFilter(false);
      return;
    }

    const supportsBackdrop =
      CSS.supports('backdrop-filter: blur(1px)') ||
      CSS.supports('-webkit-backdrop-filter: blur(1px)');
    if (!supportsBackdrop) {
      setSupportsSvgBackdropFilter(false);
      return;
    }

    const userAgent = window.navigator.userAgent;
    const isFirefox = /firefox/i.test(userAgent);
    const isSafari = /^((?!chrome|chromium|android).)*safari/i.test(userAgent);
    const supportsSvgSyntax =
      CSS.supports('backdrop-filter', `url("#${liquidFilterId}") blur(2px)`) ||
      CSS.supports('-webkit-backdrop-filter', `url("#${liquidFilterId}") blur(2px)`);

    setSupportsSvgBackdropFilter(Boolean(supportsSvgSyntax && !isFirefox && !isSafari));
  }, [enableBlur, liquidFilterId]);

  const clearDropdownCloseTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseEnter = (name: string) => {
    clearDropdownCloseTimer();
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    clearDropdownCloseTimer();
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      timeoutRef.current = null;
    }, DESKTOP_DROPDOWN_CLOSE_DELAY_MS);
  };

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  useEffect(() => {
    return () => {
      clearDropdownCloseTimer();
    };
  }, []);

  const liquidDisplacementScale = scrolled ? 10 : 8;

  const navShellClass = useMemo(() => {
    const base =
      `relative overflow-visible ${capsuleRadiusClass} border-[0.5px] transition-all duration-300`;
    if (enableBlur) {
      return scrolled
        ? `${base} border-white/52 bg-white/42 shadow-[0_24px_62px_-38px_rgba(15,23,42,0.48),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(255,255,255,0.22)] dark:border-white/16 dark:bg-[#0b1220]/46 dark:shadow-[0_28px_72px_-40px_rgba(2,6,23,0.84),inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(255,255,255,0.05)]`
        : `${base} border-white/44 bg-white/30 shadow-[0_20px_54px_-36px_rgba(15,23,42,0.4),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(255,255,255,0.18)] dark:border-white/14 dark:bg-[#0b1220]/36 dark:shadow-[0_24px_62px_-38px_rgba(2,6,23,0.76),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(255,255,255,0.04)]`;
    }
    return scrolled
      ? `${base} border-black/10 bg-white/94 shadow-[0_20px_52px_-36px_rgba(15,23,42,0.38)] dark:border-white/18 dark:bg-slate-950/90`
      : `${base} border-black/8 bg-white/92 shadow-[0_16px_42px_-32px_rgba(15,23,42,0.3)] dark:border-white/16 dark:bg-slate-950/84`;
  }, [capsuleRadiusClass, enableBlur, scrolled]);

  const shellBackdropStyle = useMemo<React.CSSProperties | undefined>(() => {
    if (!enableBlur) return undefined;
    const filterValue = supportsSvgBackdropFilter
      ? `url("#${liquidFilterId}") blur(${scrolled ? 14 : 12}px) saturate(${scrolled ? 168 : 158}%) brightness(1.03)`
      : `blur(${scrolled ? 17 : 15}px) saturate(${scrolled ? 165 : 155}%) brightness(1.03)`;
    return {
      backdropFilter: filterValue,
      WebkitBackdropFilter: filterValue
    };
  }, [enableBlur, liquidFilterId, scrolled, supportsSvgBackdropFilter]);

  const navItemBaseClass =
    `${capsuleRadiusClass} inline-flex h-9 items-center gap-1.5 px-3.5 text-base font-bold transition-[background-color,color,box-shadow] duration-300`;
  const navItemActiveClass =
    "bg-white/62 dark:bg-white/16 text-[#15956F] shadow-[inset_0_1px_0_rgba(255,255,255,0.88),0_10px_26px_-18px_rgba(15,23,42,0.5)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_12px_28px_-20px_rgba(2,6,23,0.9)]";
  const navItemIdleClass =
    "text-gray-700 dark:text-slate-100 hover:text-[#15956F] hover:bg-white/46 dark:hover:bg-white/10";
  const navIconButtonBaseClass =
    `${capsuleRadiusClass} inline-flex h-9 w-9 items-center justify-center transition-[background-color,color,box-shadow] duration-300`;
  const navTextButtonBaseClass =
    `${capsuleRadiusClass} inline-flex h-9 items-center justify-center px-5 text-base font-bold transition-[background-color,color,box-shadow] duration-300 whitespace-nowrap`;

  const dropdownPanelClass = useMemo(() => {
    if (enableBlur) {
      return `absolute top-full left-1/2 -translate-x-1/2 mt-3 ${panelRadiusClass} border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6 overflow-hidden shadow-[0_30px_80px_-44px_rgba(15,23,42,0.46)] dark:shadow-[0_34px_90px_-48px_rgba(2,6,23,0.86)] ring-1 ring-black/5 dark:ring-white/10 z-10`;
    }
    return `absolute top-full left-1/2 -translate-x-1/2 mt-2 ${panelRadiusClass} border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 overflow-hidden shadow-2xl ring-1 ring-black/5 z-10`;
  }, [enableBlur, panelRadiusClass]);

  const mobilePanelClass = useMemo(() => {
    if (enableBlur) {
      return `md:hidden absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 ${panelRadiusClass} overflow-hidden shadow-[0_30px_84px_-46px_rgba(15,23,42,0.48)] dark:shadow-[0_32px_88px_-48px_rgba(2,6,23,0.84)]`;
    }
    return `md:hidden absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 ${panelRadiusClass} overflow-hidden shadow-lg shadow-gray-200/20 dark:shadow-black/20`;
  }, [enableBlur, panelRadiusClass]);

  const productDropdownPositionClass = "!left-0 !translate-x-0 origin-top-left";
  const solutionsDropdownPositionClass = "left-1/2 -translate-x-1/2 origin-top";
  const resourcesDropdownPositionClass = "right-0 left-auto translate-x-0 origin-top-right";
  const languageDropdownPositionClass = "right-0 left-auto translate-x-0 origin-top-right";

  return (
    <motion.nav
      initial={reduceMotion ? false : { y: -100 }}
      animate={{ y: 0 }}
      transition={reduceMotion ? { duration: 0 } : undefined}
      className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-3 lg:px-6"
    >
      <svg className="pointer-events-none absolute h-0 w-0 opacity-0" aria-hidden>
        <defs>
          <filter id={liquidFilterId} x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.007 0.025" numOctaves="3" seed="23" result="noise">
              {!reduceMotion && (
                <animate
                  attributeName="baseFrequency"
                  dur="22s"
                  values="0.007 0.025;0.006 0.021;0.008 0.028;0.007 0.025"
                  repeatCount="indefinite"
                />
              )}
            </feTurbulence>
            <feGaussianBlur in="noise" stdDeviation="0.35" result="softNoise" />
            <feDisplacementMap in="SourceGraphic" in2="softNoise" scale={liquidDisplacementScale} xChannelSelector="R" yChannelSelector="G">
              {!reduceMotion && supportsSvgBackdropFilter && (
                <animate
                  attributeName="scale"
                  dur="14s"
                  values={`${liquidDisplacementScale};${liquidDisplacementScale + 2};${liquidDisplacementScale}`}
                  repeatCount="indefinite"
                />
              )}
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>

      <div className={`mx-auto max-w-7xl ${navShellClass}`} style={shellBackdropStyle}>
        <div
          className={`pointer-events-none absolute inset-0 ${capsuleRadiusClass}`}
          style={{
            background: isDarkMode
              ? 'radial-gradient(190px 82px at 50% -12%, rgba(226,232,240,0.2) 0%, rgba(148,163,184,0.1) 34%, rgba(148,163,184,0.03) 58%, rgba(15,23,42,0) 80%), linear-gradient(116deg, rgba(148,163,184,0.14) 0%, rgba(15,23,42,0.2) 46%, rgba(226,232,240,0.1) 100%)'
              : 'radial-gradient(220px 96px at 50% -12%, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.34) 34%, rgba(255,255,255,0.12) 57%, rgba(255,255,255,0) 78%), linear-gradient(116deg, rgba(255,255,255,0.56) 0%, rgba(255,255,255,0.2) 46%, rgba(255,255,255,0.44) 100%)'
          }}
        />
        <div className={`pointer-events-none absolute inset-[1px] ${capsuleRadiusClass} border border-white/60 dark:border-white/12`} />
        <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/20" />
        <div
          className={`pointer-events-none absolute inset-[1px] ${capsuleRadiusClass} opacity-[0.08] mix-blend-soft-light dark:opacity-[0.06]`}
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.92) 0.65px, transparent 0.75px)',
            backgroundSize: '2.6px 2.6px'
          }}
        />
        {enableBlur && !reduceMotion && (
          <motion.div
            className="pointer-events-none absolute -top-14 h-20 w-48 rounded-full bg-white/45 blur-3xl dark:bg-sky-100/12"
            animate={{ x: [0, 160, 0], opacity: [0.08, 0.22, 0.08] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <div className="relative px-3 sm:px-4 lg:px-5">
          <div className="relative flex h-[64px] items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
          {/* Logo */}
          <div className="flex items-center justify-start">
            <a 
              href={addLanguagePrefix('/', language)}
              className="flex items-center gap-2 cursor-pointer" 
              onClick={(e) => { e.preventDefault(); handleNav('landing'); }}
            >
              <OwlSeerLogo className="h-8 w-auto text-gray-900 dark:text-white" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-center gap-3">
            
            {/* Product Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('product')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                type="button"
                className={`${navItemBaseClass} ${activeDropdown === 'product' ? navItemActiveClass : navItemIdleClass}`}
                onClick={(e) => e.preventDefault()}
              >
                {t.product} <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'product' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
            {activeDropdown === 'product' && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`${dropdownPanelClass} ${productDropdownPositionClass} w-[600px]`}
                >
                  <div className="grid grid-cols-2 gap-8">
                        {/* Platform Column */}
                        <div className="space-y-4">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{nav.platform || "Platform"}</div>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('how-it-works'); }} className="block group/item">
                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-[#1AAE82] transition-colors">{t.howItWorks}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{navDesc.howItWorks || "Get started in 3 steps"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('methodology'); }} className="block group/item">
                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-[#1AAE82] transition-colors">{t.methodology || "Methodology"}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{navDesc.methodology || "Our 5-step AI process"}</div>
                          </a>
                          <a href={addLanguagePrefix('/social/signals', language)} onClick={(e) => { e.preventDefault(); handleNav('signals'); }} className="block group/item">
                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-[#1AAE82] transition-colors">{navLinks.signals || "30+ Signals"}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{navDesc.signals || "What we track"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); onTrySample(); }} className="block group/item">
                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-[#1AAE82] transition-colors flex items-center gap-1">{navLinks.interactiveSample || "Interactive Sample"} <CirclePlay className="w-3 h-3" /></div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{navDesc.interactiveSample || "See OwlSeer in action"}</div>
                          </a>
                        </div>

                        {/* Use Cases Column */}
                        <div className="space-y-4">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{nav.useCases || "Use Cases"}</div>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/trend-prediction'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.trendPrediction || "Trend Prediction"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/content-diagnosis'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.contentDiagnosis || "Content Diagnosis"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/script-generation'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.scriptGeneration || "Script Generation"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/posting-schedule'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.postingSchedule || "Posting Schedule"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/hashtag-strategy'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.hashtagStrategy || "Hashtag Strategy"}</div>
                          </a>
                          
                          <div className="pt-2 border-t border-gray-100 dark:border-slate-800">
                             <a href="#" onClick={(e) => { e.preventDefault(); onTrySample(); }} className="block group/item">
                                <div className="text-sm font-bold text-[#1AAE82] group-hover/item:underline flex items-center gap-1">{navActions.trySampleCta || "TRY THE SAMPLE"} <ArrowRight className="w-3 h-3" /></div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{navDesc.trySample || "See it on real data"}</div>
                             </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                type="button"
                className={`${navItemBaseClass} ${activeDropdown === 'solutions' ? navItemActiveClass : navItemIdleClass}`}
                onClick={(e) => e.preventDefault()}
              >
                {nav.solutions || "Solutions"} <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
            {activeDropdown === 'solutions' && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`${dropdownPanelClass} ${solutionsDropdownPositionClass} w-[560px]`}
                >
                  <div className="grid grid-cols-2 gap-8">
                        {/* By Role Column */}
                        <div className="space-y-4">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{nav.byRole || "By Role"}</div>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/content-creators'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.contentCreators || "Content Creators"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/local-business'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.localBusiness || "Local Business"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/agencies'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.agencies || "Agencies"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/brands'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.brands || "Brands"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/ecommerce'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.ecommerceSellers || "E-commerce Sellers"}</div>
                          </a>
                        </div>

                        {/* Compare Column */}
                        <div className="space-y-4">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{(t?.compare as string) || (language === 'zh' ? '对比' : 'Compare')}</div>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('compare/ai-tools-comparison'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.compareAiTools || "AI Tools Comparison"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('compare/tubespanner'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.compareTubeSpanner || "OwlSeer vs TubeSpanner"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('compare/owlseer-vs-vidiq'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.compareVidIQ || "OwlSeer vs VidIQ"}</div>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <button 
              className={`${navItemBaseClass} ${navItemIdleClass}`}
              onClick={() => handleNav('pricing')}
            >
              {t.pricing}
            </button>

            {/* Resources Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                type="button"
                className={`${navItemBaseClass} ${activeDropdown === 'resources' ? navItemActiveClass : navItemIdleClass}`}
                onClick={(e) => e.preventDefault()}
              >
                {t.resources} <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
            {activeDropdown === 'resources' && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`${dropdownPanelClass} ${resourcesDropdownPositionClass} w-[500px]`}
                >
                  <div className="grid grid-cols-2 gap-8">
                        {/* Learn Column */}
                        <div className="space-y-4">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{nav.learn || "Learn"}</div>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('blog'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{t.blog}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('guides'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{t.guides}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('trends-hub'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.trends || "Trends"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('tools'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.tools || "Tools"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('glossary'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{nav.glossary || "Glossary"}</div>
                          </a>
                        </div>

                        {/* Trust & Support Column */}
                        <div className="space-y-4">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{nav.trustSupport || "Trust & Support"}</div>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('privacy'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.privacy || "Privacy"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('terms'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.terms || "Terms"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('cookies'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.cookies || "Cookies"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('security'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.security || "Security"}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('faq'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{t.faq}</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('contact'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">{navLinks.contact || "Contact"}</div>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Language Switcher */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('language')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`${navIconButtonBaseClass} text-gray-700 hover:bg-white/44 hover:text-[#15956F] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.88)] dark:text-slate-100 dark:hover:bg-white/12 dark:hover:text-[#6EE7C7] dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]`}
                onClick={(e) => e.preventDefault()}
              >
                <Globe className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'language' && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`${dropdownPanelClass} ${languageDropdownPositionClass} w-48 p-2`}
                    >
                      <div className="flex flex-col">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code as Language);
                              setActiveDropdown(null);
                            }}
                            className={`px-4 py-2.5 text-sm text-left rounded-lg transition-colors flex items-center justify-between group ${
                              language === (lang.code as Language)
                                ? 'bg-emerald-50 dark:bg-emerald-900/20 text-[#1AAE82] font-semibold'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                            }`}
                          >
                            {lang.name}
                            {language === (lang.code as Language) && <div className="w-1.5 h-1.5 rounded-full bg-[#1AAE82]" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`${navIconButtonBaseClass} text-gray-700 hover:bg-white/44 hover:text-[#15956F] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.88)] dark:text-slate-100 dark:hover:bg-white/12 dark:hover:text-[#6EE7C7] dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]`}
              title={navDarkMode.toggle || "Toggle Dark Mode"}
              aria-label={navDarkMode.toggle || "Toggle Dark Mode"}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

        {/* Actions */}
        <div className="hidden md:flex items-center justify-end gap-3">
          <button 
            className={`${navTextButtonBaseClass} text-gray-700 hover:bg-white/44 hover:text-[#15956F] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:text-slate-100 dark:hover:bg-white/12 dark:hover:text-[#6EE7C7] dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]`}
            onClick={onSignUp}
          >
            {navActions.login || "Log in"}
          </button>
          
          <button 
            onClick={onSignUp}
            className={`${capsuleRadiusClass} group relative inline-flex h-9 items-center justify-center overflow-hidden px-5 text-base font-bold bg-gray-900 text-white shadow-[0_16px_40px_-22px_rgba(15,23,42,0.55)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_26px_58px_-26px_rgba(16,185,129,0.68)] dark:bg-white dark:text-gray-900`}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#149A74] via-[#1AAE82] to-[#2DD4BF] bg-[length:180%_100%] opacity-0 transition-[opacity,background-position] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[position:100%_0] group-hover:opacity-100" />
            <div className="pointer-events-none absolute -left-1/3 top-[-130%] h-[340%] w-1/3 -translate-x-full rotate-[20deg] bg-white/40 opacity-0 blur-xl transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[420%] group-hover:opacity-70 dark:bg-white/35" />
            <span className="relative flex items-center gap-2 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white">
              {navActions.startFree || "Start Free"} <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5" />
            </span>
          </button>
        </div>

          {/* Mobile Actions & Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button 
                onClick={onSignUp}
                className={`${capsuleRadiusClass} group relative inline-flex h-8 items-center justify-center overflow-hidden bg-gray-900 px-3.5 text-sm font-bold text-white shadow-[0_10px_22px_-16px_rgba(15,23,42,0.45)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_18px_36px_-20px_rgba(16,185,129,0.58)] dark:bg-white dark:text-gray-900`}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#149A74] via-[#1AAE82] to-[#2DD4BF] bg-[length:180%_100%] opacity-0 transition-[opacity,background-position] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[position:100%_0] group-hover:opacity-100" />
                <div className="pointer-events-none absolute -left-1/3 top-[-130%] h-[340%] w-1/3 -translate-x-full rotate-[20deg] bg-white/40 opacity-0 blur-xl transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[420%] group-hover:opacity-70 dark:bg-white/35" />
                <span className="relative transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white">
                  {navActions.startFree || "Start Free"}
                </span>
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`${capsuleRadiusClass} inline-flex h-8 w-8 items-center justify-center text-gray-700 transition-[background-color,color,box-shadow] duration-300 hover:bg-white/44 hover:text-[#15956F] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.86)] dark:text-gray-200 dark:hover:bg-white/12 dark:hover:text-[#6EE7C7] dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]`}
              title={
                isDarkMode
                  ? (navDarkMode.switchToLight || 'Switch to Light Mode')
                  : (navDarkMode.switchToDark || 'Switch to Dark Mode')
              }
              aria-label={
                isDarkMode
                  ? (navDarkMode.switchToLight || 'Switch to Light Mode')
                  : (navDarkMode.switchToDark || 'Switch to Dark Mode')
              }
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              className={`${capsuleRadiusClass} inline-flex h-8 w-8 items-center justify-center text-gray-700 transition-[background-color,color,box-shadow] duration-300 hover:bg-white/44 hover:text-[#15956F] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.86)] dark:text-gray-200 dark:hover:bg-white/12 dark:hover:text-[#6EE7C7] dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={mobilePanelClass}
          >
            <div className="px-4 py-6 space-y-4 h-[calc(100vh-120px)] overflow-y-auto pb-24">
              {/* Product Section */}
              <div className="space-y-2 border-b border-gray-100 dark:border-slate-800 pb-4">
                <button 
                  onClick={() => toggleDropdown('mobile-product')}
                  className="flex items-center justify-between w-full py-2 text-base font-bold text-gray-900 dark:text-white"
                >
                  {t.product}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-product' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'mobile-product' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 space-y-3"
                    >
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('how-it-works'); }} className="block text-sm text-gray-600 dark:text-gray-400">{t.howItWorks}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('methodology'); }} className="block text-sm text-gray-600 dark:text-gray-400">{t.methodology}</a>
                      <a href={addLanguagePrefix('/social/signals', language)} onClick={(e) => { e.preventDefault(); handleNav('signals'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.signals || "30+ Signals"}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); onTrySample(); }} className="block text-sm text-[#1AAE82] font-medium">{navLinks.interactiveSample || "Interactive Sample"} ★</a>
                      
                      {/* Nested Use Cases */}
                      <div className="pl-4 border-l-2 border-gray-100 dark:border-slate-800 mt-2 space-y-3 py-1">
                         <div className="text-xs font-semibold text-gray-400 uppercase">{nav.useCases || "Use Cases"}</div>
                         <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/trend-prediction'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.trendPrediction || "Trend Prediction"}</a>
                         <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/content-diagnosis'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.contentDiagnosis || "Content Diagnosis"}</a>
                         <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/script-generation'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.scriptGeneration || "Script Generation"}</a>
                         <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/posting-schedule'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.postingSchedule || "Posting Schedule"}</a>
                         <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/hashtag-strategy'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.hashtagStrategy || "Hashtag Strategy"}</a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Solutions Section */}
              <div className="space-y-2 border-b border-gray-100 dark:border-slate-800 pb-4">
                <button 
                  onClick={() => toggleDropdown('mobile-solutions')}
                  className="flex items-center justify-between w-full py-2 text-base font-bold text-gray-900 dark:text-white"
                >
                  {nav.solutions || "Solutions"}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-solutions' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'mobile-solutions' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 space-y-3"
                    >
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/content-creators'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.contentCreators || "Content Creators"}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/local-business'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.localBusiness || "Local Business"}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/agencies'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.agencies || "Agencies"}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/brands'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.brands || "Brands"}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/ecommerce'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.ecommerceSellers || "E-commerce Sellers"}</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Section */}
              <div className="space-y-2 border-b border-gray-100 dark:border-slate-800 pb-4">
                <button 
                  onClick={() => toggleDropdown('mobile-resources')}
                  className="flex items-center justify-between w-full py-2 text-base font-bold text-gray-900 dark:text-white"
                >
                  {t.resources}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-resources' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'mobile-resources' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 space-y-3"
                    >
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('blog'); }} className="block text-sm text-gray-600 dark:text-gray-400">{t.blog}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('guides'); }} className="block text-sm text-gray-600 dark:text-gray-400">{t.guides}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('trends-hub'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.trends || "Trends"}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('tools'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.tools || "Tools"}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('glossary'); }} className="block text-sm text-gray-600 dark:text-gray-400">{nav.glossary || "Glossary"}</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pricing Link */}
              <a href="#" onClick={(e) => { e.preventDefault(); handleNav('pricing'); }} className="block py-2 text-base font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-slate-800 pb-4">{t.pricing}</a>

              {/* Trust & Security Section */}
              <div className="space-y-2 border-b border-gray-100 dark:border-slate-800 pb-4">
                <button 
                  onClick={() => toggleDropdown('mobile-trust')}
                  className="flex items-center justify-between w-full py-2 text-base font-bold text-gray-900 dark:text-white"
                >
                  {nav.trustSecurity || "Trust & Security"}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-trust' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'mobile-trust' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 space-y-3"
                    >
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('privacy'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.privacy || "Privacy"}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('terms'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.terms || "Terms"}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('cookies'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.cookies || "Cookies"}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('security'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.security || "Security"}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('faq'); }} className="block text-sm text-gray-600 dark:text-gray-400">{t.faq}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('contact'); }} className="block text-sm text-gray-600 dark:text-gray-400">{navLinks.contact || "Contact"}</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Language Section */}
              <div className="pt-2">
                <button 
                  onClick={() => toggleDropdown('mobile-lang')}
                  className="flex items-center justify-between w-full py-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> {nav.language || "Language"}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-lang' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'mobile-lang' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 grid grid-cols-2 gap-2 pt-2"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code as Language);
                            setMobileMenuOpen(false);
                          }}
                          className={`px-3 py-2 text-sm text-left rounded-lg transition-colors ${
                            language === (lang.code as Language) 
                              ? 'bg-[#1AAE82]/10 text-[#1AAE82] font-medium' 
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-6 space-y-3 pb-8">
                <button 
                   onClick={onSignUp}
                   className="w-full py-3.5 text-center font-bold text-gray-900 dark:text-white bg-white border border-gray-200 dark:bg-slate-800 dark:border-slate-700 rounded-xl shadow-sm"
                >
                  {navActions.login || "Log in"}
                </button>
                <button 
                  onClick={onSignUp}
                  className="w-full py-3.5 text-center font-bold text-white bg-[#1AAE82] rounded-xl shadow-lg shadow-[#1AAE82]/20"
                >
                  {navActions.startFreeTrial || "Start Free Trial"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.nav>
  );
});

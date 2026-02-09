import React, { useState, useEffect, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePerformance, useLanguage } from '../../contexts';
import { 
  ArrowRight, 
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  PlayCircle
} from 'lucide-react';
import { OwlSeerLogo } from '../OwlSeerLogo';
import { languages } from '../../data/translations';

interface NavbarProps {
  onTrySample: () => void;
  onSignUp: () => void;
  onNavigate?: (page: string) => void;
  language: string;
  setLanguage: (lang: any) => void;
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

  const handleNav = (page: string) => {
    if (onNavigate) {
      // Map legacy page names to routes for internal navigation
      let route = page;
      if (page === 'landing') {
        route = language === 'zh' ? '/zh' : '/';
      } else if (!page.startsWith('/')) {
        const prefix = language === 'zh' ? '/zh' : '';
        route = `${prefix}/${page}`;
      }
      onNavigate(route);
    } else {
      // Fallback for window globals
      if (page === 'pricing') (window as any).navigateToPricing?.();
      if (page === 'features') (window as any).navigateToFeatures?.();
      if (page === 'how-it-works') (window as any).navigateToHowItWorks?.();
      if (page === 'blog') (window as any).navigateToBlog?.();
       if (page === 'faq') (window as any).navigateToFAQ?.();
       if (page === 'contact') (window as any).navigateToContact?.();
       if (page === 'security') (window as any).navigateToSecurity?.();
       if (page === 'privacy') (window as any).navigateToPrivacy?.();
       if (page === 'terms') (window as any).navigateToTerms?.();
       if (page === 'cookies') (window as any).navigateToCookies?.();
       if (page === 'landing') window.location.href = language === 'zh' ? '/zh' : '/'; 
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay to prevent accidental closing
  };

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  // Performance-aware background classes
  const navBgClass = useMemo(() => {
    const base = "border-b transition-all duration-300";
      
    // Always apply semi-transparent background with higher transparency (lower opacity value)
    return enableBlur
      ? `${base} bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-gray-200/50 dark:border-slate-800/50`
      : `${base} bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800`;
  }, [enableBlur]);

  return (
    <motion.nav
      initial={reduceMotion ? false : { y: -100 }}
      animate={{ y: 0 }}
      transition={reduceMotion ? { duration: 0 } : undefined}
      className={`fixed top-0 left-0 w-full z-50 ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex md:grid md:grid-cols-[1fr_auto_1fr] justify-between items-center h-[72px]">
          {/* Logo */}
          <div className="flex items-center justify-start">
            <a 
              href={language === 'zh' ? '/zh' : '/'}
              className="flex items-center gap-2 cursor-pointer" 
              onClick={(e) => { e.preventDefault(); handleNav('landing'); }}
            >
              <OwlSeerLogo className="h-8 w-auto text-gray-900 dark:text-white" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-center gap-2">
            
            {/* Product Mega Menu */}
            <div className="relative group">
              <button 
                className={`text-sm font-medium transition-all px-4 py-2 rounded-full flex items-center gap-1.5 ${
                  activeDropdown === 'product' 
                    ? 'bg-gray-100 dark:bg-slate-800 text-[#1AAE82]' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] hover:bg-gray-50 dark:hover:bg-slate-800/50'
                }`}
                onClick={() => toggleDropdown('product')}
              >
                Product <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'product' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
            {activeDropdown === 'product' && (
              <>
                <div className="fixed inset-0 z-0" onClick={() => setActiveDropdown(null)} />
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 p-6 mt-2 overflow-hidden ring-1 ring-black/5 z-10"
                >
                  <div className="grid grid-cols-2 gap-8">
                        {/* Platform Column */}
                        <div className="space-y-4">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">PLATFORM</div>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('how-it-works'); }} className="block group/item">
                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-[#1AAE82] transition-colors">{t.howItWorks}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Get started in 3 steps</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('methodology'); }} className="block group/item">
                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-[#1AAE82] transition-colors">{t.methodology}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Our 5-step AI process</div>
                          </a>
                          <a href={language === 'zh' ? '/zh/signals' : '/signals'} onClick={(e) => { e.preventDefault(); handleNav('signals'); }} className="block group/item">
                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-[#1AAE82] transition-colors">30+ Signals</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">What we track</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); onTrySample(); }} className="block group/item">
                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-[#1AAE82] transition-colors flex items-center gap-1">Interactive Demo <PlayCircle className="w-3 h-3" /></div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">See OwlSeer in action</div>
                          </a>
                        </div>

                        {/* Use Cases Column */}
                        <div className="space-y-4">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">USE CASES</div>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/trend-prediction'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Trend Prediction</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/content-diagnosis'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Content Diagnosis</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/script-generation'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Script Generation</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/posting-schedule'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Posting Schedule</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/hashtag-strategy'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Hashtag Strategy</div>
                          </a>
                          
                          <div className="pt-2 border-t border-gray-100 dark:border-slate-800">
                             <a href="#" onClick={(e) => { e.preventDefault(); onTrySample(); }} className="block group/item">
                                <div className="text-sm font-bold text-[#1AAE82] group-hover/item:underline flex items-center gap-1">TRY THE DEMO <ArrowRight className="w-3 h-3" /></div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">See it on real data</div>
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
            <div className="relative group">
              <button 
                className={`text-sm font-medium transition-all px-4 py-2 rounded-full flex items-center gap-1.5 ${
                  activeDropdown === 'solutions' 
                    ? 'bg-gray-100 dark:bg-slate-800 text-[#1AAE82]' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] hover:bg-gray-50 dark:hover:bg-slate-800/50'
                }`}
                onClick={() => toggleDropdown('solutions')}
              >
                Solutions <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
            {activeDropdown === 'solutions' && (
              <>
                <div className="fixed inset-0 z-0" onClick={() => setActiveDropdown(null)} />
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 p-6 mt-2 overflow-hidden ring-1 ring-black/5 z-10"
                >
                  <div className="grid grid-cols-2 gap-8">
                        {/* By Role Column */}
                        <div className="space-y-4">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">BY ROLE</div>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/content-creators'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Content Creators</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/local-business'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Local Business</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/agencies'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Agencies</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/brands'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Brands</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/ecommerce'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">E-commerce Sellers</div>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <button 
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-all px-4 py-2 rounded-full"
              onClick={() => handleNav('pricing')}
            >
              {t.pricing}
            </button>

            {/* Resources Mega Menu */}
            <div 
              className="relative group" 
            >
              <button 
                className={`text-sm font-medium transition-all px-4 py-2 rounded-full flex items-center gap-1.5 ${
                  activeDropdown === 'resources' 
                    ? 'bg-gray-100 dark:bg-slate-800 text-[#1AAE82]' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] hover:bg-gray-50 dark:hover:bg-slate-800/50'
                }`}
                onClick={() => toggleDropdown('resources')}
              >
                {t.resources} <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
            {activeDropdown === 'resources' && (
              <>
                <div 
                  className="fixed inset-0 z-0" 
                  onClick={() => setActiveDropdown(null)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 p-6 mt-2 overflow-hidden ring-1 ring-black/5 z-10"
                >
                  <div className="grid grid-cols-2 gap-8">
                        {/* Learn Column */}
                        <div className="space-y-4">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">LEARN</div>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('blog'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Blog</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('guides'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Guides</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('glossary'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Glossary</div>
                          </a>
                        </div>

                        {/* Trust & Support Column */}
                        <div className="space-y-4">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">TRUST & SUPPORT</div>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('privacy'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Privacy</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('terms'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Terms</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('cookies'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Cookies</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('security'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">Security</div>
                          </a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('faq'); }} className="block group/item">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-[#1AAE82] transition-colors">FAQ</div>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

        {/* Actions */}
        <div className="hidden md:flex items-center justify-end gap-3">
          {/* Language Switcher */}
          <div 
            className="relative group" 
          >
            <button 
              className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
              onClick={() => toggleDropdown('language')}
            >
              <Globe className="w-5 h-5" />
            </button>

            <AnimatePresence>
              {activeDropdown === 'language' && (
                <>
                  <div 
                    className="fixed inset-0 z-0" 
                    onClick={() => setActiveDropdown(null)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-gray-100 dark:border-slate-800 p-2 mt-2 overflow-hidden ring-1 ring-black/5 z-10"
                  >
                    <div className="flex flex-col">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setActiveDropdown(null);
                          }}
                          className={`px-4 py-2.5 text-sm text-left rounded-lg transition-colors flex items-center justify-between group ${
                            language === lang.code 
                              ? 'bg-emerald-50 dark:bg-emerald-900/20 text-[#1AAE82] font-semibold' 
                              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          {lang.name}
                          {language === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-[#1AAE82]" />}
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
            className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <div className="w-px h-6 bg-gray-200 dark:bg-slate-800 mx-2" />

          <button 
            className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-[#1AAE82] transition-colors px-4 py-2 whitespace-nowrap"
            onClick={onTrySample}
          >
            Try Sample
          </button>
          
          <button 
            onClick={onSignUp}
            className="group relative px-6 py-2.5 bg-[#111827] dark:bg-white text-white dark:text-[#111827] text-sm font-bold rounded-full overflow-hidden shadow-lg shadow-gray-200 dark:shadow-none hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1AAE82] to-[#15956F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Start Free <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

          {/* Mobile Actions & Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button 
                onClick={onSignUp}
                className="px-3 py-1.5 bg-[#1AAE82] text-white text-xs font-bold rounded-full shadow-sm"
              >
                Start Free
            </button>
            <button 
              className="p-2 text-gray-600 dark:text-gray-300"
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
            className="md:hidden bg-white dark:bg-slate-900 border-x border-b border-gray-100 dark:border-slate-800 rounded-b-2xl overflow-hidden absolute top-full left-[-1px] right-[-1px] shadow-lg shadow-gray-200/20 dark:shadow-black/20"
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
                      <a href={language === 'zh' ? '/zh/signals' : '/signals'} onClick={(e) => { e.preventDefault(); handleNav('signals'); }} className="block text-sm text-gray-600 dark:text-gray-400">30+ Signals</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); onTrySample(); }} className="block text-sm text-[#1AAE82] font-medium">Interactive Demo ★</a>
                      
                      {/* Nested Use Cases */}
                      <div className="pl-4 border-l-2 border-gray-100 dark:border-slate-800 mt-2 space-y-3 py-1">
                         <div className="text-xs font-semibold text-gray-400 uppercase">Use Cases</div>
                         <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/trend-prediction'); }} className="block text-sm text-gray-600 dark:text-gray-400">Trend Prediction</a>
                         <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/content-diagnosis'); }} className="block text-sm text-gray-600 dark:text-gray-400">Content Diagnosis</a>
                         <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/script-generation'); }} className="block text-sm text-gray-600 dark:text-gray-400">Script Generation</a>
                         <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/posting-schedule'); }} className="block text-sm text-gray-600 dark:text-gray-400">Posting Schedule</a>
                         <a href="#" onClick={(e) => { e.preventDefault(); handleNav('use-cases/hashtag-strategy'); }} className="block text-sm text-gray-600 dark:text-gray-400">Hashtag Strategy</a>
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
                  Solutions
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
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/content-creators'); }} className="block text-sm text-gray-600 dark:text-gray-400">Content Creators</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/local-business'); }} className="block text-sm text-gray-600 dark:text-gray-400">Local Business</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/agencies'); }} className="block text-sm text-gray-600 dark:text-gray-400">Agencies</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/brands'); }} className="block text-sm text-gray-600 dark:text-gray-400">Brands</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('solutions/ecommerce'); }} className="block text-sm text-gray-600 dark:text-gray-400">E-commerce Sellers</a>
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
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('guides'); }} className="block text-sm text-gray-600 dark:text-gray-400">Guides</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('glossary'); }} className="block text-sm text-gray-600 dark:text-gray-400">Glossary</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('faq'); }} className="block text-sm text-gray-600 dark:text-gray-400">{t.faq}</a>
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
                  Trust & Security
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
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('privacy'); }} className="block text-sm text-gray-600 dark:text-gray-400">Privacy</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('terms'); }} className="block text-sm text-gray-600 dark:text-gray-400">Terms</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('cookies'); }} className="block text-sm text-gray-600 dark:text-gray-400">Cookies</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('security'); }} className="block text-sm text-gray-600 dark:text-gray-400">Security</a>
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
                  <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Language</span>
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
                            setLanguage(lang.code);
                            setMobileMenuOpen(false);
                          }}
                          className={`px-3 py-2 text-sm text-left rounded-lg transition-colors ${
                            language === lang.code 
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
                   onClick={onTrySample}
                   className="w-full py-3.5 text-center font-bold text-gray-900 dark:text-white bg-white border border-gray-200 dark:bg-slate-800 dark:border-slate-700 rounded-xl shadow-sm"
                >
                  Try Sample
                </button>
                <button 
                  onClick={onSignUp}
                  className="w-full py-3.5 text-center font-bold text-white bg-[#1AAE82] rounded-xl shadow-lg shadow-[#1AAE82]/20"
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
});

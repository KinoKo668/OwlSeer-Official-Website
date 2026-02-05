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
  Heart,
  MessageCircle,
  Share2,
  Moon,
  Sun,
  Globe,
  BookOpen,
  HelpCircle,
  Layout,
  PlayCircle,
  Monitor,
  Smartphone,
  Laptop,
  Chrome
} from 'lucide-react';

// Import the new ProductShowcase component
import { ProductShowcase } from './ProductShowcase';
import { CoreFeatures } from './CoreFeatures';
import { PricingSection } from './PricingSection';
import { OwlSeerLogo } from './OwlSeerLogo';
import { translations, languages } from '../data/translations';
import { SEO } from './SEO';
import { seoConfig, structuredDataSchemas, generateAlternates } from '../data/seoConfig';

// --- Types & Interfaces ---

interface StatProps {
  value: string;
  label: string;
  sublabel: string;
  delay: number;
}

// --- Constants ---

// --- Components ---

interface NavbarProps {
  onTrySample: () => void;
  onSignUp: () => void;
  onNavigate?: (page: string) => void;
  language: string;
  setLanguage: (lang: string) => void;
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
      if (page === 'landing') route = '/';
      else if (!page.startsWith('/')) route = '/' + page;
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
       if (page === 'landing') window.location.href = '/'; 
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
    if (scrolled || mobileMenuOpen) {
      return enableBlur
        ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-gray-100/40 dark:border-slate-800/40'
        : 'bg-white/95 dark:bg-slate-900/95 border-b border-gray-100/50 dark:border-slate-800/50';
    }
    return enableBlur
      ? 'bg-white/30 dark:bg-slate-900/40 backdrop-blur-md border-b border-transparent'
      : 'bg-white/90 dark:bg-slate-900/90 border-b border-transparent';
  }, [scrolled, mobileMenuOpen, enableBlur]);

  return (
    <motion.nav
      initial={reduceMotion ? false : { y: -100 }}
      animate={{ y: 0 }}
      transition={reduceMotion ? { duration: 0 } : undefined}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNav('landing')}>
            <OwlSeerLogo className="h-8 w-auto text-gray-900 dark:text-white" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            
            {/* Product Mega Menu */}
            <div 
              className="relative group" 
            >
              <button 
                className={`text-sm font-medium transition-all px-4 py-2 rounded-full flex items-center gap-1.5 ${
                  activeDropdown === 'product' 
                    ? 'bg-gray-100 dark:bg-slate-800 text-[#1AAE82]' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] hover:bg-gray-50 dark:hover:bg-slate-800/50'
                }`}
                onClick={() => toggleDropdown('product')}
              >
                {t.product} <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'product' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'product' && (
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
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 p-2 mt-2 overflow-hidden ring-1 ring-black/5 z-10"
                    >
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-3 p-2 space-y-1">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3 mt-2">Platform</div>
                          
                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('how-it-works'); }} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group/item">
                            <div>
                              <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 transition-colors">{t.howItWorks}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Understand our AI methodology</div>
                            </div>
                          </a>

                          <a href="#" onClick={(e) => { e.preventDefault(); onTrySample(); }} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group/item">
                            <div>
                              <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">Interactive Demo</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Try the dashboard with sample data</div>
                            </div>
                          </a>

                          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('features'); }} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group/item">
                            <div>
                              <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors">Features</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Explore our capabilities</div>
                            </div>
                          </a>
                        </div>

                        <div className="col-span-2 bg-gray-50 dark:bg-slate-800/50 rounded-xl p-5 flex flex-col justify-between border border-gray-100 dark:border-slate-700/50">
                          <div>
                            <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-wider mb-3">
                              New Release
                            </div>
                            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">OwlSeer v2.0</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                              Now with multi-platform support and real-time trend prediction.
                            </p>
                          </div>
                          <button onClick={() => handleNav('pricing')} className="w-full py-2 bg-white dark:bg-slate-700 rounded-lg text-xs font-bold text-gray-900 dark:text-white shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-slate-600">
                            View Pricing
                          </button>
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
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 p-2 mt-2 overflow-hidden ring-1 ring-black/5 z-10"
                    >
                      <div className="p-2 space-y-1">
                        <a href="#" onClick={(e) => { e.preventDefault(); handleNav('blog'); }} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group/item">
                          <div>
                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-orange-600 dark:group-hover/item:text-orange-400 transition-colors">{t.blog}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Latest insights & trends</div>
                          </div>
                        </a>

                        <a href="#" onClick={(e) => { e.preventDefault(); handleNav('faq'); }} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group/item">
                          <div>
                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-400 transition-colors">{t.faq}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Common questions answered</div>
                          </div>
                        </a>

                        <a href="#" onClick={(e) => { e.preventDefault(); handleNav('privacy'); }} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group/item">
                          <div>
                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-slate-600 dark:group-hover/item:text-slate-400 transition-colors">Legal</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Privacy, Terms, Security & Cookies</div>
                          </div>
                        </a>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
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
            className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-[#1AAE82] transition-colors px-2"
            onClick={() => handleNav('auth')}
          >
            {t.login}
          </button>
          
          <button 
            onClick={onSignUp}
            className="group relative px-6 py-2.5 bg-[#111827] dark:bg-white text-white dark:text-[#111827] text-sm font-bold rounded-full overflow-hidden shadow-lg shadow-gray-200 dark:shadow-none hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1AAE82] to-[#15956F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              {t.signup} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 h-[80vh] overflow-y-auto">
              {/* Product Section */}
              <div className="space-y-2">
                <button 
                  onClick={() => toggleDropdown('mobile-product')}
                  className="flex items-center justify-between w-full py-2 text-base font-medium text-gray-900 dark:text-white"
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
                      className="overflow-hidden pl-4 space-y-2"
                    >
                      <a href="#" className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82]">{t.whatIs}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('how-it-works'); }} className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82]">{t.howItWorks}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('faq'); }} className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82]">{t.faq}</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pricing Link */}
              <a href="#" onClick={(e) => { e.preventDefault(); handleNav('pricing'); }} className="block py-2 text-base font-medium text-gray-900 dark:text-white">{t.pricing}</a>

              {/* Resources Section */}
              <div className="space-y-2">
                <button 
                  onClick={() => toggleDropdown('mobile-resources')}
                  className="flex items-center justify-between w-full py-2 text-base font-medium text-gray-900 dark:text-white"
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
                      className="overflow-hidden pl-4 space-y-2"
                    >
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('security'); }} className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82]">{t.security}</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleNav('blog'); }} className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82]">{t.blog}</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Language Section */}
              <div className="pt-4 border-t border-gray-100 dark:border-slate-800">
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

              <div className="pt-4 space-y-4">
                <button className="w-full py-3 text-center font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-slate-800 rounded-lg">
                  {t.login}
                </button>
                <button 
                  onClick={onSignUp}
                  className="w-full py-3 text-center font-medium text-white bg-[#1AAE82] rounded-lg shadow-md"
                >
                  {t.signup}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
});

const AppleLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.05 19.33c-.76 1.11-1.55 2.21-2.79 2.23-1.22.02-1.61-.72-3.03-.72-1.42 0-1.86.7-3.02.73-1.2.03-2.08-1.2-2.84-2.29-1.55-2.24-2.73-6.33-1.14-9.09.79-1.37 2.21-2.24 3.75-2.27 1.18-.02 2.3.79 3.02.79.72 0 2.06-1.01 3.48-.86 1.19.09 2.27.6 2.87 1.47-2.61 1.58-2.18 5.76.54 6.94-.58 1.45-1.32 2.9-2.04 4.07h-.01.01zM14.99 5.56c.64-.78 1.07-1.87.95-2.95-1.08.04-2.39.72-3.16 1.62-.69.79-1.29 2.05-1.13 3.05 1.2.09 2.42-.61 3.34-1.72z" />
  </svg>
);

const AndroidLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3l14 9-14 9V3z" />
  </svg>
);

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

// Shared Background Component
const SharedBackground = memo(() => {
  const { enableBlur } = usePerformance();
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      
      {/* Aurora Gradients */}
      <div 
        className={`absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-gradient-to-br from-[#1AAE82]/20 via-purple-500/10 to-transparent rounded-full ${
          enableBlur ? 'blur-[80px]' : 'blur-[40px]'
        } opacity-70`}
      />
      
      <div 
        className={`absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-gradient-to-tl from-[#06B6D4]/20 via-blue-500/10 to-transparent rounded-full ${
          enableBlur ? 'blur-[60px]' : 'blur-[30px]'
        } opacity-60`}
      />
    </div>
  );
});

// Optimized Hero component with performance mode support
const Hero = memo(({ onTrySample, t }: { onTrySample: () => void, t: any }) => {
  const { enableAnimations, enableParallax, enableBlur, reduceMotion } = usePerformance();
  const { scrollY } = useScroll();
  
  // Simplified scroll transforms - only apply when parallax is enabled
  const heroContentOpacity = useTransform(
    scrollY, 
    [0, 400], 
    enableParallax ? [1, 0] : [1, 1]
  );
  const heroContentScale = useTransform(
    scrollY, 
    [0, 400], 
    enableParallax ? [1, 0.95] : [1, 1]
  );

  const platforms = ['TikTok', 'YouTube', 'X', 'Instagram'];
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);

  useEffect(() => {
    // Skip platform rotation animation in reduced motion mode
    if (reduceMotion) return;
    
    const interval = setInterval(() => {
      setCurrentPlatformIndex((prev) => (prev + 1) % platforms.length);
    }, 2500);
    return () => clearInterval(interval);
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
        <span className="inline-flex flex-col h-[1.5em] overflow-hidden align-middle relative -top-[5px] mx-1">
          {reduceMotion ? (
            // Static version for reduced motion
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1AAE82] to-[#2DD4BF]">
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
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1AAE82] to-[#2DD4BF]"
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
      className="relative min-h-[100vh] pt-[72px] flex items-center justify-center overflow-hidden z-0"
      aria-label="Hero section - AI TikTok Content Strategy Platform"
    >
      
      {/* --- Floating Elements (Only show when animations enabled) --- */}
      {enableAnimations && (
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Floating Glass Card 1: Views Growth */}
          <div className="absolute top-[15%] left-[5%] md:left-[10%] hidden lg:block">
            <motion.div 
              initial={reduceMotion ? false : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className={`${enableBlur ? 'bg-white/20 dark:bg-slate-900/60 backdrop-blur-md' : 'bg-white/95 dark:bg-slate-900/95'} border border-white/20 dark:border-slate-700/50 p-4 rounded-2xl shadow-lg w-48 transform rotate-[-6deg]`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <PlayCircle size={16} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Video Views</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-1">
                    2.4M <span className="text-xs text-green-500 bg-green-500/10 px-1 rounded flex items-center">
                      <TrendingUp size={10} className="mr-0.5" /> 32%
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-10 w-full flex items-end gap-1 mt-2">
                {[40, 65, 50, 85, 60, 95, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-500/30 rounded-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Floating Glass Card 2: Followers Growth */}
          <div className="absolute bottom-[20%] right-[5%] md:right-[10%] hidden lg:block">
            <motion.div 
              initial={reduceMotion ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className={`${enableBlur ? 'bg-white/20 dark:bg-slate-900/60 backdrop-blur-md' : 'bg-white/95 dark:bg-slate-900/95'} border border-white/20 dark:border-slate-700/50 p-4 rounded-2xl shadow-lg w-56 transform rotate-[6deg]`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                    <Users size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Total Followers</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">128.5k</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#1AAE82] bg-[#1AAE82]/10 px-2 py-1 rounded-full">+4.2k</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-2 pt-2 border-t border-white/10 dark:border-white/5">
                <span>Last 30 days</span>
                <span className="text-[#1AAE82] font-medium">+12.5%</span>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* --- Main Content --- */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
        style={enableParallax ? {
          opacity: heroContentOpacity,
          scale: heroContentScale,
        } : undefined}
      >
        {/* H1 Headline */}
        <motion.h1
          {...animationConfig}
          transition={{ ...animationConfig.transition, delay: reduceMotion ? 0 : 0.1 } as any}
          className="text-7xl md:text-9xl lg:text-[120px] font-bold tracking-tighter text-gray-900 dark:text-white leading-[0.9] mb-8 font-display relative"
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
          className="text-xl md:text-3xl text-gray-500 dark:text-gray-300 max-w-3xl mb-14 leading-relaxed tracking-tight font-light"
        >
          {renderSubtitle(t.subtitle)} <br className="hidden md:block" />
          <span className="text-gray-900 dark:text-white font-semibold relative">
            {t.subtitle2}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1AAE82] opacity-50"></span>
          </span>
        </motion.p>

        {/* CTA Button Area */}
        <motion.div
          {...animationConfig}
          transition={{ ...animationConfig.transition, delay: reduceMotion ? 0 : 0.3 } as any}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button 
            onClick={onTrySample}
            className="group relative px-8 py-4 bg-[#1AAE82] rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {!reduceMotion && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            )}
            <span className="relative flex items-center gap-3 text-white font-bold text-lg">
              {t.ctaPrimary} 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
            <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-slate-700 flex items-center justify-center">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-[#1AAE82] border-b-[6px] border-b-transparent ml-1"></div>
            </div>
            <span>Start Now</span>
          </button>
        </motion.div>

        {/* Platform Availability */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6, duration: 0.8 } as any}
           className="mt-16 flex flex-col items-center gap-3"
        >
           <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Available On</span>
           
           <div className="flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
             
             {/* Web Part */}
             <div className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors cursor-default group">
                <Chrome className="w-5 h-5" />
                <span>Web</span>
             </div>

             {/* Divider */}
             <div className="w-px h-4 bg-gray-300 dark:bg-slate-700" />

             {/* Mobile Part - Split into Brand Icons */}
             <div className="flex items-center gap-4">
               {/* iOS */}
               <div className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors cursor-default group">
                  <AppleLogo className="w-5 h-5" />
                  <span>App Store</span>
               </div>
               
               {/* Android */}
               <div className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors cursor-default group">
                  <AndroidLogo className="w-5 h-5" />
                  <span>Google Play</span>
               </div>
             </div>

           </div>
        </motion.div>
      </motion.div>
    </section>
  );
});



const ValueProposition = ({ language, onTrySample, onNavigate }: { language: string, onTrySample: () => void, onNavigate: (page: string) => void }) => {
  const content = {
    en: {
      title: "Stop guessing what to post",
      subtitle: "OwlSeer tells you what to do next on TikTok.",
      cards: [
        { title: "Actionable Plans", desc: "Get a complete content plan in under 3 minutes.", icon: <Zap className="w-6 h-6 text-[#1AAE82]" /> },
        { title: "AI Scripts", desc: "AI-generated scripts ready to shoot today.", icon: <PlayCircle className="w-6 h-6 text-[#1AAE82]" /> },
        { title: "Data-Driven", desc: "For creators tired of random posting.", icon: <BarChart2 className="w-6 h-6 text-[#1AAE82]" /> }
      ],
      trust: ["No miracle promises", "No auto-posting", "No password required"],
      cta: {
        primary: "See It In Action",
        secondary: "How it works"
      }
    },
    zh: {
      title: "不再猜测该发布什么",
      subtitle: "OwlSeer 告诉你下一步该做什么。",
      cards: [
        { title: "可执行计划", desc: "在3分钟内提供可操作的内容计划", icon: <Zap className="w-6 h-6 text-[#1AAE82]" /> },
        { title: "AI 脚本", desc: "AI生成的脚本，今天就可以拍摄", icon: <PlayCircle className="w-6 h-6 text-[#1AAE82]" /> },
        { title: "数据驱动", desc: "为厌倦随机发布的创作者提供方向", icon: <BarChart2 className="w-6 h-6 text-[#1AAE82]" /> }
      ],
      trust: ["不做奇迹承诺", "不自动发布", "无需密码"],
      cta: {
        primary: "查看实际操作",
        secondary: "它是如何工作的"
      }
    }
  };

  const t = (content as any)[language] || content.en;

  return (
    <section 
      className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden"
      aria-label="Value proposition - Why choose OwlSeer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display tracking-tight">
            {t.title}
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
            {t.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={onTrySample}
              className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-[#1AAE82]/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              {t.cta.primary} <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onNavigate('how-it-works')}
              className="px-8 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white text-lg font-medium rounded-xl transition-all duration-300 flex items-center gap-2"
            >
              {t.cta.secondary} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.cards.map((item: any, i: number) => (
            <div key={i} className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-gray-100 dark:border-slate-700 hover:border-[#1AAE82]/30 transition-colors">
              <div className="w-12 h-12 bg-[#1AAE82]/10 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-12 text-sm font-medium text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-slate-800 pt-12">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-gray-400" />
            {t.trust[0]}
          </div>
          <div className="flex items-center gap-2">
            <X className="w-4 h-4 text-gray-400" />
            {t.trust[1]}
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-gray-400" />
            {t.trust[2]}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = ({ t, onNavigate }: { t: any, onNavigate?: (page: string) => void }) => {
  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
       if (page === 'pricing') (window as any).navigateToPricing?.();
       if (page === 'how-it-works') (window as any).navigateToHowItWorks?.();
       if (page === 'blog') (window as any).navigateToBlog?.();
       if (page === 'faq') (window as any).navigateToFAQ?.();
       if (page === 'security') (window as any).navigateToSecurity?.();
       if (page === 'landing') window.location.href = '/'; 
    }
  };

  return (
  <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <OwlSeerLogo className="h-8 w-auto text-gray-900 dark:text-white" />
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed whitespace-pre-line">
            {t.tagline}
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-6">{t.product}</h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="#" onClick={(e) => { e.preventDefault(); handleNav('how-it-works'); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{t.footer?.links?.howItWorks || 'How It Works'}</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); handleNav('pricing'); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{t.footer?.links?.pricing || 'Pricing'}</a></li>
            <li><a href="#" className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{t.footer?.links?.trySample || 'Try Sample'}</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-6">{t.resources}</h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="#" onClick={(e) => { e.preventDefault(); handleNav('blog'); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{t.footer?.links?.blog || 'Blog'}</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); handleNav('faq'); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{t.footer?.links?.faq || 'FAQ'}</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); handleNav('contact'); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{t.footer?.links?.contact || 'Contact'}</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-6">{t.legal}</h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="#" onClick={(e) => { e.preventDefault(); handleNav('privacy'); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{t.footer?.links?.privacy || 'Privacy Policy'}</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); handleNav('terms'); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{t.footer?.links?.terms || 'Terms of Service'}</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); handleNav('security'); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{t.footer?.links?.security || 'Security'}</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); handleNav('cookies'); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{t.footer?.links?.cookies || 'Cookie Policy'}</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {t.rights}
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors"><span className="sr-only">Twitter</span>𝕏</a>
          <a href="#" className="text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">Discord</a>
        </div>
      </div>
    </div>
  </footer>
);
};

export function LandingPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;

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
  const homeStructuredData = [
    structuredDataSchemas.organization,
    structuredDataSchemas.softwareApplication,
    structuredDataSchemas.webSite
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#1AAE82]/20 selection:text-[#1AAE82]">
      {/* SEO Meta Tags */}
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
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
      
      <main className="relative bg-[#F8FAFC] dark:bg-[#020617]">
        <SharedBackground />
        <Hero onTrySample={handleTrySample} t={t.hero} />
        <div className="relative z-10 mt-[-1px]">
          <ProductShowcase t={t.productShowcase} />
        <CoreFeatures t={t.coreFeatures} />
        <ValueProposition language={language} onTrySample={handleTrySample} onNavigate={onNavigate} />
        <PricingSection onSignUp={handleSignUp} t={t.pricingSection} />
        </div>
        
        {/* Final CTA Section */}
        <section 
          className="py-24 bg-[#111827] relative overflow-hidden"
          aria-label="Call to action - Start your free trial"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1AAE82]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              {t.finalCta?.title || "Ready to see your future?"}
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              {t.finalCta?.subtitle || "Join thousands of creators who stopped guessing and started growing. Experience the full dashboard instantly."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handleSignUp}
                className="w-full sm:w-auto px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-[#1AAE82]/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                {t.finalCta?.start || "Start Your Free Trial"} <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleTrySample}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                {t.finalCta?.demo || "View Live Demo"}
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer t={t.footer} onNavigate={onNavigate} />
    </div>
  );
}

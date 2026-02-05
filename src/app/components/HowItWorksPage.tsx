/**
 * @page How It Works - OwlSeer Methodology
 * 
 * SEO Keywords: how TikTok AI tool works | TikTok content strategy methodology | AI video analysis process
 * TikTok data analysis explained | content recommendation algorithm | TikTok growth process
 * 
 * Long-tail Keywords: how does AI TikTok tool analyze content | step-by-step TikTok strategy process
 * understanding TikTok analytics AI | how OwlSeer generates video scripts | TikTok data to strategy workflow
 * 
 * 中文关键词: TikTok AI工具原理 | 内容策略方法论 | AI视频分析流程 | 数据驱动内容规划 | TikTok算法分析
 */

import React from 'react';
import { useLanguage } from '../contexts';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  ArrowRight, 
  Check, 
  X as XIcon, 
  Shield, 
  Clock, 
  RotateCcw, 
  ChevronDown,
  ChevronRight,
  Download,
  Lock,
  Search,
  Sparkles
} from 'lucide-react';
import { Navbar, Footer } from './LandingPage';
import { translations } from '../data/translations';
import { SEO } from './SEO';
import { seoConfig, structuredDataSchemas, generateAlternates } from '../data/seoConfig';


const steps = [
  {
    id: 1,
    title: "Try Your Free Demo",
    description: "Experience the power of AI-driven strategy without signing up. Get an instant audit of your current content and identify growth gaps immediately.",
    highlights: ["No login required", "Instant content audit", "Gap analysis"],
    visual: "demo"
  },
  {
    id: 2,
    title: "Connect Your Account",
    description: "Securely link your TikTok account. Our AI learns your unique voice, audience demographics, and niche specificities to tailor recommendations.",
    highlights: ["Secure OAuth 2.0", "Audience analysis", "Niche learning"],
    visual: "connect"
  },
  {
    id: 3,
    title: "Get Your Weekly Pack",
    description: "Every Monday at 7 AM, receive a personalized strategy pack containing 7 viral opportunities and ready-to-shoot scripts.",
    highlights: ["Delivered Mondays", "7 trend opportunities", "Ready-to-shoot scripts"],
    visual: "pack"
  }
];

const faqs = [
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use official TikTok APIs and OAuth 2.0 for authentication. We never store your passwords and only access public analytics data required to generate your strategy."
  },
  {
    question: "How long does setup take?",
    answer: "Less than 2 minutes. Simply click 'Connect TikTok', authorize the permissions, and our AI starts analyzing your profile immediately."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time with one click from your dashboard. You'll keep access until the end of your billing period."
  },
  {
    question: "Do you support other platforms?",
    answer: "Currently we are laser-focused on TikTok to provide the best possible results. Instagram Reels and YouTube Shorts support is coming in Q4."
  }
];

// --- Visual Components for Tabs ---

const DemoVisual = () => (
  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-slate-800 h-full flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#1AAE82]/5 to-transparent pointer-events-none" />
    <div className="w-full max-w-sm space-y-4 relative z-10">
      <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-4 border border-gray-200 dark:border-slate-700 flex items-center gap-3">
        <Search className="w-5 h-5 text-gray-400" />
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-24 animate-pulse" />
        <div className="ml-auto h-8 px-4 bg-[#1AAE82] rounded-lg text-white text-xs font-bold flex items-center">Analyze</div>
      </div>
      <div className="space-y-2">
        <div className="h-2 bg-gray-100 dark:bg-slate-800 rounded w-full" />
        <div className="h-2 bg-gray-100 dark:bg-slate-800 rounded w-5/6" />
        <div className="h-2 bg-gray-100 dark:bg-slate-800 rounded w-4/6" />
      </div>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3 border border-emerald-100 dark:border-emerald-800 flex items-center gap-3"
      >
        <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300">Potential Reach</div>
          <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">+125% Growth</div>
        </div>
      </motion.div>
    </div>
  </div>
);

const ConnectVisual = () => (
  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-slate-800 h-full flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 dark:text-slate-800 pointer-events-none select-none">02</div>
    <div className="relative z-10 flex flex-col items-center gap-6">
      <div className="relative">
        <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-lg relative z-10">
           <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
        </div>
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#1AAE82] rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center z-20"
        >
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </motion.div>
        {/* Connecting Lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border-2 border-dashed border-[#1AAE82]/30 rounded-full animate-spin-slow" />
      </div>
      <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-slate-700 flex items-center gap-2">
        <Lock className="w-3 h-3 text-[#1AAE82]" />
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Secure Connection Established</span>
      </div>
    </div>
  </div>
);

const PackVisual = () => (
  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-slate-800 h-full flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 dark:text-slate-800 pointer-events-none select-none">03</div>
    <div className="w-full max-w-xs bg-gray-50 dark:bg-slate-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 relative z-10">
      <div className="bg-[#1AAE82] px-4 py-3 flex items-center justify-between">
        <span className="text-white font-bold text-sm">Weekly Strategy Pack</span>
        <Download className="w-4 h-4 text-white/80" />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-lg flex flex-col items-center justify-center border border-gray-200 dark:border-slate-600 shadow-sm">
            <span className="text-[8px] text-gray-400 uppercase font-bold">Mon</span>
            <span className="text-sm font-bold text-gray-900 dark:text-white">07</span>
          </div>
          <div className="flex-1">
            <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded w-3/4 mb-1.5" />
            <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded w-1/2" />
          </div>
        </div>
        <div className="pt-2 border-t border-gray-100 dark:border-slate-700 grid grid-cols-2 gap-2">
           <div className="bg-white dark:bg-slate-700 p-2 rounded border border-gray-100 dark:border-slate-600 text-center">
             <div className="text-[10px] text-gray-400">Trends</div>
             <div className="text-lg font-bold text-[#1AAE82]">7</div>
           </div>
           <div className="bg-white dark:bg-slate-700 p-2 rounded border border-gray-100 dark:border-slate-600 text-center">
             <div className="text-[10px] text-gray-400">Scripts</div>
             <div className="text-lg font-bold text-[#1AAE82]">5</div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

export function HowItWorksPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate?: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const [activeTab, setActiveTab] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Use global language context
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      console.log('Navigate to:', page);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Get SEO config
  const seo = seoConfig.howItWorks[language as 'en' | 'zh'] || seoConfig.howItWorks.en;

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617]">
      {/* SEO Meta Tags */}
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        lang={language}
        alternates={generateAlternates('/how-it-works')}
        structuredData={structuredDataSchemas.howTo}
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
      <div className="pt-[72px]">
      {/* 1. Hero Section */}
      <section 
        className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 max-w-7xl mx-auto text-center"
        aria-label="How OwlSeer works - Transform your TikTok data into strategy"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white font-display mb-6 tracking-tight">
            From Zero to Weekly Strategy<br className="hidden md:block" /> in <span className="text-[#1AAE82]">3 Simple Steps</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            No trend hunting. No more guessing. Just enter your TikTok handle and let AI build your growth plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => handleNavigate('dashboard')}
              className="px-8 py-4 bg-[#111827] dark:bg-white text-white dark:text-[#111827] rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Try Free Demo
            </button>
            <button className="px-8 py-4 bg-transparent border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
              <Play className="w-5 h-5 fill-current" /> Watch 1 Min Overview
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. Interactive Tabs Section */}
      <section 
        className="px-4 sm:px-6 lg:px-8 pb-24 max-w-7xl mx-auto"
        aria-label="Step-by-step process breakdown"
      >
        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-[2.5rem] p-8 md:p-12 border border-blue-100 dark:border-blue-900/30">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              See exactly how we turn your data into strategy—<span className="text-blue-600 dark:text-blue-400">no black boxes</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We believe in full transparency. Every recommendation is traceable to specific signals and templates, so you understand the "why" behind every suggestion.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white dark:bg-slate-900 p-1.5 rounded-full border border-gray-200 dark:border-slate-800 shadow-sm">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(step.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === step.id
                      ? 'bg-[#111827] dark:bg-white text-white dark:text-[#111827] shadow-md'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Step 0{step.id}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-white dark:bg-slate-950 rounded-3xl border border-gray-200 dark:border-slate-800 shadow-xl overflow-hidden min-h-[500px] mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Left: Text Content */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-slate-800">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="text-[#1AAE82] font-bold text-sm uppercase tracking-wider mb-4">Step 0{activeTab}</div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                      {steps[activeTab - 1].title}
                    </h3>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                      {steps[activeTab - 1].description}
                    </p>
                    <ul className="space-y-4">
                      {steps[activeTab - 1].highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#1AAE82]/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-[#1AAE82]" strokeWidth={3} />
                          </div>
                          <span className="text-gray-700 dark:text-gray-200 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: Visual Content */}
              <div className="p-8 md:p-12 bg-gray-50 dark:bg-slate-900/50 flex items-center justify-center relative">
                 {/* Pattern Background */}
                 <div className="absolute inset-0 bg-[linear-gradient(45deg,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                 
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={activeTab}
                     initial={{ opacity: 0, scale: 0.95, y: 20 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 1.05, y: -20 }}
                     transition={{ duration: 0.4 }}
                     className="w-full h-full max-w-md aspect-[4/3]"
                   >
                     {activeTab === 1 && <DemoVisual />}
                     {activeTab === 2 && <ConnectVisual />}
                     {activeTab === 3 && <PackVisual />}
                   </motion.div>
                 </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Trust Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Step-by-step Breakdown</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">From your input to your content plan, nothing is hidden.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Traceable Logic</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Every recommendation links back to its data source.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">No False Promises</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">No hidden logic, no unexplained suggestions.</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => handleNavigate('dashboard')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-600/20 flex items-center gap-2"
            >
              See It In Action <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => {
                const faqSection = document.getElementById('faq-section');
                faqSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white rounded-xl font-medium transition-colors flex items-center gap-2"
            >
              Common Questions <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Before & After Section */}
      <section 
        className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto"
        aria-label="Before and after comparison"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-display mb-4">
            The Creator Life: <span className="text-gray-400">Before</span> & <span className="text-[#1AAE82]">After</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Before Card */}
          <div className="bg-red-50/50 dark:bg-red-900/10 rounded-3xl p-8 border border-red-100 dark:border-red-900/30">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Before OwlSeer</h3>
              <div className="bg-red-100 dark:bg-red-900/50 p-2 rounded-lg">
                <XIcon className="w-6 h-6 text-red-500" />
              </div>
            </div>
            <ul className="space-y-6">
              {[
                "Endless trend hunting on FYP",
                "Guessing what works",
                "Generic, uninspired scripts",
                "Inconsistent posting schedule"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <XIcon className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-emerald-50/50 dark:bg-emerald-900/10 rounded-3xl p-8 border border-emerald-100 dark:border-emerald-900/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl" />
            <div className="flex items-center justify-between mb-8 relative z-10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">With OwlSeer</h3>
              <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-lg">
                <Check className="w-6 h-6 text-[#1AAE82]" />
              </div>
            </div>
            <ul className="space-y-6 relative z-10">
              {[
                "Trends delivered to your inbox",
                "Data-backed decisions",
                "Personalized, high-hook scripts",
                "Strategic growth roadmap"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-900 dark:text-white font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#1AAE82] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Trust Grid & FAQ */}
      <section 
        id="faq-section" 
        className="px-4 sm:px-6 lg:px-8 py-24 max-w-4xl mx-auto"
        aria-label="Trust indicators and frequently asked questions"
      >
        {/* Trust Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Clock, text: "7-Day Free Trial" },
            { icon: RotateCcw, text: "Cancel Anytime" },
            { icon: Shield, text: "Money-Back Guarantee" },
            { icon: Lock, text: "Secure Data" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-3 p-4">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm border border-gray-100 dark:border-slate-700 text-[#1AAE82]">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{item.text}</span>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white font-display mb-10">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-slate-800 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section 
        className="px-4 sm:px-6 lg:px-8 pb-24"
        aria-label="Get started with OwlSeer"
      >
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1AAE82]/10 to-blue-500/10 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1AAE82] to-transparent opacity-20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-display mb-6">
              Ready to Meet Your AI Team?
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10">
              Join 10,000+ creators who stopped guessing and started growing.
            </p>
            <button 
              onClick={() => handleNavigate('auth')}
              className="px-10 py-5 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold text-lg shadow-lg shadow-[#1AAE82]/30 hover:shadow-[#1AAE82]/50 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 mx-auto"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
      </div>
      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

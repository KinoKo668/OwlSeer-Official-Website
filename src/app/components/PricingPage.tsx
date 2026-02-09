/**
 * @page Pricing Page - OwlSeer Plans & Pricing
 * 
 * SEO Keywords: TikTok tool pricing | content creator subscription plans | AI strategy tool cost
 * TikTok analytics pricing | creator tool subscription | social media tool plans
 * 
 * Long-tail Keywords: best free TikTok analytics tool | affordable TikTok growth platform
 * creator tool with free trial | TikTok strategy tool monthly pricing | 7-day free trial TikTok tool
 * 
 * 中文关键词: TikTok工具价格 | 创作者订阅计划 | AI策略工具费用 | 免费试用 | 内容创作者工具定价
 */

import React, { useState } from 'react';
import { useLanguage } from '../contexts';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  X, 
  HelpCircle, 
  ChevronDown, 
  ChevronRight, 
  Sparkles, 
  Zap, 
  Shield, 
  Users, 
  BarChart2, 
  Globe,
  Lock,
  ArrowRight
} from 'lucide-react';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { translations } from '../data/translations';
import { SEO } from './SEO';
import { seoConfig, structuredDataSchemas, generateAlternates } from '../data/seoConfig';

// --- Components ---

const PricingCard = ({ 
  tier, 
  price, 
  period, 
  features, 
  cta, 
  popular = false, 
  onAction 
}: { 
  tier: string; 
  price: string; 
  period: string; 
  features: string[]; 
  cta: string; 
  popular?: boolean; 
  onAction: () => void 
}) => (
  <div className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 h-full ${
    popular 
      ? 'bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-2xl shadow-emerald-500/20 border-2 border-emerald-500 scale-105 z-10' 
      : 'bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:border-emerald-500/50 hover:shadow-xl'
  }`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
        Most Popular
      </div>
    )}

    <div className="mb-8">
      <h3 className={`text-xl font-bold mb-2 ${popular ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>{tier}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-display font-bold">{price}</span>
        {price !== 'Free' && <span className={`text-sm ${popular ? 'text-gray-500 dark:text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>/{period}</span>}
      </div>
      <p className={`mt-4 text-sm ${popular ? 'text-gray-500 dark:text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
        {tier === 'Starter' && "Perfect for trying out OwlSeer."}
        {tier === 'Pro' && "For creators serious about growth."}
        {tier === 'Agency' && "Scale multiple accounts with ease."}
      </p>
    </div>

    <div className="flex-1 space-y-4 mb-8">
      {features.map((feature, i) => (
        <div key={i} className="flex items-start gap-3 text-sm">
          <div className={`mt-0.5 p-0.5 rounded-full ${popular ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'}`}>
            <Check className="w-3 h-3" strokeWidth={3} />
          </div>
          <span className={popular ? 'text-gray-600 dark:text-gray-300' : 'text-gray-600 dark:text-gray-300'}>{feature}</span>
        </div>
      ))}
    </div>

    <button
      onClick={onAction}
      className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
        popular
          ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30'
          : 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-900 dark:text-white'
      }`}
    >
      {cta}
    </button>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 dark:border-slate-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
      >
        <span className="font-semibold text-gray-900 dark:text-white text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-500 dark:text-gray-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Page ---

export function PricingPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate?: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const [isAnnual, setIsAnnual] = useState(true);
  
  // Use global language context
  const { language, setLanguage } = useLanguage();
  
  const t = translations[language as keyof typeof translations] || translations.en;
  
  // Fallback for pricing page specific translations if not present in main translation object
  const pricingT = t.pricingSection || translations.en.pricingSection;
  const pageT = t.pricingPage || translations.en.pricingPage;

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      console.log('Navigate to:', page);
    }
  };

  // Get SEO config
  const seo = seoConfig.pricing[language as 'en' | 'zh'] || seoConfig.pricing.en;

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans selection:bg-emerald-500/30">
      {/* SEO Meta Tags */}
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        lang={language}
        alternates={generateAlternates('/pricing')}
        structuredData={structuredDataSchemas.product}
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
        {/* Header */}
        <section 
          className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center max-w-7xl mx-auto"
          aria-label="Pricing plans and free trial information"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 mb-8">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">{pricingT.title}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white font-display mb-8 tracking-tight">
            {pageT.hero.title}<br />
            <span className="text-gray-400">{pageT.hero.titleHighlight}</span>
          </h1>
          
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            {pageT.hero.subtitle}
          </p>

          {/* Risk-free Trial Banner */}
          <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-emerald-50/50 to-blue-50/50 dark:from-emerald-900/10 dark:to-blue-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Risk-free 7-day trial of our full platform</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">No long-term commitment required. 7 days of unlimited access to strategy tools and scripts.</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <span className="flex items-center gap-1"><Check className="w-4 h-4 text-emerald-500" /> Clear tier-based pricing</span>
                  <span className="flex items-center gap-1"><Check className="w-4 h-4 text-emerald-500" /> No automatic billing until trial ends</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button 
                  onClick={() => handleNavigate('auth')}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-lg shadow-emerald-600/20 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                >
                  Start 7-Day Trial <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>{pricingT.monthly}</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-gray-200 dark:bg-slate-700 rounded-full transition-colors focus:outline-none"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${isAnnual ? 'translate-x-8' : ''}`} />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>{pricingT.yearly}</span>
              <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wide rounded-full">{pricingT.save}</span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
            <PricingCard 
              tier={pricingT.plans?.creator?.name || "Creator"}
              price={isAnnual ? "$31.99" : "$39.99"}
              period={pricingT.period || "mo"}
              cta={pricingT.cta?.trial || "Start Free Trial"}
              features={pricingT.plans?.creator?.features || []}
              onAction={() => handleNavigate('auth')}
            />
            
            <PricingCard 
              tier={pricingT.plans?.growth?.name || "Growth"}
              price={isAnnual ? "$55.99" : "$69.99"}
              period={pricingT.period || "mo"}
              popular={true}
              cta={pricingT.cta?.buy || "Buy Now"}
              features={pricingT.plans?.growth?.features || []}
              onAction={() => handleNavigate('auth')}
            />
            
            <PricingCard 
              tier={pricingT.plans?.scale?.name || "Scale"}
              price={isAnnual ? "$119.99" : "$149.99"}
              period={pricingT.period || "mo"}
              cta={pricingT.cta?.buy || "Buy Now"}
              features={pricingT.plans?.scale?.features || []}
              onAction={() => handleNavigate('auth')} // Or contact page
            />
          </div>

          {/* Feature Comparison Table */}
          <div className="mt-32 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-display mb-4">{pageT.comparison.title}</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">{pageT.comparison.subtitle}</p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">
              {/* Desktop View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-20 border-b border-gray-200 dark:border-slate-800">
                      <th className="p-6 w-[30%] min-w-[250px] sticky left-0 bg-gray-50 dark:bg-slate-900 z-30 shadow-[4px_0_24px_-4px_rgba(0,0,0,0.05)] md:shadow-none">
                        <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{pageT.comparison.features}</span>
                      </th>
                      <th className="p-6 w-[23%] min-w-[200px] text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">{pricingT.plans?.creator?.name || "Creator"}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-normal">{pageT.comparison.forIndividuals}</div>
                      </th>
                      <th className="p-6 w-[23%] min-w-[200px] text-center relative bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10 rounded-t-2xl">
                        <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-[#1AAE82] text-white text-[10px] font-bold px-3 py-1 rounded-b-lg shadow-sm">{pageT.comparison.mostPopular}</div>
                        <div className="text-lg font-bold text-[#1AAE82] mb-1 mt-2">{pricingT.plans?.growth?.name || "Growth"}</div>
                        <div className="text-sm text-[#1AAE82]/80 font-normal">{pageT.comparison.forCreators}</div>
                      </th>
                      <th className="p-6 w-[23%] min-w-[200px] text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">{pricingT.plans?.scale?.name || "Scale"}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-normal">{pageT.comparison.forTeams}</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                    
                    {/* Section: Core Features */}
                    <tr className="bg-gray-50/30 dark:bg-slate-900/30">
                      <td colSpan={4} className="p-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest sticky left-0 bg-gray-50/95 dark:bg-slate-900/95 z-10 backdrop-blur-sm">
                        {pageT.comparison.corePlatform}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {language === 'zh' ? 'TikTok 账号' : 'TikTok Accounts'}
                        <div className="text-xs text-gray-400 font-normal mt-1">{language === 'zh' ? '连接的个人资料数量' : 'Number of connected profiles'}</div>
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">3</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10 text-lg">10</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">{language === 'zh' ? '无限' : 'Unlimited'}</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {language === 'zh' ? '团队席位' : 'Team Seats'}
                        <div className="text-xs text-gray-400 font-normal mt-1">{language === 'zh' ? '每个工作区的协作者' : 'Collaborators per workspace'}</div>
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">1</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10 text-lg">5</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">{language === 'zh' ? '无限' : 'Unlimited'}</td>
                    </tr>

                    {/* Section: Intelligence */}
                    <tr className="bg-gray-50/30 dark:bg-slate-900/30">
                      <td colSpan={4} className="p-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest sticky left-0 bg-gray-50/95 dark:bg-slate-900/95 z-10 backdrop-blur-sm">
                        {pageT.comparison.intelligence}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {language === 'zh' ? 'AI 积分' : 'AI Credits'}
                        <div className="text-xs text-gray-400 font-normal mt-1">{language === 'zh' ? '每月 AI 操作令牌' : 'Monthly tokens for AI actions'}</div>
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">1,000</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10 text-lg">5,000</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">{language === 'zh' ? '定制' : 'Custom'}</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {language === 'zh' ? 'AI 脚本生成' : 'AI Script Generation'}
                        <div className="text-xs text-gray-400 font-normal mt-1">{language === 'zh' ? '高转化视频脚本' : 'High-converting video scripts'}</div>
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white">50 / {language === 'zh' ? '月' : 'month'}</td>
                      <td className="p-6 text-center bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10">
                        <span className="inline-flex items-center gap-1 text-[#1AAE82] font-bold bg-[#1AAE82]/10 px-2 py-1 rounded-full text-xs">
                          <Zap className="w-3 h-3 fill-current" /> {language === 'zh' ? '无限' : 'UNLIMITED'}
                        </span>
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold">{language === 'zh' ? '无限' : 'Unlimited'}</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {language === 'zh' ? '深度利基分析' : 'Deep Niche Analysis'}
                        <div className="text-xs text-gray-400 font-normal mt-1">{language === 'zh' ? '竞争对手 & 趋势深度挖掘' : 'Competitor & trend deep dives'}</div>
                      </td>
                      <td className="p-6 text-center"><span className="text-gray-300 dark:text-slate-700">—</span></td>
                      <td className="p-6 text-center bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10"><Check className="w-5 h-5 text-[#1AAE82] mx-auto" strokeWidth={3} /></td>
                      <td className="p-6 text-center"><Check className="w-5 h-5 text-[#1AAE82] mx-auto" strokeWidth={3} /></td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {language === 'zh' ? '病毒钩子库' : 'Viral Hook Library'}
                        <div className="text-xs text-gray-400 font-normal mt-1">{language === 'zh' ? '访问经过验证的开场白' : 'Access to proven opening lines'}</div>
                      </td>
                      <td className="p-6 text-center"><Check className="w-5 h-5 text-gray-400 mx-auto" /></td>
                      <td className="p-6 text-center bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10"><Check className="w-5 h-5 text-[#1AAE82] mx-auto" strokeWidth={3} /></td>
                      <td className="p-6 text-center"><Check className="w-5 h-5 text-[#1AAE82] mx-auto" strokeWidth={3} /></td>
                    </tr>

                    {/* Section: Analytics */}
                    <tr className="bg-gray-50/30 dark:bg-slate-900/30">
                      <td colSpan={4} className="p-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest sticky left-0 bg-gray-50/95 dark:bg-slate-900/95 z-10 backdrop-blur-sm">
                        {pageT.comparison.analytics}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {language === 'zh' ? '数据历史' : 'Data History'}
                        <div className="text-xs text-gray-400 font-normal mt-1">{language === 'zh' ? '分析回顾期' : 'Lookback period for analytics'}</div>
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white">{language === 'zh' ? '30 天' : '30 Days'}</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10">{language === 'zh' ? '1 年' : '1 Year'}</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold">{language === 'zh' ? '终身' : 'Lifetime'}</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {language === 'zh' ? '每周增长报告' : 'Weekly Growth Report'}
                        <div className="text-xs text-gray-400 font-normal mt-1">{language === 'zh' ? 'PDF 报告发送至邮箱' : 'PDF reports delivered to email'}</div>
                      </td>
                      <td className="p-6 text-center"><span className="text-gray-300 dark:text-slate-700">—</span></td>
                      <td className="p-6 text-center bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10"><Check className="w-5 h-5 text-[#1AAE82] mx-auto" strokeWidth={3} /></td>
                      <td className="p-6 text-center"><Check className="w-5 h-5 text-[#1AAE82] mx-auto" strokeWidth={3} /></td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {language === 'zh' ? '白标报告' : 'White-label Reports'}
                        <div className="text-xs text-gray-400 font-normal mt-1">{language === 'zh' ? '移除 OwlSeer 品牌' : 'Remove OwlSeer branding'}</div>
                      </td>
                      <td className="p-6 text-center"><span className="text-gray-300 dark:text-slate-700">—</span></td>
                      <td className="p-6 text-center bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10"><span className="text-gray-300 dark:text-slate-700">—</span></td>
                      <td className="p-6 text-center"><Check className="w-5 h-5 text-[#1AAE82] mx-auto" strokeWidth={3} /></td>
                    </tr>

                    {/* Section: Support */}
                    <tr className="bg-gray-50/30 dark:bg-slate-900/30">
                      <td colSpan={4} className="p-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest sticky left-0 bg-gray-50/95 dark:bg-slate-900/95 z-10 backdrop-blur-sm">
                        {pageT.comparison.support}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {language === 'zh' ? '支持级别' : 'Support Level'}
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white">{language === 'zh' ? '邮件' : 'Email'}</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10">{language === 'zh' ? '优先聊天' : 'Priority Chat'}</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold">{language === 'zh' ? '专属经理' : 'Dedicated Manager'}</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {language === 'zh' ? 'API 访问' : 'API Access'}
                      </td>
                      <td className="p-6 text-center"><span className="text-gray-300 dark:text-slate-700">—</span></td>
                      <td className="p-6 text-center bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10"><span className="text-gray-300 dark:text-slate-700">—</span></td>
                      <td className="p-6 text-center"><Check className="w-5 h-5 text-[#1AAE82] mx-auto" strokeWidth={3} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile View - Accordion Style */}
              <div className="md:hidden">
                {/* Creator */}
                <div className="border-b border-gray-100 dark:border-slate-800 p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Creator</h3>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex justify-between"><span>TikTok Accounts</span> <span className="font-semibold text-gray-900 dark:text-white">3</span></li>
                    <li className="flex justify-between"><span>Team Seats</span> <span className="font-semibold text-gray-900 dark:text-white">1</span></li>
                    <li className="flex justify-between"><span>Script Generation</span> <span className="font-semibold text-gray-900 dark:text-white">50 / mo</span></li>
                    <li className="flex justify-between"><span>Data History</span> <span className="font-semibold text-gray-900 dark:text-white">30 Days</span></li>
                  </ul>
                </div>

                {/* Growth (Highlighted) */}
                <div className="border-b border-gray-100 dark:border-slate-800 p-6 bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#1AAE82] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                  <h3 className="text-xl font-bold text-[#1AAE82] mb-4">Growth</h3>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex justify-between"><span>TikTok Accounts</span> <span className="font-bold text-gray-900 dark:text-white">10</span></li>
                    <li className="flex justify-between"><span>Team Seats</span> <span className="font-bold text-gray-900 dark:text-white">5</span></li>
                    <li className="flex justify-between"><span>Script Generation</span> <span className="font-bold text-[#1AAE82]">Unlimited</span></li>
                    <li className="flex justify-between"><span>Deep Niche Analysis</span> <Check className="w-4 h-4 text-[#1AAE82]" /></li>
                    <li className="flex justify-between"><span>Weekly Growth Report</span> <Check className="w-4 h-4 text-[#1AAE82]" /></li>
                    <li className="flex justify-between"><span>Support</span> <span className="font-bold text-gray-900 dark:text-white">Priority Chat</span></li>
                  </ul>
                </div>

                {/* Scale */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Scale</h3>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex justify-between"><span>Everything in Growth</span> <Check className="w-4 h-4 text-gray-400" /></li>
                    <li className="flex justify-between"><span>Accounts</span> <span className="font-bold text-gray-900 dark:text-white">Unlimited</span></li>
                    <li className="flex justify-between"><span>White-label Reports</span> <Check className="w-4 h-4 text-[#1AAE82]" /></li>
                    <li className="flex justify-between"><span>API Access</span> <Check className="w-4 h-4 text-[#1AAE82]" /></li>
                    <li className="flex justify-between"><span>Dedicated Manager</span> <Check className="w-4 h-4 text-[#1AAE82]" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

          {/* Social Proof */}
          <section 
            className="py-12 border-y border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900/50"
            aria-label="Trusted by creators and brands"
          >
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">Trusted by 10,000+ Creators & Brands</p>
              <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                 {/* Placeholders for logos */}
                 <div className="text-xl font-bold font-display text-gray-400">TechFlow</div>
                 <div className="text-xl font-bold font-display text-gray-400">CreatorDao</div>
                 <div className="text-xl font-bold font-display text-gray-400">ViralNation</div>
                 <div className="text-xl font-bold font-display text-gray-400">GrowthLab</div>
                 <div className="text-xl font-bold font-display text-gray-400">IndieHacker</div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section 
            className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
            aria-label="Frequently asked questions about pricing"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white font-display mb-12">
              {pageT.faq.title}
            </h2>
            <div className="space-y-2">
            {pageT.faq.items?.map((item: any, i: number) => (
              <FaqItem 
                key={i}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
          </section>

          {/* CTA */}
          <section 
            className="px-4 sm:px-6 lg:px-8 pb-24"
            aria-label="Start your free trial"
          >
            <div className="max-w-5xl mx-auto bg-[#111827] dark:bg-black rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6 tracking-tight">
                  {pageT.cta.title}
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                  {pageT.cta.subtitle}
                </p>
                <button 
                  onClick={() => handleNavigate('auth')}
                  className="px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold text-lg shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 mx-auto"
                >
                  {pageT.cta.button} <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>
        </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { OwlSeerLogo } from '../OwlSeerLogo';
import { addLanguagePrefix, useLanguage } from '../../contexts';
import { SocialLinks } from './SocialLinks';

interface FooterProps {
  t: any;
  onNavigate?: (page: string) => void;
  showSocialLinks?: boolean;
}

export const Footer = ({ t, onNavigate, showSocialLinks = true }: FooterProps) => {
  const SITE_ORIGIN = 'https://www.owlseer.com';
  const { language } = useLanguage();
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>(null);
  const links = t?.links || {};
  const isZh = language === 'zh';
  const showIcpRegistration = language === 'zh';
  const getAbsolutePublicUrl = (path: string) => `${SITE_ORIGIN}${addLanguagePrefix(path, language)}`;

  const toggleSection = (section: string) => {
    setMobileSectionOpen(mobileSectionOpen === section ? null : section);
  };

  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
       if (page === 'pricing') (window as any).navigateToPricing?.();
       if (page === 'how-it-works') (window as any).navigateToHowItWorks?.();
       if (page === 'blog') (window as any).navigateToBlog?.();
       if (page === 'trends-hub') window.location.href = addLanguagePrefix('/social/trends', language);
       if (page === 'tools') window.location.href = addLanguagePrefix('/social/tools', language);
       if (page === 'about') window.location.href = addLanguagePrefix('/social/about', language);
       if (page === 'faq') (window as any).navigateToFAQ?.();
       if (page === 'contact') (window as any).navigateToContact?.();
       if (page === 'security') (window as any).navigateToSecurity?.();
       if (page === 'landing') window.location.href = addLanguagePrefix('/', language); 
    }
  };

  const footerSections = [
    {
      title: t?.product || "Product",
      items: [
        { label: links.howItWorks || "How It Works", action: () => handleNav('how-it-works') },
        { label: links.methodology || "Methodology", action: () => handleNav('methodology') },
        { label: links.signals || "30+ Signals", action: () => handleNav('signals') },
        { label: links.pricing || "Pricing", action: () => handleNav('pricing') },
        { label: links.trySample || "Try Sample", action: () => handleNav('simulation') },
      ]
    },
    {
      title: t?.solutions || "Solutions",
      items: [
        { label: links.contentCreators || "Content Creators", action: () => handleNav('solutions/content-creators') },
        { label: links.localBusiness || "Local Business", action: () => handleNav('solutions/local-business') },
        { label: links.agencies || "Agencies", action: () => handleNav('solutions/agencies') },
        { label: links.brands || "Brands", action: () => handleNav('solutions/brands') },
        { label: links.ecommerceSellers || "E-commerce Sellers", action: () => handleNav('solutions/ecommerce') },
      ]
    },
    {
      title: t?.useCases || "Use Cases",
      items: [
        { label: links.trendPrediction || "Trend Prediction", action: () => handleNav('use-cases/trend-prediction') },
        { label: links.contentDiagnosis || "Content Diagnosis", action: () => handleNav('use-cases/content-diagnosis') },
        { label: links.scriptGeneration || "Script Generation", action: () => handleNav('use-cases/script-generation') },
        { label: links.postingSchedule || "Posting Schedule", action: () => handleNav('use-cases/posting-schedule') },
        { label: links.hashtagStrategy || "Hashtag Strategy", action: () => handleNav('use-cases/hashtag-strategy') },
      ]
    },
    {
      title: t?.resources || "Resources",
      items: [
        { label: links.blog || "Blog", action: () => handleNav('blog') },
        { label: links.guides || "Guides", action: () => handleNav('guides') },
        { label: links.about || (isZh ? "关于我们" : "About Us"), action: () => handleNav('about') },
        { label: links.glossary || "Glossary", action: () => handleNav('glossary') },
        { label: links.faq || "FAQ", action: () => handleNav('faq') },
        { label: links.contact || "Contact", action: () => handleNav('contact') },
      ]
    },
    {
      title: t?.legal || "Legal",
      items: [
        {
          label: links.privacy || (isZh ? "隐私政策" : "Privacy Policy"),
          href: getAbsolutePublicUrl('/social/privacy')
        },
        {
          label: links.terms || (isZh ? "用户协议" : "Terms of Service"),
          href: getAbsolutePublicUrl('/social/terms')
        },
        {
          label: links.cookies || (isZh ? "Cookie 政策" : "Cookie Policy"),
          href: getAbsolutePublicUrl('/social/cookies')
        },
        {
          label: links.security || (isZh ? "安全声明" : "Security"),
          href: getAbsolutePublicUrl('/social/security')
        },
      ]
    },
    {
      title: t?.compare || (isZh ? "对比" : "Compare"),
      items: [
        { label: links.compareAiTools || (isZh ? "AI 工具对比" : "AI Tools Comparison"), action: () => handleNav('compare/ai-tools-comparison') },
        { label: links.compareTubeSpanner || (isZh ? "OwlSeer vs TubeSpanner" : "OwlSeer vs TubeSpanner"), action: () => handleNav('compare/tubespanner') },
        { label: links.compareVidIQ || (isZh ? "OwlSeer vs VidIQ" : "OwlSeer vs VidIQ"), action: () => handleNav('compare/owlseer-vs-vidiq') },
      ]
    }
  ];

  return (
  <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="lg:w-1/5">
          <div className="flex items-center gap-2 mb-6">
            <OwlSeerLogo className="h-8 w-auto text-gray-900 dark:text-white" />
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed whitespace-pre-line">
            {t.tagline || "AI-powered TikTok strategy.\nStop guessing, start growing."}
          </p>
          {showSocialLinks ? <SocialLinks className="mt-5 flex items-center gap-5" /> : null}
        </div>
        
        <div className="hidden lg:flex lg:w-4/5 lg:justify-between gap-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-bold text-gray-900 dark:text-white whitespace-nowrap">{section.title}</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                {section.items.map((item, index) => (
                  <li key={`${section.title}-${index}`}>
                    <a
                      href={item.href || '#'}
                      onClick={(event) => {
                        if (!item.href) {
                          event.preventDefault();
                          item.action();
                        }
                      }}
                      className="transition-colors hover:text-[#1AAE82] dark:hover:text-[#1AAE82] whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden w-full space-y-4">
           {/* Product & Solutions Accordion */}
           <div className="border-b border-gray-100 dark:border-slate-800 pb-4">
             <button 
               onClick={() => toggleSection('prod-sol')}
               className="flex items-center justify-between w-full py-2 text-base font-bold text-gray-900 dark:text-white"
             >
               {t?.mobileProductAndSolutions || "Product & Solutions"}
               <ChevronDown className={`w-4 h-4 transition-transform ${mobileSectionOpen === 'prod-sol' ? 'rotate-180' : ''}`} />
             </button>
             <AnimatePresence>
               {mobileSectionOpen === 'prod-sol' && (
                 <motion.div
                   initial={{ height: 0, opacity: 0 }}
                   animate={{ height: 'auto', opacity: 1 }}
                   exit={{ height: 0, opacity: 0 }}
                   className="overflow-hidden"
                 >
                   <div className="py-4 space-y-6">
                     {[footerSections[0], footerSections[1], footerSections[2]].map((section) => (
                       <div key={section.title}>
                         <h5 className="text-xs font-bold text-gray-400 uppercase mb-3">{section.title}</h5>
                         <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                           {section.items.map((item) => (
                             <li key={item.label}>
                               <a
                                 href={item.href || '#'}
                                 onClick={(e) => {
                                   if (!item.href) {
                                     e.preventDefault();
                                     item.action();
                                   }
                                 }}
                                 className="block py-1"
                               >
                                 {item.label}
                               </a>
                             </li>
                           ))}
                         </ul>
                       </div>
                     ))}
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>

           {/* Resources & Trust Accordion */}
           <div className="border-b border-gray-100 dark:border-slate-800 pb-4">
             <button 
               onClick={() => toggleSection('res-trust')}
               className="flex items-center justify-between w-full py-2 text-base font-bold text-gray-900 dark:text-white"
             >
               {t?.resources || "Resources"}
               <ChevronDown className={`w-4 h-4 transition-transform ${mobileSectionOpen === 'res-trust' ? 'rotate-180' : ''}`} />
             </button>
             <AnimatePresence>
               {mobileSectionOpen === 'res-trust' && (
                 <motion.div
                   initial={{ height: 0, opacity: 0 }}
                   animate={{ height: 'auto', opacity: 1 }}
                   exit={{ height: 0, opacity: 0 }}
                   className="overflow-hidden"
                 >
                     <div className="py-4 space-y-6">
                     {[footerSections[3], footerSections[5]].map((section) => (
                       <div key={section.title}>
                         <h5 className="text-xs font-bold text-gray-400 uppercase mb-3">{section.title}</h5>
                         <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                           {section.items.map((item) => (
                             <li key={item.label}>
                               <a
                                 href={item.href || '#'}
                                 onClick={(e) => {
                                   if (!item.href) {
                                     e.preventDefault();
                                     item.action();
                                   }
                                 }}
                                 className="block py-1"
                               >
                                 {item.label}
                               </a>
                             </li>
                           ))}
                         </ul>
                       </div>
                     ))}
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>

           {/* Legal (Always Visible) */}
           <div className="pt-2">
             <h4 className="font-bold text-gray-900 dark:text-white mb-4">{t?.legal || "Legal"}</h4>
             <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600 dark:text-gray-400">
               {footerSections[4].items.map((item) => (
                 <a
                   key={item.label}
                   href={item.href || '#'}
                   onClick={(e) => {
                     if (!item.href) {
                       e.preventDefault();
                       item.action();
                     }
                   }}
                 >
                   {item.label}
                 </a>
               ))}
             </div>
           </div>
        </div>
      </div>
      
      {showIcpRegistration ? (
        <div className="border-t border-gray-100 dark:border-slate-800 py-[16px]">
          <div className="mx-auto max-w-5xl text-center text-[13px] leading-6 text-[#666] dark:text-gray-300">
            <p>
              <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
                <span>© 2026 赤光智算科技（深圳）有限公司 版权所有</span>
                <span className="hidden text-[#C8C8C8] sm:inline">|</span>
                <span>地址：深圳市南山区软件产业基地5E栋208</span>
                <span className="hidden text-[#C8C8C8] sm:inline">|</span>
                <span>
                  联系电话：
                  <span className="font-medium text-[#333] dark:text-gray-100">0755-88888888</span>
                  <span className="ml-1">（可替换占位符）</span>
                </span>
              </span>
            </p>
            <p className="mt-1">
              <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
                <span>ICP备案：</span>
                <a
                  href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#666] underline-offset-2 hover:underline dark:text-gray-300"
                >
                  粤ICP备2026008280号
                </a>
                <span className="text-[#C8C8C8]">|</span>
                <a
                  href={getAbsolutePublicUrl('/social/privacy')}
                  className="text-[#666] underline-offset-2 hover:underline dark:text-gray-300"
                >
                  隐私政策
                </a>
                <span className="text-[#C8C8C8]">|</span>
                <a
                  href={getAbsolutePublicUrl('/social/terms')}
                  className="text-[#666] underline-offset-2 hover:underline dark:text-gray-300"
                >
                  用户协议
                </a>
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="border-t border-gray-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {t?.rights || "© 2026 OwlSeer. All rights reserved."}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <a
              href={getAbsolutePublicUrl('/social/privacy')}
              className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82]"
            >
              {links.privacy || "Privacy Policy"}
            </a>
            <a
              href={getAbsolutePublicUrl('/social/terms')}
              className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82]"
            >
              {links.terms || "Terms of Service"}
            </a>
            <a
              href="/social/llm.txt"
              aria-hidden="true"
              tabIndex={-1}
              className="pointer-events-none select-none text-[1px] leading-none text-white dark:text-slate-900"
            >
              llm.txt
            </a>
          </div>
        </div>
      )}
    </div>
  </footer>
  );
};

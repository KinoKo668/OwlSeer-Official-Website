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

  const renderFooterLink = (
    item: { label: string; href?: string; action?: () => void },
    className: string
  ) => (
    <a
      href={item.href || '#'}
      onClick={(event) => {
        if (!item.href && item.action) {
          event.preventDefault();
          item.action();
        }
      }}
      className={className}
    >
      {item.label}
    </a>
  );

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

  const mobileSections = [
    { key: 'mobile-product', section: footerSections[0] },
    { key: 'mobile-solutions', section: footerSections[1] },
    { key: 'mobile-use-cases', section: footerSections[2] },
    { key: 'mobile-resources', section: footerSections[3] },
    { key: 'mobile-legal', section: footerSections[4] },
    { key: 'mobile-compare', section: footerSections[5] },
  ];

  return (
  <footer className="bg-white dark:bg-slate-900 pt-16 pb-8 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-14 lg:mb-16">
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
                    {renderFooterLink(item, 'transition-colors hover:text-[#1AAE82] dark:hover:text-[#1AAE82] whitespace-nowrap')}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden w-full">
          <div className="overflow-hidden rounded-xl bg-white/80 dark:bg-slate-900/50">
            {mobileSections.map(({ key, section }) => {
              const isOpen = mobileSectionOpen === key;
              return (
                <div key={key}>
                  <button
                    onClick={() => toggleSection(key)}
                    aria-expanded={isOpen}
                    aria-controls={`${key}-panel`}
                    className="flex min-h-[48px] w-full items-center justify-between px-4 py-3 text-left text-base font-semibold text-gray-900 dark:text-white"
                  >
                    <span>{section.title}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${key}-panel`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 space-y-1">
                          {section.items.map((item) => (
                            <div key={`${key}-${item.label}`}>
                              {renderFooterLink(
                                item,
                                'block rounded-md px-2 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800/80 hover:text-[#1AAE82] dark:hover:text-[#1AAE82]'
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {showIcpRegistration ? (
        <div className="py-[16px]">
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
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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

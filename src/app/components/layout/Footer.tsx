import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { OwlSeerLogo } from '../OwlSeerLogo';

interface FooterProps {
  t: any;
  onNavigate?: (page: string) => void;
}

export const Footer = ({ t, onNavigate }: FooterProps) => {
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>(null);

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
       if (page === 'faq') (window as any).navigateToFAQ?.();
       if (page === 'security') (window as any).navigateToSecurity?.();
       if (page === 'landing') window.location.href = '/'; 
    }
  };

  const footerSections = [
    {
      title: "Product",
      items: [
        { label: "How It Works", action: () => handleNav('how-it-works') },
        { label: "Methodology", action: () => handleNav('methodology') },
        { label: "30+ Signals", action: () => handleNav('signals') },
        { label: "Pricing", action: () => handleNav('pricing') },
        { label: "Demo", action: () => handleNav('simulation') },
      ]
    },
    {
      title: "Solutions",
      items: [
        { label: "Creators", action: () => handleNav('solutions/content-creators') },
        { label: "Agencies", action: () => handleNav('solutions/agencies') },
        { label: "Brands", action: () => handleNav('solutions/brands') },
        { label: "Local Business", action: () => handleNav('solutions/coaches') },
        { label: "E-commerce", action: () => handleNav('solutions/ecommerce') },
      ]
    },
    {
      title: "Use Cases",
      items: [
        { label: "Trend Prediction", action: () => handleNav('use-cases/trend-prediction') },
        { label: "Content Diagnosis", action: () => handleNav('use-cases/content-diagnosis') },
        { label: "Script Generation", action: () => handleNav('use-cases/script-generation') },
        { label: "Posting Schedule", action: () => handleNav('use-cases/posting-schedule') },
        { label: "Hashtag Strategy", action: () => handleNav('use-cases/hashtag-strategy') },
      ]
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", action: () => handleNav('blog') },
        { label: "Guides", action: () => handleNav('guides') },
        { label: "Glossary", action: () => handleNav('glossary') },
        { label: "FAQ", action: () => handleNav('faq') },
      ]
    },
    {
      title: "Company",
      items: [
        { label: "Contact", action: () => handleNav('contact') },
        { label: "About", action: () => handleNav('about') },
        { label: "Careers", action: () => handleNav('careers') },
      ]
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy", action: () => handleNav('privacy') },
        { label: "Terms", action: () => handleNav('terms') },
        { label: "Cookies", action: () => handleNav('cookies') },
        { label: "Security", action: () => handleNav('security') },
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
        </div>
        
        <div className="hidden md:grid lg:w-4/5 grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-10">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                {footerSections[0].items.map((item, i) => (
                  <li key={i}><a href="#" onClick={(e) => { e.preventDefault(); item.action(); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{item.label}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Solutions</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                {footerSections[1].items.map((item, i) => (
                  <li key={i}><a href="#" onClick={(e) => { e.preventDefault(); item.action(); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{item.label}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Use Cases</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                {footerSections[2].items.map((item, i) => (
                  <li key={i}><a href="#" onClick={(e) => { e.preventDefault(); item.action(); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{item.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                {footerSections[4].items.map((item, i) => (
                  <li key={i}><a href="#" onClick={(e) => { e.preventDefault(); item.action(); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{item.label}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                {footerSections[3].items.map((item, i) => (
                  <li key={i}><a href="#" onClick={(e) => { e.preventDefault(); item.action(); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{item.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                {footerSections[5].items.map((item, i) => (
                  <li key={i}><a href="#" onClick={(e) => { e.preventDefault(); item.action(); }} className="hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">{item.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden w-full space-y-4">
           {/* Product & Solutions Accordion */}
           <div className="border-b border-gray-100 dark:border-slate-800 pb-4">
             <button 
               onClick={() => toggleSection('prod-sol')}
               className="flex items-center justify-between w-full py-2 text-base font-bold text-gray-900 dark:text-white"
             >
               Product & Solutions
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
                             <li key={item.label}><a href="#" onClick={(e) => { e.preventDefault(); item.action(); }} className="block py-1">{item.label}</a></li>
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
               Resources & Company
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
                     {[footerSections[3], footerSections[4]].map((section) => (
                       <div key={section.title}>
                         <h5 className="text-xs font-bold text-gray-400 uppercase mb-3">{section.title}</h5>
                         <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                           {section.items.map((item) => (
                             <li key={item.label}><a href="#" onClick={(e) => { e.preventDefault(); item.action(); }} className="block py-1">{item.label}</a></li>
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
             <h4 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h4>
             <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600 dark:text-gray-400">
               {footerSections[5].items.map((item) => (
                 <a key={item.label} href="#" onClick={(e) => { e.preventDefault(); item.action(); }}>{item.label}</a>
               ))}
             </div>
           </div>
        </div>
      </div>
      
      <div className="border-t border-gray-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {t.rights}
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors text-sm">Developers</a>
          <a href="#" className="text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors text-sm">llms.txt</a>
          <a href="#" className="text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors text-sm">Sitemap</a>
          <div className="w-px h-4 bg-gray-300 dark:bg-slate-700 mx-2 hidden md:block"></div>
          <a href="#" className="text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors"><span className="sr-only">Twitter</span>𝕏</a>
          <a href="#" className="text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors">Discord</a>
        </div>
      </div>
    </div>
  </footer>
  );
};

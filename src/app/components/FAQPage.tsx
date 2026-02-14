/**
 * @page FAQ Page - Frequently Asked Questions
 * 
 * SEO Keywords: TikTok tool FAQ | OwlSeer questions | AI content tool help | TikTok strategy questions
 * content creator FAQ | TikTok analytics help | AI script generator support
 * 
 * Long-tail Keywords: is OwlSeer safe for my TikTok account | how does TikTok AI tool work
 * can I try OwlSeer without signup | TikTok tool privacy questions | OwlSeer free trial FAQ
 * 
 * 中文关键词: TikTok工具常见问题 | OwlSeer帮助 | AI内容工具问答 | 创作者工具FAQ | 隐私安全问题
 */

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  CreditCard, 
  Shield, 
  Zap, 
  MessageCircle,
  ArrowRight,
  Layout,
  FileText,
  Activity,
  AlertCircle,
  Link2,
  ExternalLink
} from 'lucide-react';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { translations } from '../data/translations';
import { SEO } from './SEO';
import { getCanonicalUrl, seoConfig, generateAlternates } from '../data/seoConfig';

// --- Types ---

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const categoryConfig = [
  { id: 'Sample', icon: Layout },
  { id: 'Outputs', icon: FileText },
  { id: 'Methodology', icon: Activity },
  { id: 'Boundaries', icon: AlertCircle },
  { id: 'Privacy', icon: Shield },
  { id: 'Billing', icon: CreditCard }
];

// --- Components ---

const RichTextRenderer = ({ content, onNavigate }: { content: string, onNavigate: (page: string) => void }) => {
  const parts = content.split('\n');
  
  return (
    <div className="space-y-3">
      {parts.map((part, index) => {
        if (!part.trim()) return <div key={index} className="h-1"></div>;
        
        // Handle list items
        if (part.trim().startsWith('- ')) {
          return (
            <div key={index} className="flex gap-2 ml-4">
              <span className="text-[#1AAE82] font-bold mt-1.5">•</span>
              <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {parseBoldText(part.replace('- ', ''))}
              </span>
            </div>
          );
        }

        // Handle verification steps (highlighted)
        if (part.trim().startsWith('Verify:') || part.trim().startsWith('验证：') || part.trim().startsWith('验证:')) {
          // Extract text after "Verify: " or "验证："
          const prefix = part.includes('Verify:') ? 'Verify:' : (part.includes('验证：') ? '验证：' : '验证:');
          const verifyContent = part.replace(prefix, '').trim();
          
          return (
            <div key={index} className="mt-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row gap-4 items-start shadow-sm transition-all hover:shadow-md">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 flex-shrink-0">
                <Link2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-blue-900 dark:text-blue-100 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  Verify This Claim
                </h4>
                <div className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed flex flex-wrap">
                  {parseLinks(verifyContent, onNavigate, true)}
                </div>
              </div>
            </div>
          );
        }

        return (
          <p key={index} className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {parseBoldText(part)}
          </p>
        );
      })}
    </div>
  );
};

const parseLinks = (text: string, onNavigate: (page: string) => void, isButton: boolean = false) => {
  // Regex to match [text](link)
  const regex = /\[(.*?)\]\((.*?)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
       // Filter out isolated "🔗" or commas if they appear as plain text before buttons
      const textBefore = text.substring(lastIndex, match.index).replace(/🔗/g, '').replace(/,/g, '').trim();
      if (textBefore) {
        parts.push(<span key={`text-${lastIndex}`}>{textBefore}</span>);
      }
    }
    
    // Add the link component
    const linkText = match[1];
    const linkUrl = match[2];
    
    parts.push(
      <a 
        key={match.index}
        href={linkUrl}
        title={linkUrl}
        onClick={(e) => {
          e.preventDefault();
          // Remove leading slash for navigation if needed, or handle absolute paths
          const path = linkUrl.startsWith('/') ? linkUrl.substring(1) : linkUrl;
          onNavigate(path);
        }}
        className={isButton 
          ? "inline-flex items-center gap-1 px-3 py-1.5 mt-2 mr-2 bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-bold hover:bg-blue-50 dark:hover:bg-blue-900/50 hover:border-blue-300 transition-all shadow-sm group"
          : "text-blue-600 hover:text-blue-800 underline font-medium mx-1 focus:outline-none cursor-pointer"
        }
      >
        {linkText}
        {isButton && <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />}
      </a>
    );
    
    lastIndex = regex.lastIndex;
  }

    // Add remaining text
    if (lastIndex < text.length) {
      // Filter out isolated "🔗" or commas if they appear as plain text between buttons
      const remaining = text.substring(lastIndex).replace(/🔗/g, '').replace(/,/g, '').trim();
      if (remaining) {
        parts.push(<span key={`text-${lastIndex}`}>{remaining}</span>);
      }
    }
  
    return <>{parts}</>;
  };

const parseBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-gray-900 dark:text-white font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const AccordionItem = ({ item, isOpen, onClick, onNavigate }: { item: FAQItem; isOpen: boolean; onClick: () => void, onNavigate: (page: string) => void }) => {
  return (
    <motion.div 
      initial={false}
      className={`border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 transition-all duration-300 ${isOpen ? 'shadow-lg ring-1 ring-[#1AAE82]/20' : 'hover:border-gray-300 dark:hover:border-slate-700'}`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className={`font-bold text-lg pr-4 ${isOpen ? 'text-[#1AAE82]' : 'text-gray-900 dark:text-white'}`}>
          {item.question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-1 rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#1AAE82]/10 text-[#1AAE82]' : 'text-gray-400 bg-gray-100 dark:bg-slate-800'}`}>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0">
              <RichTextRenderer content={item.answer} onNavigate={onNavigate} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ContactCTA = ({ t }: { t: any }) => (
  <div className="mt-20 bg-[#111827] rounded-3xl p-10 md:p-12 text-center relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/10 rounded-full blur-[80px]" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
    
    <div className="relative z-10 max-w-2xl mx-auto">
      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
        <MessageCircle className="w-8 h-8" />
      </div>
      <h3 className="text-3xl font-bold text-white font-display mb-4">{t.title}</h3>
      <p className="text-gray-400 mb-8 text-lg">
        {t.subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-3.5 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#1AAE82]/20">
          {t.chat}
        </button>
        <button className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300">
          {t.email}
        </button>
      </div>
    </div>
  </div>
);

// --- Main Page ---

export function FAQPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const [activeCategory, setActiveCategory] = useState('Sample');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<string[]>(['q1']); 
  
  // Use global language context
  const { language, setLanguage } = useLanguage();
  
  // Safe access to translations
  const currentT = translations[language as keyof typeof translations] || translations.en;
  // @ts-ignore - faqPage might not exist on all languages yet
  const faqT = currentT.faqPage || translations.en.faqPage;

  const t = currentT; // For Navbar/Footer

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = faqT.items.filter((item: FAQItem) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayFAQs = searchQuery ? faqT.items.filter((item: FAQItem) => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) : filteredFAQs;

  // SEO: Get config and generate structured data
  const seo = seoConfig.faq[language as 'en' | 'zh'] || seoConfig.faq.en;
  
  // Dynamic FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqT.items.map((faq: FAQItem) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/\n/g, ' ').replace(/\*\*(.*?)\*\*/g, '$1')
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans selection:bg-[#1AAE82]/30">
      {/* SEO Meta Tags */}
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={getCanonicalUrl('/faq', language)}
        lang={language}
        alternates={generateAlternates('/faq')}
        structuredData={faqStructuredData}
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
        {/* Header Section */}
        <section 
          className="bg-white dark:bg-slate-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-slate-800"
          aria-label="FAQ header and search"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1AAE82]/10 text-[#1AAE82] text-xs font-bold uppercase tracking-wider mb-6"
            >
              <HelpCircle className="w-3 h-3" /> Support Center
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6"
            >
              {faqT.title} <span className="text-[#1AAE82]">{faqT.titleHighlight}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              {faqT.subtitle}
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-xl mx-auto"
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-4 bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#1AAE82] focus:bg-white dark:focus:bg-slate-900 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none transition-all shadow-sm"
                placeholder={faqT.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section 
          className="px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto"
          aria-label="Frequently asked questions and answers"
        >
          
          {/* Category Tabs */}
          {!searchQuery && (
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categoryConfig.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                // @ts-ignore - dynamic key access
                const label = faqT.categories[cat.id] || cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#1AAE82] text-white shadow-lg shadow-[#1AAE82]/20' 
                        : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    {label}
                  </button>
                );
              })}
            </div>
          )}

          {/* FAQ List */}
          <div className="space-y-4">
            {displayFAQs.length > 0 ? (
              displayFAQs.map((faq: FAQItem, index: number) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem 
                    item={faq} 
                    isOpen={openItems.includes(faq.id)} 
                    onClick={() => toggleItem(faq.id)} 
                    onNavigate={handleNavigate}
                  />
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-slate-800 mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{faqT.noResults}</h3>
                <p className="text-gray-500 dark:text-gray-400">{faqT.noResultsDesc}</p>
              </div>
            )}
          </div>

          <ContactCTA t={faqT.contact} />
        </section>
      </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

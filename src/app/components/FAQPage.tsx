import React, { useState, useEffect } from 'react';
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
  ArrowRight
} from 'lucide-react';
import { Navbar, Footer } from './LandingPage';
import { translations } from '../data/translations';

// --- Types ---

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// --- Mock Data ---

const FAQS: FAQItem[] = [
  // General
  {
    id: 'g1',
    question: "What exactly is OwlSeer?",
    answer: "OwlSeer is an AI-powered analytics and strategy platform designed for TikTok creators and brands. Unlike standard analytics tools that just show you *what* happened, OwlSeer tells you *why* it happened and *what to do next*. We analyze thousands of data points to predict viral trends and optimize your content strategy.",
    category: "General"
  },
  {
    id: 'g2',
    question: "How does the AI prediction work?",
    answer: "Our 'Foresight Engine' processes millions of public TikTok videos daily to identify emerging patterns in audio, visual formats, and hashtags. We combine this with your account's historical performance data to generate personalized predictions with a high accuracy rate (typically 85%+).",
    category: "General"
  },
  {
    id: 'g3',
    question: "Is OwlSeer suitable for beginners?",
    answer: "Absolutely! While we have advanced features for power users, our interface is designed to be intuitive. The 'Action Plan' feature breaks down complex data into simple daily tasks, making it perfect for creators just starting their growth journey.",
    category: "General"
  },

  // Pricing & Billing
  {
    id: 'p1',
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial on all plans. You get full access to the features of your chosen tier, so you can see the value before you pay. No credit card required for the 'Starter' trial.",
    category: "Billing"
  },
  {
    id: 'p2',
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time from your account settings. You will continue to have access until the end of your current billing cycle.",
    category: "Billing"
  },
  {
    id: 'p3',
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. For Enterprise plans, we can also support invoice-based billing.",
    category: "Billing"
  },

  // Features & Technical
  {
    id: 'f1',
    question: "Does OwlSeer support other platforms like Instagram or YouTube?",
    answer: "Currently, our deep-dive predictive features are optimized exclusively for TikTok. However, we have basic analytics integration for Instagram Reels and YouTube Shorts in beta. Full multi-platform support is coming in Q4 2026.",
    category: "Features"
  },
  {
    id: 'f2',
    question: "Can I schedule posts directly through OwlSeer?",
    answer: "Yes! Our 'Smart Scheduler' not only lets you upload and schedule videos but also recommends the optimal posting times based on when *your* specific audience is most active online.",
    category: "Features"
  },
  {
    id: 'f3',
    question: "Do I need to install any software?",
    answer: "No, OwlSeer is entirely cloud-based. You can access it from any modern web browser on your desktop, tablet, or smartphone.",
    category: "Features"
  },

  // Privacy & Security
  {
    id: 's1',
    question: "Is my data safe?",
    answer: "Security is our top priority. We use industry-standard encryption (AES-256) for all data. We are SOC 2 Type II compliant and never share your personal data with third parties without your explicit consent.",
    category: "Privacy"
  },
  {
    id: 's2',
    question: "Does OwlSeer sell my data?",
    answer: "Never. Your data belongs to you. We only use aggregated, anonymized data to improve our global trend models, but your specific account details and strategies are strictly private.",
    category: "Privacy"
  },
  {
    id: 's3',
    question: "Do you need my TikTok password?",
    answer: "No. We use the official TikTok API for secure authentication (OAuth). You log in via TikTok's secure portal, and we receive an access token. We never see or store your actual password.",
    category: "Privacy"
  }
];

const CATEGORIES = [
  { id: 'General', icon: HelpCircle, label: 'General' },
  { id: 'Billing', icon: CreditCard, label: 'Billing' },
  { id: 'Features', icon: Zap, label: 'Features' },
  { id: 'Privacy', icon: Shield, label: 'Privacy' }
];

// --- Components ---

const AccordionItem = ({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div 
      initial={false}
      className={`border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 transition-all duration-300 ${isOpen ? 'shadow-lg ring-1 ring-[#1AAE82]/20' : 'hover:border-gray-300 dark:hover:border-slate-700'}`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className={`font-bold text-lg ${isOpen ? 'text-[#1AAE82]' : 'text-gray-900 dark:text-white'}`}>
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
            <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ContactCTA = () => (
  <div className="mt-20 bg-[#111827] rounded-3xl p-10 md:p-12 text-center relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/10 rounded-full blur-[80px]" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
    
    <div className="relative z-10 max-w-2xl mx-auto">
      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
        <MessageCircle className="w-8 h-8" />
      </div>
      <h3 className="text-3xl font-bold text-white font-display mb-4">Still have questions?</h3>
      <p className="text-gray-400 mb-8 text-lg">
        Can't find the answer you're looking for? Our friendly team is here to help.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-3.5 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#1AAE82]/20">
          Chat with Support
        </button>
        <button className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300">
          Email Us
        </button>
      </div>
    </div>
  </div>
);

// --- Main Page ---

export function FAQPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const [activeCategory, setActiveCategory] = useState('General');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<string[]>(['g1']); // Open first item by default
  
  // Minimal state for Navbar compatibility
  const [language, setLanguage] = useState('en');
  // Removed local isDarkMode state
  const t = translations.en;

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  // Removed local useEffect for dark mode

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = FAQS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // If searching, ignore category tabs
  const displayFAQs = searchQuery ? FAQS.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) : filteredFAQs;

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans selection:bg-[#1AAE82]/30">
      <style>{`
        .font-display { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

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
        <section className="bg-white dark:bg-slate-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-slate-800">
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
              How can we <span className="text-[#1AAE82]">help you?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              Search our knowledge base or browse frequently asked questions below.
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
                placeholder="Search for answers (e.g. 'pricing', 'api', 'security')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
          
          {/* Category Tabs (Only show if not searching) */}
          {!searchQuery && (
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
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
                    {cat.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* FAQ List */}
          <div className="space-y-4">
            {displayFAQs.length > 0 ? (
              displayFAQs.map((faq, index) => (
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
                  />
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-slate-800 mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No results found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search terms.</p>
              </div>
            )}
          </div>

          <ContactCTA />
        </section>
      </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

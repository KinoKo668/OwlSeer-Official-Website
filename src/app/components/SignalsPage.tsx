import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Plus,
  Minus,
  ArrowUpRight
} from 'lucide-react';

import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { SEO } from './SEO';
import { translations } from '../data/translations';
import { useLanguage } from '../contexts/LanguageContext';

// --- Interfaces ---

interface SignalsPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
  onNavigate: (page: string) => void;
}

interface Signal {
  name: string;
  id: string;
  def: string;
  why: string;
  how: string;
}

// --- Components ---

const SignalItem = ({ 
  signal, 
  index, 
  isOpen, 
  toggle,
  ctaText,
  onNavigate
}: { 
  signal: Signal; 
  index: number; 
  isOpen: boolean; 
  toggle: () => void;
  ctaText: string;
  onNavigate: (page: string) => void;
}) => {
  return (
    <div className="border-t border-black dark:border-white last:border-b group">
      <button 
        onClick={toggle}
        className="w-full py-6 flex items-start justify-between text-left focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors px-2 md:px-0"
      >
        <div className="flex items-baseline gap-6 md:gap-12">
          <span className="text-sm font-mono text-gray-400 dark:text-gray-500 w-8">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black dark:text-white">
            {signal.name}
          </h3>
        </div>
        <div className="shrink-0 ml-4 pt-1">
          {isOpen ? (
            <Minus className="w-5 h-5 text-black dark:text-white" />
          ) : (
            <Plus className="w-5 h-5 text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-0 md:pl-[calc(3rem+12px)] pr-0 md:pr-8 grid md:grid-cols-12 gap-8">
              <div className="md:col-span-10 lg:col-span-8 space-y-6">
                <p className="text-lg leading-relaxed font-medium text-black dark:text-white border-l-2 border-black dark:border-white pl-4">
                  {signal.def}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 pt-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Why it matters</h4>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {signal.why}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">OwlSeer Analysis</h4>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {signal.how}
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('/social/auth');
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-bold rounded-full hover:opacity-80 transition-opacity"
                  >
                    {ctaText} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Component ---

export const SignalsPage = ({ isDarkMode, setIsDarkMode, onNavigate }: SignalsPageProps) => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const tSignals = t.signalsPage;

  const [openSignal, setOpenSignal] = useState<string | null>(null);

  const toggleSignal = (id: string) => {
    setOpenSignal(openSignal === id ? null : id);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans text-black dark:text-white">
      <SEO 
        title={tSignals.hero.title}
        description={tSignals.tldr.content.slice(0, 160)}
        lang={language}
      />

      <Navbar 
        onTrySample={() => onNavigate('/social/simulation')}
        onSignUp={() => onNavigate('/social/auth')}
        onNavigate={onNavigate}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={t}
      />

      <main className="pt-24 pb-20">
        {/* Header Section */}
        <section className="container mx-auto px-6 mb-20 md:mb-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8 text-black dark:text-white">
                {tSignals.hero.title}
              </h1>
            </motion.div>

            <div className="grid grid-cols-12 gap-8 mt-12 border-t border-black dark:border-white pt-8">
              <div className="col-span-12 md:col-span-3">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-2">
                  System Core
                </span>
                <span className="text-sm font-bold">
                  {new Date().getFullYear()} Edition
                </span>
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-900 dark:text-gray-100 mb-10">
                  {tSignals.hero.lead}
                </p>
                
                {/* Key Insights / TLDR */}
                <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
                  <span className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">
                    Key Insights
                  </span>
                  <p 
                    className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: tSignals.tldr.content.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-black dark:text-white">$1</span>') }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Nav */}
        <div className="sticky top-0 z-30 bg-white/90 dark:bg-black/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 py-4 mb-20">
          <div className="container mx-auto px-6 max-w-5xl flex justify-between items-center overflow-x-auto no-scrollbar">
            <span className="font-mono text-xs uppercase hidden md:block text-gray-500 mr-8">Index</span>
            <div className="flex gap-8 min-w-max">
              {[
                { id: 'engagement', label: tSignals.quickNav.engagement },
                { id: 'trends', label: tSignals.quickNav.trends },
                { id: 'audience', label: tSignals.quickNav.audience },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-bold uppercase tracking-widest hover:text-[#1AAE82] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-6 max-w-5xl space-y-24">
          
          {/* Engagement */}
          <section id="engagement" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{tSignals.sections.engagement.title}</h2>
              <button 
                onClick={() => onNavigate(tSignals.sections.engagement.linkUrl)}
                className="group flex items-center gap-2 text-base font-medium text-[#1AAE82] hover:underline decoration-2 underline-offset-4"
              >
                {tSignals.sections.engagement.actionLine.replace(/\[(.*?)\]\(.*?\)/, '$1')}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            
            <div className="mb-12 max-w-3xl">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {tSignals.sections.engagement.desc}
              </p>
            </div>

            <div className="w-full">
              {tSignals.sections.engagement.signals.map((signal: Signal, index: number) => (
                <SignalItem 
                  key={signal.id} 
                  signal={signal} 
                  index={index} 
                  isOpen={openSignal === signal.id}
                  toggle={() => toggleSignal(signal.id)}
                  ctaText={tSignals.ctaButton}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </section>

          {/* Trends */}
          <section id="trends" className="scroll-mt-24">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{tSignals.sections.trends.title}</h2>
              <button 
                onClick={() => onNavigate(tSignals.sections.trends.linkUrl)}
                className="group flex items-center gap-2 text-base font-medium text-[#1AAE82] hover:underline decoration-2 underline-offset-4"
              >
                {tSignals.sections.trends.actionLine.replace(/\[(.*?)\]\(.*?\)/, '$1')}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

             <div className="mb-12 max-w-3xl">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {tSignals.sections.trends.desc}
              </p>
            </div>

            <div className="w-full">
              {tSignals.sections.trends.signals.map((signal: Signal, index: number) => (
                <SignalItem 
                  key={signal.id} 
                  signal={signal} 
                  index={index + 4} 
                  isOpen={openSignal === signal.id}
                  toggle={() => toggleSignal(signal.id)}
                  ctaText={tSignals.ctaButton}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </section>

          {/* Audience */}
          <section id="audience" className="scroll-mt-24">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{tSignals.sections.audience.title}</h2>
              <button 
                onClick={() => onNavigate(tSignals.sections.audience.linkUrl)}
                className="group flex items-center gap-2 text-base font-medium text-[#1AAE82] hover:underline decoration-2 underline-offset-4"
              >
                {tSignals.sections.audience.actionLine.replace(/\[(.*?)\]\(.*?\)/, '$1')}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

             <div className="mb-12 max-w-3xl">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {tSignals.sections.audience.desc}
              </p>
            </div>

            <div className="w-full">
              {tSignals.sections.audience.signals.map((signal: Signal, index: number) => (
                <SignalItem 
                  key={signal.id} 
                  signal={signal} 
                  index={index + 8} 
                  isOpen={openSignal === signal.id}
                  toggle={() => toggleSignal(signal.id)}
                  ctaText={tSignals.ctaButton}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </section>

          {/* How Together - Compact 3-Column Grid */}
          <section className="py-12 border-t border-gray-200 dark:border-gray-800">
             <div className="mb-10">
               <h2 className="text-3xl font-bold mb-4">{tSignals.sections.howTogether.title}</h2>
               <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                 {tSignals.sections.howTogether.intro}
               </p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-6">
               {tSignals.sections.howTogether.examples.map((ex: any, i: number) => (
                 <div key={i} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors group">
                   <div className="flex items-center justify-between mb-4">
                     <span className="font-mono text-xs uppercase tracking-widest text-gray-400 group-hover:text-[#1AAE82] transition-colors">Synergy 0{i + 1}</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700 group-hover:bg-[#1AAE82] transition-colors" />
                   </div>
                   <h3 className="text-xl font-bold mb-3 leading-tight min-h-[3.5rem] flex items-center">{ex.title}</h3>
                   <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                     {ex.desc}
                   </p>
                 </div>
               ))}
             </div>
          </section>

          {/* Contextual CTA */}
          <section className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-16 px-6 md:px-12 text-center rounded-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              {tSignals.sections.contextualConversion.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {tSignals.sections.contextualConversion.desc}
            </p>
            <button 
              onClick={() => onNavigate('/social/auth')}
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity text-base font-bold rounded-full"
            >
              {tSignals.sections.contextualConversion.button}
            </button>
            <div className="mt-6 text-xs font-mono text-gray-500 uppercase">
              {tSignals.sections.contextualConversion.note}
            </div>
          </section>

          {/* Boundary Box */}
          <section className="border-t border-gray-200 dark:border-gray-800 pt-12 pb-24">
            <div className="grid md:grid-cols-3 gap-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              <div>
                <strong className="block text-black dark:text-white mb-2 text-xs uppercase tracking-widest">Data Source</strong>
                <p>{tSignals.sections.boundary.data.replace("Data we use:", "")}</p>
              </div>
              <div>
                <strong className="block text-black dark:text-white mb-2 text-xs uppercase tracking-widest">Limitations</strong>
                <p>{tSignals.sections.boundary.notDo.replace("What we do not do:", "")}</p>
              </div>
              <div>
                <strong className="block text-black dark:text-white mb-2 text-xs uppercase tracking-widest">Variability</strong>
                <p>{tSignals.sections.boundary.variability.replace("Variability note:", "")}</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer t={t.footer} onNavigate={onNavigate} />
    </div>
  );
};

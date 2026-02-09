import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react';
import { 
  Navbar 
} from '../layout/Navbar';
import { 
  Footer 
} from '../layout/Footer';
import { SEO } from '../SEO';
import { seoConfig, generateAlternates } from '../../data/seoConfig';
import { translations } from '../../data/translations';
import { 
  Check, 
  X as XIcon,
  ArrowRight, 
  TrendingUp, 
  Zap,
  Target,
  BarChart2,
  FileText,
  Calendar,
  AlertTriangle,
  MessageSquare,
  Activity,
  Shield,
  Smartphone,
  Monitor,
  Search,
  Youtube
} from 'lucide-react';

// --- Components ---

// 1. Platform Focus Slider
const PlatformFocusSlider = ({ focus, setFocus }: { focus: number, setFocus: (val: number) => void }) => {
  const constraintsRef = useRef(null);

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <div className="flex justify-between items-center mb-4 font-bold">
        <div className={`transition-colors ${focus < 50 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
          <Youtube className="w-6 h-6 inline-block mr-2" />
          YouTube Focus
        </div>
        <div className={`transition-colors ${focus > 50 ? 'text-[#1AAE82]' : 'text-gray-400'}`}>
          TikTok Focus
          <Smartphone className="w-6 h-6 inline-block ml-2" />
        </div>
      </div>
      
      <div className="relative h-12 bg-gray-100 dark:bg-slate-800 rounded-full p-1 shadow-inner overflow-hidden" ref={constraintsRef}>
        {/* Background Gradients */}
        <div 
          className="absolute inset-y-0 left-0 bg-blue-500/20 transition-all duration-300"
          style={{ width: `${100 - focus}%` }}
        />
        <div 
          className="absolute inset-y-0 right-0 bg-[#1AAE82]/20 transition-all duration-300"
          style={{ width: `${focus}%` }}
        />
        
        {/* Slider Knob */}
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0}
          dragMomentum={false}
          onDrag={(event, info) => {
            if (!constraintsRef.current) return;
            const element = constraintsRef.current as HTMLElement;
            const width = element.offsetWidth - 48; // subtract knob width
            const x = info.point.x - element.getBoundingClientRect().left - 24;
            const newFocus = Math.max(0, Math.min(100, (x / width) * 100));
            setFocus(newFocus);
          }}
          style={{ left: `${focus}%`, x: '-50%' }}
          className="absolute top-1 bottom-1 w-10 bg-white dark:bg-slate-700 rounded-full shadow-lg cursor-grab active:cursor-grabbing flex items-center justify-center border border-gray-200 dark:border-slate-600 z-10"
        >
          <div className="w-1 h-4 bg-gray-300 dark:bg-slate-500 rounded-full" />
        </motion.div>
        
        {/* Center Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 dark:bg-slate-700" />
      </div>
      
      <p className="text-center text-sm text-gray-500 mt-2">
        Drag to see how platform focus changes feature priorities
      </p>
    </div>
  );
};

// 2. Comparison Table Row
const ComparisonRow = ({ feature, owlseer, vidiq, focus }: { feature: string, owlseer: string, vidiq: string, focus: number }) => {
  const isOwlSeerWinner = focus > 50;
  
  return (
    <div className={`group grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-xl transition-all duration-300 ${
      isOwlSeerWinner 
        ? 'hover:bg-[#1AAE82]/5' 
        : 'hover:bg-blue-50 dark:hover:bg-blue-900/10'
    } border-b border-gray-100 dark:border-slate-800 last:border-0`}>
      <div className="font-bold text-gray-900 dark:text-white flex items-center">
        {feature}
      </div>
      
      {/* OwlSeer Column */}
      <div className={`relative p-4 rounded-lg transition-all duration-300 ${
        isOwlSeerWinner ? 'bg-white dark:bg-slate-800 shadow-sm ring-1 ring-[#1AAE82]/20' : 'opacity-70'
      }`}>
        {isOwlSeerWinner && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1AAE82] rounded-full text-white flex items-center justify-center shadow-lg animate-pulse">
            <Check className="w-3.5 h-3.5" />
          </div>
        )}
        <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{owlseer}</div>
      </div>
      
      {/* VidIQ Column */}
      <div className={`relative p-4 rounded-lg transition-all duration-300 ${
        !isOwlSeerWinner ? 'bg-white dark:bg-slate-800 shadow-sm ring-1 ring-blue-500/20' : 'opacity-70'
      }`}>
        {!isOwlSeerWinner && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center shadow-lg animate-pulse">
            <Check className="w-3.5 h-3.5" />
          </div>
        )}
        <div className="text-sm text-gray-600 dark:text-gray-400">{vidiq}</div>
      </div>
    </div>
  );
};

// 3. Flip Card
const FlipCard = ({ title, features, type, onFlip }: { title: string, features: string[], type: 'owlseer' | 'vidiq', onFlip?: () => void }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isOwlSeer = type === 'owlseer';
  
  return (
    <div 
      className="relative w-full h-[420px] cursor-pointer perspective-1000 group"
      onClick={() => {
        setIsFlipped(!isFlipped);
        onFlip?.();
      }}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="w-full h-full relative preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div 
          className={`absolute inset-0 backface-hidden rounded-2xl p-8 border shadow-xl flex flex-col ${
            isOwlSeer 
              ? 'bg-white dark:bg-slate-900 border-[#1AAE82]/20' 
              : 'bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800'
          }`}
        >
          <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
            isOwlSeer ? 'bg-[#1AAE82]/10 text-[#1AAE82]' : 'bg-blue-50 text-blue-600'
          }`}>
            {isOwlSeer ? <Smartphone className="w-8 h-8" /> : <Youtube className="w-8 h-8" />}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {title}
          </h3>
          
          <ul className="space-y-4 flex-1">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  isOwlSeer ? 'text-[#1AAE82]' : 'text-blue-500'
                }`} />
                <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-4 text-center text-xs text-gray-400 flex items-center justify-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
            <Zap className="w-3 h-3" /> Tap to see preview
          </div>
        </div>

        {/* Back */}
        <div 
          className={`absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl rotate-y-180 flex flex-col ${
            isOwlSeer ? 'bg-[#1AAE82]' : 'bg-blue-600'
          }`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="p-6 text-white text-center">
            <h4 className="font-bold text-lg mb-2">
              {isOwlSeer ? "Built for TikTok" : "Built for YouTube"}
            </h4>
            <p className="text-white/80 text-sm">
              {isOwlSeer ? "See the difference in signal depth." : "Great for search, not for feed."}
            </p>
          </div>
          <div className="flex-1 bg-gray-100 dark:bg-slate-800 relative m-2 mt-0 rounded-xl overflow-hidden">
             {/* Mock UI Representation */}
             {isOwlSeer ? (
               <div className="absolute inset-0 p-4 space-y-3 opacity-90">
                 <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                 <div className="flex gap-2">
                   <div className="h-20 bg-[#1AAE82]/20 rounded flex-1 border border-[#1AAE82]/30 flex items-center justify-center text-[#1AAE82] text-xs font-bold">Trend Radar</div>
                   <div className="h-20 bg-[#1AAE82]/20 rounded flex-1 border border-[#1AAE82]/30 flex items-center justify-center text-[#1AAE82] text-xs font-bold">Script Studio</div>
                 </div>
                 <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                 <div className="h-2 bg-gray-200 rounded w-1/2"></div>
               </div>
             ) : (
               <div className="absolute inset-0 p-4 space-y-3 opacity-90">
                  <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                  <div className="space-y-2">
                    <div className="h-8 bg-blue-100 rounded border border-blue-200 flex items-center px-3 text-blue-400 text-xs">Keyword Research</div>
                    <div className="h-8 bg-blue-100 rounded border border-blue-200 flex items-center px-3 text-blue-400 text-xs">SEO Score</div>
                    <div className="h-8 bg-blue-100 rounded border border-blue-200 flex items-center px-3 text-blue-400 text-xs">Competitors</div>
                  </div>
               </div>
             )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};


export function CompareVidIQPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  // Content based on language
  const trans = translations as any;
  const content = trans[language]?.compareVidIQ || trans.en?.compareVidIQ;

  if (!content) {
    return <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#020617] text-gray-500">Loading content...</div>;
  }
  
  // SEO
  const seo = seoConfig.compareVidIQ?.[language as 'en' | 'zh'] || seoConfig.compareVidIQ?.en || {
    title: 'OwlSeer vs VidIQ | TikTok Tool Comparison',
    description: 'Compare OwlSeer and VidIQ. See why OwlSeer is the best choice for TikTok creators.',
    keywords: ['owlseer vs vidiq', 'tiktok analytics comparison'],
    canonicalUrl: 'https://owlseer.com/compare/owlseer-vs-vidiq'
  };

  const [focus, setFocus] = useState(100); // Default to TikTok/OwlSeer (100)

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans selection:bg-[#1AAE82]/30 text-gray-900 dark:text-gray-100">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        lang={language}
        alternates={generateAlternates('/compare/owlseer-vs-vidiq')}
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
        {/* 1. HERO */}
        <section className="relative pt-20 pb-20 overflow-hidden">
           <div className="absolute inset-0 bg-white dark:bg-[#020617]">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
           </div>

           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
             >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-6">
                 Comparison
               </div>
               <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6 leading-tight">
                 {content.hero.title}
               </h1>
               <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
                 {content.hero.lead}
               </p>
             </motion.div>
           </div>
        </section>

        {/* 2. TL;DR */}
        <section className="py-8 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-orange-50 dark:bg-orange-900/10 rounded-2xl p-6 md:p-8 flex gap-4 items-start border border-orange-100 dark:border-orange-900/20">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 shrink-0 mt-1">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-2">TL;DR</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {content.tldr}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. COMPARISON TABLE */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#020617]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">
                {content.table.title}
              </h2>
            </div>

            {/* Platform Focus Slider */}
            <PlatformFocusSlider focus={focus} setFocus={setFocus} />

            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-800 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-50 dark:bg-slate-800/50 border-b border-gray-200 dark:border-slate-800 font-bold text-sm uppercase tracking-wider text-gray-500">
                <div>Feature</div>
                <div className={`${focus > 50 ? 'text-[#1AAE82]' : ''}`}>OwlSeer</div>
                <div className={`${focus < 50 ? 'text-blue-500' : ''}`}>VidIQ</div>
              </div>
              
              {content.table.rows.map((row: any, idx: number) => (
                <ComparisonRow 
                  key={idx}
                  feature={row.feature}
                  owlseer={row.owlseer}
                  vidiq={row.vidiq}
                  focus={focus}
                />
              ))}
            </div>

            {/* Contextual Conversion Hook */}
            <div className="mt-12 text-center">
               <p className="text-sm text-gray-500 mb-6 font-medium">Experience the features VidIQ is missing:</p>
               <div className="flex flex-wrap justify-center gap-4">
                 <button 
                   onClick={() => handleNavigate('trends')}
                   className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:border-[#1AAE82] hover:text-[#1AAE82] transition-colors flex items-center gap-2"
                 >
                   <TrendingUp className="w-4 h-4" /> Try Trend Radar
                 </button>
                 <button 
                   onClick={() => handleNavigate('studio')}
                   className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:border-[#1AAE82] hover:text-[#1AAE82] transition-colors flex items-center gap-2"
                 >
                   <FileText className="w-4 h-4" /> Try Script Studio
                 </button>
                 <button 
                   onClick={() => handleNavigate('weekly-report')}
                   className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:border-[#1AAE82] hover:text-[#1AAE82] transition-colors flex items-center gap-2"
                 >
                   <BarChart2 className="w-4 h-4" /> Try Weekly Report
                 </button>
               </div>
            </div>
          </div>
        </section>

        {/* 4. CHOOSE SECTION */}
        <section className="py-24 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              <FlipCard 
                title={content.chooseOwlSeer.title}
                features={content.chooseOwlSeer.items}
                type="owlseer"
              />
              <FlipCard 
                title={content.chooseVidIQ.title}
                features={content.chooseVidIQ.items}
                type="vidiq"
              />
            </div>
          </div>
        </section>

        {/* 5. PLATFORM FOCUS */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#020617]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1AAE82]/20 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold font-display mb-6">
                  {content.platformFocus.title}
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    {content.platformFocus.p1}
                  </p>
                  <p>
                    {content.platformFocus.p2}
                  </p>
                  <div className="p-4 bg-white/10 rounded-xl border border-white/10 mt-6">
                    <p className="text-white font-medium">
                      {content.platformFocus.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. BOUNDARY & CTA */}
        <section className="py-24 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <div className="mb-16 p-6 bg-gray-50 dark:bg-slate-800 rounded-xl text-left text-xs text-gray-500 space-y-2">
              <p><strong>Transparency:</strong> {content.boundary.transparency}</p>
              <p><strong>Note:</strong> {content.boundary.note}</p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-8">
              {content.cta.title}
            </h2>
            <p className="text-xl text-gray-500 mb-8 max-w-lg mx-auto">
              {content.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleNavigate('auth')}
                className="px-10 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl shadow-lg shadow-[#1AAE82]/30 transition-all hover:-translate-y-1"
              >
                {content.cta.primary}
              </button>
              <button 
                onClick={() => handleNavigate('landing')}
                className="px-10 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-all"
              >
                {content.cta.secondary}
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

import React, { useState, useRef, memo } from 'react';
import { useLanguage, usePerformance } from '../../contexts';
import { motion, useInView } from 'motion/react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { SEO } from '../SEO';
import { seoConfig, generateAlternates } from '../../data/seoConfig';
import { translations } from '../../data/translations';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown, 
  Zap, 
  AlertCircle, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  TrendingUp, 
  PlayCircle,
  Lock
} from 'lucide-react';

// --- Shared Background (From LandingPage) ---
const SharedBackground = memo(() => {
  const { enableBlur } = usePerformance();
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
      
      {/* Aurora Gradients */}
      <div 
        className={`absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-gradient-to-br from-[#1AAE82]/10 via-purple-500/5 to-transparent rounded-full ${
          enableBlur ? 'blur-[80px]' : 'blur-[40px]'
        } opacity-50`}
      />
      
      <div 
        className={`absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-gradient-to-tl from-[#06B6D4]/10 via-blue-500/5 to-transparent rounded-full ${
          enableBlur ? 'blur-[60px]' : 'blur-[30px]'
        } opacity-40`}
      />
    </div>
  );
});

// --- Components ---

// 1. Pain Point Card (Modern Flip)
const PainPointCard = ({ title, desc, solutionTitle, solutionDesc, delay }: { title: string, desc: string, solutionTitle: string, solutionDesc: string, delay: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  
  return (
    <div 
      ref={ref}
      className="relative w-full h-[340px] cursor-pointer group perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="relative w-full h-full transition-transform duration-700 preserve-3d"
        style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        
        {/* Front - Pain */}
        <div className="absolute inset-0 backface-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20 dark:border-slate-700/50 p-8 flex flex-col justify-between rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 text-red-500">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-display mb-4 text-gray-900 dark:text-white">"{title}"</h3>
            <p className="text-base font-medium text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/5 pt-4">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">Problem</span>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1AAE82] group-hover:underline">
              See Solution <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Back - Solution */}
        <div 
          className="absolute inset-0 backface-hidden bg-[#1AAE82] text-white p-8 flex flex-col justify-between rounded-3xl shadow-lg"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6 text-white">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-display mb-4">{solutionTitle}</h3>
            <p className="text-base font-medium opacity-90 leading-relaxed">{solutionDesc}</p>
          </div>
          <div className="flex items-center justify-between border-t border-white/20 pt-4">
            <span className="text-xs font-bold uppercase tracking-widest">OwlSeer Fix</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

// 2. Count Up Stat (Modern Style)
const CountUpStat = ({ target, suffix = "", label, subLabel }: { target: number, suffix?: string, label: string, subLabel?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="p-8 rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-100 dark:border-slate-700 text-center hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all group">
      <div className="text-5xl md:text-6xl font-bold font-display mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1AAE82] to-[#2DD4BF]">
        {count}{suffix}
      </div>
      <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">{label}</div>
      {subLabel && <div className="text-sm font-medium text-gray-500 font-mono uppercase tracking-tight">{subLabel}</div>}
    </div>
  );
};

// 3. Mini Tool (Glass Widget)
const RecommendationTool = ({ content }: { content: any }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleGenerate = () => {
    if (!username) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult({
        trend: content.mock.trend,
        relevance: 87,
        topic: content.mock.topic,
        time: content.mock.time
      });
    }, 1500);
  };

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="mb-8 border-b border-gray-100 dark:border-slate-800 pb-6 relative z-10">
        <h3 className="text-3xl font-bold font-display mb-2 text-gray-900 dark:text-white">
          {content.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          {content.subtitle}
        </p>
      </div>

      {!result ? (
        <div className="space-y-6 relative z-10">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold font-mono text-xl text-gray-400">@</span>
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={content.placeholder}
              className="w-full pl-10 pr-4 py-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl font-mono text-lg outline-none focus:ring-2 focus:ring-[#1AAE82] transition-all placeholder:text-gray-400 text-gray-900 dark:text-white"
            />
          </div>
          <button 
            onClick={handleGenerate}
            disabled={!username || loading}
            className={`w-full py-4 font-bold text-lg rounded-2xl transition-all shadow-lg ${
              !username || loading
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-slate-800 dark:text-slate-600' 
                : 'bg-[#1AAE82] hover:bg-[#15956F] text-white hover:shadow-[#1AAE82]/30 hover:-translate-y-1'
            }`}
          >
            {loading ? "PROCESSING..." : content.button.default}
          </button>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 relative z-10"
        >
          <div className="flex items-center justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
            <div className="font-mono font-bold text-gray-900 dark:text-white">@{username}</div>
            <button onClick={() => setResult(null)} className="text-xs font-bold uppercase hover:text-[#1AAE82] text-gray-500 transition-colors">Reset</button>
          </div>

          <div className="grid gap-4">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 flex justify-between items-center shadow-sm">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2 text-gray-500">
                  <TrendingUp className="w-4 h-4 text-[#1AAE82]" /> Trend
                </div>
                <div className="font-bold text-xl text-gray-900 dark:text-white">"{result.trend}"</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-mono font-bold text-[#1AAE82]">{result.relevance}%</div>
                <div className="text-xs font-bold uppercase text-gray-400">Match</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700">
                <div className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 text-gray-500">
                  <Zap className="w-4 h-4 text-[#1AAE82]" /> Topic
                </div>
                <div className="font-bold text-gray-900 dark:text-white">"{result.topic}"</div>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700">
                <div className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4 text-[#1AAE82]" /> Time
                </div>
                <div className="font-bold font-mono text-gray-900 dark:text-white">{result.time}</div>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <p className="text-xs font-mono text-gray-500 mb-4 uppercase">{content.result.disclaimer}</p>
            <a 
              href="/auth"
              className="inline-block w-full py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-[#1AAE82]/30 transition-all hover:-translate-y-1"
            >
              {content.result.cta}
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export function ContentCreatorsPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  const seo = seoConfig.contentCreators?.[language as 'en' | 'zh'] || seoConfig.contentCreators?.en;
  const content = (t as any).contentCreators || translations.en.contentCreators;

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  const iconMap: Record<string, any> = {
    Trend: TrendingUp,
    Script: FileText,
    Schedule: Calendar,
    Goal: Zap
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans text-gray-900 dark:text-white selection:bg-[#1AAE82]/20 selection:text-[#1AAE82]">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        lang={language}
        alternates={generateAlternates('/solutions/content-creators')}
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
        <SharedBackground />

        {/* 1. HERO SECTION */}
        <section className="relative pt-24 pb-32 overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
             >
               <h1 className="text-5xl md:text-8xl font-bold font-display mb-8 leading-[0.9] tracking-tighter text-gray-900 dark:text-white">
                 {content.hero.title}
               </h1>
               <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                 {content.hero.lead}
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button 
                   onClick={() => handleNavigate('auth')}
                   className="px-10 py-5 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold text-xl shadow-lg hover:shadow-[#1AAE82]/30 transition-all hover:-translate-y-1"
                 >
                   {content.hero.primaryCta}
                 </button>
                 <button 
                   onClick={() => handleNavigate('landing')}
                   className="px-10 py-5 bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white rounded-full font-bold text-xl transition-all"
                 >
                   {content.hero.secondaryCta}
                 </button>
               </div>
             </motion.div>
           </div>
        </section>

        {/* 2. CORE INSIGHT (TL;DR) */}
        <section className="py-24 bg-white/50 dark:bg-slate-900/50 border-y border-gray-100 dark:border-white/5 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#1AAE82] rounded-full animate-pulse" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Core Insight</span>
            </div>
            <p className="text-2xl md:text-4xl font-light leading-relaxed text-gray-900 dark:text-white">
              "{content.tldr}"
            </p>
          </div>
        </section>

        {/* 3. PAIN POINTS */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 tracking-tight text-gray-900 dark:text-white">
                {content.painPoints.title}
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                {content.painPoints.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.painPoints.cards.map((card: any, idx: number) => (
                <PainPointCard 
                  key={idx}
                  title={card.title}
                  desc={card.desc}
                  solutionTitle={card.solutionTitle}
                  solutionDesc={card.solutionDesc}
                  delay={idx * 0.2}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. SOLUTION */}
        <section className="py-32 bg-gray-50/50 dark:bg-slate-900/50 border-y border-gray-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold font-display mb-12 leading-none text-gray-900 dark:text-white">
                  {content.solution.title}
                </h2>
                <div className="space-y-6">
                  {content.solution.items.map((item: any, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group p-6 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 hover:shadow-lg hover:shadow-[#1AAE82]/5 transition-all"
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-[#1AAE82]/10 flex items-center justify-center flex-shrink-0 text-[#1AAE82]">
                          {idx === 0 ? <Calendar className="w-6 h-6" /> : 
                           idx === 1 ? <TrendingUp className="w-6 h-6" /> :
                           idx === 2 ? <FileText className="w-6 h-6" /> :
                           <Zap className="w-6 h-6" />}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12">
                  <a href="/landing" className="inline-flex items-center gap-3 font-bold uppercase tracking-widest text-sm text-[#1AAE82] hover:underline decoration-2 underline-offset-4">
                    {content.solution.action} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="relative sticky top-32">
                <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/20 dark:border-slate-700/50 p-2 rounded-3xl shadow-2xl">
                  <div className="aspect-[4/3] bg-gray-100 dark:bg-slate-900 flex items-center justify-center rounded-2xl border border-gray-200 dark:border-slate-800">
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-400">Dashboard Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. MINI TOOL */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
             <RecommendationTool content={content.miniTool} />
          </div>
        </section>

        {/* 6. RESULTS */}
        <section className="py-32 bg-gray-50/50 dark:bg-slate-900/50 border-y border-gray-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 text-gray-900 dark:text-white">
                {content.results.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.results.stats.map((stat: any, idx: number) => (
                <CountUpStat 
                  key={idx}
                  target={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  subLabel={stat.subLabel}
                />
              ))}
            </div>
            <p className="text-center text-xs font-mono text-gray-400 mt-12 max-w-2xl mx-auto uppercase tracking-wide">
              {content.results.disclaimer}
            </p>
          </div>
        </section>

        {/* 7. FEATURES CHECKLIST */}
        <section className="py-32">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 font-display uppercase tracking-widest text-gray-900 dark:text-white">{content.features.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {content.features.items.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-4 border-b border-gray-100 dark:border-slate-800 pb-4">
                  <div className="w-6 h-6 rounded-full bg-[#1AAE82]/10 flex items-center justify-center text-[#1AAE82]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-lg text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <div className="inline-block px-6 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-bold border border-blue-500/20">
                ★ All included in Free Trial
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA */}
        <section className="py-32 relative overflow-hidden bg-[#111827]">
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1AAE82]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 p-6 mb-16 inline-block max-w-2xl mx-auto rounded-2xl">
              <h4 className="font-bold mb-2 text-xs uppercase tracking-widest text-gray-400">Transparency Note</h4>
              <p className="text-sm leading-relaxed font-mono text-gray-300">
                {content.boundary.note}
              </p>
            </div>

            <h2 className="text-5xl md:text-8xl font-bold font-display mb-8 leading-[0.9] text-white">
              {content.cta.title}
            </h2>
            <p className="text-xl md:text-3xl font-light mb-16 max-w-2xl mx-auto text-gray-400">
              {content.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => handleNavigate('auth')}
                className="px-12 py-6 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold text-xl rounded-full shadow-lg hover:shadow-[#1AAE82]/30 transition-all hover:-translate-y-2"
              >
                {content.cta.primary}
              </button>
              <button 
                onClick={() => handleNavigate('landing')}
                className="px-12 py-6 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full font-bold text-xl backdrop-blur-sm transition-all"
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

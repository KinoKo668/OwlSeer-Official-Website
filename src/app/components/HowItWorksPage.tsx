import React, { useState, memo } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { translations } from '../data/translations';
import { useLanguage, usePerformance } from '../contexts';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { SEO } from './SEO';
import { getCanonicalUrl, seoConfig, getLocalizedStructuredDataSchemas, generateAlternates } from '../data/seoConfig';
import { 
  Check, 
  Lock, 
  ArrowRight, 
  Zap,
  TrendingUp,
  Activity,
  Users,
  Shield,
  Clock,
  CheckCircle2,
  BarChart3,
  Calendar,
  FileText,
  User,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

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

const ProfileWidget = () => (
  <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 dark:border-slate-700/50 w-full max-w-sm mx-auto">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-gray-200 dark:border-slate-700">
          <User className="w-6 h-6 text-gray-400" />
        </div>
        <div>
          <div className="h-4 w-24 bg-gray-200 dark:bg-slate-700 rounded-md mb-2" />
          <div className="h-3 w-16 bg-gray-100 dark:bg-slate-800 rounded-md" />
        </div>
      </div>
      <div className="px-3 py-1 bg-[#1AAE82]/10 text-[#1AAE82] text-xs font-bold rounded-full flex items-center gap-1.5 border border-[#1AAE82]/20">
        <div className="w-1.5 h-1.5 bg-[#1AAE82] rounded-full animate-pulse" />
        Connected
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-100 dark:border-slate-800">
      {[1, 2, 3].map((i) => (
        <div key={i} className="text-center">
          <div className="h-4 w-8 bg-gray-200 dark:bg-slate-700 rounded mx-auto mb-2" />
          <div className="h-2 w-12 bg-gray-100 dark:bg-slate-800 rounded mx-auto" />
        </div>
      ))}
    </div>
    <div className="mt-4 flex items-center gap-2 text-xs text-gray-400 justify-center">
      <Lock className="w-3 h-3" /> Read-only access established
    </div>
  </div>
);

const MetricsWidget = () => (
  <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50 w-full max-w-sm mx-auto overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center bg-gray-50/50 dark:bg-slate-800/50">
      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Signal Analysis</span>
      <span className="text-xs font-mono text-[#1AAE82]">Processing...</span>
    </div>
    <div className="p-2">
      {[
        { label: 'Hook Retention', score: 'Low', color: 'text-red-500', bg: 'bg-red-500' },
        { label: 'Trend Velocity', score: 'High', color: 'text-[#1AAE82]', bg: 'bg-[#1AAE82]' },
        { label: 'Audience Match', score: 'Med', color: 'text-yellow-500', bg: 'bg-yellow-500' },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
          <div className="flex items-center gap-3">
            <div className="w-24 h-1.5 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className={`h-full ${item.bg} rounded-full`} style={{ width: item.score === 'High' ? '90%' : item.score === 'Med' ? '60%' : '30%' }} />
            </div>
            <span className={`text-xs font-bold w-8 text-right ${item.color}`}>{item.score}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ScriptWidget = () => (
  <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 dark:border-slate-700/50 w-full max-w-sm mx-auto relative">
    <div className="absolute top-0 right-0 p-4">
      <div className="w-8 h-8 rounded-full bg-[#1AAE82] text-white flex items-center justify-center shadow-lg shadow-[#1AAE82]/20">
        <Zap className="w-4 h-4" />
      </div>
    </div>
    <div className="mb-6">
      <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Generated Script</div>
      <div className="h-5 w-3/4 bg-gray-900 dark:bg-white rounded-md mb-2" />
    </div>
    <div className="space-y-4">
      <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-xl border-l-4 border-[#1AAE82]">
        <div className="text-[10px] font-bold uppercase text-gray-400 mb-1">Hook (0-3s)</div>
        <div className="h-3 w-full bg-gray-200 dark:bg-slate-700 rounded mb-1" />
        <div className="h-3 w-2/3 bg-gray-200 dark:bg-slate-700 rounded" />
      </div>
      <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-xl border-l-4 border-gray-300 dark:border-slate-600">
        <div className="text-[10px] font-bold uppercase text-gray-400 mb-1">Value</div>
        <div className="h-3 w-full bg-gray-200 dark:bg-slate-700 rounded mb-1" />
        <div className="h-3 w-5/6 bg-gray-200 dark:bg-slate-700 rounded" />
      </div>
    </div>
  </div>
);

const ROICalculator = ({ t }: { t: any }) => {
  const [researchTime, setResearchTime] = useState(5);
  const [trendTime, setTrendTime] = useState(3);
  const [scriptTime, setScriptTime] = useState(4);
  
  const totalTime = researchTime + trendTime + scriptTime;
  const savedTime = Math.round(totalTime * 0.8);
  const monthlySaved = savedTime * 4;
  const value = monthlySaved * 50;

  return (
    <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-slate-700/50">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 space-y-8">
          <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-[#1AAE82] rounded-lg text-white">
               <Clock className="w-5 h-5" />
             </div>
             <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.roi.title}</h3>
          </div>
          
          {[
            { label: t.roi.q1, val: researchTime, set: setResearchTime },
            { label: t.roi.q2, val: trendTime, set: setTrendTime },
            { label: t.roi.q3, val: scriptTime, set: setScriptTime }
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                <span>{item.label}</span>
                <span className="font-bold text-gray-900 dark:text-white">{item.val}h</span>
              </div>
              <input 
                type="range" min="0" max="20" value={item.val} 
                onChange={(e) => item.set(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-100 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-[#1AAE82]"
              />
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2">
           <div className="bg-gray-50/50 dark:bg-slate-800/50 rounded-2xl p-8 text-center border border-gray-100 dark:border-slate-700 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Monthly Value Created</div>
                <div className="text-5xl md:text-6xl font-bold text-[#1AAE82] mb-2 tracking-tight">
                  ${value}
                </div>
                <div className="text-sm text-gray-500">
                  Based on {monthlySaved} hours saved @ $50/hr
                </div>
              </div>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#1AAE82_1px,transparent_1px)] [background-size:16px_16px]" />
           </div>
        </div>
      </div>
    </div>
  );
};

const StepSection = ({ 
  number, 
  title, 
  desc, 
  children,
  visual,
  isLast = false,
  reverse = false
}: { 
  number: string; 
  title: string; 
  desc: string; 
  children: React.ReactNode;
  visual?: React.ReactNode;
  isLast?: boolean;
  reverse?: boolean;
}) => {
  return (
    <div className={`py-24 md:py-32 ${!isLast ? 'border-b border-gray-100 dark:border-white/5' : ''}`}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center`}>
        <div className={`order-2 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="flex items-center gap-4 mb-8">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold text-lg border border-gray-100 dark:border-slate-700 shadow-sm">
              {number}
            </span>
            <div className="h-px bg-gray-200 dark:bg-slate-800 flex-grow max-w-[60px]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.1] text-gray-900 dark:text-white tracking-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            {desc}
          </p>
          {children}
        </div>
        <div className={`order-1 ${reverse ? 'lg:order-1' : 'lg:order-2'} flex justify-center px-6 md:px-0`}>
          <div className="relative w-full max-w-md">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#1AAE82]/10 rounded-full blur-[60px] pointer-events-none" />
            {/* Main Visual */}
            <div className="relative z-10 transform transition-transform duration-500 hover:scale-[1.02]">
              {visual}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HowItWorksPage = ({ 
  onNavigate, 
  isDarkMode, 
  setIsDarkMode 
}: { 
  onNavigate: (page: string) => void; 
  isDarkMode: boolean; 
  setIsDarkMode: (isDark: boolean) => void; 
}) => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language]?.howItWorksPage || translations.en.howItWorksPage;
  const navT = translations[language] || translations.en;
  const seo = seoConfig.howItWorks[language as 'en' | 'zh'] || seoConfig.howItWorks.en;
  const localizedSchemas = getLocalizedStructuredDataSchemas(language);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-gray-900 dark:text-white font-sans selection:bg-[#1AAE82]/20 selection:text-[#1AAE82]">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={getCanonicalUrl('/how-it-works', language)}
        lang={language}
        alternates={generateAlternates('/how-it-works')}
        structuredData={localizedSchemas.howTo}
      />

      <Navbar 
        onTrySample={() => onNavigate('simulation')} 
        onSignUp={() => onNavigate('auth')}
        onNavigate={onNavigate}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={navT}
      />
      
      {/* Progress Line */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#1AAE82] origin-left z-50"
        style={{ scaleX }}
      />

      <main className="pt-24 md:pt-32 pb-24 relative">
        <SharedBackground />
        
        {/* Hero Section - Centered & Bold */}
        <section className="container mx-auto px-6 max-w-5xl mb-32 text-center relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-gray-600 dark:text-gray-300 text-sm font-medium mb-8 border border-gray-200 dark:border-slate-700">
               <Zap className="w-4 h-4 text-[#1AAE82]" /> How it Works
             </div>
             
             <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1] mb-8 text-gray-900 dark:text-white">
               {t.hero.title} <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1AAE82] to-[#2DD4BF]">{t.hero.titleHighlight}</span>
             </h1>
             
             <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
               {t.hero.lead}
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button
                 onClick={() => onNavigate('simulation')}
                 className="group relative w-full overflow-hidden rounded-full bg-gray-900 px-7 py-3.5 shadow-[0_16px_40px_-22px_rgba(15,23,42,0.55)] will-change-transform transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_26px_58px_-26px_rgba(16,185,129,0.68)] dark:bg-white sm:w-auto sm:px-8 sm:py-4"
               >
                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#149A74] via-[#1AAE82] to-[#2DD4BF] bg-[length:180%_100%] opacity-0 transition-[opacity,background-position] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[position:100%_0] group-hover:opacity-100" />
                 <div className="pointer-events-none absolute -left-1/3 top-[-130%] h-[340%] w-1/3 -translate-x-full rotate-[20deg] bg-white/40 opacity-0 blur-xl transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[420%] group-hover:opacity-70 dark:bg-white/35" />
                 <span className="relative flex items-center justify-center gap-3 text-base font-bold text-white transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white dark:text-gray-900 sm:text-lg">
                   {navT.hero?.ctaPrimary || 'Try Sample'}
                   <ArrowRight className="w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5" />
                 </span>
               </button>
               <button
                 onClick={() => onNavigate('auth')}
                 className="group flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-3.5 font-semibold text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white sm:w-auto sm:py-4"
               >
                 <div className="flex items-center justify-center">
                   <Zap className="w-4 h-4 text-[#1AAE82] fill-[#1AAE82] opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
                 </div>
                 <span className="text-[15px]">{navT.hero?.ctaSecondaryButton || 'Start Now'}</span>
               </button>
             </div>
           </motion.div>
        </section>

        {/* Steps Container */}
        <section className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Step 1: Connect */}
          <StepSection 
            number="01" 
            title={t.step1.title} 
            desc={t.step1.desc}
            visual={<ProfileWidget />}
          >
            <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-slate-800">
              <h3 className="font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wide text-gray-500">
                <Shield className="w-4 h-4 text-[#1AAE82]" /> {t.step1.readOnlyTitle}
              </h3>
              <ul className="space-y-3">
                {t.step1.readOnlyList.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300">
                    <Check className="w-5 h-5 text-[#1AAE82] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StepSection>

          {/* Step 2: Analyze */}
          <StepSection 
            number="02" 
            title={t.step2.title} 
            desc={t.step2.desc}
            reverse={true}
            visual={<MetricsWidget />}
          >
            <div className="space-y-6">
              {[
                { title: "Engagement", desc: "Hook rate, retention", icon: Activity },
                { title: "Trends", desc: "Velocity, saturation", icon: TrendingUp },
                { title: "Audience", desc: "Active times, demographics", icon: Users },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon className="w-5 h-5 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </StepSection>

          {/* Step 3: Strategy */}
          <StepSection 
            number="03" 
            title={t.step3.title} 
            desc={t.step3.desc}
            isLast={true}
            visual={<ScriptWidget />}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.step3.outputs.map((output: any, i: number) => (
                <div key={i} className="p-4 rounded-xl border border-gray-200 dark:border-slate-700/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                    {output.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                    {output.desc}
                  </p>
                </div>
              ))}
            </div>
          </StepSection>
        </section>

        {/* ROI Section */}
        <section className="container mx-auto px-6 max-w-6xl py-24 border-t border-gray-100 dark:border-white/5">
          <ROICalculator t={t} />
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
             {t.whatYouGet.items.map((item: any, i: number) => (
               <div key={i} className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-[#1AAE82]/10 flex items-center justify-center shrink-0 text-[#1AAE82] font-bold text-sm">
                   {i+1}
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                   <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               </div>
             ))}
          </div>
          
          <div className="text-center mt-16">
             <Link to="/social/methodology" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1AAE82] font-medium transition-colors">
               Read full methodology <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 max-w-5xl py-32 text-center relative z-10">
          <div className="bg-[#111827] text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
             {/* Glows */}
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1AAE82]/20 rounded-full blur-[80px] pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
             
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white">
                {t.cta.title}
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                {t.cta.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => onNavigate('simulation')}
                  className="px-10 py-5 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg"
                >
                  {navT.hero?.ctaPrimary || 'Try Sample'}
                </button>
                <button
                  onClick={() => onNavigate('auth')}
                  className="px-10 py-5 bg-white/10 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  {navT.hero?.ctaSecondaryButton || 'Start Now'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer t={navT.footer} onNavigate={onNavigate} />
    </div>
  );
};

export default HowItWorksPage;

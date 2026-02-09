import React, { useState, memo } from 'react';
import { useLanguage, usePerformance } from '../../contexts';
import { motion } from 'motion/react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { SEO } from '../SEO';
import { seoConfig, generateAlternates } from '../../data/seoConfig';
import { translations } from '../../data/translations';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Store, 
  TrendingUp, 
  FileText, 
  Calendar, 
  Target, 
  Calculator, 
  MapPin, 
  Navigation,
  Lock,
  PlayCircle
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

// 1. Local Coverage Map (Glassmorphism)
const LocalMapWidget = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-2xl">
      {/* Map Base */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-[#0B1120]">
        {/* Streets Pattern */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #64748b 1px, transparent 1px),
              linear-gradient(#64748b 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Coverage Areas (Soft Glows) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1AAE82]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#1AAE82]/20 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Pins */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative group cursor-pointer">
          <div className="w-12 h-12 bg-[#1AAE82] rounded-full flex items-center justify-center shadow-lg shadow-[#1AAE82]/30 animate-bounce">
             <Store className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
             <span className="text-xs font-bold text-gray-900 dark:text-white">Your Store</span>
          </div>
        </div>
      </div>

      {/* Floating Insights */}
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-8 right-8 z-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-lg"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-[#1AAE82] rounded-full animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Traffic</span>
        </div>
        <div className="text-2xl font-bold font-mono text-gray-900 dark:text-white">12.5k</div>
        <div className="text-xs font-bold mt-1 text-[#1AAE82]">+18%</div>
      </motion.div>

      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-8 left-8 z-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-lg min-w-[160px]"
      >
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-3 h-3 text-[#1AAE82]" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Trend</span>
        </div>
        <div className="text-sm font-bold mb-2 text-gray-900 dark:text-white">"Hidden Gems"</div>
        <div className="w-full h-1.5 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-[#1AAE82] w-3/4 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

// 2. ROI Calculator (Modern)
const ROICalculator = ({ content }: { content: any }) => {
  const [followers, setFollowers] = useState(500);
  const [aov, setAov] = useState(50);

  const estWalkIns = Math.round((followers * 0.05) + (followers > 1000 ? 10 : 5)); 
  const estRevenue = estWalkIns * aov;

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 md:p-12 border border-white/20 dark:border-slate-700/50 rounded-3xl shadow-2xl relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-10">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-[#1AAE82]/10 rounded-xl text-[#1AAE82]">
               <Calculator className="w-6 h-6" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{content.title}</h3>
          </div>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">{content.followers}</label>
                <span className="text-sm font-bold font-mono bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white px-3 py-1 rounded-lg border border-gray-200 dark:border-slate-700">{followers}</span>
              </div>
              <input 
                type="range" min="100" max="10000" step="100" value={followers}
                onChange={(e) => setFollowers(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-[#1AAE82]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">{content.aov}</label>
                <span className="text-sm font-bold font-mono bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white px-3 py-1 rounded-lg border border-gray-200 dark:border-slate-700">${aov}</span>
              </div>
              <input 
                type="range" min="10" max="200" step="5" value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-[#1AAE82]"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1AAE82]/5 to-transparent p-8 border border-[#1AAE82]/20 rounded-2xl relative">
           <div className="relative z-10">
             <div className="grid grid-cols-2 gap-8 mb-8">
               <div>
                 <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{content.result.customers}</div>
                 <div className="text-4xl font-bold font-mono text-gray-900 dark:text-white">+{estWalkIns}</div>
               </div>
               <div>
                 <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{content.result.revenue}</div>
                 <div className="text-4xl font-bold font-mono text-[#1AAE82]">+${estRevenue.toLocaleString()}</div>
               </div>
             </div>
             <button className="w-full py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl shadow-lg hover:shadow-[#1AAE82]/30 transition-all uppercase tracking-widest text-sm hover:-translate-y-1">
               {content.cta}
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

// 3. Solution Card (Modern)
const SolutionCard = ({ item, iconMap }: { item: any, iconMap: any }) => {
  const Icon = iconMap[item.icon] || TrendingUp;
  return (
    <div className="group p-10 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20 dark:border-slate-700/50 rounded-3xl hover:shadow-xl hover:shadow-[#1AAE82]/5 transition-all relative">
      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-[#1AAE82]">
        <ArrowRight className="w-5 h-5 -rotate-45" />
      </div>
      
      <div className="w-14 h-14 rounded-2xl bg-[#1AAE82]/10 flex items-center justify-center mb-8 text-[#1AAE82] group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {item.title}
      </h3>
      <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
        {item.desc}
      </p>
    </div>
  );
};

export function LocalBusinessPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const content = (t as any).localBusiness || translations.en.localBusiness;
  
  const seo = seoConfig.localBusiness?.[language as 'en' | 'zh'] || seoConfig.localBusiness?.en;

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  const iconMap: Record<string, any> = {
    Trend: TrendingUp,
    Script: FileText,
    Schedule: Calendar,
    Goal: Target
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans text-gray-900 dark:text-white selection:bg-[#1AAE82]/20 selection:text-[#1AAE82]">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        lang={language}
        alternates={generateAlternates('/solutions/local-business')}
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

        {/* 1. HERO */}
        <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
             >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
                 <Store className="w-3 h-3" />
                 {content.hero.badge}
               </div>
               
               <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1] mb-8 text-gray-900 dark:text-white">
                 {content.hero.title}
               </h1>
               
               <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed max-w-lg font-light">
                 {content.hero.lead}
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4">
                 <button 
                   onClick={() => handleNavigate('auth')}
                   className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold shadow-lg hover:shadow-[#1AAE82]/30 transition-all flex items-center justify-center gap-3 uppercase tracking-wider text-sm hover:-translate-y-1"
                 >
                   {content.hero.primary} <ArrowRight className="w-5 h-5" />
                 </button>
                 <button 
                   onClick={() => handleNavigate('landing')}
                   className="px-8 py-4 bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white rounded-full font-bold transition-all text-sm uppercase tracking-wider flex items-center gap-2"
                 >
                   <PlayCircle className="w-5 h-5" /> {content.hero.secondary}
                 </button>
               </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative"
             >
               <LocalMapWidget />
             </motion.div>
           </div>
        </section>

        {/* 2. CORE PHILOSOPHY */}
        <section className="py-24 border-y border-gray-100 dark:border-white/5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 block">Core Insight</span>
            <p className="text-2xl md:text-4xl font-light leading-relaxed text-gray-900 dark:text-white">
              "{content.tldr}"
            </p>
          </div>
        </section>

        {/* 3. PAIN POINTS - Editorial Grid */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl leading-none text-gray-900 dark:text-white">
                {content.painPoints.title}
              </h2>
              <div className="h-px bg-gray-200 dark:bg-slate-800 flex-1 ml-12 mb-4 hidden md:block" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {content.painPoints.items.map((item: any, idx: number) => (
                <div key={idx} className="group border-t border-gray-200 dark:border-slate-800 pt-6">
                  <div className="text-6xl font-display font-bold text-gray-100 dark:text-slate-800 mb-8 group-hover:text-[#1AAE82] transition-colors duration-300">
                    0{idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SOLUTION - Modern Grid */}
        <section className="py-32 border-y border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <span className="font-bold font-mono text-sm uppercase tracking-widest mb-4 block text-[#1AAE82]">The Solution</span>
              <h2 className="text-4xl md:text-6xl font-bold leading-none text-gray-900 dark:text-white">
                {content.solution.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.solution.items.map((item: any, idx: number) => (
                <SolutionCard key={idx} item={item} iconMap={iconMap} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. RESULTS & ROI */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-20">
              <div className="lg:col-span-5 pt-8">
                <h2 className="text-4xl font-bold mb-16 leading-tight text-gray-900 dark:text-white">
                  {content.results.title}
                </h2>
                <div className="space-y-16">
                  {content.results.stats.map((stat: any, idx: number) => (
                    <div key={idx} className="relative pl-8 border-l-4 border-gray-200 dark:border-slate-800">
                      <div className="text-6xl font-bold mb-2 tracking-tighter font-display text-transparent bg-clip-text bg-gradient-to-r from-[#1AAE82] to-[#2DD4BF]">{stat.value}</div>
                      <div className="text-xl font-bold mb-2 uppercase tracking-wide text-gray-900 dark:text-white">{stat.label}</div>
                      <p className="text-gray-500 font-medium">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <ROICalculator content={content.calculator} />
              </div>
            </div>
          </div>
        </section>

        {/* 6. FORMATS - Cards */}
        <section className="py-32 bg-[#111827] text-white overflow-hidden relative">
          {/* Glows */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1AAE82]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-24">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-none">
                {content.formats.title}
              </h2>
              <div className="w-32 h-1.5 bg-[#1AAE82] rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.formats.items.map((item: any, idx: number) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8 text-white group-hover:bg-[#1AAE82] transition-colors">
                    <span className="font-mono font-bold">0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-display text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-medium transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTA */}
        <section className="py-32">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-gray-900 dark:text-white">
              {content.cta.title}
            </h2>
            <p className="text-xl md:text-3xl font-light mb-16 max-w-3xl mx-auto leading-tight text-gray-500 dark:text-gray-400">
              {content.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/auth" className="px-16 py-6 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold text-xl rounded-full shadow-lg hover:shadow-[#1AAE82]/30 transition-all hover:-translate-y-2">
                {content.cta.primary}
              </Link>
              <Link to="/demo" className="px-16 py-6 bg-transparent border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white font-bold text-xl rounded-full hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                {content.cta.secondary}
              </Link>
            </div>
            
            <div className="mt-20 pt-8 border-t border-gray-100 dark:border-slate-800 text-sm font-mono uppercase tracking-widest opacity-60 inline-block text-gray-500">
              {content.boundary.note}
            </div>
          </div>
        </section>
      </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

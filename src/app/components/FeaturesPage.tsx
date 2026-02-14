/**
 * @page Features Page - OwlSeer Platform Capabilities
 * 
 * SEO Keywords: TikTok AI features | content strategy tools | AI script generator features
 * TikTok analytics features | video content planning tools | creator growth features
 * 
 * Long-tail Keywords: AI TikTok script generator features | TikTok trend analysis tool capabilities
 * content calendar features for TikTok | automated content recommendation features | TikTok performance tracking tools
 * 
 * 中文关键词: TikTok AI功能 | 内容策略工具 | AI脚本生成功能 | 视频分析功能 | 创作者工具特性
 */

import React from 'react';
import { useLanguage } from '../contexts';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Sparkles, 
  Zap, 
  BarChart2, 
  Users, 
  Calendar, 
  Search, 
  ArrowRight,
  Check,
  Cpu,
  Globe,
  Lock,
  Layers,
  Target,
  Map
} from 'lucide-react';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { translations } from '../data/translations';
import { SEO } from './SEO';
import { getCanonicalUrl, seoConfig, generateAlternates } from '../data/seoConfig';

// --- Visual Components ---



const BentoCard = ({ title, desc, icon: Icon, className, delay }: { title: string, desc: string, icon: any, className?: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${className}`}
  >
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100 dark:border-slate-700">
        <Icon className="w-6 h-6 text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-display">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const FeatureShowcase = ({ 
  title, 
  desc, 
  badge, 
  features, 
  align = 'left', 
  visual 
}: { 
  title: string, 
  desc: string, 
  badge: string, 
  features: string[], 
  align?: 'left' | 'right',
  visual: React.ReactNode 
}) => (
  <div className={`flex flex-col ${align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-24`}>
    <div className="flex-1 space-y-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
        <Sparkles className="w-3 h-3" /> {badge}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-display leading-tight">
        {title}
      </h2>
      <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
        {desc}
      </p>
      <ul className="space-y-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-emerald-500" strokeWidth={3} />
            </div>
            <span className="text-gray-700 dark:text-gray-200 font-medium">{f}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex-1 w-full">
      <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-2xl">
        {visual}
      </div>
    </div>
  </div>
);

// --- Mock Visuals ---

const StrategyVisual = () => (
  <div className="w-full h-full flex flex-col p-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700/30 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
    <div className="space-y-4 relative z-10">
      <div className="flex gap-3 items-start">
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">AI</div>
        <div className="bg-white dark:bg-slate-700 rounded-2xl rounded-tl-none p-4 shadow-sm border border-gray-100 dark:border-slate-600 max-w-[80%]">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Analyzing your audience...</p>
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            Based on your tech-savvy audience, try this hook: <br/>
            <span className="text-emerald-500">"Stop buying new phones until you try this setting..."</span>
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-start flex-row-reverse">
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-slate-600" />
        <div className="bg-[#1AAE82] text-white rounded-2xl rounded-tr-none p-4 shadow-sm max-w-[80%]">
          <p className="text-sm font-medium">Generate full script for this hook.</p>
        </div>
      </div>
      <div className="flex gap-3 items-start">
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">AI</div>
        <div className="bg-white dark:bg-slate-700 rounded-2xl rounded-tl-none p-4 shadow-sm border border-gray-100 dark:border-slate-600 w-full">
          <div className="h-2 bg-gray-100 dark:bg-slate-600 rounded w-full mb-2 animate-pulse" />
          <div className="h-2 bg-gray-100 dark:bg-slate-600 rounded w-5/6 mb-2 animate-pulse" />
          <div className="h-2 bg-gray-100 dark:bg-slate-600 rounded w-4/6 animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

const TrendsVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-black relative">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-black to-black" />
    <div className="relative z-10 w-64 h-64">
      {/* Radar Circles */}
      {[1, 2, 3].map(i => (
        <div key={i} className="absolute inset-0 border border-emerald-500/20 rounded-full" style={{ transform: `scale(${i * 0.3 + 0.1})` }} />
      ))}
      {/* Scanning Line */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/20 to-transparent rounded-full"
        style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }}
      />
      {/* Blips */}
      <motion.div 
        animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-[20%] right-[30%] w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]"
      />
      <motion.div 
        animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute bottom-[30%] left-[20%] w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_10px_#2dd4bf]"
      />
    </div>
  </div>
);

const AnalyticsVisual = () => (
  <div className="w-full h-full bg-white dark:bg-slate-900 p-8 flex flex-col justify-between">
    <div className="flex justify-between items-end mb-8">
      <div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Retention Rate</div>
        <div className="text-4xl font-bold text-gray-900 dark:text-white">68.4%</div>
      </div>
      <div className="text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded">+12.5%</div>
    </div>
    <div className="flex-1 flex items-end gap-2">
      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 50].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="flex-1 bg-gray-100 dark:bg-slate-800 rounded-t-sm relative overflow-hidden group"
        >
          <div className="absolute bottom-0 left-0 w-full bg-emerald-500 transition-all duration-500" style={{ height: i > 5 ? '100%' : '30%' }} />
        </motion.div>
      ))}
    </div>
  </div>
);

// --- Main Page ---

export function FeaturesPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate?: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  // Use global language context
  const { language, setLanguage } = useLanguage();
  // Fallback translation
  const t = (translations[language as keyof typeof translations]?.featuresPage) || translations.en.featuresPage || {
    hero: { title: "Features", subtitle: "Explore our capabilities" },
    bento: { title: "Overview", items: [] },
    deepDive: { strategy: {}, trends: {}, analytics: {} },
    cta: { title: "Start", button: "Go" }
  };

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      console.log('Navigate to:', page);
    }
  };

  // Get SEO config
  const seo = seoConfig.features[language as 'en' | 'zh'] || seoConfig.features.en;

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans selection:bg-emerald-500/30 text-gray-900 dark:text-white">
      {/* SEO Meta Tags */}
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={getCanonicalUrl('/features', language)}
        lang={language}
        alternates={generateAlternates('/features')}
      />
      
      <Navbar 
        onTrySample={() => handleNavigate('landing')} 
        onSignUp={() => handleNavigate('auth')}
        onNavigate={handleNavigate}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={(translations[language as keyof typeof translations] as any) || translations.en}
      />

      <main className="pt-[72px]">
        {/* Hero */}
        <section 
          className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-32 overflow-hidden"
          aria-label="Features overview - AI-powered TikTok strategy tools"
        >
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 tracking-tight">
                {t.hero.title}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 animate-gradient-x">
                  {t.hero.titleHighlight}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                {t.hero.subtitle}
              </p>
            </motion.div>
            

          </div>
        </section>

        {/* Bento Grid */}
        <section 
          className="px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-black/20"
          aria-label="Feature categories"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{t.bento.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t.bento.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BentoCard 
                title={t.bento.items[0]?.title || "Smart Goal Setting"} 
                desc={t.bento.items[0]?.desc || ""} 
                icon={Target} 
                delay={0.1}
                className="lg:col-span-2 bg-gradient-to-br from-emerald-50/50 to-white dark:from-emerald-900/10 dark:to-slate-900"
              />
              <BentoCard 
                title={t.bento.items[1]?.title || "Visual Roadmap"} 
                desc={t.bento.items[1]?.desc || ""} 
                icon={Map} 
                delay={0.2} 
              />
              <BentoCard 
                title={t.bento.items[2]?.title || "Script Gen"} 
                desc={t.bento.items[2]?.desc || ""} 
                icon={Sparkles} 
                delay={0.3} 
              />
              <BentoCard 
                title={t.bento.items[3]?.title || "Trend Radar"} 
                desc={t.bento.items[3]?.desc || ""} 
                icon={Zap} 
                delay={0.4} 
              />
              <BentoCard 
                title={t.bento.items[4]?.title || "Auto-Schedule"} 
                desc={t.bento.items[4]?.desc || ""} 
                icon={Calendar} 
                delay={0.5}
              />

            </div>
          </div>
        </section>

        {/* Deep Dive Sections */}
        <section 
          className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto space-y-24"
          aria-label="Detailed feature explanations"
        >
          <FeatureShowcase 
            title={t.deepDive.strategy.title}
            desc={t.deepDive.strategy.desc}
            badge={t.deepDive.strategy.badge}
            features={[t.deepDive.strategy.feature1, t.deepDive.strategy.feature2]}
            visual={<StrategyVisual />}
          />
          <FeatureShowcase 
            title={t.deepDive.trends.title}
            desc={t.deepDive.trends.desc}
            badge={t.deepDive.trends.badge}
            features={[t.deepDive.trends.feature1, t.deepDive.trends.feature2]}
            align="right"
            visual={<TrendsVisual />}
          />
          <FeatureShowcase 
            title={t.deepDive.analytics.title}
            desc={t.deepDive.analytics.desc}
            badge={t.deepDive.analytics.badge}
            features={[t.deepDive.analytics.feature1, t.deepDive.analytics.feature2]}
            visual={<AnalyticsVisual />}
          />
        </section>

        {/* CTA */}
        <section 
          className="px-4 sm:px-6 lg:px-8 pb-32"
          aria-label="Get started with OwlSeer features"
        >
          <div className="max-w-5xl mx-auto bg-[#111827] dark:bg-black rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white font-display mb-8 tracking-tight">
                {t.cta.title}
              </h2>
              <button 
                onClick={() => handleNavigate('auth')}
                className="px-12 py-6 bg-white text-black hover:bg-gray-100 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 mx-auto"
              >
                {t.cta.button} <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer t={(((translations[language as keyof typeof translations] as any) || translations.en) as any).footer} onNavigate={handleNavigate} />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { translations } from '../data/translations';
import { useLanguage } from '../contexts/LanguageContext';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Activity, 
  AlertCircle, 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  ChevronDown, 
  ChevronRight, 
  Clock, 
  Eye, 
  FileText, 
  HelpCircle, 
  Layout, 
  Lock, 
  Play, 
  Search, 
  Shield, 
  Sparkles, 
  TrendingUp, 
  Zap 
} from 'lucide-react';

// --- Components ---

const VideoDiagnosisTool = ({ t }: { t: any }) => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'complete'>('idle');
  
  const handleAnalyze = () => {
    if (!url) return;
    setStatus('analyzing');
    setTimeout(() => {
      setStatus('complete');
    }, 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-xl max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t.conversion.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{t.conversion.desc}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={t.conversion.placeholder}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-slate-600 rounded-lg leading-5 bg-white dark:bg-slate-700 placeholder-gray-500 focus:outline-none focus:ring-[#1AAE82] focus:border-[#1AAE82] sm:text-sm transition-colors"
          />
        </div>
        <button
          onClick={handleAnalyze}
          disabled={status === 'analyzing' || !url}
          className="px-6 py-3 bg-[#1AAE82] hover:bg-[#15956F] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
        >
          {status === 'analyzing' ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              {t.conversion.button}
            </>
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {status === 'complete' ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-700 pb-4">
              <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                {t.conversion.resultTitle}
              </h4>
              <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded">Sample Data</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: t.conversion.signals.hook, value: "Low (12%)", status: "bad" },
                { label: t.conversion.signals.pacing, value: "Good (85)", status: "good" },
                { label: t.conversion.signals.structure, value: "Fair (60)", status: "warning" }
              ].map((signal, i) => (
                <div key={i} className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-xl text-center">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{signal.label}</div>
                  <div className={`font-bold ${
                    signal.status === 'good' ? 'text-green-500' : 
                    signal.status === 'bad' ? 'text-red-500' : 'text-yellow-500'
                  }`}>
                    {signal.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30 flex items-start gap-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-2">
                  Unlock 9 more signals + detailed fixes
                </p>
                <Link to="/auth" className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md font-bold transition-colors inline-block">
                  {t.conversion.cta}
                </Link>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-3 gap-4 opacity-50 pointer-events-none blur-[2px]"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-xl text-center h-20 border-2 border-dashed border-gray-200 dark:border-slate-600"></div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-6">
        {t.conversion.note}
      </p>
    </div>
  );
};

const DiagnosisCard = ({ title, severity, why, fix, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
    >
      <div className={`absolute top-0 left-0 w-1 h-full ${severity === 'HIGH' ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
      <div className="flex items-start justify-between mb-4">
        <h4 className="font-bold text-lg text-gray-900 dark:text-white">{title}</h4>
        <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${
          severity === 'HIGH' 
            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 animate-pulse' 
            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
        }`}>
          {severity}
        </span>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
            <AlertCircle className="w-3 h-3" /> Issue
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{why}</p>
        </div>
        
        <div className="pt-4 border-t border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-2 text-xs font-bold text-[#1AAE82] uppercase tracking-wide mb-1">
            <Check className="w-3 h-3" /> Fix
          </div>
          <p className="text-sm text-gray-900 dark:text-white font-medium">{fix}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const ContentDiagnosisPage = ({ isDarkMode, setIsDarkMode }: any) => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const t = translations[language]?.contentDiagnosisPage || translations.en.contentDiagnosisPage;
  const navT = translations[language] || translations.en;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 selection:bg-[#1AAE82] selection:text-white overflow-x-hidden">
      <Navbar 
        onTrySample={() => navigate('/sample-explorer')}
        onSignUp={() => navigate('/auth')}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={navT}
      />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#1AAE82] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight font-display leading-[1.1]">
              {t.hero.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1AAE82] to-[#2DD4BF]">
                {t.hero.titleHighlight}
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t.hero.lead}
            </p>
            
            {/* TL;DR Box */}
            <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-xl border border-gray-100 dark:border-slate-700 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">TL;DR</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.tldr.text}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[t.tldr.link1, t.tldr.link2, t.tldr.link3].map((link, i) => (
                  <span key={i} className="text-xs bg-white dark:bg-slate-700 px-2 py-1 rounded border border-gray-200 dark:border-slate-600 text-gray-500 dark:text-gray-400">
                    {link}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hero Visual: Scanning Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[9/16] max-w-xs mx-auto bg-gray-900 rounded-[2rem] border-8 border-gray-200 dark:border-slate-800 shadow-2xl overflow-hidden relative group">
              {/* Simulated Video Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Play className="w-16 h-16 text-white fill-current" />
                </div>
                {/* Video UI Elements */}
                <div className="absolute bottom-8 right-4 space-y-4">
                  <div className="w-10 h-10 bg-gray-700/50 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-700/50 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-700/50 rounded-full"></div>
                </div>
                <div className="absolute bottom-8 left-4 w-48 space-y-2">
                  <div className="h-3 bg-gray-700/50 rounded w-32"></div>
                  <div className="h-3 bg-gray-700/50 rounded w-24"></div>
                </div>
              </div>

              {/* Scanning Line */}
              <motion.div
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-[#1AAE82] shadow-[0_0_20px_rgba(26,174,130,0.8)] z-10"
              />

              {/* Issue Popups */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, times: [0.1, 0.2, 0.8, 0.9] }}
                className="absolute top-[20%] left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20 flex items-center gap-2"
              >
                <AlertCircle className="w-3 h-3 fill-current text-white" /> Weak Hook
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, times: [0.4, 0.5, 0.8, 0.9], delay: 1 }}
                className="absolute top-[60%] right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20 flex items-center gap-2"
              >
                <Clock className="w-3 h-3" /> Pacing Issue
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section: Guessing vs Data */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50 border-y border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-display">{t.problem.title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t.problem.desc1}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 opacity-70 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-8 h-8 text-gray-400" />
                <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400">Guessing</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
                  <span className="text-2xl leading-none opacity-50">?</span>
                  <span>"Maybe the topic was wrong..."</span>
                </li>
                <li className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
                  <span className="text-2xl leading-none opacity-50">?</span>
                  <span>"Maybe I posted at a bad time..."</span>
                </li>
                <li className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
                  <span className="text-2xl leading-none opacity-50">?</span>
                  <span>"Maybe the algorithm hates me..."</span>
                </li>
              </ul>
            </div>

            {/* The OwlSeer Way */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-[#1AAE82] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#1AAE82] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                OWLSEER WAY
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Search className="w-8 h-8 text-[#1AAE82]" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Diagnosis</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1AAE82] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white font-medium">Hook failed at 0:02 (12% retention)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1AAE82] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white font-medium">Posted 3h before audience peak</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1AAE82] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white font-medium">Topic has high niche momentum</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/signals" className="inline-flex items-center text-[#1AAE82] font-bold hover:underline">
              {t.problem.action} <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solution: 3 Layers */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-display">{t.solution.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{t.solution.task}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 dark:bg-slate-800 -z-10"></div>

            {[
              { icon: AlertCircle, layer: t.solution.layer1 },
              { icon: Activity, layer: t.solution.layer2 },
              { icon: CheckCircle2, layer: t.solution.layer3 }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm text-center"
              >
                <div className="w-16 h-16 mx-auto bg-gray-50 dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-slate-600">
                  <item.icon className="w-8 h-8 text-[#1AAE82]" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{item.layer.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.layer.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30 flex items-start gap-4 max-w-3xl mx-auto">
            <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                {t.solution.structure}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 font-display text-center">{t.evidence.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <DiagnosisCard 
              title={t.evidence.issue1.title}
              severity={t.evidence.issue1.severity}
              why={t.evidence.issue1.why}
              fix={t.evidence.issue1.fix}
              delay={0}
            />
            <DiagnosisCard 
              title={t.evidence.issue2.title}
              severity={t.evidence.issue2.severity}
              why={t.evidence.issue2.why}
              fix={t.evidence.issue2.fix}
              delay={0.2}
            />
          </div>

          {/* Conversion Tool */}
          <VideoDiagnosisTool t={t} />
        </div>
      </section>

      {/* Boundary & CTA */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Boundary Box */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-sm mb-20">
             <div className="grid md:grid-cols-2 gap-8">
               <div>
                 <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                   <Shield className="w-5 h-5 text-green-500" /> Data we use
                 </h4>
                 <p className="text-sm text-gray-600 dark:text-gray-400">{t.boundary.dataUse}</p>
               </div>
               <div>
                 <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                   <Lock className="w-5 h-5 text-red-500" /> What we don't do
                 </h4>
                 <p className="text-sm text-gray-600 dark:text-gray-400">{t.boundary.limitations}</p>
               </div>
             </div>
             <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-700 text-xs text-gray-500 dark:text-gray-500 italic">
               {t.boundary.note}
             </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display">{t.cta.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">{t.cta.desc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth" className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                {t.cta.primary}
              </Link>
              <Link to="/sample-explorer" className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-all">
                {t.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer t={navT} onNavigate={(page) => navigate(page)} />
    </div>
  );
};

export default ContentDiagnosisPage;

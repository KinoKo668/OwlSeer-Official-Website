import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts';
import { motion, useInView } from 'motion/react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { SEO } from '../SEO';
import { getCanonicalUrl, seoConfig, generateAlternates } from '../../data/seoConfig';
import { translations } from '../../data/translations';
import { AuroraBackground } from '../ui/aurora-background';
import { 
  ArrowRight, 
  Zap, 
  AlertCircle, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  TrendingUp, 
  Sparkles,
  Check,
  Lock
} from 'lucide-react';

const baseContentCreators = (translations.en as any).contentCreators;
const localizedContentCreators = {
  ja: {
    ...baseContentCreators,
    hero: { ...baseContentCreators.hero, title: "データで伸ばすTikTok成長", lead: "勘ではなくデータで投稿を最適化。トレンド・台本・投稿タイミングを一気通貫で提案します。", primaryCta: "無料トライアル開始", secondaryCta: "サンプルを見る" },
    tldr: "OwlSeerは、毎週の推奨テーマ・撮影可能な台本・最適投稿タイミングを提供し、継続的な成長を支援します。",
    painPoints: { ...baseContentCreators.painPoints, title: "よくある悩み", subtitle: "成長を止める3つのボトルネックを解消。" },
    solution: { ...baseContentCreators.solution, title: "OwlSeerの解決アプローチ", action: "サンプルで全機能を見る" },
    results: { ...baseContentCreators.results, title: "クリエイター成果" },
    features: { ...baseContentCreators.features, title: "利用できる機能" },
    boundary: { note: "利用データ：公開TikTok指標。行わないこと：代理投稿・フォロワー購入・不正なエンゲージメント操作。" },
    cta: { ...baseContentCreators.cta, title: "勘に頼る投稿を終わらせる", subtitle: "データドリブン戦略を今すぐ体験。", primary: "無料トライアル開始", secondary: "サンプルを見る" },
    miniTool: {
      ...baseContentCreators.miniTool,
      title: "次の投稿に対するOwlSeer提案を確認",
      subtitle: "TikTokユーザー名でライト版プレビューを取得。",
      button: { default: "おすすめを表示", loading: "分析中..." },
      result: { ...baseContentCreators.miniTool.result, trend: "トレンド一致", relevance: "一致スコア", topic: "推奨トピック", time: "最適投稿時間", cta: "完全版プランを見る" }
    },
    ui: { badge: "クリエイター向け", coreInsight: "コアインサイト", problemLabel: "課題", viewSolution: "解決策を見る", owlseerFix: "OwlSeerの解決", processing: "処理中...", reset: "リセット", trendDetected: "検出トレンド", matchScore: "一致スコア", recommendedTopic: "推奨トピック", bestPostTime: "最適投稿時間", localTime: "現地時間", trialIncluded: "★ 無料トライアルに含まれる機能", transparencyNote: "透明性に関する注記" }
  },
  ko: {
    ...baseContentCreators,
    hero: { ...baseContentCreators.hero, title: "데이터 기반 TikTok 성장", lead: "감이 아닌 데이터로 성장하세요. 트렌드·스크립트·게시 타이밍을 한 번에 제공합니다.", primaryCta: "무료 체험 시작", secondaryCta: "샘플 보기" },
    tldr: "OwlSeer는 주간 추천 주제, 촬영 가능한 스크립트, 맞춤 게시 시간대로 꾸준한 성장을 돕습니다.",
    painPoints: { ...baseContentCreators.painPoints, title: "이런 고민, 익숙하신가요?", subtitle: "성장을 막는 핵심 병목을 해소하세요." },
    solution: { ...baseContentCreators.solution, title: "OwlSeer 해결 방식", action: "샘플에서 기능 보기" },
    results: { ...baseContentCreators.results, title: "크리에이터 성과" },
    features: { ...baseContentCreators.features, title: "포함 기능" },
    boundary: { note: "사용 데이터: 공개 TikTok 계정 지표. 미제공: 대리 게시, 팔로워 구매, 인위적 참여 조작." },
    cta: { ...baseContentCreators.cta, title: "이제 감으로 올리지 마세요", subtitle: "데이터 기반 전략을 바로 시작하세요.", primary: "무료 체험 시작", secondary: "샘플 보기" },
    miniTool: { ...baseContentCreators.miniTool, button: { default: "추천 보기", loading: "분석 중..." }, result: { ...baseContentCreators.miniTool.result, trend: "트렌드 매치", relevance: "매치 점수", topic: "추천 주제", time: "최적 게시 시간", cta: "전체 플랜 보기" } },
    ui: { badge: "크리에이터 전용", coreInsight: "핵심 인사이트", problemLabel: "문제", viewSolution: "해결 보기", owlseerFix: "OwlSeer 해결", processing: "처리 중...", reset: "초기화", trendDetected: "감지된 트렌드", matchScore: "매치 점수", recommendedTopic: "추천 주제", bestPostTime: "최적 게시 시간", localTime: "현지 시간", trialIncluded: "★ 무료 체험 포함 기능", transparencyNote: "투명성 안내" }
  },
  es: {
    ...baseContentCreators,
    hero: { ...baseContentCreators.hero, title: "Crecimiento TikTok basado en datos", lead: "Recibe guiones, tendencias y horarios optimizados para tu audiencia real.", primaryCta: "Iniciar prueba gratis", secondaryCta: "Ver muestra" },
    tldr: "OwlSeer entrega recomendaciones semanales, guiones listos y calendario personalizado para crecer con consistencia.",
    painPoints: { ...baseContentCreators.painPoints, title: "¿Te suena familiar?", subtitle: "Resuelve los cuellos de botella que frenan tu crecimiento." },
    solution: { ...baseContentCreators.solution, title: "Cómo lo resuelve OwlSeer", action: "Ver capacidades en muestra" },
    results: { ...baseContentCreators.results, title: "Resultados de creadores" },
    features: { ...baseContentCreators.features, title: "Todo lo que incluye" },
    cta: { ...baseContentCreators.cta, title: "Deja de adivinar", subtitle: "Pasa a una estrategia guiada por datos.", primary: "Iniciar prueba gratis", secondary: "Ver muestra" },
    miniTool: { ...baseContentCreators.miniTool, button: { default: "Mostrar recomendación", loading: "Analizando..." }, result: { ...baseContentCreators.miniTool.result, trend: "Coincidencia de tendencia", relevance: "Score de relevancia", topic: "Tema recomendado", time: "Mejor hora", cta: "Ver plan completo" } },
    ui: { badge: "Para creadores", coreInsight: "Insight clave", problemLabel: "Problema", viewSolution: "Ver solución", owlseerFix: "Solución OwlSeer", processing: "Procesando...", reset: "Reiniciar", trendDetected: "Tendencia detectada", matchScore: "Match score", recommendedTopic: "Tema recomendado", bestPostTime: "Mejor hora", localTime: "Hora local", trialIncluded: "★ Incluido en prueba gratuita", transparencyNote: "Nota de transparencia" }
  },
  fr: {
    ...baseContentCreators,
    hero: { ...baseContentCreators.hero, title: "Croissance TikTok pilotée par la data", lead: "Scripts, tendances et horaires optimisés selon votre audience réelle.", primaryCta: "Démarrer l’essai gratuit", secondaryCta: "Voir l’exemple" },
    tldr: "OwlSeer fournit recommandations hebdomadaires, scripts prêts à tourner et planning personnalisé.",
    painPoints: { ...baseContentCreators.painPoints, title: "Ça vous parle ?", subtitle: "Éliminez les freins qui ralentissent les créateurs solo." },
    solution: { ...baseContentCreators.solution, title: "Comment OwlSeer résout le problème", action: "Voir les capacités en sample" },
    results: { ...baseContentCreators.results, title: "Résultats créateurs" },
    features: { ...baseContentCreators.features, title: "Tout ce que vous obtenez" },
    cta: { ...baseContentCreators.cta, title: "Arrêtez de deviner", subtitle: "Passez à une stratégie data-driven.", primary: "Démarrer l’essai gratuit", secondary: "Voir l’exemple" },
    miniTool: { ...baseContentCreators.miniTool, button: { default: "Afficher la recommandation", loading: "Analyse..." }, result: { ...baseContentCreators.miniTool.result, trend: "Trend match", relevance: "Score de pertinence", topic: "Sujet recommandé", time: "Meilleur horaire", cta: "Voir le plan complet" } },
    ui: { badge: "Pour créateurs", coreInsight: "Insight clé", problemLabel: "Problème", viewSolution: "Voir la solution", owlseerFix: "Correctif OwlSeer", processing: "Traitement...", reset: "Réinitialiser", trendDetected: "Tendance détectée", matchScore: "Score de match", recommendedTopic: "Sujet recommandé", bestPostTime: "Meilleur horaire", localTime: "Heure locale", trialIncluded: "★ Inclus dans l’essai gratuit", transparencyNote: "Note de transparence" }
  },
  de: {
    ...baseContentCreators,
    hero: { ...baseContentCreators.hero, title: "Datengetriebenes TikTok-Wachstum", lead: "Erhalte trendbasierte Skripte und optimale Posting-Zeiten für deine Audience.", primaryCta: "Kostenlos testen", secondaryCta: "Sample ansehen" },
    tldr: "OwlSeer liefert wöchentliche Empfehlungen, drehfertige Skripte und einen personalisierten Publishing-Plan.",
    painPoints: { ...baseContentCreators.painPoints, title: "Kommt dir das bekannt vor?", subtitle: "Löse die Engpässe, die dein Wachstum ausbremsen." },
    solution: { ...baseContentCreators.solution, title: "So löst OwlSeer das", action: "Funktionen im Sample ansehen" },
    results: { ...baseContentCreators.results, title: "Creator-Ergebnisse" },
    features: { ...baseContentCreators.features, title: "Alles enthalten" },
    cta: { ...baseContentCreators.cta, title: "Hör auf zu raten", subtitle: "Setze auf datenbasierte Strategie.", primary: "Kostenlos testen", secondary: "Sample ansehen" },
    miniTool: { ...baseContentCreators.miniTool, button: { default: "Empfehlung anzeigen", loading: "Analysiere..." }, result: { ...baseContentCreators.miniTool.result, trend: "Trend-Match", relevance: "Relevanz-Score", topic: "Themenvorschlag", time: "Beste Posting-Zeit", cta: "Vollständigen Plan ansehen" } },
    ui: { badge: "Für Creator", coreInsight: "Kern-Insight", problemLabel: "Problem", viewSolution: "Lösung ansehen", owlseerFix: "OwlSeer-Fix", processing: "Verarbeitung...", reset: "Zurücksetzen", trendDetected: "Trend erkannt", matchScore: "Match-Score", recommendedTopic: "Empfohlenes Thema", bestPostTime: "Beste Posting-Zeit", localTime: "Lokale Zeit", trialIncluded: "★ Im kostenlosen Test enthalten", transparencyNote: "Transparenzhinweis" }
  }
};

// --- Components ---

// 1. Pain Point Card (High Fidelity Flip)
const PainPointCard = ({ title, desc, solutionTitle, solutionDesc, delay, ui }: { title: string, desc: string, solutionTitle: string, solutionDesc: string, delay: number, ui?: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  
  return (
    <div 
      ref={ref}
      className="relative w-full h-[360px] cursor-pointer group perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        className="relative w-full h-full transition-transform duration-700 preserve-3d"
        style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        
        {/* Front - Pain */}
        <div className="absolute inset-0 backface-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20 dark:border-slate-700/50 p-8 flex flex-col justify-between rounded-[2rem] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 text-red-500 shadow-sm">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-display mb-4 text-gray-900 dark:text-white leading-tight">"{title}"</h3>
            <p className="text-base font-medium text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/5 pt-6">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> {ui?.problemLabel || 'Problem'}
            </span>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1AAE82] group-hover:underline underline-offset-4">
              {ui?.viewSolution || 'View Solution'} <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Back - Solution */}
        <div 
          className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#1AAE82] to-[#059669] text-white p-8 flex flex-col justify-between rounded-[2rem] shadow-2xl"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 text-white backdrop-blur-sm">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-display mb-4">{solutionTitle}</h3>
            <p className="text-white/90 text-lg font-medium leading-relaxed">{solutionDesc}</p>
          </div>
          <div className="flex items-center justify-between border-t border-white/20 pt-6">
            <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> {ui?.owlseerFix || 'OwlSeer Fix'}
            </span>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

// 2. Count Up Stat
const CountUpStat = ({ target, suffix = "", label, subLabel }: { target: number, suffix?: string, label: string, subLabel?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
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
    <div ref={ref} className="p-8 rounded-[2rem] bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-100 dark:border-slate-700 text-center hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all group hover:-translate-y-1 duration-300 shadow-sm hover:shadow-xl">
      <div className="text-6xl md:text-7xl font-bold font-display mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1AAE82] to-[#2DD4BF] tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">{label}</div>
      {subLabel && <div className="text-sm font-medium text-gray-500 font-mono uppercase tracking-tight">{subLabel}</div>}
    </div>
  );
};

export function ContentCreatorsPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  const seo = seoConfig.contentCreators?.[language as 'en' | 'zh' | 'ja' | 'ko' | 'es' | 'fr' | 'de'] || seoConfig.contentCreators?.en;
  const content = (localizedContentCreators as any)[language] || (t as any).contentCreators || translations.en.contentCreators;

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };
  const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);
  const previewScenarios = [
    {
      label: 'Weekly Plan',
      confidence: '92%',
      speed: '< 3m',
      window: 'Mon 09:00',
      outputs: ['5-10 niche-fit topics generated', 'Each topic includes confidence + reason', 'Priority order based on opportunity score']
    },
    {
      label: 'Trend Radar',
      confidence: '94%',
      speed: 'Realtime',
      window: 'Next 6h',
      outputs: ['Rising signals detected before saturation', 'Velocity and competition scored', 'Recommended posting window highlighted']
    },
    {
      label: 'Script Builder',
      confidence: '89%',
      speed: '< 60s',
      window: 'Ready now',
      outputs: ['Hook + body + CTA in one draft', 'Format and hashtag suggestions included', 'Optimized for audience retention']
    },
    {
      label: 'Posting Cadence',
      confidence: '90%',
      speed: 'Weekly',
      window: 'Best slots',
      outputs: ['Balanced growth and consistency mix', 'Audience activity time blocks mapped', 'Clear weekly shoot and publish plan']
    }
  ];
  const activeScenario = previewScenarios[activeSolutionIndex] || previewScenarios[0];
  const activeSolutionItem = content.solution.items[activeSolutionIndex] || content.solution.items[0];

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans text-gray-900 dark:text-white selection:bg-[#1AAE82]/20 selection:text-[#1AAE82]">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={getCanonicalUrl('/solutions/content-creators', language)}
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

      <main className="pt-[72px] bg-white dark:bg-[#020617]">
        {/* Aurora Background */}
        <AuroraBackground 
          colorStops={isDarkMode ? ['#020617', '#1AAE82', '#020617'] : ['#FFFFFF', '#E0F2FE', '#FFFFFF']} 
          speed={0.5} 
          blend={0.4}
          baseColor={isDarkMode ? 0.0 : 1.0}
          className="absolute inset-0 z-0 opacity-40 pointer-events-none fixed"
        />

        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-40 overflow-hidden z-10">
           <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
             >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1AAE82]/10 text-[#1AAE82] text-sm font-bold uppercase tracking-widest mb-8 border border-[#1AAE82]/20 backdrop-blur-md">
                 <Sparkles className="w-4 h-4" /> 
                 <span className="opacity-90">{content.ui?.badge || 'For Creators'}</span>
               </div>
               
               <h1 className="text-6xl md:text-8xl font-bold font-display mb-8 leading-[1.1] tracking-tight text-gray-900 dark:text-white drop-shadow-sm">
                 {content.hero.title}
               </h1>
               <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-normal">
                 {content.hero.lead}
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button 
                   onClick={() => handleNavigate('auth')}
                   className="px-10 py-5 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold text-xl shadow-xl hover:shadow-[#1AAE82]/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                 >
                   {content.hero.primaryCta} <ArrowRight className="w-5 h-5" />
                 </button>
                 <button 
                   onClick={() => handleNavigate('landing')}
                   className="px-10 py-5 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 rounded-full font-bold text-xl transition-all shadow-sm hover:shadow-md"
                 >
                   {content.hero.secondaryCta}
                 </button>
               </div>
             </motion.div>
           </div>
        </section>

        {/* 2. CORE INSIGHT (Replaces TL;DR) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-32 -mt-20 relative z-20">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-white/50 dark:border-slate-700/50 ring-1 ring-black/5 flex flex-col md:flex-row gap-10 items-center text-center md:text-left">
             <div className="flex-1">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-[#1AAE82] rounded-full animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{content.ui?.coreInsight || 'Core Insight'}</span>
                </div>
                <p className="text-xl md:text-3xl text-gray-900 dark:text-white leading-relaxed font-display font-medium">
                  "{content.tldr}"
                </p>
             </div>
          </div>
        </section>

        {/* 3. PAIN POINTS */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 tracking-tight text-gray-900 dark:text-white">
                {content.painPoints.title}
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
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
                  ui={content.ui}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. SOLUTION */}
        <section className="py-32 relative z-10 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gray-50/50 dark:bg-slate-900/50 skew-y-3 transform origin-top-left scale-110 -z-10" />
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
                      onMouseEnter={() => setActiveSolutionIndex(idx)}
                      onFocus={() => setActiveSolutionIndex(idx)}
                      onClick={() => setActiveSolutionIndex(idx)}
                      className={`group cursor-pointer p-8 rounded-[2rem] border transition-all duration-300 hover:-translate-x-[-10px] ${
                        activeSolutionIndex === idx
                          ? 'bg-white dark:bg-slate-800 border-[#1AAE82]/40 shadow-xl shadow-[#1AAE82]/10'
                          : 'bg-white dark:bg-slate-800 border-gray-100 dark:border-slate-700 hover:shadow-xl hover:shadow-[#1AAE82]/5'
                      }`}
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#1AAE82]/10 flex items-center justify-center flex-shrink-0 text-[#1AAE82] group-hover:scale-110 transition-transform">
                          {idx === 0 ? <Calendar className="w-7 h-7" /> : 
                           idx === 1 ? <TrendingUp className="w-7 h-7" /> :
                           idx === 2 ? <FileText className="w-7 h-7" /> :
                           <Zap className="w-7 h-7" />}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h4>
                          <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-16">
                  <button
                    type="button"
                    onClick={() => handleNavigate('simulation')}
                    className="inline-flex items-center gap-3 font-bold uppercase tracking-widest text-sm text-[#1AAE82] hover:underline decoration-2 underline-offset-8 transition-all"
                  >
                    {content.solution.action} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="relative sticky top-24">
                <div className="bg-white/55 dark:bg-slate-800/40 backdrop-blur-md border border-white/50 dark:border-slate-700/50 p-4 rounded-[2.5rem] shadow-2xl">
                  <div className="bg-[#F6F7FB] dark:bg-slate-900 rounded-[2rem] border border-gray-200 dark:border-slate-800 relative p-6 md:p-7">
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#1AAE82]/10 to-transparent pointer-events-none" />
                    <div className="relative flex flex-col gap-3">
                      <div className="flex items-center justify-between mb-5">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-slate-800/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1AAE82] border border-[#1AAE82]/20">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#1AAE82]" />
                          Interactive Preview
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">{activeScenario.label}</span>
                      </div>

                      <div className="rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 p-4 shadow-sm">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{activeSolutionItem?.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{activeSolutionItem?.desc}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="rounded-xl bg-white/90 dark:bg-slate-800 px-3 py-2 border border-gray-100 dark:border-slate-700">
                          <div className="text-[10px] uppercase tracking-wider text-gray-500">Confidence</div>
                          <div className="text-sm font-bold text-[#1AAE82]">{activeScenario.confidence}</div>
                        </div>
                        <div className="rounded-xl bg-white/90 dark:bg-slate-800 px-3 py-2 border border-gray-100 dark:border-slate-700">
                          <div className="text-[10px] uppercase tracking-wider text-gray-500">Speed</div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white">{activeScenario.speed}</div>
                        </div>
                        <div className="rounded-xl bg-white/90 dark:bg-slate-800 px-3 py-2 border border-gray-100 dark:border-slate-700">
                          <div className="text-[10px] uppercase tracking-wider text-gray-500">Window</div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white">{activeScenario.window}</div>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 p-4">
                        <ul className="space-y-2.5">
                          {activeScenario.outputs.map((line) => (
                            <li key={line} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <Check className="w-4 h-4 text-[#1AAE82] mt-0.5 shrink-0" />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-1 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => handleNavigate('simulation')}
                          className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 px-4 py-2 text-xs font-bold text-white hover:bg-[#1AAE82] transition-colors"
                        >
                          Open Sample <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleNavigate('auth')}
                          className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 dark:border-slate-600 bg-white/90 dark:bg-slate-800 px-4 py-2 text-xs font-bold text-gray-700 dark:text-gray-200 hover:border-[#1AAE82]/40 hover:text-[#1AAE82] transition-colors"
                        >
                          Start Free
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. RESULTS */}
        <section className="py-32 bg-gray-50 dark:bg-slate-900/50 border-y border-gray-100 dark:border-white/5 relative z-10">
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
            <p className="text-center text-xs font-mono text-gray-400 mt-16 max-w-2xl mx-auto uppercase tracking-wide">
              {content.results.disclaimer}
            </p>
          </div>
        </section>

        {/* 7. FEATURES CHECKLIST */}
        <section className="py-32 relative z-10">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-20 font-display uppercase tracking-widest text-gray-900 dark:text-white">{content.features.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
              {content.features.items.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-6 border-b border-gray-100 dark:border-slate-800 pb-6 group hover:border-[#1AAE82]/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#1AAE82]/10 flex items-center justify-center text-[#1AAE82] group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-xl text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-20 text-center">
              <div className="inline-block px-8 py-3 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-bold border border-blue-500/20 backdrop-blur-sm">
                {content.ui?.trialIncluded || '★ All included in Free Trial'}
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA */}
        <section className="py-32 relative overflow-hidden bg-[#111827]">
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1AAE82]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 p-8 mb-20 inline-block max-w-3xl mx-auto rounded-3xl">
              <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-gray-400 flex items-center justify-center gap-2">
                <Lock className="w-3 h-3" /> {content.ui?.transparencyNote || 'Transparency Note'}
              </h4>
              <p className="text-base leading-relaxed font-mono text-gray-300">
                {content.boundary.note}
              </p>
            </div>

            <h2 className="text-5xl md:text-8xl font-bold font-display mb-10 leading-[0.9] text-white">
              {content.cta.title}
            </h2>
            <p className="text-xl md:text-3xl font-light mb-16 max-w-3xl mx-auto text-gray-400 leading-relaxed">
              {content.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => handleNavigate('auth')}
                className="px-12 py-6 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-[#1AAE82]/40 transition-all hover:-translate-y-2"
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

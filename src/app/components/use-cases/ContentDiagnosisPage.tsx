import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  BarChart2, 
  Play, 
  Search, 
  Filter,
  Lock,
  Clock,
  ThumbsUp,
  MessageCircle,
  Share2,
  Eye,
  AlertCircle,
  Scan,
  Smartphone,
  Check
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations as globalTranslations } from '../../data/translations';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { SEO } from '../SEO';
import { getPageSEO, getCanonicalUrl, generateAlternates } from '../../data/seoConfig';
import { AuroraBackground } from '../ui/aurora-background';

// --- Translations ---
const pageTranslations = {
  en: {
    meta: {
      title: "TikTok Content Diagnosis with AI | OwlSeer",
      description: "Find out why your TikTok videos underperform. OwlSeer diagnoses content issues across 12 engagement signals and provides specific fixes."
    },
    hero: {
      title: "Find Out Why Your TikTok Content Underperforms",
      lead: "OwlSeer analyzes every video across 12 engagement signals to show exactly where you gain or lose your audience — and what to do about it.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Try Intelligence Sample"
    },
    tldr: {
      content: "Low views have a cause. OwlSeer's Intelligence module diagnoses content issues by analyzing 12 engagement signals including hook rate, watch-through rate, share rate, and comment sentiment. Each issue is surfaced with severity, explanation, and a specific recommended fix. Content diagnosis turns vague frustration into actionable improvement.",
      link: "Intelligence module"
    },
    problem: {
      title: "The Guessing Cycle",
      task: "Understand why creators repeat the same content mistakes.",
      desc1: "When a video underperforms, most creators default to guessing: \"Maybe the topic was wrong\" or \"Maybe I posted at a bad time.\" Without data, they change things randomly — sometimes fixing the wrong variable, sometimes making things worse.",
      desc2: "The pattern looks like this: post a video, see low views, change something, post again, see inconsistent results, change something else. This guessing cycle wastes content production effort and erodes confidence.",
      desc3: "The root cause is usually specific and fixable. It might be a weak hook (viewers scroll past in the first 2 seconds), a long intro (watch-through drops at the 8-second mark), or poor timing (posting when your audience is asleep). But without signal-level diagnosis, you cannot distinguish between these causes.",
      action: "Understand the signals involved — read about engagement signals."
    },
    solution: {
      title: "How OwlSeer Diagnoses Content",
      task: "See the diagnosis workflow from detection to fix.",
      layers: [
        {
          id: 1,
          title: "Issue Detection",
          desc: "The Issues Found panel scans your recent videos and flags problems with severity badges (High or Medium). Example: \"Weak Hook Performance\" (High) — \"Your video openings use slow intros. Viewers scroll away before seeing your content.\""
        },
        {
          id: 2,
          title: "Signal Breakdown",
          desc: "For each issue, OwlSeer shows which signals are involved. A weak hook issue links to your hook rate data with specific numbers — your current rate, your niche average, and the trend over your last 10 videos."
        },
        {
          id: 3,
          title: "Recommended Fix",
          desc: "Each issue includes a specific, actionable fix. Not \"improve your hooks\" but \"Try a 'Product-First' hook — show the finished result in the first second to grab attention.\" Fixes are drawn from patterns that work in your niche."
        }
      ],
      note: "The Content Structure Analysis adds another dimension: it reveals which video formats perform best for your account.",
      action: "See a diagnosis on sample data — open the Intelligence demo."
    },
    evidence: {
      title: "What a Diagnosis Looks Like",
      task: "See specific diagnosis output from a real account.",
      subtitle: "From the sample account:",
      issues: [
        {
          title: "Weak Hook Performance",
          severity: "HIGH",
          why: "Your video openings use slow intros like 'Hey everyone, today I'll show you...' Viewers scroll away before seeing your content.",
          fix: "Try 'Product-First' hook — show the finished dish in the first second to grab attention."
        },
        {
          title: "Suboptimal Posting Time",
          severity: "MEDIUM",
          why: "You consistently post at 2 PM when your audience peaks at 5-7 PM.",
          fix: "Shift posting to the 5-6 PM window. See your best-time heatmap for day-specific recommendations."
        }
      ],
      data: "Supporting data: Content Structure Analysis shows three-segment videos averaging 5.8% AER versus 4.1% for single-segment — a structural insight that feeds into script recommendations.",
      action: "See the full diagnostic view — explore the Dashboard."
    },
    conversion: {
      title: "Paste a TikTok link, check 3 signals",
      desc: "See your Hook Retention, Pacing Score, and Structure Score in 10 seconds.",
      placeholder: "Paste video link here...",
      button: "Diagnose My Content",
      note: "Free diagnosis of 3 signals. Connect account for full 12-signal analysis."
    },
    boundary: {
      title: "Boundary Box",
      data: "Data we use: Diagnosis draws from your video performance metrics, 12 engagement signals, posting history, and audience behavior data — all accessed through the TikTok API.",
      limit: "What we do not do: Diagnosis identifies patterns and suggests fixes, but does not guarantee that implementing fixes will produce specific results. Content performance is influenced by factors beyond signal data.",
      note: "Variability note: Diagnosis accuracy improves with more data. Accounts with fewer than 10 published videos may receive less specific diagnoses. All examples shown are from the sample account."
    },
    cta: {
      title: "Diagnose Your Content",
      desc: "Connect your account and find out exactly what to fix.",
      primary: "Start Free Trial",
      secondary: "Try Intelligence Sample"
    }
  },
  zh: {
    meta: {
      title: "TikTok 内容 AI 诊断 | OwlSeer",
      description: "找出你的 TikTok 视频表现不佳的原因。OwlSeer 通过 12 个互动信号诊断内容问题并提供具体修复建议。"
    },
    hero: {
      title: "找出你的 TikTok 内容表现不佳的原因",
      lead: "OwlSeer 通过 12 个互动信号分析每条视频，精确展示你在哪里获得或失去了受众——以及该怎么做。",
      ctaPrimary: "开始免费试用",
      ctaSecondary: "试用智能演示"
    },
    tldr: {
      content: "低播放量是有原因的。OwlSeer 的智能模块通过分析包括钩子率、完播率、分享率和评论情感在内的 12 个互动信号来诊断内容问题。每个问题都会显示严重性、解释和具体的推荐修复。内容诊断将模糊的挫败感转化为可操作的改进。",
      link: "智能模块"
    },
    problem: {
      title: "猜测循环",
      task: "了解为什么创作者会重复同样的内容错误。",
      desc1: "当视频表现不佳时，大多数创作者默认会猜测：“也许话题错了”或“也许我在错误的时间发布了。”没有数据，他们随机更改变量——有时修复了错误的变量，有时使情况变得更糟。",
      desc2: "模式是这样的：发布视频，看到低播放量，更改某些东西，再次发布，看到不一致的结果，更改其他东西。这种猜测循环浪费了内容制作精力并侵蚀了信心。",
      desc3: "根本原因通常是具体且可修复的。可能是弱钩子（观众在前 2 秒内滑过）、长介绍（完播率在 8 秒标记处下降）或糟糕的时机（在受众睡觉时发布）。但没有信号级诊断，你无法区分这些原因。",
      action: "了解涉及的信号 — 阅读关于互动信号。"
    },
    solution: {
      title: "OwlSeer 如何诊断内容",
      task: "查看从检测到修复的诊断工作流。",
      layers: [
        {
          id: 1,
          title: "问题检测",
          desc: "“发现问题”面板扫描你最近的视频并用严重性徽章（高或中）标记问题。示例：“弱钩子表现”（高）——“你的视频开头使用了缓慢的介绍。观众在看到你的内容之前就滑走了。”"
        },
        {
          id: 2,
          title: "信号分解",
          desc: "对于每个问题，OwlSeer 会显示涉及哪些信号。弱钩子问题链接到你的钩子率数据，并附有具体数字——你当前的比率、你的利基平均值以及你过去 10 个视频的趋势。"
        },
        {
          id: 3,
          title: "推荐修复",
          desc: "每个问题都包括一个具体的、可操作的修复建议。不是“改进你的钩子”，而是“尝试‘产品优先’钩子——在第一秒展示完成的结果以吸引注意力。”修复建议来自在你利基中有效的模式。"
        }
      ],
      note: "内容结构分析增加了另一个维度：它揭示了哪种视频格式对你的账号表现最好。",
      action: "在样本数据上查看诊断 — 打开智能演示。"
    },
    evidence: {
      title: "诊断长什么样",
      task: "查看来自真实账号的具体诊断输出。",
      subtitle: "来自示例账号：",
      issues: [
        {
          title: "弱钩子表现",
          severity: "高",
          why: "你的视频开头使用了缓慢的介绍，如‘大家好，今天我将向大家展示...’ 观众在看到你的内容之前就滑走了。",
          fix: "尝试‘产品优先’钩子 — 在第一秒展示完成的菜肴以吸引注意力。"
        },
        {
          title: "次优发布时间",
          severity: "中",
          why: "你一直在于下午 2 点发布，而你的受众高峰在下午 5-7 点。",
          fix: "将发布时间调整到下午 5-6 点窗口。查看你的最佳时间热力图以获取特定日期的建议。"
        }
      ],
      data: "支持数据：内容结构分析显示三段式视频平均 AER 为 5.8%，而单段式为 4.1%——这是一个输入到脚本建议中的结构性见解。",
      action: "查看完整诊断视图 — 探索仪表板。"
    },
    conversion: {
      title: "粘贴 TikTok 链接，检查 3 个信号",
      desc: "在 10 秒内查看你的钩子留存率、节奏评分和结构评分。",
      placeholder: "在此粘贴视频链接...",
      button: "诊断我的内容",
      note: "免费诊断 3 个信号。连接账号进行完整的 12 信号分析。"
    },
    boundary: {
      title: "边界框",
      data: "我们使用的数据：诊断来自你的视频表现指标、12 个互动信号、发布历史和受众行为数据——所有这些都通过 TikTok API 访问。",
      limit: "我们不做的：诊断识别模式并建议修复，但不保证实施修复会产生具体结果。内容表现受信号数据以外的因素影响。",
      note: "变异性说明：诊断准确性随数据增加而提高。发布少于 10 个视频的账号可能会收到不太具体的诊断。显示的所有示例均来自示例账号。"
    },
    cta: {
      title: "诊断你的内容",
      desc: "连接你的账号并找出确切需要修复的地方。",
      primary: "开始免费试用",
      secondary: "试用智能演示"
    }
  }
};

const localizedPageTranslations = {
  ...pageTranslations,
  ja: {
    ...pageTranslations.en,
    meta: {
      title: "TikTokコンテンツ診断（AI） | OwlSeer",
      description: "なぜ伸びないかを12シグナルで診断し、具体的な改善アクションを提示します。"
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "なぜTikTok動画が伸びないのかを特定",
      lead: "12のエンゲージメントシグナルで動画を診断し、どこで視聴者を失っているかを可視化します。",
      ctaPrimary: "無料トライアル開始",
      ctaSecondary: "診断サンプルを見る"
    },
    tldr: { ...pageTranslations.en.tldr, content: "低再生には原因があります。OwlSeerは12シグナルを分析して課題の重症度・理由・具体的修正案まで提示します。", link: "インテリジェンスモジュール" },
    problem: { ...pageTranslations.en.problem, title: "当てずっぽうの改善ループ" },
    solution: { ...pageTranslations.en.solution, title: "OwlSeerの診断フロー" },
    evidence: { ...pageTranslations.en.evidence, title: "実際の診断出力例" },
    conversion: { ...pageTranslations.en.conversion, title: "TikTokリンクで3シグナルを無料診断", button: "コンテンツを診断する" },
    boundary: { ...pageTranslations.en.boundary, title: "透明性ボックス" },
    cta: { ...pageTranslations.en.cta, title: "あなたのコンテンツを診断", desc: "アカウント連携で改善ポイントを即把握。", primary: "無料トライアル開始", secondary: "診断サンプルを見る" }
  },
  ko: {
    ...pageTranslations.en,
    meta: {
      title: "AI TikTok 콘텐츠 진단 | OwlSeer",
      description: "성과가 낮은 이유를 12개 신호로 진단하고 실행 가능한 수정안을 제공합니다."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "TikTok 콘텐츠가 부진한 이유를 찾으세요",
      lead: "12개 참여 신호로 영상별 문제 지점을 찾아 무엇을 고쳐야 하는지 명확히 제시합니다.",
      ctaPrimary: "무료 체험 시작",
      ctaSecondary: "진단 샘플 보기"
    },
    tldr: { ...pageTranslations.en.tldr, content: "낮은 조회수에는 원인이 있습니다. OwlSeer는 문제의 심각도, 원인, 구체적 수정안을 함께 제공합니다." },
    problem: { ...pageTranslations.en.problem, title: "추측 기반 개선 루프" },
    solution: { ...pageTranslations.en.solution, title: "OwlSeer 진단 방식" },
    evidence: { ...pageTranslations.en.evidence, title: "실제 진단 예시" },
    conversion: { ...pageTranslations.en.conversion, title: "링크 붙여넣고 3개 신호 무료 진단", button: "내 콘텐츠 진단" },
    boundary: { ...pageTranslations.en.boundary, title: "투명성 박스" },
    cta: { ...pageTranslations.en.cta, title: "콘텐츠 진단 시작", desc: "연결 후 어떤 부분을 고칠지 즉시 확인하세요.", primary: "무료 체험 시작", secondary: "진단 샘플 보기" }
  },
  es: {
    ...pageTranslations.en,
    meta: {
      title: "Diagnóstico de contenido TikTok con IA | OwlSeer",
      description: "Detecta por qué tus videos no rinden y recibe fixes concretos basados en 12 señales."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "Descubre por qué tu contenido TikTok rinde mal",
      lead: "OwlSeer analiza 12 señales de engagement para mostrarte exactamente qué corregir.",
      ctaPrimary: "Iniciar prueba gratis",
      ctaSecondary: "Ver muestra de diagnóstico"
    },
    tldr: { ...pageTranslations.en.tldr, content: "Las vistas bajas tienen causa. OwlSeer detecta problemas, los prioriza y te da acciones claras para mejorar." },
    problem: { ...pageTranslations.en.problem, title: "El ciclo de adivinar" },
    solution: { ...pageTranslations.en.solution, title: "Cómo diagnostica OwlSeer" },
    evidence: { ...pageTranslations.en.evidence, title: "Cómo se ve un diagnóstico real" },
    conversion: { ...pageTranslations.en.conversion, title: "Pega un link y revisa 3 señales", button: "Diagnosticar mi contenido" },
    boundary: { ...pageTranslations.en.boundary, title: "Marco de transparencia" },
    cta: { ...pageTranslations.en.cta, title: "Diagnostica tu contenido", desc: "Conecta tu cuenta y descubre qué corregir primero.", primary: "Iniciar prueba gratis", secondary: "Ver muestra de diagnóstico" }
  },
  fr: {
    ...pageTranslations.en,
    meta: {
      title: "Diagnostic de contenu TikTok par IA | OwlSeer",
      description: "Identifiez pourquoi vos vidéos sous-performent et obtenez des correctifs précis via 12 signaux."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "Identifiez pourquoi votre contenu TikTok sous-performe",
      lead: "OwlSeer analyse 12 signaux d’engagement pour montrer précisément quoi corriger.",
      ctaPrimary: "Démarrer l’essai gratuit",
      ctaSecondary: "Voir l’exemple diagnostic"
    },
    tldr: { ...pageTranslations.en.tldr, content: "Les faibles vues ont une cause. OwlSeer détecte les problèmes, les hiérarchise et propose des actions concrètes." },
    problem: { ...pageTranslations.en.problem, title: "Le cycle de l’approximation" },
    solution: { ...pageTranslations.en.solution, title: "Comment OwlSeer diagnostique" },
    evidence: { ...pageTranslations.en.evidence, title: "Exemple de diagnostic concret" },
    conversion: { ...pageTranslations.en.conversion, title: "Collez un lien TikTok, testez 3 signaux", button: "Diagnostiquer mon contenu" },
    boundary: { ...pageTranslations.en.boundary, title: "Cadre de transparence" },
    cta: { ...pageTranslations.en.cta, title: "Diagnostiquez votre contenu", desc: "Connectez votre compte et priorisez les correctifs.", primary: "Démarrer l’essai gratuit", secondary: "Voir l’exemple diagnostic" }
  },
  de: {
    ...pageTranslations.en,
    meta: {
      title: "TikTok Content-Diagnose mit KI | OwlSeer",
      description: "Finde heraus, warum Videos unterperformen, und erhalte konkrete Fixes auf Basis von 12 Signalen."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "Finde heraus, warum dein TikTok-Content nicht performt",
      lead: "OwlSeer analysiert 12 Engagement-Signale und zeigt dir präzise, was du verbessern solltest.",
      ctaPrimary: "Kostenlos testen",
      ctaSecondary: "Diagnose-Sample ansehen"
    },
    tldr: { ...pageTranslations.en.tldr, content: "Niedrige Views haben Ursachen. OwlSeer erkennt Probleme, bewertet Prioritäten und liefert konkrete Maßnahmen." },
    problem: { ...pageTranslations.en.problem, title: "Der Guessing-Loop" },
    solution: { ...pageTranslations.en.solution, title: "So diagnostiziert OwlSeer" },
    evidence: { ...pageTranslations.en.evidence, title: "So sieht eine echte Diagnose aus" },
    conversion: { ...pageTranslations.en.conversion, title: "TikTok-Link einfügen, 3 Signale prüfen", button: "Content diagnostizieren" },
    boundary: { ...pageTranslations.en.boundary, title: "Transparenz-Box" },
    cta: { ...pageTranslations.en.cta, title: "Diagnostiziere deinen Content", desc: "Verbinde dein Konto und finde die wichtigsten Fixes.", primary: "Kostenlos testen", secondary: "Diagnose-Sample ansehen" }
  }
};

// --- Components ---

const HighFidelityScan = () => {
  return (
    <div className="w-full h-[420px] bg-slate-900 rounded-[2.5rem] relative overflow-hidden border border-slate-800 shadow-2xl group">
      {/* Background Grid & Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/10 rounded-full blur-[80px]" />
      
      {/* Main Content Area */}
      <div className="absolute inset-4 md:inset-8 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1AAE82]/20 flex items-center justify-center text-[#1AAE82]">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Target Video</div>
              <div className="text-white font-mono text-sm">@user_video_092.mp4</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="px-2 py-1 bg-slate-800 rounded text-[10px] font-bold text-slate-400 uppercase tracking-wider border border-slate-700">
              HD 1080p
            </div>
            <div className="px-2 py-1 bg-slate-800 rounded text-[10px] font-bold text-slate-400 uppercase tracking-wider border border-slate-700">
              60 FPS
            </div>
          </div>
        </div>

        {/* Central Visualization */}
        <div className="flex-1 relative flex items-center justify-center">
           {/* Radar / Scan Effect */}
           <div className="relative w-64 h-64">
             <div className="absolute inset-0 border-2 border-[#1AAE82]/30 rounded-full animate-[spin_10s_linear_infinite]" />
             <div className="absolute inset-4 border border-dashed border-[#1AAE82]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
             <div className="absolute inset-0 rounded-full bg-[#1AAE82]/5 blur-xl animate-pulse" />
             
             {/* Center Icon */}
             <div className="absolute inset-0 flex items-center justify-center">
               <Activity className="w-12 h-12 text-[#1AAE82]" />
             </div>

             {/* Scanning Beam */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#1AAE82]/20 to-transparent w-full h-1/2 origin-bottom animate-[spin_4s_linear_infinite]" style={{borderBottom: '1px solid #1AAE82'}} />
             
             {/* Detected Points */}
             <motion.div 
               className="absolute top-10 right-10 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_red]"
               animate={{ opacity: [0, 1, 0] }}
               transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
             />
             <motion.div 
               className="absolute bottom-16 left-12 w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_10px_orange]"
               animate={{ opacity: [0, 1, 0] }}
               transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
             />
           </div>

           {/* Floating Info Cards */}
           <motion.div 
             className="absolute top-1/2 right-4 md:right-0 translate-x-0 md:translate-x-4 bg-slate-800/90 backdrop-blur border border-slate-700 p-3 rounded-xl shadow-xl flex items-center gap-3 w-48"
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 1 }}
           >
             <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500">
               <AlertCircle className="w-4 h-4" />
             </div>
             <div>
               <div className="text-[10px] text-slate-400 uppercase font-bold">Alert</div>
               <div className="text-white text-xs font-bold">Weak Hook Detected</div>
             </div>
           </motion.div>

           <motion.div 
             className="absolute bottom-10 left-0 -translate-x-4 bg-slate-800/90 backdrop-blur border border-slate-700 p-3 rounded-xl shadow-xl flex items-center gap-3 w-44"
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 1.5 }}
           >
             <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-500">
               <Clock className="w-4 h-4" />
             </div>
             <div>
               <div className="text-[10px] text-slate-400 uppercase font-bold">Warning</div>
               <div className="text-white text-xs font-bold">Pacing Dip (8s)</div>
             </div>
           </motion.div>
        </div>

        {/* Footer Metrics */}
        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-800 pt-6">
          {[
            { label: 'Signals', value: '12/12', color: 'text-[#1AAE82]' },
            { label: 'Score', value: '72', color: 'text-yellow-400' },
            { label: 'Status', value: 'Analyzing', color: 'text-blue-400' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{stat.label}</div>
              <div className={`font-mono text-lg font-bold ${stat.color}`}>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const IssueCard = ({ issue }: { issue: any }) => (
  <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-gray-200 dark:border-slate-800 p-8 shadow-sm hover:shadow-xl hover:shadow-[#1AAE82]/5 transition-all duration-300 group hover:-translate-y-1">
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-lg ${
          issue.severity === 'HIGH' || issue.severity === '高'
            ? 'bg-red-50 text-red-500 shadow-red-500/10 dark:bg-red-900/20'
            : 'bg-yellow-50 text-yellow-500 shadow-yellow-500/10 dark:bg-yellow-900/20'
        }`}>
          {issue.severity === 'HIGH' || issue.severity === '高' ? <AlertCircle /> : <AlertTriangle />}
        </div>
        <div>
           <h4 className="font-bold text-xl text-gray-900 dark:text-white leading-tight">{issue.title}</h4>
           <div className="flex items-center gap-2 mt-1">
             <div className={`w-1.5 h-1.5 rounded-full ${
               issue.severity === 'HIGH' || issue.severity === '高' ? 'bg-red-500' : 'bg-yellow-500'
             }`} />
             <span className={`text-xs font-bold uppercase tracking-wider ${
               issue.severity === 'HIGH' || issue.severity === '高' ? 'text-red-500' : 'text-yellow-500'
             }`}>
               {issue.severity} Priority
             </span>
           </div>
        </div>
      </div>
    </div>
    
    <div className="space-y-6">
      <div className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-gray-100 dark:border-slate-800">
        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
          <Search className="w-3 h-3" /> Analysis
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{issue.why}</p>
      </div>
      
      <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#1AAE82] before:rounded-full">
        <div className="text-xs font-bold text-[#1AAE82] uppercase tracking-wider mb-2 flex items-center gap-2">
          <Zap className="w-3 h-3" /> Recommended Fix
        </div>
        <p className="text-gray-900 dark:text-white font-bold text-lg leading-snug">{issue.fix}</p>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

export const ContentDiagnosisPage = ({ 
  onNavigate, 
  isDarkMode, 
  setIsDarkMode 
}: { 
  onNavigate: (page: string) => void, 
  isDarkMode: boolean, 
  setIsDarkMode: (isDark: boolean) => void 
}) => {
  const { language, setLanguage } = useLanguage();
  const t = (localizedPageTranslations as any)[language] || localizedPageTranslations.en;
  const globalT = globalTranslations[language] || globalTranslations.en;
  const canonicalPath = '/use-cases/content-diagnosis';
  const seo = getPageSEO('contentDiagnosis', language);

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans text-gray-900 dark:text-white selection:bg-[#1AAE82]/30 transition-colors duration-300">
      <SEO 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={getCanonicalUrl(canonicalPath, language)}
        alternates={generateAlternates(canonicalPath)}
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
        t={globalT} 
      />

      <main className="bg-white dark:bg-[#020617]">
        {/* Hero Section with Aurora Background */}
        <div className="relative overflow-hidden">
          <AuroraBackground 
            colorStops={isDarkMode ? ['#020617', '#1AAE82', '#020617'] : ['#FFFFFF', '#E0F2FE', '#FFFFFF']} 
            speed={0.3} 
            blend={0.5}
            baseColor={isDarkMode ? 0.0 : 1.0}
            className="absolute inset-0 z-0 opacity-40"
          />
          
          <section className="relative z-10 pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1AAE82]/10 text-[#1AAE82] text-sm font-bold uppercase tracking-widest mb-8 border border-[#1AAE82]/20 backdrop-blur-md">
                <Activity className="w-4 h-4" /> 
                <span className="opacity-90">Content Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-gray-900 dark:text-white font-display max-w-5xl mx-auto">
                {t.hero.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-normal opacity-90">
                {t.hero.lead}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <button 
                  onClick={() => onNavigate('/social/auth')}
                  className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold text-lg shadow-xl shadow-[#1AAE82]/20 hover:shadow-[#1AAE82]/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {t.hero.ctaPrimary} <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onNavigate('/social/simulation/intelligence')}
                  className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-full font-medium transition-all flex items-center justify-center gap-2 hover:border-gray-300 dark:hover:border-slate-600"
                >
                  <Play className="w-4 h-4" /> {t.hero.ctaSecondary}
                </button>
              </div>
            </motion.div>
          </section>
        </div>

        {/* Core Insight Section (Replaced TL;DR) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-32 -mt-10 relative z-20">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-white/50 dark:border-slate-700/50 ring-1 ring-black/5 flex flex-col md:flex-row gap-10 items-center text-center md:text-left">
             <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Core Insight</h3>
                <p className="text-xl md:text-2xl text-gray-900 dark:text-white leading-relaxed font-medium">
                  {t.tldr.content.split(t.tldr.link).map((part: string, i: number, arr: string[]) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <button 
                          onClick={() => onNavigate('/social/simulation/intelligence')}
                          className="text-[#1AAE82] text-[1em] font-bold hover:text-[#15956F] transition-colors inline-flex items-center gap-1 border-b-2 border-[#1AAE82]/30 hover:border-[#1AAE82] mx-1"
                        >
                          {t.tldr.link}
                        </button>
                      )}
                    </React.Fragment>
                  ))}
                </p>
             </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <HighFidelityScan />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-red-50 dark:bg-red-900/10 text-red-500 dark:text-red-400 rounded-2xl border border-red-100 dark:border-red-900/20">
                  <AlertTriangle className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">{t.problem.title}</h2>
                  <p className="text-[#1AAE82] font-medium mt-1">{t.problem.task}</p>
                </div>
              </div>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>{t.problem.desc1}</p>
                <p>{t.problem.desc2}</p>
                <p>{t.problem.desc3}</p>
                <button 
                  onClick={() => onNavigate('/social/signals')}
                  className="text-[#1AAE82] font-bold hover:text-[#15956F] flex items-center gap-2 mt-4 group transition-colors"
                >
                  {t.problem.action} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-gray-50 dark:bg-slate-900/50 py-32 mb-32 relative overflow-hidden">
          {/* Decorative lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-800 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-800 to-transparent" />

          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display">{t.solution.title}</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t.solution.task}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.solution.layers.map((layer: any, i: number) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-gray-200 dark:border-slate-800 shadow-xl relative overflow-hidden group hover:border-[#1AAE82] transition-colors duration-300">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <h1 className="text-8xl font-bold text-[#1AAE82] font-display">{layer.id}</h1>
                  </div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-[#1AAE82] mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {i === 0 && <Search className="w-6 h-6" />}
                    {i === 1 && <BarChart2 className="w-6 h-6" />}
                    {i === 2 && <CheckCircle2 className="w-6 h-6" />}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">{layer.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {layer.desc}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-6">
                {t.solution.note}
              </p>
              <button 
                onClick={() => onNavigate('/social/simulation/intelligence')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full font-bold text-[#1AAE82] hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
              >
                {t.solution.action} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Evidence Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <div className="flex flex-col md:flex-row items-start gap-16">
            <div className="flex-1">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">{t.evidence.title}</h2>
                <p className="text-[#1AAE82] font-medium text-lg">{t.evidence.task}</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium uppercase tracking-wider text-sm">{t.evidence.subtitle}</p>
              
              <div className="space-y-6">
                {t.evidence.issues.map((issue: any, i: number) => (
                  <IssueCard key={i} issue={issue} />
                ))}
              </div>
            </div>
            
            <div className="flex-1 sticky top-32">
              <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/5 rounded-full blur-[60px] pointer-events-none" />
                
                <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                  <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                    <BarChart2 className="w-5 h-5 text-[#1AAE82]" /> 
                  </div>
                  Impact Analysis
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                  {t.evidence.data}
                </p>
                
                {/* Enhanced Chart Visualization */}
                <div className="aspect-[16/9] bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm mb-8 flex items-end justify-around p-8 pb-0 overflow-hidden relative">
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
                   
                   {/* Bar 1 */}
                   <div className="w-20 bg-gray-200 dark:bg-slate-700 h-[40%] rounded-t-2xl relative group hover:h-[42%] transition-all duration-300">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold bg-gray-200 dark:bg-slate-700 px-2 py-1 rounded">4.1%</div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-500 uppercase tracking-wider">1-Seg</div>
                   </div>
                   
                   {/* Bar 2 (Hero) */}
                   <div className="w-20 bg-gradient-to-t from-[#1AAE82] to-emerald-400 h-[65%] rounded-t-2xl relative group shadow-[0_0_20px_rgba(26,174,130,0.3)] hover:h-[68%] transition-all duration-300">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-xl font-bold text-[#1AAE82] bg-white dark:bg-slate-900 px-3 py-1 rounded-lg shadow-lg">5.8%</div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white/90 uppercase tracking-wider">3-Seg</div>
                   </div>
                   
                   {/* Bar 3 */}
                   <div className="w-20 bg-gray-200 dark:bg-slate-700 h-[45%] rounded-t-2xl relative group hover:h-[47%] transition-all duration-300">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold bg-gray-200 dark:bg-slate-700 px-2 py-1 rounded">4.5%</div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-500 uppercase tracking-wider">2-Seg</div>
                   </div>
                </div>
                
                <button 
                  onClick={() => onNavigate('/social/simulation/dashboard')}
                  className="w-full py-4 bg-[#1AAE82] text-white rounded-xl font-bold hover:bg-[#15956F] transition-all shadow-lg shadow-[#1AAE82]/20 hover:shadow-[#1AAE82]/40 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  {t.evidence.action.split('—')[0]} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contextual Conversion (Mini Tool) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-32">
          <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[2.5rem] p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1AAE82]/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#1AAE82] mb-6 backdrop-blur-md border border-white/10">
                <Smartphone className="w-8 h-8" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display">{t.conversion.title}</h3>
              <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                {t.conversion.desc}
              </p>
              
              <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10 flex flex-col sm:flex-row gap-2 mb-8">
                <input 
                  type="text" 
                  placeholder={t.conversion.placeholder}
                  className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                />
                <button 
                  className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-[#1AAE82]/25"
                >
                  {t.conversion.button}
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 w-full max-w-2xl">
                {[
                  { label: 'Hook Rate', icon: <Eye className="w-4 h-4" /> },
                  { label: 'Pacing', icon: <Clock className="w-4 h-4" /> },
                  { label: 'Structure', icon: <BarChart2 className="w-4 h-4" /> }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-xl border border-white/5 py-4 flex flex-col items-center justify-center gap-2">
                    <div className="text-gray-500">{item.icon}</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.label}</div>
                  </div>
                ))}
              </div>
              
              <p className="text-xs text-gray-500 mt-8 flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-[#1AAE82]" /> {t.conversion.note}
              </p>
            </div>
          </div>
        </section>

        {/* Boundary Box */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-32">
          <div className="border border-gray-200 dark:border-slate-800 rounded-2xl p-8 bg-gray-50/50 dark:bg-slate-900/30 backdrop-blur-sm">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 text-lg">
              <Lock size={20} className="text-gray-400" /> {t.boundary.title}
            </h3>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p><strong className="text-gray-900 dark:text-gray-200">Data:</strong> {t.boundary.data.replace("Data we use:", "")}</p>
              <p><strong className="text-gray-900 dark:text-gray-200">Limitations:</strong> {t.boundary.limit.replace("What we do not do:", "")}</p>
              <p><strong className="text-gray-900 dark:text-gray-200">Note:</strong> {t.boundary.note.replace("Variability note:", "")}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight font-display">
            {t.cta.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto font-light">
            {t.cta.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={() => onNavigate('/social/auth')}
              className="px-10 py-5 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:shadow-[#1AAE82]/30 transition-all duration-300 hover:-translate-y-1"
            >
              {t.cta.primary}
            </button>
            <button 
              onClick={() => onNavigate('/social/simulation/intelligence')}
              className="px-10 py-5 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-full font-medium text-xl transition-all hover:shadow-lg"
            >
              {t.cta.secondary}
            </button>
          </div>
        </section>
      </main>

      <Footer t={globalT.footer} onNavigate={onNavigate} />
    </div>
  );
};

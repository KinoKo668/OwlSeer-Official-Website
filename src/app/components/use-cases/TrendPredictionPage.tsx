import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  BarChart2, 
  Play, 
  Search, 
  Filter,
  Lock,
  Calendar,
  Eye,
  Hash,
  Sparkles,
  Activity,
  MousePointer2
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
      title: "Predict TikTok Trends with AI | OwlSeer",
      description: "Spot rising TikTok trends before they peak. OwlSeer's Trend Radar scores hashtags and sounds by velocity, competition, and match to your niche."
    },
    hero: {
      title: "AI-Powered TikTok Trend Prediction: Catch the Next Viral Hit Before It Peaks",
      lead: "Stop guessing. OwlSeer's AI analyzes 50M+ videos to predict viral velocity and saturation—giving you the precise 72-hour window to post for maximum growth.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Try Trend Radar Sample"
    },
    tldr: {
      content: "Most creators spot TikTok trends after they have already peaked. OwlSeer's Trend Radar detects emerging hashtags, sounds, and formats in your niche before saturation. Each trend shows a velocity score, competition level, match percentage, and days-until-peak estimate. You can generate a script from any trend with one click.",
      link: "Trend Radar"
    },
    problem: {
      title: "The Trend Timing Problem",
      task: "Understand why acting on trends at the right time matters more than acting at all.",
      desc1: "Trends on TikTok follow a predictable lifecycle: emergence, acceleration, peak, and decline. The participation window — the period when joining a trend still yields strong distribution — is narrow. Post too early and you lack audience; post too late and you compete with thousands.",
      desc2: "Most creators rely on three unreliable methods: scrolling the For You Page, following trend accounts, or waiting for trending sounds to appear in TikTok's sound library. All three have a built-in delay — by the time trends are visible through these channels, the peak is already close.",
      cost: "The cost of poor timing is real. A tech reviewer who posts a trending sound one day late may see 60% fewer views than an identical video posted the day before.",
      action: "See how timing affects distribution — read about trend saturation."
    },
    solution: {
      title: "How OwlSeer Solves This",
      task: "See the three-step workflow for trend-driven content creation.",
      steps: [
        {
          id: 1,
          title: "Detect",
          desc: "Trend Radar scans TikTok for emerging trends and filters them to your niche using category filters. Trends are scored by velocity (how fast they are growing), competition level (how crowded they are), and match score (how well they fit your account)."
        },
        {
          id: 2,
          title: "Evaluate",
          desc: "Each trend card shows you everything you need to decide: growth percentage, days remaining, post count, total views, and a sparkline trajectory chart. Trends marked \"Recommended\" have strong signals across all dimensions. Trends marked \"Caution\" have risk factors."
        },
        {
          id: 3,
          title: "Act",
          desc: "Click \"Generate\" on any trend card to create a ready-to-shoot script in under 60 seconds. The script includes a hook tailored to the trend, body content matched to your style, a CTA, and recommended sounds and hashtags."
        }
      ],
      note: "This workflow compresses trend research, evaluation, and script creation into a single session — typically under 10 minutes.",
      action: "Try the trend-to-script workflow on sample data — open Trend Radar."
    },
    evidence: {
      title: "What Trend Data Looks Like",
      task: "See specific examples of trend scoring from a real account.",
      subtitle: "From the sample account (tech review niche):",
      items: [
        {
          tag: "#TechUnboxing2025",
          match: 94,
          velocity: "+65%",
          posts: "12.5K",
          views: "45M",
          daysLeft: 8,
          competition: "Low",
          status: "Recommended"
        },
        {
          tag: "#AIGadgetReview",
          match: 84,
          velocity: "+24%",
          posts: "8.3K",
          views: "28M",
          daysLeft: 8,
          competition: "Low",
          status: "Recommended"
        },
        {
          tag: "#WinterTech",
          match: 73,
          velocity: "+36%",
          posts: "18.2K",
          views: "52M",
          daysLeft: 8,
          competition: "Medium",
          status: "Caution"
        }
      ],
      analysis: "The data reveals: #TechUnboxing2025 is the best opportunity — high match, strong velocity, and low competition. #WinterTech has more volume but higher competition and lower match, making it riskier.",
      comparison: "This is the kind of analysis that takes an hour manually and three seconds with Trend Radar.",
      action: "Explore the full trend list — see all trends in the demo."
    },
    conversion: {
      title: "In your niche, right now...",
      stat1: "{{rising}} trends are accelerating",
      stat2: "{{expiring}} will peak in 48h",
      desc: "Connect your account to see which ones match your content best.",
      button: "See My Matched Trends",
      note: "Free trial, no credit card required"
    },
    boundary: {
      title: "Boundary Box",
      data: "Data we use: Publicly available TikTok trend data (hashtag volume, sound usage, format adoption) combined with your account's signal profile for match scoring.",
      limit: "What we do not do: OwlSeer does not guarantee trend predictions. Trends can accelerate, stall, or reverse unpredictably. Velocity scores are based on recent data and do not account for external events.",
      note: "Variability note: Trend timing varies by niche. A trend that peaks in 3 days for comedy may last 2 weeks for education. Match scores depend on your content history — new accounts with limited data may see less accurate scores initially."
    },
    cta: {
      title: "Catch Your Next Trend",
      desc: "Connect your account and see trends personalized to your niche. Or explore the demo.",
      primary: "Start Free Trial",
      secondary: "Try Trend Radar Sample"
    }
  },
  zh: {
    meta: {
      title: "在 TikTok 趋势达到顶峰前预测它们 | OwlSeer",
      description: "OwlSeer 的趋势雷达按速度、竞争度和个人相关性评分，帮助你在窗口期内捕捉新兴趋势。"
    },
    hero: {
      title: "AI 驱动的 TikTok 趋势预测引擎：在红利期结束前锁定下一个爆款",
      lead: "停止猜测。OwlSeer 的 AI 深度分析 5000 万+ 视频数据，精准计算病毒式传播速度与饱和度——为您锁定最佳的 72 小时黄金发布窗口。",
      ctaPrimary: "开始免费试用",
      ctaSecondary: "试用趋势雷达演示"
    },
    tldr: {
      content: "大多数创作者在 TikTok 趋势达到顶峰后才发现它们。OwlSeer 的趋势雷达在饱和前检测你利基中的新兴标签、声音和格式。每个趋势都显示速度评分、竞争水平、匹配百分比和预计达到顶峰的天数。你可以一键从任何趋势生成脚本。",
      link: "趋势雷达"
    },
    problem: {
      title: "趋势时机问题",
      task: "了解为什么在正确的时间对趋势采取行动比采取行动更重要。",
      desc1: "TikTok 趋势遵循可预测的生命周期：萌芽、加速、高峰和下降。参与窗口——加入趋势仍能获得强分发的时段——很窄。发布太早你缺乏受众；发布太晚你将与成千上万人竞争。",
      desc2: "大多数创作者依赖三种不可靠的方法：刷推荐页、关注趋势账号、或等待音频出现在 TikTok 音频库中。这三种都有内在延迟——当趋势通过这些渠道可见时，高峰已经临近。",
      cost: "时机不佳的代价是真实的。一个科技评论员如果晚一天发布热门音频视频，可能会比前一天发布的相同视频少获得 60% 的观看量。",
      action: "查看时机如何影响分发 — 阅读关于趋势饱和。"
    },
    solution: {
      title: "OwlSeer 如何解决这个问题",
      task: "查看趋势驱动内容创作的三步工作流。",
      steps: [
        {
          id: 1,
          title: "检测",
          desc: "趋势雷达扫描 TikTok 寻找新兴趋势，并使用类别过滤器将其过滤到你的利基。趋势按速度（增长多快）、竞争水平（多拥挤）和匹配分数（多适合你的账号）评分。"
        },
        {
          id: 2,
          title: "评估",
          desc: "每张趋势卡片都显示你需要决定的一切：增长百分比、剩余天数、帖子数、总观看量和迷你轨迹图。标记为“推荐”的趋势在所有维度上都有强信号。标记为“谨慎”的趋势有风险因素。"
        },
        {
          id: 3,
          title: "行动",
          desc: "点击任何趋势卡片上的“生成”即可在 60 秒内创建一个准备好拍摄的脚本。脚本包括针对趋势定制的钩子、匹配你风格的正文内容、CTA 以及推荐的声音和标签。"
        }
      ],
      note: "此工作流将趋势研究、评估和脚本创建压缩到一个会话中——通常不到 10 分钟。",
      action: "在样本数据上尝试趋势转脚本工作流 — 打开趋势雷达。"
    },
    evidence: {
      title: "趋势数据长什么样",
      task: "查看来自真实账号的具体趋势评分示例。",
      subtitle: "来自示例账号（科技评论利基）：",
      items: [
        {
          tag: "#TechUnboxing2025",
          match: 94,
          velocity: "+65%",
          posts: "12.5K",
          views: "45M",
          daysLeft: 8,
          competition: "低",
          status: "推荐"
        },
        {
          tag: "#AIGadgetReview",
          match: 84,
          velocity: "+24%",
          posts: "8.3K",
          views: "28M",
          daysLeft: 8,
          competition: "低",
          status: "推荐"
        },
        {
          tag: "#WinterTech",
          match: 73,
          velocity: "+36%",
          posts: "18.2K",
          views: "52M",
          daysLeft: 8,
          competition: "中",
          status: "谨慎"
        }
      ],
      analysis: "数据显示：#TechUnboxing2025 是最佳机会——高匹配、强速度和低竞争。#WinterTech 尽管量更大，但竞争更激烈且匹配度较低，因此风险更大。",
      comparison: "这是一种手动需要一小时，而用趋势雷达只需三秒钟的分析。",
      action: "探索完整趋势列表 — 在演示中查看所有趋势。"
    },
    conversion: {
      title: "在你的利基中，此刻...",
      stat1: "{{rising}} 个趋势正在加速",
      stat2: "{{expiring}} 个将在 48 小时内到达顶峰",
      desc: "连接你的账号，看看哪些与你的内容匹配度最高。",
      button: "查看我的匹配趋势",
      note: "免费试用，无需信用卡"
    },
    boundary: {
      title: "边界框",
      data: "我们使用的数据：公开可用的 TikTok 趋势数据（标签量、声音使用、格式采用）结合你的账号信号资料进行匹配评分。",
      limit: "我们不做的：OwlSeer 不保证趋势预测。趋势可能会不可预测地加速、停滞或逆转。速度分数基于近期数据，不考虑外部事件。",
      note: "变异性说明：趋势时机因利基而异。在喜剧领域 3 天达到顶峰的趋势在教育领域可能会持续 2 周。匹配分数取决于你的内容历史——数据有限的新账号最初可能会看到不太准确的分数。"
    },
    cta: {
      title: "捕捉你的下一个趋势",
      desc: "连接你的账号并查看为你利基个性化的趋势。或者探索演示。",
      primary: "开始免费试用",
      secondary: "试用趋势雷达演示"
    }
  }
};

const localizedPageTranslations = {
  ...pageTranslations,
  en: {
    ...pageTranslations.en,
    ui: {
      badgeTrendRadar: "Trend Radar 2.0",
      coreInsight: "Core Insight",
      costOfDelay: "The Cost of Delay",
      timelineDays: ["Day 1", "Day 7", "Day 14", "Day 30"],
      scanTitle: "Scanning 50M+ Videos...",
      scanSubtitle: "Detecting viral patterns in real-time",
      scanTags: ["Tech", "Gadgets", "AI Tools"],
      ready: "Ready",
      output: "Output",
      outputVersion: "Viral Script V1",
      hookLabel: "Hook (0-3s)",
      bodyLabel: "Body",
      analysisTitle: "AI Analysis",
      boundaryData: "Data",
      boundaryLimitations: "Limitations",
      boundaryNote: "Note",
      lifecyclePhases: ["Emergence", "Acceleration", "Peak", "Decline"],
      optimalWindow: "Optimal 72h Window",
      matchScore: "Match Score",
      velocity: "Velocity",
      views: "Views",
      daysLeft: "Days Left",
      generateScript: "Generate Script",
      liveAnalysis: "Live Analysis",
      risingTrends: "Rising Trends",
      expiringSoon: "Expiring Soon"
    }
  },
  zh: {
    ...pageTranslations.zh,
    ui: {
      badgeTrendRadar: "趋势雷达 2.0",
      coreInsight: "核心洞察",
      costOfDelay: "延迟成本",
      timelineDays: ["第1天", "第7天", "第14天", "第30天"],
      scanTitle: "扫描 5000 万+ 视频中...",
      scanSubtitle: "实时识别病毒式传播模式",
      scanTags: ["科技", "数码", "AI 工具"],
      ready: "已就绪",
      output: "输出",
      outputVersion: "爆款脚本 V1",
      hookLabel: "钩子 (0-3秒)",
      bodyLabel: "正文",
      analysisTitle: "AI 分析",
      boundaryData: "数据",
      boundaryLimitations: "限制",
      boundaryNote: "说明",
      lifecyclePhases: ["萌芽期", "加速期", "峰值期", "衰退期"],
      optimalWindow: "最佳 72 小时窗口",
      matchScore: "匹配分",
      velocity: "增速",
      views: "观看量",
      daysLeft: "剩余天数",
      generateScript: "生成脚本",
      liveAnalysis: "实时分析",
      risingTrends: "上升趋势",
      expiringSoon: "即将过期"
    }
  },
  ja: {
    ...pageTranslations.en,
    meta: {
      title: "TikTokトレンド予測AI | OwlSeer",
      description: "TikTokトレンドをピーク前に検知。速度・競合・一致度で優先順位を判断。"
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "AIでTikTokトレンドを予測し、ピーク前に投稿",
      lead: "推測をやめてデータで判断。OwlSeerは50M+動画を解析し、最適な72時間を提示します。",
      ctaPrimary: "無料トライアル開始",
      ctaSecondary: "Trend Radarサンプルを見る"
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "トレンド投稿のタイミング課題",
      task: "投稿するかどうかより、いつ投稿するかが成果を左右します。"
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "OwlSeerの解決方法",
      task: "トレンド起点の制作フローを3ステップで確認。"
    },
    evidence: {
      ...pageTranslations.en.evidence,
      title: "トレンドデータの見え方",
      task: "実アカウントの例でスコア判断を確認。"
    },
    conversion: {
      ...pageTranslations.en.conversion,
      title: "あなたのニッチで今...",
      desc: "アカウントを連携して最適なトレンドを確認。",
      button: "一致トレンドを見る",
      note: "無料トライアル・カード不要"
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "透明性ボックス"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "次のトレンドを先取り",
      desc: "アカウント連携でニッチに合うトレンドを可視化。",
      primary: "無料トライアル開始",
      secondary: "Trend Radarサンプルを見る"
    },
    ui: {
      badgeTrendRadar: "Trend Radar 2.0",
      coreInsight: "コアインサイト",
      costOfDelay: "遅延コスト",
      timelineDays: ["1日目", "7日目", "14日目", "30日目"],
      scanTitle: "5000万本超の動画を解析中...",
      scanSubtitle: "バイラルパターンをリアルタイム検出",
      scanTags: ["テック", "ガジェット", "AIツール"],
      ready: "準備完了",
      output: "出力",
      outputVersion: "Viral Script V1",
      hookLabel: "フック (0-3秒)",
      bodyLabel: "本文",
      analysisTitle: "AI分析",
      boundaryData: "データ",
      boundaryLimitations: "制限事項",
      boundaryNote: "補足",
      lifecyclePhases: ["立ち上がり", "加速", "ピーク", "下降"],
      optimalWindow: "最適な72時間",
      matchScore: "一致スコア",
      velocity: "成長速度",
      views: "再生数",
      daysLeft: "残り日数",
      generateScript: "スクリプト生成",
      liveAnalysis: "ライブ分析",
      risingTrends: "上昇中トレンド",
      expiringSoon: "期限間近"
    }
  },
  ko: {
    ...pageTranslations.en,
    meta: {
      title: "TikTok 트렌드 예측 AI | OwlSeer",
      description: "TikTok 트렌드를 피크 전에 포착하세요. 속도, 경쟁도, 매치 점수로 우선순위를 정합니다."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "AI 기반 TikTok 트렌드 예측",
      lead: "추측 대신 데이터로 결정하세요. OwlSeer가 5천만+ 영상을 분석해 최적의 72시간을 제안합니다.",
      ctaPrimary: "무료 체험 시작",
      ctaSecondary: "Trend Radar 샘플 보기"
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "트렌드 타이밍 문제",
      task: "트렌드를 따라가는 것보다 타이밍이 더 중요합니다."
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "OwlSeer가 해결하는 방법",
      task: "트렌드 기반 콘텐츠 제작 3단계를 확인하세요."
    },
    evidence: {
      ...pageTranslations.en.evidence,
      title: "트렌드 데이터 예시",
      task: "실제 계정 기준 스코어 사례를 확인하세요."
    },
    conversion: {
      ...pageTranslations.en.conversion,
      title: "당신의 니치에서 지금...",
      desc: "계정을 연결해 매칭되는 트렌드를 확인하세요.",
      button: "내 매치 트렌드 보기",
      note: "무료 체험 · 카드 필요 없음"
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "투명성 박스"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "다음 트렌드를 먼저 잡으세요",
      desc: "계정 연결 후 니치 맞춤 트렌드를 확인하세요.",
      primary: "무료 체험 시작",
      secondary: "Trend Radar 샘플 보기"
    },
    ui: {
      badgeTrendRadar: "Trend Radar 2.0",
      coreInsight: "핵심 인사이트",
      costOfDelay: "지연 비용",
      timelineDays: ["1일", "7일", "14일", "30일"],
      scanTitle: "5천만+ 영상 스캔 중...",
      scanSubtitle: "바이럴 패턴을 실시간 감지",
      scanTags: ["테크", "가젯", "AI 도구"],
      ready: "준비 완료",
      output: "출력",
      outputVersion: "Viral Script V1",
      hookLabel: "훅 (0-3초)",
      bodyLabel: "본문",
      analysisTitle: "AI 분석",
      boundaryData: "데이터",
      boundaryLimitations: "제한사항",
      boundaryNote: "참고",
      lifecyclePhases: ["초기", "가속", "피크", "하락"],
      optimalWindow: "최적 72시간",
      matchScore: "매치 점수",
      velocity: "성장 속도",
      views: "조회수",
      daysLeft: "남은 일수",
      generateScript: "스크립트 생성",
      liveAnalysis: "실시간 분석",
      risingTrends: "상승 트렌드",
      expiringSoon: "곧 만료"
    }
  },
  es: {
    ...pageTranslations.en,
    meta: {
      title: "Predicción de tendencias TikTok con IA | OwlSeer",
      description: "Detecta tendencias de TikTok antes del pico. Evalúa velocidad, competencia y match con tu nicho."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "Predicción de tendencias TikTok con IA",
      lead: "Deja de adivinar. OwlSeer analiza 50M+ videos y te muestra la mejor ventana de 72 horas.",
      ctaPrimary: "Iniciar prueba gratis",
      ctaSecondary: "Ver muestra de Trend Radar"
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "El problema del timing en tendencias",
      task: "Importa más cuándo actuar que simplemente actuar."
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "Cómo lo resuelve OwlSeer",
      task: "Conoce el flujo de 3 pasos para crear contenido con tendencias."
    },
    evidence: {
      ...pageTranslations.en.evidence,
      title: "Cómo se ve el dato de tendencias",
      task: "Ejemplos concretos de scoring en una cuenta real."
    },
    conversion: {
      ...pageTranslations.en.conversion,
      title: "En tu nicho, ahora...",
      desc: "Conecta tu cuenta y descubre qué tendencias encajan mejor.",
      button: "Ver mis tendencias",
      note: "Prueba gratis, sin tarjeta"
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "Marco de transparencia"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "Atrapa tu próxima tendencia",
      desc: "Conecta tu cuenta y descubre tendencias adaptadas a tu nicho.",
      primary: "Iniciar prueba gratis",
      secondary: "Ver muestra de Trend Radar"
    },
    ui: {
      badgeTrendRadar: "Trend Radar 2.0",
      coreInsight: "Insight clave",
      costOfDelay: "Costo del retraso",
      timelineDays: ["Día 1", "Día 7", "Día 14", "Día 30"],
      scanTitle: "Escaneando 50M+ videos...",
      scanSubtitle: "Detectando patrones virales en tiempo real",
      scanTags: ["Tech", "Gadgets", "Herramientas IA"],
      ready: "Listo",
      output: "Salida",
      outputVersion: "Guion viral V1",
      hookLabel: "Hook (0-3s)",
      bodyLabel: "Cuerpo",
      analysisTitle: "Análisis IA",
      boundaryData: "Datos",
      boundaryLimitations: "Limitaciones",
      boundaryNote: "Nota",
      lifecyclePhases: ["Emergencia", "Aceleración", "Pico", "Declive"],
      optimalWindow: "Ventana óptima de 72h",
      matchScore: "Match score",
      velocity: "Velocidad",
      views: "Vistas",
      daysLeft: "Días restantes",
      generateScript: "Generar guion",
      liveAnalysis: "Análisis en vivo",
      risingTrends: "Tendencias al alza",
      expiringSoon: "Por expirar"
    }
  },
  fr: {
    ...pageTranslations.en,
    meta: {
      title: "Prédiction de tendances TikTok par IA | OwlSeer",
      description: "Repérez les tendances TikTok avant le pic. Scorez vitesse, concurrence et adéquation à votre niche."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "Prédiction de tendances TikTok par IA",
      lead: "Arrêtez de deviner. OwlSeer analyse 50M+ vidéos et vous donne la meilleure fenêtre de 72h.",
      ctaPrimary: "Démarrer l'essai gratuit",
      ctaSecondary: "Voir l'exemple Trend Radar"
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "Le problème du timing des tendances",
      task: "Le bon moment compte plus que le simple fait d'agir."
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "Comment OwlSeer résout cela",
      task: "Découvrez le workflow en 3 étapes orienté tendances."
    },
    evidence: {
      ...pageTranslations.en.evidence,
      title: "À quoi ressemble la donnée tendance",
      task: "Exemples concrets de scoring sur un compte réel."
    },
    conversion: {
      ...pageTranslations.en.conversion,
      title: "Dans votre niche, maintenant...",
      desc: "Connectez votre compte pour voir les meilleures tendances.",
      button: "Voir mes tendances",
      note: "Essai gratuit, sans carte"
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "Cadre de transparence"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "Attrapez votre prochaine tendance",
      desc: "Connectez votre compte pour voir des tendances adaptées à votre niche.",
      primary: "Démarrer l'essai gratuit",
      secondary: "Voir l'exemple Trend Radar"
    },
    ui: {
      badgeTrendRadar: "Trend Radar 2.0",
      coreInsight: "Insight clé",
      costOfDelay: "Coût du retard",
      timelineDays: ["Jour 1", "Jour 7", "Jour 14", "Jour 30"],
      scanTitle: "Analyse de 50M+ vidéos...",
      scanSubtitle: "Détection des signaux viraux en temps réel",
      scanTags: ["Tech", "Gadgets", "Outils IA"],
      ready: "Prêt",
      output: "Sortie",
      outputVersion: "Script viral V1",
      hookLabel: "Hook (0-3s)",
      bodyLabel: "Corps",
      analysisTitle: "Analyse IA",
      boundaryData: "Données",
      boundaryLimitations: "Limites",
      boundaryNote: "Note",
      lifecyclePhases: ["Émergence", "Accélération", "Pic", "Déclin"],
      optimalWindow: "Fenêtre optimale 72h",
      matchScore: "Score de match",
      velocity: "Vélocité",
      views: "Vues",
      daysLeft: "Jours restants",
      generateScript: "Générer un script",
      liveAnalysis: "Analyse en direct",
      risingTrends: "Tendances en hausse",
      expiringSoon: "Expiration proche"
    }
  },
  de: {
    ...pageTranslations.en,
    meta: {
      title: "TikTok-Trendprognose mit KI | OwlSeer",
      description: "Erkenne TikTok-Trends vor dem Peak. Bewerte Geschwindigkeit, Wettbewerb und Match für deine Nische."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "KI-gestützte TikTok-Trendprognose",
      lead: "Keine Vermutungen mehr. OwlSeer analysiert 50M+ Videos und zeigt dein optimales 72h-Fenster.",
      ctaPrimary: "Kostenlos testen",
      ctaSecondary: "Trend-Radar-Beispiel ansehen"
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "Das Timing-Problem bei Trends",
      task: "Wichtiger als Mitmachen ist der richtige Zeitpunkt."
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "So löst OwlSeer das Problem",
      task: "Der 3-Schritte-Workflow für trendgetriebenen Content."
    },
    evidence: {
      ...pageTranslations.en.evidence,
      title: "So sehen Trenddaten aus",
      task: "Konkrete Scoring-Beispiele aus einem realen Account."
    },
    conversion: {
      ...pageTranslations.en.conversion,
      title: "In deiner Nische, jetzt...",
      desc: "Konto verbinden und passende Trends sofort sehen.",
      button: "Meine Trends anzeigen",
      note: "Kostenloser Test, keine Karte"
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "Transparenz-Box"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "Sichere dir deinen nächsten Trend",
      desc: "Verbinde dein Konto und sieh Trends für deine Nische.",
      primary: "Kostenlos testen",
      secondary: "Trend-Radar-Beispiel ansehen"
    },
    ui: {
      badgeTrendRadar: "Trend Radar 2.0",
      coreInsight: "Kern-Insight",
      costOfDelay: "Kosten der Verzögerung",
      timelineDays: ["Tag 1", "Tag 7", "Tag 14", "Tag 30"],
      scanTitle: "Scanne 50M+ Videos...",
      scanSubtitle: "Erkennt virale Muster in Echtzeit",
      scanTags: ["Tech", "Gadgets", "KI-Tools"],
      ready: "Bereit",
      output: "Output",
      outputVersion: "Viral Script V1",
      hookLabel: "Hook (0-3s)",
      bodyLabel: "Body",
      analysisTitle: "KI-Analyse",
      boundaryData: "Daten",
      boundaryLimitations: "Einschränkungen",
      boundaryNote: "Hinweis",
      lifecyclePhases: ["Entstehung", "Beschleunigung", "Peak", "Abfall"],
      optimalWindow: "Optimales 72h-Fenster",
      matchScore: "Match-Score",
      velocity: "Geschwindigkeit",
      views: "Aufrufe",
      daysLeft: "Verbleibende Tage",
      generateScript: "Skript generieren",
      liveAnalysis: "Live-Analyse",
      risingTrends: "Steigende Trends",
      expiringSoon: "Läuft bald ab"
    }
  }
};

// --- Components ---

// 1. High Fidelity Lifecycle Chart
const LifecycleAnimation = ({ ui }: { ui: any }) => {
  return (
    <div className="w-full h-80 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-3xl relative overflow-hidden border border-white/40 dark:border-white/5 shadow-2xl group">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 dark:to-black/20 pointer-events-none" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 400 200" className="w-full h-full p-8 overflow-visible">
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#1AAE82" />
              <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid */}
          <line x1="40" y1="180" x2="360" y2="180" stroke="currentColor" className="text-gray-200 dark:text-slate-700" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="40" y1="20" x2="40" y2="180" stroke="currentColor" className="text-gray-200 dark:text-slate-700" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Phases Labels */}
          {ui.lifecyclePhases.map((label: string, i: number) => (
            <text key={i} x={80 + i * 80} y="200" textAnchor="middle" className="text-[10px] font-mono uppercase tracking-widest fill-gray-400 dark:fill-gray-500">{label}</text>
          ))}

          {/* Base Path */}
          <path 
            d="M 40 170 C 100 170, 150 160, 200 100 S 300 30, 360 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-gray-100 dark:text-slate-800"
            strokeLinecap="round"
          />

          {/* Animated Path */}
          <motion.path 
            d="M 40 170 C 100 170, 150 160, 200 100 S 300 30, 360 30"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Optimal Window Highlight Area */}
          <motion.rect 
            x="120" y="20" width="100" height="160" 
            fill="#1AAE82" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ delay: 1, duration: 1 }}
            rx="12"
          />
          
          {/* Active Dot */}
          <motion.circle 
            r="6"
            fill="#fff"
            stroke="#1AAE82"
            strokeWidth="3"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ offsetPath: "path('M 40 170 C 100 170, 150 160, 200 100 S 300 30, 360 30')" }}
          />
        </svg>
        
        {/* Floating Tooltip */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur px-4 py-2 rounded-xl shadow-xl border border-[#1AAE82]/20 text-[#1AAE82] text-xs font-bold flex items-center gap-2"
        >
          <Zap className="w-3 h-3 fill-current" />
          {ui.optimalWindow}
        </motion.div>
      </div>
    </div>
  );
};

// 2. Interactive Workflow Step
const WorkflowStep = ({ step, isActive, onClick }: { step: any, isActive: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`group relative text-left p-8 rounded-3xl border transition-all duration-500 w-full overflow-hidden ${
      isActive 
        ? 'bg-white dark:bg-slate-800 border-[#1AAE82] shadow-2xl shadow-[#1AAE82]/10 scale-[1.02]' 
        : 'bg-white/40 dark:bg-slate-900/40 border-transparent hover:bg-white/60 dark:hover:bg-slate-800/60'
    }`}
  >
    <div className={`absolute inset-0 bg-gradient-to-r from-[#1AAE82]/5 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
    
    <div className="relative z-10 flex items-start gap-5">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold transition-colors duration-300 ${
        isActive ? 'bg-[#1AAE82] text-white shadow-lg shadow-[#1AAE82]/30' : 'bg-gray-100 dark:bg-slate-800 text-gray-400'
      }`}>
        {step.id}
      </div>
      <div>
        <h3 className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
          {step.title}
        </h3>
        <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-gray-600 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}`}>
          {step.desc}
        </p>
      </div>
    </div>
  </button>
);

// 3. Dashboard Style Trend Card
const TrendCard = ({ data, ui }: { data: any, ui: any }) => (
  <div className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-[#1AAE82]/5 transition-all duration-300 hover:-translate-y-1">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-xl">
          #
        </div>
        <div>
          <h4 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">{data.tag.replace('#', '')}</h4>
          <div className="flex items-center gap-2 mt-1">
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              data.status.includes('Recommended') || data.status.includes('推荐')
                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                : 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400'
            }`}>
              {data.status}
            </span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center justify-end gap-1 text-[#1AAE82] font-bold text-2xl font-mono">
          {data.match}%
          <Activity className="w-4 h-4" />
        </div>
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ui.matchScore}</div>
      </div>
    </div>
    
    <div className="grid grid-cols-3 gap-3 mb-6">
      {[
        { label: ui.velocity, value: data.velocity, color: 'text-[#1AAE82]' },
        { label: ui.views, value: data.views, color: 'text-gray-900 dark:text-white' },
        { label: ui.daysLeft, value: data.daysLeft, color: 'text-gray-900 dark:text-white' }
      ].map((stat, i) => (
        <div key={i} className="bg-gray-50/50 dark:bg-slate-800/50 rounded-2xl p-3 text-center border border-gray-100 dark:border-slate-700/50">
          <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{stat.label}</div>
          <div className={`font-bold text-sm ${stat.color}`}>{stat.value}</div>
        </div>
      ))}
    </div>

    <div className="relative h-1.5 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${data.match}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#1AAE82] to-emerald-400 rounded-full" 
      />
    </div>
    
    <button className="w-full mt-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-[#1AAE82] hover:text-white hover:border-[#1AAE82] transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg">
      <Play className="w-3 h-3 fill-current" /> {ui.generateScript}
    </button>
  </div>
);

// 4. Live Data Widget
const LiveTrendWidget = ({ stats, t, ui }: { stats: any, t: any, ui: any }) => (
  <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl border border-white/5">
    {/* Animated Background Elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#1AAE82]/20 rounded-full blur-[100px] animate-pulse-slow" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
    
    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-[#1AAE82] mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-[#1AAE82]" /> {ui.liveAnalysis}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold font-display mb-6 leading-tight">
          {t.conversion.title}
        </h3>
        <p className="text-gray-400 mb-8 max-w-md text-lg">
          {t.conversion.desc}
        </p>
        <button className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-2xl transition-all shadow-lg shadow-[#1AAE82]/20 hover:shadow-[#1AAE82]/40 hover:-translate-y-1 flex items-center gap-2 mx-auto md:mx-0">
          {t.conversion.button} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex gap-6">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl w-40 text-center">
          <div className="text-5xl font-bold font-mono text-[#1AAE82] mb-2">{stats.rising}</div>
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
            {ui.risingTrends}
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl w-40 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-red-500/10 animate-pulse" />
          <div className="relative z-10">
            <div className="text-5xl font-bold font-mono text-white mb-2">{stats.expiring}</div>
            <div className="text-xs font-bold text-red-400 uppercase tracking-widest leading-relaxed">
              {ui.expiringSoon}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

export const TrendPredictionPage = ({ 
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
  const canonicalPath = '/use-cases/trend-prediction';
  const seo = getPageSEO('trendPrediction', language);
  const [activeStep, setActiveStep] = useState(1);

  // Dynamic numbers for "FOMO" section
  const [stats, setStats] = useState({ rising: 12, expiring: 3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        rising: 12 + Math.floor(Math.random() * 5),
        expiring: 3 + Math.floor(Math.random() * 2)
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
                <TrendingUp className="w-4 h-4" /> 
                <span className="opacity-90">{t.ui.badgeTrendRadar}</span>
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
                  onClick={() => onNavigate('/social/simulation/trends')}
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
             <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#1AAE82] to-emerald-600 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-[#1AAE82]/30 rotate-3">
                <Zap className="w-10 h-10" fill="currentColor" />
             </div>
             <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">{t.ui.coreInsight}</h3>
                <p className="text-xl md:text-2xl text-gray-900 dark:text-white leading-relaxed font-medium">
                  {t.tldr.content.split(t.tldr.link).map((part: string, i: number, arr: string[]) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <button 
                          onClick={() => onNavigate('/social/simulation/trends')}
                          className="text-[#1AAE82] hover:text-[#15956F] transition-colors inline-flex items-center gap-1 border-b-2 border-[#1AAE82]/30 hover:border-[#1AAE82] mx-1"
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
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-red-50 dark:bg-red-900/10 text-red-500 dark:text-red-400 rounded-2xl border border-red-100 dark:border-red-900/20">
                  <Clock className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">{t.problem.title}</h2>
                  <p className="text-[#1AAE82] font-medium mt-1">{t.problem.task}</p>
                </div>
              </div>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>{t.problem.desc1}</p>
                <p>{t.problem.desc2}</p>
                <div className="p-6 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-2xl">
                  <span className="font-bold block mb-2 text-red-700 dark:text-red-300 uppercase tracking-wider text-xs">{t.ui.costOfDelay}</span>
                  <p className="text-red-900 dark:text-red-200 font-medium italic">"{t.problem.cost}"</p>
                </div>
                <button 
                  onClick={() => onNavigate('/social/signals')}
                  className="text-[#1AAE82] font-bold hover:text-[#15956F] flex items-center gap-2 mt-4 group transition-colors"
                >
                  {t.problem.action} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <LifecycleAnimation ui={t.ui} />
              <div className="mt-6 flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                {t.ui.timelineDays.map((dayLabel: string) => (
                  <span key={dayLabel}>{dayLabel}</span>
                ))}
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

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                {t.solution.steps.map((step: any) => (
                  <WorkflowStep 
                    key={step.id} 
                    step={step} 
                    isActive={activeStep === step.id} 
                    onClick={() => setActiveStep(step.id)} 
                  />
                ))}
                
                <div className="pt-4 pl-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">
                    {t.solution.note}
                  </p>
                  <button 
                    onClick={() => onNavigate('/social/simulation/trends')}
                    className="text-[#1AAE82] font-bold hover:text-[#15956F] flex items-center gap-2 group transition-colors"
                  >
                    {t.solution.action} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-gray-200 dark:border-slate-800 overflow-hidden flex items-center justify-center p-8 lg:sticky lg:top-32">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1AAE82]/5 via-transparent to-transparent" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    {activeStep === 1 && (
                      <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-8">
                        <div className="relative">
                          <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-500 dark:text-blue-400 relative z-10">
                            <Search className="w-10 h-10" />
                          </div>
                          <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping-slow" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-2">{t.ui.scanTitle}</h4>
                          <p className="text-gray-500">{t.ui.scanSubtitle}</p>
                        </div>
                        <div className="flex gap-3">
                          {t.ui.scanTags.map((tagLabel: string) => (
                            <span key={tagLabel} className="px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-sm font-bold text-gray-600 dark:text-gray-300">
                              {tagLabel}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {activeStep === 2 && (
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <div className="w-full max-w-sm">
                          <TrendCard data={t.evidence.items[0]} ui={t.ui} />
                        </div>
                      </div>
                    )}
                    {activeStep === 3 && (
                      <div className="w-full h-full bg-gray-50 dark:bg-slate-800/50 rounded-3xl p-8 border border-gray-200 dark:border-slate-700/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                          <div className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3" /> {t.ui.ready}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-[#1AAE82] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#1AAE82]/20">
                            <Zap className="w-6 h-6" fill="currentColor" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.ui.output}</div>
                            <div className="font-bold text-gray-900 dark:text-white text-lg">{t.ui.outputVersion}</div>
                          </div>
                        </div>
                        <div className="space-y-6 font-mono text-sm">
                          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700">
                            <strong className="block text-[#1AAE82] text-xs uppercase tracking-wider mb-2">{t.ui.hookLabel}</strong>
                            <p className="text-gray-700 dark:text-gray-300">"Stop buying new phones until you see this..."</p>
                          </div>
                          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700">
                            <strong className="block text-blue-500 text-xs uppercase tracking-wider mb-2">{t.ui.bodyLabel}</strong>
                            <p className="text-gray-700 dark:text-gray-300">[Visual: Unboxing] The tech industry is hiding a secret about release cycles...</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
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
              <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">{t.evidence.subtitle}</p>
              
              <div className="space-y-6">
                {t.evidence.items.map((item: any, i: number) => (
                  <TrendCard key={i} data={item} ui={t.ui} />
                ))}
              </div>
            </div>
            
            <div className="flex-1 sticky top-32">
              <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/5 rounded-full blur-[60px] pointer-events-none" />
                
                <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                  <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                    <BarChart2 className="w-5 h-5 text-[#1AAE82]" /> 
                  </div>
                  {t.ui.analysisTitle}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                  {t.evidence.analysis}
                </p>
                
                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm mb-8">
                  <div className="flex gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white italic font-mono">
                    "{t.evidence.comparison}"
                  </p>
                </div>
                
                <button 
                  onClick={() => onNavigate('/social/simulation/trends')}
                  className="w-full py-4 bg-[#1AAE82] text-white rounded-xl font-bold hover:bg-[#15956F] transition-all shadow-lg shadow-[#1AAE82]/20 hover:shadow-[#1AAE82]/40 hover:-translate-y-1"
                >
                  {t.evidence.action.split('—')[0]}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Live Data Widget (FOMO) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-32">
          <LiveTrendWidget stats={stats} t={t} ui={t.ui} />
        </section>

        {/* Boundary Box */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-32">
          <div className="border border-gray-200 dark:border-slate-800 rounded-2xl p-8 bg-gray-50/50 dark:bg-slate-900/30 backdrop-blur-sm">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 text-lg">
              <Lock size={20} className="text-gray-400" /> {t.boundary.title}
            </h3>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p><strong className="text-gray-900 dark:text-gray-200">{t.ui.boundaryData}:</strong> {t.boundary.data.replace("Data we use:", "")}</p>
              <p><strong className="text-gray-900 dark:text-gray-200">{t.ui.boundaryLimitations}:</strong> {t.boundary.limit.replace("What we do not do:", "")}</p>
              <p><strong className="text-gray-900 dark:text-gray-200">{t.ui.boundaryNote}:</strong> {t.boundary.note.replace("Variability note:", "")}</p>
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
              onClick={() => onNavigate('/social/simulation/trends')}
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

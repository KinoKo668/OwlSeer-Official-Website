/**
 * @page Brands Solution Page
 * 
 * Based on T2-08-solutions-brands.md
 */

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts';
import { motion, useInView } from 'motion/react';
import { 
  Navbar 
} from '../layout/Navbar';
import { 
  Footer 
} from '../layout/Footer';
import { SEO } from '../SEO';
import { getCanonicalUrl, seoConfig, generateAlternates } from '../../data/seoConfig';
import { translations } from '../../data/translations';
import { AuroraBackground } from '../ui/aurora-background';
import { 
  ShieldCheck, 
  TrendingUp, 
  MessageSquare, 
  BarChart2, 
  AlertTriangle,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Lock,
  Target
} from 'lucide-react';

// --- Local Content ---
const localContent = {
  en: {
    hero: {
      title: "Authentic Brand Presence on TikTok: Stop Being Awkward, Start Being Viral",
      lead: "Don't just repurpose ads. OwlSeer's AI Brand Safety Engine ensures your content is culturally relevant, reputation-safe, and algorithmically optimized for 2026 audiences.",
      primaryCta: "Start Brand Trial",
      secondaryCta: "See the Sample"
    },
    tldr: "Repurposing ads kills reach. OwlSeer's Brand Safety Engine (0-100 score) filters risky trends instantly. Tone-Matched Scripts adapt your brand voice to TikTok culture. Join the 1% of brands that feel native, not intrusive.",
    problem: {
      title: "Why Most Brand TikToks Fall Flat",
      subtitle: "Understand the gap between brand content and TikTok-native content.",
      items: [
        {
          title: "Repurposed content",
          desc: "Taking a polished Instagram ad and posting it on TikTok produces content that feels out of place. TikTok audiences expect raw, personality-driven content."
        },
        {
          title: "Wrong trends",
          desc: "Brands jump on trending sounds without checking reputational risk. A financial services brand dueting a dance trend reads as tone-deaf."
        },
        {
          title: "No data, just vibes",
          desc: "Without understanding which content resonates with their specific audience, brands guess at topics — producing inconsistent results."
        }
      ]
    },
    solution: {
      title: "Brand-Specific Features",
      items: [
        {
          title: "Trend Matching with Brand Safety",
          desc: "Match scores filter trends by brand relevance. The brand safety score (0-100 scale) flags trends that carry reputational risk.",
          icon: <ShieldCheck className="w-5 h-5" />
        },
        {
          title: "On-Brand Script Generation",
          desc: "Generate scripts that match your brand voice. Specify tone (professional, friendly, educational) and the AI adapts hook style.",
          icon: <MessageSquare className="w-5 h-5" />
        },
        {
          title: "Cultural Timing",
          desc: "Trend Radar detects trend lifecycle stages so brands can participate at the right moment — early enough to be relevant.",
          icon: <TrendingUp className="w-5 h-5" />
        },
        {
          title: "Competitive Context",
          desc: "Benchmark Context shows how your brand account compares to peer accounts in your category.",
          icon: <BarChart2 className="w-5 h-5" />
        }
      ],
      action: "Explore Brand Features"
    },
    results: {
      title: "Brand Results",
      stats: [
        { value: 2, suffix: "x", label: "Engagement", subLabel: "vs repurposed content" },
        { value: 85, suffix: "%", label: "Less \"Cringe\"", subLabel: "reduction in off-brand feedback" },
        { value: 40, suffix: "%", label: "Faster Approval", subLabel: "cycles with data-backed briefs" }
      ],
      disclaimer: "Results vary by brand, industry, and team adoption. Brand safety scoring effectiveness depends on trend data freshness."
    },
    features: {
      title: "Build Your Brand's TikTok Presence",
      items: [
        "Brand Safety Scoring (0-100)",
        "Tone-Matched Scripts",
        "Trend Relevance Filtering",
        "Competitor Benchmarking",
        "Trend Lifecycle Alerts",
        "Engagement Prediction",
        "Audience Overlap Analysis",
        "Risk Assessment"
      ]
    },
    boundary: {
      note: "Data we use: Brand account metrics through TikTok API, combined with platform-wide trend data. OwlSeer does not manage brand reputation beyond trend-level safety scoring. We do not provide legal compliance review."
    },
    cta: {
      title: "Build Your Brand's TikTok Presence",
      subtitle: "Start with your brand account. See which trends fit — and which to avoid.",
      primary: "Start Brand Trial",
      secondary: "See the Sample"
    },
    conversion: {
      headline: "Is your brand's TikTok content authentic or awkward?",
      subheadline: "Enter your brand's TikTok handle for a free Brand Fit Score.",
      placeholder: "@brandname",
      button: "Check My Brand Fit",
      resultTitle: "Brand Fit Score",
      fullReport: "Get Full Brand Report"
    }
  },
  zh: {
    hero: {
      title: "品牌 TikTok 原生化引擎：告别“官方号”的尴尬，打造真实爆款",
      lead: "别再把广告片搬运到 TikTok 了。OwlSeer 的 AI 品牌安全引擎确保您的内容既符合文化潮流，又规避声誉风险，精准击中 2026 年年轻受众的算法偏好。",
      primaryCta: "开始品牌试用",
      secondaryCta: "观看演示"
    },
    tldr: "搬运广告等于自杀。OwlSeer 独有的品牌安全评分 (0-100) 即时过滤高风险趋势。语调匹配脚本将您的品牌声音转化为 TikTok 原生语言。加入那 1% 真正懂平台的品牌行列。",
    problem: {
      title: "为什么大多数品牌 TikTok 表现平平",
      subtitle: "理解品牌内容与 TikTok 原生内容之间的差距。",
      items: [
        {
          title: "搬运内容",
          desc: "将精致的 Instagram 广告发布到 TikTok 上会显得格格不入。TikTok 受众期待的是原生的、有个性的内容。"
        },
        {
          title: "跟错趋势",
          desc: "品牌在没有检查声誉风险的情况下盲目跟风。金融服务品牌模仿舞蹈趋势会被视为缺乏敏感度。"
        },
        {
          title: "靠直觉而非数据",
          desc: "不了解哪些内容能引起特定受众的共鸣，品牌只能猜测话题——导致结果不稳定。"
        }
      ]
    },
    solution: {
      title: "品牌专属功能",
      items: [
        {
          title: "附带品牌安全评分的趋势匹配",
          desc: "匹配分数过滤趋势相关性。品牌安全评分（0-100）标记带有声誉风险的趋势。",
          icon: <ShieldCheck className="w-5 h-5" />
        },
        {
          title: "品牌调性脚本生成",
          desc: "生成符合你品牌声音的脚本。指定语气（专业、友好、教育），AI 会调整钩子风格。",
          icon: <MessageSquare className="w-5 h-5" />
        },
        {
          title: "文化时机把握",
          desc: "趋势雷达检测趋势生命周期阶段，以便品牌在正确的时刻参与——既要相关又要及时。",
          icon: <TrendingUp className="w-5 h-5" />
        },
        {
          title: "竞争对比",
          desc: "基准背景显示你的品牌账号与同类同行的对比情况。",
          icon: <BarChart2 className="w-5 h-5" />
        }
      ],
      action: "探索品牌功能"
    },
    results: {
      title: "品牌成果",
      stats: [
        { value: 2, suffix: "倍", label: "互动率", subLabel: "对比搬运内容" },
        { value: 85, suffix: "%", label: "尴尬感减少", subLabel: "负面反馈减少" },
        { value: 40, suffix: "%", label: "审批更快", subLabel: "基于数据的简报" }
      ],
      disclaimer: "结果因品牌、行业和团队采用情况而异。品牌安全评分的有效性取决于趋势数据的时效性。"
    },
    features: {
      title: "打造你的品牌 TikTok 存在感",
      items: [
        "品牌安全评分 (0-100)",
        "调性匹配脚本",
        "趋势相关性过滤",
        "竞争对手基准",
        "趋势生命周期提醒",
        "互动预测",
        "受众重叠分析",
        "风险评估"
      ]
    },
    boundary: {
      note: "我们使用的数据：通过 TikTok API 获取的品牌账号指标，结合全平台趋势数据。OwlSeer 不管理趋势级安全评分以外的品牌声誉。我们不提供法律合规审查。"
    },
    cta: {
      title: "打造你的品牌 TikTok 存在感",
      subtitle: "从你的品牌账号开始。看看哪些趋势适合——哪些应该避免。",
      primary: "开始品牌试用",
      secondary: "观看演示"
    },
    conversion: {
      headline: "你的品牌 TikTok 内容是真实还是尴尬？",
      subheadline: "输入你的品牌 TikTok 账号，获取免费品牌适配评分。",
      placeholder: "@品牌名称",
      button: "检查品牌适配度",
      resultTitle: "品牌适配评分",
      fullReport: "获取完整品牌报告"
    }
  }
};

const localizedContent = {
  en: {
    ...localContent.en,
    ui: {
      coreInsight: "Core Insight",
      transparencyNote: "Transparency Note"
    }
  },
  zh: {
    ...localContent.zh,
    ui: {
      coreInsight: "核心洞察",
      transparencyNote: "透明说明"
    }
  },
  ja: {
    ...localContent.en,
    hero: {
      title: "TikTokで違和感のないブランド発信へ：不自然さを減らし、自然に広がる",
      lead: "広告の再利用だけでは届きません。OwlSeerはブランドセーフティとトレンド適合を両立し、TikTok文脈に合う発信を支援します。",
      primaryCta: "ブランドトライアル開始",
      secondaryCta: "サンプルを見る"
    },
    tldr: "広告の焼き直しでは伸びません。OwlSeerはブランド安全スコアとトーン適合スクリプトで、TikTokらしい表現に最適化します。",
    problem: { ...localContent.en.problem, title: "ブランドTikTokが伸びない理由", subtitle: "ブランド投稿とTikTokネイティブ投稿の差を可視化。" },
    solution: { ...localContent.en.solution, title: "ブランド向け主要機能", action: "ブランド機能を見る" },
    results: { ...localContent.en.results, title: "ブランド成果" },
    features: { ...localContent.en.features, title: "ブランドTikTok運用を強化" },
    boundary: { note: "利用データ：TikTok APIのブランドアカウント指標＋全体トレンドデータ。OwlSeerは法務コンプライアンス審査を提供するものではありません。" },
    cta: { title: "ブランドのTikTok存在感を高める", subtitle: "合うトレンドと避けるべきトレンドを、データで判断できます。", primary: "ブランドトライアル開始", secondary: "サンプルを見る" },
    conversion: {
      headline: "あなたのブランド投稿は“自然”ですか？",
      subheadline: "TikTokハンドルを入力して無料Brand Fit Scoreを確認。",
      placeholder: "@brandname",
      button: "ブランド適合をチェック",
      resultTitle: "Brand Fit Score",
      fullReport: "詳細レポートを取得"
    },
    ui: { coreInsight: "コアインサイト", transparencyNote: "透明性に関する注記" }
  },
  ko: {
    ...localContent.en,
    hero: {
      title: "브랜드 TikTok 존재감 강화: 어색함은 줄이고 확산은 높이기",
      lead: "광고 재활용만으로는 부족합니다. OwlSeer가 브랜드 세이프티와 트렌드 적합도를 함께 최적화합니다.",
      primaryCta: "브랜드 체험 시작",
      secondaryCta: "샘플 보기"
    },
    tldr: "복붙 광고는 도달을 떨어뜨립니다. OwlSeer는 브랜드 안전 점수와 톤 매칭 스크립트로 TikTok 네이티브 표현을 만듭니다.",
    problem: { ...localContent.en.problem, title: "브랜드 TikTok이 부진한 이유", subtitle: "브랜드 콘텐츠와 TikTok 네이티브 콘텐츠의 간극을 확인하세요." },
    solution: { ...localContent.en.solution, title: "브랜드 전용 기능", action: "브랜드 기능 보기" },
    results: { ...localContent.en.results, title: "브랜드 성과" },
    features: { ...localContent.en.features, title: "브랜드 TikTok 운영 기능" },
    boundary: { note: "사용 데이터: TikTok API 기반 브랜드 계정 지표 + 플랫폼 트렌드 데이터. OwlSeer는 법률 준수 검토 서비스를 제공하지 않습니다." },
    cta: { title: "브랜드 TikTok 존재감을 구축하세요", subtitle: "맞는 트렌드와 피해야 할 트렌드를 데이터로 구분하세요.", primary: "브랜드 체험 시작", secondary: "샘플 보기" },
    conversion: {
      headline: "우리 브랜드 TikTok, 자연스러운가요?",
      subheadline: "브랜드 TikTok 핸들을 입력하면 무료 Brand Fit Score를 확인할 수 있습니다.",
      placeholder: "@brandname",
      button: "브랜드 적합도 확인",
      resultTitle: "Brand Fit Score",
      fullReport: "전체 브랜드 리포트 받기"
    },
    ui: { coreInsight: "핵심 인사이트", transparencyNote: "투명성 안내" }
  },
  es: {
    ...localContent.en,
    hero: {
      title: "Presencia de marca auténtica en TikTok: menos rigidez, más impacto",
      lead: "No basta con reciclar anuncios. OwlSeer optimiza relevancia cultural y brand safety para que tu contenido se sienta nativo.",
      primaryCta: "Iniciar prueba de marca",
      secondaryCta: "Ver muestra"
    },
    tldr: "Reutilizar anuncios reduce alcance. OwlSeer filtra riesgos con score de brand safety y adapta el tono de guion a la cultura TikTok.",
    problem: { ...localContent.en.problem, title: "Por qué falla la mayoría del TikTok de marca", subtitle: "Visualiza la brecha entre contenido de marca y contenido nativo." },
    solution: { ...localContent.en.solution, title: "Funciones específicas para marcas", action: "Explorar funciones de marca" },
    results: { ...localContent.en.results, title: "Resultados de marca" },
    features: { ...localContent.en.features, title: "Construye tu presencia de marca en TikTok" },
    boundary: { note: "Datos que usamos: métricas de cuenta de marca vía API de TikTok + datos de tendencias. OwlSeer no sustituye revisión legal de compliance." },
    cta: { title: "Construye tu presencia de marca en TikTok", subtitle: "Empieza con tu cuenta y detecta qué tendencias sí te convienen.", primary: "Iniciar prueba de marca", secondary: "Ver muestra" },
    conversion: {
      headline: "¿Tu TikTok de marca se siente auténtico o forzado?",
      subheadline: "Ingresa tu handle y obtén un Brand Fit Score gratis.",
      placeholder: "@marca",
      button: "Comprobar Brand Fit",
      resultTitle: "Brand Fit Score",
      fullReport: "Obtener informe completo"
    },
    ui: { coreInsight: "Insight clave", transparencyNote: "Nota de transparencia" }
  },
  fr: {
    ...localContent.en,
    hero: {
      title: "Présence de marque authentique sur TikTok : moins d’awkward, plus d’impact",
      lead: "Ne recyclez plus vos pubs. OwlSeer optimise la pertinence culturelle et la brand safety pour un contenu vraiment natif TikTok.",
      primaryCta: "Démarrer l’essai marque",
      secondaryCta: "Voir l’exemple"
    },
    tldr: "Le recyclage pub tue la portée. OwlSeer filtre les risques avec un score de sécurité et adapte le ton des scripts à la culture TikTok.",
    problem: { ...localContent.en.problem, title: "Pourquoi la plupart des comptes marque stagnent sur TikTok", subtitle: "Comprenez l’écart entre contenu de marque et contenu natif." },
    solution: { ...localContent.en.solution, title: "Fonctionnalités dédiées aux marques", action: "Explorer les fonctions marque" },
    results: { ...localContent.en.results, title: "Résultats de marque" },
    features: { ...localContent.en.features, title: "Construisez votre présence de marque sur TikTok" },
    boundary: { note: "Données utilisées : métriques de compte marque via API TikTok + données de tendances. OwlSeer ne remplace pas un audit juridique de conformité." },
    cta: { title: "Renforcez votre présence de marque sur TikTok", subtitle: "Identifiez les tendances pertinentes et celles à éviter.", primary: "Démarrer l’essai marque", secondary: "Voir l’exemple" },
    conversion: {
      headline: "Votre contenu TikTok de marque est-il authentique ?",
      subheadline: "Entrez votre handle pour obtenir un Brand Fit Score gratuit.",
      placeholder: "@marque",
      button: "Vérifier le Brand Fit",
      resultTitle: "Brand Fit Score",
      fullReport: "Obtenir le rapport complet"
    },
    ui: { coreInsight: "Insight clé", transparencyNote: "Note de transparence" }
  },
  de: {
    ...localContent.en,
    hero: {
      title: "Authentische Markenpräsenz auf TikTok: weniger fremd, mehr Wirkung",
      lead: "Ads recyceln reicht nicht. OwlSeer kombiniert kulturellen Fit und Brand Safety für TikTok-native Markenkommunikation.",
      primaryCta: "Marken-Test starten",
      secondaryCta: "Sample ansehen"
    },
    tldr: "Recycelte Ads senken Reichweite. OwlSeer filtert riskante Trends und passt Skript-Tonalität an TikTok-Kultur an.",
    problem: { ...localContent.en.problem, title: "Warum viele Marken auf TikTok unterperformen", subtitle: "Die Lücke zwischen Marken-Content und TikTok-native Content verstehen." },
    solution: { ...localContent.en.solution, title: "Markenspezifische Funktionen", action: "Brand-Features ansehen" },
    results: { ...localContent.en.results, title: "Marken-Ergebnisse" },
    features: { ...localContent.en.features, title: "Baue deine Markenpräsenz auf TikTok aus" },
    boundary: { note: "Genutzte Daten: Markenkonto-Metriken via TikTok API plus Trenddaten. OwlSeer ersetzt keine rechtliche Compliance-Prüfung." },
    cta: { title: "TikTok-Präsenz deiner Marke ausbauen", subtitle: "Erkenne, welche Trends passen – und welche du meiden solltest.", primary: "Marken-Test starten", secondary: "Sample ansehen" },
    conversion: {
      headline: "Wirkt euer Marken-TikTok authentisch oder aufgesetzt?",
      subheadline: "TikTok-Handle eingeben und kostenlosen Brand Fit Score erhalten.",
      placeholder: "@brandname",
      button: "Brand Fit prüfen",
      resultTitle: "Brand Fit Score",
      fullReport: "Vollständigen Bericht abrufen"
    },
    ui: { coreInsight: "Kern-Insight", transparencyNote: "Transparenzhinweis" }
  }
};

const problemModuleUiByLang = {
  en: {
    failureSignals: "Failure Signals",
    beforeLabel: "Before",
    optimizedWorkflow: "Optimized Workflow",
    guidedLabel: "OwlSeer Guided",
    fixPrefix: "Fix",
    optimizedPatterns: [
      "Native-first hook and creator framing",
      "Safety-screened trend shortlist",
      "Signal-backed brief and topic fit"
    ],
    impactMetrics: [
      { label: "3s Hold", before: "18%", after: "43%" },
      { label: "Completion", before: "9%", after: "24%" },
      { label: "Negative Sentiment", before: "14%", after: "4%" }
    ]
  },
  zh: {
    failureSignals: "失败信号",
    beforeLabel: "优化前",
    optimizedWorkflow: "优化路径",
    guidedLabel: "OwlSeer 指导",
    fixPrefix: "改进",
    optimizedPatterns: [
      "原生开场钩子与创作者叙事",
      "通过品牌安全筛选趋势清单",
      "基于信号的数据化选题简报"
    ],
    impactMetrics: [
      { label: "3秒留存", before: "18%", after: "43%" },
      { label: "完播率", before: "9%", after: "24%" },
      { label: "负向情绪", before: "14%", after: "4%" }
    ]
  },
  ja: {
    failureSignals: "失速シグナル",
    beforeLabel: "改善前",
    optimizedWorkflow: "最適化ワークフロー",
    guidedLabel: "OwlSeer ガイド",
    fixPrefix: "改善",
    optimizedPatterns: [
      "TikTokネイティブな冒頭フック設計",
      "ブランドセーフティでトレンドを事前選別",
      "シグナルに基づくテーマ・ブリーフ設計"
    ],
    impactMetrics: [
      { label: "3秒維持率", before: "18%", after: "43%" },
      { label: "視聴完了率", before: "9%", after: "24%" },
      { label: "ネガティブ反応", before: "14%", after: "4%" }
    ]
  },
  ko: {
    failureSignals: "실패 신호",
    beforeLabel: "개선 전",
    optimizedWorkflow: "최적화 워크플로",
    guidedLabel: "OwlSeer 가이드",
    fixPrefix: "개선",
    optimizedPatterns: [
      "네이티브 훅과 크리에이터형 오프닝",
      "브랜드 세이프티 기반 트렌드 선별",
      "신호 데이터 기반 주제 브리프"
    ],
    impactMetrics: [
      { label: "3초 유지율", before: "18%", after: "43%" },
      { label: "완시율", before: "9%", after: "24%" },
      { label: "부정 반응", before: "14%", after: "4%" }
    ]
  },
  es: {
    failureSignals: "Señales de fallo",
    beforeLabel: "Antes",
    optimizedWorkflow: "Flujo optimizado",
    guidedLabel: "Guiado por OwlSeer",
    fixPrefix: "Ajuste",
    optimizedPatterns: [
      "Hook nativo y enfoque creador desde el inicio",
      "Lista de tendencias filtrada por brand safety",
      "Brief guiado por señales y ajuste de tema"
    ],
    impactMetrics: [
      { label: "Retención 3s", before: "18%", after: "43%" },
      { label: "Finalización", before: "9%", after: "24%" },
      { label: "Sentimiento negativo", before: "14%", after: "4%" }
    ]
  },
  fr: {
    failureSignals: "Signaux d'échec",
    beforeLabel: "Avant",
    optimizedWorkflow: "Workflow optimisé",
    guidedLabel: "Guidé par OwlSeer",
    fixPrefix: "Correctif",
    optimizedPatterns: [
      "Hook natif et angle créateur dès l'ouverture",
      "Sélection de tendances filtrée par brand safety",
      "Brief éditorial piloté par les signaux"
    ],
    impactMetrics: [
      { label: "Rétention 3s", before: "18%", after: "43%" },
      { label: "Taux de complétion", before: "9%", after: "24%" },
      { label: "Sentiment négatif", before: "14%", after: "4%" }
    ]
  },
  de: {
    failureSignals: "Fehlersignale",
    beforeLabel: "Vorher",
    optimizedWorkflow: "Optimierter Workflow",
    guidedLabel: "Von OwlSeer geführt",
    fixPrefix: "Fix",
    optimizedPatterns: [
      "Nativer Hook und Creator-Einstieg",
      "Trend-Shortlist mit Brand-Safety-Filter",
      "Signalbasierter Brief mit Themen-Fit"
    ],
    impactMetrics: [
      { label: "3s-Haltequote", before: "18%", after: "43%" },
      { label: "Abschlussrate", before: "9%", after: "24%" },
      { label: "Negatives Sentiment", before: "14%", after: "4%" }
    ]
  }
};

const whyItMattersUiByLang = {
  en: {
    title: "Why It Matters",
    items: [
      "Repurposed ads fail on TikTok",
      "Wrong trends increase brand risk",
      "Authentic-native content builds trust"
    ]
  },
  zh: {
    title: "这为何重要",
    items: [
      "广告搬运在 TikTok 上效果差",
      "错误跟风会放大品牌风险",
      "真实原生表达更容易建立信任"
    ]
  },
  ja: {
    title: "なぜ重要か",
    items: [
      "広告の再利用はTikTokで失速しやすい",
      "誤ったトレンド参加はブランドリスクを高める",
      "ネイティブな表現ほど信頼を得やすい"
    ]
  },
  ko: {
    title: "왜 중요한가",
    items: [
      "광고 재활용 콘텐츠는 TikTok에서 성과가 낮음",
      "잘못된 트렌드 참여는 브랜드 리스크를 키움",
      "네이티브한 표현이 신뢰를 만든다"
    ]
  },
  es: {
    title: "Por qué importa",
    items: [
      "Reciclar anuncios suele fallar en TikTok",
      "Elegir mal tendencias aumenta el riesgo de marca",
      "El contenido nativo genera más confianza"
    ]
  },
  fr: {
    title: "Pourquoi c'est important",
    items: [
      "Le recyclage pub performe mal sur TikTok",
      "Les mauvais trends augmentent le risque de marque",
      "Le contenu natif renforce la confiance"
    ]
  },
  de: {
    title: "Warum das wichtig ist",
    items: [
      "Recycelte Ads performen auf TikTok schwach",
      "Falsche Trends erhöhen das Markenrisiko",
      "Nativer Content schafft mehr Vertrauen"
    ]
  }
};

// --- Components ---

// 1. Problem Diagnostic Module (Problem Section)
const ProblemDiagnosticModule = ({
  items,
  ui
}: {
  items: Array<{ title: string; desc: string }>;
  ui: {
    failureSignals: string;
    beforeLabel: string;
    optimizedWorkflow: string;
    guidedLabel: string;
    fixPrefix: string;
    optimizedPatterns: string[];
    impactMetrics: Array<{ label: string; before: string; after: string }>;
  };
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const optimizedPatterns = ui.optimizedPatterns;
  const impactMetrics = ui.impactMetrics;

  return (
    <div ref={ref} className="grid gap-6 lg:grid-cols-[1.05fr_1.4fr]">
      <motion.div 
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="rounded-[2rem] border border-red-100 bg-gradient-to-br from-red-50/85 to-white p-6 shadow-[0_24px_60px_-44px_rgba(239,68,68,0.5)] dark:border-red-900/30 dark:from-red-950/25 dark:to-slate-900 sm:p-7"
      >
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-red-500 dark:text-red-400">
            {ui.failureSignals}
          </h3>
          <span className="rounded-full border border-red-200 bg-red-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-red-600 dark:border-red-900/40 dark:bg-red-900/30 dark:text-red-300">
            {ui.beforeLabel}
          </span>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.1 + idx * 0.08 }}
              className="rounded-2xl border border-red-100/80 bg-white/85 p-4 dark:border-red-900/25 dark:bg-slate-900/55"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-[11px] font-bold text-red-600 dark:bg-red-900/40 dark:text-red-300">
                  {idx + 1}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50/85 via-white to-cyan-50/55 p-6 shadow-[0_24px_70px_-46px_rgba(16,185,129,0.52)] dark:border-emerald-900/35 dark:from-emerald-950/24 dark:via-slate-900 dark:to-slate-900 sm:p-7"
      >
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
            {ui.optimizedWorkflow}
          </h3>
          <span className="rounded-full border border-emerald-200 bg-emerald-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-900/30 dark:text-emerald-300">
            {ui.guidedLabel}
          </span>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => (
            <motion.div
              key={`${item.title}-fix`}
              initial={{ opacity: 0, x: 10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.15 + idx * 0.08 }}
              className="grid gap-2 rounded-2xl border border-emerald-100/80 bg-white/88 p-4 dark:border-emerald-900/30 dark:bg-slate-900/55 sm:grid-cols-[auto_1fr]"
            >
              <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {ui.fixPrefix} {idx + 1}
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{optimizedPatterns[idx]}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {impactMetrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.35 + idx * 0.08 }}
              className="rounded-2xl border border-emerald-100/80 bg-white/90 p-3 dark:border-emerald-900/30 dark:bg-slate-900/55"
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{metric.label}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                <span className="line-through">{metric.before}</span>
                <span className="mx-1.5">→</span>
                <span className="font-bold text-[#1AAE82]">{metric.after}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// 2. Brand Safety Gauge (Solution Section)
const BrandSafetyGauge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isInView) {
      const target = 87;
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setScore(target);
          clearInterval(timer);
        } else {
          setScore(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-gray-100 dark:border-slate-800 shadow-xl relative overflow-hidden group hover:border-[#1AAE82]/30 transition-colors duration-300">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Brand Safety Score</h3>
        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Real-time risk assessment</p>
      </div>

      <div className="relative w-56 h-28 mx-auto mb-6 overflow-hidden">
        {/* Gauge Background */}
        <div className="absolute top-0 left-0 w-full h-full rounded-t-full border-[16px] border-gray-100 dark:border-slate-800" />
        {/* Gauge Segments */}
        <div className="absolute top-0 left-0 w-full h-full rounded-t-full border-[16px] border-transparent border-l-red-500 rotate-[-45deg] origin-bottom transform translate-y-full" style={{ clipPath: 'polygon(0 0, 40% 0, 50% 100%, 0 100%)' }} />
        
        {/* Needle */}
        <motion.div 
          className="absolute bottom-0 left-1/2 w-1.5 h-24 bg-gray-800 dark:bg-white origin-bottom rounded-full z-10"
          initial={{ rotate: -90 }}
          animate={isInView ? { rotate: (score / 100) * 180 - 90 } : {}}
          transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ translateX: '-50%' }}
        />
        <div className="absolute bottom-0 left-1/2 w-6 h-6 bg-gray-900 dark:bg-white rounded-full -translate-x-1/2 translate-y-1/2 z-20 ring-4 ring-white dark:ring-slate-900" />
      </div>

      <div className="text-center relative z-10">
        <motion.div 
          key={score}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className={`text-5xl font-bold font-display ${
            score > 70 ? 'text-[#1AAE82]' : score > 40 ? 'text-yellow-500' : 'text-red-500'
          }`}
        >
          {score}
        </motion.div>
        <div className="text-sm font-bold mt-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-slate-800 inline-block px-3 py-1 rounded-lg">Safe to Post</div>
        <div className="text-xs text-gray-400 mt-6 pt-6 border-t border-gray-100 dark:border-slate-800 flex items-center justify-center gap-2">
          <ShieldCheck className="w-3 h-3" /> Powered by 12k+ scans today
        </div>
      </div>
    </div>
  );
};

// 3. Tone Matching Preview (Solution Section)
const ToneMatchingPreview = () => {
  const tones = [
    { name: "Professional", color: "bg-blue-50 text-blue-600 border-blue-200", icon: <Lock className="w-3 h-3" />, text: "Data-driven approach to..." },
    { name: "Friendly", color: "bg-green-50 text-green-600 border-green-200", icon: <Sparkles className="w-3 h-3" />, text: "You won't believe how easy..." },
    { name: "Educational", color: "bg-purple-50 text-purple-600 border-purple-200", icon: <Zap className="w-3 h-3" />, text: "Here are 3 ways to fix..." }
  ];

  return (
    <div className="bg-gray-50 dark:bg-slate-800/50 rounded-[2rem] p-8 border border-gray-100 dark:border-slate-800/50">
      <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 text-center flex items-center justify-center gap-2">
        <MessageSquare className="w-4 h-4" /> Tone Matching
      </div>
      <div className="space-y-4">
        {tones.map((tone, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className={`p-4 rounded-2xl border ${tone.color.replace('text-', 'border-opacity-30 ')} bg-white dark:bg-slate-900 flex items-center gap-4 shadow-sm hover:shadow-md transition-all`}
          >
            <div className={`w-10 h-10 rounded-xl ${tone.color} flex items-center justify-center shadow-inner`}>
              {tone.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-gray-900 dark:text-white flex justify-between mb-1">
                {tone.name}
                <span className="text-[10px] text-gray-400 font-normal bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded">AI Generated</span>
              </div>
              <div className="text-sm text-gray-500 truncate">{tone.text}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 4. Brand Fit Tool (Conversion Hook)
const BrandFitTool = ({ content }: { content: any }) => {
  const [handle, setHandle] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const checkFit = () => {
    if (!handle) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult({
        score: 72,
        pros: "Strong trend match potential",
        cons: "Tone needs native adaptation"
      });
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 md:p-12 border border-gray-200 dark:border-slate-800 shadow-2xl max-w-3xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#1AAE82] to-blue-500" />
      
      {!result ? (
        <>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              {content.headline}
            </h3>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              {content.subheadline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="relative flex-1">
              <input 
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                placeholder={content.placeholder}
                className="w-full pl-6 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-[#1AAE82] focus:border-transparent outline-none transition-all text-lg"
              />
            </div>
            <button 
              onClick={checkFit}
              disabled={!handle || loading}
              className={`px-8 py-4 rounded-2xl font-bold text-white transition-all flex items-center justify-center gap-2 whitespace-nowrap text-lg ${
                !handle || loading
                  ? 'bg-gray-300 dark:bg-slate-700 cursor-not-allowed' 
                  : 'bg-[#1AAE82] hover:bg-[#15956F] shadow-lg shadow-[#1AAE82]/20 hover:-translate-y-1'
              }`}
            >
              {loading ? (
                <Sparkles className="w-5 h-5 animate-spin" />
              ) : (
                content.button
              )}
            </button>
          </div>
        </>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-6">
             <div className="font-bold text-2xl text-gray-900 dark:text-white">{handle}</div>
             <button onClick={() => setResult(null)} className="text-sm font-bold text-gray-400 hover:text-gray-600 bg-gray-100 dark:bg-slate-800 px-4 py-2 rounded-lg transition-colors">Reset</button>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
            <div className="relative w-32 h-32 flex-shrink-0">
               <svg className="w-full h-full transform -rotate-90">
                 <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100 dark:text-slate-800" />
                 <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray={351.8} strokeDashoffset={351.8 * (1 - result.score/100)} className="text-[#1AAE82] drop-shadow-lg" />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-900 dark:text-white font-display">
                 {result.score}
               </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-green-600 font-bold bg-green-50 dark:bg-green-900/10 px-4 py-3 rounded-xl border border-green-100 dark:border-green-900/30">
                <Check className="w-5 h-5" /> {result.pros}
              </div>
              <div className="flex items-center gap-3 text-yellow-600 font-bold bg-yellow-50 dark:bg-yellow-900/10 px-4 py-3 rounded-xl border border-yellow-100 dark:border-yellow-900/30">
                <AlertTriangle className="w-5 h-5" /> {result.cons}
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-2xl shadow-xl shadow-[#1AAE82]/20 transition-all hover:-translate-y-1 text-lg"
            >
              {content.fullReport} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// 5. Count Up Stat (Reused)
const CountUpStat = ({ target, suffix = "", label, subLabel }: { target: number, suffix?: string, label: string, subLabel?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
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
    <div ref={ref} className="text-center p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="text-5xl md:text-6xl font-bold text-[#1AAE82] mb-4 font-display">
        {count}{suffix}
      </div>
      <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">{label}</div>
      {subLabel && <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{subLabel}</div>}
    </div>
  );
};

export function BrandsPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  // SEO
  const seo = seoConfig.brands?.[language as 'en' | 'zh' | 'ja' | 'ko' | 'es' | 'fr' | 'de'] || seoConfig.brands?.en;

  // Local Content
  const content = (localizedContent as any)[language] || localizedContent.en;
  const problemModuleUi = (problemModuleUiByLang as any)[language] || problemModuleUiByLang.en;
  const whyItMattersUi = (whyItMattersUiByLang as any)[language] || whyItMattersUiByLang.en;

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans selection:bg-[#1AAE82]/30 text-gray-900 dark:text-gray-100">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={getCanonicalUrl('/solutions/brands', language)}
        lang={language}
        alternates={generateAlternates('/solutions/brands')}
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

      <main className="bg-white dark:bg-[#020617]">
        {/* 1. HERO SECTION */}
        <div className="relative overflow-hidden">
           <AuroraBackground 
             colorStops={isDarkMode ? ['#020617', '#1AAE82', '#020617'] : ['#FFFFFF', '#E0F2FE', '#FFFFFF']} 
             speed={0.3} 
             blend={0.5}
             baseColor={isDarkMode ? 0.0 : 1.0}
             className="absolute inset-0 z-0 opacity-40"
           />

           <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center z-10">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
             >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
                 <ShieldCheck className="w-3 h-3" /> Brand Safety First
               </div>

               <h1 className="text-4xl md:text-7xl font-bold font-display text-gray-900 dark:text-white mb-8 leading-[1.1] max-w-5xl mx-auto tracking-tight">
                 {content.hero.title}
               </h1>
               <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                 {content.hero.lead}
               </p>
               <div className="flex flex-col sm:flex-row gap-5 justify-center">
                 <button 
                   onClick={() => handleNavigate('auth')}
                   className="px-10 py-5 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-full shadow-xl shadow-[#1AAE82]/20 transition-all hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
                 >
                   {content.hero.primaryCta} <ArrowRight className="w-5 h-5" />
                 </button>
                 <button 
                   onClick={() => handleNavigate('landing')}
                   className="px-10 py-5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-50 dark:hover:bg-slate-700 transition-all text-lg"
                 >
                   {content.hero.secondaryCta}
                 </button>
               </div>
             </motion.div>
           </section>
        </div>

        {/* 2. CORE INSIGHT (Replaces TL;DR) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-32 -mt-10 relative z-20">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-white/50 dark:border-slate-700/50 ring-1 ring-black/5 flex flex-col md:flex-row gap-10 items-center text-center md:text-left">
             <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">{content.ui?.coreInsight || 'Core Insight'}</h3>
                <p className="text-xl md:text-2xl text-gray-900 dark:text-white leading-relaxed font-medium">
                  {content.tldr}
                </p>
             </div>
             
             <div className="w-full md:w-80 shrink-0 bg-white/50 dark:bg-slate-800/50 rounded-2xl p-6 border border-gray-200 dark:border-slate-700/50 text-left">
                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                  <Target className="w-5 h-5 text-[#1AAE82]" />
                  {whyItMattersUi.title}
                </h4>
                <div className="space-y-3">
                  {whyItMattersUi.items.map((item: string, idx: number) => (
                    <div key={`${item}-${idx}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-red-500' : idx === 1 ? 'bg-yellow-500' : 'bg-green-500'}`} />
                      {item}
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* 3. PROBLEM SECTION (Split Screen) */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#020617]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-6">
                {content.problem.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {content.problem.subtitle}
              </p>
            </div>

            <ProblemDiagnosticModule items={content.problem.items} ui={problemModuleUi} />
          </div>
        </section>

        {/* 4. SOLUTION SECTION */}
        <section className="py-32 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-8 leading-tight">
                  {content.solution.title}
                </h2>
                <div className="space-y-6">
                  {content.solution.items.map((item: any, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 }}
                      className="flex gap-6 p-6 rounded-3xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors group cursor-default"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#1AAE82]/10 flex items-center justify-center flex-shrink-0 text-[#1AAE82] group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-10 pl-6">
                  <a href="/social/features" className="text-[#1AAE82] font-bold text-lg hover:underline flex items-center gap-2">
                    {content.solution.action} <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="space-y-10 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#1AAE82]/10 to-blue-500/10 rounded-full blur-[80px] -z-10" />
                <BrandSafetyGauge />
                <ToneMatchingPreview />
              </div>
            </div>
          </div>
        </section>

        {/* 5. BRAND FIT TOOL (Conversion) */}
        <section className="py-32 bg-gray-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <BrandFitTool content={content.conversion} />
          </div>
        </section>

        {/* 6. RESULTS SECTION */}
        <section className="py-32 bg-white dark:bg-[#020617]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-6">
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
            <p className="text-center text-sm text-gray-400 mt-12 max-w-2xl mx-auto italic">
              {content.results.disclaimer}
            </p>
          </div>
        </section>

        {/* 7. FEATURES CHECKLIST */}
        <section className="py-32 bg-[#F8FAFC] dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-display text-gray-900 dark:text-white">{content.features.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {content.features.items.map((item: string, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700/50"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1AAE82]/20 flex items-center justify-center flex-shrink-0 text-[#1AAE82]">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-gray-900 dark:text-white font-bold text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. BOUNDARY & CTA */}
        <section className="py-32 bg-[#111827] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1AAE82]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-16 text-left max-w-2xl mx-auto backdrop-blur-md">
              <h4 className="text-[#1AAE82] font-bold mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                <Lock className="w-4 h-4" /> {content.ui?.transparencyNote || 'Transparency Note'}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {content.boundary.note}
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">
              {content.cta.title}
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              {content.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => handleNavigate('auth')}
                className="px-10 py-5 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-full shadow-lg shadow-[#1AAE82]/30 transition-all hover:-translate-y-1 text-lg"
              >
                {content.cta.primary}
              </button>
              <button 
                onClick={() => handleNavigate('landing')}
                className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all text-lg"
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

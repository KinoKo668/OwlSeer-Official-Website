import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Check, 
  X as XIcon,
  Zap, 
  Play, 
  Lock,
  Scale,
  Target,
  Layers,
  Smartphone,
  Globe
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations as globalTranslations } from '../../data/translations';
import { generateAlternates, getCanonicalUrl } from '../../data/seoConfig';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { SEO } from '../SEO';

// --- Translations ---
const pageTranslations = {
  en: {
    meta: {
      title: "OwlSeer vs TubeSpanner — TikTok Comparison",
      description: "Compare OwlSeer and TubeSpanner for TikTok. Platform depth vs breadth — signal analysis, trend prediction, and scripts vs multi-platform dashboards."
    },
    hero: {
      title: "OwlSeer vs TubeSpanner",
      lead: "Specialist vs Generalist. Deep Dive vs Wide Net. Understand the fundamental difference between TikTok-Native and Multi-Platform tools.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Explore Sample"
    },
    insight: {
      title: "Strategic Distinction",
      content: "TubeSpanner is about breadth: managing YouTube, TikTok, and Instagram from one dashboard. OwlSeer is about depth: unlocking the specific algorithmic signals that drive growth on TikTok.",
      link: "competition level analysis"
    },
    comparison: {
      title: "Feature Comparison",
      headers: ["Feature", "OwlSeer", "TubeSpanner"],
      rows: [
        { feature: "Platform Focus", owlseer: "TikTok Exclusive", tubespanner: "Multi-Platform" },
        { feature: "Signal Analysis", owlseer: "30+ Weighted Signals", tubespanner: "Basic Engagement" },
        { feature: "Trend Engine", owlseer: "Velocity + Competition", tubespanner: "Aggregated Lists" },
        { feature: "Script Writing", owlseer: "Data-Driven Generation", tubespanner: "—" },
        { feature: "Competition Score", owlseer: "Real-time Calculation", tubespanner: "Tracking Only" },
        { feature: "Diagnosis", owlseer: "Algorithmic Fixes", tubespanner: "Summaries" },
        { feature: "AI Copilot", owlseer: "Context-Aware", tubespanner: "—" }
      ]
    },
    when: {
      title: "Which Tool Fits You?",
      owlseer: {
        title: "Choose OwlSeer if:",
        points: [
          "TikTok is your primary growth channel.",
          "You need scripts generated from your actual data.",
          "You want to predict trends before they peak.",
          "You need deep algorithmic diagnostics."
        ]
      },
      tubespanner: {
        title: "Choose TubeSpanner if:",
        points: [
          "You treat all platforms equally.",
          "You need a single dashboard for everything.",
          "TikTok is a secondary repurposing channel.",
          "You prioritize workflow over specific optimization."
        ]
      },
      coexist: "Pro Tip: Many creators use TubeSpanner for management and OwlSeer for strategy."
    },
    boundary: {
      title: "Transparency",
      data: "Comparison based on public features as of Feb 2026.",
      limit: "We respect TubeSpanner's multi-platform capabilities. This comparison highlights our specific focus on TikTok mastery.",
      note: "Features evolve rapidly. Verify on official sites."
    },
    cta: {
      title: "Go Deep on TikTok",
      primary: "Start Free Trial",
      secondary: "Explore Sample"
    },
    ui: {
      badge: "Direct Comparison"
    }
  },
  zh: {
    meta: {
      title: "OwlSeer vs TubeSpanner — TikTok 对比",
      description: "对比 OwlSeer 和 TubeSpanner 的 TikTok 分析功能。平台深度与广度的较量——信号分析、趋势预测和脚本 vs 多平台仪表板。"
    },
    hero: {
      title: "OwlSeer vs TubeSpanner",
      lead: "专精 vs 通用。深度 vs 广度。了解 TikTok 原生工具与多平台工具之间的根本区别。",
      ctaPrimary: "开始免费试用",
      ctaSecondary: "探索演示"
    },
    insight: {
      title: "战略区别",
      content: "TubeSpanner 追求广度：在一个仪表板管理 YouTube、TikTok 和 Instagram。OwlSeer 追求深度：解锁驱动 TikTok 增长的特定算法信号。",
      link: "竞争水平分析"
    },
    comparison: {
      title: "功能对比",
      headers: ["功能", "OwlSeer", "TubeSpanner"],
      rows: [
        { feature: "平台重心", owlseer: "TikTok 独占", tubespanner: "多平台" },
        { feature: "信号分析", owlseer: "30+ 加权信号", tubespanner: "基础互动" },
        { feature: "趋势引擎", owlseer: "速度 + 竞争度", tubespanner: "聚合列表" },
        { feature: "脚本写作", owlseer: "数据驱动生成", tubespanner: "—" },
        { feature: "竞争评分", owlseer: "实时计算", tubespanner: "仅追踪" },
        { feature: "诊断修复", owlseer: "算法级修复", tubespanner: "摘要" },
        { feature: "AI Copilot", owlseer: "上下文感知", tubespanner: "—" }
      ]
    },
    when: {
      title: "哪个工具适合你？",
      owlseer: {
        title: "选择 OwlSeer 如果：",
        points: [
          "TikTok 是你的主要增长渠道。",
          "你需要基于真实数据生成的脚本。",
          "你想在趋势见顶前预测它们。",
          "你需要深度的算法诊断。"
        ]
      },
      tubespanner: {
        title: "选择 TubeSpanner 如果：",
        points: [
          "你同等对待所有平台。",
          "你需要一个仪表板管理一切。",
          "TikTok 只是二次分发渠道。",
          "你优先考虑工作流而非特定优化。"
        ]
      },
      coexist: "专家提示：许多创作者使用 TubeSpanner 进行管理，使用 OwlSeer 制定策略。"
    },
    boundary: {
      title: "透明度",
      data: "对比基于 2026 年 2 月的公开功能。",
      limit: "我们尊重 TubeSpanner 的多平台能力。此对比强调我们在 TikTok 精通方面的特定重点。",
      note: "功能迭代迅速，请以官网为准。"
    },
    cta: {
      title: "深入 TikTok",
      primary: "开始免费试用",
      secondary: "探索演示"
    },
    ui: {
      badge: "直接对比"
    }
  },
  ja: {
    meta: {
      title: "OwlSeer vs TubeSpanner — TikTok比較",
      description: "OwlSeerとTubeSpannerをTikTok視点で比較。プラットフォーム深度と広さ、シグナル分析、トレンド予測、台本生成の違いを確認できます。"
    },
    hero: {
      title: "OwlSeer vs TubeSpanner",
      lead: "特化型 vs 汎用型。深掘り vs 広範囲。TikTokネイティブツールとマルチプラットフォームツールの本質的な違いを整理します。",
      ctaPrimary: "無料トライアルを開始",
      ctaSecondary: "サンプルを見る"
    },
    insight: {
      title: "戦略上の違い",
      content: "TubeSpannerは広さ重視。YouTube、TikTok、Instagramを1つのダッシュボードで管理します。OwlSeerは深さ重視。TikTok成長を左右するアルゴリズム信号を掘り下げます。",
      link: "競争レベル分析"
    },
    comparison: {
      title: "機能比較",
      headers: ["機能", "OwlSeer", "TubeSpanner"],
      rows: [
        { feature: "プラットフォーム軸", owlseer: "TikTok専用", tubespanner: "マルチプラットフォーム" },
        { feature: "シグナル分析", owlseer: "30+重み付きシグナル", tubespanner: "基本エンゲージメント" },
        { feature: "トレンドエンジン", owlseer: "速度 + 競争度", tubespanner: "集計リスト" },
        { feature: "台本作成", owlseer: "データ駆動生成", tubespanner: "—" },
        { feature: "競争スコア", owlseer: "リアルタイム算出", tubespanner: "追跡のみ" },
        { feature: "診断", owlseer: "アルゴリズム修正提案", tubespanner: "要約" },
        { feature: "AIコパイロット", owlseer: "文脈理解型", tubespanner: "—" }
      ]
    },
    when: {
      title: "どちらがあなた向き？",
      owlseer: {
        title: "OwlSeerを選ぶなら：",
        points: [
          "TikTokが主要な成長チャネル",
          "実データに基づく台本生成が必要",
          "トレンドの山を迎える前に予測したい",
          "深いアルゴリズム診断が必要"
        ]
      },
      tubespanner: {
        title: "TubeSpannerを選ぶなら：",
        points: [
          "全プラットフォームを同列に扱う",
          "運用を1つのダッシュボードに統合したい",
          "TikTokは二次配信チャネル",
          "個別最適よりワークフロー効率を優先する"
        ]
      },
      coexist: "実務ヒント：管理はTubeSpanner、戦略はOwlSeerという併用も多いです。"
    },
    boundary: {
      title: "透明性",
      data: "比較は2026年2月時点の公開機能に基づきます。",
      limit: "TubeSpannerのマルチプラットフォーム性は高く評価しています。この比較はTikTok特化の違いを示すものです。",
      note: "機能は頻繁に更新されます。最終的には公式サイトで確認してください。"
    },
    cta: {
      title: "TikTokを深く伸ばす",
      primary: "無料トライアルを開始",
      secondary: "サンプルを見る"
    },
    ui: {
      badge: "直接比較"
    }
  },
  ko: {
    meta: {
      title: "OwlSeer vs TubeSpanner — TikTok 비교",
      description: "OwlSeer와 TubeSpanner를 TikTok 관점에서 비교합니다. 플랫폼 집중도, 신호 분석, 트렌드 예측, 스크립트 기능 차이를 확인하세요."
    },
    hero: {
      title: "OwlSeer vs TubeSpanner",
      lead: "전문화 vs 범용. 깊이 vs 넓이. TikTok 네이티브 툴과 멀티 플랫폼 툴의 핵심 차이를 정리합니다.",
      ctaPrimary: "무료 체험 시작",
      ctaSecondary: "샘플 보기"
    },
    insight: {
      title: "전략적 차이",
      content: "TubeSpanner는 범위를 중시합니다. YouTube·TikTok·Instagram을 하나의 대시보드에서 관리합니다. OwlSeer는 깊이를 중시합니다. TikTok 성장에 직접 영향을 주는 알고리즘 신호를 분석합니다.",
      link: "경쟁 강도 분석"
    },
    comparison: {
      title: "기능 비교",
      headers: ["기능", "OwlSeer", "TubeSpanner"],
      rows: [
        { feature: "플랫폼 초점", owlseer: "TikTok 전용", tubespanner: "멀티 플랫폼" },
        { feature: "신호 분석", owlseer: "30개+ 가중 신호", tubespanner: "기본 참여 지표" },
        { feature: "트렌드 엔진", owlseer: "속도 + 경쟁도", tubespanner: "집계 리스트" },
        { feature: "스크립트 작성", owlseer: "데이터 기반 생성", tubespanner: "—" },
        { feature: "경쟁 점수", owlseer: "실시간 계산", tubespanner: "추적만 제공" },
        { feature: "진단", owlseer: "알고리즘 수준 개선안", tubespanner: "요약 중심" },
        { feature: "AI 코파일럿", owlseer: "맥락 인지형", tubespanner: "—" }
      ]
    },
    when: {
      title: "어떤 툴이 맞을까?",
      owlseer: {
        title: "이런 경우 OwlSeer:",
        points: [
          "TikTok이 핵심 성장 채널이다",
          "실제 데이터 기반 스크립트가 필요하다",
          "트렌드 정점 전에 예측하고 싶다",
          "깊은 알고리즘 진단이 필요하다"
        ]
      },
      tubespanner: {
        title: "이런 경우 TubeSpanner:",
        points: [
          "모든 플랫폼을 동일하게 운영한다",
          "하나의 대시보드로 통합 관리가 필요하다",
          "TikTok은 보조 재활용 채널이다",
          "세부 최적화보다 워크플로 효율이 중요하다"
        ]
      },
      coexist: "실무 팁: 운영 관리는 TubeSpanner, 전략은 OwlSeer로 병행하는 팀이 많습니다."
    },
    boundary: {
      title: "투명성",
      data: "비교 내용은 2026년 2월 공개 기능 기준입니다.",
      limit: "TubeSpanner의 멀티 플랫폼 강점을 존중합니다. 이 비교는 TikTok 집중도 차이를 설명하기 위한 것입니다.",
      note: "기능은 빠르게 바뀝니다. 최종 정보는 공식 사이트에서 확인하세요."
    },
    cta: {
      title: "TikTok을 더 깊게 성장시키세요",
      primary: "무료 체험 시작",
      secondary: "샘플 보기"
    },
    ui: {
      badge: "직접 비교"
    }
  },
  es: {
    meta: {
      title: "OwlSeer vs TubeSpanner — Comparativa TikTok",
      description: "Compara OwlSeer y TubeSpanner para TikTok. Profundidad vs amplitud: análisis de señales, predicción de tendencias y guiones frente a paneles multiplaforma."
    },
    hero: {
      title: "OwlSeer vs TubeSpanner",
      lead: "Especialista vs generalista. Profundidad vs amplitud. Entiende la diferencia clave entre herramientas nativas de TikTok y herramientas multiplaforma.",
      ctaPrimary: "Iniciar prueba gratis",
      ctaSecondary: "Ver muestra"
    },
    insight: {
      title: "Diferencia estratégica",
      content: "TubeSpanner apuesta por amplitud: gestionar YouTube, TikTok e Instagram desde un solo panel. OwlSeer apuesta por profundidad: detectar las señales algorítmicas que impulsan crecimiento en TikTok.",
      link: "análisis del nivel de competencia"
    },
    comparison: {
      title: "Comparación de funciones",
      headers: ["Función", "OwlSeer", "TubeSpanner"],
      rows: [
        { feature: "Enfoque de plataforma", owlseer: "Exclusivo TikTok", tubespanner: "Multiplaforma" },
        { feature: "Análisis de señales", owlseer: "30+ señales ponderadas", tubespanner: "Engagement básico" },
        { feature: "Motor de tendencias", owlseer: "Velocidad + competencia", tubespanner: "Listas agregadas" },
        { feature: "Guionización", owlseer: "Generación basada en datos", tubespanner: "—" },
        { feature: "Score competitivo", owlseer: "Cálculo en tiempo real", tubespanner: "Solo seguimiento" },
        { feature: "Diagnóstico", owlseer: "Correcciones algorítmicas", tubespanner: "Resúmenes" },
        { feature: "Copiloto IA", owlseer: "Con contexto", tubespanner: "—" }
      ]
    },
    when: {
      title: "¿Qué herramienta encaja contigo?",
      owlseer: {
        title: "Elige OwlSeer si:",
        points: [
          "TikTok es tu canal principal de crecimiento",
          "Necesitas guiones generados con tus datos reales",
          "Quieres predecir tendencias antes de su pico",
          "Necesitas diagnóstico algorítmico profundo"
        ]
      },
      tubespanner: {
        title: "Elige TubeSpanner si:",
        points: [
          "Tratas todas las plataformas por igual",
          "Necesitas un único panel para todo",
          "TikTok es un canal secundario de reutilización",
          "Priorizas flujo de trabajo sobre optimización específica"
        ]
      },
      coexist: "Tip pro: muchos creadores usan TubeSpanner para gestión y OwlSeer para estrategia."
    },
    boundary: {
      title: "Transparencia",
      data: "Comparación basada en funciones públicas a febrero de 2026.",
      limit: "Respetamos las capacidades multiplaforma de TubeSpanner. Esta comparación destaca nuestro enfoque en dominar TikTok.",
      note: "Las funciones evolucionan rápido. Verifica en los sitios oficiales."
    },
    cta: {
      title: "Profundiza en TikTok",
      primary: "Iniciar prueba gratis",
      secondary: "Ver muestra"
    },
    ui: {
      badge: "Comparación directa"
    }
  },
  fr: {
    meta: {
      title: "OwlSeer vs TubeSpanner — Comparatif TikTok",
      description: "Comparez OwlSeer et TubeSpanner pour TikTok. Profondeur vs largeur : analyse de signaux, prédiction de tendances et scripts vs tableaux de bord multi-plateformes."
    },
    hero: {
      title: "OwlSeer vs TubeSpanner",
      lead: "Spécialiste vs généraliste. Profondeur vs largeur. Comprenez la différence fondamentale entre outils TikTok natifs et outils multi-plateformes.",
      ctaPrimary: "Commencer l’essai gratuit",
      ctaSecondary: "Voir l’exemple"
    },
    insight: {
      title: "Différence stratégique",
      content: "TubeSpanner privilégie la largeur : gérer YouTube, TikTok et Instagram depuis un seul dashboard. OwlSeer privilégie la profondeur : exploiter les signaux algorithmiques qui pilotent la croissance sur TikTok.",
      link: "analyse du niveau de concurrence"
    },
    comparison: {
      title: "Comparaison des fonctionnalités",
      headers: ["Fonction", "OwlSeer", "TubeSpanner"],
      rows: [
        { feature: "Focus plateforme", owlseer: "Exclusif TikTok", tubespanner: "Multi-plateformes" },
        { feature: "Analyse de signaux", owlseer: "30+ signaux pondérés", tubespanner: "Engagement basique" },
        { feature: "Moteur de tendances", owlseer: "Vitesse + concurrence", tubespanner: "Listes agrégées" },
        { feature: "Écriture de scripts", owlseer: "Génération pilotée par la data", tubespanner: "—" },
        { feature: "Score concurrentiel", owlseer: "Calcul en temps réel", tubespanner: "Suivi uniquement" },
        { feature: "Diagnostic", owlseer: "Correctifs algorithmiques", tubespanner: "Synthèses" },
        { feature: "Copilote IA", owlseer: "Contextuel", tubespanner: "—" }
      ]
    },
    when: {
      title: "Quel outil vous convient ?",
      owlseer: {
        title: "Choisissez OwlSeer si :",
        points: [
          "TikTok est votre canal principal de croissance",
          "Vous avez besoin de scripts basés sur vos vraies données",
          "Vous voulez anticiper les tendances avant leur pic",
          "Vous avez besoin d’un diagnostic algorithmique profond"
        ]
      },
      tubespanner: {
        title: "Choisissez TubeSpanner si :",
        points: [
          "Vous traitez toutes les plateformes à égalité",
          "Vous voulez un dashboard unique pour tout piloter",
          "TikTok est un canal secondaire de republication",
          "Vous privilégiez le workflow à l’optimisation fine"
        ]
      },
      coexist: "Astuce pro : beaucoup de créateurs utilisent TubeSpanner pour la gestion et OwlSeer pour la stratégie."
    },
    boundary: {
      title: "Transparence",
      data: "Comparatif basé sur les fonctionnalités publiques disponibles en février 2026.",
      limit: "Nous respectons les capacités multi-plateformes de TubeSpanner. Ce comparatif met en avant notre focus spécifique sur la maîtrise TikTok.",
      note: "Les fonctionnalités évoluent rapidement. Vérifiez les sites officiels."
    },
    cta: {
      title: "Passez en mode TikTok profond",
      primary: "Commencer l’essai gratuit",
      secondary: "Voir l’exemple"
    },
    ui: {
      badge: "Comparaison directe"
    }
  },
  de: {
    meta: {
      title: "OwlSeer vs TubeSpanner — TikTok-Vergleich",
      description: "Vergleiche OwlSeer und TubeSpanner für TikTok. Tiefe vs Breite: Signalanalyse, Trendprognose und Skripte vs Multi-Platform-Dashboards."
    },
    hero: {
      title: "OwlSeer vs TubeSpanner",
      lead: "Spezialist vs Generalist. Tiefe vs Breite. Verstehe den grundlegenden Unterschied zwischen TikTok-nativen und plattformübergreifenden Tools.",
      ctaPrimary: "Kostenlos testen",
      ctaSecondary: "Sample ansehen"
    },
    insight: {
      title: "Strategischer Unterschied",
      content: "TubeSpanner steht für Breite: YouTube, TikTok und Instagram in einem Dashboard verwalten. OwlSeer steht für Tiefe: die algorithmischen Signale freilegen, die Wachstum auf TikTok wirklich treiben.",
      link: "Analyse des Wettbewerbsniveaus"
    },
    comparison: {
      title: "Funktionsvergleich",
      headers: ["Funktion", "OwlSeer", "TubeSpanner"],
      rows: [
        { feature: "Plattform-Fokus", owlseer: "TikTok exklusiv", tubespanner: "Multi-Plattform" },
        { feature: "Signalanalyse", owlseer: "30+ gewichtete Signale", tubespanner: "Basis-Engagement" },
        { feature: "Trend-Engine", owlseer: "Velocity + Wettbewerb", tubespanner: "Aggregierte Listen" },
        { feature: "Skript-Erstellung", owlseer: "Datengetriebene Generierung", tubespanner: "—" },
        { feature: "Wettbewerbsscore", owlseer: "Echtzeit-Berechnung", tubespanner: "Nur Tracking" },
        { feature: "Diagnose", owlseer: "Algorithmische Fixes", tubespanner: "Zusammenfassungen" },
        { feature: "KI-Copilot", owlseer: "Kontextbewusst", tubespanner: "—" }
      ]
    },
    when: {
      title: "Welches Tool passt zu dir?",
      owlseer: {
        title: "Wähle OwlSeer, wenn:",
        points: [
          "TikTok dein primärer Wachstumskanal ist",
          "du Skripte aus deinen echten Daten brauchst",
          "du Trends vor dem Peak erkennen willst",
          "du tiefe algorithmische Diagnosen benötigst"
        ]
      },
      tubespanner: {
        title: "Wähle TubeSpanner, wenn:",
        points: [
          "du alle Plattformen gleich behandelst",
          "du ein zentrales Dashboard für alles brauchst",
          "TikTok ein sekundärer Repurposing-Kanal ist",
          "du Workflow vor spezifischer Optimierung priorisierst"
        ]
      },
      coexist: "Pro-Tipp: Viele Creator nutzen TubeSpanner fürs Management und OwlSeer für die Strategie."
    },
    boundary: {
      title: "Transparenz",
      data: "Vergleich basierend auf öffentlichen Funktionen (Stand Februar 2026).",
      limit: "Wir respektieren die Multi-Plattform-Stärken von TubeSpanner. Dieser Vergleich zeigt gezielt unseren Fokus auf TikTok-Mastery.",
      note: "Features entwickeln sich schnell. Prüfe Details auf den offiziellen Seiten."
    },
    cta: {
      title: "Mehr Tiefe auf TikTok",
      primary: "Kostenlos testen",
      secondary: "Sample ansehen"
    },
    ui: {
      badge: "Direktvergleich"
    }
  }
};

export const TubeSpannerComparePage = ({ 
  onNavigate, 
  isDarkMode, 
  setIsDarkMode 
}: { 
  onNavigate: (page: string) => void, 
  isDarkMode: boolean, 
  setIsDarkMode: (isDark: boolean) => void 
}) => {
  const { language, setLanguage } = useLanguage();
  const t = (pageTranslations as any)[language] || pageTranslations.en;
  const globalT = globalTranslations[language] || globalTranslations.en;

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans text-gray-900 dark:text-white selection:bg-[#1AAE82]/30 transition-colors duration-300">
      <SEO 
        title={t.meta.title}
        description={t.meta.description}
        keywords={["owlseer vs tubespanner", "tubespanner alternative", "tiktok analytics tool", "multi-platform analytics"]}
        canonicalUrl={getCanonicalUrl('/vs/tubespanner', language)}
        lang={language}
        alternates={generateAlternates('/vs/tubespanner')}
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

      <main className="relative bg-white pt-[72px] dark:bg-[#020617]">
        <section className="perf-content-auto relative z-10 overflow-hidden pt-32 pb-40">
          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-300/55 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1AAE82] backdrop-blur-md dark:border-emerald-500/35 dark:bg-slate-900/60">
                <Scale className="h-3.5 w-3.5" /> {t.ui?.badge || 'Direct Comparison'}
              </div>
              <h1 className="mx-auto mb-8 max-w-5xl font-display text-5xl font-bold leading-[1.1] text-gray-900 dark:text-white md:text-7xl lg:text-8xl">
                {t.hero.title}
              </h1>
              <p className="mx-auto mb-12 max-w-3xl text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 md:text-2xl">
                {t.hero.lead}
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
                <button
                  onClick={() => onNavigate('/social/auth')}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#059669] to-[#10b981] px-8 py-4 text-base font-semibold text-white shadow-[0_20px_48px_-30px_rgba(16,185,129,0.9)] transition-all duration-300 hover:from-[#047857] hover:to-[#059669] sm:text-lg"
                >
                  {t.hero.ctaPrimary}
                </button>
                <button
                  onClick={() => onNavigate('/social/simulation')}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/85 bg-white/75 px-8 py-4 text-base font-semibold text-gray-800 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.85)] backdrop-blur-md transition-all duration-300 hover:bg-white dark:border-white/12 dark:bg-slate-900/60 dark:text-white dark:hover:bg-slate-900/75 sm:text-lg"
                >
                  {t.hero.ctaSecondary}
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10 mt-[-1px] overflow-hidden bg-[#f6f7fb] dark:bg-[#070c14]">
          {/* Insight */}
          <section className="perf-content-auto mx-auto mb-24 max-w-4xl px-4 pt-20 sm:mb-28 sm:px-6 lg:px-8 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[30px] border border-white/85 bg-white/72 p-7 shadow-[0_30px_85px_-58px_rgba(15,23,42,0.95)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 sm:p-10"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-[#1AAE82]" />
              <div className="flex items-start gap-5 sm:gap-6">
                <div className="hidden shrink-0 rounded-xl bg-[#1AAE82]/10 p-3 text-[#1AAE82] md:block">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-[#1AAE82]">{t.insight.title}</h3>
                  <p className="font-display text-lg leading-relaxed text-slate-800 dark:text-slate-200 sm:text-xl">
                    {t.insight.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Comparison Table */}
          <section className="perf-content-auto mx-auto mb-24 max-w-5xl px-4 sm:mb-28 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-14">
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                {t.comparison.title}
              </h2>
            </div>
            <div className="overflow-hidden rounded-[30px] border border-white/85 bg-white/72 shadow-[0_32px_88px_-60px_rgba(15,23,42,0.95)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-white/50 dark:bg-slate-800/35">
                      <th className="w-1/3 p-5 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:p-6">{t.comparison.headers[0]}</th>
                      <th className="w-1/3 border-l border-r border-slate-100 bg-[#1AAE82]/8 p-5 text-lg font-bold text-[#1AAE82] dark:border-white/10 sm:p-6">
                        {t.comparison.headers[1]}
                      </th>
                      <th className="w-1/3 p-5 text-lg font-bold text-slate-700 dark:text-slate-300 sm:p-6">
                        {t.comparison.headers[2]}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/10">
                    {t.comparison.rows.map((row: any, i: number) => (
                      <tr key={i} className="transition-colors hover:bg-slate-50/60 dark:hover:bg-slate-800/30">
                        <td className="p-5 font-bold text-slate-900 dark:text-white sm:p-6">
                          {row.feature}
                        </td>
                        <td className="border-l border-r border-slate-100 bg-[#1AAE82]/8 p-5 text-center font-medium text-slate-800 dark:border-white/10 dark:text-slate-200 sm:p-6">
                          {row.owlseer}
                        </td>
                        <td className="p-5 text-center text-slate-600 dark:text-slate-400 sm:p-6">
                          {row.tubespanner}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* When to Choose */}
          <section className="perf-content-auto mx-auto mb-24 max-w-7xl px-4 sm:mb-28 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-14">
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                {t.when.title}
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-[30px] border border-emerald-200/75 bg-emerald-50/70 p-7 shadow-[0_26px_72px_-54px_rgba(16,185,129,0.55)] backdrop-blur-md dark:border-emerald-500/30 dark:bg-emerald-900/12 sm:p-9"
              >
                <div className="absolute right-0 top-0 p-8 opacity-10">
                  <Smartphone size={130} className="text-[#1AAE82]" />
                </div>
                <h3 className="relative z-10 mb-7 text-2xl font-bold text-[#1AAE82]">{t.when.owlseer.title}</h3>
                <ul className="relative z-10 space-y-4">
                  {t.when.owlseer.points.map((point: string, i: number) => (
                    <li key={i} className="flex gap-3.5">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1AAE82]">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-base font-medium text-slate-800 dark:text-slate-200">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-[30px] border border-white/85 bg-white/75 p-7 shadow-[0_26px_72px_-54px_rgba(15,23,42,0.9)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/58 sm:p-9"
              >
                <div className="absolute right-0 top-0 p-8 opacity-10">
                  <Globe size={130} />
                </div>
                <h3 className="relative z-10 mb-7 text-2xl font-bold text-slate-700 dark:text-slate-300">{t.when.tubespanner.title}</h3>
                <ul className="relative z-10 space-y-4">
                  {t.when.tubespanner.points.map((point: string, i: number) => (
                    <li key={i} className="flex gap-3.5">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-300 dark:bg-slate-700">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-base text-slate-600 dark:text-slate-400">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-center text-base italic text-slate-500 dark:text-slate-400 sm:text-lg">
              {t.when.coexist}
            </p>
          </section>

          {/* Boundary & CTA */}
          <section className="perf-content-auto bg-gradient-to-b from-[#f6f7fb] via-[#ecfaf3] to-white px-4 pb-24 text-center dark:from-[#070c14] dark:via-[#0b1721] dark:to-slate-900 sm:px-6 sm:pb-28 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 inline-block rounded-2xl border border-white/85 bg-white/80 p-6 text-left shadow-[0_20px_44px_-34px_rgba(15,23,42,0.9)] backdrop-blur-md dark:border-white/10 dark:bg-slate-900/62">
                <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  <strong>{t.boundary.title}:</strong> {t.boundary.limit} {t.boundary.note}
                </p>
              </div>

              <h2 className="mb-8 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
                {t.cta.title}
              </h2>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
                <button
                  onClick={() => onNavigate('/social/auth')}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#059669] to-[#10b981] px-10 py-4 text-base font-semibold text-white shadow-[0_22px_50px_-32px_rgba(16,185,129,0.9)] transition-all duration-300 hover:from-[#047857] hover:to-[#059669] sm:text-lg"
                >
                  {t.cta.primary}
                </button>
                <button
                  onClick={() => onNavigate('/social/simulation')}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/85 bg-white/82 px-10 py-4 text-base font-semibold text-slate-800 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.85)] backdrop-blur-md transition-all duration-300 hover:bg-white dark:border-white/12 dark:bg-slate-900/62 dark:text-white dark:hover:bg-slate-900/75 sm:text-lg"
                >
                  {t.cta.secondary}
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer t={globalT.footer} onNavigate={onNavigate} />
    </div>
  );
};

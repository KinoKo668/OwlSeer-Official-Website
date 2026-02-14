import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  PenTool, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Play, 
  FileText,
  Sparkles,
  Lock,
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
      title: "AI TikTok Script Generation | OwlSeer",
      description: "Generate TikTok scripts in 60 seconds from your engagement data. Hook, body, CTA, sounds, and hashtags — all personalized to your audience."
    },
    hero: {
      title: "Generate TikTok Scripts from Your Data in 60 Seconds",
      lead: "OwlSeer creates ready-to-shoot scripts personalized to your audience — with hooks, body content, CTAs, sounds, and hashtags, all derived from your engagement signals.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Try Script Studio Sample"
    },
    tldr: {
      title: "The Core Concept", // Renamed from TL;DR
      content: "Script block wastes hours. OwlSeer's Script Studio generates complete scripts from your account data in under 60 seconds. Each script follows a hook-body-CTA structure calibrated to your audience's retention patterns. Hooks are based on your hook rate data, sounds come from sound velocity trends, and hashtags from hashtag momentum. You keep full control — customize tone, edit sections, or regenerate individual parts.",
      link: "Script Studio"
    },
    problem: {
      title: "Why Script Writing Is the Bottleneck",
      task: "Understand why writing scripts slows down most creators.",
      desc1: "TikTok rewards consistency. Creators who post 3-5 times per week grow faster than those who post sporadically. But producing 3-5 quality scripts per week requires significant time — topic research, hook writing, body structuring, CTA crafting, sound selection, and hashtag research. For most solo creators, this takes 2-4 hours per week.",
      desc2: "The alternative — posting without a script — leads to meandering content, weak hooks, and missed CTAs. Unscripted content typically has lower hook rates and watch-through rates because it lacks the tight structure that holds attention.",
      desc3: "Generic AI writing tools (ChatGPT, Jasper) can speed up writing, but they produce generic scripts that do not account for what works specifically with your audience. A script that works for a comedy creator would fail for a tech reviewer.",
      action: "See how data-driven scripts differ from generic ones — open Script Studio."
    },
    solution: {
      title: "How OwlSeer Generates Scripts",
      task: "See the three inputs that make each script personalized.",
      sources: [
        {
          id: 1,
          title: "Your Engagement Signals",
          icon: <Zap className="w-5 h-5" />,
          desc: "The AI analyzes your hook rate and watch-through rate to determine which formats work best. If three-segment scripts outperform single-segment by 40%, the AI defaults to three-segment structure."
        },
        {
          id: 2,
          title: "Current Trend Data",
          icon: <Sparkles className="w-5 h-5" />,
          desc: "Scripts can incorporate trending sounds and hashtags from Trend Radar. If you generate a script from a trending topic, the hook references the trend and the recommendations align with current momentum."
        },
        {
          id: 3,
          title: "Your Content Profile",
          icon: <FileText className="w-5 h-5" />,
          desc: "OwlSeer tracks your niche, brand voice, and past content to maintain consistency. A fitness creator gets different hook patterns than a finance educator, even for similar topics."
        }
      ],
      output: "The output is a complete scene-by-scene script: Hook (0-3s), Body (3-45s), CTA (last 5-10s) — plus recommended sound, hashtags, video length, and posting time.",
      action: "Try generating a script — open Script Studio demo."
    },
    workflow: {
      title: "The Script Workflow",
      task: "See how scripts fit into your weekly content process.",
      steps: [
        { day: "Mon", task: "Review Weekly Report & Recommendations" },
        { day: "Mon/Tue", task: "Generate 3-5 Scripts in Script Studio" },
        { day: "Wed-Fri", task: "Film Scripts (using shooting outline)" },
        { day: "Schedule", task: "Place on Calendar at AI-recommended times" }
      ],
      stat: "Total scripting time per week: 15-30 minutes (down from 2-4 hours)."
    },
    conversion: {
      title: "Get a Free Sample Hook",
      desc: "Tell us your niche and topic, see how OwlSeer writes your opening.",
      nichePlaceholder: "Select Niche",
      topicPlaceholder: "Enter a topic (e.g. iPhone 16 review)",
      button: "Generate My Hook",
      niches: ["Tech", "Beauty", "Fitness", "Education", "Food", "Comedy", "Business"],
      note: "Free preview of 1 sample hook. Connect account for full personalized scripts."
    },
    boundary: {
      title: "Boundary Box",
      data: "Data we use: Scripts draw from your engagement signals, content history, trend data, and niche patterns. Sound and hashtag recommendations use real-time platform data.",
      limit: "What we do not do: Scripts are starting points, not final products. Creators should review and personalize each script to match their voice, filming setup, and brand.",
      note: "Variability note: Script relevance improves with more account data. New accounts may receive more template-driven scripts initially. AI-generated hooks and CTAs may need light editing for personal voice."
    },
    cta: {
      title: "Write Your First Script in 60 Seconds",
      desc: "Connect your account and generate a personalized script immediately.",
      primary: "Start Free Trial",
      secondary: "Try Script Studio Sample"
    }
  },
  zh: {
    meta: {
      title: "AI TikTok 脚本生成 | OwlSeer",
      description: "在 60 秒内从你的互动数据生成 TikTok 脚本。钩子、正文、CTA、音频和标签——全部为你的受众定制。"
    },
    hero: {
      title: "60 秒内从你的数据生成 TikTok 脚本",
      lead: "OwlSeer 为你的受众定制可直接拍摄的脚本——钩子、正文、CTA、音频和标签，全部来自你的互动信号。",
      ctaPrimary: "开始免费试用",
      ctaSecondary: "试用脚本工作室演示"
    },
    tldr: {
      title: "核心理念",
      content: "脚本写作浪费数小时。OwlSeer 的脚本工作室在 60 秒内从你的账号数据生成完整脚本。每个脚本都遵循针对你受众留存模式校准的钩子-正文-CTA 结构。钩子基于你的钩子率数据，音频来自音频速度趋势，标签来自标签势能。你保持完全控制——自定义语气、编辑部分或重新生成个别部分。",
      link: "脚本工作室"
    },
    problem: {
      title: "为什么脚本写作是瓶颈",
      task: "了解为什么编写脚本会拖慢大多数创作者的速度。",
      desc1: "TikTok 奖励一致性。每周发布 3-5 次的创作者比偶尔发布的创作者增长得更快。但每周制作 3-5 个高质量脚本需要大量时间——话题研究、钩子编写、正文构建、CTA 制作、音频选择和标签研究。对于大多数独立创作者来说，这每周需要 2-4 小时。",
      desc2: "替代方案——没有脚本直接发布——导致内容松散、钩子薄弱和 CTA 缺失。无脚本内容的钩子率和完播率通常较低，因为它缺乏保持注意力的紧凑结构。",
      desc3: "通用 AI 写作工具（ChatGPT, Jasper）可以加快写作速度，但它们产生的是通用脚本，不考虑什么对你的受众特别有效。一个对喜剧创作者有效的脚本对科技评论员来说会失败。",
      action: "查看数据驱动脚本与通用脚本的区别 — 打开脚本工作室。"
    },
    solution: {
      title: "OwlSeer 如何生成脚本",
      task: "查看使每个脚本个性化的三个输入。",
      sources: [
        {
          id: 1,
          title: "你的互动信号",
          icon: <Zap className="w-5 h-5" />,
          desc: "AI 分析你的钩子率和完播率以确定哪种格式效果最好。如果三段式脚本比单段式表现好 40%，AI 会默认使用三段式结构。"
        },
        {
          id: 2,
          title: "当前趋势数据",
          icon: <Sparkles className="w-5 h-5" />,
          desc: "脚本可以包含来自趋势雷达的趋势音频和标签。如果你从趋势话题生成脚本，钩子会引用该趋势，建议会与当前势能保持一致。"
        },
        {
          id: 3,
          title: "你的内容画像",
          icon: <FileText className="w-5 h-5" />,
          desc: "OwlSeer 跟踪你的利基、品牌声音和过去的内容以保持一致性。健身创作者会得到与金融教育者不同的钩子模式，即使是类似的话题。"
        }
      ],
      output: "输出是一个完整的分场景脚本：钩子 (0-3s)、正文 (3-45s)、CTA (最后 5-10s) — 加上推荐的音频、标签、视频时长和发布时间。",
      action: "尝试生成一个脚本 — 打开脚本工作室演示。"
    },
    workflow: {
      title: "脚本工作流",
      task: "查看脚本如何融入你的每周内容流程。",
      steps: [
        { day: "周一", task: "查看周报和智能建议" },
        { day: "周一/周二", task: "在脚本工作室生成 3-5 个脚本" },
        { day: "周三-周五", task: "拍摄脚本（使用拍摄大纲）" },
        { day: "安排", task: "在 AI 推荐的时间放置在日历上" }
      ],
      stat: "每周脚本总时间：15-30 分钟（从 2-4 小时减少）。"
    },
    conversion: {
      title: "获取免费样本钩子",
      desc: "告诉我们你的利基和话题，看看 OwlSeer 如何编写你的开场。",
      nichePlaceholder: "选择利基",
      topicPlaceholder: "输入一个话题（例如 iPhone 16 评测）",
      button: "生成我的钩子",
      niches: ["科技", "美妆", "健身", "教育", "美食", "喜剧", "商业"],
      note: "免费预览 1 个样本钩子。连接账号获取完整个性化脚本。"
    },
    boundary: {
      title: "边界框",
      data: "我们使用的数据：脚本来自你的互动信号、内容历史、趋势数据和利基模式。音频和标签建议使用实时平台数据。",
      limit: "我们不做的：脚本是起点而非成品。创作者应审查并个性化每个脚本以匹配他们的声音、拍摄设置和品牌。",
      note: "变异性说明：脚本相关性随账号数据增加而提高。新账号最初可能会收到更偏模板化的脚本。AI 生成的钩子和 CTA 可能需要针对个人声音进行轻微编辑。"
    },
    cta: {
      title: "在 60 秒内编写你的第一个脚本",
      desc: "连接你的账号并立即生成一个个性化脚本。",
      primary: "开始免费试用",
      secondary: "试用脚本工作室演示"
    }
  }
};

const localizedPageTranslations = {
  ...pageTranslations,
  en: {
    ...pageTranslations.en,
    ui: {
      newFeature: "New Feature",
      generationTime: "Generation Time",
      manual: "Manual",
      manualHours: "2-4 Hours",
      withOwlSeer: "With OwlSeer",
      withOwlSeerMins: "15 Mins",
      output: "The Output",
      boundaryData: "Data",
      boundaryLimitations: "Limitations",
      boundaryNote: "Note"
    }
  },
  zh: {
    ...pageTranslations.zh,
    ui: {
      newFeature: "新功能",
      generationTime: "生成耗时",
      manual: "手动",
      manualHours: "2-4 小时",
      withOwlSeer: "使用 OwlSeer",
      withOwlSeerMins: "15 分钟",
      output: "输出结果",
      boundaryData: "数据",
      boundaryLimitations: "限制",
      boundaryNote: "说明"
    }
  },
  ja: {
    ...pageTranslations.en,
    meta: {
      title: "60秒でTikTokスクリプト生成 | OwlSeer",
      description: "エンゲージメントデータからTikTokスクリプトを自動生成。フック、本文、CTA、音源、ハッシュタグまで最適化。"
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "データからTikTokスクリプトを60秒で生成",
      lead: "OwlSeerは視聴者データに基づき、すぐ撮影できるスクリプトを自動作成します。",
      ctaPrimary: "無料トライアル開始",
      ctaSecondary: "Script Studioサンプルを見る"
    },
    tldr: {
      ...pageTranslations.en.tldr,
      title: "コアコンセプト",
      content: "スクリプト作成の停滞を解消。OwlSeerはアカウントデータを使って60秒以内に構成済みスクリプトを生成します。"
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "なぜ台本作成がボトルネックになるのか",
      task: "多くのクリエイターが台本作成で時間を失う理由を確認します。",
      action: "データ駆動スクリプトの違いを見る — Script Studioへ"
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "OwlSeerのスクリプト生成フロー",
      task: "個別最適化を実現する3つの入力",
      action: "スクリプトを生成してみる — Script Studioデモへ"
    },
    workflow: {
      ...pageTranslations.en.workflow,
      title: "スクリプト制作フロー",
      task: "週次コンテンツ制作にどう組み込むかを確認。"
    },
    conversion: {
      ...pageTranslations.en.conversion,
      title: "無料サンプルフックを生成",
      desc: "ニッチとトピックを入力して、冒頭フックの例を確認できます。",
      nichePlaceholder: "ニッチを選択",
      topicPlaceholder: "トピックを入力（例: iPhone 16レビュー）",
      button: "フックを生成",
      niches: ["テック", "ビューティー", "フィットネス", "教育", "フード", "コメディ", "ビジネス"],
      note: "無料で1件のサンプルフックを表示。連携後に完全な個別スクリプトを提供。"
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "透明性ボックス"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "60秒で最初のスクリプトを作成",
      desc: "アカウント接続後、すぐに個別スクリプトを生成できます。",
      primary: "無料トライアル開始",
      secondary: "Script Studioサンプルを見る"
    },
    ui: {
      newFeature: "新機能",
      generationTime: "生成時間",
      manual: "手動",
      manualHours: "2-4時間",
      withOwlSeer: "OwlSeer利用",
      withOwlSeerMins: "15分",
      output: "出力内容",
      boundaryData: "データ",
      boundaryLimitations: "制限事項",
      boundaryNote: "補足"
    }
  },
  ko: {
    ...pageTranslations.en,
    meta: {
      title: "60초 TikTok 스크립트 생성 | OwlSeer",
      description: "참여 데이터 기반으로 TikTok 스크립트를 60초 내 생성합니다. 훅, 본문, CTA, 사운드, 해시태그까지 최적화합니다."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "내 데이터로 TikTok 스크립트를 60초 안에 생성",
      lead: "OwlSeer가 오디언스 신호를 바탕으로 바로 촬영 가능한 스크립트를 자동 생성합니다.",
      ctaPrimary: "무료 체험 시작",
      ctaSecondary: "Script Studio 샘플 보기"
    },
    tldr: {
      ...pageTranslations.en.tldr,
      title: "핵심 개념",
      content: "스크립트 작성 병목을 줄입니다. OwlSeer는 계정 데이터로 60초 내 구조화된 스크립트를 생성합니다."
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "왜 스크립트 작성이 병목이 되는가",
      task: "대부분의 크리에이터가 스크립트에서 지연되는 이유를 확인하세요.",
      action: "데이터 기반 스크립트 차이 보기 — Script Studio 열기"
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "OwlSeer 스크립트 생성 방식",
      task: "개인화를 만드는 3가지 입력",
      action: "스크립트 생성해 보기 — Script Studio 데모"
    },
    workflow: {
      ...pageTranslations.en.workflow,
      title: "스크립트 워크플로",
      task: "주간 제작 프로세스에 스크립트를 연결하는 방법"
    },
    conversion: {
      ...pageTranslations.en.conversion,
      title: "무료 샘플 훅 받기",
      desc: "니치와 주제를 입력하면 OwlSeer의 오프닝 훅 예시를 확인할 수 있습니다.",
      nichePlaceholder: "니치 선택",
      topicPlaceholder: "주제 입력 (예: iPhone 16 리뷰)",
      button: "내 훅 생성하기",
      niches: ["테크", "뷰티", "피트니스", "교육", "푸드", "코미디", "비즈니스"],
      note: "무료 샘플 훅 1개 제공. 계정 연결 시 전체 개인화 스크립트 제공."
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "투명성 박스"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "60초 안에 첫 스크립트 작성",
      desc: "계정을 연결하고 즉시 개인화 스크립트를 생성하세요.",
      primary: "무료 체험 시작",
      secondary: "Script Studio 샘플 보기"
    },
    ui: {
      newFeature: "새 기능",
      generationTime: "생성 시간",
      manual: "수동",
      manualHours: "2-4시간",
      withOwlSeer: "OwlSeer 사용",
      withOwlSeerMins: "15분",
      output: "출력 결과",
      boundaryData: "데이터",
      boundaryLimitations: "제한사항",
      boundaryNote: "참고"
    }
  },
  es: {
    ...pageTranslations.en,
    meta: {
      title: "Genera scripts de TikTok en 60 segundos | OwlSeer",
      description: "Genera guiones de TikTok con tus datos de engagement. Hook, cuerpo, CTA, sonidos y hashtags optimizados para tu audiencia."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "Genera guiones de TikTok con tus datos en 60 segundos",
      lead: "OwlSeer crea guiones listos para grabar según tu audiencia.",
      ctaPrimary: "Iniciar prueba gratis",
      ctaSecondary: "Ver muestra de Script Studio"
    },
    tldr: {
      ...pageTranslations.en.tldr,
      title: "Concepto clave",
      content: "El bloqueo al escribir guiones consume horas. OwlSeer genera guiones completos en menos de 60 segundos usando datos reales de tu cuenta."
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "Por qué escribir guiones es el cuello de botella",
      task: "Entiende por qué esta etapa frena a la mayoría de creadores.",
      action: "Ver diferencia entre guiones genéricos y guiados por datos — abrir Script Studio."
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "Cómo OwlSeer genera guiones",
      task: "Mira las tres señales que personalizan cada guion.",
      action: "Generar un guion ahora — abrir demo de Script Studio."
    },
    workflow: {
      ...pageTranslations.en.workflow,
      title: "Flujo de trabajo de guiones",
      task: "Cómo encaja en tu proceso semanal de contenido."
    },
    conversion: {
      ...pageTranslations.en.conversion,
      title: "Obtén un hook de muestra gratis",
      desc: "Cuéntanos tu nicho y tema para ver cómo abre OwlSeer tu video.",
      nichePlaceholder: "Selecciona nicho",
      topicPlaceholder: "Escribe un tema (ej. review iPhone 16)",
      button: "Generar mi hook",
      niches: ["Tecnología", "Belleza", "Fitness", "Educación", "Comida", "Comedia", "Negocios"],
      note: "Vista previa gratis de 1 hook. Conecta tu cuenta para guiones completos."
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "Marco de transparencia"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "Escribe tu primer guion en 60 segundos",
      desc: "Conecta tu cuenta y genera un guion personalizado al instante.",
      primary: "Iniciar prueba gratis",
      secondary: "Ver muestra de Script Studio"
    },
    ui: {
      newFeature: "Nueva función",
      generationTime: "Tiempo de generación",
      manual: "Manual",
      manualHours: "2-4 horas",
      withOwlSeer: "Con OwlSeer",
      withOwlSeerMins: "15 min",
      output: "Resultado",
      boundaryData: "Datos",
      boundaryLimitations: "Limitaciones",
      boundaryNote: "Nota"
    }
  },
  fr: {
    ...pageTranslations.en,
    meta: {
      title: "Générez des scripts TikTok en 60 secondes | OwlSeer",
      description: "Créez des scripts TikTok avec vos données d'engagement : hook, corps, CTA, sons et hashtags personnalisés."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "Générez des scripts TikTok en 60 secondes avec vos données",
      lead: "OwlSeer crée des scripts prêts à tourner selon votre audience.",
      ctaPrimary: "Démarrer l'essai gratuit",
      ctaSecondary: "Voir l'exemple Script Studio"
    },
    tldr: {
      ...pageTranslations.en.tldr,
      title: "Concept clé",
      content: "Le blocage d'écriture fait perdre des heures. OwlSeer génère un script complet en moins de 60 secondes à partir de vos données."
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "Pourquoi l'écriture de script est un goulot d'étranglement",
      task: "Comprenez pourquoi cette étape ralentit la plupart des créateurs.",
      action: "Voir la différence entre script générique et script piloté par les données — ouvrir Script Studio."
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "Comment OwlSeer génère vos scripts",
      task: "Découvrez les 3 entrées qui personnalisent chaque script.",
      action: "Générer un script maintenant — ouvrir la démo Script Studio."
    },
    workflow: {
      ...pageTranslations.en.workflow,
      title: "Workflow de script",
      task: "Comment intégrer les scripts dans votre routine hebdomadaire."
    },
    conversion: {
      ...pageTranslations.en.conversion,
      title: "Obtenez un hook gratuit",
      desc: "Indiquez votre niche et votre sujet pour voir l'ouverture proposée.",
      nichePlaceholder: "Sélectionner une niche",
      topicPlaceholder: "Saisir un sujet (ex. test iPhone 16)",
      button: "Générer mon hook",
      niches: ["Tech", "Beauté", "Fitness", "Éducation", "Food", "Comédie", "Business"],
      note: "Aperçu gratuit d'un hook. Connectez votre compte pour des scripts complets."
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "Cadre de transparence"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "Écrivez votre premier script en 60 secondes",
      desc: "Connectez votre compte et générez un script personnalisé immédiatement.",
      primary: "Démarrer l'essai gratuit",
      secondary: "Voir l'exemple Script Studio"
    },
    ui: {
      newFeature: "Nouvelle fonctionnalité",
      generationTime: "Temps de génération",
      manual: "Manuel",
      manualHours: "2-4 heures",
      withOwlSeer: "Avec OwlSeer",
      withOwlSeerMins: "15 min",
      output: "Résultat",
      boundaryData: "Données",
      boundaryLimitations: "Limites",
      boundaryNote: "Note"
    }
  },
  de: {
    ...pageTranslations.en,
    meta: {
      title: "TikTok-Skripte in 60 Sekunden erstellen | OwlSeer",
      description: "Erstelle TikTok-Skripte aus deinen Engagement-Daten: Hook, Body, CTA, Sounds und Hashtags für deine Zielgruppe."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "Erstelle TikTok-Skripte aus deinen Daten in 60 Sekunden",
      lead: "OwlSeer erstellt drehfertige Skripte, abgestimmt auf deine Audience.",
      ctaPrimary: "Kostenlos testen",
      ctaSecondary: "Script-Studio-Beispiel ansehen"
    },
    tldr: {
      ...pageTranslations.en.tldr,
      title: "Kernkonzept",
      content: "Skript-Blockaden kosten Stunden. OwlSeer erzeugt in unter 60 Sekunden ein vollständiges Skript aus deinen Account-Daten."
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "Warum Skripterstellung der Engpass ist",
      task: "Verstehe, warum genau hier die meisten Creator Zeit verlieren.",
      action: "Unterschied zwischen generischen und datenbasierten Skripten ansehen — Script Studio öffnen."
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "So erzeugt OwlSeer Skripte",
      task: "Drei Eingaben für personalisierte Skripte.",
      action: "Jetzt ein Skript erstellen — Script-Studio-Demo öffnen."
    },
    workflow: {
      ...pageTranslations.en.workflow,
      title: "Skript-Workflow",
      task: "So passt Skripterstellung in deinen Wochenprozess."
    },
    conversion: {
      ...pageTranslations.en.conversion,
      title: "Kostenlosen Hook-Vorschlag erhalten",
      desc: "Wähle Nische und Thema, um deinen Hook-Entwurf zu sehen.",
      nichePlaceholder: "Nische auswählen",
      topicPlaceholder: "Thema eingeben (z. B. iPhone 16 Review)",
      button: "Meinen Hook erstellen",
      niches: ["Tech", "Beauty", "Fitness", "Bildung", "Food", "Comedy", "Business"],
      note: "Kostenlose Vorschau mit 1 Hook. Verbinde dein Konto für volle Personalisierung."
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "Transparenz-Box"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "Schreibe dein erstes Skript in 60 Sekunden",
      desc: "Konto verbinden und sofort ein personalisiertes Skript erzeugen.",
      primary: "Kostenlos testen",
      secondary: "Script-Studio-Beispiel ansehen"
    },
    ui: {
      newFeature: "Neues Feature",
      generationTime: "Generierungszeit",
      manual: "Manuell",
      manualHours: "2-4 Stunden",
      withOwlSeer: "Mit OwlSeer",
      withOwlSeerMins: "15 Min",
      output: "Ergebnis",
      boundaryData: "Daten",
      boundaryLimitations: "Einschränkungen",
      boundaryNote: "Hinweis"
    }
  }
};

// --- Components ---

const ScriptEditorPreview = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  const scriptData = [
    { type: 'HOOK', content: "Stop buying new phones until you see this...", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
    { type: 'BODY', content: "The tech industry is hiding a secret about release cycles. When you look at the specs, the upgrade is marginal at best.", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
    { type: 'CTA', content: "Comment 'Truth' for the full comparison list.", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20" }
  ];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (activeSection < scriptData.length) {
      const section = scriptData[activeSection];
      if (charIndex < section.content.length) {
        timeout = setTimeout(() => {
          setCharIndex(prev => prev + 1);
        }, 30); // Typing speed
      } else {
        timeout = setTimeout(() => {
          setActiveSection(prev => prev + 1);
          setCharIndex(0);
        }, 800); // Pause between sections
      }
    }
    
    return () => clearTimeout(timeout);
  }, [activeSection, charIndex]);

  return (
    <div className="bg-[#0f172a] rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed relative group h-[320px] flex flex-col">
      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <div className="ml-4 text-xs text-slate-500 flex items-center gap-2">
          <FileText className="w-3 h-3" />
          <span>script_v1.txt</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 space-y-6 flex-1 overflow-hidden">
        {scriptData.map((section, idx) => {
          if (idx > activeSection) return null;
          
          const isTyping = idx === activeSection;
          const textToShow = isTyping ? section.content.slice(0, charIndex) : section.content;
          
          return (
            <div key={section.type} className="flex gap-4 group/line">
              {/* Gutter / Line Label */}
              <div className="flex-shrink-0 w-12 flex flex-col items-end pt-0.5">
                 <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${section.bg} ${section.color} border ${section.border} opacity-80 group-hover/line:opacity-100 transition-opacity`}>
                   {section.type}
                 </span>
              </div>
              
              {/* Text Content */}
              <div className="flex-1 text-slate-300">
                {textToShow}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-[#1AAE82] ml-1 align-middle rounded-sm"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Footer status bar */}
      <div className="px-4 py-2 border-t border-slate-800 bg-slate-900/30 text-[10px] text-slate-500 flex justify-between items-center">
         <div className="flex gap-3">
            <span>Ln {activeSection + 1}, Col {charIndex}</span>
            <span>UTF-8</span>
         </div>
         <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1AAE82] animate-pulse"></div>
            <span className="text-[#1AAE82]">AI Generating...</span>
         </div>
      </div>
    </div>
  );
};

const Timer = ({ label }: { label: string }) => {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t < 47 ? t + 1 : t);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700">
      <div className="text-4xl font-bold font-mono text-[#1AAE82] mb-1">
        0:{time.toString().padStart(2, '0')}
      </div>
      <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">{label}</div>
    </div>
  );
};

// --- Main Page Component ---

export const ScriptGenerationPage = ({ 
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
  const canonicalPath = '/use-cases/script-generation';
  const seo = getPageSEO('scriptGeneration', language);

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
            colorStops={isDarkMode ? ['#020617', '#1AAE82', '#020617'] : ['#FFFFFF', '#1AAE82', '#FFFFFF']} 
            speed={0.3} 
            blend={0.5}
            baseColor={isDarkMode ? 0.0 : 1.0}
            className="absolute inset-0 z-0 opacity-30"
          />
          
          <section className="relative z-10 pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1AAE82]/5 border border-[#1AAE82]/20 text-[#1AAE82] text-sm font-semibold tracking-wide mb-8 backdrop-blur-sm">
                <PenTool className="w-4 h-4" /> 
                <span className="opacity-90">{t.ui.newFeature}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gray-900 dark:text-white font-display max-w-5xl mx-auto">
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
                  onClick={() => onNavigate('/social/simulation/script-studio')}
                  className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-full font-medium transition-all flex items-center justify-center gap-2 hover:border-gray-300 dark:hover:border-slate-600"
                >
                  <Play className="w-4 h-4" /> {t.hero.ctaSecondary}
                </button>
              </div>
            </motion.div>
          </section>
        </div>

        {/* Core Concept Section (Redesigned TL;DR) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-32 -mt-10 relative z-20">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800 ring-1 ring-black/5">
             <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
                   <Zap className="w-8 h-8 text-[#1AAE82]" strokeWidth={1.5} />
                </div>
                <div>
                   <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 font-display">
                     {t.tldr.title}
                   </h3>
                   <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-2">
                     {t.tldr.content.split(t.tldr.link).map((part: string, i: number, arr: string[]) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <button 
                              onClick={() => onNavigate('/social/simulation/script-studio')}
                              className="text-[#1AAE82] font-semibold hover:text-[#15956F] transition-colors inline-flex items-center gap-0.5 border-b-2 border-[#1AAE82]/20 hover:border-[#1AAE82] mx-1"
                            >
                              {t.tldr.link}
                            </button>
                          )}
                        </React.Fragment>
                      ))}
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
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
                <p>{t.problem.desc3}</p>
                <button 
                  onClick={() => onNavigate('/social/simulation/script-studio')}
                  className="text-[#1AAE82] font-bold hover:text-[#15956F] flex items-center gap-2 mt-4 group transition-colors"
                >
                  {t.problem.action} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="space-y-6 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <ScriptEditorPreview />
              </div>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm text-center">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-bold">{t.ui.manual}</div>
                  <div className="text-3xl font-bold text-gray-400 line-through">{t.ui.manualHours}</div>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/20 text-center">
                  <div className="text-xs text-[#1AAE82] uppercase tracking-wider mb-2 font-bold">{t.ui.withOwlSeer}</div>
                  <div className="text-3xl font-bold text-[#1AAE82]">{t.ui.withOwlSeerMins}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-gray-50 dark:bg-slate-900/50 py-32 mb-32 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-800 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-800 to-transparent" />

          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display">{t.solution.title}</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t.solution.task}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {t.solution.sources.map((source: any, i: number) => (
                <div key={i} className="group bg-white dark:bg-slate-900 p-10 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/10 text-[#1AAE82] rounded-2xl flex items-center justify-center mb-8 font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {source.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{source.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {source.desc}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-white dark:bg-slate-900 p-10 rounded-3xl border border-gray-200 dark:border-slate-800 max-w-5xl mx-auto shadow-sm">
               <div className="flex-1">
                 <h4 className="font-bold text-2xl mb-4 font-display">{t.ui.output}</h4>
                 <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{t.solution.output}</p>
               </div>
               <div className="w-px h-24 bg-gray-200 dark:bg-slate-800 hidden md:block"></div>
               <div className="transform scale-110">
                 <Timer label={t.ui.generationTime} />
               </div>
            </div>

            <div className="mt-16 text-center">
              <button 
                onClick={() => onNavigate('/social/simulation/script-studio')}
                className="text-[#1AAE82] font-bold hover:text-[#15956F] flex items-center gap-2 mx-auto text-lg transition-colors group"
              >
                {t.solution.action} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center font-display">{t.workflow.title}</h2>
          <p className="text-[#1AAE82] font-medium mb-16 text-center text-lg">{t.workflow.task}</p>
          
          <div className="relative max-w-5xl mx-auto">
             {/* Connector Line */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-slate-800 -translate-y-1/2 z-0"></div>
             
             <div className="grid md:grid-cols-4 gap-8 relative z-10">
               {t.workflow.steps.map((step: any, i: number) => (
                 <div key={i} className="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-200 dark:border-slate-800 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                   <div className="inline-block px-4 py-1.5 bg-gray-50 dark:bg-slate-800 rounded-full text-sm font-bold text-gray-500 mb-6 group-hover:bg-[#1AAE82]/10 group-hover:text-[#1AAE82] transition-colors">
                     {step.day}
                   </div>
                   <p className="font-medium text-gray-900 dark:text-white text-base leading-snug">
                     {step.task}
                   </p>
                 </div>
               ))}
             </div>
          </div>
          
          <p className="text-center mt-12 text-gray-500 italic text-lg">{t.workflow.stat}</p>
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
              onClick={() => onNavigate('/social/simulation/script-studio')}
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

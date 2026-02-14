import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Hash, 
  ArrowRight, 
  Zap, 
  Play, 
  Lock,
  BarChart2,
  TrendingUp,
  Activity,
  Layers,
  Search,
  CheckCircle2,
  AlertTriangle
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
      title: "TikTok Hashtag Strategy — AI-Powered | OwlSeer",
      description: "Build a data-driven TikTok hashtag strategy. OwlSeer recommends hashtags based on momentum, competition, and match to your niche."
    },
    hero: {
      title: "Build a TikTok Hashtag Strategy That Actually Works",
      lead: "OwlSeer tracks hashtag momentum, competition, and niche relevance to recommend the right tags for every video — no guessing, no copying competitors.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Try Trend Radar Sample"
    },
    tldr: {
      content: "Hashtags are not decorative. They are a discovery mechanism. OwlSeer's Trend Radar tracks hashtag momentum — the growth rate of hashtag usage over time — and combines it with competition level and your personal match score to recommend hashtags that maximize discoverability for each video.",
      link: "Trend Radar"
    },
    problem: {
      title: "The Three Hashtag Mistakes",
      task: "Identify the most common hashtag errors and their impact.",
      mistakes: [
        {
          title: "Mistake 1 — The same tags every time.",
          desc: "Creators default to 5-10 familiar hashtags for every video, regardless of topic. This limits discoverability to the same audience segments and signals to the algorithm that your content is not evolving."
        },
        {
          title: "Mistake 2 — Only trending hashtags.",
          desc: "Using only high-volume trending tags means your content competes with millions of videos. A hashtag with 50 billion views sounds impressive, but your video is a needle in a haystack."
        },
        {
          title: "Mistake 3 — Irrelevant tags.",
          desc: "Using popular tags unrelated to your content (e.g., #FYP on every video) dilutes your signal to the algorithm. TikTok may show your content to the wrong audience, resulting in low engagement that hurts future distribution."
        }
      ],
      fix: "The fix is not more hashtags — it is better hashtag selection based on data: which tags are growing, which are saturated, and which align with your content.",
      action: "See how hashtag momentum is tracked — read about the hashtag momentum signal."
    },
    solution: {
      title: "How OwlSeer Recommends Hashtags",
      task: "See how data replaces guesswork in hashtag selection.",
      points: [
        {
          id: 1,
          title: "Hashtag Momentum",
          desc: "The hashtag list in Trend Radar shows each hashtag's growth rate over a rolling 7-day window. Rising hashtags offer the best balance of visibility and competition. Flat or declining hashtags signal saturation."
        },
        {
          id: 2,
          title: "Competition Level",
          desc: "Each hashtag has a competition level indicator — Low, Medium, or High. Low-competition hashtags with rising momentum are the sweet spot: growing audience, limited competition."
        },
        {
          id: 3,
          title: "Match Score",
          desc: "Hashtag recommendations are personalized to your account. A hashtag that is trending in beauty will not appear in recommendations for a tech creator unless cross-over relevance is detected."
        }
      ],
      mix: {
        title: "The Recommended Mix",
        broad: "1-2 broad hashtags (reach)",
        niche: "2-3 niche hashtags (targeted)",
        trending: "1-2 trending hashtags (boost)"
      },
      action: "See hashtag recommendations on sample data — open Trend Radar."
    },
    evidence: {
      title: "Hashtag Data in Action",
      task: "See how hashtag metrics inform specific choices.",
      subtitle: "From the sample account (tech review niche):",
      table: {
        headers: ["Hashtag", "Match", "Growth", "Posts", "Competition"],
        rows: [
          ["#TechUnboxing2025", "94%", "+65%", "12.5K", "Low"],
          ["#AIGadgetReview", "84%", "+24%", "8.3K", "Low"],
          ["#WinterTech", "73%", "+36%", "18.2K", "Medium"]
        ]
      },
      recommendation: {
        title: "Recommended mix for the next video:",
        items: [
          { type: "Broad", tag: "#TechTok", reason: "high volume, baseline discoverability" },
          { type: "Niche", tag: "#AIGadgetReview", reason: "84% match, low competition, rising" },
          { type: "Trending", tag: "#TechUnboxing2025", reason: "94% match, +65% growth, 8 days remaining" }
        ]
      },
      comparison: "This mix took 5 seconds with Trend Radar. Manual research to reach the same conclusion would take 30-45 minutes of hashtag browsing."
    },
    boundary: {
      title: "Boundary Box",
      data: "Data we use: Publicly available TikTok hashtag usage data — post counts, view totals, and growth rates. Match scores use your account's content history and audience profile.",
      limit: "What we do not do: OwlSeer does not guarantee that any hashtag combination will produce specific view counts. Hashtag performance depends on content quality, timing, trend lifecycle, and algorithm behavior.",
      note: "Variability note: Hashtag recommendations update every 6-12 hours. Recommendations shown in the demo are snapshots that may not reflect current conditions. Hashtag strategy effectiveness varies by niche and account size."
    },
    cta: {
      title: "Get Personalized Hashtag Recommendations",
      desc: "Connect your account and see which hashtags match your niche right now.",
      primary: "Start Free Trial",
      secondary: "Try Trend Radar Sample"
    }
  },
  zh: {
    meta: {
      title: "TikTok 标签策略 — AI 驱动 | OwlSeer",
      description: "构建数据驱动的 TikTok 标签策略。OwlSeer 根据动量、竞争和利基匹配度推荐标签。"
    },
    hero: {
      title: "构建一个真正有效的 TikTok 标签策略",
      lead: "OwlSeer 追踪标签动量、竞争和利基相关性，为每个视频推荐正确的标签——无需猜测，无需复制竞争对手。",
      ctaPrimary: "开始免费试用",
      ctaSecondary: "试用趋势雷达演示"
    },
    tldr: {
      content: "标签不是装饰品。它们是一种发现机制。OwlSeer 的趋势雷达追踪标签动量——标签使用随时间的增长率——并将其与竞争水平和你的个人匹配分数结合起来，为每个视频推荐最大化可发现性的标签。",
      link: "趋势雷达"
    },
    problem: {
      title: "三个标签错误",
      task: "识别最常见的标签错误及其影响。",
      mistakes: [
        {
          title: "错误 1 — 每次都用相同的标签。",
          desc: "创作者默认为每个视频使用 5-10 个熟悉的标签，无论主题如何。这限制了对相同受众细分的可发现性，并向算法发出你的内容没有发展的信号。"
        },
        {
          title: "错误 2 — 只用热门标签。",
          desc: "只使用高容量的热门标签意味着你的内容要与数百万个视频竞争。一个拥有 500 亿次观看的标签听起来很厉害，但你的视频只是大海捞针。"
        },
        {
          title: "错误 3 — 不相关的标签。",
          desc: "使用与你内容无关的热门标签（例如每个视频都用 #FYP）会稀释你给算法的信号。TikTok 可能会将你的内容展示给错误的受众，导致互动率低，从而损害未来的分发。"
        }
      ],
      fix: "修正方法不是更多标签——而是基于数据的更好选择：哪些标签在增长，哪些已饱和，哪些与你的内容一致。",
      action: "查看如何追踪标签动量 — 阅读关于标签动量信号。"
    },
    solution: {
      title: "OwlSeer 如何推荐标签",
      task: "查看数据如何取代标签选择中的猜测。",
      points: [
        {
          id: 1,
          title: "标签动量",
          desc: "趋势雷达中的标签列表显示每个标签在 7 天滚动窗口内的增长率。上升的标签提供可见性和竞争的最佳平衡。平缓或下降的标签表示饱和。"
        },
        {
          id: 2,
          title: "竞争水平",
          desc: "每个标签都有一个竞争水平指标——低、中或高。具有上升动量的低竞争标签是最佳点：受众增长，竞争有限。"
        },
        {
          id: 3,
          title: "匹配分数",
          desc: "标签推荐是个性化到你的账号的。一个在美妆领域热门的标签不会出现在科技创作者的推荐中，除非检测到跨界相关性。"
        }
      ],
      mix: {
        title: "推荐组合",
        broad: "1-2 个广泛标签（覆盖面）",
        niche: "2-3 个利基标签（针对性）",
        trending: "1-2 个趋势标签（助推）"
      },
      action: "在样本数据上查看标签推荐 — 打开趋势雷达。"
    },
    evidence: {
      title: "标签数据实战",
      task: "查看标签指标如何告知具体选择。",
      subtitle: "来自示例账号（科技评论利基）：",
      table: {
        headers: ["标签", "匹配", "增长", "帖子", "竞争"],
        rows: [
          ["#TechUnboxing2025", "94%", "+65%", "12.5K", "低"],
          ["#AIGadgetReview", "84%", "+24%", "8.3K", "低"],
          ["#WinterTech", "73%", "+36%", "18.2K", "中"]
        ]
      },
      recommendation: {
        title: "下一个视频的推荐组合：",
        items: [
          { type: "广泛", tag: "#TechTok", reason: "高容量，基准可发现性" },
          { type: "利基", tag: "#AIGadgetReview", reason: "84% 匹配，低竞争，上升中" },
          { type: "趋势", tag: "#TechUnboxing2025", reason: "94% 匹配，+65% 增长，剩余 8 天" }
        ]
      },
      comparison: "这个组合用趋势雷达只花了 5 秒。手动研究得出相同结论需要 30-45 分钟的标签浏览。"
    },
    boundary: {
      title: "边界框",
      data: "我们使用的数据：公开可用的 TikTok 标签使用数据——帖子数、总观看量和增长率。匹配分数使用你的账号内容历史和受众资料。",
      limit: "我们不做的：OwlSeer 不保证任何标签组合会产生特定的观看次数。标签表现取决于内容质量、时机、趋势生命周期和算法行为。",
      note: "变异性说明：标签推荐每 6-12 小时更新。演示中显示的推荐是快照，可能不反映当前状况。标签策略的有效性因利基和账号规模而异。"
    },
    cta: {
      title: "获取个性化标签推荐",
      desc: "连接你的账号，看看现在哪些标签与你的利基匹配。",
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
      newFeature: "New Feature",
      lowComp: "Low Comp",
      medComp: "Med Comp",
      highComp: "High Comp",
      broad: "Broad",
      niche: "Niche",
      trending: "Trending",
      boundaryData: "Data",
      boundaryLimitations: "Limitations",
      boundaryNote: "Note"
    }
  },
  zh: {
    ...pageTranslations.zh,
    ui: {
      newFeature: "新功能",
      lowComp: "低竞争",
      medComp: "中竞争",
      highComp: "高竞争",
      broad: "广泛",
      niche: "细分",
      trending: "趋势",
      boundaryData: "数据",
      boundaryLimitations: "限制",
      boundaryNote: "说明"
    }
  },
  ja: {
    ...pageTranslations.en,
    meta: {
      title: "TikTokハッシュタグ戦略 | OwlSeer",
      description: "勢い・競合・一致度でTikTokハッシュタグを最適化。"
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "成果につながるTikTokハッシュタグ戦略",
      lead: "OwlSeerが勢い・競合・関連性を分析し、動画ごとに最適なタグを提案します。",
      ctaPrimary: "無料トライアル開始",
      ctaSecondary: "Trend Radarサンプルを見る"
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "よくある3つのハッシュタグ失敗",
      task: "主要なミスとその影響を確認します。"
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "OwlSeerの推奨ロジック",
      task: "データでハッシュタグ選定を最適化します。",
      action: "サンプルデータで推奨タグを見る — Trend Radarへ"
    },
    evidence: {
      ...pageTranslations.en.evidence,
      title: "ハッシュタグデータ実例",
      task: "指標が選定にどう効くかを確認。"
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "透明性ボックス"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "個別ハッシュタグ提案を取得",
      desc: "アカウント連携で、今あなたに合うタグを提示。",
      primary: "無料トライアル開始",
      secondary: "Trend Radarサンプルを見る"
    },
    ui: {
      newFeature: "新機能",
      lowComp: "低競合",
      medComp: "中競合",
      highComp: "高競合",
      broad: "広域",
      niche: "ニッチ",
      trending: "トレンド",
      boundaryData: "データ",
      boundaryLimitations: "制限事項",
      boundaryNote: "補足"
    }
  },
  ko: {
    ...pageTranslations.en,
    meta: {
      title: "TikTok 해시태그 전략 | OwlSeer",
      description: "모멘텀, 경쟁도, 니치 매치 기반으로 해시태그를 추천합니다."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "실제로 통하는 TikTok 해시태그 전략",
      lead: "OwlSeer가 해시태그 모멘텀, 경쟁도, 관련성을 분석해 영상별 최적 태그를 제안합니다.",
      ctaPrimary: "무료 체험 시작",
      ctaSecondary: "Trend Radar 샘플 보기"
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "해시태그 3가지 실수",
      task: "가장 흔한 오류와 영향을 확인하세요."
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "OwlSeer 추천 방식",
      task: "감이 아닌 데이터로 태그를 선택합니다。",
      action: "샘플 데이터로 추천 태그 보기 — Trend Radar 열기"
    },
    evidence: {
      ...pageTranslations.en.evidence,
      title: "해시태그 데이터 실제 사례",
      task: "지표가 선택에 미치는 영향을 확인하세요."
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "투명성 박스"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "개인화 해시태그 추천 받기",
      desc: "계정을 연결하고 지금 내 니치에 맞는 태그를 확인하세요.",
      primary: "무료 체험 시작",
      secondary: "Trend Radar 샘플 보기"
    },
    ui: {
      newFeature: "새 기능",
      lowComp: "낮은 경쟁",
      medComp: "중간 경쟁",
      highComp: "높은 경쟁",
      broad: "광범위",
      niche: "니치",
      trending: "트렌드",
      boundaryData: "데이터",
      boundaryLimitations: "제한사항",
      boundaryNote: "참고"
    }
  },
  es: {
    ...pageTranslations.en,
    meta: {
      title: "Estrategia de hashtags TikTok con IA | OwlSeer",
      description: "Construye una estrategia de hashtags con datos de momentum, competencia y match por nicho."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "Crea una estrategia de hashtags que sí funciona",
      lead: "OwlSeer analiza momentum, competencia y relevancia para recomendar etiquetas por video.",
      ctaPrimary: "Iniciar prueba gratis",
      ctaSecondary: "Ver muestra de Trend Radar"
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "Los tres errores de hashtags",
      task: "Identifica los errores más comunes y su impacto."
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "Cómo OwlSeer recomienda hashtags",
      task: "Datos en lugar de intuición para elegir etiquetas.",
      action: "Ver recomendaciones con datos de muestra — abrir Trend Radar."
    },
    evidence: {
      ...pageTranslations.en.evidence,
      title: "Hashtags en acción",
      task: "Cómo las métricas guían decisiones concretas."
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "Marco de transparencia"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "Obtén recomendaciones personalizadas",
      desc: "Conecta tu cuenta y descubre qué hashtags encajan con tu nicho.",
      primary: "Iniciar prueba gratis",
      secondary: "Ver muestra de Trend Radar"
    },
    ui: {
      newFeature: "Nueva función",
      lowComp: "Baja comp.",
      medComp: "Comp. media",
      highComp: "Alta comp.",
      broad: "Amplio",
      niche: "Nicho",
      trending: "Tendencia",
      boundaryData: "Datos",
      boundaryLimitations: "Limitaciones",
      boundaryNote: "Nota"
    }
  },
  fr: {
    ...pageTranslations.en,
    meta: {
      title: "Stratégie hashtags TikTok avec IA | OwlSeer",
      description: "Construisez une stratégie hashtags basée sur momentum, concurrence et adéquation niche."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "Construisez une stratégie hashtags qui fonctionne",
      lead: "OwlSeer suit momentum, concurrence et pertinence pour recommander les bons hashtags.",
      ctaPrimary: "Démarrer l'essai gratuit",
      ctaSecondary: "Voir l'exemple Trend Radar"
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "Les 3 erreurs hashtags",
      task: "Identifiez les erreurs les plus fréquentes et leur impact."
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "Comment OwlSeer recommande les hashtags",
      task: "Des données plutôt que des suppositions.",
      action: "Voir les recommandations sur données de démo — ouvrir Trend Radar."
    },
    evidence: {
      ...pageTranslations.en.evidence,
      title: "Les données hashtags en action",
      task: "Comment les métriques orientent les choix concrets."
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "Cadre de transparence"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "Recevez des recommandations personnalisées",
      desc: "Connectez votre compte et voyez les hashtags adaptés à votre niche.",
      primary: "Démarrer l'essai gratuit",
      secondary: "Voir l'exemple Trend Radar"
    },
    ui: {
      newFeature: "Nouvelle fonctionnalité",
      lowComp: "Faible conc.",
      medComp: "Conc. moyenne",
      highComp: "Forte conc.",
      broad: "Large",
      niche: "Niche",
      trending: "Tendance",
      boundaryData: "Données",
      boundaryLimitations: "Limites",
      boundaryNote: "Note"
    }
  },
  de: {
    ...pageTranslations.en,
    meta: {
      title: "TikTok-Hashtag-Strategie mit KI | OwlSeer",
      description: "Baue eine datenbasierte Hashtag-Strategie mit Momentum, Wettbewerb und Nischen-Match."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "Erstelle eine TikTok-Hashtag-Strategie, die wirkt",
      lead: "OwlSeer analysiert Momentum, Wettbewerb und Relevanz für passende Tags pro Video.",
      ctaPrimary: "Kostenlos testen",
      ctaSecondary: "Trend-Radar-Beispiel ansehen"
    },
    problem: {
      ...pageTranslations.en.problem,
      title: "Die drei Hashtag-Fehler",
      task: "Erkenne die häufigsten Fehler und ihre Folgen."
    },
    solution: {
      ...pageTranslations.en.solution,
      title: "So empfiehlt OwlSeer Hashtags",
      task: "Daten ersetzen Bauchgefühl bei der Tag-Auswahl.",
      action: "Empfehlungen auf Demodaten ansehen — Trend Radar öffnen."
    },
    evidence: {
      ...pageTranslations.en.evidence,
      title: "Hashtag-Daten in der Praxis",
      task: "So steuern Metriken konkrete Entscheidungen."
    },
    boundary: {
      ...pageTranslations.en.boundary,
      title: "Transparenz-Box"
    },
    cta: {
      ...pageTranslations.en.cta,
      title: "Erhalte personalisierte Hashtag-Empfehlungen",
      desc: "Konto verbinden und passende Hashtags für deine Nische sehen.",
      primary: "Kostenlos testen",
      secondary: "Trend-Radar-Beispiel ansehen"
    },
    ui: {
      newFeature: "Neues Feature",
      lowComp: "Niedrige Konkurrenz",
      medComp: "Mittlere Konkurrenz",
      highComp: "Hohe Konkurrenz",
      broad: "Breit",
      niche: "Nische",
      trending: "Trend",
      boundaryData: "Daten",
      boundaryLimitations: "Einschränkungen",
      boundaryNote: "Hinweis"
    }
  }
};

// --- Components ---

const HashtagCloud = ({ ui }: { ui: any }) => {
  const tags = [
    { name: "#TechTok", size: 1.2, color: "bg-emerald-500", x: 20, y: 30 },
    { name: "#AI", size: 1.5, color: "bg-emerald-400", x: 50, y: 50 },
    { name: "#Gadgets", size: 1.0, color: "bg-emerald-600", x: 80, y: 20 },
    { name: "#Review", size: 0.9, color: "bg-yellow-500", x: 30, y: 70 },
    { name: "#2025", size: 1.1, color: "bg-red-500", x: 70, y: 80 },
  ];

  return (
    <div className="w-full aspect-video bg-gray-900 rounded-xl relative overflow-hidden border border-gray-800 shadow-2xl p-4">
      {tags.map((tag, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full flex items-center justify-center text-white font-bold shadow-lg ${tag.color}`}
          style={{ 
            width: `${tag.size * 60}px`, 
            height: `${tag.size * 60}px`,
            left: `${tag.x}%`,
            top: `${tag.y}%`
          }}
          animate={{ 
            y: [0, -10, 0],
            x: [0, 5, 0]
          }}
          transition={{ 
            duration: 3 + i, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.5
          }}
        >
          <span className="text-xs">{tag.name}</span>
        </motion.div>
      ))}
      <div className="absolute bottom-4 left-4 flex gap-4 text-[10px] text-gray-400">
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> {ui.lowComp}</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-500"></div> {ui.medComp}</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500"></div> {ui.highComp}</div>
      </div>
    </div>
  );
};

const MixBar = ({ t, ui }: { t: any, ui: any }) => (
  <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-6 shadow-sm">
    <h4 className="font-bold text-gray-900 dark:text-white mb-4">{t.title}</h4>
    <div className="flex h-4 rounded-full overflow-hidden mb-4">
      <div className="w-[20%] bg-blue-500" title={ui.broad}></div>
      <div className="w-[50%] bg-[#1AAE82]" title={ui.niche}></div>
      <div className="w-[30%] bg-purple-500" title={ui.trending}></div>
    </div>
    <div className="grid grid-cols-3 gap-2 text-xs">
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        <span className="text-gray-600 dark:text-gray-400">{t.broad}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#1AAE82]"></div>
        <span className="text-gray-600 dark:text-gray-400">{t.niche}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
        <span className="text-gray-600 dark:text-gray-400">{t.trending}</span>
      </div>
    </div>
  </div>
);

const WorkflowStep = ({
  step,
  isActive,
  onClick,
}: {
  step: any;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`group relative w-full overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 ${
      isActive
        ? 'border-[#1AAE82] bg-white dark:bg-slate-800 shadow-xl shadow-[#1AAE82]/10'
        : 'border-transparent bg-white/60 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800/80'
    }`}
  >
    <div className="relative z-10 flex items-start gap-4">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
          isActive
            ? 'bg-[#1AAE82] text-white shadow-lg shadow-[#1AAE82]/30'
            : 'bg-gray-100 text-gray-400 dark:bg-slate-800 dark:text-slate-500'
        }`}
      >
        {step.id}
      </div>
      <div className="flex-1">
        <h3
          className={`mb-2 text-lg font-bold ${
            isActive ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-200'
          }`}
        >
          {step.title}
        </h3>
        <p className={`${isActive ? 'text-gray-600 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
          {step.desc}
        </p>
      </div>
    </div>
  </button>
);

// --- Main Page Component ---

export const HashtagStrategyPage = ({
  onNavigate,
  isDarkMode,
  setIsDarkMode,
}: {
  onNavigate: (page: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}) => {
  const { language, setLanguage } = useLanguage();
  const t = (localizedPageTranslations as any)[language] || localizedPageTranslations.en;
  const globalT = globalTranslations[language] || globalTranslations.en;
  const canonicalPath = '/use-cases/hashtag-strategy';
  const seo = getPageSEO('hashtagStrategy', language);
  const [activeStep, setActiveStep] = useState(1);
  const activeStepData = t.solution.points.find((step: any) => step.id === activeStep) || t.solution.points[0];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 transition-colors duration-300 selection:bg-[#1AAE82]/30 dark:bg-[#020617] dark:text-white">
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
        <div className="relative overflow-hidden">
          <AuroraBackground
            colorStops={isDarkMode ? ['#020617', '#1AAE82', '#020617'] : ['#FFFFFF', '#E0F2FE', '#FFFFFF']}
            speed={0.3}
            blend={0.5}
            baseColor={isDarkMode ? 0.0 : 1.0}
            className="absolute inset-0 z-0 opacity-40"
          />

          <section className="relative z-10 mx-auto max-w-7xl px-4 pb-28 pt-40 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1AAE82]/20 bg-[#1AAE82]/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#1AAE82]">
                <Hash className="h-4 w-4" />
                <span>{t.ui.newFeature}</span>
              </div>

              <h1 className="mx-auto mb-8 max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white md:text-7xl lg:text-8xl">
                {t.hero.title}
              </h1>

              <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:text-2xl">
                {t.hero.lead}
              </p>

              <div className="flex flex-col justify-center gap-5 sm:flex-row">
                <button
                  onClick={() => onNavigate('/social/auth')}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#1AAE82] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-[#1AAE82]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#15956F] hover:shadow-[#1AAE82]/40"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onNavigate('/social/simulation/trends')}
                  className="flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 font-medium text-gray-900 transition-all hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  <Play className="h-4 w-4" />
                  {t.hero.ctaSecondary}
                </button>
              </div>
            </motion.div>
          </section>
        </div>

        <section className="relative z-20 mx-auto -mt-8 mb-32 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 rounded-[2.5rem] border border-white/50 bg-white/80 p-10 text-center shadow-2xl ring-1 ring-black/5 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/80 md:flex-row md:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#1AAE82] to-emerald-600 text-white shadow-lg shadow-[#1AAE82]/30">
              <Zap className="h-10 w-10" fill="currentColor" />
            </div>
            <p className="text-xl leading-relaxed text-gray-900 dark:text-white md:text-2xl">
              {t.tldr.content.split(t.tldr.link).map((part: string, i: number, arr: string[]) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <button
                      onClick={() => onNavigate('/social/simulation/trends')}
                      className="mx-1 inline-flex items-center gap-1 border-b-2 border-[#1AAE82]/30 font-bold text-[#1AAE82] transition-colors hover:border-[#1AAE82] hover:text-[#15956F]"
                    >
                      {t.tldr.link}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-2xl border border-red-100 bg-red-50 p-3 text-red-500 dark:border-red-900/20 dark:bg-red-900/10 dark:text-red-300">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{t.problem.title}</h2>
                  <p className="mt-1 font-medium text-[#1AAE82]">{t.problem.task}</p>
                </div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                <div className="space-y-4">
                  {t.problem.mistakes.map((mistake: any) => (
                    <div
                      key={mistake.title}
                      className="rounded-2xl border border-red-100 bg-white/90 p-4 dark:border-red-900/20 dark:bg-slate-900/60"
                    >
                      <p className="font-semibold text-gray-900 dark:text-white">{mistake.title}</p>
                      <p className="mt-1 text-base text-gray-600 dark:text-gray-400">{mistake.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-r-2xl border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-900/10">
                  <p className="font-medium italic text-red-900 dark:text-red-200">{t.problem.fix}</p>
                </div>
                <button
                  onClick={() => onNavigate('/social/signals')}
                  className="inline-flex items-center gap-2 font-bold text-[#1AAE82] transition-colors hover:text-[#15956F]"
                >
                  {t.problem.action}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <HashtagCloud ui={t.ui} />
            </div>
          </div>
        </section>

        <section className="relative mb-32 overflow-hidden bg-gray-50 py-32 dark:bg-slate-900/50">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-slate-800" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-slate-800" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
              <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">{t.solution.title}</h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-500 dark:text-gray-400">{t.solution.task}</p>
            </div>

            <div className="grid items-start gap-16 lg:grid-cols-2">
              <div className="space-y-5">
                {t.solution.points.map((step: any) => (
                  <WorkflowStep
                    key={step.id}
                    step={step}
                    isActive={activeStep === step.id}
                    onClick={() => setActiveStep(step.id)}
                  />
                ))}

                <button
                  onClick={() => onNavigate('/social/simulation/trends')}
                  className="mt-4 inline-flex items-center gap-2 font-bold text-[#1AAE82] transition-colors hover:text-[#15956F]"
                >
                  {t.solution.action}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="rounded-[2.5rem] border border-gray-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900/90 lg:sticky lg:top-32">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#1AAE82]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1AAE82]">
                    {activeStepData.id}
                    <span>{activeStepData.title}</span>
                  </div>

                  <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">{activeStepData.desc}</p>

                  {activeStep === 1 ? (
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-slate-700 dark:bg-slate-800/50">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
                        <Search className="h-3 w-3" />
                        <span>{t.evidence.subtitle}</span>
                      </div>
                      <div className="space-y-2">
                        {t.evidence.table.headers.map((header: string, index: number) => (
                          <div key={header} className="flex items-center justify-between rounded-lg bg-white px-3 py-2 dark:bg-slate-900/60">
                            <span className="text-sm text-gray-500 dark:text-gray-400">{header}</span>
                            <span className="text-sm font-bold text-gray-900 dark:text-white">
                              {t.evidence.table.rows[0][index]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : activeStep === 2 ? (
                    <MixBar t={t.solution.mix} ui={t.ui} />
                  ) : (
                    <div className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-slate-700 dark:bg-slate-800/50">
                      <h4 className="font-bold text-gray-900 dark:text-white">{t.evidence.recommendation.title}</h4>
                      {t.evidence.recommendation.items.map((item: any) => (
                        <div key={`${item.type}-${item.tag}`} className="flex items-start gap-3">
                          <span className="mt-1 rounded bg-[#1AAE82]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1AAE82]">
                            {item.type}
                          </span>
                          <div>
                            <p className="font-bold text-gray-900 dark:text-white">{item.tag}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.reason}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{t.evidence.title}</h2>
            <p className="text-lg font-medium text-[#1AAE82]">{t.evidence.task}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:col-span-2">
              <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/70 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/40">
                <h3 className="font-bold text-gray-700 dark:text-gray-200">{t.evidence.subtitle}</h3>
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50/50 text-xs uppercase text-gray-500 dark:bg-slate-800/30">
                    <tr>
                      {t.evidence.table.headers.map((header: string) => (
                        <th key={header} className="px-6 py-4 font-semibold tracking-wider">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                    {t.evidence.table.rows.map((row: string[], rowIndex: number) => (
                      <tr key={rowIndex} className="transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/50">
                        {row.map((cell: string, cellIndex: number) => (
                          <td
                            key={cellIndex}
                            className={`px-6 py-4 ${
                              cellIndex === 0 ? 'font-bold text-[#1AAE82]' : 'text-gray-600 dark:text-gray-300'
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-2xl">
              <div className="absolute -right-16 -top-16 opacity-10">
                <Hash size={180} />
              </div>
              <h3 className="relative z-10 mb-6 text-xl font-bold">{t.evidence.recommendation.title}</h3>
              <div className="relative z-10 space-y-5">
                {t.evidence.recommendation.items.map((item: any) => (
                  <div key={`${item.type}-${item.tag}`} className="flex items-start gap-3">
                    <span className="mt-1 rounded border border-[#1AAE82]/30 bg-[#1AAE82]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#7BE4C4]">
                      {item.type}
                    </span>
                    <div>
                      <p className="font-bold">{item.tag}</p>
                      <p className="text-xs text-slate-300">{item.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative z-10 mt-8 rounded-xl border border-white/10 bg-white/5 p-4 text-sm italic text-slate-300">
                "{t.evidence.comparison}"
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-8 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/30">
            <h3 className="mb-6 flex items-center gap-3 text-lg font-bold text-gray-900 dark:text-white">
              <Lock size={20} className="text-gray-400" />
              {t.boundary.title}
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                <strong className="text-gray-900 dark:text-gray-200">{t.ui.boundaryData}:</strong>{' '}
                {t.boundary.data.replace('Data we use:', '')}
              </p>
              <p>
                <strong className="text-gray-900 dark:text-gray-200">{t.ui.boundaryLimitations}:</strong>{' '}
                {t.boundary.limit.replace('What we do not do:', '')}
              </p>
              <p>
                <strong className="text-gray-900 dark:text-gray-200">{t.ui.boundaryNote}:</strong>{' '}
                {t.boundary.note.replace('Variability note:', '')}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-20 max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">{t.cta.title}</h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-600 dark:text-gray-300 md:text-2xl">{t.cta.desc}</p>
          <div className="flex flex-col justify-center gap-5 sm:flex-row">
            <button
              onClick={() => onNavigate('/social/auth')}
              className="rounded-full bg-[#1AAE82] px-10 py-5 text-xl font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#15956F]"
            >
              {t.cta.primary}
            </button>
            <button
              onClick={() => onNavigate('/social/simulation/trends')}
              className="rounded-full border border-gray-200 bg-white px-10 py-5 text-xl font-medium text-gray-900 transition-all hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
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

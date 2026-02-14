/**
 * @page Agencies Solution Page
 * 
 * Based on T2-07-solutions-agencies.md
 */

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts';
import { motion, useInView } from 'motion/react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { SEO } from '../SEO';
import { getCanonicalUrl, seoConfig, generateAlternates } from '../../data/seoConfig';
import { translations } from '../../data/translations';
import { AuroraBackground } from '../ui/aurora-background';
import { 
  Zap, 
  Clock, 
  Check, 
  ArrowRight, 
  TrendingUp, 
  Calendar, 
  FileText, 
  Users,
  LayoutDashboard,
  BarChart,
  Bot,
  Sparkles,
  Lock,
  Briefcase
} from 'lucide-react';

// --- Local Content (to avoid modifying translations.ts blindly) ---
const localContent = {
  en: {
    hero: {
      title: "Scale Your Agency: Manage Multiple TikTok Accounts with One AI Dashboard",
      lead: "Stop burning out on manual reporting. OwlSeer's white-label automation handles analytics, scripting, and benchmarking—so you can scale your client roster without adding headcount.",
      primaryCta: "Start Agency Trial",
      secondaryCta: "See the Sample"
    },
    tldr: "OwlSeer automates the agency workflow. Replace manual spreadsheets with AI-driven insights. Generate white-label weekly reports instantly. Benchmark clients against niche competitors. Create brand-specific scripts in seconds. One strategist, 10x output.",
    painPoints: {
      title: "Agency Challenges We Solve",
      subtitle: "Stop letting strategy bottlenecks slow down your growth.",
      cards: [
        {
          title: "Each client needs custom research.",
          desc: "Understanding every client's niche, competitors, and audience takes hours. Multiply by 10-20 accounts and strategy becomes the bottleneck.",
          solutionTitle: "Multi-Account AI Dashboard",
          solutionDesc: "Switch between client accounts instantly. AI automatically segments each client by niche and competitor set."
        },
        {
          title: "Reporting takes forever.",
          desc: "Pulling metrics, building decks, and writing insights for each client consumes half the workweek. Clients expect weekly reports but the manual process cannot scale.",
          solutionTitle: "White-Label Automated Reports",
          solutionDesc: "Generate professional, branded PDF reports every Monday. Includes AI-written insights and growth metrics. Zero manual work."
        },
        {
          title: "Hard to prove ROI.",
          desc: "Clients ask \"Is this working?\" and agencies struggle to point to concrete, data-backed answers beyond vanity metrics like follower count.",
          solutionTitle: "Competitor Benchmarking",
          solutionDesc: "Prove value with data. Show exactly how your client outperforms their direct competitors on engagement and growth velocity."
        }
      ]
    },
    solution: {
      title: "Built for Agency Workflows",
      items: [
        {
          title: "Multi-Account Dashboard",
          desc: "Switch between client accounts instantly. Each client gets a full analysis personalized to their niche."
        },
        {
          title: "Cross-Client Benchmarking",
          desc: "Compare each client against similar creators. Show clients exactly where they stand."
        },
        {
          title: "Automated Reports",
          desc: "Weekly Intelligence Reports generate for every client account every Monday."
        },
        {
          title: "Scalable Script Production",
          desc: "Generate client-specific scripts at scale. Personalized to the client's brand voice."
        }
      ],
      action: "Explore Agency Features"
    },
    results: {
      title: "Agency Results",
      stats: [
        { value: 50, suffix: "%", label: "Less Time", subLabel: "on per-client strategy" },
        { value: 3, suffix: "x", label: "More Clients", subLabel: "per strategist" },
        { value: 2, suffix: "min", label: "Report Gen", subLabel: "vs 2-3 hours manually" }
      ],
      disclaimer: "Results vary by agency size, client mix, and workflow integration. Onboarding typically takes 1-2 weeks per client account."
    },
    features: {
      title: "Everything you need to scale",
      items: [
        "Multi-Account Management",
        "Cross-Client Benchmarking",
        "Automated Weekly Reports",
        "AI Script Generation",
        "Competitor Analysis",
        "Trend Radar",
        "Engagement Signals",
        "Priority Support"
      ]
    },
    boundary: {
      note: "Data we use: Each client account is analyzed independently using their own TikTok API data. Cross-client data is never mixed. OwlSeer does not provide white-label branding in the current version."
    },
    cta: {
      title: "Ready to Scale Your TikTok Services?",
      subtitle: "Start with one client account. Add more as your team gets comfortable.",
      primary: "Start Agency Trial",
      secondary: "See the Sample"
    },
    roi: {
      headline: "How many hours could your team save this month?",
      clientCountLabel: "Number of TikTok client accounts",
      hoursPerClientLabel: "Hours per client per week (research + reporting)",
      outputTitle: "OwlSeer could save your team",
      outputSubtitle: "in strategist time.",
      disclaimer: "Based on 50% strategy time reduction at industry-average billable rate ($75/hr)."
    }
  },
  zh: {
    hero: {
      title: "代理商扩展引擎：用一个 AI 仪表盘统一管理客户账号",
      lead: "停止在手动报告上浪费生命。OwlSeer 的白标自动化系统接管分析、脚本编写和基准测试——助您在不增加人手的情况下，持续扩展客户规模。",
      primaryCta: "开始代理商试用",
      secondaryCta: "观看演示"
    },
    tldr: "OwlSeer 实现代理商工作流自动化。用 AI 驱动的洞察取代手动电子表格。即时生成白标周报。将客户与利基竞争对手进行基准对比。秒级生成品牌专属脚本。一位策略师，10 倍产出。",
    painPoints: {
      title: "我们要解决的代理商挑战",
      subtitle: "别让策略瓶颈拖慢你的增长。",
      cards: [
        {
          title: "每个客户都需要定制研究",
          desc: "了解每个客户的细分市场、竞争对手和受众需要数小时。乘以 10-20 个账户，策略就成了瓶颈。",
          solutionTitle: "多账号 AI 仪表盘",
          solutionDesc: "即时切换多个客户账号。AI 自动按利基市场和竞争对手集对每个客户进行细分。"
        },
        {
          title: "报告耗时太长",
          desc: "为每个客户提取指标、制作 PPT 和撰写洞察消耗了一半的工作周。客户期望周报，但人工流程无法扩展。",
          solutionTitle: "白标自动化报告",
          solutionDesc: "每周一生成专业的品牌 PDF 报告。包含 AI 撰写的洞察和增长指标。零人工干预。"
        },
        {
          title: "难以证明 ROI",
          desc: "客户问“这有效果吗？”，代理商很难除了粉丝数等虚荣指标外，拿出具体的数据支持的答案。",
          solutionTitle: "竞争对手基准对比",
          solutionDesc: "用数据证明价值。向客户确切展示他们在互动率和增长速度上如何超越直接竞争对手。"
        }
      ]
    },
    solution: {
      title: "专为代理商工作流打造",
      items: [
        {
          title: "多账号仪表盘",
          desc: "即时切换客户账号。每个客户获得针对其细分市场的完整分析。"
        },
        {
          title: "跨客户基准对比",
          desc: "将每个客户与类似创作者进行比较。向客户展示确切定位。"
        },
        {
          title: "自动化报告",
          desc: "每周一为每个客户账号自动生成每周情报报告。"
        },
        {
          title: "规模化脚本生产",
          desc: "规模化生成特定于客户的脚本。针对客户的品牌声音进行个性化。"
        }
      ],
      action: "探索代理商功能"
    },
    results: {
      title: "代理商成果",
      stats: [
        { value: 50, suffix: "%", label: "策略时间减少", subLabel: "每个客户" },
        { value: 3, suffix: "倍", label: "客户管理数", subLabel: "每位策略师" },
        { value: 2, suffix: "分", label: "报告生成", subLabel: "对比人工 2-3 小时" }
      ],
      disclaimer: "结果因代理商规模、客户组合和工作流整合而异。每个客户账号的入驻通常需要 1-2 周。"
    },
    features: {
      title: "扩展业务所需的一切",
      items: [
        "多账号管理",
        "跨客户基准对比",
        "自动化周报",
        "AI 脚本生成",
        "竞争对手分析",
        "趋势雷达",
        "互动信号",
        "优先支持"
      ]
    },
    boundary: {
      note: "我们使用的数据：每个客户账号都使用其自己的 TikTok API 数据独立分析。跨客户数据从未混合。OwlSeer 当前版本不提供白标品牌。"
    },
    cta: {
      title: "准备好扩展你的 TikTok 服务了吗？",
      subtitle: "从一个客户账号开始。随着团队适应再增加更多。",
      primary: "开始代理商试用",
      secondary: "观看演示"
    },
    roi: {
      headline: "你的团队这个月能节省多少小时？",
      clientCountLabel: "TikTok 客户账号数量",
      hoursPerClientLabel: "每客户每周小时数（研究 + 报告）",
      outputTitle: "OwlSeer 可以为你的团队节省",
      outputSubtitle: "策略师时间。",
      disclaimer: "基于行业平均计费率（$75/小时）和 50% 的策略时间减少计算。"
    }
  }
};

const localizedContent = {
  en: {
    ...localContent.en,
    roi: {
      ...localContent.en.roi,
      ctaLabel: "Start Agency Trial",
      scaleLabels: {
        accountsMin: "1 Account",
        accountsMax: "20 Accounts",
        hoursMin: "1 Hour",
        hoursMax: "10 Hours"
      }
    },
    ui: {
      badge: "Agency Solution",
      coreInsight: "Core Insight",
      allIncludedLabel: "All included in Agency Plan",
      transparencyNote: "Transparency Note"
    }
  },
  zh: {
    ...localContent.zh,
    roi: {
      ...localContent.zh.roi,
      ctaLabel: "开始代理商试用",
      scaleLabels: {
        accountsMin: "1 个账号",
        accountsMax: "20 个账号",
        hoursMin: "1 小时",
        hoursMax: "10 小时"
      }
    },
    ui: {
      badge: "代理商方案",
      coreInsight: "核心洞察",
      allIncludedLabel: "代理商方案全部包含",
      transparencyNote: "透明说明"
    }
  },
  ja: {
    ...localContent.en,
    hero: {
      title: "代理店向け拡張エンジン：1つのAIダッシュボードで複数TikTokアカウントを管理",
      lead: "手作業レポートの負荷を削減。OwlSeerの自動化で分析・スクリプト・比較を効率化し、少人数でクライアント数を拡大できます。",
      primaryCta: "代理店トライアル開始",
      secondaryCta: "サンプルを見る"
    },
    tldr: "OwlSeerは代理店ワークフローを自動化。手作業スプレッドシートをAIインサイトに置き換え、週次レポートと戦略提案を高速化します。",
    painPoints: { ...localContent.en.painPoints, title: "代理店が抱える主要課題", subtitle: "戦略ボトルネックを解消して成長を加速。" },
    solution: { ...localContent.en.solution, title: "代理店向けに最適化された機能", action: "代理店機能を見る" },
    results: { ...localContent.en.results, title: "代理店の成果" },
    features: { ...localContent.en.features, title: "スケールに必要な機能一式" },
    boundary: { note: "利用データ：各クライアントのTikTok APIデータを分離して分析。クライアント間データは混在しません。現行版はホワイトラベル外観カスタムには未対応です。" },
    cta: { title: "TikTok運用サービスを拡張する準備はできていますか？", subtitle: "まず1アカウントから開始し、運用に合わせて拡張可能。", primary: "代理店トライアル開始", secondary: "サンプルを見る" },
    roi: {
      ...localContent.en.roi,
      headline: "今月、チームは何時間削減できますか？",
      clientCountLabel: "TikTokクライアント数",
      hoursPerClientLabel: "1クライアントあたり週次時間（調査＋レポート）",
      outputTitle: "OwlSeerで削減できる時間",
      outputSubtitle: "戦略担当の工数",
      disclaimer: "業界平均単価（$75/h）と戦略工数50%削減を前提に算出。",
      ctaLabel: "代理店トライアル開始",
      scaleLabels: { accountsMin: "1アカウント", accountsMax: "20アカウント", hoursMin: "1時間", hoursMax: "10時間" }
    },
    ui: { badge: "代理店ソリューション", coreInsight: "コアインサイト", allIncludedLabel: "代理店プランにすべて含む", transparencyNote: "透明性に関する注記" }
  },
  ko: {
    ...localContent.en,
    hero: {
      title: "에이전시 확장 엔진: 하나의 AI 대시보드로 다중 TikTok 계정 운영",
      lead: "수작업 리포팅 부담을 줄이고 분석·스크립트·벤치마크를 자동화하세요. 인력 추가 없이 고객 포트폴리오를 확장할 수 있습니다.",
      primaryCta: "에이전시 체험 시작",
      secondaryCta: "샘플 보기"
    },
    tldr: "OwlSeer는 에이전시 운영 흐름을 자동화합니다. 수동 스프레드시트를 AI 인사이트로 전환해 더 빠르게 실행합니다.",
    painPoints: { ...localContent.en.painPoints, title: "에이전시가 겪는 핵심 문제", subtitle: "전략 병목을 줄여 성장 속도를 높이세요." },
    solution: { ...localContent.en.solution, title: "에이전시 워크플로 전용 기능", action: "에이전시 기능 보기" },
    results: { ...localContent.en.results, title: "에이전시 성과" },
    features: { ...localContent.en.features, title: "확장에 필요한 기능" },
    boundary: { note: "사용 데이터: 각 고객 계정의 TikTok API 데이터를 독립 분석합니다. 고객 간 데이터는 절대 혼합되지 않습니다. 현재 버전은 화이트라벨 브랜딩 커스터마이징을 제공하지 않습니다." },
    cta: { title: "TikTok 서비스 확장, 시작할 준비가 되었나요?", subtitle: "한 고객 계정부터 시작해 팀 성숙도에 맞춰 확장하세요.", primary: "에이전시 체험 시작", secondary: "샘플 보기" },
    roi: {
      ...localContent.en.roi,
      headline: "이번 달 팀이 절감할 수 있는 시간은?",
      clientCountLabel: "TikTok 고객 계정 수",
      hoursPerClientLabel: "고객당 주간 시간(리서치+리포트)",
      outputTitle: "OwlSeer로 절감 가능한",
      outputSubtitle: "전략가 업무 시간",
      disclaimer: "업계 평균 단가($75/h)와 전략 시간 50% 절감 기준.",
      ctaLabel: "에이전시 체험 시작",
      scaleLabels: { accountsMin: "1계정", accountsMax: "20계정", hoursMin: "1시간", hoursMax: "10시간" }
    },
    ui: { badge: "에이전시 솔루션", coreInsight: "핵심 인사이트", allIncludedLabel: "에이전시 플랜 포함 사항", transparencyNote: "투명성 안내" }
  },
  es: {
    ...localContent.en,
    hero: {
      title: "Escala tu agencia: gestiona múltiples cuentas TikTok con un solo panel IA",
      lead: "Reduce el trabajo manual de reporting. OwlSeer automatiza análisis, guiones y benchmarking para escalar sin más headcount.",
      primaryCta: "Iniciar prueba para agencias",
      secondaryCta: "Ver muestra"
    },
    tldr: "OwlSeer automatiza el flujo de agencia: menos hojas manuales, más insights accionables y reportes semanales más rápidos.",
    painPoints: { ...localContent.en.painPoints, title: "Retos clave que resolvemos en agencias", subtitle: "Elimina cuellos de botella estratégicos." },
    solution: { ...localContent.en.solution, title: "Funciones diseñadas para agencias", action: "Explorar funciones de agencia" },
    results: { ...localContent.en.results, title: "Resultados de agencias" },
    features: { ...localContent.en.features, title: "Todo para escalar tu operación" },
    boundary: { note: "Datos que usamos: cada cuenta de cliente se analiza de forma independiente con su propio TikTok API. No se mezclan datos entre clientes. La versión actual no incluye branding white-label completo." },
    cta: { title: "¿Listo para escalar tus servicios en TikTok?", subtitle: "Empieza con una cuenta y suma más cuando tu equipo esté listo.", primary: "Iniciar prueba para agencias", secondary: "Ver muestra" },
    roi: {
      ...localContent.en.roi,
      headline: "¿Cuántas horas puede ahorrar tu equipo este mes?",
      clientCountLabel: "Número de cuentas TikTok de clientes",
      hoursPerClientLabel: "Horas por cliente por semana (research + reporting)",
      outputTitle: "Con OwlSeer tu equipo podría ahorrar",
      outputSubtitle: "tiempo estratégico",
      disclaimer: "Basado en 50% de reducción de tiempo estratégico y tarifa media de $75/h.",
      ctaLabel: "Iniciar prueba para agencias",
      scaleLabels: { accountsMin: "1 cuenta", accountsMax: "20 cuentas", hoursMin: "1 hora", hoursMax: "10 horas" }
    },
    ui: { badge: "Solución para agencias", coreInsight: "Insight clave", allIncludedLabel: "Todo incluido en el plan Agencia", transparencyNote: "Nota de transparencia" }
  },
  fr: {
    ...localContent.en,
    hero: {
      title: "Faites évoluer votre agence : gérez plusieurs comptes TikTok avec un seul dashboard IA",
      lead: "Réduisez la charge de reporting manuel. OwlSeer automatise analyse, scripts et benchmark pour scaler sans recruter.",
      primaryCta: "Démarrer l’essai agence",
      secondaryCta: "Voir l’exemple"
    },
    tldr: "OwlSeer automatise le workflow agence : moins de tâches manuelles, plus d’insights exploitables et des rapports hebdo instantanés.",
    painPoints: { ...localContent.en.painPoints, title: "Défis agence que nous résolvons", subtitle: "Supprimez les goulots d’étranglement stratégiques." },
    solution: { ...localContent.en.solution, title: "Pensé pour les workflows d’agence", action: "Explorer les fonctions agence" },
    results: { ...localContent.en.results, title: "Résultats agences" },
    features: { ...localContent.en.features, title: "Tout pour scaler votre activité" },
    boundary: { note: "Données utilisées : chaque compte client est analysé indépendamment via son API TikTok. Aucun mélange de données entre clients. La version actuelle ne propose pas de branding white-label complet." },
    cta: { title: "Prêt à scaler vos services TikTok ?", subtitle: "Commencez avec un compte client puis élargissez progressivement.", primary: "Démarrer l’essai agence", secondary: "Voir l’exemple" },
    roi: {
      ...localContent.en.roi,
      headline: "Combien d’heures votre équipe peut-elle économiser ce mois-ci ?",
      clientCountLabel: "Nombre de comptes clients TikTok",
      hoursPerClientLabel: "Heures par client/semaine (recherche + reporting)",
      outputTitle: "Avec OwlSeer, votre équipe peut économiser",
      outputSubtitle: "du temps stratégique",
      disclaimer: "Estimation basée sur 50% de réduction du temps stratégique et 75$/h.",
      ctaLabel: "Démarrer l’essai agence",
      scaleLabels: { accountsMin: "1 compte", accountsMax: "20 comptes", hoursMin: "1 heure", hoursMax: "10 heures" }
    },
    ui: { badge: "Solution agence", coreInsight: "Insight clé", allIncludedLabel: "Inclus dans le plan Agence", transparencyNote: "Note de transparence" }
  },
  de: {
    ...localContent.en,
    hero: {
      title: "Agentur skalieren: Mehrere TikTok-Accounts in einem KI-Dashboard",
      lead: "Weniger manuelles Reporting. OwlSeer automatisiert Analyse, Skripte und Benchmarking, damit ihr ohne zusätzliches Team skaliert.",
      primaryCta: "Agentur-Test starten",
      secondaryCta: "Sample ansehen"
    },
    tldr: "OwlSeer automatisiert Agentur-Workflows: weniger Tabellen, mehr klare Insights und schnellere Wochenreports.",
    painPoints: { ...localContent.en.painPoints, title: "Agenturprobleme, die wir lösen", subtitle: "Strategische Engpässe beseitigen und Wachstum beschleunigen." },
    solution: { ...localContent.en.solution, title: "Für Agentur-Workflows gebaut", action: "Agentur-Funktionen ansehen" },
    results: { ...localContent.en.results, title: "Agentur-Ergebnisse" },
    features: { ...localContent.en.features, title: "Alles zum Skalieren" },
    boundary: { note: "Genutzte Daten: Jeder Kundenaccount wird mit eigenen TikTok-API-Daten separat analysiert. Es gibt keine Vermischung zwischen Kunden. Vollständiges White-Label-Branding ist aktuell nicht enthalten." },
    cta: { title: "Bereit, eure TikTok-Services zu skalieren?", subtitle: "Startet mit einem Kundenaccount und erweitert schrittweise.", primary: "Agentur-Test starten", secondary: "Sample ansehen" },
    roi: {
      ...localContent.en.roi,
      headline: "Wie viele Stunden kann euer Team diesen Monat sparen?",
      clientCountLabel: "Anzahl TikTok-Kundenaccounts",
      hoursPerClientLabel: "Stunden pro Kunde/Woche (Research + Reporting)",
      outputTitle: "Mit OwlSeer spart euer Team",
      outputSubtitle: "Strategiezeit",
      disclaimer: "Berechnet mit 50% Zeitersparnis und durchschnittlich 75$/h.",
      ctaLabel: "Agentur-Test starten",
      scaleLabels: { accountsMin: "1 Account", accountsMax: "20 Accounts", hoursMin: "1 Stunde", hoursMax: "10 Stunden" }
    },
    ui: { badge: "Agentur-Lösung", coreInsight: "Kern-Insight", allIncludedLabel: "Alles im Agentur-Plan enthalten", transparencyNote: "Transparenzhinweis" }
  }
};

// --- Components ---

// 1. Pain Point Card (High Fidelity Flip)
const PainPointCard = ({ title, desc, solutionTitle, solutionDesc, delay }: { title: string, desc: string, solutionTitle: string, solutionDesc: string, delay: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div 
      ref={ref}
      className="relative w-full h-[360px] cursor-pointer perspective-1000 group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="w-full h-full relative preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front - Pain */}
        <motion.div 
          className="absolute inset-0 backface-hidden bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-red-100 dark:border-red-900/30 shadow-xl flex flex-col justify-between"
          initial={{ x: 0 }}
          animate={isInView ? { x: [0, -6, 6, -3, 3, 0] } : {}}
          transition={{ duration: 0.4, delay: delay, ease: "easeInOut" }}
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500 mb-6 shadow-sm">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">"{title}"</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium">{desc}</p>
          </div>
          <div className="mt-4 text-xs font-bold uppercase tracking-widest text-[#1AAE82] flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
            View Solution <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Back - Solution */}
        <div 
          className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#1AAE82] to-[#059669] rounded-[2rem] p-8 shadow-2xl flex flex-col justify-between text-white"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6 backdrop-blur-sm">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{solutionTitle}</h3>
            <p className="text-white/90 text-lg leading-relaxed font-medium">{solutionDesc}</p>
          </div>
          <div className="border-t border-white/20 pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3" /> OwlSeer Fix
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
    <div ref={ref} className="text-center p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-gray-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-1">
      <div className="text-5xl md:text-6xl font-bold text-[#1AAE82] mb-4 font-display">
        {count}{suffix}
      </div>
      <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">{label}</div>
      {subLabel && <div className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">{subLabel}</div>}
    </div>
  );
};

// 3. ROI Calculator (New for Agencies)
const ROICalculator = ({ content }: { content: any }) => {
  const [clientCount, setClientCount] = useState(5);
  const [hoursPerClient, setHoursPerClient] = useState(3);

  const savedHours = Math.round(clientCount * hoursPerClient * 0.5);
  const monthlySavings = Math.round(savedHours * 4 * 75);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 md:p-14 border border-gray-200 dark:border-slate-800 shadow-2xl max-w-4xl mx-auto relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1AAE82] to-blue-500" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/5 rounded-full blur-[80px] group-hover:bg-[#1AAE82]/10 transition-colors" />
      
      <div className="text-center mb-12 relative z-10">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-display">
          {content.headline}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 relative z-10">
        {/* Sliders */}
        <div className="space-y-10">
          <div>
            <div className="flex justify-between mb-4">
              <label className="text-base font-bold text-gray-700 dark:text-gray-300">{content.clientCountLabel}</label>
              <span className="text-2xl font-bold text-[#1AAE82] font-mono">{clientCount}</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="20" 
              value={clientCount} 
              onChange={(e) => setClientCount(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#1AAE82]"
            />
            <div className="flex justify-between text-xs font-bold uppercase text-gray-400 mt-2">
              <span>{content.scaleLabels?.accountsMin || '1 Account'}</span>
              <span>{content.scaleLabels?.accountsMax || '20 Accounts'}</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-4">
              <label className="text-base font-bold text-gray-700 dark:text-gray-300">{content.hoursPerClientLabel}</label>
              <span className="text-2xl font-bold text-[#1AAE82] font-mono">{hoursPerClient}h</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value={hoursPerClient} 
              onChange={(e) => setHoursPerClient(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#1AAE82]"
            />
            <div className="flex justify-between text-xs font-bold uppercase text-gray-400 mt-2">
              <span>{content.scaleLabels?.hoursMin || '1 Hour'}</span>
              <span>{content.scaleLabels?.hoursMax || '10 Hours'}</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gray-50 dark:bg-slate-800/50 rounded-[2rem] p-8 border border-gray-100 dark:border-slate-700 flex flex-col justify-center text-center shadow-inner">
          <div className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">{content.outputTitle}</div>
          <div className="text-5xl font-bold text-[#1AAE82] mb-2 font-display">{savedHours}h<span className="text-xl text-gray-400 font-normal">/wk</span></div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">= ${monthlySavings.toLocaleString()}<span className="text-sm text-gray-400 font-normal">/mo</span></div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{content.outputSubtitle}</div>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-gray-100 dark:border-slate-800 relative z-10">
        <p className="text-xs text-gray-400 mb-8 max-w-lg mx-auto">{content.disclaimer}</p>
        <button
          type="button"
          className="inline-flex items-center gap-3 px-10 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold text-lg rounded-full shadow-xl shadow-[#1AAE82]/20 transition-all hover:-translate-y-1"
        >
          {(content.ctaLabel || "Start Agency Trial")} <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// 4. Multi-Account Dashboard Preview (New for Agencies)
const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState(0);
  const clients = [
    { name: "@FitnessStudioX", color: "text-blue-500", bg: "bg-blue-500" },
    { name: "@OrganicBeautyCo", color: "text-green-500", bg: "bg-green-500" },
    { name: "@TechStartupHQ", color: "text-purple-500", bg: "bg-purple-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-gray-200 dark:border-slate-800 overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1AAE82]/5 to-blue-500/5 pointer-events-none" />
      
      {/* Header */}
      <div className="border-b border-gray-100 dark:border-slate-800 p-6 flex items-center gap-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="h-8 w-px bg-gray-200 dark:bg-slate-700" />
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {clients.map((client, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === idx 
                  ? 'bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-sm ring-1 ring-black/5' 
                  : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800/50'
              }`}
            >
              {client.name}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-8 relative min-h-[400px]">
        {clients.map((client, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: activeTab === idx ? 1 : 0, 
              x: activeTab === idx ? 0 : 20,
              pointerEvents: activeTab === idx ? 'auto' : 'none'
            }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="absolute inset-0 p-8"
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl ${client.bg} bg-opacity-10 flex items-center justify-center ${client.color}`}>
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{client.name}</h3>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Agency Managed Account</p>
                </div>
              </div>
              <div className="px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Active
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="p-5 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-700/50">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Engagement</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white font-display">{(4.2 + idx).toFixed(1)}%</div>
                <div className="text-xs text-green-500 font-bold flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" /> +{12 + idx}%
                </div>
              </div>
              <div className="p-5 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-700/50">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Followers</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white font-display">{(12.5 + idx * 2).toFixed(1)}k</div>
                <div className="text-xs text-green-500 font-bold flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" /> +{5 + idx}%
                </div>
              </div>
              <div className="p-5 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-700/50">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Trend Matches</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white font-display">{8 + idx}</div>
                <div className="text-xs text-blue-500 font-bold mt-1">New this week</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border-l-4 border-blue-500 shadow-sm">
                <div className="flex items-center gap-4">
                  <Bot className="w-6 h-6 text-blue-500" />
                  <span className="text-base font-bold text-gray-700 dark:text-gray-200">Weekly Report Generated</span>
                </div>
                <span className="text-xs font-mono text-gray-400">2m ago</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border-l-4 border-purple-500 shadow-sm">
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-purple-500" />
                  <span className="text-base font-bold text-gray-700 dark:text-gray-200">3 New Scripts Ready</span>
                </div>
                <span className="text-xs font-mono text-gray-400">1h ago</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export function AgenciesPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  // SEO
  const seo = seoConfig.agencies?.[language as 'en' | 'zh' | 'ja' | 'ko' | 'es' | 'fr' | 'de'] || seoConfig.agencies?.en;

  // Local Content
  const content = (localizedContent as any)[language] || localizedContent.en;

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans selection:bg-[#1AAE82]/30 text-gray-900 dark:text-gray-100">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={getCanonicalUrl('/solutions/agencies', language)}
        lang={language}
        alternates={generateAlternates('/solutions/agencies')}
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
          speed={0.4} 
          blend={0.5}
          baseColor={isDarkMode ? 0.0 : 1.0}
          className="absolute inset-0 z-0 opacity-40 pointer-events-none fixed"
        />

        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-40 overflow-hidden z-10">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
             >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1AAE82]/10 text-[#1AAE82] text-sm font-bold uppercase tracking-widest mb-8 border border-[#1AAE82]/20 backdrop-blur-md">
                 <Briefcase className="w-4 h-4" /> 
                 <span className="opacity-90">{content.ui?.badge || 'Agency Solution'}</span>
               </div>

               <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto drop-shadow-sm">
                 {content.hero.title}
               </h1>
               <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-normal">
                 {content.hero.lead}
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button 
                   onClick={() => handleNavigate('auth')}
                   className="px-10 py-5 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-full shadow-xl shadow-[#1AAE82]/20 transition-all hover:-translate-y-1 text-xl flex items-center justify-center gap-2"
                 >
                   {content.hero.primaryCta} <ArrowRight className="w-5 h-5" />
                 </button>
                 <button 
                   onClick={() => handleNavigate('landing')}
                   className="px-10 py-5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-50 dark:hover:bg-slate-700 transition-all shadow-sm text-xl"
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
                <p className="text-xl md:text-2xl text-gray-900 dark:text-white leading-relaxed font-display font-medium">
                  "{content.tldr}"
                </p>
             </div>
          </div>
        </section>

        {/* 3. PAIN POINTS SECTION */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-6 tracking-tight">
                {content.painPoints.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. SOLUTION SECTION */}
        <section className="py-32 relative z-10 overflow-hidden">
           {/* Background Elements */}
           <div className="absolute inset-0 bg-gray-50/50 dark:bg-slate-900/50 skew-y-3 transform origin-top-right scale-110 -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-10 leading-tight">
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
                      className="flex gap-6 p-6 rounded-[2rem] hover:bg-white dark:hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-[#1AAE82]/5 border border-transparent hover:border-gray-100 dark:hover:border-slate-700"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#1AAE82]/10 flex items-center justify-center flex-shrink-0 text-[#1AAE82]">
                        {idx === 0 ? <LayoutDashboard className="w-7 h-7" /> : 
                         idx === 1 ? <BarChart className="w-7 h-7" /> :
                         idx === 2 ? <FileText className="w-7 h-7" /> :
                         <Bot className="w-7 h-7" />}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12 pl-6">
                  <a href="/social/features" className="text-[#1AAE82] font-bold hover:underline flex items-center gap-2 text-lg decoration-2 underline-offset-8">
                    {content.solution.action} <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-10 bg-gradient-to-r from-[#1AAE82]/20 to-blue-500/20 rounded-[3rem] blur-3xl opacity-50" />
                <DashboardPreview />
              </div>
            </div>
          </div>
        </section>

        {/* 5. RESULTS SECTION */}
        <section className="py-32 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-4">
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
          </div>
        </section>

        {/* 6. ROI CALCULATOR */}
        <section className="py-24 bg-gray-50 dark:bg-slate-900/50 relative z-10 border-y border-gray-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <ROICalculator content={content.roi} />
          </div>
        </section>

        {/* 7. FEATURES CHECKLIST */}
        <section className="py-32 relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 font-display text-gray-900 dark:text-white uppercase tracking-widest">{content.features.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {content.features.items.map((item: string, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#1AAE82]/20 flex items-center justify-center flex-shrink-0 text-[#1AAE82]">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-bold text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#1AAE82]/10 text-[#1AAE82] text-sm font-bold border border-[#1AAE82]/20">
                <Sparkles className="w-4 h-4" /> {content.ui?.allIncludedLabel || 'All included in Agency Plan'}
              </div>
            </div>
          </div>
        </section>

        {/* 8. BOUNDARY & CTA */}
        <section className="py-32 bg-[#111827] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1AAE82]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-20 text-left backdrop-blur-sm max-w-2xl mx-auto">
              <h4 className="text-[#1AAE82] font-bold mb-3 text-xs uppercase tracking-widest flex items-center gap-2">
                <Lock className="w-3 h-3" /> {content.ui?.transparencyNote || 'Transparency Note'}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed font-mono">
                {content.boundary.note}
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold font-display mb-10 leading-[0.9]">
              {content.cta.title}
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed">
              {content.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => handleNavigate('auth')}
                className="px-12 py-5 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-full shadow-2xl shadow-[#1AAE82]/30 transition-all hover:-translate-y-1 text-xl"
              >
                {content.cta.primary}
              </button>
              <button 
                onClick={() => handleNavigate('landing')}
                className="px-12 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all text-xl"
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

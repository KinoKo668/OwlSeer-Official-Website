import React, { useState, useEffect, useRef, memo, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useLanguage, usePerformance } from '../../contexts';
import { translations as globalTranslations } from '../../data/translations';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { SEO } from '../SEO';
import { AuroraBackground } from '../ui/aurora-background';
import { 
  ShoppingBag, 
  ArrowRight, 
  Zap, 
  CirclePlay, 
  BarChart2, 
  TrendingUp, 
  Package, 
  Video, 
  Target, 
  Clock, 
  Layout, 
  CheckCircle2, 
  DollarSign, 
  Percent, 
  Calculator, 
  RefreshCw, 
  Search,
  Lock,
  Smartphone
} from 'lucide-react';

// --- Translations ---
const pageTranslations = {
  en: {
    meta: {
      title: "TikTok E-commerce Tool | OwlSeer",
      description: "Turn TikTok views into product sales. OwlSeer matches products to trending formats, generates 8 types of product scripts, and optimizes for buyer audiences."
    },
    hero: {
      title: "TikTok Shop Intelligence",
      titleHighlight: "Turn Views Into Sales",
      lead: "Stop posting for likes. OwlSeer analyzes top-performing product videos to generate conversion-optimized scripts that drive GMV, not just engagement.",
      ctaPrimary: "Start Seller Trial",
      ctaSecondary: "See the Sample"
    },
    tldr: {
      content: "TikTok is a product discovery engine. OwlSeer helps sellers capitalize by matching products to trending formats, generating product-specific scripts through Script Studio, and tracking buyer-relevant engagement signals.",
      links: {
        formats: "Trending Formats",
        studio: "Script Studio",
        save: "Save Rate",
        visit: "Profile Visits"
      }
    },
    opportunity: {
      title: "Why TikTok for E-commerce",
      points: [
        { title: "67% Discovery", desc: "Users discover new products on TikTok." },
        { title: "Multi-Billion Market", desc: "Seamless in-app purchasing." },
        { title: "Purchase Behavior", desc: "\"TikTok made me buy it\" drives sales." }
      ],
      insight: "TikTok is where buyers start research. Authentic content beats polished ads."
    },
    solution: {
      title: "E-commerce Features",
      points: [
        {
          title: "Product-to-Trend Matching",
          desc: "The Generate button on Trend Radar creates product-focused scripts from trending topics. Combine \"#TechUnboxing2025\" with your phone accessories in one click."
        },
        {
          title: "Conversion-Focused Scripts",
          desc: "Script Studio generates product scripts in 8 formats, optimized for awareness, consideration, and conversion stages."
        },
        {
          title: "Buyer Audience Scheduling",
          desc: "OwlSeer tracks when your buyer audience is most active — often different from general TikTok peak hours."
        },
        {
          title: "Product Content Library",
          desc: "Identify which product formats drive the most clicks, saves, and profile visits with performance badges."
        }
      ]
    },
    scriptTypes: {
      title: "Product Script Types",
      subtitle: "Eight script templates optimized for e-commerce",
      types: [
        { title: "Product Sample", icon: Video, desc: "Show the product in use. Focus on benefits, not features.", tag: "Conversion" },
        { title: "Unboxing", icon: Package, desc: "First-impression reactions. High save rate and share potential.", tag: "Awareness" },
        { title: "Before/After", icon: RefreshCw, desc: "Transformation format. Effective for beauty, fitness, home.", tag: "Consideration" },
        { title: "Honest Review", icon: CheckCircle2, desc: "Balanced review format. Builds trust through authenticity.", tag: "Consideration" },
        { title: "TikTok Made Me Buy It", icon: ShoppingBag, desc: "Trend-native format that leverages social proof.", tag: "Awareness" },
        { title: "How-To/Tutorial", icon: Layout, desc: "Educational product content. High save rate.", tag: "Consideration" },
        { title: "Day in My Life", icon: Clock, desc: "Lifestyle integration. Product appears naturally in routine.", tag: "Soft Sell" },
        { title: "Trend Integration", icon: TrendingUp, desc: "Adapts the product into a current trending format or sound.", tag: "Viral" }
      ]
    },
    results: {
      title: "Seller Results",
      stats: [
        { value: "3x", label: "more product content output" },
        { value: "45%", label: "higher video-to-click rate" },
        { value: "2.5x", label: "ROI on content investment" }
      ],
      note: "Results vary by product category, price point, and content execution quality."
    },
    calculator: {
      title: "Calculate your TikTok content ROI",
      budget: "Monthly content budget ($)",
      clickRate: "Current video-to-click rate (%)",
      aov: "Average order value ($)",
      result: "With OwlSeer's 45% higher click rate, your estimated monthly revenue increase is",
      disclaimer: "Based on your inputs and observed click-rate improvement from OwlSeer users.",
      cta: "Start Selling on TikTok"
    },
    boundary: {
      title: "Transparency Note",
      data: "Data we use: Your TikTok account metrics combined with product-relevant engagement signals (save rate, profile visit rate, link click patterns) and trending product content data.",
      limit: "What we do not do: OwlSeer does not integrate directly with TikTok Shop inventory or order management. We generate content strategy and scripts; sales tracking requires your e-commerce platform's analytics.",
      note: "Variability note: Product content performance varies by category. Impulse-purchase products (under $30) typically see faster TikTok results than high-consideration products (over $200)."
    },
    cta: {
      title: "Start Selling More on TikTok",
      desc: "Connect your account and see which trending formats match your products.",
      primary: "Start Seller Trial",
      secondary: "See the Sample"
    }
  },
  zh: {
    meta: {
      title: "TikTok 电商工具 | OwlSeer",
      description: "将 TikTok 浏览量转化为产品销售。OwlSeer 将产品与趋势格式匹配，生成 8 种类型的产品脚本，并针对买家受众进行优化。"
    },
    hero: {
      title: "TikTok Shop 智能引擎",
      titleHighlight: "将浏览量转化为订单",
      lead: "别再为了点赞发视频。OwlSeer 深度分析爆款带货视频，为您生成以转化为核心的脚本，驱动 GMV 增长，而不仅仅是互动率。",
      ctaPrimary: "开始卖家试用",
      ctaSecondary: "观看演示"
    },
    tldr: {
      content: "TikTok 是一个产品发现引擎。OwlSeer 帮助卖家通过将产品与趋势格式匹配，通过 Script Studio 生成特定产品的脚本，并追踪与买家相关的参与信号（如表示购买意向的保存率和表示进店的个人主页访问率）来获利。",
      links: {
        formats: "趋势格式",
        studio: "Script Studio",
        save: "保存率",
        visit: "个人主页访问率"
      }
    },
    opportunity: {
      title: "为什么 TikTok 适合电商",
      points: [
        { title: "67% 发现率", desc: "的 TikTok 用户报告在平台上发现了新产品。" },
        { title: "数十亿市场", desc: "TikTok Shop 将应用内购买直接与内容集成。" },
        { title: "购买行为", desc: "“TikTok让我买了它”代表了一种视频驱动销售的模式。" }
      ],
      insight: "TikTok 不是可选项——它是买家开始研究的地方。但真实的内容胜过精美的广告。"
    },
    solution: {
      title: "电商功能",
      points: [
        {
          title: "产品-趋势匹配",
          desc: "趋势雷达上的生成按钮从热门话题创建以产品为中心的脚本。一键将“#TechUnboxing2025”与你的手机配件结合。"
        },
        {
          title: "转化导向脚本",
          desc: "Script Studio 生成 8 种格式的产品脚本，针对意识、考虑和转化阶段进行优化。"
        },
        {
          title: "买家受众排期",
          desc: "OwlSeer 追踪你的买家受众最活跃的时间——通常与 TikTok 总体高峰时段不同。"
        },
        {
          title: "产品内容库",
          desc: "通过性能徽章识别哪些产品格式带来的点击、保存和主页访问最多。"
        }
      ]
    },
    scriptTypes: {
      title: "我们要生成的脚本类型",
      subtitle: "针对电商优化的八种脚本模板",
      types: [
        { title: "产品演示", icon: Video, desc: "展示产品使用。关注利益点，而非功能点。", tag: "转化" },
        { title: "开箱", icon: Package, desc: "第一印象反应。高保存率和分享潜力。", tag: "意识" },
        { title: "前后对比", icon: RefreshCw, desc: "变身格式。对美妆、健身、家居有效。", tag: "考虑" },
        { title: "真实评测", icon: CheckCircle2, desc: "平衡的评测格式。通过真实性建立信任。", tag: "考虑" },
        { title: "TikTok让我买了它", icon: ShoppingBag, desc: "利用社会证明的原生趋势格式。", tag: "意识" },
        { title: "教程/教学", icon: Layout, desc: "教育性产品内容。高保存率。", tag: "考虑" },
        { title: "生活一日", icon: Clock, desc: "生活方式植入。产品自然出现在日常中。", tag: "软广" },
        { title: "趋势融合", icon: TrendingUp, desc: "将产品改编进当前的趋势格式或音乐中。", tag: "病毒式" }
      ]
    },
    results: {
      title: "卖家成果",
      stats: [
        { value: "3x", label: "更多产品内容产出" },
        { value: "45%", label: "更高的视频点击率" },
        { value: "2.5x", label: "内容投资回报率" }
      ],
      note: "结果因产品类别、价格点和内容执行质量而异。"
    },
    calculator: {
      title: "计算你的 TikTok 内容 ROI",
      budget: "月度内容预算 ($)",
      clickRate: "当前视频点击率 (%)",
      aov: "平均客单价 ($)",
      result: "借助 OwlSeer 45% 的点击率提升，你的预估月度收入增量为",
      disclaimer: "基于你的输入和观察到的 OwlSeer 用户的点击率提升。",
      cta: "开始在 TikTok 上销售"
    },
    boundary: {
      title: "透明度说明",
      data: "我们使用的数据：你的 TikTok 账号指标结合产品相关的参与信号（保存率、主页访问率、链接点击模式）和趋势产品内容数据。",
      limit: "我们不做的：OwlSeer 不直接集成 TikTok Shop 库存或订单管理。我们生成内容策略和脚本；销售追踪需要你的电商平台分析。",
      note: "变异性说明：产品内容表现因类别而异。冲动购买产品（30美元以下）通常比高考虑产品（200美元以上）见效更快。"
    },
    cta: {
      title: "开始在 TikTok 上销售更多",
      desc: "连接你的账号，看看哪些趋势格式与你的产品匹配。",
      primary: "开始卖家试用",
      secondary: "观看演示"
    }
  }
};

const localizedPageTranslations = {
  ...pageTranslations,
  ja: {
    ...pageTranslations.en,
    meta: {
      title: "TikTok ECツール | OwlSeer",
      description: "TikTokの再生を売上に変える。OwlSeerは商品とトレンド形式をマッチングし、販売向けスクリプトを生成します。"
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "TikTok Shop インテリジェンス",
      titleHighlight: "再生数を売上へ",
      lead: "いいね目的の投稿をやめて、購買につながる投稿へ。OwlSeerは売上につながる構成を自動提案します。",
      ctaPrimary: "セラー向け無料トライアル",
      ctaSecondary: "サンプルを見る"
    },
    tldr: {
      ...pageTranslations.en.tldr,
      content: "TikTokは商品発見エンジンです。OwlSeerは商品×トレンド形式の最適化、販売導線スクリプト生成、購買関連シグナル分析を一体化します。",
      links: {
        formats: "トレンド形式",
        studio: "スクリプトスタジオ",
        save: "保存率",
        visit: "プロフィール訪問"
      }
    },
    opportunity: { ...pageTranslations.en.opportunity, title: "なぜTikTokがECに効くのか", insight: "TikTokは購入前の比較検討が始まる場所。作り込んだ広告より、自然な実演コンテンツが強いです。" },
    solution: { ...pageTranslations.en.solution, title: "EC向け主要機能" },
    scriptTypes: { ...pageTranslations.en.scriptTypes, title: "商品スクリプトの型", subtitle: "EC向けに最適化した8つのテンプレート" },
    results: { ...pageTranslations.en.results, title: "セラー実績", stats: [{ value: "3x", label: "商品コンテンツ量" }, { value: "45%", label: "動画→クリック率" }, { value: "2.5x", label: "コンテンツ投資ROI" }] },
    calculator: {
      ...pageTranslations.en.calculator,
      title: "TikTokコンテンツROI試算",
      budget: "月間コンテンツ予算 ($)",
      clickRate: "現在の動画→クリック率 (%)",
      aov: "平均注文単価 ($)",
      result: "OwlSeerでクリック率が45%改善した場合の推定月次売上増分",
      cta: "TikTok販売を始める"
    },
    boundary: { ...pageTranslations.en.boundary, title: "透明性に関する注記" },
    cta: { ...pageTranslations.en.cta, title: "TikTokで売上を伸ばす", desc: "あなたの商品に合うトレンド形式を確認しましょう。", primary: "セラー向け無料トライアル", secondary: "サンプルを見る" }
  },
  ko: {
    ...pageTranslations.en,
    meta: {
      title: "TikTok 이커머스 도구 | OwlSeer",
      description: "TikTok 조회수를 실제 매출로 전환하세요. OwlSeer가 상품과 트렌드 포맷을 매칭해 전환형 스크립트를 생성합니다."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "TikTok Shop 인텔리전스",
      titleHighlight: "조회수를 매출로",
      lead: "좋아요를 위한 게시를 멈추고 구매를 위한 게시로 전환하세요. OwlSeer가 전환 중심 콘텐츠를 제안합니다.",
      ctaPrimary: "셀러 무료 체험 시작",
      ctaSecondary: "샘플 보기"
    },
    tldr: { ...pageTranslations.en.tldr, content: "TikTok은 상품 발견 엔진입니다. OwlSeer는 상품-트렌드 매칭, 판매형 스크립트 생성, 구매 신호 분석을 한 번에 제공합니다." },
    opportunity: { ...pageTranslations.en.opportunity, title: "왜 TikTok이 이커머스에 강한가" },
    solution: { ...pageTranslations.en.solution, title: "이커머스 핵심 기능" },
    scriptTypes: { ...pageTranslations.en.scriptTypes, title: "상품 스크립트 유형", subtitle: "이커머스에 최적화된 8가지 템플릿" },
    results: { ...pageTranslations.en.results, title: "셀러 성과", stats: [{ value: "3x", label: "상품 콘텐츠 생산량" }, { value: "45%", label: "영상→클릭 전환율" }, { value: "2.5x", label: "콘텐츠 ROI" }] },
    calculator: { ...pageTranslations.en.calculator, title: "TikTok 콘텐츠 ROI 계산기", budget: "월 콘텐츠 예산 ($)", clickRate: "현재 영상 클릭률 (%)", aov: "평균 주문 금액 ($)", cta: "TikTok 판매 시작" },
    boundary: { ...pageTranslations.en.boundary, title: "투명성 안내" },
    cta: { ...pageTranslations.en.cta, title: "TikTok에서 더 많이 판매하세요", desc: "내 상품과 맞는 트렌드 포맷을 확인해보세요.", primary: "셀러 무료 체험 시작", secondary: "샘플 보기" }
  },
  es: {
    ...pageTranslations.en,
    meta: {
      title: "Herramienta TikTok eCommerce | OwlSeer",
      description: "Convierte vistas de TikTok en ventas. OwlSeer empareja productos con formatos en tendencia y genera guiones de conversión."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "Inteligencia para TikTok Shop",
      titleHighlight: "Convierte Vistas en Ventas",
      lead: "Deja de publicar para likes. OwlSeer analiza qué videos venden y genera guiones optimizados para conversión.",
      ctaPrimary: "Iniciar prueba para vendedores",
      ctaSecondary: "Ver muestra"
    },
    tldr: { ...pageTranslations.en.tldr, content: "TikTok es un motor de descubrimiento de producto. OwlSeer conecta producto+tendencia, guion y señales de intención de compra para aumentar ventas." },
    opportunity: { ...pageTranslations.en.opportunity, title: "Por qué TikTok funciona para eCommerce" },
    solution: { ...pageTranslations.en.solution, title: "Funciones para eCommerce" },
    scriptTypes: { ...pageTranslations.en.scriptTypes, title: "Tipos de guion de producto", subtitle: "Ocho plantillas optimizadas para eCommerce" },
    results: { ...pageTranslations.en.results, title: "Resultados de vendedores", stats: [{ value: "3x", label: "más contenido de producto" }, { value: "45%", label: "más clics por video" }, { value: "2.5x", label: "ROI de contenido" }] },
    calculator: { ...pageTranslations.en.calculator, title: "Calcula tu ROI en TikTok", budget: "Presupuesto mensual de contenido ($)", clickRate: "Tasa actual video→clic (%)", aov: "Ticket medio ($)", cta: "Empezar a vender en TikTok" },
    boundary: { ...pageTranslations.en.boundary, title: "Nota de transparencia" },
    cta: { ...pageTranslations.en.cta, title: "Vende Más en TikTok", desc: "Conecta tu cuenta y detecta qué formatos encajan con tus productos.", primary: "Iniciar prueba para vendedores", secondary: "Ver muestra" }
  },
  fr: {
    ...pageTranslations.en,
    meta: {
      title: "Outil e-commerce TikTok | OwlSeer",
      description: "Transformez les vues TikTok en ventes. OwlSeer associe vos produits aux formats tendance et génère des scripts orientés conversion."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "Intelligence TikTok Shop",
      titleHighlight: "Transformer les vues en ventes",
      lead: "Arrêtez de publier pour les likes. OwlSeer identifie les formats qui vendent et génère des scripts orientés conversion.",
      ctaPrimary: "Démarrer l’essai vendeur",
      ctaSecondary: "Voir l’exemple"
    },
    tldr: { ...pageTranslations.en.tldr, content: "TikTok est un moteur de découverte produit. OwlSeer combine matching produit-tendance, scripts et signaux d’intention d’achat pour booster le CA." },
    opportunity: { ...pageTranslations.en.opportunity, title: "Pourquoi TikTok est clé pour l’e-commerce" },
    solution: { ...pageTranslations.en.solution, title: "Fonctionnalités e-commerce" },
    scriptTypes: { ...pageTranslations.en.scriptTypes, title: "Types de scripts produit", subtitle: "8 templates optimisés e-commerce" },
    results: { ...pageTranslations.en.results, title: "Résultats vendeurs", stats: [{ value: "3x", label: "plus de contenu produit" }, { value: "45%", label: "de clics vidéo en plus" }, { value: "2.5x", label: "ROI contenu" }] },
    calculator: { ...pageTranslations.en.calculator, title: "Calculateur ROI TikTok", budget: "Budget mensuel contenu ($)", clickRate: "Taux vidéo→clic actuel (%)", aov: "Panier moyen ($)", cta: "Commencer à vendre sur TikTok" },
    boundary: { ...pageTranslations.en.boundary, title: "Note de transparence" },
    cta: { ...pageTranslations.en.cta, title: "Vendez Plus sur TikTok", desc: "Connectez votre compte et identifiez les formats adaptés à vos produits.", primary: "Démarrer l’essai vendeur", secondary: "Voir l’exemple" }
  },
  de: {
    ...pageTranslations.en,
    meta: {
      title: "TikTok E‑Commerce Tool | OwlSeer",
      description: "Verwandle TikTok-Views in Verkäufe. OwlSeer matched Produkte mit Trendformaten und erstellt conversion-orientierte Skripte."
    },
    hero: {
      ...pageTranslations.en.hero,
      title: "TikTok Shop Intelligence",
      titleHighlight: "Views in Umsatz verwandeln",
      lead: "Nicht mehr für Likes posten. OwlSeer analysiert erfolgreiche Produktvideos und erstellt verkaufsstarke Skripte.",
      ctaPrimary: "Seller-Test starten",
      ctaSecondary: "Sample ansehen"
    },
    tldr: { ...pageTranslations.en.tldr, content: "TikTok ist eine Produkt-Discovery-Engine. OwlSeer kombiniert Produkt-Trend-Matching, Skriptgenerierung und Kaufsignal-Analyse für mehr Umsatz." },
    opportunity: { ...pageTranslations.en.opportunity, title: "Warum TikTok für E‑Commerce wirkt" },
    solution: { ...pageTranslations.en.solution, title: "E‑Commerce Features" },
    scriptTypes: { ...pageTranslations.en.scriptTypes, title: "Produkt-Skript-Typen", subtitle: "8 E‑Commerce-optimierte Vorlagen" },
    results: { ...pageTranslations.en.results, title: "Seller-Ergebnisse", stats: [{ value: "3x", label: "mehr Produkt-Content" }, { value: "45%", label: "höhere Video-zu-Klick-Rate" }, { value: "2.5x", label: "Content-ROI" }] },
    calculator: { ...pageTranslations.en.calculator, title: "TikTok Content ROI-Rechner", budget: "Monatliches Content-Budget ($)", clickRate: "Aktuelle Video-zu-Klick-Rate (%)", aov: "Durchschnittlicher Bestellwert ($)", cta: "Auf TikTok verkaufen" },
    boundary: { ...pageTranslations.en.boundary, title: "Transparenzhinweis" },
    cta: { ...pageTranslations.en.cta, title: "Mehr auf TikTok verkaufen", desc: "Verbinde dein Konto und finde passende Trendformate für deine Produkte.", primary: "Seller-Test starten", secondary: "Sample ansehen" }
  }
};

// --- Components ---

// 1. High Fidelity Widget: Product-Trend Matcher (Glassmorphism)
const ProductTrendMatching = () => {
  return (
    <div className="relative w-full aspect-[16/9] bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/20 dark:border-slate-700/50 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1AAE82]/50 to-transparent" />
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex items-center gap-2">
           <div className="w-3 h-3 bg-red-500/80 rounded-full shadow-sm" />
           <div className="w-3 h-3 bg-yellow-500/80 rounded-full shadow-sm" />
           <div className="w-3 h-3 bg-green-500/80 rounded-full shadow-sm" />
        </div>
        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
          <Zap className="w-3 h-3 text-[#1AAE82]" /> Trend Radar v2.0
        </div>
      </div>

      <div className="flex-1 flex items-center justify-between gap-4 md:gap-8 relative z-10">
        {/* Product Card */}
        <div className="flex-1 bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-2xl p-4 h-full flex flex-col items-center justify-center text-center group hover:border-[#1AAE82]/30 transition-colors">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 shadow-inner group-hover:scale-110 transition-transform duration-300">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <div className="font-bold text-sm text-gray-900 dark:text-white">Your Product</div>
          <div className="text-xs text-gray-500 mt-1">SKU-2025-X</div>
        </div>

        {/* Connection Animation */}
        <div className="flex flex-col items-center gap-2 z-10">
          <div className="w-1.5 h-1.5 bg-[#1AAE82] rounded-full animate-pulse shadow-[0_0_10px_#1AAE82]" />
          <div className="w-1 h-1 bg-[#1AAE82]/50 rounded-full" />
          <div className="w-1 h-1 bg-[#1AAE82]/30 rounded-full" />
          <div className="px-3 py-1 bg-[#1AAE82]/10 text-[#1AAE82] rounded-full font-bold text-[10px] uppercase tracking-wider border border-[#1AAE82]/20 backdrop-blur-sm">
            Matching
          </div>
          <div className="w-1 h-1 bg-[#1AAE82]/30 rounded-full" />
          <div className="w-1 h-1 bg-[#1AAE82]/50 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#1AAE82] rounded-full animate-pulse shadow-[0_0_10px_#1AAE82]" />
        </div>

        {/* Trend Card */}
        <div className="flex-1 bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-2xl p-4 h-full flex flex-col items-center justify-center text-center group hover:border-[#1AAE82]/30 transition-colors">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 shadow-inner group-hover:scale-110 transition-transform duration-300">
            <TrendingUp className="w-8 h-8" />
          </div>
          <div className="font-bold text-sm text-gray-900 dark:text-white">#TechUnboxing</div>
          <div className="text-xs text-green-500 mt-1 font-medium">+450% Growth</div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center relative z-10">
         <div className="text-xs font-medium text-gray-500">Status: <span className="text-[#1AAE82] font-bold">READY TO GENERATE</span></div>
         <div className="w-24 h-1.5 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
           <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "100%" }}
             transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
             className="h-full bg-[#1AAE82]" 
           />
         </div>
      </div>
    </div>
  );
};

// 2. High Fidelity Widget: ROI Calculator (Modern SaaS)
const ROICalculatorWidget = ({ t }: { t: any }) => {
  const [budget, setBudget] = useState(2000);
  const [clickRate, setClickRate] = useState(1.5);
  const [aov, setAov] = useState(45);
  const estimatedLift = Math.round((budget * 100) * (clickRate / 100) * 0.45 * 0.02 * aov);

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#1AAE82]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mb-8 border-b border-gray-100 dark:border-slate-800 pb-6 relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1AAE82]/10 flex items-center justify-center text-[#1AAE82]">
            <Calculator className="w-5 h-5" />
          </div>
          {t.title}
        </h3>
      </div>
      
      <div className="space-y-8 relative z-10">
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t.budget}</label>
            <span className="text-sm font-bold font-mono text-gray-900 dark:text-white bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-lg border border-gray-200 dark:border-slate-700">${budget}</span>
          </div>
          <input 
            type="range" min="500" max="10000" step="100" 
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-[#1AAE82]"
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="flex justify-between mb-3">
               <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t.clickRate}</label>
               <span className="text-sm font-bold font-mono text-gray-900 dark:text-white bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-lg border border-gray-200 dark:border-slate-700">{clickRate}%</span>
            </div>
            <input 
              type="range" min="0.1" max="5.0" step="0.1" 
              value={clickRate}
              onChange={(e) => setClickRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-[#1AAE82]"
            />
          </div>
          <div>
            <div className="flex justify-between mb-3">
               <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t.aov}</label>
               <span className="text-sm font-bold font-mono text-gray-900 dark:text-white bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-lg border border-gray-200 dark:border-slate-700">${aov}</span>
            </div>
            <input 
              type="range" min="10" max="200" step="5" 
              value={aov}
              onChange={(e) => setAov(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-[#1AAE82]"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1AAE82]/5 to-transparent border border-[#1AAE82]/20 rounded-2xl p-6 relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1AAE82] mb-2">{t.result}</p>
            <div className="text-4xl md:text-5xl font-bold font-mono text-gray-900 dark:text-white tracking-tight">
              +${estimatedLift.toLocaleString()}
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
            <BarChart2 className="w-32 h-32 text-[#1AAE82]" />
          </div>
        </div>

        <button className="w-full py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-[#1AAE82]/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
          {t.cta} <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// --- Main Page Component ---

export const EcommerceSellersPage = ({ 
  onNavigate, 
  isDarkMode, 
  setIsDarkMode 
}: { 
  onNavigate: (page: string) => void, 
  isDarkMode: boolean, 
  setIsDarkMode: (isDark: boolean) => void 
}) => {
  const { language, setLanguage } = useLanguage();
  const { enableAnimations, reduceMotion } = usePerformance();
  const t = (localizedPageTranslations as any)[language] || localizedPageTranslations.en;
  const globalT = globalTranslations[language as keyof typeof globalTranslations] || globalTranslations.en;

  // Animation config
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans text-gray-900 dark:text-white selection:bg-[#1AAE82]/20 selection:text-[#1AAE82]">
      <SEO 
        title={t.meta.title}
        description={t.meta.description}
        keywords={["tiktok ecommerce", "tiktok shop tool", "product video scripts", "tiktok seller analytics"]}
        lang={language}
      />

      <Navbar 
        onTrySample={() => onNavigate('landing')}
        onSignUp={() => onNavigate('auth')}
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

          <section className="relative pt-32 pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
                  <ShoppingBag className="w-3 h-3" /> For E-commerce
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-8 leading-[1.1] tracking-tight text-gray-900 dark:text-white">
                  {t.hero.title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1AAE82] to-[#2DD4BF]">
                    {t.hero.titleHighlight}
                  </span>
                </h1>
                
                <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-lg font-light">
                  {t.hero.lead}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => onNavigate('auth')}
                    className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-[#1AAE82]/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    {t.hero.ctaPrimary} <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => onNavigate('landing')}
                    className="px-8 py-4 bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
                  >
                    <CirclePlay className="w-5 h-5" /> {t.hero.ctaSecondary}
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#1AAE82]/20 rounded-full blur-[80px] -z-10" />
                <ProductTrendMatching />
              </motion.div>
            </div>
          </section>
        </div>

        {/* 2. CORE INSIGHT (Replaces TL;DR) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-32 -mt-10 relative z-20">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-white/50 dark:border-slate-700/50 ring-1 ring-black/5 flex flex-col md:flex-row gap-10 items-center text-center md:text-left">
             <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Core Insight</h3>
                <p className="text-xl md:text-2xl text-gray-900 dark:text-white leading-relaxed font-medium">
                  {t.tldr.content}
                </p>
                <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                  {Object.entries(t.tldr.links).map(([key, label]: [string, any]) => (
                    <span key={key} className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 shadow-sm">
                      {label}
                    </span>
                  ))}
                </div>
             </div>
             
             <div className="w-full md:w-80 shrink-0 bg-white/50 dark:bg-slate-800/50 rounded-2xl p-6 border border-gray-200 dark:border-slate-700/50 text-left">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                  <Target className="w-5 h-5 text-[#1AAE82]" />
                  {t.opportunity.title}
                </h4>
                <ul className="space-y-4">
                  {t.opportunity.points.map((point: any, i: number) => (
                    <li key={i}>
                      <div className="font-bold text-sm text-[#1AAE82] mb-0.5">{point.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{point.desc}</div>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </section>

        {/* 3. SOLUTION - Modern Cards */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-24 text-center">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight text-gray-900 dark:text-white">
                {t.solution.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {t.solution.points.map((point: any, i: number) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20 dark:border-slate-700/50 p-8 rounded-3xl hover:shadow-xl hover:shadow-[#1AAE82]/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1AAE82]/10 to-[#1AAE82]/20 rounded-2xl flex items-center justify-center mb-6 text-[#1AAE82] group-hover:scale-110 transition-transform">
                    {i === 0 ? <Zap className="w-6 h-6" /> : 
                     i === 1 ? <Video className="w-6 h-6" /> :
                     i === 2 ? <Clock className="w-6 h-6" /> :
                     <BarChart2 className="w-6 h-6" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{point.title}</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SCRIPT TYPES - Bento Grid */}
        <section className="py-32 bg-gray-50/50 dark:bg-slate-900/50 border-y border-gray-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4 text-gray-900 dark:text-white">
                  {t.scriptTypes.title}
                </h2>
                <p className="text-xl text-gray-500 dark:text-gray-400">
                  {t.scriptTypes.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.scriptTypes.types.map((type: any, i: number) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between min-h-[260px] group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-slate-700/50 flex items-center justify-center mb-6 text-gray-900 dark:text-white group-hover:bg-[#1AAE82] group-hover:text-white transition-colors duration-300">
                      <type.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{type.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {type.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#1AAE82] transition-colors">{type.tag}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. RESULTS & ROI */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-gray-900 dark:text-white">
                  {t.results.title}
                </h2>
                <div className="space-y-10">
                  {t.results.stats.map((stat: any, i: number) => (
                    <div key={i} className="flex items-center gap-8 pb-8 border-b border-gray-100 dark:border-slate-800 last:border-0">
                      <span className="text-5xl md:text-6xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-[#1AAE82] to-[#2DD4BF]">{stat.value}</span>
                      <span className="text-lg font-medium text-gray-600 dark:text-gray-300 max-w-[200px] leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm text-gray-400">{t.results.note}</p>
              </div>
              
              <div className="relative">
                <ROICalculatorWidget t={t.calculator} />
              </div>
            </div>
          </div>
        </section>

        {/* 6. TRANSPARENCY (Glass Box) */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-gray-200 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="font-bold text-lg mb-8 flex items-center justify-center gap-2 uppercase tracking-widest text-gray-900 dark:text-white">
                <Lock className="w-5 h-5 text-gray-400" /> {t.boundary.title}
              </h3>
              <div className="space-y-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                <p><strong className="text-gray-900 dark:text-white">DATA:</strong> {t.boundary.data.replace("Data we use:", "")}</p>
                <p><strong className="text-gray-900 dark:text-white">LIMITS:</strong> {t.boundary.limit.replace("What we do not do:", "")}</p>
                <p><strong className="text-gray-900 dark:text-white">NOTE:</strong> {t.boundary.note.replace("Variability note:", "")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CTA */}
        <section className="py-32 relative overflow-hidden bg-[#111827]">
           {/* Background Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1AAE82]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 text-white">
              {t.cta.title}
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.cta.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => onNavigate('auth')}
                className="px-10 py-5 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-[#1AAE82]/30 transition-all transform hover:-translate-y-1"
              >
                {t.cta.primary}
              </button>
              <button 
                onClick={() => onNavigate('landing')}
                className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full font-bold text-lg backdrop-blur-sm transition-all"
              >
                {t.cta.secondary}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer t={globalT.footer} onNavigate={onNavigate} />
    </div>
  );
};

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '简体中文' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' }
];

export const translations = {
  en: {
    product: 'Product',
    pricing: 'Pricing',
    resources: 'Resources',
    login: 'Log in',
    signup: 'Try Free',
    whatIs: 'What is OwlSeer',
    howItWorks: 'How it works',
    faq: 'FAQ',
    security: 'Security & Privacy',
    blog: 'Blog',
    featuresPage: {
      hero: {
        title: "Intelligence that",
        titleHighlight: "scales with you",
        subtitle: "From your first viral hit to your hundredth brand deal. OwlSeer provides the infrastructure for sustainable creator growth."
      },
      bento: {
        title: "The Creator OS",
        subtitle: "A complete suite of tools designed to replace your fragmented stack.",
        items: [
          { title: "Smart Goal Setting", desc: "Turn vague dreams into actionable daily targets." },
          { title: "Visual Roadmap", desc: "See your growth path, months in advance." },
          { title: "Script Gen", desc: "AI that writes like you, but faster." },
          { title: "Trend Radar", desc: "Spot viral waves before they break." },
          { title: "Auto-Schedule", desc: "Post when your audience is awake." },
          { title: "Deep Analytics", desc: "Metrics that actually matter." }
        ]
      },
      deepDive: {
        strategy: {
          badge: "Strategy",
          title: "Your 24/7 Creative Director",
          desc: "Never stare at a blank page again. Our AI Copilot doesn't just give you generic ideas; it generates full scripts, hooks, and visual direction based on your unique voice and past performance.",
          feature1: "Tone-of-voice learning",
          feature2: "Frame-by-frame direction"
        },
        trends: {
          badge: "Trends",
          title: "Predict the Future",
          desc: "Stop chasing trends that are already dying. Our predictive engine analyzes millions of data points to identify rising topics, sounds, and formats days before they hit the mainstream.",
          feature1: "7-day predictive window",
          feature2: "Niche-specific filtering"
        },
        analytics: {
          badge: "Analytics",
          title: "Surgical Precision",
          desc: "Vanity metrics are for amateurs. We drill down into retention curves, hook efficiency, and audience sentiment to tell you exactly why a video performed (or why it didn't).",
          feature1: "Second-by-second retention",
          feature2: "Sentiment analysis"
        }
      },
      cta: {
        title: "Ready to upgrade your workflow?",
        button: "Get Started Free"
      }
    },
    hero: {
      badge: 'v2.0 is now live',
      title: "See What's",
      titleHighlight: "Next",
      subtitle: "Your {platform} analytics don't tell you what to do.",
      subtitle2: "We do.",
      ctaPrimary: "Try Sample",
      ctaSecondary: "No signup needed",
      ctaInstant: "Instant access",
      availableOn: "Available On",
      platforms: {
        web: "Web",
        appStore: "App Store",
        googlePlay: "Google Play"
      }
    },
    productShowcase: {
      opportunities: { title: "Spot Trends Before They Peak", desc: "Stop chasing yesterday’s viral hits. Our AI analyzes millions of signals to find high-potential topics tailored specifically to your niche." },
      planning: { title: "Execution, Not Just Planning", desc: "Turn strategy into action. Get a weekly production schedule that balances high-growth risks with stable, trust-building content." },
      analytics: { title: "Decode Your Content DNA", desc: "Understand exactly why your best videos perform. We break down your content into structural elements to replicate success." }
    },
    coreFeatures: {
      badge: "Powerhouse",
      title: "Everything you need to",
      titleHighlight: "dominate",
      subtitle: "A unified operating system for modern creators. Stop juggling disjointed tools.",
      copilot: { title: "AI Strategy Copilot", desc: "Your 24/7 creative partner. Generate high-conversion scripts, brainstorm hooks, and get instant feedback on your ideas." },
      trend: { title: "Trend Intelligence", desc: "Spot opportunities before they peak. Our AI analyzes millions of data points to find *your* next viral topic.", liveSignals: "Live Signals" },
      goals: { title: "Smart Goals", desc: "Turn vague ambitions into actionable daily tasks." },
      analytics: { title: "Deep Analytics" },
      features: { scheduling: "Smart Scheduling", prediction: "Viral Prediction", multiAccount: "Multi-Account", reports: "Instant Reports" }
    },
    pricingSection: {
      title: "Simple, Transparent Pricing",
      subtitle: "Start your 14-day free trial. Cancel anytime.",
      monthly: "Monthly",
      yearly: "Yearly",
      save: "20% OFF",
      period: "mo",
      plans: {
        creator: { name: "Creator", features: ["Up to 3 TikTok accounts", "AI content suggestions", "Basic analytics", "Content scheduling", "Email support"] },
        growth: { name: "Growth", features: ["Up to 10 TikTok accounts", "Advanced AI optimization", "Advanced analytics", "Team collaboration", "Priority support", "Weekly consultations"] },
        scale: { name: "Scale", features: ["Unlimited accounts", "Enterprise AI", "Custom analytics", "Advanced team tools", "White-label options", "Dedicated manager", "24/7 priority support"] }
      },
      cta: { trial: "Start Free Trial", buy: "Buy Now" },
      footer: { secure: "Secure payment", trial: "14-day free trial", cancel: "Cancel anytime" }
    },
    pricingPage: {
      hero: {
        title: "Invest in Growth,",
        titleHighlight: "Not Guesswork.",
        subtitle: "Choose the plan that fits your ambition. Start for free, upgrade as you grow."
      },
      comparison: {
        title: "Detailed Feature Comparison",
        subtitle: "Everything you need to know about our plans.",
        features: "Features",
        mostPopular: "MOST POPULAR",
        forIndividuals: "For individuals",
        forCreators: "For serious creators",
        forTeams: "For teams & agencies",
        corePlatform: "Core Platform",
        intelligence: "Intelligence & AI",
        analytics: "Analytics & Reporting",
        support: "Support & Security"
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "Can I cancel my subscription anytime?", a: "Yes, absolutely. There are no long-term contracts for monthly plans. You can cancel directly from your dashboard at any time." },
          { q: "How does the 14-day free trial work?", a: "You'll get full access to the Pro plan features for 14 days. We won't charge your card until the trial ends. You can cancel anytime during the trial to avoid being charged." },
          { q: "Do I need to give you my TikTok password?", a: "No! We use the official TikTok API and OAuth 2.0 for secure connection. We never see or store your password, and we only have the permissions you explicitly grant." },
          { q: "What happens if I add more accounts?", a: "The Pro plan covers up to 3 accounts. If you need more, you can upgrade to the Agency plan which supports 10+ accounts and offers volume discounts." },
          { q: "Do you offer refunds?", a: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the results, simply reach out to our support team for a full refund." }
        ]
      },
      cta: {
        title: "Ready to stop guessing?",
        subtitle: "Join thousands of creators who are scaling their audience with data, not luck.",
        button: "Get Started Now"
      }
    },
    finalCta: {
      title: "Ready to see your future?",
      subtitle: "Join thousands of creators who stopped guessing and started growing. Experience the full dashboard instantly.",
      start: "Start Your Free Trial",
      demo: "View Live Demo"
    },
    footer: {
      tagline: "The AI-powered foresight platform for TikTok creators. See what's next before everyone else.",
      product: "Product",
      resources: "Resources",
      legal: "Legal",
      rights: "© 2026 OwlSeer. All rights reserved.",
      links: {
        howItWorks: "How It Works",
        pricing: "Pricing",
        trySample: "Try Sample",
        blog: "Blog",
        faq: "FAQ",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        security: "Security",
        cookies: "Cookie Policy"
      }
    }
  },
  zh: {
    product: '产品',
    pricing: '价格',
    resources: '资源',
    login: '登录',
    signup: '免费注册',
    whatIs: 'OwlSeer 是什么',
    howItWorks: '工作原理',
    faq: '常见问题',
    security: '安全与隐私',
    blog: '博客',
    hero: {
      badge: 'v2.0 现已上线',
      title: "预见",
      titleHighlight: "未来",
      subtitle: "{platform} 数据分析不会告诉你该做什么。",
      subtitle2: "我们会。",
      ctaPrimary: "体验演示",
      ctaSecondary: "无需注册",
      ctaInstant: "即刻访问"
    },
    productShowcase: {
      opportunities: { title: "在爆发前发现趋势", desc: "停止追逐昨天的热门。我们的 AI 分析数百万个信号，为您量身定制高潜力的利基话题。" },
      planning: { title: "执行，而不只是计划", desc: "将策略转化为行动。获得每周制作时间表，平衡高增长风险与稳定的信任建立内容。" },
      analytics: { title: "解码您的内容 DNA", desc: "准确了解您最佳视频的表现原因。我们将您的内容分解为结构元素以复制成功。" }
    },
    coreFeatures: {
      badge: "强大引擎",
      title: "您需要的一切",
      titleHighlight: "统治力",
      subtitle: "现代创作者的统一操作系统。停止在脱节的工具之间切换。",
      copilot: { title: "AI 策略副驾驶", desc: "您的 24/7 创意伙伴。生成高转化脚本，头脑风暴钩子，并即时获得创意反馈。" },
      trend: { title: "趋势情报", desc: "在机会见顶前发现它们。我们的 AI 分析数百万个数据点以找到*您的*下一个病毒话题。", liveSignals: "实时信号" },
      goals: { title: "智能目标", desc: "将模糊的雄心转化为可操作的日常任务。" },
      analytics: { title: "深度分析" },
      features: { scheduling: "智能调度", prediction: "病毒预测", multiAccount: "多账号管理", reports: "即时报告" }
    },
    pricingSection: {
      title: "简单，透明的定价",
      subtitle: "开始您的 14 天免费试用。随时取消。",
      monthly: "月付",
      yearly: "年付",
      save: "省 20%",
      period: "月",
      plans: {
        creator: { name: "创作者", features: ["最多 3 个 TikTok 账号", "AI 内容建议", "基础分析", "内容调度", "邮件支持"] },
        growth: { name: "增长", features: ["最多 10 个 TikTok 账号", "高级 AI 优化", "高级分析", "团队协作", "优先支持", "每周咨询"] },
        scale: { name: "规模化", features: ["无限账号", "企业级 AI", "自定义分析", "高级团队工具", "白标选项", "专属经理", "24/7 优先支持"] }
      },
      cta: { trial: "开始免费试用", buy: "立即购买" },
      footer: { secure: "安全支付", trial: "14 天免费试用", cancel: "随时取消" }
    },
    pricingPage: {
      hero: {
        title: "投资增长，",
        titleHighlight: "拒绝盲猜。",
        subtitle: "选择适合您雄心的计划。免费开始，随需升级。"
      },
      comparison: {
        title: "详细功能对比",
        subtitle: "关于我们计划的一切信息。",
        features: "功能",
        mostPopular: "最受欢迎",
        forIndividuals: "适合个人",
        forCreators: "适合专业创作者",
        forTeams: "适合团队 & 机构",
        corePlatform: "核心平台",
        intelligence: "智能 & AI",
        analytics: "分析 & 报告",
        support: "支持 & 安全"
      },
      faq: {
        title: "常见问题",
        items: [
          { q: "我可以随时取消订阅吗？", a: "是的，当然。月度计划没有长期合同。您可以随时直接从您的仪表板取消。" },
          { q: "14 天免费试用如何运作？", a: "您将获得 14 天的 Pro 计划功能的完全访问权限。试用结束前我们不会从您的卡中扣款。您可以在试用期间随时取消以避免被收费。" },
          { q: "我需要提供我的 TikTok 密码吗？", a: "不！我们使用官方 TikTok API 和 OAuth 2.0 进行安全连接。我们永远不会看到或存储您的密码，我们只有您明确授予的权限。" },
          { q: "如果我添加更多账号会怎样？", a: "Pro 计划涵盖最多 3 个账号。如果您需要更多，可以升级到支持 10+ 账号并提供批量折扣的 Agency 计划。" },
          { q: "你们提供退款吗？", a: "是的，我们提供 30 天退款保证。如果您对结果不满意，只需联系我们的支持团队即可获得全额退款。" }
        ]
      },
      cta: {
        title: "准备好停止猜测了吗？",
        subtitle: "加入成千上万靠数据而非运气扩大受众的创作者。",
        button: "立即开始"
      }
    },
    finalCta: {
      title: "准备好预见未来了吗？",
      subtitle: "加入成千上万不再猜测、开始增长的创作者。立即体验完整仪表板。",
      start: "开始免费试用",
      demo: "查看实时演示"
    },
    footer: {
      tagline: "创作者的 AI TikTok 策略引擎。\n停止猜测，开始增长。",
      product: "产品",
      resources: "资源",
      legal: "法律",
      rights: "© 2026 OwlSeer. 保留所有权利。"
    }
  },
  ja: {
    product: '製品',
    pricing: '料金',
    resources: 'リソース',
    login: 'ログイン',
    signup: '無料登録',
    whatIs: 'OwlSeerとは',
    howItWorks: '仕組み',
    faq: 'よくある質問',
    security: 'セキュリティとプライバシー',
    blog: 'ブログ',
    hero: {
      badge: 'v2.0 リリース',
      title: "次を",
      titleHighlight: "見通す",
      subtitle: "{platform}のアナリティクスは、何をすべきか教えてくれません。",
      subtitle2: "私たちが教えます。",
      ctaPrimary: "サンプル",
      ctaSecondary: "登録不要",
      ctaInstant: "即時アクセス",
      availableOn: "対応プラットフォーム",
      platforms: {
        web: "Web版",
        appStore: "App Store",
        googlePlay: "Google Play"
      }
    },
    productShowcase: {
      opportunities: { title: "ピーク前にトレンドを発見", desc: "昨日のバイラルを追いかけるのはやめましょう。AIが数百万のシグナルを分析し、ニッチに特化した高ポテンシャルなトピックを見つけます。" },
      planning: { title: "計画だけでなく、実行を", desc: "戦略を行動に変えます。高成長のリスクと安定した信頼構築コンテンツのバランスが取れた週間制作スケジュールを取得します。" },
      analytics: { title: "コンテンツDNAを解読", desc: "なぜあなたの動画が成功したのかを正確に理解します。成功を再現するために、コンテンツを構造要素に分解します。" }
    },
    coreFeatures: {
      badge: "パワーハウス",
      title: "支配するために",
      titleHighlight: "必要なすべて",
      subtitle: "現代のクリエイターのための統一OS。バラバラなツールを行き来するのはやめましょう。",
      copilot: { title: "AI戦略コパイロット", desc: "24時間365日のクリエイティブパートナー。高コンバージョンのスクリプト生成、フックのブレインストーミング、アイデアへの即時フィードバック。" },
      trend: { title: "トレンドインテリジェンス", desc: "ピーク前に機会を発見。AIが数百万のデータポイントを分析し、*あなたの*次のバイラルトピックを見つけます。", liveSignals: "ライブシグナル" },
      goals: { title: "スマートゴール", desc: "曖昧な野心を実行可能な日々のタスクに変えます。" },
      analytics: { title: "詳細分析" },
      features: { scheduling: "スマート予約", prediction: "バイラル予測", multiAccount: "複数アカウント", reports: "即時レポート" }
    },
    pricingSection: {
      title: "シンプルで透明な価格設定",
      subtitle: "14日間の無料トライアルを開始。いつでもキャンセル可能。",
      monthly: "月払い",
      yearly: "年払い",
      save: "20% OFF",
      period: "月",
      plans: {
        creator: { name: "クリエイター", features: ["最大3つのTikTokアカウント", "AIコンテンツ提案", "基本分析", "コンテンツ予約", "メールサポート"] },
        growth: { name: "グロース", features: ["最大10個のTikTokアカウント", "高度なAI最適化", "詳細分析", "チームコラボレーション", "優先サポート", "週間コンサルテーション"] },
        scale: { name: "スケール", features: ["無制限アカウント", "エンタープライズAI", "カスタム分析", "高度なチームツール", "ホワイトラベル", "専任マネージャー", "24/7優先サポート"] }
      },
      cta: { trial: "無料トライアル開始", buy: "今すぐ購入" },
      footer: { secure: "安全な支払い", trial: "14日間無料", cancel: "いつでもキャンセル" }
    },
    finalCta: {
      title: "未来を見る準備はできましたか？",
      subtitle: "推測をやめて成長を始めた何千人ものクリエイターに参加しましょう。今すぐダッシュボードを体験してください。",
      start: "無料トライアルを開始",
      demo: "ライブデモを見る"
    },
    footer: {
      tagline: "クリエイターのためのAI TikTok戦略。\n推測はやめて、成長を始めましょう。",
      product: "製品",
      resources: "リソース",
      legal: "法的情報",
      rights: "© 2026 OwlSeer. All rights reserved."
    }
  },
  ko: {
    product: '제품',
    pricing: '가격',
    resources: '리소스',
    login: '로그인',
    signup: '무료 가입',
    whatIs: 'OwlSeer란?',
    howItWorks: '작동 원리',
    faq: '자주 묻는 질문',
    security: '보안 및 개인정보',
    blog: '블로그',
    hero: {
      badge: 'v2.0 출시',
      title: "다음을",
      titleHighlight: "내다보다",
      subtitle: "{platform} 분석은 무엇을 해야 할지 알려주지 않습니다.",
      subtitle2: "우리가 알려드립니다.",
      ctaPrimary: "샘플 체험",
      ctaSecondary: "가입 불필요",
      ctaInstant: "즉시 접속"
    },
    productShowcase: {
      opportunities: { title: "유행하기 전 트렌드 포착", desc: "어제의 바이럴 히트를 쫓지 마세요. AI가 수백만 개의 신호를 분석하여 틈새 시장에 맞는 잠재력 높은 주제를 찾습니다." },
      planning: { title: "계획이 아닌 실행", desc: "전략을 행동으로 옮기세요. 고성장 위험과 안정적인 신뢰 구축 콘텐츠의 균형을 맞춘 주간 제작 일정을 받으세요." },
      analytics: { title: "콘텐츠 DNA 해독", desc: "최고의 영상이 성공한 이유를 정확히 이해하세요. 성공을 복제하기 위해 콘텐츠를 구조적 요소로 분해합니다." }
    },
    coreFeatures: {
      badge: "파워하우스",
      title: "지배하기 위해",
      titleHighlight: "필요한 모든 것",
      subtitle: "현대 크리에이터를 위한 통합 운영 체제. 분리된 도구들을 오가지 마세요.",
      copilot: { title: "AI 전략 코파일럿", desc: "24/7 창의적 파트너. 고전환 스크립트 생성, 훅 브레인스토밍, 아이디어에 대한 즉각적인 피드백." },
      trend: { title: "트렌드 인텔리전스", desc: "정점에 도달하기 전 기회 포착. AI가 수백만 데이터 포인트를 분석하여 *당신의* 다음 바이럴 주제를 찾습니다.", liveSignals: "실시간 신호" },
      goals: { title: "스마트 목표", desc: "모호한 야망을 실행 가능한 일일 작업으로 전환하세요." },
      analytics: { title: "심층 분석" },
      features: { scheduling: "스마트 스케줄링", prediction: "바이럴 예측", multiAccount: "다중 계정", reports: "즉시 보고서" }
    },
    pricingSection: {
      title: "간단하고 투명한 가격",
      subtitle: "14일 무료 체험을 시작하세요. 언제든지 취소 가능.",
      monthly: "월간",
      yearly: "연간",
      save: "20% 할인",
      period: "월",
      plans: {
        creator: { name: "크리에이터", features: ["최대 3개 TikTok 계정", "AI 콘텐츠 제안", "기본 분석", "콘텐츠 스케줄링", "이메일 지원"] },
        growth: { name: "성장", features: ["최대 10개 TikTok 계정", "고급 AI 최적화", "심층 분석", "팀 협업", "우선 지원", "주간 상담"] },
        scale: { name: "스케일", features: ["무제한 계정", "엔터프라이즈 AI", "맞춤형 분석", "고급 팀 도구", "화이트 라벨 옵션", "전담 매니저", "24/7 우선 지원"] }
      },
      cta: { trial: "무료 체험 시작", buy: "지금 구매" },
      footer: { secure: "안전한 결제", trial: "14일 무료", cancel: "언제든 취소 가능" }
    },
    finalCta: {
      title: "미래를 볼 준비가 되셨나요?",
      subtitle: "추측을 멈추고 성장을 시작한 수천 명의 크리에이터와 함께하세요. 전체 대시보드를 즉시 경험하세요.",
      start: "무료 체험 시작",
      demo: "라이브 데모 보기"
    },
    footer: {
      tagline: "크리에이터를 위한 AI TikTok 전략.\n추측은 그만두고 성장을 시작하세요.",
      product: "제품",
      resources: "리소스",
      legal: "법적 고지",
      rights: "© 2026 OwlSeer. All rights reserved."
    }
  },
  es: {
    product: 'Producto',
    pricing: 'Precios',
    resources: 'Recursos',
    login: 'Iniciar sesión',
    signup: 'Registro gratis',
    whatIs: 'Qué es OwlSeer',
    howItWorks: 'Cómo funciona',
    faq: 'Preguntas frecuentes',
    security: 'Seguridad y Privacidad',
    blog: 'Blog',
    hero: {
      badge: 'v2.0 ya disponible',
      title: "Mira lo",
      titleHighlight: "Siguiente",
      subtitle: "Tus analíticas de {platform} no te dicen qué hacer.",
      subtitle2: "Nosotros sí.",
      ctaPrimary: "Probar Muestra",
      ctaSecondary: "Sin registro",
      ctaInstant: "Acceso instantáneo"
    },
    productShowcase: {
      opportunities: { title: "Detecta Tendencias Antes", desc: "Deja de perseguir éxitos virales de ayer. Nuestra IA analiza millones de señales para encontrar temas de alto potencial." },
      planning: { title: "Ejecución, No Solo Planificación", desc: "Convierte la estrategia en acción. Obtén un calendario de producción semanal equilibrado." },
      analytics: { title: "Decodifica tu ADN de Contenido", desc: "Entiende exactamente por qué tus mejores videos funcionan. Desglosamos tu contenido en elementos estructurales." }
    },
    coreFeatures: {
      badge: "Potencia",
      title: "Todo lo que necesitas para",
      titleHighlight: "dominar",
      subtitle: "Un sistema operativo unificado para creadores modernos.",
      copilot: { title: "Copiloto de Estrategia AI", desc: "Tu socio creativo 24/7. Genera guiones de alta conversión y obtén retroalimentación instantánea." },
      trend: { title: "Inteligencia de Tendencias", desc: "Detecta oportunidades antes de que alcancen su punto máximo.", liveSignals: "Señales en Vivo" },
      goals: { title: "Objetivos Inteligentes", desc: "Convierte ambiciones vagas en tareas diarias procesables." },
      analytics: { title: "Analítica Profunda" },
      features: { scheduling: "Programación Inteligente", prediction: "Predicción Viral", multiAccount: "Multi-cuenta", reports: "Informes Instantáneos" }
    },
    pricingSection: {
      title: "Precios Simples y Transparentes",
      subtitle: "Comienza tu prueba gratuita de 14 días. Cancela cuando quieras.",
      monthly: "Mensual",
      yearly: "Anual",
      save: "20% DTO",
      period: "mes",
      plans: {
        creator: { name: "Creador", features: ["Hasta 3 cuentas de TikTok", "Sugerencias de contenido AI", "Analítica básica", "Programación de contenido", "Soporte por correo"] },
        growth: { name: "Crecimiento", features: ["Hasta 10 cuentas de TikTok", "Optimización AI avanzada", "Analítica avanzada", "Colaboración en equipo", "Soporte prioritario", "Consultas semanales"] },
        scale: { name: "Escala", features: ["Cuentas ilimitadas", "IA Empresarial", "Analítica personalizada", "Herramientas de equipo avanzadas", "Marca blanca", "Gerente dedicado", "Soporte 24/7"] }
      },
      cta: { trial: "Empezar Prueba Gratis", buy: "Comprar Ahora" },
      footer: { secure: "Pago seguro", trial: "14 días gratis", cancel: "Cancela cuando quieras" }
    },
    finalCta: {
      title: "¿Listo para ver tu futuro?",
      subtitle: "Únete a miles de creadores que dejaron de adivinar y comenzaron a crecer.",
      start: "Empezar Prueba Gratis",
      demo: "Ver Demo en Vivo"
    },
    footer: {
      tagline: "Estrategia de TikTok con IA para creadores.\nDeja de adivinar. Empieza a crecer.",
      product: "Producto",
      resources: "Recursos",
      legal: "Legal",
      rights: "© 2026 OwlSeer. Todos los derechos reservados."
    }
  },
  fr: {
    product: 'Produit',
    pricing: 'Tarifs',
    resources: 'Ressources',
    login: 'Connexion',
    signup: 'Inscription gratuite',
    whatIs: "Qu'est-ce que OwlSeer",
    howItWorks: 'Comment ça marche',
    faq: 'FAQ',
    security: 'Sécurité et Confidentialité',
    blog: 'Blog',
    hero: {
      badge: 'v2.0 est en ligne',
      title: "Voir la",
      titleHighlight: "Suite",
      subtitle: "Vos analyses {platform} ne vous disent pas quoi faire.",
      subtitle2: "Nous le faisons.",
      ctaPrimary: "Essayer la démo",
      ctaSecondary: "Pas d'inscription",
      ctaInstant: "Accès instantané"
    },
    productShowcase: {
      opportunities: { title: "Repérez les Tendances", desc: "Arrêtez de chasser les succès viraux d'hier. Notre IA analyse des millions de signaux pour trouver des sujets à fort potentiel." },
      planning: { title: "Exécution, Pas Juste Planification", desc: "Transformez la stratégie en action. Obtenez un calendrier de production hebdomadaire équilibré." },
      analytics: { title: "Décodez votre ADN de Contenu", desc: "Comprenez exactement pourquoi vos meilleures vidéos fonctionnent. Nous décomposons votre contenu." }
    },
    coreFeatures: {
      badge: "Puissance",
      title: "Tout ce dont vous avez besoin pour",
      titleHighlight: "dominer",
      subtitle: "Un système d'exploitation unifié pour les créateurs modernes.",
      copilot: { title: "Copilote Stratégie IA", desc: "Votre partenaire créatif 24/7. Générez des scripts à haute conversion et obtenez des retours instantanés." },
      trend: { title: "Intelligence des Tendances", desc: "Repérez les opportunités avant qu'elles n'atteignent leur apogée.", liveSignals: "Signaux en Direct" },
      goals: { title: "Objectifs Intelligents", desc: "Transformez des ambitions vagues en tâches quotidiennes réalisables." },
      analytics: { title: "Analytique Approfondie" },
      features: { scheduling: "Planification Intelligente", prediction: "Prédiction Virale", multiAccount: "Multi-comptes", reports: "Rapports Instantanés" }
    },
    pricingSection: {
      title: "Tarification Simple et Transparente",
      subtitle: "Commencez votre essai gratuit de 14 jours. Annulez à tout moment.",
      monthly: "Mensuel",
      yearly: "Annuel",
      save: "-20%",
      period: "mois",
      plans: {
        creator: { name: "Créateur", features: ["Jusqu'à 3 comptes TikTok", "Suggestions de contenu IA", "Analytique de base", "Planification de contenu", "Support par email"] },
        growth: { name: "Croissance", features: ["Jusqu'à 10 comptes TikTok", "Optimisation IA avancée", "Analytique avancée", "Collaboration d'équipe", "Support prioritaire", "Consultations hebdomadaires"] },
        scale: { name: "Échelle", features: ["Comptes illimités", "IA Entreprise", "Analytique personnalisée", "Outils d'équipe avancés", "Marque blanche", "Gestionnaire dédié", "Support 24/7"] }
      },
      cta: { trial: "Essai Gratuit", buy: "Acheter Maintenant" },
      footer: { secure: "Paiement sécurisé", trial: "14 jours gratuits", cancel: "Annulez à tout moment" }
    },
    finalCta: {
      title: "Prêt à voir votre futur ?",
      subtitle: "Rejoignez des milliers de créateurs qui ont arrêté de deviner et commencé à grandir.",
      start: "Commencer l'Essai Gratuit",
      demo: "Voir la Démo"
    },
    footer: {
      tagline: "Stratégie TikTok par IA pour les créateurs.\nArrêtez de deviner. Commencez à grandir.",
      product: "Produit",
      resources: "Ressources",
      legal: "Légal",
      rights: "© 2026 OwlSeer. Tous droits réservés."
    }
  },
  de: {
    product: 'Produkt',
    pricing: 'Preise',
    resources: 'Ressourcen',
    login: 'Anmelden',
    signup: 'Kostenlos registrieren',
    whatIs: 'Was ist OwlSeer',
    howItWorks: 'Wie es funktioniert',
    faq: 'FAQ',
    security: 'Sicherheit & Datenschutz',
    blog: 'Blog',
    hero: {
      badge: 'v2.0 ist live',
      title: "Sieh das",
      titleHighlight: "Nächste",
      subtitle: "Deine {platform}-Analysen sagen dir nicht, was du tun sollst.",
      subtitle2: "Wir schon.",
      ctaPrimary: "Demo ausprobieren",
      ctaSecondary: "Keine Anmeldung",
      ctaInstant: "Sofortiger Zugang"
    },
    productShowcase: {
      opportunities: { title: "Trends vor dem Höhepunkt erkennen", desc: "Hör auf, viralen Hits von gestern hinterherzujagen. Unsere KI analysiert Millionen von Signalen." },
      planning: { title: "Ausführung, nicht nur Planung", desc: "Verwandle Strategie in Aktion. Erhalte einen wöchentlichen Produktionsplan." },
      analytics: { title: "Entschlüssele deine Content-DNA", desc: "Verstehe genau, warum deine besten Videos funktionieren. Wir zerlegen deinen Content." }
    },
    coreFeatures: {
      badge: "Kraftpaket",
      title: "Alles was du brauchst um zu",
      titleHighlight: "dominieren",
      subtitle: "Ein einheitliches Betriebssystem für moderne Creator.",
      copilot: { title: "KI-Strategie-Copilot", desc: "Dein kreativer Partner rund um die Uhr. Generiere Skripte mit hoher Konversion." },
      trend: { title: "Trend-Intelligenz", desc: "Erkenne Chancen, bevor sie ihren Höhepunkt erreichen.", liveSignals: "Live-Signale" },
      goals: { title: "Smarte Ziele", desc: "Verwandle vage Ambitionen in umsetzbare tägliche Aufgaben." },
      analytics: { title: "Tiefenanalyse" },
      features: { scheduling: "Smarte Planung", prediction: "Virale Vorhersage", multiAccount: "Multi-Account", reports: "Sofortberichte" }
    },
    pricingSection: {
      title: "Einfache, transparente Preise",
      subtitle: "Starte deine 14-tägige kostenlose Testversion. Jederzeit kündbar.",
      monthly: "Monatlich",
      yearly: "Jährlich",
      save: "20% SPAREN",
      period: "Monat",
      plans: {
        creator: { name: "Creator", features: ["Bis zu 3 TikTok-Konten", "KI-Inhaltsvorschläge", "Basis-Analytik", "Inhaltsplanung", "E-Mail-Support"] },
        growth: { name: "Wachstum", features: ["Bis zu 10 TikTok-Konten", "Erweiterte KI-Optimierung", "Erweiterte Analytik", "Team-Zusammenarbeit", "Bevorzugter Support", "Wöchentliche Beratung"] },
        scale: { name: "Skalierung", features: ["Unbegrenzte Konten", "Enterprise KI", "Benutzerdefinierte Analytik", "Erweiterte Team-Tools", "White-Label", "Dedizierter Manager", "24/7 Prioritäts-Support"] }
      },
      cta: { trial: "Kostenlos testen", buy: "Jetzt kaufen" },
      footer: { secure: "Sichere Zahlung", trial: "14 Tage kostenlos", cancel: "Jederzeit kündbar" }
    },
    finalCta: {
      title: "Bereit, deine Zukunft zu sehen?",
      subtitle: "Schließe dich Tausenden von Creatorn an, die aufgehört haben zu raten und angefangen haben zu wachsen.",
      start: "Kostenlos starten",
      demo: "Live-Demo ansehen"
    },
    footer: {
      tagline: "KI-gestützte TikTok-Strategie für Creator.\nHör auf zu raten. Fang an zu wachsen.",
      product: "Produkt",
      resources: "Ressourcen",
      legal: "Rechtliches",
      rights: "© 2026 OwlSeer. Alle Rechte vorbehalten."
    }
  }
};
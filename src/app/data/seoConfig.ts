// SEO Configuration for all pages
// Based on OwlSeer-SEO-GEO-优化方案.md

const BASE_URL = 'https://owlseer.com';

// ============================================
// Page SEO Configurations
// ============================================

export const seoConfig = {
  // Home Page
  home: {
    en: {
      title: 'OwlSeer - AI TikTok Content Strategy & Script Generator',
      description: 'Stop guessing what to post. OwlSeer tells you what to do next on TikTok with actionable content plans in under 3 minutes. AI-generated scripts ready to shoot today.',
      keywords: ['TikTok content strategy', 'AI script generator', 'TikTok analytics tool', 'content planning', 'viral video strategy', 'best TikTok tool for creators', 'AI TikTok script writer', 'TikTok growth platform 2026'],
      canonicalUrl: `${BASE_URL}/`,
    },
    zh: {
      title: 'OwlSeer - AI 驱动的 TikTok 内容策略与脚本生成平台',
      description: '不再猜测该发布什么——OwlSeer 告诉你下一步该做什么。在3分钟内提供可操作的内容计划，AI生成的脚本今天就可以拍摄。无需注册即可试用。',
      keywords: ['TikTok内容策略', 'AI脚本生成器', '短视频营销工具', '抖音运营助手', '创作者增长工具'],
      canonicalUrl: `${BASE_URL}/zh/`,
    }
  },

  // How It Works Page
  howItWorks: {
    en: {
      title: 'How OwlSeer Works - TikTok Data to Actionable Strategy',
      description: 'See exactly how we turn your TikTok data into actionable strategy—no black boxes. Step-by-step breakdown from your input to your content plan, every recommendation traceable.',
      keywords: ['TikTok AI methodology', 'transparent analytics', 'content strategy workflow', 'data-driven TikTok', 'how TikTok algorithm works', 'AI content recommendation system', 'TikTok strategy explained'],
      canonicalUrl: `${BASE_URL}/how-it-works`,
    },
    zh: {
      title: '工作原理 - TikTok 数据转化为可操作策略 | OwlSeer',
      description: '精确看到我们如何将你的TikTok数据转化为可操作的策略——没有黑箱操作。逐步分解：从您的输入到内容计划。',
      keywords: ['TikTok AI方法论', '透明分析', '内容策略工作流程', '数据驱动TikTok'],
      canonicalUrl: `${BASE_URL}/zh/how-it-works`,
    }
  },

  // Pricing Page
  pricing: {
    en: {
      title: 'Pricing - 7-Day Free Trial | OwlSeer TikTok Strategy Tool',
      description: 'Risk-free 7-day trial of our full TikTok strategy platform. No automatic billing until trial ends. Clear tier-based pricing for creators and agencies.',
      keywords: ['TikTok tool pricing', 'content creator subscription', 'free trial', 'AI strategy pricing', 'best TikTok tool free trial', 'affordable content strategy tool', 'TikTok analytics pricing 2026'],
      canonicalUrl: `${BASE_URL}/pricing`,
    },
    zh: {
      title: '定价 - 7天免费试用 | OwlSeer TikTok策略工具',
      description: '无风险7天全功能试用，试用期结束前不自动扣费。为创作者和代理商提供清晰的层级定价。',
      keywords: ['TikTok工具定价', '创作者订阅', '免费试用', 'AI策略定价'],
      canonicalUrl: `${BASE_URL}/zh/pricing`,
    }
  },

  // FAQ Page
  faq: {
    en: {
      title: 'FAQ - Privacy, Promises & Proof | OwlSeer',
      description: 'Real answers to the questions you\'re actually thinking—privacy, promises, and proof. Honest answers with direct links to verify every claim.',
      keywords: ['OwlSeer FAQ', 'TikTok tool questions', 'AI safety', 'data privacy', 'is OwlSeer safe', 'TikTok analytics security', 'AI content generator privacy'],
      canonicalUrl: `${BASE_URL}/faq`,
    },
    zh: {
      title: '常见问题 - 隐私、承诺与证明 | OwlSeer',
      description: '对你真实思考的问题给出答案——隐私、承诺和证明。诚实的答案，直接链接验证每个声明。',
      keywords: ['OwlSeer常见问题', 'TikTok工具问题', 'AI安全', '数据隐私'],
      canonicalUrl: `${BASE_URL}/zh/faq`,
    }
  },

  // Blog Page
  blog: {
    en: {
      title: 'Blog - Free TikTok Strategy Tips & Insights | OwlSeer',
      description: 'Free content strategy advice—no catch, no paywall. Practical TikTok tips you can use today with data-backed insights from our analysis.',
      keywords: ['TikTok tips', 'content strategy blog', 'creator advice', 'TikTok trends', 'TikTok strategy 2026', 'how to go viral on TikTok', 'TikTok content ideas'],
      canonicalUrl: `${BASE_URL}/blog`,
    },
    zh: {
      title: '博客 - 免费TikTok策略技巧与洞察 | OwlSeer',
      description: '免费的内容策略建议——没有陷阱，没有付费墙，只有有用的信息。',
      keywords: ['TikTok技巧', '内容策略博客', '创作者建议', 'TikTok趋势'],
      canonicalUrl: `${BASE_URL}/zh/blog`,
    }
  },

  // Contact Page
  contact: {
    en: {
      title: 'Contact Us - Get Help | OwlSeer',
      description: 'Tell us your goal, we\'ll suggest the shortest path. Direct line to our support team with response within 24 hours.',
      keywords: ['contact support', 'help center', 'customer service'],
      canonicalUrl: `${BASE_URL}/contact`,
    },
    zh: {
      title: '联系我们 - 获取帮助 | OwlSeer',
      description: '告诉我们你的目标，我们将建议最短路径。直接联系支持团队，24小时内回复。',
      keywords: ['联系支持', '帮助中心', '客户服务'],
      canonicalUrl: `${BASE_URL}/zh/contact`,
    }
  },

  // Features Page
  features: {
    en: {
      title: 'Features - AI-Powered TikTok Strategy Tools | OwlSeer',
      description: 'Discover OwlSeer\'s powerful features: AI script generator, trend radar, content calendar, and data-driven recommendations for TikTok creators.',
      keywords: ['TikTok features', 'AI script generator', 'trend radar', 'content calendar', 'TikTok analytics features'],
      canonicalUrl: `${BASE_URL}/features`,
    },
    zh: {
      title: '功能 - AI驱动的TikTok策略工具 | OwlSeer',
      description: '探索OwlSeer的强大功能：AI脚本生成器、趋势雷达、内容日历和数据驱动的推荐。',
      keywords: ['TikTok功能', 'AI脚本生成器', '趋势雷达', '内容日历'],
      canonicalUrl: `${BASE_URL}/zh/features`,
    }
  },

  // Privacy Policy Page
  privacy: {
    en: {
      title: 'Privacy Policy - Your Data Stays Yours | OwlSeer',
      description: 'Your data stays yours—we analyze it, we don\'t own it. Clear data handling policy in plain language with one-click data export and deletion.',
      keywords: ['privacy policy', 'data protection', 'GDPR compliant', 'data security'],
      canonicalUrl: `${BASE_URL}/privacy`,
    },
    zh: {
      title: '隐私政策 - 你的数据归你所有 | OwlSeer',
      description: '你的数据仍然是你的——我们分析它，我们不拥有它。清晰的数据处理政策，一键导出和删除数据。',
      keywords: ['隐私政策', '数据保护', 'GDPR合规', '数据安全'],
      canonicalUrl: `${BASE_URL}/zh/privacy`,
    }
  },

  // Terms of Service Page
  terms: {
    en: {
      title: 'Terms of Service | OwlSeer',
      description: 'Read OwlSeer\'s terms of service. Clear and fair terms for using our AI-powered TikTok content strategy platform.',
      keywords: ['terms of service', 'user agreement', 'platform terms'],
      canonicalUrl: `${BASE_URL}/terms`,
    },
    zh: {
      title: '服务条款 | OwlSeer',
      description: '阅读OwlSeer的服务条款。使用我们AI驱动的TikTok内容策略平台的清晰公平条款。',
      keywords: ['服务条款', '用户协议', '平台条款'],
      canonicalUrl: `${BASE_URL}/zh/terms`,
    }
  },

  // Security Page
  security: {
    en: {
      title: 'Security - How We Protect Your Data | OwlSeer',
      description: 'Learn how OwlSeer protects your data with enterprise-grade security. OAuth 2.0 authentication, encrypted data storage, and regular security audits.',
      keywords: ['data security', 'OAuth authentication', 'encrypted storage', 'security practices'],
      canonicalUrl: `${BASE_URL}/security`,
    },
    zh: {
      title: '安全 - 我们如何保护您的数据 | OwlSeer',
      description: '了解OwlSeer如何通过企业级安全保护您的数据。OAuth 2.0认证、加密数据存储和定期安全审计。',
      keywords: ['数据安全', 'OAuth认证', '加密存储', '安全实践'],
      canonicalUrl: `${BASE_URL}/zh/security`,
    }
  },

  // Cookie Policy Page
  cookies: {
    en: {
      title: 'Cookie Policy | OwlSeer',
      description: 'Learn how OwlSeer uses cookies to improve your experience. Our cookie policy explains what cookies we use and why.',
      keywords: ['cookie policy', 'cookies', 'tracking', 'privacy'],
      canonicalUrl: `${BASE_URL}/cookies`,
    },
    zh: {
      title: 'Cookie 政策 | OwlSeer',
      description: '了解OwlSeer如何使用Cookie来改善您的体验。我们的Cookie政策解释了我们使用的Cookie及其原因。',
      keywords: ['Cookie政策', 'cookies', '跟踪', '隐私'],
      canonicalUrl: `${BASE_URL}/zh/cookies`,
    }
  },

  // Sample Dashboard (noindex)
  sampleDashboard: {
    en: {
      title: 'Interactive Demo - Full Dashboard Experience | OwlSeer',
      description: 'This is the full dashboard experience without login. See what you\'ll get using sample data—diagnosis, recommendations, scripts, calendar.',
      keywords: ['free demo', 'TikTok dashboard', 'interactive preview'],
      canonicalUrl: `${BASE_URL}/sample/dashboard`,
      noindex: true,
    },
    zh: {
      title: '互动演示 - 完整仪表板体验 | OwlSeer',
      description: '这是完整的仪表板体验，无需登录——使用示例数据查看诊断、建议、脚本、日历。',
      keywords: ['免费演示', 'TikTok仪表板', '互动预览'],
      canonicalUrl: `${BASE_URL}/zh/sample/dashboard`,
      noindex: true,
    }
  }
};

// ============================================
// Structured Data Schemas
// ============================================

export const structuredDataSchemas = {
  // Organization Schema
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": "OwlSeer",
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/logo.png`,
      "width": 512,
      "height": 512
    },
    "sameAs": [
      "https://twitter.com/owlseer",
      "https://linkedin.com/company/owlseer"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@owlseer.com"
    }
  },

  // SoftwareApplication Schema
  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${BASE_URL}/#software`,
    "name": "OwlSeer",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Social Media Management",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "7-day free trial",
      "priceValidUntil": "2027-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "AI-powered TikTok content strategy platform that tells you what to post next",
    "featureList": [
      "AI-generated video scripts",
      "Actionable content plans in 3 minutes",
      "Data-driven posting recommendations",
      "Weekly strategy packs",
      "Trend radar and hashtag analysis"
    ],
    "screenshot": `${BASE_URL}/screenshot-dashboard.png`,
    "softwareVersion": "2.0",
    "releaseNotes": `${BASE_URL}/changelog`,
    "publisher": {
      "@id": `${BASE_URL}/#organization`
    }
  },

  // WebSite Schema
  webSite: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "url": BASE_URL,
    "name": "OwlSeer",
    "publisher": {
      "@id": `${BASE_URL}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  },

  // HowTo Schema for How It Works page
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use OwlSeer for TikTok Growth",
    "description": "Step-by-step guide to turn your TikTok data into actionable strategy",
    "totalTime": "PT3M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Try Your Free Demo",
        "text": "Experience the power of AI-driven strategy without signing up. Get an instant audit of your current content and identify growth gaps immediately.",
        "url": `${BASE_URL}/sample/dashboard`,
        "image": `${BASE_URL}/steps/step1-demo.png`
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Connect Your Account",
        "text": "Securely link your TikTok account via OAuth 2.0. Our AI learns your unique voice, audience demographics, and niche specificities.",
        "url": `${BASE_URL}/auth`,
        "image": `${BASE_URL}/steps/step2-connect.png`
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Get Your Weekly Pack",
        "text": "Every Monday at 7 AM, receive a personalized strategy pack containing 7 viral opportunities and ready-to-shoot scripts.",
        "url": `${BASE_URL}/dashboard`,
        "image": `${BASE_URL}/steps/step3-pack.png`
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "TikTok Account"
      },
      {
        "@type": "HowToTool",
        "name": "Web Browser"
      }
    ]
  },

  // Product Schema for Pricing page
  product: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "OwlSeer Pro",
    "description": "AI-powered TikTok content strategy platform for serious creators",
    "brand": {
      "@type": "Brand",
      "name": "OwlSeer"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Trial",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2027-12-31",
        "description": "7-day full access trial"
      },
      {
        "@type": "Offer",
        "name": "Starter",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "description": "Perfect for trying out OwlSeer"
      },
      {
        "@type": "Offer",
        "name": "Pro Monthly",
        "price": "29",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "description": "For creators serious about growth"
      },
      {
        "@type": "Offer",
        "name": "Pro Annual",
        "price": "19",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "description": "Save 34% with annual billing"
      },
      {
        "@type": "Offer",
        "name": "Agency",
        "price": "79",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "description": "Scale multiple accounts with ease"
      }
    ],
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah Chen"
      },
      "reviewBody": "OwlSeer completely changed my content strategy. I went from 10K to 125K followers in 3 months."
    }
  },

  // ContactPage Schema
  contactPage: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact OwlSeer Support",
    "description": "Get help from our support team within 24 hours",
    "url": `${BASE_URL}/contact`,
    "mainEntity": {
      "@type": "Organization",
      "name": "OwlSeer",
      "email": "support@owlseer.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@owlseer.com",
        "availableLanguage": ["English", "Chinese"]
      }
    }
  }
};

// Helper function to get page SEO config
export const getPageSEO = (page: keyof typeof seoConfig, lang: 'en' | 'zh' = 'en') => {
  const pageConfig = seoConfig[page];
  return pageConfig?.[lang] || pageConfig?.en;
};

// Helper function to generate hreflang alternates
export const generateAlternates = (basePath: string) => {
  const cleanPath = basePath.startsWith('/') ? basePath : `/${basePath}`;
  return [
    { lang: 'en', url: `${BASE_URL}${cleanPath}` },
    { lang: 'zh', url: `${BASE_URL}/zh${cleanPath}` }
  ];
};

export default seoConfig;

// SEO Configuration for all pages
// Based on OwlSeer-SEO-GEO-优化方案.md

import { addLanguagePrefix, SUPPORTED_LANGUAGES, type Language } from '../i18n/routing';

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
      title: 'How OwlSeer Works: TikTok Strategy in 3 Steps',
      description: 'Connect your TikTok in 30 seconds. Get AI-powered strategy in under 3 minutes. Trend predictions, content diagnosis, scripts, and weekly plans. Free trial.',
      keywords: ['how to use tiktok ai tool', 'owlseer onboarding', 'tiktok strategy tool setup', 'connect tiktok to ai', 'tiktok content planning ai', 'owlseer getting started'],
      canonicalUrl: `${BASE_URL}/how-it-works`,
    },
    zh: {
      title: '三步拥有你的 TikTok 策略 | OwlSeer',
      description: '30秒连接账号，3分钟获取AI策略。包含趋势预测、内容诊断、脚本和每周计划。免费试用。',
      keywords: ['如何使用TikTok AI工具', 'OwlSeer入门', 'TikTok策略工具设置', '连接TikTok到AI', 'TikTok内容规划AI'],
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

  // Content Diagnosis Page
  contentDiagnosis: {
    en: {
      title: 'TikTok Content Diagnosis with AI | OwlSeer',
      description: 'Find out why your TikTok videos underperform. OwlSeer diagnoses content issues across 12 engagement signals and provides specific fixes.',
      keywords: ['tiktok content diagnosis ai', 'tiktok content analysis', 'tiktok engagement diagnosis', 'tiktok video diagnosis', 'content performance analysis tiktok'],
      canonicalUrl: `${BASE_URL}/use-cases/content-diagnosis`,
    },
    zh: {
      title: 'TikTok 内容 AI 诊断 | OwlSeer',
      description: '找出您的 TikTok 视频表现不佳的原因。OwlSeer 通过 12 个互动信号诊断内容问题并提供具体修复建议。',
      keywords: ['tiktok内容诊断ai', 'tiktok内容分析', 'tiktok互动诊断', 'tiktok视频诊断', '内容表现分析tiktok'],
      canonicalUrl: `${BASE_URL}/zh/use-cases/content-diagnosis`,
    }
  },

  // Trend Prediction Page
  trendPrediction: {
    en: {
      title: 'Predict TikTok Trends with AI | OwlSeer',
      description: 'Spot rising TikTok trends before they peak. OwlSeer Trend Radar scores hashtags and sounds by velocity, competition, and niche fit.',
      keywords: ['tiktok trend prediction', 'viral trends', 'trend radar', 'tiktok analytics', 'ai trend forecasting'],
      canonicalUrl: `${BASE_URL}/use-cases/trend-prediction`,
    },
    zh: {
      title: 'AI 预测 TikTok 趋势 | OwlSeer',
      description: '在趋势爆发前识别机会。OwlSeer 通过增速、竞争度和领域匹配度评估标签与音频趋势。',
      keywords: ['tiktok趋势预测', '爆款趋势', '趋势雷达', 'tiktok数据分析', 'ai预测'],
      canonicalUrl: `${BASE_URL}/zh/use-cases/trend-prediction`,
    }
  },

  // Posting Schedule Page
  postingSchedule: {
    en: {
      title: 'Best Time to Post on TikTok — AI-Powered | OwlSeer',
      description: 'Find your best posting times with AI. OwlSeer maps audience active hours and creates personalized TikTok posting schedules.',
      keywords: ['best time to post tiktok', 'tiktok posting schedule', 'audience activity', 'social media scheduling'],
      canonicalUrl: `${BASE_URL}/use-cases/posting-schedule`,
    },
    zh: {
      title: 'TikTok 最佳发布时间 — AI 驱动 | OwlSeer',
      description: '基于受众活跃时间找到你的最佳发布时间。OwlSeer 生成个性化发布节奏与排程建议。',
      keywords: ['tiktok最佳发布时间', '发布排程', '受众活跃时间', '社媒排程'],
      canonicalUrl: `${BASE_URL}/zh/use-cases/posting-schedule`,
    }
  },

  // Script Generation Page
  scriptGeneration: {
    en: {
      title: 'AI TikTok Script Generation | OwlSeer',
      description: 'Generate TikTok scripts in 60 seconds from engagement data. Hooks, body, CTA, sounds, and hashtags personalized to your audience.',
      keywords: ['tiktok script generator', 'ai script writing', 'viral hooks', 'content automation', 'tiktok script ai'],
      canonicalUrl: `${BASE_URL}/use-cases/script-generation`,
    },
    zh: {
      title: 'AI TikTok 脚本生成 | OwlSeer',
      description: '基于互动数据在 60 秒内生成 TikTok 脚本。钩子、正文、CTA、音频与标签全部可定制。',
      keywords: ['tiktok脚本生成', 'ai脚本写作', '爆款钩子', '内容自动化', '短视频脚本'],
      canonicalUrl: `${BASE_URL}/zh/use-cases/script-generation`,
    }
  },

  // Hashtag Strategy Page
  hashtagStrategy: {
    en: {
      title: 'TikTok Hashtag Strategy — AI-Powered | OwlSeer',
      description: 'Build a data-driven hashtag strategy. OwlSeer recommends tags by momentum, competition, and relevance to your niche.',
      keywords: ['tiktok hashtag strategy', 'hashtag analytics', 'hashtag momentum', 'tiktok trends', 'hashtag generator'],
      canonicalUrl: `${BASE_URL}/use-cases/hashtag-strategy`,
    },
    zh: {
      title: 'TikTok 标签策略 — AI 驱动 | OwlSeer',
      description: '构建数据驱动的 TikTok 标签策略。根据标签动量、竞争度与领域相关性提供推荐。',
      keywords: ['tiktok标签策略', '标签分析', '标签动量', 'tiktok趋势', '标签生成'],
      canonicalUrl: `${BASE_URL}/zh/use-cases/hashtag-strategy`,
    }
  },

  // Glossary Index Page
  glossary: {
    en: {
      title: 'TikTok Glossary — 50+ Terms Explained | OwlSeer',
      description: 'Plain-language definitions of 50+ TikTok terms. Hook rate, FYP, sound velocity, engagement decay, and more — organized A-Z with signal definition links.',
      keywords: ['tiktok glossary', 'tiktok terms explained', 'fyp meaning', 'hook rate definition'],
      canonicalUrl: `${BASE_URL}/glossary`
    },
    zh: {
      title: 'TikTok 术语表 — 50+ 术语详解 | OwlSeer',
      description: '50+ TikTok 术语的通俗释义。从钩子率到 FYP，按字母顺序排列，附带信号定义链接。',
      keywords: ['tiktok术语表', 'tiktok术语解释', 'fyp是什么意思', '钩子率定义'],
      canonicalUrl: `${BASE_URL}/zh/glossary`
    }
  },

  // FYP Glossary Page
  glossaryFyp: {
    en: {
      title: 'What Does FYP Mean on TikTok? | OwlSeer Glossary',
      description: 'FYP stands for For You Page — TikTok\'s algorithmic feed that determines video reach. Learn how FYP works and how to optimize for it.',
      keywords: ['fyp meaning tiktok', 'for you page tiktok', 'what is fyp', 'tiktok fyp algorithm'],
      canonicalUrl: `${BASE_URL}/glossary/fyp`
    },
    zh: {
      title: 'FYP 在 TikTok 上是什么意思？| OwlSeer 术语表',
      description: 'FYP 代表 For You Page（为你推荐页）——决定视频触达范围的 TikTok 算法信息流。了解 FYP 如何运作以及如何对其进行优化。',
      keywords: ['tiktok fyp意思', 'tiktok为你推荐页', 'fyp是什么', 'tiktok fyp算法'],
      canonicalUrl: `${BASE_URL}/zh/glossary/fyp`
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

  // Content Creators Page
  contentCreators: {
    en: {
      title: 'TikTok Tool for Content Creators | OwlSeer',
      description: 'Get a weekly TikTok content plan with trend alerts, AI script generation, and optimized scheduling.',
      keywords: ['tiktok tool for content creators', 'tiktok content plan', 'tiktok growth tool'],
      canonicalUrl: `${BASE_URL}/solutions/content-creators`,
    },
    zh: {
      title: '内容创作者 TikTok 工具 | OwlSeer',
      description: '获取包含趋势提醒、AI 脚本生成和优化发布计划的每周 TikTok 内容计划。',
      keywords: ['tiktok创作者工具', 'tiktok内容计划', 'tiktok增长工具'],
      canonicalUrl: `${BASE_URL}/zh/solutions/content-creators`,
    }
  },

  // Local Business Page
  localBusiness: {
    en: {
      title: 'TikTok Tool for Local Businesses | OwlSeer',
      description: 'Turn TikTok views into walk-in customers. OwlSeer creates local-audience content with trending formats, service scripts, and posting times for your community.',
      keywords: ['tiktok marketing tool for local business', 'tiktok for local business', 'local tiktok marketing', 'tiktok foot traffic', 'tiktok for restaurants', 'tiktok for salons', 'local business social media'],
      canonicalUrl: `${BASE_URL}/solutions/local-business`,
    },
    zh: {
      title: '本地商家 TikTok 营销工具 | OwlSeer',
      description: '将 TikTok 浏览量转化为上门顾客。OwlSeer 为您的社区创建具有趋势格式、服务脚本和发布时间的本地受众内容。',
      keywords: ['本地商家tiktok营销', '实体店tiktok推广', '同城引流工具', '餐厅tiktok营销', '美容院tiktok推广'],
      canonicalUrl: `${BASE_URL}/zh/solutions/local-business`,
    }
  },

  // Compare VidIQ Page
  compareVidIQ: {
    en: {
      title: 'OwlSeer vs VidIQ | TikTok Tool Comparison',
      description: 'Compare OwlSeer and VidIQ. See why OwlSeer is the best choice for TikTok creators.',
      keywords: ['owlseer vs vidiq', 'tiktok analytics comparison'],
      canonicalUrl: `${BASE_URL}/vs/owlseer-vs-vidiq`
    },
    zh: {
      title: 'OwlSeer vs VidIQ | TikTok 工具对比',
      description: '对比 OwlSeer 和 VidIQ。了解为什么 OwlSeer 是 TikTok 创作者的最佳选择。',
      keywords: ['owlseer vs vidiq', 'tiktok分析对比'],
      canonicalUrl: `${BASE_URL}/zh/vs/owlseer-vs-vidiq`
    }
  },

  // Brands Page
  brands: {
    en: {
      title: 'TikTok Strategy for Brands | OwlSeer',
      description: 'Build a TikTok presence that feels authentic, not awkward. Trend matching with brand safety scoring and data-driven scripts.',
      keywords: ['tiktok for brands', 'brand safety tiktok', 'tiktok brand strategy', 'authentic brand content'],
      canonicalUrl: `${BASE_URL}/solutions/brands`,
    },
    zh: {
      title: '品牌 TikTok 策略 | OwlSeer',
      description: '打造真实而不尴尬的 TikTok 品牌形象。带有品牌安全评分的趋势匹配和数据驱动的脚本。',
      keywords: ['品牌tiktok策略', 'tiktok品牌安全', '真实品牌内容'],
      canonicalUrl: `${BASE_URL}/zh/solutions/brands`,
    }
  },

  // Agencies Page
  agencies: {
    en: {
      title: 'TikTok Strategy Tool for Agencies | OwlSeer',
      description: 'Scale your agency\'s TikTok services. Multi-account management, white-label reporting, and AI script generation for all your clients.',
      keywords: ['tiktok agency tool', 'social media agency software', 'tiktok reporting tool', 'multi-account tiktok management'],
      canonicalUrl: `${BASE_URL}/solutions/agencies`,
    },
    zh: {
      title: '代理商 TikTok 策略工具 | OwlSeer',
      description: '扩展您的代理商 TikTok 服务。多账号管理、白标报告和为所有客户提供的 AI 脚本生成。',
      keywords: ['tiktok代理商工具', '社媒代理商软件', 'tiktok报告工具', '多账号tiktok管理'],
      canonicalUrl: `${BASE_URL}/zh/solutions/agencies`,
    }
  },

  // Sample Dashboard (noindex)
  sampleDashboard: {
    en: {
      title: 'Interactive Sample - Full Dashboard Experience | OwlSeer',
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

type SeoPageEntry = {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  noindex?: boolean;
};

type SeoPageConfig = Partial<Record<Language, SeoPageEntry>>;
type SeoPageKey = keyof typeof seoConfig;

type SeoLocalizationOverride = {
  title: string;
  description: string;
  keywords: string[];
};

const SEO_LOCALIZATION_OVERRIDES: Partial<Record<Exclude<Language, 'en' | 'zh'>, Partial<Record<SeoPageKey, SeoLocalizationOverride>>>> = {
  ja: {
    home: {
      title: 'OwlSeer - AI搭載TikTokコンテンツ戦略・台本生成ツール',
      description: '何を投稿すべきか迷わない。OwlSeerがTikTokで次に取るべきアクションを3分以内に提示し、すぐ撮影できるAI台本を生成します。',
      keywords: ['TikTokコンテンツ戦略', 'AI台本生成', 'TikTok分析ツール', '投稿計画', 'バイラル動画戦略'],
    },
    howItWorks: {
      title: 'OwlSeerの使い方：3ステップでTikTok戦略を作成',
      description: '30秒でTikTok連携、3分でAI戦略を取得。トレンド予測、コンテンツ診断、台本、週間プランをすぐ利用できます。',
      keywords: ['TikTok AIツールの使い方', 'OwlSeer導入', 'TikTok戦略セットアップ', 'TikTok連携'],
    },
    pricing: {
      title: '料金 - 7日間無料トライアル | OwlSeer TikTok戦略ツール',
      description: 'フル機能を7日間無料で体験。トライアル終了まで自動課金なし。クリエイターと代理店向けの明確な料金プラン。',
      keywords: ['TikTokツール料金', '無料トライアル', 'クリエイター向けサブスク', 'AI戦略ツール価格'],
    },
    faq: {
      title: 'FAQ - プライバシー・約束・実績 | OwlSeer',
      description: 'プライバシー、約束、実績に関する質問へ率直に回答。各主張を確認できる明確な情報を掲載しています。',
      keywords: ['OwlSeer FAQ', 'TikTokツール質問', 'データプライバシー', 'AI安全性'],
    },
    blog: {
      title: 'ブログ - 無料TikTok戦略のヒントとインサイト | OwlSeer',
      description: '無料で実践できるTikTok戦略ノウハウを公開。データに基づく具体的なヒントをすぐ実務に活かせます。',
      keywords: ['TikTokヒント', 'コンテンツ戦略ブログ', 'クリエイター向けアドバイス', 'TikTokトレンド'],
    },
    contact: {
      title: 'お問い合わせ - サポートを受ける | OwlSeer',
      description: '目標を共有いただければ最短ルートを提案します。サポートチームが24時間以内に対応します。',
      keywords: ['お問い合わせ', 'サポート', 'ヘルプセンター', 'カスタマーサービス'],
    },
    features: {
      title: '機能 - AI搭載TikTok戦略ツール | OwlSeer',
      description: 'AI台本生成、トレンドレーダー、コンテンツカレンダーなど、TikTok成長に必要な機能を一括で提供します。',
      keywords: ['TikTok機能', 'AI台本生成', 'トレンドレーダー', 'コンテンツカレンダー'],
    },
    trendPrediction: {
      title: 'AIでTikTokトレンドを予測 | OwlSeer',
      description: 'トレンドが飽和する前にチャンスを把握。Trend Radar が伸び率・競合度・適合度を評価します。',
      keywords: ['TikTokトレンド予測', 'Trend Radar', 'バイラルトレンド', 'TikTok分析'],
    },
    postingSchedule: {
      title: 'TikTokの最適投稿時間をAIで特定 | OwlSeer',
      description: 'あなたの視聴者アクティブ時間を分析し、曜日別に最適な投稿スロットを提案します。',
      keywords: ['TikTok 最適投稿時間', '投稿スケジュール', '視聴者アクティブ時間', '投稿最適化'],
    },
    scriptGeneration: {
      title: 'AI TikTok台本生成 | OwlSeer',
      description: 'エンゲージメントデータを基に60秒で台本生成。フック、本文、CTA、音源、タグまで提案します。',
      keywords: ['TikTok台本生成', 'AIライティング', 'フック作成', 'コンテンツ自動化'],
    },
    hashtagStrategy: {
      title: 'TikTokハッシュタグ戦略をAIで最適化 | OwlSeer',
      description: 'ハッシュタグの勢い・競合・関連性を分析し、動画ごとの最適なタグ構成を提案します。',
      keywords: ['TikTokハッシュタグ戦略', 'ハッシュタグ分析', 'トレンドタグ', 'タグ最適化'],
    },
    contentDiagnosis: {
      title: 'TikTokコンテンツ診断をAIで自動化 | OwlSeer',
      description: '投稿が伸びない原因を12のエンゲージメント指標で診断。改善ポイントを具体的に提示します。',
      keywords: ['TikTokコンテンツ診断', 'TikTok分析', 'エンゲージメント改善', '動画パフォーマンス診断'],
    },
    glossary: {
      title: 'TikTok用語集 — 50以上の用語を解説 | OwlSeer',
      description: 'FYP、フック率、エンゲージメント減衰など、TikTok運用で重要な用語を分かりやすく整理。',
      keywords: ['TikTok用語集', 'TikTok用語解説', 'FYP 意味', 'フック率'],
    },
    glossaryFyp: {
      title: 'TikTokのFYPとは？ | OwlSeer用語集',
      description: 'FYP（For You Page）の仕組みと最適化ポイントを解説。到達率を高めるための基本を把握できます。',
      keywords: ['FYP 意味', 'For You Page', 'TikTokアルゴリズム', 'FYP 最適化'],
    },
    privacy: {
      title: 'プライバシーポリシー | OwlSeer',
      description: 'OwlSeerのデータ取り扱い方針を明確に公開。取得データ、利用目的、削除手順を確認できます。',
      keywords: ['プライバシーポリシー', 'データ保護', '個人情報', 'GDPR'],
    },
    terms: {
      title: '利用規約 | OwlSeer',
      description: 'OwlSeerの利用規約。サービス利用条件、責任範囲、契約条件を事前に確認できます。',
      keywords: ['利用規約', 'サービス条件', 'ユーザー契約', 'SaaS規約'],
    },
    security: {
      title: 'セキュリティ - データ保護の仕組み | OwlSeer',
      description: 'OAuth認証、暗号化保管、監査運用など、OwlSeerのセキュリティ対策を紹介します。',
      keywords: ['セキュリティ', 'OAuth', '暗号化', 'データ保護'],
    },
    cookies: {
      title: 'Cookieポリシー | OwlSeer',
      description: 'Cookieの利用目的と管理方法を説明。計測・機能改善のために利用する範囲を明示しています。',
      keywords: ['Cookieポリシー', 'Cookie管理', 'トラッキング', 'プライバシー'],
    },
    contentCreators: {
      title: 'コンテンツクリエイター向けTikTokツール | OwlSeer',
      description: 'トレンド通知、AI台本、投稿タイミング提案を統合。毎週のTikTok運用を効率化します。',
      keywords: ['クリエイター向けTikTokツール', 'TikTok成長', 'AI台本', '投稿計画'],
    },
    localBusiness: {
      title: 'ローカルビジネス向けTikTokマーケティング | OwlSeer',
      description: '地域顧客に届くコンテンツ戦略を自動提案。来店につながるTikTok運用を支援します。',
      keywords: ['ローカルビジネス TikTok', '地域集客', '店舗マーケティング', 'TikTok運用'],
    },
    brands: {
      title: 'ブランド向けTikTok戦略 | OwlSeer',
      description: 'ブランドセーフティとトレンド活用を両立。一貫性のあるTikTokブランド運用を実現します。',
      keywords: ['ブランド TikTok', 'ブランドセーフティ', 'SNS戦略', 'TikTokマーケティング'],
    },
    agencies: {
      title: '代理店向けTikTok運用プラットフォーム | OwlSeer',
      description: '複数アカウント管理、レポート自動化、AI台本生成で代理店業務をスケールさせます。',
      keywords: ['代理店 TikTok', 'マルチアカウント管理', 'レポート自動化', 'AI台本'],
    },
    sampleDashboard: {
      title: 'インタラクティブサンプル - フルダッシュボード体験 | OwlSeer',
      description: 'ログイン不要でフル機能のサンプル体験。診断、提案、台本、カレンダーを確認できます。',
      keywords: ['無料デモ', 'TikTokダッシュボード', 'インタラクティブ体験'],
    },
    compareVidIQ: {
      title: 'OwlSeer vs VidIQ | TikTokツール比較',
      description: 'OwlSeerとVidIQを比較。TikTok運用における機能、実用性、成長支援の違いを分かりやすく確認できます。',
      keywords: ['owlseer vs vidiq', 'TikTokツール比較', 'TikTok分析比較'],
    },
  },
  ko: {
    home: {
      title: 'OwlSeer - AI 기반 TikTok 콘텐츠 전략 및 스크립트 생성',
      description: '무엇을 올릴지 더 이상 고민하지 마세요. OwlSeer가 3분 안에 다음 실행 전략과 바로 촬영 가능한 AI 스크립트를 제공합니다.',
      keywords: ['TikTok 콘텐츠 전략', 'AI 스크립트 생성기', 'TikTok 분석 도구', '콘텐츠 기획', '바이럴 전략'],
    },
    howItWorks: {
      title: 'OwlSeer 작동 방식: 3단계 TikTok 전략',
      description: '30초 계정 연결, 3분 AI 전략 생성. 트렌드 예측, 콘텐츠 진단, 스크립트, 주간 플랜을 한 번에 제공합니다.',
      keywords: ['TikTok AI 도구 사용법', 'OwlSeer 시작', 'TikTok 전략 설정', '계정 연결'],
    },
    pricing: {
      title: '요금제 - 7일 무료 체험 | OwlSeer TikTok 전략 도구',
      description: '전체 기능을 7일간 위험 없이 체험하세요. 체험 종료 전 자동 결제 없음. 크리에이터와 에이전시를 위한 명확한 요금 구조.',
      keywords: ['TikTok 도구 요금', '7일 무료 체험', '크리에이터 구독', 'AI 전략 도구 가격'],
    },
    faq: {
      title: 'FAQ - 개인정보·약속·근거 | OwlSeer',
      description: '개인정보 보호, 약속, 실제 근거에 대한 질문에 솔직하게 답변합니다. 확인 가능한 정보와 함께 제공합니다.',
      keywords: ['OwlSeer FAQ', 'TikTok 도구 질문', '개인정보 보호', 'AI 안전성'],
    },
    blog: {
      title: '블로그 - 무료 TikTok 전략 팁과 인사이트 | OwlSeer',
      description: '무료로 활용 가능한 TikTok 전략 팁을 제공합니다. 데이터 기반 인사이트를 바로 실무에 적용할 수 있습니다.',
      keywords: ['TikTok 팁', '콘텐츠 전략 블로그', '크리에이터 인사이트', 'TikTok 트렌드'],
    },
    contact: {
      title: '문의하기 - 도움 받기 | OwlSeer',
      description: '목표를 알려주시면 가장 빠른 실행 경로를 제안합니다. 지원팀이 24시간 이내에 답변합니다.',
      keywords: ['문의하기', '고객지원', '헬프센터', '고객 서비스'],
    },
    features: {
      title: '기능 - AI 기반 TikTok 전략 도구 | OwlSeer',
      description: 'AI 스크립트 생성, 트렌드 레이더, 콘텐츠 캘린더 등 TikTok 성장을 위한 핵심 기능을 제공합니다.',
      keywords: ['TikTok 기능', 'AI 스크립트', '트렌드 레이더', '콘텐츠 캘린더'],
    },
    trendPrediction: {
      title: 'AI로 TikTok 트렌드 예측 | OwlSeer',
      description: '트렌드가 포화되기 전에 기회를 포착하세요. Trend Radar가 성장 속도, 경쟁도, 적합도를 분석합니다.',
      keywords: ['TikTok 트렌드 예측', '트렌드 레이더', '바이럴 트렌드', 'TikTok 분석'],
    },
    postingSchedule: {
      title: 'TikTok 최적 게시 시간 찾기 | OwlSeer',
      description: '내 계정의 실제 시청자 활성 시간 기반으로 요일별 최적 게시 시간대를 추천합니다.',
      keywords: ['TikTok 게시 시간', '게시 스케줄', '활성 시간 분석', '게시 최적화'],
    },
    scriptGeneration: {
      title: 'AI TikTok 스크립트 생성 | OwlSeer',
      description: '참여 데이터 기반으로 60초 안에 스크립트를 생성합니다. 훅, 본문, CTA, 사운드, 해시태그까지 제안합니다.',
      keywords: ['TikTok 스크립트 생성', 'AI 글쓰기', '바이럴 훅', '콘텐츠 자동화'],
    },
    hashtagStrategy: {
      title: 'TikTok 해시태그 전략 최적화 | OwlSeer',
      description: '해시태그 모멘텀, 경쟁도, 니치 적합도를 분석해 영상별 추천 태그 조합을 제공합니다.',
      keywords: ['TikTok 해시태그 전략', '해시태그 분석', '트렌드 해시태그', '태그 최적화'],
    },
    contentDiagnosis: {
      title: 'AI 기반 TikTok 콘텐츠 진단 | OwlSeer',
      description: '영상 성과가 낮은 원인을 12개 참여 지표로 분석하고, 실행 가능한 개선안을 제시합니다.',
      keywords: ['TikTok 콘텐츠 진단', 'TikTok 분석', '참여율 개선', '영상 성과 분석'],
    },
    glossary: {
      title: 'TikTok 용어집 — 50개 이상 용어 정리 | OwlSeer',
      description: 'FYP, 훅 비율, 참여 감소 등 TikTok 운영 핵심 용어를 쉽게 이해할 수 있도록 정리했습니다.',
      keywords: ['TikTok 용어집', 'TikTok 용어 설명', 'FYP 뜻', '훅 비율'],
    },
    glossaryFyp: {
      title: 'TikTok에서 FYP란? | OwlSeer 용어집',
      description: 'FYP(For You Page) 동작 원리와 최적화 방법을 설명합니다. 도달률 향상에 필요한 기본을 확인하세요.',
      keywords: ['FYP 뜻', 'For You Page', 'TikTok 알고리즘', 'FYP 최적화'],
    },
    privacy: {
      title: '개인정보 처리방침 | OwlSeer',
      description: 'OwlSeer의 데이터 수집 및 처리 기준을 투명하게 공개합니다. 보관, 삭제, 권리 행사 방법을 확인하세요.',
      keywords: ['개인정보 처리방침', '데이터 보호', '개인정보', 'GDPR'],
    },
    terms: {
      title: '서비스 이용약관 | OwlSeer',
      description: '서비스 사용 조건, 책임 범위, 계정 및 결제 관련 규정을 명확하게 안내합니다.',
      keywords: ['이용약관', '서비스 약관', '사용자 계약', 'SaaS 약관'],
    },
    security: {
      title: '보안 - 데이터 보호 방식 | OwlSeer',
      description: 'OAuth 인증, 암호화 저장, 정기 점검 등 OwlSeer의 보안 체계를 확인할 수 있습니다.',
      keywords: ['보안', 'OAuth', '암호화', '데이터 보호'],
    },
    cookies: {
      title: '쿠키 정책 | OwlSeer',
      description: '쿠키 사용 목적과 관리 방법을 안내합니다. 분석 및 제품 개선을 위한 사용 범위를 명확히 제공합니다.',
      keywords: ['쿠키 정책', '쿠키 관리', '추적', '개인정보'],
    },
    contentCreators: {
      title: '콘텐츠 크리에이터용 TikTok 도구 | OwlSeer',
      description: '트렌드 알림, AI 스크립트, 게시 타이밍 추천으로 주간 TikTok 운영 효율을 높입니다.',
      keywords: ['크리에이터 TikTok 도구', 'TikTok 성장', 'AI 스크립트', '콘텐츠 계획'],
    },
    localBusiness: {
      title: '로컬 비즈니스용 TikTok 마케팅 도구 | OwlSeer',
      description: '지역 고객에게 도달하는 콘텐츠 전략을 제안하여 조회수를 실제 방문으로 연결합니다.',
      keywords: ['로컬 비즈니스 TikTok', '지역 마케팅', '매장 유입', 'TikTok 운영'],
    },
    brands: {
      title: '브랜드를 위한 TikTok 전략 | OwlSeer',
      description: '브랜드 안전성과 트렌드 대응을 함께 고려해 일관된 브랜드 콘텐츠 운영을 지원합니다.',
      keywords: ['브랜드 TikTok', '브랜드 세이프티', 'SNS 전략', 'TikTok 마케팅'],
    },
    agencies: {
      title: '에이전시용 TikTok 운영 플랫폼 | OwlSeer',
      description: '멀티 계정 관리, 리포트 자동화, AI 스크립트로 에이전시 운영 효율과 확장성을 높입니다.',
      keywords: ['에이전시 TikTok', '멀티 계정 관리', '리포트 자동화', 'AI 스크립트'],
    },
    sampleDashboard: {
      title: '인터랙티브 샘플 - 전체 대시보드 체험 | OwlSeer',
      description: '로그인 없이 전체 대시보드 경험을 확인하세요. 진단, 추천, 스크립트, 캘린더를 체험할 수 있습니다.',
      keywords: ['무료 데모', 'TikTok 대시보드', '인터랙티브 체험'],
    },
    compareVidIQ: {
      title: 'OwlSeer vs VidIQ | TikTok 도구 비교',
      description: 'OwlSeer와 VidIQ를 비교해 기능, 실행 효율, 성장 지원 방식의 차이를 확인하세요.',
      keywords: ['owlseer vs vidiq', 'TikTok 도구 비교', 'TikTok 분석 비교'],
    },
  },
  es: {
    home: {
      title: 'OwlSeer - Estrategia de contenido para TikTok con IA',
      description: 'Deja de adivinar qué publicar. OwlSeer te dice qué hacer después en TikTok en menos de 3 minutos y genera guiones listos para grabar.',
      keywords: ['estrategia TikTok', 'generador de guiones IA', 'analítica TikTok', 'planificación de contenido', 'estrategia viral'],
    },
    howItWorks: {
      title: 'Cómo funciona OwlSeer: estrategia TikTok en 3 pasos',
      description: 'Conecta tu cuenta en 30 segundos y obtén estrategia con IA en menos de 3 minutos: tendencias, diagnóstico, guiones y plan semanal.',
      keywords: ['cómo usar herramienta IA TikTok', 'inicio OwlSeer', 'configurar estrategia TikTok', 'conectar TikTok'],
    },
    pricing: {
      title: 'Precios - Prueba gratis de 7 días | OwlSeer',
      description: 'Prueba completa de 7 días sin riesgo. Sin cobro automático hasta que termine la prueba. Planes claros para creadores y agencias.',
      keywords: ['precio herramienta TikTok', 'prueba gratis 7 días', 'suscripción para creadores', 'precio estrategia IA'],
    },
    faq: {
      title: 'FAQ - Privacidad, promesas y evidencia | OwlSeer',
      description: 'Respuestas claras sobre privacidad, promesas y pruebas. Información verificable para cada punto importante.',
      keywords: ['FAQ OwlSeer', 'preguntas herramienta TikTok', 'privacidad de datos', 'seguridad IA'],
    },
    blog: {
      title: 'Blog - Consejos e insights gratuitos para TikTok | OwlSeer',
      description: 'Consejos de estrategia de contenido gratuitos y aplicables hoy, con insights respaldados por datos.',
      keywords: ['consejos TikTok', 'blog de estrategia de contenido', 'insights para creadores', 'tendencias TikTok'],
    },
    contact: {
      title: 'Contáctanos - Soporte | OwlSeer',
      description: 'Cuéntanos tu objetivo y te proponemos el camino más corto. Nuestro equipo responde en menos de 24 horas.',
      keywords: ['contacto OwlSeer', 'soporte', 'centro de ayuda', 'atención al cliente'],
    },
    features: {
      title: 'Funciones - Herramientas de estrategia TikTok con IA | OwlSeer',
      description: 'Descubre funciones clave: guiones con IA, radar de tendencias, calendario de contenido y recomendaciones accionables.',
      keywords: ['funciones TikTok', 'guiones con IA', 'radar de tendencias', 'calendario de contenido'],
    },
    trendPrediction: {
      title: 'Predicción de tendencias TikTok con IA | OwlSeer',
      description: 'Detecta tendencias antes del pico. Trend Radar evalúa velocidad, competencia y ajuste a tu nicho.',
      keywords: ['predicción tendencias TikTok', 'trend radar', 'tendencias virales', 'analítica TikTok'],
    },
    postingSchedule: {
      title: 'Mejor hora para publicar en TikTok | OwlSeer',
      description: 'Encuentra tus horarios óptimos según actividad real de tu audiencia y crea un calendario de publicación personalizado.',
      keywords: ['mejor hora TikTok', 'horario de publicación', 'actividad audiencia', 'planificación social media'],
    },
    scriptGeneration: {
      title: 'Generación de guiones TikTok con IA | OwlSeer',
      description: 'Genera guiones en 60 segundos con datos reales. Incluye hook, cuerpo, CTA, sonido y hashtags sugeridos.',
      keywords: ['generador guiones TikTok', 'escritura IA', 'hooks virales', 'automatización contenido'],
    },
    hashtagStrategy: {
      title: 'Estrategia de hashtags TikTok con IA | OwlSeer',
      description: 'Optimiza hashtags por momentum, competencia y relevancia para mejorar alcance y descubrimiento.',
      keywords: ['estrategia hashtags TikTok', 'analítica hashtags', 'hashtags tendencia', 'optimización hashtags'],
    },
    contentDiagnosis: {
      title: 'Diagnóstico de contenido TikTok con IA | OwlSeer',
      description: 'Identifica por qué tus videos rinden poco con análisis de 12 señales de engagement y acciones concretas de mejora.',
      keywords: ['diagnóstico TikTok', 'análisis de contenido TikTok', 'mejorar engagement', 'rendimiento de videos'],
    },
    glossary: {
      title: 'Glosario de TikTok — Más de 50 términos explicados | OwlSeer',
      description: 'Definiciones claras de términos clave como FYP, tasa de hook y caída de engagement, organizadas para consulta rápida.',
      keywords: ['glosario TikTok', 'términos TikTok', 'qué significa FYP', 'tasa de hook'],
    },
    glossaryFyp: {
      title: '¿Qué significa FYP en TikTok? | Glosario OwlSeer',
      description: 'Aprende qué es For You Page, cómo funciona y qué factores influyen en la distribución de tus videos.',
      keywords: ['FYP significado', 'For You Page', 'algoritmo TikTok', 'optimizar FYP'],
    },
    privacy: {
      title: 'Política de privacidad | OwlSeer',
      description: 'Conoce cómo OwlSeer gestiona tus datos: qué recopilamos, para qué se usa y cómo solicitar exportación o eliminación.',
      keywords: ['política de privacidad', 'protección de datos', 'datos personales', 'GDPR'],
    },
    terms: {
      title: 'Términos de servicio | OwlSeer',
      description: 'Revisa los términos de uso de OwlSeer, incluyendo condiciones de cuenta, facturación y responsabilidades de uso.',
      keywords: ['términos de servicio', 'condiciones de uso', 'acuerdo de usuario', 'SaaS'],
    },
    security: {
      title: 'Seguridad - Cómo protegemos tus datos | OwlSeer',
      description: 'Consulta nuestras prácticas de seguridad: autenticación OAuth, cifrado de datos y revisiones periódicas.',
      keywords: ['seguridad de datos', 'OAuth', 'cifrado', 'protección de datos'],
    },
    cookies: {
      title: 'Política de cookies | OwlSeer',
      description: 'Explicamos qué cookies usamos, por qué se usan y cómo puedes gestionarlas para controlar tu privacidad.',
      keywords: ['política de cookies', 'gestión de cookies', 'seguimiento', 'privacidad'],
    },
    contentCreators: {
      title: 'Herramienta TikTok para creadores de contenido | OwlSeer',
      description: 'Recibe alertas de tendencias, guiones con IA y horarios de publicación optimizados para crecer con consistencia.',
      keywords: ['herramienta TikTok creadores', 'crecimiento TikTok', 'guiones IA', 'plan de contenido'],
    },
    localBusiness: {
      title: 'Marketing TikTok para negocios locales | OwlSeer',
      description: 'Convierte vistas en visitas reales con estrategias locales, formatos en tendencia y guiones adaptados a tu comunidad.',
      keywords: ['TikTok negocio local', 'marketing local', 'tráfico a tienda', 'TikTok para pymes'],
    },
    brands: {
      title: 'Estrategia TikTok para marcas | OwlSeer',
      description: 'Combina seguridad de marca y velocidad de tendencia para crear contenido auténtico que sí convierte.',
      keywords: ['TikTok para marcas', 'seguridad de marca', 'estrategia de marca', 'marketing TikTok'],
    },
    agencies: {
      title: 'Plataforma TikTok para agencias | OwlSeer',
      description: 'Escala operaciones con gestión multi-cuenta, reportes automáticos y generación de guiones con IA para clientes.',
      keywords: ['TikTok para agencias', 'gestión multi-cuenta', 'reportes automáticos', 'guiones IA'],
    },
    sampleDashboard: {
      title: 'Muestra interactiva - Experiencia completa del dashboard | OwlSeer',
      description: 'Explora el dashboard completo sin registro y descubre diagnósticos, recomendaciones, guiones y calendario.',
      keywords: ['demo gratis', 'dashboard TikTok', 'vista interactiva'],
    },
    compareVidIQ: {
      title: 'OwlSeer vs VidIQ | Comparativa de herramientas TikTok',
      description: 'Compara OwlSeer y VidIQ para entender diferencias de enfoque, ejecución y crecimiento en TikTok.',
      keywords: ['owlseer vs vidiq', 'comparativa TikTok', 'comparación analítica TikTok'],
    },
  },
  fr: {
    home: {
      title: 'OwlSeer - Stratégie TikTok et génération de scripts par IA',
      description: 'Arrêtez de deviner quoi publier. OwlSeer vous indique la prochaine action sur TikTok en moins de 3 minutes avec des scripts IA prêts à tourner.',
      keywords: ['stratégie TikTok', 'générateur de scripts IA', 'analytics TikTok', 'planification de contenu', 'stratégie virale'],
    },
    howItWorks: {
      title: 'Comment fonctionne OwlSeer : stratégie TikTok en 3 étapes',
      description: 'Connectez votre compte en 30 secondes et obtenez une stratégie IA en moins de 3 minutes : tendances, diagnostic, scripts et plan hebdomadaire.',
      keywords: ['utiliser outil IA TikTok', 'démarrage OwlSeer', 'configuration stratégie TikTok', 'connecter TikTok'],
    },
    pricing: {
      title: 'Tarifs - Essai gratuit 7 jours | OwlSeer',
      description: 'Essai complet de 7 jours sans risque. Aucune facturation automatique avant la fin de l’essai. Tarifs clairs pour créateurs et agences.',
      keywords: ['tarif outil TikTok', 'essai gratuit 7 jours', 'abonnement créateur', 'prix stratégie IA'],
    },
    faq: {
      title: 'FAQ - Confidentialité, promesses et preuves | OwlSeer',
      description: 'Des réponses directes sur la confidentialité, les promesses et les preuves, avec des informations vérifiables.',
      keywords: ['FAQ OwlSeer', 'questions outil TikTok', 'confidentialité des données', 'sécurité IA'],
    },
    blog: {
      title: 'Blog - Conseils TikTok gratuits et insights | OwlSeer',
      description: 'Des conseils de stratégie TikTok gratuits et actionnables, appuyés par des analyses de données.',
      keywords: ['conseils TikTok', 'blog stratégie contenu', 'insights créateurs', 'tendances TikTok'],
    },
    contact: {
      title: 'Contact - Obtenir de l’aide | OwlSeer',
      description: 'Parlez-nous de votre objectif et nous proposerons le chemin le plus court. Réponse de l’équipe sous 24 heures.',
      keywords: ['contacter OwlSeer', 'support', 'centre d’aide', 'service client'],
    },
    features: {
      title: 'Fonctionnalités - Outils de stratégie TikTok par IA | OwlSeer',
      description: 'Explorez les fonctionnalités clés : scripts IA, radar de tendances, calendrier de contenu et recommandations orientées action.',
      keywords: ['fonctionnalités TikTok', 'scripts IA', 'radar de tendances', 'calendrier de contenu'],
    },
    trendPrediction: {
      title: 'Prédiction des tendances TikTok par IA | OwlSeer',
      description: 'Repérez les tendances avant leur pic. Trend Radar note vitesse, concurrence et pertinence pour votre niche.',
      keywords: ['prédiction tendances TikTok', 'trend radar', 'tendances virales', 'analytics TikTok'],
    },
    postingSchedule: {
      title: 'Meilleur horaire de publication TikTok | OwlSeer',
      description: 'Identifiez vos créneaux optimaux selon l’activité réelle de votre audience et planifiez plus efficacement.',
      keywords: ['meilleur horaire TikTok', 'planning publication', 'activité audience', 'planification sociale'],
    },
    scriptGeneration: {
      title: 'Génération de scripts TikTok par IA | OwlSeer',
      description: 'Générez des scripts en 60 secondes à partir de vos signaux d’engagement : hook, corps, CTA, sons et hashtags.',
      keywords: ['générateur scripts TikTok', 'rédaction IA', 'hooks viraux', 'automatisation contenu'],
    },
    hashtagStrategy: {
      title: 'Stratégie hashtags TikTok par IA | OwlSeer',
      description: 'Optimisez vos hashtags selon momentum, concurrence et pertinence de niche pour améliorer la découvrabilité.',
      keywords: ['stratégie hashtags TikTok', 'analyse hashtags', 'hashtags tendances', 'optimisation hashtags'],
    },
    contentDiagnosis: {
      title: 'Diagnostic de contenu TikTok par IA | OwlSeer',
      description: 'Identifiez pourquoi vos vidéos sous-performent grâce à 12 signaux de performance et des recommandations concrètes.',
      keywords: ['diagnostic TikTok', 'analyse de contenu TikTok', 'améliorer engagement', 'performance vidéo'],
    },
    glossary: {
      title: 'Glossaire TikTok — Plus de 50 termes expliqués | OwlSeer',
      description: 'Définitions claires de termes essentiels comme FYP, taux de hook et décroissance de engagement.',
      keywords: ['glossaire TikTok', 'termes TikTok', 'signification FYP', 'taux de hook'],
    },
    glossaryFyp: {
      title: 'Que signifie FYP sur TikTok ? | Glossaire OwlSeer',
      description: 'Comprenez le fonctionnement de la For You Page et les leviers qui influencent la portée de vos vidéos.',
      keywords: ['FYP signification', 'For You Page', 'algorithme TikTok', 'optimisation FYP'],
    },
    privacy: {
      title: 'Politique de confidentialité | OwlSeer',
      description: 'Découvrez comment OwlSeer traite vos données : collecte, usage, export et suppression.',
      keywords: ['politique de confidentialité', 'protection des données', 'données personnelles', 'RGPD'],
    },
    terms: {
      title: 'Conditions de service | OwlSeer',
      description: 'Consultez les conditions de service de OwlSeer : usage, responsabilités, facturation et cadre contractuel.',
      keywords: ['conditions de service', 'conditions utilisation', 'contrat utilisateur', 'SaaS'],
    },
    security: {
      title: 'Sécurité - Protection de vos données | OwlSeer',
      description: 'OAuth, chiffrement et audits réguliers : un aperçu des mesures de sécurité de la plateforme.',
      keywords: ['sécurité des données', 'OAuth', 'chiffrement', 'protection des données'],
    },
    cookies: {
      title: 'Politique de cookies | OwlSeer',
      description: 'Cette page explique les cookies utilisés, leurs finalités et la manière de gérer vos préférences.',
      keywords: ['politique cookies', 'gestion cookies', 'suivi', 'confidentialité'],
    },
    contentCreators: {
      title: 'Outil TikTok pour créateurs de contenu | OwlSeer',
      description: 'Recevez alertes de tendances, scripts IA et recommandations de publication pour accélérer votre croissance.',
      keywords: ['outil TikTok créateurs', 'croissance TikTok', 'scripts IA', 'plan contenu'],
    },
    localBusiness: {
      title: 'Marketing TikTok pour entreprises locales | OwlSeer',
      description: 'Transformez la visibilité TikTok en visites réelles avec des stratégies locales prêtes à exécuter.',
      keywords: ['TikTok commerce local', 'marketing local', 'trafic en magasin', 'TikTok PME'],
    },
    brands: {
      title: 'Stratégie TikTok pour marques | OwlSeer',
      description: 'Alignez sécurité de marque et tendances pour créer un contenu crédible et performant.',
      keywords: ['TikTok pour marques', 'brand safety', 'stratégie de marque', 'marketing TikTok'],
    },
    agencies: {
      title: 'Plateforme TikTok pour agences | OwlSeer',
      description: 'Gérez plusieurs comptes, automatisez les rapports et produisez des scripts IA pour vos clients.',
      keywords: ['TikTok agences', 'gestion multi-comptes', 'rapports automatisés', 'scripts IA'],
    },
    sampleDashboard: {
      title: 'Échantillon interactif - Expérience dashboard complète | OwlSeer',
      description: 'Essayez le dashboard complet sans inscription et découvrez diagnostic, recommandations et scripts.',
      keywords: ['démo gratuite', 'dashboard TikTok', 'aperçu interactif'],
    },
    compareVidIQ: {
      title: 'OwlSeer vs VidIQ | Comparatif outils TikTok',
      description: 'Comparez OwlSeer et VidIQ pour visualiser les différences de fonctionnalités et d’efficacité opérationnelle.',
      keywords: ['owlseer vs vidiq', 'comparatif TikTok', 'comparaison analytics TikTok'],
    },
  },
  de: {
    home: {
      title: 'OwlSeer - KI-gestützte TikTok-Strategie & Skriptgenerator',
      description: 'Kein Rätselraten mehr beim Posten. OwlSeer zeigt dir in unter 3 Minuten die nächsten TikTok-Schritte und liefert direkt drehfertige KI-Skripte.',
      keywords: ['TikTok Strategie', 'KI Skriptgenerator', 'TikTok Analytics', 'Content Planung', 'virale Strategie'],
    },
    howItWorks: {
      title: 'So funktioniert OwlSeer: TikTok-Strategie in 3 Schritten',
      description: 'Konto in 30 Sekunden verbinden, KI-Strategie in unter 3 Minuten erhalten: Trendprognosen, Content-Diagnose, Skripte und Wochenplan.',
      keywords: ['TikTok KI Tool nutzen', 'OwlSeer starten', 'TikTok Strategie einrichten', 'TikTok verbinden'],
    },
    pricing: {
      title: 'Preise - 7 Tage kostenlos testen | OwlSeer',
      description: 'Risikofreier 7-Tage-Test mit vollem Funktionsumfang. Keine automatische Abbuchung vor Testende. Klare Tarife für Creator und Agenturen.',
      keywords: ['TikTok Tool Preise', '7 Tage kostenlos', 'Creator Abonnement', 'KI Strategie Preis'],
    },
    faq: {
      title: 'FAQ - Datenschutz, Versprechen & Nachweise | OwlSeer',
      description: 'Klare Antworten zu Datenschutz, Versprechen und Belegen – mit nachvollziehbaren Informationen.',
      keywords: ['OwlSeer FAQ', 'TikTok Tool Fragen', 'Datenschutz', 'KI Sicherheit'],
    },
    blog: {
      title: 'Blog - Kostenlose TikTok-Strategie Tipps & Insights | OwlSeer',
      description: 'Praxisnahe, datenbasierte TikTok-Tipps, die du sofort umsetzen kannst – kostenlos und ohne Paywall.',
      keywords: ['TikTok Tipps', 'Content Strategie Blog', 'Creator Insights', 'TikTok Trends'],
    },
    contact: {
      title: 'Kontakt - Hilfe erhalten | OwlSeer',
      description: 'Nenne uns dein Ziel und wir empfehlen den schnellsten Weg. Das Support-Team antwortet innerhalb von 24 Stunden.',
      keywords: ['OwlSeer Kontakt', 'Support', 'Hilfezentrum', 'Kundenservice'],
    },
    features: {
      title: 'Funktionen - KI-Tools für TikTok-Strategie | OwlSeer',
      description: 'Entdecke zentrale Funktionen: KI-Skripte, Trend-Radar, Content-Kalender und datenbasierte Empfehlungen.',
      keywords: ['TikTok Funktionen', 'KI Skripte', 'Trend Radar', 'Content Kalender'],
    },
    trendPrediction: {
      title: 'TikTok-Trendprognose mit KI | OwlSeer',
      description: 'Erkenne Trends vor dem Peak. Trend Radar bewertet Wachstum, Wettbewerb und Relevanz für deine Nische.',
      keywords: ['TikTok Trendprognose', 'Trend Radar', 'virale Trends', 'TikTok Analyse'],
    },
    postingSchedule: {
      title: 'Beste TikTok-Postingzeit mit KI finden | OwlSeer',
      description: 'Bestimme optimale Post-Zeiten auf Basis echter Publikumsaktivität und plane deinen Content datenbasiert.',
      keywords: ['beste Postingzeit TikTok', 'Postingplan', 'Publikumsaktivität', 'Social Media Planung'],
    },
    scriptGeneration: {
      title: 'KI TikTok-Skriptgenerator | OwlSeer',
      description: 'Erstelle in 60 Sekunden Skripte aus Engagement-Daten mit Hook, Body, CTA sowie Sound- und Hashtag-Empfehlungen.',
      keywords: ['TikTok Skriptgenerator', 'KI Texten', 'virale Hooks', 'Content Automatisierung'],
    },
    hashtagStrategy: {
      title: 'TikTok-Hashtag-Strategie mit KI | OwlSeer',
      description: 'Optimiere Hashtags nach Momentum, Konkurrenz und Relevanz, um Reichweite und Auffindbarkeit zu steigern.',
      keywords: ['TikTok Hashtag Strategie', 'Hashtag Analyse', 'Trend Hashtags', 'Hashtag Optimierung'],
    },
    contentDiagnosis: {
      title: 'TikTok Content Diagnose mit KI | OwlSeer',
      description: 'Erkenne mit 12 Engagement-Signalen, warum Videos schwächeln, und erhalte konkrete Optimierungsschritte.',
      keywords: ['TikTok Content Diagnose', 'TikTok Analyse', 'Engagement verbessern', 'Videoperformance'],
    },
    glossary: {
      title: 'TikTok Glossar — Über 50 Begriffe erklärt | OwlSeer',
      description: 'Wichtige TikTok-Begriffe wie FYP, Hook-Rate und Engagement-Verlust kompakt und verständlich erklärt.',
      keywords: ['TikTok Glossar', 'TikTok Begriffe', 'FYP Bedeutung', 'Hook Rate'],
    },
    glossaryFyp: {
      title: 'Was bedeutet FYP bei TikTok? | OwlSeer Glossar',
      description: 'Lerne, wie die For You Page funktioniert und welche Faktoren die Reichweite deiner Videos beeinflussen.',
      keywords: ['FYP Bedeutung', 'For You Page', 'TikTok Algorithmus', 'FYP optimieren'],
    },
    privacy: {
      title: 'Datenschutzerklärung | OwlSeer',
      description: 'Erfahre, wie OwlSeer Daten verarbeitet, speichert und wie du Export oder Löschung anfordern kannst.',
      keywords: ['Datenschutzerklärung', 'Datenschutz', 'personenbezogene Daten', 'DSGVO'],
    },
    terms: {
      title: 'Nutzungsbedingungen | OwlSeer',
      description: 'Hier findest du die Nutzungsbedingungen von OwlSeer inklusive Konto, Abrechnung und Verantwortlichkeiten.',
      keywords: ['Nutzungsbedingungen', 'Servicebedingungen', 'Nutzervereinbarung', 'SaaS'],
    },
    security: {
      title: 'Sicherheit - So schützen wir deine Daten | OwlSeer',
      description: 'Überblick über Sicherheitsmaßnahmen wie OAuth, Verschlüsselung und regelmäßige Prüfprozesse.',
      keywords: ['Datensicherheit', 'OAuth', 'Verschlüsselung', 'Sicherheitsstandards'],
    },
    cookies: {
      title: 'Cookie-Richtlinie | OwlSeer',
      description: 'Diese Seite erklärt den Einsatz von Cookies, deren Zweck und wie du Cookie-Einstellungen verwaltest.',
      keywords: ['Cookie Richtlinie', 'Cookie Verwaltung', 'Tracking', 'Datenschutz'],
    },
    contentCreators: {
      title: 'TikTok Tool für Content Creator | OwlSeer',
      description: 'Erhalte Trend-Alerts, KI-Skripte und Postingtiming-Empfehlungen für konstantes TikTok Wachstum.',
      keywords: ['TikTok Tool Creator', 'TikTok Wachstum', 'KI Skripte', 'Content Planung'],
    },
    localBusiness: {
      title: 'TikTok Marketing für lokale Unternehmen | OwlSeer',
      description: 'Nutze lokale Content-Strategien, um TikTok-Reichweite in reale Ladenbesuche zu verwandeln.',
      keywords: ['TikTok lokale Unternehmen', 'lokales Marketing', 'Laufkundschaft', 'TikTok Strategie'],
    },
    brands: {
      title: 'TikTok Strategie für Marken | OwlSeer',
      description: 'Verbinde Brand Safety mit Trendgeschwindigkeit und baue eine konsistente Markenpräsenz auf TikTok auf.',
      keywords: ['TikTok für Marken', 'Brand Safety', 'Markenstrategie', 'TikTok Marketing'],
    },
    agencies: {
      title: 'TikTok Plattform für Agenturen | OwlSeer',
      description: 'Skaliere Agenturprozesse mit Multi-Account-Management, Reporting-Automation und KI-Skriptgenerierung.',
      keywords: ['TikTok Agentur Tool', 'Multi Account Management', 'automatisches Reporting', 'KI Skripte'],
    },
    sampleDashboard: {
      title: 'Interaktives Sample - Vollständige Dashboard Erfahrung | OwlSeer',
      description: 'Teste das komplette Dashboard ohne Login und sieh Diagnose, Empfehlungen, Skripte und Kalender in Aktion.',
      keywords: ['kostenlose Demo', 'TikTok Dashboard', 'interaktive Vorschau'],
    },
    compareVidIQ: {
      title: 'OwlSeer vs VidIQ | TikTok-Tool Vergleich',
      description: 'Vergleiche OwlSeer und VidIQ hinsichtlich Funktionsumfang, Nutzbarkeit und Wachstumspotenzial auf TikTok.',
      keywords: ['owlseer vs vidiq', 'TikTok Vergleich', 'TikTok Analytics Vergleich'],
    },
  },
};

const NON_ZH_FALLBACK_LANGUAGES: Array<Exclude<Language, 'en' | 'zh'>> = ['ja', 'ko', 'es', 'fr', 'de'];

const applySeoLocalizationOverrides = () => {
  const pageKeys = Object.keys(seoConfig) as SeoPageKey[];

  pageKeys.forEach((pageKey) => {
    const pageConfig = seoConfig[pageKey] as SeoPageConfig;
    const baseEnglishConfig = pageConfig?.en;

    if (!baseEnglishConfig) return;

    NON_ZH_FALLBACK_LANGUAGES.forEach((language) => {
      const existingConfig = pageConfig[language];
      const overrideConfig = SEO_LOCALIZATION_OVERRIDES[language]?.[pageKey];

      pageConfig[language] = {
        ...baseEnglishConfig,
        ...(existingConfig || {}),
        ...(overrideConfig || {}),
        keywords: overrideConfig?.keywords || existingConfig?.keywords || baseEnglishConfig.keywords,
      };
    });
  });
};

applySeoLocalizationOverrides();

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
      "https://www.tiktok.com/@owlseerai",
      "https://x.com/owlseer_ai",
      "https://www.instagram.com/owlseerai/",
      "https://t.me/owlseerai",
      "https://www.linkedin.com/company/owlseer/",
      "https://discord.gg/HRE4Q7RGS7"
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
        "name": "Try Your Free Sample",
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

const LANGUAGE_TO_SCHEMA_IN_LANGUAGE: Record<Language, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  ja: 'ja-JP',
  ko: 'ko-KR',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
};

const schemaLocalizedCopy = {
  en: {
    softwareDescription: 'AI-powered TikTok content strategy platform that tells you what to post next',
    softwareOfferDescription: '7-day free trial',
    howToName: 'How to Use OwlSeer for TikTok Growth',
    howToDescription: 'Step-by-step guide to turn your TikTok data into actionable strategy',
    howToStepNames: [
      'Try Your Free Sample',
      'Connect Your Account',
      'Get Your Weekly Pack',
    ],
    howToStepTexts: [
      'Experience the power of AI-driven strategy without signing up. Get an instant audit of your current content and identify growth gaps immediately.',
      'Securely link your TikTok account via OAuth 2.0. Our AI learns your unique voice, audience demographics, and niche specificities.',
      'Every Monday at 7 AM, receive a personalized strategy pack containing 7 viral opportunities and ready-to-shoot scripts.',
    ],
    howToTools: ['TikTok Account', 'Web Browser'],
    productDescription: 'AI-powered TikTok content strategy platform for serious creators',
    productOfferNames: ['Free Trial', 'Starter', 'Pro Monthly', 'Pro Annual', 'Agency'],
    productOfferDescriptions: [
      '7-day full access trial',
      'Perfect for trying out OwlSeer',
      'For creators serious about growth',
      'Save 34% with annual billing',
      'Scale multiple accounts with ease',
    ],
    productReviewBody: 'OwlSeer completely changed my content strategy. I went from 10K to 125K followers in 3 months.',
    contactPageName: 'Contact OwlSeer Support',
    contactPageDescription: 'Get help from our support team within 24 hours',
    contactAvailableLanguages: ['English', 'Chinese'],
  },
  zh: {
    softwareDescription: 'AI驱动的 TikTok 内容策略平台，告诉你下一步该发布什么',
    softwareOfferDescription: '7天免费试用',
    howToName: '如何使用 OwlSeer 提升 TikTok 增长',
    howToDescription: '一步步将 TikTok 数据转化为可执行的增长策略',
    howToStepNames: [
      '体验免费示例',
      '连接你的账号',
      '获取每周策略包',
    ],
    howToStepTexts: [
      '无需注册即可体验 AI 策略能力。立即获得当前内容诊断并识别增长缺口。',
      '通过 OAuth 2.0 安全连接 TikTok 账号。AI 会学习你的内容风格、受众特征与垂类偏好。',
      '每周一早上 7 点，获取个性化策略包，包含 7 个可执行增长机会与可直接拍摄的脚本。',
    ],
    howToTools: ['TikTok 账号', '网页浏览器'],
    productDescription: '面向创作者的 AI TikTok 内容策略平台',
    productOfferNames: ['免费试用', 'Starter', 'Pro 月付', 'Pro 年付', 'Agency'],
    productOfferDescriptions: [
      '7天全功能试用',
      '适合先体验 OwlSeer',
      '适合希望持续增长的创作者',
      '年付可节省 34%',
      '轻松扩展多账号运营',
    ],
    productReviewBody: 'OwlSeer 彻底改变了我的内容策略，3 个月粉丝从 1 万增长到 12.5 万。',
    contactPageName: '联系 OwlSeer 支持团队',
    contactPageDescription: '在 24 小时内获得支持团队回复',
    contactAvailableLanguages: ['中文', 'English'],
  },
} as const;

const getSchemaLocalizedCopy = (language: Language) => (
  language === 'zh' ? schemaLocalizedCopy.zh : schemaLocalizedCopy.en
);

export const getLocalizedStructuredDataSchemas = (language: Language = 'en') => {
  const schemaLang = LANGUAGE_TO_SCHEMA_IN_LANGUAGE[language] || 'en-US';
  const localizedCopy = getSchemaLocalizedCopy(language);

  const localizedHowToSteps = structuredDataSchemas.howTo.step.map((step, index) => ({
    ...step,
    name: localizedCopy.howToStepNames[index] || step.name,
    text: localizedCopy.howToStepTexts[index] || step.text,
  }));

  const localizedHowToTools = structuredDataSchemas.howTo.tool.map((tool, index) => ({
    ...tool,
    name: localizedCopy.howToTools[index] || tool.name,
  }));

  const localizedProductOffers = structuredDataSchemas.product.offers.map((offer, index) => ({
    ...offer,
    name: localizedCopy.productOfferNames[index] || offer.name,
    description: localizedCopy.productOfferDescriptions[index] || offer.description,
  }));

  return {
    organization: {
      ...structuredDataSchemas.organization,
      inLanguage: schemaLang,
    },
    softwareApplication: {
      ...structuredDataSchemas.softwareApplication,
      description: localizedCopy.softwareDescription,
      inLanguage: schemaLang,
      offers: {
        ...structuredDataSchemas.softwareApplication.offers,
        description: localizedCopy.softwareOfferDescription,
      },
    },
    webSite: {
      ...structuredDataSchemas.webSite,
      inLanguage: schemaLang,
    },
    howTo: {
      ...structuredDataSchemas.howTo,
      name: localizedCopy.howToName,
      description: localizedCopy.howToDescription,
      inLanguage: schemaLang,
      step: localizedHowToSteps,
      tool: localizedHowToTools,
    },
    product: {
      ...structuredDataSchemas.product,
      description: localizedCopy.productDescription,
      inLanguage: schemaLang,
      offers: localizedProductOffers,
      review: {
        ...structuredDataSchemas.product.review,
        reviewBody: localizedCopy.productReviewBody,
      },
    },
    contactPage: {
      ...structuredDataSchemas.contactPage,
      name: localizedCopy.contactPageName,
      description: localizedCopy.contactPageDescription,
      inLanguage: schemaLang,
      mainEntity: {
        ...structuredDataSchemas.contactPage.mainEntity,
        contactPoint: {
          ...structuredDataSchemas.contactPage.mainEntity.contactPoint,
          availableLanguage: localizedCopy.contactAvailableLanguages,
        },
      },
    },
  };
};

// Helper function to get page SEO config
export const getPageSEO = (page: keyof typeof seoConfig, lang: Language = 'en') => {
  const pageConfig = seoConfig[page] as any;
  return pageConfig?.[lang] || pageConfig?.en;
};

export const getCanonicalUrl = (basePath: string, lang: Language = 'en') => {
  const cleanPath = basePath.startsWith('/') ? basePath : `/${basePath}`;
  const socialPath = cleanPath === '/'
    ? '/'
    : cleanPath.startsWith('/social')
      ? cleanPath
      : `/social${cleanPath}`;
  return `${BASE_URL}${addLanguagePrefix(socialPath, lang)}`;
};

// Helper function to generate hreflang alternates
export const generateAlternates = (basePath: string) => {
  const cleanPath = basePath.startsWith('/') ? basePath : `/${basePath}`;
  const socialPath = cleanPath === '/'
    ? '/'
    : cleanPath.startsWith('/social')
      ? cleanPath
      : `/social${cleanPath}`;
  return SUPPORTED_LANGUAGES.map((lang) => ({
    lang,
    url: `${BASE_URL}${addLanguagePrefix(socialPath, lang)}`,
  }));
};

export default seoConfig;

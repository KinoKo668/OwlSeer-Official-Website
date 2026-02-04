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
    faqPage: {
      title: "How can we",
      titleHighlight: "help you?",
      subtitle: "Search our knowledge base or browse frequently asked questions below.",
      searchPlaceholder: "Search for answers (e.g. 'pricing', 'api', 'security')...",
      noResults: "No results found",
      noResultsDesc: "Try adjusting your search terms.",
      categories: {
        Sample: "Sample",
        Outputs: "Outputs",
        Methodology: "Methodology",
        Boundaries: "Limits",
        Privacy: "Privacy",
        Billing: "Billing"
      },
      contact: {
        title: "Still have questions?",
        subtitle: "Can't find the answer you're looking for? Our friendly team is here to help.",
        chat: "Chat with Support",
        email: "Email Us"
      },
      items: [
        {
          id: 'q1',
          question: "Is there a free demo I can try?",
          answer: "Yes. We provide a public Sample experience that shows the full product UI using an example creator account. You can explore every feature—strategy overview, script suggestions, trend radar, and posting calendar—without creating an account or providing any personal information.\n\nThe Sample uses realistic demo data from a fictional creator account, so you can see exactly what kind of outputs and analysis you would get with your own account.\n\nVerify: 🔗 [Dashboard (/simulation/dashboard)](/simulation/dashboard), 🔗 [Trend Radar (/simulation/trend-radar)](/simulation/trend-radar), 🔗 [Content Studio (/simulation/content-studio)](/simulation/content-studio)",
          category: "Sample"
        },
        {
          id: 'q2',
          question: "Is the Sample the full product or a limited preview?",
          answer: "The Sample is the full product—same interface, same features, same AI analysis. The only difference is the data source: Sample uses a pre-configured demo account, while the real product uses your connected TikTok account.\n\nWhat's the same:\n- Complete dashboard with all modules accessible\n- Real AI analysis running on the data\n- Full script generation capabilities\n- Interactive calendar and scheduling views\n\nWhat's different:\n- Data comes from a fictional \"TechReviews_US\" creator account\n- You can't save changes or export personalized reports\n- Signup prompts appear when you try account-specific actions\n\nVerify: 🔗 [Dashboard (/simulation/dashboard)](/simulation/dashboard)",
          category: "Sample"
        },
        {
          id: 'q3',
          question: "Do I need to connect my TikTok account to see value?",
          answer: "No—you can get significant value from Sample without connecting anything.\n\nSample lets you:\n- Understand what OwlSeer outputs look like\n- Learn our methodology and signal categories\n- See how scripts and calendars are structured\n- Evaluate if the tool fits your workflow\n\nConnecting your TikTok is only needed when you want:\n- Analysis based on YOUR account's actual performance\n- Personalized recommendations for YOUR niche and audience\n- Saved strategies and exportable reports\n\nMany users spend 10-15 minutes in Sample before deciding whether to connect. That's exactly how we designed it.\n\nVerify: 🔗 [Dashboard (/simulation/dashboard)](/simulation/dashboard)",
          category: "Sample"
        },
        {
          id: 'q4',
          question: "What does OwlSeer actually output?",
          answer: "OwlSeer outputs four main deliverables:\n\n1. **Strategy Overview**\n- Weekly content direction and priorities\n- Goals aligned with your stated objectives\n- Key metrics to focus on\n\n2. **Content Ideas**\n- Topic suggestions based on your niche and trends\n- Each idea includes \"why this could work for you\"\n- Difficulty/effort estimates\n\n3. **Scripts**\n- Full script structure: hook → body → CTA\n- Multiple variations per idea\n- Customizable to your style\n\n4. **Posting Calendar**\n- Optimal posting times based on your audience\n- Weekly/monthly view\n- Integration-ready format\n\nEvery output includes a \"Why this recommendation\" section that traces back to specific signals and templates.\n\nVerify: 🔗 [Dashboard (/simulation/dashboard)](/simulation/dashboard), 🔗 [Content Studio (/simulation/content-studio)](/simulation/content-studio), 🔗 [Scheduling (/simulation/scheduling-slot)](/simulation/scheduling-slot)",
          category: "Outputs"
        },
        {
          id: 'q5',
          question: "What do the scripts look like?",
          answer: "Our scripts are structured for TikTok's format:\n\n**Hook (0-3 seconds)**\n- Attention-grabbing opener\n- Multiple hook variations to test\n- Notes on why this hook style matches your audience\n\n**Body (3-45 seconds)**\n- Main content beats\n- Visual/action suggestions\n- Pacing recommendations\n\n**CTA (final seconds)**\n- Clear call-to-action\n- Options: follow, comment, save, visit link\n- Matched to your current goals\n\n**Example structure:**\n\nHook: \"Stop doing [X]—here's what actually works\"\nBody: \n- Beat 1: State the problem (5-10s)\n- Beat 2: Show the solution (15-20s)\n- Beat 3: Proof/result (10-15s)\nCTA: \"Save this for later and follow for more [niche] tips\"\n\nWhy this works for you: Your educational content performs 2.1x better than entertainment. Question-based hooks get 34% higher completion on your account.\n\nVerify: 🔗 [Content Studio (/simulation/content-studio)](/simulation/content-studio)",
          category: "Outputs"
        },
        {
          id: 'q6',
          question: "Can I export my strategy and scripts?",
          answer: "Export options depend on your plan:\n\n**Free Tier:**\n- Copy individual scripts to clipboard\n- Screenshot/print any page\n\n**Growth Tier ($19/mo):**\n- Export scripts to PDF\n- Export calendar to Google Calendar / iCal\n- Basic Notion integration\n\n**Scale Tier ($49/mo):**\n- Full strategy export (PDF, Notion, Google Docs)\n- API access for custom integrations\n- Team sharing and collaboration exports\n\nAll exports preserve the \"why\" reasoning, so you can reference it later.\n\nNote: In Sample mode, exports are disabled since you're viewing demo data. Connect your account to enable exports.\n\nVerify: 🔗 [Pricing (/pricing)](/pricing), 🔗 [Content Studio (/simulation/content-studio)](/simulation/content-studio)",
          category: "Outputs"
        },
        {
          id: 'q7',
          question: "How does OwlSeer analyze my account?",
          answer: "Our analysis examines 30+ signals across six categories:\n\n**1. Engagement Signals**\n- View-to-like ratio, comment sentiment, share frequency\n- Save rate, profile visits, watch time, replay rate\n\n**2. Timing Patterns**\n- Peak activity hours, day-of-week trends\n- Follower timezone distribution, posting consistency\n\n**3. Content DNA**\n- Hook style effectiveness, optimal video length\n- Music usage patterns, hashtag strategy, caption structure\n\n**4. Audience Insights**\n- Follower growth rate, demographic patterns\n- Interest clusters, engagement personas\n\n**5. Competitive Signals**\n- Niche benchmarks, top performer gaps\n- Content gap analysis, timing comparison\n\n**6. Trend Matching**\n- Trending sounds, viral formats\n- Emerging topics, platform shifts\n\nEach signal is weighted based on your specific goals and niche. The analysis typically completes in 30-60 seconds.\n\nVerify: 🔗 [Signals (/how-it-works#signals)](/how-it-works#signals), 🔗 [Account Intelligence (/simulation/intelligence)](/simulation/intelligence)",
          category: "Methodology"
        },
        {
          id: 'q8',
          question: "What are the \"30+ signals\" you mention?",
          answer: "\"30+ signals\" refers to the distinct data points we analyze per account. Here's the breakdown:\n\n**Engagement (7 signals)**\n- View-to-like ratio\n- Comment sentiment score\n- Share frequency\n- Save rate\n- Profile visit rate\n- Average watch time\n- Replay rate\n\n**Timing (5 signals)**\n- Peak activity hours\n- Day-of-week patterns\n- Timezone distribution\n- Posting consistency score\n- Seasonal trends\n\n**Content DNA (7 signals)**\n- Hook effectiveness score\n- Optimal video length\n- Music impact\n- Hashtag performance\n- Caption engagement\n- Thumbnail click rate\n- Format preferences\n\n**Audience (5 signals)**\n- Growth velocity\n- Demographic clusters\n- Interest mapping\n- Engagement personas\n- Loyalty indicators\n\n**Competitive (4 signals)**\n- Niche benchmarks\n- Gap analysis\n- Timing comparison\n- Content differentiation\n\n**Trends (4+ signals)**\n- Sound velocity\n- Format emergence\n- Topic momentum\n- Platform shifts\n\nTotal: 32 core signals, with additional sub-signals depending on data availability.\n\nVerify: 🔗 [Signals (/trust#signals)](/trust#signals), 🔗 [How It Works (/how-it-works#signals)](/how-it-works#signals)",
          category: "Methodology"
        },
        {
          id: 'q9',
          question: "How do you generate script recommendations?",
          answer: "Script generation follows a four-step process:\n\n**Step 1: Signal Analysis**\n- Analyze your 30+ signals\n- Identify strengths (what's working)\n- Identify gaps (what to improve)\n\n**Step 2: Template Matching**\n- Cross-reference with 200+ content templates\n- Filter by your niche (50+ categories)\n- Filter by your stage (beginner/growing/established)\n- Filter by your goals (growth/engagement/monetization)\n\n**Step 3: Personalization**\n- Adapt template to your content DNA\n- Match your typical video length\n- Align with your hook style preferences\n- Incorporate trending elements relevant to you\n\n**Step 4: Reasoning Documentation**\n- Attach \"why\" to every recommendation\n- Link back to specific signals\n- Provide confidence indicators\n\nThe result: scripts that feel like they were written for you, because they were—based on data, not guesses.\n\nVerify: 🔗 [Methodology (/how-it-works#synthesize)](/how-it-works#synthesize), 🔗 [Content Studio (/simulation/content-studio)](/simulation/content-studio)",
          category: "Methodology"
        },
        {
          id: 'q10',
          question: "Does OwlSeer guarantee viral content?",
          answer: "No—and we're skeptical of any tool that claims to.\n\n**What we CAN do:**\n- Increase your probability of creating content that resonates\n- Identify patterns in what works for your specific account\n- Suggest optimal timing, topics, and formats based on data\n- Help you post more consistently with better structure\n\n**What we CANNOT do:**\n- Guarantee any video will go viral\n- Control TikTok's algorithm\n- Predict exactly how the platform will distribute your content\n- Override the inherent unpredictability of social media\n\n**Our philosophy:**\nVirality is partly luck. Strategy improves your odds. We focus on the controllable factors—content quality, timing, consistency—while being honest that no tool can guarantee outcomes.\n\nWe'd rather you succeed with realistic expectations than fail with inflated promises.\n\nVerify: 🔗 [Limits (/how-it-works#limits)](/how-it-works#limits), 🔗 [Boundaries (/faq#boundaries)](/faq#boundaries)",
          category: "Boundaries"
        },
        {
          id: 'q11',
          question: "Will OwlSeer auto-post for me?",
          answer: "No—we intentionally don't offer auto-posting.\n\n**Why we don't auto-post:**\n\n1. **Creative control**: You should review and potentially edit every piece before it goes live\n\n2. **Platform compliance**: Auto-posting can violate TikTok's terms in some implementations\n\n3. **Quality assurance**: AI-generated scripts benefit from human review before posting\n\n4. **Authenticity**: Your audience follows YOU—automated posting can feel inauthentic\n\n**What we DO provide:**\n- Scripts ready to record\n- Optimal timing suggestions\n- Calendar reminders\n- Integration with scheduling tools (you still approve each post)\n\n**Our philosophy:**\nWe're a strategy partner, not an automation bot. We do the analysis and planning; you maintain creative control.\n\nVerify: 🔗 [Boundaries (/faq#boundaries)](/faq#boundaries), 🔗 [Scheduling (/simulation/scheduling-slot)](/simulation/scheduling-slot)",
          category: "Boundaries"
        },
        {
          id: 'q12',
          question: "What data can OwlSeer NOT access?",
          answer: "Here's a clear list of what we DO NOT access:\n\n**Authentication:**\n- ❌ Your TikTok password (we use OAuth—you authenticate directly with TikTok)\n- ❌ Your login credentials\n\n**Private content:**\n- ❌ Direct messages (DMs)\n- ❌ Private conversations\n- ❌ Unpublished drafts\n- ❌ Deleted videos\n\n**Account control:**\n- ❌ Account settings\n- ❌ Posting capabilities (we can't post for you)\n- ❌ Follow/unfollow actions\n- ❌ Any account modifications\n\n**Personal information:**\n- ❌ Payment/billing information on TikTok\n- ❌ Email address (unless you provide it to us)\n- ❌ Phone number\n\n**What we CAN access (with your permission):**\n- ✅ Public video performance data\n- ✅ Public engagement metrics\n- ✅ Follower count and growth data\n- ✅ Public profile information\n\nVerify: 🔗 [Privacy (/privacy)](/privacy), 🔗 [Security (/security)](/security)",
          category: "Boundaries"
        },
        {
          id: 'q13',
          question: "Do you store my TikTok password?",
          answer: "No—we never see your password at all.\n\n**How authentication works:**\n\n1. You click \"Connect TikTok\" in OwlSeer\n2. You're redirected to TikTok's official login page\n3. You enter your password on TikTok's site (not ours)\n4. TikTok sends us a limited access token\n5. We use that token to read your public data\n\n**What this means:**\n- Your password is entered only on TikTok's servers\n- We receive a token that allows specific, limited actions\n- We cannot log in as you or control your account\n- You can revoke our access anytime in TikTok settings\n\n**Why OAuth:**\nIt's the industry standard for secure third-party access. Major platforms (Google, Facebook, Twitter) all use this approach because it protects user credentials.\n\nVerify: 🔗 [Authentication (/security#authentication)](/security#authentication)",
          category: "Privacy"
        },
        {
          id: 'q14',
          question: "Can I delete my data from OwlSeer?",
          answer: "Yes—you have full control over your data.\n\n**Self-service deletion:**\n1. Go to Settings → Privacy\n2. Click \"Delete My Data\"\n3. Confirm deletion\n4. Data is removed within 24 hours\n\n**What gets deleted:**\n- Your account profile\n- All analysis history\n- Generated strategies and scripts\n- Usage data and preferences\n\n**What we keep:**\n- Aggregated, anonymized usage statistics (no personal data)\n- Legal/compliance records where required by law\n\n**Compliance:**\n- GDPR: Right to erasure honored\n- CCPA: California deletion requests honored\n- Manual request: Email privacy@owlseer.com\n\n**After deletion:**\n- You can create a new account anytime\n- Previous data cannot be recovered\n- TikTok connection is automatically revoked\n\nVerify: 🔗 [Data Deletion](/privacy#data-deletion)](/privacy#data-deletion)",
          category: "Privacy"
        },
        {
          id: 'q15',
          question: "What's the difference between Free, Growth, and Scale plans?",
          answer: "Here's a detailed breakdown:\n\n**Free Plan ($0/mo)**\n- 1 strategy analysis per month\n- Basic engagement insights\n- Access to Sample dashboard\n- Community support (forum)\n- Best for: Trying the tool, occasional use\n\n**Growth Plan ($19/mo)**\n- 10 strategy analyses per month\n- Full script generation with export\n- Posting calendar integration\n- Trend radar access\n- Email support (48h response)\n- Best for: Active creators, regular content producers\n\n**Scale Plan ($49/mo)**\n- Unlimited strategy analyses\n- Priority support (24h response)\n- Team collaboration (up to 5 seats)\n- API access for custom integrations\n- Advanced analytics dashboard\n- Dedicated account manager (optional)\n- Best for: Agencies, serious creators, teams\n\nAll plans include access to Sample mode and the core methodology documentation.\n\nVerify: 🔗 [Pricing (/pricing#compare)](/pricing#compare), 🔗 [Simulation (/simulation)](/simulation)",
          category: "Billing"
        },
        {
          id: 'q16',
          question: "Can I cancel my subscription anytime?",
          answer: "Yes—we believe in earning your subscription every month.\n\n**How to cancel:**\n1. Go to Settings → Billing\n2. Click \"Cancel Subscription\"\n3. Confirm (no survey required, no retention tactics)\n4. Done\n\n**What happens after cancellation:**\n- You keep full access until the end of your current billing period\n- Generated strategies and scripts remain accessible\n- On the last day, your account downgrades to Free tier\n- Your data stays unless you delete it\n\n**Refund policy:**\n- Annual plans: Prorated refund within 30 days\n- Monthly plans: No refund for current month, no future charges\n- Disputes: Contact support@owlseer.com\n\n**Re-subscribing:**\n- You can re-subscribe anytime\n- Your history and settings are preserved\n- No penalty for canceling and returning\n\nVerify: 🔗 [Billing (/pricing#billing)](/pricing#billing)",
          category: "Billing"
        }
      ]
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
    faqPage: {
      title: "我们需要",
      titleHighlight: "如何帮助您？",
      subtitle: "搜索我们的知识库或浏览下方的常见问题。",
      searchPlaceholder: "搜索答案（例如 '价格', 'API', '安全'）...",
      noResults: "未找到结果",
      noResultsDesc: "尝试调整您的搜索词。",
      categories: {
        Sample: "示例",
        Outputs: "输出",
        Methodology: "方法论",
        Boundaries: "限制",
        Privacy: "隐私",
        Billing: "计费"
      },
      contact: {
        title: "还有问题吗？",
        subtitle: "没找到您想要的答案？我们友好的团队随时为您提供帮助。",
        chat: "联系支持",
        email: "给我们发邮件"
      },
      items: [
        {
          id: 'q1',
          question: "是的，有免费的演示可以试用吗？",
          answer: "是的。我们提供一个公共示例体验，展示完整的产品界面，使用示例创作者账户。您可以探索每个功能——战略概述、脚本建议、趋势雷达和发布日历——无需创建账户或提供任何个人信息。\n\n示例使用来自虚拟创作者账户的真实演示数据，因此您可以确切地看到使用自己的账户会得到什么样的输出和分析。\n\n验证：🔗 [数据看板 (/simulation/dashboard)](/simulation/dashboard), 🔗 [趋势雷达 (/simulation/trend-radar)](/simulation/trend-radar), 🔗 [内容工作室 (/simulation/content-studio)](/simulation/content-studio)",
          category: "Sample"
        },
        {
          id: 'q2',
          question: "示例是完整的产品还是有限的预览？",
          answer: "示例是完整的产品——相同的界面，相同的功能，相同的AI分析。唯一的区别是数据源：示例使用预配置的演示账户，而真实产品使用您连接的TikTok账户。\n\n相同之处：\n- 完整的仪表盘，所有模块可访问\n- 实时AI分析\n- 完整的脚本生成能力\n- 互动日历和调度视图\n\n不同之处：\n- 数据来自虚拟的“TechReviews_US”创作者账户\n- 不能保存更改或导出个性化报告\n- 当您尝试进行账户特定操作时，会出现注册提示\n\n验证：🔗 [数据看板 (/simulation/dashboard)](/simulation/dashboard)",
          category: "Sample"
        },
        {
          id: 'q3',
          question: "我需要连接我的 TikTok 账户才能看到价值吗？",
          answer: "不——您可以从示例中获得显著的价值，而无需连接任何东西。\n\n示例让您：\n- 了解 OwlSeer 输出的内容\n- 学习我们的工作方法和信号类别\n- 查看脚本和日历的结构\n- 评估该工具是否适合您的工作流程\n\n连接您的 TikTok 仅在您想要：\n- 基于您账户的实际表现进行分析\n- 为您的细分市场和受众提供个性化推荐\n- 保存策略和可导出报告时才需要连接\n\n许多用户在示例中花费 10-15 分钟，然后决定是否连接。正是我们设计的方式。\n\n验证：🔗 [数据看板 (/simulation/dashboard)](/simulation/dashboard)",
          category: "Sample"
        },
        {
          id: 'q4',
          question: "OwlSeer 实际上输出什么？",
          answer: "OwlSeer 输出四个主要交付物：\n\n1. **战略概述**\n- 每周内容方向和优先级\n- 与您的目标对齐的目标\n- 需要关注的关键指标\n\n2. **内容创意**\n- 基于您的细分市场和趋势的主题建议\n- 每个创意都包括“为什么这对您有用”\n- 难度/努力估算\n\n3. **脚本**\n- 完整的脚本结构：钩子 → 正文 → 号召性用语\n- 每个创意的多个变体\n- 可根据您的风格自定义\n\n4. **发布日历**\n- 基于您的受众的最佳发布时间\n- 每周/每月视图\n- 可集成的格式\n\n每个输出都包括“为什么推荐”部分，追溯到特定信号和模板。\n\n验证：🔗 [数据看板 (/simulation/dashboard)](/simulation/dashboard), 🔗 [内容工作室 (/simulation/content-studio)](/simulation/content-studio), 🔗 [发布排期 (/simulation/scheduling-slot)](/simulation/scheduling-slot)",
          category: "Outputs"
        },
        {
          id: 'q5',
          question: "脚本看起来像什么？",
          answer: "我们的脚本结构适用于 TikTok 格式：\n\n**钩子（0-3 秒）**\n- 引人注目的开场白\n- 多个钩子变体供测试\n- 关于为什么这种钩子风格适合您的受众的说明\n\n**正文（3-45 秒）**\n- 主要内容要点\n- 视觉/行动建议\n- 节奏建议\n\n**号召性用语（最后几秒）**\n- 清晰的号召性用语\n- 选项：关注、评论、保存、访问链接\n- 与您的当前目标匹配\n\n**示例结构：**\n\n钩子：“停止做 [X]——这是有效的做法”\n正文：\n- 要点 1：陈述问题（5-10 秒）\n- 要点 2：展示解决方案（15-20 秒）\n- 要点 3：证据/结果（10-15 秒）\n号召性用语：“保存以备后用，并关注获取更多 [领域] 提示”\n\n为什么这对您有效：您的教育内容比娱乐内容表现好 2.1 倍。基于问题的钩子在您的账户上能获得 34% 更高的完成率。\n\n验证：🔗 [内容工作室 (/simulation/content-studio)](/simulation/content-studio)",
          category: "Outputs"
        },
        {
          id: 'q6',
          question: "我可以导出我的策略和脚本吗？",
          answer: "导出选项取决于您的套餐：\n\n**免费套餐：**\n- 复制单个脚本到剪贴板\n- 截图/打印任何页面\n\n**成长套餐（$19/月）：**\n- 导出脚本为 PDF\n- 导出日历到 Google 日历 / iCal\n- 基本的 Notion 集成\n\n**规模套餐（$49/月）：**\n- 完整的战略导出（PDF、Notion、Google Docs）\n- API 访问用于自定义集成\n- 团队共享与协作导出\n\n所有导出都保留“为什么”理由，您可以稍后参考。\n\n注意：在示例模式下，由于您查看的是演示数据，导出功能被禁用。连接您的账户以启用导出。\n\n验证：🔗 [价格 (/pricing)](/pricing), 🔗 [内容工作室 (/simulation/content-studio)](/simulation/content-studio)",
          category: "Outputs"
        },
        {
          id: 'q7',
          question: "OwlSeer 如何分析我的账户？",
          answer: "我们的分析涵盖了六大类别的 30 多个信号：\n\n**1. 参与度信号**\n- 浏览与点赞比率、评论情感、分享频率\n- 保存率、个人资料访问、观看时长、重播率\n\n**2. 时间模式**\n- 活跃高峰时段、一周内的趋势\n- 粉丝时区分布、发布一致性\n\n**3. 内容DNA**\n- 钩子风格效果、最佳视频时长\n- 音乐使用模式、标签策略、字幕结构\n\n**4. 受众洞察**\n- 粉丝增长率、人口统计模式\n- 兴趣聚集、参与度画像\n\n**5. 竞争信号**\n- 领域基准、顶尖表现差距\n- 内容差距分析、时间对比\n\n**6. 趋势匹配**\n- 流行声音、病毒式格式\n- 新兴话题、平台变化\n\n每个信号根据您的具体目标和细分市场加权。分析通常在 30-60 秒内完成。\n\n验证：🔗 [信号 (/how-it-works#signals)](/how-it-works#signals), 🔗 [账户智能分析 (/simulation/intelligence)](/simulation/intelligence)",
          category: "Methodology"
        },
        {
          id: 'q8',
          question: "你们提到的“30+ 信号”是什么？",
          answer: "“30+ 信号”指的是我们每个账户分析的独特数据点。以下是详细分类：\n\n**参与度（7 个信号）**\n- 浏览与点赞比率\n- 评论情感得分\n- 分享频率\n- 保存率\n- 个人资料访问率\n- 平均观看时长\n- 重播率\n\n**时间（5 个信号）**\n- 活跃高峰时段\n- 一周内的趋势\n- 时区分布\n- 发布一致性得分\n- 季节性趋势\n\n**内容 DNA（7 个信号）**\n- 钩子效果得分\n- 最佳视频时长\n- 音乐影响\n- 标签表现\n- 字幕互动\n- 缩略图点击率\n- 格式偏好\n\n**受众（5 个信号）**\n- 增长速度\n- 人口统计聚集\n- 兴趣映射\n- 互动画像\n- 忠诚度指标\n\n**竞争（4 个信号）**\n- 领域基准\n- 差距分析\n- 时间对比\n- 内容差异化\n\n**趋势（4 个以上信号）**\n- 音频速度\n- 格式出现\n- 话题势头\n- 平台变化\n\n总计：32 个核心信号，根据数据可用性可能会有额外的子信号。\n\n验证：🔗 [信号 (/trust#signals)](/trust#signals), 🔗 [工作原理 (/how-it-works#signals)](/how-it-works#signals)",
          category: "Methodology"
        },
        {
          id: 'q9',
          question: "你们如何生成脚本推荐？",
          answer: "脚本生成遵循四个步骤的过程：\n\n**步骤 1：信号分析**\n- 分析您的 30 多个信号\n- 识别优势（有效的部分）\n- 识别差距（需要改进的部分）\n\n**步骤 2：模板匹配**\n- 与 200 多个内容模板进行交叉参考\n- 按您的细分市场（50 多个类别）筛选\n- 按您的阶段（初学者/成长/成熟）筛选\n- 按您的目标（增长/互动/变现）筛选\n\n**步骤 3：个性化**\n- 将模板调整为您的内容 DNA\n- 匹配您典型的视频时长\n- 对齐您的钩子风格偏好\n- 融入与您相关的流行元素\n\n**步骤 4：理由文档**\n- 为每个推荐附上“为什么”\n- 追溯到特定信号\n- 提供信心指标\n\n结果：脚本就像是为您量身定做的，因为它们确实是基于数据，而不是猜测。\n\n验证：🔗 [方法论 (/how-it-works#synthesize)](/how-it-works#synthesize), 🔗 [内容工作室 (/simulation/content-studio)](/simulation/content-studio)",
          category: "Methodology"
        },
        {
          id: 'q10',
          question: "OwlSeer 保证病毒式内容吗？",
          answer: "不——我们对任何声称可以做到的工具持怀疑态度。\n\n**我们可以做的：**\n- 提高您创作出引起共鸣内容的概率\n- 识别哪些内容在您的账户中有效的模式\n- 基于数据建议最佳的发布时间、话题和格式\n- 帮助您更一致地发布内容，具有更好的结构\n\n**我们不能做的：**\n- 保证任何视频会成为病毒式传播\n- 控制 TikTok 的算法\n- 精确预测平台如何分发您的内容\n- 覆盖社交媒体的固有不可预测性\n\n**我们的理念：**\n病毒式传播部分是运气。战略提高了您的成功概率。我们专注于可控因素——内容质量、时机、一致性——并且诚实地告诉您，没有工具能保证结果。\n\n我们宁愿您带着现实的期望成功，也不希望您带着夸大的承诺失败。\n\n验证：🔗 [限制 (/how-it-works#limits)](/how-it-works#limits), 🔗 [边界 (/faq#boundaries)](/faq#boundaries)",
          category: "Boundaries"
        },
        {
          id: 'q11',
          question: "OwlSeer 会为我自动发布吗？",
          answer: "不——我们故意不提供自动发布功能。\n\n**我们为什么不提供自动发布：**\n\n1. **创意控制**：您应该在发布前审查并可能编辑每个内容\n\n2. **平台合规性**：自动发布可能会违反 TikTok 的某些条款\n\n3. **质量保证**：AI 生成的脚本在发布前经过人工审查更能保证质量\n\n4. **真实性**：您的受众关注的是您——自动发布可能显得不够真实\n\n**我们提供的功能：**\n- 准备好录制的脚本\n- 最佳发布时间建议\n- 日历提醒\n- 与调度工具的集成（您仍然需要审批每个发布）\n\n**我们的理念：**\n我们是战略合作伙伴，而非自动化机器人。我们进行分析和规划；您保持创意控制。\n\n验证：🔗 [边界 (/faq#boundaries)](/faq#boundaries), 🔗 [发布排期 (/simulation/scheduling-slot)](/simulation/scheduling-slot)",
          category: "Boundaries"
        },
        {
          id: 'q12',
          question: "OwlSeer 不能访问哪些数据？",
          answer: "以下是我们绝对不会访问的内容：\n\n**认证：**\n- ❌ 您的 TikTok 密码（我们使用 OAuth—您直接在 TikTok 上认证）\n- ❌ 您的登录凭证\n\n**私人内容：**\n- ❌ 私信（DMs）\n- ❌ 私人对话\n- ❌ 未发布的草稿\n- ❌ 已删除的视频\n\n**账户控制：**\n- ❌ 账户设置\n- ❌ 发布权限（我们不能为您发布内容）\n- ❌ 关注/取消关注操作\n- ❌ 任何账户修改\n\n**个人信息：**\n- ❌ TikTok 上的支付/账单信息\n- ❌ 电子邮件地址（除非您提供给我们）\n- ❌ 电话号码\n\n**我们可以访问的内容（在您的许可下）：**\n- ✅ 公开视频表现数据\n- ✅ 公开互动指标\n- ✅ 粉丝数量和增长数据\n- ✅ 公开个人资料信息\n\n验证：🔗 [隐私 (/privacy)](/privacy), 🔗 [安全 (/security)](/security)",
          category: "Boundaries"
        },
        {
          id: 'q13',
          question: "你们存储我的 TikTok 密码吗？",
          answer: "不——我们根本不会看到您的密码。\n\n**认证工作原理：**\n\n1. 您点击 OwlSeer 中的“连接 TikTok”\n2. 您将被重定向到 TikTok 的官方登录页面\n3. 您在 TikTok 的网站上输入密码（不是我们的网站）\n4. TikTok 向我们发送一个有限的访问令牌\n5. 我们使用该令牌读取您的公开数据\n\n**这意味着什么：**\n- 您的密码仅在 TikTok 的服务器上输入\n- 我们接收到一个令牌，允许执行特定的、有限的操作\n- 我们无法代替您登录或控制您的账户\n- 您可以随时在 TikTok 设置中撤销我们的访问权限\n\n**为什么使用 OAuth：**\n这是行业标准的安全第三方访问方式。主要平台（如 Google、Facebook、Twitter）都使用这种方法，因为它可以保护用户的凭证。\n\n验证：🔗 [认证 (/security#authentication)](/security#authentication)",
          category: "Privacy"
        },
        {
          id: 'q14',
          question: "我可以从 OwlSeer 删除我的数据吗？",
          answer: "是的——您完全控制您的数据。\n\n**自助删除：**\n1. 进入设置 → 隐私\n2. 点击“删除我的数据”\n3. 确认删除\n4. 数据将在 24 小时内删除\n\n**删除内容：**\n- 您的账户资料\n- 所有分析历史\n- 生成的策略和脚本\n- 使用数据和偏好设置\n\n**我们保留的内容：**\n- 汇总的、匿名化的使用统计数据（不包含个人数据）\n- 法律/合规记录（按法律要求保留）\n\n**合规性：**\n- GDPR：遵守删除权要求\n- CCPA：遵守加利福尼亚删除请求\n- 手动请求：发送邮件至 privacy@owlseer.com\n\n**删除后：**\n- 您可以随时创建新账户\n- 之前的数据无法恢复\n- TikTok 连接会自动撤销\n\n验证：🔗 [数据删除 (/privacy#data-deletion)](/privacy#data-deletion)",
          category: "Privacy"
        },
        {
          id: 'q15',
          question: "免费、成长和规模计划有什么区别？",
          answer: "以下是详细的套餐分类：\n\n**免费套餐（$0/月）**\n- 每月 1 个策略分析\n- 基本的互动洞察\n- 访问示例仪表盘\n- 社区支持（论坛）\n- 最适合：试用工具，偶尔使用\n\n**成长套餐（$19/月）**\n- 每月 10 个策略分析\n- 完整的脚本生成与导出\n- 发布日历集成\n- 趋势雷达访问\n- 电子邮件支持（48 小时响应）\n- 最适合：活跃创作者，定期内容生产者\n\n**规模套餐（$49/月）**\n- 无限策略分析\n- 优先支持（24 小时响应）\n- 团队协作（最多 5 个席位）\n- API 访问用于自定义集成\n- 高级分析仪表盘\n- 专属客户经理（可选）\n- 最适合：代理机构，专业创作者，团队\n\n所有套餐均包括访问示例模式和核心方法论文档。\n\n验证：🔗 [价格 (/pricing#compare)](/pricing#compare), 🔗 [模拟 (/simulation)](/simulation)",
          category: "Billing"
        },
        {
          id: 'q16',
          question: "我可以随时取消订阅吗？",
          answer: "是的——我们相信每月都要通过提供优质服务来赢得您的订阅。\n\n**如何取消：**\n1. 进入设置 → 账单\n2. 点击“取消订阅”\n3. 确认（无需调查， 无保留策略）\n4. 完成\n\n**取消后的处理：**\n- 您将在当前账单周期结束前保持完整访问权限\n- 生成的策略和脚本仍可访问\n- 在最后一天，您的账户将降级为免费套餐\n- 您的数据将保留，除非您删除它\n\n**退款政策：**\n- 年度计划：30 天内按比例退款\n- 月度计划：当前月无退款，不会收取未来费用\n- 争议：联系 support@owlseer.com\n\n**重新订阅：**\n- 您可以随时重新订阅\n- 您的历史记录和设置会被保留\n- 取消后返回不会有惩罚\n\n验证：🔗 [计费 (/pricing#billing)](/pricing#billing)",
          category: "Billing"
        }
      ]
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
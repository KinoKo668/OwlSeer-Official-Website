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
    methodology: 'Methodology',
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
    howItWorksPage: {
      hero: {
        title: "Your TikTok Strategy in",
        titleHighlight: "3 Steps",
        lead: "OwlSeer connects to your TikTok account, analyzes your data through 30+ signals, and delivers a personalized content strategy — all in under three minutes. Here is exactly what to expect.",
        cta: "Try Free Demo",
        video: "Watch 1 Min Overview"
      },
      step1: {
        title: "Step 1: Connect Your TikTok Account",
        desc: "You connect your TikTok account through TikTok's official login flow. OwlSeer does not ask for your password — you authenticate directly with TikTok, and we receive a read-only access token. The entire connection process takes under 30 seconds.",
        readOnlyTitle: "What \"read-only\" means:",
        readOnlyList: [
          "OwlSeer can view your public video metrics, posting history, and audience engagement data",
          "OwlSeer cannot post, edit, delete, or modify anything on your account",
          "OwlSeer cannot access your private messages, drafts, or payment information",
          "You can revoke access at any time from your TikTok account settings"
        ],
        securityNote: "The connection uses the same official API that TikTok provides to all authorized third-party tools. For full details on how we handle your data, see our data security practices.",
        action: "Learn more about our security approach — read our data security page."
      },
      step2: {
        title: "Step 2: AI Analyzes Your Data",
        desc: "Once connected, OwlSeer's AI processes your account data through our five-step methodology. The analysis covers three signal categories:",
        signals: [
          { title: "Engagement signals", desc: "12 factors including hook rate, watch-through rate, share rate, and comment sentiment — measuring how your audience interacts with your content" },
          { title: "Trend signals", desc: "10 factors including sound velocity, hashtag momentum, and trend saturation — identifying what is gaining traction in your niche" },
          { title: "Audience signals", desc: "8+ factors including follower growth velocity, active hour mapping, and audience overlap — mapping who watches and when" }
        ],
        process: "The AI compares your signal profile against patterns from millions of analyzed TikTok videos to identify your content strengths, growth opportunities, and optimal posting strategy. The full analysis completes in under three minutes.",
        action: "Dive into the technical process — read the full methodology."
      },
      step3: {
        title: "Step 3: Get Your Personalized Strategy",
        desc: "After analysis completes, you land in your personalized dashboard with everything you need to plan, create, and optimize your TikTok content:",
        outputs: [
          { title: "Trend alerts", desc: "Emerging trends in your niche with optimal participation timing and confidence scores." },
          { title: "Content recommendations", desc: "Weekly topic, format, and hook suggestions tailored to your audience's current preferences" },
          { title: "Posting schedule", desc: "AI-recommended posting times based on your audience's active hours" },
          { title: "Performance diagnosis", desc: "A breakdown of your recent videos — what worked, what did not, and why" },
          { title: "Ready-to-shoot scripts", desc: "Complete video scripts with hook, body, CTA, and recommended sounds/hashtags." },
          { title: "AI Copilot", desc: "Ask questions about your strategy in natural language. The Copilot draws from your account data." }
        ],
        note: "Your strategy updates every seven days as new data flows in. You also receive a Weekly Intelligence Report summarizing your performance, key insights, and recommended next steps.",
        action: "See a full strategy output on sample data — explore the interactive demo."
      },
      whatYouGet: {
        title: "What You Get",
        items: [
          { title: "Trend Predictions", desc: "Emerging trends matched to your niche, with timing windows and confidence scores" },
          { title: "Content Diagnosis", desc: "Video-by-video analysis showing why content succeeds or falls short" },
          { title: "AI Scripts", desc: "Ready-to-shoot scripts with hooks, body content, CTAs, and sound/hashtag recommendations" },
          { title: "Weekly Reports", desc: "Performance summaries with KPI tracking, insights, and next-week action plans" }
        ]
      },
      roi: {
        title: "Calculate How Much Time You'll Save",
        desc: "Answer 3 questions to see how much OwlSeer can compress your content planning time.",
        q1: "Weekly time researching content?",
        q2: "Weekly time tracking trends?",
        q3: "Weekly time writing scripts?",
        result: {
          current: "Current: {{total}} hours/week",
          saved: "With OwlSeer: Free up {{saved}} hours/week",
          monthly: "Monthly Savings: ~{{monthly}} hours",
          value: "Monthly Value: ${{value}} (@ $50/hr)",
          cta: "Start Saving Time — Try Free"
        }
      },
      deeper: {
        title: "Want to Go Deeper?",
        desc: "OwlSeer's AI follows a transparent, five-step process. If you want to understand the technical details — how signals are weighted, how patterns are identified, how scripts are generated — explore our complete methodology. For definitions of every signal we track, visit the Signals page."
      },
      boundary: {
        dataUse: "Data we use: Public TikTok account metrics accessed through the official API. OwlSeer receives a read-only access token — we can view your metrics but cannot modify your account.",
        limitations: "What we do not do: OwlSeer does not post, edit, or delete content. We do not access private messages, drafts, or payment data. We do not guarantee specific growth outcomes.",
        note: "Variability note: Analysis accuracy and recommendation quality depend on account history, posting frequency, and niche. New accounts with fewer than 10 published videos may receive less precise initial recommendations."
      },
      cta: {
        title: "Ready to Start?",
        desc: "Connect your TikTok account and receive your personalized strategy in under three minutes. Free trial, no credit card required. Or explore sample data first.",
        primary: "Start Free Trial",
        secondary: "Explore Interactive Demo"
      }
    },
    contentDiagnosisPage: {
      hero: {
        title: "Find Out Why Your TikTok Content",
        titleHighlight: "Underperforms",
        lead: "OwlSeer analyzes every video across 12 engagement signals to show exactly where you gain or lose your audience — and what to do about it."
      },
      tldr: {
        text: "Low views have a cause. OwlSeer's Intelligence module diagnoses content issues by analyzing 12 engagement signals including hook rate, watch-through rate, share rate, and comment sentiment. Each issue is surfaced with severity, explanation, and a specific recommended fix. Content diagnosis turns vague frustration into actionable improvement.",
        link1: "Intelligence module",
        link2: "12 engagement signals",
        link3: "issue is surfaced"
      },
      problem: {
        title: "The Guessing Cycle",
        task: "Understand why creators repeat the same content mistakes.",
        desc1: "When a video underperforms, most creators default to guessing: \"Maybe the topic was wrong\" or \"Maybe I posted at a bad time.\" Without data, they change things randomly — sometimes fixing the wrong variable, sometimes making things worse.",
        desc2: "The pattern looks like this: post a video, see low views, change something, post again, see inconsistent results, change something else. This guessing cycle wastes content production effort and erodes confidence.",
        desc3: "The root cause is usually specific and fixable. It might be a weak hook (viewers scroll past in the first 2 seconds), a long intro (watch-through drops at the 8-second mark), or poor timing (posting when your audience is asleep). But without signal-level diagnosis, you cannot distinguish between these causes.",
        action: "Understand the signals involved — read about engagement signals."
      },
      solution: {
        title: "How OwlSeer Diagnoses Content",
        task: "See the diagnosis workflow from detection to fix.",
        layer1: {
          title: "Layer 1 — Issue Detection",
          desc: "The Issues Found panel scans your recent videos and flags problems with severity badges (High or Medium). Example: \"Weak Hook Performance\" (High) — \"Your video openings use slow intros. Viewers scroll away before seeing your content.\""
        },
        layer2: {
          title: "Layer 2 — Signal Breakdown",
          desc: "For each issue, OwlSeer shows which signals are involved. A weak hook issue links to your hook rate data with specific numbers — your current rate, your niche average, and the trend over your last 10 videos."
        },
        layer3: {
          title: "Layer 3 — Recommended Fix",
          desc: "Each issue includes a specific, actionable fix. Not \"improve your hooks\" but \"Try a 'Product-First' hook — show the finished result in the first second to grab attention.\" Fixes are drawn from patterns that work in your niche."
        },
        structure: "The Content Structure Analysis adds another dimension: it reveals which video formats (three-segment, two-segment, single) perform best for your account, so you can align future content with your strongest structure.",
        action: "See a diagnosis on sample data — open the Intelligence demo."
      },
      evidence: {
        title: "What a Diagnosis Looks Like",
        task: "See specific diagnosis output from a real account.",
        intro: "From the sample account:",
        issue1: {
          title: "Weak Hook Performance",
          severity: "HIGH",
          why: "Why this matters: \"Your video openings use slow intros like 'Hey everyone, today I'll show you...' Viewers scroll away before seeing your content.\"",
          fix: "Recommended fix: \"Try 'Product-First' hook — show the finished dish in the first second to grab attention.\""
        },
        issue2: {
          title: "Suboptimal Posting Time",
          severity: "MEDIUM",
          why: "Why this matters: \"You consistently post at 2 PM when your audience peaks at 5-7 PM.\"",
          fix: "Recommended fix: \"Shift posting to the 5-6 PM window. See your best-time heatmap for day-specific recommendations.\""
        },
        supporting: "Supporting data: Content Structure Analysis shows three-segment videos averaging 5.8% AER versus 4.1% for single-segment — a structural insight that feeds into script recommendations.",
        action: "See the full diagnostic view — explore the Dashboard."
      },
      conversion: {
        title: "Check Your Signals Instantly",
        desc: "Paste a TikTok video link to get a free 3-signal check.",
        placeholder: "Paste TikTok video URL...",
        button: "Diagnose My Content",
        note: "Free 3-signal check. Full 12-signal diagnosis requires account connection.",
        resultTitle: "Diagnosis Preview",
        signals: {
          hook: "Hook Rate",
          pacing: "Pacing Score",
          structure: "Structure"
        },
        cta: "Connect account for full diagnosis"
      },
      boundary: {
        title: "Boundary Box",
        dataUse: "Data we use: Diagnosis draws from your video performance metrics, 12 engagement signals, posting history, and audience behavior data — all accessed through the TikTok API.",
        limitations: "What we do not do: Diagnosis identifies patterns and suggests fixes, but does not guarantee that implementing fixes will produce specific results. Content performance is influenced by factors beyond signal data, including video production quality, algorithm changes, and audience mood.",
        note: "Variability note: Diagnosis accuracy improves with more data. Accounts with fewer than 10 published videos may receive less specific diagnoses. All examples shown are from the sample account."
      },
      cta: {
        title: "Diagnose Your Content",
        desc: "Connect your account and find out exactly what to fix.",
        primary: "Start Free Trial",
        secondary: "Try Intelligence Demo"
      }
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
    },
    signalsPage: {
      ctaButton: "Analyze this signal",
      hero: {
        title: "Decode the TikTok Algorithm: 30+ AI Signals for Viral Growth",
        lead: "OwlSeer goes beyond vanity metrics. We analyze 30+ weighted signals—from Hook Rate to Trend Velocity—to reverse-engineer the algorithm and generate personalized growth strategies. This is the complete breakdown of every data point we track."
      },
      tldr: {
        content: "We track **12 engagement signals** (hook rate, watch-through, shares, and more), **10 trend signals** (sound velocity, hashtag momentum, saturation), and **8+ audience signals** (growth velocity, active hours, demographics). Each signal carries a weight based on its predictive power. Combined, they form your content profile — the foundation for every recommendation. See our [methodology](/methodology) for how these signals flow through our AI pipeline."
      },
      quickNav: {
        engagement: "Engagement (12)",
        trends: "Trends (10)",
        audience: "Audience (8+)"
      },
      sections: {
        engagement: {
          title: "Engagement Signals — 12 Factors",
          task: "Understand how OwlSeer measures the way viewers interact with your content.",
          desc: "Engagement signals quantify the relationship between your content and your audience. Each signal captures a different dimension of viewer behavior — from the first three seconds of a video to the moment someone taps \"share.\" OwlSeer weights these signals based on their correlation with actual growth outcomes.",
          linkText: "AER card",
          linkUrl: "/sample-explorer/dashboard#aer-card",
          actionLine: "See engagement signals on real account data — [explore the Dashboard demo](/sample-explorer/dashboard#aer-card).",
          signals: [
            { name: "Hook Rate", id: "hook-rate", def: "Percentage of viewers who watch past the first 3 seconds of your video.", why: "TikTok's algorithm heavily weights early retention. Hook rate is the single most important factor for For You Page distribution. A video that loses viewers in the first 3 seconds rarely gets pushed to broader audiences.", how: "We analyze successful hook patterns in your content history and recommend opening strategies that match your audience's preferences. If your hook rate trends below your niche average, OwlSeer flags it as an improvement priority." },
            { name: "Watch-Through Rate", id: "watch-through-rate", def: "Completion percentage across different video lengths.", why: "Completion signals content quality to the algorithm. Videos that hold attention longer get prioritized for wider distribution. Watch-through rate also reveals optimal video length for your specific audience.", how: "We determine your optimal video length range and identify pacing patterns — transitions, information density, visual changes — that maximize completion for your audience." },
            { name: "Share Rate", id: "share-rate", def: "Number of shares relative to total views.", why: "Shares indicate viral potential and are one of the strongest signals for For You Page qualification. A shared video reaches audiences beyond the algorithm's initial distribution.", how: "We identify share-worthy content characteristics in your niche — humor patterns, educational \"aha\" moments, relatable situations — and recommend formats that encourage sharing." },
            { name: "Comment Sentiment", id: "comment-sentiment", def: "AI analysis of comment tone, quality, and engagement depth.", why: "Positive sentiment correlates with algorithm boost. But volume matters too — videos that spark discussion (even debate) signal community engagement, which TikTok rewards.", how: "We guide content toward topics that drive meaningful comments. If sentiment trends negative, OwlSeer flags the shift and suggests adjustments." },
            { name: "Save Rate", id: "save-rate", def: "Number of saves relative to total views.", why: "Saves indicate high-value, reference-worthy content. TikTok treats saves as a strong quality signal because users save content they intend to revisit.", how: "We identify educational, tutorial, and inspirational content patterns that drive saves in your niche and recommend topics that match." },
            { name: "Reply Rate", id: "reply-rate", def: "Creator replies relative to comments received.", why: "Reply rate signals active community building. Responding to comments can boost video distribution and deepen audience loyalty.", how: "We recommend an optimal comment engagement strategy based on your capacity, time, and growth goals." },
            { name: "Stitch/Duet Rate", id: "stitch-duet-rate", def: "How often your content inspires stitch or duet responses from other creators.", why: "Stitches and duets extend your reach through other creators' audiences. Content that generates responses has inherently higher distribution potential.", how: "We identify collaborative content opportunities and formats that encourage stitches and duets — opinion prompts, challenges, and debate starters." },
            { name: "Profile Visit Rate", id: "profile-visit-rate", def: "Profile views generated per video view.", why: "Profile visits indicate curiosity about the creator beyond a single video. A high profile visit rate suggests content that builds personal brand interest.", how: "We optimize content for follower conversion by analyzing what drives profile visits — CTAs, personality-forward content, series formats." },
            { name: "Follow-Through Rate", id: "follow-through-rate", def: "New followers generated per video view.", why: "The most direct measure of content's growth impact. Follow-through rate reveals which content types convert casual viewers into followers.", how: "We correlate follow-through rate with content attributes (topic, hook style, CTA type) to identify and recommend your highest-converting formats." },
            { name: "Rewatch Rate", id: "rewatch-rate", def: "Estimated rewatches based on watch-time patterns that exceed 100% completion.", why: "Rewatches signal highly engaging content. TikTok counts rewatch time toward overall engagement, amplifying distribution for \"sticky\" videos.", how: "We identify content characteristics that drive repeat viewing — layered details, plot twists, dense information — and recommend those formats." },
            { name: "Sound Usage", id: "sound-usage", def: "How your sound choices compare to current platform and niche trends.", why: "Trending sounds boost discoverability through TikTok's sound search and browsing features. The right sound at the right time amplifies distribution.", how: "We recommend sound strategies based on sound velocity data — rising sounds before they peak, evergreen sounds for consistent performance." },
            { name: "Caption Engagement", id: "caption-engagement", def: "Interactions driven by caption content, including click-throughs on text and engagement prompted by caption text.", why: "Captions extend engagement beyond the video itself and can drive comments, shares, and profile visits. Well-crafted captions act as a second hook.", how: "We optimize caption strategy including length, opening hooks, question prompts, and call-to-action placement." }
          ]
        },
        trends: {
          title: "Trend Signals — 10 Factors",
          task: "Learn how OwlSeer tracks platform-wide and niche trends to help you act at the right time.",
          desc: "Trend signals monitor what is gaining traction across TikTok. The goal is timing: participating in a trend too early means low volume, too late means saturation. OwlSeer's trend signals help you find the optimal participation window for your niche.",
          linkText: "Trend Radar",
          linkUrl: "/sample-explorer/trend-radar",
          actionLine: "See trend signals on live data — [explore the Trend Radar demo](/sample-explorer/trend-radar).",
          signals: [
            { name: "Sound Velocity", id: "sound-velocity", def: "Rate of sound adoption across TikTok, measured as new video creations using a specific sound per hour.", why: "Early sound adoption increases viral potential before the sound becomes oversaturated. Sound velocity predicts whether a sound will peak in days or weeks.", how: "We alert you to rising sounds in your niche with optimal participation windows — typically when velocity is accelerating but before the sound reaches peak saturation." },
            { name: "Hashtag Momentum", id: "hashtag-momentum", def: "Growth rate of hashtag usage over a rolling 7-day window.", why: "Timing hashtag participation maximizes reach. Too early means low search volume, too late means your content competes with thousands of similar posts.", how: "We recommend optimal hashtag timing based on momentum curves and track competition level to avoid oversaturated tags." },
            { name: "Format Migration", id: "format-migration", def: "Trend patterns moving from other platforms (Instagram Reels, YouTube Shorts) to TikTok.", why: "Cross-platform trends often gain momentum on TikTok faster than native trends. Early detection of format migration creates first-mover advantage.", how: "We monitor format patterns on adjacent platforms and provide early warnings when a trend is likely to migrate to TikTok." },
            { name: "Niche Trend Velocity", id: "niche-trend-velocity", def: "Trend speed within your specific content category, compared to the platform-wide average.", why: "Niche trends have different lifecycles than platform-wide trends. A sound that peaks in 48 hours for comedy might sustain for two weeks in education.", how: "We provide customized trend timing recommendations calibrated to your specific niche's trend lifecycle." },
            { name: "Creator Adoption Rate", id: "creator-adoption-rate", def: "How quickly top creators in your niche adopt a given trend.", why: "Creator adoption signals trend legitimacy and potential longevity. When established creators in your space start using a trend, it validates the trend's relevance.", how: "We track adoption patterns among comparable creators and factor this into trend confidence scores." },
            { name: "Geographic Spread", id: "geographic-spread", def: "How a trend expands across regions and markets.", why: "Regional trends can go global. A trend starting in Southeast Asia may reach North America within 1-2 weeks. Early detection provides a competitive window.", how: "We identify emerging international trends relevant to your audience's geography and cultural context." },
            { name: "Platform Promotion", id: "platform-promotion", def: "Indicators that TikTok itself is actively promoting specific content types, formats, or features.", why: "Platform-promoted trends receive algorithm boost and increased distribution. Aligning with platform priorities can significantly amplify reach.", how: "We detect platform promotion patterns and factor them into recommendations when relevant to your niche." },
            { name: "Trend Saturation", id: "trend-saturation", def: "Current participation density in a trend, measured as active creators per hour.", why: "Oversaturated trends yield diminishing returns. When thousands of creators post the same trend simultaneously, individual videos get less distribution.", how: "We warn against late trend participation and suggest optimal exit points — the moment when continued participation yields negative returns." },
            { name: "Trend Longevity", id: "trend-longevity", def: "Estimated remaining lifespan of an active trend.", why: "Some trends sustain for weeks. Others fade in 48 hours. Resource allocation — scripting, filming, editing — should match expected lifespan.", how: "We prioritize trends with longer predicted lifespans for content that requires more production effort, and flag quick-fade trends for lighter formats." },
            { name: "Brand Safety Score", id: "brand-safety-score", def: "Risk assessment for participating in a trend, measured on a 0-100 scale.", why: "Some trends carry reputational risk for brands, professional creators, and educators. A trend may be popular but inappropriate for certain audiences.", how: "We flag potentially problematic trends with risk explanations and alternative recommendations, particularly for brand and business accounts." }
          ]
        },
        audience: {
          title: "Audience Signals — 8+ Factors",
          task: "Discover how OwlSeer maps your audience's behavior, demographics, and growth trajectory.",
          desc: "Audience signals describe who watches your content, when they watch, and how your audience composition changes over time. These signals shape scheduling, format selection, and long-term growth strategy.",
          linkText: "Intelligence Hub",
          linkUrl: "/sample-explorer/intelligence",
          actionLine: "See audience insights on real data — [explore the Intelligence Hub demo](/sample-explorer/intelligence).",
          signals: [
            { name: "Follower Growth Velocity", id: "follower-growth-velocity", def: "Rate of follower acquisition over a rolling 30-day window, measured as net new followers per day.", why: "Velocity indicates content-market fit and growth trajectory. Accelerating velocity suggests strategy alignment. Decelerating velocity signals a need to adjust.", how: "We correlate content types and posting patterns with growth velocity changes to identify which activities drive follower acquisition." },
            { name: "Active Hour Mapping", id: "active-hour-mapping", def: "When your audience is most engaged, mapped by day of week and hour (adjusted to your time zone).", why: "Posting timing affects initial distribution. Early engagement signals (views and interactions in the first 30-60 minutes) determine whether TikTok pushes a video to broader audiences.", how: "We generate personalized posting schedules based on your audience's active hours, visible in the best-time heatmap." },
            { name: "Audience Overlap", id: "audience-overlap", def: "Viewer similarity between your account and comparable creators in your niche.", why: "Audience overlap reveals content opportunities that worked for similar audiences. High overlap with a faster-growing creator suggests format or topic gaps you could fill.", how: "We identify proven content strategies from comparable creators and recommend adaptations calibrated to your specific audience." },
            { name: "Demographic Shifts", id: "demographic-shifts", def: "Changes in audience age, gender, geography, and interest composition over time.", why: "Audience changes require strategy adjustment. If your audience skews younger over time, your content tone and references may need to evolve.", how: "We alert you to significant demographic shifts and suggest content adjustments to maintain engagement with your evolving audience." },
            { name: "Engagement Decay", id: "engagement-decay", def: "How quickly engagement drops after posting, measured as interaction rate at 1h, 6h, 24h, and 7d post-publish.", why: "Decay rate indicates content longevity. Fast decay suggests spike-dependent content. Slow decay suggests evergreen value that continues generating views over time.", how: "We optimize for your goals — viral spikes (if you want reach) vs. sustained engagement (if you want community depth) — and recommend content types accordingly." },
            { name: "Cross-Video Journey", id: "cross-video-journey", def: "How viewers move through your content after watching one video, including profile visits, binge-watching patterns, and playlist engagement.", why: "Cross-video journey reveals which content creates \"rabbit holes\" — the videos that lead viewers to watch 5, 10, or 20 more of your videos.", how: "We optimize content sequencing, suggest complementary topics, and identify which videos serve as effective entry points to your profile." },
            { name: "Follower Loyalty Score", id: "follower-loyalty-score", def: "Repeat engagement rate from existing followers, measured as the percentage of followers who interact with each new video.", why: "Loyal followers amplify reach (their engagement signals boost distribution) and provide consistent baseline performance for every post.", how: "We identify content that builds loyalty (community posts, series, personal stories) vs. content that attracts new viewers (trending formats, discovery hooks) and recommend the right balance." },
            { name: "New vs. Returning", id: "new-vs-returning", def: "The ratio of first-time viewers to returning viewers for each video.", why: "A healthy mix indicates sustainable growth. All-new-viewer content is unstable (high reach, low retention). All-returning content limits growth (loyal but capped).", how: "We balance viral content recommendations (for new viewer acquisition) with community-building content (for returning viewer retention)." }
          ]
        },
        howTogether: {
          title: "How These Signals Work Together",
          task: "See how OwlSeer combines signals to produce insights no single metric reveals alone.",
          intro: "Signals do not operate in isolation. OwlSeer's AI finds correlations between signals across all three categories to generate recommendations that account for the full picture. Three examples:",
          examples: [
            { title: "Hook rate + sound velocity", desc: "When a trending sound matches your successful hook patterns, OwlSeer prioritizes that recommendation with higher confidence. The combination of proven hook performance and rising sound momentum creates a compounding opportunity." },
            { title: "Active hours + trend window", desc: "OwlSeer aligns trend participation timing with your audience's peak activity. Posting a trending format during your audience's most engaged window maximizes the early engagement signals that TikTok uses to decide distribution." },
            { title: "Share rate + comment sentiment", desc: "Content that drives both sharing and positive discussion gets flagged as a high-replication candidate. OwlSeer identifies the specific content attributes — topic, hook style, CTA — that produced the dual-signal outcome." }
          ],
          outro: "Learn exactly how our AI processes signal combinations in our [complete methodology documentation](/methodology)."
        },
        boundary: {
          title: "Boundary Box",
          data: "Data we use: Publicly available TikTok account metrics accessed through the official API. Signal definitions on this page reflect OwlSeer's current analytical framework.",
          notDo: "What we do not do: OwlSeer does not access TikTok's internal algorithm weights. Our signal weights are derived from observed correlations in public data, not from proprietary TikTok documentation.",
          variability: "Variability note: Signal predictive power varies by niche, account size, audience geography, and TikTok algorithm updates. Correlations described on this page are based on aggregate data and may not apply identically to every account."
        },
        cta: {
          title: "See Your Signals in Action",
          desc: "Connect your TikTok account and receive your personalized signal analysis in under three minutes. Or explore sample data to see how signals translate into strategy.",
          primary: "Start Free Analysis",
          secondary: "Explore Sample Data"
        },
        contextualConversion: {
           title: "What do these 30+ signals look like for YOU?",
           desc: "Connect your TikTok account and OwlSeer will generate your full signal profile in 3 minutes — including every signal value, niche benchmarks, and your top 3 improvement priorities.",
           button: "Generate My Signal Profile",
           note: "Read-only access. Connects in 30 seconds. Revoke anytime."
        }
      }
    },
    scriptGeneration: {
      hero: {
        badge: "New Feature",
        title: "Generate TikTok Scripts from Your Data in",
        titleHighlight: "60 Seconds",
        desc: "OwlSeer creates ready-to-shoot scripts personalized to your audience — with hooks, body content, CTAs, sounds, and hashtags, all derived from your engagement signals.",
        cta: "Start Free Trial",
        demo: "Try Demo"
      },
      problem: {
        title: "Why Script Writing Is the Bottleneck",
        desc: "TikTok rewards consistency. But producing 3-5 quality scripts per week takes 2-4 hours of manual work.",
        manual: {
          title: "Manual Process",
          items: ["2-4 hours per week", "Generic, weak hooks", "Guessing trends", "Inconsistent posting"]
        },
        ai: {
          title: "OwlSeer AI",
          items: ["15-30 mins per week", "Data-driven hooks", "Auto-trend integration", "Consistent schedule"]
        }
      },
      solution: {
        title: "How OwlSeer Generates Scripts",
        desc: "We don't just use GPT wrappers. OwlSeer scripts are built from three proprietary data sources:",
        sources: [
          { title: "Your Engagement Signals", desc: "AI analyzes your hook rate and watch time to learn what works for YOUR audience." },
          { title: "Current Trend Data", desc: "Integrates rising sounds and hashtags directly from our Trend Radar." },
          { title: "Content Profile", desc: "Maintains your unique brand voice and niche consistency." }
        ],
        processing: {
          label: "Processing...",
          steps: [
             { label: "Analyzing hook retention...", status: "Complete" },
             { label: "Scanning trend velocity...", status: "Complete" },
             { label: "Generating scene structure...", status: "Processing" },
             { label: "Optimizing CTA...", status: "Pending" }
          ]
        }
      },
      tool: {
        title: "Tell us your niche, get a free hook",
        desc: "See how OwlSeer customizes the opening 3 seconds for your specific audience.",
        placeholder: "Select your niche",
        inputPlaceholder: "Enter a topic (e.g. 'morning routine')",
        generate: "Generate",
        resultLabel: "AI Generated Hook",
        fullScript: "Want the full script?",
        connect: "Connect Account"
      },
      workflow: {
        title: "The Script Workflow",
        desc: "From 2-4 hours to 15-30 minutes per week.",
        steps: [
          { day: "Mon", title: "Review & Plan", desc: "Check weekly report, pick topics from Smart Recs." },
          { day: "Tue", title: "Generate Scripts", desc: "Create 3-5 scripts in < 5 mins using Script Studio." },
          { day: "Wed-Fri", title: "Film & Post", desc: "Shoot using the scene-by-scene breakdown." },
          { day: "Sun", title: "Schedule", desc: "Auto-schedule for next week." }
        ]
      },
      footer: {
        noteTitle: "Transparency Note",
        note: "Scripts are starting points, not final products. Creators should review and personalize each script to match their voice, filming setup, and brand. Script performance depends on execution quality and external factors. New accounts may receive more template-driven scripts initially until sufficient data is collected.",
        title: "Write Your First Script in",
        titleHighlight: "60 Seconds",
        cta: "Start Free Trial",
        howItWorks: "See How It Works"
      }
    },
    contentCreators: {
      hero: {
        title: "Data-Driven TikTok Growth: The AI Engine Behind Viral Creators",
        lead: "Stop guessing. Leverage 10M+ viral data points to generate scripts, predict trends, and automate engagement. The only tool that optimizes your hook rate and retention using deep learning.",
        primaryCta: "Start Free Trial",
        secondaryCta: "See the Demo"
      },
      tldr: "OwlSeer helps individual TikTok creators grow by replacing guesswork with data. Every week you receive trend alerts matched to your niche, content recommendations based on your engagement signals, ready-to-shoot scripts, and a personalized posting schedule. Your Content Supply Rhythm is tracked so you maintain the consistency that the algorithm rewards.",
      painPoints: {
        title: "Sound Familiar?",
        subtitle: "Recognize the three pain points that slow down solo creators.",
        cards: [
          { 
            title: "I never know what to post next.", 
            desc: "You sit down to create and draw a blank. Topics feel stale. You end up scrolling for inspiration, which eats into production time.",
            solutionTitle: "Weekly Recommendations",
            solutionDesc: "Every Monday, get 5-10 topic suggestions based on your audience preferences and trending content."
          },
          { 
            title: "I always miss the trends.", 
            desc: "By the time you notice a trend, hundreds of creators have already posted. Your version gets buried.",
            solutionTitle: "Trend Alerts",
            solutionDesc: "Trend Radar scans your niche continuously and alerts you to rising trends before they peak."
          },
          { 
            title: "I cannot stay consistent.", 
            desc: "You post 4 times one week, then disappear for 10 days. The cycle of inconsistency reduces your reach and motivation.",
            solutionTitle: "Optimal Schedule",
            solutionDesc: "We track your rhythm and recommend a posting cadence that maintains consistency."
          }
        ]
      },
      solution: {
        title: "How OwlSeer Solves This",
        action: "See all capabilities on sample data",
        items: [
          { title: "Weekly Content Recommendations", desc: "Every Monday, generate 5-10 topic suggestions with confidence scores and reasoning." },
          { title: "Trend Alerts Before They Peak", desc: "Trend Radar scans your niche continuously and alerts you to rising trends with velocity scores." },
          { title: "Ready-to-Shoot Scripts", desc: "Generate a complete script in under 60 seconds. Hook, body, CTA, sounds, and hashtags." },
          { title: "Optimal Posting Schedule", desc: "We recommend a posting cadence that maintains consistency and show when your audience is active." }
        ]
      },
      results: {
        title: "What Creators Are Seeing",
        disclaimer: "These outcomes vary by creator. Results depend on niche, starting point, content execution quality, and how consistently creators implement recommendations.",
        stats: [
          { value: 5, suffix: "x", label: "Consistency Improvement", subLabel: "From sporadic to weekly cadence" },
          { value: 40, suffix: "%", label: "Engagement Improvement", subLabel: "Better hooks & timing" },
          { value: 5, suffix: "+", label: "Hours Saved Weekly", subLabel: "Less planning, more creating" }
        ]
      },
      features: {
        title: "Everything You Get",
        items: [
          "Weekly content recommendations with confidence scores",
          "Trend alerts matched to your niche",
          "AI script generation (under 60 seconds)",
          "Personalized posting schedule",
          "Weekly Intelligence Report",
          "Content diagnosis with issue detection",
          "AI Copilot for strategy questions",
          "Content Library with performance analysis"
        ]
      },
      boundary: {
        note: "Data we use: Your public TikTok account metrics. What we do not do: OwlSeer does not post on your behalf, buy followers, or manipulate engagement. Growth comes from better strategy, not artificial inflation."
      },
      cta: {
        title: "Ready to Stop Guessing?",
        subtitle: "Join 10,000+ creators who use data-driven strategy. Free trial, no credit card required.",
        primary: "Start Free Trial",
        secondary: "See the Demo"
      },
      miniTool: {
        title: "See what OwlSeer would recommend for YOUR next post.",
        subtitle: "Enter your TikTok username to get a personalized lite preview.",
        placeholder: "username",
        button: {
          default: "Show My Recommendation",
          loading: "Analyzing..."
        },
        result: {
          trend: "Trend Match",
          relevance: "Relevance Score",
          topic: "Topic Suggestion",
          time: "Best Posting Time",
          disclaimer: "This is 1 of 5-10 weekly recommendations in your full plan.",
          cta: "Get My Full Weekly Plan"
        },
        mock: {
          trend: "POV: You realize...",
          topic: "Behind the scenes of my setup",
          time: "Tomorrow at 6:30 PM"
        }
      }
    },
    localBusiness: {
        hero: {
          badge: "For Local Businesses",
          title: "AI-Driven TikTok Marketing for Local Business: Turn Views into Foot Traffic",
          lead: "OwlSeer automates local growth. We analyze 30+ signals to match your business with hyper-local trends, generate service-focused scripts, and target your community when they are most active. Stop posting for likes; start posting for leads.",
          primary: "Start Free Trial",
          secondary: "See the Demo"
        },
        tldr: "Local businesses do not need millions of views. They need the right 5,000 people — the ones who live within driving distance and want what you offer. OwlSeer tracks the signals that matter for local: profile visit rate, save rate, and geographic spread. AI Goals track the metrics that turn views into foot traffic.",
        painPoints: {
          title: "Sound Familiar?",
          items: [
            {
              title: "I do not know what to post about my business.",
              desc: "You own a salon, a restaurant, or a gym — not a media company. Coming up with content ideas every week feels like a second job."
            },
            {
              title: "My content feels like an ad, not a TikTok.",
              desc: "You know TikTok rewards authentic content. But when you try to promote your business, it comes out looking like a commercial."
            },
            {
              title: "I get views but not customers.",
              desc: "Your video got 50K views, but nobody walked through the door. Views from across the country do not help a local pizza shop."
            }
          ]
        },
        solution: {
          title: "How Local Businesses Use OwlSeer",
          items: [
            {
              title: "Local Trend Matching",
              desc: "Trend Radar scans TikTok for trends that work in local business content — restaurant reviews, salon transformations, gym challenges. Match scores factor in your business type.",
              icon: "Trend"
            },
            {
              title: "Service-Focused Scripts",
              desc: "Script Studio generates scripts designed for local formats — behind-the-scenes tours, customer reaction videos, and seasonal promotion hooks.",
              icon: "Script"
            },
            {
              title: "Local Audience Scheduling",
              desc: "Your customers are not online at the same times as a national audience. Best-time badges ensure you post when your community is scrolling.",
              icon: "Schedule"
            },
            {
              title: "Foot Traffic Goals",
              desc: "AI Goals let you set objectives that match a local business: \"Increase profile visits by 50%\" or \"Get 10 DM inquiries per week.\"",
              icon: "Goal"
            }
          ]
        },
        results: {
          title: "What Local Business Owners Are Seeing",
          stats: [
            { value: "3x", label: "More content output", desc: "AI scripts eliminate the \"what do I post?\" bottleneck" },
            { value: "65%", label: "More profile visits", desc: "Better hooks drive more people to your profile" },
            { value: "2x", label: "Increase in DMs", desc: "Service-focused CTAs convert viewers into leads" }
          ]
        },
        formats: {
          title: "Content Formats That Work for Local",
          items: [
            { title: "Behind-the-Scenes", desc: "Show what happens in the kitchen or studio." },
            { title: "Customer Reactions", desc: "Real reactions from happy customers." },
            { title: "Before/After", desc: "Visual transformations earn saves." },
            { title: "Day in the Life", desc: "Humanizes the brand and triggers local pride." },
            { title: "Seasonal / Event", desc: "Tie content to local events and holidays." },
            { title: "Virtual Tours", desc: "Walk viewers through your space." }
          ]
        },
        calculator: {
          title: "How many extra customers can TikTok bring?",
          followers: "Current TikTok Followers",
          aov: "Average Order Value ($)",
          result: {
            customers: "Est. Monthly Walk-ins",
            revenue: "Est. Monthly Revenue"
          },
          cta: "Start Bringing Customers In"
        },
        boundary: {
          note: "Data we use: Your TikTok account metrics (profile visit rate, save rate, geographic spread). What we do not do: OwlSeer does not guarantee foot traffic or sales. We do not track in-store visits directly."
        },
        cta: {
          title: "Ready to Bring Customers Through Your Door?",
          subtitle: "Your next regular might be scrolling TikTok right now. Connect your account and start reaching your local audience.",
          primary: "Start Free Trial",
          secondary: "See the Demo"
        }
      },
    compareVidIQ: {
        hero: {
          title: "OwlSeer vs VidIQ: Which TikTok Tool Fits Your Workflow?",
          lead: "VidIQ started on YouTube and expanded to TikTok. OwlSeer was built for TikTok from day one. This comparison covers features, strengths, and the right use case for each tool."
        },
        tldr: "Choose OwlSeer if TikTok is your primary platform and you want TikTok-native signal analysis, trend prediction, and script generation. Choose VidIQ if you prioritize YouTube with TikTok as a secondary channel. Both tools serve creators — the difference is platform depth.",
        table: {
          title: "Feature-by-Feature Comparison",
          rows: [
            { feature: "Primary platform", owlseer: "TikTok (exclusive)", vidiq: "YouTube (primary), TikTok (secondary)" },
            { feature: "TikTok signal depth", owlseer: "30+ weighted signals", vidiq: "Basic TikTok metrics" },
            { feature: "Trend prediction", owlseer: "AI-powered with velocity", vidiq: "Trending topics list" },
            { feature: "Script generation", owlseer: "Data-driven hook-body-CTA", vidiq: "No native script generation" },
            { feature: "Posting schedule", owlseer: "Personalized best-time heatmap", vidiq: "Generic best-time suggestions" },
            { feature: "Content diagnosis", owlseer: "Issue detection with fixes", vidiq: "Performance overview" },
            { feature: "AI copilot", owlseer: "Conversational assistant", vidiq: "No conversational AI" },
            { feature: "Weekly report", owlseer: "Automated with KPI tracking", vidiq: "No automated weekly report" },
            { feature: "Brand safety", owlseer: "0-100 risk scale", vidiq: "No brand safety scoring" }
          ]
        },
        chooseOwlSeer: {
          title: "Choose OwlSeer If...",
          items: [
            "TikTok is your primary or only platform",
            "You want 30+ signal depth beyond basic metrics",
            "You need AI-generated scripts personalized to your audience",
            "Trend timing and velocity matter to your strategy",
            "You want automated weekly reports with KPI tracking",
            "You prefer a conversational AI copilot"
          ]
        },
        chooseVidIQ: {
          title: "Choose VidIQ If...",
          items: [
            "YouTube is your primary platform",
            "You need YouTube-specific features (SEO, keywords)",
            "TikTok is a secondary channel and basic metrics suffice",
            "You already use VidIQ for YouTube"
          ]
        },
        platformFocus: {
          title: "Why Platform Focus Matters",
          p1: "YouTube and TikTok reward different behaviors. YouTube is search-driven — titles, descriptions, and thumbnails determine discovery. TikTok is algorithm-driven — hook rate, watch-through, and trend alignment determine distribution.",
          p2: "A tool built for YouTube optimizes for search intent. A tool built for TikTok optimizes for signal patterns. Using a YouTube-first tool for TikTok strategy is like using a road map for ocean navigation — you can try, but the terrain is different.",
          highlight: "OwlSeer tracks TikTok-specific metrics (AER, hook rate, save rate) that YouTube-first tools do not model."
        },
        boundary: {
          transparency: "Feature comparisons are based on publicly available product information as of February 2026.",
          note: "This comparison is not a paid review. We built it to help creators make informed decisions."
        },
        cta: {
          title: "Ready to Try TikTok-Native Strategy?",
          subtitle: "See how OwlSeer works on sample data. Or start your free trial.",
          primary: "Start Free Trial",
          secondary: "Explore Demo"
        }
      }
    },
  zh: {
    product: '产品',
    pricing: '价格',
    resources: '资源',
    methodology: '方法论',
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
    howItWorksPage: {
      hero: {
        title: "三步拥有你的 TikTok 策略",
        titleHighlight: "",
        lead: "OwlSeer 连接你的 TikTok 账号，通过 30+ 信号分析你的数据，并在三分钟内提供个性化的内容策略。以下是你可以期待的具体流程。",
        cta: "免费试用演示",
        video: "观看 1 分钟概览"
      },
      step1: {
        title: "第一步：连接你的 TikTok 账号",
        desc: "你通过 TikTok 的官方登录流程连接账号。OwlSeer 不会要求你的密码——你直接通过 TikTok 进行身份验证，我们获得一个只读访问令牌。整个连接过程不到 30 秒。",
        readOnlyTitle: "\"只读\"意味着：",
        readOnlyList: [
          "OwlSeer 可以查看你的公开视频指标、发布历史和受众互动数据",
          "OwlSeer 不能在你的账号上发布、编辑、删除或修改任何内容",
          "OwlSeer 不能访问你的私信、草稿或支付信息",
          "你可以随时在 TikTok 账号设置中撤销访问权限"
        ],
        securityNote: "连接使用 TikTok 为所有授权第三方工具提供的同一官方 API。有关数据处理的完整细节，请参阅数据安全实践。",
        action: "了解更多安全措施——阅读数据安全页面。"
      },
      step2: {
        title: "第二步：AI 分析你的数据",
        desc: "连接后，OwlSeer 的 AI 通过我们的五步方法论处理你的账号数据。分析涵盖三个信号类别：",
        signals: [
          { title: "互动信号", desc: "12 个因素，包括钩子率、完播率、分享率和评论情感——衡量受众如何与你的内容互动" },
          { title: "趋势信号", desc: "10 个因素，包括音频传播速度、标签动量和趋势饱和度——识别你利基中正在获得热度的内容" },
          { title: "受众信号", desc: "8+ 个因素，包括粉丝增长速度、活跃时段映射和受众重叠度——描绘谁在观看以及何时观看" }
        ],
        process: "AI 将你的信号画像与数百万已分析 TikTok 视频的模式进行比对，识别你的内容优势、增长机会和最佳发布策略。完整分析在三分钟内完成。",
        action: "深入了解技术流程——阅读完整方法论。"
      },
      step3: {
        title: "第三步：获取你的个性化策略",
        desc: "分析完成后，你进入个性化仪表盘，拥有规划、创作和优化 TikTok 内容所需的一切：",
        outputs: [
          { title: "趋势提醒", desc: "你利基中的新兴趋势，附带最佳参与时机和置信度分数。" },
          { title: "内容建议", desc: "每周主题、格式和钩子建议，根据受众当前偏好量身定制" },
          { title: "发布时间表", desc: "基于受众活跃时段的 AI 推荐发布时间" },
          { title: "表现诊断", desc: "近期视频的分解——哪些有效、哪些没有、以及原因" },
          { title: "可直接拍摄的脚本", desc: "完整视频脚本，包含钩子、正文、CTA 和推荐音频/标签。" },
          { title: "AI 副驾驶", desc: "用自然语言提问你的策略问题。副驾驶利用你的账号数据提供个性化答案。" }
        ],
        note: "你的策略每七天更新一次。你还会收到一份每周智能报告，总结你的表现、关键洞察和推荐的下一步行动。",
        action: "在示例数据上查看完整策略输出——探索互动演示。"
      },
      whatYouGet: {
        title: "你将获得什么",
        items: [
          { title: "趋势预测", desc: "与你利基匹配的新兴趋势，附带时间窗口和置信度分数" },
          { title: "内容诊断", desc: "逐条视频分析，展示内容为何成功或表现不佳" },
          { title: "AI 脚本", desc: "可直接拍摄的脚本，含钩子、正文、CTA 和音频/标签建议" },
          { title: "每周报告", desc: "表现摘要，含 KPI 追踪、洞察和下周行动计划" }
        ]
      },
      roi: {
        title: "算算你每周能省多少时间",
        desc: "回答 3 个问题，看看 OwlSeer 能把你的内容规划时间压缩多少。",
        q1: "你每周花多少时间研究发什么内容？",
        q2: "你每周花多少时间追踪趋势？",
        q3: "你每周花多少时间写脚本？",
        result: {
          current: "你的现状：每周 {{total}} 小时用于内容规划",
          saved: "使用 OwlSeer 后：预计 {{saved}} 小时/周可释放",
          monthly: "每月节省：约 {{monthly}} 小时",
          value: "月度时间价值 ${{value}} (按 $50/小时)",
          cta: "开始节省时间 — 免费试用"
        }
      },
      deeper: {
        title: "想深入了解吗？",
        desc: "OwlSeer 的 AI 遵循透明的五步流程。如果你想了解技术细节——信号如何加权、模式如何识别、脚本如何生成——请探索我们的完整方法论。有关我们追踪的每个信号的定义，请访问信号页面。"
      },
      boundary: {
        dataUse: "我们使用的数据: 通过官方 API 访问的公开 TikTok 账号指标。OwlSeer 接收只读访问令牌——我们可以查看你的指标但无法修改你的账号。",
        limitations: "我们不做的事: OwlSeer 不会发布、编辑或删除内容。我们不访问私信、草稿或支付数据。我们不保证特定增长结果。",
        note: "波动性说明: 分析准确性和建议质量取决于账号历史、发布频率和利基。发布视频少于 10 条的新账号可能收到精确度较低的初始建议。"
      },
      cta: {
        title: "准备好了吗？",
        desc: "连接你的 TikTok 账号，三分钟内获取个性化策略。免费试用，无需信用卡。或先探索示例数据。",
        primary: "开始免费试用",
        secondary: "探索互动演示"
      }
    },
    contentDiagnosisPage: {
      hero: {
        title: "找出你的 TikTok 内容",
        titleHighlight: "表现不佳的原因",
        lead: "OwlSeer 通过 12 个互动信号分析每条视频，精确展示你在哪里获得或失去了受众——以及该怎么做。"
      },
      tldr: {
        text: "低播放量是有原因的。OwlSeer 的智能模块通过分析包括钩子率、完播率、分享率和评论情感在内的 12 个互动信号来诊断内容问题。每个问题都会显示严重程度、解释和具体的推荐修复方案。内容诊断将模糊的挫败感转化为可操作的改进。",
        link1: "智能模块",
        link2: "12 个互动信号",
        link3: "问题被浮现"
      },
      problem: {
        title: "猜测循环",
        task: "了解为什么创作者会重复同样的内容错误。",
        desc1: "当视频表现不佳时，大多数创作者默认会猜测：“也许话题不对”或“也许我在错误的时间发布了”。没有数据，他们随机改变变量——有时修复了错误的变量，有时让事情变得更糟。",
        desc2: "模式是这样的：发布视频，看到低播放量，改变某些东西，再次发布，看到不一致的结果，改变其他东西。这种猜测循环浪费了内容制作精力并侵蚀信心。",
        desc3: "根本原因通常是具体且可修复的。它可能是一个弱钩子（观众在最初 2 秒内滑过），一个冗长的介绍（完播率在 8 秒标记处下降），或糟糕的时机（在受众睡觉时发布）。但如果没有信号级诊断，你无法区分这些原因。",
        action: "了解涉及的信号——阅读关于互动信号。"
      },
      solution: {
        title: "OwlSeer 如何诊断内容",
        task: "查看从检测到修复的诊断工作流程。",
        layer1: {
          title: "第一层 — 问题检测",
          desc: "“发现问题”面板扫描你最近的视频并用严重程度徽章（高或中）标记问题。示例：“弱钩子表现”（高）——“你的视频开头使用了缓慢的介绍。观众在看到你的内容之前就滑走了。”"
        },
        layer2: {
          title: "第二层 — 信号分解",
          desc: "对于每个问题，OwlSeer 会显示涉及哪些信号。弱钩子问题链接到你的钩子率数据，并附带具体数字——你当前的比率、你的利基平均值以及你最近 10 个视频的趋势。"
        },
        layer3: {
          title: "第三层 — 推荐修复",
          desc: "每个问题都包含一个具体的、可操作的修复方案。不是“改进你的钩子”，而是“尝试‘产品优先’钩子——在第一秒展示最终结果以吸引注意力。”修复方案来自在你利基中有效的模式。"
        },
        structure: "内容结构分析增加了另一个维度：它揭示了哪种视频格式（三段式、两段式、单段式）对你的账号表现最好，这样你就可以将未来的内容与你最强的结构保持一致。",
        action: "在示例数据上查看诊断——打开智能演示。"
      },
      evidence: {
        title: "诊断长什么样",
        task: "查看来自真实账号的具体诊断输出。",
        intro: "来自示例账号：",
        issue1: {
          title: "弱钩子表现",
          severity: "高",
          why: "为什么这很重要：“你的视频开头使用了像‘大家好，今天我要给你们展示……’这样缓慢的介绍。观众在看到你的内容之前就滑走了。”",
          fix: "推荐修复：“尝试‘产品优先’钩子——在第一秒展示完成的菜肴以吸引注意力。”"
        },
        issue2: {
          title: "次优发布时间",
          severity: "中",
          why: "为什么这很重要：“你一直在这个时间发布，而你的受众活跃高峰期在 5-7 PM。”",
          fix: "推荐修复：“将发布时间转移到 5-6 PM 窗口。查看你的最佳时间热力图以获取特定日期的建议。”"
        },
        supporting: "支持数据：内容结构分析显示三段式视频的平均互动率为 5.8%，而单段式为 4.1%——这是一个输入到脚本建议中的结构性洞察。",
        action: "查看完整的诊断视图——探索仪表盘。"
      },
      conversion: {
        title: "即刻检查你的信号",
        desc: "粘贴 TikTok 视频链接，免费获取 3 个信号的检查。",
        placeholder: "粘贴 TikTok 视频链接...",
        button: "诊断我的内容",
        note: "免费 3 信号检查。完整 12 信号诊断需连接账号。",
        resultTitle: "诊断预览",
        signals: {
          hook: "钩子率",
          pacing: "节奏评分",
          structure: "结构"
        },
        cta: "连接账号以获取完整诊断"
      },
      boundary: {
        title: "边界框",
        dataUse: "我们使用的数据：诊断利用你的视频表现指标、12 个互动信号、发布历史和受众行为数据——所有这些都通过 TikTok API 访问。",
        limitations: "我们不做的事：诊断识别模式并建议修复方案，但不保证实施修复方案会产生具体结果。内容表现受信号数据以外的因素影响，包括视频制作质量、算法变化和受众情绪。",
        note: "变异性说明：诊断准确性随着数据的增加而提高。发布少于 10 个视频的账号可能会收到不太具体的诊断。显示的所有示例均来自示例账号。"
      },
      cta: {
        title: "诊断你的内容",
        desc: "连接你的账号，找出确切需要修复的地方。",
        primary: "开始免费试用",
        secondary: "尝试智能演示"
      }
    },
    footer: {
      tagline: "创作者的 AI TikTok 策略引擎。\n停止猜测，开始增长。",
      product: "产品",
      resources: "资源",
      legal: "法律",
      rights: "© 2026 OwlSeer. 保留所有权利。"
    },
    signalsPage: {
      ctaButton: "优化此指标",
      hero: {
        title: "解密 TikTok 算法：30+ 个 AI 核心信号助你打造爆款",
        lead: "OwlSeer 超越了点赞和播放量等虚荣指标。我们深入分析 30+ 个加权信号——从完播率到趋势速度——为您逆向解析算法，生成个性化增长策略。这里详细解读了我们要追踪的每一个数据点及其背后的增长逻辑。"
      },
      tldr: {
        content: "我们不仅关注**12 个互动信号**（如完播率、分享率），还追踪**10 个趋势信号**（如音频爆发点、蓝海标签）和**8+ 个受众信号**（如铁粉粘性、活跃时区）。这些信号构成了你的**账号 DNA**。想要了解我们如何将这些数据转化为爆款策略？请查看我们的 [核心方法论](/methodology)。"
      },
      quickNav: {
        engagement: "互动质量 (12)",
        trends: "趋势红利 (10)",
        audience: "受众画像 (8+)"
      },
      sections: {
        engagement: {
          title: "互动质量 —— 撬动算法的杠杆",
          task: "理解算法如何通过用户行为来评判你的内容价值。",
          desc: "互动不仅仅是点赞。算法更看重那些代表“深度兴趣”的信号。从黄金 3 秒的留存，到引发分享的冲动，每一个微小的用户行为都是算法是否给你推流的依据。OwlSeer 根据这些信号的权重，精准诊断你的内容短板。",
          linkText: "AER 诊断卡",
          linkUrl: "/sample-explorer/dashboard#aer-card",
          actionLine: "查看真实账号的互动诊断 —— [体验 AER 仪表盘演示](/sample-explorer/dashboard#aer-card)。",
          signals: [
            { name: "黄金 3 秒留存 (Hook Rate)", id: "hook-rate", def: "有多少观众坚持看过了前 3 秒。", why: "这是视频的生死线。TikTok 算法极度看重开头。如果开头没留住人，内容再好也无法进入更大的流量池。", how: "我们分析你历史上最成功的开场模式，并结合你所在领域的爆款案例，为你定制“抓人”的开头脚本。" },
            { name: "完播率 (Completion Rate)", id: "watch-through-rate", def: "观众看完整条视频的比例。", why: "完播是内容质量的硬指标。高完播率告诉算法：这条视频值得被更多人看到。它也是判断视频时长是否合理的关键。", how: "我们通过分析数据，找到你账号的最佳视频时长区间，并建议在哪里设置“高潮点”以防止观众流失。" },
            { name: "分享率 (Share Rate)", id: "share-rate", def: "平均每 100 次观看产生的分享次数。", why: "分享意味着“破圈”。这是最强的病毒传播信号，因为它能把你的内容带给非粉丝群体，触发裂变式传播。", how: "我们识别你所在领域容易被转发的内容特征（如实用干货、情感共鸣），并提供专门设计的“分享诱导”话术。" },
            { name: "评论区情感值 (Sentiment)", id: "comment-sentiment", def: "AI 识别评论区的讨论氛围和深度。", why: "有争议或高互动的评论区能显著增加视频的停留时间。算法喜欢能引发讨论的内容，哪怕是激烈的辩论。", how: "我们教你在视频中埋下“讨论点”，引导良性互动，把评论区变成流量的助推器。" },
            { name: "收藏率 (Save Rate)", id: "save-rate", def: "用户收藏视频的比例。", why: "收藏代表“高价值”。用户收藏是因为觉得内容有用、值得回看。这类内容通常生命周期更长，长尾流量更足。", how: "我们帮你策划“干货型”或“教科书级”内容，让用户忍不住点击收藏，以此提升账号的权重。" },
            { name: "回复互动率 (Reply Rate)", id: "reply-rate", def: "你与评论区互动的频率。", why: "宠粉不仅能增加粘性，还能带来二次曝光。积极回复评论能激活老粉丝，让视频热度持续更久。", how: "我们提供高效的评论回复策略，帮你用最少的时间维持最高的社区活跃度。" },
            { name: "二创潜力 (Stitch/Duet)", id: "stitch-duet-rate", def: "被合拍或抢镜的频率。", why: "被二创意味着你的内容具有“模版属性”或“话题性”。这是一种借力打力的高级玩法，能低成本获取巨大流量。", how: "我们设计易于模仿或互动的脚本结构，鼓励粉丝和同行对你的视频进行二次创作。" },
            { name: "主页转化率 (Profile Visit)", id: "profile-visit-rate", def: "看了视频后点进主页的人数比例。", why: "这代表观众对“你这个人”感兴趣，而不仅仅是视频。这是从“爆款视频”到“大网红”的关键跨越。", how: "我们优化你的主页装修和视频结尾引导（CTA），最大化“路人”转“访客”的概率。" },
            { name: "路转粉率 (Follow Conversion)", id: "follow-through-rate", def: "单条视频带来的新增粉丝数。", why: "涨粉才是硬道理。这个指标直接衡量了你的内容吸粉能力，是变现的基础。", how: "我们分析哪类视频最吸粉，并建议你在视频的什么位置、用什么话术来请求关注。" },
            { name: "复看率 (Rewatch Rate)", id: "rewatch-rate", def: "视频被重复播放的次数。", why: "一遍不过瘾？这说明内容信息量大或极其有趣。高复看率会极大地拉高平均播放时长，这是算法的最爱。", how: "我们教你制作“细节满满”或“反转惊人”的视频，让观众忍不住再看亿遍。" },
            { name: "BGM 契合度 (Sound Fit)", id: "sound-usage", def: "背景音乐对视频数据的贡献度。", why: "选对 BGM，流量翻倍。合适的音乐不仅能烘托氛围，还能蹭上音乐本身的热度。", how: "不仅仅是推荐热门音乐，我们更推荐“适合你视频节奏”的音乐，实现音画同步的极致体验。" },
            { name: "文案引导力 (Caption Impact)", id: "caption-engagement", def: "标题和文案带来的点击与互动。", why: "好的文案是第二战场。它能补充信息、引发好奇，甚至在视频本身一般的情况下挽救完播率。", how: "我们提供经过验证的“神文案”模版，包括悬念式、提问式和情绪式标题。" }
          ]
        },
        trends: {
          title: "趋势红利 —— 借势起飞的艺术",
          task: "不再盲目跟风，学会精准踩点。利用数据抓住红利期。",
          desc: "趋势就是流量的放大器。但时机就是一切：太早没人看，太晚汤都没了。OwlSeer 监控全网数据，帮你找到那个“刚刚好”的入场时机，让你的努力事半功倍。",
          linkText: "趋势雷达",
          linkUrl: "/sample-explorer/trend-radar",
          actionLine: "查看实时趋势数据 —— [探索趋势雷达演示](/sample-explorer/trend-radar)。",
          signals: [
            { name: "音频飙升榜 (Sound Velocity)", id: "sound-velocity", def: "BGM 使用量的增长速度。", why: "在 BGM 彻底火烂之前入场，能吃到最大的算法红利。我们预判哪些音乐即将在未来 3 天内爆发。", how: "当某个 BGM 在你所在领域开始起量但尚未饱和时，我们会第一时间向你发出信号。" },
            { name: "标签红利 (Hashtag Momentum)", id: "hashtag-momentum", def: "话题标签的热度上升曲线。", why: "用对标签，精准投喂。处于上升期的标签能带来大量精准的搜索流量和推荐流量。", how: "我们推荐那些竞争较小但热度正在飙升的“蓝海标签”，避开那些已经卷成红海的大词。" },
            { name: "跨平台外溢 (Format Migration)", id: "format-migration", def: "Instagram/YouTube 上的爆款向 TikTok 蔓延的趋势。", why: "火过的内容还会再火。其他平台的爆款往往会滞后几天传导到 TikTok，这就是你的“时间差”优势。", how: "我们监控全网平台，提前告诉你哪些外站梗即将席卷 TikTok。" },
            { name: "赛道风向标 (Niche Velocity)", id: "niche-trend-velocity", def: "你所在垂直领域的专属趋势。", why: "美妆圈的火和科技圈的火不一样。我们只关注对你有用的圈内趋势，避免无效跟风。", how: "为你定制垂直领域的趋势周报，让你做自己赛道的领跑者，而不是跟随者。" },
            { name: "大号风向 (Creator Adoption)", id: "creator-adoption-rate", def: "头部博主开始跟进某个趋势的速度。", why: "春江水暖鸭先知。头部博主的动向往往预示着趋势的爆发。跟着大号走，大概率不会错。", how: "我们追踪你对标账号的选题变化，让你第一时间通过模仿+微创新来分一杯羹。" },
            { name: "地域扩散 (Geo Spread)", id: "geographic-spread", def: "趋势在不同国家/地区的流行路线。", why: "如果你的目标是全球市场，了解趋势的“传播路线图”至关重要。", how: "识别那些在东南亚起势并即将蔓延到欧美的趋势，助你做全球化布局。" },
            { name: "官方扶持 (Platform Push)", id: "platform-promotion", def: "TikTok 官方近期主推的功能或话题。", why: "顺势而为，官方喂饭。使用官方正在推广的滤镜、贴纸或话题，往往能获得额外的流量加权。", how: "第一时间同步官方活动日历和扶持计划，让你轻松获得“官方 buff”。" },
            { name: "内卷指数 (Saturation)", id: "trend-saturation", def: "当前参与该趋势的拥挤程度。", why: "人多的地方不要去。当一个梗满大街都是时，再拍就是浪费时间。知道“什么时候离场”和“什么时候进场”一样重要。", how: "我们不仅告诉你什么火，还告诉你什么“已经过气了”，帮你节省宝贵的制作精力。" },
            { name: "生命周期预判 (Longevity)", id: "trend-longevity", def: "这个趋势还能火多久。", why: "有些梗是昙花一现，有些则是长青树。根据生命周期来决定投入多少制作成本，是聪明人的做法。", how: "区分“快消型趋势”和“长效型趋势”，指导你是该快速蹭热点，还是精心打磨内容。" },
            { name: "安全系数 (Brand Safety)", id: "brand-safety-score", def: "跟风是否有被限流或封号的风险。", why: "流量诚可贵，账号价更高。有些热点涉及敏感话题，盲目跟风可能导致限流甚至封号。", how: "每一个推荐的趋势都会附带风险评估，确保你在安全线内从容增长。" }
          ]
        },
        audience: {
          title: "受众画像 —— 读懂屏幕背后的人",
          task: "不要猜你的观众喜欢什么，看数据怎么说。",
          desc: "你的粉丝是谁？他们什么时候有空？他们还喜欢看什么？OwlSeer 把模糊的“粉丝”变成清晰的“画像”，让你的每一次发布都像是在对老朋友说话。",
          linkText: "情报中心",
          linkUrl: "/sample-explorer/intelligence",
          actionLine: "查看受众深度分析 —— [探索情报中心演示](/sample-explorer/intelligence)。",
          signals: [
            { name: "涨粉加速度 (Growth Velocity)", id: "follower-growth-velocity", def: "近期粉丝增长的速率变化。", why: "涨粉速度比总量更重要。它反映了你当前的内容策略是否“对路”。", how: "将你的涨粉曲线与发布记录对应，找出那条让你“一夜爆红”的视频，并复制它的成功。" },
            { name: "黄金发布时间 (Active Hours)", id: "active-hour-mapping", def: "你的粉丝最活跃的时间段。", why: "错的时间发对的内容=白发。在粉丝都在线的时候发布，能瞬间获得大量初始数据，助推视频进入更大的流量池。", how: "根据你粉丝的时区和习惯，精确到小时地告诉你：下周二下午 6 点发视频效果最好。" },
            { name: "受众重合度 (Audience Overlap)", id: "audience-overlap", def: "你的粉丝还关注了谁。", why: "他山之石，可以攻玉。了解粉丝喜欢的其他博主，能帮你拓展选题思路，甚至找到合作机会。", how: "分析粉丝关注列表中的高频重合账号，拆解他们的爆款逻辑为你所用。" },
            { name: "人群画像变迁 (Demo Shifts)", id: "demographic-shifts", def: "粉丝年龄、性别、地域的动态变化。", why: "账号在成长，受众也在变。如果不及时调整内容口吻，很容易造成老粉取关。", how: "敏锐捕捉受众构成的细微变化（比如男性比例增加），及时建议你调整内容风格。" },
            { name: "热度衰减率 (Engagement Decay)", id: "engagement-decay", def: "视频发布后热度下降的速度。", why: "是“昙花一现”还是“细水长流”？了解内容的长尾效应，有助于平衡“蹭热点”和“做沉淀”的比例。", how: "帮你规划内容矩阵：用短平快的内容冲流量，用长效内容做沉淀。" },
            { name: "观看路径 (User Journey)", id: "cross-video-journey", def: "看完这个视频后，他们去了哪？", why: "打造“沉浸式”体验。如果一个视频能让观众连着看你十个视频，你的账号权重会高得吓人。", how: "设计“连续剧”式的内容结构，让观众像追剧一样停不下来。" },
            { name: "铁粉粘性 (Loyalty Score)", id: "follower-loyalty-score", def: "老粉对新视频的互动比例。", why: "铁粉是你的基本盘。如果老粉都不看你的新视频，说明账号遇到危机了。", how: "区分“吸粉内容”和“固粉内容”，确保在追求增长的同时不伤老粉的心。" },
            { name: "新老占比 (New vs Returning)", id: "new-vs-returning", def: "陌生观众 vs 回头客的比例。", why: "太高说明留不住人，太低说明没流量。健康的账号需要维持一个动态平衡。", how: "监控流量结构，当你过于依赖老粉时，我们会建议你尝试破圈选题；当你流量虽大但留存低时，我们会建议你加强人设塑造。" }
          ]
        },
        howTogether: {
          title: "1+1 > 2：信号的化学反应",
          task: "单一数据会骗人，组合拳才是王道。",
          intro: "OwlSeer 的核心竞争力在于“交叉分析”。我们不会孤立地看某个指标，而是寻找它们之间的隐秘联系，从而给出更聪明的建议。例如：",
          examples: [
            { title: "Hook 率 + 音频趋势", desc: "当一个【正在飙升的 BGM】遇上你【最擅长的开场方式】，爆款概率将提升 300%。我们会自动为你匹配这种黄金组合。" },
            { title: "活跃时间 + 趋势窗口", desc: "就算梗再火，半夜发也没人看。我们帮你计算出【趋势热度】与【粉丝活跃度】的完美交汇点，实现错峰打击。" },
            { title: "分享率 + 评论情感", desc: "高分享+正向评论=神级内容。我们帮你找出历史视频中的这些“高光时刻”，提炼出可复制的模版，让你持续产出高质量内容。" }
          ],
          outro: "想深入了解这背后的 AI 算法？欢迎阅读我们的 [完整技术白皮书](/methodology)。"
        },
        boundary: {
          title: "我们如何确数据的准确性",
          data: "数据来源：我们只使用 TikTok 官方 API 提供的公开合规数据。本页展示的信号定义基于 OwlSeer 独家的分析模型。",
          notDo: "我们的底线：OwlSeer 绝不使用任何违规爬虫，也不猜测 TikTok 的黑盒算法权重。我们的建议基于海量数据的统计学规律，而非玄学。",
          variability: "免责声明：不同赛道、不同体量的账号，信号的表现力会有所不同。我们的 AI 会根据你的账号特性进行动态校准，但无法保证 100% 的预测准确率——毕竟，人心是不可预测的。"
        },
        cta: {
          title: "眼见为实，让数据说话",
          desc: "连接你的 TikTok 账号，3 分钟内获取一份长达 20 页的深度诊断报告。或者，先看看演示数据过过瘾。",
          primary: "免费生成我的诊断报告",
          secondary: "先看看演示数据"
        },
        contextualConversion: {
           title: "想知道你的“黄金 3 秒”合格吗？",
           desc: "连接 TikTok 账号，OwlSeer 立刻为你体检。3 分钟后，你将看到这 30+ 个信号在你账号上的具体数值，以及 3 个最紧迫的改进建议。",
           button: "立即开始免费体检",
           note: "安全无忧：官方接口只读权限，随时可解绑"
        }
      }
    },
    scriptGeneration: {
      hero: {
        badge: "新功能",
        title: "60 秒内从你的数据生成",
        titleHighlight: "TikTok 脚本",
        desc: "OwlSeer 为你的受众定制可直接拍摄的脚本——钩子、正文、CTA、音频和标签，全部来自你的互动信号。",
        cta: "开始免费试用",
        demo: "尝试演示"
      },
      problem: {
        title: "为什么脚本写作是瓶颈",
        desc: "TikTok 奖励一致性。但每周制作 3-5 个高质量脚本需要 2-4 小时的手动工作。",
        manual: {
          title: "手动流程",
          items: ["每周 2-4 小时", "通用、弱钩子", "猜测趋势", "发布不稳定"]
        },
        ai: {
          title: "OwlSeer AI",
          items: ["每周 15-30 分钟", "数据驱动钩子", "自动趋势整合", "稳定发布"]
        }
      },
      solution: {
        title: "OwlSeer 如何生成脚本",
        desc: "我们不仅仅使用 GPT 套壳。OwlSeer 脚本基于三个专有数据源构建：",
        sources: [
          { title: "你的互动信号", desc: "AI 分析你的钩子率和观看时间，了解什么对你的受众有效。" },
          { title: "当前趋势数据", desc: "直接从我们的趋势雷达整合上升的音频和标签。" },
          { title: "内容画像", desc: "保持你独特的品牌声音和利基一致性。" }
        ],
        processing: {
          label: "处理中...",
          steps: [
             { label: "分析钩子留存...", status: "完成" },
             { label: "扫描趋势速度...", status: "完成" },
             { label: "生成场景结构...", status: "处理中" },
             { label: "优化 CTA...", status: "等待中" }
          ]
        }
      },
      tool: {
        title: "告诉我们你的利基，免费获得一个钩子",
        desc: "看看 OwlSeer 如何为你的特定受众定制开场 3 秒。",
        placeholder: "选择你的利基",
        inputPlaceholder: "输入一个话题（例如‘早晨例程’）",
        generate: "生成",
        resultLabel: "AI 生成的钩子",
        fullScript: "想要完整脚本？",
        connect: "连接账号"
      },
      workflow: {
        title: "脚本工作流",
        desc: "从每周 2-4 小时缩减到 15-30 分钟。",
        steps: [
          { day: "周一", title: "回顾与计划", desc: "查看周报，从智能推荐中挑选话题。" },
          { day: "周二", title: "生成脚本", desc: "使用脚本工作室在 5 分钟内创建 3-5 个脚本。" },
          { day: "周三-周五", title: "拍摄与发布", desc: "使用分场景细分进行拍摄。" },
          { day: "周日", title: "安排", desc: "自动安排下周发布。" }
        ]
      },
      footer: {
        noteTitle: "透明度说明",
        note: "脚本是起点，不是最终产品。创作者应审查并个性化每个脚本，以匹配其声音、拍摄设置和品牌。脚本表现取决于执行质量和外部因素。新账号最初可能会收到更多基于模板的脚本，直到收集到足够的数据。",
        title: "在 60 秒内写出你的",
        titleHighlight: "第一个脚本",
        cta: "开始免费试用",
        howItWorks: "查看工作原理"
      }
    },
    contentCreators: {
      hero: {
        title: "数据驱动的 TikTok 增长引擎：打造病毒式爆款的 AI 秘密武器",
        lead: "告别盲目猜测。利用千万级病毒视频数据点，精准生成脚本、预测爆款趋势并自动化互动策略。这是全球唯一利用深度学习优化完播率与粉丝留存的智能增长工具。",
        primaryCta: "开始免费试用",
        secondaryCta: "观看演示"
      },
      tldr: "OwlSeer 通过数据取代猜测帮助个人创作者成长。每周你会收到匹配你利基的趋势提醒、基于互动信号的内容推荐、可直接拍摄的脚本，以及个性化的发布时间表。我们会追踪你的内容供应节奏，以保持算法奖励的一致性。",
      painPoints: {
        title: "听起来很熟悉？",
        subtitle: "这三个痛点正在拖慢个人创作者的脚步。",
        cards: [
          { 
            title: "我从不知道下一步发什么", 
            desc: "当你坐下来创作时大脑一片空白。主题感觉陈旧。你开始刷屏寻找灵感，这吞噬了制作时间。",
            solutionTitle: "每周内容推荐",
            solutionDesc: "每周一，根据你的受众偏好和趋势内容生成 5-10 个主题建议。"
          },
          { 
            title: "我总是错过趋势", 
            desc: "当你注意到一个趋势时，数百名创作者已经发布了。你的版本被淹没。你眼看着竞争对手乘风破浪。",
            solutionTitle: "趋势提醒",
            solutionDesc: "趋势雷达持续扫描你的利基，并在趋势达到顶峰前提醒你。"
          },
          { 
            title: "我无法保持一致", 
            desc: "你一周发 4 次，然后消失 10 天。不一致的循环减少了你的触达和动力。",
            solutionTitle: "最优时间表",
            solutionDesc: "我们追踪你的节奏并推荐一个保持一致性的发布频率。"
          }
        ]
      },
      solution: {
        title: "OwlSeer 如何解决",
        action: "查看样本数据上的所有功能",
        items: [
          { title: "每周内容推荐", desc: "每周一，生成 5-10 个带有信心评分和理由的主题建议。" },
          { title: "高峰前趋势提醒", desc: "趋势雷达持续扫描你的利基，并通过速度评分提醒你上升的趋势。" },
          { title: "可直接拍摄的脚本", desc: "在 60 秒内生成完整脚本。钩子、正文、CTA、音频和标签。" },
          { title: "最优发布时间表", desc: "我们推荐保持一致性的发布节奏，并显示你的受众何时活跃。" }
        ]
      },
      results: {
        title: "创作者看到的效果",
        disclaimer: "结果因创作者而异。效果取决于利基、起点、内容执行质量以及创作者实施建议的一致性。",
        stats: [
          { value: 5, suffix: "倍", label: "一致性提升", subLabel: "从零星发布到每周稳定" },
          { value: 40, suffix: "%", label: "互动提升", subLabel: "更好的钩子和时机" },
          { value: 5, suffix: "+", label: "每周节省小时", subLabel: "更少计划，更多创作" }
        ]
      },
      features: {
        title: "你获得的一切",
        items: [
          "带有信心评分的每周内容推荐",
          "匹配你利基的趋势提醒",
          "AI 脚本生成（60秒内）",
          "个性化发布时间表",
          "每周智能报告",
          "带有问题检测的内容诊断",
          "用于策略提问的 AI 副驾驶",
          "带有表现分析的内容库"
        ]
      },
      boundary: {
        note: "我们使用的数据：你的公开 TikTok 账号指标。我们不做的：OwlSeer 不会代你发布、买粉或操控互动。增长来自更好的策略，而非人为膨胀。"
      },
      cta: {
        title: "准备好停止猜测了吗？",
        subtitle: "加入 10,000+ 使用数据驱动策略的创作者。免费试用，无需信用卡。",
        primary: "开始免费试用",
        secondary: "观看演示"
      },
      miniTool: {
        title: "查看 OwlSeer 为你的下一条视频推荐什么。",
        subtitle: "输入你的 TikTok 用户名以获取个性化的精简预览。",
        placeholder: "用户名",
        button: {
          default: "显示我的推荐",
          loading: "分析中..."
        },
        result: {
          trend: "趋势匹配",
          relevance: "相关性评分",
          topic: "主题建议",
          time: "最佳发布时间",
          disclaimer: "这只是你完整计划中每周 5-10 条推荐中的 1 条。",
          cta: "获取我的完整周计划"
        },
        mock: {
          trend: "POV: 当你意识到...",
          topic: "我的工作台幕后花絮",
          time: "明天下午 6:30"
        }
      }
    },
    localBusiness: {
        hero: {
          badge: "专为本地商家设计",
          title: "实体店 AI 拓客引擎：将 TikTok 流量转化为进店客流",
          lead: "OwlSeer 专为本地商家打造。利用 AI 分析 30+ 维度信号，为您匹配周边热门趋势，自动生成高转化脚本，并锁定社区活跃黄金时段。告别无效曝光，让每一条视频都成为您的 24 小时金牌销售。",
          primary: "开始免费试用",
          secondary: "体验演示"
        },
        tldr: "本地商家不需要数百万的浏览量。你需要的是正确的 5,000 人——那些住在驾车距离内并需要你服务的人。OwlSeer 追踪对本地重要的信号：主页访问率、收藏率和地理传播。AI Goals 追踪将浏览转化为客流的指标。",
        painPoints: {
          title: "听起来很熟悉？",
          items: [
            {
              title: "不知道发什么",
              desc: "你是开餐厅、沙龙或健身房的，不是媒体公司。每周想内容创意感觉像第二份工作。"
            },
            {
              title: "内容像广告不像 TikTok",
              desc: "你知道 TikTok 奖励真实内容。但当你试图推广业务时，结果看起来像个商业广告。"
            },
            {
              title: "有播放量但没客人来",
              desc: "你的视频有 5 万播放，但没人进店。来自全国的浏览量对本地披萨店没有帮助。"
            }
          ]
        },
        solution: {
          title: "本地商家如何使用 OwlSeer",
          items: [
            {
              title: "本地趋势匹配",
              desc: "Trend Radar 扫描适合本地商家的趋势——餐厅评论、沙龙改造、健身挑战。匹配分数考虑你的商业类型。",
              icon: "Trend"
            },
            {
              title: "服务型脚本",
              desc: "Script Studio 生成专为本地格式设计的脚本——幕后花絮、顾客反应视频和季节性促销钩子。",
              icon: "Script"
            },
            {
              title: "本地受众排期",
              desc: "你的客户与全国受众的在线时间不同。最佳时间徽章确保你在社区滚动浏览时发布。",
              icon: "Schedule"
            },
            {
              title: "到店目标追踪",
              desc: "AI Goals 让你设定符合本地商家的目标：“本月主页访问增加 50%”或“每周获得 10 个私信询盘”。",
              icon: "Goal"
            }
          ]
        },
        results: {
          title: "本地商家看到的效果",
          stats: [
            { value: "3x", label: "更多内容产出", desc: "AI 脚本消除了“发什么”的瓶颈" },
            { value: "65%", label: "更多主页访问", desc: "更好的钩子吸引更多人访问你的主页" },
            { value: "2x", label: "私信询盘增加", desc: "服务型 CTA 将观众转化为线索" }
          ]
        },
        formats: {
          title: "适合本地的内容格式",
          items: [
            { title: "幕后花絮", desc: "展示厨房或工作室里发生的事情。" },
            { title: "顾客反应", desc: "来自快乐顾客的真实反应。" },
            { title: "前后对比", desc: "视觉变化赢得收藏。" },
            { title: "一天的生活", desc: "人性化品牌并激发本地自豪感。" },
            { title: "季节/活动", desc: "将内容与本地活动和节日联系起来。" },
            { title: "虚拟导览", desc: "带观众参观你的空间。" }
          ]
        },
        calculator: {
          title: "TikTok 能带来多少额外客人？",
          followers: "当前 TikTok 粉丝数",
          aov: "平均客单价 ($)",
          result: {
            customers: "预估月度到店客人",
            revenue: "预估月度额外收入"
          },
          cta: "开始带客人进门"
        },
        boundary: {
          note: "我们使用的数据：你的 TikTok 账号指标（主页访问率、收藏率、地理传播）。我们不做的：OwlSeer 不保证客流或销售。我们不直接追踪进店访问。"
        },
        cta: {
          title: "准备好带客人进门了吗？",
          subtitle: "你的下一个常客可能正在刷 TikTok。连接你的账号，开始用数据驱动的内容触达本地受众。",
          primary: "开始免费试用",
          secondary: "体验演示"
        }
      },
    compareVidIQ: {
        hero: {
          title: "OwlSeer vs VidIQ：哪个 TikTok 工具适合你的工作流？",
          lead: "VidIQ 从 YouTube 起步后扩展到 TikTok。OwlSeer 从第一天起就专为 TikTok 构建。差异在于平台深度。"
        },
        tldr: "如果 TikTok 是你的主平台，你需要 30+ 信号深度、AI 脚本、趋势预测，请选择 OwlSeer。如果 YouTube 是你的主平台，TikTok 是次要渠道，请选择 VidIQ。",
        table: {
          title: "功能详细对比",
          rows: [
            { feature: "主要平台", owlseer: "TikTok (专注)", vidiq: "YouTube (主要), TikTok (次要)" },
            { feature: "TikTok 信号深度", owlseer: "30+ 加权信号", vidiq: "基础 TikTok 指标" },
            { feature: "趋势预测", owlseer: "AI 驱动 + 速度评分", vidiq: "热门话题列表" },
            { feature: "脚本生成", owlseer: "数据驱动 Hook-Body-CTA", vidiq: "无原生脚本生成" },
            { feature: "发布时间表", owlseer: "个性化最佳时间热力图", vidiq: "通用最佳时间建议" },
            { feature: "内容诊断", owlseer: "问题检测与修复建议", vidiq: "表现概览" },
            { feature: "AI 副驾驶", owlseer: "对话式助手", vidiq: "无对话式 AI" },
            { feature: "周报", owlseer: "自动化 KPI 追踪", vidiq: "无自动化周报" },
            { feature: "品牌安全", owlseer: "0-100 风险评分", vidiq: "无品牌安全评分" }
          ]
        },
        chooseOwlSeer: {
          title: "选择 OwlSeer 如果...",
          items: [
            "TikTok 是你的主要或唯一平台",
            "你需要超越基础指标的 30+ 信号深度",
            "你需要针对受众个性化的 AI 脚本",
            "趋势时机和速度对你的策略很重要",
            "你需要带有 KPI 追踪的自动化周报",
            "你更喜欢对话式 AI 副驾驶"
          ]
        },
        chooseVidIQ: {
          title: "选择 VidIQ 如果...",
          items: [
            "YouTube 是你的主要平台",
            "你需要 YouTube 特有功能 (SEO, 关键词)",
            "TikTok 是次要渠道，基础指标就够了",
            "你已经在使用 VidIQ 做 YouTube"
          ]
        },
        platformFocus: {
          title: "为什么平台专注度很重要",
          p1: "YouTube 和 TikTok 奖励不同的行为。YouTube 是搜索驱动的——标题、描述和缩略图决定发现。TikTok 是算法驱动的——完播率、Hook 率和趋势匹配决定分发。",
          p2: "为 YouTube 构建的工具优化搜索意图。为 TikTok 构建的工具优化信号模式。使用 YouTube 优先的工具做 TikTok 策略就像用公路地图在海洋导航——你可以尝试，但地形完全不同。",
          highlight: "OwlSeer 追踪 YouTube 优先工具不建模的 TikTok 特有指标（AER、Hook 率、保存率）。"
        },
        boundary: {
          transparency: "功能对比基于 2026 年 2 月的公开产品信息。",
          note: "此对比不是付费评论。我们建立它是为了帮助创作者做出明智决定。"
        },
        cta: {
          title: "准备好尝试 TikTok 原生策略了吗？",
          subtitle: "在样本数据上查看 OwlSeer 如何工作。或者开始免费试用。",
          primary: "开始免费试用",
          secondary: "探索演示"
        }
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
    },
    signalsPage: {
      ctaButton: "Analyze this signal",
      hero: {
        title: "The 30+ TikTok Signals OwlSeer Tracks for Your Growth",
        lead: "OwlSeer goes beyond likes and views. We analyze 30+ weighted signals across engagement, trends, and audience behavior to generate strategies personalized to your account. This page defines every signal — what it measures, why it matters, and how OwlSeer uses it."
      },
      tldr: {
        content: "We track **12 engagement signals** (hook rate, watch-through, shares, and more), **10 trend signals** (sound velocity, hashtag momentum, saturation), and **8+ audience signals** (growth velocity, active hours, demographics). Each signal carries a weight based on its predictive power. Combined, they form your content profile — the foundation for every recommendation. See our [methodology](/methodology) for how these signals flow through our AI pipeline."
      },
      quickNav: {
        engagement: "Engagement (12)",
        trends: "Trends (10)",
        audience: "Audience (8+)"
      },
      sections: {
        engagement: {
          title: "Engagement Signals — 12 Factors",
          task: "Understand how OwlSeer measures the way viewers interact with your content.",
          desc: "Engagement signals quantify the relationship between your content and your audience. Each signal captures a different dimension of viewer behavior — from the first three seconds of a video to the moment someone taps \"share.\" OwlSeer weights these signals based on their correlation with actual growth outcomes.",
          linkText: "AER card",
          linkUrl: "/sample-explorer/dashboard#aer-card",
          actionLine: "See engagement signals on real account data — [explore the Dashboard demo](/sample-explorer/dashboard#aer-card).",
          signals: [
            { name: "Hook Rate", id: "hook-rate", def: "Percentage of viewers who watch past the first 3 seconds of your video.", why: "TikTok's algorithm heavily weights early retention. Hook rate is the single most important factor for For You Page distribution. A video that loses viewers in the first 3 seconds rarely gets pushed to broader audiences.", how: "We analyze successful hook patterns in your content history and recommend opening strategies that match your audience's preferences. If your hook rate trends below your niche average, OwlSeer flags it as an improvement priority." },
            { name: "Watch-Through Rate", id: "watch-through-rate", def: "Completion percentage across different video lengths.", why: "Completion signals content quality to the algorithm. Videos that hold attention longer get prioritized for wider distribution. Watch-through rate also reveals optimal video length for your specific audience.", how: "We determine your optimal video length range and identify pacing patterns — transitions, information density, visual changes — that maximize completion for your audience." },
            { name: "Share Rate", id: "share-rate", def: "Number of shares relative to total views.", why: "Shares indicate viral potential and are one of the strongest signals for For You Page qualification. A shared video reaches audiences beyond the algorithm's initial distribution.", how: "We identify share-worthy content characteristics in your niche — humor patterns, educational \"aha\" moments, relatable situations — and recommend formats that encourage sharing." },
            { name: "Comment Sentiment", id: "comment-sentiment", def: "AI analysis of comment tone, quality, and engagement depth.", why: "Positive sentiment correlates with algorithm boost. But volume matters too — videos that spark discussion (even debate) signal community engagement, which TikTok rewards.", how: "We guide content toward topics that drive meaningful comments. If sentiment trends negative, OwlSeer flags the shift and suggests adjustments." },
            { name: "Save Rate", id: "save-rate", def: "Number of saves relative to total views.", why: "Saves indicate high-value, reference-worthy content. TikTok treats saves as a strong quality signal because users save content they intend to revisit.", how: "We identify educational, tutorial, and inspirational content patterns that drive saves in your niche and recommend topics that match." },
            { name: "Reply Rate", id: "reply-rate", def: "Creator replies relative to comments received.", why: "Reply rate signals active community building. Responding to comments can boost video distribution and deepen audience loyalty.", how: "We recommend an optimal comment engagement strategy based on your capacity, time, and growth goals." },
            { name: "Stitch/Duet Rate", id: "stitch-duet-rate", def: "How often your content inspires stitch or duet responses from other creators.", why: "Stitches and duets extend your reach through other creators' audiences. Content that generates responses has inherently higher distribution potential.", how: "We identify collaborative content opportunities and formats that encourage stitches and duets — opinion prompts, challenges, and debate starters." },
            { name: "Profile Visit Rate", id: "profile-visit-rate", def: "Profile views generated per video view.", why: "Profile visits indicate curiosity about the creator beyond a single video. A high profile visit rate suggests content that builds personal brand interest.", how: "We optimize content for follower conversion by analyzing what drives profile visits — CTAs, personality-forward content, series formats." },
            { name: "Follow-Through Rate", id: "follow-through-rate", def: "New followers generated per video view.", why: "The most direct measure of content's growth impact. Follow-through rate reveals which content types convert casual viewers into followers.", how: "We correlate follow-through rate with content attributes (topic, hook style, CTA type) to identify and recommend your highest-converting formats." },
            { name: "Rewatch Rate", id: "rewatch-rate", def: "Estimated rewatches based on watch-time patterns that exceed 100% completion.", why: "Rewatches signal highly engaging content. TikTok counts rewatch time toward overall engagement, amplifying distribution for \"sticky\" videos.", how: "We identify content characteristics that drive repeat viewing — layered details, plot twists, dense information — and recommend those formats." },
            { name: "Sound Usage", id: "sound-usage", def: "How your sound choices compare to current platform and niche trends.", why: "Trending sounds boost discoverability through TikTok's sound search and browsing features. The right sound at the right time amplifies distribution.", how: "We recommend sound strategies based on sound velocity data — rising sounds before they peak, evergreen sounds for consistent performance." },
            { name: "Caption Engagement", id: "caption-engagement", def: "Interactions driven by caption content, including click-throughs on text and engagement prompted by caption text.", why: "Captions extend engagement beyond the video itself and can drive comments, shares, and profile visits. Well-crafted captions act as a second hook.", how: "We optimize caption strategy including length, opening hooks, question prompts, and call-to-action placement." }
          ]
        },
        trends: {
          title: "Trend Signals — 10 Factors",
          task: "Learn how OwlSeer tracks platform-wide and niche trends to help you act at the right time.",
          desc: "Trend signals monitor what is gaining traction across TikTok. The goal is timing: participating in a trend too early means low volume, too late means saturation. OwlSeer's trend signals help you find the optimal participation window for your niche.",
          linkText: "Trend Radar",
          linkUrl: "/sample-explorer/trend-radar",
          actionLine: "See trend signals on live data — [explore the Trend Radar demo](/sample-explorer/trend-radar).",
          signals: [
            { name: "Sound Velocity", id: "sound-velocity", def: "Rate of sound adoption across TikTok, measured as new video creations using a specific sound per hour.", why: "Early sound adoption increases viral potential before the sound becomes oversaturated. Sound velocity predicts whether a sound will peak in days or weeks.", how: "We alert you to rising sounds in your niche with optimal participation windows — typically when velocity is accelerating but before the sound reaches peak saturation." },
            { name: "Hashtag Momentum", id: "hashtag-momentum", def: "Growth rate of hashtag usage over a rolling 7-day window.", why: "Timing hashtag participation maximizes reach. Too early means low search volume, too late means your content competes with thousands of similar posts.", how: "We recommend optimal hashtag timing based on momentum curves and track competition level to avoid oversaturated tags." },
            { name: "Format Migration", id: "format-migration", def: "Trend patterns moving from other platforms (Instagram Reels, YouTube Shorts) to TikTok.", why: "Cross-platform trends often gain momentum on TikTok faster than native trends. Early detection of format migration creates first-mover advantage.", how: "We monitor format patterns on adjacent platforms and provide early warnings when a trend is likely to migrate to TikTok." },
            { name: "Niche Trend Velocity", id: "niche-trend-velocity", def: "Trend speed within your specific content category, compared to the platform-wide average.", why: "Niche trends have different lifecycles than platform-wide trends. A sound that peaks in 48 hours for comedy might sustain for two weeks in education.", how: "We provide customized trend timing recommendations calibrated to your specific niche's trend lifecycle." },
            { name: "Creator Adoption Rate", id: "creator-adoption-rate", def: "How quickly top creators in your niche adopt a given trend.", why: "Creator adoption signals trend legitimacy and potential longevity. When established creators in your space start using a trend, it validates the trend's relevance.", how: "We track adoption patterns among comparable creators and factor this into trend confidence scores." },
            { name: "Geographic Spread", id: "geographic-spread", def: "How a trend expands across regions and markets.", why: "Regional trends can go global. A trend starting in Southeast Asia may reach North America within 1-2 weeks. Early detection provides a competitive window.", how: "We identify emerging international trends relevant to your audience's geography and cultural context." },
            { name: "Platform Promotion", id: "platform-promotion", def: "Indicators that TikTok itself is actively promoting specific content types, formats, or features.", why: "Platform-promoted trends receive algorithm boost and increased distribution. Aligning with platform priorities can significantly amplify reach.", how: "We detect platform promotion patterns and factor them into recommendations when relevant to your niche." },
            { name: "Trend Saturation", id: "trend-saturation", def: "Current participation density in a trend, measured as active creators per hour.", why: "Oversaturated trends yield diminishing returns. When thousands of creators post the same trend simultaneously, individual videos get less distribution.", how: "We warn against late trend participation and suggest optimal exit points — the moment when continued participation yields negative returns." },
            { name: "Trend Longevity", id: "trend-longevity", def: "Estimated remaining lifespan of an active trend.", why: "Some trends sustain for weeks. Others fade in 48 hours. Resource allocation — scripting, filming, editing — should match expected lifespan.", how: "We prioritize trends with longer predicted lifespans for content that requires more production effort, and flag quick-fade trends for lighter formats." },
            { name: "Brand Safety Score", id: "brand-safety-score", def: "Risk assessment for participating in a trend, measured on a 0-100 scale.", why: "Some trends carry reputational risk for brands, professional creators, and educators. A trend may be popular but inappropriate for certain audiences.", how: "We flag potentially problematic trends with risk explanations and alternative recommendations, particularly for brand and business accounts." }
          ]
        },
        audience: {
          title: "Audience Signals — 8+ Factors",
          task: "Discover how OwlSeer maps your audience's behavior, demographics, and growth trajectory.",
          desc: "Audience signals describe who watches your content, when they watch, and how your audience composition changes over time. These signals shape scheduling, format selection, and long-term growth strategy.",
          linkText: "Intelligence Hub",
          linkUrl: "/sample-explorer/intelligence",
          actionLine: "See audience insights on real data — [explore the Intelligence Hub demo](/sample-explorer/intelligence).",
          signals: [
            { name: "Follower Growth Velocity", id: "follower-growth-velocity", def: "Rate of follower acquisition over a rolling 30-day window, measured as net new followers per day.", why: "Velocity indicates content-market fit and growth trajectory. Accelerating velocity suggests strategy alignment. Decelerating velocity signals a need to adjust.", how: "We correlate content types and posting patterns with growth velocity changes to identify which activities drive follower acquisition." },
            { name: "Active Hour Mapping", id: "active-hour-mapping", def: "When your audience is most engaged, mapped by day of week and hour (adjusted to your time zone).", why: "Posting timing affects initial distribution. Early engagement signals (views and interactions in the first 30-60 minutes) determine whether TikTok pushes a video to broader audiences.", how: "We generate personalized posting schedules based on your audience's active hours, visible in the best-time heatmap." },
            { name: "Audience Overlap", id: "audience-overlap", def: "Viewer similarity between your account and comparable creators in your niche.", why: "Audience overlap reveals content opportunities that worked for similar audiences. High overlap with a faster-growing creator suggests format or topic gaps you could fill.", how: "We identify proven content strategies from comparable creators and recommend adaptations calibrated to your specific audience." },
            { name: "Demographic Shifts", id: "demographic-shifts", def: "Changes in audience age, gender, geography, and interest composition over time.", why: "Audience changes require strategy adjustment. If your audience skews younger over time, your content tone and references may need to evolve.", how: "We alert you to significant demographic shifts and suggest content adjustments to maintain engagement with your evolving audience." },
            { name: "Engagement Decay", id: "engagement-decay", def: "How quickly engagement drops after posting, measured as interaction rate at 1h, 6h, 24h, and 7d post-publish.", why: "Decay rate indicates content longevity. Fast decay suggests spike-dependent content. Slow decay suggests evergreen value that continues generating views over time.", how: "We optimize for your goals — viral spikes (if you want reach) vs. sustained engagement (if you want community depth) — and recommend content types accordingly." },
            { name: "Cross-Video Journey", id: "cross-video-journey", def: "How viewers move through your content after watching one video, including profile visits, binge-watching patterns, and playlist engagement.", why: "Cross-video journey reveals which content creates \"rabbit holes\" — the videos that lead viewers to watch 5, 10, or 20 more of your videos.", how: "We optimize content sequencing, suggest complementary topics, and identify which videos serve as effective entry points to your profile." },
            { name: "Follower Loyalty Score", id: "follower-loyalty-score", def: "Repeat engagement rate from existing followers, measured as the percentage of followers who interact with each new video.", why: "Loyal followers amplify reach (their engagement signals boost distribution) and provide consistent baseline performance for every post.", how: "We identify content that builds loyalty (community posts, series, personal stories) vs. content that attracts new viewers (trending formats, discovery hooks) and recommend the right balance." },
            { name: "New vs. Returning", id: "new-vs-returning", def: "The ratio of first-time viewers to returning viewers for each video.", why: "A healthy mix indicates sustainable growth. All-new-viewer content is unstable (high reach, low retention). All-returning content limits growth (loyal but capped).", how: "We balance viral content recommendations (for new viewer acquisition) with community-building content (for returning viewer retention)." }
          ]
        },
        howTogether: {
          title: "How These Signals Work Together",
          task: "See how OwlSeer combines signals to produce insights no single metric reveals alone.",
          intro: "Signals do not operate in isolation. OwlSeer's AI finds correlations between signals across all three categories to generate recommendations that account for the full picture. Three examples:",
          examples: [
            { title: "Hook rate + sound velocity", desc: "When a trending sound matches your successful hook patterns, OwlSeer prioritizes that recommendation with higher confidence. The combination of proven hook performance and rising sound momentum creates a compounding opportunity." },
            { title: "Active hours + trend window", desc: "OwlSeer aligns trend participation timing with your audience's peak activity. Posting a trending format during your audience's most engaged window maximizes the early engagement signals that TikTok uses to decide distribution." },
            { title: "Share rate + comment sentiment", desc: "Content that drives both sharing and positive discussion gets flagged as a high-replication candidate. OwlSeer identifies the specific content attributes — topic, hook style, CTA — that produced the dual-signal outcome." }
          ],
          outro: "Learn exactly how our AI processes signal combinations in our [complete methodology documentation](/methodology)."
        },
        boundary: {
          title: "Boundary Box",
          data: "Data we use: Publicly available TikTok account metrics accessed through the official API. Signal definitions on this page reflect OwlSeer's current analytical framework.",
          notDo: "What we do not do: OwlSeer does not access TikTok's internal algorithm weights. Our signal weights are derived from observed correlations in public data, not from proprietary TikTok documentation.",
          variability: "Variability note: Signal predictive power varies by niche, account size, audience geography, and TikTok algorithm updates. Correlations described on this page are based on aggregate data and may not apply identically to every account."
        },
        cta: {
          title: "See Your Signals in Action",
          desc: "Connect your TikTok account and receive your personalized signal analysis in under three minutes. Or explore sample data to see how signals translate into strategy.",
          primary: "Start Free Analysis",
          secondary: "Explore Sample Data"
        },
        contextualConversion: {
           title: "What do these 30+ signals look like for YOU?",
           desc: "Connect your TikTok account and OwlSeer will generate your full signal profile in 3 minutes — including every signal value, niche benchmarks, and your top 3 improvement priorities.",
           button: "Generate My Signal Profile",
           note: "Read-only access. Connects in 30 seconds. Revoke anytime."
        }
      }
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
    },
    signalsPage: {
      ctaButton: "优化此指标",
      hero: {
        title: "The 30+ TikTok Signals OwlSeer Tracks for Your Growth",
        lead: "OwlSeer goes beyond likes and views. We analyze 30+ weighted signals across engagement, trends, and audience behavior to generate strategies personalized to your account. This page defines every signal — what it measures, why it matters, and how OwlSeer uses it."
      },
      tldr: {
        content: "We track **12 engagement signals** (hook rate, watch-through, shares, and more), **10 trend signals** (sound velocity, hashtag momentum, saturation), and **8+ audience signals** (growth velocity, active hours, demographics). Each signal carries a weight based on its predictive power. Combined, they form your content profile — the foundation for every recommendation. See our [methodology](/methodology) for how these signals flow through our AI pipeline."
      },
      quickNav: {
        engagement: "Engagement (12)",
        trends: "Trends (10)",
        audience: "Audience (8+)"
      },
      sections: {
        engagement: {
          title: "Engagement Signals — 12 Factors",
          task: "Understand how OwlSeer measures the way viewers interact with your content.",
          desc: "Engagement signals quantify the relationship between your content and your audience. Each signal captures a different dimension of viewer behavior — from the first three seconds of a video to the moment someone taps \"share.\" OwlSeer weights these signals based on their correlation with actual growth outcomes.",
          linkText: "AER card",
          linkUrl: "/sample-explorer/dashboard#aer-card",
          actionLine: "See engagement signals on real account data — [explore the Dashboard demo](/sample-explorer/dashboard#aer-card).",
          signals: [
            { name: "Hook Rate", id: "hook-rate", def: "Percentage of viewers who watch past the first 3 seconds of your video.", why: "TikTok's algorithm heavily weights early retention. Hook rate is the single most important factor for For You Page distribution. A video that loses viewers in the first 3 seconds rarely gets pushed to broader audiences.", how: "We analyze successful hook patterns in your content history and recommend opening strategies that match your audience's preferences. If your hook rate trends below your niche average, OwlSeer flags it as an improvement priority." },
            { name: "Watch-Through Rate", id: "watch-through-rate", def: "Completion percentage across different video lengths.", why: "Completion signals content quality to the algorithm. Videos that hold attention longer get prioritized for wider distribution. Watch-through rate also reveals optimal video length for your specific audience.", how: "We determine your optimal video length range and identify pacing patterns — transitions, information density, visual changes — that maximize completion for your audience." },
            { name: "Share Rate", id: "share-rate", def: "Number of shares relative to total views.", why: "Shares indicate viral potential and are one of the strongest signals for For You Page qualification. A shared video reaches audiences beyond the algorithm's initial distribution.", how: "We identify share-worthy content characteristics in your niche — humor patterns, educational \"aha\" moments, relatable situations — and recommend formats that encourage sharing." },
            { name: "Comment Sentiment", id: "comment-sentiment", def: "AI analysis of comment tone, quality, and engagement depth.", why: "Positive sentiment correlates with algorithm boost. But volume matters too — videos that spark discussion (even debate) signal community engagement, which TikTok rewards.", how: "We guide content toward topics that drive meaningful comments. If sentiment trends negative, OwlSeer flags the shift and suggests adjustments." },
            { name: "Save Rate", id: "save-rate", def: "Number of saves relative to total views.", why: "Saves indicate high-value, reference-worthy content. TikTok treats saves as a strong quality signal because users save content they intend to revisit.", how: "We identify educational, tutorial, and inspirational content patterns that drive saves in your niche and recommend topics that match." },
            { name: "Reply Rate", id: "reply-rate", def: "Creator replies relative to comments received.", why: "Reply rate signals active community building. Responding to comments can boost video distribution and deepen audience loyalty.", how: "We recommend an optimal comment engagement strategy based on your capacity, time, and growth goals." },
            { name: "Stitch/Duet Rate", id: "stitch-duet-rate", def: "How often your content inspires stitch or duet responses from other creators.", why: "Stitches and duets extend your reach through other creators' audiences. Content that generates responses has inherently higher distribution potential.", how: "We identify collaborative content opportunities and formats that encourage stitches and duets — opinion prompts, challenges, and debate starters." },
            { name: "Profile Visit Rate", id: "profile-visit-rate", def: "Profile views generated per video view.", why: "Profile visits indicate curiosity about the creator beyond a single video. A high profile visit rate suggests content that builds personal brand interest.", how: "We optimize content for follower conversion by analyzing what drives profile visits — CTAs, personality-forward content, series formats." },
            { name: "Follow-Through Rate", id: "follow-through-rate", def: "New followers generated per video view.", why: "The most direct measure of content's growth impact. Follow-through rate reveals which content types convert casual viewers into followers.", how: "We correlate follow-through rate with content attributes (topic, hook style, CTA type) to identify and recommend your highest-converting formats." },
            { name: "Rewatch Rate", id: "rewatch-rate", def: "Estimated rewatches based on watch-time patterns that exceed 100% completion.", why: "Rewatches signal highly engaging content. TikTok counts rewatch time toward overall engagement, amplifying distribution for \"sticky\" videos.", how: "We identify content characteristics that drive repeat viewing — layered details, plot twists, dense information — and recommend those formats." },
            { name: "Sound Usage", id: "sound-usage", def: "How your sound choices compare to current platform and niche trends.", why: "Trending sounds boost discoverability through TikTok's sound search and browsing features. The right sound at the right time amplifies distribution.", how: "We recommend sound strategies based on sound velocity data — rising sounds before they peak, evergreen sounds for consistent performance." },
            { name: "Caption Engagement", id: "caption-engagement", def: "Interactions driven by caption content, including click-throughs on text and engagement prompted by caption text.", why: "Captions extend engagement beyond the video itself and can drive comments, shares, and profile visits. Well-crafted captions act as a second hook.", how: "We optimize caption strategy including length, opening hooks, question prompts, and call-to-action placement." }
          ]
        },
        trends: {
          title: "Trend Signals — 10 Factors",
          task: "Learn how OwlSeer tracks platform-wide and niche trends to help you act at the right time.",
          desc: "Trend signals monitor what is gaining traction across TikTok. The goal is timing: participating in a trend too early means low volume, too late means saturation. OwlSeer's trend signals help you find the optimal participation window for your niche.",
          linkText: "Trend Radar",
          linkUrl: "/sample-explorer/trend-radar",
          actionLine: "See trend signals on live data — [explore the Trend Radar demo](/sample-explorer/trend-radar).",
          signals: [
            { name: "Sound Velocity", id: "sound-velocity", def: "Rate of sound adoption across TikTok, measured as new video creations using a specific sound per hour.", why: "Early sound adoption increases viral potential before the sound becomes oversaturated. Sound velocity predicts whether a sound will peak in days or weeks.", how: "We alert you to rising sounds in your niche with optimal participation windows — typically when velocity is accelerating but before the sound reaches peak saturation." },
            { name: "Hashtag Momentum", id: "hashtag-momentum", def: "Growth rate of hashtag usage over a rolling 7-day window.", why: "Timing hashtag participation maximizes reach. Too early means low search volume, too late means your content competes with thousands of similar posts.", how: "We recommend optimal hashtag timing based on momentum curves and track competition level to avoid oversaturated tags." },
            { name: "Format Migration", id: "format-migration", def: "Trend patterns moving from other platforms (Instagram Reels, YouTube Shorts) to TikTok.", why: "Cross-platform trends often gain momentum on TikTok faster than native trends. Early detection of format migration creates first-mover advantage.", how: "We monitor format patterns on adjacent platforms and provide early warnings when a trend is likely to migrate to TikTok." },
            { name: "Niche Trend Velocity", id: "niche-trend-velocity", def: "Trend speed within your specific content category, compared to the platform-wide average.", why: "Niche trends have different lifecycles than platform-wide trends. A sound that peaks in 48 hours for comedy might sustain for two weeks in education.", how: "We provide customized trend timing recommendations calibrated to your specific niche's trend lifecycle." },
            { name: "Creator Adoption Rate", id: "creator-adoption-rate", def: "How quickly top creators in your niche adopt a given trend.", why: "Creator adoption signals trend legitimacy and potential longevity. When established creators in your space start using a trend, it validates the trend's relevance.", how: "We track adoption patterns among comparable creators and factor this into trend confidence scores." },
            { name: "Geographic Spread", id: "geographic-spread", def: "How a trend expands across regions and markets.", why: "Regional trends can go global. A trend starting in Southeast Asia may reach North America within 1-2 weeks. Early detection provides a competitive window.", how: "We identify emerging international trends relevant to your audience's geography and cultural context." },
            { name: "Platform Promotion", id: "platform-promotion", def: "Indicators that TikTok itself is actively promoting specific content types, formats, or features.", why: "Platform-promoted trends receive algorithm boost and increased distribution. Aligning with platform priorities can significantly amplify reach.", how: "We detect platform promotion patterns and factor them into recommendations when relevant to your niche." },
            { name: "Trend Saturation", id: "trend-saturation", def: "Current participation density in a trend, measured as active creators per hour.", why: "Oversaturated trends yield diminishing returns. When thousands of creators post the same trend simultaneously, individual videos get less distribution.", how: "We warn against late trend participation and suggest optimal exit points — the moment when continued participation yields negative returns." },
            { name: "Trend Longevity", id: "trend-longevity", def: "Estimated remaining lifespan of an active trend.", why: "Some trends sustain for weeks. Others fade in 48 hours. Resource allocation — scripting, filming, editing — should match expected lifespan.", how: "We prioritize trends with longer predicted lifespans for content that requires more production effort, and flag quick-fade trends for lighter formats." },
            { name: "Brand Safety Score", id: "brand-safety-score", def: "Risk assessment for participating in a trend, measured on a 0-100 scale.", why: "Some trends carry reputational risk for brands, professional creators, and educators. A trend may be popular but inappropriate for certain audiences.", how: "We flag potentially problematic trends with risk explanations and alternative recommendations, particularly for brand and business accounts." }
          ]
        },
        audience: {
          title: "Audience Signals — 8+ Factors",
          task: "Discover how OwlSeer maps your audience's behavior, demographics, and growth trajectory.",
          desc: "Audience signals describe who watches your content, when they watch, and how your audience composition changes over time. These signals shape scheduling, format selection, and long-term growth strategy.",
          linkText: "Intelligence Hub",
          linkUrl: "/sample-explorer/intelligence",
          actionLine: "See audience insights on real data — [explore the Intelligence Hub demo](/sample-explorer/intelligence).",
          signals: [
            { name: "Follower Growth Velocity", id: "follower-growth-velocity", def: "Rate of follower acquisition over a rolling 30-day window, measured as net new followers per day.", why: "Velocity indicates content-market fit and growth trajectory. Accelerating velocity suggests strategy alignment. Decelerating velocity signals a need to adjust.", how: "We correlate content types and posting patterns with growth velocity changes to identify which activities drive follower acquisition." },
            { name: "Active Hour Mapping", id: "active-hour-mapping", def: "When your audience is most engaged, mapped by day of week and hour (adjusted to your time zone).", why: "Posting timing affects initial distribution. Early engagement signals (views and interactions in the first 30-60 minutes) determine whether TikTok pushes a video to broader audiences.", how: "We generate personalized posting schedules based on your audience's active hours, visible in the best-time heatmap." },
            { name: "Audience Overlap", id: "audience-overlap", def: "Viewer similarity between your account and comparable creators in your niche.", why: "Audience overlap reveals content opportunities that worked for similar audiences. High overlap with a faster-growing creator suggests format or topic gaps you could fill.", how: "We identify proven content strategies from comparable creators and recommend adaptations calibrated to your specific audience." },
            { name: "Demographic Shifts", id: "demographic-shifts", def: "Changes in audience age, gender, geography, and interest composition over time.", why: "Audience changes require strategy adjustment. If your audience skews younger over time, your content tone and references may need to evolve.", how: "We alert you to significant demographic shifts and suggest content adjustments to maintain engagement with your evolving audience." },
            { name: "Engagement Decay", id: "engagement-decay", def: "How quickly engagement drops after posting, measured as interaction rate at 1h, 6h, 24h, and 7d post-publish.", why: "Decay rate indicates content longevity. Fast decay suggests spike-dependent content. Slow decay suggests evergreen value that continues generating views over time.", how: "We optimize for your goals — viral spikes (if you want reach) vs. sustained engagement (if you want community depth) — and recommend content types accordingly." },
            { name: "Cross-Video Journey", id: "cross-video-journey", def: "How viewers move through your content after watching one video, including profile visits, binge-watching patterns, and playlist engagement.", why: "Cross-video journey reveals which content creates \"rabbit holes\" — the videos that lead viewers to watch 5, 10, or 20 more of your videos.", how: "We optimize content sequencing, suggest complementary topics, and identify which videos serve as effective entry points to your profile." },
            { name: "Follower Loyalty Score", id: "follower-loyalty-score", def: "Repeat engagement rate from existing followers, measured as the percentage of followers who interact with each new video.", why: "Loyal followers amplify reach (their engagement signals boost distribution) and provide consistent baseline performance for every post.", how: "We identify content that builds loyalty (community posts, series, personal stories) vs. content that attracts new viewers (trending formats, discovery hooks) and recommend the right balance." },
            { name: "New vs. Returning", id: "new-vs-returning", def: "The ratio of first-time viewers to returning viewers for each video.", why: "A healthy mix indicates sustainable growth. All-new-viewer content is unstable (high reach, low retention). All-returning content limits growth (loyal but capped).", how: "We balance viral content recommendations (for new viewer acquisition) with community-building content (for returning viewer retention)." }
          ]
        },
        howTogether: {
          title: "How These Signals Work Together",
          task: "See how OwlSeer combines signals to produce insights no single metric reveals alone.",
          intro: "Signals do not operate in isolation. OwlSeer's AI finds correlations between signals across all three categories to generate recommendations that account for the full picture. Three examples:",
          examples: [
            { title: "Hook rate + sound velocity", desc: "When a trending sound matches your successful hook patterns, OwlSeer prioritizes that recommendation with higher confidence. The combination of proven hook performance and rising sound momentum creates a compounding opportunity." },
            { title: "Active hours + trend window", desc: "OwlSeer aligns trend participation timing with your audience's peak activity. Posting a trending format during your audience's most engaged window maximizes the early engagement signals that TikTok uses to decide distribution." },
            { title: "Share rate + comment sentiment", desc: "Content that drives both sharing and positive discussion gets flagged as a high-replication candidate. OwlSeer identifies the specific content attributes — topic, hook style, CTA — that produced the dual-signal outcome." }
          ],
          outro: "Learn exactly how our AI processes signal combinations in our [complete methodology documentation](/methodology)."
        },
        boundary: {
          title: "Boundary Box",
          data: "Data we use: Publicly available TikTok account metrics accessed through the official API. Signal definitions on this page reflect OwlSeer's current analytical framework.",
          notDo: "What we do not do: OwlSeer does not access TikTok's internal algorithm weights. Our signal weights are derived from observed correlations in public data, not from proprietary TikTok documentation.",
          variability: "Variability note: Signal predictive power varies by niche, account size, audience geography, and TikTok algorithm updates. Correlations described on this page are based on aggregate data and may not apply identically to every account."
        },
        cta: {
          title: "See Your Signals in Action",
          desc: "Connect your TikTok account and receive your personalized signal analysis in under three minutes. Or explore sample data to see how signals translate into strategy.",
          primary: "Start Free Analysis",
          secondary: "Explore Sample Data"
        },
        contextualConversion: {
           title: "What do these 30+ signals look like for YOU?",
           desc: "Connect your TikTok account and OwlSeer will generate your full signal profile in 3 minutes — including every signal value, niche benchmarks, and your top 3 improvement priorities.",
           button: "Generate My Signal Profile",
           note: "Read-only access. Connects in 30 seconds. Revoke anytime."
        }
      }
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
    },
    signalsPage: {
      hero: {
        title: "The 30+ TikTok Signals OwlSeer Tracks for Your Growth",
        lead: "OwlSeer goes beyond likes and views. We analyze 30+ weighted signals across engagement, trends, and audience behavior to generate strategies personalized to your account. This page defines every signal — what it measures, why it matters, and how OwlSeer uses it."
      },
      tldr: {
        content: "We track **12 engagement signals** (hook rate, watch-through, shares, and more), **10 trend signals** (sound velocity, hashtag momentum, saturation), and **8+ audience signals** (growth velocity, active hours, demographics). Each signal carries a weight based on its predictive power. Combined, they form your content profile — the foundation for every recommendation. See our [methodology](/methodology) for how these signals flow through our AI pipeline."
      },
      quickNav: {
        engagement: "Engagement (12)",
        trends: "Trends (10)",
        audience: "Audience (8+)"
      },
      sections: {
        engagement: {
          title: "Engagement Signals — 12 Factors",
          task: "Understand how OwlSeer measures the way viewers interact with your content.",
          desc: "Engagement signals quantify the relationship between your content and your audience. Each signal captures a different dimension of viewer behavior — from the first three seconds of a video to the moment someone taps \"share.\" OwlSeer weights these signals based on their correlation with actual growth outcomes.",
          linkText: "AER card",
          linkUrl: "/sample-explorer/dashboard#aer-card",
          actionLine: "See engagement signals on real account data — [explore the Dashboard demo](/sample-explorer/dashboard#aer-card).",
          signals: [
            { name: "Hook Rate", id: "hook-rate", def: "Percentage of viewers who watch past the first 3 seconds of your video.", why: "TikTok's algorithm heavily weights early retention. Hook rate is the single most important factor for For You Page distribution. A video that loses viewers in the first 3 seconds rarely gets pushed to broader audiences.", how: "We analyze successful hook patterns in your content history and recommend opening strategies that match your audience's preferences. If your hook rate trends below your niche average, OwlSeer flags it as an improvement priority." },
            { name: "Watch-Through Rate", id: "watch-through-rate", def: "Completion percentage across different video lengths.", why: "Completion signals content quality to the algorithm. Videos that hold attention longer get prioritized for wider distribution. Watch-through rate also reveals optimal video length for your specific audience.", how: "We determine your optimal video length range and identify pacing patterns — transitions, information density, visual changes — that maximize completion for your audience." },
            { name: "Share Rate", id: "share-rate", def: "Number of shares relative to total views.", why: "Shares indicate viral potential and are one of the strongest signals for For You Page qualification. A shared video reaches audiences beyond the algorithm's initial distribution.", how: "We identify share-worthy content characteristics in your niche — humor patterns, educational \"aha\" moments, relatable situations — and recommend formats that encourage sharing." },
            { name: "Comment Sentiment", id: "comment-sentiment", def: "AI analysis of comment tone, quality, and engagement depth.", why: "Positive sentiment correlates with algorithm boost. But volume matters too — videos that spark discussion (even debate) signal community engagement, which TikTok rewards.", how: "We guide content toward topics that drive meaningful comments. If sentiment trends negative, OwlSeer flags the shift and suggests adjustments." },
            { name: "Save Rate", id: "save-rate", def: "Number of saves relative to total views.", why: "Saves indicate high-value, reference-worthy content. TikTok treats saves as a strong quality signal because users save content they intend to revisit.", how: "We identify educational, tutorial, and inspirational content patterns that drive saves in your niche and recommend topics that match." },
            { name: "Reply Rate", id: "reply-rate", def: "Creator replies relative to comments received.", why: "Reply rate signals active community building. Responding to comments can boost video distribution and deepen audience loyalty.", how: "We recommend an optimal comment engagement strategy based on your capacity, time, and growth goals." },
            { name: "Stitch/Duet Rate", id: "stitch-duet-rate", def: "How often your content inspires stitch or duet responses from other creators.", why: "Stitches and duets extend your reach through other creators' audiences. Content that generates responses has inherently higher distribution potential.", how: "We identify collaborative content opportunities and formats that encourage stitches and duets — opinion prompts, challenges, and debate starters." },
            { name: "Profile Visit Rate", id: "profile-visit-rate", def: "Profile views generated per video view.", why: "Profile visits indicate curiosity about the creator beyond a single video. A high profile visit rate suggests content that builds personal brand interest.", how: "We optimize content for follower conversion by analyzing what drives profile visits — CTAs, personality-forward content, series formats." },
            { name: "Follow-Through Rate", id: "follow-through-rate", def: "New followers generated per video view.", why: "The most direct measure of content's growth impact. Follow-through rate reveals which content types convert casual viewers into followers.", how: "We correlate follow-through rate with content attributes (topic, hook style, CTA type) to identify and recommend your highest-converting formats." },
            { name: "Rewatch Rate", id: "rewatch-rate", def: "Estimated rewatches based on watch-time patterns that exceed 100% completion.", why: "Rewatches signal highly engaging content. TikTok counts rewatch time toward overall engagement, amplifying distribution for \"sticky\" videos.", how: "We identify content characteristics that drive repeat viewing — layered details, plot twists, dense information — and recommend those formats." },
            { name: "Sound Usage", id: "sound-usage", def: "How your sound choices compare to current platform and niche trends.", why: "Trending sounds boost discoverability through TikTok's sound search and browsing features. The right sound at the right time amplifies distribution.", how: "We recommend sound strategies based on sound velocity data — rising sounds before they peak, evergreen sounds for consistent performance." },
            { name: "Caption Engagement", id: "caption-engagement", def: "Interactions driven by caption content, including click-throughs on text and engagement prompted by caption text.", why: "Captions extend engagement beyond the video itself and can drive comments, shares, and profile visits. Well-crafted captions act as a second hook.", how: "We optimize caption strategy including length, opening hooks, question prompts, and call-to-action placement." }
          ]
        },
        trends: {
          title: "Trend Signals — 10 Factors",
          task: "Learn how OwlSeer tracks platform-wide and niche trends to help you act at the right time.",
          desc: "Trend signals monitor what is gaining traction across TikTok. The goal is timing: participating in a trend too early means low volume, too late means saturation. OwlSeer's trend signals help you find the optimal participation window for your niche.",
          linkText: "Trend Radar",
          linkUrl: "/sample-explorer/trend-radar",
          actionLine: "See trend signals on live data — [explore the Trend Radar demo](/sample-explorer/trend-radar).",
          signals: [
            { name: "Sound Velocity", id: "sound-velocity", def: "Rate of sound adoption across TikTok, measured as new video creations using a specific sound per hour.", why: "Early sound adoption increases viral potential before the sound becomes oversaturated. Sound velocity predicts whether a sound will peak in days or weeks.", how: "We alert you to rising sounds in your niche with optimal participation windows — typically when velocity is accelerating but before the sound reaches peak saturation." },
            { name: "Hashtag Momentum", id: "hashtag-momentum", def: "Growth rate of hashtag usage over a rolling 7-day window.", why: "Timing hashtag participation maximizes reach. Too early means low search volume, too late means your content competes with thousands of similar posts.", how: "We recommend optimal hashtag timing based on momentum curves and track competition level to avoid oversaturated tags." },
            { name: "Format Migration", id: "format-migration", def: "Trend patterns moving from other platforms (Instagram Reels, YouTube Shorts) to TikTok.", why: "Cross-platform trends often gain momentum on TikTok faster than native trends. Early detection of format migration creates first-mover advantage.", how: "We monitor format patterns on adjacent platforms and provide early warnings when a trend is likely to migrate to TikTok." },
            { name: "Niche Trend Velocity", id: "niche-trend-velocity", def: "Trend speed within your specific content category, compared to the platform-wide average.", why: "Niche trends have different lifecycles than platform-wide trends. A sound that peaks in 48 hours for comedy might sustain for two weeks in education.", how: "We provide customized trend timing recommendations calibrated to your specific niche's trend lifecycle." },
            { name: "Creator Adoption Rate", id: "creator-adoption-rate", def: "How quickly top creators in your niche adopt a given trend.", why: "Creator adoption signals trend legitimacy and potential longevity. When established creators in your space start using a trend, it validates the trend's relevance.", how: "We track adoption patterns among comparable creators and factor this into trend confidence scores." },
            { name: "Geographic Spread", id: "geographic-spread", def: "How a trend expands across regions and markets.", why: "Regional trends can go global. A trend starting in Southeast Asia may reach North America within 1-2 weeks. Early detection provides a competitive window.", how: "We identify emerging international trends relevant to your audience's geography and cultural context." },
            { name: "Platform Promotion", id: "platform-promotion", def: "Indicators that TikTok itself is actively promoting specific content types, formats, or features.", why: "Platform-promoted trends receive algorithm boost and increased distribution. Aligning with platform priorities can significantly amplify reach.", how: "We detect platform promotion patterns and factor them into recommendations when relevant to your niche." },
            { name: "Trend Saturation", id: "trend-saturation", def: "Current participation density in a trend, measured as active creators per hour.", why: "Oversaturated trends yield diminishing returns. When thousands of creators post the same trend simultaneously, individual videos get less distribution.", how: "We warn against late trend participation and suggest optimal exit points — the moment when continued participation yields negative returns." },
            { name: "Trend Longevity", id: "trend-longevity", def: "Estimated remaining lifespan of an active trend.", why: "Some trends sustain for weeks. Others fade in 48 hours. Resource allocation — scripting, filming, editing — should match expected lifespan.", how: "We prioritize trends with longer predicted lifespans for content that requires more production effort, and flag quick-fade trends for lighter formats." },
            { name: "Brand Safety Score", id: "brand-safety-score", def: "Risk assessment for participating in a trend, measured on a 0-100 scale.", why: "Some trends carry reputational risk for brands, professional creators, and educators. A trend may be popular but inappropriate for certain audiences.", how: "We flag potentially problematic trends with risk explanations and alternative recommendations, particularly for brand and business accounts." }
          ]
        },
        audience: {
          title: "Audience Signals — 8+ Factors",
          task: "Discover how OwlSeer maps your audience's behavior, demographics, and growth trajectory.",
          desc: "Audience signals describe who watches your content, when they watch, and how your audience composition changes over time. These signals shape scheduling, format selection, and long-term growth strategy.",
          linkText: "Intelligence Hub",
          linkUrl: "/sample-explorer/intelligence",
          actionLine: "See audience insights on real data — [explore the Intelligence Hub demo](/sample-explorer/intelligence).",
          signals: [
            { name: "Follower Growth Velocity", id: "follower-growth-velocity", def: "Rate of follower acquisition over a rolling 30-day window, measured as net new followers per day.", why: "Velocity indicates content-market fit and growth trajectory. Accelerating velocity suggests strategy alignment. Decelerating velocity signals a need to adjust.", how: "We correlate content types and posting patterns with growth velocity changes to identify which activities drive follower acquisition." },
            { name: "Active Hour Mapping", id: "active-hour-mapping", def: "When your audience is most engaged, mapped by day of week and hour (adjusted to your time zone).", why: "Posting timing affects initial distribution. Early engagement signals (views and interactions in the first 30-60 minutes) determine whether TikTok pushes a video to broader audiences.", how: "We generate personalized posting schedules based on your audience's active hours, visible in the best-time heatmap." },
            { name: "Audience Overlap", id: "audience-overlap", def: "Viewer similarity between your account and comparable creators in your niche.", why: "Audience overlap reveals content opportunities that worked for similar audiences. High overlap with a faster-growing creator suggests format or topic gaps you could fill.", how: "We identify proven content strategies from comparable creators and recommend adaptations calibrated to your specific audience." },
            { name: "Demographic Shifts", id: "demographic-shifts", def: "Changes in audience age, gender, geography, and interest composition over time.", why: "Audience changes require strategy adjustment. If your audience skews younger over time, your content tone and references may need to evolve.", how: "We alert you to significant demographic shifts and suggest content adjustments to maintain engagement with your evolving audience." },
            { name: "Engagement Decay", id: "engagement-decay", def: "How quickly engagement drops after posting, measured as interaction rate at 1h, 6h, 24h, and 7d post-publish.", why: "Decay rate indicates content longevity. Fast decay suggests spike-dependent content. Slow decay suggests evergreen value that continues generating views over time.", how: "We optimize for your goals — viral spikes (if you want reach) vs. sustained engagement (if you want community depth) — and recommend content types accordingly." },
            { name: "Cross-Video Journey", id: "cross-video-journey", def: "How viewers move through your content after watching one video, including profile visits, binge-watching patterns, and playlist engagement.", why: "Cross-video journey reveals which content creates \"rabbit holes\" — the videos that lead viewers to watch 5, 10, or 20 more of your videos.", how: "We optimize content sequencing, suggest complementary topics, and identify which videos serve as effective entry points to your profile." },
            { name: "Follower Loyalty Score", id: "follower-loyalty-score", def: "Repeat engagement rate from existing followers, measured as the percentage of followers who interact with each new video.", why: "Loyal followers amplify reach (their engagement signals boost distribution) and provide consistent baseline performance for every post.", how: "We identify content that builds loyalty (community posts, series, personal stories) vs. content that attracts new viewers (trending formats, discovery hooks) and recommend the right balance." },
            { name: "New vs. Returning", id: "new-vs-returning", def: "The ratio of first-time viewers to returning viewers for each video.", why: "A healthy mix indicates sustainable growth. All-new-viewer content is unstable (high reach, low retention). All-returning content limits growth (loyal but capped).", how: "We balance viral content recommendations (for new viewer acquisition) with community-building content (for returning viewer retention)." }
          ]
        },
        howTogether: {
          title: "How These Signals Work Together",
          task: "See how OwlSeer combines signals to produce insights no single metric reveals alone.",
          intro: "Signals do not operate in isolation. OwlSeer's AI finds correlations between signals across all three categories to generate recommendations that account for the full picture. Three examples:",
          examples: [
            { title: "Hook rate + sound velocity", desc: "When a trending sound matches your successful hook patterns, OwlSeer prioritizes that recommendation with higher confidence. The combination of proven hook performance and rising sound momentum creates a compounding opportunity." },
            { title: "Active hours + trend window", desc: "OwlSeer aligns trend participation timing with your audience's peak activity. Posting a trending format during your audience's most engaged window maximizes the early engagement signals that TikTok uses to decide distribution." },
            { title: "Share rate + comment sentiment", desc: "Content that drives both sharing and positive discussion gets flagged as a high-replication candidate. OwlSeer identifies the specific content attributes — topic, hook style, CTA — that produced the dual-signal outcome." }
          ],
          outro: "Learn exactly how our AI processes signal combinations in our [complete methodology documentation](/methodology)."
        },
        boundary: {
          title: "Boundary Box",
          data: "Data we use: Publicly available TikTok account metrics accessed through the official API. Signal definitions on this page reflect OwlSeer's current analytical framework.",
          notDo: "What we do not do: OwlSeer does not access TikTok's internal algorithm weights. Our signal weights are derived from observed correlations in public data, not from proprietary TikTok documentation.",
          variability: "Variability note: Signal predictive power varies by niche, account size, audience geography, and TikTok algorithm updates. Correlations described on this page are based on aggregate data and may not apply identically to every account."
        },
        cta: {
          title: "See Your Signals in Action",
          desc: "Connect your TikTok account and receive your personalized signal analysis in under three minutes. Or explore sample data to see how signals translate into strategy.",
          primary: "Start Free Analysis",
          secondary: "Explore Sample Data"
        },
        contextualConversion: {
           title: "What do these 30+ signals look like for YOU?",
           desc: "Connect your TikTok account and OwlSeer will generate your full signal profile in 3 minutes — including every signal value, niche benchmarks, and your top 3 improvement priorities.",
           button: "Generate My Signal Profile",
           note: "Read-only access. Connects in 30 seconds. Revoke anytime."
        }
      }
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
    },
    signalsPage: {
      hero: {
        title: "The 30+ TikTok Signals OwlSeer Tracks for Your Growth",
        lead: "OwlSeer goes beyond likes and views. We analyze 30+ weighted signals across engagement, trends, and audience behavior to generate strategies personalized to your account. This page defines every signal — what it measures, why it matters, and how OwlSeer uses it."
      },
      tldr: {
        content: "We track **12 engagement signals** (hook rate, watch-through, shares, and more), **10 trend signals** (sound velocity, hashtag momentum, saturation), and **8+ audience signals** (growth velocity, active hours, demographics). Each signal carries a weight based on its predictive power. Combined, they form your content profile — the foundation for every recommendation. See our [methodology](/methodology) for how these signals flow through our AI pipeline."
      },
      quickNav: {
        engagement: "Engagement (12)",
        trends: "Trends (10)",
        audience: "Audience (8+)"
      },
      sections: {
        engagement: {
          title: "Engagement Signals — 12 Factors",
          task: "Understand how OwlSeer measures the way viewers interact with your content.",
          desc: "Engagement signals quantify the relationship between your content and your audience. Each signal captures a different dimension of viewer behavior — from the first three seconds of a video to the moment someone taps \"share.\" OwlSeer weights these signals based on their correlation with actual growth outcomes.",
          linkText: "AER card",
          linkUrl: "/sample-explorer/dashboard#aer-card",
          actionLine: "See engagement signals on real account data — [explore the Dashboard demo](/sample-explorer/dashboard#aer-card).",
          signals: [
            { name: "Hook Rate", id: "hook-rate", def: "Percentage of viewers who watch past the first 3 seconds of your video.", why: "TikTok's algorithm heavily weights early retention. Hook rate is the single most important factor for For You Page distribution. A video that loses viewers in the first 3 seconds rarely gets pushed to broader audiences.", how: "We analyze successful hook patterns in your content history and recommend opening strategies that match your audience's preferences. If your hook rate trends below your niche average, OwlSeer flags it as an improvement priority." },
            { name: "Watch-Through Rate", id: "watch-through-rate", def: "Completion percentage across different video lengths.", why: "Completion signals content quality to the algorithm. Videos that hold attention longer get prioritized for wider distribution. Watch-through rate also reveals optimal video length for your specific audience.", how: "We determine your optimal video length range and identify pacing patterns — transitions, information density, visual changes — that maximize completion for your audience." },
            { name: "Share Rate", id: "share-rate", def: "Number of shares relative to total views.", why: "Shares indicate viral potential and are one of the strongest signals for For You Page qualification. A shared video reaches audiences beyond the algorithm's initial distribution.", how: "We identify share-worthy content characteristics in your niche — humor patterns, educational \"aha\" moments, relatable situations — and recommend formats that encourage sharing." },
            { name: "Comment Sentiment", id: "comment-sentiment", def: "AI analysis of comment tone, quality, and engagement depth.", why: "Positive sentiment correlates with algorithm boost. But volume matters too — videos that spark discussion (even debate) signal community engagement, which TikTok rewards.", how: "We guide content toward topics that drive meaningful comments. If sentiment trends negative, OwlSeer flags the shift and suggests adjustments." },
            { name: "Save Rate", id: "save-rate", def: "Number of saves relative to total views.", why: "Saves indicate high-value, reference-worthy content. TikTok treats saves as a strong quality signal because users save content they intend to revisit.", how: "We identify educational, tutorial, and inspirational content patterns that drive saves in your niche and recommend topics that match." },
            { name: "Reply Rate", id: "reply-rate", def: "Creator replies relative to comments received.", why: "Reply rate signals active community building. Responding to comments can boost video distribution and deepen audience loyalty.", how: "We recommend an optimal comment engagement strategy based on your capacity, time, and growth goals." },
            { name: "Stitch/Duet Rate", id: "stitch-duet-rate", def: "How often your content inspires stitch or duet responses from other creators.", why: "Stitches and duets extend your reach through other creators' audiences. Content that generates responses has inherently higher distribution potential.", how: "We identify collaborative content opportunities and formats that encourage stitches and duets — opinion prompts, challenges, and debate starters." },
            { name: "Profile Visit Rate", id: "profile-visit-rate", def: "Profile views generated per video view.", why: "Profile visits indicate curiosity about the creator beyond a single video. A high profile visit rate suggests content that builds personal brand interest.", how: "We optimize content for follower conversion by analyzing what drives profile visits — CTAs, personality-forward content, series formats." },
            { name: "Follow-Through Rate", id: "follow-through-rate", def: "New followers generated per video view.", why: "The most direct measure of content's growth impact. Follow-through rate reveals which content types convert casual viewers into followers.", how: "We correlate follow-through rate with content attributes (topic, hook style, CTA type) to identify and recommend your highest-converting formats." },
            { name: "Rewatch Rate", id: "rewatch-rate", def: "Estimated rewatches based on watch-time patterns that exceed 100% completion.", why: "Rewatches signal highly engaging content. TikTok counts rewatch time toward overall engagement, amplifying distribution for \"sticky\" videos.", how: "We identify content characteristics that drive repeat viewing — layered details, plot twists, dense information — and recommend those formats." },
            { name: "Sound Usage", id: "sound-usage", def: "How your sound choices compare to current platform and niche trends.", why: "Trending sounds boost discoverability through TikTok's sound search and browsing features. The right sound at the right time amplifies distribution.", how: "We recommend sound strategies based on sound velocity data — rising sounds before they peak, evergreen sounds for consistent performance." },
            { name: "Caption Engagement", id: "caption-engagement", def: "Interactions driven by caption content, including click-throughs on text and engagement prompted by caption text.", why: "Captions extend engagement beyond the video itself and can drive comments, shares, and profile visits. Well-crafted captions act as a second hook.", how: "We optimize caption strategy including length, opening hooks, question prompts, and call-to-action placement." }
          ]
        },
        trends: {
          title: "Trend Signals — 10 Factors",
          task: "Learn how OwlSeer tracks platform-wide and niche trends to help you act at the right time.",
          desc: "Trend signals monitor what is gaining traction across TikTok. The goal is timing: participating in a trend too early means low volume, too late means saturation. OwlSeer's trend signals help you find the optimal participation window for your niche.",
          linkText: "Trend Radar",
          linkUrl: "/sample-explorer/trend-radar",
          actionLine: "See trend signals on live data — [explore the Trend Radar demo](/sample-explorer/trend-radar).",
          signals: [
            { name: "Sound Velocity", id: "sound-velocity", def: "Rate of sound adoption across TikTok, measured as new video creations using a specific sound per hour.", why: "Early sound adoption increases viral potential before the sound becomes oversaturated. Sound velocity predicts whether a sound will peak in days or weeks.", how: "We alert you to rising sounds in your niche with optimal participation windows — typically when velocity is accelerating but before the sound reaches peak saturation." },
            { name: "Hashtag Momentum", id: "hashtag-momentum", def: "Growth rate of hashtag usage over a rolling 7-day window.", why: "Timing hashtag participation maximizes reach. Too early means low search volume, too late means your content competes with thousands of similar posts.", how: "We recommend optimal hashtag timing based on momentum curves and track competition level to avoid oversaturated tags." },
            { name: "Format Migration", id: "format-migration", def: "Trend patterns moving from other platforms (Instagram Reels, YouTube Shorts) to TikTok.", why: "Cross-platform trends often gain momentum on TikTok faster than native trends. Early detection of format migration creates first-mover advantage.", how: "We monitor format patterns on adjacent platforms and provide early warnings when a trend is likely to migrate to TikTok." },
            { name: "Niche Trend Velocity", id: "niche-trend-velocity", def: "Trend speed within your specific content category, compared to the platform-wide average.", why: "Niche trends have different lifecycles than platform-wide trends. A sound that peaks in 48 hours for comedy might sustain for two weeks in education.", how: "We provide customized trend timing recommendations calibrated to your specific niche's trend lifecycle." },
            { name: "Creator Adoption Rate", id: "creator-adoption-rate", def: "How quickly top creators in your niche adopt a given trend.", why: "Creator adoption signals trend legitimacy and potential longevity. When established creators in your space start using a trend, it validates the trend's relevance.", how: "We track adoption patterns among comparable creators and factor this into trend confidence scores." },
            { name: "Geographic Spread", id: "geographic-spread", def: "How a trend expands across regions and markets.", why: "Regional trends can go global. A trend starting in Southeast Asia may reach North America within 1-2 weeks. Early detection provides a competitive window.", how: "We identify emerging international trends relevant to your audience's geography and cultural context." },
            { name: "Platform Promotion", id: "platform-promotion", def: "Indicators that TikTok itself is actively promoting specific content types, formats, or features.", why: "Platform-promoted trends receive algorithm boost and increased distribution. Aligning with platform priorities can significantly amplify reach.", how: "We detect platform promotion patterns and factor them into recommendations when relevant to your niche." },
            { name: "Trend Saturation", id: "trend-saturation", def: "Current participation density in a trend, measured as active creators per hour.", why: "Oversaturated trends yield diminishing returns. When thousands of creators post the same trend simultaneously, individual videos get less distribution.", how: "We warn against late trend participation and suggest optimal exit points — the moment when continued participation yields negative returns." },
            { name: "Trend Longevity", id: "trend-longevity", def: "Estimated remaining lifespan of an active trend.", why: "Some trends sustain for weeks. Others fade in 48 hours. Resource allocation — scripting, filming, editing — should match expected lifespan.", how: "We prioritize trends with longer predicted lifespans for content that requires more production effort, and flag quick-fade trends for lighter formats." },
            { name: "Brand Safety Score", id: "brand-safety-score", def: "Risk assessment for participating in a trend, measured on a 0-100 scale.", why: "Some trends carry reputational risk for brands, professional creators, and educators. A trend may be popular but inappropriate for certain audiences.", how: "We flag potentially problematic trends with risk explanations and alternative recommendations, particularly for brand and business accounts." }
          ]
        },
        audience: {
          title: "Audience Signals — 8+ Factors",
          task: "Discover how OwlSeer maps your audience's behavior, demographics, and growth trajectory.",
          desc: "Audience signals describe who watches your content, when they watch, and how your audience composition changes over time. These signals shape scheduling, format selection, and long-term growth strategy.",
          linkText: "Intelligence Hub",
          linkUrl: "/sample-explorer/intelligence",
          actionLine: "See audience insights on real data — [explore the Intelligence Hub demo](/sample-explorer/intelligence).",
          signals: [
            { name: "Follower Growth Velocity", id: "follower-growth-velocity", def: "Rate of follower acquisition over a rolling 30-day window, measured as net new followers per day.", why: "Velocity indicates content-market fit and growth trajectory. Accelerating velocity suggests strategy alignment. Decelerating velocity signals a need to adjust.", how: "We correlate content types and posting patterns with growth velocity changes to identify which activities drive follower acquisition." },
            { name: "Active Hour Mapping", id: "active-hour-mapping", def: "When your audience is most engaged, mapped by day of week and hour (adjusted to your time zone).", why: "Posting timing affects initial distribution. Early engagement signals (views and interactions in the first 30-60 minutes) determine whether TikTok pushes a video to broader audiences.", how: "We generate personalized posting schedules based on your audience's active hours, visible in the best-time heatmap." },
            { name: "Audience Overlap", id: "audience-overlap", def: "Viewer similarity between your account and comparable creators in your niche.", why: "Audience overlap reveals content opportunities that worked for similar audiences. High overlap with a faster-growing creator suggests format or topic gaps you could fill.", how: "We identify proven content strategies from comparable creators and recommend adaptations calibrated to your specific audience." },
            { name: "Demographic Shifts", id: "demographic-shifts", def: "Changes in audience age, gender, geography, and interest composition over time.", why: "Audience changes require strategy adjustment. If your audience skews younger over time, your content tone and references may need to evolve.", how: "We alert you to significant demographic shifts and suggest content adjustments to maintain engagement with your evolving audience." },
            { name: "Engagement Decay", id: "engagement-decay", def: "How quickly engagement drops after posting, measured as interaction rate at 1h, 6h, 24h, and 7d post-publish.", why: "Decay rate indicates content longevity. Fast decay suggests spike-dependent content. Slow decay suggests evergreen value that continues generating views over time.", how: "We optimize for your goals — viral spikes (if you want reach) vs. sustained engagement (if you want community depth) — and recommend content types accordingly." },
            { name: "Cross-Video Journey", id: "cross-video-journey", def: "How viewers move through your content after watching one video, including profile visits, binge-watching patterns, and playlist engagement.", why: "Cross-video journey reveals which content creates \"rabbit holes\" — the videos that lead viewers to watch 5, 10, or 20 more of your videos.", how: "We optimize content sequencing, suggest complementary topics, and identify which videos serve as effective entry points to your profile." },
            { name: "Follower Loyalty Score", id: "follower-loyalty-score", def: "Repeat engagement rate from existing followers, measured as the percentage of followers who interact with each new video.", why: "Loyal followers amplify reach (their engagement signals boost distribution) and provide consistent baseline performance for every post.", how: "We identify content that builds loyalty (community posts, series, personal stories) vs. content that attracts new viewers (trending formats, discovery hooks) and recommend the right balance." },
            { name: "New vs. Returning", id: "new-vs-returning", def: "The ratio of first-time viewers to returning viewers for each video.", why: "A healthy mix indicates sustainable growth. All-new-viewer content is unstable (high reach, low retention). All-returning content limits growth (loyal but capped).", how: "We balance viral content recommendations (for new viewer acquisition) with community-building content (for returning viewer retention)." }
          ]
        },
        howTogether: {
          title: "How These Signals Work Together",
          task: "See how OwlSeer combines signals to produce insights no single metric reveals alone.",
          intro: "Signals do not operate in isolation. OwlSeer's AI finds correlations between signals across all three categories to generate recommendations that account for the full picture. Three examples:",
          examples: [
            { title: "Hook rate + sound velocity", desc: "When a trending sound matches your successful hook patterns, OwlSeer prioritizes that recommendation with higher confidence. The combination of proven hook performance and rising sound momentum creates a compounding opportunity." },
            { title: "Active hours + trend window", desc: "OwlSeer aligns trend participation timing with your audience's peak activity. Posting a trending format during your audience's most engaged window maximizes the early engagement signals that TikTok uses to decide distribution." },
            { title: "Share rate + comment sentiment", desc: "Content that drives both sharing and positive discussion gets flagged as a high-replication candidate. OwlSeer identifies the specific content attributes — topic, hook style, CTA — that produced the dual-signal outcome." }
          ],
          outro: "Learn exactly how our AI processes signal combinations in our [complete methodology documentation](/methodology)."
        },
        boundary: {
          title: "Boundary Box",
          data: "Data we use: Publicly available TikTok account metrics accessed through the official API. Signal definitions on this page reflect OwlSeer's current analytical framework.",
          notDo: "What we do not do: OwlSeer does not access TikTok's internal algorithm weights. Our signal weights are derived from observed correlations in public data, not from proprietary TikTok documentation.",
          variability: "Variability note: Signal predictive power varies by niche, account size, audience geography, and TikTok algorithm updates. Correlations described on this page are based on aggregate data and may not apply identically to every account."
        },
        cta: {
          title: "See Your Signals in Action",
          desc: "Connect your TikTok account and receive your personalized signal analysis in under three minutes. Or explore sample data to see how signals translate into strategy.",
          primary: "Start Free Analysis",
          secondary: "Explore Sample Data"
        },
        contextualConversion: {
           title: "What do these 30+ signals look like for YOU?",
           desc: "Connect your TikTok account and OwlSeer will generate your full signal profile in 3 minutes — including every signal value, niche benchmarks, and your top 3 improvement priorities.",
           button: "Generate My Signal Profile",
           note: "Read-only access. Connects in 30 seconds. Revoke anytime."
        }
      }
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
    },
    signalsPage: {
      hero: {
        title: "The 30+ TikTok Signals OwlSeer Tracks for Your Growth",
        lead: "OwlSeer goes beyond likes and views. We analyze 30+ weighted signals across engagement, trends, and audience behavior to generate strategies personalized to your account. This page defines every signal — what it measures, why it matters, and how OwlSeer uses it."
      },
      tldr: {
        content: "We track **12 engagement signals** (hook rate, watch-through, shares, and more), **10 trend signals** (sound velocity, hashtag momentum, saturation), and **8+ audience signals** (growth velocity, active hours, demographics). Each signal carries a weight based on its predictive power. Combined, they form your content profile — the foundation for every recommendation. See our [methodology](/methodology) for how these signals flow through our AI pipeline."
      },
      quickNav: {
        engagement: "Engagement (12)",
        trends: "Trends (10)",
        audience: "Audience (8+)"
      },
      sections: {
        engagement: {
          title: "Engagement Signals — 12 Factors",
          task: "Understand how OwlSeer measures the way viewers interact with your content.",
          desc: "Engagement signals quantify the relationship between your content and your audience. Each signal captures a different dimension of viewer behavior — from the first three seconds of a video to the moment someone taps \"share.\" OwlSeer weights these signals based on their correlation with actual growth outcomes.",
          linkText: "AER card",
          linkUrl: "/sample-explorer/dashboard#aer-card",
          actionLine: "See engagement signals on real account data — [explore the Dashboard demo](/sample-explorer/dashboard#aer-card).",
          signals: [
            { name: "Hook Rate", id: "hook-rate", def: "Percentage of viewers who watch past the first 3 seconds of your video.", why: "TikTok's algorithm heavily weights early retention. Hook rate is the single most important factor for For You Page distribution. A video that loses viewers in the first 3 seconds rarely gets pushed to broader audiences.", how: "We analyze successful hook patterns in your content history and recommend opening strategies that match your audience's preferences. If your hook rate trends below your niche average, OwlSeer flags it as an improvement priority." },
            { name: "Watch-Through Rate", id: "watch-through-rate", def: "Completion percentage across different video lengths.", why: "Completion signals content quality to the algorithm. Videos that hold attention longer get prioritized for wider distribution. Watch-through rate also reveals optimal video length for your specific audience.", how: "We determine your optimal video length range and identify pacing patterns — transitions, information density, visual changes — that maximize completion for your audience." },
            { name: "Share Rate", id: "share-rate", def: "Number of shares relative to total views.", why: "Shares indicate viral potential and are one of the strongest signals for For You Page qualification. A shared video reaches audiences beyond the algorithm's initial distribution.", how: "We identify share-worthy content characteristics in your niche — humor patterns, educational \"aha\" moments, relatable situations — and recommend formats that encourage sharing." },
            { name: "Comment Sentiment", id: "comment-sentiment", def: "AI analysis of comment tone, quality, and engagement depth.", why: "Positive sentiment correlates with algorithm boost. But volume matters too — videos that spark discussion (even debate) signal community engagement, which TikTok rewards.", how: "We guide content toward topics that drive meaningful comments. If sentiment trends negative, OwlSeer flags the shift and suggests adjustments." },
            { name: "Save Rate", id: "save-rate", def: "Number of saves relative to total views.", why: "Saves indicate high-value, reference-worthy content. TikTok treats saves as a strong quality signal because users save content they intend to revisit.", how: "We identify educational, tutorial, and inspirational content patterns that drive saves in your niche and recommend topics that match." },
            { name: "Reply Rate", id: "reply-rate", def: "Creator replies relative to comments received.", why: "Reply rate signals active community building. Responding to comments can boost video distribution and deepen audience loyalty.", how: "We recommend an optimal comment engagement strategy based on your capacity, time, and growth goals." },
            { name: "Stitch/Duet Rate", id: "stitch-duet-rate", def: "How often your content inspires stitch or duet responses from other creators.", why: "Stitches and duets extend your reach through other creators' audiences. Content that generates responses has inherently higher distribution potential.", how: "We identify collaborative content opportunities and formats that encourage stitches and duets — opinion prompts, challenges, and debate starters." },
            { name: "Profile Visit Rate", id: "profile-visit-rate", def: "Profile views generated per video view.", why: "Profile visits indicate curiosity about the creator beyond a single video. A high profile visit rate suggests content that builds personal brand interest.", how: "We optimize content for follower conversion by analyzing what drives profile visits — CTAs, personality-forward content, series formats." },
            { name: "Follow-Through Rate", id: "follow-through-rate", def: "New followers generated per video view.", why: "The most direct measure of content's growth impact. Follow-through rate reveals which content types convert casual viewers into followers.", how: "We correlate follow-through rate with content attributes (topic, hook style, CTA type) to identify and recommend your highest-converting formats." },
            { name: "Rewatch Rate", id: "rewatch-rate", def: "Estimated rewatches based on watch-time patterns that exceed 100% completion.", why: "Rewatches signal highly engaging content. TikTok counts rewatch time toward overall engagement, amplifying distribution for \"sticky\" videos.", how: "We identify content characteristics that drive repeat viewing — layered details, plot twists, dense information — and recommend those formats." },
            { name: "Sound Usage", id: "sound-usage", def: "How your sound choices compare to current platform and niche trends.", why: "Trending sounds boost discoverability through TikTok's sound search and browsing features. The right sound at the right time amplifies distribution.", how: "We recommend sound strategies based on sound velocity data — rising sounds before they peak, evergreen sounds for consistent performance." },
            { name: "Caption Engagement", id: "caption-engagement", def: "Interactions driven by caption content, including click-throughs on text and engagement prompted by caption text.", why: "Captions extend engagement beyond the video itself and can drive comments, shares, and profile visits. Well-crafted captions act as a second hook.", how: "We optimize caption strategy including length, opening hooks, question prompts, and call-to-action placement." }
          ]
        },
        trends: {
          title: "Trend Signals — 10 Factors",
          task: "Learn how OwlSeer tracks platform-wide and niche trends to help you act at the right time.",
          desc: "Trend signals monitor what is gaining traction across TikTok. The goal is timing: participating in a trend too early means low volume, too late means saturation. OwlSeer's trend signals help you find the optimal participation window for your niche.",
          linkText: "Trend Radar",
          linkUrl: "/sample-explorer/trend-radar",
          actionLine: "See trend signals on live data — [explore the Trend Radar demo](/sample-explorer/trend-radar).",
          signals: [
            { name: "Sound Velocity", id: "sound-velocity", def: "Rate of sound adoption across TikTok, measured as new video creations using a specific sound per hour.", why: "Early sound adoption increases viral potential before the sound becomes oversaturated. Sound velocity predicts whether a sound will peak in days or weeks.", how: "We alert you to rising sounds in your niche with optimal participation windows — typically when velocity is accelerating but before the sound reaches peak saturation." },
            { name: "Hashtag Momentum", id: "hashtag-momentum", def: "Growth rate of hashtag usage over a rolling 7-day window.", why: "Timing hashtag participation maximizes reach. Too early means low search volume, too late means your content competes with thousands of similar posts.", how: "We recommend optimal hashtag timing based on momentum curves and track competition level to avoid oversaturated tags." },
            { name: "Format Migration", id: "format-migration", def: "Trend patterns moving from other platforms (Instagram Reels, YouTube Shorts) to TikTok.", why: "Cross-platform trends often gain momentum on TikTok faster than native trends. Early detection of format migration creates first-mover advantage.", how: "We monitor format patterns on adjacent platforms and provide early warnings when a trend is likely to migrate to TikTok." },
            { name: "Niche Trend Velocity", id: "niche-trend-velocity", def: "Trend speed within your specific content category, compared to the platform-wide average.", why: "Niche trends have different lifecycles than platform-wide trends. A sound that peaks in 48 hours for comedy might sustain for two weeks in education.", how: "We provide customized trend timing recommendations calibrated to your specific niche's trend lifecycle." },
            { name: "Creator Adoption Rate", id: "creator-adoption-rate", def: "How quickly top creators in your niche adopt a given trend.", why: "Creator adoption signals trend legitimacy and potential longevity. When established creators in your space start using a trend, it validates the trend's relevance.", how: "We track adoption patterns among comparable creators and factor this into trend confidence scores." },
            { name: "Geographic Spread", id: "geographic-spread", def: "How a trend expands across regions and markets.", why: "Regional trends can go global. A trend starting in Southeast Asia may reach North America within 1-2 weeks. Early detection provides a competitive window.", how: "We identify emerging international trends relevant to your audience's geography and cultural context." },
            { name: "Platform Promotion", id: "platform-promotion", def: "Indicators that TikTok itself is actively promoting specific content types, formats, or features.", why: "Platform-promoted trends receive algorithm boost and increased distribution. Aligning with platform priorities can significantly amplify reach.", how: "We detect platform promotion patterns and factor them into recommendations when relevant to your niche." },
            { name: "Trend Saturation", id: "trend-saturation", def: "Current participation density in a trend, measured as active creators per hour.", why: "Oversaturated trends yield diminishing returns. When thousands of creators post the same trend simultaneously, individual videos get less distribution.", how: "We warn against late trend participation and suggest optimal exit points — the moment when continued participation yields negative returns." },
            { name: "Trend Longevity", id: "trend-longevity", def: "Estimated remaining lifespan of an active trend.", why: "Some trends sustain for weeks. Others fade in 48 hours. Resource allocation — scripting, filming, editing — should match expected lifespan.", how: "We prioritize trends with longer predicted lifespans for content that requires more production effort, and flag quick-fade trends for lighter formats." },
            { name: "Brand Safety Score", id: "brand-safety-score", def: "Risk assessment for participating in a trend, measured on a 0-100 scale.", why: "Some trends carry reputational risk for brands, professional creators, and educators. A trend may be popular but inappropriate for certain audiences.", how: "We flag potentially problematic trends with risk explanations and alternative recommendations, particularly for brand and business accounts." }
          ]
        },
        audience: {
          title: "Audience Signals — 8+ Factors",
          task: "Discover how OwlSeer maps your audience's behavior, demographics, and growth trajectory.",
          desc: "Audience signals describe who watches your content, when they watch, and how your audience composition changes over time. These signals shape scheduling, format selection, and long-term growth strategy.",
          linkText: "Intelligence Hub",
          linkUrl: "/sample-explorer/intelligence",
          actionLine: "See audience insights on real data — [explore the Intelligence Hub demo](/sample-explorer/intelligence).",
          signals: [
            { name: "Follower Growth Velocity", id: "follower-growth-velocity", def: "Rate of follower acquisition over a rolling 30-day window, measured as net new followers per day.", why: "Velocity indicates content-market fit and growth trajectory. Accelerating velocity suggests strategy alignment. Decelerating velocity signals a need to adjust.", how: "We correlate content types and posting patterns with growth velocity changes to identify which activities drive follower acquisition." },
            { name: "Active Hour Mapping", id: "active-hour-mapping", def: "When your audience is most engaged, mapped by day of week and hour (adjusted to your time zone).", why: "Posting timing affects initial distribution. Early engagement signals (views and interactions in the first 30-60 minutes) determine whether TikTok pushes a video to broader audiences.", how: "We generate personalized posting schedules based on your audience's active hours, visible in the best-time heatmap." },
            { name: "Audience Overlap", id: "audience-overlap", def: "Viewer similarity between your account and comparable creators in your niche.", why: "Audience overlap reveals content opportunities that worked for similar audiences. High overlap with a faster-growing creator suggests format or topic gaps you could fill.", how: "We identify proven content strategies from comparable creators and recommend adaptations calibrated to your specific audience." },
            { name: "Demographic Shifts", id: "demographic-shifts", def: "Changes in audience age, gender, geography, and interest composition over time.", why: "Audience changes require strategy adjustment. If your audience skews younger over time, your content tone and references may need to evolve.", how: "We alert you to significant demographic shifts and suggest content adjustments to maintain engagement with your evolving audience." },
            { name: "Engagement Decay", id: "engagement-decay", def: "How quickly engagement drops after posting, measured as interaction rate at 1h, 6h, 24h, and 7d post-publish.", why: "Decay rate indicates content longevity. Fast decay suggests spike-dependent content. Slow decay suggests evergreen value that continues generating views over time.", how: "We optimize for your goals — viral spikes (if you want reach) vs. sustained engagement (if you want community depth) — and recommend content types accordingly." },
            { name: "Cross-Video Journey", id: "cross-video-journey", def: "How viewers move through your content after watching one video, including profile visits, binge-watching patterns, and playlist engagement.", why: "Cross-video journey reveals which content creates \"rabbit holes\" — the videos that lead viewers to watch 5, 10, or 20 more of your videos.", how: "We optimize content sequencing, suggest complementary topics, and identify which videos serve as effective entry points to your profile." },
            { name: "Follower Loyalty Score", id: "follower-loyalty-score", def: "Repeat engagement rate from existing followers, measured as the percentage of followers who interact with each new video.", why: "Loyal followers amplify reach (their engagement signals boost distribution) and provide consistent baseline performance for every post.", how: "We identify content that builds loyalty (community posts, series, personal stories) vs. content that attracts new viewers (trending formats, discovery hooks) and recommend the right balance." },
            { name: "New vs. Returning", id: "new-vs-returning", def: "The ratio of first-time viewers to returning viewers for each video.", why: "A healthy mix indicates sustainable growth. All-new-viewer content is unstable (high reach, low retention). All-returning content limits growth (loyal but capped).", how: "We balance viral content recommendations (for new viewer acquisition) with community-building content (for returning viewer retention)." }
          ]
        },
        howTogether: {
          title: "How These Signals Work Together",
          task: "See how OwlSeer combines signals to produce insights no single metric reveals alone.",
          intro: "Signals do not operate in isolation. OwlSeer's AI finds correlations between signals across all three categories to generate recommendations that account for the full picture. Three examples:",
          examples: [
            { title: "Hook rate + sound velocity", desc: "When a trending sound matches your successful hook patterns, OwlSeer prioritizes that recommendation with higher confidence. The combination of proven hook performance and rising sound momentum creates a compounding opportunity." },
            { title: "Active hours + trend window", desc: "OwlSeer aligns trend participation timing with your audience's peak activity. Posting a trending format during your audience's most engaged window maximizes the early engagement signals that TikTok uses to decide distribution." },
            { title: "Share rate + comment sentiment", desc: "Content that drives both sharing and positive discussion gets flagged as a high-replication candidate. OwlSeer identifies the specific content attributes — topic, hook style, CTA — that produced the dual-signal outcome." }
          ],
          outro: "Learn exactly how our AI processes signal combinations in our [complete methodology documentation](/methodology)."
        },
        boundary: {
          title: "Boundary Box",
          data: "Data we use: Publicly available TikTok account metrics accessed through the official API. Signal definitions on this page reflect OwlSeer's current analytical framework.",
          notDo: "What we do not do: OwlSeer does not access TikTok's internal algorithm weights. Our signal weights are derived from observed correlations in public data, not from proprietary TikTok documentation.",
          variability: "Variability note: Signal predictive power varies by niche, account size, audience geography, and TikTok algorithm updates. Correlations described on this page are based on aggregate data and may not apply identically to every account."
        },
        cta: {
          title: "See Your Signals in Action",
          desc: "Connect your TikTok account and receive your personalized signal analysis in under three minutes. Or explore sample data to see how signals translate into strategy.",
          primary: "Start Free Analysis",
          secondary: "Explore Sample Data"
        },
        contextualConversion: {
            title: "What do these 30+ signals look like for YOU?",
            desc: "Connect your TikTok account and OwlSeer will generate your full signal profile in 3 minutes — including every signal value, niche benchmarks, and your top 3 improvement priorities.",
            button: "Generate My Signal Profile",
            note: "Read-only access. Connects in 30 seconds. Revoke anytime."
        }
      }
    }
  }
};
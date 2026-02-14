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
    guides: 'Guides',
    nav: {
      solutions: "Solutions",
      platform: "Platform",
      useCases: "Use Cases",
      byRole: "By Role",
      learn: "Learn",
      trustSupport: "Trust & Support",
      trustSecurity: "Trust & Security",
      language: "Language",
      glossary: "Glossary",
      links: {
        signals: "30+ Signals",
        interactiveSample: "Interactive Sample",
        trendPrediction: "Trend Prediction",
        contentDiagnosis: "Content Diagnosis",
        scriptGeneration: "Script Generation",
        postingSchedule: "Posting Schedule",
        hashtagStrategy: "Hashtag Strategy",
        contentCreators: "Content Creators",
        localBusiness: "Local Business",
        agencies: "Agencies",
        brands: "Brands",
        ecommerceSellers: "E-commerce Sellers",
        privacy: "Privacy",
        terms: "Terms",
        cookies: "Cookies",
        security: "Security"
      },
      desc: {
        howItWorks: "Get started in 3 steps",
        methodology: "Our 5-step AI process",
        signals: "What we track",
        interactiveSample: "See OwlSeer in action",
        trySample: "See it on real data"
      },
      actions: {
        trySample: "Try Sample",
        startFree: "Start Free",
        startFreeTrial: "Start Free Trial",
        trySampleCta: "TRY THE SAMPLE"
      },
      darkMode: {
        toggle: "Toggle Dark Mode",
        switchToLight: "Switch to Light Mode",
        switchToDark: "Switch to Dark Mode"
      }
    },
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
      subtitle: "Stop guessing. Get AI-backed trends and scripts built from your data.",
      subtitle2: "",
      ctaPrimary: "Try Sample",
      ctaSecondaryButton: "Start Now",
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
      heading: {
        title: "From insight to publish-ready output in one flow",
        subtitle:
          "OwlSeer removes the gap between strategy and execution so creators can move from signal to script with confidence."
      },
      highlights: {
        decisionCycle: { label: "Decision Cycle", desc: "Signal detection to execution in minutes, not days." },
        growthSignal: { label: "Growth Signal", desc: "Prioritize opportunities with velocity and niche fit." },
        executionQuality: { label: "Execution Quality", desc: "Every recommendation includes reasoning you can trust." }
      },
      labels: {
        capability: "Capability",
        outcome: "Outcome",
        learnMore: "Learn more"
      },
      opportunities: {
        step: "Step 01",
        title: "Spot Trends Before They Peak",
        desc: "Stop chasing yesterday’s viral hits. Our AI analyzes millions of signals to find high-potential topics tailored specifically to your niche.",
        statA: "24/7 signal scan",
        statB: "Opportunity-first ranking",
        bullets: ["Find rising topics before saturation.", "Prioritize topics with proven niche fit."],
        mock: {
          eyebrow: "Trend Radar",
          title: "High-fit opportunity detected",
          score: "94 score",
          metrics: [
            { label: "Velocity", value: "+128%" },
            { label: "Competition", value: "Low" },
            { label: "View Pool", value: "45M" }
          ],
          bullets: [
            "High overlap with your top-performing audience segment.",
            "Recommended posting window opens in the next 6 hours."
          ]
        }
      },
      planning: {
        step: "Step 02",
        title: "Execution, Not Just Planning",
        desc: "Turn strategy into action. Get a weekly production schedule that balances high-growth risks with stable, trust-building content.",
        statA: "Weekly cadence map",
        statB: "Balanced content mix",
        bullets: ["Convert recommendations into an exact shoot calendar.", "Maintain consistency without burning creative energy."],
        mock: {
          eyebrow: "Execution Plan",
          title: "This week's production cadence",
          postCount: "3 posts",
          schedule: [
            { day: "Mon", date: "24", task: "Trend-first opener", tag: "Growth" },
            { day: "Wed", date: "26", task: "Trust-building story", tag: "Community" },
            { day: "Fri", date: "28", task: "Conversion CTA video", tag: "Revenue" }
          ]
        }
      },
      analytics: {
        step: "Step 03",
        title: "Decode Your Content DNA",
        desc: "Understand exactly why your best videos perform. We break down your content into structural elements to replicate success.",
        statA: "Frame-level diagnosis",
        statB: "Repeatable winning patterns",
        bullets: ["Pinpoint what drives retention and completion.", "Iterate faster with evidence-backed edits."],
        mock: {
          eyebrow: "Performance DNA",
          title: "Replicate what already wins",
          pill: "Top 5%",
          metrics: [
            { label: "Hook Strength", value: "9.8/10", width: "w-[95%]" },
            { label: "Audience Retention", value: "72%", width: "w-[72%]" },
            { label: "CTA Completion", value: "38%", width: "w-[38%]" }
          ]
        }
      }
    },
    coreFeatures: {
      badge: "Powerhouse",
      title: "Everything you need to",
      titleHighlight: "dominate",
      subtitle: "A unified operating system for modern creators. Stop juggling disjointed tools.",
      metrics: [
        { label: "Publishing speed", value: "3x faster" },
        { label: "Planning confidence", value: "Signal-backed" },
        { label: "Execution consistency", value: "Weekly cadence" }
      ],
      copilot: {
        title: "AI Strategy Copilot",
        desc: "Your 24/7 creative partner. Generate high-conversion scripts, brainstorm hooks, and get instant feedback on your ideas.",
        badge: "Real-time generation",
        chat: {
          user: "Give me a stronger hook for my next niche video.",
          assistantLabel: "Suggested Hook",
          assistant: "Stop copying generic intros. Here's the 3-second opener that keeps your viewers."
        }
      },
      trend: {
        title: "Trend Intelligence",
        desc: "Spot opportunities before they peak. Our AI analyzes millions of data points to find *your* next viral topic.",
        liveSignals: "Live Signals",
        list: { viewsLabel: "views" }
      },
      goals: {
        title: "Smart Goals",
        desc: "Turn vague ambitions into actionable daily tasks.",
        ringLabel: "Goal",
        tasks: [
          { task: "Record opening hook variation", done: true },
          { task: "Review trend shortlist", done: false },
          { task: "Schedule high-intent post", done: false }
        ]
      },
      analytics: { title: "Deep Analytics", badge: "+124% YoY" },
      features: { scheduling: "Smart Scheduling", prediction: "Viral Prediction", multiAccount: "Multi-Account", reports: "Instant Reports" }
    },
    valueProposition: {
      badge: "Strategic Clarity",
      title: "Stop guessing what to post",
      subtitle: "OwlSeer tells you what to do next on TikTok.",
      cards: [
        { title: "Actionable Plans", desc: "Get a complete content plan in under 3 minutes." },
        { title: "AI Scripts", desc: "AI-generated scripts ready to shoot today." },
        { title: "Data-Driven", desc: "For creators tired of random posting." }
      ],
      trust: ["No miracle promises", "No auto-posting", "No password required"],
      metrics: [
        { label: "Plan turnaround", value: "< 3 min" },
        { label: "Signals analyzed", value: "30+" },
        { label: "Publishing rhythm", value: "Weekly" }
      ],
      cta: {
        primary: "See It In Action",
        secondary: "How it works"
      }
    },
    pricingSection: {
      title: "Simple, Transparent Pricing",
      subtitle: "Start your 7-day free trial. Cancel anytime.",
      labels: { mostPopular: "Most Popular" },
      monthly: "Monthly",
      yearly: "Yearly",
      save: "20% OFF",
      period: "mo",
      plans: {
        creator: {
          name: "Basic",
          summary: "Solo creator plan to launch your content flywheel fast.",
          features: [
            "1 account / 1 seat for focused solo execution",
            "30 free video analyses per month",
            "600 monthly credits for Copilot chats",
            "AI content pipeline: profile, diagnosis, goals, scripts",
            "Essential AI Copilot for real-time guidance"
          ]
        },
        growth: {
          name: "Growth",
          summary: "Small-team plan for repeatable, high-volume content output.",
          features: [
            "3 accounts / 4 seats for cross-role collaboration",
            "120 free video analyses per month",
            "1,200 monthly credits for intensive ideation",
            "End-to-end scheduling and script workflow",
            "Batch task processing for multiple topics",
            "Basic report export for weekly and monthly reviews"
          ]
        },
        scale: {
          name: "Pro",
          summary: "Agency and multi-account plan focused on conversion and speed.",
          features: [
            "8 accounts / 10 seats for multi-role operations",
            "400 free video analyses per month",
            "4,000 monthly credits for heavy reasoning tasks",
            "Priority compute queue for peak-time speed",
            "High-capacity AI Copilot with longer context"
          ]
        }
      },
      cta: { trial: "Start Free Trial", buy: "Buy Now" },
      footer: { secure: "Secure payment", trial: "7-day free trial", cancel: "Cancel anytime" }
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
          { q: "How does the 7-day free trial work?", a: "You'll get full access to the Pro plan features for 7 days. We won't charge your card until the trial ends. You can cancel anytime during the trial to avoid being charged." },
          { q: "Do I need to give you my TikTok password?", a: "No! We use the official TikTok API and OAuth 2.0 for secure connection. We never see or store your password, and we only have the permissions you explicitly grant." },
          { q: "What happens if I add more accounts?", a: "Upgrade to the next tier as you scale. Basic supports 1 account, Growth supports 3 accounts, and Pro supports up to 8 accounts with 10 team seats." },
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
      demo: "View Sample"
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
          answer: "Yes. We provide a public Sample experience that shows the full product UI using an example creator account. You can explore every feature—strategy overview, script suggestions, trend radar, and posting calendar—without creating an account or providing any personal information.\n\nThe Sample uses realistic demo data from a fictional creator account, so you can see exactly what kind of outputs and analysis you would get with your own account.\n\nVerify: 🔗 [Dashboard (/social/simulation/dashboard)](/social/simulation/dashboard), 🔗 [Trend Radar (/social/simulation/trends)](/social/simulation/trends), 🔗 [Content Studio (/social/simulation/studio)](/social/simulation/studio)",
          category: "Sample"
        },
        {
          id: 'q2',
          question: "Is the Sample the full product or a limited preview?",
          answer: "The Sample is the full product—same interface, same features, same AI analysis. The only difference is the data source: Sample uses a pre-configured demo account, while the real product uses your connected TikTok account.\n\nWhat's the same:\n- Complete dashboard with all modules accessible\n- Real AI analysis running on the data\n- Full script generation capabilities\n- Interactive calendar and scheduling views\n\nWhat's different:\n- Data comes from a fictional \"TechReviews_US\" creator account\n- You can't save changes or export personalized reports\n- Signup prompts appear when you try account-specific actions\n\nVerify: 🔗 [Dashboard (/social/simulation/dashboard)](/social/simulation/dashboard)",
          category: "Sample"
        },
        {
          id: 'q3',
          question: "Do I need to connect my TikTok account to see value?",
          answer: "No—you can get significant value from Sample without connecting anything.\n\nSample lets you:\n- Understand what OwlSeer outputs look like\n- Learn our methodology and signal categories\n- See how scripts and calendars are structured\n- Evaluate if the tool fits your workflow\n\nConnecting your TikTok is only needed when you want:\n- Analysis based on YOUR account's actual performance\n- Personalized recommendations for YOUR niche and audience\n- Saved strategies and exportable reports\n\nMany users spend 10-15 minutes in Sample before deciding whether to connect. That's exactly how we designed it.\n\nVerify: 🔗 [Dashboard (/social/simulation/dashboard)](/social/simulation/dashboard)",
          category: "Sample"
        },
        {
          id: 'q4',
          question: "What does OwlSeer actually output?",
          answer: "OwlSeer outputs four main deliverables:\n\n1. **Strategy Overview**\n- Weekly content direction and priorities\n- Goals aligned with your stated objectives\n- Key metrics to focus on\n\n2. **Content Ideas**\n- Topic suggestions based on your niche and trends\n- Each idea includes \"why this could work for you\"\n- Difficulty/effort estimates\n\n3. **Scripts**\n- Full script structure: hook → body → CTA\n- Multiple variations per idea\n- Customizable to your style\n\n4. **Posting Calendar**\n- Optimal posting times based on your audience\n- Weekly/monthly view\n- Integration-ready format\n\nEvery output includes a \"Why this recommendation\" section that traces back to specific signals and templates.\n\nVerify: 🔗 [Dashboard (/social/simulation/dashboard)](/social/simulation/dashboard), 🔗 [Content Studio (/social/simulation/studio)](/social/simulation/studio), 🔗 [Scheduling (/social/simulation/scheduling)](/social/simulation/scheduling)",
          category: "Outputs"
        },
        {
          id: 'q5',
          question: "What do the scripts look like?",
          answer: "Our scripts are structured for TikTok's format:\n\n**Hook (0-3 seconds)**\n- Attention-grabbing opener\n- Multiple hook variations to test\n- Notes on why this hook style matches your audience\n\n**Body (3-45 seconds)**\n- Main content beats\n- Visual/action suggestions\n- Pacing recommendations\n\n**CTA (final seconds)**\n- Clear call-to-action\n- Options: follow, comment, save, visit link\n- Matched to your current goals\n\n**Example structure:**\n\nHook: \"Stop doing [X]—here's what actually works\"\nBody: \n- Beat 1: State the problem (5-10s)\n- Beat 2: Show the solution (15-20s)\n- Beat 3: Proof/result (10-15s)\nCTA: \"Save this for later and follow for more [niche] tips\"\n\nWhy this works for you: Your educational content performs 2.1x better than entertainment. Question-based hooks get 34% higher completion on your account.\n\nVerify: 🔗 [Content Studio (/social/simulation/studio)](/social/simulation/studio)",
          category: "Outputs"
        },
        {
          id: 'q6',
          question: "Can I export my strategy and scripts?",
          answer: "Export options depend on your plan:\n\n**Free Tier:**\n- Copy individual scripts to clipboard\n- Screenshot/print any page\n\n**Growth Tier ($19/mo):**\n- Export scripts to PDF\n- Export calendar to Google Calendar / iCal\n- Basic Notion integration\n\n**Scale Tier ($49/mo):**\n- Full strategy export (PDF, Notion, Google Docs)\n- API access for custom integrations\n- Team sharing and collaboration exports\n\nAll exports preserve the \"why\" reasoning, so you can reference it later.\n\nNote: In Sample mode, exports are disabled since you're viewing demo data. Connect your account to enable exports.\n\nVerify: 🔗 [Pricing (/social/pricing)](/social/pricing), 🔗 [Content Studio (/social/simulation/studio)](/social/simulation/studio)",
          category: "Outputs"
        },
        {
          id: 'q7',
          question: "How does OwlSeer analyze my account?",
          answer: "Our analysis examines 30+ signals across six categories:\n\n**1. Engagement Signals**\n- View-to-like ratio, comment sentiment, share frequency\n- Save rate, profile visits, watch time, replay rate\n\n**2. Timing Patterns**\n- Peak activity hours, day-of-week trends\n- Follower timezone distribution, posting consistency\n\n**3. Content DNA**\n- Hook style effectiveness, optimal video length\n- Music usage patterns, hashtag strategy, caption structure\n\n**4. Audience Insights**\n- Follower growth rate, demographic patterns\n- Interest clusters, engagement personas\n\n**5. Competitive Signals**\n- Niche benchmarks, top performer gaps\n- Content gap analysis, timing comparison\n\n**6. Trend Matching**\n- Trending sounds, viral formats\n- Emerging topics, platform shifts\n\nEach signal is weighted based on your specific goals and niche. The analysis typically completes in 30-60 seconds.\n\nVerify: 🔗 [Signals (/social/how-it-works#signals)](/social/how-it-works#signals), 🔗 [Account Intelligence (/social/simulation/intelligence)](/social/simulation/intelligence)",
          category: "Methodology"
        },
        {
          id: 'q8',
          question: "What are the \"30+ signals\" you mention?",
          answer: "\"30+ signals\" refers to the distinct data points we analyze per account. Here's the breakdown:\n\n**Engagement (7 signals)**\n- View-to-like ratio\n- Comment sentiment score\n- Share frequency\n- Save rate\n- Profile visit rate\n- Average watch time\n- Replay rate\n\n**Timing (5 signals)**\n- Peak activity hours\n- Day-of-week patterns\n- Timezone distribution\n- Posting consistency score\n- Seasonal trends\n\n**Content DNA (7 signals)**\n- Hook effectiveness score\n- Optimal video length\n- Music impact\n- Hashtag performance\n- Caption engagement\n- Thumbnail click rate\n- Format preferences\n\n**Audience (5 signals)**\n- Growth velocity\n- Demographic clusters\n- Interest mapping\n- Engagement personas\n- Loyalty indicators\n\n**Competitive (4 signals)**\n- Niche benchmarks\n- Gap analysis\n- Timing comparison\n- Content differentiation\n\n**Trends (4+ signals)**\n- Sound velocity\n- Format emergence\n- Topic momentum\n- Platform shifts\n\nTotal: 32 core signals, with additional sub-signals depending on data availability.\n\nVerify: 🔗 [Signals (/trust#signals)](/trust#signals), 🔗 [How It Works (/social/how-it-works#signals)](/social/how-it-works#signals)",
          category: "Methodology"
        },
        {
          id: 'q9',
          question: "How do you generate script recommendations?",
          answer: "Script generation follows a four-step process:\n\n**Step 1: Signal Analysis**\n- Analyze your 30+ signals\n- Identify strengths (what's working)\n- Identify gaps (what to improve)\n\n**Step 2: Template Matching**\n- Cross-reference with 200+ content templates\n- Filter by your niche (50+ categories)\n- Filter by your stage (beginner/growing/established)\n- Filter by your goals (growth/engagement/monetization)\n\n**Step 3: Personalization**\n- Adapt template to your content DNA\n- Match your typical video length\n- Align with your hook style preferences\n- Incorporate trending elements relevant to you\n\n**Step 4: Reasoning Documentation**\n- Attach \"why\" to every recommendation\n- Link back to specific signals\n- Provide confidence indicators\n\nThe result: scripts that feel like they were written for you, because they were—based on data, not guesses.\n\nVerify: 🔗 [Methodology (/social/how-it-works#synthesize)](/social/how-it-works#synthesize), 🔗 [Content Studio (/social/simulation/studio)](/social/simulation/studio)",
          category: "Methodology"
        },
        {
          id: 'q10',
          question: "Does OwlSeer guarantee viral content?",
          answer: "No—and we're skeptical of any tool that claims to.\n\n**What we CAN do:**\n- Increase your probability of creating content that resonates\n- Identify patterns in what works for your specific account\n- Suggest optimal timing, topics, and formats based on data\n- Help you post more consistently with better structure\n\n**What we CANNOT do:**\n- Guarantee any video will go viral\n- Control TikTok's algorithm\n- Predict exactly how the platform will distribute your content\n- Override the inherent unpredictability of social media\n\n**Our philosophy:**\nVirality is partly luck. Strategy improves your odds. We focus on the controllable factors—content quality, timing, consistency—while being honest that no tool can guarantee outcomes.\n\nWe'd rather you succeed with realistic expectations than fail with inflated promises.\n\nVerify: 🔗 [Limits (/social/how-it-works#limits)](/social/how-it-works#limits), 🔗 [Boundaries (/social/faq#boundaries)](/social/faq#boundaries)",
          category: "Boundaries"
        },
        {
          id: 'q11',
          question: "Will OwlSeer auto-post for me?",
          answer: "No—we intentionally don't offer auto-posting.\n\n**Why we don't auto-post:**\n\n1. **Creative control**: You should review and potentially edit every piece before it goes live\n\n2. **Platform compliance**: Auto-posting can violate TikTok's terms in some implementations\n\n3. **Quality assurance**: AI-generated scripts benefit from human review before posting\n\n4. **Authenticity**: Your audience follows YOU—automated posting can feel inauthentic\n\n**What we DO provide:**\n- Scripts ready to record\n- Optimal timing suggestions\n- Calendar reminders\n- Integration with scheduling tools (you still approve each post)\n\n**Our philosophy:**\nWe're a strategy partner, not an automation bot. We do the analysis and planning; you maintain creative control.\n\nVerify: 🔗 [Boundaries (/social/faq#boundaries)](/social/faq#boundaries), 🔗 [Scheduling (/social/simulation/scheduling)](/social/simulation/scheduling)",
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
          answer: "Here's a detailed breakdown:\n\n**Free Plan ($0/mo)**\n- 1 strategy analysis per month\n- Basic engagement insights\n- Access to Sample dashboard\n- Community support (forum)\n- Best for: Trying the tool, occasional use\n\n**Growth Plan ($19/mo)**\n- 10 strategy analyses per month\n- Full script generation with export\n- Posting calendar integration\n- Trend radar access\n- Email support (48h response)\n- Best for: Active creators, regular content producers\n\n**Scale Plan ($49/mo)**\n- Unlimited strategy analyses\n- Priority support (24h response)\n- Team collaboration (up to 5 seats)\n- API access for custom integrations\n- Advanced analytics dashboard\n- Dedicated account manager (optional)\n- Best for: Agencies, serious creators, teams\n\nAll plans include access to Sample mode and the core methodology documentation.\n\nVerify: 🔗 [Pricing (/social/pricing#compare)](/social/pricing#compare), 🔗 [Simulation (/social/simulation)](/social/simulation)",
          category: "Billing"
        },
        {
          id: 'q16',
          question: "Can I cancel my subscription anytime?",
          answer: "Yes—we believe in earning your subscription every month.\n\n**How to cancel:**\n1. Go to Settings → Billing\n2. Click \"Cancel Subscription\"\n3. Confirm (no survey required, no retention tactics)\n4. Done\n\n**What happens after cancellation:**\n- You keep full access until the end of your current billing period\n- Generated strategies and scripts remain accessible\n- On the last day, your account downgrades to Free tier\n- Your data stays unless you delete it\n\n**Refund policy:**\n- Annual plans: Prorated refund within 30 days\n- Monthly plans: No refund for current month, no future charges\n- Disputes: Contact support@owlseer.com\n\n**Re-subscribing:**\n- You can re-subscribe anytime\n- Your history and settings are preserved\n- No penalty for canceling and returning\n\nVerify: 🔗 [Billing (/social/pricing#billing)](/social/pricing#billing)",
          category: "Billing"
        }
      ]
    },
    howItWorksPage: {
      hero: {
        title: "Your TikTok Strategy in",
        titleHighlight: "3 Steps",
        lead: "OwlSeer connects to your TikTok account, analyzes your data through 30+ signals, and delivers a personalized content strategy — all in under three minutes. Here is exactly what to expect.",
        cta: "Try Free Sample",
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
        secondary: "Explore Interactive Sample"
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
        secondary: "Try Intelligence Sample"
      }
    },
    footer: {
      tagline: "The AI-powered foresight platform for TikTok creators. See what's next before everyone else.",
      product: "Product",
      solutions: "Solutions",
      useCases: "Use Cases",
      resources: "Resources",
      legal: "Legal",
      rights: "© 2026 OwlSeer. All rights reserved.",
      mobileProductAndSolutions: "Product & Solutions",
      links: {
        howItWorks: "How It Works",
        methodology: "Methodology",
        signals: "30+ Signals",
        pricing: "Pricing",
        trySample: "Try Sample",
        blog: "Blog",
        guides: "Guides",
        glossary: "Glossary",
        faq: "FAQ",
        contact: "Contact",
        contentCreators: "Content Creators",
        localBusiness: "Local Business",
        agencies: "Agencies",
        brands: "Brands",
        ecommerceSellers: "E-commerce Sellers",
        trendPrediction: "Trend Prediction",
        contentDiagnosis: "Content Diagnosis",
        scriptGeneration: "Script Generation",
        postingSchedule: "Posting Schedule",
        hashtagStrategy: "Hashtag Strategy",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        security: "Security",
        cookies: "Cookie Policy"
      },
      meta: {
        developers: "Developers",
        sitemap: "Sitemap"
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
          linkUrl: "/social/dashboard#aer-card",
          actionLine: "See engagement signals on real account data — [explore the Dashboard demo](/social/dashboard#aer-card).",
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
          linkUrl: "/social/simulation/trends",
          actionLine: "See trend signals on live data — [explore the Trend Radar demo](/social/simulation/trends).",
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
          linkUrl: "/social/intelligence",
          actionLine: "See audience insights on real data — [explore the Intelligence Hub demo](/social/intelligence).",
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
        demo: "Try Sample"
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
        secondaryCta: "See the Sample"
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
        secondary: "See the Sample"
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
          secondary: "See the Sample"
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
          { title: "Service-Focused Scripts", desc: "Script Studio generates scripts designed for local formats — behind-the-scenes tours, customer reaction videos, and seasonal promotion hooks.", icon: "Script" },
          { title: "Local Audience Scheduling", desc: "Your customers are not online at the same times as a national audience. Best-time badges ensure you post when your community is scrolling.", icon: "Schedule" },
          { title: "Foot Traffic Goals", desc: "AI Goals let you set objectives that match a local business: \"Increase profile visits by 50%\" or \"Get 10 DM inquiries per week.\"", icon: "Goal" }
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
          secondary: "See the Sample"
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
          secondary: "Explore Sample"
        },
        ui: {
          loading: "Loading content...",
          badge: "Head-to-Head",
          coreInsight: "Core Insight",
          tableHeaders: {
            feature: "Feature",
            owlseer: "OwlSeer",
            competitor: "VidIQ"
          },
          missingBlockTitle: "Experience what VidIQ is missing",
          actionButtons: {
            trendRadar: "Trend Radar",
            scriptStudio: "Script Studio",
            weeklyReport: "Weekly Report"
          },
          platformFocusLabel: "Platform Focus",
          transparencyNote: "Transparency Note"
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
    guides: '指南',
    nav: {
      solutions: "解决方案",
      platform: "平台",
      useCases: "使用场景",
      byRole: "按角色",
      learn: "学习",
      trustSupport: "信任与支持",
      trustSecurity: "信任与安全",
      language: "语言",
      glossary: "术语表",
      links: {
        signals: "30+ 信号",
        interactiveSample: "互动示例",
        trendPrediction: "趋势预测",
        contentDiagnosis: "内容诊断",
        scriptGeneration: "脚本生成",
        postingSchedule: "发布排期",
        hashtagStrategy: "标签策略",
        contentCreators: "内容创作者",
        localBusiness: "本地商家",
        agencies: "机构",
        brands: "品牌方",
        ecommerceSellers: "电商卖家",
        privacy: "隐私",
        terms: "条款",
        cookies: "Cookie",
        security: "安全"
      },
      desc: {
        howItWorks: "3 步快速上手",
        methodology: "我们的 5 步 AI 流程",
        signals: "我们追踪什么",
        interactiveSample: "看看 OwlSeer 如何运作",
        trySample: "在示例数据上体验"
      },
      actions: {
        trySample: "体验示例",
        startFree: "免费开始",
        startFreeTrial: "开始免费试用",
        trySampleCta: "体验示例"
      },
      darkMode: {
        toggle: "切换深色模式",
        switchToLight: "切换到浅色模式",
        switchToDark: "切换到深色模式"
      }
    },
    hero: {
      badge: 'v2.0 现已上线',
      title: "预见",
      titleHighlight: "未来",
      subtitle: "{platform} 数据分析不会告诉你该做什么。",
      subtitle2: "我们会。",
      ctaPrimary: "体验演示",
      ctaSecondaryButton: "立即开始",
      ctaSecondary: "无需注册",
      ctaInstant: "即刻访问"
    },
    productShowcase: {
      heading: {
        title: "从洞察到可发布内容，一条流程完成",
        subtitle: "OwlSeer 消除策略与执行之间的鸿沟，让创作者从信号到脚本都更有把握。"
      },
      highlights: {
        decisionCycle: { label: "决策周期", desc: "从信号发现到执行，只需分钟而非数天。" },
        growthSignal: { label: "增长信号", desc: "用增速与利基匹配度优先排序机会。" },
        executionQuality: { label: "执行质量", desc: "每条建议都附带可信的推理依据。" }
      },
      labels: {
        capability: "能力",
        outcome: "结果",
        learnMore: "了解更多"
      },
      opportunities: {
        step: "步骤 01",
        title: "在爆发前发现趋势",
        desc: "停止追逐昨天的热门。我们的 AI 分析数百万个信号，为您量身定制高潜力的利基话题。",
        statA: "24/7 信号扫描",
        statB: "机会优先排序",
        bullets: ["在趋势饱和前捕捉上升话题。", "优先选择已验证的利基匹配话题。"],
        mock: {
          eyebrow: "趋势雷达",
          title: "发现高匹配机会",
          score: "94 分",
          metrics: [
            { label: "增速", value: "+128%" },
            { label: "竞争度", value: "低" },
            { label: "观看池", value: "45M" }
          ],
          bullets: ["与您的高表现受众细分高度重合。", "推荐发布窗口在未来 6 小时内开启。"]
        }
      },
      planning: {
        step: "步骤 02",
        title: "执行，而不只是计划",
        desc: "将策略转化为行动。获得每周制作时间表，平衡高增长风险与稳定的信任建立内容。",
        statA: "每周节奏地图",
        statB: "均衡内容组合",
        bullets: ["把推荐直接转成可拍摄的日程表。", "保持一致，不耗尽创意能量。"],
        mock: {
          eyebrow: "执行计划",
          title: "本周的制作节奏",
          postCount: "3 条内容",
          schedule: [
            { day: "周一", date: "24", task: "趋势优先开场", tag: "增长" },
            { day: "周三", date: "26", task: "建立信任故事", tag: "社区" },
            { day: "周五", date: "28", task: "转化 CTA 视频", tag: "收入" }
          ]
        }
      },
      analytics: {
        step: "步骤 03",
        title: "解码您的内容 DNA",
        desc: "准确了解您最佳视频的表现原因。我们将您的内容分解为结构元素以复制成功。",
        statA: "逐帧诊断",
        statB: "可复用胜出模式",
        bullets: ["定位驱动留存与完播的关键因素。", "用证据支持的修改更快迭代。"],
        mock: {
          eyebrow: "表现 DNA",
          title: "复制已经奏效的打法",
          pill: "前 5%",
          metrics: [
            { label: "钩子强度", value: "9.8/10", width: "w-[95%]" },
            { label: "受众留存", value: "72%", width: "w-[72%]" },
            { label: "CTA 完成率", value: "38%", width: "w-[38%]" }
          ]
        }
      }
    },
    coreFeatures: {
      badge: "强大引擎",
      title: "您需要的一切",
      titleHighlight: "统治力",
      subtitle: "现代创作者的统一操作系统。停止在脱节的工具之间切换。",
      metrics: [
        { label: "发布速度", value: "快 3 倍" },
        { label: "规划把握", value: "信号支撑" },
        { label: "执行一致性", value: "周节奏" }
      ],
      copilot: {
        title: "AI 策略副驾驶",
        desc: "您的 24/7 创意伙伴。生成高转化脚本，头脑风暴钩子，并即时获得创意反馈。",
        badge: "实时生成",
        chat: {
          user: "帮我为下一个利基视频写一个更强的开场钩子。",
          assistantLabel: "建议开场",
          assistant: "别再复制千篇一律的开场了。这句 3 秒开场能把观众留住。"
        }
      },
      trend: {
        title: "趋势情报",
        desc: "在机会见顶前发现它们。我们的 AI 分析数百万个数据点以找到*您的*下一个病毒话题。",
        liveSignals: "实时信号",
        list: { viewsLabel: "次观看" }
      },
      goals: {
        title: "智能目标",
        desc: "将模糊的雄心转化为可操作的日常任务。",
        ringLabel: "目标",
        tasks: [
          { task: "录制开场钩子变体", done: true },
          { task: "复盘趋势候选清单", done: false },
          { task: "安排高意图内容发布", done: false }
        ]
      },
      analytics: { title: "深度分析", badge: "+124% 同比" },
      features: { scheduling: "智能调度", prediction: "病毒预测", multiAccount: "多账号管理", reports: "即时报告" }
    },
    valueProposition: {
      badge: "策略清晰度",
      title: "不再猜测该发布什么",
      subtitle: "OwlSeer 告诉你下一步该做什么。",
      cards: [
        { title: "可执行计划", desc: "在 3 分钟内提供可操作的内容计划。" },
        { title: "AI 脚本", desc: "AI 生成脚本，今天就可以拍摄。" },
        { title: "数据驱动", desc: "为厌倦随机发布的创作者提供方向。" }
      ],
      trust: ["不做奇迹承诺", "不自动发布", "无需密码"],
      metrics: [
        { label: "计划产出速度", value: "< 3 分钟" },
        { label: "分析信号数量", value: "30+" },
        { label: "内容节奏", value: "周级闭环" }
      ],
      cta: {
        primary: "查看实际操作",
        secondary: "工作原理"
      }
    },
    pricingSection: {
      title: "简单，透明的定价",
      subtitle: "开始您的 7 天免费试用。随时取消。",
      labels: { mostPopular: "最受欢迎" },
      monthly: "月付",
      yearly: "年付",
      save: "省 20%",
      period: "月",
      plans: {
        creator: {
          name: "Basic（个人创作版）",
          summary: "单兵作战，快速启动内容飞轮。",
          features: [
            "1 账号 / 1 席位，专注个人创作",
            "每月 30 条免费视频分析",
            "600 月度 Credits，支持高频 Copilot 辅助",
            "AI 内容全链路：画像、诊断、目标解析、脚本生成",
            "基础版 AI Copilot，实时解答创作疑惑"
          ]
        },
        growth: {
          name: "Growth（团队增长版）",
          summary: "小团队协作，规模化产出爆款。",
          features: [
            "3 账号 / 4 席位，支持多角色协作",
            "每月 120 条免费视频分析",
            "1200 月度 Credits，支撑高密度创意推演",
            "完整排期与脚本链路，提升分工效率",
            "支持批量任务处理，减少重复劳动",
            "基础数据报表导出，用于周/月复盘"
          ]
        },
        scale: {
          name: "Pro（规模扩展版）",
          summary: "机构与多账号团队，追求极致转化与效率。",
          features: [
            "8 账号 / 10 席位，覆盖多角色并行运营",
            "每月 400 条免费视频分析，覆盖全行业动态",
            "4000 月度 Credits，支持重推理模型调用",
            "优先计算队列，高峰期任务快速响应",
            "高上限 AI Copilot，支持更长上下文"
          ]
        }
      },
      cta: { trial: "开始免费试用", buy: "立即购买" },
      footer: { secure: "安全支付", trial: "7 天免费试用", cancel: "随时取消" }
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
          { q: "7 天免费试用如何运作？", a: "您将获得 7 天的 Pro 计划功能的完全访问权限。试用结束前我们不会从您的卡中扣款。您可以在试用期间随时取消以避免被收费。" },
          { q: "我需要提供我的 TikTok 密码吗？", a: "不！我们使用官方 TikTok API 和 OAuth 2.0 进行安全连接。我们永远不会看到或存储您的密码，我们只有您明确授予的权限。" },
          { q: "如果我添加更多账号会怎样？", a: "可以按规模升级档位。Basic 支持 1 个账号，Growth 支持 3 个账号，Pro 支持最多 8 个账号与 10 个团队席位。" },
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
      demo: "查看 Sample"
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
          answer: "是的。我们提供一个公共示例体验，展示完整的产品界面，使用示例创作者账户。您可以探索每个功能——战略概述、脚本建议、趋势雷达和发布日历——无需创建账户或提供任何个人信息。\n\n示例使用来自虚拟创作者账户的真实演示数据，因此您可以确切地看到使用自己的账户会得到什么样的输出和分析。\n\n验证：🔗 [数据看板 (/social/simulation/dashboard)](/social/simulation/dashboard), 🔗 [趋势雷达 (/social/simulation/trends)](/social/simulation/trends), 🔗 [内容工作室 (/social/simulation/studio)](/social/simulation/studio)",
          category: "Sample"
        },
        {
          id: 'q2',
          question: "示例是完整的产品还是有限的预览？",
          answer: "示例是完整的产品——相同的界面，相同的功能，相同的AI分析。唯一的区别是数据源：示例使用预配置的演示账户，而真实产品使用您连接的TikTok账户。\n\n相同之处：\n- 完整的仪表盘，所有模块可访问\n- 实时AI分析\n- 完整的脚本生成能力\n- 互动日历和调度视图\n\n不同之处：\n- 数据来自虚拟的“TechReviews_US”创作者账户\n- 不能保存更改或导出个性化报告\n- 当您尝试进行账户特定操作时，会出现注册提示\n\n验证：🔗 [数据看板 (/social/simulation/dashboard)](/social/simulation/dashboard)",
          category: "Sample"
        },
        {
          id: 'q3',
          question: "我需要连接我的 TikTok 账户才能看到价值吗？",
          answer: "不——您可以从示例中获得显著的价值，而无需连接任何东西。\n\n示例让您：\n- 了解 OwlSeer 输出的内容\n- 学习我们的工作方法和信号类别\n- 查看脚本和日历的结构\n- 评估该工具是否适合您的工作流程\n\n连接您的 TikTok 仅在您想要：\n- 基于您账户的实际表现进行分析\n- 为您的细分市场和受众提供个性化推荐\n- 保存策略和可导出报告时才需要连接\n\n许多用户在示例中花费 10-15 分钟，然后决定是否连接。正是我们设计的方式。\n\n验证：🔗 [数据看板 (/social/simulation/dashboard)](/social/simulation/dashboard)",
          category: "Sample"
        },
        {
          id: 'q4',
          question: "OwlSeer 实际上输出什么？",
          answer: "OwlSeer 输出四个主要交付物：\n\n1. **战略概述**\n- 每周内容方向和优先级\n- 与您的目标对齐的目标\n- 需要关注的关键指标\n\n2. **内容创意**\n- 基于您的细分市场和趋势的主题建议\n- 每个创意都包括“为什么这对您有用”\n- 难度/努力估算\n\n3. **脚本**\n- 完整的脚本结构：钩子 → 正文 → 号召性用语\n- 每个创意的多个变体\n- 可根据您的风格自定义\n\n4. **发布日历**\n- 基于您的受众的最佳发布时间\n- 每周/每月视图\n- 可集成的格式\n\n每个输出都包括“为什么推荐”部分，追溯到特定信号和模板。\n\n验证：🔗 [数据看板 (/social/simulation/dashboard)](/social/simulation/dashboard), 🔗 [内容工作室 (/social/simulation/studio)](/social/simulation/studio), 🔗 [发布排期 (/social/simulation/scheduling)](/social/simulation/scheduling)",
          category: "Outputs"
        },
        {
          id: 'q5',
          question: "脚本看起来像什么？",
          answer: "我们的脚本结构适用于 TikTok 格式：\n\n**钩子（0-3 秒）**\n- 引人注目的开场白\n- 多个钩子变体供测试\n- 关于为什么这种钩子风格适合您的受众的说明\n\n**正文（3-45 秒）**\n- 主要内容要点\n- 视觉/行动建议\n- 节奏建议\n\n**号召性用语（最后几秒）**\n- 清晰的号召性用语\n- 选项：关注、评论、保存、访问链接\n- 与您的当前目标匹配\n\n**示例结构：**\n\n钩子：“停止做 [X]——这是有效的做法”\n正文：\n- 要点 1：陈述问题（5-10 秒）\n- 要点 2：展示解决方案（15-20 秒）\n- 要点 3：证据/结果（10-15 秒）\n号召性用语：“保存以备后用，并关注获取更多 [领域] 提示”\n\n为什么这对您有效：您的教育内容比娱乐内容表现好 2.1 倍。基于问题的钩子在您的账户上能获得 34% 更高的完成率。\n\n验证：🔗 [内容工作室 (/social/simulation/studio)](/social/simulation/studio)",
          category: "Outputs"
        },
        {
          id: 'q6',
          question: "我可以导出我的策略和脚本吗？",
          answer: "导出选项取决于您的套餐：\n\n**免费套餐：**\n- 复制单个脚本到剪贴板\n- 截图/打印任何页面\n\n**成长套餐（$19/月）：**\n- 导出脚本为 PDF\n- 导出日历到 Google 日历 / iCal\n- 基本的 Notion 集成\n\n**规模套餐（$49/月）：**\n- 完整的战略导出（PDF、Notion、Google Docs）\n- API 访问用于自定义集成\n- 团队共享与协作导出\n\n所有导出都保留“为什么”理由，您可以稍后参考。\n\n注意：在示例模式下，由于您查看的是演示数据，导出功能被禁用。连接您的账户以启用导出。\n\n验证：🔗 [价格 (/social/pricing)](/social/pricing), 🔗 [内容工作室 (/social/simulation/studio)](/social/simulation/studio)",
          category: "Outputs"
        },
        {
          id: 'q7',
          question: "OwlSeer 如何分析我的账户？",
          answer: "我们的分析涵盖了六大类别的 30 多个信号：\n\n**1. 参与度信号**\n- 浏览与点赞比率、评论情感、分享频率\n- 保存率、个人资料访问、观看时长、重播率\n\n**2. 时间模式**\n- 活跃高峰时段、一周内的趋势\n- 粉丝时区分布、发布一致性\n\n**3. 内容DNA**\n- 钩子风格效果、最佳视频时长\n- 音乐使用模式、标签策略、字幕结构\n\n**4. 受众洞察**\n- 粉丝增长率、人口统计模式\n- 兴趣聚集、参与度画像\n\n**5. 竞争信号**\n- 领域基准、顶尖表现差距\n- 内容差距分析、时间对比\n\n**6. 趋势匹配**\n- 流行声音、病毒式格式\n- 新兴话题、平台变化\n\n每个信号根据您的具体目标和细分市场加权。分析通常在 30-60 秒内完成。\n\n验证：🔗 [信号 (/social/how-it-works#signals)](/social/how-it-works#signals), 🔗 [账户智能分析 (/social/simulation/intelligence)](/social/simulation/intelligence)",
          category: "Methodology"
        },
        {
          id: 'q8',
          question: "你们提到的“30+ 信号”是什么？",
          answer: "“30+ 信号”指的是我们每个账户分析的独特数据点。以下是详细分类：\n\n**参与度（7 个信号）**\n- 浏览与点赞比率\n- 评论情感得分\n- 分享频率\n- 保存率\n- 个人资料访问率\n- 平均观看时长\n- 重播率\n\n**时间（5 个信号）**\n- 活跃高峰时段\n- 一周内的趋势\n- 时区分布\n- 发布一致性得分\n- 季节性趋势\n\n**内容 DNA（7 个信号）**\n- 钩子效果得分\n- 最佳视频时长\n- 音乐影响\n- 标签表现\n- 字幕互动\n- 缩略图点击率\n- 格式偏好\n\n**受众（5 个信号）**\n- 增长速度\n- 人口统计聚集\n- 兴趣映射\n- 互动画像\n- 忠诚度指标\n\n**竞争（4 个信号）**\n- 领域基准\n- 差距分析\n- 时间对比\n- 内容差异化\n\n**趋势（4 个以上信号）**\n- 音频速度\n- 格式出现\n- 话题势头\n- 平台变化\n\n总计：32 个核心信号，根据数据可用性可能会有额外的子信号。\n\n验证：🔗 [信号 (/trust#signals)](/trust#signals), 🔗 [工作原理 (/social/how-it-works#signals)](/social/how-it-works#signals)",
          category: "Methodology"
        },
        {
          id: 'q9',
          question: "你们如何生成脚本推荐？",
          answer: "脚本生成遵循四个步骤的过程：\n\n**步骤 1：信号分析**\n- 分析您的 30 多个信号\n- 识别优势（有效的部分）\n- 识别差距（需要改进的部分）\n\n**步骤 2：模板匹配**\n- 与 200 多个内容模板进行交叉参考\n- 按您的细分市场（50 多个类别）筛选\n- 按您的阶段（初学者/成长/成熟）筛选\n- 按您的目标（增长/互动/变现）筛选\n\n**步骤 3：个性化**\n- 将模板调整为您的内容 DNA\n- 匹配您典型的视频时长\n- 对齐您的钩子风格偏好\n- 融入与您相关的流行元素\n\n**步骤 4：理由文档**\n- 为每个推荐附上“为什么”\n- 追溯到特定信号\n- 提供信心指标\n\n结果：脚本就像是为您量身定做的，因为它们确实是基于数据，而不是猜测。\n\n验证：🔗 [方法论 (/social/how-it-works#synthesize)](/social/how-it-works#synthesize), 🔗 [内容工作室 (/social/simulation/studio)](/social/simulation/studio)",
          category: "Methodology"
        },
        {
          id: 'q10',
          question: "OwlSeer 保证病毒式内容吗？",
          answer: "不——我们对任何声称可以做到的工具持怀疑态度。\n\n**我们可以做的：**\n- 提高您创作出引起共鸣内容的概率\n- 识别哪些内容在您的账户中有效的模式\n- 基于数据建议最佳的发布时间、话题和格式\n- 帮助您更一致地发布内容，具有更好的结构\n\n**我们不能做的：**\n- 保证任何视频会成为病毒式传播\n- 控制 TikTok 的算法\n- 精确预测平台如何分发您的内容\n- 覆盖社交媒体的固有不可预测性\n\n**我们的理念：**\n病毒式传播部分是运气。战略提高了您的成功概率。我们专注于可控因素——内容质量、时机、一致性——并且诚实地告诉您，没有工具能保证结果。\n\n我们宁愿您带着现实的期望成功，也不希望您带着夸大的承诺失败。\n\n验证：🔗 [限制 (/social/how-it-works#limits)](/social/how-it-works#limits), 🔗 [边界 (/social/faq#boundaries)](/social/faq#boundaries)",
          category: "Boundaries"
        },
        {
          id: 'q11',
          question: "OwlSeer 会为我自动发布吗？",
          answer: "不——我们故意不提供自动发布功能。\n\n**我们为什么不提供自动发布：**\n\n1. **创意控制**：您应该在发布前审查并可能编辑每个内容\n\n2. **平台合规性**：自动发布可能会违反 TikTok 的某些条款\n\n3. **质量保证**：AI 生成的脚本在发布前经过人工审查更能保证质量\n\n4. **真实性**：您的受众关注的是您——自动发布可能显得不够真实\n\n**我们提供的功能：**\n- 准备好录制的脚本\n- 最佳发布时间建议\n- 日历提醒\n- 与调度工具的集成（您仍然需要审批每个发布）\n\n**我们的理念：**\n我们是战略合作伙伴，而非自动化机器人。我们进行分析和规划；您保持创意控制。\n\n验证：🔗 [边界 (/social/faq#boundaries)](/social/faq#boundaries), 🔗 [发布排期 (/social/simulation/scheduling)](/social/simulation/scheduling)",
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
          answer: "以下是详细的套餐分类：\n\n**免费套餐（$0/月）**\n- 每月 1 个策略分析\n- 基本的互动洞察\n- 访问示例仪表盘\n- 社区支持（论坛）\n- 最适合：试用工具，偶尔使用\n\n**成长套餐（$19/月）**\n- 每月 10 个策略分析\n- 完整的脚本生成与导出\n- 发布日历集成\n- 趋势雷达访问\n- 电子邮件支持（48 小时响应）\n- 最适合：活跃创作者，定期内容生产者\n\n**规模套餐（$49/月）**\n- 无限策略分析\n- 优先支持（24 小时响应）\n- 团队协作（最多 5 个席位）\n- API 访问用于自定义集成\n- 高级分析仪表盘\n- 专属客户经理（可选）\n- 最适合：代理机构，专业创作者，团队\n\n所有套餐均包括访问示例模式和核心方法论文档。\n\n验证：🔗 [价格 (/social/pricing#compare)](/social/pricing#compare), 🔗 [模拟 (/social/simulation)](/social/simulation)",
          category: "Billing"
        },
        {
          id: 'q16',
          question: "我可以随时取消订阅吗？",
          answer: "是的——我们相信每月都要通过提供优质服务来赢得您的订阅。\n\n**如何取消：**\n1. 进入设置 → 账单\n2. 点击“取消订阅”\n3. 确认（无需调查， 无保留策略）\n4. 完成\n\n**取消后的处理：**\n- 您将在当前账单周期结束前保持完整访问权限\n- 生成的策略和脚本仍可访问\n- 在最后一天，您的账户将降级为免费套餐\n- 您的数据将保留，除非您删除它\n\n**退款政策：**\n- 年度计划：30 天内按比例退款\n- 月度计划：当前月无退款，不会收取未来费用\n- 争议：联系 support@owlseer.com\n\n**重新订阅：**\n- 您可以随时重新订阅\n- 您的历史记录和设置会被保留\n- 取消后返回不会有惩罚\n\n验证：🔗 [计费 (/social/pricing#billing)](/social/pricing#billing)",
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
      solutions: "解决方案",
      useCases: "使用场景",
      resources: "资源",
      legal: "法律",
      rights: "© 2026 OwlSeer. 保留所有权利。",
      mobileProductAndSolutions: "产品与解决方案",
      links: {
        howItWorks: "工作原理",
        methodology: "方法论",
        signals: "30+ 信号",
        pricing: "价格",
        trySample: "体验示例",
        blog: "博客",
        guides: "指南",
        glossary: "术语表",
        faq: "常见问题",
        contentCreators: "内容创作者",
        localBusiness: "本地商家",
        agencies: "机构",
        brands: "品牌方",
        ecommerceSellers: "电商卖家",
        trendPrediction: "趋势预测",
        contentDiagnosis: "内容诊断",
        scriptGeneration: "脚本生成",
        postingSchedule: "发布排期",
        hashtagStrategy: "标签策略",
        privacy: "隐私政策",
        terms: "服务条款",
        security: "安全",
        cookies: "Cookie 政策"
      },
      meta: {
        developers: "开发者",
        sitemap: "站点地图"
      }
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
          linkUrl: "/social/dashboard#aer-card",
          actionLine: "查看真实账号的互动诊断 —— [体验 AER 仪表盘演示](/social/dashboard#aer-card)。",
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
          linkUrl: "/social/simulation/trends",
          actionLine: "查看实时趋势数据 —— [探索趋势雷达演示](/social/simulation/trends)。",
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
          linkUrl: "/social/intelligence",
          actionLine: "查看受众深度分析 —— [探索情报中心演示](/social/intelligence)。",
          signals: [
            { name: "涨粉加速度 (Growth Velocity)", id: "follower-growth-velocity", def: "近期粉丝增长的速率变化。", why: "涨粉速度比总量更重要。它反映了你当前的内容策略是否“对路”。", how: "将你的涨粉曲线与发布记录对应，找出那条让你“一夜爆红”的视频，并复制它的成功。" },
            { name: "黄金发布时间 (Active Hours)", id: "active-hour-mapping", def: "你的粉丝最活跃的时间段。", why: "错的时间发对的内容=白发。在粉丝都在线的时候发布，能瞬间获得大量初始数据，助推视频进入更大的流量池。", how: "根据你粉丝的时区和习惯，精确到小时地告诉你：下周二下午 6 点发视频效果最好。" },
            { name: "受众重合度 (Audience Overlap)", id: "audience-overlap", def: "你的粉丝还关注了谁。", why: "他山之石，可以攻玉。了解粉丝喜欢的其他博主，能帮你拓展选题思路，甚至找到合作机会。", how: "分析粉丝关注列表中的高频重合账号，拆解他们的爆款逻辑为你所用。" },
            { name: "人群画像变迁 (Sample Shifts)", id: "demographic-shifts", def: "粉丝年龄、性别、地域的动态变化。", why: "账号在成长，受众也在变。如果不及时调整内容口吻，很容易造成老粉取关。", how: "敏锐捕捉受众构成的细微变化（比如男性比例增加），及时建议你调整内容风格。" },
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
        },
        ui: {
          loading: "内容加载中...",
          badge: "正面对比",
          coreInsight: "核心洞察",
          tableHeaders: {
            feature: "功能",
            owlseer: "OwlSeer",
            competitor: "VidIQ"
          },
          missingBlockTitle: "体验 VidIQ 尚未覆盖的能力",
          actionButtons: {
            trendRadar: "趋势雷达",
            scriptStudio: "脚本工作台",
            weeklyReport: "每周报告"
          },
          platformFocusLabel: "平台专注",
          transparencyNote: "透明说明"
        }
      }
    },
  ja: {
    product: '製品',
    pricing: '料金',
    resources: 'リソース',
    methodology: '方法論',
    login: 'ログイン',
    signup: '無料登録',
    whatIs: 'OwlSeerとは',
    howItWorks: '仕組み',
    faq: 'よくある質問',
    security: 'セキュリティとプライバシー',
    blog: 'ブログ',
    guides: 'ガイド',
    nav: {
      solutions: "ソリューション",
      platform: "プラットフォーム",
      useCases: "ユースケース",
      byRole: "役割別",
      learn: "学ぶ",
      trustSupport: "信頼とサポート",
      trustSecurity: "信頼とセキュリティ",
      language: "言語",
      glossary: "用語集",
      links: {
        signals: "30+シグナル",
        interactiveSample: "インタラクティブサンプル",
        trendPrediction: "トレンド予測",
        contentDiagnosis: "コンテンツ診断",
        scriptGeneration: "スクリプト生成",
        postingSchedule: "投稿スケジュール",
        hashtagStrategy: "ハッシュタグ戦略",
        contentCreators: "コンテンツクリエイター",
        localBusiness: "ローカルビジネス",
        agencies: "代理店",
        brands: "ブランド",
        ecommerceSellers: "EC販売者",
        privacy: "プライバシー",
        terms: "利用規約",
        cookies: "Cookie",
        security: "セキュリティ"
      },
      desc: {
        howItWorks: "3ステップで開始",
        methodology: "5ステップAIプロセス",
        signals: "追跡する指標",
        interactiveSample: "OwlSeerを体験",
        trySample: "サンプルデータで体験"
      },
      actions: {
        trySample: "サンプルを試す",
        startFree: "無料で始める",
        startFreeTrial: "無料トライアルを開始",
        trySampleCta: "サンプルを試す"
      },
      darkMode: {
        toggle: "ダークモード切替",
        switchToLight: "ライトモードに切替",
        switchToDark: "ダークモードに切替"
      }
    },
    hero: {
      badge: 'v2.0 リリース',
      title: "次を",
      titleHighlight: "見通す",
      subtitle: "{platform}のアナリティクスは、何をすべきか教えてくれません。",
      subtitle2: "私たちが教えます。",
      ctaPrimary: "サンプル",
      ctaSecondaryButton: "今すぐ始める",
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
      heading: {
        title: "インサイトから投稿まで、1つの流れで完結",
        subtitle: "OwlSeer は戦略と実行のギャップを埋め、シグナルからスクリプトまで自信を持って進められます。"
      },
      highlights: {
        decisionCycle: { label: "意思決定サイクル", desc: "シグナル検知から実行まで、日ではなく分で。" },
        growthSignal: { label: "成長シグナル", desc: "伸び率とニッチ適合で機会を優先。" },
        executionQuality: { label: "実行品質", desc: "すべての提案に、納得できる根拠を。" }
      },
      labels: {
        capability: "機能",
        outcome: "成果",
        learnMore: "詳しく見る"
      },
      opportunities: {
        step: "ステップ 01",
        title: "ピーク前にトレンドを発見",
        desc: "昨日のバイラルを追いかけるのはやめましょう。AIが数百万のシグナルを分析し、ニッチに特化した高ポテンシャルなトピックを見つけます。",
        statA: "24/7 シグナル監視",
        statB: "機会優先ランキング",
        bullets: ["飽和前の伸びる話題を発見。", "ニッチ適合が証明されたテーマを優先。"],
        mock: {
          eyebrow: "トレンドレーダー",
          title: "高適合の機会を検出",
          score: "スコア 94",
          metrics: [
            { label: "勢い", value: "+128%" },
            { label: "競合", value: "低" },
            { label: "視聴規模", value: "45M" }
          ],
          bullets: ["高パフォーマンスのオーディエンス層と高い重なり。", "推奨投稿ウィンドウは今後 6 時間以内に開始。"]
        }
      },
      planning: {
        step: "ステップ 02",
        title: "計画だけでなく、実行を",
        desc: "戦略を行動に変えます。高成長のリスクと安定した信頼構築コンテンツのバランスが取れた週間制作スケジュールを取得します。",
        statA: "週間ペース設計",
        statB: "バランスの取れた構成",
        bullets: ["提案をそのまま撮影カレンダーに落とし込む。", "クリエイティブを消耗せずに継続。"],
        mock: {
          eyebrow: "実行プラン",
          title: "今週の制作ペース",
          postCount: "3投稿",
          schedule: [
            { day: "月", date: "24", task: "トレンド起点のオープナー", tag: "成長" },
            { day: "水", date: "26", task: "信頼を作るストーリー", tag: "コミュニティ" },
            { day: "金", date: "28", task: "転換 CTA 動画", tag: "収益" }
          ]
        }
      },
      analytics: {
        step: "ステップ 03",
        title: "コンテンツDNAを解読",
        desc: "なぜあなたの動画が成功したのかを正確に理解します。成功を再現するために、コンテンツを構造要素に分解します。",
        statA: "フレーム単位診断",
        statB: "再現可能な勝ちパターン",
        bullets: ["視聴維持と完了率の要因を特定。", "根拠に基づく編集で、より速く改善。"],
        mock: {
          eyebrow: "パフォーマンスDNA",
          title: "すでに勝っている型を再現",
          pill: "上位 5%",
          metrics: [
            { label: "フックの強さ", value: "9.8/10", width: "w-[95%]" },
            { label: "視聴維持率", value: "72%", width: "w-[72%]" },
            { label: "CTA完了率", value: "38%", width: "w-[38%]" }
          ]
        }
      }
    },
    coreFeatures: {
      badge: "パワーハウス",
      title: "支配するために",
      titleHighlight: "必要なすべて",
      subtitle: "現代のクリエイターのための統一OS。バラバラなツールを行き来するのはやめましょう。",
      metrics: [
        { label: "投稿スピード", value: "3倍速" },
        { label: "計画の確度", value: "シグナル裏付け" },
        { label: "実行の継続性", value: "毎週のペース" }
      ],
      copilot: {
        title: "AI戦略コパイロット",
        desc: "24時間365日のクリエイティブパートナー。高コンバージョンのスクリプト生成、フックのブレインストーミング、アイデアへの即時フィードバック。",
        badge: "リアルタイム生成",
        chat: {
          user: "次のニッチ動画のフックをもっと強くして。",
          assistantLabel: "提案フック",
          assistant: "よくある導入を真似するのはやめよう。視聴者を引きつける3秒オープナーはこちら。"
        }
      },
      trend: {
        title: "トレンドインテリジェンス",
        desc: "ピーク前に機会を発見。AIが数百万のデータポイントを分析し、*あなたの*次のバイラルトピックを見つけます。",
        liveSignals: "ライブシグナル",
        list: { viewsLabel: "回視聴" }
      },
      goals: {
        title: "スマートゴール",
        desc: "曖昧な野心を実行可能な日々のタスクに変えます。",
        ringLabel: "目標",
        tasks: [
          { task: "オープニングフックの別案を録る", done: true },
          { task: "トレンド候補を確認", done: false },
          { task: "高意図投稿をスケジュール", done: false }
        ]
      },
      analytics: { title: "詳細分析", badge: "+124% 前年比" },
      features: { scheduling: "スマート予約", prediction: "バイラル予測", multiAccount: "複数アカウント", reports: "即時レポート" }
    },
    valueProposition: {
      badge: "戦略の明確化",
      title: "何を投稿するか、もう迷わない",
      subtitle: "OwlSeer が TikTok で次にやるべきことを示します。",
      cards: [
        { title: "実行可能なプラン", desc: "3分以内に完全なコンテンツプランを作成。" },
        { title: "AI スクリプト", desc: "今日すぐ撮れる AI 生成スクリプト。" },
        { title: "データドリブン", desc: "行き当たりばったりの投稿から卒業。" }
      ],
      trust: ["誇大な約束なし", "自動投稿なし", "パスワード不要"],
      metrics: [
        { label: "プラン作成", value: "< 3 分" },
        { label: "分析シグナル", value: "30+" },
        { label: "投稿リズム", value: "毎週" }
      ],
      cta: {
        primary: "実際の動きを見る",
        secondary: "仕組みを見る"
      }
    },
    pricingSection: {
      title: "シンプルで透明な価格設定",
      subtitle: "7日間の無料トライアルを開始。いつでもキャンセル可能。",
      labels: { mostPopular: "人気No.1" },
      monthly: "月払い",
      yearly: "年払い",
      save: "20% OFF",
      period: "月",
      plans: {
        creator: {
          name: "Basic（個人向け）",
          summary: "個人クリエイターが素早く運用を立ち上げるためのプラン。",
          features: [
            "1アカウント / 1席",
            "無料動画分析 30件 / 月",
            "月間 600 クレジット",
            "AIコンテンツ全工程（診断〜スクリプト）",
            "ベーシック AI Copilot"
          ]
        },
        growth: {
          name: "Growth（チーム成長）",
          summary: "小規模チームで量産体制を作るためのプラン。",
          features: [
            "3アカウント / 4席",
            "無料動画分析 120件 / 月",
            "月間 1,200 クレジット",
            "完全なスケジュール & スクリプト運用",
            "バッチタスク処理",
            "基本レポート出力"
          ]
        },
        scale: {
          name: "Pro（拡張運用）",
          summary: "代理店や複数アカウント運用に最適な上位プラン。",
          features: [
            "8アカウント / 10席",
            "無料動画分析 400件 / 月",
            "月間 4,000 クレジット",
            "優先コンピュートキュー",
            "長文脈対応の高上限 AI Copilot"
          ]
        }
      },
      cta: { trial: "無料トライアル開始", buy: "今すぐ購入" },
      footer: { secure: "安全な支払い", trial: "7日間無料", cancel: "いつでもキャンセル" }
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
      solutions: "ソリューション",
      useCases: "ユースケース",
      resources: "リソース",
      legal: "法的情報",
      rights: "© 2026 OwlSeer. All rights reserved.",
      mobileProductAndSolutions: "製品とソリューション",
      links: {
        howItWorks: "仕組み",
        methodology: "方法論",
        signals: "30+シグナル",
        pricing: "料金",
        trySample: "サンプルを試す",
        blog: "ブログ",
        guides: "ガイド",
        glossary: "用語集",
        faq: "よくある質問",
        contentCreators: "コンテンツクリエイター",
        localBusiness: "ローカルビジネス",
        agencies: "代理店",
        brands: "ブランド",
        ecommerceSellers: "EC販売者",
        trendPrediction: "トレンド予測",
        contentDiagnosis: "コンテンツ診断",
        scriptGeneration: "スクリプト生成",
        postingSchedule: "投稿スケジュール",
        hashtagStrategy: "ハッシュタグ戦略",
        privacy: "プライバシーポリシー",
        terms: "利用規約",
        security: "セキュリティ",
        cookies: "Cookieポリシー"
      },
      meta: {
        developers: "開発者",
        sitemap: "サイトマップ"
      }
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
          linkUrl: "/social/dashboard#aer-card",
          actionLine: "See engagement signals on real account data — [explore the Dashboard demo](/social/dashboard#aer-card).",
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
          linkUrl: "/social/simulation/trends",
          actionLine: "See trend signals on live data — [explore the Trend Radar demo](/social/simulation/trends).",
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
          linkUrl: "/social/intelligence",
          actionLine: "See audience insights on real data — [explore the Intelligence Hub demo](/social/intelligence).",
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
      },
      compareVidIQ: {
        hero: {
          title: "OwlSeer vs VidIQ：あなたの運用に合うTikTokツールは？",
          lead: "VidIQはYouTube起点でTikTokへ拡張。OwlSeerは最初からTikTok専用で設計。機能差・強み・適した使い方を比較します。"
        },
        tldr: "TikTokが主戦場なら、TikTok専用シグナル分析・トレンド予測・台本生成があるOwlSeer。YouTube中心でTikTokが補助チャネルならVidIQ。違いはプラットフォーム深度です。",
        table: {
          title: "機能別比較",
          rows: [
            { feature: "主軸プラットフォーム", owlseer: "TikTok（専用）", vidiq: "YouTube（主軸）、TikTok（補助）" },
            { feature: "TikTokシグナル深度", owlseer: "30+の重み付きシグナル", vidiq: "基本的なTikTok指標" },
            { feature: "トレンド予測", owlseer: "AI＋速度分析", vidiq: "トレンドトピック一覧" },
            { feature: "台本生成", owlseer: "データ駆動のHook-Body-CTA", vidiq: "ネイティブ台本生成なし" },
            { feature: "投稿スケジュール", owlseer: "個別最適のヒートマップ", vidiq: "汎用的な推奨時間" },
            { feature: "コンテンツ診断", owlseer: "課題検出＋改善提案", vidiq: "パフォーマンス概要" },
            { feature: "AIコパイロット", owlseer: "対話型アシスタント", vidiq: "対話型AIなし" },
            { feature: "週次レポート", owlseer: "KPI追跡付き自動化", vidiq: "自動週報なし" },
            { feature: "ブランドセーフティ", owlseer: "0-100リスクスコア", vidiq: "ブランドセーフティ採点なし" }
          ]
        },
        chooseOwlSeer: {
          title: "OwlSeerを選ぶべきケース",
          items: [
            "TikTokが主な、または唯一の成長チャネル",
            "基本指標を超える30+シグナル深度が必要",
            "視聴者に合わせたAI台本が必要",
            "トレンドのタイミングと速度が重要",
            "KPI付きの自動週次レポートが必要",
            "対話型AIコパイロットを使いたい"
          ]
        },
        chooseVidIQ: {
          title: "VidIQを選ぶべきケース",
          items: [
            "YouTubeが主なプラットフォーム",
            "YouTube特化機能（SEO・キーワード）が必要",
            "TikTokは補助チャネルで基本指標で十分",
            "すでにYouTube用途でVidIQを利用中"
          ]
        },
        platformFocus: {
          title: "なぜプラットフォーム特化が重要か",
          p1: "YouTubeとTikTokでは評価される行動が異なります。YouTubeは検索主導で、タイトル・説明文・サムネイルが発見性を左右。TikTokはアルゴリズム主導で、フック率・視聴維持率・トレンド適合が配信を左右します。",
          p2: "YouTube向けツールは検索意図を最適化。TikTok向けツールはシグナルパターンを最適化。YouTubeファーストのツールでTikTok戦略を作るのは、海で道路地図を使うようなものです。",
          highlight: "OwlSeerは、YouTube中心ツールが扱わないTikTok固有指標（AER、フック率、保存率）を追跡します。"
        },
        boundary: {
          transparency: "比較内容は2026年2月時点の公開情報に基づきます。",
          note: "この比較は広告案件ではありません。適切なツール選定のための実用ガイドとして作成しています。"
        },
        cta: {
          title: "TikTokネイティブ戦略を試しますか？",
          subtitle: "まずはサンプルデータでOwlSeerを体験。準備ができたら無料トライアルへ。",
          primary: "無料トライアルを開始",
          secondary: "サンプルを見る"
        },
        ui: {
          loading: "コンテンツを読み込み中...",
          badge: "直接比較",
          coreInsight: "コアインサイト",
          tableHeaders: {
            feature: "機能",
            owlseer: "OwlSeer",
            competitor: "VidIQ"
          },
          missingBlockTitle: "VidIQにない機能を体験",
          actionButtons: {
            trendRadar: "トレンドレーダー",
            scriptStudio: "スクリプトスタジオ",
            weeklyReport: "週次レポート"
          },
          platformFocusLabel: "プラットフォーム特化",
          transparencyNote: "透明性に関する注記"
        }
      }
    }
  },
  ko: {
    product: '제품',
    pricing: '가격',
    resources: '리소스',
    methodology: '방법론',
    login: '로그인',
    signup: '무료 가입',
    whatIs: 'OwlSeer란?',
    howItWorks: '작동 원리',
    faq: '자주 묻는 질문',
    security: '보안 및 개인정보',
    blog: '블로그',
    guides: '가이드',
    nav: {
      solutions: "솔루션",
      platform: "플랫폼",
      useCases: "사용 사례",
      byRole: "역할별",
      learn: "학습",
      trustSupport: "신뢰 및 지원",
      trustSecurity: "신뢰 및 보안",
      language: "언어",
      glossary: "용어집",
      links: {
        signals: "30+ 신호",
        interactiveSample: "인터랙티브 샘플",
        trendPrediction: "트렌드 예측",
        contentDiagnosis: "콘텐츠 진단",
        scriptGeneration: "스크립트 생성",
        postingSchedule: "게시 일정",
        hashtagStrategy: "해시태그 전략",
        contentCreators: "콘텐츠 크리에이터",
        localBusiness: "지역 비즈니스",
        agencies: "에이전시",
        brands: "브랜드",
        ecommerceSellers: "이커머스 판매자",
        privacy: "개인정보",
        terms: "약관",
        cookies: "쿠키",
        security: "보안"
      },
      desc: {
        howItWorks: "3단계로 시작",
        methodology: "5단계 AI 프로세스",
        signals: "추적하는 항목",
        interactiveSample: "OwlSeer 체험",
        trySample: "샘플 데이터로 체험"
      },
      actions: {
        trySample: "샘플 체험",
        startFree: "무료로 시작",
        startFreeTrial: "무료 체험 시작",
        trySampleCta: "샘플 체험"
      },
      darkMode: {
        toggle: "다크 모드 전환",
        switchToLight: "라이트 모드로 전환",
        switchToDark: "다크 모드로 전환"
      }
    },
    hero: {
      badge: 'v2.0 출시',
      title: "다음을",
      titleHighlight: "내다보다",
      subtitle: "{platform} 분석은 무엇을 해야 할지 알려주지 않습니다.",
      subtitle2: "우리가 알려드립니다.",
      ctaPrimary: "샘플 체험",
      ctaSecondaryButton: "지금 시작하기",
      ctaSecondary: "가입 불필요",
      ctaInstant: "즉시 접속"
    },
    productShowcase: {
      heading: {
        title: "인사이트부터 게시 준비까지, 한 흐름으로",
        subtitle: "OwlSeer는 전략과 실행 사이의 간극을 없애 크리에이터가 신호에서 스크립트까지 확신 있게 나아가도록 합니다."
      },
      highlights: {
        decisionCycle: { label: "의사결정 사이클", desc: "신호 탐지부터 실행까지, 며칠이 아닌 몇 분." },
        growthSignal: { label: "성장 신호", desc: "속도와 니치 적합도로 기회를 우선순위화." },
        executionQuality: { label: "실행 품질", desc: "모든 추천에 신뢰할 수 있는 근거를 제공합니다." }
      },
      labels: {
        capability: "역량",
        outcome: "결과",
        learnMore: "자세히 보기"
      },
      opportunities: {
        step: "단계 01",
        title: "유행하기 전 트렌드 포착",
        desc: "어제의 바이럴 히트를 쫓지 마세요. AI가 수백만 개의 신호를 분석하여 틈새 시장에 맞는 잠재력 높은 주제를 찾습니다.",
        statA: "24/7 신호 스캔",
        statB: "기회 우선 랭킹",
        bullets: ["포화되기 전에 떠오르는 주제를 찾습니다.", "검증된 니치 적합 주제에 집중합니다."],
        mock: {
          eyebrow: "트렌드 레이더",
          title: "적합도 높은 기회 감지",
          score: "점수 94",
          metrics: [
            { label: "속도", value: "+128%" },
            { label: "경쟁", value: "낮음" },
            { label: "조회 풀", value: "45M" }
          ],
          bullets: ["최고 성과 오디언스 세그먼트와 높은 중복.", "추천 게시 창은 다음 6시간 내에 열립니다."]
        }
      },
      planning: {
        step: "단계 02",
        title: "계획이 아닌 실행",
        desc: "전략을 행동으로 옮기세요. 고성장 위험과 안정적인 신뢰 구축 콘텐츠의 균형을 맞춘 주간 제작 일정을 받으세요.",
        statA: "주간 페이스 맵",
        statB: "균형 잡힌 콘텐츠 믹스",
        bullets: ["추천을 정확한 촬영 캘린더로 전환합니다.", "창의력을 소진하지 않고 일관성을 유지합니다."],
        mock: {
          eyebrow: "실행 계획",
          title: "이번 주 제작 리듬",
          postCount: "게시물 3개",
          schedule: [
            { day: "월", date: "24", task: "트렌드 기반 오프너", tag: "성장" },
            { day: "수", date: "26", task: "신뢰 형성 스토리", tag: "커뮤니티" },
            { day: "금", date: "28", task: "전환 CTA 영상", tag: "수익" }
          ]
        }
      },
      analytics: {
        step: "단계 03",
        title: "콘텐츠 DNA 해독",
        desc: "최고의 영상이 성공한 이유를 정확히 이해하세요. 성공을 복제하기 위해 콘텐츠를 구조적 요소로 분해합니다.",
        statA: "프레임 단위 진단",
        statB: "재현 가능한 승리 패턴",
        bullets: ["유지율과 완주를 좌우하는 핵심을 짚어냅니다.", "근거 기반 편집으로 더 빠르게 개선합니다."],
        mock: {
          eyebrow: "퍼포먼스 DNA",
          title: "이미 통하는 것을 재현",
          pill: "상위 5%",
          metrics: [
            { label: "훅 강도", value: "9.8/10", width: "w-[95%]" },
            { label: "시청 유지율", value: "72%", width: "w-[72%]" },
            { label: "CTA 완료율", value: "38%", width: "w-[38%]" }
          ]
        }
      }
    },
    coreFeatures: {
      badge: "파워하우스",
      title: "지배하기 위해",
      titleHighlight: "필요한 모든 것",
      subtitle: "현대 크리에이터를 위한 통합 운영 체제. 분리된 도구들을 오가지 마세요.",
      metrics: [
        { label: "게시 속도", value: "3배 더 빠르게" },
        { label: "계획 확신", value: "신호 기반" },
        { label: "실행 일관성", value: "주간 리듬" }
      ],
      copilot: {
        title: "AI 전략 코파일럿",
        desc: "24/7 창의적 파트너. 고전환 스크립트 생성, 훅 브레인스토밍, 아이디어에 대한 즉각적인 피드백.",
        badge: "실시간 생성",
        chat: {
          user: "다음 니치 영상에 더 강한 훅을 만들어줘.",
          assistantLabel: "추천 훅",
          assistant: "뻔한 인트로를 따라 하지 마세요. 시청자를 잡는 3초 오프너는 이겁니다."
        }
      },
      trend: {
        title: "트렌드 인텔리전스",
        desc: "정점에 도달하기 전 기회 포착. AI가 수백만 데이터 포인트를 분석하여 *당신의* 다음 바이럴 주제를 찾습니다.",
        liveSignals: "실시간 신호",
        list: { viewsLabel: "조회" }
      },
      goals: {
        title: "스마트 목표",
        desc: "모호한 야망을 실행 가능한 일일 작업으로 전환하세요.",
        ringLabel: "목표",
        tasks: [
          { task: "오프닝 훅 변형 녹화", done: true },
          { task: "트렌드 후보 검토", done: false },
          { task: "전환 의도가 높은 게시물 일정화", done: false }
        ]
      },
      analytics: { title: "심층 분석", badge: "+124% 전년 대비" },
      features: { scheduling: "스마트 스케줄링", prediction: "바이럴 예측", multiAccount: "다중 계정", reports: "즉시 보고서" }
    },
    valueProposition: {
      badge: "전략적 명확성",
      title: "무엇을 올릴지 더 이상 추측하지 마세요",
      subtitle: "OwlSeer가 TikTok에서 다음에 할 일을 알려드립니다.",
      cards: [
        { title: "실행 가능한 플랜", desc: "3분 이내에 완전한 콘텐츠 플랜을 받으세요." },
        { title: "AI 스크립트", desc: "오늘 바로 촬영할 수 있는 AI 생성 스크립트." },
        { title: "데이터 기반", desc: "무작위로 올리는 데 지친 크리에이터를 위해." }
      ],
      trust: ["기적 같은 약속 없음", "자동 게시 없음", "비밀번호 불필요"],
      metrics: [
        { label: "플랜 생성", value: "< 3분" },
        { label: "분석된 신호", value: "30+" },
        { label: "게시 리듬", value: "주간" }
      ],
      cta: {
        primary: "직접 보기",
        secondary: "작동 방식"
      }
    },
    pricingSection: {
      title: "간단하고 투명한 가격",
      subtitle: "7일 무료 체험을 시작하세요. 언제든지 취소 가능.",
      labels: { mostPopular: "가장 인기" },
      monthly: "월간",
      yearly: "연간",
      save: "20% 할인",
      period: "월",
      plans: {
        creator: {
          name: "Basic (개인 창작)",
          summary: "1인 크리에이터가 빠르게 운영 루프를 만드는 플랜.",
          features: [
            "1계정 / 1좌석",
            "월 30건 무료 영상 분석",
            "월 600 크레딧",
            "AI 콘텐츠 전 과정(진단~스크립트)",
            "기본형 AI Copilot"
          ]
        },
        growth: {
          name: "Growth (팀 성장)",
          summary: "소규모 팀의 대량 제작과 협업을 위한 플랜.",
          features: [
            "3계정 / 4좌석",
            "월 120건 무료 영상 분석",
            "월 1,200 크레딧",
            "완전한 일정·스크립트 워크플로",
            "배치 작업 처리",
            "기본 리포트 내보내기"
          ]
        },
        scale: {
          name: "Pro (확장 운영)",
          summary: "에이전시/멀티 계정 팀의 전환 효율 극대화를 위한 플랜.",
          features: [
            "8계정 / 10좌석",
            "월 400건 무료 영상 분석",
            "월 4,000 크레딧",
            "우선 연산 큐",
            "긴 문맥을 지원하는 고급형 AI Copilot"
          ]
        }
      },
      cta: { trial: "무료 체험 시작", buy: "지금 구매" },
      footer: { secure: "안전한 결제", trial: "7일 무료", cancel: "언제든 취소 가능" }
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
      solutions: "솔루션",
      useCases: "사용 사례",
      resources: "리소스",
      legal: "법적 고지",
      rights: "© 2026 OwlSeer. All rights reserved.",
      mobileProductAndSolutions: "제품 및 솔루션",
      links: {
        howItWorks: "작동 원리",
        methodology: "방법론",
        signals: "30+ 신호",
        pricing: "가격",
        trySample: "샘플 체험",
        blog: "블로그",
        guides: "가이드",
        glossary: "용어집",
        faq: "자주 묻는 질문",
        contentCreators: "콘텐츠 크리에이터",
        localBusiness: "지역 비즈니스",
        agencies: "에이전시",
        brands: "브랜드",
        ecommerceSellers: "이커머스 판매자",
        trendPrediction: "트렌드 예측",
        contentDiagnosis: "콘텐츠 진단",
        scriptGeneration: "스크립트 생성",
        postingSchedule: "게시 일정",
        hashtagStrategy: "해시태그 전략",
        privacy: "개인정보 처리방침",
        terms: "서비스 약관",
        security: "보안",
        cookies: "쿠키 정책"
      },
      meta: {
        developers: "개발자",
        sitemap: "사이트맵"
      }
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
          linkUrl: "/social/dashboard#aer-card",
          actionLine: "See engagement signals on real account data — [explore the Dashboard demo](/social/dashboard#aer-card).",
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
          linkUrl: "/social/simulation/trends",
          actionLine: "See trend signals on live data — [explore the Trend Radar demo](/social/simulation/trends).",
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
          linkUrl: "/social/intelligence",
          actionLine: "See audience insights on real data — [explore the Intelligence Hub demo](/social/intelligence).",
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
      },
      compareVidIQ: {
        hero: {
          title: "OwlSeer vs VidIQ: 내 워크플로에 맞는 TikTok 툴은?",
          lead: "VidIQ는 YouTube에서 시작해 TikTok으로 확장되었습니다. OwlSeer는 처음부터 TikTok 전용으로 설계되었습니다. 기능, 강점, 사용 적합도를 한눈에 비교합니다."
        },
        tldr: "TikTok이 핵심 채널이라면 TikTok 전용 신호 분석·트렌드 예측·스크립트 생성을 제공하는 OwlSeer가 적합합니다. YouTube가 주 채널이고 TikTok이 보조 채널이라면 VidIQ가 적합합니다.",
        table: {
          title: "기능별 비교",
          rows: [
            { feature: "핵심 플랫폼", owlseer: "TikTok 전용", vidiq: "YouTube 중심, TikTok 보조" },
            { feature: "TikTok 신호 깊이", owlseer: "30개+ 가중 신호", vidiq: "기본 TikTok 지표" },
            { feature: "트렌드 예측", owlseer: "AI + 속도 분석", vidiq: "인기 주제 목록" },
            { feature: "스크립트 생성", owlseer: "데이터 기반 Hook-Body-CTA", vidiq: "기본 스크립트 생성 없음" },
            { feature: "게시 일정", owlseer: "개인화 최적 시간 히트맵", vidiq: "일반 권장 시간" },
            { feature: "콘텐츠 진단", owlseer: "문제 탐지 + 개선 제안", vidiq: "성과 개요" },
            { feature: "AI 코파일럿", owlseer: "대화형 어시스턴트", vidiq: "대화형 AI 없음" },
            { feature: "주간 리포트", owlseer: "KPI 추적 자동화", vidiq: "자동 주간 리포트 없음" },
            { feature: "브랜드 세이프티", owlseer: "0-100 위험 점수", vidiq: "브랜드 안전 점수 없음" }
          ]
        },
        chooseOwlSeer: {
          title: "이런 경우 OwlSeer 추천",
          items: [
            "TikTok이 주요 또는 유일한 성장 채널",
            "기본 지표를 넘어선 30개+ 신호 분석이 필요",
            "내 오디언스에 맞춘 AI 스크립트가 필요",
            "트렌드 타이밍과 속도가 전략에 중요",
            "KPI 추적이 포함된 자동 주간 리포트가 필요",
            "대화형 AI 코파일럿을 선호"
          ]
        },
        chooseVidIQ: {
          title: "이런 경우 VidIQ 추천",
          items: [
            "YouTube가 주요 플랫폼",
            "YouTube 특화 기능(SEO, 키워드)이 필요",
            "TikTok은 보조 채널이며 기본 지표로 충분",
            "이미 YouTube 용도로 VidIQ를 사용 중"
          ]
        },
        platformFocus: {
          title: "왜 플랫폼 집중도가 중요한가",
          p1: "YouTube와 TikTok은 보상하는 행동이 다릅니다. YouTube는 검색 중심이고 제목·설명·썸네일이 노출을 좌우합니다. TikTok은 알고리즘 중심이며 훅율·시청 유지율·트렌드 적합도가 배포를 좌우합니다.",
          p2: "YouTube 중심 툴은 검색 의도를 최적화합니다. TikTok 중심 툴은 신호 패턴을 최적화합니다. YouTube 우선 툴로 TikTok 전략을 짜는 것은 바다에서 도로지도를 쓰는 것과 같습니다.",
          highlight: "OwlSeer는 YouTube 중심 툴이 모델링하지 않는 TikTok 특화 지표(AER, 훅율, 저장율)를 추적합니다."
        },
        boundary: {
          transparency: "비교 내용은 2026년 2월 기준 공개된 제품 정보를 기반으로 합니다.",
          note: "이 비교는 유료 리뷰가 아닙니다. 크리에이터가 더 나은 선택을 하도록 돕기 위해 작성했습니다."
        },
        cta: {
          title: "TikTok 네이티브 전략을 시작할 준비가 되었나요?",
          subtitle: "샘플 데이터에서 OwlSeer를 먼저 확인하고, 준비되면 무료 체험을 시작하세요.",
          primary: "무료 체험 시작",
          secondary: "샘플 보기"
        },
        ui: {
          loading: "콘텐츠를 불러오는 중...",
          badge: "정면 비교",
          coreInsight: "핵심 인사이트",
          tableHeaders: {
            feature: "기능",
            owlseer: "OwlSeer",
            competitor: "VidIQ"
          },
          missingBlockTitle: "VidIQ에 없는 기능을 확인하세요",
          actionButtons: {
            trendRadar: "트렌드 레이더",
            scriptStudio: "스크립트 스튜디오",
            weeklyReport: "주간 리포트"
          },
          platformFocusLabel: "플랫폼 집중도",
          transparencyNote: "투명성 안내"
        }
      }
    }
  },
  es: {
    product: 'Producto',
    pricing: 'Precios',
    resources: 'Recursos',
    methodology: 'Metodología',
    login: 'Iniciar sesión',
    signup: 'Registro gratis',
    whatIs: 'Qué es OwlSeer',
    howItWorks: 'Cómo funciona',
    faq: 'Preguntas frecuentes',
    security: 'Seguridad y Privacidad',
    blog: 'Blog',
    guides: 'Guías',
    nav: {
      solutions: "Soluciones",
      platform: "Plataforma",
      useCases: "Casos de uso",
      byRole: "Por rol",
      learn: "Aprender",
      trustSupport: "Confianza y soporte",
      trustSecurity: "Confianza y seguridad",
      language: "Idioma",
      glossary: "Glosario",
      links: {
        signals: "30+ señales",
        interactiveSample: "Muestra interactiva",
        trendPrediction: "Predicción de tendencias",
        contentDiagnosis: "Diagnóstico de contenido",
        scriptGeneration: "Generación de guiones",
        postingSchedule: "Horario de publicación",
        hashtagStrategy: "Estrategia de hashtags",
        contentCreators: "Creadores de contenido",
        localBusiness: "Negocios locales",
        agencies: "Agencias",
        brands: "Marcas",
        ecommerceSellers: "Vendedores de e-commerce",
        privacy: "Privacidad",
        terms: "Términos",
        cookies: "Cookies",
        security: "Seguridad"
      },
      desc: {
        howItWorks: "Empieza en 3 pasos",
        methodology: "Nuestro proceso de IA en 5 pasos",
        signals: "Lo que rastreamos",
        interactiveSample: "Ver OwlSeer en acción",
        trySample: "Verlo con datos reales"
      },
      actions: {
        trySample: "Probar muestra",
        startFree: "Empieza gratis",
        startFreeTrial: "Iniciar prueba gratuita",
        trySampleCta: "Probar muestra"
      },
      darkMode: {
        toggle: "Alternar modo oscuro",
        switchToLight: "Cambiar a modo claro",
        switchToDark: "Cambiar a modo oscuro"
      }
    },
    hero: {
      badge: 'v2.0 ya disponible',
      title: "Mira lo",
      titleHighlight: "Siguiente",
      subtitle: "Tus analíticas de {platform} no te dicen qué hacer.",
      subtitle2: "Nosotros sí.",
      ctaPrimary: "Probar Muestra",
      ctaSecondaryButton: "Empezar ahora",
      ctaSecondary: "Sin registro",
      ctaInstant: "Acceso instantáneo"
    },
    productShowcase: {
      heading: {
        title: "De insight a publicación lista en un solo flujo",
        subtitle: "OwlSeer elimina la brecha entre estrategia y ejecución para que los creadores pasen de la señal al guion con confianza."
      },
      highlights: {
        decisionCycle: { label: "Ciclo de decisión", desc: "De la detección de señales a la ejecución en minutos, no en días." },
        growthSignal: { label: "Señal de crecimiento", desc: "Prioriza oportunidades por velocidad y encaje en tu nicho." },
        executionQuality: { label: "Calidad de ejecución", desc: "Cada recomendación incluye razonamiento en el que puedes confiar." }
      },
      labels: {
        capability: "Capacidad",
        outcome: "Resultado",
        learnMore: "Saber más"
      },
      opportunities: {
        step: "Paso 01",
        title: "Detecta tendencias antes de que alcancen su pico",
        desc: "Deja de perseguir éxitos virales de ayer. Nuestra IA analiza millones de señales para encontrar temas de alto potencial adaptados a tu nicho.",
        statA: "Escaneo de señales 24/7",
        statB: "Ranking por oportunidades",
        bullets: ["Encuentra temas en alza antes de la saturación.", "Prioriza temas con encaje probado en tu nicho."],
        mock: {
          eyebrow: "Radar de tendencias",
          title: "Oportunidad de alto encaje detectada",
          score: "94 puntos",
          metrics: [
            { label: "Velocidad", value: "+128%" },
            { label: "Competencia", value: "Baja" },
            { label: "Pool de vistas", value: "45M" }
          ],
          bullets: [
            "Alta coincidencia con tu segmento de audiencia con mejor rendimiento.",
            "La ventana de publicación recomendada se abre en las próximas 6 horas."
          ]
        }
      },
      planning: {
        step: "Paso 02",
        title: "Ejecución, No Solo Planificación",
        desc: "Convierte la estrategia en acción. Obtén un calendario de producción semanal que equilibre riesgos de crecimiento con contenido estable de confianza.",
        statA: "Mapa de ritmo semanal",
        statB: "Mix de contenido equilibrado",
        bullets: ["Convierte recomendaciones en un calendario exacto de grabación.", "Mantén consistencia sin agotar tu creatividad."],
        mock: {
          eyebrow: "Plan de ejecución",
          title: "Cadencia de producción de esta semana",
          postCount: "3 publicaciones",
          schedule: [
            { day: "Lun", date: "24", task: "Apertura basada en tendencia", tag: "Crecimiento" },
            { day: "Mié", date: "26", task: "Historia para generar confianza", tag: "Comunidad" },
            { day: "Vie", date: "28", task: "Video de CTA de conversión", tag: "Ingresos" }
          ]
        }
      },
      analytics: {
        step: "Paso 03",
        title: "Decodifica tu ADN de Contenido",
        desc: "Entiende exactamente por qué tus mejores videos funcionan. Desglosamos tu contenido en elementos estructurales para replicar el éxito.",
        statA: "Diagnóstico fotograma a fotograma",
        statB: "Patrones ganadores repetibles",
        bullets: ["Identifica qué impulsa la retención y la finalización.", "Itera más rápido con ediciones respaldadas por datos."],
        mock: {
          eyebrow: "ADN de rendimiento",
          title: "Replica lo que ya funciona",
          pill: "Top 5%",
          metrics: [
            { label: "Fuerza del gancho", value: "9.8/10", width: "w-[95%]" },
            { label: "Retención de audiencia", value: "72%", width: "w-[72%]" },
            { label: "Finalización de CTA", value: "38%", width: "w-[38%]" }
          ]
        }
      }
    },
    coreFeatures: {
      badge: "Potencia",
      title: "Todo lo que necesitas para",
      titleHighlight: "dominar",
      subtitle: "Un sistema operativo unificado para creadores modernos.",
      metrics: [
        { label: "Velocidad de publicación", value: "3x más rápido" },
        { label: "Confianza al planificar", value: "Respaldado por señales" },
        { label: "Consistencia de ejecución", value: "Cadencia semanal" }
      ],
      copilot: {
        title: "Copiloto de Estrategia AI",
        desc: "Tu socio creativo 24/7. Genera guiones de alta conversión y obtén retroalimentación instantánea.",
        badge: "Generación en tiempo real",
        chat: {
          user: "Dame un gancho más fuerte para mi próximo video de nicho.",
          assistantLabel: "Gancho sugerido",
          assistant: "Deja de copiar intros genéricas. Aquí tienes la apertura de 3 segundos que retiene a tus espectadores."
        }
      },
      trend: {
        title: "Inteligencia de Tendencias",
        desc: "Detecta oportunidades antes de que alcancen su punto máximo.",
        liveSignals: "Señales en Vivo",
        list: { viewsLabel: "vistas" }
      },
      goals: {
        title: "Objetivos Inteligentes",
        desc: "Convierte ambiciones vagas en tareas diarias procesables.",
        ringLabel: "Objetivo",
        tasks: [
          { task: "Grabar variación del gancho inicial", done: true },
          { task: "Revisar lista corta de tendencias", done: false },
          { task: "Programar publicación de alta intención", done: false }
        ]
      },
      analytics: { title: "Analítica Profunda", badge: "+124% interanual" },
      features: { scheduling: "Programación Inteligente", prediction: "Predicción Viral", multiAccount: "Multi-cuenta", reports: "Informes Instantáneos" }
    },
    valueProposition: {
      badge: "Claridad estratégica",
      title: "Deja de adivinar qué publicar",
      subtitle: "OwlSeer te dice qué hacer a continuación en TikTok.",
      cards: [
        { title: "Planes accionables", desc: "Obtén un plan de contenido completo en menos de 3 minutos." },
        { title: "Guiones con IA", desc: "Guiones generados por IA listos para grabar hoy." },
        { title: "Basado en datos", desc: "Para creadores cansados de publicar al azar." }
      ],
      trust: ["Sin promesas milagrosas", "Sin autopublicación", "Sin contraseña"],
      metrics: [
        { label: "Tiempo del plan", value: "< 3 min" },
        { label: "Señales analizadas", value: "30+" },
        { label: "Ritmo de publicación", value: "Semanal" }
      ],
      cta: {
        primary: "Verlo en acción",
        secondary: "Cómo funciona"
      }
    },
    pricingSection: {
      title: "Precios Simples y Transparentes",
      subtitle: "Comienza tu prueba gratuita de 7 días. Cancela cuando quieras.",
      labels: { mostPopular: "Más popular" },
      monthly: "Mensual",
      yearly: "Anual",
      save: "20% DTO",
      period: "mes",
      plans: {
        creator: {
          name: "Basic",
          summary: "Plan individual para lanzar rápido tu sistema de contenido.",
          features: [
            "1 cuenta / 1 asiento",
            "30 análisis de video gratis al mes",
            "600 créditos mensuales",
            "Flujo completo con IA: diagnóstico y guiones",
            "AI Copilot básico"
          ]
        },
        growth: {
          name: "Growth",
          summary: "Plan para equipos pequeños que necesitan producción escalable.",
          features: [
            "3 cuentas / 4 asientos",
            "120 análisis de video gratis al mes",
            "1.200 créditos mensuales",
            "Flujo completo de calendario y guiones",
            "Procesamiento por lotes",
            "Exportación de reportes básicos"
          ]
        },
        scale: {
          name: "Pro",
          summary: "Plan para agencias y equipos multi-cuenta con máxima eficiencia.",
          features: [
            "8 cuentas / 10 asientos",
            "400 análisis de video gratis al mes",
            "4.000 créditos mensuales",
            "Cola de cómputo prioritaria",
            "AI Copilot con contexto extendido"
          ]
        }
      },
      cta: { trial: "Empezar Prueba Gratis", buy: "Comprar Ahora" },
      footer: { secure: "Pago seguro", trial: "7 días gratis", cancel: "Cancela cuando quieras" }
    },
    finalCta: {
      title: "¿Listo para ver tu futuro?",
      subtitle: "Únete a miles de creadores que dejaron de adivinar y comenzaron a crecer.",
      start: "Empezar Prueba Gratis",
      demo: "Ver Sample en Vivo"
    },
    footer: {
      tagline: "Estrategia de TikTok con IA para creadores.\nDeja de adivinar. Empieza a crecer.",
      product: "Producto",
      solutions: "Soluciones",
      useCases: "Casos de uso",
      resources: "Recursos",
      legal: "Legal",
      rights: "© 2026 OwlSeer. Todos los derechos reservados.",
      mobileProductAndSolutions: "Producto y soluciones",
      links: {
        howItWorks: "Cómo funciona",
        methodology: "Metodología",
        signals: "30+ señales",
        pricing: "Precios",
        trySample: "Probar muestra",
        blog: "Blog",
        guides: "Guías",
        glossary: "Glosario",
        faq: "Preguntas frecuentes",
        contentCreators: "Creadores de contenido",
        localBusiness: "Negocios locales",
        agencies: "Agencias",
        brands: "Marcas",
        ecommerceSellers: "Vendedores de e-commerce",
        trendPrediction: "Predicción de tendencias",
        contentDiagnosis: "Diagnóstico de contenido",
        scriptGeneration: "Generación de guiones",
        postingSchedule: "Horario de publicación",
        hashtagStrategy: "Estrategia de hashtags",
        privacy: "Política de privacidad",
        terms: "Términos de servicio",
        security: "Seguridad",
        cookies: "Política de cookies"
      },
      meta: {
        developers: "Desarrolladores",
        sitemap: "Mapa del sitio"
      }
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
          linkUrl: "/social/dashboard#aer-card",
          actionLine: "See engagement signals on real account data — [explore the Dashboard demo](/social/dashboard#aer-card).",
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
          linkUrl: "/social/simulation/trends",
          actionLine: "See trend signals on live data — [explore the Trend Radar demo](/social/simulation/trends).",
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
          linkUrl: "/social/intelligence",
          actionLine: "See audience insights on real data — [explore the Intelligence Hub demo](/social/intelligence).",
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
      },
      compareVidIQ: {
        hero: {
          title: "OwlSeer vs VidIQ: ¿qué herramienta TikTok encaja con tu flujo?",
          lead: "VidIQ nació en YouTube y luego se expandió a TikTok. OwlSeer se diseñó para TikTok desde el primer día. Aquí comparamos funciones, fortalezas y casos de uso."
        },
        tldr: "Si TikTok es tu canal principal, elige OwlSeer por su análisis profundo de señales, predicción de tendencias y generación de guiones. Si priorizas YouTube y TikTok es secundario, VidIQ puede ser suficiente.",
        table: {
          title: "Comparación función por función",
          rows: [
            { feature: "Plataforma principal", owlseer: "TikTok (exclusivo)", vidiq: "YouTube (principal), TikTok (secundario)" },
            { feature: "Profundidad de señales TikTok", owlseer: "30+ señales ponderadas", vidiq: "Métricas básicas de TikTok" },
            { feature: "Predicción de tendencias", owlseer: "IA con velocidad", vidiq: "Listado de temas en tendencia" },
            { feature: "Generación de guiones", owlseer: "Hook-Body-CTA basado en datos", vidiq: "Sin generación nativa de guiones" },
            { feature: "Horario de publicación", owlseer: "Mapa de calor personalizado", vidiq: "Sugerencias genéricas de horario" },
            { feature: "Diagnóstico de contenido", owlseer: "Detección de problemas + correcciones", vidiq: "Resumen de rendimiento" },
            { feature: "Copiloto IA", owlseer: "Asistente conversacional", vidiq: "Sin IA conversacional" },
            { feature: "Informe semanal", owlseer: "Automatizado con seguimiento KPI", vidiq: "Sin informe semanal automatizado" },
            { feature: "Brand safety", owlseer: "Escala de riesgo 0-100", vidiq: "Sin puntuación de seguridad de marca" }
          ]
        },
        chooseOwlSeer: {
          title: "Elige OwlSeer si...",
          items: [
            "TikTok es tu plataforma principal o única",
            "Necesitas más de 30 señales, no solo métricas básicas",
            "Quieres guiones IA personalizados para tu audiencia",
            "El timing y la velocidad de tendencia importan en tu estrategia",
            "Necesitas informes semanales automáticos con KPI",
            "Prefieres un copiloto IA conversacional"
          ]
        },
        chooseVidIQ: {
          title: "Elige VidIQ si...",
          items: [
            "YouTube es tu plataforma principal",
            "Necesitas funciones específicas de YouTube (SEO, keywords)",
            "TikTok es secundario y te bastan métricas básicas",
            "Ya usas VidIQ para tu canal de YouTube"
          ]
        },
        platformFocus: {
          title: "Por qué importa el enfoque de plataforma",
          p1: "YouTube y TikTok premian comportamientos distintos. YouTube es búsqueda: títulos, descripciones y miniaturas determinan descubrimiento. TikTok es algoritmo: hook rate, retención y ajuste a tendencia determinan distribución.",
          p2: "Una herramienta diseñada para YouTube optimiza intención de búsqueda. Una herramienta diseñada para TikTok optimiza patrones de señales. Usar una herramienta YouTube-first para estrategia TikTok es como usar un mapa de carreteras en el océano.",
          highlight: "OwlSeer rastrea métricas específicas de TikTok (AER, hook rate, save rate) que las herramientas centradas en YouTube no modelan."
        },
        boundary: {
          transparency: "La comparación se basa en información pública de producto a febrero de 2026.",
          note: "No es una reseña pagada. La publicamos para ayudarte a elegir con criterio."
        },
        cta: {
          title: "¿Listo para una estrategia nativa de TikTok?",
          subtitle: "Prueba OwlSeer con datos de muestra o inicia tu prueba gratis.",
          primary: "Iniciar prueba gratis",
          secondary: "Ver muestra"
        },
        ui: {
          loading: "Cargando contenido...",
          badge: "Cara a cara",
          coreInsight: "Insight clave",
          tableHeaders: {
            feature: "Función",
            owlseer: "OwlSeer",
            competitor: "VidIQ"
          },
          missingBlockTitle: "Descubre lo que VidIQ no ofrece",
          actionButtons: {
            trendRadar: "Radar de tendencias",
            scriptStudio: "Estudio de guiones",
            weeklyReport: "Informe semanal"
          },
          platformFocusLabel: "Enfoque de plataforma",
          transparencyNote: "Nota de transparencia"
        }
      }
    }
  },
  fr: {
    product: 'Produit',
    pricing: 'Tarifs',
    resources: 'Ressources',
    methodology: 'Méthodologie',
    login: 'Connexion',
    signup: 'Inscription gratuite',
    whatIs: "Qu'est-ce que OwlSeer",
    howItWorks: 'Comment ça marche',
    faq: 'FAQ',
    security: 'Sécurité et Confidentialité',
    blog: 'Blog',
    guides: 'Guides',
    nav: {
      solutions: "Solutions",
      platform: "Plateforme",
      useCases: "Cas d’usage",
      byRole: "Par rôle",
      learn: "Apprendre",
      trustSupport: "Confiance & support",
      trustSecurity: "Confiance & sécurité",
      language: "Langue",
      glossary: "Glossaire",
      links: {
        signals: "30+ signaux",
        interactiveSample: "Exemple interactif",
        trendPrediction: "Prédiction de tendances",
        contentDiagnosis: "Diagnostic de contenu",
        scriptGeneration: "Génération de scripts",
        postingSchedule: "Planning de publication",
        hashtagStrategy: "Stratégie de hashtags",
        contentCreators: "Créateurs de contenu",
        localBusiness: "Commerce local",
        agencies: "Agences",
        brands: "Marques",
        ecommerceSellers: "Vendeurs e-commerce",
        privacy: "Confidentialité",
        terms: "Conditions",
        cookies: "Cookies",
        security: "Sécurité"
      },
      desc: {
        howItWorks: "Démarrer en 3 étapes",
        methodology: "Notre process IA en 5 étapes",
        signals: "Ce que nous suivons",
        interactiveSample: "Voir OwlSeer en action",
        trySample: "Le voir sur des données réelles"
      },
      actions: {
        trySample: "Essayer l’exemple",
        startFree: "Commencer gratuitement",
        startFreeTrial: "Démarrer l’essai gratuit",
        trySampleCta: "Essayer l’exemple"
      },
      darkMode: {
        toggle: "Basculer en mode sombre",
        switchToLight: "Passer en mode clair",
        switchToDark: "Passer en mode sombre"
      }
    },
    hero: {
      badge: 'v2.0 est en ligne',
      title: "Voir la",
      titleHighlight: "Suite",
      subtitle: "Vos analyses {platform} ne vous disent pas quoi faire.",
      subtitle2: "Nous le faisons.",
      ctaPrimary: "Essayer la démo",
      ctaSecondaryButton: "Commencer maintenant",
      ctaSecondary: "Pas d'inscription",
      ctaInstant: "Accès instantané"
    },
    productShowcase: {
      heading: {
        title: "De l'insight à un contenu prêt à publier, en un seul flux",
        subtitle: "OwlSeer comble l'écart entre stratégie et exécution pour que les créateurs passent du signal au script en toute confiance."
      },
      highlights: {
        decisionCycle: { label: "Cycle de décision", desc: "De la détection du signal à l'exécution en minutes, pas en jours." },
        growthSignal: { label: "Signal de croissance", desc: "Priorisez les opportunités selon la vitesse et l'adéquation à votre niche." },
        executionQuality: { label: "Qualité d'exécution", desc: "Chaque recommandation inclut un raisonnement fiable." }
      },
      labels: {
        capability: "Capacité",
        outcome: "Résultat",
        learnMore: "En savoir plus"
      },
      opportunities: {
        step: "Étape 01",
        title: "Repérez les tendances avant leur apogée",
        desc: "Arrêtez de chasser les succès viraux d'hier. Notre IA analyse des millions de signaux pour trouver des sujets à fort potentiel adaptés à votre niche.",
        statA: "Scan de signaux 24/7",
        statB: "Classement orienté opportunités",
        bullets: ["Repérez les sujets en hausse avant la saturation.", "Priorisez les sujets dont l'adéquation à votre niche est prouvée."],
        mock: {
          eyebrow: "Radar de tendances",
          title: "Opportunité à forte adéquation détectée",
          score: "Score 94",
          metrics: [
            { label: "Vitesse", value: "+128%" },
            { label: "Concurrence", value: "Faible" },
            { label: "Pool de vues", value: "45M" }
          ],
          bullets: [
            "Forte correspondance avec votre segment d'audience le plus performant.",
            "La fenêtre de publication recommandée s'ouvre dans les prochaines 6 heures."
          ]
        }
      },
      planning: {
        step: "Étape 02",
        title: "Exécution, Pas Juste Planification",
        desc: "Transformez la stratégie en action. Obtenez un calendrier de production hebdomadaire qui équilibre les risques de croissance et un contenu stable de confiance.",
        statA: "Carte de cadence hebdomadaire",
        statB: "Mix de contenu équilibré",
        bullets: ["Transformez les recommandations en calendrier de tournage précis.", "Gardez la constance sans épuiser votre créativité."],
        mock: {
          eyebrow: "Plan d'exécution",
          title: "Cadence de production de la semaine",
          postCount: "3 publications",
          schedule: [
            { day: "Lun", date: "24", task: "Ouverture axée tendance", tag: "Croissance" },
            { day: "Mer", date: "26", task: "Histoire qui renforce la confiance", tag: "Communauté" },
            { day: "Ven", date: "28", task: "Vidéo CTA de conversion", tag: "Revenus" }
          ]
        }
      },
      analytics: {
        step: "Étape 03",
        title: "Décodez votre ADN de Contenu",
        desc: "Comprenez exactement pourquoi vos meilleures vidéos fonctionnent. Nous décomposons votre contenu en éléments structurels pour reproduire le succès.",
        statA: "Diagnostic image par image",
        statB: "Schémas gagnants reproductibles",
        bullets: ["Identifiez ce qui stimule la rétention et la complétion.", "Itérez plus vite grâce à des ajustements basés sur les données."],
        mock: {
          eyebrow: "ADN de performance",
          title: "Reproduisez ce qui gagne déjà",
          pill: "Top 5%",
          metrics: [
            { label: "Force de l'accroche", value: "9.8/10", width: "w-[95%]" },
            { label: "Rétention d'audience", value: "72%", width: "w-[72%]" },
            { label: "Complétion du CTA", value: "38%", width: "w-[38%]" }
          ]
        }
      }
    },
    coreFeatures: {
      badge: "Puissance",
      title: "Tout ce dont vous avez besoin pour",
      titleHighlight: "dominer",
      subtitle: "Un système d'exploitation unifié pour les créateurs modernes.",
      metrics: [
        { label: "Vitesse de publication", value: "3x plus rapide" },
        { label: "Confiance de planification", value: "Basée sur les signaux" },
        { label: "Régularité d'exécution", value: "Cadence hebdomadaire" }
      ],
      copilot: {
        title: "Copilote Stratégie IA",
        desc: "Votre partenaire créatif 24/7. Générez des scripts à haute conversion et obtenez des retours instantanés.",
        badge: "Génération en temps réel",
        chat: {
          user: "Donne-moi une accroche plus forte pour ma prochaine vidéo de niche.",
          assistantLabel: "Accroche suggérée",
          assistant: "Arrêtez de copier des intros génériques. Voici l'ouverture de 3 secondes qui retient vos spectateurs."
        }
      },
      trend: {
        title: "Intelligence des Tendances",
        desc: "Repérez les opportunités avant qu'elles n'atteignent leur apogée.",
        liveSignals: "Signaux en Direct",
        list: { viewsLabel: "vues" }
      },
      goals: {
        title: "Objectifs Intelligents",
        desc: "Transformez des ambitions vagues en tâches quotidiennes réalisables.",
        ringLabel: "Objectif",
        tasks: [
          { task: "Enregistrer une variation d'accroche", done: true },
          { task: "Revoir la shortlist de tendances", done: false },
          { task: "Planifier un post à forte intention", done: false }
        ]
      },
      analytics: { title: "Analytique Approfondie", badge: "+124% sur un an" },
      features: { scheduling: "Planification Intelligente", prediction: "Prédiction Virale", multiAccount: "Multi-comptes", reports: "Rapports Instantanés" }
    },
    valueProposition: {
      badge: "Clarté stratégique",
      title: "Arrêtez de deviner quoi publier",
      subtitle: "OwlSeer vous dit quoi faire ensuite sur TikTok.",
      cards: [
        { title: "Plans actionnables", desc: "Obtenez un plan de contenu complet en moins de 3 minutes." },
        { title: "Scripts IA", desc: "Des scripts générés par IA, prêts à tourner aujourd'hui." },
        { title: "Piloté par les données", desc: "Pour les créateurs fatigués de publier au hasard." }
      ],
      trust: ["Pas de promesses miracles", "Pas d'auto-publication", "Aucun mot de passe requis"],
      metrics: [
        { label: "Délai du plan", value: "< 3 min" },
        { label: "Signaux analysés", value: "30+" },
        { label: "Rythme de publication", value: "Hebdomadaire" }
      ],
      cta: {
        primary: "Voir en action",
        secondary: "Comment ça marche"
      }
    },
    pricingSection: {
      title: "Tarification Simple et Transparente",
      subtitle: "Commencez votre essai gratuit de 7 jours. Annulez à tout moment.",
      labels: { mostPopular: "Le plus populaire" },
      monthly: "Mensuel",
      yearly: "Annuel",
      save: "-20%",
      period: "mois",
      plans: {
        creator: {
          name: "Basic",
          summary: "Plan solo pour lancer rapidement une machine de contenu.",
          features: [
            "1 compte / 1 siège",
            "30 analyses vidéo gratuites / mois",
            "600 crédits mensuels",
            "Chaîne IA complète : diagnostic + scripts",
            "AI Copilot de base"
          ]
        },
        growth: {
          name: "Growth",
          summary: "Plan équipe pour industrialiser la production de contenu.",
          features: [
            "3 comptes / 4 sièges",
            "120 analyses vidéo gratuites / mois",
            "1 200 crédits mensuels",
            "Workflow planning + scripts complet",
            "Traitement de tâches par lot",
            "Export de rapports standards"
          ]
        },
        scale: {
          name: "Pro",
          summary: "Plan pour agences et équipes multi-comptes à haute performance.",
          features: [
            "8 comptes / 10 sièges",
            "400 analyses vidéo gratuites / mois",
            "4 000 crédits mensuels",
            "File de calcul prioritaire",
            "AI Copilot avec contexte long"
          ]
        }
      },
      cta: { trial: "Essai Gratuit", buy: "Acheter Maintenant" },
      footer: { secure: "Paiement sécurisé", trial: "7 jours gratuits", cancel: "Annulez à tout moment" }
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
      solutions: "Solutions",
      useCases: "Cas d’usage",
      resources: "Ressources",
      legal: "Légal",
      rights: "© 2026 OwlSeer. Tous droits réservés.",
      mobileProductAndSolutions: "Produit et solutions",
      links: {
        howItWorks: "Comment ça marche",
        methodology: "Méthodologie",
        signals: "30+ signaux",
        pricing: "Tarifs",
        trySample: "Essayer l’exemple",
        blog: "Blog",
        guides: "Guides",
        glossary: "Glossaire",
        faq: "FAQ",
        contentCreators: "Créateurs de contenu",
        localBusiness: "Commerce local",
        agencies: "Agences",
        brands: "Marques",
        ecommerceSellers: "Vendeurs e-commerce",
        trendPrediction: "Prédiction de tendances",
        contentDiagnosis: "Diagnostic de contenu",
        scriptGeneration: "Génération de scripts",
        postingSchedule: "Planning de publication",
        hashtagStrategy: "Stratégie de hashtags",
        privacy: "Politique de confidentialité",
        terms: "Conditions d’utilisation",
        security: "Sécurité",
        cookies: "Politique des cookies"
      },
      meta: {
        developers: "Développeurs",
        sitemap: "Plan du site"
      }
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
          linkUrl: "/social/dashboard#aer-card",
          actionLine: "See engagement signals on real account data — [explore the Dashboard demo](/social/dashboard#aer-card).",
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
          linkUrl: "/social/simulation/trends",
          actionLine: "See trend signals on live data — [explore the Trend Radar demo](/social/simulation/trends).",
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
          linkUrl: "/social/intelligence",
          actionLine: "See audience insights on real data — [explore the Intelligence Hub demo](/social/intelligence).",
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
      },
      compareVidIQ: {
        hero: {
          title: "OwlSeer vs VidIQ : quel outil TikTok correspond à votre workflow ?",
          lead: "VidIQ est né sur YouTube puis s’est étendu à TikTok. OwlSeer a été conçu pour TikTok dès le départ. Cette page compare les fonctions, les points forts et les cas d’usage."
        },
        tldr: "Choisissez OwlSeer si TikTok est votre canal principal et que vous voulez des signaux natifs, de la prédiction de tendances et des scripts générés par IA. Choisissez VidIQ si YouTube reste prioritaire et TikTok secondaire.",
        table: {
          title: "Comparaison fonctionnalité par fonctionnalité",
          rows: [
            { feature: "Plateforme principale", owlseer: "TikTok (exclusif)", vidiq: "YouTube (principal), TikTok (secondaire)" },
            { feature: "Profondeur des signaux TikTok", owlseer: "30+ signaux pondérés", vidiq: "Métriques TikTok de base" },
            { feature: "Prédiction des tendances", owlseer: "IA + vitesse", vidiq: "Liste de sujets tendance" },
            { feature: "Génération de scripts", owlseer: "Hook-Body-CTA piloté par la donnée", vidiq: "Pas de génération native" },
            { feature: "Planning de publication", owlseer: "Heatmap personnalisée", vidiq: "Suggestions génériques" },
            { feature: "Diagnostic de contenu", owlseer: "Détection de problèmes + correctifs", vidiq: "Vue d’ensemble performance" },
            { feature: "Copilote IA", owlseer: "Assistant conversationnel", vidiq: "Pas d’IA conversationnelle" },
            { feature: "Rapport hebdomadaire", owlseer: "Automatisé avec suivi KPI", vidiq: "Pas de rapport hebdomadaire automatisé" },
            { feature: "Brand safety", owlseer: "Score de risque 0-100", vidiq: "Pas de score brand safety" }
          ]
        },
        chooseOwlSeer: {
          title: "Choisissez OwlSeer si...",
          items: [
            "TikTok est votre plateforme principale ou unique",
            "Vous voulez plus de 30 signaux au-delà des métriques basiques",
            "Vous avez besoin de scripts IA adaptés à votre audience",
            "Le timing et la vitesse des tendances sont stratégiques",
            "Vous voulez des rapports hebdomadaires automatiques avec KPI",
            "Vous préférez un copilote IA conversationnel"
          ]
        },
        chooseVidIQ: {
          title: "Choisissez VidIQ si...",
          items: [
            "YouTube est votre plateforme principale",
            "Vous avez besoin de fonctions YouTube spécifiques (SEO, mots-clés)",
            "TikTok est secondaire et les métriques de base suffisent",
            "Vous utilisez déjà VidIQ pour YouTube"
          ]
        },
        platformFocus: {
          title: "Pourquoi le focus plateforme est décisif",
          p1: "YouTube et TikTok récompensent des comportements différents. YouTube est piloté par la recherche : titres, descriptions et miniatures gouvernent la découverte. TikTok est piloté par l’algorithme : hook rate, rétention et alignement tendance gouvernent la distribution.",
          p2: "Un outil conçu pour YouTube optimise l’intention de recherche. Un outil conçu pour TikTok optimise les patterns de signaux. Utiliser un outil YouTube-first pour TikTok revient à naviguer en mer avec une carte routière.",
          highlight: "OwlSeer suit des métriques spécifiques TikTok (AER, hook rate, save rate) que les outils YouTube-first ne modélisent pas."
        },
        boundary: {
          transparency: "Comparatif basé sur les informations publiques disponibles en février 2026.",
          note: "Ce comparatif n’est pas sponsorisé. Il sert à aider les créateurs à choisir de manière éclairée."
        },
        cta: {
          title: "Prêt à tester une stratégie native TikTok ?",
          subtitle: "Découvrez OwlSeer sur des données d’exemple, ou lancez votre essai gratuit.",
          primary: "Commencer l’essai gratuit",
          secondary: "Voir l’exemple"
        },
        ui: {
          loading: "Chargement du contenu...",
          badge: "Face à face",
          coreInsight: "Insight clé",
          tableHeaders: {
            feature: "Fonction",
            owlseer: "OwlSeer",
            competitor: "VidIQ"
          },
          missingBlockTitle: "Découvrez ce qu’il manque à VidIQ",
          actionButtons: {
            trendRadar: "Radar de tendances",
            scriptStudio: "Studio de scripts",
            weeklyReport: "Rapport hebdomadaire"
          },
          platformFocusLabel: "Focus plateforme",
          transparencyNote: "Note de transparence"
        }
      }
    }
  },
  de: {
    product: 'Produkt',
    pricing: 'Preise',
    resources: 'Ressourcen',
    methodology: 'Methodik',
    login: 'Anmelden',
    signup: 'Kostenlos registrieren',
    whatIs: 'Was ist OwlSeer',
    howItWorks: 'Wie es funktioniert',
    faq: 'FAQ',
    security: 'Sicherheit & Datenschutz',
    blog: 'Blog',
    guides: 'Guides',
    nav: {
      solutions: "Lösungen",
      platform: "Plattform",
      useCases: "Anwendungsfälle",
      byRole: "Nach Rolle",
      learn: "Lernen",
      trustSupport: "Vertrauen & Support",
      trustSecurity: "Vertrauen & Sicherheit",
      language: "Sprache",
      glossary: "Glossar",
      links: {
        signals: "30+ Signale",
        interactiveSample: "Interaktives Sample",
        trendPrediction: "Trendprognose",
        contentDiagnosis: "Content-Diagnose",
        scriptGeneration: "Skriptgenerierung",
        postingSchedule: "Posting-Zeitplan",
        hashtagStrategy: "Hashtag-Strategie",
        contentCreators: "Content Creator",
        localBusiness: "Lokales Unternehmen",
        agencies: "Agenturen",
        brands: "Marken",
        ecommerceSellers: "E-Commerce-Verkäufer",
        privacy: "Datenschutz",
        terms: "Bedingungen",
        cookies: "Cookies",
        security: "Sicherheit"
      },
      desc: {
        howItWorks: "In 3 Schritten starten",
        methodology: "Unser 5‑Schritte‑KI‑Prozess",
        signals: "Was wir messen",
        interactiveSample: "OwlSeer in Aktion sehen",
        trySample: "Mit echten Daten sehen"
      },
      actions: {
        trySample: "Sample testen",
        startFree: "Kostenlos starten",
        startFreeTrial: "Kostenlose Testversion starten",
        trySampleCta: "Sample testen"
      },
      darkMode: {
        toggle: "Dark Mode umschalten",
        switchToLight: "Zum Light Mode wechseln",
        switchToDark: "Zum Dark Mode wechseln"
      }
    },
    hero: {
      badge: 'v2.0 ist live',
      title: "Sieh das",
      titleHighlight: "Nächste",
      subtitle: "Deine {platform}-Analysen sagen dir nicht, was du tun sollst.",
      subtitle2: "Wir schon.",
      ctaPrimary: "Sample ausprobieren",
      ctaSecondaryButton: "Jetzt starten",
      ctaSecondary: "Keine Anmeldung",
      ctaInstant: "Sofortiger Zugang"
    },
    productShowcase: {
      heading: {
        title: "Von Insight zu veröffentlichungsfertigem Output – in einem Flow",
        subtitle: "OwlSeer schließt die Lücke zwischen Strategie und Umsetzung, damit Creator sicher von Signal zu Skript kommen."
      },
      highlights: {
        decisionCycle: { label: "Entscheidungszyklus", desc: "Von der Signalerkennung zur Umsetzung in Minuten, nicht Tagen." },
        growthSignal: { label: "Wachstumssignal", desc: "Priorisiere Chancen nach Dynamik und Nischen-Fit." },
        executionQuality: { label: "Ausführungsqualität", desc: "Jede Empfehlung enthält nachvollziehbare Gründe." }
      },
      labels: {
        capability: "Fähigkeit",
        outcome: "Ergebnis",
        learnMore: "Mehr erfahren"
      },
      opportunities: {
        step: "Schritt 01",
        title: "Trends vor dem Höhepunkt erkennen",
        desc: "Hör auf, viralen Hits von gestern hinterherzujagen. Unsere KI analysiert Millionen von Signalen, um Themen mit hohem Potenzial für deine Nische zu finden.",
        statA: "24/7 Signal-Scan",
        statB: "Chancen-orientiertes Ranking",
        bullets: ["Finde steigende Themen vor der Sättigung.", "Priorisiere Themen mit bewiesenem Nischen-Fit."],
        mock: {
          eyebrow: "Trend-Radar",
          title: "Chance mit hohem Fit erkannt",
          score: "Score 94",
          metrics: [
            { label: "Dynamik", value: "+128%" },
            { label: "Wettbewerb", value: "Niedrig" },
            { label: "View-Pool", value: "45M" }
          ],
          bullets: [
            "Hohe Überschneidung mit deinem Top-Audience-Segment.",
            "Das empfohlene Posting-Fenster öffnet sich in den nächsten 6 Stunden."
          ]
        }
      },
      planning: {
        step: "Schritt 02",
        title: "Ausführung, nicht nur Planung",
        desc: "Mach aus Strategie Umsetzung. Erhalte einen wöchentlichen Produktionsplan, der Wachstumsrisiken und stabilen Trust-Content ausbalanciert.",
        statA: "Wochenrhythmus-Plan",
        statB: "Ausgewogener Content-Mix",
        bullets: ["Mach aus Empfehlungen einen konkreten Drehkalender.", "Bleib konsistent, ohne kreative Energie zu verbrennen."],
        mock: {
          eyebrow: "Umsetzungsplan",
          title: "Produktionsrhythmus dieser Woche",
          postCount: "3 Posts",
          schedule: [
            { day: "Mo", date: "24", task: "Trend-basierter Opener", tag: "Wachstum" },
            { day: "Mi", date: "26", task: "Story zum Vertrauensaufbau", tag: "Community" },
            { day: "Fr", date: "28", task: "Conversion-CTA-Video", tag: "Umsatz" }
          ]
        }
      },
      analytics: {
        step: "Schritt 03",
        title: "Entschlüssele deine Content-DNA",
        desc: "Verstehe genau, warum deine besten Videos funktionieren. Wir zerlegen deinen Content in Strukturelemente, um Erfolg zu replizieren.",
        statA: "Diagnose auf Frame-Ebene",
        statB: "Wiederholbare Erfolgs-Muster",
        bullets: ["Erkenne, was Retention und Completion antreibt.", "Iteriere schneller mit datenbasierten Änderungen."],
        mock: {
          eyebrow: "Performance-DNA",
          title: "Repliziere, was bereits funktioniert",
          pill: "Top 5%",
          metrics: [
            { label: "Hook-Stärke", value: "9.8/10", width: "w-[95%]" },
            { label: "Zuschauerbindung", value: "72%", width: "w-[72%]" },
            { label: "CTA-Abschluss", value: "38%", width: "w-[38%]" }
          ]
        }
      }
    },
    coreFeatures: {
      badge: "Kraftpaket",
      title: "Alles was du brauchst um zu",
      titleHighlight: "dominieren",
      subtitle: "Ein einheitliches Betriebssystem für moderne Creator.",
      metrics: [
        { label: "Posting-Geschwindigkeit", value: "3× schneller" },
        { label: "Planungssicherheit", value: "Signal-basiert" },
        { label: "Umsetzungskonstanz", value: "Wöchentlicher Rhythmus" }
      ],
      copilot: {
        title: "KI-Strategie-Copilot",
        desc: "Dein kreativer Partner rund um die Uhr. Generiere Skripte mit hoher Konversion.",
        badge: "Echtzeit-Generierung",
        chat: {
          user: "Gib mir einen stärkeren Hook für mein nächstes Nischen-Video.",
          assistantLabel: "Vorgeschlagener Hook",
          assistant: "Hör auf, generische Intros zu kopieren. Hier ist der 3-Sekunden-Opener, der deine Zuschauer hält."
        }
      },
      trend: {
        title: "Trend-Intelligenz",
        desc: "Erkenne Chancen, bevor sie ihren Höhepunkt erreichen.",
        liveSignals: "Live-Signale",
        list: { viewsLabel: "Aufrufe" }
      },
      goals: {
        title: "Smarte Ziele",
        desc: "Verwandle vage Ambitionen in umsetzbare tägliche Aufgaben.",
        ringLabel: "Ziel",
        tasks: [
          { task: "Variation des Opening-Hooks aufnehmen", done: true },
          { task: "Trend-Shortlist prüfen", done: false },
          { task: "High-Intent-Post planen", done: false }
        ]
      },
      analytics: { title: "Tiefenanalyse", badge: "+124% ggü. Vorjahr" },
      features: { scheduling: "Smarte Planung", prediction: "Virale Vorhersage", multiAccount: "Multi-Account", reports: "Sofortberichte" }
    },
    valueProposition: {
      badge: "Strategische Klarheit",
      title: "Hör auf zu raten, was du posten sollst",
      subtitle: "OwlSeer sagt dir, was du als Nächstes auf TikTok tun solltest.",
      cards: [
        { title: "Umsetzbare Pläne", desc: "Erhalte in unter 3 Minuten einen vollständigen Content-Plan." },
        { title: "KI-Skripte", desc: "KI-generierte Skripte, die du heute drehen kannst." },
        { title: "Datengetrieben", desc: "Für Creator, die genug von Zufallsposts haben." }
      ],
      trust: ["Keine Wunder-Versprechen", "Kein Auto-Posting", "Kein Passwort erforderlich"],
      metrics: [
        { label: "Plan-Erstellung", value: "< 3 Min." },
        { label: "Analysierte Signale", value: "30+" },
        { label: "Veröffentlichungsrhythmus", value: "Wöchentlich" }
      ],
      cta: {
        primary: "In Aktion sehen",
        secondary: "So funktioniert's"
      }
    },
    pricingSection: {
      title: "Einfache, transparente Preise",
      subtitle: "Starte deine 7-tägige kostenlose Testversion. Jederzeit kündbar.",
      labels: { mostPopular: "Am beliebtesten" },
      monthly: "Monatlich",
      yearly: "Jährlich",
      save: "20% SPAREN",
      period: "Monat",
      plans: {
        creator: {
          name: "Basic",
          summary: "Solo-Plan für einen schnellen Start in den Content-Flywheel.",
          features: [
            "1 Konto / 1 Sitz",
            "30 kostenlose Videoanalysen pro Monat",
            "600 monatliche Credits",
            "End-to-End KI-Workflow von Diagnose bis Skript",
            "Basis-AI-Copilot"
          ]
        },
        growth: {
          name: "Growth",
          summary: "Team-Plan für skalierbare Produktion und Zusammenarbeit.",
          features: [
            "3 Konten / 4 Sitze",
            "120 kostenlose Videoanalysen pro Monat",
            "1.200 monatliche Credits",
            "Vollständiger Planungs- und Skript-Workflow",
            "Batch-Verarbeitung von Aufgaben",
            "Basis-Reportexport"
          ]
        },
        scale: {
          name: "Pro",
          summary: "Plan für Agenturen und Multi-Account-Teams mit Höchstleistung.",
          features: [
            "8 Konten / 10 Sitze",
            "400 kostenlose Videoanalysen pro Monat",
            "4.000 monatliche Credits",
            "Priorisierte Compute-Warteschlange",
            "AI-Copilot mit erweitertem Kontextfenster"
          ]
        }
      },
      cta: { trial: "Kostenlos testen", buy: "Jetzt kaufen" },
      footer: { secure: "Sichere Zahlung", trial: "7 Tage kostenlos", cancel: "Jederzeit kündbar" }
    },
    finalCta: {
      title: "Bereit, deine Zukunft zu sehen?",
      subtitle: "Schließe dich Tausenden von Creatorn an, die aufgehört haben zu raten und angefangen haben zu wachsen.",
      start: "Kostenlos starten",
      demo: "Live-Sample ansehen"
    },
    footer: {
      tagline: "KI-gestützte TikTok-Strategie für Creator.\nHör auf zu raten. Fang an zu wachsen.",
      product: "Produkt",
      solutions: "Lösungen",
      useCases: "Anwendungsfälle",
      resources: "Ressourcen",
      legal: "Rechtliches",
      rights: "© 2026 OwlSeer. Alle Rechte vorbehalten.",
      mobileProductAndSolutions: "Produkt & Lösungen",
      links: {
        howItWorks: "So funktioniert’s",
        methodology: "Methodik",
        signals: "30+ Signale",
        pricing: "Preise",
        trySample: "Sample testen",
        blog: "Blog",
        guides: "Guides",
        glossary: "Glossar",
        faq: "FAQ",
        contentCreators: "Content Creator",
        localBusiness: "Lokales Unternehmen",
        agencies: "Agenturen",
        brands: "Marken",
        ecommerceSellers: "E-Commerce-Verkäufer",
        trendPrediction: "Trendprognose",
        contentDiagnosis: "Content-Diagnose",
        scriptGeneration: "Skriptgenerierung",
        postingSchedule: "Posting-Zeitplan",
        hashtagStrategy: "Hashtag-Strategie",
        privacy: "Datenschutzerklärung",
        terms: "Nutzungsbedingungen",
        security: "Sicherheit",
        cookies: "Cookie-Richtlinie"
      },
      meta: {
        developers: "Entwickler",
        sitemap: "Sitemap"
      }
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
          linkUrl: "/social/dashboard#aer-card",
          actionLine: "See engagement signals on real account data — [explore the Dashboard demo](/social/dashboard#aer-card).",
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
          linkUrl: "/social/simulation/trends",
          actionLine: "See trend signals on live data — [explore the Trend Radar demo](/social/simulation/trends).",
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
          linkUrl: "/social/intelligence",
          actionLine: "See audience insights on real data — [explore the Intelligence Hub demo](/social/intelligence).",
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
      },
      compareVidIQ: {
        hero: {
          title: "OwlSeer vs VidIQ: Welches TikTok-Tool passt zu deinem Workflow?",
          lead: "VidIQ stammt aus dem YouTube-Umfeld und wurde auf TikTok erweitert. OwlSeer wurde von Anfang an für TikTok entwickelt. Dieser Vergleich zeigt Funktionen, Stärken und passende Einsatzfälle."
        },
        tldr: "Wenn TikTok dein Hauptkanal ist, nimm OwlSeer für tiefes Signal-Scoring, Trendprognosen und datenbasierte Skripte. Wenn YouTube im Fokus steht und TikTok nur ergänzend läuft, passt eher VidIQ.",
        table: {
          title: "Funktionsvergleich im Detail",
          rows: [
            { feature: "Hauptplattform", owlseer: "TikTok (exklusiv)", vidiq: "YouTube (primär), TikTok (sekundär)" },
            { feature: "TikTok-Signaltiefe", owlseer: "30+ gewichtete Signale", vidiq: "Basis-TikTok-Metriken" },
            { feature: "Trendprognose", owlseer: "KI + Geschwindigkeitsanalyse", vidiq: "Liste trendender Themen" },
            { feature: "Skriptgenerierung", owlseer: "Datengetriebenes Hook-Body-CTA", vidiq: "Keine native Skriptgenerierung" },
            { feature: "Posting-Zeitplan", owlseer: "Personalisierte Heatmap", vidiq: "Generische Zeitvorschläge" },
            { feature: "Content-Diagnose", owlseer: "Problemerkennung + Fixes", vidiq: "Performance-Überblick" },
            { feature: "KI-Copilot", owlseer: "Konversationeller Assistent", vidiq: "Keine konversationelle KI" },
            { feature: "Wochenreport", owlseer: "Automatisch mit KPI-Tracking", vidiq: "Kein automatischer Wochenreport" },
            { feature: "Brand Safety", owlseer: "0-100 Risikoskala", vidiq: "Kein Brand-Safety-Scoring" }
          ]
        },
        chooseOwlSeer: {
          title: "Wähle OwlSeer, wenn...",
          items: [
            "TikTok dein primärer oder einziger Wachstumskanal ist",
            "du mehr als Basis-Metriken und 30+ Signale brauchst",
            "du KI-Skripte für deine Zielgruppe möchtest",
            "Trend-Timing und Trendgeschwindigkeit strategisch wichtig sind",
            "du automatische Wochenreports mit KPI-Tracking willst",
            "du einen konversationellen KI-Copilot bevorzugst"
          ]
        },
        chooseVidIQ: {
          title: "Wähle VidIQ, wenn...",
          items: [
            "YouTube deine Hauptplattform ist",
            "du YouTube-spezifische Funktionen (SEO, Keywords) brauchst",
            "TikTok nur ein Nebenkanal ist und Basis-Metriken reichen",
            "du VidIQ bereits für YouTube im Einsatz hast"
          ]
        },
        platformFocus: {
          title: "Warum Plattformfokus entscheidend ist",
          p1: "YouTube und TikTok belohnen unterschiedliches Verhalten. YouTube ist suchgetrieben – Titel, Beschreibung und Thumbnail steuern die Auffindbarkeit. TikTok ist algorithmusgetrieben – Hook-Rate, Retention und Trend-Fit steuern die Distribution.",
          p2: "Ein YouTube-zentriertes Tool optimiert Suchintention. Ein TikTok-zentriertes Tool optimiert Signalmuster. Ein YouTube-first-Tool für TikTok-Strategie ist wie eine Straßenkarte für die Seefahrt.",
          highlight: "OwlSeer trackt TikTok-spezifische Kennzahlen (AER, Hook-Rate, Save-Rate), die YouTube-first-Tools nicht modellieren."
        },
        boundary: {
          transparency: "Der Vergleich basiert auf öffentlich verfügbaren Produktinformationen (Stand: Februar 2026).",
          note: "Dieser Vergleich ist kein bezahltes Review. Er soll Creator:innen bei einer fundierten Entscheidung unterstützen."
        },
        cta: {
          title: "Bereit für eine TikTok-native Strategie?",
          subtitle: "Teste OwlSeer zuerst mit Beispieldaten oder starte direkt deinen kostenlosen Test.",
          primary: "Kostenlos testen",
          secondary: "Sample ansehen"
        },
        ui: {
          loading: "Inhalte werden geladen...",
          badge: "Direktvergleich",
          coreInsight: "Kern-Insight",
          tableHeaders: {
            feature: "Funktion",
            owlseer: "OwlSeer",
            competitor: "VidIQ"
          },
          missingBlockTitle: "Erlebe, was VidIQ nicht liefert",
          actionButtons: {
            trendRadar: "Trend Radar",
            scriptStudio: "Script Studio",
            weeklyReport: "Wochenreport"
          },
          platformFocusLabel: "Plattformfokus",
          transparencyNote: "Transparenzhinweis"
        }
      }
    }
  }
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  CreditCard, 
  Shield, 
  Zap, 
  MessageCircle,
  ArrowRight,
  Layout,
  FileText,
  Activity,
  AlertCircle
} from 'lucide-react';
import { Navbar, Footer } from './LandingPage';
import { translations } from '../data/translations';

// --- Types ---

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// --- Mock Data (Plan B - Recommended) ---

const FAQS: FAQItem[] = [
  // Sample Experience
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

  // Output Format
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

  // Methodology
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

  // Boundaries
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

  // Privacy & Security
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

  // Pricing & Billing
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
];

const CATEGORIES = [
  { id: 'Sample', icon: Layout, label: 'Sample' },
  { id: 'Outputs', icon: FileText, label: 'Outputs' },
  { id: 'Methodology', icon: Activity, label: 'Methodology' },
  { id: 'Boundaries', icon: AlertCircle, label: 'Limits' },
  { id: 'Privacy', icon: Shield, label: 'Privacy' },
  { id: 'Billing', icon: CreditCard, label: 'Billing' }
];

// --- Components ---

const RichTextRenderer = ({ content, onNavigate }: { content: string, onNavigate: (page: string) => void }) => {
  const parts = content.split('\n');
  
  return (
    <div className="space-y-3">
      {parts.map((part, index) => {
        if (!part.trim()) return <div key={index} className="h-1"></div>;
        
        // Handle list items
        if (part.trim().startsWith('- ')) {
          return (
            <div key={index} className="flex gap-2 ml-4">
              <span className="text-[#1AAE82] font-bold mt-1.5">•</span>
              <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {parseBoldText(part.replace('- ', ''))}
              </span>
            </div>
          );
        }

        // Handle verification steps (highlighted)
        if (part.trim().startsWith('Verify:')) {
          // Extract text after "Verify: "
          const verifyContent = part.replace('Verify:', '').trim();
          
          return (
            <div key={index} className="mt-4 p-3 bg-[#1AAE82]/5 border border-[#1AAE82]/10 rounded-lg flex gap-2 items-start">
              <div className="mt-0.5 text-blue-600">
                <span className="text-lg">🔗</span>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Verify: {parseLinks(verifyContent, onNavigate)}
              </span>
            </div>
          );
        }

        return (
          <p key={index} className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {parseBoldText(part)}
          </p>
        );
      })}
    </div>
  );
};

const parseLinks = (text: string, onNavigate: (page: string) => void) => {
  // Regex to match [text](link)
  const regex = /\[(.*?)\]\((.*?)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    // Add the link component
    const linkText = match[1];
    const linkUrl = match[2];
    
    parts.push(
      <a 
        key={match.index}
        href={linkUrl}
        title={linkUrl}
        onClick={(e) => {
          e.preventDefault();
          // Remove leading slash for navigation if needed, or handle absolute paths
          const path = linkUrl.startsWith('/') ? linkUrl.substring(1) : linkUrl;
          onNavigate(path);
        }}
        className="text-blue-600 hover:text-blue-800 underline font-medium mx-1 focus:outline-none cursor-pointer"
      >
        {linkText}
      </a>
    );
    
    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <>{parts}</>;
};

const parseBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-gray-900 dark:text-white font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const AccordionItem = ({ item, isOpen, onClick, onNavigate }: { item: FAQItem; isOpen: boolean; onClick: () => void, onNavigate: (page: string) => void }) => {
  return (
    <motion.div 
      initial={false}
      className={`border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 transition-all duration-300 ${isOpen ? 'shadow-lg ring-1 ring-[#1AAE82]/20' : 'hover:border-gray-300 dark:hover:border-slate-700'}`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className={`font-bold text-lg pr-4 ${isOpen ? 'text-[#1AAE82]' : 'text-gray-900 dark:text-white'}`}>
          {item.question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-1 rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#1AAE82]/10 text-[#1AAE82]' : 'text-gray-400 bg-gray-100 dark:bg-slate-800'}`}>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0">
              <RichTextRenderer content={item.answer} onNavigate={onNavigate} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ContactCTA = () => (
  <div className="mt-20 bg-[#111827] rounded-3xl p-10 md:p-12 text-center relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/10 rounded-full blur-[80px]" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
    
    <div className="relative z-10 max-w-2xl mx-auto">
      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
        <MessageCircle className="w-8 h-8" />
      </div>
      <h3 className="text-3xl font-bold text-white font-display mb-4">Still have questions?</h3>
      <p className="text-gray-400 mb-8 text-lg">
        Can't find the answer you're looking for? Our friendly team is here to help.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-3.5 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#1AAE82]/20">
          Chat with Support
        </button>
        <button className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300">
          Email Us
        </button>
      </div>
    </div>
  </div>
);

// --- Main Page ---

export function FAQPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const [activeCategory, setActiveCategory] = useState('Sample');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<string[]>(['q1']); 
  
  const [language, setLanguage] = useState('en');
  const t = translations.en;

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = FAQS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayFAQs = searchQuery ? FAQS.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) : filteredFAQs;

  // SEO: Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans selection:bg-[#1AAE82]/30">
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <style>{`
        .font-display { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

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

      <main className="pt-[72px]">
        {/* Header Section */}
        <section className="bg-white dark:bg-slate-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1AAE82]/10 text-[#1AAE82] text-xs font-bold uppercase tracking-wider mb-6"
            >
              <HelpCircle className="w-3 h-3" /> Support Center
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6"
            >
              How can we <span className="text-[#1AAE82]">help you?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              Search our knowledge base or browse frequently asked questions below.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-xl mx-auto"
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-4 bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#1AAE82] focus:bg-white dark:focus:bg-slate-900 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none transition-all shadow-sm"
                placeholder="Search for answers (e.g. 'pricing', 'api', 'security')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
          
          {/* Category Tabs */}
          {!searchQuery && (
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#1AAE82] text-white shadow-lg shadow-[#1AAE82]/20' 
                        : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* FAQ List */}
          <div className="space-y-4">
            {displayFAQs.length > 0 ? (
              displayFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem 
                    item={faq} 
                    isOpen={openItems.includes(faq.id)} 
                    onClick={() => toggleItem(faq.id)} 
                    onNavigate={handleNavigate}
                  />
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-slate-800 mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No results found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search terms.</p>
              </div>
            )}
          </div>

          <ContactCTA />
        </section>
      </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

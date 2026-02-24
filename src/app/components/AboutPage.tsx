import React from 'react';
import { useLanguage } from '../contexts';
import { MarketingPageLayout } from './MarketingPageLayout';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

type Locale = 'en' | 'zh';
type ProductStatus = 'live' | 'coming' | 'roadmap';

interface AboutCopy {
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    label: string;
    title: string;
    superline?: string;
    slogan: string;
  };
  whoWeAre: {
    label: string;
    heading: string;
    paragraphs: string[];
    closing: string;
  };
  products: {
    label: string;
    heading: string;
    intro: string;
    items: Array<{
      name: string;
      pitch: string;
      description: string;
      status: string;
      statusType: ProductStatus;
    }>;
  };
  audience: {
    label: string;
    heading: string;
    intro: string;
    items: Array<{
      identity: string;
      reason: string;
    }>;
  };
  technology: {
    label: string;
    heading: string;
    intro: string[];
    tableHead: {
      index: string;
      agent: string;
      does: string;
      gets: string;
    };
    agents: Array<{
      name: string;
      does: string;
      gets: string;
    }>;
    closing: string;
  };
  journey: {
    label: string;
    heading: string;
    items: Array<{
      phase: string;
      title: string;
      description: string;
      isCurrent?: boolean;
    }>;
  };
  contact: {
    label: string;
    heading: string;
    intro: string;
    fields: Array<{
      label: string;
      value: string;
      href?: string;
    }>;
    ctaText: string;
    ctaHref: string;
  };
}

const ABOUT_COPY: Record<Locale, AboutCopy> = {
  en: {
    seo: {
      title: 'About Owlseer | AI Growth Intelligence Platform',
      description: 'Learn how Owlseer helps creators, brands, and teams see their next growth move in 3 minutes.',
      keywords: ['about owlseer', 'ai growth intelligence platform', 'tiktok growth tool', 'content strategy ai'],
    },
    hero: {
      label: 'About Owlseer',
      title: 'In a world drowning in data, we deliver clarity.',
      slogan: "SEE WHAT'S NEXT.",
    },
    whoWeAre: {
      label: 'WHO WE ARE',
      heading: 'Owlseer is the AI Growth Intelligence Platform.',
      paragraphs: [
        'Every day, creators, brands, and businesses face the same question: what should I do next?',
        'Existing tools give data, but data is not direction. Generic AI gives advice, but advice without your context is noise.',
        "We built Owlseer to bridge this gap. Five specialized AI Agents diagnose your account, decode your content DNA, and deliver your next move in three minutes.",
      ],
      closing: `From "I don't know what to do next" to "I know exactly what to do" — that's the Owlseer experience.`,
    },
    products: {
      label: 'WHAT WE BUILD',
      heading: 'Four product lines, one mission: see growth direction clearly.',
      intro: 'Each product solves one specific direction problem for a specific growth scenario.',
      items: [
        {
          name: 'Owlseer Social',
          pitch: 'AI diagnosis + trend prediction + script generation for creators',
          description:
            'From “I do not know what to post” to a clear content plan, powered by account diagnosis, trend prediction, and script generation.',
          status: 'LIVE',
          statusType: 'live',
        },
        {
          name: 'Owlseer Commerce',
          pitch: 'AI product selection + trend prediction for e-commerce sellers',
          description: 'Lock in potential winners before the trend peaks with AI-driven product opportunity detection.',
          status: 'Coming 2026',
          statusType: 'coming',
        },
        {
          name: 'Owlseer Ads',
          pitch: 'AI ad strategy + creative optimization for brands',
          description: 'Reduce guesswork in creative decisions with strategy optimization, creative forecasting, and attribution insights.',
          status: 'Coming 2026',
          statusType: 'coming',
        },
        {
          name: 'Owlseer Studio',
          pitch: 'Full-stack AI growth command center for enterprises',
          description: 'One command platform for multi-account, multi-platform, and multi-team growth operations.',
          status: 'Roadmap',
          statusType: 'roadmap',
        },
      ],
    },
    audience: {
      label: 'WHO WE SERVE',
      heading: 'Five growth identities, five different pressure points.',
      intro: 'Each deserves personalized intelligence and a clear next step.',
      items: [
        { identity: 'Brands', reason: 'See the true ROI of your content strategy.' },
        { identity: 'Creators', reason: 'Know exactly what to create next.' },
        { identity: 'Agencies / MCN', reason: 'Scale insights across many accounts and teams.' },
        { identity: 'E-commerce Sellers', reason: 'Connect content performance to conversion outcomes.' },
        { identity: 'Local Business', reason: 'Turn local reach from luck into strategy.' },
      ],
    },
    technology: {
      label: 'OUR TECHNOLOGY',
      heading: 'Powered by a proprietary growth knowledge graph.',
      intro: [
        '800,000+ data points across TikTok, YouTube, and Instagram, spanning 200+ content categories.',
        'Five AI Agents run as your foresight team and move from diagnosis to action in minutes.',
      ],
      tableHead: {
        index: '#',
        agent: 'Agent',
        does: 'What it does',
        gets: 'What you get',
      },
      agents: [
        {
          name: 'Content DNA Agent',
          does: 'Analyzes your account and content structure to identify your unique winning patterns.',
          gets: 'A content DNA report with keep/improve priorities.',
        },
        {
          name: 'Trend Radar Agent',
          does: 'Scans platform-wide signals to detect emerging opportunities before they peak.',
          gets: 'A trend watchlist for early positioning.',
        },
        {
          name: 'Audience Insight Agent',
          does: 'Interprets audience behavior and feedback signals beyond surface metrics.',
          gets: 'An audience demand map grounded in real account data.',
        },
        {
          name: 'Growth Forecast Agent',
          does: 'Projects your next growth trajectory based on historical + real-time account context.',
          gets: 'A timing-aware growth path with high-probability next moves.',
        },
        {
          name: 'Action Script Agent',
          does: 'Turns upstream insights into executable content plans and scripts.',
          gets: 'A ready-to-run action script with topic, title, structure, and timing.',
        },
      ],
      closing: 'From diagnosis to action — in 3 minutes.',
    },
    journey: {
      label: 'OUR JOURNEY',
      heading: 'From TikTok intelligence to full social ecosystem foresight.',
      items: [
        {
          phase: 'Phase 1 · NOW',
          title: 'TikTok Intelligence',
          description: 'Live today for creators, brands, and e-commerce operators.',
          isCurrent: true,
        },
        {
          phase: 'Phase 2 · 2026',
          title: 'Multi-Platform Expansion',
          description: 'YouTube + Instagram, with one AI system across channels.',
        },
        {
          phase: 'Phase 3 · FUTURE',
          title: 'Full Social Ecosystem Intelligence',
          description: 'One platform to understand, predict, and direct growth everywhere.',
        },
      ],
    },
    contact: {
      label: 'GET IN TOUCH',
      heading: 'Start a conversation with our team.',
      intro: "Whether you're a creator, brand, agency, or e-commerce operator, we'd love to hear from you.",
      fields: [
        { label: 'Company', value: 'Chiguang Zhisuan Technology (Shenzhen) Co., Ltd.' },
        { label: 'Office', value: '[Shenzhen Office Address Placeholder - Replace after registration]' },
        { label: 'Phone', value: '[Phone Number Placeholder - Replace after confirmation]' },
        { label: 'Email', value: 'hello@owlseer.com', href: 'mailto:hello@owlseer.com' },
        { label: 'Social', value: '@owlseer' },
      ],
      ctaText: 'Try Owlseer in 3 minutes',
      ctaHref: 'https://app.owlseer.com/',
    },
  },
  zh: {
    seo: {
      title: '关于 Owlseer | 赤光智算 AI 增长洞见平台',
      description: '了解赤光智算如何通过 Owlseer 帮助创作者、品牌与团队在三分钟内看清增长方向。',
      keywords: ['关于 owlseer', 'ai增长洞见平台', '短视频增长', '账号诊断', '趋势预测', 'ai脚本生成'],
    },
    hero: {
      label: '关于 Owlseer · 赤光智算',
      title: '数据从不稀缺。稀缺的是方向。',
      superline: '三分钟，看清增长方向。',
      slogan: '洞见下一步。',
    },
    whoWeAre: {
      label: '我们是谁',
      heading: 'Owlseer 是 AI 增长洞见平台。赤光智算科技（深圳）有限公司出品。',
      paragraphs: [
        '我们只做一件事：让每一个做内容的人，三分钟看清增长方向。',
        '这个时代不缺数据，也不缺通用 AI，但你真正缺少的是基于真实账号场景的下一步行动答案。',
        '五个专精 AI Agent 会完成账号诊断、趋势预测、受众洞察、增长推演和脚本生成，最终交付可直接执行的策略。',
      ],
      closing: '三分钟。从不知道做什么，到精确知道怎么做。赤光所照，方向自明。',
    },
    products: {
      label: '我们在造什么',
      heading: '围绕“看清增长方向”，赤光智算构建四条产品线。',
      intro: '每一条产品线，都在解决一个行业场景里的方向焦虑。',
      items: [
        {
          name: 'Owlseer Social · 社媒增长引擎',
          pitch: '做短视频不知道拍什么？三分钟给你答案。',
          description: 'AI 账号诊断 + 趋势预测 + AI 脚本生成，一套工具打通短视频增长全链路。',
          status: '已上线',
          statusType: 'live',
        },
        {
          name: 'Owlseer Commerce · 电商选品雷达',
          pitch: '别人追爆款，你提前三个月锁定爆款。',
          description: 'AI 电商选品 + 商品趋势预测，在大众看到趋势前完成选品和卡位。',
          status: '2026年推出',
          statusType: 'coming',
        },
        {
          name: 'Owlseer Ads · 广告投放引擎',
          pitch: '不再猜哪条素材能跑量，AI 直接告诉你。',
          description: 'AI 广告策略优化 + 创意效果预判 + 投放归因分析，让预算花在确定性上。',
          status: '2026年推出',
          statusType: 'coming',
        },
        {
          name: 'Owlseer Studio · 企业增长指挥台',
          pitch: '一块屏幕，看清全局增长方向。',
          description: '面向企业客户的一体化增长中枢，统一调度多账号、多平台、多团队数据。',
          status: '规划中',
          statusType: 'roadmap',
        },
      ],
    },
    audience: {
      label: '谁最需要 Owlseer？',
      heading: '五种身份，五种增长焦虑。',
      intro: '每一种“下一步怎么做”的不确定，都应该有一个确定答案。',
      items: [
        { identity: '品牌方', reason: '投了内容预算但算不清 ROI？用 Owlseer 看清每一分钱的真实回报。' },
        { identity: '创作者', reason: '不知道下一条拍什么？打开 Owlseer，三分钟就知道。' },
        { identity: '代理商 / MCN', reason: '多账号运营压力大？用一套系统统一管理与决策。' },
        { identity: '电商卖家', reason: '选品不再靠猜，用 AI 提前锁定下一个爆款方向。' },
        { identity: '本地商家', reason: '把“运气式曝光”升级为“策略式触达”。' },
      ],
    },
    technology: {
      label: '凭什么是三分钟？',
      heading: '因为赤光智算自研了一套 AI 增长知识图谱。',
      intro: [
        '80 万+数据节点，覆盖 TikTok、YouTube、Instagram，横跨 200+ 内容垂类，实时追踪变化。',
        '五个 AI Agent 分工协作，把复杂数据转化为清晰行动。',
      ],
      tableHead: {
        index: '#',
        agent: 'Agent',
        does: '它做什么',
        gets: '你得到什么',
      },
      agents: [
        {
          name: '内容基因 Agent',
          does: 'AI 账号诊断，拆解你的内容结构并定位有效因子。',
          gets: '一份内容基因报告，明确哪些元素该保留、哪些需要优化。',
        },
        {
          name: '趋势雷达 Agent',
          does: 'AI 趋势预测，扫描全网信号并识别未被充分利用的窗口。',
          gets: '一份趋势预判清单，帮助你更早完成卡位。',
        },
        {
          name: '受众洞察 Agent',
          does: 'AI 受众分析，穿透表层数据看清用户真实需求。',
          gets: '一份受众需求地图，指导内容方向和表达方式。',
        },
        {
          name: '增长推演 Agent',
          does: 'AI 增长预测，基于真实账号数据推演增长路径。',
          gets: '一份增长路径图，明确时间点与优先动作。',
        },
        {
          name: '行动脚本 Agent',
          does: 'AI 脚本生成，把前序洞察转成可执行内容方案。',
          gets: '一份完整行动脚本，包含选题、标题、结构与发布时间。',
        },
      ],
      closing: '五个 Agent 跑完全流程：三分钟。',
    },
    journey: {
      label: '赤光智算的征程',
      heading: '从 TikTok 增长智能出发，走向全社媒生态洞见。',
      items: [
        {
          phase: '第一程 · 此刻',
          title: 'TikTok 智能增长引擎',
          description: '已全面上线，全球创作者、品牌与电商卖家正在使用。',
          isCurrent: true,
        },
        {
          phase: '第二程 · 2026',
          title: '多平台扩展',
          description: '拓展至 YouTube 与 Instagram，同一个 AI，多平台联动增长。',
        },
        {
          phase: '第三程 · 远景',
          title: '全社媒生态增长覆盖',
          description: '一个平台，洞见一切。',
        },
      ],
    },
    contact: {
      label: '与赤光智算对话',
      heading: '欢迎和我们聊聊你的增长问题。',
      intro:
        '无论你是短视频创作者、品牌增长负责人、MCN 运营总监，还是正在寻找 AI 增长工具的电商卖家，我们都期待与你交流。',
      fields: [
        { label: '公司全称', value: '赤光智算科技（深圳）有限公司' },
        { label: '办公地址', value: '[深圳市办公地址占位符 — 待正式注册后替换]' },
        { label: '联系电话', value: '[联系电话占位符 — 待正式号码确认后替换]' },
        { label: '商务邮箱', value: 'hello@owlseer.com', href: 'mailto:hello@owlseer.com' },
        { label: '社交媒体', value: '全平台搜索 @owlseer' },
      ],
      ctaText: '三分钟免费体验 Owlseer',
      ctaHref: 'https://app.owlseer.com/',
    },
  },
} as const;

const STATUS_CLASS: Record<ProductStatus, string> = {
  live: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
  coming: 'bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-gray-300',
  roadmap: 'bg-gray-50 text-gray-500 dark:bg-slate-800/70 dark:text-gray-400',
};

export function AboutPage({ onNavigate, isDarkMode, setIsDarkMode }: AboutPageProps) {
  const { language } = useLanguage();
  const locale: Locale = language === 'zh' ? 'zh' : 'en';
  const content = ABOUT_COPY[locale];

  return (
    <MarketingPageLayout
      canonicalPath="/about"
      title={content.seo.title}
      description={content.seo.description}
      keywords={content.seo.keywords}
      onNavigate={onNavigate}
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
    >
      <section className="border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1AAE82]">{content.hero.label}</p>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white max-w-4xl mx-auto leading-tight">
            {content.hero.title}
          </h1>
          {content.hero.superline && (
            <p className="mt-6 text-lg md:text-xl font-semibold text-[#1AAE82]">{content.hero.superline}</p>
          )}
          <p className="mt-4 text-sm md:text-base tracking-[0.12em] uppercase text-[#1AAE82]">{content.hero.slogan}</p>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#1AAE82]">{content.whoWeAre.label}</p>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{content.whoWeAre.heading}</h2>
          <div className="mt-6 space-y-4 max-w-4xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {content.whoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 text-base md:text-lg font-semibold text-gray-900 dark:text-white">{content.whoWeAre.closing}</p>
        </div>
      </section>

      <section className="py-14 md:py-16 border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#1AAE82]">{content.products.label}</p>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{content.products.heading}</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl">{content.products.intro}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
            {content.products.items.map((item) => (
              <article
                key={item.name}
                className="rounded-xl border border-gray-200 dark:border-slate-800 bg-[#F8FAFC] dark:bg-[#0b1220] p-5 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-gray-100">{item.pitch}</p>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 flex-1">{item.description}</p>
                <span className={`mt-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${STATUS_CLASS[item.statusType]}`}>
                  {item.status}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#1AAE82]">{content.audience.label}</p>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{content.audience.heading}</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl">{content.audience.intro}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
            {content.audience.items.map((item) => (
              <article key={item.identity} className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{item.identity}</h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{item.reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#1AAE82]">{content.technology.label}</p>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{content.technology.heading}</h2>
          <div className="mt-4 space-y-3 text-gray-600 dark:text-gray-300 max-w-4xl">
            {content.technology.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto hidden md:block">
            <table className="min-w-full text-left border border-gray-200 dark:border-slate-800 rounded-lg overflow-hidden">
              <thead className="bg-gray-50 dark:bg-slate-800/80">
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-300">{content.technology.tableHead.index}</th>
                  <th className="px-4 py-3 text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-300">{content.technology.tableHead.agent}</th>
                  <th className="px-4 py-3 text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-300">{content.technology.tableHead.does}</th>
                  <th className="px-4 py-3 text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-300">{content.technology.tableHead.gets}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                {content.technology.agents.map((agent, index) => (
                  <tr key={agent.name}>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200">{index + 1}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-gray-900 dark:text-white">{agent.name}</td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">{agent.does}</td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">{agent.gets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 md:hidden space-y-3">
            {content.technology.agents.map((agent, index) => (
              <article key={agent.name} className="rounded-xl border border-gray-200 dark:border-slate-800 bg-[#F8FAFC] dark:bg-[#0b1220] p-4">
                <p className="text-xs font-semibold tracking-wide uppercase text-[#1AAE82]">{index + 1}</p>
                <h3 className="mt-1 text-base font-semibold text-gray-900 dark:text-white">{agent.name}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{agent.does}</p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-200 font-medium">{agent.gets}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-base font-semibold text-gray-900 dark:text-white">{content.technology.closing}</p>
        </div>
      </section>

      <section className="py-14 md:py-16 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#1AAE82]">{content.journey.label}</p>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{content.journey.heading}</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {content.journey.items.map((item) => (
              <article
                key={item.phase}
                className={`rounded-xl border p-5 ${
                  item.isCurrent
                    ? 'border-[#1AAE82] bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10'
                    : 'border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                }`}
              >
                <p className="text-xs font-semibold tracking-wide uppercase text-[#1AAE82]">{item.phase}</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 border-y border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#1AAE82]">{content.contact.label}</p>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{content.contact.heading}</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-4xl">{content.contact.intro}</p>
          <dl className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.contact.fields.map((field) => (
              <div key={field.label} className="rounded-lg border border-gray-200 dark:border-slate-800 p-4 bg-[#F8FAFC] dark:bg-[#0b1220]">
                <dt className="text-xs uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400">{field.label}</dt>
                <dd className="mt-2 text-sm text-gray-800 dark:text-gray-100 break-words">
                  {field.href ? (
                    <a href={field.href} className="text-[#1AAE82] hover:underline">
                      {field.value}
                    </a>
                  ) : (
                    field.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <a
            href={content.contact.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center rounded-full bg-[#1AAE82] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#15956F] transition-colors"
          >
            {content.contact.ctaText}
          </a>
        </div>
      </section>
    </MarketingPageLayout>
  );
}

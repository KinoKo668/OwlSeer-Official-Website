import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, Clock3, Hash, Megaphone, ShoppingCart, Sparkles, TrendingUp, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts';
import { MarketingPageLayout } from './MarketingPageLayout';

interface ToolsPageProps {
  onNavigate?: (page: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

type ToolVertical = 'social' | 'commerce' | 'ads';

type ToolCard = {
  slug: string;
  vertical: ToolVertical;
  title: string;
  description: string;
  status: string;
};

const VALID_VERTICALS: ToolVertical[] = ['social', 'commerce', 'ads'];

const COPY: Record<'en' | 'zh', {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  listTitle: string;
  openTool: string;
  notFound: string;
  unknownVertical: string;
  backToTools: string;
  categoriesLabel: string;
  verticalLabel: string;
  primary: string;
  secondary: string;
  verticals: Record<'all' | ToolVertical, string>;
  tools: ToolCard[];
}> = {
  en: {
    badge: 'Free Tools',
    title: 'OwlSeer Tools',
    subtitle: 'Programmatic SEO tool library for creators and growth teams.',
    description: 'Templates are structured by business vertical so Social, Commerce, and Ads can scale in parallel.',
    listTitle: 'Available tools',
    openTool: 'Open tool page',
    notFound: 'This tool slug is not available yet.',
    unknownVertical: 'This vertical is not configured yet.',
    backToTools: 'Back to tools',
    categoriesLabel: 'Vertical',
    verticalLabel: 'Track',
    primary: 'Contact Team',
    secondary: 'View Pricing',
    verticals: {
      all: 'All',
      social: 'Social',
      commerce: 'Commerce',
      ads: 'Ads',
    },
    tools: [
      {
        slug: 'hashtag-optimizer',
        vertical: 'social',
        title: 'Hashtag Optimizer',
        description: 'Generate and score hashtag packs by niche relevance and trend velocity.',
        status: 'Coming soon',
      },
      {
        slug: 'hook-angle-generator',
        vertical: 'social',
        title: 'Hook Angle Generator',
        description: 'Create first-3-second hook options mapped to your content objective.',
        status: 'Coming soon',
      },
      {
        slug: 'posting-window-calculator',
        vertical: 'social',
        title: 'Posting Window Calculator',
        description: 'Estimate best publish windows from audience active-hour patterns.',
        status: 'Coming soon',
      },
      {
        slug: 'product-angle-matcher',
        vertical: 'commerce',
        title: 'Product Angle Matcher',
        description: 'Match product attributes with creator-style narrative angles for conversion.',
        status: 'Coming soon',
      },
      {
        slug: 'creative-fatigue-detector',
        vertical: 'ads',
        title: 'Creative Fatigue Detector',
        description: 'Flag ad creative fatigue early and recommend replacement angle clusters.',
        status: 'Coming soon',
      },
    ],
  },
  zh: {
    badge: '免费工具',
    title: 'OwlSeer Tools',
    subtitle: '面向创作者与增长团队的 Programmatic SEO 工具库。',
    description: '模板按业务垂类组织，支持 Social / Commerce / Ads 并行扩展。',
    listTitle: '可用工具',
    openTool: '打开工具页',
    notFound: '当前工具 slug 尚未上线。',
    unknownVertical: '该垂类暂未配置。',
    backToTools: '返回工具列表',
    categoriesLabel: '垂类',
    verticalLabel: '轨道',
    primary: '联系团队',
    secondary: '查看定价',
    verticals: {
      all: '全部',
      social: 'Social',
      commerce: 'Commerce',
      ads: 'Ads',
    },
    tools: [
      {
        slug: 'hashtag-optimizer',
        vertical: 'social',
        title: '标签优化器',
        description: '基于垂类匹配度与趋势速度生成并评分标签组合。',
        status: '即将上线',
      },
      {
        slug: 'hook-angle-generator',
        vertical: 'social',
        title: '开场钩子生成器',
        description: '按内容目标生成前 3 秒开场方案。',
        status: '即将上线',
      },
      {
        slug: 'posting-window-calculator',
        vertical: 'social',
        title: '发布时间窗口计算器',
        description: '根据受众活跃时段估算最佳发布时间窗口。',
        status: '即将上线',
      },
      {
        slug: 'product-angle-matcher',
        vertical: 'commerce',
        title: '商品角度匹配器',
        description: '将商品卖点映射为可转化的内容叙事角度。',
        status: '即将上线',
      },
      {
        slug: 'creative-fatigue-detector',
        vertical: 'ads',
        title: '创意疲劳检测器',
        description: '提前识别投放素材疲劳并推荐替换角度簇。',
        status: '即将上线',
      },
    ],
  },
};

const ICON_BY_SLUG: Record<string, React.ComponentType<{ className?: string }>> = {
  'hashtag-optimizer': Hash,
  'hook-angle-generator': Sparkles,
  'posting-window-calculator': TrendingUp,
  'product-angle-matcher': ShoppingCart,
  'creative-fatigue-detector': Megaphone,
};

export function ToolsPage({ onNavigate, isDarkMode, setIsDarkMode }: ToolsPageProps) {
  const { language } = useLanguage();
  const { vertical, toolSlug } = useParams<{ vertical?: string; toolSlug?: string }>();
  const copy = COPY[language === 'zh' ? 'zh' : 'en'];

  const normalizedVertical = VALID_VERTICALS.includes((vertical || '') as ToolVertical)
    ? (vertical as ToolVertical)
    : null;
  const hasUnknownVertical = Boolean(vertical) && !normalizedVertical;

  const visibleTools = normalizedVertical
    ? copy.tools.filter((tool) => tool.vertical === normalizedVertical)
    : copy.tools;

  const activeTool = toolSlug
    ? copy.tools.find((tool) =>
        tool.slug === toolSlug &&
        (!normalizedVertical || tool.vertical === normalizedVertical)
      )
    : null;

  const canonicalPath = (() => {
    if (activeTool && normalizedVertical) return `/tools/category/${normalizedVertical}/${activeTool.slug}`;
    if (activeTool) return `/tools/${activeTool.slug}`;
    if (normalizedVertical) return `/tools/category/${normalizedVertical}`;
    return '/tools';
  })();

  const backPath = normalizedVertical ? `tools/category/${normalizedVertical}` : 'tools';

  return (
    <MarketingPageLayout
      canonicalPath={canonicalPath}
      title={`${copy.title} | ${copy.badge}`}
      description={copy.subtitle}
      keywords={['free creator tools', 'tiktok growth tools', 'programmatic seo tools', 'commerce growth tools', 'ads tools']}
      onNavigate={onNavigate}
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
    >
      <section className="border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#1AAE82]/10 text-[#1AAE82]">
            <Wrench className="w-3.5 h-3.5" />
            {copy.badge}
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white font-display">
            {copy.title}
          </h1>
          <p className="mt-5 text-xl text-gray-600 dark:text-gray-300 max-w-3xl">{copy.subtitle}</p>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400 max-w-3xl">{copy.description}</p>

          <div className="mt-8">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">{copy.categoriesLabel}</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onNavigate?.('tools')}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  !normalizedVertical
                    ? 'bg-[#1AAE82] text-white border-[#1AAE82]'
                    : 'bg-white dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:border-[#1AAE82]/40'
                }`}
              >
                {copy.verticals.all}
              </button>
              {VALID_VERTICALS.map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate?.(`tools/category/${item}`)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                    normalizedVertical === item
                      ? 'bg-[#1AAE82] text-white border-[#1AAE82]'
                      : 'bg-white dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:border-[#1AAE82]/40'
                  }`}
                >
                  {copy.verticals[item]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {(hasUnknownVertical || (toolSlug && !activeTool)) && (
            <div className="mb-8 rounded-2xl border border-amber-300/50 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-500/30 px-5 py-4 text-sm text-amber-700 dark:text-amber-200 flex flex-wrap items-center justify-between gap-4">
              <span>{hasUnknownVertical ? copy.unknownVertical : copy.notFound}</span>
              <button
                onClick={() => onNavigate?.(backPath)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-amber-300/60 dark:border-amber-500/40 text-amber-700 dark:text-amber-200 font-semibold"
              >
                {copy.backToTools}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {activeTool && (
            <div className="mb-8 rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-sm">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{activeTool.title}</h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{activeTool.description}</p>
                  <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#1AAE82]">
                    {copy.verticalLabel}: {copy.verticals[activeTool.vertical]}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide bg-[#1AAE82]/10 text-[#1AAE82]">
                  <Clock3 className="w-3.5 h-3.5" />
                  {activeTool.status}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1AAE82] text-white font-semibold hover:bg-[#15956F] transition-colors"
                >
                  {copy.primary}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate?.('pricing')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-slate-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {copy.secondary}
                </button>
              </div>
            </div>
          )}

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">{copy.listTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {visibleTools.map((tool) => {
              const Icon = ICON_BY_SLUG[tool.slug] || Wrench;
              const targetVertical = normalizedVertical || tool.vertical;
              return (
                <button
                  key={tool.slug}
                  onClick={() => onNavigate?.(`tools/category/${targetVertical}/${tool.slug}`)}
                  className="text-left rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-[#1AAE82]/50 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1AAE82]/10 text-[#1AAE82] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#1AAE82]">
                    {copy.verticals[tool.vertical]}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">{tool.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{tool.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1AAE82]">
                    {copy.openTool}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </MarketingPageLayout>
  );
}

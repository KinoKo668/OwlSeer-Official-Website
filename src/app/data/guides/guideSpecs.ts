import guideGettingStartedRaw from '../../../../phase-5-优化1.1/T6-05-guide-getting-started.md?raw';
import guideUnderstandingSignalsRaw from '../../../../phase-5-优化1.1/T6-06-guide-understanding-signals.md?raw';
import guideFirstDataWeekRaw from '../../../../phase-5-优化1.1/T6-07-guide-first-data-driven-week.md?raw';
import guideHookRatesRaw from '../../../../phase-5-优化1.1/T6-08-guide-hook-rates.md?raw';
import guideHashtagStrategyRaw from '../../../../phase-5-优化1.1/T6-09-guide-hashtag-strategy.md?raw';
import guideReadingWeeklyReportRaw from '../../../../phase-5-优化1.1/T6-10-guide-reading-weekly-report.md?raw';
import guideCrossSignalAnalysisRaw from '../../../../phase-5-优化1.1/T6-11-guide-cross-signal-analysis.md?raw';
import guideScalingScriptStudioRaw from '../../../../phase-5-优化1.1/T6-12-guide-scaling-script-studio.md?raw';
import guideAgencyPlaybookRaw from '../../../../phase-5-优化1.1/T6-13-guide-agency-playbook.md?raw';
import guideTrendTimingRaw from '../../../../phase-5-优化1.1/T6-14-guide-trend-timing.md?raw';

export type GuideDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type GuideSlug =
  | 'getting-started'
  | 'understanding-signals'
  | 'first-data-driven-week'
  | 'hook-rates'
  | 'hashtag-strategy'
  | 'reading-weekly-report'
  | 'cross-signal-analysis'
  | 'scaling-script-studio'
  | 'agency-playbook'
  | 'trend-timing';

interface GuideSpecSource {
  id: string;
  slug: GuideSlug;
  raw: string;
  shortDescriptionEn: string;
  shortDescriptionZh: string;
  titleZh: string;
  timeZh: string;
}

export interface ParsedGuideSection {
  key: string;
  heading: string;
  taskSentence?: string;
  actionLine?: string;
  body: string;
}

export interface ParsedGuideSpec {
  id: string;
  slug: GuideSlug;
  difficulty: GuideDifficulty;
  title: string;
  lead: string;
  estimatedTime: string;
  metaTitle: string;
  metaDescription: string;
  zhSummary: string;
  sections: ParsedGuideSection[];
  cardDescriptionEn: string;
  cardDescriptionZh: string;
  titleZh: string;
  timeZh: string;
}

export interface GuideCard {
  id: string;
  slug: GuideSlug;
  title: string;
  level: GuideDifficulty;
  time: string;
  description: string;
  isNew?: boolean;
  link: string;
  category: string;
}

const GUIDE_SOURCES: GuideSpecSource[] = [
  {
    id: 'g1',
    slug: 'getting-started',
    raw: guideGettingStartedRaw,
    shortDescriptionEn: 'Set up your account, connect your TikTok, and understand your dashboard basics.',
    shortDescriptionZh: '设置账号、连接 TikTok，并理解仪表盘的核心信息。',
    titleZh: 'OwlSeer 入门：完整流程演示',
    timeZh: '20 分钟',
  },
  {
    id: 'g2',
    slug: 'understanding-signals',
    raw: guideUnderstandingSignalsRaw,
    shortDescriptionEn: 'Learn how to interpret key metrics and what they mean for your content strategy.',
    shortDescriptionZh: '学习关键指标该如何解读，以及它们如何影响你的内容策略。',
    titleZh: '理解你的 TikTok 信号：先看什么',
    timeZh: '25 分钟',
  },
  {
    id: 'g3',
    slug: 'first-data-driven-week',
    raw: guideFirstDataWeekRaw,
    shortDescriptionEn: 'A step-by-step plan to create content based on data insights for your first week.',
    shortDescriptionZh: '用一套可执行计划在第一周建立内容测试和数据反馈闭环。',
    titleZh: '你的第一个数据驱动内容周：7 天计划',
    timeZh: '15 分钟 + 7 天',
  },
  {
    id: 'g4',
    slug: 'hook-rates',
    raw: guideHookRatesRaw,
    shortDescriptionEn: 'Optimize your video openings to capture attention and improve retention.',
    shortDescriptionZh: '优化视频开头 3 秒，提升注意力与留存表现。',
    titleZh: '掌握 Hook Rate：3 秒框架',
    timeZh: '30 分钟 + 2 周',
  },
  {
    id: 'g5',
    slug: 'hashtag-strategy',
    raw: guideHashtagStrategyRaw,
    shortDescriptionEn: 'Leverage trend data to select high-impact hashtags for your niche.',
    shortDescriptionZh: '通过趋势动量和竞争信息，为你的赛道筛选高价值标签。',
    titleZh: '用趋势雷达数据构建标签策略',
    timeZh: '30 分钟',
  },
  {
    id: 'g6',
    slug: 'reading-weekly-report',
    raw: guideReadingWeeklyReportRaw,
    shortDescriptionEn: 'Focus on the most actionable insights in your weekly performance report.',
    shortDescriptionZh: '聚焦周报里真正能推动增长决策的关键洞察。',
    titleZh: '解读周报：哪些信息重要，哪些可以跳过',
    timeZh: '25 分钟',
  },
  {
    id: 'g7',
    slug: 'cross-signal-analysis',
    raw: guideCrossSignalAnalysisRaw,
    shortDescriptionEn: 'Combine multiple signals to uncover deep insights about your audience behavior.',
    shortDescriptionZh: '组合多个信号，找出更深层的受众行为规律。',
    titleZh: '跨信号分析：发现数据里的隐藏模式',
    timeZh: '45 分钟',
  },
  {
    id: 'g8',
    slug: 'scaling-script-studio',
    raw: guideScalingScriptStudioRaw,
    shortDescriptionEn: 'Streamline your workflow to produce more high-quality content in less time.',
    shortDescriptionZh: '用结构化流程在保证质量的前提下提升内容产出速度。',
    titleZh: '用 Script Studio 扩大内容产能',
    timeZh: '35 分钟',
  },
  {
    id: 'g9',
    slug: 'agency-playbook',
    raw: guideAgencyPlaybookRaw,
    shortDescriptionEn: 'Best practices for agencies to manage multiple client accounts efficiently.',
    shortDescriptionZh: '机构团队管理多客户账号的协作流程与最佳实践。',
    titleZh: '机构打法：用 OwlSeer 管理 10+ 账号',
    timeZh: '40 分钟',
  },
  {
    id: 'g10',
    slug: 'trend-timing',
    raw: guideTrendTimingRaw,
    shortDescriptionEn: 'Decide which trends are worth your effort based on timing and velocity.',
    shortDescriptionZh: '根据趋势速度和竞争强度判断投入优先级。',
    titleZh: '高级趋势时机：何时跟进，何时放弃',
    timeZh: '35 分钟',
  },
];

export const GUIDE_SLUGS: GuideSlug[] = GUIDE_SOURCES.map((source) => source.slug);
export const WEEKLY_RECOMMENDED_GUIDE_SLUG: GuideSlug = 'hook-rates';

const SAMPLE_EXPLORER_ALIASES: Record<string, string> = {
  '/sample-explorer': '/social/simulation',
  '/sample-explorer/dashboard': '/social/dashboard',
  '/sample-explorer/intelligence': '/social/intelligence',
  '/sample-explorer/trend-radar': '/social/simulation/trends',
  '/sample-explorer/weekly-report': '/social/weekly-report',
  '/sample-explorer/script-studio': '/social/studio',
  '/sample-explorer/copilot': '/social/copilot',
  '/sample-explorer/content-library': '/social/library',
  '/sample-explorer/scheduling': '/social/scheduling',
  '/trust/data-security': '/social/security',
};

export function normalizeGuideLink(path: string): string {
  const [basePath, hashFragment] = path.split('#');
  const normalizedBase = SAMPLE_EXPLORER_ALIASES[basePath] ?? basePath;
  if (!hashFragment) {
    return normalizedBase;
  }
  return `${normalizedBase}#${hashFragment}`;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractBetween(raw: string, startMarker: string, endMarker: string): string {
  const startIndex = raw.indexOf(startMarker);
  const endIndex = raw.indexOf(endMarker);
  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    return '';
  }
  return raw.slice(startIndex + startMarker.length, endIndex).trim();
}

function extractLabel(content: string, label: string): string {
  const pattern = new RegExp(`\\*\\*${escapeRegExp(label)}\\*\\*:\\s*(.+)`);
  const match = content.match(pattern);
  return match?.[1]?.trim() ?? '';
}

function extractTableValue(raw: string, tableLabel: string): string {
  const pattern = new RegExp(`\\|\\s*\\*\\*${escapeRegExp(tableLabel)}\\*\\*\\s*\\|\\s*((?:\\\\\\||[^|])+?)\\s*\\|`);
  const match = raw.match(pattern);
  return match?.[1]?.trim().replace(/\\\|/g, '|') ?? '';
}

function extractChineseSummary(raw: string): string {
  const moduleDMatch = raw.match(/## Module D\. Chinese Translation[\s\S]*?\*\*H1\*\*:\s*(.+)/);
  return moduleDMatch?.[1]?.trim() ?? '';
}

function parseCopySections(finalCopy: string): Array<{ key: string; content: string }> {
  const sectionRegex = /^### `([^`]+)`\s*$/gm;
  const matches = Array.from(finalCopy.matchAll(sectionRegex));

  return matches.map((match, index) => {
    const sectionKey = match[1];
    const contentStart = (match.index ?? 0) + match[0].length;
    const contentEnd = index + 1 < matches.length ? matches[index + 1].index ?? finalCopy.length : finalCopy.length;
    const sectionContent = finalCopy.slice(contentStart, contentEnd).trim();

    return {
      key: sectionKey,
      content: sectionContent,
    };
  });
}

function parseGuideSpec(source: GuideSpecSource): ParsedGuideSpec {
  const finalCopy = extractBetween(source.raw, '[FINAL COPY START]', '[FINAL COPY END]');
  const parsedSections = parseCopySections(finalCopy);
  const heroSection = parsedSections.find((section) => section.key === 'hero')?.content ?? '';

  const difficulty = (extractLabel(heroSection, 'Difficulty Badge') || 'Beginner') as GuideDifficulty;
  const title = extractLabel(heroSection, 'H1') || source.slug.replace(/-/g, ' ');
  const lead = extractLabel(heroSection, 'Lead') || source.shortDescriptionEn;
  const estimatedTime = extractLabel(heroSection, 'Estimated Time') || 'N/A';

  const sections: ParsedGuideSection[] = parsedSections
    .filter((section) => section.key !== 'hero')
    .map((section) => {
      const heading = extractLabel(section.content, 'H2') || section.key.replace(/-/g, ' ');
      const taskSentence = extractLabel(section.content, 'Task Sentence');
      const actionLine = extractLabel(section.content, 'Action Line');

      const body = section.content
        .split('\n')
        .filter((line) => {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('**H2**:')) return false;
          if (trimmedLine.startsWith('**Task Sentence**:')) return false;
          if (trimmedLine.startsWith('**Action Line**:')) return false;
          return true;
        })
        .join('\n')
        .trim();

      return {
        key: section.key,
        heading,
        taskSentence: taskSentence || undefined,
        actionLine: actionLine || undefined,
        body,
      };
    });

  const metaTitle = extractTableValue(source.raw, 'Title Tag') || `${title} | OwlSeer`;
  const metaDescription = extractTableValue(source.raw, 'Meta Description') || lead;

  return {
    id: source.id,
    slug: source.slug,
    difficulty,
    title,
    lead,
    estimatedTime,
    metaTitle,
    metaDescription,
    zhSummary: extractChineseSummary(source.raw),
    sections,
    cardDescriptionEn: source.shortDescriptionEn,
    cardDescriptionZh: source.shortDescriptionZh,
    titleZh: source.titleZh,
    timeZh: source.timeZh,
  };
}

export const guideSpecs: ParsedGuideSpec[] = GUIDE_SOURCES.map(parseGuideSpec);

export const guideSpecBySlug = guideSpecs.reduce<Record<GuideSlug, ParsedGuideSpec>>(
  (accumulator, spec) => {
    accumulator[spec.slug] = spec;
    return accumulator;
  },
  {} as Record<GuideSlug, ParsedGuideSpec>,
);

export const guideCardsByLanguage: Record<'en' | 'zh', GuideCard[]> = {
  en: guideSpecs.map((spec) => ({
    id: spec.id,
    slug: spec.slug,
    title: spec.title,
    level: spec.difficulty,
    time: spec.estimatedTime,
    description: spec.cardDescriptionEn,
    isNew: spec.slug === 'hook-rates',
    link: `/guides/${spec.slug}`,
    category: spec.difficulty,
  })),
  zh: guideSpecs.map((spec) => ({
    id: spec.id,
    slug: spec.slug,
    title: spec.titleZh,
    level: spec.difficulty,
    time: spec.timeZh,
    description: spec.cardDescriptionZh,
    isNew: spec.slug === 'hook-rates',
    link: `/zh/guides/${spec.slug}`,
    category: spec.difficulty === 'Beginner' ? '入门' : spec.difficulty === 'Intermediate' ? '进阶' : '高级',
  })),
};

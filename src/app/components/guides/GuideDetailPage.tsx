import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { SEO } from '../SEO';
import { addLanguagePrefix, useLanguage } from '../../contexts/LanguageContext';
import { translations as globalTranslations } from '../../data/translations';
import {
  GUIDE_SLUGS,
  guideSpecBySlug,
  guideSpecs,
  normalizeGuideLink,
  type GuideDifficulty,
  type GuideSlug,
  type ParsedGuideSection,
} from '../../data/guides/guideSpecs';

type MarkdownBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'unordered-list'; items: string[] }
  | { type: 'ordered-list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

const uiTranslations = {
  en: {
    allGuides: 'All Guides',
    noGuideFound: 'Guide not found.',
    viewAllGuides: 'View All Guides',
    readPrevious: 'Previous Guide',
    readNext: 'Next Guide',
    difficulty: 'Difficulty',
    estimatedTime: 'Estimated Time',
    zhSummary: '中文摘要',
  },
  zh: {
    allGuides: '全部指南',
    noGuideFound: '未找到该指南。',
    viewAllGuides: '返回指南页',
    readPrevious: '上一篇指南',
    readNext: '下一篇指南',
    difficulty: '难度',
    estimatedTime: '预计用时',
    zhSummary: '中文摘要',
  },
};

function getDifficultyBadgeStyles(level: GuideDifficulty): string {
  if (level === 'Beginner') {
    return 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
  }
  if (level === 'Intermediate') {
    return 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400';
  }
  return 'border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400';
}

function isTableSeparatorRow(row: string): boolean {
  const cleaned = row.trim().replace(/^\|/, '').replace(/\|$/, '');
  return cleaned
    .split('|')
    .every((cell) => /^:?-{3,}:?$/.test(cell.trim()));
}

function parseTableRow(row: string): string[] {
  return row
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function isBlockBoundary(line: string): boolean {
  const trimmed = line.trim();
  return trimmed.startsWith('- ') || /^\d+\.\s+/.test(trimmed) || trimmed.startsWith('|');
}

function parseMarkdownBlocks(markdown: string): MarkdownBlock[] {
  const lines = markdown.split('\n');
  const blocks: MarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const currentLine = lines[index].trim();
    if (!currentLine || currentLine === '---') {
      index += 1;
      continue;
    }

    if (currentLine.startsWith('|')) {
      const tableLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        tableLines.push(lines[index].trim());
        index += 1;
      }
      if (tableLines.length > 0) {
        const headers = parseTableRow(tableLines[0]);
        const rows = tableLines
          .slice(1)
          .filter((line) => !isTableSeparatorRow(line))
          .map(parseTableRow);
        blocks.push({ type: 'table', headers, rows });
      }
      continue;
    }

    if (currentLine.startsWith('- ')) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith('- ')) {
        items.push(lines[index].trim().replace(/^- /, '').trim());
        index += 1;
      }
      blocks.push({ type: 'unordered-list', items });
      continue;
    }

    if (/^\d+\.\s+/.test(currentLine)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, '').trim());
        index += 1;
      }
      blocks.push({ type: 'ordered-list', items });
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length) {
      const line = lines[index];
      const trimmed = line.trim();
      if (!trimmed || trimmed === '---' || isBlockBoundary(trimmed)) {
        break;
      }
      paragraphLines.push(trimmed);
      index += 1;
    }

    if (paragraphLines.length > 0) {
      blocks.push({
        type: 'paragraph',
        text: paragraphLines.join(' '),
      });
      continue;
    }

    index += 1;
  }

  return blocks;
}

function renderInlineText(text: string, onNavigate: (path: string) => void, keyPrefix: string): React.ReactNode[] {
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`)/g;
  const tokens = text.split(tokenRegex).filter(Boolean);

  return tokens.map((token, tokenIndex) => {
    const key = `${keyPrefix}-${tokenIndex}`;
    const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const label = linkMatch[1];
      const href = normalizeGuideLink(linkMatch[2]);
      return (
        <button
          key={key}
          type="button"
          onClick={() => onNavigate(href)}
          className="font-semibold text-[#1AAE82] underline underline-offset-2 transition-colors hover:text-[#15956F]"
        >
          {label}
        </button>
      );
    }

    const boldMatch = token.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return (
        <strong key={key} className="font-semibold text-gray-900 dark:text-white">
          {boldMatch[1]}
        </strong>
      );
    }

    const codeMatch = token.match(/^`([^`]+)`$/);
    if (codeMatch) {
      return (
        <code key={key} className="rounded bg-gray-100 px-1.5 py-0.5 text-[0.85em] dark:bg-slate-800">
          {codeMatch[1]}
        </code>
      );
    }

    return <React.Fragment key={key}>{token}</React.Fragment>;
  });
}

function renderSectionBlocks(section: ParsedGuideSection, onNavigate: (path: string) => void): React.ReactNode {
  const blocks = parseMarkdownBlocks(section.body);

  return blocks.map((block, blockIndex) => {
    if (block.type === 'paragraph') {
      const ctaMatch = block.text.match(/^\*\*([^*]+)\*\*:\s*(.+?)\s*→\s*(\/\S+)\s*$/);
      if (ctaMatch) {
        const ctaLabel = ctaMatch[1];
        const ctaText = ctaMatch[2];
        const ctaLink = normalizeGuideLink(ctaMatch[3]);
        return (
          <div key={`${section.key}-cta-${blockIndex}`} className="flex flex-wrap items-center gap-3 rounded-xl border border-[#1AAE82]/20 bg-[#1AAE82]/5 px-4 py-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">{ctaLabel}</span>
            <button
              type="button"
              onClick={() => onNavigate(ctaLink)}
              className="inline-flex items-center gap-2 rounded-full bg-[#1AAE82] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#15956F]"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        );
      }

      return (
        <p key={`${section.key}-p-${blockIndex}`} className="text-base leading-8 text-gray-700 dark:text-gray-300">
          {renderInlineText(block.text, onNavigate, `${section.key}-p-${blockIndex}`)}
        </p>
      );
    }

    if (block.type === 'unordered-list') {
      return (
        <ul key={`${section.key}-ul-${blockIndex}`} className="space-y-3">
          {block.items.map((item, itemIndex) => (
            <li key={`${section.key}-ul-${blockIndex}-${itemIndex}`} className="flex items-start gap-3 text-base leading-7 text-gray-700 dark:text-gray-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1AAE82]" />
              <span>{renderInlineText(item, onNavigate, `${section.key}-ul-${blockIndex}-${itemIndex}`)}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (block.type === 'ordered-list') {
      return (
        <ol key={`${section.key}-ol-${blockIndex}`} className="space-y-3">
          {block.items.map((item, itemIndex) => (
            <li key={`${section.key}-ol-${blockIndex}-${itemIndex}`} className="flex items-start gap-3 text-base leading-7 text-gray-700 dark:text-gray-300">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#1AAE82]/30 bg-[#1AAE82]/10 text-xs font-semibold text-[#1AAE82]">
                {itemIndex + 1}
              </span>
              <span className="pt-0.5">{renderInlineText(item, onNavigate, `${section.key}-ol-${blockIndex}-${itemIndex}`)}</span>
            </li>
          ))}
        </ol>
      );
    }

    return (
      <div key={`${section.key}-table-${blockIndex}`} className="overflow-x-auto rounded-xl border border-gray-200 dark:border-slate-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
          <thead className="bg-gray-50 dark:bg-slate-900/60">
            <tr>
              {block.headers.map((header, headerIndex) => (
                <th key={`${section.key}-table-head-${blockIndex}-${headerIndex}`} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                  {renderInlineText(header, onNavigate, `${section.key}-table-head-${blockIndex}-${headerIndex}`)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white dark:divide-slate-800 dark:bg-slate-950/20">
            {block.rows.map((row, rowIndex) => (
              <tr key={`${section.key}-table-row-${blockIndex}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${section.key}-table-cell-${blockIndex}-${rowIndex}-${cellIndex}`} className="px-4 py-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                    {renderInlineText(cell, onNavigate, `${section.key}-table-cell-${blockIndex}-${rowIndex}-${cellIndex}`)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  });
}

export function GuideDetailPage({
  onNavigate,
  isDarkMode,
  setIsDarkMode,
}: {
  onNavigate: (page: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}) {
  const { slug } = useParams<{ slug: string }>();
  const { language, setLanguage } = useLanguage();
  const ui = (uiTranslations as any)[language] || uiTranslations.en;
  const globalT = (globalTranslations as any)[language] || globalTranslations.en;

  const parsedSlug = (slug ?? '') as GuideSlug;
  const guide = GUIDE_SLUGS.includes(parsedSlug) ? guideSpecBySlug[parsedSlug] : undefined;

  const guidesPath = addLanguagePrefix('/social/guides', language);

  if (!guide) {
    return (
      <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-[#020617] dark:text-white">
        <Navbar
          onTrySample={() => onNavigate('/social/simulation')}
          onSignUp={() => onNavigate('/social/auth')}
          onNavigate={onNavigate}
          language={language}
          setLanguage={setLanguage}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          t={globalT}
        />
        <main className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 pt-28 text-center">
          <h1 className="text-3xl font-bold">{ui.noGuideFound}</h1>
          <button
            type="button"
            onClick={() => onNavigate(guidesPath)}
            className="inline-flex items-center gap-2 rounded-full bg-[#1AAE82] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#15956F]"
          >
            {ui.viewAllGuides}
            <ArrowRight className="h-4 w-4" />
          </button>
        </main>
        <Footer t={globalT.footer} onNavigate={onNavigate} />
      </div>
    );
  }

  const currentIndex = guideSpecs.findIndex((item) => item.slug === guide.slug);
  const previousGuide = currentIndex > 0 ? guideSpecs[currentIndex - 1] : undefined;
  const nextGuide = currentIndex < guideSpecs.length - 1 ? guideSpecs[currentIndex + 1] : undefined;

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-[#020617] dark:text-white">
      <SEO
        title={guide.metaTitle}
        description={guide.metaDescription}
        keywords={['tiktok strategy guides', guide.slug.replace(/-/g, ' '), 'owlseer guide']}
        lang={language}
      />
      <Navbar
        onTrySample={() => onNavigate('/social/simulation')}
        onSignUp={() => onNavigate('/social/auth')}
        onNavigate={onNavigate}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={globalT}
      />

      <main className="pb-20 pt-28">
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate(guidesPath)}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-[#1AAE82] dark:text-gray-300"
          >
            <ArrowLeft className="h-4 w-4" />
            {ui.allGuides}
          </button>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900 md:p-12">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${getDifficultyBadgeStyles(guide.difficulty)}`}>
                {guide.difficulty}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300">
                <Clock className="h-3.5 w-3.5" />
                {guide.estimatedTime}
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl">
              {guide.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
              {guide.lead}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-gray-50/80 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/70">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">{ui.difficulty}</p>
                <p className="mt-1 text-base font-semibold text-gray-900 dark:text-white">{guide.difficulty}</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50/80 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/70">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">{ui.estimatedTime}</p>
                <p className="mt-1 text-base font-semibold text-gray-900 dark:text-white">{guide.estimatedTime}</p>
              </div>
            </div>

            {isZhRoute && guide.zhSummary && (
              <div className="mt-8 rounded-2xl border border-[#1AAE82]/25 bg-[#1AAE82]/8 p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#1AAE82]">{ui.zhSummary}</p>
                <p className="text-sm leading-7 text-gray-700 dark:text-gray-200">{guide.zhSummary}</p>
              </div>
            )}
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
          {guide.sections.map((section) => (
            <article key={section.key} className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-9">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                {section.heading}
              </h2>
              {section.taskSentence && (
                <p className="mt-3 rounded-xl border border-[#1AAE82]/20 bg-[#1AAE82]/5 px-4 py-3 text-sm font-medium leading-relaxed text-gray-700 dark:text-gray-200">
                  {section.taskSentence}
                </p>
              )}
              <div className="mt-6 space-y-5">
                {renderSectionBlocks(section, (targetPath) => onNavigate(normalizeGuideLink(targetPath)))}
              </div>
              {section.actionLine && (
                <div className="mt-7 rounded-2xl border border-[#1AAE82]/25 bg-[#1AAE82]/8 px-5 py-4">
                  <p className="text-sm font-semibold leading-relaxed text-[#0D8A67] dark:text-[#6EE7C5]">{section.actionLine}</p>
                </div>
              )}
            </article>
          ))}
        </section>

        <section className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            {previousGuide ? (
              <button
                type="button"
                onClick={() => onNavigate(`${guidesPath}/${previousGuide.slug}`)}
                className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition-all hover:border-[#1AAE82]/30 hover:bg-[#1AAE82]/5 dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">{ui.readPrevious}</p>
                <p className="mt-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-[#1AAE82] dark:text-white">
                  {previousGuide.title}
                </p>
              </button>
            ) : (
              <div />
            )}

            {nextGuide ? (
              <button
                type="button"
                onClick={() => onNavigate(`${guidesPath}/${nextGuide.slug}`)}
                className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition-all hover:border-[#1AAE82]/30 hover:bg-[#1AAE82]/5 dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">{ui.readNext}</p>
                <p className="mt-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-[#1AAE82] dark:text-white">
                  {nextGuide.title}
                </p>
              </button>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>

      <Footer t={globalT.footer} onNavigate={onNavigate} />
    </div>
  );
}

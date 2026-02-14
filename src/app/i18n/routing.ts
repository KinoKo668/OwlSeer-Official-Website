export const SUPPORTED_LANGUAGES = ['en', 'zh', 'ja', 'ko', 'es', 'fr', 'de'] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_TO_PATH_SEGMENT: Record<Language, string | null> = {
  en: null,
  zh: 'zh',
  // User-facing requirement prefers `/jp` for Japanese.
  ja: 'jp',
  ko: 'ko',
  es: 'es',
  fr: 'fr',
  de: 'de',
};

const PATH_SEGMENT_TO_LANGUAGE: Record<string, Language> = {
  zh: 'zh',
  // Support both `/ja` and `/jp` (canonical).
  ja: 'ja',
  jp: 'ja',
  ko: 'ko',
  es: 'es',
  fr: 'fr',
  de: 'de',
};

export function isSupportedLanguage(value: string): value is Language {
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

function getLanguagePathSegment(pathname: string): string | null {
  if (!pathname.startsWith('/')) return null;
  const segment = pathname.split('/')[1];
  if (!segment) return null;
  return Object.prototype.hasOwnProperty.call(PATH_SEGMENT_TO_LANGUAGE, segment) ? segment : null;
}

export function getLanguageFromPathname(pathname: string): Language | null {
  const segment = getLanguagePathSegment(pathname);
  if (!segment) return null;
  return PATH_SEGMENT_TO_LANGUAGE[segment] ?? null;
}

export function stripLanguagePrefix(pathname: string): string {
  const segment = getLanguagePathSegment(pathname);
  if (!segment) return pathname;

  const prefix = `/${segment}`;
  if (pathname === prefix) return '/';
  if (pathname.startsWith(`${prefix}/`)) {
    const rest = pathname.slice(prefix.length);
    return rest === '' ? '/' : rest;
  }
  return pathname;
}

export function addLanguagePrefix(pathname: string, language: Language): string {
  const cleanPath = stripLanguagePrefix(pathname);
  const segment = LANGUAGE_TO_PATH_SEGMENT[language];
  if (!segment) return cleanPath;

  return cleanPath === '/' ? `/${segment}` : `/${segment}${cleanPath}`;
}


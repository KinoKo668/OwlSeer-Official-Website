import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import type { Language } from '../i18n/routing';
export type { Language } from '../i18n/routing';

import {
  addLanguagePrefix as addLanguagePrefixInternal,
  getLanguageFromPathname,
  isSupportedLanguage,
  stripLanguagePrefix as stripLanguagePrefixInternal,
} from '../i18n/routing';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isZh: boolean;
  /**
   * Get the localized path for the current page
   * @param targetLang - Target language
   * @returns The path with the appropriate language prefix
   */
  getLocalizedPath: (targetLang: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const SOCIAL_BASE_PATH = '/social';

// Public pages that should keep language prefix in the URL.
const PUBLIC_PAGE_ROOTS = [
  '/',
  '/signals',
  '/how-it-works',
  '/methodology',
  '/features',
  '/pricing',
  '/blog',
  '/trends',
  '/tools',
  '/blog-post',
  '/links',
  '/about',
  '/press',
  '/commerce',
  '/ads',
  '/guides',
  '/glossary',
  '/faq',
  '/contact',
  '/privacy',
  '/terms',
  '/security',
  '/cookies',
  '/use-cases',
  '/solutions',
  '/vs',
  '/compare',
] as const;

export function isPublicPage(pathname: string): boolean {
  const pathWithoutLanguage = stripLanguagePrefixInternal(pathname);
  const cleanPath = (() => {
    if (pathWithoutLanguage === SOCIAL_BASE_PATH || pathWithoutLanguage === `${SOCIAL_BASE_PATH}/`) return '/';
    if (pathWithoutLanguage.startsWith(`${SOCIAL_BASE_PATH}/`)) {
      return pathWithoutLanguage.slice(SOCIAL_BASE_PATH.length);
    }
    return pathWithoutLanguage;
  })();
  if (cleanPath === '/') return true;

  // Dynamic sub-routes for public sections.
  if (
    cleanPath.startsWith('/guides/') ||
    cleanPath.startsWith('/glossary/') ||
    cleanPath.startsWith('/use-cases/') ||
    cleanPath.startsWith('/solutions/') ||
    cleanPath.startsWith('/vs/') ||
    cleanPath.startsWith('/compare/')
  ) {
    return true;
  }

  return PUBLIC_PAGE_ROOTS.some((root) => {
    if (root === '/') return false;
    return cleanPath === root || cleanPath.startsWith(`${root}/`);
  });
}

/**
 * Get browser preferred language
 */
function getBrowserLanguage(): Language {
  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || 'en';
  const normalized = browserLang.toLowerCase();
  if (normalized.startsWith('zh')) {
    return 'zh';
  }
  if (normalized.startsWith('ja')) return 'ja';
  if (normalized.startsWith('ko')) return 'ko';
  if (normalized.startsWith('es')) return 'es';
  if (normalized.startsWith('fr')) return 'fr';
  if (normalized.startsWith('de')) return 'de';
  return 'en';
}

/**
 * Get stored language preference
 */
function getStoredLanguage(): Language | null {
  try {
    const stored = localStorage.getItem('owlseer-language');
    if (stored && isSupportedLanguage(stored)) return stored;
  } catch {
    // localStorage not available
  }
  return null;
}

/**
 * Store language preference
 */
function storeLanguage(lang: Language): void {
  try {
    localStorage.setItem('owlseer-language', lang);
  } catch {
    // localStorage not available
  }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pendingLanguageRef = React.useRef<Language | null>(null);
  
  const [language, setLanguageState] = useState<Language>(() => {
    const urlLang = getLanguageFromPathname(location.pathname);
    if (urlLang) return urlLang;
    return getStoredLanguage() || getBrowserLanguage();
  });

  // Sync language state with URL changes + enforce language prefix on public pages.
  useEffect(() => {
    if (!isPublicPage(location.pathname)) return;

    const urlLang = getLanguageFromPathname(location.pathname);
    const pendingLang = pendingLanguageRef.current;

    if (urlLang && pendingLang === urlLang) {
      pendingLanguageRef.current = null;
    }

    // If URL has an explicit language prefix, it wins.
    if (urlLang && urlLang !== language) {
      storeLanguage(urlLang);
      setLanguageState(urlLang);
      return;
    }

    if (!urlLang) {
      const storedLang = getStoredLanguage();
      const preferredLang = pendingLang || storedLang || language;

      if (pendingLang && preferredLang === pendingLang && preferredLang !== language) {
        setLanguageState(pendingLang);
      } else if (storedLang && storedLang !== language) {
        setLanguageState(storedLang);
      }

      if (preferredLang === 'en') {
        if (pendingLang === 'en') pendingLanguageRef.current = null;
        return;
      }

      const localizedPathname = addLanguagePrefixInternal(location.pathname, preferredLang);
      const localizedUrl = `${localizedPathname}${location.search}${location.hash}`;
      const currentUrl = `${location.pathname}${location.search}${location.hash}`;
      if (localizedUrl !== currentUrl) {
        navigate(localizedUrl, { replace: true });
      }
    }
  }, [language, location.hash, location.pathname, location.search, navigate]);

  const getLocalizedPath = useCallback((targetLang: Language): string => {
    return addLanguagePrefixInternal(location.pathname, targetLang);
  }, [location.pathname]);

  const setLanguage = useCallback((lang: Language) => {
    if (lang === language) return;
    
    pendingLanguageRef.current = lang;
    storeLanguage(lang);
    
    // Only update URL for public pages
    if (isPublicPage(location.pathname)) {
      const newPathname = addLanguagePrefixInternal(location.pathname, lang);
      navigate(`${newPathname}${location.search}${location.hash}`, { replace: true });
      return;
    }

    pendingLanguageRef.current = null;
    setLanguageState(lang);
  }, [language, location.hash, location.pathname, location.search, navigate]);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  }, [language, setLanguage]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage,
    isZh: language === 'zh',
    getLocalizedPath,
  }), [language, setLanguage, toggleLanguage, getLocalizedPath]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

/**
 * Hook to get the current language from URL (for components outside LanguageProvider)
 */
export const useLanguageFromUrl = (): Language => {
  const location = useLocation();
  return getLanguageFromPathname(location.pathname) || 'en';
};

export const stripLanguagePrefix = stripLanguagePrefixInternal;
export const addLanguagePrefix = addLanguagePrefixInternal;

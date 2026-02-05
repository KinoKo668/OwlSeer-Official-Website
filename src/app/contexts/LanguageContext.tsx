import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type Language = 'en' | 'zh';

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

// Public pages that support both languages
const PUBLIC_PAGES = [
  '/',
  '/how-it-works',
  '/features',
  '/pricing',
  '/blog',
  '/blog-post',
  '/faq',
  '/contact',
  '/privacy',
  '/terms',
  '/security',
  '/cookies',
];

/**
 * Extract language from URL path
 */
function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/zh/') || pathname === '/zh') {
    return 'zh';
  }
  return 'en';
}

/**
 * Remove language prefix from path
 */
function stripLanguagePrefix(pathname: string): string {
  if (pathname.startsWith('/zh/')) {
    return pathname.slice(3) || '/';
  }
  if (pathname === '/zh') {
    return '/';
  }
  return pathname;
}

/**
 * Add language prefix to path
 */
function addLanguagePrefix(pathname: string, lang: Language): string {
  const cleanPath = stripLanguagePrefix(pathname);
  if (lang === 'zh') {
    return cleanPath === '/' ? '/zh' : `/zh${cleanPath}`;
  }
  return cleanPath;
}

/**
 * Check if path is a public page
 */
function isPublicPage(pathname: string): boolean {
  const cleanPath = stripLanguagePrefix(pathname);
  return PUBLIC_PAGES.includes(cleanPath);
}

/**
 * Get browser preferred language
 */
function getBrowserLanguage(): Language {
  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || 'en';
  if (browserLang.startsWith('zh')) {
    return 'zh';
  }
  return 'en';
}

/**
 * Get stored language preference
 */
function getStoredLanguage(): Language | null {
  try {
    const stored = localStorage.getItem('owlseer-language');
    if (stored === 'en' || stored === 'zh') {
      return stored;
    }
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
  
  // Determine initial language from URL, storage, or browser preference
  const initialLanguage = useMemo(() => {
    const urlLang = getLanguageFromPath(location.pathname);
    // If URL has explicit language prefix, use it
    if (location.pathname.startsWith('/zh')) {
      return 'zh';
    }
    // Otherwise, check storage or browser preference for initial redirect
    return getStoredLanguage() || 'en';
  }, []);
  
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  // Sync language state with URL changes
  useEffect(() => {
    const urlLang = getLanguageFromPath(location.pathname);
    if (urlLang !== language && isPublicPage(location.pathname)) {
      setLanguageState(urlLang);
    }
  }, [location.pathname]);

  const getLocalizedPath = useCallback((targetLang: Language): string => {
    return addLanguagePrefix(location.pathname, targetLang);
  }, [location.pathname]);

  const setLanguage = useCallback((lang: Language) => {
    if (lang === language) return;
    
    storeLanguage(lang);
    setLanguageState(lang);
    
    // Only update URL for public pages
    if (isPublicPage(location.pathname)) {
      const newPath = addLanguagePrefix(location.pathname, lang);
      navigate(newPath, { replace: true });
    }
  }, [language, location.pathname, navigate]);

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
  return getLanguageFromPath(location.pathname);
};

export { stripLanguagePrefix, addLanguagePrefix, isPublicPage };

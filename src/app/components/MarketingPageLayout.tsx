import React from 'react';
import { useLanguage } from '../contexts';
import { translations } from '../data/translations';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { SEO } from './SEO';
import { getCanonicalUrl, generateAlternates } from '../data/seoConfig';

interface MarketingPageLayoutProps {
  canonicalPath: string;
  title: string;
  description: string;
  keywords?: string[];
  onNavigate?: (page: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
  children: React.ReactNode;
}

export function MarketingPageLayout({
  canonicalPath,
  title,
  description,
  keywords,
  onNavigate,
  isDarkMode,
  setIsDarkMode,
  children,
}: MarketingPageLayoutProps) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] text-gray-900 dark:text-gray-100 selection:bg-[#1AAE82]/30">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={getCanonicalUrl(canonicalPath, language)}
        lang={language}
        alternates={generateAlternates(canonicalPath)}
      />

      <Navbar
        onTrySample={() => handleNavigate('simulation')}
        onSignUp={() => handleNavigate('auth')}
        onNavigate={handleNavigate}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={t}
      />

      <main className="pt-[72px]">{children}</main>
      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}


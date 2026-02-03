import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from './LandingPage';
import { translations } from '../data/translations';
import { PrivacyPolicy } from './legal/PrivacyPolicy';
import { TermsOfService } from './legal/TermsOfService';
import { SecurityPolicy } from './legal/SecurityPolicy';
import { CookiePolicy } from './legal/CookiePolicy';
import { Shield, FileText, Lock, Cookie, ChevronRight } from 'lucide-react';

export type LegalSection = 'privacy' | 'terms' | 'security' | 'cookies';

interface LegalPageProps {
  onNavigate: (page: any) => void;
  activeSection: LegalSection;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const LEGAL_NAV = [
  { id: 'privacy', label: 'Privacy Policy', icon: Shield },
  { id: 'terms', label: 'Terms of Service', icon: FileText },
  { id: 'security', label: 'Security Statement', icon: Lock },
  { id: 'cookies', label: 'Cookie Policy', icon: Cookie },
];

export function LegalPage({ onNavigate, activeSection, isDarkMode, setIsDarkMode }: LegalPageProps) {
  const [language, setLanguage] = useState('en');
  // Removed local isDarkMode state
  const t = translations.en;

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  // Removed local useEffect for dark mode

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case 'privacy': return <PrivacyPolicy />;
      case 'terms': return <TermsOfService />;
      case 'security': return <SecurityPolicy />;
      case 'cookies': return <CookiePolicy />;
      default: return <PrivacyPolicy />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans text-gray-900 dark:text-gray-100 selection:bg-[#1AAE82]/30">
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
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-4">
              Legal Center
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Transparency, trust, and compliance. Everything you need to know about our policies.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="p-4 bg-gray-50 dark:bg-slate-800/50 border-b border-gray-200 dark:border-slate-800">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">Documents</h3>
                </div>
                <nav className="p-2 space-y-1">
                  {LEGAL_NAV.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavigate(item.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          isActive 
                            ? 'bg-[#1AAE82]/10 text-[#1AAE82]' 
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-[#1AAE82]' : 'text-gray-400'}`} />
                          {item.label}
                        </div>
                        {isActive && <ChevronRight className="w-4 h-4" />}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-8 md:p-12 shadow-sm">
              {renderContent()}
            </div>

          </div>
        </div>
      </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

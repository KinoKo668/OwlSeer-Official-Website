import React from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { addLanguagePrefix, isPublicPage, stripLanguagePrefix, useLanguage } from './contexts';
import { getLanguageFromPathname } from './i18n/routing';

// Lazy load all page components for better performance and code splitting
const Copilot = React.lazy(() => import('./components/Copilot').then(m => ({ default: m.Copilot })));
const Dashboard = React.lazy(() => import('./components/Dashboard').then(m => ({ default: m.Dashboard })));
const DashboardMonitor = React.lazy(() => import('./components/DashboardMonitor').then(m => ({ default: m.DashboardMonitor })));
const AccountIntelligence = React.lazy(() => import('./components/AccountIntelligence').then(m => ({ default: m.AccountIntelligence })));
const ContentLibrary = React.lazy(() => import('./components/ContentLibrary').then(m => ({ default: m.ContentLibrary })));
const HashtagRadar = React.lazy(() => import('./components/HashtagRadar').then(m => ({ default: m.HashtagRadar })));
const SchedulingSlotsNew = React.lazy(() => import('./components/SchedulingSlotsNew').then(m => ({ default: m.SchedulingSlotsNew })));
const ContentStudio = React.lazy(() => import('./components/ContentStudioNew').then(m => ({ default: m.ContentStudio })));
const SettingsLayout = React.lazy(() => import('./components/SettingsLayout').then(m => ({ default: m.SettingsLayout })));
const SettingsOverview = React.lazy(() => import('./components/settings/SettingsOverview').then(m => ({ default: m.SettingsOverview })));
const AccountSettings = React.lazy(() => import('./components/settings/AccountSettings').then(m => ({ default: m.AccountSettings })));
const ConnectedAccountsSettings = React.lazy(() => import('./components/settings/ConnectedAccountsSettings').then(m => ({ default: m.ConnectedAccountsSettings })));
const BillingUsageSettings = React.lazy(() => import('./components/settings/BillingUsageSettings').then(m => ({ default: m.BillingUsageSettings })));
const AIPreferencesSettings = React.lazy(() => import('./components/settings/AIPreferencesSettings').then(m => ({ default: m.AIPreferencesSettings })));
const ContentAutomationSettings = React.lazy(() => import('./components/settings/ContentAutomationSettings').then(m => ({ default: m.ContentAutomationSettings })));
const NotificationsSettings = React.lazy(() => import('./components/settings/NotificationsSettings').then(m => ({ default: m.NotificationsSettings })));
const SecurityPrivacySettings = React.lazy(() => import('./components/settings/SecurityPrivacySettings').then(m => ({ default: m.SecurityPrivacySettings })));
const TeamSettings = React.lazy(() => import('./components/settings/TeamSettings').then(m => ({ default: m.TeamSettings })));
const ReportsArchive = React.lazy(() => import('./components/ReportsArchive').then(m => ({ default: m.ReportsArchive })));
const WeeklyReportDetail = React.lazy(() => import('./components/WeeklyReportDetail').then(m => ({ default: m.WeeklyReportDetail })));
const LandingPage = React.lazy(() => import('./components/LandingPage').then(m => ({ default: m.LandingPage })));
const SignalsPage = React.lazy(() => import('./components/SignalsPage').then(m => ({ default: m.SignalsPage })));
const HowItWorksPage = React.lazy(() => import('./components/HowItWorksPage').then(m => ({ default: m.HowItWorksPage })));
const FeaturesPage = React.lazy(() => import('./components/FeaturesPage').then(m => ({ default: m.FeaturesPage })));
const PricingPage = React.lazy(() => import('./components/PricingPage').then(m => ({ default: m.PricingPage })));
const BlogPage = React.lazy(() => import('./components/BlogPage').then(m => ({ default: m.BlogPage })));
const TrendsPage = React.lazy(() => import('./components/TrendsPage').then(m => ({ default: m.TrendsPage })));
const GuidesPage = React.lazy(() => import('./components/GuidesPage').then(m => ({ default: m.GuidesPage })));
const GuideDetailPage = React.lazy(() => import('./components/guides/GuideDetailPage').then(m => ({ default: m.GuideDetailPage })));
const BlogPostPage = React.lazy(() => import('./components/BlogPostPage').then(m => ({ default: m.BlogPostPage })));
const FAQPage = React.lazy(() => import('./components/FAQPage').then(m => ({ default: m.FAQPage })));
const ContactPage = React.lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const LinksPage = React.lazy(() => import('./components/LinksPage').then(m => ({ default: m.LinksPage })));
const ToolsPage = React.lazy(() => import('./components/ToolsPage').then(m => ({ default: m.ToolsPage })));
const AboutPage = React.lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const PressPage = React.lazy(() => import('./components/PressPage').then(m => ({ default: m.PressPage })));
const CommerceComingSoonPage = React.lazy(() => import('./components/CommerceComingSoonPage').then(m => ({ default: m.CommerceComingSoonPage })));
const AdsComingSoonPage = React.lazy(() => import('./components/AdsComingSoonPage').then(m => ({ default: m.AdsComingSoonPage })));
const ShareReportPage = React.lazy(() => import('./components/ShareReportPage').then(m => ({ default: m.ShareReportPage })));
const LegalPage = React.lazy(() => import('./components/LegalPage').then(m => ({ default: m.LegalPage })));
const MethodologyPage = React.lazy(() => import('./components/MethodologyPage').then(m => ({ default: m.MethodologyPage })));
const GlossaryPage = React.lazy(() => import('./components/glossary/GlossaryPage').then(m => ({ default: m.GlossaryPage })));
const FypGlossaryPage = React.lazy(() => import('./components/glossary/FypGlossaryPage').then(m => ({ default: m.FypGlossaryPage })));
const ContentDiagnosisPage = React.lazy(() => import('./components/use-cases/ContentDiagnosisPage').then(m => ({ default: m.ContentDiagnosisPage })));
const PostingSchedulePage = React.lazy(() => import('./components/use-cases/PostingSchedulePage').then(m => ({ default: m.PostingSchedulePage })));
const ScriptGenerationPage = React.lazy(() => import('./components/use-cases/ScriptGenerationPage').then(m => ({ default: m.ScriptGenerationPage })));
const ContentCreatorsPage = React.lazy(() => import('./components/solutions/ContentCreatorsPage').then(m => ({ default: m.ContentCreatorsPage })));
const TrendPredictionPage = React.lazy(() => import('./components/use-cases/TrendPredictionPage').then(m => ({ default: m.TrendPredictionPage })));
const EcommerceSellersPage = React.lazy(() => import('./components/solutions/EcommerceSellersPage').then(m => ({ default: m.EcommerceSellersPage })));
const BrandsPage = React.lazy(() => import('./components/solutions/BrandsPage').then(m => ({ default: m.BrandsPage })));
const AiToolsComparisonPage = React.lazy(() => import('./components/compare/AiToolsComparisonPage').then(m => ({ default: m.AiToolsComparisonPage })));
const TubeSpannerComparePage = React.lazy(() => import('./components/compare/TubeSpannerComparePage').then(m => ({ default: m.TubeSpannerComparePage })));
const CompareVidIQPage = React.lazy(() => import('./components/compare/CompareVidIQPage').then(m => ({ default: m.CompareVidIQPage })));
const LocalBusinessPage = React.lazy(() => import('./components/solutions/LocalBusinessPage').then(m => ({ default: m.LocalBusinessPage })));
const AgenciesPage = React.lazy(() => import('./components/solutions/AgenciesPage').then(m => ({ default: m.AgenciesPage })));
const HashtagStrategyPage = React.lazy(() => import('./components/use-cases/HashtagStrategyPage').then(m => ({ default: m.HashtagStrategyPage })));
import { SimulationProvider, SimulationPageWrapper } from './components/SimulationPageWrapper';

const SOCIAL_BASE_PATH = '/social';
const LEGACY_SOCIAL_EXEMPT_PREFIXES = ['/sample-explorer', '/trust/', '/share'];

function stripSocialPrefix(pathname: string): string {
  if (pathname === SOCIAL_BASE_PATH || pathname === `${SOCIAL_BASE_PATH}/`) return '/';
  if (pathname.startsWith(`${SOCIAL_BASE_PATH}/`)) {
    return pathname.slice(SOCIAL_BASE_PATH.length);
  }
  return pathname;
}

function toSocialPath(pathname: string): string {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (normalized === '/') return SOCIAL_BASE_PATH;
  if (normalized === SOCIAL_BASE_PATH || normalized.startsWith(`${SOCIAL_BASE_PATH}/`)) return normalized;
  return `${SOCIAL_BASE_PATH}${normalized}`;
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#1a1a1a] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-[14px] text-[#666666]">Loading...</p>
      </div>
    </div>
  );
}

import { useTheme } from 'next-themes';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();

  // Global Theme State via next-themes
  const { setTheme, resolvedTheme } = useTheme();
  // We use resolvedTheme to determine if it's currently dark, which handles 'system' preference too
  const isDarkMode = resolvedTheme === 'dark';
  
  // Wrapper for setIsDarkMode to be compatible with existing props interface
  const setIsDarkMode = React.useCallback((isDark: boolean) => {
    setTheme(isDark ? 'dark' : 'light');
  }, [setTheme]);

  const [settingsSection, setSettingsSection] = React.useState<string>('overview');
  const [copilotPrefilledQuestion, setCopilotPrefilledQuestion] = React.useState<string | null>(null);
  const [intelligenceTab, setIntelligenceTab] = React.useState<'overview' | 'reports'>('overview');
  const [autoOpenAddAccountModal, setAutoOpenAddAccountModal] = React.useState(false);

  React.useEffect(() => {
    const pathWithoutLanguage = stripLanguagePrefix(location.pathname);
    const urlLanguage = getLanguageFromPathname(location.pathname);

    if (pathWithoutLanguage === SOCIAL_BASE_PATH || pathWithoutLanguage === `${SOCIAL_BASE_PATH}/`) {
      const localizedHome = urlLanguage ? addLanguagePrefix('/', urlLanguage) : '/';
      const target = `${localizedHome}${location.search}${location.hash}`;
      const current = `${location.pathname}${location.search}${location.hash}`;
      if (target !== current) {
        navigate(target, { replace: true });
      }
      return;
    }

    const normalizedPublicPath = stripSocialPrefix(pathWithoutLanguage);
    if (normalizedPublicPath === '/compare' || normalizedPublicPath.startsWith('/compare/')) {
      const vsPath = normalizedPublicPath.replace(/^\/compare(?=\/|$)/, '/vs');
      const socialPath = toSocialPath(vsPath);
      const localizedPath = urlLanguage ? addLanguagePrefix(socialPath, urlLanguage) : socialPath;
      const target = `${localizedPath}${location.search}${location.hash}`;
      const current = `${location.pathname}${location.search}${location.hash}`;
      if (target !== current) {
        navigate(target, { replace: true });
      }
      return;
    }

    if (pathWithoutLanguage === '/' || pathWithoutLanguage.startsWith(`${SOCIAL_BASE_PATH}/`)) return;

    if (LEGACY_SOCIAL_EXEMPT_PREFIXES.some(prefix => pathWithoutLanguage.startsWith(prefix))) {
      return;
    }

    const socialPath = toSocialPath(pathWithoutLanguage);
    const localizedPath = urlLanguage ? addLanguagePrefix(socialPath, urlLanguage) : socialPath;
    const target = `${localizedPath}${location.search}${location.hash}`;
    const current = `${location.pathname}${location.search}${location.hash}`;
    if (target !== current) {
      navigate(target, { replace: true });
    }
  }, [location.hash, location.pathname, location.search, navigate]);

  // Determine current page from location path
  const getCurrentPage = React.useCallback(() => {
    const path = stripSocialPrefix(stripLanguagePrefix(location.pathname)).substring(1) || 'landing';
    return path;
  }, [location.pathname]);

  // Enhanced navigation handler that supports prefilled questions for Copilot
  const handleNavigateWithQuestion = React.useCallback((page: string, question?: string) => {
    const normalizedPage = page.trim().toLowerCase();

    // Keep "Start Free / Sign up" CTAs on the current page.
    if (
      normalizedPage === 'auth' ||
      normalizedPage.startsWith('auth?') ||
      normalizedPage === '/auth' ||
      normalizedPage.startsWith('/auth?') ||
      normalizedPage === '/social/auth' ||
      normalizedPage.startsWith('/social/auth?') ||
      normalizedPage.includes('signup')
    ) {
      return;
    }

    if (page === 'settings-add-account') {
      navigate('/social/simulation/settings');
      setSettingsSection('connected');
      setAutoOpenAddAccountModal(true);
      return;
    }

    if (page === 'settings-connected') {
      navigate('/social/simulation/settings');
      setSettingsSection('connected');
      setAutoOpenAddAccountModal(false);
      return;
    }

    // Reset auto open flag for other navigations
    setAutoOpenAddAccountModal(false);

    // Determine if we are currently in simulation mode
    const normalizedCurrentPath = stripSocialPrefix(stripLanguagePrefix(location.pathname));
    const isSimulation = normalizedCurrentPath.startsWith('/simulation');
    let route = page;

    if (page === 'trends') {
      route = '/simulation/trends';
    } else if (page === 'trends-hub') {
      route = '/trends';
    } else if (isSimulation) {
      // Map navigation to simulation routes where available
      if (page === 'home') {
        route = '/simulation';
      } else if (page === 'dashboard') {
        route = '/simulation/dashboard';
      } else if (page === 'hashtag') {
        route = '/simulation/trends';
      } else if (page === 'studio') {
        route = '/simulation/studio';
      } else if (page === 'copilot') {
        route = '/simulation/copilot';
      } else if (page === 'intelligence') {
        route = '/simulation/intelligence';
      } else if (page === 'library') {
        route = '/simulation/library';
      } else if (page === 'scheduling') {
        route = '/simulation/scheduling';
      } else if (page === 'settings') {
        route = '/simulation/settings';
      } else if (page === 'weekly-report-detail') {
        route = '/simulation/weekly-report-detail';
      } else if (page === 'reports-archive') {
        route = '/simulation/reports-archive';
      } else {
        // Fallback for pages without simulation version
        route = page === 'landing' ? '/' : (page.startsWith('/') ? page : `/${page}`);
      }
    } else {
      // Standard routing
      route = page === 'landing' ? '/' : (page.startsWith('/') ? page : `/${page}`);
    }

    if (route !== '/' && !route.startsWith('http://') && !route.startsWith('https://')) {
      route = toSocialPath(route);
    }

    const localizedRoute = (() => {
      // Only localize internal routes.
      if (route.startsWith('http://') || route.startsWith('https://')) return route;
      try {
        const url = new URL(route, window.location.origin);
        const localizedPathname = isPublicPage(url.pathname) ? addLanguagePrefix(url.pathname, language) : url.pathname;
        return `${localizedPathname}${url.search}${url.hash}`;
      } catch {
        return route;
      }
    })();

    navigate(localizedRoute);
    
    if (page === 'copilot' && question) {
      setCopilotPrefilledQuestion(question);
    } else if (page !== 'copilot') {
      // Only clear prefilled question when navigating away from copilot
      setCopilotPrefilledQuestion(null);
    }
  }, [language, location.pathname, navigate]);

  const commonProps = {
    onNavigate: handleNavigateWithQuestion,
    currentPage: getCurrentPage(),
    onPageChange: (page: string) => handleNavigateWithQuestion(page)
  };

  const routesLocation = React.useMemo(() => {
    const pathname = stripSocialPrefix(stripLanguagePrefix(location.pathname));
    return pathname === location.pathname ? location : { ...location, pathname };
  }, [location]);

  return (
    <ErrorBoundary>
      <SimulationProvider>
        <React.Suspense fallback={<LoadingFallback />}>
          <Routes location={routesLocation}>
          {/* Landing & Public Pages */}
          <Route path="/" element={
            <>
              <LandingPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/signals" element={
            <>
              <SignalsPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/how-it-works" element={
            <>
              <HowItWorksPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/features" element={
            <>
              <FeaturesPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/pricing" element={
            <>
              <PricingPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/blog" element={
            <>
              <BlogPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/trends" element={
            <>
              <TrendsPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/tools" element={
            <>
              <ToolsPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/tools/category/:vertical" element={
            <>
              <ToolsPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/tools/category/:vertical/:toolSlug" element={
            <>
              <ToolsPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/tools/:toolSlug" element={
            <>
              <ToolsPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/blog/category/:vertical" element={
            <>
              <BlogPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/guides" element={
            <>
              <GuidesPage 
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/guides/:slug" element={
            <>
              <GuideDetailPage
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/glossary" element={
            <>
              <GlossaryPage
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/glossary/fyp" element={
            <>
              <FypGlossaryPage
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/blog-post" element={
            <>
              <BlogPostPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/faq" element={
            <>
              <FAQPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/contact" element={
            <>
              <ContactPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/share/:reportId" element={
            <>
              <ShareReportPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/links" element={
            <>
              <LinksPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/about" element={
            <>
              <AboutPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/press" element={
            <>
              <PressPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/commerce" element={
            <>
              <CommerceComingSoonPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/ads" element={
            <>
              <AdsComingSoonPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/methodology" element={
            <>
              <MethodologyPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/use-cases/content-diagnosis" element={
            <>
              <ContentDiagnosisPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/solutions/ecommerce" element={
            <>
              <EcommerceSellersPage 
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/solutions/content-creators" element={
            <>
              <ContentCreatorsPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/solutions/agencies" element={
            <>
              <AgenciesPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/vs/tubespanner" element={
            <>
              <TubeSpannerComparePage
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/compare/tubespanner" element={
            <>
              <TubeSpannerComparePage 
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/use-cases/trend-prediction" element={
            <>
              <TrendPredictionPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/use-cases/posting-schedule" element={
            <>
              <PostingSchedulePage 
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/use-cases/script-generation" element={
            <>
              <ScriptGenerationPage 
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/use-cases/hashtag-strategy" element={
            <>
              <HashtagStrategyPage 
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/solutions/brands" element={
            <>
              <BrandsPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/vs/all" element={
            <>
              <AiToolsComparisonPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/compare/all" element={
            <>
              <AiToolsComparisonPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/vs/ai-tools-comparison" element={
            <>
              <AiToolsComparisonPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/compare/ai-tools-comparison" element={
            <>
              <AiToolsComparisonPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/solutions/local-business" element={
            <>
              <LocalBusinessPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/vs/owlseer-vs-vidiq" element={
            <>
              <CompareVidIQPage
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/compare/owlseer-vs-vidiq" element={
            <>
              <CompareVidIQPage 
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          
          {/* Chinese versions of public pages */}
          <Route path="/zh" element={
            <>
              <LandingPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/signals" element={
            <>
              <SignalsPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/how-it-works" element={
            <>
              <HowItWorksPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/features" element={
            <>
              <FeaturesPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/pricing" element={
            <>
              <PricingPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/blog" element={
            <>
              <BlogPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/tools" element={
            <>
              <ToolsPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/tools/category/:vertical" element={
            <>
              <ToolsPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/tools/category/:vertical/:toolSlug" element={
            <>
              <ToolsPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/tools/:toolSlug" element={
            <>
              <ToolsPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/blog/category/:vertical" element={
            <>
              <BlogPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/guides" element={
            <>
              <GuidesPage 
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/guides/:slug" element={
            <>
              <GuideDetailPage
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/glossary" element={
            <>
              <GlossaryPage
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/glossary/fyp" element={
            <>
              <FypGlossaryPage
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/blog-post" element={
            <>
              <BlogPostPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/faq" element={
            <>
              <FAQPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/contact" element={
            <>
              <ContactPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/share/:reportId" element={
            <>
              <ShareReportPage
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/methodology" element={
            <>
              <MethodologyPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/use-cases/content-diagnosis" element={
            <>
              <ContentDiagnosisPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/use-cases/trend-prediction" element={
            <>
              <TrendPredictionPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/use-cases/posting-schedule" element={
            <>
              <PostingSchedulePage 
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/use-cases/script-generation" element={
            <>
              <ScriptGenerationPage 
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/use-cases/hashtag-strategy" element={
            <>
              <HashtagStrategyPage 
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/solutions/brands" element={
            <>
              <BrandsPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/compare/all" element={
            <>
              <AiToolsComparisonPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/compare/ai-tools-comparison" element={
            <>
              <AiToolsComparisonPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/solutions/ecommerce" element={
            <>
              <EcommerceSellersPage 
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/solutions/content-creators" element={
            <>
              <ContentCreatorsPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/solutions/agencies" element={
            <>
              <AgenciesPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/compare/tubespanner" element={
            <>
              <TubeSpannerComparePage 
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/solutions/local-business" element={
            <>
              <LocalBusinessPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/compare/owlseer-vs-vidiq" element={
            <>
              <CompareVidIQPage 
                onNavigate={handleNavigateWithQuestion}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/privacy" element={
            <>
              <LegalPage 
                {...commonProps}
                activeSection="privacy"
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/terms" element={
            <>
              <LegalPage 
                {...commonProps}
                activeSection="terms"
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/security" element={
            <>
              <LegalPage 
                {...commonProps}
                activeSection="security"
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/zh/cookies" element={
            <>
              <LegalPage 
                {...commonProps}
                activeSection="cookies"
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />

          {/* Legal Pages */}
          <Route path="/privacy" element={
            <>
              <LegalPage 
                {...commonProps}
                activeSection="privacy"
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/terms" element={
            <>
              <LegalPage 
                {...commonProps}
                activeSection="terms"
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/security" element={
            <>
              <LegalPage 
                {...commonProps}
                activeSection="security"
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />
          <Route path="/cookies" element={
            <>
              <LegalPage 
                {...commonProps}
                activeSection="cookies"
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </>
          } />

          {/* Legacy App Entry Points -> Simulation */}
          <Route path="/auth" element={<Navigate to="/social/simulation" replace />} />
          <Route path="/account-selection" element={<Navigate to="/social/simulation" replace />} />
          <Route path="/account-connection" element={<Navigate to="/social/simulation" replace />} />
          <Route path="/content-profile" element={<Navigate to="/social/simulation" replace />} />
          <Route path="/creator-struggles" element={<Navigate to="/social/simulation" replace />} />
          <Route path="/goal-setting" element={<Navigate to="/social/simulation" replace />} />
          <Route path="/ai-processing" element={<Navigate to="/social/simulation" replace />} />
          <Route path="/insight-checkpoint" element={<Navigate to="/social/simulation" replace />} />
          <Route path="/home" element={<Navigate to="/social/simulation" replace />} />
          <Route path="/sidebar-demo" element={<Navigate to="/social/simulation/dashboard" replace />} />
          <Route path="/copilot" element={<Navigate to="/social/simulation/copilot" replace />} />
          <Route path="/simulation" element={
              <SimulationPageWrapper onNavigate={handleNavigateWithQuestion} scenario="dashboard">
                  <Dashboard onNavigate={handleNavigateWithQuestion} />
                </SimulationPageWrapper>
          } />
          <Route path="/simulation/dashboard" element={
              <SimulationPageWrapper onNavigate={handleNavigateWithQuestion} scenario="dashboard">
                  <DashboardMonitor onNavigate={handleNavigateWithQuestion} isSimulation={true} />
                </SimulationPageWrapper>
          } />
          <Route path="/simulation/trends" element={
              <SimulationPageWrapper onNavigate={handleNavigateWithQuestion} scenario="trend-radar">
                  <HashtagRadar onNavigate={handleNavigateWithQuestion} isSimulation={true} />
                </SimulationPageWrapper>
          } />
          <Route path="/simulation/studio" element={
              <SimulationPageWrapper onNavigate={handleNavigateWithQuestion} scenario="content-studio">
                  <ContentStudio onNavigate={handleNavigateWithQuestion} isSimulation={true} />
                </SimulationPageWrapper>
          } />
          <Route path="/simulation/copilot" element={
              <SimulationPageWrapper onNavigate={handleNavigateWithQuestion}>
                  <Copilot onNavigate={handleNavigateWithQuestion} prefilledQuestion={copilotPrefilledQuestion} />
                </SimulationPageWrapper>
          } />
          <Route path="/simulation/intelligence" element={
              <SimulationPageWrapper onNavigate={handleNavigateWithQuestion}>
                  <AccountIntelligence 
                    onNavigate={handleNavigateWithQuestion} 
                    initialTab={intelligenceTab}
                  />
                </SimulationPageWrapper>
          } />
          <Route path="/simulation/library" element={
              <SimulationPageWrapper onNavigate={handleNavigateWithQuestion}>
                  <ContentLibrary onNavigate={handleNavigateWithQuestion} />
                </SimulationPageWrapper>
          } />
          <Route path="/simulation/scheduling" element={
              <SimulationPageWrapper onNavigate={handleNavigateWithQuestion}>
                  <SchedulingSlotsNew onNavigate={handleNavigateWithQuestion} />
                </SimulationPageWrapper>
          } />
          <Route path="/simulation/settings" element={
              <SimulationPageWrapper onNavigate={handleNavigateWithQuestion}>
                  <SettingsLayout 
                    onNavigate={handleNavigateWithQuestion}
                    activeSection={settingsSection}
                    onSectionChange={setSettingsSection}
                  >
                    {settingsSection === 'overview' && <SettingsOverview onNavigateToSection={setSettingsSection} />}
                    {settingsSection === 'account' && <AccountSettings />}
                    {settingsSection === 'connected' && <ConnectedAccountsSettings autoOpenAddModal={autoOpenAddAccountModal} />}
                    {settingsSection === 'billing' && <BillingUsageSettings />}
                    {settingsSection === 'ai' && <AIPreferencesSettings />}
                    {settingsSection === 'content' && <ContentAutomationSettings />}
                    {settingsSection === 'notifications' && <NotificationsSettings />}
                    {settingsSection === 'security' && <SecurityPrivacySettings />}
                    {settingsSection === 'team' && <TeamSettings />}
                  </SettingsLayout>
                </SimulationPageWrapper>
          } />
          <Route path="/simulation/weekly-report-detail" element={
              <SimulationPageWrapper onNavigate={handleNavigateWithQuestion}>
                  <WeeklyReportDetail 
                    onNavigate={handleNavigateWithQuestion}
                    onBackToReports={() => {
                      setIntelligenceTab('reports');
                      handleNavigateWithQuestion('intelligence');
                    }} 
                  />
                </SimulationPageWrapper>
          } />
          <Route path="/simulation/reports-archive" element={
              <SimulationPageWrapper onNavigate={handleNavigateWithQuestion}>
                  <ReportsArchive onNavigate={handleNavigateWithQuestion} />
                </SimulationPageWrapper>
          } />
          <Route path="/dashboard" element={<Navigate to="/social/simulation/dashboard" replace />} />
          <Route path="/monitor" element={<Navigate to="/social/simulation/dashboard" replace />} />
          <Route path="/intelligence" element={<Navigate to="/social/simulation/intelligence" replace />} />
          <Route path="/library" element={<Navigate to="/social/simulation/library" replace />} />
          <Route path="/hashtag" element={<Navigate to="/social/simulation/trends" replace />} />
          <Route path="/trend-radar" element={<Navigate to="/social/simulation/trends" replace />} />
          <Route path="/scheduling" element={<Navigate to="/social/simulation/scheduling" replace />} />
          <Route path="/studio" element={<Navigate to="/social/simulation/studio" replace />} />
          <Route path="/studio-demo" element={<Navigate to="/social/simulation/studio" replace />} />
          <Route path="/settings" element={<Navigate to="/social/simulation/settings" replace />} />
          <Route path="/weekly-report" element={<Navigate to="/social/simulation/intelligence" replace />} />
          <Route path="/reports-archive" element={<Navigate to="/social/simulation/reports-archive" replace />} />
          <Route path="/weekly-report-detail" element={<Navigate to="/social/simulation/weekly-report-detail" replace />} />

          {/* Sample Explorer URL aliases */}
          <Route path="/sample-explorer" element={<Navigate to="/social/simulation" replace />} />
          <Route path="/sample-explorer/intelligence" element={<Navigate to="/social/simulation/intelligence#this-weeks-brief" replace />} />
          <Route path="/sample-explorer/dashboard" element={<Navigate to="/social/simulation/dashboard" replace />} />
          <Route path="/sample-explorer/copilot" element={<Navigate to="/social/simulation/copilot" replace />} />
          <Route path="/sample-explorer/content-library" element={<Navigate to="/social/simulation/library" replace />} />
          <Route path="/sample-explorer/scheduling" element={<Navigate to="/social/simulation/scheduling" replace />} />
          <Route path="/sample-explorer/trend-radar" element={<Navigate to="/social/simulation/trends" replace />} />
          <Route path="/sample-explorer/weekly-report" element={<Navigate to="/social/simulation/intelligence" replace />} />
          <Route path="/sample-explorer/script-studio" element={<Navigate to="/social/simulation/studio" replace />} />
          <Route path="/zh/sample-explorer" element={<Navigate to="/zh/social/simulation" replace />} />
          <Route path="/zh/sample-explorer/intelligence" element={<Navigate to="/zh/social/simulation/intelligence#this-weeks-brief" replace />} />
          <Route path="/zh/sample-explorer/dashboard" element={<Navigate to="/zh/social/simulation/dashboard" replace />} />
          <Route path="/zh/sample-explorer/copilot" element={<Navigate to="/zh/social/simulation/copilot" replace />} />
          <Route path="/zh/sample-explorer/content-library" element={<Navigate to="/zh/social/simulation/library" replace />} />
          <Route path="/zh/sample-explorer/scheduling" element={<Navigate to="/zh/social/simulation/scheduling" replace />} />
          <Route path="/zh/sample-explorer/trend-radar" element={<Navigate to="/zh/social/simulation/trends" replace />} />
          <Route path="/zh/sample-explorer/weekly-report" element={<Navigate to="/zh/social/simulation/intelligence" replace />} />
          <Route path="/zh/sample-explorer/script-studio" element={<Navigate to="/zh/social/simulation/studio" replace />} />
          <Route path="/trust/data-security" element={<Navigate to="/social/security" replace />} />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </React.Suspense>
      </SimulationProvider>
    </ErrorBoundary>
  );
}

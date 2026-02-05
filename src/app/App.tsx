import React from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { RoutePreloader } from './components/RoutePreloader';
import { ErrorBoundary } from './components/ErrorBoundary';
import { IPhoneWrapper } from './components/iphone-simulator';

// Lazy load all page components for better performance and code splitting
const AuthPage = React.lazy(() => import('./components/AuthPage').then(m => ({ default: m.AuthPage })));
const ContentProfile = React.lazy(() => import('./components/ContentProfile').then(m => ({ default: m.ContentProfile })));
const AccountConnection = React.lazy(() => import('./components/AccountConnection').then(m => ({ default: m.AccountConnection })));
const CreatorStruggles = React.lazy(() => import('./components/CreatorStruggles').then(m => ({ default: m.CreatorStruggles })));
const GoalSetting = React.lazy(() => import('./components/GoalSetting').then(m => ({ default: m.GoalSetting })));
const AIProcessing = React.lazy(() => import('./components/AIProcessing').then(m => ({ default: m.AIProcessing })));
const InsightCheckpoint = React.lazy(() => import('./components/InsightCheckpoint').then(m => ({ default: m.InsightCheckpoint })));
const DevTools = React.lazy(() => import('./components/DevTools').then(m => ({ default: m.DevTools })));
const SidebarDemo = React.lazy(() => import('./components/SidebarDemo').then(m => ({ default: m.SidebarDemo })));
const Copilot = React.lazy(() => import('./components/Copilot').then(m => ({ default: m.Copilot })));
const DashboardMonitor = React.lazy(() => import('./components/DashboardMonitor').then(m => ({ default: m.DashboardMonitor })));
const Dashboard = React.lazy(() => import('./components/Dashboard').then(m => ({ default: m.Dashboard })));
const AccountIntelligence = React.lazy(() => import('./components/AccountIntelligence').then(m => ({ default: m.AccountIntelligence })));
const ContentLibrary = React.lazy(() => import('./components/ContentLibrary').then(m => ({ default: m.ContentLibrary })));
const HashtagRadar = React.lazy(() => import('./components/HashtagRadar').then(m => ({ default: m.HashtagRadar })));
const SchedulingSlotsNew = React.lazy(() => import('./components/SchedulingSlotsNew').then(m => ({ default: m.SchedulingSlotsNew })));
const ContentStudio = React.lazy(() => import('./components/ContentStudioNew').then(m => ({ default: m.ContentStudio })));
const ContentStudioDemo = React.lazy(() => import('./components/ContentStudioDemo').then(m => ({ default: m.ContentStudioDemo })));
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
const WeeklyReportDemo = React.lazy(() => import('./components/WeeklyReportDemo').then(m => ({ default: m.WeeklyReportDemo })));
const ReportsArchive = React.lazy(() => import('./components/ReportsArchive').then(m => ({ default: m.ReportsArchive })));
const WeeklyReportDetail = React.lazy(() => import('./components/WeeklyReportDetail').then(m => ({ default: m.WeeklyReportDetail })));
const AccountSelection = React.lazy(() => import('./components/AccountSelection').then(m => ({ default: m.AccountSelection })));
const LandingPage = React.lazy(() => import('./components/LandingPage').then(m => ({ default: m.LandingPage })));
const HowItWorksPage = React.lazy(() => import('./components/HowItWorksPage').then(m => ({ default: m.HowItWorksPage })));
const FeaturesPage = React.lazy(() => import('./components/FeaturesPage').then(m => ({ default: m.FeaturesPage })));
const PricingPage = React.lazy(() => import('./components/PricingPage').then(m => ({ default: m.PricingPage })));
const BlogPage = React.lazy(() => import('./components/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogPostPage = React.lazy(() => import('./components/BlogPostPage').then(m => ({ default: m.BlogPostPage })));
const FAQPage = React.lazy(() => import('./components/FAQPage').then(m => ({ default: m.FAQPage })));
const ContactPage = React.lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const LegalPage = React.lazy(() => import('./components/LegalPage').then(m => ({ default: m.LegalPage })));
import { SimulationProvider, SimulationPageWrapper } from './components/SimulationPageWrapper';

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

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userRole, setUserRole] = React.useState<'creator' | 'brand' | null>(null);

  // Global Theme State
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  // Apply dark mode class globally
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const [userNiches, setUserNiches] = React.useState<string[]>([]);
  const [userLocation, setUserLocation] = React.useState<string | null>(null);
  const [userStruggles, setUserStruggles] = React.useState<string[]>([]);
  const [settingsSection, setSettingsSection] = React.useState<string>('overview');
  const [copilotPrefilledQuestion, setCopilotPrefilledQuestion] = React.useState<string | null>(null);
  const [intelligenceTab, setIntelligenceTab] = React.useState<'overview' | 'reports'>('overview');
  const [autoOpenAddAccountModal, setAutoOpenAddAccountModal] = React.useState(false);

  // Account Management State
  const [currentAccountId, setCurrentAccountId] = React.useState<string>('1');
  const [tiktokAccounts] = React.useState([
    {
      id: '1',
      username: 'techreviewsarah',
      displayName: 'Sarah Chen',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      level: 5 as const,
      followers: 125000,
      isConnected: true,
    },
    {
      id: '2',
      username: 'sarahtech',
      displayName: 'Sarah | Tech Tips',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tech',
      level: 3 as const,
      followers: 45000,
      isConnected: true,
    },
    {
      id: '3',
      username: 'dailygadgets',
      displayName: 'Daily Gadgets',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gadgets',
      level: 2 as const,
      followers: 12000,
      isConnected: true,
    },
  ]);

  const currentAccount = tiktokAccounts.find(acc => acc.id === currentAccountId) || tiktokAccounts[0];

  const handleAccountSwitch = React.useCallback((accountId: string) => {
    setCurrentAccountId(accountId);
  }, []);

  const handleManageAccounts = React.useCallback(() => {
    navigate('/settings');
    setSettingsSection('connected');
  }, [navigate]);

  // Determine current page from location path
  const getCurrentPage = React.useCallback(() => {
    const path = location.pathname.substring(1) || 'landing';
    return path;
  }, [location]);

  // Enhanced navigation handler that supports prefilled questions for Copilot
  const handleNavigateWithQuestion = React.useCallback((page: string, question?: string) => {
    if (page === 'settings-add-account') {
      navigate('/settings');
      setSettingsSection('connected');
      setAutoOpenAddAccountModal(true);
      return;
    }

    if (page === 'settings-connected') {
      navigate('/settings');
      setSettingsSection('connected');
      setAutoOpenAddAccountModal(false);
      return;
    }

    // Reset auto open flag for other navigations
    setAutoOpenAddAccountModal(false);

    // Determine if we are currently in simulation mode
    const isSimulation = location.pathname.startsWith('/simulation');
    let route = page;

    if (isSimulation) {
      // Map navigation to simulation routes where available
      if (page === 'home') {
        route = '/simulation';
      } else if (page === 'dashboard') {
        route = '/simulation/dashboard';
      } else if (page === 'hashtag' || page === 'trends') {
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
        if (page === 'landing') route = '/';
        else if (!page.startsWith('/')) route = '/' + page;
      }
    } else {
      // Standard routing
      if (page === 'landing') route = '/';
      else if (!page.startsWith('/')) route = '/' + page;
    }

    navigate(route);
    
    if (page === 'copilot' && question) {
      setCopilotPrefilledQuestion(question);
    } else if (page !== 'copilot') {
      // Only clear prefilled question when navigating away from copilot
      setCopilotPrefilledQuestion(null);
    }
  }, [navigate, location.pathname]);

  const commonProps = {
    onNavigate: handleNavigateWithQuestion,
    // Add current page prop for DevTools
    currentPage: getCurrentPage(),
    onPageChange: (page: string) => handleNavigateWithQuestion(page)
  };

  return (
    <ErrorBoundary>
      <SimulationProvider>
        <React.Suspense fallback={<LoadingFallback />}>
          <Routes>
          {/* Landing & Public Pages */}
          <Route path="/" element={
            <>
              <LandingPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="landing" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/how-it-works" element={
            <>
              <HowItWorksPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="how-it-works" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/features" element={
            <>
              <FeaturesPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="features" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/pricing" element={
            <>
              <PricingPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="pricing" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/blog" element={
            <>
              <BlogPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="blog" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/blog-post" element={
            <>
              <BlogPostPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="blog-post" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/faq" element={
            <>
              <FAQPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="faq" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/contact" element={
            <>
              <ContactPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="contact" onPageChange={handleNavigateWithQuestion} />
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
              <DevTools currentPage="landing" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/zh/how-it-works" element={
            <>
              <HowItWorksPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="how-it-works" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/zh/features" element={
            <>
              <FeaturesPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="features" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/zh/pricing" element={
            <>
              <PricingPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="pricing" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/zh/blog" element={
            <>
              <BlogPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="blog" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/zh/blog-post" element={
            <>
              <BlogPostPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="blog-post" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/zh/faq" element={
            <>
              <FAQPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="faq" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/zh/contact" element={
            <>
              <ContactPage 
                {...commonProps}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <DevTools currentPage="contact" onPageChange={handleNavigateWithQuestion} />
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
              <DevTools currentPage="privacy" onPageChange={handleNavigateWithQuestion} />
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
              <DevTools currentPage="terms" onPageChange={handleNavigateWithQuestion} />
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
              <DevTools currentPage="security" onPageChange={handleNavigateWithQuestion} />
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
              <DevTools currentPage="cookies" onPageChange={handleNavigateWithQuestion} />
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
              <DevTools currentPage="privacy" onPageChange={handleNavigateWithQuestion} />
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
              <DevTools currentPage="terms" onPageChange={handleNavigateWithQuestion} />
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
              <DevTools currentPage="security" onPageChange={handleNavigateWithQuestion} />
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
              <DevTools currentPage="cookies" onPageChange={handleNavigateWithQuestion} />
            </>
          } />

          {/* Onboarding Flow */}
          <Route path="/auth" element={
            <>
              <IPhoneWrapper>
                <AuthPage onContinue={() => navigate('/account-selection')} />
              </IPhoneWrapper>
              <DevTools currentPage="auth" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/account-selection" element={
            <>
              <IPhoneWrapper>
                <AccountSelection 
                  onContinue={() => navigate('/home')}
                  onBack={() => navigate('/auth')}
                />
              </IPhoneWrapper>
              <DevTools currentPage="account-selection" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/account-connection" element={
            <>
              <IPhoneWrapper>
                <AccountConnection 
                  onContinue={() => navigate('/content-profile')}
                  onBack={() => navigate('/auth')}
                />
              </IPhoneWrapper>
              <DevTools currentPage="account-connection" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/content-profile" element={
            <>
              <IPhoneWrapper>
                <ContentProfile 
                  onContinue={(data: any) => {
                    setUserRole(data.identity);
                    setUserNiches(data.niches);
                    setUserLocation(data.location);
                    navigate('/creator-struggles');
                  }} 
                  onBack={() => navigate('/account-connection')}
                />
              </IPhoneWrapper>
              <DevTools currentPage="content-profile" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/creator-struggles" element={
            <>
              <IPhoneWrapper>
                <CreatorStruggles 
                  onContinue={(struggles) => {
                    setUserStruggles(struggles);
                    navigate('/goal-setting');
                  }} 
                  onBack={() => navigate('/content-profile')}
                />
              </IPhoneWrapper>
              <DevTools currentPage="creator-struggles" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/goal-setting" element={
            <>
              <IPhoneWrapper>
                <GoalSetting 
                  onContinue={(goal) => {
                    console.log('Selected goal:', goal);
                    navigate('/ai-processing');
                  }}
                  onBack={() => navigate('/creator-struggles')}
                />
              </IPhoneWrapper>
              <DevTools currentPage="goal-setting" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/ai-processing" element={
            <>
              <IPhoneWrapper>
                <AIProcessing 
                  onComplete={() => navigate('/insight-checkpoint')}
                />
              </IPhoneWrapper>
              <DevTools currentPage="ai-processing" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/insight-checkpoint" element={
            <>
              <IPhoneWrapper>
                <InsightCheckpoint 
                  onContinue={() => navigate('/home')}
                  onBack={() => navigate('/ai-processing')}
                />
              </IPhoneWrapper>
              <DevTools currentPage="insight-checkpoint" onPageChange={handleNavigateWithQuestion} />
            </>
          } />

          {/* App Features */}
          <Route path="/home" element={
            <>
              <RoutePreloader />
              <IPhoneWrapper>
                <Dashboard onNavigate={handleNavigateWithQuestion} />
              </IPhoneWrapper>
              <DevTools currentPage="home" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/sidebar-demo" element={
            <>
              <IPhoneWrapper>
                <SidebarDemo />
              </IPhoneWrapper>
              <DevTools currentPage="sidebar-demo" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/copilot" element={
            <>
              <IPhoneWrapper>
                <Copilot onNavigate={handleNavigateWithQuestion} prefilledQuestion={copilotPrefilledQuestion} />
              </IPhoneWrapper>
              <DevTools currentPage="copilot" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/simulation" element={
            <>
              <IPhoneWrapper>
                <SimulationPageWrapper onNavigate={handleNavigateWithQuestion} scenario="dashboard">
                  <Dashboard onNavigate={handleNavigateWithQuestion} />
                </SimulationPageWrapper>
              </IPhoneWrapper>
              <DevTools currentPage="simulation" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/simulation/dashboard" element={
            <>
              <IPhoneWrapper>
                <SimulationPageWrapper onNavigate={handleNavigateWithQuestion} scenario="dashboard">
                  <DashboardMonitor onNavigate={handleNavigateWithQuestion} isSimulation={true} />
                </SimulationPageWrapper>
              </IPhoneWrapper>
              <DevTools currentPage="simulation-dashboard" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/simulation/trends" element={
            <>
              <IPhoneWrapper>
                <SimulationPageWrapper onNavigate={handleNavigateWithQuestion} scenario="trend-radar">
                  <HashtagRadar onNavigate={handleNavigateWithQuestion} isSimulation={true} />
                </SimulationPageWrapper>
              </IPhoneWrapper>
              <DevTools currentPage="simulation-trends" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/simulation/studio" element={
            <>
              <IPhoneWrapper>
                <SimulationPageWrapper onNavigate={handleNavigateWithQuestion} scenario="content-studio">
                  <ContentStudio onNavigate={handleNavigateWithQuestion} isSimulation={true} />
                </SimulationPageWrapper>
              </IPhoneWrapper>
              <DevTools currentPage="simulation-studio" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/simulation/copilot" element={
            <>
              <IPhoneWrapper>
                <SimulationPageWrapper onNavigate={handleNavigateWithQuestion}>
                  <Copilot onNavigate={handleNavigateWithQuestion} prefilledQuestion={copilotPrefilledQuestion} />
                </SimulationPageWrapper>
              </IPhoneWrapper>
              <DevTools currentPage="simulation-copilot" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/simulation/intelligence" element={
            <>
              <IPhoneWrapper>
                <SimulationPageWrapper onNavigate={handleNavigateWithQuestion}>
                  <AccountIntelligence 
                    onNavigate={handleNavigateWithQuestion} 
                    initialTab={intelligenceTab}
                  />
                </SimulationPageWrapper>
              </IPhoneWrapper>
              <DevTools currentPage="simulation-intelligence" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/simulation/library" element={
            <>
              <IPhoneWrapper>
                <SimulationPageWrapper onNavigate={handleNavigateWithQuestion}>
                  <ContentLibrary onNavigate={handleNavigateWithQuestion} />
                </SimulationPageWrapper>
              </IPhoneWrapper>
              <DevTools currentPage="simulation-library" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/simulation/scheduling" element={
            <>
              <IPhoneWrapper>
                <SimulationPageWrapper onNavigate={handleNavigateWithQuestion}>
                  <SchedulingSlotsNew onNavigate={handleNavigateWithQuestion} />
                </SimulationPageWrapper>
              </IPhoneWrapper>
              <DevTools currentPage="simulation-scheduling" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/simulation/settings" element={
            <>
              <IPhoneWrapper>
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
              </IPhoneWrapper>
              <DevTools currentPage="simulation-settings" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/simulation/weekly-report-detail" element={
            <>
              <IPhoneWrapper>
                <SimulationPageWrapper onNavigate={handleNavigateWithQuestion}>
                  <WeeklyReportDetail 
                    onNavigate={handleNavigateWithQuestion}
                    onBackToReports={() => {
                      setIntelligenceTab('reports');
                      handleNavigateWithQuestion('intelligence');
                    }} 
                  />
                </SimulationPageWrapper>
              </IPhoneWrapper>
              <DevTools currentPage="simulation-weekly-report-detail" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/simulation/reports-archive" element={
            <>
              <IPhoneWrapper>
                <SimulationPageWrapper onNavigate={handleNavigateWithQuestion}>
                  <ReportsArchive onNavigate={handleNavigateWithQuestion} />
                </SimulationPageWrapper>
              </IPhoneWrapper>
              <DevTools currentPage="simulation-reports-archive" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/dashboard" element={
            <>
              <IPhoneWrapper>
                <DashboardMonitor onNavigate={handleNavigateWithQuestion} />
              </IPhoneWrapper>
              <DevTools currentPage="dashboard" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/monitor" element={
            <>
              <IPhoneWrapper>
                <DashboardMonitor onNavigate={handleNavigateWithQuestion} />
              </IPhoneWrapper>
              <DevTools currentPage="monitor" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/intelligence" element={
            <>
              <IPhoneWrapper>
                <AccountIntelligence 
                  onNavigate={handleNavigateWithQuestion} 
                  initialTab={intelligenceTab}
                />
              </IPhoneWrapper>
              <DevTools currentPage="intelligence" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/library" element={
            <>
              <IPhoneWrapper>
                <ContentLibrary onNavigate={handleNavigateWithQuestion} />
              </IPhoneWrapper>
              <DevTools currentPage="library" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/hashtag" element={
            <>
              <IPhoneWrapper>
                <HashtagRadar onNavigate={handleNavigateWithQuestion} />
              </IPhoneWrapper>
              <DevTools currentPage="hashtag" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/trends" element={
            <>
              <IPhoneWrapper>
                <HashtagRadar onNavigate={handleNavigateWithQuestion} />
              </IPhoneWrapper>
              <DevTools currentPage="trends" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/scheduling" element={
            <>
              <IPhoneWrapper>
                <SchedulingSlotsNew onNavigate={handleNavigateWithQuestion} />
              </IPhoneWrapper>
              <DevTools currentPage="scheduling" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/studio" element={
            <>
              <IPhoneWrapper>
                <ContentStudio onNavigate={handleNavigateWithQuestion} />
              </IPhoneWrapper>
              <DevTools currentPage="studio" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/studio-demo" element={
            <>
              <IPhoneWrapper>
                <ContentStudioDemo onNavigate={handleNavigateWithQuestion} />
              </IPhoneWrapper>
              <DevTools currentPage="studio-demo" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/settings" element={
            <>
              <IPhoneWrapper>
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
              </IPhoneWrapper>
              <DevTools currentPage="settings" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/weekly-report" element={
            <>
              <IPhoneWrapper>
                <WeeklyReportDemo onBack={() => navigate('/home')} />
              </IPhoneWrapper>
              <DevTools currentPage="weekly-report" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/reports-archive" element={
            <>
              <IPhoneWrapper>
                <ReportsArchive onNavigate={handleNavigateWithQuestion} />
              </IPhoneWrapper>
              <DevTools currentPage="reports-archive" onPageChange={handleNavigateWithQuestion} />
            </>
          } />
          <Route path="/weekly-report-detail" element={
            <>
              <IPhoneWrapper>
                <WeeklyReportDetail 
                  onNavigate={handleNavigateWithQuestion}
                  onBackToReports={() => {
                    setIntelligenceTab('reports');
                    navigate('/intelligence');
                  }} 
                />
              </IPhoneWrapper>
              <DevTools currentPage="weekly-report-detail" onPageChange={handleNavigateWithQuestion} />
            </>
          } />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </React.Suspense>
      </SimulationProvider>
    </ErrorBoundary>
  );
}
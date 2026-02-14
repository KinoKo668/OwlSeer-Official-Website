import React from 'react';
import {
  LayoutDashboard,
  Sparkles,
  PieChart,
  Hash,
  CalendarRange,
  Clapperboard,
  Settings,
  Activity,
  Zap,
  Library,
  PanelLeftClose,
  PanelLeftOpen,
  User,
  LogOut,
  ChevronsUpDown,
} from 'lucide-react';
import { motion, useMotionValue, useMotionTemplate, animate } from 'motion/react';
import { PricingModal } from './PricingModal';
import { CreditsPurchaseModal } from './CreditsPurchaseModal';
import { ThemeToggle } from './ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  badge?: string;
  onClick?: () => void;
  isExpanded: boolean;
  isCollapsedStable: boolean;
}

function NavItem({ icon, label, isActive = false, badge, onClick, isExpanded, isCollapsedStable }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full relative group"
      style={{ 
        fontSize: '14px', 
        fontWeight: isActive ? '600' : '500',
        padding: '0',
        minHeight: '44px',
      }}
      title={!isExpanded ? label : undefined}
    >
      {/* Background Layer - Full row in expanded, square in collapsed */}
      <div 
        className={`absolute rounded-[10px] transition-colors ${
          isActive && isExpanded
            ? 'bg-[#0F766E]'
            : 'bg-transparent group-hover:bg-sidebar-accent'
        }`}
        style={{ 
          ...(isExpanded 
            ? { 
                // Expanded: full row
                inset: 0 
              } 
            : { 
                // Collapsed: centered square
                left: '0',
                top: '2px',
                width: '40px',
                height: '40px',
              }
          ),
          transitionDuration: '200ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
      
      {/* Content Container */}
      <div 
        className="relative flex items-center"
        style={{ 
          height: '44px',
          paddingLeft: '0',
          paddingRight: '0',
        }}
      >
        {/* Icon Container - Fixed 40px to match available width */}
        <div 
          className="flex items-center justify-center flex-shrink-0 relative"
          style={{ 
            width: '40px',
            minWidth: '40px',
            height: '44px',
          }}
        >
          {/* Icon Background - Only show in collapsed + active state */}
          {isActive && !isExpanded && (
            <div 
              className="absolute w-10 h-10 bg-[#0F766E] rounded-[12px] transition-all"
              style={{
                transitionProperty: 'opacity, transform',
                transitionDuration: '200ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          )}
          
          {/* Icon - Always centered */}
          <span 
            className={`relative z-10 flex items-center justify-center ${
              isActive && !isExpanded
                ? 'text-white'
                : isActive && isExpanded
                  ? 'text-white'
                  : 'text-sidebar-foreground/80 group-hover:text-sidebar-foreground'
            }`}
            style={{
              transition: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {icon}
          </span>
        </div>
        
        {/* Label - Always rendered, animated via opacity */}
        <motion.span 
          className={`text-left whitespace-nowrap flex-1 relative z-10 ${
            isActive && isExpanded ? 'text-white' : 'text-sidebar-foreground/80 group-hover:text-sidebar-foreground'
          }`}
          style={{
            marginLeft: '8px',
            visibility: isCollapsedStable ? 'hidden' : 'visible',
            pointerEvents: isCollapsedStable ? 'none' : 'auto',
            transition: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          initial={false}
          animate={{ 
            opacity: isExpanded ? 1 : 0,
            x: isExpanded ? 0 : -4,
          }}
          transition={{
            opacity: { 
              duration: isExpanded ? 0.14 : 0.12, 
              delay: isExpanded ? 0.06 : 0,
              ease: [0.4, 0, 0.2, 1] 
            },
            x: { 
              duration: isExpanded ? 0.14 : 0.12, 
              delay: isExpanded ? 0.06 : 0,
              ease: [0.4, 0, 0.2, 1] 
            }
          }}
        >
          {label}
        </motion.span>
        
        {/* Badge - Always rendered if exists */}
        {badge && (
          <motion.span
            className={`relative z-10 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap ml-auto mr-2 ${
              isActive
                ? 'bg-white/20 text-white'
                : 'bg-[#0F766E]/10 text-[#0F766E] group-hover:bg-[#0F766E]/15'
            }`}
            initial={false}
            animate={{ 
              opacity: isExpanded ? 1 : 0,
            }}
            style={{
              visibility: isCollapsedStable ? 'hidden' : 'visible',
              pointerEvents: isCollapsedStable ? 'none' : 'auto',
              transition: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            transition={{
              opacity: { 
                duration: isExpanded ? 0.14 : 0.12, 
                delay: isExpanded ? 0.06 : 0,
                ease: [0.4, 0, 0.2, 1] 
              },
            }}
          >
            {badge}
          </motion.span>
        )}
      </div>
    </button>
  );
}

interface NavGroupProps {
  title?: string;
  children: React.ReactNode;
  isExpanded: boolean;
  isCollapsedStable: boolean;
}

function NavGroup({ title, children, isExpanded, isCollapsedStable }: NavGroupProps) {
  return (
    <div className="space-y-1">
      {title && isExpanded && (
        /* Group title - Only in expanded state */
        <motion.div
          className="px-3 py-2 text-muted-foreground uppercase tracking-wider whitespace-nowrap flex items-center"
          style={{ 
            fontSize: '11px', 
            fontWeight: '600',
            height: '36px',
          }}
          initial={false}
          animate={{ 
            opacity: 1,
          }}
          transition={{
            opacity: { 
              duration: 0.14, 
              delay: 0.06,
              ease: [0.4, 0, 0.2, 1] 
            },
          }}
        >
          {title}
        </motion.div>
      )}
      {children}
    </div>
  );
}

interface SidebarProProps {
  activeItem?: string;
  onNavigate?: (page: string) => void;
  className?: string;
}

export function SidebarPro({ 
  activeItem = 'home', 
  onNavigate,
  className = '',
}: SidebarProProps) {
  const [isPricingModalOpen, setIsPricingModalOpen] = React.useState(false);
  const [isCreditsPurchaseModalOpen, setIsCreditsPurchaseModalOpen] = React.useState(false);
  
  // Initialize from localStorage or default to true
  const [isCollapsed, setIsCollapsed] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sidebar_collapsed');
      if (saved !== null) {
        return saved === 'true';
      }
    }
    return true;
  });
  
  const [isCollapsedStable, setIsCollapsedStable] = React.useState(true);
  const [isLogoHovered, setIsLogoHovered] = React.useState(false); // Track logo hover state

  // Save to localStorage whenever state changes
  React.useEffect(() => {
    localStorage.setItem('sidebar_collapsed', String(isCollapsed));
  }, [isCollapsed]);
  
  // Stable timer for animation cleanup
  const stableTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // Manual toggle function
  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Cleanup timer on unmount
  React.useEffect(() => {
    return () => {
      if (stableTimer.current) clearTimeout(stableTimer.current);
    };
  }, []);

  const isExpanded = !isCollapsed;
  
  // MotionValue-driven mask animation
  const fade = useMotionValue(isExpanded ? 8 : 110);
  const mask = useMotionTemplate`linear-gradient(to right, rgba(0,0,0,1) calc(100% - ${fade}px), rgba(0,0,0,0) 100%)`;

  // Drive fade animation when isExpanded changes
  React.useEffect(() => {
    const targetFade = isExpanded ? 8 : 110;
    const duration = isExpanded ? 0.14 : 0.12;
    const delay = isExpanded ? 0.06 : 0;
    
    animate(fade, targetFade, {
      duration,
      delay,
      ease: [0.4, 0, 0.2, 1],
    });
  }, [isExpanded, fade]);

  // Manage isCollapsedStable state
  React.useEffect(() => {
    if (stableTimer.current) {
      clearTimeout(stableTimer.current);
      stableTimer.current = null;
    }

    if (isExpanded) {
      // Immediately clear stable state when expanding
      setIsCollapsedStable(false);
    } else {
      // Delay 220ms after collapse starts to set stable state
      stableTimer.current = setTimeout(() => {
        setIsCollapsedStable(true);
      }, 220);
    }
  }, [isExpanded]);
  
  return (
    <>
      {/* SidebarOuter - Controls viewport width */}
      <motion.div
        className={`hidden md:flex h-screen bg-sidebar border-r border-sidebar-border flex-col ${className}`}
        initial={false}
        animate={{ 
          width: isExpanded ? 260 : 72 
        }}
        transition={{
          width: { 
            duration: 0.2, 
            ease: [0.4, 0, 0.2, 1] 
          }
        }}
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
      >
        {/* SidebarViewport - Clip container (no padding) */}
        <div 
          className="relative w-full h-full" 
          style={{ 
            overflow: 'hidden',
            backgroundColor: 'inherit',
          }}
        >
          {/* Edge Patch - Prevents 1px bleed on right edge */}
          <div 
            className="absolute right-0 top-0 h-full"
            style={{
              width: '1px',
              backgroundColor: 'inherit',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          />

          {/* SidebarContent - Fixed 260px width with internal padding */}
          <motion.div
            className="absolute left-0 top-0 h-full flex flex-col"
            style={{ 
              width: '260px',
              padding: '24px 16px',
              WebkitMaskImage: mask,
              maskImage: mask,
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskSize: '100% 100%',
              maskSize: '100% 100%',
            }}
          >
            {/* Header - Logo + Brand */}
            <div 
              className="mb-8 relative"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center relative">
                  {/* Logo - Hidden when collapsed + hovered */}
                  <motion.div 
                    className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#0F766E] to-[#14B8A6] flex items-center justify-center flex-shrink-0 shadow-sm"
                    initial={false}
                    animate={{
                      opacity: (!isExpanded && isCollapsedStable && isLogoHovered) ? 0 : 1,
                    }}
                    transition={{
                      duration: 0.15,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 2L4 6V14L10 18L16 14V6L10 2Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <circle cx="10" cy="10" r="2" fill="white" />
                      <path
                        d="M10 8V4M10 16V12"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>

                  {/* Expand Button - Replaces Logo when collapsed AND hovered */}
                  {!isExpanded && isCollapsedStable && isLogoHovered && (
                    <motion.button
                      onClick={handleToggleCollapse}
                      className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center rounded-lg bg-inherit hover:bg-sidebar-accent transition-colors border border-sidebar-border shadow-sm"
                      title="Show sidebar"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.15,
                        ease: [0.4, 0, 0.2, 1] 
                      }}
                    >
                      <PanelLeftOpen className="w-5 h-5 text-muted-foreground" />
                    </motion.button>
                  )}

                  {/* Brand Name - Always rendered */}
                  <motion.div 
                    className="flex flex-col ml-3 whitespace-nowrap"
                    initial={false}
                    animate={{ 
                      opacity: isExpanded ? 1 : (isCollapsedStable ? 0 : 0.25),
                      x: isExpanded ? 0 : -6,
                    }}
                    style={{
                      visibility: isCollapsedStable ? 'hidden' : 'visible',
                      pointerEvents: isCollapsedStable ? 'none' : 'auto',
                    }}
                    transition={{
                      opacity: { 
                        duration: isExpanded ? 0.18 : 0.12, 
                        delay: isExpanded ? 0.1 : 0,
                        ease: [0.4, 0, 0.2, 1] 
                      },
                      x: { 
                        duration: isExpanded ? 0.2 : 0.12, 
                        ease: [0.4, 0, 0.2, 1] 
                      }
                    }}
                  >
                    <span
                      className="text-sidebar-foreground leading-none"
                      style={{ fontSize: '16px', fontWeight: '600' }}
                    >
                      OWLSEER
                    </span>
                    <span
                      className="text-muted-foreground leading-none mt-0.5"
                      style={{ fontSize: '11px', fontWeight: '500' }}
                    >
                      Creator Platform
                    </span>
                  </motion.div>
                </div>

                {/* Collapse Button - Always visible when expanded */}
                {isExpanded && (
                  <button
                    onClick={handleToggleCollapse}
                    className="p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors group flex-shrink-0"
                    title="Hide sidebar"
                  >
                    <PanelLeftClose className="w-4 h-4 text-muted-foreground group-hover:text-sidebar-foreground" />
                  </button>
                )}
              </div>
            </div>

            {/* Main Navigation */}
            <nav className="flex-1 overflow-y-auto space-y-2">
              {/* Group 1: Overview */}
              <NavGroup isExpanded={isExpanded} isCollapsedStable={isCollapsedStable}>
                <NavItem
                  icon={<LayoutDashboard size={20} strokeWidth={2} />}
                  label="Overview"
                  isActive={activeItem === 'home'}
                  onClick={() => handleNavigation('home')}
                  isExpanded={isExpanded}
                  isCollapsedStable={isCollapsedStable}
                />
                <NavItem
                  icon={<Sparkles size={20} strokeWidth={2} />}
                  label="AI Chat"
                  badge="AI"
                  isActive={activeItem === 'copilot'}
                  onClick={() => handleNavigation('copilot')}
                  isExpanded={isExpanded}
                  isCollapsedStable={isCollapsedStable}
                />
              </NavGroup>

              {/* Group 2: Strategy & Data */}
              <NavGroup title="Strategy & Data" isExpanded={isExpanded} isCollapsedStable={isCollapsedStable}>
                <NavItem
                  icon={<Activity size={20} strokeWidth={2} />}
                  label="Dashboard"
                  isActive={activeItem === 'dashboard'}
                  onClick={() => handleNavigation('dashboard')}
                  isExpanded={isExpanded}
                  isCollapsedStable={isCollapsedStable}
                />
                <NavItem
                  icon={<PieChart size={20} strokeWidth={2} />}
                  label="Account Insight"
                  isActive={activeItem === 'intelligence'}
                  onClick={() => handleNavigation('intelligence')}
                  isExpanded={isExpanded}
                  isCollapsedStable={isCollapsedStable}
                />
                <NavItem
                  icon={<Library size={20} strokeWidth={2} />}
                  label="Content Library"
                  isActive={activeItem === 'library'}
                  onClick={() => handleNavigation('library')}
                  isExpanded={isExpanded}
                  isCollapsedStable={isCollapsedStable}
                />
                <NavItem
                  icon={<Hash size={20} strokeWidth={2} />}
                  label="Trends"
                  isActive={activeItem === 'hashtag'}
                  onClick={() => handleNavigation('hashtag')}
                  isExpanded={isExpanded}
                  isCollapsedStable={isCollapsedStable}
                />
              </NavGroup>

              {/* Group 3: Operations */}
              <NavGroup title="Operations" isExpanded={isExpanded} isCollapsedStable={isCollapsedStable}>
                <NavItem
                  icon={<CalendarRange size={20} strokeWidth={2} />}
                  label="Scheduling & Slots"
                  isActive={activeItem === 'scheduling'}
                  onClick={() => handleNavigation('scheduling')}
                  isExpanded={isExpanded}
                  isCollapsedStable={isCollapsedStable}
                />
                <NavItem
                  icon={<Clapperboard size={20} strokeWidth={2} />}
                  label="Content Studio"
                  isActive={activeItem === 'studio'}
                  onClick={() => handleNavigation('studio')}
                  isExpanded={isExpanded}
                  isCollapsedStable={isCollapsedStable}
                />
              </NavGroup>
            </nav>

            {/* Footer */}
            <div className="pt-4">
              {/* Growth Plan Card - Always rendered */}
              <motion.div 
                className="mb-3 px-3 py-2.5 rounded-[8px] bg-gradient-to-r from-[#0F766E] to-[#14B8A6]"
                initial={false}
                animate={{ 
                  opacity: isExpanded ? 1 : 0,
                }}
                style={{
                  visibility: isCollapsedStable ? 'hidden' : 'visible',
                  pointerEvents: isCollapsedStable ? 'none' : 'auto',
                }}
                transition={{
                  opacity: { 
                    duration: isExpanded ? 0.14 : 0.08, 
                    delay: isExpanded ? 0.06 : 0,
                    ease: [0.4, 0, 0.2, 1] 
                  },
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></div>
                    <span className="text-white" style={{ fontSize: '12px', fontWeight: '600' }}>
                      Growth Plan
                    </span>
                  </div>
                </div>

                <div className="mb-3 pb-3 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Zap size={14} className="text-white" />
                      <span className="text-white/60" style={{ fontSize: '11px' }}>
                        AI Credits
                      </span>
                    </div>
                    <span className="text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
                      1,250
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <button 
                    onClick={() => setIsCreditsPurchaseModalOpen(true)}
                    className="w-full px-2 py-1.5 rounded-[6px] bg-white text-[#0F766E] hover:bg-white/90 transition-colors flex items-center justify-center gap-1.5 group"
                  >
                    <Zap size={12} className="group-hover:scale-110 transition-transform" />
                    <span style={{ fontSize: '11px', fontWeight: '600' }}>
                      Purchase Credits
                    </span>
                  </button>

                  <button 
                    onClick={() => setIsPricingModalOpen(true)}
                    className="w-full px-2 py-1.5 rounded-[6px] bg-white/10 hover:bg-white/20 transition-colors text-white flex items-center justify-center gap-1.5 group"
                  >
                    <svg 
                      width="12" 
                      height="12" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="group-hover:scale-110 transition-transform"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span style={{ fontSize: '11px', fontWeight: '600' }}>
                      Upgrade to Enterprise
                    </span>
                  </button>
                </div>
              </motion.div>

              {/* Theme Toggle */}
              <div className="mb-1">
                <ThemeToggle isExpanded={isExpanded} isCollapsedStable={isCollapsedStable} />
              </div>

              {/* User Profile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="relative group"
                    title={!isExpanded ? 'Settings' : undefined}
                    style={{ 
                      padding: '0',
                      minHeight: isExpanded ? 'auto' : '44px',
                      height: isExpanded ? 'auto' : '44px',
                      width: isExpanded ? '100%' : '40px',
                    }}
                  >
                    {/* Background Layer - Matches NavItem behavior */}
                    <div 
                      className="absolute rounded-[10px] transition-colors bg-transparent group-hover:bg-sidebar-accent"
                      style={{ 
                        ...(isExpanded 
                          ? { 
                              // Expanded: full row
                              inset: 0 
                            } 
                          : { 
                              // Collapsed: centered square
                              left: '0',
                              top: '2px',
                              width: '40px',
                              height: '40px',
                            }
                        ),
                        transitionDuration: '200ms',
                        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />

                    {/* Content Container */}
                    <div 
                      className={`relative flex items-center ${isExpanded ? 'px-3 py-2.5 gap-3' : 'px-0 py-0 h-full'}`}
                    >
                      <div 
                        className={`flex items-center justify-center flex-shrink-0 relative z-10 ${isExpanded ? '' : 'w-[40px] h-full'}`}
                      >
                        <div 
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6B7280] to-[#4B5563] flex items-center justify-center flex-shrink-0 text-white font-semibold" 
                          style={{ fontSize: '13px' }}
                        >
                          CA
                        </div>
                      </div>

                      <motion.div 
                        className="flex-1 text-left min-w-0 relative z-10"
                        initial={false}
                        animate={{ 
                          opacity: isExpanded ? 1 : (isCollapsedStable ? 0 : 0.25),
                          x: isExpanded ? 0 : -2,
                        }}
                        style={{
                          visibility: isCollapsedStable ? 'hidden' : 'visible',
                          pointerEvents: isCollapsedStable ? 'none' : 'auto',
                          display: isCollapsedStable ? 'none' : 'block',
                          marginLeft: isExpanded ? '0' : '8px',
                        }}
                        transition={{
                          opacity: { 
                            duration: isExpanded ? 0.14 : 0.12, 
                            delay: isExpanded ? 0.06 : 0,
                            ease: [0.4, 0, 0.2, 1] 
                          },
                          x: { 
                            duration: isExpanded ? 0.14 : 0.12, 
                            delay: isExpanded ? 0.06 : 0,
                            ease: [0.4, 0, 0.2, 1] 
                          }
                        }}
                      >
                        <div
                          className="text-sidebar-foreground truncate whitespace-nowrap"
                          style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.2' }}
                        >
                          Creator Admin
                        </div>
                        <div
                          className="text-muted-foreground truncate whitespace-nowrap"
                          style={{ fontSize: '12px', lineHeight: '1.2' }}
                        >
                          admin@creator.ai
                        </div>
                      </motion.div>

                      <motion.div
                        initial={false}
                        animate={{ 
                          opacity: isExpanded ? 1 : (isCollapsedStable ? 0 : 0.25),
                        }}
                        style={{
                          visibility: isCollapsedStable ? 'hidden' : 'visible',
                          pointerEvents: isCollapsedStable ? 'none' : 'auto',
                          display: isCollapsedStable ? 'none' : 'block',
                        }}
                        transition={{
                          opacity: { 
                            duration: isExpanded ? 0.14 : 0.12, 
                            delay: isExpanded ? 0.06 : 0,
                            ease: [0.4, 0, 0.2, 1] 
                          },
                        }}
                        className="relative z-10"
                      >
                        <ChevronsUpDown
                          size={16}
                          className="text-muted-foreground group-hover:text-sidebar-foreground transition-colors flex-shrink-0"
                        />
                      </motion.div>
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56"
                  side={isExpanded ? "right" : "right"}
                  align={isExpanded ? "end" : "start"}
                  sideOffset={isExpanded ? 8 : 12}
                >
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Creator Admin</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        admin@creator.ai
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleNavigation('settings')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleNavigation('settings')}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleNavigation('auth')}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Modals */}
      <PricingModal 
        isOpen={isPricingModalOpen} 
        onClose={() => setIsPricingModalOpen(false)}
        currentPlan="growth"
      />

      <CreditsPurchaseModal 
        isOpen={isCreditsPurchaseModalOpen} 
        onClose={() => setIsCreditsPurchaseModalOpen(false)}
      />
    </>
  );
}

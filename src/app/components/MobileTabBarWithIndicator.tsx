import React from 'react';
import {
  LayoutDashboard,
  Sparkles,
  Video,
  BarChart3,
  User,
} from 'lucide-react';

interface MobileTabBarWithIndicatorProps {
  activeItem?: 'home' | 'copilot' | 'studio' | 'intelligence' | 'me';
  onNavigate?: (page: string) => void;
}

/**
 * MobileTabBarWithIndicator - iOS-style bottom tab bar with integrated home indicator
 * Combines the tab navigation and iOS home indicator in one cohesive component
 */
export function MobileTabBarWithIndicator({ 
  activeItem = 'home', 
  onNavigate 
}: MobileTabBarWithIndicatorProps) {
  const tabs = [
    {
      id: 'home',
      label: 'Home',
      icon: LayoutDashboard,
      page: 'home',
    },
    {
      id: 'copilot',
      label: 'Copilot',
      icon: Sparkles,
      page: 'copilot',
    },
    {
      id: 'studio',
      label: 'Studio',
      icon: Video,
      page: 'studio',
    },
    {
      id: 'intelligence',
      label: 'Intel',
      icon: BarChart3,
      page: 'intelligence',
    },
    {
      id: 'me',
      label: 'Me',
      icon: User,
      page: 'settings',
    },
  ];

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 md:hidden"
      style={{ 
        zIndex: 50,
      }}
    >
      {/* Tab Bar Container with blur background */}
      <div 
        className="bg-white/95 backdrop-blur-xl border-t border-[#e0e0e0]"
        style={{
          boxShadow: '0 -1px 0 0 rgba(0, 0, 0, 0.04)',
        }}
      >
        {/* Tab Items */}
        <div className="flex items-center justify-around px-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeItem === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onNavigate?.(tab.page)}
                className="flex-1 flex flex-col items-center justify-center py-2 px-1 transition-all active:scale-95"
                style={{
                  minHeight: '60px',
                }}
              >
                <div 
                  className={`w-6 h-6 mb-1 transition-all duration-200 ${
                    isActive ? 'text-[#1a1a1a]' : 'text-[#8e8e93]'
                  }`}
                >
                  <Icon 
                    className="w-full h-full" 
                    strokeWidth={isActive ? 2.5 : 2} 
                  />
                </div>
                <span
                  className={`transition-all duration-200 ${
                    isActive ? 'text-[#1a1a1a]' : 'text-[#8e8e93]'
                  }`}
                  style={{
                    fontSize: '10px',
                    fontWeight: isActive ? '600' : '500',
                    lineHeight: '1.2',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  }}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Home Indicator Area - iOS Style */}
      <div 
        className="bg-white flex items-center justify-center"
        style={{
          height: '21px',
          paddingBottom: '8px',
        }}
      >
        <div 
          style={{
            width: '134px',
            height: '5px',
            borderRadius: '100px',
            background: '#000000',
            opacity: 0.3,
          }}
        />
      </div>
    </div>
  );
}

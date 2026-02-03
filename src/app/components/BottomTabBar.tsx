import React from 'react';
import {
  LayoutDashboard,
  Sparkles,
  Video,
  BarChart3,
  User,
} from 'lucide-react';

interface BottomTabBarProps {
  activeItem?: 'home' | 'copilot' | 'studio' | 'intelligence' | 'me' | 'dashboard';
  onNavigate?: (page: string) => void;
}

export function BottomTabBar({ activeItem = 'home', onNavigate }: BottomTabBarProps) {
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
      className="md:hidden absolute left-0 right-0 bg-white border-t border-[#e0e0e0]" 
      style={{ 
        bottom: '21px', // Space for Home Indicator
        zIndex: 40, // Above content but below modals
      }}
    >
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeItem === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate?.(tab.page)}
              className="flex-1 flex flex-col items-center justify-center py-2 px-1 min-h-[64px] transition-colors"
            >
              <div className={`w-6 h-6 mb-1 transition-colors ${
                isActive ? 'text-[#1a1a1a]' : 'text-[#999999]'
              }`}>
                <Icon className="w-full h-full" strokeWidth={isActive ? 2 : 1.5} />
              </div>
              <span
                className={`transition-colors ${
                  isActive ? 'text-[#1a1a1a]' : 'text-[#999999]'
                }`}
                style={{
                  fontSize: '11px',
                  fontWeight: isActive ? '600' : '500',
                  lineHeight: '1.2',
                }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
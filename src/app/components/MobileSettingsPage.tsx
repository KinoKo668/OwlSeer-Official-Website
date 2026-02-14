import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { BottomTabBar } from './BottomTabBar';

interface MobileSettingsPageProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  onBack: () => void;
  onNavigate?: (page: string) => void;
}

export function MobileSettingsPage({
  title,
  description,
  children,
  onBack,
  onNavigate,
}: MobileSettingsPageProps) {
  return (
    <div className="simulation-overview-theme simulation-dark-surface flex flex-col h-screen bg-sidebar transition-colors duration-300">
      {/* Header with Back Button */}
      <div className="bg-white border-b border-[#e0e0e0] flex-shrink-0">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3 mb-3">
            <button
              onClick={onBack}
              className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-[#f5f5f5] transition-colors"
              aria-label="Back to settings"
            >
              <ArrowLeft className="w-5 h-5 text-[#1a1a1a]" />
            </button>
            <h1 className="text-[#1a1a1a] flex-1" style={{ fontSize: '20px', fontWeight: '700' }}>
              {title}
            </h1>
          </div>
          {description && (
            <p className="text-[#666666] pl-12" style={{ fontSize: '14px' }}>
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-[80px]">
        {children}
      </div>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeItem="settings" onNavigate={onNavigate} />
    </div>
  );
}

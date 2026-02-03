import React from 'react';
import { Video, BarChart3, Palette, TrendingUp, ChevronRight } from 'lucide-react';

interface QuickAction {
  icon: 'video' | 'analytics' | 'studio' | 'trends';
  label: string;
  onClick?: () => void;
}

interface QuickActionsCardProps {
  actions?: QuickAction[];
  onNavigate?: (page: string) => void;
}

export function QuickActionsCard({
  actions = [
    { icon: 'video', label: 'New Video' },
    { icon: 'analytics', label: 'Analytics' },
    { icon: 'studio', label: 'Content Studio' },
    { icon: 'trends', label: 'Check Trends' },
  ],
  onNavigate,
}: QuickActionsCardProps) {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'analytics':
        return <BarChart3 className="w-4 h-4" />;
      case 'studio':
        return <Palette className="w-4 h-4" />;
      case 'trends':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const handleClick = (action: QuickAction) => {
    if (action.onClick) {
      action.onClick();
    } else if (onNavigate) {
      const pageMap: Record<string, string> = {
        'New Video': 'content-studio',
        'Analytics': 'analytics',
        'Content Studio': 'content-studio',
        'Check Trends': 'hashtag',
      };
      onNavigate(pageMap[action.label] || 'dashboard');
    }
  };

  return (
    <div className="bg-card rounded-[12px] border border-border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="border-b border-border px-4 py-3">
        <h3 className="text-card-foreground" style={{ fontSize: '14px', fontWeight: '700' }}>
          Quick Actions
        </h3>
      </div>

      {/* Content */}
      <div className="p-3 space-y-1">
        {actions.map((action, i) => (
          <button
            key={i}
            onClick={() => handleClick(action)}
            className="w-full flex items-center justify-between p-3 rounded-[10px] text-left hover:bg-muted hover:border-border border border-transparent transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#F8F9FA] to-[#F3F4F6] dark:from-muted dark:to-muted/50 rounded-lg flex items-center justify-center text-muted-foreground group-hover:from-[#D1FAE5] group-hover:to-[#A7F3D0] dark:group-hover:from-[#0F766E]/20 dark:group-hover:to-[#0F766E]/10 group-hover:text-[#0F766E] dark:group-hover:text-[#2DD4BF] transition-all">
                {getIcon(action.icon)}
              </div>
              <span className="text-card-foreground group-hover:text-foreground" style={{ fontSize: '13px', fontWeight: '600' }}>
                {action.label}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[#0F766E] dark:group-hover:text-[#2DD4BF] transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}
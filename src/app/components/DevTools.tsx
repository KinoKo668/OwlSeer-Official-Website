import React from 'react';
import { Code2, X, Zap, Sparkles, Monitor } from 'lucide-react';
import { usePerformance } from '../contexts';

interface DevToolsProps {
  currentPage: 'auth' | 'content-profile' | 'account-connection' | 'creator-struggles' | 'goal-setting' | 'ai-processing' | 'insight-checkpoint' | 'home' | 'sidebar-demo' | 'copilot' | 'dashboard' | 'monitor' | 'intelligence' | 'library' | 'hashtag' | 'scheduling' | 'studio' | 'studio-demo' | 'settings' | 'weekly-report' | 'landing' | 'account-selection';
  onPageChange: (page: 'auth' | 'content-profile' | 'account-connection' | 'creator-struggles' | 'goal-setting' | 'ai-processing' | 'insight-checkpoint' | 'home' | 'sidebar-demo' | 'copilot' | 'dashboard' | 'monitor' | 'intelligence' | 'library' | 'hashtag' | 'scheduling' | 'studio' | 'studio-demo' | 'settings' | 'weekly-report' | 'landing' | 'account-selection') => void;
}

export function DevTools({ currentPage, onPageChange }: DevToolsProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  // Draggable button state
  const [position, setPosition] = React.useState({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = React.useState(false);

  // Toggle dev tools with Ctrl/Cmd + K
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setHasMoved(false);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  React.useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Check if moved more than 5px (to distinguish from click)
      const moved = Math.abs(newX - position.x) > 5 || Math.abs(newY - position.y) > 5;
      if (moved) setHasMoved(true);

      // Constrain to viewport with padding
      const constrainedX = Math.max(16, Math.min(newX, window.innerWidth - 64));
      const constrainedY = Math.max(16, Math.min(newY, window.innerHeight - 64));

      setPosition({ x: constrainedX, y: constrainedY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, position]);

  if (!isOpen) {
    return (
      <button
        onMouseDown={handleMouseDown}
        onClick={(e) => {
          // Only open if not dragging
          if (!hasMoved) {
            setIsOpen(true);
          }
        }}
        className={`fixed w-12 h-12 bg-[#1a1a1a] text-white rounded-full shadow-lg hover:bg-[#2a2a2a] transition-colors flex items-center justify-center z-50 ${
          isDragging ? 'cursor-grabbing scale-110' : 'cursor-grab'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: isDragging ? 'none' : 'transform 0.2s',
        }}
        title="Drag to move • Click to open Dev Tools (Ctrl/Cmd + K)"
      >
        <Code2 className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-[#1a1a1a] text-white rounded-[12px] shadow-lg p-4 z-50 min-w-[280px] max-h-[80vh] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4" />
          <span style={{ fontSize: 'var(--text-secondary)', fontWeight: '600' }}>
            Dev Tools
          </span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-white/10 rounded p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Page Selector */}
      <div className="flex-1 overflow-y-auto space-y-2">
        <div
          className="text-white/60 mb-2"
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Navigate to:
        </div>
        
        <button
          onClick={() => onPageChange('landing')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'landing'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Official Website (Landing)
        </button>

        <button
          onClick={() => onPageChange('auth')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'auth'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Authentication
        </button>

        <button
          onClick={() => onPageChange('account-selection')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'account-selection'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Account Selection
        </button>

        <button
          onClick={() => onPageChange('account-connection')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'account-connection'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Account Connection
        </button>

        <button
          onClick={() => onPageChange('content-profile')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'content-profile'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Content Profile
        </button>

        <button
          onClick={() => onPageChange('creator-struggles')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'creator-struggles'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Creator Struggles
        </button>

        <button
          onClick={() => onPageChange('goal-setting')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'goal-setting'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Goal Setting
        </button>

        <button
          onClick={() => onPageChange('ai-processing')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'ai-processing'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          AI Processing
        </button>

        <button
          onClick={() => onPageChange('insight-checkpoint')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'insight-checkpoint'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Insight Checkpoint
        </button>

        <button
          onClick={() => onPageChange('home')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'home'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Home Page
        </button>

        <button
          onClick={() => onPageChange('copilot')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'copilot'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Copilot
        </button>

        <button
          onClick={() => onPageChange('dashboard')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'dashboard'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Dashboard
        </button>

        <button
          onClick={() => onPageChange('monitor')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'monitor'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Monitor
        </button>

        <button
          onClick={() => onPageChange('intelligence')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'intelligence'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Intelligence
        </button>

        <button
          onClick={() => onPageChange('library')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'library'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Library
        </button>

        <button
          onClick={() => onPageChange('hashtag')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'hashtag'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Trends
        </button>

        <button
          onClick={() => onPageChange('scheduling')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'scheduling'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Scheduling
        </button>

        <button
          onClick={() => onPageChange('studio')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'studio'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Studio
        </button>

        <button
          onClick={() => onPageChange('studio-demo')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'studio-demo'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Studio Demo
        </button>

        <button
          onClick={() => onPageChange('settings')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'settings'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Settings
        </button>

        <button
          onClick={() => onPageChange('weekly-report')}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'weekly-report'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-white/10 hover:bg-white/15 text-white'
          }`}
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          Weekly Report Demo
        </button>
      </div>

      {/* Performance Mode Toggle */}
      <PerformanceModeSection />

      {/* Keyboard Shortcut Hint */}
      <div
        className="mt-4 pt-3 border-t border-white/10 text-white/40"
        style={{ fontSize: '11px' }}
      >
        Press <kbd className="px-1 py-0.5 bg-white/10 rounded">Ctrl/Cmd + K</kbd> to toggle
      </div>
    </div>
  );
}

// Separate component for performance mode to use hooks properly
function PerformanceModeSection() {
  const { performanceMode, setPerformanceMode, enableBlur, enableAnimations, isWindows } = usePerformance();
  
  const modes = [
    { id: 'auto' as const, label: 'Auto', icon: Monitor },
    { id: 'high-quality' as const, label: 'Quality', icon: Sparkles },
    { id: 'performance' as const, label: 'Performance', icon: Zap },
  ];

  return (
    <div className="mt-4 pt-3 border-t border-white/10">
      <div className="text-white/60 mb-2" style={{ fontSize: '12px' }}>
        Performance Mode {isWindows && <span className="text-yellow-400">(Windows)</span>}
      </div>
      
      <div className="flex gap-1 mb-2">
        {modes.map((mode) => {
          const Icon = mode.icon;
          const isActive = performanceMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setPerformanceMode(mode.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                isActive
                  ? 'bg-white text-[#1a1a1a]'
                  : 'bg-white/10 hover:bg-white/15 text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {mode.label}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2 text-xs text-white/50">
        <span className={`px-1.5 py-0.5 rounded ${enableBlur ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10'}`}>
          Blur: {enableBlur ? 'ON' : 'OFF'}
        </span>
        <span className={`px-1.5 py-0.5 rounded ${enableAnimations ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10'}`}>
          Anim: {enableAnimations ? 'ON' : 'OFF'}
        </span>
      </div>
    </div>
  );
}
import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  List as ListIcon,
  Columns,
  X,
  Save,
  Copy,
  Trash2,
  Clock,
  MessageSquare,
  MoreHorizontal,
  AlertCircle,
  ChevronDown,
  Star,
  Edit2,
  CheckCircle2,
  FileText,
  RotateCcw,
  TrendingUp,
  HelpCircle,
  GripVertical,
  Link as LinkIcon,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { SidebarPro } from './SidebarPro';
import { BottomTabBar } from './BottomTabBar';
import { ScriptSelectorModal } from './ScriptSelectorModal';
import { useSimulationTrigger } from './SimulationPageWrapper';

// ==================== TYPES ====================

type ContentStatus = 'draft' | 'script-ready' | 'scheduled' | 'due' | 'published-on-plan' | 'published-off-plan' | 'not-published-yet';
type ContentType = 'video' | 'live' | 'post' | 'script';
type ViewMode = 'calendar' | 'kanban' | 'list';

interface Label {
  id: string;
  name: string;
  color: string;
  description: string;
}

interface ContentItem {
  id: string;
  title: string;
  date: Date;
  timeSlot?: string;
  contentType: ContentType;
  status: ContentStatus;
  labels: Label[];
  brief?: string;
  assets?: string[];
  checklist?: ChecklistItem[];
  comments?: Comment[];
  lastUpdated: Date;
  actualPublishTime?: Date; // 实际发布时间（用于已发布状态）
  timeDelta?: number; // 时间偏差（分钟）
  linkedScriptId?: string; // 关联的脚本ID
  linkedScriptTitle?: string; // 脚本标题（缓存）
  isAISuggested?: boolean; // 是否为AI生成的建议
  suggestionReason?: string; // AI建议理由
}

interface ChecklistItem {
  id: string;
  label: string;
  completed: boolean;
}

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
}

interface SavedView {
  id: string;
  name: string;
  isDefault?: boolean;
}

interface SchedulingSlotsNewProps {
  onNavigate?: (page: string) => void;
  conversations?: any[];
  currentConversationId?: string | null;
  onSelectConversation?: (id: string) => void;
  onDeleteConversation?: (id: string) => void;
}

// ==================== MOCK DATA ====================

// Slot Type Labels (based on PRD)
const mockLabels: Label[] = [
  { 
    id: 'slot-trust', 
    name: 'Core Content', 
    color: '#0F766E',
    description: 'Your proven, non-monetized formats that stabilize account performance.'
  },
  { 
    id: 'slot-risk', 
    name: 'Monetized Content', 
    color: '#D97706',
    description: 'Content designed primarily for conversion or commercial outcomes.'
  },
  { 
    id: 'slot-test', 
    name: 'Experiment', 
    color: '#8b5cf6',
    description: 'New formats or ideas used to explore future growth opportunities.'
  },
  { 
    id: 'slot-seasonal', 
    name: 'Timely', 
    color: '#059669',
    description: 'Time-sensitive or trend-driven content relevant to a specific period.'
  },
];

// Create dates once, not on every render
const createStaticDate = (year: number, month: number, day: number, hour?: number, minute?: number) => {
  return new Date(year, month, day, hour ?? 0, minute ?? 0);
};

const mockContentItems: ContentItem[] = [
  {
    id: 'c1',
    title: 'Morning Skincare Routine 2026 #skincare #morningroutine',
    date: createStaticDate(2026, 0, 13),
    timeSlot: '09:00',
    contentType: 'video',
    status: 'scheduled',
    labels: [mockLabels[0]], // Core Content slot
    brief: 'Show my updated morning routine with new products',
    lastUpdated: createStaticDate(2026, 0, 1),
  },
  {
    id: 'c2',
    title: 'Product Review: Vitamin C Serum #beauty #sponsored',
    date: createStaticDate(2026, 0, 14),
    timeSlot: '15:00',
    contentType: 'video',
    status: 'script-ready',
    labels: [mockLabels[1]], // Monetized Content slot
    lastUpdated: createStaticDate(2026, 0, 1),
  },
  {
    id: 'c3',
    title: 'Live Q&A: Skincare for Beginners #LiveSession #AskMeAnything',
    date: createStaticDate(2026, 0, 15),
    timeSlot: '19:00',
    contentType: 'live',
    status: 'due',
    labels: [mockLabels[0]], // Core Content slot
    lastUpdated: createStaticDate(2026, 0, 1),
  },
  {
    id: 'c4',
    title: 'Behind the Scenes: Content Day #BTS #CreatorLife',
    date: createStaticDate(2026, 0, 16),
    timeSlot: '12:00',
    contentType: 'post',
    status: 'draft',
    labels: [mockLabels[2]], // Experiment slot
    lastUpdated: createStaticDate(2026, 0, 1),
  },
  {
    id: 'c5',
    title: 'Nighttime Skincare Routine #nightroutine #selfcare',
    date: createStaticDate(2026, 0, 10),
    timeSlot: '20:00',
    contentType: 'video',
    status: 'published-on-plan',
    labels: [mockLabels[0]], // Core Content slot
    actualPublishTime: createStaticDate(2026, 0, 10, 20, 15),
    timeDelta: 15,
    lastUpdated: createStaticDate(2026, 0, 1),
  },
  {
    id: 'c6',
    title: 'Top 5 Skincare Myths Debunked #skincaretips #mythbusting',
    date: createStaticDate(2026, 0, 9),
    timeSlot: '14:00',
    contentType: 'video',
    status: 'published-off-plan',
    labels: [mockLabels[2]], // Experiment slot
    actualPublishTime: createStaticDate(2026, 0, 9, 16, 30),
    timeDelta: 150,
    lastUpdated: createStaticDate(2026, 0, 1),
  },
  {
    id: 'c7',
    title: 'Skincare Mistakes to Avoid #skincareadvice #tips',
    date: createStaticDate(2026, 0, 8),
    timeSlot: '10:00',
    contentType: 'video',
    status: 'not-published-yet',
    labels: [mockLabels[0]], // Core Content slot
    lastUpdated: createStaticDate(2026, 0, 1),
  },
  {
    id: 'c8',
    title: 'Chinese New Year Special: Lucky Makeup #CNY2026 #MakeupTutorial',
    date: createStaticDate(2026, 0, 25),
    timeSlot: '10:00',
    contentType: 'video',
    status: 'scheduled',
    labels: [mockLabels[3]], // Timely slot
    lastUpdated: createStaticDate(2026, 0, 1),
  },
  {
    id: 'c9',
    title: 'Evening Glow Routine #goldenhour #skincare',
    date: createStaticDate(2026, 0, 14),
    timeSlot: '19:30',
    contentType: 'video',
    status: 'scheduled',
    labels: [mockLabels[0]], // Core Content slot
    lastUpdated: createStaticDate(2026, 0, 1),
  },
  {
    id: 'c10',
    title: 'Best Products Under $20 #budgetfriendly #affordable',
    date: createStaticDate(2026, 0, 15),
    timeSlot: '20:30',
    contentType: 'video',
    status: 'scheduled',
    labels: [mockLabels[1]], // Monetized Content slot
    lastUpdated: createStaticDate(2026, 0, 1),
  },
  {
    id: 'c11',
    title: 'Nighttime Wind Down #relax #selfcare',
    date: createStaticDate(2026, 0, 16),
    timeSlot: '21:00',
    contentType: 'video',
    status: 'draft',
    labels: [mockLabels[0]], // Core Content slot
    lastUpdated: createStaticDate(2026, 0, 1),
  },
  {
    id: 'c12',
    title: 'Trending: Clean Girl Aesthetic 2026 #trend #aesthetic',
    date: createStaticDate(2026, 0, 14),
    timeSlot: '12:00',
    contentType: 'video',
    status: 'draft',
    labels: [mockLabels[2]], // Experiment
    lastUpdated: createStaticDate(2026, 0, 13),
    isAISuggested: true,
    suggestionReason: 'Recommended based on current viral trends and optimal engagement windows for your niche.',
  },
  {
    id: 'c13',
    title: 'Q&A Follow-up: Best Sunscreens #sunscreen #qna',
    date: createStaticDate(2026, 0, 15),
    timeSlot: '16:00',
    contentType: 'video',
    status: 'draft',
    labels: [mockLabels[0]], // Core Content
    lastUpdated: createStaticDate(2026, 0, 13),
    isAISuggested: true,
    suggestionReason: 'Scheduled to maintain momentum from your recent viral video, aligned with peak audience activity.',
  },
  {
    id: 'c14',
    title: 'Weekly Recap: Jan Favorites #favorites #recap',
    date: createStaticDate(2026, 0, 26),
    timeSlot: '20:00',
    contentType: 'video',
    status: 'draft',
    labels: [mockLabels[0]], // Core Content
    lastUpdated: createStaticDate(2026, 0, 20),
    isAISuggested: true,
    suggestionReason: 'End-of-month recaps historically perform well on Mondays. Suggested time aligns with your audience active hours.',
  },
  {
    id: 'c15',
    title: 'Try On Haul: New Year Styles #fashion #haul',
    date: createStaticDate(2026, 0, 28),
    timeSlot: '18:30',
    contentType: 'video',
    status: 'draft',
    labels: [mockLabels[1]], // Monetized
    lastUpdated: createStaticDate(2026, 0, 20),
    isAISuggested: true,
    suggestionReason: 'Mid-week engagement spike detected. Good opportunity for affiliate content.',
  },
  {
    id: 'c16',
    title: 'Get Ready With Me: Weekend Vibes #GRWM #weekend',
    date: createStaticDate(2026, 0, 30),
    timeSlot: '17:00',
    contentType: 'video',
    status: 'draft',
    labels: [mockLabels[3]], // Timely
    lastUpdated: createStaticDate(2026, 0, 20),
    isAISuggested: true,
    suggestionReason: 'Friday evenings are optimal for casual, lifestyle content to kick off the weekend.',
  },
];

const savedViews: SavedView[] = [
  { id: 'v1', name: 'All Content', isDefault: true },
  { id: 'v2', name: 'This Week' },
  { id: 'v3', name: 'Script Ready' },
  { id: 'v4', name: 'Scheduled' },
  { id: 'v5', name: 'My Drafts' },
];

// ==================== HELPER FUNCTIONS ====================

const getSlotTypeColor = (labels: Label[]): string => {
  if (labels.length === 0) return '#E5E7EB';
  // Use the first label's color (Slot Type)
  return labels[0].color;
};

const getStatusColor = (status: ContentStatus): string => {
  const colors = {
    'draft': '#9CA3AF',
    'script-ready': '#8b5cf6',
    'scheduled': '#0F766E',
    'due': '#D97706',
    'published-on-plan': '#059669',
    'published-off-plan': '#D97706',
    'not-published-yet': '#9CA3AF',
  };
  return colors[status];
};

const getStatusLabel = (status: ContentStatus): string => {
  const labels = {
    'draft': 'Draft',
    'script-ready': 'Script Ready',
    'scheduled': 'Scheduled',
    'due': 'Due',
    'published-on-plan': 'Published',
    'published-off-plan': 'Published',
    'not-published-yet': 'Expired',
  };
  return labels[status];
};

const getStatusDescription = (status: ContentStatus): string => {
  const descriptions = {
    'draft': 'Planning stage, key details pending',
    'script-ready': 'Script generated and ready to produce',
    'scheduled': 'Confirmed publish time, awaiting execution',
    'due': 'In publish window, ready to go',
    'published-on-plan': 'Published as planned',
    'published-off-plan': 'Published with time adjustment',
    'not-published-yet': 'Can reschedule or continue preparing',
  };
  return descriptions[status];
};

const formatTimeDelta = (minutes: number): string => {
  if (minutes === 0) return 'On time';
  if (minutes > 0) {
    if (minutes < 60) return `+${minutes}min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `+${hours}h ${mins}min` : `+${hours}h`;
  } else {
    const absMinutes = Math.abs(minutes);
    if (absMinutes < 60) return `-${absMinutes}min`;
    const hours = Math.floor(absMinutes / 60);
    const mins = absMinutes % 60;
    return mins > 0 ? `-${hours}h ${mins}min` : `-${hours}h`;
  }
};

// ==================== HASHTAG UTILITIES ====================

function parseHashtags(text: string): React.ReactNode[] {
  if (!text) return [text];
  
  // Match hashtags (# followed by letters, numbers, underscores)
  const hashtagRegex = /(#[\w]+)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let partIndex = 0;

  while ((match = hashtagRegex.exec(text)) !== null) {
    // Add text before hashtag as plain string
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    // Add hashtag with styling (TikTok blue color with subtle background)
    parts.push(
      <span 
        key={`hashtag-${partIndex}-${match[0]}`}
        className="text-[#0F766E] bg-[#F0FDFA] px-1 rounded"
        style={{ fontWeight: '600' }}
      >
        {match[0]}
      </span>
    );
    partIndex++;
    lastIndex = match.index + match[0].length;
  }

  // Add remaining text as plain string
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

// ==================== TOOLTIP COMPONENT ====================

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'right' | 'left';
}

function Tooltip({ content, children, position = 'right' }: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const [tooltipPosition, setTooltipPosition] = React.useState({ top: 0, left: 0 });

  React.useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      let top = 0;
      let left = 0;

      if (position === 'right') {
        // Align vertically centered with trigger
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.right + 12;
      } else if (position === 'top') {
        top = triggerRect.top - tooltipRect.height - 12;
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
      } else if (position === 'left') {
        // Align vertically centered with trigger
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.left - tooltipRect.width - 12;
      }

      setTooltipPosition({ top, left });
    }
  }, [isVisible, position]);

  return (
    <>
      <div 
        ref={triggerRef}
        className="relative inline-flex items-center"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div 
          ref={tooltipRef}
          className="fixed pointer-events-none"
          style={{ 
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            zIndex: 9999
          }}
        >
          {position === 'right' && (
            <div className="flex items-center">
              <div className="w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-[#111827]" />
              <div className="px-3 py-2 bg-[#111827] text-white rounded-lg shadow-2xl" style={{ maxWidth: '280px', fontSize: '11px', lineHeight: '1.5' }}>
                {content}
              </div>
            </div>
          )}
          {position === 'top' && (
            <div className="flex flex-col items-center">
              <div className="px-3 py-2 bg-[#111827] text-white rounded-lg shadow-2xl mb-1" style={{ maxWidth: '280px', fontSize: '11px', lineHeight: '1.5' }}>
                {content}
              </div>
              <div className="w-0 h-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-[#111827]" />
            </div>
          )}
          {position === 'left' && (
            <div className="flex items-center">
              <div className="px-3 py-2 bg-[#111827] text-white rounded-lg shadow-2xl" style={{ maxWidth: '280px', fontSize: '11px', lineHeight: '1.5' }}>
                {content}
              </div>
              <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-[#111827]" />
            </div>
          )}
        </div>
      )}
    </>
  );
}

// ==================== LEFT SIDEBAR COMPONENT ====================

interface LeftPanelProps {
  selectedView: string;
  onSelectView: (viewId: string) => void;
  filters: {
    statuses: ContentStatus[];
    labels: string[];
  };
  onFilterChange: (filters: any) => void;
}

function LeftFilterPanel({ selectedView, onSelectView, filters, onFilterChange }: LeftPanelProps) {
  const [expandedSections, setExpandedSections] = React.useState({
    views: true,
    status: true,
    labels: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const hasActiveFilters = 
    filters.statuses.length > 0 ||
    filters.labels.length > 0;

  return (
    <div className="w-64 bg-white border-r border-[#E5E7EB] flex flex-col">
      <div className="p-4 border-b border-[#E5E7EB]">
        <h3 className="text-[#111827]" style={{ fontSize: '14px', fontWeight: '700' }}>
          Views & Filters
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Saved Views */}
        <div className="border-b border-[#e0e0e0]">
          <button
            onClick={() => toggleSection('views')}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#fafafa] transition-colors"
          >
            <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
              Saved Views
            </span>
            <ChevronDown className={`w-4 h-4 text-[#666666] transition-transform ${expandedSections.views ? '' : '-rotate-90'}`} />
          </button>
          {expandedSections.views && (
            <div className="px-2 pb-3">
              {savedViews.map(view => (
                <button
                  key={view.id}
                  onClick={() => onSelectView(view.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedView === view.id
                      ? 'bg-[#f5f5f5] text-[#1a1a1a]'
                      : 'text-[#666666] hover:bg-[#fafafa]'
                  }`}
                  style={{ fontSize: '13px', fontWeight: selectedView === view.id ? '600' : '400' }}
                >
                  <div className="flex items-center gap-2">
                    {view.isDefault && <Star className="w-3 h-3" />}
                    {view.name}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <div className="px-4 py-3 bg-[#f5f5f5] border-b border-[#e0e0e0]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                ACTIVE FILTERS
              </span>
              <button
                onClick={() => onFilterChange({ statuses: [], labels: [] })}
                className="text-[#ef4444] hover:underline"
                style={{ fontSize: '11px', fontWeight: '600' }}
              >
                Clear All
              </button>
            </div>
            <div className="flex flex-wrap gap-1">
              {filters.statuses.length > 0 && (
                <span className="px-2 py-0.5 bg-white rounded-md text-[#1a1a1a] border border-[#e0e0e0]" style={{ fontSize: '11px' }}>
                  {filters.statuses.length} status{filters.statuses.length > 1 ? 'es' : ''}
                </span>
              )}
              {filters.labels.length > 0 && (
                <span className="px-2 py-0.5 bg-white rounded-md text-[#1a1a1a] border border-[#e0e0e0]" style={{ fontSize: '11px' }}>
                  {filters.labels.length} slot type{filters.labels.length > 1 ? 's' : ''}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Status Filter */}
        <div className="border-b border-[#e0e0e0]">
          <button
            onClick={() => toggleSection('status')}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#fafafa] transition-colors"
          >
            <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
              Status
            </span>
            <ChevronDown className={`w-4 h-4 text-[#666666] transition-transform ${expandedSections.status ? '' : '-rotate-90'}`} />
          </button>
          {expandedSections.status && (
            <div className="px-4 pb-3 space-y-2">
              {(['draft', 'script-ready', 'scheduled', 'published-on-plan', 'not-published-yet'] as ContentStatus[]).map(status => (
                <label key={status} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.statuses.includes(status)}
                    onChange={(e) => {
                      const newStatuses = e.target.checked
                        ? [...filters.statuses, status]
                        : filters.statuses.filter(s => s !== status);
                      onFilterChange({ ...filters, statuses: newStatuses });
                    }}
                    className="w-3.5 h-3.5 rounded border-[#e0e0e0] text-[#1a1a1a] focus:ring-2 focus:ring-[#1a1a1a]/10"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-[#666666] group-hover:text-[#1a1a1a] transition-colors" style={{ fontSize: '13px' }}>
                      {getStatusLabel(status)}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Slot Type Filter */}
        <div className="border-b border-[#e0e0e0]">
          <button
            onClick={() => toggleSection('labels')}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#fafafa] transition-colors"
          >
            <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
              Slot Type
            </span>
            <ChevronDown className={`w-4 h-4 text-[#666666] transition-transform ${expandedSections.labels ? '' : '-rotate-90'}`} />
          </button>
          {expandedSections.labels && (
            <div className="px-4 pb-3 space-y-2">
              {mockLabels.map(label => (
                <div key={label.id} className="flex items-center gap-2">
                  <label className="flex items-center gap-2 cursor-pointer group flex-1">
                    <input
                      type="checkbox"
                      checked={filters.labels.includes(label.id)}
                      onChange={(e) => {
                        const newLabels = e.target.checked
                          ? [...filters.labels, label.id]
                          : filters.labels.filter(l => l !== label.id);
                        onFilterChange({ ...filters, labels: newLabels });
                      }}
                      className="w-3.5 h-3.5 rounded border-[#e0e0e0] text-[#1a1a1a] focus:ring-2 focus:ring-[#1a1a1a]/10"
                    />
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: label.color }} />
                      <span className="text-[#666666] group-hover:text-[#1a1a1a] transition-colors" style={{ fontSize: '13px' }}>
                        {label.name}
                      </span>
                    </div>
                  </label>
                  <Tooltip content={label.description}>
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border border-[#999999] text-[#999999] hover:border-[#666666] hover:text-[#666666] transition-colors cursor-help">
                      <HelpCircle className="w-3 h-3" />
                    </div>
                  </Tooltip>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ==================== TOP TOOLBAR COMPONENT ====================

interface TopToolbarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  timeGranularity: 'week' | 'month';
  onTimeGranularityChange: (granularity: 'week' | 'month') => void;
  currentDate: Date;
  onDateChange: (date: Date) => void;
  onCreateClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  timeRange?: 'focus' | 'extended' | 'full';
  onTimeRangeChange?: (range: 'focus' | 'extended' | 'full') => void;
  autoFitHours?: boolean;
  onAutoFitHoursChange?: (enabled: boolean) => void;
}

function TopToolbar({
  viewMode,
  onViewModeChange,
  timeGranularity,
  onTimeGranularityChange,
  currentDate,
  onDateChange,
  onCreateClick,
  searchQuery,
  onSearchChange,
  timeRange = 'extended',
  onTimeRangeChange,
  autoFitHours = false,
  onAutoFitHoursChange,
}: TopToolbarProps) {
  const formatDateRange = () => {
    if (timeGranularity === 'week') {
      const weekStart = new Date(currentDate);
      weekStart.setDate(currentDate.getDate() - currentDate.getDay());
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      
      return `${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${weekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
    } else {
      return currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }
  };

  const goToPrevious = () => {
    const newDate = new Date(currentDate);
    if (timeGranularity === 'week') {
      newDate.setDate(currentDate.getDate() - 7);
    } else {
      newDate.setMonth(currentDate.getMonth() - 1);
    }
    onDateChange(newDate);
  };

  const goToNext = () => {
    const newDate = new Date(currentDate);
    if (timeGranularity === 'week') {
      newDate.setDate(currentDate.getDate() + 7);
    } else {
      newDate.setMonth(currentDate.getMonth() + 1);
    }
    onDateChange(newDate);
  };

  const goToToday = () => {
    onDateChange(new Date());
  };

  const [showAutoFitTooltip, setShowAutoFitTooltip] = React.useState(false);

  return (
    <div className="bg-white border-b border-[#e0e0e0] px-4 md:px-6 py-3 md:py-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4">
        {/* Left: Time Controls */}
        <div className="flex items-center gap-2 md:gap-3 flex-wrap w-full md:w-auto">
          <div className="flex items-center gap-1">
            <button
              onClick={goToPrevious}
              className="p-1.5 rounded-lg hover:bg-[#f5f5f5] transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-[#666666]" />
            </button>
            <button
              onClick={goToNext}
              className="p-1.5 rounded-lg hover:bg-[#f5f5f5] transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-[#666666]" />
            </button>
          </div>
          <span className="text-[#1a1a1a] text-sm md:text-base" style={{ fontSize: '13px', fontWeight: '600' }}>
            {formatDateRange()}
          </span>
          <div className="flex items-center gap-1 ml-1 md:ml-2">
            <button
              onClick={() => onTimeGranularityChange('week')}
              className={`px-2 md:px-3 py-1.5 rounded-lg transition-colors ${
                timeGranularity === 'week'
                  ? 'bg-[#0F766E] text-white'
                  : 'bg-white border border-[#E5E7EB] text-[#374151] hover:bg-[#F8F9FA]'
              }`}
              style={{ fontSize: '11px', fontWeight: '600' }}
            >
              Week
            </button>
            <button
              onClick={() => onTimeGranularityChange('month')}
              className={`px-2 md:px-3 py-1.5 rounded-lg transition-colors ${
                timeGranularity === 'month'
                  ? 'bg-[#0F766E] text-white'
                  : 'bg-white border border-[#E5E7EB] text-[#374151] hover:bg-[#F8F9FA]'
              }`}
              style={{ fontSize: '11px', fontWeight: '600' }}
            >
              Month
            </button>
          </div>
        </div>

        {/* Center: View Mode Tabs */}
        <div className="flex items-center gap-1 bg-[#f5f5f5] p-1 rounded-lg w-full md:w-auto">
          <button
            onClick={() => onViewModeChange('calendar')}
            className={`flex items-center justify-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 rounded-md transition-colors flex-1 md:flex-initial ${
              viewMode === 'calendar'
                ? 'bg-white text-[#1a1a1a] shadow-sm'
                : 'text-[#666666] hover:text-[#1a1a1a]'
            }`}
            style={{ fontSize: '12px', fontWeight: '600' }}
          >
            <CalendarIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Calendar</span>
          </button>
          <button
            onClick={() => onViewModeChange('kanban')}
            className={`flex items-center justify-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 rounded-md transition-colors flex-1 md:flex-initial ${
              viewMode === 'kanban'
                ? 'bg-white text-[#1a1a1a] shadow-sm'
                : 'text-[#666666] hover:text-[#1a1a1a]'
            }`}
            style={{ fontSize: '12px', fontWeight: '600' }}
          >
            <Columns className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Board</span>
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`flex items-center justify-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 rounded-md transition-colors flex-1 md:flex-initial ${
              viewMode === 'list'
                ? 'bg-white text-[#1a1a1a] shadow-sm'
                : 'text-[#666666] hover:text-[#1a1a1a]'
            }`}
            style={{ fontSize: '12px', fontWeight: '600' }}
          >
            <ListIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">List</span>
          </button>
        </div>

        {/* Right: Time Range Switcher (for week view), Search & Create */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
          {/* Time Range Switcher (only visible in week calendar view) */}
          {viewMode === 'calendar' && timeGranularity === 'week' && onTimeRangeChange && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 border-t sm:border-t-0 sm:border-l border-[#e0e0e0] pt-3 sm:pt-0 sm:pl-3">
              <span className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                TIME RANGE
              </span>
              <div className="flex items-center gap-1 bg-[#f5f5f5] p-1 rounded-lg">
                <button
                  onClick={() => onTimeRangeChange('extended')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    timeRange === 'extended'
                      ? 'bg-white text-[#1a1a1a] shadow-sm'
                      : 'text-[#666666] hover:text-[#1a1a1a]'
                  }`}
                  style={{ fontSize: '11px', fontWeight: '600' }}
                  title="06:00–24:00"
                >
                  Focus
                </button>
                <button
                  onClick={() => onTimeRangeChange('full')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    timeRange === 'full'
                      ? 'bg-white text-[#1a1a1a] shadow-sm'
                      : 'text-[#666666] hover:text-[#1a1a1a]'
                  }`}
                  style={{ fontSize: '11px', fontWeight: '600' }}
                  title="00:00–24:00"
                >
                  Full Day
                </button>
              </div>

            </div>
          )}
          
          <div className="relative w-full md:w-48 lg:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search..."
              className="w-full pl-9 pr-3 py-2 bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg text-[#1a1a1a] placeholder:text-[#999999] outline-none focus:ring-2 focus:ring-[#1a1a1a]/10 focus:border-[#1a1a1a]"
              style={{ fontSize: '13px' }}
            />
          </div>
          <button
            onClick={onCreateClick}
            className="flex items-center justify-center gap-1.5 px-3 md:px-4 py-2 bg-[#0F766E] text-white rounded-lg hover:bg-[#115E59] transition-colors"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Create</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== CONTENT CARD COMPONENT (Draggable) ====================

interface ContentCardProps {
  item: ContentItem;
  onClick: () => void;
  compact?: boolean;
  showFooterDate?: boolean; // New prop to control internal date/time display
  onAccept?: (id: string) => void;
  onReject?: (id: string) => void;
  isPeakTime?: boolean; // New prop to indicate if this card is in a peak time slot
}

const DraggableContentCard = ({ item, onClick, compact = false, showFooterDate = false, onAccept, onReject, isPeakTime = false }: ContentCardProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CONTENT_ITEM',
    item: { id: item.id, item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [item.id]);

  const showTimeDelta = (item.status === 'published-on-plan' || item.status === 'published-off-plan') && item.timeDelta !== undefined;
  const isAI = item.isAISuggested;

  if (compact) {
    return (
      <div
        ref={drag as any}
        onClick={onClick}
        className={`group relative p-2 rounded-lg hover:shadow-md transition-all cursor-move ${
          isDragging ? 'opacity-40 shadow-2xl scale-105' : ''
        } ${item.status === 'due' ? 'ring-2 ring-[#D97706]/30' : ''} ${
          isAI
            ? 'bg-violet-50 border border-dashed border-violet-300 dark:bg-violet-950/35 dark:border-violet-700'
            : 'bg-card border border-border'
        }`}
        style={{
          borderLeft: isAI ? '6px solid #a855f7' : `6px solid ${getSlotTypeColor(item.labels)}`,
        }}
      >
        <div className="flex items-start gap-2 mb-1">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5">
            <GripVertical className="w-3 h-3 text-muted-foreground" />
          </div>
          {isAI && (
             <div className="flex-shrink-0 text-violet-600 dark:text-violet-300 mt-0.5">
               <Sparkles className="w-3 h-3" />
             </div>
          )}
          {/* Peak Time Indicator for Compact Card */}
          {isPeakTime && !isAI && (
             <div className="flex-shrink-0 text-[#0F766E] mt-0.5" title="Scheduled at peak time">
               <TrendingUp className="w-3 h-3" />
             </div>
          )}
          <p className={`${isAI ? 'text-violet-700 dark:text-violet-200' : 'text-foreground'} line-clamp-2 flex-1`} style={{ fontSize: '12px', fontWeight: '600' }}>
            {parseHashtags(item.title)}
          </p>
        </div>
        {item.timeSlot && !showFooterDate && (
          <div className="flex items-center gap-1 text-muted-foreground mb-1">
            <Clock className="w-3 h-3" />
            <span style={{ fontSize: '10px' }}>{item.timeSlot}</span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground" style={{ fontSize: '10px' }}>
              {getStatusLabel(item.status)}
            </span>
          </div>
          {showTimeDelta && (
            <span className="text-muted-foreground" style={{ fontSize: '9px' }}>
              {formatTimeDelta(item.timeDelta!)}
            </span>
          )}
        </div>

        {/* AI Actions for Compact Card */}
        {isAI && onAccept && onReject && (
           <div className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-violet-50 dark:bg-violet-950/35 pl-2">
             <button
               onClick={(e) => {
                 e.stopPropagation();
                 onAccept(item.id);
               }}
               className="p-1 rounded hover:bg-violet-200 dark:hover:bg-violet-800/70 text-violet-700 dark:text-violet-200"
               title="Accept"
             >
               <CheckCircle2 className="w-3 h-3" />
             </button>
             <button
               onClick={(e) => {
                 e.stopPropagation();
                 onReject(item.id);
               }}
               className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-900/40 text-red-500 dark:text-red-300"
               title="Dismiss"
             >
               <X className="w-3 h-3" />
             </button>
           </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={drag as any}
      onClick={onClick}
      className={`group relative p-3 rounded-xl hover:shadow-lg transition-all cursor-move ${
        isDragging ? 'opacity-40 shadow-2xl scale-105 rotate-2' : ''
      } ${item.status === 'due' ? 'ring-2 ring-[#D97706]/30' : ''} ${
        isAI
          ? 'bg-violet-50 border border-dashed border-violet-300 dark:bg-violet-950/35 dark:border-violet-700'
          : 'bg-card border border-border'
      }`}
      style={{
        borderLeft: isAI ? '6px solid #a855f7' : `6px solid ${getSlotTypeColor(item.labels)}`,
      }}
    >
      <div className="flex items-start gap-2 mb-2">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5">
          <GripVertical className="w-4 h-4 text-muted-foreground" />
        </div>
        {isAI && (
           <div className="flex-shrink-0 text-violet-600 dark:text-violet-300 mt-0.5">
             <Sparkles className="w-4 h-4" />
           </div>
        )}
        {/* Peak Time Indicator for Full Card */}
        {isPeakTime && !isAI && (
           <div className="flex-shrink-0 text-[#0F766E] mt-0.5" title="Scheduled at peak time">
             <TrendingUp className="w-4 h-4" />
           </div>
        )}
        <h4 className={`${isAI ? 'text-violet-700 dark:text-violet-200' : 'text-foreground'} line-clamp-2 flex-1`} style={{ fontSize: '13px', fontWeight: '600' }}>
          {parseHashtags(item.title)}
        </h4>
      </div>

      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span
          className={`px-2 py-0.5 rounded border ${
            isAI
              ? 'border-violet-300 bg-violet-100 text-violet-700 dark:border-violet-700 dark:bg-violet-900/50 dark:text-violet-200'
              : 'border-border bg-muted text-muted-foreground'
          }`}
          style={{ fontSize: '10px', fontWeight: '600' }}
        >
          {getStatusLabel(item.status)}
        </span>
        {showTimeDelta && (
          <span className="text-muted-foreground" style={{ fontSize: '10px' }}>
            {formatTimeDelta(item.timeDelta!)}
          </span>
        )}
      </div>

      {!showFooterDate && item.timeSlot && (
        <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
          <Clock className="w-3 h-3" />
          <span style={{ fontSize: '11px' }}>{item.timeSlot}</span>
        </div>
      )}

      {showFooterDate && item.date && (
        <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
          <CalendarIcon className="w-3 h-3" />
          <span style={{ fontSize: '11px' }}>
            {item.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
          {item.timeSlot && (
            <>
              <span style={{ fontSize: '11px' }}>•</span>
              <Clock className="w-3 h-3" />
              <span style={{ fontSize: '11px' }}>{item.timeSlot}</span>
            </>
          )}
        </div>
      )}

      {isAI && item.suggestionReason && (
        <div className="mb-2 p-2 bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-200 rounded text-[11px] leading-snug">
          {item.suggestionReason}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {item.labels.map(label => (
            <span
              key={label.id}
              className="px-2 py-0.5 rounded text-white"
              style={{ 
                fontSize: '9px', 
                fontWeight: '600',
                backgroundColor: label.color
              }}
              title={label.description}
            >
              {label.name}
            </span>
          ))}
        </div>

        {/* AI Actions for Full Card */}
        {isAI && onAccept && onReject && (
           <div className="flex gap-2">
             <button
               onClick={(e) => {
                 e.stopPropagation();
                 onAccept(item.id);
               }}
               className="flex items-center gap-1 px-2 py-1 rounded bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-400 transition-colors"
               style={{ fontSize: '10px', fontWeight: '600' }}
             >
               <CheckCircle2 className="w-3 h-3" />
               Accept
             </button>
             <button
               onClick={(e) => {
                 e.stopPropagation();
                 onReject(item.id);
               }}
               className="flex items-center gap-1 px-2 py-1 rounded border border-red-200 dark:border-red-700/70 text-red-500 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
               style={{ fontSize: '10px', fontWeight: '600' }}
             >
               <X className="w-3 h-3" />
               Dismiss
             </button>
           </div>
        )}
      </div>
    </div>
  );
};

// ==================== CALENDAR VIEW ====================

interface CalendarViewProps {
  items: ContentItem[];
  currentDate: Date;
  timeGranularity: 'week' | 'month';
  onItemClick: (item: ContentItem) => void;
  onDateDrop: (itemId: string, newDate: Date, newTime?: string) => void;
  onQuickAdd: (date: Date) => void;
  timeRange?: 'focus' | 'extended' | 'full';
  onAcceptSuggestion: (itemId: string) => void;
  onRejectSuggestion: (itemId: string) => void;
}

function CalendarView({ items, currentDate, timeGranularity, onItemClick, onDateDrop, onQuickAdd, timeRange = 'extended', onAcceptSuggestion, onRejectSuggestion }: CalendarViewProps) {
  const getDaysInView = () => {
    if (timeGranularity === 'week') {
      const weekStart = new Date(currentDate);
      weekStart.setDate(currentDate.getDate() - currentDate.getDay());
      const days = [];
      for (let i = 0; i < 7; i++) {
        const day = new Date(weekStart);
        day.setDate(weekStart.getDate() + i);
        days.push(day);
      }
      return days;
    } else {
      const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      const startDay = monthStart.getDay();
      const days = [];
      
      // Add previous month days
      const prevMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      for (let i = startDay - 1; i >= 0; i--) {
        const day = new Date(prevMonthEnd);
        day.setDate(prevMonthEnd.getDate() - i);
        days.push(day);
      }
      
      // Add current month days
      for (let i = 1; i <= monthEnd.getDate(); i++) {
        days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
      }
      
      // Add next month days to complete the grid
      const remainingDays = 42 - days.length; // 6 weeks * 7 days
      for (let i = 1; i <= remainingDays; i++) {
        days.push(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i));
      }
      
      return days;
    }
  };

  const days = getDaysInView();
  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const getItemsForDate = (date: Date) => {
    return items.filter(item => item.date.toDateString() === date.toDateString());
  };

  // Get recommended best posting time window for each date
  const getBestPostingWindow = (date: Date): { startHour: number; endHour: number; peakTime: string } => {
    const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const dateNum = date.getDate();
    
    // Different best times for different days based on audience behavior patterns
    // Mon-Thu: Fixed posting times (3-hour windows)
    // Fri-Sun: Longer posting windows (5-6 hour windows) as people have more free time
    const patterns = [
      { days: [0], startHour: 16, endHour: 22, peakTime: '19:00' },    // Sunday: 16:00-22:00 (6 hours) - relaxed day
      { days: [1], startHour: 19, endHour: 22, peakTime: '20:00' },    // Monday: 19:00-22:00 (3 hours) - work night
      { days: [2], startHour: 19, endHour: 22, peakTime: '20:30' },    // Tuesday: 19:00-22:00 (3 hours) - work night
      { days: [3], startHour: 19, endHour: 22, peakTime: '20:00' },    // Wednesday: 19:00-22:00 (3 hours) - work night
      { days: [4], startHour: 19, endHour: 22, peakTime: '20:30' },    // Thursday: 19:00-22:00 (3 hours) - work night
      { days: [5], startHour: 18, endHour: 23, peakTime: '20:30' },    // Friday: 18:00-23:00 (5 hours) - TGIF evening
      { days: [6], startHour: 17, endHour: 22, peakTime: '19:30' },    // Saturday: 17:00-22:00 (5 hours) - weekend leisure
    ];
    
    // Find pattern for current day
    const pattern = patterns.find(p => p.days.includes(dayOfWeek)) || patterns[1];
    
    // No variation for Mon-Thu (stable work routine)
    // Small variation for Fri-Sun (weekend flexibility)
    let variation = 0;
    if (dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6) {
      variation = (dateNum % 2 === 0) ? 0 : 1; // 0 or 1 hour shift for weekends
    }
    
    return {
      startHour: Math.max(6, pattern.startHour + variation), // Don't go earlier than 6am
      endHour: Math.min(23, pattern.endHour + variation),    // Don't go later than 23pm
      peakTime: pattern.peakTime
    };
  };

  // Helper for week view with time axis
  const getItemsForDateTime = (date: Date, timeSlot: string) => {
    return items.filter(item => {
      if (item.date.toDateString() !== date.toDateString()) return false;
      if (!item.timeSlot) return false;
      // Match the hour and half-hour
      const itemParts = item.timeSlot.split(':');
      const itemHour = parseInt(itemParts[0]);
      const itemMinute = parseInt(itemParts[1] || '0');
      
      const slotParts = timeSlot.split(':');
      const slotHour = parseInt(slotParts[0]);
      const slotMinute = parseInt(slotParts[1] || '0');
      
      // Match if in same 30-minute block
      return itemHour === slotHour && Math.floor(itemMinute / 30) === Math.floor(slotMinute / 30);
    });
  };

  // Week view with time axis
  if (timeGranularity === 'week') {
    // Generate time slots based on selected range - 30 minute granularity
    const getTimeSlots = () => {
      let startHour = 6;
      let endHour = 24;
      
      if (timeRange === 'focus') {
        startHour = 8;
        endHour = 20;
      } else if (timeRange === 'full') {
        startHour = 0;
        endHour = 24;
      }
      
      const slots: { time: string; isHalfHour: boolean }[] = [];
      for (let h = startHour; h < endHour; h++) {
        slots.push({ time: `${h.toString().padStart(2, '0')}:00`, isHalfHour: false });
        slots.push({ time: `${h.toString().padStart(2, '0')}:30`, isHalfHour: true });
      }
      return slots;
    };

    const timeSlots = getTimeSlots();

    // Calculate current time position for the time indicator line
    const getCurrentTimePosition = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      
      let startHour = 6;
      if (timeRange === 'focus') {
        startHour = 8;
      } else if (timeRange === 'full') {
        startHour = 0;
      }
      
      // Calculate position in pixels (each 30-min slot is 36px)
      const minutesSinceStart = (currentHour - startHour) * 60 + currentMinute;
      const pixelPosition = (minutesSinceStart / 30) * 36;
      
      return {
        position: pixelPosition,
        timeString: `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`,
        isVisible: currentHour >= startHour && currentHour < (timeRange === 'focus' ? 20 : timeRange === 'full' ? 24 : 24)
      };
    };

    const currentTimeInfo = getCurrentTimePosition();

    // Draggable Card Component for time slots - simplified without time display
    const DraggableTimeSlotCard = ({ 
      item, 
      onClick,
      isPeakTime = false,
    }: { 
      item: ContentItem; 
      onClick: () => void;
      isPeakTime?: boolean;
    }) => {
      const [{ isDragging }, drag] = useDrag(() => ({
        type: 'CONTENT_ITEM',
        item: { id: item.id, item },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }), [item.id]);

      const isAI = item.isAISuggested;

      return (
        <div
          ref={drag as any}
          onClick={onClick}
          className={`group h-full px-1.5 py-1 rounded-md cursor-move hover:shadow-lg transition-all flex items-center relative overflow-hidden ${
            item.status === 'due' ? 'ring-1 ring-[#D97706]/30' : ''
          } ${isDragging ? 'opacity-50 scale-105' : ''} ${
            isAI
              ? 'bg-violet-50 border border-dashed border-violet-300 dark:bg-violet-950/35 dark:border-violet-700'
              : 'bg-card border border-border'
          }`}
          style={{
            borderLeftWidth: '4px',
            borderLeftStyle: 'solid',
            borderLeftColor: isAI ? '#a855f7' : getSlotTypeColor(item.labels),
          }}
        >
          {/* AI Icon */}
          {isAI && (
            <div className="mr-1.5 flex-shrink-0 text-violet-600 dark:text-violet-300">
              <Sparkles className="w-3 h-3" />
            </div>
          )}

          {/* Peak Time Indicator */}
          {isPeakTime && !isAI && (
             <div className="mr-1.5 flex-shrink-0 text-[#0F766E]" title="Scheduled at peak time">
               <TrendingUp className="w-3 h-3" />
             </div>
          )}

          <p className={`${isAI ? 'text-violet-700 dark:text-violet-200' : 'text-foreground'} line-clamp-1 flex-1`} style={{ fontSize: '10px', fontWeight: '600' }}>
            {parseHashtags(item.title)}
          </p>

          {/* AI Actions - Visible on Hover */}
          {isAI && (
            <div className="absolute right-0 top-0 bottom-0 flex items-center bg-violet-50 dark:bg-violet-950/35 pl-1 pr-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAcceptSuggestion(item.id);
                }}
                className="p-0.5 rounded hover:bg-violet-200 dark:hover:bg-violet-800/70 text-violet-700 dark:text-violet-200 mr-1"
                title="Accept suggestion"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRejectSuggestion(item.id);
                }}
                className="p-0.5 rounded hover:bg-red-100 dark:hover:bg-red-900/40 text-red-500 dark:text-red-300"
                title="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      );
    };

    const TimeSlotCell = ({ 
      date, 
      timeSlot,
      isHalfHour
    }: { 
      date: Date; 
      timeSlot: string;
      isHalfHour: boolean;
    }) => {
      const [{ isOver }, drop] = useDrop(() => ({
        accept: 'CONTENT_ITEM',
        drop: (dragItem: { id: string; item: ContentItem }) => {
          // Update with the exact time slot
          onDateDrop(dragItem.id, date, timeSlot);
        },
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }), [date, timeSlot]);

      // Get items for this specific time slot
      const cellItems = items.filter(item => {
        if (item.date.toDateString() !== date.toDateString()) return false;
        if (!item.timeSlot) return false;
        return item.timeSlot === timeSlot;
      });

      const hasItems = cellItems.length > 0;

      // Check if this time slot is in the recommended posting window
      const bestWindow = getBestPostingWindow(date);
      const slotHour = parseInt(timeSlot.split(':')[0]);
      const isRecommendedWindow = (slotHour >= bestWindow.startHour && slotHour < bestWindow.endHour);
      const isPeakTime = (timeSlot === bestWindow.peakTime);

      return (
        <div
          ref={drop as any}
          className={`relative border-r transition-all hover:bg-[#F8F9FA] p-0.5 ${
            isHalfHour ? 'border-b border-[#E5E7EB]' : ''
          } ${
            isOver ? 'bg-[#F0FDFA] border-2 border-[#0F766E] border-dashed' : isRecommendedWindow ? 'bg-[#F0FDFA]/40' : 'bg-white'
          }`}
          style={{
            height: '36px',
            minHeight: '36px',
          }}
        >
          {/* Recommended posting window indicator - Only show when NO items */}
          {isPeakTime && !hasItems && (
            <div className="absolute top-0.5 right-0.5 z-0 pointer-events-none">
              <Tooltip content="Based on your audience activity / niche benchmarks." position="left">
                <div className="flex items-center gap-0.5 px-1 py-0.5 rounded bg-[#F0FDFA] border border-[#0F766E]/30">
                  <TrendingUp className="w-2 h-2 text-[#0F766E]" />
                  <span className="text-[#0F766E]" style={{ fontSize: '8px', fontWeight: '600' }}>
                    Best
                  </span>
                </div>
              </Tooltip>
            </div>
          )}

          {/* Cards stacked horizontally - overlapping with each card partially visible */}
          <div className="relative h-full z-10">
            {cellItems.slice(0, 5).map((item, index) => (
              <div
                key={item.id}
                className="absolute top-0 bottom-0"
                style={{
                  left: `${index * 32}px`,
                  right: index === Math.min(cellItems.length, 5) - 1 ? '2px' : undefined,
                  width: index === Math.min(cellItems.length, 5) - 1 ? undefined : 'calc(100% - ' + (index * 32) + 'px)',
                  zIndex: 10 + index,
                }}
              >
                <DraggableTimeSlotCard 
                  item={item} 
                  onClick={() => onItemClick(item)}
                  isPeakTime={isPeakTime} // Pass isPeakTime to the card
                />
              </div>
            ))}
            
            {/* Warning when more than 5 cards */}
            {cellItems.length > 5 && (
              <div className="absolute top-0 right-0 z-50">
                <Tooltip content={`This time slot has ${cellItems.length} items. Maximum 5 can be displayed. Please reschedule some items.`} position="left">
                  <div className="flex items-center gap-0.5 px-1 py-0.5 rounded bg-[#ef4444]/90 border border-[#dc2626]">
                    <AlertCircle className="w-2.5 h-2.5 text-white" />
                    <span className="text-white" style={{ fontSize: '8px', fontWeight: '700' }}>
                      +{cellItems.length - 5}
                    </span>
                  </div>
                </Tooltip>
              </div>
            )}
          </div>
        </div>
      );
    };

    return (
      <div className="flex-1 overflow-auto bg-[#fafafa]">
        {/* Desktop view */}
        <div className="hidden lg:block min-w-[1000px]">
          {/* Header Row with Days */}
          <div className="grid grid-cols-8 bg-white border-b border-[#e0e0e0] sticky top-0 z-10">
            {/* Empty cell for time column */}
            <div className="px-2 py-3 border-r border-[#e0e0e0] bg-[#fafafa]">
              <span className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '700' }}>
                Time
              </span>
            </div>
            {/* Day headers */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName, idx) => {
              const day = days[idx];
              return (
                <div key={dayName} className="px-2 py-3 border-r border-[#e0e0e0] text-center">
                  <div className="text-[#666666] mb-1" style={{ fontSize: '11px', fontWeight: '700' }}>
                    {dayName}
                  </div>
                  <div
                    className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${
                      isToday(day) ? 'bg-[#1a1a1a] text-white' : 'text-[#1a1a1a]'
                    }`}
                    style={{ fontSize: '13px', fontWeight: isToday(day) ? '700' : '600' }}
                  >
                    {day.getDate()}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Time Slots Grid Container - with relative positioning for current time line */}
          <div className="relative">
            {timeSlots.map((slot) => (
              <div key={slot.time} className="grid grid-cols-8">
                {/* Time Label - only show on full hours */}
                <div className={`px-2 py-1 border-r bg-[#fafafa] flex items-start ${
                  slot.isHalfHour ? 'border-b border-[#e0e0e0]' : ''
                }`} style={{ height: '36px' }}>
                  {!slot.isHalfHour && (
                    <span className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                      {slot.time}
                    </span>
                  )}
                </div>
                {/* Time slot cells for each day */}
                {days.map((day, idx) => (
                  <TimeSlotCell key={`${slot.time}-${idx}`} date={day} timeSlot={slot.time} isHalfHour={slot.isHalfHour} />
                ))}
              </div>
            ))}
            
            {/* Current Time Indicator Line */}
            {currentTimeInfo.isVisible && (
              <div 
                className="absolute left-0 right-0 z-30 pointer-events-none"
                style={{ 
                  top: `${currentTimeInfo.position}px`,
                }}
              >
                {/* Time label circle */}
                <div className="absolute left-0 flex items-center">
                  <div className="bg-[#0F766E] text-white px-2 py-0.5 rounded-full shadow-lg ml-1 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    <span style={{ fontSize: '10px', fontWeight: '700' }}>
                      {currentTimeInfo.timeString}
                    </span>
                  </div>
                </div>
                
                {/* Horizontal line across all days */}
                <div 
                  className="absolute left-0 right-0 h-0.5 bg-[#0F766E] shadow-md"
                  style={{
                    marginLeft: 'calc(12.5% + 0px)', // Start after time column (1/8 width)
                  }}
                />
                
                {/* Arrow head at the end */}
                <div 
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent',
                    borderLeft: '6px solid #0F766E',
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Mobile view - simplified list */}
        <div className="lg:hidden p-4">
          <div className="bg-card rounded-[12px] border border-border p-4 mb-4">
            <p className="text-muted-foreground text-center" style={{ fontSize: '13px' }}>
              Time axis view is optimized for desktop. Switch to Month view or use desktop for full calendar.
            </p>
          </div>
          {days.map((day) => {
            const dayItems = getItemsForDate(day);
            if (dayItems.length === 0) return null;
            return (
              <div key={day.toDateString()} className="bg-card rounded-[12px] border border-border p-4 mb-3">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-foreground" style={{ fontSize: '14px', fontWeight: '700' }}>
                    {day.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </h3>
                  <span className="text-muted-foreground" style={{ fontSize: '12px' }}>
                    {dayItems.length} item{dayItems.length > 1 ? 's' : ''}
                  </span>
                </div>
                <div className="space-y-2">
                  {dayItems.map(item => (
                    <div
                      key={item.id}
                      onClick={() => onItemClick(item)}
                      className="p-3 rounded-lg cursor-move hover:bg-muted hover:shadow-md transition-all bg-card border border-border"
                      style={{ 
                        borderLeft: `6px solid ${getSlotTypeColor(item.labels)}`,
                      }}
                    >
                      <p className="text-foreground mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                        {parseHashtags(item.title)}
                      </p>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        {item.timeSlot && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span style={{ fontSize: '11px' }}>{item.timeSlot}</span>
                          </div>
                        )}
                        <span style={{ fontSize: '11px' }}>{getStatusLabel(item.status)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Month view (original implementation)
  const DateCell = ({ date }: { date: Date }) => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: 'CONTENT_ITEM',
      drop: (dragItem: { id: string; item: ContentItem }) => {
        onDateDrop(dragItem.id, date);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }), [date]);

    const dateItems = getItemsForDate(date);
    const hasConflict = dateItems.filter(item => item.timeSlot).length > 3; // More than 3 in a day

    return (
      <div
        ref={drop as any}
        className={`min-h-[120px] p-2 border-b border-r transition-all ${
          isOver ? 'bg-[#dbeafe] border-2 border-[#3b82f6] border-dashed' : 'bg-white border-[#e0e0e0]'
        } ${!isCurrentMonth(date) && timeGranularity === 'month' ? 'bg-[#fafafa]' : ''}`}
      >
        <div className="flex items-center justify-between mb-2">
          <span
            className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
              isToday(date) ? 'bg-[#1a1a1a] text-white' : 'text-[#1a1a1a]'
            } ${!isCurrentMonth(date) && timeGranularity === 'month' ? 'text-[#999999]' : ''}`}
            style={{ fontSize: '12px', fontWeight: isToday(date) ? '700' : '600' }}
          >
            {date.getDate()}
          </span>
          {dateItems.length > 0 && (
            <div className="flex items-center gap-1">
              {hasConflict && (
                <div title="Time slot conflict">
                  <AlertCircle className="w-3 h-3 text-[#ef4444]" />
                </div>
              )}
              <span className="text-[#999999]" style={{ fontSize: '10px' }}>
                {dateItems.length}
              </span>
            </div>
          )}
        </div>
        <div className="space-y-1.5">
          {dateItems.slice(0, 3).map(item => (
            <DraggableContentCard
              key={item.id}
              item={item}
              onClick={() => onItemClick(item)}
              compact
            />
          ))}
          {dateItems.length > 3 && (
            <div className="text-center text-[#666666] py-1" style={{ fontSize: '11px' }}>
              +{dateItems.length - 3} more
            </div>
          )}
        </div>
        <button
          onClick={() => onQuickAdd(date)}
          className="w-full mt-2 py-1 rounded-md border border-dashed border-[#e0e0e0] text-[#999999] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-colors flex items-center justify-center gap-1"
          style={{ fontSize: '11px' }}
        >
          <Plus className="w-3 h-3" />
          Add
        </button>
      </div>
    );
  };

  return (
    <div className="flex-1 overflow-auto bg-[#fafafa]">
      <div className="min-w-[900px]">
        {/* Weekday Headers */}
        <div className="grid grid-cols-7 bg-white border-b border-[#e0e0e0]">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="px-2 py-3 border-r border-[#e0e0e0] text-center">
              <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '700' }}>
                {day}
              </span>
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7">
          {days.map((date, idx) => (
            <DateCell key={idx} date={date} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== KANBAN VIEW ====================

interface KanbanViewProps {
  items: ContentItem[];
  onItemClick: (item: ContentItem) => void;
  onStatusChange: (itemId: string, newStatus: ContentStatus) => void;
}

function KanbanView({ items, onItemClick, onStatusChange }: KanbanViewProps) {
  // Group statuses for better Kanban organization
  const statusGroups: { status: ContentStatus; label: string }[] = [
    { status: 'draft', label: 'Draft' },
    { status: 'script-ready', label: 'Script Ready' },
    { status: 'scheduled', label: 'Scheduled' },
    { status: 'due', label: 'Due' },
    { status: 'published-on-plan', label: 'Published' },
    { status: 'not-published-yet', label: 'Not Published Yet' },
  ];

  const KanbanColumn = ({ status, label }: { status: ContentStatus; label: string }) => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: 'CONTENT_ITEM',
      drop: (dragItem: { id: string; item: ContentItem }) => {
        onStatusChange(dragItem.id, status);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }), [status]);

    // For published column, show both on-plan and off-plan
    const columnItems = status === 'published-on-plan' 
      ? items.filter(item => item.status === 'published-on-plan' || item.status === 'published-off-plan')
      : items.filter(item => item.status === status);

    return (
      <div className="flex-1 min-w-[260px] bg-[#fafafa] rounded-xl p-3">
        <div className="flex items-center justify-between mb-3 px-2">
          <div className="flex items-center gap-2">
            <h3 className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '700' }}>
              {label}
            </h3>
            <span className="text-[#999999]" style={{ fontSize: '12px' }}>
              {columnItems.length}
            </span>
          </div>
          <button className="p-1 hover:bg-white rounded-md transition-colors">
            <Plus className="w-3.5 h-3.5 text-[#666666]" />
          </button>
        </div>
        <div
          ref={drop as any}
          className={`space-y-2 min-h-[400px] rounded-lg transition-all p-2 ${
            isOver ? 'bg-[#dbeafe] border-2 border-[#3b82f6] border-dashed' : 'border-2 border-transparent'
          }`}
        >
          {columnItems.map(item => (
            <div key={item.id} className="bg-card rounded-xl border border-border">
              <DraggableContentCard 
                item={item} 
                onClick={() => onItemClick(item)} 
                showFooterDate={true}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 overflow-auto p-6 bg-white">
      <div className="flex gap-4 min-w-max">
        {statusGroups.map(group => (
          <KanbanColumn key={group.status} status={group.status} label={group.label} />
        ))}
      </div>
    </div>
  );
}

// ==================== LIST VIEW ====================

interface ListViewProps {
  items: ContentItem[];
  onItemClick: (item: ContentItem) => void;
}

function ListView({ items, onItemClick }: ListViewProps) {
  const [sortField, setSortField] = React.useState<'date' | 'title' | 'status'>('date');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');

  const sortedItems = [...items].sort((a, b) => {
    let comparison = 0;
    if (sortField === 'date') {
      comparison = a.date.getTime() - b.date.getTime();
    } else if (sortField === 'title') {
      comparison = a.title.localeCompare(b.title);
    } else if (sortField === 'status') {
      comparison = a.status.localeCompare(b.status);
    }
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const handleSort = (field: 'date' | 'title' | 'status') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <div className="flex-1 overflow-auto bg-white">
      <table className="w-full">
        <thead className="bg-[#fafafa] border-b border-[#e0e0e0] sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort('date')}
                className="flex items-center gap-1 text-[#666666] hover:text-[#1a1a1a] transition-colors"
                style={{ fontSize: '12px', fontWeight: '700' }}
              >
                DATE / TIME
                <ChevronDown className={`w-3 h-3 transition-transform ${sortField === 'date' && sortDirection === 'desc' ? 'rotate-180' : ''}`} />
              </button>
            </th>
            <th className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort('title')}
                className="flex items-center gap-1 text-[#666666] hover:text-[#1a1a1a] transition-colors"
                style={{ fontSize: '12px', fontWeight: '700' }}
              >
                TITLE
                <ChevronDown className={`w-3 h-3 transition-transform ${sortField === 'title' && sortDirection === 'desc' ? 'rotate-180' : ''}`} />
              </button>
            </th>
            <th className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort('status')}
                className="flex items-center gap-1 text-[#666666] hover:text-[#1a1a1a] transition-colors"
                style={{ fontSize: '12px', fontWeight: '700' }}
              >
                STATUS
                <ChevronDown className={`w-3 h-3 transition-transform ${sortField === 'status' && sortDirection === 'desc' ? 'rotate-180' : ''}`} />
              </button>
            </th>
            <th className="px-4 py-3 text-left">
              <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '700' }}>TIME DELTA</span>
            </th>
            <th className="px-4 py-3 text-left">
              <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '700' }}>SLOT TYPE</span>
            </th>
            <th className="px-4 py-3 text-left">
              <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '700' }}>UPDATED</span>
            </th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map(item => {
            const showTimeDelta = (item.status === 'published-on-plan' || item.status === 'published-off-plan') && item.timeDelta !== undefined;
            return (
              <tr
                key={item.id}
                onClick={() => onItemClick(item)}
                className={`border-b border-[#E5E7EB] hover:bg-[#F8F9FA] cursor-pointer transition-colors ${
                  item.status === 'due' ? 'bg-[#FEF3C7]/20' : ''
                }`}
              >
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                      {item.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    {item.timeSlot && (
                      <span className="text-[#666666]" style={{ fontSize: '11px' }}>
                        {item.timeSlot}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                    {parseHashtags(item.title)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className="px-2 py-1 rounded border"
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: '600',
                      borderColor: '#e0e0e0',
                      color: '#666666',
                      backgroundColor: '#fafafa'
                    }}
                  >
                    {getStatusLabel(item.status)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {showTimeDelta ? (
                    <span className="text-[#666666]" style={{ fontSize: '11px' }}>
                      {formatTimeDelta(item.timeDelta!)}
                    </span>
                  ) : (
                    <span className="text-[#e0e0e0]" style={{ fontSize: '11px' }}>—</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    {item.labels.map(label => (
                      <span
                        key={label.id}
                        className="px-2 py-0.5 rounded text-white"
                        style={{ 
                          backgroundColor: label.color, 
                          fontSize: '10px', 
                          fontWeight: '600' 
                        }}
                        title={label.description}
                      >
                        {label.name}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-[#999999]" style={{ fontSize: '11px' }}>
                    {item.lastUpdated.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="p-1 hover:bg-[#f5f5f5] rounded-md transition-colors"
                  >
                    <MoreHorizontal className="w-4 h-4 text-[#666666]" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ==================== LINKED SCRIPT SECTION ====================

// Mock scripts data - in real app this would come from ContentStudio state
const mockScripts = [
  {
    id: 'script-1',
    title: '5 iPhone Features Apple Hides',
    contentType: 'Product Review',
    status: 'Ready' as const,
    updatedAt: new Date(2026, 0, 20),
    scenes: [
      { id: 's1', role: 'Hook' },
      { id: 's2', role: 'Context' },
      { id: 's3', role: 'Value' },
      { id: 's4', role: 'Proof' },
      { id: 's5', role: 'CTA' },
    ],
  },
  {
    id: 'script-2',
    title: 'Budget Laptop Comparison 2026',
    contentType: 'Product Review',
    status: 'Ready' as const,
    updatedAt: new Date(2026, 0, 19),
    scenes: [
      { id: 's1', role: 'Hook' },
      { id: 's2', role: 'Context' },
      { id: 's3', role: 'Value' },
      { id: 's4', role: 'Proof' },
      { id: 's5', role: 'CTA' },
    ],
  },
  {
    id: 'script-3',
    title: 'Morning Routine for Productivity',
    contentType: 'Tutorial',
    status: 'Draft' as const,
    updatedAt: new Date(2026, 0, 21),
    scenes: [
      { id: 's1', role: 'Hook' },
      { id: 's2', role: 'Context' },
      { id: 's3', role: 'Value' },
    ],
  },
];

interface LinkedScriptSectionProps {
  item: ContentItem;
  onUpdate: (updates: Partial<ContentItem>) => void;
}

function LinkedScriptSection({ item, onUpdate }: LinkedScriptSectionProps) {
  const [showScriptSelector, setShowScriptSelector] = React.useState(false);
  const linkedScript = item.linkedScriptId
    ? mockScripts.find(s => s.id === item.linkedScriptId)
    : undefined;

  const handleSelectScript = (script: any) => {
    onUpdate({
      linkedScriptId: script.id,
      linkedScriptTitle: script.title,
    });
    setShowScriptSelector(false);
  };

  const handleUnlinkScript = () => {
    onUpdate({
      linkedScriptId: undefined,
      linkedScriptTitle: undefined,
    });
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
            Linked Script
          </label>
          {linkedScript && (
            <button
              onClick={handleUnlinkScript}
              className="p-1 rounded hover:bg-[#fee2e2] transition-colors"
              title="Unlink script"
            >
              <X className="w-3 h-3 text-[#dc2626]" />
            </button>
          )}
        </div>
        
        {linkedScript ? (
          <div className="p-3 rounded-lg bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] border border-[#3b82f6]">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#3b82f6] flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-[#1a1a1a] mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                  {linkedScript.title}
                </h4>
                <p className="text-[#666666] mb-2" style={{ fontSize: '12px' }}>
                  {linkedScript.contentType} · {linkedScript.scenes.length} scenes
                </p>
                <button
                  className="flex items-center gap-1 text-[#3b82f6] hover:text-[#2563eb] transition-colors"
                  style={{ fontSize: '12px', fontWeight: '600' }}
                >
                  <span>View in Studio</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowScriptSelector(true)}
            className="w-full p-3 rounded-lg border-2 border-dashed border-[#e0e0e0] hover:border-[#3b82f6] hover:bg-[#f5f5f5] transition-all flex items-center justify-center gap-2 text-[#666666] hover:text-[#3b82f6]"
          >
            <LinkIcon className="w-4 h-4" />
            <span style={{ fontSize: '13px', fontWeight: '600' }}>Link existing script</span>
          </button>
        )}
      </div>

      <ScriptSelectorModal
        isOpen={showScriptSelector}
        onClose={() => setShowScriptSelector(false)}
        onSelect={handleSelectScript}
        selectedScriptId={linkedScript?.id}
        scripts={mockScripts}
      />
    </>
  );
}

// ==================== DETAIL DRAWER ====================

interface DetailDrawerProps {
  item: ContentItem | null;
  onClose: () => void;
  onSave: (item: ContentItem) => void;
  onDelete: (id: string) => void;
  onDuplicate: (item: ContentItem) => void;
}

function DetailDrawer({ item, onClose, onSave, onDelete, onDuplicate }: DetailDrawerProps) {
  const [editedItem, setEditedItem] = React.useState<ContentItem | null>(item);

  React.useEffect(() => {
    setEditedItem(item);
  }, [item]);

  if (!item || !editedItem) return null;

  const showQuickActions = editedItem.status === 'due' || editedItem.status === 'not-published-yet';
  const showTimeDelta = (editedItem.status === 'published-on-plan' || editedItem.status === 'published-off-plan') && editedItem.timeDelta !== undefined;
  const isAI = editedItem.isAISuggested;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#e0e0e0]">
          {/* AI Suggestion Alert */}
          {isAI && (
             <div className="mb-4 p-3 bg-[#faf5ff] border border-[#d8b4fe] rounded-lg flex items-start gap-3">
               <div className="p-1.5 bg-[#f3e8ff] rounded-full text-[#a855f7]">
                 <Sparkles className="w-4 h-4" />
               </div>
               <div className="flex-1">
                  <h4 className="text-[#6b21a8] font-semibold mb-1" style={{ fontSize: '13px' }}>
                    AI Suggested Schedule
                  </h4>
                  <p className="text-[#7e22ce] leading-relaxed" style={{ fontSize: '12px' }}>
                    {editedItem.suggestionReason || 'Optimized based on your content strategy and best posting times.'}
                  </p>
                </div>
               <div className="flex items-center gap-2">
                 <button
                   onClick={() => {
                     // Reject logic
                     onDelete(editedItem.id);
                     onClose();
                   }}
                   className="px-3 py-1.5 bg-white border border-red-200 text-red-500 rounded-lg hover:bg-red-50 transition-colors shadow-sm"
                   style={{ fontSize: '12px', fontWeight: '600' }}
                 >
                   Dismiss
                 </button>
                 <button
                   onClick={() => setEditedItem({ ...editedItem, isAISuggested: false })}
                   className="px-3 py-1.5 bg-[#a855f7] text-white rounded-lg hover:bg-[#9333ea] transition-colors shadow-sm"
                   style={{ fontSize: '12px', fontWeight: '600' }}
                 >
                   Confirm & Keep
                 </button>
               </div>
             </div>
          )}

          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <input
                type="text"
                value={editedItem.title}
                onChange={(e) => setEditedItem({ ...editedItem, title: e.target.value })}
                placeholder="Add title and hashtags..."
                className="w-full text-[#1a1a1a] bg-transparent border-none outline-none placeholder:text-[#999999]"
                style={{ fontSize: '18px', fontWeight: '700' }}
              />
              <div className="mt-1 text-[#999999]" style={{ fontSize: '11px' }}>
                Use #hashtags to improve discoverability
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#f5f5f5] transition-colors ml-2"
            >
              <X className="w-5 h-5 text-[#666666]" />
            </button>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <select
              value={editedItem.status}
              onChange={(e) => setEditedItem({ ...editedItem, status: e.target.value as ContentStatus })}
              className="px-3 py-1.5 rounded-lg border border-[#e0e0e0] text-[#1a1a1a] outline-none focus:ring-2 focus:ring-[#1a1a1a]/10"
              style={{ fontSize: '12px', fontWeight: '600' }}
            >
              {(['draft', 'script-ready', 'scheduled', 'published-on-plan', 'not-published-yet'] as ContentStatus[]).map(status => (
                <option key={status} value={status}>{getStatusLabel(status)}</option>
              ))}
            </select>
            <span className="text-[#999999]" style={{ fontSize: '11px' }}>
              {getStatusDescription(editedItem.status)}
            </span>
          </div>
          {showTimeDelta && (
            <div className="mt-2 px-3 py-1.5 bg-[#f5f5f5] rounded-lg">
              <span className="text-[#666666]" style={{ fontSize: '11px' }}>
                Actual publish time: {editedItem.actualPublishTime?.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                {' '}
                ({formatTimeDelta(editedItem.timeDelta!)})
              </span>
            </div>
          )}
        </div>

        {/* Quick Actions for DUE and NOT_PUBLISHED_YET */}
        {showQuickActions && (
          <div className="px-6 py-3 bg-[#F0FDFA] border-b border-[#0F766E]/20">
            <p className="text-[#0F766E] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
              {editedItem.status === 'due' ? 'In publish window - please confirm:' : 'You can:'}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditedItem({ ...editedItem, status: 'published-on-plan', actualPublishTime: new Date(), timeDelta: 0 });
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#059669] text-white rounded-lg hover:bg-[#047857] transition-colors"
                style={{ fontSize: '12px', fontWeight: '600' }}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Mark Published
              </button>
              <button
                onClick={() => {
                  // TODO: Open reschedule modal
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg hover:bg-[#F8F9FA] transition-colors"
                style={{ fontSize: '12px', fontWeight: '600' }}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reschedule
              </button>
              <button
                onClick={() => {
                  // TODO: Navigate to script editor
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg hover:bg-[#F8F9FA] transition-colors"
                style={{ fontSize: '12px', fontWeight: '600' }}
              >
                <FileText className="w-3.5 h-3.5" />
                Continue Preparing
              </button>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
          {/* Basic Info */}
          <div>
            <h4 className="text-[#1a1a1a] mb-3" style={{ fontSize: '13px', fontWeight: '700' }}>
              Basic Information
            </h4>
            <div className="space-y-3">
              <div>
                <label className="block text-[#666666] mb-1.5" style={{ fontSize: '12px', fontWeight: '600' }}>
                  Publish Date
                </label>
                <input
                  type="date"
                  value={editedItem.date.toISOString().split('T')[0]}
                  onChange={(e) => setEditedItem({ ...editedItem, date: new Date(e.target.value) })}
                  className="w-full px-3 py-2 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] outline-none focus:ring-2 focus:ring-[#1a1a1a]/10"
                  style={{ fontSize: '13px' }}
                />
              </div>
              <div>
                <label className="block text-[#666666] mb-1.5" style={{ fontSize: '12px', fontWeight: '600' }}>
                  Time Slot
                </label>
                <input
                  type="time"
                  value={editedItem.timeSlot || ''}
                  onChange={(e) => setEditedItem({ ...editedItem, timeSlot: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] outline-none focus:ring-2 focus:ring-[#1a1a1a]/10"
                  style={{ fontSize: '13px' }}
                />
              </div>
            </div>
          </div>

          {/* Slot Type */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
                Slot Type
              </label>
              <Tooltip content="Choose a slot type to categorize this content's strategic purpose: TRUST (engagement), RISK (monetization), TEST (exploration), or SEASONAL (events).">
                <div className="flex items-center justify-center w-4 h-4 rounded-full border border-[#999999] text-[#999999] hover:border-[#666666] hover:text-[#666666] transition-colors cursor-help">
                  <HelpCircle className="w-3 h-3" />
                </div>
              </Tooltip>
            </div>
            <div className="flex flex-wrap gap-2">
              {mockLabels.map(label => {
                const isSelected = editedItem.labels.some(l => l.id === label.id);
                return (
                  <Tooltip key={label.id} content={label.description}>
                    <button
                      onClick={() => {
                        if (isSelected) {
                          setEditedItem({
                            ...editedItem,
                            labels: editedItem.labels.filter(l => l.id !== label.id),
                          });
                        } else {
                          setEditedItem({
                            ...editedItem,
                            labels: [...editedItem.labels, label],
                          });
                        }
                      }}
                      className={`px-3 py-1.5 rounded-lg border transition-colors ${
                        isSelected
                          ? 'border-transparent text-white'
                          : 'border-[#e0e0e0] text-[#666666] hover:border-[#1a1a1a]'
                      }`}
                      style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        backgroundColor: isSelected ? label.color : 'transparent',
                      }}
                    >
                      {label.name}
                    </button>
                  </Tooltip>
                );
              })}
            </div>
          </div>

          {/* Linked Script */}
          <LinkedScriptSection
            item={editedItem}
            onUpdate={(updates) => setEditedItem({ ...editedItem, ...updates })}
          />

          {/* Brief/Notes */}
          <div>
            <label className="block text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
              Brief / Notes
            </label>
            <textarea
              value={editedItem.brief || ''}
              onChange={(e) => setEditedItem({ ...editedItem, brief: e.target.value })}
              placeholder="Add content brief, notes, or instructions..."
              rows={4}
              className="w-full px-3 py-2 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] placeholder:text-[#999999] outline-none focus:ring-2 focus:ring-[#1a1a1a]/10 resize-none"
              style={{ fontSize: '13px' }}
            />
          </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
          {/* Comments */}
          <div className="flex flex-col h-full">
            <label className="block text-[#666666] mb-3" style={{ fontSize: '12px', fontWeight: '600' }}>
              Notes & Comments
            </label>
            
            {/* Scrollable Comments Area */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-3 max-h-[400px] pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#e0e0e0 transparent' }}>
              <div className="p-3 bg-[#fafafa] rounded-lg border border-[#f0f0f0]">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-700 text-xs font-bold">SC</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '600' }}>Sarah Chen</span>
                      <span className="text-[#999999]" style={{ fontSize: '10px' }}>2 days ago</span>
                    </div>
                    <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                      Great idea! We should also cross-reference this with our Q1 trending topics dashboard.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#fafafa] rounded-lg border border-[#f0f0f0]">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">You</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '600' }}>You</span>
                      <span className="text-[#999999]" style={{ fontSize: '10px' }}>2 days ago</span>
                    </div>
                    <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                      Updated the script to include more engaging hooks in the first 3 seconds.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#fafafa] rounded-lg border border-[#f0f0f0]">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 text-xs font-bold">ML</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '600' }}>Marcus Liu</span>
                      <span className="text-[#999999]" style={{ fontSize: '10px' }}>3 days ago</span>
                    </div>
                    <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                      The thumbnail looks good but let's A/B test with a brighter color scheme.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#fafafa] rounded-lg border border-[#f0f0f0]">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">You</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '600' }}>You</span>
                      <span className="text-[#999999]" style={{ fontSize: '10px' }}>4 days ago</span>
                    </div>
                    <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                      Let's make sure to include the trending sound in this one! 🎵
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#fafafa] rounded-lg border border-[#f0f0f0]">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-700 text-xs font-bold">ER</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '600' }}>Emma Rodriguez</span>
                      <span className="text-[#999999]" style={{ fontSize: '10px' }}>5 days ago</span>
                    </div>
                    <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                      This aligns perfectly with our TRUST slot strategy. Approved!
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#fafafa] rounded-lg border border-[#f0f0f0]">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">You</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '600' }}>You</span>
                      <span className="text-[#999999]" style={{ fontSize: '10px' }}>1 week ago</span>
                    </div>
                    <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                      Initial concept created. Need feedback on the storytelling approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment Input - Fixed at bottom */}
            <div className="flex gap-2 pt-2 border-t border-[#f0f0f0]">
              <input
                type="text"
                placeholder="Add a note..."
                className="flex-1 px-3 py-2 bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg text-[#1a1a1a] placeholder:text-[#999999] outline-none focus:ring-2 focus:ring-[#1a1a1a]/10"
                style={{ fontSize: '12px' }}
              />
              <button className="px-3 py-2 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#404040] transition-colors">
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#e0e0e0] bg-[#fafafa] rounded-b-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onDuplicate(editedItem)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#e0e0e0] text-[#666666] hover:bg-white transition-colors"
                style={{ fontSize: '12px', fontWeight: '600' }}
              >
                <Copy className="w-3.5 h-3.5" />
                Duplicate
              </button>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to delete this item?')) {
                    onDelete(editedItem.id);
                    onClose();
                  }
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#e0e0e0] text-[#ef4444] hover:bg-white transition-colors"
                style={{ fontSize: '12px', fontWeight: '600' }}
              >
                <Trash2 className="w-3.5 h-3.5" />
                Delete
              </button>
            </div>
            <button
              onClick={() => {
                onSave(editedItem);
                onClose();
              }}
              className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#404040] transition-colors"
              style={{ fontSize: '13px', fontWeight: '600' }}
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== CREATE MODAL ====================

interface CreateModalProps {
  onClose: () => void;
  onCreate: (item: Partial<ContentItem>) => void;
  prefilledDate?: Date;
}

function CreateModal({ onClose, onCreate, prefilledDate }: CreateModalProps) {
  const [formData, setFormData] = React.useState({
    title: '',
    date: prefilledDate || new Date(),
    timeSlot: '09:00',
    contentType: 'video' as ContentType,
    labelIds: [] as string[],
  });

  const handleCreate = () => {
    const labels = mockLabels.filter(l => formData.labelIds.includes(l.id));

    onCreate({
      title: formData.title,
      date: formData.date,
      timeSlot: formData.timeSlot,
      contentType: formData.contentType,
      status: 'draft',
      labels,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="px-6 py-4 border-b border-[#e0e0e0]">
          <div className="flex items-center justify-between">
            <h2 className="text-[#1a1a1a]" style={{ fontSize: '18px', fontWeight: '700' }}>
              Create Content
            </h2>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#f5f5f5] transition-colors"
            >
              <X className="w-5 h-5 text-[#666666]" />
            </button>
          </div>
        </div>

        <div className="px-6 py-5 space-y-4">
          <div>
            <label className="block text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter content title with #hashtags"
              className="w-full px-3 py-2 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] placeholder:text-[#999999] outline-none focus:ring-2 focus:ring-[#1a1a1a]/10"
              style={{ fontSize: '13px' }}
              autoFocus
            />
            <p className="mt-1.5 text-[#999999]" style={{ fontSize: '11px' }}>
              Use #hashtags to improve discoverability on TikTok
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                Publish Date *
              </label>
              <input
                type="date"
                value={formData.date.toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, date: new Date(e.target.value) })}
                className="w-full px-3 py-2 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] outline-none focus:ring-2 focus:ring-[#1a1a1a]/10"
                style={{ fontSize: '13px' }}
              />
            </div>

            <div>
              <label className="block text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                Time Slot
              </label>
              <input
                type="time"
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] outline-none focus:ring-2 focus:ring-[#1a1a1a]/10"
                style={{ fontSize: '13px' }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
                Slot Type (Optional)
              </label>
              <Tooltip content="Choose a slot type to categorize this content's strategic purpose: TRUST (engagement), RISK (monetization), TEST (exploration), or SEASONAL (events).">
                <div className="flex items-center justify-center w-4 h-4 rounded-full border border-[#999999] text-[#999999] hover:border-[#666666] hover:text-[#666666] transition-colors cursor-help">
                  <HelpCircle className="w-3 h-3" />
                </div>
              </Tooltip>
            </div>
            <div className="flex flex-wrap gap-2">
              {mockLabels.map(label => {
                const isSelected = formData.labelIds.includes(label.id);
                return (
                  <Tooltip key={label.id} content={label.description}>
                    <button
                      onClick={() => {
                        if (isSelected) {
                          setFormData({
                            ...formData,
                            labelIds: formData.labelIds.filter(id => id !== label.id),
                          });
                        } else {
                          setFormData({
                            ...formData,
                            labelIds: [...formData.labelIds, label.id],
                          });
                        }
                      }}
                      className={`px-3 py-1.5 rounded-lg border transition-colors ${
                        isSelected
                          ? 'border-transparent text-white'
                          : 'border-[#e0e0e0] text-[#666666] hover:border-[#1a1a1a]'
                      }`}
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        backgroundColor: isSelected ? label.color : 'transparent',
                      }}
                    >
                      {label.name}
                    </button>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-[#e0e0e0] bg-[#fafafa] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-[#e0e0e0] text-[#666666] hover:bg-white transition-colors"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            disabled={!formData.title}
            className="px-4 py-2 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#404040] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            Create Content
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== MAIN COMPONENT ====================

export function SchedulingSlotsNew({
  onNavigate,
  conversations = [],
  currentConversationId,
  onSelectConversation,
  onDeleteConversation,
}: SchedulingSlotsNewProps) {
  const { trigger } = useSimulationTrigger();
  const [viewMode, setViewMode] = React.useState<ViewMode>('calendar');
  const [timeGranularity, setTimeGranularity] = React.useState<'week' | 'month'>('week');
  const [currentDate, setCurrentDate] = React.useState(new Date(2026, 0, 27)); // Jan 27, 2026
  const [selectedView, setSelectedView] = React.useState('v1');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filters, setFilters] = React.useState({
    statuses: [] as ContentStatus[],
    labels: [] as string[],
  });
  const [items, setItems] = React.useState<ContentItem[]>(mockContentItems);
  const [selectedItem, setSelectedItem] = React.useState<ContentItem | null>(null);
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [createModalPrefilledDate, setCreateModalPrefilledDate] = React.useState<Date | undefined>();
  const [timeRange, setTimeRange] = React.useState<'focus' | 'extended' | 'full'>('extended');
  const [autoFitHours, setAutoFitHours] = React.useState(false);

  // Filter items
  const filteredItems = items.filter(item => {
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filters.statuses.length > 0) {
      // If 'published-on-plan' is selected, also include 'published-off-plan'
      const matchesStatus = filters.statuses.includes(item.status) ||
        (filters.statuses.includes('published-on-plan') && item.status === 'published-off-plan');
      if (!matchesStatus) {
        return false;
      }
    }
    if (filters.labels.length > 0 && !filters.labels.some(labelId => item.labels.some(l => l.id === labelId))) {
      return false;
    }
    return true;
  });

  const handleDateDrop = (itemId: string, newDate: Date, newTime?: string) => {
    setItems(items.map(item => {
      if (item.id === itemId) {
        const updates: Partial<ContentItem> = { 
          date: newDate, 
          lastUpdated: new Date() 
        };
        if (newTime) {
          updates.timeSlot = newTime;
        }
        return { ...item, ...updates };
      }
      return item;
    }));
  };

  const handleStatusChange = (itemId: string, newStatus: ContentStatus) => {
    setItems(items.map(item =>
      item.id === itemId ? { ...item, status: newStatus, lastUpdated: new Date() } : item
    ));
  };

  const handleSaveItem = (updatedItem: ContentItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? { ...updatedItem, lastUpdated: new Date() } : item)));
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleDuplicateItem = (item: ContentItem) => {
    const newItem: ContentItem = {
      ...item,
      id: Date.now().toString(),
      title: `${item.title} (Copy)`,
      status: 'draft',
      lastUpdated: new Date(),
    };
    setItems([...items, newItem]);
  };

  const handleCreateItem = (newItemData: Partial<ContentItem>) => {
    const newItem: ContentItem = {
      id: Date.now().toString(),
      title: newItemData.title || 'Untitled',
      date: newItemData.date || new Date(),
      timeSlot: newItemData.timeSlot,
      contentType: newItemData.contentType || 'video',
      status: newItemData.status || 'draft',
      labels: newItemData.labels || [],
      lastUpdated: new Date(),
    };
    setItems([...items, newItem]);
  };

  const handleQuickAdd = (date: Date) => {
    setCreateModalPrefilledDate(date);
    setShowCreateModal(true);
  };

  const handleAcceptSuggestion = (itemId: string) => {
    setItems(items.map(item =>
      item.id === itemId ? { ...item, isAISuggested: false, status: 'draft' } : item
    ));
  };

  const handleRejectSuggestion = (itemId: string) => {
    if (confirm('Dismiss this suggestion?')) {
      setItems(items.filter(item => item.id !== itemId));
    }
  };

  const handleItemClick = (item: ContentItem) => {
    setSelectedItem(item);
    trigger();
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="simulation-overview-theme simulation-dark-surface flex h-screen bg-sidebar transition-colors duration-300">
        <SidebarPro
          activeItem="scheduling"
          onNavigate={onNavigate}
        />

        <div className="flex flex-1 overflow-hidden pb-[64px] md:pb-0">
          {/* Left Filter Panel - Hidden on Mobile */}
          <div className="hidden md:block">
            <LeftFilterPanel
              selectedView={selectedView}
              onSelectView={setSelectedView}
              filters={filters}
              onFilterChange={setFilters}
            />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Toolbar */}
            <TopToolbar
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              timeGranularity={timeGranularity}
              onTimeGranularityChange={setTimeGranularity}
              currentDate={currentDate}
              onDateChange={setCurrentDate}
              onCreateClick={() => {
                setCreateModalPrefilledDate(undefined);
                setShowCreateModal(true);
              }}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              timeRange={timeRange}
              onTimeRangeChange={setTimeRange}
              autoFitHours={autoFitHours}
              onAutoFitHoursChange={setAutoFitHours}
            />

            {/* View Content */}
            {viewMode === 'calendar' && (
              <CalendarView
                items={filteredItems}
                currentDate={currentDate}
                timeGranularity={timeGranularity}
                onItemClick={handleItemClick}
                onDateDrop={handleDateDrop}
                onQuickAdd={handleQuickAdd}
                timeRange={timeRange}
                onAcceptSuggestion={handleAcceptSuggestion}
                onRejectSuggestion={handleRejectSuggestion}
              />
            )}
            {viewMode === 'kanban' && (
              <KanbanView
                items={filteredItems}
                onItemClick={handleItemClick}
                onStatusChange={handleStatusChange}
              />
            )}
            {viewMode === 'list' && (
              <ListView items={filteredItems} onItemClick={handleItemClick} />
            )}
          </div>
        </div>

        {/* Detail Drawer */}
        {selectedItem && (
          <DetailDrawer
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            onSave={handleSaveItem}
            onDelete={handleDeleteItem}
            onDuplicate={handleDuplicateItem}
          />
        )}

        {/* Create Modal */}
        {showCreateModal && (
          <CreateModal
            onClose={() => {
              setShowCreateModal(false);
              setCreateModalPrefilledDate(undefined);
            }}
            onCreate={handleCreateItem}
            prefilledDate={createModalPrefilledDate}
          />
        )}

        {/* Bottom Tab Bar - Mobile Only */}
        <BottomTabBar 
          activeItem="scheduling" 
          onNavigate={onNavigate}
        />
      </div>
    </DndProvider>
  );
}

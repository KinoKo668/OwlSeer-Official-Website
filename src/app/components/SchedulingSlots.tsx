import React from 'react';
import { Calendar, ChevronLeft, ChevronRight, Sparkles, Clock, CheckCircle, Play, ArrowRight, MoreHorizontal, FileEdit, FileText, Link as LinkIcon } from 'lucide-react';
import { SidebarPro } from './SidebarPro';
import { BottomTabBar } from './BottomTabBar';
import { OptimalPostingWindows } from './OptimalPostingWindows';
import { ScriptSelectorModal } from './ScriptSelectorModal';
import { CreationExecutionPanelEnhanced } from './CreationExecutionPanelEnhanced';

interface SchedulingSlotsProps {
  onNavigate?: (page: string) => void;
  conversations?: Array<{
    id: string;
    title: string;
    messages: any[];
    createdAt: Date;
    updatedAt: Date;
  }>;
  currentConversationId?: string | null;
  onSelectConversation?: (id: string) => void;
  onDeleteConversation?: (id: string) => void;
}

export function SchedulingSlots({
  onNavigate,
  conversations = [],
  currentConversationId,
  onSelectConversation,
  onDeleteConversation,
}: SchedulingSlotsProps) {
  return (
    <div className="flex h-screen bg-[#fafafa]">
      <SidebarPro 
        activeItem="scheduling" 
        onNavigate={onNavigate}
        conversations={conversations}
        currentConversationId={currentConversationId}
        onSelectConversation={onSelectConversation}
        onDeleteConversation={onDeleteConversation}
        className="hidden md:flex"
      />
      
      <div className="flex-1 overflow-auto pb-[64px] md:pb-0">
        <SchedulingSlotsContent onNavigate={onNavigate} />
      </div>

      {/* Bottom Tab Bar - Mobile Only */}
      <BottomTabBar 
        activeItem="scheduling" 
        onNavigate={onNavigate}
      />
    </div>
  );
}

type TaskStatus = 'todo' | 'in-progress' | 'done';

interface ContentTask {
  id: string;
  title: string;
  purpose: string;
  description: string;
  status: TaskStatus;
  date: Date;
  structure?: string;
  isToday?: boolean;
  isPriority?: boolean;
  linkedScriptId?: string; // New - link to Content Studio script
  linkedScriptTitle?: string; // New - script title for display
}

function SchedulingSlotsContent({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [selectedTask, setSelectedTask] = React.useState<ContentTask | null>(null);
  const [currentWeekStart, setCurrentWeekStart] = React.useState(new Date(2025, 0, 6)); // Jan 6, 2025 (Monday)

  // Sample tasks for the week
  const weekTasks: ContentTask[] = [
    {
      id: 'task-1',
      title: 'Daily routine video',
      purpose: 'Keep momentum with proven format',
      description: 'Morning routine showing your signature style and energy',
      status: 'done',
      date: new Date(2025, 0, 6),
      structure: 'Your "Morning routine" format — performs 3.2x above average',
    },
    {
      id: 'task-2',
      title: 'Trending sound challenge',
      purpose: 'Reach new audiences',
      description: 'Quick reaction video featuring #DanceChallenge2025',
      status: 'in-progress',
      date: new Date(2025, 0, 7),
      structure: 'Short-form trend format — low effort, high potential',
      isToday: true,
      isPriority: true,
    },
    {
      id: 'task-3',
      title: 'Motivation message',
      purpose: 'Strengthen your core pillar',
      description: 'Inspire your audience with a personal story about overcoming challenges',
      status: 'todo',
      date: new Date(2025, 0, 8),
      structure: 'Your "Morning motivation" series format',
      isToday: true,
      isPriority: true,
    },
    {
      id: 'task-4',
      title: 'New year goal tips',
      purpose: 'Capture seasonal engagement',
      description: 'Share 5 actionable tips for setting and achieving goals in 2025',
      status: 'todo',
      date: new Date(2025, 0, 9),
      structure: 'List format with text overlay — works well for educational content',
    },
    {
      id: 'task-5',
      title: 'Product review',
      purpose: 'Monetization opportunity',
      description: 'Authentic showcase of FitGear Pro with personal demo',
      status: 'todo',
      date: new Date(2025, 0, 10),
      structure: 'Your review format — stay authentic to maintain trust',
    },
    {
      id: 'task-6',
      title: 'Weekend recap',
      purpose: 'Reconnect with your audience',
      description: 'Personal vlog sharing highlights from your weekend',
      status: 'todo',
      date: new Date(2025, 0, 11),
      structure: 'Casual vlog style — your most engaging format',
    },
    {
      id: 'task-7',
      title: 'Quick tutorial',
      purpose: 'Test shorter format',
      description: '60-second teaching moment on a topic your audience requested',
      status: 'todo',
      date: new Date(2025, 0, 12),
      structure: 'Step-by-step condensed format',
    },
  ];

  const getWeekDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(currentWeekStart);
      day.setDate(day.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const weekDays = getWeekDays();

  const getTasksForDay = (date: Date) => {
    return weekTasks.filter(task => 
      task.date.getDate() === date.getDate() &&
      task.date.getMonth() === date.getMonth()
    );
  };

  const goToPreviousWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentWeekStart(newDate);
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentWeekStart(newDate);
  };

  // Calculate progress
  const completedTasks = weekTasks.filter(t => t.status === 'done').length;
  const totalTasks = weekTasks.length;
  const progressPercent = Math.round((completedTasks / totalTasks) * 100);

  // Get priority tasks (today/up next)
  const priorityTasks = weekTasks.filter(t => t.isPriority && t.status !== 'done').slice(0, 2);

  // Auto-select first priority task if nothing selected
  React.useEffect(() => {
    if (!selectedTask && priorityTasks.length > 0) {
      setSelectedTask(priorityTasks[0]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Compact Header */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8 py-4 md:py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[#1a1a1a] mb-1" style={{ fontSize: '20px', fontWeight: '700' }}>
                Content Calendar
              </h1>
              <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                Week of {currentWeekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – {weekDays[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </p>
            </div>

            {/* Week Progress */}
            <div className="flex items-center gap-6">
              <div className="w-56">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px' }}>
                    WEEK PROGRESS
                  </span>
                  <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '700' }}>
                    {completedTasks} of {totalTasks}
                  </span>
                </div>
                <div className="h-2 bg-[#e0e0e0] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#1a1a1a] rounded-full transition-all"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={goToPreviousWeek}
                  className="p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-[#666666]" />
                </button>
                <button
                  onClick={goToNextWeek}
                  className="p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-[#666666]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Today / Up Next Banner */}
      {priorityTasks.length > 0 && (
        <div className="bg-white border-b border-[#e0e0e0]">
          <div className="max-w-[1800px] mx-auto px-4 md:px-8 py-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
                <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '700' }}>
                  Up Next
                </span>
              </div>
              
              <div className="flex-1 flex items-center gap-3">
                {priorityTasks.flatMap((task, index) => {
                  const elements = [
                    <button
                      key={`task-${task.id}`}
                      onClick={() => setSelectedTask(task)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg border-2 transition-all hover:shadow-md ${
                        selectedTask?.id === task.id
                          ? 'border-[#1a1a1a] bg-[#fafafa]'
                          : 'border-[#e0e0e0] bg-white'
                      }`}
                    >
                      {task.status === 'in-progress' && <Clock className="w-4 h-4 text-[#f59e0b]" />}
                      {task.status === 'todo' && <div className="w-4 h-4 rounded-full border-2 border-[#e0e0e0]" />}
                      <div>
                        <p className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                          {task.title}
                        </p>
                        <p className="text-[#666666]" style={{ fontSize: '11px' }}>
                          {task.purpose}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#999999]" />
                    </button>
                  ];
                  
                  if (index < priorityTasks.length - 1) {
                    elements.push(
                      <div key={`sep-${task.id}`} className="text-[#e0e0e0]">→</div>
                    );
                  }
                  
                  return elements;
                })}
              </div>

              <button
                onClick={() => setSelectedTask(priorityTasks[0])}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4" />
                <span style={{ fontSize: '13px', fontWeight: '600' }}>Start creating</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1800px] mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-4 md:gap-6">
          {/* Calendar - Main Area */}
          <div>
            <div className="bg-white rounded-xl border border-[#e0e0e0] overflow-hidden">
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 divide-x divide-[#e0e0e0]">
                {weekDays.map((day, index) => {
                  const dayTasks = getTasksForDay(day);
                  const isToday = day.toDateString() === new Date().toDateString();
                  const dayName = day.toLocaleDateString('en-US', { weekday: 'long' });
                  const dayNumber = day.getDate();
                  const monthDay = day.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

                  return (
                    <div key={index} className={`min-h-[500px] ${isToday ? 'bg-[#fafafa]' : 'bg-white'}`}>
                      {/* Day Header */}
                      <div className={`p-4 border-b border-[#e0e0e0] ${isToday ? 'bg-[#f0fdf4]' : ''}`}>
                        <div className="text-center">
                          <p className="text-[#999999] mb-1" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px' }}>
                            {dayName.toUpperCase()}
                          </p>
                          <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${
                            isToday ? 'bg-[#16a34a] text-white' : 'text-[#1a1a1a]'
                          }`} style={{ fontSize: '16px', fontWeight: '700' }}>
                            {dayNumber}
                          </div>
                          <p className="text-[#999999] mt-1" style={{ fontSize: '10px' }}>
                            {monthDay}
                          </p>
                        </div>
                      </div>

                      {/* Day Tasks */}
                      <div className="p-3 space-y-3">
                        {dayTasks.map(task => (
                          <CalendarSlotCard
                            key={task.id}
                            task={task}
                            onClick={() => setSelectedTask(task)}
                            isSelected={selectedTask?.id === task.id}
                          />
                        ))}

                        {dayTasks.length === 0 && (
                          <div className="p-6 text-center">
                            <div className="w-8 h-8 rounded-full border-2 border-dashed border-[#e0e0e0] mx-auto mb-2" />
                            <p className="text-[#e0e0e0]" style={{ fontSize: '11px' }}>
                              Rest day
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel - Creation Execution Panel */}
          <div className="sticky top-6 h-fit">
            {selectedTask ? (
              <CreationExecutionPanelEnhanced task={selectedTask} onNavigate={onNavigate} />
            ) : (
              <div className="bg-white rounded-xl border border-[#e0e0e0] p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-[#f5f5f5] flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-7 h-7 text-[#999999]" />
                </div>
                <p className="text-[#999999] mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                  Select a task
                </p>
                <p className="text-[#999999]" style={{ fontSize: '12px' }}>
                  Click any calendar item to start creating
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Optimal Posting Windows */}
      <OptimalPostingWindows />
    </div>
  );
}

// Helper Components

interface CalendarSlotCardProps {
  task: ContentTask;
  onClick: () => void;
  isSelected: boolean;
}

function CalendarSlotCard({ task, onClick, isSelected }: CalendarSlotCardProps) {
  const getStatusStyle = () => {
    switch (task.status) {
      case 'done':
        return {
          border: 'border-[#d1fae5]',
          bg: 'bg-[#f0fdf4]',
          icon: <CheckCircle className="w-4 h-4 text-[#16a34a]" />,
          opacity: 'opacity-60',
        };
      case 'in-progress':
        return {
          border: 'border-[#fed7aa]',
          bg: 'bg-[#fffbeb]',
          icon: <Clock className="w-4 h-4 text-[#f59e0b]" />,
          opacity: '',
        };
      case 'todo':
        return {
          border: 'border-[#e0e0e0]',
          bg: 'bg-white',
          icon: <div className="w-4 h-4 rounded-full border-2 border-[#e0e0e0]" />,
          opacity: '',
        };
    }
  };

  const style = getStatusStyle();

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-lg border-2 transition-all hover:shadow-md ${
        isSelected ? 'ring-2 ring-[#1a1a1a] ring-offset-2' : ''
      } ${style.border} ${style.bg} ${style.opacity}`}
    >
      {/* Status Icon */}
      <div className="flex items-center justify-between mb-2">
        {style.icon}
        {task.status !== 'done' && (
          <Play className="w-3 h-3 text-[#999999]" />
        )}
      </div>

      {/* Title */}
      <h3 className={`text-[#1a1a1a] mb-1 ${task.status === 'done' ? 'line-through' : ''}`} style={{ fontSize: '13px', fontWeight: '600', lineHeight: '1.3' }}>
        {task.title}
      </h3>

      {/* Purpose - One line */}
      <p className="text-[#666666] line-clamp-1" style={{ fontSize: '11px', lineHeight: '1.4' }}>
        {task.purpose}
      </p>

      {/* Primary Action - Only for todo/in-progress */}
      {task.status !== 'done' && (
        <div className="mt-2 pt-2 border-t border-[#e0e0e0]">
          <div className="flex items-center justify-between">
            <span className="text-[#999999]" style={{ fontSize: '10px', fontWeight: '600' }}>
              {task.status === 'in-progress' ? 'Continue' : 'Start'}
            </span>
            <ArrowRight className="w-3 h-3 text-[#999999]" />
          </div>
        </div>
      )}
    </button>
  );
}
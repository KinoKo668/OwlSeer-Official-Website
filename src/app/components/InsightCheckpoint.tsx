import React from 'react';
import { ArrowRight, Lock, Calendar, FileText, Check, X, Sparkles, Target, CheckCircle2, Zap, TrendingUp, Clock, ChevronRight, MessageSquare } from 'lucide-react';
import { FeedbackDrawer } from './FeedbackDrawer';

interface InsightCheckpointProps {
  onContinue: () => void;
  onBack: () => void;
}

// Reusable Components

// A. Strategy Summary (3个月方向摘要 - 紧凑版)
function StrategySummary() {
  return (
    <div className="relative bg-white rounded-[16px] border border-[#E5E7EB] p-5 shadow-sm overflow-hidden">
      {/* Decorative Corner */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#F0FDFA] to-transparent opacity-50 rounded-br-full"></div>
      
      <div className="relative z-10">
        {/* Header with Badge */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#111827]" style={{ fontSize: '16px', fontWeight: '700' }}>
            Your Direction (Next 3 months)
          </h2>
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#F0FDFA] to-white border border-[#0F766E]/20 shadow-sm">
            <Target className="w-3 h-3 text-[#0F766E]" />
            <span className="text-[#0F766E]" style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.02em' }}>
              3-MONTH GOAL
            </span>
          </div>
        </div>

        {/* One-line Strategy */}
        <p className="text-[#111827] mb-4" style={{ fontSize: '14px', lineHeight: '1.5', fontWeight: '600' }}>
          Fix first 3 seconds Hook → replicate working structures into 3 posts/week series
        </p>

        {/* 3 Info Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1.5 bg-gradient-to-r from-[#F0FDFA] to-[#E0F2FE] text-[#0F766E] rounded-full border border-[#0F766E]/20 shadow-sm" style={{ fontSize: '12px', fontWeight: '700' }}>
            Primary objective: Expand Audience
          </span>
          <span className="px-3 py-1.5 bg-gradient-to-r from-[#F0FDFA] to-[#E0F2FE] text-[#0F766E] rounded-full border border-[#0F766E]/20 shadow-sm" style={{ fontSize: '12px', fontWeight: '700' }}>
            3-month milestone: +20–30% (recommended)
          </span>
          <span className="px-3 py-1.5 bg-white text-[#374151] rounded-full border border-[#E5E7EB] shadow-sm" style={{ fontSize: '12px', fontWeight: '600' }}>
            Execution cadence: Weekly To-do (auto)
          </span>
        </div>

        {/* Data Source Note */}
        <div className="flex items-start gap-2 pt-3 border-t border-[#E5E7EB]">
          <div className="w-1 h-1 rounded-full bg-[#0F766E] mt-1.5 flex-shrink-0"></div>
          <p className="text-[#9CA3AF]" style={{ fontSize: '11px', lineHeight: '1.4', fontWeight: '500' }}>
            Based on public TikTok performance signals + your inputs (no payout data needed).
          </p>
        </div>
      </div>
    </div>
  );
}

// B. This Week To-do (本周任务清单 - 页面主角)
function ThisWeekTodo({ onGeneratePlan }: { onGeneratePlan: () => void }) {
  const [checkedTasks, setCheckedTasks] = React.useState<number[]>([]);

  const tasks = [
    {
      id: 1,
      type: 'must',
      title: 'Generate 3 hook variants for your next post',
      duration: '20m',
      output: 'Hook variants',
      measure: 'early retention signal',
      action: 'Generate hooks',
    },
    {
      id: 2,
      type: 'must',
      title: 'Draft 1 series template you can reuse',
      duration: '30m',
      output: 'Series template',
      measure: 'posting cadence',
      action: 'Generate template',
    },
    {
      id: 3,
      type: 'must',
      title: 'Plan 3 posts for this week (topics + formats)',
      duration: '15m',
      output: 'Slot plan',
      measure: 'content consistency',
      action: 'Generate plan',
    },
    {
      id: 4,
      type: 'experiment',
      title: 'A/B test Hook A vs Hook B (same topic)',
      duration: '40m',
      output: '2 scripts',
      measure: 'median views comparison',
      action: 'Generate scripts',
    },
    {
      id: 5,
      type: 'asset',
      title: 'Create a reusable caption + CTA pack (3 styles)',
      duration: '25m',
      output: 'Caption pack',
      measure: 'engagement proxy',
      action: 'Generate pack',
    },
  ];

  const toggleTask = (id: number) => {
    setCheckedTasks((prev) =>
      prev.includes(id) ? prev.filter((taskId) => taskId !== id) : [...prev, id]
    );
  };

  return (
    <div className="relative bg-white rounded-[16px] border border-[#E5E7EB] p-6 shadow-sm overflow-hidden">
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F0FDFA] to-transparent opacity-50 rounded-bl-full"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[#111827]" style={{ fontSize: '18px', fontWeight: '700' }}>
            This Week To-do List
          </h2>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#F0FDFA] to-white border border-[#0F766E]/20 shadow-sm">
            <CheckCircle2 className="w-3 h-3 text-[#0F766E]" />
            <span className="text-[#0F766E]" style={{ fontSize: '11px', fontWeight: '700' }}>
              {tasks.length} TASKS
            </span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`relative rounded-[12px] border-2 transition-all shadow-sm ${
                task.type === 'experiment'
                  ? 'bg-gradient-to-r from-[#FFF7ED] to-white border-[#D97706]/30'
                  : task.type === 'asset'
                  ? 'bg-gradient-to-r from-[#F0FDF4] to-white border-[#059669]/30'
                  : 'bg-white border-[#E5E7EB] hover:border-[#0F766E]/40'
              }`}
            >
              <div className="p-4">
                {/* Header Row */}
                <div className="flex items-start gap-3 mb-3">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`relative flex-shrink-0 w-5 h-5 rounded-md border-2 transition-all mt-0.5 ${
                      checkedTasks.includes(task.id)
                        ? 'bg-gradient-to-br from-[#059669] to-[#047857] border-[#059669]'
                        : 'bg-white border-[#E5E7EB] hover:border-[#0F766E]/50'
                    }`}
                  >
                    {checkedTasks.includes(task.id) && (
                      <>
                        <div className="absolute inset-0 bg-[#059669]/20 rounded-md blur-sm -z-10"></div>
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </>
                    )}
                  </button>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[#111827] mb-2" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.4' }}>
                      {task.title}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#0F766E]" />
                        <span className="text-[#374151]" style={{ fontSize: '12px', fontWeight: '500' }}>
                          {task.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#0F766E]" />
                        <span className="text-[#374151]" style={{ fontSize: '12px', fontWeight: '500' }}>
                          Output: {task.output}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#9CA3AF]" style={{ fontSize: '11px', fontWeight: '500' }}>
                      Measured by: {task.measure}
                    </p>
                  </div>

                  {/* Action Button */}
                  <button
                    className={`flex-shrink-0 px-4 py-2 rounded-[10px] transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md ${
                      task.type === 'experiment'
                        ? 'bg-gradient-to-r from-[#FFF7ED] to-[#FFEDD5] text-[#D97706] border border-[#D97706]/20 hover:from-[#FFEDD5] hover:to-[#FED7AA]'
                        : task.type === 'asset'
                        ? 'bg-gradient-to-r from-[#F0FDF4] to-[#DCFCE7] text-[#059669] border border-[#059669]/20 hover:from-[#DCFCE7] hover:to-[#BBF7D0]'
                        : 'bg-white text-[#0F766E] border border-[#E5E7EB] hover:border-[#0F766E]/50 hover:bg-[#F8F9FA]'
                    }`}
                    style={{ fontSize: '13px', fontWeight: '700' }}
                  >
                    {task.action}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why It Matters */}
        <div className="bg-gradient-to-r from-[#F0FDFA] to-[#E0F2FE] rounded-[12px] p-4 border border-[#0F766E]/20 mb-4 shadow-sm">
          <div className="flex items-start gap-2">
            <Zap className="w-4 h-4 text-[#0F766E] flex-shrink-0 mt-0.5" />
            <p className="text-[#0F766E]" style={{ fontSize: '13px', lineHeight: '1.5', fontWeight: '600' }}>
              Higher early retention → more distribution. We'll iterate weekly.
            </p>
          </div>
        </div>

        {/* Main CTA */}
        <button
          onClick={onGeneratePlan}
          className="relative w-full py-4 rounded-[14px] transition-all flex items-center justify-center gap-2 shadow-lg overflow-hidden group"
          style={{ fontSize: '15px', fontWeight: '700' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F766E] to-[#059669]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'skewX(-20deg)' }}></div>
          <span className="relative text-white">Generate my first weekly plan</span>
          <ArrowRight className="relative w-5 h-5 text-white" />
        </button>
        <p className="text-[#9CA3AF] text-center mt-2" style={{ fontSize: '12px', fontWeight: '500' }}>
          You can adjust your goal later.
        </p>
      </div>
    </div>
  );
}

// C. 7-Day Plan Preview (7天计划预览 - 高质量受限版 + 周起始偏好切换)
function WeeklyPlanPreview() {
  const [weekPreference, setWeekPreference] = React.useState<'rolling' | 'monday' | 'sunday'>('rolling');
  const [showNextWeek, setShowNextWeek] = React.useState(false);
  const [showInfoTooltip, setShowInfoTooltip] = React.useState(false);

  const days = [
    { label: 'Mon', task: 'Ideas', icon: Sparkles, unlocked: true },
    { label: 'Tue', task: 'Script', icon: FileText, unlocked: false },
    { label: 'Wed', task: 'Shoot', icon: Calendar, unlocked: true },
    { label: 'Thu', task: 'Edit', icon: FileText, unlocked: false },
    { label: 'Fri', task: 'Post', icon: TrendingUp, unlocked: true },
    { label: 'Sat', task: 'Review', icon: CheckCircle2, unlocked: true },
    { label: 'Sun', task: 'Weekly report', icon: Lock, unlocked: false },
  ];

  // Next full week preview (same structure)
  const nextWeekDays = [
    { label: 'Mon', task: 'Ideas', icon: Sparkles, unlocked: true },
    { label: 'Tue', task: 'Script', icon: FileText, unlocked: false },
    { label: 'Wed', task: 'Shoot', icon: Calendar, unlocked: true },
    { label: 'Thu', task: 'Edit', icon: FileText, unlocked: false },
    { label: 'Fri', task: 'Post', icon: TrendingUp, unlocked: true },
    { label: 'Sat', task: 'Review', icon: CheckCircle2, unlocked: true },
    { label: 'Sun', task: 'Weekly report', icon: Lock, unlocked: false },
  ];

  const getMainTitle = () => {
    if (weekPreference === 'rolling') {
      return '接下来 7 天计划（从今天开始）';
    }
    return '本周剩余安排（立即执行）';
  };

  const getNextWeekTitle = () => {
    if (weekPreference === 'monday') {
      return '下个完整周计划（周一开始）';
    } else if (weekPreference === 'sunday') {
      return '下个完整周计划（周日开始）';
    }
    return '下个完整周计划（按你的周起始习惯）';
  };

  return (
    <div className="bg-white rounded-[12px] border border-[var(--card-border)] p-5 shadow-sm">
      {/* Header Row with Week Preference Switcher */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h2 className="text-foreground" style={{ fontSize: '16px', fontWeight: '700' }}>
          7-Day Plan Preview
        </h2>

        {/* Week Preference Switcher */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <label className="text-muted-foreground" style={{ fontSize: '12px', fontWeight: '600' }}>
              周计划起始
            </label>
            <select
              value={weekPreference}
              onChange={(e) => setWeekPreference(e.target.value as 'rolling' | 'monday' | 'sunday')}
              className="px-2.5 py-1.5 rounded-lg border border-[#e0e0e0] text-foreground bg-white hover:bg-[#fafafa] transition-colors"
              style={{ fontSize: '12px', fontWeight: '600' }}
            >
              <option value="rolling">滚动 7 天（推荐）</option>
              <option value="monday">周一开始（完整周）</option>
              <option value="sunday">周日开始（完整周）</option>
            </select>
            
            {/* Info Icon with Tooltip */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowInfoTooltip(true)}
                onMouseLeave={() => setShowInfoTooltip(false)}
                className="flex items-center justify-center w-4 h-4 rounded-full bg-[#f5f5f5] text-muted-foreground hover:bg-[#e0e0e0] transition-colors"
              >
                <span style={{ fontSize: '10px', fontWeight: '700' }}>i</span>
              </button>
              
              {showInfoTooltip && (
                <div className="absolute right-0 top-6 w-64 bg-[#1a1a1a] text-white rounded-lg p-3 shadow-xl z-10">
                  <p style={{ fontSize: '11px', lineHeight: '1.5' }}>
                    滚动 7 天：从今天开始立刻执行；完整周：按你习惯的周一/周日复盘。
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Mock Tag */}
          <div className="flex items-center gap-1 px-2 py-1 bg-[#fef3c7] border border-[#fde68a] rounded">
            <span className="text-[#92400e]" style={{ fontSize: '9px', fontWeight: '700' }}>
              Mock only
            </span>
          </div>
        </div>
      </div>

      {/* Mock Notice */}
      <p className="text-muted-foreground mb-4 text-right" style={{ fontSize: '10px' }}>
        no dev needed
      </p>

      {/* A. Main View: Next 7 Days (from today) */}
      <div className="mb-4">
        <h3 className="text-foreground mb-3" style={{ fontSize: '14px', fontWeight: '700' }}>
          {getMainTitle()}
        </h3>

        {/* Calendar Strip */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {days.map((day, i) => {
            const Icon = day.icon;
            return (
              <div
                key={i}
                className={`relative rounded-lg border p-2.5 transition-all ${
                  day.unlocked
                    ? 'bg-[#fafafa] border-[#e0e0e0]'
                    : 'bg-[#f9fafb] border-[#d1d5db] border-dashed'
                }`}
              >
                <div className="text-center">
                  <div className="text-muted-foreground mb-1.5" style={{ fontSize: '10px', fontWeight: '600' }}>
                    {day.label}
                  </div>
                  <div className="flex items-center justify-center mb-1.5">
                    <Icon className={`w-4 h-4 ${day.unlocked ? 'text-[#404040]' : 'text-muted-foreground'}`} />
                  </div>
                  <div className={`${day.unlocked ? 'text-foreground' : 'text-muted-foreground'}`} style={{ fontSize: '11px', fontWeight: '600', lineHeight: '1.2' }}>
                    {day.task}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Prop */}
        <p className="text-muted-foreground text-center" style={{ fontSize: '12px', lineHeight: '1.5' }}>
          解锁后可编辑日程、生成脚本，并自动生成下周计划。
        </p>
      </div>

      {/* B. Secondary View: Next Full Week (Accordion) */}
      <div className="border-t border-[#f0f0f0] pt-4">
        <button
          onClick={() => setShowNextWeek(!showNextWeek)}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#fafafa] transition-colors"
        >
          <span className="text-foreground" style={{ fontSize: '14px', fontWeight: '700' }}>
            {getNextWeekTitle()}
          </span>
          <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${showNextWeek ? 'rotate-90' : ''}`} />
        </button>

        {showNextWeek && (
          <div className="mt-4 px-2">
            {/* Next Week Calendar Strip */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {nextWeekDays.map((day, i) => {
                const Icon = day.icon;
                return (
                  <div
                    key={i}
                    className={`relative rounded-lg border p-2.5 transition-all ${
                      day.unlocked
                        ? 'bg-[#fafafa] border-[#e0e0e0]'
                        : 'bg-[#f9fafb] border-[#d1d5db] border-dashed'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-muted-foreground mb-1.5" style={{ fontSize: '10px', fontWeight: '600' }}>
                        {day.label}
                      </div>
                      <div className="flex items-center justify-center mb-1.5">
                        <Icon className={`w-4 h-4 ${day.unlocked ? 'text-[#404040]' : 'text-muted-foreground'}`} />
                      </div>
                      <div className={`${day.unlocked ? 'text-foreground' : 'text-muted-foreground'}`} style={{ fontSize: '11px', fontWeight: '600', lineHeight: '1.2' }}>
                        {day.task}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Week Description */}
            <p className="text-muted-foreground text-center" style={{ fontSize: '12px', lineHeight: '1.5' }}>
              适合按周复盘的人：每周一/周日生成新一周 To-do。
            </p>
          </div>
        )}
      </div>

      {/* Preference State Notice */}
      <div className="mt-4 pt-4 border-t border-[#f0f0f0] flex flex-col items-end gap-1">
        <p className="text-muted-foreground" style={{ fontSize: '11px' }}>
          仅调整日期对齐方式，任务内容不变。
        </p>
        <p className="text-muted-foreground" style={{ fontSize: '10px' }}>
          已保存为默认（可在 Settings 修改）
        </p>
      </div>
    </div>
  );
}

// D. Starter Pack Preview (立即可用的生成物预览 - 1条高质量卡)
function StarterPackPreview({ onShowMore }: { onShowMore: () => void }) {
  return (
    <div className="bg-white rounded-[12px] border border-[var(--card-border)] p-5 shadow-sm">
      <h2 className="text-foreground mb-4" style={{ fontSize: '16px', fontWeight: '700' }}>
        Starter Pack (Preview)
      </h2>

      {/* High-Quality Preview Card */}
      <div className="bg-[#fafafa] rounded-lg border border-[#e0e0e0] p-4 mb-4">
        <p className="text-foreground mb-2" style={{ fontSize: '15px', fontWeight: '700' }}>
          "The #1 Mistake Killing Your Growth"
        </p>
        
        <div className="bg-[#f0f9ff] rounded-lg px-3 py-2 mb-3 border border-[#bae6fd]">
          <p className="text-[#0c4a6e]" style={{ fontSize: '13px', fontWeight: '600' }}>
            Hook: "Stop doing this if you want followers..."
          </p>
        </div>

        <div className="mb-3">
          <p className="text-muted-foreground mb-1.5" style={{ fontSize: '12px', fontWeight: '600' }}>
            3-Scene Outline:
          </p>
          <div className="space-y-1 text-muted-foreground" style={{ fontSize: '12px', lineHeight: '1.5' }}>
            <div>• Scene 1: Show the mistake (close-up)</div>
            <div>• Scene 2: Reveal the pattern</div>
            <div>• Scene 3: Give the solution</div>
          </div>
        </div>

        <button className="flex items-center gap-1.5 text-[#404040] hover:text-[#1a1a1a] transition-colors ml-auto" style={{ fontSize: '12px', fontWeight: '600' }}>
          <Lock className="w-3.5 h-3.5" />
          Unlock full script + scene cards
        </button>
      </div>

      {/* What You'll Get */}
      <div className="bg-[#f9fafb] rounded-lg p-3 border border-[#e5e7eb] mb-3">
        <p className="text-[#404040] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
          What you'll get:
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-1 bg-white rounded-full border border-[#e0e0e0] text-[#404040]" style={{ fontSize: '11px', fontWeight: '500' }}>
            3 scripts
          </span>
          <span className="px-2.5 py-1 bg-white rounded-full border border-[#e0e0e0] text-[#404040]" style={{ fontSize: '11px', fontWeight: '500' }}>
            Scene cards
          </span>
          <span className="px-2.5 py-1 bg-white rounded-full border border-[#e0e0e0] text-[#404040]" style={{ fontSize: '11px', fontWeight: '500' }}>
            Weekly checklist
          </span>
        </div>
      </div>

      {/* See More Link */}
      <button
        onClick={onShowMore}
        className="text-[#404040] hover:text-[#1a1a1a] transition-colors w-full text-center"
        style={{ fontSize: '12px', fontWeight: '600' }}
      >
        See one more sample
      </button>
    </div>
  );
}

// Right-side CTA Card
function TrialCTA({ onContinue, onShowSample }: { onContinue: () => void; onShowSample: () => void }) {
  return (
    <div className="relative bg-white rounded-[16px] border-2 border-[#0F766E] p-6 shadow-xl overflow-hidden">
      {/* Background Gradient Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F0FDFA] to-transparent opacity-60 rounded-bl-full"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#F0FDFA] to-[#E0F2FE] border border-[#0F766E]/20 mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#0F766E]" />
          <span className="text-[#0F766E]" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.02em' }}>
            PREMIUM ACCESS
          </span>
        </div>

        <h3 className="text-[#111827] mb-2" style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '-0.01em' }}>
          Unlock Your Weekly Plan
        </h3>
        <p className="text-[#374151] mb-6" style={{ fontSize: '13px', lineHeight: '1.5' }}>
          Get full access to editable tasks, script generator, and weekly auto-planning.
        </p>

        {/* Benefits - Aligned with Left Modules */}
        <ul className="space-y-3 mb-6">
          {[
            'Editable weekly to-do list + slot plan',
            'Script generator + scene cards',
            'Weekly report + next-week auto plan',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <div className="flex-shrink-0 mt-0.5">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#059669]/20 rounded-full blur-sm"></div>
                  <Check className="relative w-4 h-4 text-[#059669]" strokeWidth={3} />
                </div>
              </div>
              <span className="text-[#111827]" style={{ fontSize: '14px', lineHeight: '1.5', fontWeight: '500' }}>
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Primary CTA */}
        <button
          onClick={onContinue}
          className="relative w-full py-4 rounded-[14px] shadow-xl flex items-center justify-center gap-2 mb-2 overflow-hidden group"
          style={{ fontSize: '16px', fontWeight: '700' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F766E] to-[#059669]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'skewX(-20deg)' }}></div>
          <span className="relative text-white">Start 7-day trial</span>
          <ArrowRight className="relative w-5 h-5 text-white" />
        </button>
        <p className="text-[#9CA3AF] text-center mb-4" style={{ fontSize: '11px', fontWeight: '500' }}>
          Read-only preview available on the left.
        </p>

        {/* Secondary Link */}
        <div className="text-center mb-4">
          <button
            onClick={onShowSample}
            className="text-[#0F766E] hover:text-[#059669] transition-colors"
            style={{ fontSize: '13px', fontWeight: '700' }}
          >
            See one more sample
          </button>
        </div>

        {/* Trust Signals */}
        <div className="pt-4 border-t border-[#E5E7EB]">
          <div className="flex items-center justify-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#0F766E]"></div>
            <p className="text-[#9CA3AF] text-center" style={{ fontSize: '11px', lineHeight: '1.4', fontWeight: '500' }}>
              Cancel anytime · Secure payment
            </p>
            <div className="w-1 h-1 rounded-full bg-[#0F766E]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sample Modal
function SampleModalLocked({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-[12px] max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#f0f0f0] flex items-center justify-between">
          <h3 className="text-foreground" style={{ fontSize: '18px', fontWeight: '700' }}>
            Sample: Hook Variations
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Visible Part */}
          <div className="bg-[#f0f9ff] rounded-lg border border-[#bae6fd] p-4 mb-4">
            <div className="flex items-start gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#0284c7] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground mb-1" style={{ fontSize: '13px', fontWeight: '700' }}>
                  Hook A: Problem-first
                </p>
                <p className="text-[#0c4a6e]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  "Your hooks are killing your reach. Here's why..."
                </p>
              </div>
            </div>
          </div>

          {/* Blurred Content */}
          <div className="relative mb-4">
            <div className="blur-md opacity-30 select-none">
              <div className="bg-[#fafafa] rounded-lg border border-[#e0e0e0] p-4 mb-3">
                <div className="h-4 bg-[#e0e0e0] rounded mb-2"></div>
                <div className="h-3 bg-[#e0e0e0] rounded"></div>
              </div>
              <div className="bg-[#fafafa] rounded-lg border border-[#e0e0e0] p-4">
                <div className="h-4 bg-[#e0e0e0] rounded mb-2"></div>
                <div className="h-3 bg-[#e0e0e0] rounded"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white"></div>
          </div>

          {/* Lock Note */}
          <div className="flex items-center justify-center gap-2 py-3 bg-[#f5f5f5] rounded-lg">
            <Lock className="w-4 h-4 text-[#404040]" />
            <span className="text-[#404040]" style={{ fontSize: '13px', fontWeight: '600' }}>
              Unlock to view all 3 variations + rationale
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-[12px] bg-gradient-to-r from-[#1a1a1a] to-[#404040] text-white hover:from-[#000000] hover:to-[#2a2a2a] shadow-lg transition-all flex items-center justify-center gap-2"
            style={{ fontSize: '15px', fontWeight: '700' }}
          >
            Start 7-Day Trial
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Component
export function InsightCheckpoint({ onContinue, onBack }: InsightCheckpointProps) {
  const [showSampleModal, setShowSampleModal] = React.useState(false);
  const [feedbackDrawerOpen, setFeedbackDrawerOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-32 lg:pb-8">
      {/* Minimal Header */}
      <div className="bg-white border-b border-[#E5E7EB] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Account Info */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#0F766E] to-[#059669] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <div className="absolute inset-0 rounded-full bg-[#0F766E]/30 blur-md -z-10"></div>
                <span style={{ fontSize: '14px', fontWeight: '700' }}>TK</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#111827]" style={{ fontSize: '14px', fontWeight: '700' }}>
                  @techcreator
                </span>
                <span className="px-2.5 py-1 bg-[#F0FDFA] text-[#0F766E] border border-[#0F766E]/20 rounded-full shadow-sm" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.01em' }}>
                  Tech Education
                </span>
              </div>
            </div>

            {/* Right: Feedback Button + Data Source Note */}
            <div className="flex items-center gap-3">
              {/* Feedback Button */}
              <button
                onClick={() => setFeedbackDrawerOpen(true)}
                className="p-2 hover:bg-[#F0FDFA] rounded-lg transition-all hover:shadow-sm"
                title="反馈"
              >
                <MessageSquare className="w-5 h-5 text-[#0F766E]" />
              </button>

              {/* Data Source Note */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#F8F9FA] to-white border border-[#E5E7EB] rounded-lg shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-pulse"></div>
                <span className="text-[#374151]" style={{ fontSize: '12px', fontWeight: '500' }}>
                  Public signals + your inputs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Title */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#F0FDFA] to-[#E0F2FE] border border-[#0F766E]/20 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#0F766E]" />
            <span className="text-[#0F766E]" style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.02em' }}>
              PERSONALIZED STRATEGY
            </span>
          </div>
          <h1 className="text-[#111827] mb-2" style={{ fontSize: '28px', fontWeight: '700', letterSpacing: '-0.02em' }}>
            Your 7-Day Execution Plan
          </h1>
          <p className="text-[#374151]" style={{ fontSize: '15px', lineHeight: '1.5' }}>
            Built from your 3-month goal + current performance. Ready to execute this week.
          </p>
        </div>

        {/* Main Layout */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-4">
            {/* A) Strategy Summary */}
            <StrategySummary />

            {/* B) This Week To-do */}
            <ThisWeekTodo onGeneratePlan={onContinue} />

            {/* C) Weekly Rhythm Preview */}
            <WeeklyPlanPreview />

            {/* D) Starter Pack Preview */}
            <StarterPackPreview onShowMore={() => setShowSampleModal(true)} />
          </div>

          {/* Right Column - Sticky CTA (Desktop) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-8">
              <TrialCTA
                onContinue={onContinue}
                onShowSample={() => setShowSampleModal(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] shadow-2xl z-50 p-4">
        <button
          onClick={onContinue}
          className="relative w-full py-4 rounded-[14px] shadow-lg flex items-center justify-center gap-2 mb-2 overflow-hidden group"
          style={{ fontSize: '16px', fontWeight: '700' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F766E] to-[#059669]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'skewX(-20deg)' }}></div>
          <span className="relative text-white">Start 7-day trial</span>
          <ArrowRight className="relative w-5 h-5 text-white" />
        </button>
        <p className="text-[#9CA3AF] text-center mb-4" style={{ fontSize: '11px', fontWeight: '500' }}>
          Read-only preview available on the left.
        </p>
        <div className="text-center">
          <button
            onClick={() => setShowSampleModal(true)}
            className="text-[#0F766E] hover:text-[#059669] transition-colors"
            style={{ fontSize: '12px', fontWeight: '700' }}
          >
            See one more sample
          </button>
        </div>
      </div>

      {/* Sample Modal */}
      {showSampleModal && <SampleModalLocked onClose={() => setShowSampleModal(false)} />}

      {/* Feedback Drawer */}
      <FeedbackDrawer
        isOpen={feedbackDrawerOpen}
        onClose={() => setFeedbackDrawerOpen(false)}
        currentPage="Strategy Plan"
        currentAccount="TechReviews_US"
      />
    </div>
  );
}
import React from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import { WeeklyHeaderBar } from './WeeklyHeaderBar';
import { GoalCompletionCard } from './GoalCompletionCard';
import { DynamicKPIGrid } from './DynamicKPIGrid';
import { WeeklySummaryCard } from './WeeklySummaryCard';
import { ReportArchiveMiniList } from './ReportArchiveMiniList';
import { Toast } from '../Toast';

type ReportState = 'Generated' | 'Generating' | 'Needs data';

interface WeeklyReportModuleProps {
  state?: ReportState;
  onConnectAccount?: () => void;
  onSetGoal?: () => void;
  onNavigate?: (page: string, question?: string) => void;
}

export function WeeklyReportModule({
  state = 'Generated',
  onConnectAccount,
  onSetGoal,
  onNavigate,
}: WeeklyReportModuleProps) {
  const [toast, setToast] = React.useState<{ message: string; type: 'success' | 'info' } | null>(null);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
  };

  // Prompt templates for each action
  const getPromptForAction = (actionLabel: string): string => {
    if (actionLabel.includes('topic ideas')) {
      return "Generate 10 TikTok video topic ideas for my account. Use trending hashtags, include a 1-line hook for each idea, and label each as Quick/Medium/Hard.";
    } else if (actionLabel.includes('scripts')) {
      return "Write 3 short TikTok scripts (20–30s). For each: Hook (0–2s), Value (3–20s), CTA (last 3s). Keep language punchy and creator-style.";
    } else if (actionLabel.includes('posts')) {
      return "Create a posting schedule for 4 posts next week. Pick days + time slots, and match each slot with a recommended content format and topic.";
    }
    return actionLabel;
  };

  const handleSendToCopilot = (actionLabel: string) => {
    const prompt = getPromptForAction(actionLabel);
    onNavigate?.('copilot', prompt);
    showToast('Sent to Copilot', 'success');
  };

  const handleSendAllToCopilot = () => {
    const combinedPrompt = "Help me execute today's tasks: (1) generate 10 topic ideas, (2) write 3 scripts, (3) propose a schedule for 4 posts. Output in 3 sections.";
    onNavigate?.('copilot', combinedPrompt);
    showToast('All tasks sent to Copilot', 'success');
  };

  // Generating State
  if (state === 'Generating') {
    return (
      <div className="bg-white rounded-[12px] border border-[#E5E7EB] p-6 shadow-sm">
        <WeeklyHeaderBar status="Generating" />
        
        <div className="py-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <Loader2 className="w-12 h-12 text-[#0F766E] animate-spin" />
            <div className="text-center">
              <p className="text-[#111827] mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>
                Generating weekly report…
              </p>
              <p className="text-[#9CA3AF]" style={{ fontSize: '13px' }}>
                This usually takes 10-15 seconds
              </p>
            </div>
          </div>

          {/* Skeleton Placeholders */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              <div className="h-48 bg-[#F8F9FA] rounded-[12px] animate-pulse"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-40 bg-[#F8F9FA] rounded-[12px] animate-pulse"></div>
                <div className="h-40 bg-[#F8F9FA] rounded-[12px] animate-pulse"></div>
                <div className="h-40 bg-[#F8F9FA] rounded-[12px] animate-pulse"></div>
                <div className="h-40 bg-[#F8F9FA] rounded-[12px] animate-pulse"></div>
              </div>
            </div>
            <div className="h-96 bg-[#F8F9FA] rounded-[12px] animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  // Needs Data State
  if (state === 'Needs data') {
    return (
      <div className="bg-white rounded-[12px] border border-[#E5E7EB] p-6 shadow-sm">
        <WeeklyHeaderBar status="Needs data" />
        
        <div className="py-12">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[#FEF3C7] flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-[#D97706]" />
            </div>
            <h3 className="text-[#111827] mb-2" style={{ fontSize: '18px', fontWeight: '700' }}>
              Not enough data yet
            </h3>
            <p className="text-[#374151] mb-6" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Publish 3 posts or connect an account to start weekly reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onConnectAccount}
                className="px-6 py-3 rounded-[12px] bg-[#0F766E] text-white hover:bg-[#0d6660] shadow-lg transition-all"
                style={{ fontSize: '14px', fontWeight: '700' }}
              >
                Connect account
              </button>
              <button
                onClick={onSetGoal}
                className="px-6 py-3 rounded-[12px] border-2 border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F8F9FA] hover:border-[#0F766E] transition-all"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Set weekly goal
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Generated State (Default)
  return (
    <div className="bg-white rounded-[12px] p-6">
      <WeeklyHeaderBar status="Generated" />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Primary Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Goal Completion Card */}
          <GoalCompletionCard />

          {/* Weekly Summary Card */}
          <WeeklySummaryCard 
            coachNoteStatus="good"
            onSendToCopilot={handleSendToCopilot}
            onSendAllToCopilot={handleSendAllToCopilot}
          />
        </div>

        {/* Right Column - Archive */}
        <div className="lg:col-span-1">
          <ReportArchiveMiniList />
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
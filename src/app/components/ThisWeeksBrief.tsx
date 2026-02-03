import React from 'react';
import {
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ThisWeeksBriefProps {
  onNavigateToCopilot?: (page: string, question?: string) => void;
  onNavigateToWeeklyReport?: (page: string) => void;
}

export function ThisWeeksBrief({
  onNavigateToCopilot,
  onNavigateToWeeklyReport,
}: ThisWeeksBriefProps) {
  const [showWhyThis, setShowWhyThis] = React.useState(false);

  const handleAskCopilot = () => {
    const actionText = "Add a 1-line CTA in the last 3 seconds of your next 2 posts.";
    const question = `Help me implement this action: ${actionText}\n\nContext: CTA is missing or unclear in top-performing posts, causing profile clicks to lag despite stable views.`;
    onNavigateToCopilot?.('copilot', question);
  };

  const handleSeeDetails = () => {
    onNavigateToWeeklyReport?.('weekly-report-detail');
  };

  const signals = [
    {
      icon: ArrowUpRight,
      iconColor: 'text-[#16a34a]',
      label: 'Avg. watch time',
      value: '+12%',
      context: 'vs. last week',
    },
    {
      icon: Minus,
      iconColor: 'text-[#666666]',
      label: 'Posting frequency',
      value: '3 posts',
      context: 'same as last week',
    },
    {
      icon: ArrowDownRight,
      iconColor: 'text-[#dc2626]',
      label: 'Total views',
      value: '-8%',
      context: 'vs. last week',
    },
  ];

  return (
    <div className="p-5 rounded-[12px] bg-white border border-[#e0e0e0]">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-[#666666]" />
            <h3 className="text-[#1a1a1a]" style={{ fontSize: '15px', fontWeight: '600' }}>
              This week's brief
            </h3>
          </div>
          <p className="text-[#999999]" style={{ fontSize: '12px' }}>
            Quick snapshot of what changed
          </p>
        </div>
      </div>

      {/* Signals Section */}
      <div className="flex flex-wrap gap-4 mb-6">
        {signals.map((signal, index) => (
          <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f9fafb] border border-[#e5e7eb]">
            <signal.icon className={`w-3.5 h-3.5 ${signal.iconColor}`} />
            <span className="text-[#666666]" style={{ fontSize: '13px', fontWeight: '500' }}>
              {signal.label}
            </span>
            <div className="flex items-center gap-1">
              <span style={{ fontSize: '13px', fontWeight: '600' }}>{signal.value}</span>
              <span className="text-[#999999]" style={{ fontSize: '12px' }}>{signal.context}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-[#f5f5f5] mb-5"></div>

      {/* NEW: Main Issue Section */}
      <div className="mb-5">
        <div className="flex items-start justify-between gap-6 mb-3">
          {/* Left: Title + Issue Statement */}
          <div className="flex-1">
            <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
              Main issue
            </h3>
            <p 
              className="text-[#1a1a1a] truncate" 
              style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.4' }}
              title="CTA is missing or unclear in top-performing posts."
            >
              CTA is missing or unclear in top-performing posts.
            </p>
          </div>

          {/* Right: Severity Chip + Evidence */}
          <div className="flex flex-col items-end gap-2 flex-shrink-0">
            <div className="px-3 py-1 rounded-full bg-[#fef3c7] border border-[#fde68a]">
              <span className="text-[#92400e]" style={{ fontSize: '12px', fontWeight: '600' }}>
                Needs attention
              </span>
            </div>
            <p className="text-[#999999] text-right" style={{ fontSize: '11px', lineHeight: '1.3' }}>
              Signal: profile clicks lag despite stable views.
            </p>
          </div>
        </div>

        {/* Why this? Toggle */}
        <div>
          <button
            onClick={() => setShowWhyThis(!showWhyThis)}
            className="flex items-center gap-1 text-[#666666] hover:text-[#1a1a1a] transition-colors"
            style={{ fontSize: '12px', fontWeight: '500' }}
          >
            {showWhyThis ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" />
                Hide explanation
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5" />
                Why this?
              </>
            )}
          </button>

          {/* Expandable Explanation */}
          {showWhyThis && (
            <div className="mt-3 p-3 rounded-lg bg-[#fafafa] border border-[#f0f0f0]">
              <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                We compare your last 7 days vs prior 7 days. Top posts show weaker CTA cues (e.g., fewer 'follow/visit' prompts), while profile clicks decreased despite stable view counts.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#f5f5f5] mb-5"></div>

      {/* Section B - This week's focus (UPDATED) */}
      <div className="mb-5">
        <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
          This week's focus
        </h3>
        <p className="text-[#666666] mb-2" style={{ fontSize: '13px', lineHeight: '1.5' }}>
          Views are steady, but conversion signals are softer. A clearer CTA can help turn attention into actions.
        </p>
        <p className="text-[#999999]" style={{ fontSize: '12px', lineHeight: '1.4' }}>
          Tip: Use one clear next-step per video.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#f5f5f5] mb-5"></div>

      {/* Section C - Do this next (UPDATED) */}
      <div className="mb-6">
        <h3 className="text-[#1a1a1a] mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>
          Do this next
        </h3>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Sparkles className="w-4 h-4 text-[#16a34a] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[#1a1a1a] mb-1.5" style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.4' }}>
                Add a 1-line CTA in the last 3 seconds of your next 2 posts.
              </p>
              <p className="text-[#999999]" style={{ fontSize: '12px' }}>
                Potential impact: +5–15% profile clicks (estimate)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="flex items-center justify-end gap-3 pt-5 border-t border-[#f5f5f5]">
        <button
          onClick={handleSeeDetails}
          className="text-[#666666] hover:text-[#1a1a1a] transition-colors"
          style={{ fontSize: '14px', fontWeight: '500' }}
        >
          See details
        </button>
        <button
          onClick={handleAskCopilot}
          className="px-4 py-2.5 rounded-lg bg-[#16a34a] text-white hover:bg-[#15803d] transition-colors flex items-center gap-2"
        >
          <span style={{ fontSize: '14px', fontWeight: '600' }}>Ask Copilot to help</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
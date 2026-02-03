import React from 'react';
import { WeeklyReportModule } from './weeklyreport';
import { ArrowLeft } from 'lucide-react';

interface WeeklyReportDemoProps {
  onBack?: () => void;
}

export function WeeklyReportDemo({ onBack }: WeeklyReportDemoProps) {
  const [selectedState, setSelectedState] = React.useState<'Generated' | 'Generating' | 'Needs data'>('Generated');

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {onBack && (
                <button
                  onClick={onBack}
                  className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <div>
                <h1 className="text-[#1a1a1a]" style={{ fontSize: '24px', fontWeight: '700' }}>
                  Weekly Report Demo
                </h1>
                <p className="text-[#666666]" style={{ fontSize: '14px' }}>
                  AI-generated weekly performance reports with dynamic KPIs
                </p>
              </div>
            </div>

            {/* State Selector */}
            <div className="flex items-center gap-2 bg-[#f5f5f5] p-1 rounded-lg">
              {(['Generated', 'Generating', 'Needs data'] as const).map((state) => (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedState === state
                      ? 'bg-white text-[#1a1a1a] shadow-sm'
                      : 'text-[#666666] hover:text-[#1a1a1a]'
                  }`}
                  style={{ fontSize: '13px', fontWeight: '600' }}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WeeklyReportModule
          state={selectedState}
          onConnectAccount={() => alert('Connect account clicked')}
          onSetGoal={() => alert('Set goal clicked')}
        />

        {/* Feature Description */}
        <div className="mt-8 bg-white rounded-[12px] border border-[#e0e0e0] p-6">
          <h2 className="text-[#1a1a1a] mb-4" style={{ fontSize: '18px', fontWeight: '700' }}>
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                Dynamic KPI Selection
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                AI automatically selects the most relevant metrics based on user type (creator, brand, etc.) and current goals. All metrics use realistic TikTok data.
              </p>
            </div>
            <div>
              <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                Goal Completion Tracking
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                Visual progress bars show completion rate for weekly goals with detailed breakdowns by metric.
              </p>
            </div>
            <div>
              <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                AI-Generated Insights
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                Each KPI includes a contextual one-line insight explaining the trend and its implications.
              </p>
            </div>
            <div>
              <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                Derived Metrics
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                Engagement Rate and other derived metrics are clearly labeled and calculated from available TikTok data (likes, comments, shares, views).
              </p>
            </div>
            <div>
              <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                Report Archive
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                Access past weekly reports to track long-term trends and compare performance over time.
              </p>
            </div>
            <div>
              <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                Actionable Summary
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                Highlights, challenges, and next-week focus areas presented in scannable format with checkable actions.
              </p>
            </div>
            <div>
              <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                Multiple States
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                Graceful handling of generated, generating, and no-data states with appropriate CTAs.
              </p>
            </div>
          </div>
        </div>

        {/* Component List */}
        <div className="mt-6 bg-white rounded-[12px] border border-[#e0e0e0] p-6">
          <h2 className="text-[#1a1a1a] mb-4" style={{ fontSize: '18px', fontWeight: '700' }}>
            Reusable Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'WeeklyReportModule',
              'WeeklyHeaderBar',
              'GoalCompletionCard',
              'DynamicKPICard',
              'DynamicKPIGrid',
              'WeeklySummaryCard',
              'ReportArchiveMiniList',
            ].map((component) => (
              <div
                key={component}
                className="px-3 py-2 bg-[#fafafa] border border-[#e0e0e0] rounded-lg"
              >
                <code className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                  {component}
                </code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
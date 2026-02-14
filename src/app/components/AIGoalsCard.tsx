import React from 'react';
import { RefreshCw, Edit2, ChevronDown, ChevronUp, X, Sparkles } from 'lucide-react';

interface AIGoalsCardProps {
  hasGoal?: boolean;
}

export function AIGoalsCard({ hasGoal = true }: AIGoalsCardProps) {
  const [isAdjustModalOpen, setIsAdjustModalOpen] = React.useState(false);
  const [isSupportingExpanded, setIsSupportingExpanded] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [userInput, setUserInput] = React.useState('');
  const [parsedGoal, setParsedGoal] = React.useState({
    goal: 'Grow followers',
    target: '+10,000',
    deadline: 'Mar 31',
  });

  // Auto-parse user input for preview
  React.useEffect(() => {
    if (userInput.trim()) {
      // Simple parsing logic for demo
      const mockParsed = {
        goal: userInput.includes('follower') ? 'Grow followers' : 
              userInput.includes('view') ? 'Increase views' :
              userInput.includes('post') ? 'Post consistency' : 'Custom goal',
        target: userInput.match(/\+?\d+[kKmM]?/)?.[0] || '+10,000',
        deadline: userInput.includes('month') 
          ? userInput.match(/\d+\s*month/)?.[0] || '2 months'
          : userInput.includes('week')
          ? userInput.match(/\d+\s*week/)?.[0] || '8 weeks'
          : '8 weeks',
      };
      setParsedGoal(mockParsed);
    }
  }, [userInput]);

  // Mock goal data
  const currentGoal = {
    title: 'Grow followers',
    target: 15000,
    deadline: 'Mar 31',
    current: 12000,
    percentage: 80,
    status: 'On track' as const,
    nextAction: 'Add a clear CTA in the last 3 seconds for the next 2 posts.',
  };

  const supportingGoals = [
    { title: 'Post 4/wk', target: '4 posts per week' },
    { title: 'Improve hook retention', target: '45% retention rate' },
  ];

  const handleRegenerate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1000);
  };

  const handleApply = () => {
    // Simulate AI parsing
    const mockParsed = {
      goal: 'Grow followers',
      target: '+10,000',
      deadline: userInput.includes('month') ? '2 months' : '8 weeks',
    };
    setParsedGoal(mockParsed);
    setIsAdjustModalOpen(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const getStatusStyles = () => {
    switch (currentGoal.status) {
      case 'On track':
        return 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900';
      case 'Needs attention':
        return 'bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700';
    }
  };

  // Empty state
  if (!hasGoal) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-950/60 rounded-full flex items-center justify-center mx-auto mb-3">
            <Sparkles className="w-6 h-6 text-teal-700 dark:text-teal-300" />
          </div>
          <h3 className="text-slate-900 dark:text-white mb-2" style={{ fontSize: '16px', fontWeight: '700' }}>
            Set your first goal
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mb-4" style={{ fontSize: '14px', lineHeight: '1.5' }}>
            Describe your goal in plain English. AI turns it into a trackable plan.
          </p>
          <button
            onClick={() => setIsAdjustModalOpen(true)}
            className="px-5 py-2.5 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors"
            style={{ fontSize: '14px', fontWeight: '600' }}
          >
            Adjust goal
          </button>
        </div>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="h-5 w-48 bg-slate-100 dark:bg-slate-700 rounded animate-pulse mb-2" />
            <div className="h-3 w-72 bg-slate-100 dark:bg-slate-700 rounded animate-pulse" />
          </div>
          <div className="h-9 w-32 bg-slate-100 dark:bg-slate-700 rounded animate-pulse" />
        </div>
        <div className="space-y-3">
          <div className="h-4 w-32 bg-slate-100 dark:bg-slate-700 rounded animate-pulse" />
          <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded animate-pulse" />
          <div className="h-3 w-64 bg-slate-100 dark:bg-slate-700 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h3 className="text-slate-900 dark:text-white mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>
              AI Goals (Next 4–12 weeks)
            </h3>
            <p className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px' }}>
              Describe your goal in plain English. AI turns it into a trackable plan.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRegenerate}
              className="px-3 py-1.5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              style={{ fontSize: '13px', fontWeight: '500' }}
            >
              <RefreshCw className="w-4 h-4 inline mr-1" />
              Regenerate
            </button>
            <button
              onClick={() => setIsAdjustModalOpen(true)}
              className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors"
              style={{ fontSize: '13px', fontWeight: '600' }}
            >
              <Edit2 className="w-4 h-4 inline mr-1.5" />
              Adjust goal
            </button>
          </div>
        </div>

        {/* Current Goal */}
        <div className="mb-5 pb-5 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="text-slate-900 dark:text-white mb-1" style={{ fontSize: '15px', fontWeight: '600' }}>
                {currentGoal.title}
              </h4>
              <p className="text-slate-500 dark:text-slate-400" style={{ fontSize: '13px' }}>
                {currentGoal.target.toLocaleString()} by {currentGoal.deadline}
              </p>
            </div>
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusStyles()}`}>
              {currentGoal.status}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-700 dark:bg-teal-500 rounded-full transition-all duration-500"
                style={{ width: `${currentGoal.percentage}%` }}
              />
            </div>
            <div className="flex items-center justify-between mt-1.5">
              <span className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px' }}>
                Current: {currentGoal.current.toLocaleString()}
              </span>
              <span className="text-slate-900 dark:text-white font-mono" style={{ fontSize: '12px', fontWeight: '600' }}>
                {currentGoal.percentage}%
              </span>
              <span className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px' }}>
                Target: {currentGoal.target.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Next Action */}
          <div className="bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900/70 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-teal-700 dark:text-teal-300 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-teal-700 dark:text-teal-300" style={{ fontSize: '12px', fontWeight: '600' }}>
                  Do next:{' '}
                </span>
                <span className="text-teal-800 dark:text-teal-200" style={{ fontSize: '12px' }}>
                  {currentGoal.nextAction}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Goals (Collapsible) */}
        <div>
          <button
            onClick={() => setIsSupportingExpanded(!isSupportingExpanded)}
            className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-3"
            style={{ fontSize: '13px', fontWeight: '500' }}
          >
            {isSupportingExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
            Supporting goals ({supportingGoals.length})
          </button>

          {isSupportingExpanded && (
            <div className="space-y-2">
              {supportingGoals.map((goal, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 px-3 bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-lg"
                >
                  <span className="text-slate-700 dark:text-slate-200" style={{ fontSize: '13px', fontWeight: '500' }}>
                    {goal.title}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px' }}>
                    {goal.target}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Adjust Goal Modal */}
      {isAdjustModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsAdjustModalOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-white dark:bg-slate-900 rounded-[16px] shadow-2xl max-w-lg w-full border border-slate-200 dark:border-slate-700">
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <h2 className="text-slate-900 dark:text-white" style={{ fontSize: '18px', fontWeight: '700' }}>
                Adjust your goal
              </h2>
              <button
                onClick={() => setIsAdjustModalOpen(false)}
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-5">
              <div>
                <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="e.g., I want +10k followers in the next 2 months, posting 4 times per week."
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent resize-none"
                  style={{ fontSize: '14px', lineHeight: '1.6' }}
                />
              </div>

              {/* AI Parsed Preview */}
              {userInput && (
                <div className="bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900/70 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-teal-700 dark:text-teal-300" />
                    <span className="text-teal-700 dark:text-teal-300" style={{ fontSize: '12px', fontWeight: '600' }}>
                      AI parsed preview
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center">
                      <span className="text-slate-500 dark:text-slate-400 w-20" style={{ fontSize: '12px' }}>
                        Goal:
                      </span>
                      <span className="text-slate-900 dark:text-white" style={{ fontSize: '12px', fontWeight: '500' }}>
                        {parsedGoal.goal}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-slate-500 dark:text-slate-400 w-20" style={{ fontSize: '12px' }}>
                        Target:
                      </span>
                      <span className="text-slate-900 dark:text-white" style={{ fontSize: '12px', fontWeight: '500' }}>
                        {parsedGoal.target}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-slate-500 dark:text-slate-400 w-20" style={{ fontSize: '12px' }}>
                        Deadline:
                      </span>
                      <span className="text-slate-900 dark:text-white" style={{ fontSize: '12px', fontWeight: '500' }}>
                        {parsedGoal.deadline}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-end gap-3 bg-slate-50 dark:bg-slate-800">
              <button
                onClick={() => setIsAdjustModalOpen(false)}
                className="px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                style={{ fontSize: '14px', fontWeight: '500' }}
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                disabled={!userInput.trim()}
                className="px-6 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-6 py-3 rounded-lg shadow-xl z-50 animate-fade-in">
          <p style={{ fontSize: '14px', fontWeight: '500' }}>
            Goal updated by AI.
          </p>
        </div>
      )}
    </>
  );
}

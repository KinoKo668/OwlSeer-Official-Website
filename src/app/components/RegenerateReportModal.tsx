import React from 'react';
import { X } from 'lucide-react';

interface RegenerateReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: string) => void;
}

export function RegenerateReportModal({
  isOpen,
  onClose,
  onSubmit,
}: RegenerateReportModalProps) {
  const [feedback, setFeedback] = React.useState('');
  const [selectedChips, setSelectedChips] = React.useState<string[]>([]);

  const quickChips = [
    'More deal-focused',
    'Increase posting frequency',
    'More beginner-friendly',
    'Try new hooks',
  ];

  const handleChipClick = (chip: string) => {
    if (selectedChips.includes(chip)) {
      setSelectedChips(selectedChips.filter(c => c !== chip));
      setFeedback(feedback.replace(chip + '; ', '').replace(chip, ''));
    } else {
      setSelectedChips([...selectedChips, chip]);
      setFeedback(feedback ? `${feedback}; ${chip}` : chip);
    }
  };

  const handleSubmit = () => {
    onSubmit(feedback);
    setFeedback('');
    setSelectedChips([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-900 rounded-[12px] max-w-[540px] w-full shadow-xl border border-slate-200 dark:border-slate-700">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
          <div>
            <h2 className="text-slate-900 dark:text-white mb-1" style={{ fontSize: '18px', fontWeight: '700' }}>
              Regenerate weekly report
            </h2>
            <p className="text-slate-500 dark:text-slate-400" style={{ fontSize: '13px' }}>
              Tell us what to change for next week's report and plan.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5 text-slate-500 dark:text-slate-400" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Quick Chips */}
          <div>
            <label className="block text-slate-900 dark:text-white mb-3" style={{ fontSize: '13px', fontWeight: '600' }}>
              Quick suggestions
            </label>
            <div className="flex flex-wrap gap-2">
              {quickChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleChipClick(chip)}
                  className={`px-3 py-1.5 rounded-full border transition-colors ${
                    selectedChips.includes(chip)
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-emerald-500 hover:text-emerald-500'
                  }`}
                  style={{ fontSize: '13px', fontWeight: '500' }}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-slate-900 dark:text-white mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
              Your feedback
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Example: Focus more on deals; 2 posts/day; avoid long tutorials; add stronger CTAs."
              className="w-full h-32 px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg resize-none bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              style={{ fontSize: '14px' }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={onClose}
            className="px-4 py-2 text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-500 dark:hover:border-slate-500 transition-colors"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!feedback.trim()}
            className="px-4 py-2 text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            Regenerate
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { X, Sparkles } from 'lucide-react';

interface RegenerateWeeklyReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegenerate: (feedback: string) => void;
}

export function RegenerateWeeklyReportModal({
  isOpen,
  onClose,
  onRegenerate,
}: RegenerateWeeklyReportModalProps) {
  const [feedback, setFeedback] = React.useState('');

  const quickChips = [
    'More deal-focused',
    'Increase posting frequency',
    'More beginner-friendly',
    'Try new hooks',
  ];

  const handleChipClick = (chip: string) => {
    setFeedback((prev) => {
      if (prev.trim()) {
        return `${prev}; ${chip}`;
      }
      return chip;
    });
  };

  const handleSubmit = () => {
    onRegenerate(feedback);
    setFeedback('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-[12px] shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-[#e0e0e0]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#f0fdf4] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#10b981]" />
              </div>
              <div>
                <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '18px', fontWeight: '700' }}>
                  Regenerate weekly report
                </h2>
                <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                  Tell us what to change for next week's report and plan.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-[#999999] hover:text-[#1a1a1a] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4">
            {/* Textarea */}
            <div>
              <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                Your suggestions
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Example: Focus more on deals; 2 posts/day; avoid long tutorials; add stronger CTAs."
                rows={5}
                className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent resize-none"
                style={{ fontSize: '14px' }}
              />
            </div>

            {/* Quick chips */}
            <div>
              <label className="block text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                Quick suggestions (click to add)
              </label>
              <div className="flex flex-wrap gap-2">
                {quickChips.map((chip, i) => (
                  <button
                    key={i}
                    onClick={() => handleChipClick(chip)}
                    className="px-3 py-1.5 rounded-full bg-[#f5f5f5] text-[#666666] border border-[#e0e0e0] hover:border-[#10b981] hover:text-[#10b981] transition-colors"
                    style={{ fontSize: '12px', fontWeight: '500' }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#e0e0e0]">
            <button
              onClick={onClose}
              className="px-4 py-2 text-[#666666] hover:text-[#1a1a1a] transition-colors"
              style={{ fontSize: '14px', fontWeight: '600' }}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!feedback.trim()}
              className="px-6 py-2 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontSize: '14px', fontWeight: '600' }}
            >
              Regenerate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

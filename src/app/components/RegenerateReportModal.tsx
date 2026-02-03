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
      <div className="bg-white rounded-[12px] max-w-[540px] w-full shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e0e0e0]">
          <div>
            <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '18px', fontWeight: '700' }}>
              Regenerate weekly report
            </h2>
            <p className="text-[#666666]" style={{ fontSize: '13px' }}>
              Tell us what to change for next week's report and plan.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f5f5f5] transition-colors"
          >
            <X className="w-5 h-5 text-[#666666]" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Quick Chips */}
          <div>
            <label className="block text-[#1a1a1a] mb-3" style={{ fontSize: '13px', fontWeight: '600' }}>
              Quick suggestions
            </label>
            <div className="flex flex-wrap gap-2">
              {quickChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleChipClick(chip)}
                  className={`px-3 py-1.5 rounded-full border transition-colors ${
                    selectedChips.includes(chip)
                      ? 'bg-[#10b981] border-[#10b981] text-white'
                      : 'bg-white border-[#e0e0e0] text-[#666666] hover:border-[#10b981] hover:text-[#10b981]'
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
            <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
              Your feedback
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Example: Focus more on deals; 2 posts/day; avoid long tutorials; add stronger CTAs."
              className="w-full h-32 px-4 py-3 border border-[#e0e0e0] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent"
              style={{ fontSize: '14px' }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-[#e0e0e0]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[#666666] bg-white border border-[#e0e0e0] rounded-lg hover:border-[#666666] transition-colors"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!feedback.trim()}
            className="px-4 py-2 text-white bg-[#10b981] rounded-lg hover:bg-[#059669] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            Regenerate
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { ChevronDown, Info, RotateCw, X } from 'lucide-react';

interface WeeklyHeaderBarProps {
  selectedWeek?: string;
  status?: 'Generated' | 'Generating' | 'Needs data';
  onWeekChange?: (week: string) => void;
  onRegenerate?: (requirement?: string) => void;
}

export function WeeklyHeaderBar({
  selectedWeek = 'Week of Jan 12–Jan 18',
  status = 'Generated',
  onWeekChange,
  onRegenerate,
}: WeeklyHeaderBarProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [requirement, setRequirement] = useState('');

  const getStatusStyles = () => {
    switch (status) {
      case 'Generated':
        return 'bg-[#D1FAE5] text-[#059669] border-[#6EE7B7]';
      case 'Generating':
        return 'bg-[#FEF3C7] text-[#D97706] border-[#FCD34D]';
      case 'Needs data':
        return 'bg-[#F3F4F6] text-[#6B7280] border-[#D1D5DB]';
      default:
        return 'bg-[#F3F4F6] text-[#6B7280] border-[#D1D5DB]';
    }
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
    setRequirement('');
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setRequirement('');
  };

  const handleConfirmRegenerate = () => {
    if (onRegenerate) {
      onRegenerate(requirement.trim() || undefined);
    }
    handleCloseDialog();
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 flex-wrap">
          <h2 className="text-[#111827]" style={{ fontSize: '20px', fontWeight: '700' }}>
            Weekly Plan
          </h2>

          {/* Week Selector */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F8F9FA] rounded-lg border border-[#E5E7EB]">
            <span className="text-[#111827]" style={{ fontSize: '13px', fontWeight: '600' }}>
              {selectedWeek}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Info Icon */}
          <button className="p-1.5 hover:bg-[#F8F9FA] rounded-lg transition-colors group relative">
            <Info className="w-4 h-4 text-[#374151]" />
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-[#E5E7EB] rounded-lg shadow-xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
              <p className="text-[#374151]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                Reports are generated weekly and saved for history.
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Regenerate Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4" style={{ borderRadius: '12px' }}>
            {/* Dialog Header */}
            <div className="flex items-center justify-between p-5 border-b border-[#E5E7EB]">
              <h3 className="text-[#111827]" style={{ fontSize: '18px', fontWeight: '700' }}>
                Regenerate Weekly Plan
              </h3>
              <button
                onClick={handleCloseDialog}
                className="p-1.5 hover:bg-[#F8F9FA] rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-[#374151]" />
              </button>
            </div>

            {/* Dialog Content */}
            <div className="p-5">
              <p className="text-[#374151] mb-4" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                Provide specific requirements or preferences for regenerating this week's plan (optional):
              </p>
              <textarea
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                className="w-full h-32 px-3 py-2.5 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#0F766E] transition-colors resize-none"
                placeholder="e.g., Focus more on short-form videos, include trending topics..."
                style={{ fontSize: '13px' }}
              />
            </div>

            {/* Dialog Footer */}
            <div className="flex items-center justify-end gap-3 p-5 border-t border-[#E5E7EB]">
              <button
                onClick={handleCloseDialog}
                className="px-4 py-2 text-[#374151] hover:text-[#111827] hover:bg-[#F8F9FA] rounded-lg transition-colors"
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmRegenerate}
                className="px-4 py-2 bg-[#0F766E] text-white hover:bg-[#0D9488] rounded-lg transition-colors"
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                Regenerate
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
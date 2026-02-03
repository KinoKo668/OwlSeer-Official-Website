import React from 'react';
import { X, Star, Check } from 'lucide-react';

interface FeedbackDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage?: string;
  currentAccount?: string;
}

export function FeedbackDrawer({ isOpen, onClose, currentPage = 'Overview', currentAccount = 'TechReviews_US' }: FeedbackDrawerProps) {
  const [rating, setRating] = React.useState<number | null>(null);
  const [reason, setReason] = React.useState<string>('');
  const [additionalFeedback, setAdditionalFeedback] = React.useState<string>('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const reasons = [
    '计划/To-do 不够可执行',
    '分析不准或不相关',
    '脚本/内容产出质量一般',
    '操作流程太复杂',
    '页面加载慢/卡顿',
    '其他',
  ];

  const handleSubmit = () => {
    if (rating && reason) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setRating(null);
    setReason('');
    setAdditionalFeedback('');
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 px-6 py-4 border-b border-[#e0e0e0]">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h2 className="text-foreground" style={{ fontSize: '18px', fontWeight: '700' }}>
              体验反馈
            </h2>
            
            <div className="flex items-center gap-2">
              {/* Mock Tag */}
              <div className="px-2 py-1 bg-[#fef3c7] border border-[#fde68a] rounded">
                <span className="text-[#92400e]" style={{ fontSize: '9px', fontWeight: '700' }}>
                  Mock only
                </span>
              </div>
              
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-[#f5f5f5] rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
          
          <p className="text-muted-foreground" style={{ fontSize: '13px', lineHeight: '1.5' }}>
            用 20 秒告诉我们哪里可以更好
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {isSubmitted ? (
            /* Success State */
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#dcfce7] flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-[#16a34a]" strokeWidth={3} />
              </div>
              <p className="text-foreground text-center mb-2" style={{ fontSize: '16px', fontWeight: '700' }}>
                已收到，谢谢！
              </p>
              <p className="text-muted-foreground text-center mb-6" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                我们会用来优化 Owlseer。
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-[12px] bg-[#111827] text-white hover:bg-[#000000] transition-all"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                关闭
              </button>
            </div>
          ) : (
            /* Feedback Form */
            <div className="space-y-6">
              {/* A. Quick Rating (Required) */}
              <div>
                <label className="block text-foreground mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>
                  你对当前使用体验满意吗？
                  <span className="text-red-500 ml-1">*</span>
                </label>
                
                <div className="flex items-center justify-between gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => setRating(value)}
                      className={`flex-1 h-12 rounded-lg border-2 transition-all flex items-center justify-center ${
                        rating === value
                          ? 'bg-[#f0f9ff] border-[#0284c7]'
                          : 'bg-white border-[#e0e0e0] hover:border-[#d1d5db]'
                      }`}
                    >
                      <Star
                        className={`w-5 h-5 transition-all ${
                          rating && rating >= value
                            ? 'fill-[#fbbf24] text-[#fbbf24]'
                            : 'text-[#d1d5db]'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground" style={{ fontSize: '11px' }}>
                    1 = 很差
                  </span>
                  <span className="text-muted-foreground" style={{ fontSize: '11px' }}>
                    5 = 很满意
                  </span>
                </div>
              </div>

              {/* B. Reason Selection (Required) */}
              <div>
                <label className="block text-foreground mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>
                  主要原因是什么？
                  <span className="text-red-500 ml-1">*</span>
                </label>
                
                <div className="space-y-2">
                  {reasons.map((reasonOption) => (
                    <label
                      key={reasonOption}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        reason === reasonOption
                          ? 'bg-[#f0f9ff] border-[#0284c7]'
                          : 'bg-white border-[#e0e0e0] hover:bg-[#fafafa]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="reason"
                        value={reasonOption}
                        checked={reason === reasonOption}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-4 h-4 text-[#0284c7] border-[#d1d5db] focus:ring-[#0284c7]"
                      />
                      <span className="text-foreground" style={{ fontSize: '13px', fontWeight: '500' }}>
                        {reasonOption}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* C. Additional Feedback (Optional) */}
              <div>
                <label className="block text-foreground mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                  补充一句（可选）
                </label>
                
                <textarea
                  value={additionalFeedback}
                  onChange={(e) => setAdditionalFeedback(e.target.value)}
                  placeholder="例如：我希望每周计划能更贴合我的发片节奏..."
                  rows={4}
                  className="w-full px-3 py-2.5 rounded-lg border border-[#e0e0e0] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/10 resize-none"
                  style={{ fontSize: '13px', lineHeight: '1.5' }}
                />
              </div>

              {/* D. Context Info (Auto, Placeholder) */}
              <div className="pt-4 border-t border-[#f0f0f0]">
                <div className="space-y-1">
                  <p className="text-muted-foreground" style={{ fontSize: '11px' }}>
                    反馈页面：<span className="font-semibold">{currentPage}</span> (auto)
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: '11px' }}>
                    当前账号：<span className="font-semibold">{currentAccount}</span> (auto)
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer (Sticky) */}
        {!isSubmitted && (
          <div className="flex-shrink-0 px-6 py-4 border-t border-[#e0e0e0] bg-white">
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2.5 rounded-[12px] border border-[#e0e0e0] text-foreground hover:bg-[#fafafa] transition-all"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                取消
              </button>
              <button
                onClick={handleSubmit}
                disabled={!rating || !reason}
                className={`flex-1 px-4 py-2.5 rounded-[12px] transition-all ${
                  rating && reason
                    ? 'bg-[#111827] text-white hover:bg-[#000000]'
                    : 'bg-[#f5f5f5] text-muted-foreground cursor-not-allowed'
                }`}
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                提交反馈
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
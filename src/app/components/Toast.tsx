import React from 'react';
import { Check, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info';
  onClose?: () => void;
}

export function Toast({ message, type = 'success', onClose }: ToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-slide-up">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-[12px] shadow-xl border ${
          type === 'success'
            ? 'bg-[#d1fae5] border-[#a7f3d0] text-[#065f46]'
            : 'bg-white border-[#e0e0e0] text-[#1a1a1a]'
        }`}
        style={{ minWidth: '280px' }}
      >
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center ${
            type === 'success' ? 'bg-[#10b981]' : 'bg-[#666666]'
          }`}
        >
          <Check className="w-3.5 h-3.5 text-white" />
        </div>
        <p className="flex-1" style={{ fontSize: '14px', fontWeight: '600' }}>
          {message}
        </p>
        <button
          onClick={onClose}
          className="text-current opacity-50 hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slide-up {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .animate-slide-up {
    animation: slide-up 0.3s ease-out;
  }
`;
document.head.appendChild(style);

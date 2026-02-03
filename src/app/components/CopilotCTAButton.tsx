import React from 'react';
import { Sparkles } from 'lucide-react';

interface CopilotCTAButtonProps {
  question: string;
  context?: {
    [key: string]: any;
  };
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  onNavigate?: (page: string, question?: string) => void;
}

export function CopilotCTAButton({ question, context, size = 'md', variant = 'secondary', onNavigate }: CopilotCTAButtonProps) {
  const handleClick = () => {
    console.log('Opening Copilot with context:', { question, context });
    if (onNavigate) {
      onNavigate('copilot', question);
    }
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
  };

  const variantClasses = {
    primary: 'bg-[#1a1a1a] text-white hover:bg-[#404040]',
    secondary: 'bg-white text-[#1a1a1a] border border-[#e0e0e0] hover:bg-[#f5f5f5]',
    ghost: 'bg-transparent text-[#666666] hover:bg-[#f5f5f5] hover:text-[#1a1a1a]',
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-lg transition-colors flex items-center gap-2 font-semibold ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      <Sparkles className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
      <span>{question}</span>
    </button>
  );
}
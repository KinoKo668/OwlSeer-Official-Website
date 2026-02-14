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
    primary: 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200',
    secondary: 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800',
    ghost: 'bg-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white',
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

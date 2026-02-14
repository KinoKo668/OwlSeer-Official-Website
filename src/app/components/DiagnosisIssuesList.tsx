import React from 'react';
import { ChevronDown, Info, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface IssueData {
  id: string;
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
  title: string;
  // userValue, userLabel, benchmarkValue, benchmarkLabel, userPercentage, benchmarkPercentage removed
  reason: string;
  solution: string;
  actionButton?: {
    text: string;
    onClick: () => void;
  };
}

interface DiagnosisIssuesListProps {
  issues: IssueData[];
}

export function DiagnosisIssuesList({ issues }: DiagnosisIssuesListProps) {
  const [expandedIds, setExpandedIds] = React.useState<Set<string>>(
    new Set([issues[0]?.id])
  );
  const activeIssues = issues;
  const hasIssues = activeIssues.length > 0;

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case 'HIGH':
        return {
          border: 'border-red-500',
          bg: 'bg-red-50',
          text: 'text-red-700',
          badge: 'bg-red-100 text-red-700',
          icon: 'text-red-500'
        };
      case 'MEDIUM':
        return {
          border: 'border-amber-500',
          bg: 'bg-amber-50',
          text: 'text-amber-700',
          badge: 'bg-amber-100 text-amber-700',
          icon: 'text-amber-500'
        };
      case 'LOW':
        return {
          border: 'border-blue-500',
          bg: 'bg-blue-50',
          text: 'text-blue-700',
          badge: 'bg-blue-100 text-blue-700',
          icon: 'text-blue-500'
        };
      default:
        return {
          border: 'border-gray-400',
          bg: 'bg-gray-50',
          text: 'text-gray-700',
          badge: 'bg-gray-100 text-gray-700',
          icon: 'text-gray-400'
        };
    }
  };

  return (
    <div className="w-full bg-card rounded-[12px] border border-border p-6 shadow-sm">
      {/* Module Title */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-card-foreground mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>
            {hasIssues ? 'Issues Found' : 'Account Health'}
          </h3>
          <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
            {hasIssues ? 'Critical issues affecting your account performance.' : 'All systems operating normally.'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {hasIssues ? (
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${activeIssues.length >= 3 ? 'bg-red-500 text-white' : 'bg-amber-500 text-white'}`}>
              {activeIssues.length} Issues
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white">
              Healthy
            </span>
          )}
        </div>
      </div>

      {/* Issue Cards */}
      <div className="space-y-4">
        {hasIssues ? (
          activeIssues.map((issue) => {
            const isExpanded = expandedIds.has(issue.id);
            const styles = getSeverityStyles(issue.severity);
  
            return (
              <motion.div
                key={issue.id}
                initial={false}
                className={`rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-black/30 ${isExpanded ? 'shadow-md ring-1 ring-black/5 dark:ring-white/10' : 'shadow-sm'}`}
              >
                {/* Card Header */}
                <button
                  onClick={() => toggleExpanded(issue.id)}
                  className={`w-full flex items-center justify-between p-4 pl-0 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60 group`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Severity Indicator Bar */}
                    <div className={`w-1 self-stretch rounded-r-full ${styles.border.replace('border', 'bg')}`} />
                    
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                          {issue.title}
                        </h4>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${styles.badge}`}>
                          {issue.severity}
                        </span>
                      </div>
                    </div>
                  </div>
  
                  <div className="pr-4">
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
                    </motion.div>
                  </div>
                </button>
  
                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 pt-0 space-y-5">
                        <div className="h-px w-full bg-slate-100 dark:bg-slate-800 mb-4" />
  
                        {/* Why This Matters */}
                        <div className="bg-slate-50 dark:bg-slate-800/70 rounded-lg p-4 border border-slate-100 dark:border-slate-700">
                          <div className="flex items-start gap-3">
                            <Info className="w-4 h-4 text-slate-500 dark:text-slate-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">
                                Why this matters
                              </div>
                              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                {issue.reason}
                              </p>
                            </div>
                          </div>
                        </div>
  
                        {/* Recommended Fix */}
                        <div className="bg-emerald-50/70 dark:bg-emerald-950/40 rounded-lg p-4 border border-emerald-100 dark:border-emerald-900/70">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-1.5">
                                Recommended Fix
                              </div>
                              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                {issue.solution}
                              </p>
                            </div>
                          </div>
                        </div>
  
                        {/* Action Button - Removed per user request */}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center bg-emerald-50/40 dark:bg-emerald-950/30 rounded-xl border border-emerald-100 dark:border-emerald-900/70 border-dashed">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/70 rounded-full flex items-center justify-center mb-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">No Issues Detected</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[200px] leading-relaxed">
              Your content strategy is aligned with your audience. Keep it up!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

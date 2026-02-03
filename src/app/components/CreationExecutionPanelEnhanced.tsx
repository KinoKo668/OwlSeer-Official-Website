import React from 'react';
import {
  Sparkles,
  Clock,
  CheckCircle,
  FileEdit,
  MoreHorizontal,
  FileText,
  Link as LinkIcon,
  X,
  ExternalLink,
} from 'lucide-react';
import { ScriptSelectorModal } from './ScriptSelectorModal';

type TaskStatus = 'todo' | 'in-progress' | 'done';

interface ContentTask {
  id: string;
  title: string;
  purpose: string;
  description: string;
  status: TaskStatus;
  date: Date;
  structure?: string;
  linkedScriptId?: string;
  linkedScriptTitle?: string;
}

// Mock scripts data - in real app this would come from ContentStudio state
const mockScripts = [
  {
    id: 'script-1',
    title: '5 iPhone Features Apple Hides',
    contentType: 'Product Review',
    status: 'Ready' as const,
    updatedAt: new Date(2026, 0, 20),
    scenes: [
      { id: 's1', role: 'Hook' },
      { id: 's2', role: 'Context' },
      { id: 's3', role: 'Value' },
      { id: 's4', role: 'Proof' },
      { id: 's5', role: 'CTA' },
    ],
  },
  {
    id: 'script-2',
    title: 'Budget Laptop Comparison 2026',
    contentType: 'Product Review',
    status: 'Ready' as const,
    updatedAt: new Date(2026, 0, 19),
    scenes: [
      { id: 's1', role: 'Hook' },
      { id: 's2', role: 'Context' },
      { id: 's3', role: 'Value' },
      { id: 's4', role: 'Proof' },
      { id: 's5', role: 'CTA' },
    ],
  },
  {
    id: 'script-3',
    title: 'Morning Routine for Productivity',
    contentType: 'Tutorial',
    status: 'Draft' as const,
    updatedAt: new Date(2026, 0, 21),
    scenes: [
      { id: 's1', role: 'Hook' },
      { id: 's2', role: 'Context' },
      { id: 's3', role: 'Value' },
    ],
  },
];

interface CreationExecutionPanelEnhancedProps {
  task: ContentTask;
  onNavigate?: (page: string) => void;
  onLinkScript?: (taskId: string, scriptId: string, scriptTitle: string) => void;
  onUnlinkScript?: (taskId: string) => void;
}

export function CreationExecutionPanelEnhanced({
  task,
  onNavigate,
  onLinkScript,
  onUnlinkScript,
}: CreationExecutionPanelEnhancedProps) {
  const [showScriptSelector, setShowScriptSelector] = React.useState(false);
  const [linkedScript, setLinkedScript] = React.useState(
    task.linkedScriptId
      ? mockScripts.find(s => s.id === task.linkedScriptId)
      : undefined
  );

  const handleGenerateScript = () => {
    // Navigate to Copilot
    onNavigate?.('copilot');
  };

  const handleSelectScript = (script: any) => {
    setLinkedScript(script);
    onLinkScript?.(task.id, script.id, script.title);
    setShowScriptSelector(false);
  };

  const handleUnlinkScript = () => {
    setLinkedScript(undefined);
    onUnlinkScript?.(task.id);
  };

  const handleViewScript = () => {
    // Navigate to Studio and open the script
    onNavigate?.('studio');
  };

  const getStatusStyle = () => {
    switch (task.status) {
      case 'done':
        return {
          icon: <CheckCircle className="w-5 h-5 text-[#16a34a]" />,
          label: 'Completed',
          color: 'text-[#16a34a]',
        };
      case 'in-progress':
        return {
          icon: <Clock className="w-5 h-5 text-[#f59e0b]" />,
          label: 'In Progress',
          color: 'text-[#f59e0b]',
        };
      case 'todo':
        return {
          icon: <div className="w-5 h-5 rounded-full border-2 border-[#e0e0e0]" />,
          label: 'Not Started',
          color: 'text-[#999999]',
        };
    }
  };

  const statusStyle = getStatusStyle();

  return (
    <>
      <div className="bg-white rounded-xl border border-[#e0e0e0] overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-[#e0e0e0]">
          <div className="flex items-center gap-2 mb-3">
            {statusStyle.icon}
            <span className={statusStyle.color} style={{ fontSize: '12px', fontWeight: '600' }}>
              {statusStyle.label}
            </span>
          </div>

          <h2 className="text-[#1a1a1a] mb-2" style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.3' }}>
            {task.title}
          </h2>

          <p className="text-[#999999]" style={{ fontSize: '12px' }}>
            {task.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Linked Script Section */}
          {linkedScript ? (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Linked Script
                </h3>
                <button
                  onClick={handleUnlinkScript}
                  className="p-1 rounded hover:bg-[#fee2e2] transition-colors"
                  title="Unlink script"
                >
                  <X className="w-3 h-3 text-[#dc2626]" />
                </button>
              </div>
              <div className="p-3 rounded-lg bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] border border-[#3b82f6]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#3b82f6] flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#1a1a1a] mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                      {linkedScript.title}
                    </h4>
                    <p className="text-[#666666] mb-2" style={{ fontSize: '12px' }}>
                      {linkedScript.contentType} · {linkedScript.scenes.length} scenes
                    </p>
                    <button
                      onClick={handleViewScript}
                      className="flex items-center gap-1 text-[#3b82f6] hover:text-[#2563eb] transition-colors"
                      style={{ fontSize: '12px', fontWeight: '600' }}
                    >
                      <span>View in Studio</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-[#999999] mb-2" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Content Script
              </h3>
              <button
                onClick={() => setShowScriptSelector(true)}
                className="w-full p-3 rounded-lg border-2 border-dashed border-[#e0e0e0] hover:border-[#3b82f6] hover:bg-[#f5f5f5] transition-all flex items-center justify-center gap-2 text-[#666666] hover:text-[#3b82f6]"
              >
                <LinkIcon className="w-4 h-4" />
                <span style={{ fontSize: '13px', fontWeight: '600' }}>Link existing script</span>
              </button>
            </div>
          )}

          {/* What to Create */}
          <div>
            <h3 className="text-[#999999] mb-2" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              What to Create
            </h3>
            <p className="text-[#1a1a1a]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              {task.description}
            </p>
          </div>

          {/* Why This Matters */}
          <div>
            <h3 className="text-[#999999] mb-2" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Why This Matters
            </h3>
            <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
              {task.purpose}
            </p>
          </div>

          {/* Recommended Structure */}
          {task.structure && task.status !== 'done' && (
            <div>
              <h3 className="text-[#999999] mb-2" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Recommended Structure
              </h3>
              <div className="p-3 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0]">
                <p className="text-[#1a1a1a]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  {task.structure}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="p-5 border-t border-[#e0e0e0]">
          {task.status !== 'done' ? (
            <div className="space-y-3">
              {/* Primary CTA */}
              {linkedScript ? (
                <button
                  onClick={handleViewScript}
                  className="w-full flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-all shadow-sm hover:shadow-md"
                >
                  <FileText className="w-5 h-5" />
                  <span style={{ fontSize: '15px', fontWeight: '600' }}>Continue in Studio</span>
                </button>
              ) : (
                <button
                  onClick={handleGenerateScript}
                  className="w-full flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-all shadow-sm hover:shadow-md"
                >
                  <Sparkles className="w-5 h-5" />
                  <span style={{ fontSize: '15px', fontWeight: '600' }}>Generate script</span>
                </button>
              )}

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2">
                <button className="px-3 py-2.5 rounded-lg border border-[#e0e0e0] text-[#666666] hover:bg-[#f5f5f5] transition-colors">
                  <FileEdit className="w-4 h-4 mx-auto mb-1" />
                  <span style={{ fontSize: '11px', fontWeight: '600' }}>Write myself</span>
                </button>
                <button className="px-3 py-2.5 rounded-lg border border-[#e0e0e0] text-[#666666] hover:bg-[#f5f5f5] transition-colors">
                  <CheckCircle className="w-4 h-4 mx-auto mb-1" />
                  <span style={{ fontSize: '11px', fontWeight: '600' }}>Mark done</span>
                </button>
              </div>

              {/* More Options */}
              <button className="w-full px-4 py-2 rounded-lg text-[#999999] hover:bg-[#f5f5f5] transition-colors flex items-center justify-center gap-2">
                <MoreHorizontal className="w-4 h-4" />
                <span style={{ fontSize: '12px', fontWeight: '600' }}>More options</span>
              </button>
            </div>
          ) : (
            <div className="text-center py-6">
              <CheckCircle className="w-12 h-12 text-[#16a34a] mx-auto mb-3" />
              <p className="text-[#1a1a1a] mb-1" style={{ fontSize: '15px', fontWeight: '600' }}>
                Task completed
              </p>
              <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                Great work!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Script Selector Modal */}
      <ScriptSelectorModal
        isOpen={showScriptSelector}
        onClose={() => setShowScriptSelector(false)}
        onSelect={handleSelectScript}
        selectedScriptId={linkedScript?.id}
        scripts={mockScripts}
      />
    </>
  );
}

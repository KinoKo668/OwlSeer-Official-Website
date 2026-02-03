import React from 'react';
import {
  Plus,
  Edit3,
  MoreVertical,
  Trash2,
  Copy,
  Archive,
  CheckCircle2,
  Circle,
  Clock,
} from 'lucide-react';
import { MobileLayout } from './MobileLayout';
import { ScriptEditor } from './ScriptEditor';
import { ScriptPreview } from './ScriptPreview';
import { CreateScriptModal, ScriptFormData } from './CreateScriptModal';

// Types
type ScriptStatus = 'Draft' | 'Ready' | 'Published';
type SceneRole = 'Hook' | 'Context' | 'Value' | 'Proof' | 'CTA';
type SlotType = 'Core Content' | 'Monetized Content' | 'Experiment' | 'Timely';
type AspectRatio = '9:16' | '16:9' | '1:1';
type ShootingStyle = 'on-camera' | 'off-camera' | 'edit-first';

interface SceneCard {
  id: string;
  role: SceneRole;
  content: string;
  duration?: string;
}

interface Script {
  id: string;
  title: string;
  status: ScriptStatus;
  createdAt: Date;
  updatedAt: Date;
  scenes: SceneCard[];
  scheduledDate?: Date;
  slotType?: SlotType;
  aspectRatio?: AspectRatio;
  shootingStyle?: ShootingStyle;
}

type Page = 'list' | 'editor' | 'preview';

interface StudioMobileProps {
  onNavigate?: (page: string) => void;
}

export function StudioMobile({ onNavigate }: StudioMobileProps) {
  const [currentPage, setCurrentPage] = React.useState<Page>('list');
  const [scripts, setScripts] = React.useState<Script[]>([
    {
      id: '1',
      title: '5 iPhone Features Apple Hides',
      status: 'Draft',
      createdAt: new Date(2026, 0, 20),
      updatedAt: new Date(2026, 0, 21),
      scenes: [
        { id: 's1', role: 'Hook', content: 'Apple keeps these features hidden in your iPhone settings...', duration: '3s' },
        { id: 's2', role: 'Context', content: 'Most people never discover these game-changing features because Apple buries them deep in settings.', duration: '5s' },
        { id: 's3', role: 'Value', content: 'Let me show you the 5 most powerful hidden features that will change how you use your iPhone.', duration: '4s' },
        { id: 's4', role: 'Proof', content: '[Demo each feature with screen recording]', duration: '40s' },
        { id: 's5', role: 'CTA', content: 'Which one surprised you most? Comment below!', duration: '3s' },
      ],
    },
    {
      id: '2',
      title: 'Budget Laptop Comparison',
      status: 'Ready',
      createdAt: new Date(2026, 0, 19),
      updatedAt: new Date(2026, 0, 20),
      scenes: [
        { id: 's1', role: 'Hook', content: 'I tested every budget laptop under $500...', duration: '3s' },
        { id: 's2', role: 'Context', content: 'Finding a good laptop on a budget is nearly impossible. Or is it?', duration: '4s' },
        { id: 's3', role: 'Value', content: "Here's what I found after testing 8 laptops for a week.", duration: '4s' },
        { id: 's4', role: 'Proof', content: '[Show comparison results]', duration: '35s' },
        { id: 's5', role: 'CTA', content: 'Links in bio. Which one would you choose?', duration: '3s' },
      ],
      scheduledDate: new Date(2026, 0, 23, 19, 0),
    },
  ]);
  const [currentScriptId, setCurrentScriptId] = React.useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);

  const currentScript = scripts.find(s => s.id === currentScriptId);

  const handleCreateNew = () => {
    setIsCreateModalOpen(true);
  };

  const handleCreateScript = (formData: ScriptFormData) => {
    const newScript: Script = {
      id: Date.now().toString(),
      title: formData.title,
      status: 'Draft',
      createdAt: new Date(),
      updatedAt: new Date(),
      slotType: formData.slotType,
      aspectRatio: formData.aspectRatio,
      shootingStyle: formData.shootingStyle,
      scenes: [
        { id: 's1', role: 'Hook', content: '', duration: '3s' },
        { id: 's2', role: 'Context', content: '', duration: '5s' },
        { id: 's3', role: 'Value', content: '', duration: '4s' },
        { id: 's4', role: 'Proof', content: '', duration: '40s' },
        { id: 's5', role: 'CTA', content: '', duration: '3s' },
      ],
    };
    setScripts(prev => [newScript, ...prev]);
    setCurrentScriptId(newScript.id);
    setCurrentPage('editor');
  };

  const handleEditScript = (scriptId: string) => {
    setCurrentScriptId(scriptId);
    setCurrentPage('editor');
  };

  const handleDeleteScript = (scriptId: string) => {
    if (confirm('Delete this script?')) {
      setScripts(prev => prev.filter(s => s.id !== scriptId));
    }
  };

  const handleBackToList = () => {
    setCurrentPage('list');
    setCurrentScriptId(null);
  };

  const handleOpenPreview = () => {
    setCurrentPage('preview');
  };

  const handleBackToEditor = () => {
    setCurrentPage('editor');
  };

  const handleSaveScript = (updatedScript: Script) => {
    setScripts(prev =>
      prev.map(s => (s.id === updatedScript.id ? { ...updatedScript, updatedAt: new Date() } : s))
    );
  };

  const handleMarkReady = () => {
    if (!currentScriptId) return;
    
    setScripts(prev =>
      prev.map(s =>
        s.id === currentScriptId
          ? { ...s, status: 'Ready', updatedAt: new Date() }
          : s
      )
    );
  };

  // Editor Page
  if (currentPage === 'editor' && currentScript) {
    return (
      <ScriptEditor
        script={currentScript}
        onBack={handleBackToList}
        onPreview={handleOpenPreview}
        onSave={handleSaveScript}
        onMarkReady={handleMarkReady}
      />
    );
  }

  // Preview Page
  if (currentPage === 'preview' && currentScript) {
    return (
      <ScriptPreview
        script={currentScript}
        onBack={handleBackToEditor}
        onSchedule={() => {
          alert('Schedule feature coming soon!');
        }}
      />
    );
  }

  // List Page (Default)
  return (
    <MobileLayout
      activeTab="studio"
      onNavigate={onNavigate}
      showAccountSelector={false}
      showNotifications={false}
      showLanguageToggle={false}
    >
      {/* Custom Header */}
      <div className="bg-white border-b border-[#e0e0e0] px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#1a1a1a]" style={{ fontSize: '24px', fontWeight: '700' }}>
              Content Studio
            </h1>
            <p className="text-[#999999]" style={{ fontSize: '13px' }}>
              {scripts.length} scripts
            </p>
          </div>
          <button
            onClick={handleCreateNew}
            className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center active:scale-95 transition-all shadow-lg"
          >
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Scripts List */}
      <div className="p-4 space-y-3">
        {scripts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-[#f5f5f5] flex items-center justify-center mx-auto mb-4">
              <Edit3 className="w-8 h-8 text-[#d0d0d0]" />
            </div>
            <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '17px', fontWeight: '600' }}>
              No scripts yet
            </h3>
            <p className="text-[#999999] mb-6" style={{ fontSize: '14px' }}>
              Create your first video script
            </p>
            <button
              onClick={handleCreateNew}
              className="px-6 py-3 bg-[#3b82f6] text-white rounded-xl active:scale-95 transition-all"
              style={{ fontSize: '15px', fontWeight: '600' }}
            >
              Create Script
            </button>
          </div>
        ) : (
          scripts.map(script => (
            <ScriptCard
              key={script.id}
              script={script}
              onEdit={() => handleEditScript(script.id)}
              onDelete={() => handleDeleteScript(script.id)}
            />
          ))
        )}
      </div>

      {/* Create Script Modal */}
      <CreateScriptModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateScript={handleCreateScript}
      />
    </MobileLayout>
  );
}

// Script Card Component
interface ScriptCardProps {
  script: Script;
  onEdit: () => void;
  onDelete: () => void;
}

function ScriptCard({ script, onEdit, onDelete }: ScriptCardProps) {
  const [showMenu, setShowMenu] = React.useState(false);

  const statusConfig = {
    Draft: { color: '#999999', bg: '#f5f5f5', icon: Circle },
    Ready: { color: '#10b981', bg: '#dcfce7', icon: CheckCircle2 },
    Published: { color: '#3b82f6', bg: '#dbeafe', icon: CheckCircle2 },
  };

  const config = statusConfig[script.status];
  const StatusIcon = config.icon;

  return (
    <div className="relative bg-white rounded-xl border border-[#e0e0e0] p-4 active:scale-98 transition-all">
      <div className="flex items-start gap-3">
        <div className="flex-1" onClick={onEdit}>
          <div className="flex items-center gap-2 mb-2">
            <div
              className="px-2 py-0.5 rounded-md flex items-center gap-1"
              style={{ backgroundColor: config.bg }}
            >
              <StatusIcon className="w-3 h-3" style={{ color: config.color }} />
              <span style={{ fontSize: '11px', fontWeight: '600', color: config.color }}>
                {script.status}
              </span>
            </div>
            {script.scheduledDate && (
              <div className="flex items-center gap-1 text-[#999999]">
                <Clock className="w-3 h-3" />
                <span style={{ fontSize: '11px' }}>
                  {script.scheduledDate.toLocaleDateString()}
                </span>
              </div>
            )}
          </div>

          <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '16px', fontWeight: '600' }}>
            {script.title}
          </h3>

          <div className="flex items-center gap-3 text-[#999999]">
            <span style={{ fontSize: '12px' }}>
              {script.scenes.length} scenes
            </span>
            <span style={{ fontSize: '12px' }}>
              Updated {script.updatedAt.toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Menu Button */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 rounded-lg hover:bg-[#f5f5f5] active:scale-95 transition-all"
          >
            <MoreVertical className="w-4 h-4 text-[#999999]" />
          </button>

          {showMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowMenu(false)}
              />
              <div className="absolute right-0 top-10 z-20 bg-white rounded-xl border border-[#e0e0e0] shadow-lg overflow-hidden w-48">
                <button
                  onClick={() => {
                    onEdit();
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f5f5f5] transition-colors"
                >
                  <Edit3 className="w-4 h-4 text-[#666666]" />
                  <span className="text-[#1a1a1a]" style={{ fontSize: '14px' }}>
                    Edit
                  </span>
                </button>
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f5f5f5] transition-colors"
                >
                  <Copy className="w-4 h-4 text-[#666666]" />
                  <span className="text-[#1a1a1a]" style={{ fontSize: '14px' }}>
                    Duplicate
                  </span>
                </button>
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f5f5f5] transition-colors"
                >
                  <Archive className="w-4 h-4 text-[#666666]" />
                  <span className="text-[#1a1a1a]" style={{ fontSize: '14px' }}>
                    Archive
                  </span>
                </button>
                <button
                  onClick={() => {
                    onDelete();
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#fef2f2] transition-colors border-t border-[#e0e0e0]"
                >
                  <Trash2 className="w-4 h-4 text-[#dc2626]" />
                  <span className="text-[#dc2626]" style={{ fontSize: '14px' }}>
                    Delete
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
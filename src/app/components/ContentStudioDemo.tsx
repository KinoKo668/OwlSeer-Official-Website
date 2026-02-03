import React from 'react';
import { SidebarPro } from './SidebarPro';
import ScriptEditorRefactored from './ContentStudioRefactored';

// Mock Script Data for Demo
const mockScript = {
  id: '1',
  title: 'iPhone 15 Pro Max Honest Review',
  contentType: 'Product Review' as const,
  targetGoal: 'Engagement' as const,
  slotType: 'Trust' as const,
  status: 'Ready' as const,
  workflowStatus: 'Ready to Schedule' as const,
  createdAt: new Date('2024-01-15'),
  updatedAt: new Date('2024-01-16'),
  scenes: [
    {
      id: 's1',
      index: 1,
      role: 'Hook' as const,
      intent: 'Grab attention' as const,
      scriptContent: 'Stop! Before you spend $1200 on the iPhone 15 Pro Max, you need to know these 3 things Apple won\'t tell you.',
      executionNotes: 'Use dramatic tone, close-up on phone',
      onScreenText: '$1200 · iPhone 15 Pro Max',
      durationHint: '3-4s',
      isAIGenerated: true,
      lastEditedBy: 'ai' as const,
      editedAt: new Date('2024-01-15'),
      storyboard: [
        {
          id: 'f1',
          imageUrl: 'https://images.unsplash.com/photo-1592286927505-2fd0cc2b1e00?w=400&h=700&fit=crop',
          caption: 'Hand holding iPhone 15 Pro Max',
          timestamp: '0:00',
        },
        {
          id: 'f2',
          imageUrl: 'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=400&h=700&fit=crop',
          caption: 'Close-up of price tag',
          timestamp: '0:02',
        },
      ],
    },
    {
      id: 's2',
      index: 2,
      role: 'Context' as const,
      intent: 'Explain problem' as const,
      scriptContent: 'I\'ve been testing this phone for 30 days straight, and while everyone\'s talking about the titanium frame and Action button...',
      executionNotes: 'B-roll of phone in use, montage of daily usage',
      onScreenText: '30 Days Testing',
      durationHint: '5-6s',
      isAIGenerated: false,
      lastEditedBy: 'user' as const,
      editedAt: new Date('2024-01-16'),
    },
    {
      id: 's3',
      index: 3,
      role: 'Value / Main Point' as const,
      intent: 'Deliver value' as const,
      scriptContent: 'Here are the 3 things that actually matter: Battery life in real use, the camera quality difference, and whether the Pro Max is worth the extra $200.',
      executionNotes: 'Split screen comparisons, show analytics graphs',
      onScreenText: '3 Key Points',
      durationHint: '8-10s',
      isAIGenerated: true,
      lastEditedBy: 'ai' as const,
      editedAt: new Date('2024-01-15'),
    },
    {
      id: 's4',
      index: 4,
      role: 'Proof / Example' as const,
      intent: 'Provide proof' as const,
      scriptContent: 'After running intensive tests for a month, here\'s the raw data. The battery actually lasts 2 hours less than Apple claims in real-world use.',
      executionNotes: 'Show battery test results on screen',
      onScreenText: 'Battery: 10hrs (not 12hrs)',
      durationHint: '6-7s',
      isAIGenerated: false,
      lastEditedBy: 'user' as const,
      editedAt: new Date('2024-01-16'),
    },
    {
      id: 's5',
      index: 5,
      role: 'CTA / Ending' as const,
      intent: 'Drive action' as const,
      scriptContent: 'Drop a comment: are you Team iPhone or Team Android? And follow for more honest tech reviews that save you money.',
      executionNotes: 'Direct to camera, friendly tone',
      onScreenText: 'iPhone or Android? 👇',
      durationHint: '3s',
      isAIGenerated: true,
      lastEditedBy: 'ai' as const,
      editedAt: new Date('2024-01-15'),
    },
  ],
  version: 3,
};

interface ContentStudioDemoProps {
  onNavigate?: (page: string) => void;
  conversations?: Array<{
    id: string;
    title: string;
    messages: any[];
    createdAt: Date;
    updatedAt: Date;
  }>;
  currentConversationId?: string | null;
  onSelectConversation?: (id: string) => void;
  onDeleteConversation?: (id: string) => void;
}

export function ContentStudioDemo({
  onNavigate,
  conversations = [],
  currentConversationId,
  onSelectConversation,
  onDeleteConversation,
}: ContentStudioDemoProps) {
  const [script, setScript] = React.useState(mockScript);

  const handleSave = (updatedScript: typeof mockScript) => {
    setScript(updatedScript);
    console.log('Script saved:', updatedScript);
  };

  const handleBack = () => {
    if (onNavigate) {
      onNavigate('studio');
    }
  };

  return (
    <div className="flex h-screen bg-[#fafafa]">
      <SidebarPro 
        activeItem="studio" 
        onNavigate={onNavigate}
        conversations={conversations}
        currentConversationId={currentConversationId}
        onSelectConversation={onSelectConversation}
        onDeleteConversation={onDeleteConversation}
      />

      <ScriptEditorRefactored
        script={script}
        onBack={handleBack}
        onSave={handleSave}
      />
    </div>
  );
}

export default ContentStudioDemo;

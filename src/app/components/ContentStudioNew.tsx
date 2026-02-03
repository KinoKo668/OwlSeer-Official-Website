import React from 'react';
import { SidebarPro } from './SidebarPro';
import { BottomTabBar } from './BottomTabBar';
import { TikTokPreviewModal } from './TikTokPreviewModal';
import { TikTokPreviewInline } from './TikTokPreviewInline';
import { PublishPlanModal } from './PublishPlanModal';
import { ScriptEditorNew } from './ScriptEditorNew';
import { CreateScriptModal, ScriptFormData } from './CreateScriptModal';
import { StudioMobile } from './StudioMobile';
import { useIsMobile } from './ui/use-mobile';
import {
  Plus,
  Search,
  MoreVertical,
  Copy,
  Archive,
  Edit3,
  FileText,
  Clock,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Save,
  Undo,
  Redo,
  Wand2,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  X,
  Lightbulb,
  Target,
  Zap,
  GripVertical,
  Trash2,
  ArrowUpDown,
  Eye,
  ChevronUp,
  List,
  Grid3x3,
  PlayCircle,
  Film,
  Smartphone,
  Mic,
  RefreshCw,
} from 'lucide-react';
import { useSimulationTrigger } from './SimulationPageWrapper';

// Types
type ContentType = 'Product Review' | 'Tutorial' | 'Entertainment' | 'Education' | 'Story' | 'Challenge';
type ScriptStatus = 'Draft' | 'Ready' | 'Used' | 'Archived';
type WorkflowStatus = 'In Progress' | 'Ready to Schedule' | 'Scheduled' | 'Published';
type TargetGoal = 'Growth' | 'Engagement' | 'Monetization';
type SlotType = 'Core Content' | 'Experiment' | 'Monetized Content';
type AspectRatio = '9:16' | '16:9' | '1:1';
type DensityMode = 'comfortable' | 'compact';

// Scene Card Types
type SceneRole = 'Hook' | 'Context' | 'Value / Main Point' | 'Proof / Example' | 'CTA / Ending';
type SceneIntent = 'Grab attention' | 'Explain problem' | 'Deliver value' | 'Drive action' | 'Build context' | 'Provide proof';

interface StoryboardFrame {
  id: string;
  imageUrl: string;
  caption: string;
  timestamp: string;
}

interface SceneCard {
  id: string;
  index: number;
  role: SceneRole;
  intent: SceneIntent;
  scriptContent: string;
  spokenVersion?: string; // Optional AI-generated spoken lines
  showSpokenVersion?: boolean; // UI state for toggle
  executionNotes: string;
  durationHint?: string;
  isAIGenerated: boolean;
  lastEditedBy: 'ai' | 'user';
  editedAt: Date;
  storyboard?: StoryboardFrame[];
}

interface Script {
  id: string;
  title: string;
  contentType: ContentType;
  targetGoal: TargetGoal;
  slotType?: SlotType;
  status: ScriptStatus;
  workflowStatus: WorkflowStatus;
  createdAt: Date;
  updatedAt: Date;
  linkedSlot?: string;
  scheduledDate?: Date;
  scenes: SceneCard[];
  version: number;
  needsAttention?: boolean;
  attentionReason?: string;
  creator?: string;
  aspectRatio?: AspectRatio;
  hookPreview?: string;
}

interface CopilotMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestionType?: 'full' | 'section' | 'revision';
  targetSection?: string;
}

interface ContentStudioProps {
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
  isSimulation?: boolean;
}

// Mock Data
const mockScripts: Script[] = [
  {
    id: '1',
    title: 'iPhone 15 Pro Max Honest Review',
    contentType: 'Product Review',
    targetGoal: 'Engagement',
    slotType: 'Core Content',
    status: 'Ready',
    workflowStatus: 'Ready to Schedule',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-16'),
    scenes: [
      {
        id: 's1',
        index: 1,
        role: 'Hook',
        intent: 'Grab attention',
        scriptContent: 'Stop! Before you spend $1200 on the iPhone 15 Pro Max, you need to know these 3 things Apple won\'t tell you.',
        executionNotes: 'Use dramatic tone, close-up on phone',
        durationHint: '3-4s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
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
        role: 'Context',
        intent: 'Explain problem',
        scriptContent: 'I\'ve been testing this phone for 30 days straight, and while everyone\'s talking about the titanium frame and Action button...',
        executionNotes: 'B-roll of phone in use',
        durationHint: '5-6s',
        isAIGenerated: false,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-16'),
      },
      {
        id: 's3',
        index: 3,
        role: 'Value / Main Point',
        intent: 'Deliver value',
        scriptContent: 'Here are the 3 things that actually matter: Battery life in real use, the camera quality difference, and whether the Pro Max is worth the extra $200.',
        executionNotes: 'Split screen comparisons',
        durationHint: '8-10s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-15'),
      },
      {
        id: 's4',
        index: 4,
        role: 'CTA / Ending',
        intent: 'Drive action',
        scriptContent: 'Drop a comment: are you Team iPhone or Team Android? And follow for more honest tech reviews.',
        executionNotes: 'Direct to camera',
        durationHint: '3s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-15'),
      },
    ],
    version: 3,
    needsAttention: true,
    attentionReason: 'Ready but not scheduled',
    creator: 'AI + You',
    aspectRatio: '9:16',
    hookPreview: 'Stop! Before you spend $1200 on the iPhone 15 Pro Max, you need to know these 3 things...',
  },
  {
    id: '2',
    title: '5 Productivity Hacks That Actually Work',
    contentType: 'Tutorial',
    targetGoal: 'Growth',
    slotType: 'Experiment',
    status: 'Ready',
    workflowStatus: 'Scheduled',
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-14'),
    scheduledDate: new Date('2024-01-20'),
    scenes: [
      {
        id: 's1',
        index: 1,
        role: 'Hook',
        intent: 'Grab attention',
        scriptContent: 'I used to be productive for maybe 2 hours a day. Now I get 8 hours of deep work done. Here\'s how.',
        executionNotes: 'Quick cut montage of work setup',
        durationHint: '3s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-12'),
      },
      {
        id: 's2',
        index: 2,
        role: 'Value / Main Point',
        intent: 'Deliver value',
        scriptContent: 'Hack #1: The 90-minute work blocks. Your brain can only focus intensely for about 90 minutes before it needs a real break.',
        executionNotes: 'Show timer, work session visual',
        durationHint: '6s',
        isAIGenerated: true,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-13'),
      },
      {
        id: 's3',
        index: 3,
        role: 'Proof / Example',
        intent: 'Provide proof',
        scriptContent: 'I tracked my output for 30 days. With this method, I finished 3x more projects without working longer hours.',
        executionNotes: 'Screen recording of productivity tracker',
        durationHint: '5s',
        isAIGenerated: false,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-14'),
      },
      {
        id: 's4',
        index: 4,
        role: 'CTA / Ending',
        intent: 'Drive action',
        scriptContent: 'Save this for later, and let me know which hack you\'ll try first!',
        executionNotes: 'Point to save button',
        durationHint: '2s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-12'),
      },
    ],
    version: 5,
    creator: 'You',
    aspectRatio: '16:9',
    hookPreview: 'I used to be productive for maybe 2 hours a day. Now I get 8 hours of deep work done.',
  },
  {
    id: '3',
    title: 'My Morning Routine Changed Everything',
    contentType: 'Story',
    targetGoal: 'Engagement',
    slotType: 'Core Content',
    status: 'Draft',
    workflowStatus: 'In Progress',
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18'),
    scenes: [
      {
        id: 's1',
        index: 1,
        role: 'Hook',
        intent: 'Grab attention',
        scriptContent: '6 months ago I was waking up at noon feeling like garbage. Today I wake up at 5 AM feeling unstoppable.',
        executionNotes: 'Split screen: before/after',
        durationHint: '4s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-18'),
      },
      {
        id: 's2',
        index: 2,
        role: 'Context',
        intent: 'Build context',
        scriptContent: 'The secret isn\'t just waking up early. It\'s what you do in the first 60 minutes.',
        executionNotes: 'Morning scenes B-roll',
        durationHint: '4s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-18'),
      },
      {
        id: 's3',
        index: 3,
        role: 'Value / Main Point',
        intent: 'Deliver value',
        scriptContent: '',
        executionNotes: '',
        isAIGenerated: false,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-18'),
      },
    ],
    version: 1,
    needsAttention: true,
    attentionReason: 'Incomplete scenes',
    creator: 'AI',
    aspectRatio: '9:16',
    hookPreview: '6 months ago I was waking up at noon feeling like garbage. Today I wake up at 5 AM feeling unstoppable.',
  },
  {
    id: '4',
    title: 'Why Your Content Isn\'t Growing (Fix This)',
    contentType: 'Education',
    targetGoal: 'Growth',
    slotType: 'Monetized Content',
    status: 'Ready',
    workflowStatus: 'Ready to Schedule',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-11'),
    scenes: [
      {
        id: 's1',
        index: 1,
        role: 'Hook',
        intent: 'Grab attention',
        scriptContent: 'You\'re making great content but getting zero views. I made the same mistake for 6 months until I figured this out.',
        executionNotes: 'Show analytics with low views',
        durationHint: '4s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-10'),
      },
      {
        id: 's2',
        index: 2,
        role: 'Context',
        intent: 'Explain problem',
        scriptContent: 'The algorithm doesn\'t care about production quality. It cares about watch time retention in the first 3 seconds.',
        executionNotes: 'Point to retention graph',
        durationHint: '5s',
        isAIGenerated: true,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-11'),
      },
      {
        id: 's3',
        index: 3,
        role: 'Value / Main Point',
        intent: 'Deliver value',
        scriptContent: 'Here\'s the framework: Open loop in first 2 seconds, pattern interrupt at 5 seconds, value delivery by 10 seconds.',
        executionNotes: 'Animated timeline overlay',
        durationHint: '7s',
        isAIGenerated: false,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-11'),
      },
      {
        id: 's4',
        index: 4,
        role: 'Proof / Example',
        intent: 'Provide proof',
        scriptContent: 'After implementing this, my average view duration went from 8 seconds to 45 seconds. That\'s a 5x increase.',
        executionNotes: 'Before/after analytics comparison',
        durationHint: '5s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-10'),
      },
      {
        id: 's5',
        index: 5,
        role: 'CTA / Ending',
        intent: 'Drive action',
        scriptContent: 'Try this on your next video and let me know your results. Follow for more creator tips.',
        executionNotes: 'Direct CTA to camera',
        durationHint: '3s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-10'),
      },
    ],
    version: 2,
    creator: 'AI + You',
    aspectRatio: '9:16',
    hookPreview: 'You\'re making great content but getting zero views. I made the same mistake for 6 months...',
  },
  {
    id: '5',
    title: 'Testing the Viral $30 Amazon Gadget',
    contentType: 'Product Review',
    targetGoal: 'Monetization',
    slotType: 'Experiment',
    status: 'Used',
    workflowStatus: 'Published',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-06'),
    scheduledDate: new Date('2024-01-08'),
    scenes: [
      {
        id: 's1',
        index: 1,
        role: 'Hook',
        intent: 'Grab attention',
        scriptContent: 'This $30 gadget has 50,000 5-star reviews. But is it actually worth your money? Let\'s find out.',
        executionNotes: 'Product unboxing reveal',
        durationHint: '3s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-05'),
      },
      {
        id: 's2',
        index: 2,
        role: 'Value / Main Point',
        intent: 'Deliver value',
        scriptContent: 'After using it for 2 weeks, here\'s what actually works and what\'s just marketing hype.',
        executionNotes: 'Demo clips of product in action',
        durationHint: '6s',
        isAIGenerated: true,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-06'),
      },
      {
        id: 's3',
        index: 3,
        role: 'CTA / Ending',
        intent: 'Drive action',
        scriptContent: 'Link in bio if you want to grab one. Let me know what you want me to test next!',
        executionNotes: 'Show product with affiliate callout',
        durationHint: '3s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-05'),
      },
    ],
    version: 1,
    creator: 'You',
    aspectRatio: '1:1',
    hookPreview: 'This $30 gadget has 50,000 5-star reviews. But is it actually worth your money?',
  },
  {
    id: '6',
    title: '24 Hours Using Only AI Tools',
    contentType: 'Challenge',
    targetGoal: 'Engagement',
    slotType: 'Monetized Content',
    status: 'Draft',
    workflowStatus: 'In Progress',
    createdAt: new Date('2024-01-17'),
    updatedAt: new Date('2024-01-19'),
    scenes: [
      {
        id: 's1',
        index: 1,
        role: 'Hook',
        intent: 'Grab attention',
        scriptContent: 'I challenged myself to run my entire business for 24 hours using only AI. Here\'s what happened.',
        executionNotes: 'Timelapse setup shot',
        durationHint: '3s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-17'),
      },
      {
        id: 's2',
        index: 2,
        role: 'Context',
        intent: 'Build context',
        scriptContent: 'The rules: ChatGPT for emails, Midjourney for graphics, AI voice for calls. Zero human input.',
        executionNotes: 'Show AI tools grid',
        durationHint: '5s',
        isAIGenerated: false,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-19'),
      },
      {
        id: 's3',
        index: 3,
        role: 'Value / Main Point',
        intent: 'Deliver value',
        scriptContent: '',
        executionNotes: '',
        isAIGenerated: false,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-19'),
      },
    ],
    version: 2,
    needsAttention: true,
    attentionReason: 'Incomplete scenes',
    creator: 'AI',
    aspectRatio: '16:9',
    hookPreview: 'I challenged myself to run my entire business for 24 hours using only AI.',
  },
  {
    id: '7',
    title: 'Stop Wasting Money on Gym Memberships',
    contentType: 'Education',
    targetGoal: 'Growth',
    slotType: 'Core Content',
    status: 'Ready',
    workflowStatus: 'Scheduled',
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-09'),
    scheduledDate: new Date('2024-01-22'),
    scenes: [
      {
        id: 's1',
        index: 1,
        role: 'Hook',
        intent: 'Grab attention',
        scriptContent: 'I spent $2,400 on gym memberships over 3 years. Here\'s the $0 alternative that got me better results.',
        executionNotes: 'Show transformation photos',
        durationHint: '4s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-08'),
      },
      {
        id: 's2',
        index: 2,
        role: 'Value / Main Point',
        intent: 'Deliver value',
        scriptContent: 'Progressive overload works anywhere. All you need is your body weight and a pull-up bar.',
        executionNotes: 'Demo basic exercises',
        durationHint: '6s',
        isAIGenerated: true,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-09'),
      },
      {
        id: 's3',
        index: 3,
        role: 'CTA / Ending',
        intent: 'Drive action',
        scriptContent: 'Follow for the complete home workout routine. No equipment needed.',
        executionNotes: 'Point gesture',
        durationHint: '2s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-08'),
      },
    ],
    version: 4,
    creator: 'AI + You',
    aspectRatio: '9:16',
    hookPreview: 'I spent $2,400 on gym memberships over 3 years. Here\'s the $0 alternative that got me better results.',
  },
  {
    id: '8',
    title: 'Behind the Scenes: How I Edit Viral Videos',
    contentType: 'Tutorial',
    targetGoal: 'Engagement',
    slotType: 'Experiment',
    status: 'Used',
    workflowStatus: 'Published',
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-04'),
    scheduledDate: new Date('2024-01-06'),
    scenes: [
      {
        id: 's1',
        index: 1,
        role: 'Hook',
        intent: 'Grab attention',
        scriptContent: 'This editing trick turned my 200-view videos into 2 million views. Let me show you exactly how.',
        executionNotes: 'Screen recording intro',
        durationHint: '3s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-03'),
      },
      {
        id: 's2',
        index: 2,
        role: 'Value / Main Point',
        intent: 'Deliver value',
        scriptContent: 'The secret is cutting on movement. Every time you move, cut to a new angle. It keeps eyes glued to the screen.',
        executionNotes: 'Live editing demonstration',
        durationHint: '8s',
        isAIGenerated: false,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-04'),
      },
      {
        id: 's3',
        index: 3,
        role: 'Proof / Example',
        intent: 'Provide proof',
        scriptContent: 'Watch this before and after. Same content, different editing. The retention speaks for itself.',
        executionNotes: 'Side-by-side comparison',
        durationHint: '5s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-03'),
      },
      {
        id: 's4',
        index: 4,
        role: 'CTA / Ending',
        intent: 'Drive action',
        scriptContent: 'Try this on your next video. Tag me in the results!',
        executionNotes: 'Direct to camera',
        durationHint: '2s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-03'),
      },
    ],
    version: 1,
    creator: 'You',
    aspectRatio: '16:9',
    hookPreview: 'This editing trick turned my 200-view videos into 2 million views.',
  },
  {
    id: '9',
    title: 'I Tried the TikTok Famous Pasta Recipe',
    contentType: 'Entertainment',
    targetGoal: 'Engagement',
    slotType: 'Experiment',
    status: 'Ready',
    workflowStatus: 'Ready to Schedule',
    createdAt: new Date('2024-01-14'),
    updatedAt: new Date('2024-01-15'),
    scenes: [
      {
        id: 's1',
        index: 1,
        role: 'Hook',
        intent: 'Grab attention',
        scriptContent: 'Everyone says this is the easiest viral pasta recipe. But does it actually taste good?',
        executionNotes: 'Ingredients on counter',
        durationHint: '3s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-14'),
      },
      {
        id: 's2',
        index: 2,
        role: 'Context',
        intent: 'Build context',
        scriptContent: 'The recipe is literally 4 ingredients: pasta, feta, tomatoes, and olive oil. That\'s it.',
        executionNotes: 'Quick cooking montage',
        durationHint: '5s',
        isAIGenerated: false,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-15'),
      },
      {
        id: 's3',
        index: 3,
        role: 'Value / Main Point',
        intent: 'Deliver value',
        scriptContent: 'Okay, I\'m not gonna lie... this is actually incredible. The feta gets all creamy and the tomatoes caramelize.',
        executionNotes: 'Reaction shot + food close-up',
        durationHint: '6s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-14'),
      },
      {
        id: 's4',
        index: 4,
        role: 'CTA / Ending',
        intent: 'Drive action',
        scriptContent: 'Recipe in the comments! What should I try next?',
        executionNotes: 'Final plating shot',
        durationHint: '2s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-14'),
      },
    ],
    version: 2,
    creator: 'AI',
    aspectRatio: '9:16',
    hookPreview: 'Everyone says this is the easiest viral pasta recipe. But does it actually taste good?',
  },
  {
    id: '10',
    title: 'The Psychology Behind Viral Content',
    contentType: 'Education',
    targetGoal: 'Growth',
    slotType: 'Core Content',
    status: 'Draft',
    workflowStatus: 'In Progress',
    createdAt: new Date('2024-01-19'),
    updatedAt: new Date('2024-01-19'),
    scenes: [
      {
        id: 's1',
        index: 1,
        role: 'Hook',
        intent: 'Grab attention',
        scriptContent: 'There\'s a psychological pattern behind every viral video. Once you see it, you can\'t unsee it.',
        executionNotes: 'Montage of viral videos',
        durationHint: '4s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-19'),
      },
      {
        id: 's2',
        index: 2,
        role: 'Context',
        intent: 'Build context',
        scriptContent: 'It\'s called the curiosity gap. You promise information but delay the payoff just enough.',
        executionNotes: 'Animated diagram',
        durationHint: '5s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-19'),
      },
    ],
    version: 1,
    needsAttention: true,
    attentionReason: 'Incomplete scenes',
    creator: 'AI + You',
    aspectRatio: '1:1',
    hookPreview: 'There\'s a psychological pattern behind every viral video. Once you see it, you can\'t unsee it.',
  },
  {
    id: '11',
    title: 'Day in My Life as a Content Creator',
    contentType: 'Story',
    targetGoal: 'Engagement',
    slotType: 'Core Content',
    status: 'Used',
    workflowStatus: 'Published',
    createdAt: new Date('2023-12-28'),
    updatedAt: new Date('2023-12-29'),
    scheduledDate: new Date('2023-12-31'),
    scenes: [
      {
        id: 's1',
        index: 1,
        role: 'Hook',
        intent: 'Grab attention',
        scriptContent: 'People think being a content creator is all fun. Let me show you what it really looks like.',
        executionNotes: 'Wake up shot, raw unfiltered',
        durationHint: '3s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2023-12-28'),
      },
      {
        id: 's2',
        index: 2,
        role: 'Value / Main Point',
        intent: 'Deliver value',
        scriptContent: 'I film for 2 hours to get 15 seconds of usable content. Then edit for 4 more hours.',
        executionNotes: 'Timelapse of filming and editing',
        durationHint: '6s',
        isAIGenerated: false,
        lastEditedBy: 'user',
        editedAt: new Date('2023-12-29'),
      },
      {
        id: 's3',
        index: 3,
        role: 'CTA / Ending',
        intent: 'Drive action',
        scriptContent: 'But when a video hits... it\'s all worth it. Follow to see more behind the scenes.',
        executionNotes: 'Analytics reveal shot',
        durationHint: '3s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2023-12-28'),
      },
    ],
    version: 1,
    creator: 'You',
    aspectRatio: '9:16',
    hookPreview: 'People think being a content creator is all fun. Let me show you what it really looks like.',
  },
  {
    id: '12',
    title: 'Unboxing the M3 MacBook Pro',
    contentType: 'Product Review',
    targetGoal: 'Monetization',
    slotType: 'Experiment',
    status: 'Used',
    workflowStatus: 'Published',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-02'),
    scheduledDate: new Date('2024-01-04'),
    scenes: [
      {
        id: 's1',
        index: 1,
        role: 'Hook',
        intent: 'Grab attention',
        scriptContent: 'Apple sent me the new M3 MacBook Pro. After 10 days of testing, here\'s what they don\'t want you to know.',
        executionNotes: 'Dramatic unboxing reveal',
        durationHint: '4s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-01'),
      },
      {
        id: 's2',
        index: 2,
        role: 'Value / Main Point',
        intent: 'Deliver value',
        scriptContent: 'The M3 chip is fast, but for most people, the M1 is still more than enough. Save your money.',
        executionNotes: 'Performance benchmarks overlay',
        durationHint: '7s',
        isAIGenerated: true,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-02'),
      },
      {
        id: 's3',
        index: 3,
        role: 'CTA / Ending',
        intent: 'Drive action',
        scriptContent: 'Full review linked in bio. What laptop are you using? Comment below!',
        executionNotes: 'Product showcase',
        durationHint: '3s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-01'),
      },
    ],
    version: 1,
    creator: 'AI',
    aspectRatio: '16:9',
    hookPreview: 'Apple sent me the new M3 MacBook Pro. After 10 days of testing, here\'s what they don\'t want you to know.',
  },
  {
    id: '13',
    title: 'How to Get 10K Followers in 30 Days',
    contentType: 'Tutorial',
    targetGoal: 'Growth',
    slotType: 'Monetized Content',
    status: 'Ready',
    workflowStatus: 'Ready to Schedule',
    createdAt: new Date('2024-01-11'),
    updatedAt: new Date('2024-01-13'),
    scenes: [
      {
        id: 's1',
        index: 1,
        role: 'Hook',
        intent: 'Grab attention',
        scriptContent: 'I went from 0 to 10,000 followers in 30 days. No buying followers, no bots. Here\'s the exact strategy.',
        executionNotes: 'Growth chart animation',
        durationHint: '4s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-11'),
      },
      {
        id: 's2',
        index: 2,
        role: 'Context',
        intent: 'Explain problem',
        scriptContent: 'Most people post randomly and hope for the best. That doesn\'t work anymore.',
        executionNotes: 'Screen recording of failed content',
        durationHint: '4s',
        isAIGenerated: true,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-12'),
      },
      {
        id: 's3',
        index: 3,
        role: 'Value / Main Point',
        intent: 'Deliver value',
        scriptContent: 'The formula: Post 3x per day, reply to every comment within 5 minutes, and collaborate with creators in your niche.',
        executionNotes: 'Animated checklist',
        durationHint: '8s',
        isAIGenerated: false,
        lastEditedBy: 'user',
        editedAt: new Date('2024-01-13'),
      },
      {
        id: 's4',
        index: 4,
        role: 'Proof / Example',
        intent: 'Provide proof',
        scriptContent: 'Here\'s my analytics as proof. 347% increase in reach, 89% engagement rate.',
        executionNotes: 'Analytics dashboard reveal',
        durationHint: '4s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-11'),
      },
      {
        id: 's5',
        index: 5,
        role: 'CTA / Ending',
        intent: 'Drive action',
        scriptContent: 'Save this and follow for daily growth tips. Let\'s hit your first 10K together!',
        executionNotes: 'Direct CTA',
        durationHint: '3s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2024-01-11'),
      },
    ],
    version: 6,
    creator: 'AI + You',
    aspectRatio: '9:16',
    hookPreview: 'I went from 0 to 10,000 followers in 30 days. No buying followers, no bots.',
  },
  {
    id: '14',
    title: 'Reacting to My First Viral Video',
    contentType: 'Entertainment',
    targetGoal: 'Engagement',
    slotType: 'Core Content',
    status: 'Archived',
    workflowStatus: 'Published',
    createdAt: new Date('2023-12-20'),
    updatedAt: new Date('2023-12-21'),
    scheduledDate: new Date('2023-12-23'),
    scenes: [
      {
        id: 's1',
        index: 1,
        role: 'Hook',
        intent: 'Grab attention',
        scriptContent: 'I just woke up to 5 million views overnight. Let me react to the comments with you.',
        executionNotes: 'Shocked reaction, show phone screen',
        durationHint: '3s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2023-12-20'),
      },
      {
        id: 's2',
        index: 2,
        role: 'Value / Main Point',
        intent: 'Deliver value',
        scriptContent: 'Reading your comments is hilarious. Some of you are wild! Let\'s go through the best ones.',
        executionNotes: 'Comments overlay',
        durationHint: '10s',
        isAIGenerated: false,
        lastEditedBy: 'user',
        editedAt: new Date('2023-12-21'),
      },
      {
        id: 's3',
        index: 3,
        role: 'CTA / Ending',
        intent: 'Drive action',
        scriptContent: 'Drop a comment right now and I\'ll reply to everyone. Let\'s keep this momentum going!',
        executionNotes: 'Enthusiastic delivery',
        durationHint: '3s',
        isAIGenerated: true,
        lastEditedBy: 'ai',
        editedAt: new Date('2023-12-20'),
      },
    ],
    version: 1,
    creator: 'You',
    aspectRatio: '9:16',
    hookPreview: 'I just woke up to 5 million views overnight. Let me react to the comments with you.',
  },
];

// Scene Role Badge
function SceneRoleBadge({ role }: { role: SceneRole }) {
  const config = {
    'Hook': { bg: 'bg-[#fee2e2]', text: 'text-[#dc2626]' },
    'Context': { bg: 'bg-[#fef3c7]', text: 'text-[#d97706]' },
    'Value / Main Point': { bg: 'bg-[#dbeafe]', text: 'text-[#2563eb]' },
    'Proof / Example': { bg: 'bg-[#dcfce7]', text: 'text-[#16a34a]' },
    'CTA / Ending': { bg: 'bg-[#ede9fe]', text: 'text-[#7c3aed]' },
  };

  const { bg, text } = config[role];

  return (
    <div className={`inline-flex items-center px-2 py-0.5 rounded ${bg}`}>
      <span className={`${text}`} style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
        {role}
      </span>
    </div>
  );
}

// Script Manager (Simple Version)
function ScriptManager({
  scripts,
  onCreateNew,
  onOpenScript,
  onEditScript,
  onSimulationAction,
}: {
  scripts: Script[];
  onCreateNew: () => void;
  onOpenScript: (id: string) => void;
  onEditScript: (id: string) => void;
  onSimulationAction?: () => void;
}) {
  const [viewMode, setViewMode] = React.useState<'list' | 'grid'>('grid');
  const [density] = React.useState<DensityMode>('compact');
  const [menuOpenId, setMenuOpenId] = React.useState<string | null>(null);
  const [statusFilter, setStatusFilter] = React.useState<string>('All Status');
  const [categoryFilter, setCategoryFilter] = React.useState<string>('All Categories');
  const [sortBy, setSortBy] = React.useState<string>('Recent');
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const itemsPerPage = 24;

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      if (menuOpenId) {
        setMenuOpenId(null);
      }
    };
    
    if (menuOpenId) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [menuOpenId]);

  // Calculate estimated duration from scenes
  const getEstimatedDuration = (script: Script): string => {
    let totalSeconds = 0;
    script.scenes.forEach(scene => {
      if (scene.durationHint) {
        const match = scene.durationHint.match(/(\d+)/);
        if (match) {
          totalSeconds += parseInt(match[1]);
        }
      }
    });
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // Get theme configuration for script card
  const getCardTheme = (contentType: ContentType) => {
    const themes: Record<ContentType, { bg: string; text: string; icon: React.ElementType; accent: string }> = {
      'Product Review': { 
        bg: 'bg-[#eff6ff]', // blue-50
        text: 'text-[#1e3a8a]', // blue-900
        accent: 'bg-[#bfdbfe]', // blue-200
        icon: Smartphone 
      },
      'Tutorial': { 
        bg: 'bg-[#f5f3ff]', // violet-50
        text: 'text-[#4c1d95]', // violet-900
        accent: 'bg-[#ddd6fe]', // violet-200
        icon: Lightbulb 
      },
      'Entertainment': { 
        bg: 'bg-[#fdf2f8]', // pink-50
        text: 'text-[#831843]', // pink-900
        accent: 'bg-[#fbcfe8]', // pink-200
        icon: Sparkles 
      },
      'Education': { 
        bg: 'bg-[#f0fdf4]', // green-50
        text: 'text-[#14532d]', // green-900
        accent: 'bg-[#bbf7d0]', // green-200
        icon: Zap 
      },
      'Story': { 
        bg: 'bg-[#fffbeb]', // amber-50
        text: 'text-[#78350f]', // amber-900
        accent: 'bg-[#fde68a]', // amber-200
        icon: MessageSquare 
      },
      'Challenge': { 
        bg: 'bg-[#fff7ed]', // orange-50
        text: 'text-[#7c2d12]', // orange-900
        accent: 'bg-[#fed7aa]', // orange-200
        icon: Target 
      },
    };
    return themes[contentType] || themes['Tutorial'];
  };

  return (
    <div className="flex-1 flex flex-col bg-[#fafafa] h-full">
      <div className="bg-white border-b border-[#e0e0e0] px-4 md:px-8 py-4 md:py-6 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#1a1a1a]" style={{ fontSize: '20px md:28px', fontWeight: '700' }}>
              Content Studio
            </h1>
            <p className="text-[#666666] mt-1" style={{ fontSize: '14px' }}>
              Scene-based script workspace
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* View Switcher */}
            <div className="flex items-center bg-[#f5f5f5] rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-[#1a1a1a] shadow-sm'
                    : 'text-[#666666] hover:text-[#1a1a1a]'
                }`}
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                <List className="w-4 h-4" />
                List
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#1a1a1a] shadow-sm'
                    : 'text-[#666666] hover:text-[#1a1a1a]'
                }`}
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                <Grid3x3 className="w-4 h-4" />
                Grid
              </button>
            </div>
            
            <button
              onClick={() => {
                if (onSimulationAction) {
                  onSimulationAction();
                  return;
                }
                onCreateNew();
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#404040] transition-colors"
              style={{ fontSize: '14px', fontWeight: '600' }}
            >
              <Plus className="w-4 h-4" />
              Create New Script
            </button>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 pb-2">
          {/* Left: Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
            <input 
              type="text" 
              placeholder="Search scripts..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/10 transition-all"
              style={{ fontSize: '13px' }}
            />
          </div>

          {/* Right: Filters */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="appearance-none pl-4 pr-10 py-2 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 cursor-pointer hover:bg-[#fafafa] transition-colors"
              >
                <option>All Status</option>
                <option>Ready</option>
                <option>Draft</option>
                <option>Used</option>
                <option>Archived</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666666] pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="appearance-none pl-4 pr-10 py-2 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 cursor-pointer hover:bg-[#fafafa] transition-colors"
              >
                <option>Recent</option>
                <option>Oldest</option>
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
              <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#666666] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* List View */}
      {viewMode === 'list' && (() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedScripts = scripts.slice(startIndex, endIndex);
        const totalPages = Math.ceil(scripts.length / itemsPerPage);

        return (
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto">
              <div className="bg-white mx-8 mt-6 rounded-xl border border-[#e0e0e0]">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_80px_140px_140px_80px_80px_120px_50px] gap-4 px-6 py-3 border-b border-[#e0e0e0] bg-[#fafafa]">
              <div className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Script Title
              </div>
              <div className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Scenes
              </div>
              <div className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Category
              </div>
              <div className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Creator
              </div>
              <div className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Status
              </div>
              <div className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Duration
              </div>
              <div className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Modified
              </div>
              <div></div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#e0e0e0]">
              {paginatedScripts.map((script) => (
                <div
                  key={script.id}
                  className="grid grid-cols-[1fr_80px_140px_140px_80px_80px_120px_50px] gap-4 px-6 py-4 hover:bg-[#fafafa] transition-colors cursor-pointer group"
                  onClick={() => onOpenScript(script.id)}
                >
                  {/* Script Title */}
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-[#1a1a1a] truncate" style={{ fontSize: '14px', fontWeight: '600' }}>
                      {script.title}
                    </span>
                  </div>

                  {/* Scene Count */}
                  <div className="flex items-center text-[#666666]" style={{ fontSize: '14px' }}>
                    {script.scenes.length}
                  </div>

                  {/* Category Tag */}
                  <div className="flex items-center">
                    <div className="px-2.5 py-1 bg-[#f5f5f5] rounded-md">
                      <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '500' }}>
                        {script.contentType}
                      </span>
                    </div>
                  </div>

                  {/* Creator */}
                  <div className="flex items-center">
                    <span className="text-[#666666]" style={{ fontSize: '13px', fontWeight: '500' }}>
                      {script.creator || 'You'}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center">
                    <div className={`px-2.5 py-1 rounded-md ${
                      script.status === 'Ready' ? 'bg-[#dcfce7] text-[#16a34a]' :
                      script.status === 'Draft' ? 'bg-[#fef3c7] text-[#d97706]' :
                      script.status === 'Used' ? 'bg-[#e0e0e0] text-[#666666]' :
                      'bg-[#f5f5f5] text-[#999999]'
                    }`}>
                      <span style={{ fontSize: '12px', fontWeight: '600' }}>{script.status}</span>
                    </div>
                  </div>

                  {/* Estimated Duration */}
                  <div className="flex items-center text-[#666666]" style={{ fontSize: '14px', fontWeight: '500' }}>
                    {getEstimatedDuration(script)}
                  </div>

                  {/* Last Modified */}
                  <div className="flex items-center text-[#999999]" style={{ fontSize: '13px' }}>
                    {script.updatedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>

                  {/* More Actions */}
                  <div className="flex items-center justify-end relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpenId(menuOpenId === script.id ? null : script.id);
                      }}
                      className="p-1.5 rounded-lg hover:bg-[#e0e0e0] opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <MoreVertical className="w-4 h-4 text-[#666666]" />
                    </button>

                    {/* Dropdown Menu */}
                    {menuOpenId === script.id && (
                      <div className="absolute right-0 top-8 w-48 bg-white rounded-lg border border-[#e0e0e0] shadow-lg py-1 z-10">
                        <button className="w-full px-4 py-2 text-left hover:bg-[#fafafa] flex items-center gap-2 text-[#1a1a1a]" style={{ fontSize: '13px' }}>
                          <Edit3 className="w-3.5 h-3.5" />
                          Edit
                        </button>
                        <button className="w-full px-4 py-2 text-left hover:bg-[#fafafa] flex items-center gap-2 text-[#1a1a1a]" style={{ fontSize: '13px' }}>
                          <Copy className="w-3.5 h-3.5" />
                          Duplicate
                        </button>
                        <div className="my-1 h-px bg-[#e0e0e0]" />
                        <button className="w-full px-4 py-2 text-left hover:bg-[#fafafa] flex items-center gap-2 text-[#1a1a1a]" style={{ fontSize: '13px' }}>
                          <Archive className="w-3.5 h-3.5" />
                          Archive
                        </button>
                        <button className="w-full px-4 py-2 text-left hover:bg-[#fafafa] flex items-center gap-2 text-[#dc2626]" style={{ fontSize: '13px' }}>
                          <Trash2 className="w-3.5 h-3.5" />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex-shrink-0 border-t border-[#e0e0e0] bg-white px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-[#666666]" style={{ fontSize: '13px' }}>
              Showing {startIndex + 1}-{Math.min(endIndex, scripts.length)} of {scripts.length} scripts
            </div>
            
            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-all ${
                  currentPage === 1
                    ? 'border-[#e0e0e0] text-[#cccccc] cursor-not-allowed'
                    : 'border-[#e0e0e0] text-[#1a1a1a] hover:border-[#1a1a1a] hover:bg-[#fafafa]'
                }`}
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  const showPage = 
                    page === 1 || 
                    page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1);
                  
                  const showEllipsis = 
                    (page === currentPage - 2 && currentPage > 3) ||
                    (page === currentPage + 2 && currentPage < totalPages - 2);

                  if (showEllipsis) {
                    return (
                      <span key={page} className="px-2 text-[#999999]" style={{ fontSize: '13px' }}>
                        ...
                      </span>
                    );
                  }

                  if (!showPage) return null;

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-lg transition-all ${
                        currentPage === page
                          ? 'bg-[#1a1a1a] text-white'
                          : 'text-[#666666] hover:bg-[#f5f5f5]'
                      }`}
                      style={{ fontSize: '13px', fontWeight: '600' }}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-all ${
                  currentPage === totalPages
                    ? 'border-[#e0e0e0] text-[#cccccc] cursor-not-allowed'
                    : 'border-[#e0e0e0] text-[#1a1a1a] hover:border-[#1a1a1a] hover:bg-[#fafafa]'
                }`}
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  })()}

      {/* Grid View */}
      {viewMode === 'grid' && (() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedScripts = scripts.slice(startIndex, endIndex);
        const totalPages = Math.ceil(scripts.length / itemsPerPage);

        return (
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto px-4 md:px-8 py-4 md:py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
                {paginatedScripts.map((script) => {
                  const theme = getCardTheme(script.contentType);
                  
                  return (
                  <div
                    key={script.id}
                    className="bg-white rounded-xl border border-[#e0e0e0] overflow-hidden hover:border-[#1a1a1a] hover:shadow-lg transition-all cursor-pointer group relative"
                    onClick={() => onOpenScript(script.id)}
                  >
                    {/* Text-based Context Card (Replaces Image Thumbnail) */}
                    <div 
                      className={`relative overflow-hidden transition-colors duration-300 ${theme.bg}`}
                      style={{ height: density === 'comfortable' ? '180px' : '140px' }}
                    >
                      {/* Background Icon Watermark */}
                      <div className="absolute -bottom-6 -right-6 opacity-[0.08] transform rotate-12 pointer-events-none">
                        <theme.icon className={`w-40 h-40 ${theme.text}`} />
                      </div>

                      {/* Main Content Area - Hook Preview */}
                      <div className="relative z-10 p-5 h-full flex flex-col">
                         <div className="flex-1 pr-2">
                           {script.hookPreview ? (
                             <p 
                               className={`font-serif text-[15px] leading-relaxed line-clamp-5 ${theme.text}`} 
                               style={{ fontStyle: 'italic' }}
                             >
                               "{script.hookPreview}"
                             </p>
                           ) : (
                             <div className="h-full flex items-center justify-center opacity-40">
                               <theme.icon className={`w-12 h-12 ${theme.text}`} />
                             </div>
                           )}
                         </div>
                      </div>
                      
                      {/* Aspect Ratio Chip - Top Left */}
                      <div className="absolute top-3 left-3 z-20">
                        <div className="px-2 py-0.5 bg-white/90 backdrop-blur-sm rounded-md text-[#1a1a1a] shadow-sm border border-black/5" style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.5px' }}>
                          {script.aspectRatio || '9:16'}
                        </div>
                      </div>

                      {/* Status Badge - Top Right */}
                      <div className="absolute top-3 right-3 z-20 group-hover:opacity-0 transition-opacity">
                        <div className={`px-2 py-0.5 rounded shadow-sm border border-black/5 ${
                          script.status === 'Ready' ? 'bg-[#dcfce7] text-[#166534]' :
                          script.status === 'Draft' ? 'bg-[#fef3c7] text-[#92400e]' :
                          script.status === 'Used' ? 'bg-[#f3f4f6] text-[#4b5563]' :
                          'bg-[#f3f4f6] text-[#4b5563]'
                        }`}>
                          <span style={{ fontSize: '10px', fontWeight: '700' }}>{script.status}</span>
                        </div>
                      </div>

                      {/* More Actions - Appears on Hover */}
                      <div className={`absolute top-2 right-2 transition-all duration-200 z-30 ${menuOpenId === script.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setMenuOpenId(menuOpenId === script.id ? null : script.id);
                          }}
                          className="p-1.5 bg-white rounded-lg hover:bg-[#fafafa] shadow-md border border-[#e0e0e0] text-[#1a1a1a]"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Dropdown Menu */}
                    {menuOpenId === script.id && (
                      <div 
                        className="absolute right-2 w-48 bg-white rounded-xl border border-[#e0e0e0] shadow-xl py-1.5 z-[100] animate-in fade-in zoom-in-95 duration-100"
                        style={{ top: '40px' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenScript(script.id);
                            setMenuOpenId(null);
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-[#fafafa] flex items-center gap-2.5 text-[#1a1a1a]" 
                          style={{ fontSize: '13px', fontWeight: '500' }}
                        >
                          <Edit3 className="w-4 h-4 text-[#666666]" />
                          Open Editor
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onEditScript(script.id);
                            setMenuOpenId(null);
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-[#fafafa] flex items-center gap-2.5 text-[#1a1a1a]" 
                          style={{ fontSize: '13px', fontWeight: '500' }}
                        >
                          <FileText className="w-4 h-4 text-[#666666]" />
                          Edit Details
                        </button>
                        <button className="w-full px-3 py-2 text-left hover:bg-[#fafafa] flex items-center gap-2.5 text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '500' }}>
                          <Copy className="w-4 h-4 text-[#666666]" />
                          Duplicate
                        </button>
                        <div className="my-1 h-px bg-[#f0f0f0]" />
                        <button className="w-full px-3 py-2 text-left hover:bg-[#fafafa] flex items-center gap-2.5 text-[#dc2626]" style={{ fontSize: '13px', fontWeight: '500' }}>
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    )}

                    {/* Card Body */}
                    <div className={density === 'comfortable' ? 'p-4' : 'p-3'}>
                      {/* Title */}
                      <h3 
                        className="text-[#1a1a1a] mb-1.5 line-clamp-1 group-hover:text-[#2563eb] transition-colors" 
                        style={{ 
                          fontSize: density === 'comfortable' ? '15px' : '14px', 
                          fontWeight: '700', 
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {script.title}
                      </h3>

                      {/* Content Type Chip */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`px-2 py-0.5 rounded ${theme.accent} bg-opacity-30`}>
                           <span className={`${theme.text} text-[10px] font-bold uppercase tracking-wider`}>
                             {script.contentType}
                           </span>
                        </div>
                      </div>

                      {/* Metadata Row */}
                      <div 
                        className="flex items-center justify-between pt-3 border-t border-[#f0f0f0]"
                        style={{ fontSize: '11px' }}
                      >
                        <span className="text-[#999999] font-medium">
                          {script.updatedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        <div className="flex items-center gap-1.5 text-[#666666]">
                          <span className="font-semibold">{script.scenes.length}</span>
                          <span className="text-[#999999]">scenes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                })}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex-shrink-0 border-t border-[#e0e0e0] bg-white px-4 md:px-8 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-[#666666]" style={{ fontSize: '13px' }}>
                    Showing {startIndex + 1}-{Math.min(endIndex, scripts.length)} of {scripts.length} scripts
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-all ${
                        currentPage === 1
                          ? 'border-[#e0e0e0] text-[#cccccc] cursor-not-allowed'
                          : 'border-[#e0e0e0] text-[#1a1a1a] hover:border-[#1a1a1a] hover:bg-[#fafafa]'
                      }`}
                      style={{ fontSize: '13px', fontWeight: '600' }}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        // Show first page, last page, current page, and pages around current
                        const showPage = 
                          page === 1 || 
                          page === totalPages || 
                          (page >= currentPage - 1 && page <= currentPage + 1);
                        
                        const showEllipsis = 
                          (page === currentPage - 2 && currentPage > 3) ||
                          (page === currentPage + 2 && currentPage < totalPages - 2);

                        if (showEllipsis) {
                          return (
                            <span key={page} className="px-2 text-[#999999]" style={{ fontSize: '13px' }}>
                              ...
                            </span>
                          );
                        }

                        if (!showPage) return null;

                        return (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 rounded-lg transition-all ${
                              currentPage === page
                                ? 'bg-[#1a1a1a] text-white'
                                : 'text-[#666666] hover:bg-[#f5f5f5]'
                            }`}
                            style={{ fontSize: '13px', fontWeight: '600' }}
                          >
                            {page}
                          </button>
                        );
                      })}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-all ${
                        currentPage === totalPages
                          ? 'border-[#e0e0e0] text-[#cccccc] cursor-not-allowed'
                          : 'border-[#e0e0e0] text-[#1a1a1a] hover:border-[#1a1a1a] hover:bg-[#fafafa]'
                      }`}
                      style={{ fontSize: '13px', fontWeight: '600' }}
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
          </div>
        );
      })()}
    </div>
  );
}

// Script Editor - Scene Card Based
function ScriptEditor({
  script,
  onBack,
  onSave,
  onSimulationAction,
}: {
  script: Script;
  onBack: () => void;
  onSave: (updatedScript: Script) => void;
  onSimulationAction?: () => void;
}) {
  const [editedScript, setEditedScript] = React.useState<Script>(script);
  const [previewOpen, setPreviewOpen] = React.useState(true);
  const [showPublishModal, setShowPublishModal] = React.useState(false);
  const [selectedSceneId, setSelectedSceneId] = React.useState<string | null>(
    script.scenes.length > 0 ? script.scenes[0].id : null
  );
  const [generatingStoryboard, setGeneratingStoryboard] = React.useState<string | null>(null);
  const [copilotMessages, setCopilotMessages] = React.useState<CopilotMessage[]>([
    {
      id: 'm1',
      role: 'assistant',
      content: 'Hi! I can help you build your script scene by scene. I can:\n\n• Insert a new scene at any position\n• Rewrite a selected scene\n• Split one scene into two\n• Merge adjacent scenes\n• Suggest scene reordering\n\nWhat would you like to work on?',
      timestamp: new Date(),
    },
  ]);
  const [copilotInput, setCopilotInput] = React.useState('');

  // Add new scene
  const handleAddScene = (afterIndex: number) => {
    const newScene: SceneCard = {
      id: `s${Date.now()}`,
      index: afterIndex + 1,
      role: 'Context',
      intent: 'Build context',
      scriptContent: '',
      executionNotes: '',
      isAIGenerated: false,
      lastEditedBy: 'user',
      editedAt: new Date(),
    };

    const updatedScenes = [
      ...editedScript.scenes.slice(0, afterIndex),
      newScene,
      ...editedScript.scenes.slice(afterIndex),
    ].map((scene, idx) => ({ ...scene, index: idx + 1 }));

    setEditedScript(prev => ({
      ...prev,
      scenes: updatedScenes,
      updatedAt: new Date(),
      version: prev.version + 1,
    }));
  };

  // Delete scene
  const handleDeleteScene = (sceneId: string) => {
    if (editedScript.scenes.length <= 1) return;

    const updatedScenes = editedScript.scenes
      .filter(s => s.id !== sceneId)
      .map((scene, idx) => ({ ...scene, index: idx + 1 }));

    setEditedScript(prev => ({
      ...prev,
      scenes: updatedScenes,
      updatedAt: new Date(),
      version: prev.version + 1,
    }));
  };

  // Duplicate scene
  const handleDuplicateScene = (sceneId: string) => {
    const sceneIndex = editedScript.scenes.findIndex(s => s.id === sceneId);
    if (sceneIndex === -1) return;

    const originalScene = editedScript.scenes[sceneIndex];
    const duplicatedScene: SceneCard = {
      ...originalScene,
      id: `s${Date.now()}`,
      index: sceneIndex + 2,
    };

    const updatedScenes = [
      ...editedScript.scenes.slice(0, sceneIndex + 1),
      duplicatedScene,
      ...editedScript.scenes.slice(sceneIndex + 1),
    ].map((scene, idx) => ({ ...scene, index: idx + 1 }));

    setEditedScript(prev => ({
      ...prev,
      scenes: updatedScenes,
      updatedAt: new Date(),
      version: prev.version + 1,
    }));
  };

  // Move scene
  const handleMoveScene = (sceneId: string, direction: 'up' | 'down') => {
    const sceneIndex = editedScript.scenes.findIndex(s => s.id === sceneId);
    if (sceneIndex === -1) return;
    if (direction === 'up' && sceneIndex === 0) return;
    if (direction === 'down' && sceneIndex === editedScript.scenes.length - 1) return;

    const newScenes = [...editedScript.scenes];
    const targetIndex = direction === 'up' ? sceneIndex - 1 : sceneIndex + 1;
    [newScenes[sceneIndex], newScenes[targetIndex]] = [newScenes[targetIndex], newScenes[sceneIndex]];

    const updatedScenes = newScenes.map((scene, idx) => ({ ...scene, index: idx + 1 }));

    setEditedScript(prev => ({
      ...prev,
      scenes: updatedScenes,
      updatedAt: new Date(),
      version: prev.version + 1,
    }));
  };

  // Update scene field
  const handleUpdateScene = (sceneId: string, field: keyof SceneCard, value: any) => {
    setEditedScript(prev => ({
      ...prev,
      scenes: prev.scenes.map(s =>
        s.id === sceneId
          ? { ...s, [field]: value, lastEditedBy: 'user' as const, editedAt: new Date() }
          : s
      ),
      updatedAt: new Date(),
    }));
  };

  // Generate spoken version for a scene
  const handleGenerateSpokenVersion = (sceneId: string) => {
    const scene = editedScript.scenes.find(s => s.id === sceneId);
    if (!scene || !scene.scriptContent) return;

    // Simulate AI generation - in production this would call an AI service
    setTimeout(() => {
      // Simple transformation: make it more conversational
      const spokenText = scene.scriptContent
        // Add natural pauses and conversational connectors
        .replace(/\. /g, '... ')
        .replace(/\?/g, '? Well,')
        .replace(/!/g, '! And')
        // Make it sound more natural
        .replace(/^/, 'So, ')
        .replace(/You should/g, "you'll want to")
        .replace(/It is/g, "it's")
        .replace(/cannot/g, "can't")
        .replace(/will not/g, "won't");

      setEditedScript(prev => ({
        ...prev,
        scenes: prev.scenes.map(s =>
          s.id === sceneId
            ? { ...s, spokenVersion: spokenText }
            : s
        ),
        updatedAt: new Date(),
      }));
    }, 800);
  };

  // Toggle spoken version visibility
  const handleToggleSpokenVersion = (sceneId: string) => {
    setEditedScript(prev => ({
      ...prev,
      scenes: prev.scenes.map(s =>
        s.id === sceneId
          ? { ...s, showSpokenVersion: !s.showSpokenVersion }
          : s
      ),
    }));
  };

  // Generate storyboard for a scene
  const handleGenerateStoryboard = (sceneId: string) => {
    setGeneratingStoryboard(sceneId);
    
    // Simulate AI generation
    setTimeout(() => {
      const mockStoryboard = [
        {
          id: 'f1',
          imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=700&fit=crop',
          caption: 'Opening shot',
          timestamp: '0:00',
        },
        {
          id: 'f2',
          imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=700&fit=crop',
          caption: 'Mid scene',
          timestamp: '0:02',
        },
        {
          id: 'f3',
          imageUrl: 'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=400&h=700&fit=crop',
          caption: 'Closing shot',
          timestamp: '0:04',
        },
      ];

      setEditedScript(prev => ({
        ...prev,
        scenes: prev.scenes.map(s =>
          s.id === sceneId
            ? { ...s, storyboard: mockStoryboard }
            : s
        ),
      }));
      
      setGeneratingStoryboard(null);
    }, 2000);
  };

  const handleCopilotSend = () => {
    if (!copilotInput.trim()) return;

    const userMessage: CopilotMessage = {
      id: `m${Date.now()}`,
      role: 'user',
      content: copilotInput,
      timestamp: new Date(),
    };

    setCopilotMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const aiMessage: CopilotMessage = {
        id: `m${Date.now() + 1}`,
        role: 'assistant',
        content: 'I can help with that! Here\'s what I suggest:\n\n**Scene-level changes:**\n• I can insert a new "Proof" scene after your current Hook\n• Or rewrite Scene 2 to be more concise\n• Or split Scene 3 into two separate beats\n\nWhich approach would you prefer?',
        timestamp: new Date(),
      };
      setCopilotMessages(prev => [...prev, aiMessage]);
    }, 1000);

    setCopilotInput('');
  };

  // Handle publish to schedule plan
  const handlePublish = (planId: string, scheduleData?: any) => {
    // Save the script first
    onSave(editedScript);
    
    // Then handle the scheduling logic
    if (planId === 'new') {
      console.log('Creating new schedule plan:', scheduleData);
      // TODO: Implement create new schedule plan logic
    } else {
      console.log('Adding to existing plan:', planId);
      // TODO: Implement add to existing plan logic
    }
    
    // Close modal and show success
    setShowPublishModal(false);
    
    // Optional: Show success notification or redirect
    // For now, just log success
    console.log('Script published successfully!');
  };

  return (
    <>
      {showPublishModal && (
        <PublishPlanModal
          script={editedScript}
          onClose={() => setShowPublishModal(false)}
          onPublish={handlePublish}
        />
      )}
    <div className="flex h-screen bg-[#fafafa] overflow-hidden">
      {/* LEFT: Scene Flow Panel */}
      <div className="w-64 bg-white border-r border-[#e0e0e0] flex flex-col">
        <div className="px-4 py-4 border-b border-[#e0e0e0]">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#666666] hover:text-[#1a1a1a] transition-colors mb-3"
            style={{ fontSize: '13px', fontWeight: '500' }}
          >
            <ChevronRight className="w-3.5 h-3.5 rotate-180" />
            Back to Scripts
          </button>
          <h3 className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '700' }}>
            Scene Flow
          </h3>
          <p className="text-[#999999] mt-1" style={{ fontSize: '12px' }}>
            {editedScript.scenes.length} {editedScript.scenes.length === 1 ? 'scene' : 'scenes'}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          <div className="space-y-2">
            {editedScript.scenes.map((scene) => (
              <button
                key={scene.id}
                onClick={() => {
                  setSelectedSceneId(scene.id);
                  document.getElementById(`scene-${scene.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  selectedSceneId === scene.id
                    ? 'bg-[#f5f5f5] border-[#1a1a1a]'
                    : 'bg-white border-[#e0e0e0] hover:border-[#999999]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[#999999]" style={{ fontSize: '11px', fontWeight: '700' }}>
                    {String(scene.index).padStart(2, '0')}
                  </span>
                  <SceneRoleBadge role={scene.role} />
                </div>
                <p className="text-[#666666] line-clamp-2" style={{ fontSize: '12px' }}>
                  {scene.scriptContent || <em>Empty scene</em>}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="p-3 border-t border-[#e0e0e0]">
          <button
            onClick={() => handleAddScene(editedScript.scenes.length)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#404040] transition-colors"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            <Plus className="w-4 h-4" />
            Add Scene
          </button>
        </div>
      </div>

      {/* CENTER: Scene Card Workspace */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b border-[#e0e0e0] px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <input
              type="text"
              value={editedScript.title}
              onChange={(e) => setEditedScript(prev => ({ ...prev, title: e.target.value }))}
              className="flex-1 text-[#1a1a1a] bg-transparent border-none outline-none"
              style={{ fontSize: '22px', fontWeight: '700' }}
              placeholder="Script Title"
            />
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors text-[#666666]">
                <Undo className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors text-[#666666]">
                <Redo className="w-4 h-4" />
              </button>
              <div className="w-px h-6 bg-[#e0e0e0] mx-1" />
              <button
                onClick={() => {
                  // Save functionality
                  alert('Script saved!');
                }}
                className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#404040] transition-colors"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                <Save className="w-4 h-4" />
                Save
              </button>
              <button
                onClick={() => {
                  // Export functionality
                  alert('Exporting script...');
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white text-[#1a1a1a] border border-[#e0e0e0] rounded-lg hover:bg-[#fafafa] transition-colors"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                <FileText className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f5f5f5] rounded-lg">
              <FileText className="w-3.5 h-3.5 text-[#666666]" />
              <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '600' }}>
                {editedScript.contentType}
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f5f5f5] rounded-lg">
              <Target className="w-3.5 h-3.5 text-[#666666]" />
              <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '600' }}>
                {editedScript.targetGoal}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[#999999] ml-auto">
              <span style={{ fontSize: '11px' }}>v{editedScript.version}</span>
            </div>
          </div>
        </div>

        {/* Scene Cards */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="max-w-4xl mx-auto space-y-4">
            {editedScript.scenes.map((scene, idx) => (
              <div key={scene.id} className="space-y-4">
                {/* Scene Card */}
                <div
                  id={`scene-${scene.id}`}
                  className={`bg-white rounded-xl border-2 transition-all ${
                    selectedSceneId === scene.id
                      ? 'border-[#1a1a1a] shadow-lg'
                      : 'border-[#e0e0e0] hover:border-[#999999]'
                  }`}
                  onClick={() => setSelectedSceneId(scene.id)}
                >
                  {/* Scene Header */}
                  <div className="flex items-center justify-between px-5 py-3 bg-[#fafafa] border-b border-[#e0e0e0]">
                    <div className="flex items-center gap-3">
                      <button className="p-1 text-[#999999] hover:text-[#1a1a1a] cursor-grab active:cursor-grabbing">
                        <GripVertical className="w-4 h-4" />
                      </button>

                      <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '700' }}>
                        Scene {String(scene.index).padStart(2, '0')}
                      </span>

                      <select
                        value={scene.role}
                        onChange={(e) => handleUpdateScene(scene.id, 'role', e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-white border border-[#e0e0e0] rounded-md text-[#1a1a1a] text-[11px] font-semibold uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20"
                      >
                        <option value="Hook">Hook</option>
                        <option value="Context">Context</option>
                        <option value="Value / Main Point">Value / Main Point</option>
                        <option value="Proof / Example">Proof / Example</option>
                        <option value="CTA / Ending">CTA / Ending</option>
                      </select>

                      <input
                        type="text"
                        value={scene.durationHint || ''}
                        onChange={(e) => handleUpdateScene(scene.id, 'durationHint', e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        placeholder="2-4s"
                        className="w-16 px-2 py-1 bg-white border border-[#e0e0e0] rounded-md text-[#666666] text-[11px] text-center focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20"
                      />

                      {scene.lastEditedBy === 'ai' && (
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-[#ede9fe] rounded-md">
                          <Sparkles className="w-3 h-3 text-[#7c3aed]" />
                          <span className="text-[#7c3aed]" style={{ fontSize: '10px', fontWeight: '600' }}>
                            AI
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMoveScene(scene.id, 'up');
                        }}
                        disabled={idx === 0}
                        className="p-1.5 rounded-lg hover:bg-white transition-colors text-[#666666] disabled:opacity-30"
                        title="Move up"
                      >
                        <ChevronUp className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMoveScene(scene.id, 'down');
                        }}
                        disabled={idx === editedScript.scenes.length - 1}
                        className="p-1.5 rounded-lg hover:bg-white transition-colors text-[#666666] disabled:opacity-30"
                        title="Move down"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <div className="w-px h-4 bg-[#e0e0e0] mx-1" />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onSimulationAction) {
                            onSimulationAction();
                            return;
                          }
                          handleGenerateStoryboard(scene.id);
                        }}
                        disabled={generatingStoryboard === scene.id}
                        className="p-1.5 rounded-lg hover:bg-white transition-colors text-[#7c3aed] disabled:opacity-50"
                        title="Generate Storyboard"
                      >
                        {generatingStoryboard === scene.id ? (
                          <Sparkles className="w-4 h-4 animate-pulse" />
                        ) : (
                          <Film className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg hover:bg-white transition-colors text-[#666666]"
                        title="Regenerate"
                      >
                        <Wand2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDuplicateScene(scene.id);
                        }}
                        className="p-1.5 rounded-lg hover:bg-white transition-colors text-[#666666]"
                        title="Duplicate"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteScene(scene.id);
                        }}
                        disabled={editedScript.scenes.length === 1}
                        className="p-1.5 rounded-lg hover:bg-white transition-colors text-[#dc2626] disabled:opacity-30"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Scene Content */}
                  <div className="p-5 space-y-4">
                    {/* Scene Intent */}
                    <div>
                      <label className="flex items-center gap-2 text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                        <Lightbulb className="w-3.5 h-3.5" />
                        Scene Intent
                        <span className="text-[#dc2626]">*</span>
                      </label>
                      <select
                        value={scene.intent}
                        onChange={(e) => handleUpdateScene(scene.id, 'intent', e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full px-3 py-2 bg-[#f5f5f5] border-none rounded-lg text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20"
                        style={{ fontSize: '14px', fontWeight: '500' }}
                      >
                        <option value="Grab attention">Grab attention</option>
                        <option value="Explain problem">Explain problem</option>
                        <option value="Build context">Build context</option>
                        <option value="Deliver value">Deliver value</option>
                        <option value="Provide proof">Provide proof</option>
                        <option value="Drive action">Drive action</option>
                      </select>
                    </div>

                    {/* Script Content */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
                          <MessageSquare className="w-3.5 h-3.5" />
                          Script Content
                        </label>
                        <div className="text-[#999999]" style={{ fontSize: '11px' }}>
                          Ideas, logic, key points to communicate
                        </div>
                      </div>
                      <textarea
                        value={scene.scriptContent}
                        onChange={(e) => handleUpdateScene(scene.id, 'scriptContent', e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        placeholder="What should be communicated in this scene? (ideas, logic, key points)"
                        className="w-full px-4 py-3 bg-[#f5f5f5] border-none rounded-lg text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 resize-none"
                        style={{ fontSize: '15px', fontWeight: '500', lineHeight: '1.7', minHeight: '120px' }}
                      />

                    </div>

                    {/* Spoken Lines - Always Visible */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
                          <Mic className="w-3.5 h-3.5" />
                          Spoken Lines
                          <span className="text-[#999999]" style={{ fontSize: '11px', fontWeight: '400' }}>
                            (optional)
                          </span>
                        </label>
                        {scene.scriptContent && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (onSimulationAction) {
                                onSimulationAction();
                                return;
                              }
                              handleGenerateSpokenVersion(scene.id);
                            }}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#e9d5ff] bg-gradient-to-r from-[#faf5ff] to-[#f3e8ff] hover:from-[#f3e8ff] hover:to-[#ede9fe] text-[#7c3aed] transition-all"
                            style={{ fontSize: '11px', fontWeight: '600' }}
                            title="Generate conversational spoken lines from script content"
                          >
                            <Sparkles className="w-3 h-3" />
                            Generate
                          </button>
                        )}
                      </div>
                      <textarea
                        value={scene.spokenVersion || ''}
                        onChange={(e) => handleUpdateScene(scene.id, 'spokenVersion', e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        placeholder="Type or generate conversational spoken lines..."
                        className="w-full px-4 py-3 bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff] border border-[#e9d5ff] rounded-lg text-[#1a1a1a] placeholder:text-[#a78bfa] focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/30 resize-none"
                        style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.7', minHeight: '100px' }}
                      />
                      <div className="flex items-start gap-2 mt-2 text-[#7c3aed]" style={{ fontSize: '11px', lineHeight: '1.5' }}>
                        <Lightbulb className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        <span>
                          Use this as guidance. You don't need to read it word for word.
                        </span>
                      </div>
                    </div>

                    {/* Execution Notes */}
                    <div>
                      <label className="flex items-center gap-2 text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                        <Eye className="w-3.5 h-3.5" />
                        Execution Notes
                        <span className="text-[#999999]" style={{ fontSize: '11px', fontWeight: '400' }}>
                          (optional)
                        </span>
                      </label>
                      <textarea
                        value={scene.executionNotes}
                        onChange={(e) => handleUpdateScene(scene.id, 'executionNotes', e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        placeholder="Visual suggestions, on-screen text, camera angles, actions..."
                        className="w-full px-4 py-3 bg-[#f5f5f5] border-none rounded-lg text-[#666666] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 resize-none"
                        style={{ fontSize: '13px', lineHeight: '1.6', minHeight: '80px' }}
                      />
                    </div>

                    {/* Storyboard Preview */}
                    {scene.storyboard && scene.storyboard.length > 0 && (
                      <div>
                        <label className="flex items-center gap-2 text-[#666666] mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                          <Film className="w-3.5 h-3.5" />
                          Storyboard ({scene.storyboard.length} frames)
                        </label>
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          {scene.storyboard.map((frame) => (
                            <div key={frame.id} className="flex-shrink-0 w-20 h-36 rounded-lg overflow-hidden border border-[#e0e0e0] relative group">
                              <img
                                src={frame.imageUrl}
                                alt={frame.caption}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <PlayCircle className="w-6 h-6 text-white" />
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 px-1.5 py-1 bg-black/70 text-white text-[9px] font-semibold">
                                {frame.timestamp}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Add Scene Button */}
                <button
                  onClick={() => handleAddScene(idx + 1)}
                  className="group w-full py-3 border-2 border-dashed border-[#e0e0e0] rounded-xl hover:border-[#1a1a1a] hover:bg-[#fafafa] transition-all"
                >
                  <div className="flex items-center justify-center gap-2 text-[#999999] group-hover:text-[#1a1a1a] transition-colors">
                    <Plus className="w-4 h-4" />
                    <span style={{ fontSize: '13px', fontWeight: '600' }}>Add Scene</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: TikTok Preview + Copilot Panel */}
      <div className="w-[420px] bg-white border-l border-[#e0e0e0] flex flex-col overflow-hidden">
        {/* TikTok Preview Section - Collapsible */}
        {previewOpen && (
          <div className="border-b border-[#e0e0e0]">
            <div className="flex items-center justify-between px-4 py-3 bg-[#fafafa] border-b border-[#e0e0e0]">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#666666]" />
                <h3 className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '700' }}>
                  TikTok Preview
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {selectedSceneId && (
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-white rounded-md border border-[#e0e0e0]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    <span className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                      Live
                    </span>
                  </div>
                )}
                <button
                  onClick={() => setPreviewOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white transition-colors text-[#666666]"
                  title="Hide preview"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div style={{ height: '500px' }}>
              <TikTokPreviewInline 
                scene={selectedSceneId 
                  ? editedScript.scenes.find(s => s.id === selectedSceneId) || null
                  : null
                } 
              />
            </div>
          </div>
        )}

        {/* Copilot Section - Always Visible, Expands When Preview Closed */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-[#fafafa] border-b border-[#e0e0e0]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <h3 className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '700' }}>
                Script Copilot
              </h3>
            </div>
            {!previewOpen && (
              <button
                onClick={() => setPreviewOpen(true)}
                className="flex items-center gap-1.5 px-2 py-1 bg-white rounded-md border border-[#e0e0e0] hover:bg-[#fafafa] transition-colors"
                title="Show TikTok Preview"
              >
                <Smartphone className="w-3 h-3 text-[#666666]" />
                <span className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                  Show Preview
                </span>
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {copilotMessages.map((message) => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg px-3 py-2 ${message.role === 'user' ? 'bg-[#1a1a1a] text-white' : 'bg-[#f5f5f5] text-[#1a1a1a]'}`}>
                  <p style={{ fontSize: '12px', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>{message.content}</p>
                  {message.suggestionType && (
                    <button className="mt-2 px-2.5 py-1 bg-[#1a1a1a] text-white rounded-md hover:bg-[#404040] transition-colors" style={{ fontSize: '11px', fontWeight: '600' }}>
                      Apply Suggestion
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-[#e0e0e0]">
            <div className="flex gap-2">
              <input
                type="text"
                value={copilotInput}
                onChange={(e) => setCopilotInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCopilotSend()}
                placeholder="Ask about scenes..."
                className="flex-1 px-3 py-2 bg-[#f5f5f5] rounded-lg text-[#1a1a1a] placeholder:text-[#999999] outline-none focus:ring-2 focus:ring-[#1a1a1a]/10"
                style={{ fontSize: '12px' }}
              />
              <button
                onClick={() => {
                  if (onSimulationAction) {
                    onSimulationAction();
                    return;
                  }
                  handleCopilotSend();
                }}
                disabled={!copilotInput.trim()}
                className="p-2 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#404040] transition-colors disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

// Main Component
export function ContentStudio({
  onNavigate,
  conversations = [],
  currentConversationId,
  onSelectConversation,
  onDeleteConversation,
  isSimulation = false,
}: ContentStudioProps) {
  const isMobile = useIsMobile();
  const [scripts, setScripts] = React.useState<Script[]>(mockScripts);
  const [currentView, setCurrentView] = React.useState<'manager' | 'editor'>('manager');
  const [currentScriptId, setCurrentScriptId] = React.useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [editingScriptId, setEditingScriptId] = React.useState<string | null>(null);

  const { trigger } = useSimulationTrigger();

  // Simulation Triggers
  React.useEffect(() => {
    // 1. Dwell 30s
    const dwellTimer = setTimeout(() => {
      trigger();
    }, 30000);

    return () => clearTimeout(dwellTimer);
  }, [trigger]);

  React.useEffect(() => {
    // 2. Click script (enter editor) > 10s
    let editorTimer: ReturnType<typeof setTimeout>;
    if (currentView === 'editor') {
      editorTimer = setTimeout(() => {
        trigger();
      }, 10000);
    }
    return () => clearTimeout(editorTimer);
  }, [currentView, trigger]);

  const handleSimulationAction = () => {
    // 3. AI input trigger (called by ScriptEditorNew)
    trigger();
  };

  // Show mobile version on mobile devices
  if (isMobile) {
    return <StudioMobile onNavigate={onNavigate} />;
  }

  const handleOpenCreateModal = () => {
    setEditingScriptId(null);
    setIsCreateModalOpen(true);
  };

  const handleCreateScript = (formData: ScriptFormData) => {
    if (editingScriptId) {
      // Edit existing script
      setScripts(prev => prev.map(script => {
        if (script.id === editingScriptId) {
          const contentTypeMap: Record<string, ContentType> = {
            'Tutorial': 'Tutorial',
            'Review': 'Product Review',
            'Story': 'Story',
            'Skit': 'Entertainment',
            'Unboxing': 'Product Review',
            'Compilation': 'Entertainment',
          };
          
          const mappedType = formData.contentType ? contentTypeMap[formData.contentType] : undefined;

          return {
            ...script,
            title: formData.title,
            contentType: mappedType || script.contentType,
            slotType: (formData.slotType as SlotType) || script.slotType,
            aspectRatio: formData.aspectRatio,
            updatedAt: new Date(),
          };
        }
        return script;
      }));
      setEditingScriptId(null);
    } else {
      // Create new script
      const contentTypeMap: Record<string, ContentType> = {
        'Tutorial': 'Tutorial',
        'Review': 'Product Review',
        'Story': 'Story',
        'Skit': 'Entertainment',
        'Unboxing': 'Product Review',
        'Compilation': 'Entertainment',
      };

      const mappedType = formData.contentType ? contentTypeMap[formData.contentType] : undefined;

      const newScript: Script = {
        id: Date.now().toString(),
        title: formData.title,
        contentType: mappedType || 'Tutorial',
        targetGoal: 'Engagement',
        slotType: (formData.slotType as SlotType) || 'Core Content',
        status: 'Draft',
        workflowStatus: 'In Progress',
        createdAt: new Date(),
        updatedAt: new Date(),
        aspectRatio: formData.aspectRatio,
        scenes: [
          {
            id: `s${Date.now()}-1`,
            index: 1,
            role: 'Hook',
            intent: 'Grab attention',
            scriptContent: '',
            executionNotes: formData.notes || '',
            isAIGenerated: false,
            lastEditedBy: 'user',
            editedAt: new Date(),
          },
        ],
        version: 1,
      };

      setScripts(prev => [newScript, ...prev]);
      setCurrentScriptId(newScript.id);
      setCurrentView('editor');
    }
  };

  const handleCreateNew = () => {
    setEditingScriptId(null);
    setIsCreateModalOpen(true);
  };

  const handleEditScript = (id: string) => {
    setEditingScriptId(id);
    setIsCreateModalOpen(true);
  };

  const handleOpenScript = (id: string) => {
    setCurrentScriptId(id);
    setCurrentView('editor');
  };

  const handleSaveScript = (updatedScript: any) => {
    setScripts(prev => prev.map(s => (s.id === updatedScript.id ? (updatedScript as Script) : s)));
  };

  const handleBackToManager = () => {
    setCurrentView('manager');
    setCurrentScriptId(null);
  };

  const currentScript = scripts.find(s => s.id === currentScriptId);
  const editingScript = editingScriptId ? scripts.find(s => s.id === editingScriptId) : null;

  return (
    <div className="flex h-screen bg-[#fafafa]">
      <SidebarPro 
        activeItem="studio" 
        onNavigate={onNavigate}
        className="hidden md:flex"
      />

      <div className="flex-1 flex flex-col overflow-hidden pb-[64px] md:pb-0">
        {currentView === 'manager' ? (
          <ScriptManager
            scripts={scripts}
            onCreateNew={handleCreateNew}
            onOpenScript={handleOpenScript}
            onEditScript={handleEditScript}
            onSimulationAction={handleSimulationAction}
          />
        ) : currentScript ? (
          <ScriptEditorNew
            script={currentScript}
            onBack={handleBackToManager}
            onSave={handleSaveScript}
            onSimulationAction={handleSimulationAction}
          />
        ) : null}
      </div>

      {/* Bottom Tab Bar - Mobile Only */}
      <BottomTabBar 
        activeItem="studio" 
        onNavigate={onNavigate}
      />

      {/* Create Script Modal */}
      <CreateScriptModal
        isOpen={isCreateModalOpen}
        onClose={() => {
          setIsCreateModalOpen(false);
          setEditingScriptId(null);
        }}
        onCreateScript={handleCreateScript}
        initialData={editingScript ? {
          title: editingScript.title,
          slotType: editingScript.slotType || 'Core Content',
          aspectRatio: editingScript.aspectRatio || '9:16',
          shootingStyle: 'on-camera',
          contentType: (() => {
            const reverseMap: Record<string, 'Tutorial' | 'Review' | 'Story' | 'Skit' | 'Unboxing' | 'Compilation'> = {
              'Tutorial': 'Tutorial',
              'Product Review': 'Review',
              'Story': 'Story',
              'Entertainment': 'Skit',
            };
            return reverseMap[editingScript.contentType] || 'Tutorial';
          })(),
        } : undefined}
        isEditMode={!!editingScriptId}
      />
    </div>
  );
}
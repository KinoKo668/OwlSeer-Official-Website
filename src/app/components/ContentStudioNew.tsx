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
    'Hook': { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400' },
    'Context': { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-600 dark:text-amber-400' },
    'Value / Main Point': { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400' },
    'Proof / Example': { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400' },
    'CTA / Ending': { bg: 'bg-violet-100 dark:bg-violet-900/30', text: 'text-violet-600 dark:text-violet-400' },
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
        bg: 'bg-blue-50 dark:bg-blue-950/30',
        text: 'text-blue-900 dark:text-blue-100',
        accent: 'bg-blue-200 dark:bg-blue-800/50',
        icon: Smartphone 
      },
      'Tutorial': { 
        bg: 'bg-violet-50 dark:bg-violet-950/30',
        text: 'text-violet-900 dark:text-violet-100',
        accent: 'bg-violet-200 dark:bg-violet-800/50',
        icon: Lightbulb 
      },
      'Entertainment': { 
        bg: 'bg-pink-50 dark:bg-pink-950/30',
        text: 'text-pink-900 dark:text-pink-100',
        accent: 'bg-pink-200 dark:bg-pink-800/50',
        icon: Sparkles 
      },
      'Education': { 
        bg: 'bg-green-50 dark:bg-green-950/30',
        text: 'text-green-900 dark:text-green-100',
        accent: 'bg-green-200 dark:bg-green-800/50',
        icon: Zap 
      },
      'Story': { 
        bg: 'bg-amber-50 dark:bg-amber-950/30',
        text: 'text-amber-900 dark:text-amber-100',
        accent: 'bg-amber-200 dark:bg-amber-800/50',
        icon: MessageSquare 
      },
      'Challenge': { 
        bg: 'bg-orange-50 dark:bg-orange-950/30',
        text: 'text-orange-900 dark:text-orange-100',
        accent: 'bg-orange-200 dark:bg-orange-800/50',
        icon: Target 
      },
    };
    return themes[contentType] || themes['Tutorial'];
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50 dark:bg-slate-950 h-full">
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 px-4 md:px-8 py-4 md:py-6 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 dark:text-white" style={{ fontSize: '20px md:28px', fontWeight: '700' }}>
              Content Studio
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1" style={{ fontSize: '14px' }}>
              Scene-based script workspace
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* View Switcher */}
            <div className="flex items-center bg-gray-100 dark:bg-slate-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
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
                    ? 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
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
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
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
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <input 
              type="text" 
              placeholder="Search scripts..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 transition-all"
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
                className="appearance-none pl-4 pr-10 py-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/20 dark:focus:ring-white/20 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                <option>All Status</option>
                <option>Ready</option>
                <option>Draft</option>
                <option>Used</option>
                <option>Archived</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="appearance-none pl-4 pr-10 py-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/20 dark:focus:ring-white/20 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                <option>Recent</option>
                <option>Oldest</option>
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
              <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 dark:text-gray-400 pointer-events-none" />
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
              <div className="bg-white dark:bg-slate-900 mx-8 mt-6 rounded-xl border border-gray-200 dark:border-slate-800">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_80px_140px_140px_80px_80px_120px_50px] gap-4 px-6 py-3 border-b border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50">
              <div className="text-gray-500 dark:text-gray-400" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Script Title
              </div>
              <div className="text-gray-500 dark:text-gray-400" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Scenes
              </div>
              <div className="text-gray-500 dark:text-gray-400" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Category
              </div>
              <div className="text-gray-500 dark:text-gray-400" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Creator
              </div>
              <div className="text-gray-500 dark:text-gray-400" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Status
              </div>
              <div className="text-gray-500 dark:text-gray-400" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Duration
              </div>
              <div className="text-gray-500 dark:text-gray-400" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Modified
              </div>
              <div></div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-200 dark:divide-slate-800">
              {paginatedScripts.map((script) => (
                <div
                  key={script.id}
                  className="grid grid-cols-[1fr_80px_140px_140px_80px_80px_120px_50px] gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
                  onClick={() => onOpenScript(script.id)}
                >
                  {/* Script Title */}
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-gray-900 dark:text-white truncate" style={{ fontSize: '14px', fontWeight: '600' }}>
                      {script.title}
                    </span>
                  </div>

                  {/* Scene Count */}
                  <div className="flex items-center text-gray-500 dark:text-gray-400" style={{ fontSize: '14px' }}>
                    {script.scenes.length}
                  </div>

                  {/* Category Tag */}
                  <div className="flex items-center">
                    <div className="px-2.5 py-1 bg-gray-100 dark:bg-slate-800 rounded-md">
                      <span className="text-gray-500 dark:text-gray-400" style={{ fontSize: '12px', fontWeight: '500' }}>
                        {script.contentType}
                      </span>
                    </div>
                  </div>

                  {/* Creator */}
                  <div className="flex items-center">
                    <span className="text-gray-500 dark:text-gray-400" style={{ fontSize: '13px', fontWeight: '500' }}>
                      {script.creator || 'You'}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center">
                    <div className={`px-2.5 py-1 rounded-md ${
                      script.status === 'Ready' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                      script.status === 'Draft' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' :
                      script.status === 'Used' ? 'bg-gray-200 dark:bg-slate-700 text-gray-500 dark:text-gray-400' :
                      'bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-500'
                    }`}>
                      <span style={{ fontSize: '12px', fontWeight: '600' }}>{script.status}</span>
                    </div>
                  </div>

                  {/* Estimated Duration */}
                  <div className="flex items-center text-gray-500 dark:text-gray-400" style={{ fontSize: '14px', fontWeight: '500' }}>
                    {getEstimatedDuration(script)}
                  </div>

                  {/* Last Modified */}
                  <div className="flex items-center text-gray-400 dark:text-gray-500" style={{ fontSize: '13px' }}>
                    {script.updatedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>

                  {/* More Actions */}
                  <div className="flex items-center justify-end relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpenId(menuOpenId === script.id ? null : script.id);
                      }}
                      className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <MoreVertical className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </button>

                    {/* Dropdown Menu */}
                    {menuOpenId === script.id && (
                      <div className="absolute right-0 top-8 w-48 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 shadow-lg py-1 z-10">
                        <button className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-slate-800 flex items-center gap-2 text-gray-900 dark:text-white" style={{ fontSize: '13px' }}>
                          <Edit3 className="w-3.5 h-3.5" />
                          Edit
                        </button>
                        <button className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-slate-800 flex items-center gap-2 text-gray-900 dark:text-white" style={{ fontSize: '13px' }}>
                          <Copy className="w-3.5 h-3.5" />
                          Duplicate
                        </button>
                        <div className="my-1 h-px bg-gray-200 dark:bg-slate-800" />
                        <button className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-slate-800 flex items-center gap-2 text-gray-900 dark:text-white" style={{ fontSize: '13px' }}>
                          <Archive className="w-3.5 h-3.5" />
                          Archive
                        </button>
                        <button className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-slate-800 flex items-center gap-2 text-red-600 dark:text-red-400" style={{ fontSize: '13px' }}>
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
        <div className="flex-shrink-0 border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-gray-500 dark:text-gray-400" style={{ fontSize: '13px' }}>
              Showing {startIndex + 1}-{Math.min(endIndex, scripts.length)} of {scripts.length} scripts
            </div>
            
            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-all ${
                  currentPage === 1
                    ? 'border-gray-200 dark:border-slate-800 text-gray-300 dark:text-slate-700 cursor-not-allowed'
                    : 'border-gray-200 dark:border-slate-800 text-gray-900 dark:text-white hover:border-gray-900 dark:hover:border-white hover:bg-gray-50 dark:hover:bg-slate-800'
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
                      <span key={page} className="px-2 text-gray-400 dark:text-gray-500" style={{ fontSize: '13px' }}>
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
                          ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                          : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'
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
                    ? 'border-gray-200 dark:border-slate-800 text-gray-300 dark:text-slate-700 cursor-not-allowed'
                    : 'border-gray-200 dark:border-slate-800 text-gray-900 dark:text-white hover:border-gray-900 dark:hover:border-white hover:bg-gray-50 dark:hover:bg-slate-800'
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
                    className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 overflow-hidden hover:border-gray-900 dark:hover:border-white hover:shadow-lg transition-all cursor-pointer group relative"
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
                        <div className="px-2 py-0.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-md text-gray-900 dark:text-white shadow-sm border border-black/5 dark:border-white/5" style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.5px' }}>
                          {script.aspectRatio || '9:16'}
                        </div>
                      </div>

                      {/* Status Badge - Top Right */}
                      <div className="absolute top-3 right-3 z-20 group-hover:opacity-0 transition-opacity">
                        <div className={`px-2 py-0.5 rounded shadow-sm border border-black/5 ${
                          script.status === 'Ready' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                          script.status === 'Draft' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' :
                          script.status === 'Used' ? 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400' :
                          'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400'
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
                          className="p-1.5 bg-white dark:bg-slate-900 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 shadow-md border border-gray-200 dark:border-slate-800 text-gray-900 dark:text-white"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Dropdown Menu */}
                    {menuOpenId === script.id && (
                      <div 
                        className="absolute right-2 w-48 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 shadow-xl py-1.5 z-[100] animate-in fade-in zoom-in-95 duration-100"
                        style={{ top: '40px' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenScript(script.id);
                            setMenuOpenId(null);
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-slate-800 flex items-center gap-2.5 text-gray-900 dark:text-white" 
                          style={{ fontSize: '13px', fontWeight: '500' }}
                        >
                          <Edit3 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          Open Editor
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onEditScript(script.id);
                            setMenuOpenId(null);
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-slate-800 flex items-center gap-2.5 text-gray-900 dark:text-white" 
                          style={{ fontSize: '13px', fontWeight: '500' }}
                        >
                          <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          Edit Details
                        </button>
                        <button className="w-full px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-slate-800 flex items-center gap-2.5 text-gray-900 dark:text-white" style={{ fontSize: '13px', fontWeight: '500' }}>
                          <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          Duplicate
                        </button>
                        <div className="my-1 h-px bg-gray-100 dark:bg-slate-800" />
                        <button className="w-full px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-slate-800 flex items-center gap-2.5 text-red-600 dark:text-red-400" style={{ fontSize: '13px', fontWeight: '500' }}>
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    )}

                    {/* Card Body */}
                    <div className={density === 'comfortable' ? 'p-4' : 'p-3'}>
                      {/* Title */}
                      <h3 
                        className="text-gray-900 dark:text-white mb-1.5 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" 
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
                        className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-slate-800"
                        style={{ fontSize: '11px' }}
                      >
                        <span className="text-gray-400 dark:text-gray-500 font-medium">
                          {script.updatedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">{script.scenes.length}</span>
                          <span className="text-gray-400 dark:text-gray-500">scenes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                })}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex-shrink-0 border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 md:px-8 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-gray-500 dark:text-gray-400" style={{ fontSize: '13px' }}>
                    Showing {startIndex + 1}-{Math.min(endIndex, scripts.length)} of {scripts.length} scripts
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-all ${
                        currentPage === 1
                          ? 'border-gray-200 dark:border-slate-800 text-gray-300 dark:text-slate-700 cursor-not-allowed'
                          : 'border-gray-200 dark:border-slate-800 text-gray-900 dark:text-white hover:border-gray-900 dark:hover:border-white hover:bg-gray-50 dark:hover:bg-slate-800'
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
                            <span key={page} className="px-2 text-gray-400 dark:text-gray-500" style={{ fontSize: '13px' }}>
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
                                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'
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
                          ? 'border-gray-200 dark:border-slate-800 text-gray-300 dark:text-slate-700 cursor-not-allowed'
                          : 'border-gray-200 dark:border-slate-800 text-gray-900 dark:text-white hover:border-gray-900 dark:hover:border-white hover:bg-gray-50 dark:hover:bg-slate-800'
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
    <div className="flex h-screen bg-gray-50 dark:bg-slate-950">
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
            onSimulationAction={isSimulation ? handleSimulationAction : undefined}
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

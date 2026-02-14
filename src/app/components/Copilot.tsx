import React from 'react';
import {
  Send,
  Sparkles,
  TrendingUp,
  Shield,
  Lightbulb,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Target,
  Brain,
  Clock,
  ArrowRight,
  CalendarRange,
  PieChart,
  Hash,
  ArrowUpRight,
  Save,
  RotateCcw,
  Edit,
  Play,
  Users,
  Eye,
  Zap,
  Flame,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Check,
  Search,
  Plus,
  FileText,
  ChevronDown,
  ChevronUp,
  PanelLeftOpen,
} from 'lucide-react';
import { motion } from 'motion/react';
import { SidebarPro } from './SidebarPro';
import { ConversationSidebar } from './ConversationSidebar';
import { useLocation } from 'react-router-dom';
import { stripLanguagePrefix } from '../contexts';

type MessageRole = 'user' | 'assistant';

interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
  structured?: {
    // Existing structured types
    verdict?: {
      title: string;
      description: string;
      confidence: 'high' | 'medium' | 'low';
    };
    evidence?: {
      title: string;
      items: Array<{
        label: string;
        value: string;
        status: 'good' | 'warning' | 'bad';
      }>;
    };
    actions?: {
      title: string;
      items: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    followUpQuestions?: string[];
    nextSteps?: {
      title: string;
      questions: string[];
    };
    
    // NEW: Clarifying Question Card
    clarifyingQuestion?: {
      question: string;
      options: Array<{
        label: string;
        description?: string;
      }>;
      allowAIDecision?: boolean;
    };
    
    // NEW: Video Ideas Card
    videoIdeas?: {
      hashtags: Array<{
        name: string;
        trendState: 'Rising' | 'Stable' | 'Trending';
        competition: 'Low' | 'Medium' | 'High';
        affinity: 'Strong' | 'General' | 'Weak';
        ideas: Array<{
          hook: string;
          reasoning: string;
        }>;
      }>;
    };
    
    // NEW: Scheduling Plan Card
    schedulingPlan?: {
      weekStart: Date;
      days: Array<{
        day: string;
        date: number;
        slots: Array<{
          contentType: string;
          riskLevel: 'Core Content' | 'Monetized Content' | 'Experiment';
        }>;
      }>;
    };
    
    // NEW: Script Draft Card
    scriptDraft?: {
      title: string;
      slotType: 'Core Content' | 'Monetized Content' | 'Experiment' | 'Timely';
      aspectRatio: '9:16' | '16:9' | '1:1';
      shootingStyle: 'On-Camera' | 'Off-Camera Filming' | 'Edit-First';
      targetLength?: '15s' | '30s' | '60s' | '90s' | 'Custom' | null;
      contentType?: string;
      folder?: string;
      series?: string;
      source: 'idea' | 'request';
    };
  };
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

const SUGGESTED_QUESTIONS = [
  // PRIMARY ACTIONS - What creators need to do TODAY
  {
    icon: Lightbulb,
    text: 'Find winning video ideas',
    description: 'Get topic ideas that fit your niche and current TikTok trends',
    category: 'Primary',
    badge: 'Most used',
    badgeColor: 'bg-[#059669] text-white',
  },
  {
    icon: Edit,
    text: 'Generate a shooting script',
    description: 'Turn an idea into a hook, outline, and shot-by-shot script',
    category: 'Primary',
    badge: 'New',
    badgeColor: 'bg-[#0F766E] text-white',
  },
  {
    icon: CalendarRange,
    text: 'Plan my content for next week',
    description: 'Get a strategic 7-day posting schedule based on your format strength',
    category: 'Primary',
    badge: null,
    badgeColor: null,
  },
];

const QUICK_ACTIONS = [
  { label: 'Account Diagnosis', icon: Brain },
  { label: 'Content Ideas', icon: Lightbulb },
  { label: 'Monetization Safety', icon: Shield },
];

interface CopilotProps {
  onNavigate?: (page: string, question?: string) => void;
  prefilledQuestion?: string | null;
  conversations?: Array<{
    id: string;
    title: string;
    messages: any[];
    createdAt: Date;
    updatedAt: Date;
  }>;
  setConversations?: React.Dispatch<React.SetStateAction<Array<{
    id: string;
    title: string;
    messages: any[];
    createdAt: Date;
    updatedAt: Date;
  }>>>;
  currentConversationId?: string | null;
  setCurrentConversationId?: React.Dispatch<React.SetStateAction<string | null>>;
}

export function Copilot({ 
  onNavigate,
  prefilledQuestion,
  conversations: externalConversations,
  setConversations: setExternalConversations,
  currentConversationId: externalCurrentConversationId,
  setCurrentConversationId: setExternalCurrentConversationId,
}: CopilotProps = {}) {
  // Use external state if provided, otherwise use internal state
  const [internalConversations, setInternalConversations] = React.useState<Conversation[]>([]);
  const [internalCurrentConversationId, setInternalCurrentConversationId] = React.useState<string | null>(null);
  
  const conversations = externalConversations ?? internalConversations;
  const setConversations = setExternalConversations ?? setInternalConversations;
  const currentConversationId = externalCurrentConversationId ?? internalCurrentConversationId;
  const setCurrentConversationId = setExternalCurrentConversationId ?? setInternalCurrentConversationId;

  const createNewConversation = () => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: 'New conversation',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setConversations((prev) => [newConversation, ...prev]);
    setCurrentConversationId(newConversation.id);
    return newConversation.id;
  };

  const handleSelectConversation = (conversationId: string) => {
    setCurrentConversationId(conversationId);
  };

  const handleDeleteConversation = (convId: string) => {
    // Remove conversation from list
    setConversations((prevConvs) => prevConvs.filter((c) => c.id !== convId));
    
    // If deleting current conversation, switch to the first available one or create new
    if (convId === currentConversationId) {
      const remainingConvs = conversations.filter((c) => c.id !== convId);
      if (remainingConvs.length > 0) {
        setCurrentConversationId(remainingConvs[0].id);
      } else {
        createNewConversation();
      }
    }
  };

  const handleRenameConversation = (convId: string, newTitle: string) => {
    setConversations((prevConvs) =>
      prevConvs.map((conv) =>
        conv.id === convId
          ? { ...conv, title: newTitle, updatedAt: new Date() }
          : conv
      )
    );
  };

  return (
    <div className="simulation-overview-theme simulation-dark-surface flex h-screen bg-sidebar transition-colors duration-300">
      <SidebarPro
        activeItem="copilot"
        onNavigate={onNavigate}
        conversations={conversations}
        currentConversationId={currentConversationId}
        onSelectConversation={handleSelectConversation}
        onDeleteConversation={handleDeleteConversation}
      />
      <CopilotContent
        conversations={conversations}
        setConversations={setConversations}
        currentConversationId={currentConversationId}
        setCurrentConversationId={setCurrentConversationId}
        prefilledQuestion={prefilledQuestion}
        onDeleteConversation={handleDeleteConversation}
        onRenameConversation={handleRenameConversation}
        onNavigate={onNavigate}
      />
    </div>
  );
}

export function CopilotContent({
  conversations,
  setConversations,
  currentConversationId,
  setCurrentConversationId,
  prefilledQuestion,
  onDeleteConversation,
  onRenameConversation,
  onNavigate,
}: {
  conversations: Conversation[];
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
  currentConversationId: string | null;
  setCurrentConversationId: React.Dispatch<React.SetStateAction<string | null>>;
  prefilledQuestion?: string | null;
  onDeleteConversation: (convId: string) => void;
  onRenameConversation: (convId: string, newTitle: string) => void;
  onNavigate?: (page: string, question?: string) => void;
}) {
  const [inputValue, setInputValue] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [prefilledSent, setPrefilledSent] = React.useState(false);
  const prefilledQuestionRef = React.useRef<string | null>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
  const location = useLocation();
  const normalizedPath = stripLanguagePrefix(location.pathname);
  const isSimulation = normalizedPath.startsWith('/social/simulation') || normalizedPath.startsWith('/simulation');

  const handleInteraction = React.useCallback((e: React.SyntheticEvent) => {
    if (!isSimulation) return;

    // Check for Enter key in input/textarea
    if (e.type === 'keydown') {
       const keyEvent = e as React.KeyboardEvent;
       if (keyEvent.key === 'Enter') {
          const target = e.target as HTMLElement;
          if (target.tagName === 'TEXTAREA' || target.tagName === 'INPUT') {
             // Only if not shift+enter (which adds newline)
             if (!keyEvent.shiftKey) {
                e.preventDefault();
                e.stopPropagation();
                onNavigate?.('auth');
             }
          }
       }
    }
    
    // Check for clicks on buttons
    if (e.type === 'click') {
        if ((e.target as HTMLElement).closest('button')) {
            e.preventDefault();
            e.stopPropagation();
            onNavigate?.('auth');
        }
    }
  }, [isSimulation, onNavigate]);

  const currentConversation = conversations.find((c) => c.id === currentConversationId);
  const messages = currentConversation?.messages || [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize textarea based on content
  React.useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset to auto to get accurate scrollHeight
      const scrollHeight = textarea.scrollHeight;
      const maxHeight = 120; // Max height in pixels
      textarea.style.height = Math.min(scrollHeight, maxHeight) + 'px';
    }
  }, [inputValue]);

  // Auto-send prefilled question - only once when it changes and is new
  React.useEffect(() => {
    if (
      prefilledQuestion && 
      prefilledQuestion !== prefilledQuestionRef.current && 
      messages.length === 0 && 
      !prefilledSent
    ) {
      // Small delay to ensure UI is ready
      const timer = setTimeout(() => {
        handleSendMessage(prefilledQuestion);
        setPrefilledSent(true);
        prefilledQuestionRef.current = prefilledQuestion;
      }, 300);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefilledQuestion]);

  const createNewConversation = (firstMessage?: string) => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: firstMessage ? (firstMessage.length > 50 ? firstMessage.substring(0, 50) + '...' : firstMessage) : 'New conversation',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setConversations((prev) => [newConversation, ...prev]);
    setCurrentConversationId(newConversation.id);
    return newConversation.id;
  };

  const updateConversation = (conversationId: string, newMessages: Message[]) => {
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === conversationId
          ? {
              ...conv,
              messages: newMessages,
              updatedAt: new Date(),
              // Update title based on first user message if still default
              title: conv.title === 'New conversation' && newMessages.length > 0 && newMessages[0].role === 'user'
                ? (newMessages[0].content.length > 50 ? newMessages[0].content.substring(0, 50) + '...' : newMessages[0].content)
                : conv.title,
            }
          : conv
      )
    );
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    let conversationId = currentConversationId;
    
    // Create new conversation if none exists
    if (!conversationId) {
      conversationId = createNewConversation(text);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    const newMessages = [...messages, userMessage];
    updateConversation(conversationId, newMessages);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(text),
        timestamp: new Date(),
        structured: generateStructuredResponse(text),
      };
      updateConversation(conversationId!, [...newMessages, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleFollowUpClick = (question: string) => {
    handleSendMessage(question);
  };

  const handleNewConversation = () => {
    createNewConversation();
  };

  return (
    <div 
      className="flex-1 flex overflow-hidden relative"
      onClickCapture={handleInteraction}
      onKeyDownCapture={handleInteraction}
    >
      {/* Conversation Sidebar */}
      <ConversationSidebar
        conversations={conversations}
        currentConversationId={currentConversationId}
        onSelectConversation={setCurrentConversationId}
        onNewConversation={handleNewConversation}
        onDeleteConversation={onDeleteConversation}
        onRenameConversation={onRenameConversation}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      
      {/* Expand Sidebar Button - Shows when sidebar is collapsed */}
      {isSidebarCollapsed && (
        <button
          onClick={() => setIsSidebarCollapsed(false)}
          className="absolute left-4 top-4 z-10 p-2 rounded-lg bg-card border border-border hover:bg-muted hover:border-muted-foreground/20 shadow-sm transition-all group"
          title="Show sidebar"
        >
          <PanelLeftOpen className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
        </button>
      )}
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-background">
        {/* Messages Area with Gradient Mask */}
        <div className={`flex-1 relative ${messages.length === 0 ? 'overflow-hidden' : 'overflow-y-auto scroll-smooth'}`}>
          {/* Top gradient mask - fades in when scrolled */}
          {messages.length > 0 && (
            <div className="sticky top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent pointer-events-none z-10"></div>
          )}
          
          <div className={`max-w-4xl mx-auto ${messages.length === 0 ? 'px-8 py-8' : 'px-8 pt-0 pb-8'}`}>
            {messages.length === 0 ? (
              <EmptyState onSuggestedQuestion={handleSuggestedQuestion} />
            ) : (
              <div className="space-y-8">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index === messages.length - 1 ? 0 : 0,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                  >
                    <MessageBubble
                      message={message}
                      onFollowUpClick={handleFollowUpClick}
                    />
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TypingIndicator />
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
          
          {/* Bottom gradient mask - subtle fade */}
          {messages.length > 0 && (
            <div className="sticky bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none"></div>
          )}
        </div>

        {/* Input Area */}
        <div className="">
          <div className="max-w-4xl mx-auto px-8 py-6">
            {/* Input Composer - ChatGPT Style */}
            <div className="max-w-[980px] mx-auto">
              {/* Main Composer Container */}
              <div className="relative bg-card rounded-[20px] border border-border shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06)] transition-all duration-200 focus-within:border-ring focus-within:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.08)]">
                <div className="px-5 pt-4 pb-3.5">
                  {/* Text Input Area */}
                  <textarea
                    ref={textareaRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage(inputValue);
                      }
                    }}
                    placeholder="Ask anything about your content strategy..."
                    className="w-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none resize-none scrollbar-hide mb-3"
                    style={{ 
                      fontSize: '15px', 
                      lineHeight: '1.5',
                      minHeight: '24px',
                      maxHeight: '120px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    }}
                    rows={1}
                  />

                  {/* Bottom Row Controls */}
                  <div className="flex items-center justify-end">
                    {/* Right: Helper + Send button */}
                    <div className="flex items-center gap-2.5">
                      {/* Press Enter hint - hide on mobile */}
                      {inputValue.trim() && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-muted-foreground" style={{ fontSize: '12px' }}>
                            Press
                          </span>
                          <kbd className="px-2 py-0.5 rounded border border-border bg-muted text-muted-foreground" style={{ fontSize: '11px', fontWeight: '600' }}>
                            Enter
                          </kbd>
                          <span className="text-muted-foreground" style={{ fontSize: '12px' }}>
                            to send
                          </span>
                        </div>
                      )}

                      {/* Send Button */}
                      <button
                        onClick={() => handleSendMessage(inputValue)}
                        disabled={!inputValue.trim()}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all ${
                          inputValue.trim()
                            ? 'bg-foreground hover:bg-foreground/90 active:scale-95'
                            : 'bg-muted cursor-not-allowed'
                        }`}
                      >
                        <span 
                          className={inputValue.trim() ? 'text-background' : 'text-muted-foreground'}
                          style={{ fontSize: '13px', fontWeight: '600' }}
                        >
                          Send
                        </span>
                        <Send className={`w-3.5 h-3.5 ${inputValue.trim() ? 'text-background' : 'text-muted-foreground'}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Under-Composer Caption */}
              <p className="text-center text-muted-foreground mt-3" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                Copilot uses your account data to provide personalized recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ onSuggestedQuestion }: { onSuggestedQuestion: (q: string) => void }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-6 min-h-[calc(100vh-180px)]">
      {/* Welcome Message - Compact */}
      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-foreground to-muted-foreground/80 flex items-center justify-center mx-auto mb-3">
          <Sparkles className="w-6 h-6 text-background" />
        </div>
        <h2 className="text-foreground mb-2" style={{ fontSize: '22px', fontWeight: '700' }}>
          What do you want to create today?
        </h2>
        <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
          Get instant help with content ideas, scripts, or performance analysis
        </p>
      </div>

      {/* PRIMARY ACTIONS - Large Cards with Descriptions */}
      <div className="w-full max-w-3xl mb-6">
        <div className="grid grid-cols-1 gap-3">
          {SUGGESTED_QUESTIONS.map((question, index) => (
            <button
              key={index}
              onClick={() => onSuggestedQuestion(question.text)}
              className="group p-4 rounded-lg border-2 border-border bg-card hover:border-[#0F766E] hover:shadow-md transition-all text-left"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted group-hover:bg-[#0F766E] transition-colors flex items-center justify-center flex-shrink-0">
                  <question.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-card-foreground group-hover:text-foreground" style={{ fontSize: '15px', fontWeight: '700' }}>
                      {question.text}
                    </h3>
                    {question.badge && (
                      <span className={`px-2 py-0.5 rounded-full ${question.badgeColor}`} style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '0.3px' }}>
                        {question.badge.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground group-hover:text-card-foreground/80" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                    {question.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-border group-hover:text-[#0F766E] transition-colors flex-shrink-0 mt-1" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Value Proposition Footer */}
      <div className="mt-6 text-center">
        <p className="text-muted-foreground" style={{ fontSize: '11px' }}>
          💡 <strong className="text-foreground">Pro tip:</strong> Be specific about your goal for better results
        </p>
      </div>
    </div>
  );
}

function MessageBubble({ 
  message, 
  onFollowUpClick 
}: { 
  message: Message;
  onFollowUpClick: (question: string) => void;
}) {
  const [liked, setLiked] = React.useState<boolean | null>(null);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    setLiked(liked === true ? null : true);
  };

  const handleDislike = () => {
    setLiked(liked === false ? null : false);
  };

  if (message.role === 'user') {
    return (
      <div className="flex justify-end">
        <div className="max-w-2xl">
          <div className="px-4 py-3 rounded-2xl bg-foreground text-background">
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>{message.content}</p>
          </div>
          <div className="text-right mt-1">
            <span className="text-muted-foreground" style={{ fontSize: '11px' }}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <div className="max-w-3xl">
        {/* AI Badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-foreground to-muted-foreground/80 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-background" />
          </div>
          <span className="text-muted-foreground" style={{ fontSize: '12px', fontWeight: '600' }}>
            AI Copilot
          </span>
          <span className="text-muted-foreground" style={{ fontSize: '11px' }}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>

        {/* Text Response */}
        <div className="mb-4">
          <p className="text-card-foreground" style={{ fontSize: '14px', lineHeight: '1.8' }}>
            {message.content}
          </p>
        </div>

        {/* Structured Components */}
        {message.structured && (
          <div className="space-y-4">
            {/* Verdict Card */}
            {message.structured.verdict && (
              <div className="p-4 rounded-lg border-2 border-[#0F766E] bg-muted/30">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#0F766E]" />
                    <h4 className="text-card-foreground" style={{ fontSize: '15px', fontWeight: '700' }}>
                      Verdict
                    </h4>
                  </div>
                  <div className={`px-2 py-0.5 rounded-full ${
                    message.structured.verdict.confidence === 'high'
                      ? 'bg-[#059669] text-white'
                      : message.structured.verdict.confidence === 'medium'
                      ? 'bg-[#FCD34D] text-[#78350F]'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.5px' }}>
                      {message.structured.verdict.confidence.toUpperCase()} CONFIDENCE
                    </span>
                  </div>
                </div>
                <h3 className="text-card-foreground mb-2" style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.4' }}>
                  {message.structured.verdict.title}
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                  {message.structured.verdict.description}
                </p>
              </div>
            )}

            {/* Evidence Card */}
            {message.structured.evidence && (
              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                  <h4 className="text-card-foreground" style={{ fontSize: '14px', fontWeight: '600' }}>
                    {message.structured.evidence.title}
                  </h4>
                </div>
                <div className="space-y-2">
                  {message.structured.evidence.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground" style={{ fontSize: '13px' }}>
                        {item.label}
                      </span>
                      <span
                        className={`font-semibold ${
                          item.status === 'good'
                            ? 'text-[#059669]'
                            : item.status === 'warning'
                            ? 'text-[#D97706]'
                            : 'text-[#dc2626]'
                        }`}
                        style={{ fontSize: '13px' }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Card */}
            {message.structured.actions && (
              <div className="p-4 rounded-lg bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] dark:from-[#0F766E]/20 dark:to-[#0F766E]/10 border border-[#6EE7B7] dark:border-[#0F766E]/30">
                <div className="flex items-center gap-2 mb-3">
                  <ArrowRight className="w-4 h-4 text-[#047857] dark:text-[#2DD4BF]" />
                  <h4 className="text-[#047857] dark:text-[#2DD4BF]" style={{ fontSize: '14px', fontWeight: '700' }}>
                    {message.structured.actions.title}
                  </h4>
                </div>
                <div className="space-y-3">
                  {message.structured.actions.items.map((action, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/60 dark:bg-black/20">
                      <div className="w-8 h-8 rounded-lg bg-[#059669] flex items-center justify-center flex-shrink-0">
                        <span className="text-white" style={{ fontSize: '14px', fontWeight: '700' }}>
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-[#111827] dark:text-white mb-1" style={{ fontSize: '13px', fontWeight: '600' }}>
                          {action.title}
                        </h5>
                        <p className="text-[#4B5563] dark:text-white/80" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                          {action.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Follow-up Questions */}
            {message.structured.followUpQuestions && message.structured.followUpQuestions.length > 0 && (
              <div className="pt-4 border-t border-border">
                <div className="mb-3">
                  <span className="text-muted-foreground" style={{ fontSize: '12px', fontWeight: '600' }}>
                    I need to understand:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {message.structured.followUpQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => onFollowUpClick(question)}
                      className="px-3 py-2 rounded-lg bg-card border border-border hover:border-[#0F766E] hover:bg-muted transition-colors"
                    >
                      <span className="text-card-foreground" style={{ fontSize: '13px', fontWeight: '500' }}>
                        {question}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Predictive Next Steps */}
            {message.structured.nextSteps && (
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground" style={{ fontSize: '12px', fontWeight: '600' }}>
                    {message.structured.nextSteps.title}
                  </span>
                </div>
                <div className="space-y-2">
                  {message.structured.nextSteps.questions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => onFollowUpClick(question)}
                      className="w-full text-left px-3 py-2 rounded-lg bg-card hover:bg-muted border border-border hover:border-[#0F766E] transition-colors flex items-center justify-between"
                    >
                      <span className="text-card-foreground" style={{ fontSize: '13px' }}>
                        {question}
                      </span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Clarifying Question Card */}
            {message.structured.clarifyingQuestion && (
              <ClarifyingQuestionCard 
                data={message.structured.clarifyingQuestion}
                onSelectOption={onFollowUpClick}
              />
            )}
            
            {/* Video Ideas Card */}
            {message.structured.videoIdeas && (
              <VideoIdeasCard 
                data={message.structured.videoIdeas}
                onUseIdea={(idea) => console.log('Use idea:', idea)}
                onSave={(idea) => console.log('Save idea:', idea)}
              />
            )}
            
            {/* Scheduling Plan Card */}
            {message.structured.schedulingPlan && (
              <SchedulingPlanCard 
                data={message.structured.schedulingPlan}
                onApply={() => console.log('Apply schedule')}
                onEdit={() => console.log('Edit schedule')}
              />
            )}
            
            {/* Script Draft Card */}
            {message.structured.scriptDraft && (
              <ScriptDraftCard 
                data={message.structured.scriptDraft}
                onUseScript={() => console.log('Use script')}
                onSaveScript={() => console.log('Save script')}
              />
            )}
          </div>
        )}
        
        {/* Like/Dislike and Copy Buttons */}
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={handleLike}
            className={`px-2 py-1 rounded-lg ${
              liked === true ? 'bg-[#059669] text-white' : 'bg-muted border border-border hover:border-[#0F766E]'
            } transition-colors`}
          >
            <ThumbsUp className="w-4 h-4" />
          </button>
          <button
            onClick={handleDislike}
            className={`px-2 py-1 rounded-lg ${
              liked === false ? 'bg-[#dc2626] text-white' : 'bg-muted border border-border hover:border-[#0F766E]'
            } transition-colors`}
          >
            <ThumbsDown className="w-4 h-4" />
          </button>
          <button
            onClick={handleCopy}
            className={`px-2 py-1 rounded-lg ${
              copied ? 'bg-[#059669] text-white' : 'bg-muted border border-border hover:border-[#0F766E]'
            } transition-colors`}
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-foreground to-muted-foreground/80 flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5 text-background" />
        </div>
        <div className="px-4 py-3 rounded-2xl bg-muted/30">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dummy response generators for demo
function generateAIResponse(userInput: string): string {
  const lowerInput = userInput.toLowerCase();
  
  if (lowerInput.includes('script') || lowerInput.includes('shooting script')) {
    return "I've created a script draft based on your idea. This includes the title, shooting style, and recommended format to match your proven content structure.";
  }
  
  if (lowerInput.includes('video idea') || lowerInput.includes('content ideas')) {
    return "I've analyzed trending hashtags in your niche and identified 3 high-opportunity topics you can execute today.";
  }
  
  if (lowerInput.includes('plan') || lowerInput.includes('schedule') || lowerInput.includes('7 days') || lowerInput.includes('next week')) {
    return "I've created a 7-day posting schedule based on your format strength and risk tolerance. This plan prioritizes consistency while allowing one strategic test.";
  }
  
  if (lowerInput.includes('focus on') || lowerInput.includes('growth or monetization')) {
    return "Before I can recommend a strategy, I need to understand your current priority.";
  }
  
  if (lowerInput.includes('growth') || lowerInput.includes('slowed')) {
    return "I've analyzed your account performance over the past 30 days. Your growth deceleration is primarily caused by format inconsistency, not algorithmic suppression.";
  }
  
  if (lowerInput.includes('brand deal') || lowerInput.includes('monetization')) {
    return "Based on your current traffic health score (87/100) and content consistency, your account is in a strong position for brand partnerships.";
  }
  
  if (lowerInput.includes('post') || lowerInput.includes('content')) {
    return "Your next week's content strategy should prioritize structure locking. I recommend focusing on your proven format to stabilize traffic before experimenting.";
  }
  
  if (lowerInput.includes('testing') || lowerInput.includes('format')) {
    return "Your recent format experiments show mixed results. The data suggests you're in a critical window where too much variation could trigger structural drift.";
  }
  
  return "I understand your question. Let me break down my analysis and provide you with a strategic recommendation.";
}

function generateStructuredResponse(userInput: string): Message['structured'] {
  const lowerInput = userInput.toLowerCase();
  
  // Script Draft Card - when asking for script generation
  if (lowerInput.includes('script') || lowerInput.includes('shooting script')) {
    return {
      scriptDraft: {
        title: 'My Morning Routine Changed Everything',
        slotType: 'Core Content',
        aspectRatio: '9:16',
        shootingStyle: 'On-Camera',
        targetLength: '30s',
        contentType: 'Lifestyle Routine',
        source: 'request',
      },
    };
  }
  
  // Clarifying Question Card - when asking about focus/priority
  if (lowerInput.includes('focus on') || lowerInput.includes('growth or monetization')) {
    return {
      clarifyingQuestion: {
        question: 'What should be your primary focus this month?',
        options: [
          { label: 'Maximize growth', description: 'Prioritize reach and followers' },
          { label: 'Monetization first', description: 'Accept brand deals, protect income' },
          { label: 'Balance both', description: 'Moderate approach' },
        ],
        allowAIDecision: true,
      },
    };
  }
  
  // Video Ideas Card - when asking for content ideas
  if (lowerInput.includes('video idea') || lowerInput.includes('content ideas')) {
    return {
      videoIdeas: {
        hashtags: [
          {
            name: 'TechUnboxing2025',
            trendState: 'Rising',
            competition: 'Low',
            affinity: 'Strong',
            ideas: [
              {
                hook: 'Unbox the unexpected: What happens when budget tech surprises you',
                reasoning: '12.5K posts but 45M views = high CTR, low saturation',
              },
              {
                hook: 'First 24 hours with [Product]: The truth nobody tells you',
                reasoning: 'Early-adoption angle capitalizes on momentum',
              },
            ],
          },
          {
            name: 'AIGadgetReview',
            trendState: 'Rising',
            competition: 'Low',
            affinity: 'Strong',
            ideas: [
              {
                hook: 'I tested AI gadgets for 30 days - Only 2 are worth it',
                reasoning: 'Fast velocity + your proven review format = ideal fit',
              },
            ],
          },
          {
            name: 'SmartDevices2025',
            trendState: 'Rising',
            competition: 'Low',
            affinity: 'Strong',
            ideas: [
              {
                hook: 'These smart home devices actually save money (with receipts)',
                reasoning: 'Steady growth, practical angle = audience retention',
              },
            ],
          },
        ],
      },
    };
  }
  
  // Scheduling Plan Card - when asking for schedule/plan
  if (lowerInput.includes('plan') || lowerInput.includes('schedule') || lowerInput.includes('7 days') || lowerInput.includes('next week')) {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Monday
    
    return {
      schedulingPlan: {
        weekStart: startOfWeek,
        days: [
          {
            day: 'Mon',
            date: startOfWeek.getDate(),
            slots: [
              { contentType: 'Tech Unboxing (Proven format)', riskLevel: 'Core Content' },
            ],
          },
          {
            day: 'Wed',
            date: startOfWeek.getDate() + 2,
            slots: [
              { contentType: 'Gadget Review (#AIGadgetReview)', riskLevel: 'Core Content' },
            ],
          },
          {
            day: 'Fri',
            date: startOfWeek.getDate() + 4,
            slots: [
              { contentType: 'Smart Home Setup (Experiment new angle)', riskLevel: 'Experiment' },
            ],
          },
          {
            day: 'Sun',
            date: startOfWeek.getDate() + 6,
            slots: [
              { contentType: 'Quick Tips Compilation', riskLevel: 'Monetized Content' },
            ],
          },
        ],
      },
    };
  }
  
  if (lowerInput.includes('growth') || lowerInput.includes('slowed')) {
    return {
      verdict: {
        title: 'You are in Early Stagnation caused by structural inconsistency',
        description: 'Your traffic efficiency has dropped 23% over the last 3 weeks. This is not algorithmic punishment—it\'s audience confusion from format drift.',
        confidence: 'high',
      },
      evidence: {
        title: 'Key metrics',
        items: [
          { label: 'Average View Duration', value: '-18% (vs. last month)', status: 'bad' },
          { label: 'Traffic Efficiency', value: '68% (below peer average)', status: 'warning' },
          { label: 'Format Consistency', value: '3/5 videos off-structure', status: 'bad' },
        ],
      },
      actions: {
        title: 'Recommended actions (Priority order)',
        items: [
          {
            icon: '🔒',
            title: 'Lock your Top 1 structure',
            description: 'Return to your "unboxing + quick specs" format for the next 3 posts. No experiments.',
          },
          {
            icon: '⏸️',
            title: 'Pause new collaborations',
            description: 'Decline brand deals that require format changes. Focus on recovery first.',
          },
          {
            icon: '📊',
            title: 'Monitor recovery signals',
            description: 'Watch for 3-day moving average improvement in view duration (target: 12%+).',
          },
        ],
      },
      followUpQuestions: [
        'Do you want to prioritize growth or monetization this month?',
        'Are you willing to pause brand deals for 2 weeks?',
      ],
      nextSteps: {
        title: 'Creators in your situation usually ask next:',
        questions: [
          'What content format should I stop using?',
          'How long does recovery usually take?',
          'Should I delete my recent experimental videos?',
        ],
      },
    };
  }
  
  if (lowerInput.includes('brand deal') || lowerInput.includes('monetization')) {
    return {
      verdict: {
        title: 'Your account is monetization-ready with one structural caveat',
        description: 'Traffic health is strong (87/100), but recent format drift creates slight partnership risk. Safe for aligned brands, risky for off-niche deals.',
        confidence: 'high',
      },
      evidence: {
        title: 'Monetization readiness metrics',
        items: [
          { label: 'Traffic Health Score', value: '87/100', status: 'good' },
          { label: 'Brand Safety Rating', value: 'Compliant', status: 'good' },
          { label: 'Format Stability', value: 'Medium (caution)', status: 'warning' },
        ],
      },
      actions: {
        title: 'Safe monetization strategy',
        items: [
          {
            icon: '✅',
            title: 'Accept niche-aligned deals only',
            description: 'Tech/gadget brands that fit your proven format. Example: Anker, UGREEN, dbrand.',
          },
          {
            icon: '⚠️',
            title: 'Decline format-heavy requirements',
            description: 'Avoid brands requesting lifestyle integration or storytelling pivots.',
          },
          {
            icon: '💰',
            title: 'Negotiate structure protection',
            description: 'Ask for creative freedom to maintain your review format. This protects your traffic.',
          },
        ],
      },
      followUpQuestions: [
        'Do you have a specific brand deal pending?',
        'Would you sacrifice traffic for a high-paying off-niche deal?',
      ],
      nextSteps: {
        title: 'Creators in your situation usually ask next:',
        questions: [
          'How much can I charge for sponsored content?',
          'What contract terms should I watch for?',
          'Should I start an MCN partnership?',
        ],
      },
    };
  }
  
  return {
    verdict: {
      title: 'Strategy recommendation generated',
      description: 'Based on your account\'s current lifecycle stage and recent performance data.',
      confidence: 'medium',
    },
    followUpQuestions: [
      'Tell me more about your goals',
      'What\'s your biggest concern right now?',
    ],
  };
}

// Clarifying Question Card Component
function ClarifyingQuestionCard({
  data,
  onSelectOption,
}: {
  data: NonNullable<Message['structured']>['clarifyingQuestion'];
  onSelectOption: (option: string) => void;
}) {
  if (!data) return null;
  
  return (
    <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-900/10 border border-yellow-200 dark:border-yellow-800">
      <div className="mb-4">
        <h4 className="text-yellow-900 dark:text-yellow-100 mb-1" style={{ fontSize: '14px', fontWeight: '700' }}>
          {data.question}
        </h4>
      </div>
      <div className="space-y-2">
        {data.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectOption(option.label)}
            className="w-full text-left px-4 py-3 rounded-lg bg-card hover:bg-yellow-50 dark:hover:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800/50 hover:border-yellow-300 dark:hover:border-yellow-700 transition-all group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <span className="text-foreground block mb-0.5" style={{ fontSize: '14px', fontWeight: '600' }}>
                  {option.label}
                </span>
                {option.description && (
                  <span className="text-muted-foreground" style={{ fontSize: '12px' }}>
                    {option.description}
                  </span>
                )}
              </div>
              <ChevronRight className="w-4 h-4 text-yellow-600 dark:text-yellow-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0 mt-0.5" />
            </div>
          </button>
        ))}
        {data.allowAIDecision && (
          <button
            onClick={() => onSelectOption('Let AI decide for me')}
            className="w-full text-center px-4 py-2 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-colors"
          >
            <span className="text-muted-foreground" style={{ fontSize: '13px', fontWeight: '500' }}>
              Let AI decide for me
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

// Video Ideas Card Component
function VideoIdeasCard({
  data,
  onUseIdea,
  onSave,
}: {
  data: Message['structured']['videoIdeas'];
  onUseIdea: (idea: { hook: string; reasoning: string }) => void;
  onSave: (idea: { hook: string; reasoning: string }) => void;
}) {
  const [addedIdeas, setAddedIdeas] = React.useState<Set<string>>(new Set());

  const handleUseIdea = (idea: { hook: string; reasoning: string }) => {
    const ideaKey = idea.hook;
    setAddedIdeas(prev => new Set(prev).add(ideaKey));
    onUseIdea(idea);
  };

  const isIdeaAdded = (idea: { hook: string; reasoning: string }) => {
    return addedIdeas.has(idea.hook);
  };

  return (
    <div className="p-5 rounded-lg bg-card border border-border">
      {/* Header */}
      <div className="mb-4">
        <h4 className="text-card-foreground mb-1" style={{ fontSize: '15px', fontWeight: '700' }}>
          Video Ideas
        </h4>
        <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
          3 high-opportunity topics for today
        </p>
      </div>

      {/* Ideas List */}
      <div className="space-y-3">
        {data.hashtags.map((hashtag, index) =>
          hashtag.ideas.map((idea, ideaIndex) => {
            const isAdded = isIdeaAdded(idea);
            return (
              <div
                key={`${index}-${ideaIndex}`}
                className="flex items-start gap-4 p-3.5 rounded-[12px] bg-muted/30 border border-border hover:border-[#0F766E] transition-colors"
              >
                {/* Left Column - Main Info (60-65%) */}
                <div className="flex-1 min-w-0" style={{ maxWidth: '60%' }}>
                  {/* Hashtag Row */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-foreground" style={{ fontSize: '14px', fontWeight: '600' }}>
                      #{hashtag.name}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-white ${
                        hashtag.trendState === 'Rising'
                          ? 'bg-[#059669]'
                          : hashtag.trendState === 'Trending'
                          ? 'bg-[#dc2626]'
                          : 'bg-muted-foreground'
                      }`}
                      style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.3px' }}
                    >
                      {hashtag.trendState.toUpperCase()}
                    </span>
                    {hashtag.competition === 'Low' && (
                      <span
                        className="px-2 py-0.5 rounded-full bg-[#F0FDFA] dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF]"
                        style={{ fontSize: '10px', fontWeight: '600' }}
                      >
                        Low competition
                      </span>
                    )}
                    {hashtag.affinity === 'Strong' && (
                      <span
                        className="px-2 py-0.5 rounded-full bg-[#FEF3C7] dark:bg-[#78350F]/30 text-[#78350F] dark:text-[#FCD34D]"
                        style={{ fontSize: '10px', fontWeight: '600' }}
                      >
                        Strong affinity
                      </span>
                    )}
                  </div>

                  {/* Hook Title */}
                  <h5
                    className="text-foreground mb-1 line-clamp-2"
                    style={{ fontSize: '14px', fontWeight: '700', lineHeight: '1.4' }}
                  >
                    {idea.hook}
                  </h5>
                </div>

                {/* Middle Column - Evidence (25-30%) */}
                <div className="flex-shrink-0" style={{ width: '28%' }}>
                  <p className="text-muted-foreground mb-1.5" style={{ fontSize: '11px', fontWeight: '600' }}>
                    Why it works
                  </p>
                  <div className="space-y-0.5">
                    <p className="text-muted-foreground truncate" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                      • {idea.reasoning}
                    </p>
                    <p className="text-muted-foreground truncate" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                      • Matches your proven format
                    </p>
                  </div>
                </div>

                {/* Right Column - Action (Fixed Width) */}
                <div className="flex items-center justify-center flex-shrink-0" style={{ width: '96px' }}>
                  <button
                    onClick={() => handleUseIdea(idea)}
                    disabled={isAdded}
                    className={`px-5 py-2 rounded-[10px] flex items-center gap-1.5 transition-all w-full justify-center ${
                      isAdded
                        ? 'bg-[#D1FAE5] dark:bg-[#064E3B] text-[#047857] dark:text-[#34D399] cursor-default'
                        : 'bg-[#059669] text-white hover:bg-[#047857] hover:shadow-md'
                    }`}
                    style={{ fontSize: '13px', fontWeight: '700' }}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Added
                      </>
                    ) : (
                      'Use'
                    )}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

// Scheduling Plan Card Component
function SchedulingPlanCard({
  data,
  onApply,
  onEdit,
}: {
  data: Message['structured']['schedulingPlan'];
  onApply: () => void;
  onEdit: () => void;
}) {
  return (
    <div className="p-6 rounded-[16px] bg-card border border-border shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-card-foreground mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>
            Scheduling plan
          </h3>
          <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
            Next 7 days · {data.days.reduce((sum, day) => sum + day.slots.length, 0)} posts
          </p>
        </div>
      </div>

      {/* List - Row Cards */}
      <div className="space-y-0 mb-5 border border-border rounded-[12px] overflow-hidden">
        {data.days.map((day, dayIndex) =>
          day.slots.map((slot, slotIndex) => (
            <div
              key={`${dayIndex}-${slotIndex}`}
              className="flex items-center gap-4 px-4 py-3 border-b border-border last:border-0 hover:bg-muted transition-colors"
            >
              {/* Date Block */}
              <div className="w-[68px] flex-shrink-0">
                <div className="text-foreground" style={{ fontSize: '14px', fontWeight: '700' }}>
                  {day.day}
                </div>
                <div className="text-muted-foreground" style={{ fontSize: '12px' }}>
                  {day.date}
                </div>
              </div>

              {/* Main Info */}
              <div className="flex-1 min-w-0">
                <div className="text-foreground mb-0.5 truncate" style={{ fontSize: '14px', fontWeight: '600' }}>
                  {slot.contentType}
                </div>
                <div className="text-muted-foreground truncate" style={{ fontSize: '12px' }}>
                  {slot.description || 'Proven format'}
                </div>
              </div>

              {/* Risk Chip */}
              <div className="flex-shrink-0">
                <div
                  className={`px-3 py-1 rounded-full ${
                    slot.riskLevel === 'Core'
                      ? 'bg-[#D1FAE5] dark:bg-[#064E3B] text-[#059669] dark:text-[#34D399]'
                      : slot.riskLevel === 'Experiment'
                      ? 'bg-[#FEF3C7] dark:bg-[#78350F]/40 text-[#D97706] dark:text-[#FCD34D]'
                      : 'bg-[#F0FDFA] dark:bg-[#064E3B]/50 text-[#0F766E] dark:text-[#34D399]'
                  }`}
                  style={{ fontSize: '12px', fontWeight: '600' }}
                >
                  {slot.riskLevel}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-3">
        <button
          onClick={onApply}
          className="flex-1 px-4 py-3 rounded-[12px] bg-[#059669] text-white hover:bg-[#047857] transition-all shadow-sm"
          style={{ fontSize: '14px', fontWeight: '700' }}
        >
          Apply to plan
        </button>
        <button
          onClick={onEdit}
          className="flex-1 px-4 py-3 rounded-[12px] border-2 border-border bg-card text-card-foreground hover:bg-muted hover:border-[#0F766E] transition-all"
          style={{ fontSize: '13px', fontWeight: '600' }}
        >
          Ask Copilot to revise
        </button>
      </div>

      {/* Hint */}
      <p className="text-muted-foreground" style={{ fontSize: '12px', lineHeight: '1.5' }}>
        Tip: Tell me constraints like 'post 3x this week' or 'avoid weekends'.
      </p>
    </div>
  );
}

// Script Draft Card Component
function ScriptDraftCard({
  data,
  onUseScript,
  onSaveScript,
}: {
  data: Message['structured']['scriptDraft'];
  onUseScript: () => void;
  onSaveScript: () => void;
}) {
  const [showMoreDetails, setShowMoreDetails] = React.useState(false);

  // Get "What you'll get" text based on shooting style
  const getWhatYouGetText = (style: string) => {
    switch (style) {
      case 'On-Camera':
        return 'Teleprompter-ready script with pause/emotion cues.';
      case 'Off-Camera Filming':
        return 'Shot list + storyboard beats with optional VO.';
      case 'Edit-First':
        return 'Asset checklist + AI prompts + editing outline.';
      default:
        return 'Complete script with structural guidance.';
    }
  };

  const handleRefineClick = () => {
    const prompt = `Refine this script draft: make the hook stronger and keep it under ${data.targetLength || '60s'}.`;
    console.log('Refine prompt:', prompt);
    // In real implementation, this would populate the input box
  };

  return (
    <div className="p-5 rounded-[12px] bg-card border border-border shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-foreground" />
          <div>
            <h3 className="text-foreground" style={{ fontSize: '16px', fontWeight: '600' }}>
              Script draft
            </h3>
            <p className="text-muted-foreground mt-0.5" style={{ fontSize: '12px' }}>
              {data.source === 'idea' ? 'Generated from your selected idea' : 'Generated from your request'}
            </p>
          </div>
        </div>
        <div className="px-3 py-1 rounded-full bg-[#f0fdf4] dark:bg-[#064E3B] border border-[#bbf7d0] dark:border-[#065F46]">
          <span className="text-[#166534] dark:text-[#34D399]" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.3px' }}>
            READY
          </span>
        </div>
      </div>

      {/* Draft Summary - Key Fields Only (5-7 rows) */}
      <div className="space-y-3 mb-5 pb-5 border-b border-border">
        {/* Row 1: Title */}
        <div>
          <div className="text-muted-foreground mb-1" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.3px' }}>
            TITLE
          </div>
          <div 
            className="text-foreground truncate" 
            style={{ fontSize: '14px', fontWeight: '600' }}
            title={data.title}
          >
            {data.title}
          </div>
        </div>

        {/* Row 2: Slot Type */}
        <div>
          <div className="text-muted-foreground mb-1" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.3px' }}>
            SLOT TYPE
          </div>
          <div className="inline-flex">
            <span
              className={`px-3 py-1 rounded-full ${
                data.slotType === 'Core Content'
                  ? 'bg-[#f0fdf4] dark:bg-[#064E3B] text-[#16a34a] dark:text-[#34D399] border border-[#bbf7d0] dark:border-[#065F46]'
                  : data.slotType === 'Monetized Content'
                  ? 'bg-[#eff6ff] dark:bg-[#1E3A8A]/30 text-[#2563eb] dark:text-[#60A5FA] border border-[#bfdbfe] dark:border-[#1E40AF]'
                  : data.slotType === 'Experiment'
                  ? 'bg-[#fef3c7] dark:bg-[#78350F]/30 text-[#d97706] dark:text-[#FCD34D] border border-[#fde68a] dark:border-[#92400E]'
                  : 'bg-[#fef2f2] dark:bg-[#7F1D1D]/30 text-[#dc2626] dark:text-[#F87171] border border-[#fecaca] dark:border-[#991B1B]'
              }`}
              style={{ fontSize: '13px', fontWeight: '600' }}
            >
              {data.slotType}
            </span>
          </div>
        </div>

        {/* Row 3: Aspect Ratio */}
        <div>
          <div className="text-muted-foreground mb-1" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.3px' }}>
            ASPECT RATIO
          </div>
          <div className="inline-flex">
            <span
              className="px-3 py-1 rounded-full bg-muted text-foreground border border-border"
              style={{ fontSize: '13px', fontWeight: '600' }}
            >
              {data.aspectRatio}
            </span>
          </div>
        </div>

        {/* Row 4: Shooting Style */}
        <div>
          <div className="text-muted-foreground mb-1" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.3px' }}>
            SHOOTING STYLE
          </div>
          <div className="inline-flex">
            <span
              className="px-3 py-1 rounded-full bg-muted text-foreground border border-border"
              style={{ fontSize: '13px', fontWeight: '600' }}
            >
              {data.shootingStyle}
            </span>
          </div>
        </div>

        {/* Row 5: Target Length */}
        <div>
          <div className="text-muted-foreground mb-1" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.3px' }}>
            TARGET LENGTH
          </div>
          <div className="inline-flex">
            <span
              className={`px-3 py-1 rounded-full ${
                data.targetLength 
                  ? 'bg-muted text-foreground border border-border' 
                  : 'bg-muted/50 text-muted-foreground border border-border'
              }`}
              style={{ fontSize: '13px', fontWeight: '600' }}
            >
              {data.targetLength || 'Not set'}
            </span>
          </div>
        </div>
      </div>

      {/* What you'll get */}
      <div className="mb-5">
        <div className="text-muted-foreground mb-1.5" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.3px' }}>
          WHAT YOU'LL GET
        </div>
        <p className="text-muted-foreground" style={{ fontSize: '13px', lineHeight: '1.5' }}>
          {getWhatYouGetText(data.shootingStyle)}
        </p>
      </div>

      {/* More Details - Collapsible */}
      {(data.contentType || data.folder || data.series) && (
        <div className="mb-5">
          <button
            onClick={() => setShowMoreDetails(!showMoreDetails)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            {showMoreDetails ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Hide details
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                More details
              </>
            )}
          </button>
          
          {showMoreDetails && (
            <div className="mt-3 pt-3 border-t border-border space-y-2">
              {data.contentType && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground" style={{ fontSize: '12px' }}>Content type:</span>
                  <span className="text-foreground" style={{ fontSize: '13px', fontWeight: '500' }}>
                    {data.contentType}
                  </span>
                </div>
              )}
              {data.folder && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground" style={{ fontSize: '12px' }}>Folder:</span>
                  <span className="text-foreground" style={{ fontSize: '13px', fontWeight: '500' }}>
                    {data.folder}
                  </span>
                </div>
              )}
              {data.series && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground" style={{ fontSize: '12px' }}>Series:</span>
                  <span className="text-foreground" style={{ fontSize: '13px', fontWeight: '500' }}>
                    {data.series}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* CTA Buttons */}
      <div className="flex items-center justify-end gap-3">
        <button
          onClick={handleRefineClick}
          className="px-4 py-2.5 rounded-lg border border-border bg-card text-muted-foreground hover:bg-muted hover:border-muted-foreground/50 hover:text-foreground transition-colors"
          style={{ fontSize: '14px', fontWeight: '600' }}
        >
          Ask Copilot to refine
        </button>
        <button
          onClick={onUseScript}
          className="px-4 py-2.5 rounded-lg bg-[#16a34a] text-white hover:bg-[#15803d] transition-all shadow-sm flex items-center gap-2"
          style={{ fontSize: '14px', fontWeight: '600' }}
        >
          Open in Script Generator
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

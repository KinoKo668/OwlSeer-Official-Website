import React from 'react';
import {
  Send,
  Sparkles,
  Lightbulb,
  Edit,
  CalendarRange,
  Brain,
  Shield,
  ArrowLeft,
  Plus,
  MessageSquare,
  ChevronRight,
  Mic,
  MoreVertical,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Check,
} from 'lucide-react';
import { MobileTabBarWithIndicator } from './MobileTabBarWithIndicator';

type MessageRole = 'user' | 'assistant';

interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

const QUICK_PROMPTS = [
  {
    icon: Lightbulb,
    text: 'Find video ideas',
    color: 'bg-[#fbbf24]',
    iconColor: 'text-[#fbbf24]',
  },
  {
    icon: Edit,
    text: 'Generate script',
    color: 'bg-[#3b82f6]',
    iconColor: 'text-[#3b82f6]',
  },
  {
    icon: CalendarRange,
    text: 'Plan next week',
    color: 'bg-[#8b5cf6]',
    iconColor: 'text-[#8b5cf6]',
  },
  {
    icon: Brain,
    text: 'Account diagnosis',
    color: 'bg-[#ec4899]',
    iconColor: 'text-[#ec4899]',
  },
];

const STARTER_QUESTIONS = [
  'How can I increase my engagement rate?',
  'What are the best posting times for my audience?',
  'How do I make my videos more discoverable?',
  'What content formats are working best now?',
];

interface CopilotMobileProps {
  onNavigate?: (page: string) => void;
  prefilledQuestion?: string | null;
}

export function CopilotMobile({ onNavigate, prefilledQuestion }: CopilotMobileProps) {
  const [conversations, setConversations] = React.useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const [showHistory, setShowHistory] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  const currentConversation = conversations.find(c => c.id === currentConversationId);
  const messages = currentConversation?.messages || [];

  // Auto-scroll to bottom when new messages arrive
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle prefilled question
  React.useEffect(() => {
    if (prefilledQuestion && prefilledQuestion.trim()) {
      setInputValue(prefilledQuestion);
      // Auto-focus the input
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [prefilledQuestion]);

  const createNewConversation = (firstMessage?: string): string => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: firstMessage 
        ? (firstMessage.length > 40 ? firstMessage.substring(0, 40) + '...' : firstMessage)
        : 'New conversation',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setConversations(prev => [newConversation, ...prev]);
    setCurrentConversationId(newConversation.id);
    return newConversation.id;
  };

  const updateConversation = (conversationId: string, newMessages: Message[]) => {
    setConversations(prev =>
      prev.map(conv =>
        conv.id === conversationId
          ? {
              ...conv,
              messages: newMessages,
              updatedAt: new Date(),
              title: conv.title === 'New conversation' && newMessages.length > 0 && newMessages[0].role === 'user'
                ? (newMessages[0].content.length > 40 ? newMessages[0].content.substring(0, 40) + '...' : newMessages[0].content)
                : conv.title,
            }
          : conv
      )
    );
  };

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('engagement') || lowerMessage.includes('interaction')) {
      return `Based on your account analysis, here are 3 proven strategies to boost engagement:

**1. Hook Optimization (Highest Impact)**
Your current average watch time is 12.4s on a 28s average video. This means viewers are dropping before the value proposition. Try the "Pattern Interrupt" technique:
• First 0-3s: Unexpected visual or bold statement
• Example: Instead of "Here's how to...", try "Stop doing [common mistake]"

**2. Comment Bait CTAs**
Videos with specific questions get 2.3x more comments. Your top performing video "5 Camera Settings" used this. More examples:
• "Which one surprised you most?"
• "Comment your setup and I'll rate it"

**3. Posting Time Adjustment**
Your audience is most active 7-9 PM EST (82% of your engaged followers). You're currently posting at 2 PM. Even a great video posted at the wrong time loses 40-60% potential reach.

Want me to create a specific action plan for next week?`;
    }

    if (lowerMessage.includes('video idea') || lowerMessage.includes('content idea')) {
      return `I've analyzed trending topics in your Tech Reviews niche. Here are 3 video ideas with high viral potential:

**1. "5 iPhone Features Apple Doesn't Want You to Know" 📱**
• Trend Match: 92% (rising topic)
• Competition: Medium
• Your Strength: Matches your explainer format
• Hook: "Apple keeps these features hidden..."

**2. "I Tested Every Budget Laptop Under $500 (Shocking Results)" 💻**
• Trend Match: 88%
• Competition: Low
• Unique Angle: Price comparison content is underserved
• Hook: "The $299 laptop beat the $499 one..."

**3. "Why Your Phone Charges Slow (Fix in 30 Seconds)" ⚡**
• Trend Match: 85% (evergreen problem)
• Competition: High, but you can stand out with data
• Your Strength: Technical deep-dives
• Hook: "It's not your cable..."

Should I generate a full script for any of these?`;
    }

    if (lowerMessage.includes('script') || lowerMessage.includes('write')) {
      return `I'll create a shooting script for you! Which format works best:

**Option A: "Hook + Problem + Solution" (Best for tutorials)**
• 0-3s: Hook with pattern interrupt
• 3-15s: Problem statement with relatability
• 15-45s: Solution with step-by-step
• 45-60s: CTA and recap

**Option B: "Curiosity Loop" (Best for reviews)**
• 0-3s: Shocking result/conclusion
• 3-10s: Setup the test/comparison
• 10-50s: Show the process (keep them watching)
• 50-60s: Reveal + CTA

**Option C: "Story Arc" (Best for viral moments)**
• 0-5s: The climax/result
• 5-20s: Flashback to setup
• 20-50s: The journey/process
• 50-60s: Conclusion + lesson

Which format, and for which topic?`;
    }

    if (lowerMessage.includes('plan') || lowerMessage.includes('schedule')) {
      return `Here's your strategic content plan for next 7 days:

**Monday & Wednesday: Core Content** (Low risk, proven formats)
• Tutorial-style reviews
• Posting time: 7:30 PM EST
• Goal: Maintain baseline engagement

**Friday: Monetization Content** (Affiliate opportunity)
• Product comparison video
• Posting time: 6:00 PM EST
• Include affiliate links in bio

**Sunday: Experiment** (Test new format)
• "Quick tip" style (15-30s format)
• Posting time: 8:00 PM EST
• Monitor watch time vs your 60s videos

**Content Gap Days (Tue, Thu, Sat):**
• Engage with comments
• Save/reshare trending sounds
• Prepare next week's content

This balances consistency with smart experimentation. Sound good?`;
    }

    return `I understand you're asking about "${userMessage}". 

As your AI Creator Assistant, I can help you with:

✨ **Strategy & Ideas**
• Find trending video topics for your niche
• Analyze what content will perform best
• Identify gaps in your content strategy

🎬 **Content Creation**
• Generate shooting scripts
• Optimize hooks and CTAs
• Plan weekly posting schedules

📊 **Performance Analysis**
• Diagnose why videos underperformed
• Find patterns in your top content
• Suggest improvements based on data

💡 **Quick Wins**
• Best posting times for your audience
• Hashtag recommendations
• Engagement optimization tips

What specific area would you like to explore first?`;
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

    // Simulate AI response with delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(text),
        timestamp: new Date(),
      };

      updateConversation(conversationId, [...newMessages, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickPrompt = (promptText: string) => {
    setInputValue(promptText);
    inputRef.current?.focus();
  };

  const handleStarterQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleNewChat = () => {
    setCurrentConversationId(null);
    setInputValue('');
    setShowHistory(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  // Auto-resize textarea
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  }, [inputValue]);

  // Empty state
  const isEmpty = messages.length === 0;

  return (
    <div className="fixed inset-0 bg-background">
      {/* Custom Header - Fixed Top */}
      <div className="fixed top-0 left-0 right-0 bg-background border-b border-border px-4 pt-14 pb-3 flex items-center justify-between z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ec4899] to-[#8b5cf6] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-foreground" style={{ fontSize: '17px', fontWeight: '700' }}>
              AI Copilot
            </h1>
            {currentConversation && (
              <p className="text-muted-foreground" style={{ fontSize: '11px' }}>
                {messages.length} messages
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {currentConversation && (
            <button
              onClick={handleNewChat}
              className="p-2 rounded-lg hover:bg-accent active:scale-95 transition-all"
            >
              <Plus className="w-5 h-5 text-muted-foreground" />
            </button>
          )}
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="p-2 rounded-lg hover:bg-accent active:scale-95 transition-all"
          >
            <MessageSquare className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* History Drawer - Fixed below header */}
      {showHistory && (
        <div className="fixed top-[73px] left-0 right-0 bg-background border-b border-border z-20">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-foreground" style={{ fontSize: '15px', fontWeight: '600' }}>
                Recent Conversations
              </h2>
              <button
                onClick={() => setShowHistory(false)}
                className="text-primary"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Done
              </button>
            </div>
            {conversations.length === 0 ? (
              <p className="text-muted-foreground text-center py-4" style={{ fontSize: '13px' }}>
                No conversations yet
              </p>
            ) : (
              <div className="space-y-2 max-h-64 overflow-y-auto scrollbar-hide">
                {conversations.map(conv => (
                  <button
                    key={conv.id}
                    onClick={() => {
                      setCurrentConversationId(conv.id);
                      setShowHistory(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg border transition-all active:scale-98 ${
                      conv.id === currentConversationId
                        ? 'bg-primary/10 border-primary'
                        : 'bg-card border-border hover:bg-accent'
                    }`}
                  >
                    <p className="text-foreground mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                      {conv.title}
                    </p>
                    <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
                      {conv.messages.length} messages · {new Date(conv.updatedAt).toLocaleDateString()}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Messages Area - Fixed positioning */}
      <div 
        className="fixed left-0 right-0 overflow-y-auto scrollbar-hide"
        style={{ 
          top: showHistory ? '346px' : '73px',
          bottom: '160px'
        }}
      >
        {isEmpty ? (
          // Empty State
          <div className="px-4 py-8 pb-40">
            {/* Welcome Message */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ec4899] to-[#8b5cf6] flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-foreground mb-2" style={{ fontSize: '20px', fontWeight: '700' }}>
                Hey! I'm your AI Copilot
              </h2>
              <p className="text-muted-foreground" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                I can help you find video ideas, write scripts, plan your content, and grow your account.
              </p>
            </div>

            {/* Quick Prompts */}
            <div className="mb-6">
              <h3 className="text-muted-foreground mb-3 px-1" style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {QUICK_PROMPTS.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickPrompt(prompt.text)}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary transition-all active:scale-95"
                  >
                    <div className={`w-10 h-10 rounded-full ${prompt.color} bg-opacity-10 flex items-center justify-center`}>
                      <prompt.icon className={`w-5 h-5 ${prompt.iconColor}`} />
                    </div>
                    <span className="text-card-foreground text-center" style={{ fontSize: '13px', fontWeight: '600' }}>
                      {prompt.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Starter Questions */}
            <div>
              <h3 className="text-muted-foreground mb-3 px-1" style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Try Asking
              </h3>
              <div className="space-y-2">
                {STARTER_QUESTIONS.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleStarterQuestion(question)}
                    className="w-full text-left p-3 rounded-lg bg-card border border-border hover:border-primary transition-all active:scale-98 flex items-center justify-between group"
                  >
                    <span className="text-card-foreground" style={{ fontSize: '14px' }}>
                      {question}
                    </span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Messages List
          <div className="px-4 py-4 pb-40 space-y-4">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Bar - Fixed at Bottom */}
      <div className="fixed bottom-[81px] left-0 right-0 bg-background px-3 py-3 z-40">
        {/* Input Container */}
        <div className="bg-card rounded-2xl border border-input shadow-sm focus-within:border-ring transition-colors">
          <div className="flex items-end gap-2 p-2">
            {/* AI Powered Badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 mb-0.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span 
                className="text-muted-foreground" 
                style={{ fontSize: '11px', fontWeight: '500' }}
              >
                AI powered
              </span>
            </div>

            {/* Text Input */}
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything about your content strategy..."
              rows={1}
              className="flex-1 px-2 py-2 bg-transparent resize-none outline-none text-foreground placeholder:text-muted-foreground scrollbar-hide"
              style={{ 
                fontSize: '15px', 
                maxHeight: '120px',
                minHeight: '28px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              }}
            />

            {/* Right Actions */}
            <div className="flex items-center gap-2 mb-0.5">
              {/* Enter to send hint */}
              {inputValue.trim() && (
                <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-muted rounded-md">
                  <span className="text-muted-foreground" style={{ fontSize: '11px', fontWeight: '500' }}>
                    Press
                  </span>
                  <kbd 
                    className="px-1.5 py-0.5 bg-card border border-border rounded text-foreground" 
                    style={{ fontSize: '10px', fontWeight: '600' }}
                  >
                    Enter
                  </kbd>
                  <span className="text-muted-foreground" style={{ fontSize: '11px', fontWeight: '500' }}>
                    to send
                  </span>
                </div>
              )}

              {/* Send Button */}
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  inputValue.trim()
                    ? 'bg-primary hover:bg-primary/90 active:scale-95'
                    : 'bg-muted cursor-not-allowed'
                }`}
              >
                <span 
                  className={inputValue.trim() ? 'text-primary-foreground' : 'text-muted-foreground'}
                  style={{ fontSize: '13px', fontWeight: '600' }}
                >
                  Send
                </span>
                <Send className={`w-3.5 h-3.5 ${inputValue.trim() ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Hint */}
        <p 
          className="text-center text-muted-foreground mt-2"
          style={{ fontSize: '11px', lineHeight: '1.4' }}
        >
          OWLSEER uses AI to provide personalized recommendations
        </p>
      </div>

      {/* Bottom Tab Bar */}
      <MobileTabBarWithIndicator activeItem="copilot" onNavigate={onNavigate} />
    </div>
  );
}

// Message Bubble Component
interface MessageBubbleProps {
  message: Message;
}

function MessageBubble({ message }: MessageBubbleProps) {
  const [showActions, setShowActions] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const isUser = message.role === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[85%] ${isUser ? 'order-2' : 'order-1'}`}>
        {/* Avatar for AI */}
        {!isUser && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ec4899] to-[#8b5cf6] flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="text-muted-foreground" style={{ fontSize: '11px', fontWeight: '600' }}>
              AI Copilot
            </span>
          </div>
        )}

        {/* Message Content */}
        <div
          className={`px-4 py-3 rounded-2xl ${
            isUser
              ? 'bg-primary text-primary-foreground rounded-tr-sm'
              : 'bg-muted text-foreground rounded-tl-sm'
          }`}
          style={{ fontSize: '15px', lineHeight: '1.5' }}
        >
          {message.content.split('\n').map((line, i) => {
            // Handle bold text
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
              <p key={i} className={i > 0 ? 'mt-2' : ''}>
                {parts.map((part, j) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return (
                      <strong key={j} style={{ fontWeight: '700' }}>
                        {part.slice(2, -2)}
                      </strong>
                    );
                  }
                  return part;
                })}
              </p>
            );
          })}
        </div>

        {/* Timestamp and Actions */}
        <div className={`flex items-center gap-2 mt-1 px-1 ${isUser ? 'justify-end' : 'justify-start'}`}>
          <span className="text-muted-foreground" style={{ fontSize: '11px' }}>
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          {!isUser && (
            <div className="flex items-center gap-1">
              <button
                onClick={handleCopy}
                className="p-1 rounded hover:bg-muted transition-colors"
              >
                {copied ? (
                  <Check className="w-3 h-3 text-green-600" />
                ) : (
                  <Copy className="w-3 h-3 text-muted-foreground" />
                )}
              </button>
              <button className="p-1 rounded hover:bg-muted transition-colors">
                <ThumbsUp className="w-3 h-3 text-muted-foreground" />
              </button>
              <button className="p-1 rounded hover:bg-muted transition-colors">
                <ThumbsDown className="w-3 h-3 text-muted-foreground" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Typing Indicator Component
function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%]">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ec4899] to-[#8b5cf6] flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="text-muted-foreground" style={{ fontSize: '11px', fontWeight: '600' }}>
            AI Copilot
          </span>
        </div>
        <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-muted flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
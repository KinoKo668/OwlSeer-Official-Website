/**
 * @page Blog Post Page - Individual Article View
 * 
 * SEO Keywords: TikTok tips article | content strategy guide | TikTok tutorial | creator insights
 * viral video guide | TikTok marketing article | social media strategy content
 * 
 * Long-tail Keywords: detailed TikTok strategy guide | in-depth content creator tutorial
 * TikTok algorithm explained article | step-by-step TikTok growth guide | expert TikTok tips
 * 
 * 中文关键词: TikTok技巧文章 | 内容策略指南 | 创作者教程 | 短视频营销文章 | 详细增长攻略
 */

import React, { useEffect } from 'react';
import { useLanguage } from '../contexts';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Twitter, 
  Linkedin, 
  Facebook,
  MessageCircle,
  ThumbsUp,
  Bookmark,
  Zap,
  Check
} from 'lucide-react';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { translations } from '../data/translations';

// --- Types ---

interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  image: string;
  content: {
    type: 'paragraph' | 'heading' | 'quote' | 'image' | 'list';
    content: string | string[];
    caption?: string;
  }[];
  relatedPosts: {
    id: string;
    title: string;
    image: string;
    date: string;
  }[];
}

// --- Mock Data ---

const SAMPLE_ARTICLE: Article = {
  id: '2',
  title: "Deconstructing the 'Micro-Hook' Phenomenon",
  subtitle: "You have 0.7 seconds to grab attention. We analyzed 10,000 viral videos to find the exact patterns that stop the scroll.",
  category: "Data Insights",
  date: "Oct 22, 2025",
  readTime: "8 min read",
  author: {
    name: "Marcus Neo",
    role: "Head of Data Science at OwlSeer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    bio: "Ex-TikTok algorithm engineer. Obsessed with the math behind virality."
  },
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  content: [
    {
      type: 'paragraph',
      content: "In the attention economy, the first second is the only second that matters. We've all heard the stats about declining attention spans, but the reality on TikTok is even more brutal: our latest analysis of 10,000 viral videos (defined as 1M+ views) shows that viewer retention is decided in the first 0.7 seconds."
    },
    {
      type: 'heading',
      content: "The Anatomy of a Micro-Hook"
    },
    {
      type: 'paragraph',
      content: "A 'Micro-Hook' isn't just a catchy headline. It's a multi-sensory disruption. It combines visual movement, audio cues, and text overlays to create an immediate 'pattern interrupt' in the user's brain."
    },
    {
      type: 'quote',
      content: "Virality isn't luck. It's a series of calculated decisions made in the first 24 frames of your video."
    },
    {
      type: 'paragraph',
      content: "We identified three distinct types of Micro-Hooks that consistently outperform the baseline:"
    },
    {
      type: 'list',
      content: [
        "The 'Visual Glitch': A sudden, jarring cut or movement within the first 0.5s.",
        "The 'Curiosity Gap': A statement that creates an immediate unanswered question (e.g., 'Stop doing this...').",
        "The 'Authority Frame': Establishing immediate credibility through setting or on-screen text."
      ]
    },
    {
      type: 'image',
      content: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      caption: "Retention curves showing the impact of Micro-Hooks vs. standard intros."
    },
    {
      type: 'heading',
      content: "Implementing This in Your Strategy"
    },
    {
      type: 'paragraph',
      content: "To leverage this, you don't need a Hollywood production budget. You need to rethink your editing workflow. Start your edit at the climax, then work backward. If your first frame isn't the most visually interesting frame of your video, you've already lost."
    }
  ],
  relatedPosts: [
    {
      id: '1',
      title: "The Algorithm Shift: Why 'Authenticity' is the New Viral Metric",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
      date: "Oct 24, 2025"
    },
    {
      id: '5',
      title: "TikTok Shop: The $100B Opportunity You're Missing",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2670&auto=format&fit=crop",
      date: "Oct 10, 2025"
    }
  ]
};

// --- Components ---

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-[#1AAE82] origin-left z-[60]"
      style={{ scaleX }}
    />
  );
};

const SocialShare = () => (
  <div className="flex flex-col gap-4 sticky top-32">
    <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-500 hover:text-[#1AAE82] hover:border-[#1AAE82] transition-all shadow-sm">
      <ThumbsUp className="w-5 h-5" />
    </button>
    <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-400 transition-all shadow-sm">
      <Twitter className="w-5 h-5" />
    </button>
    <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm">
      <Linkedin className="w-5 h-5" />
    </button>
    <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-500 hover:text-[#1AAE82] hover:border-[#1AAE82] transition-all shadow-sm">
      <Share2 className="w-5 h-5" />
    </button>
  </div>
);

const AuthorCard = ({ author }: { author: Article['author'] }) => (
  <div className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 flex items-start gap-4 my-12">
    <img src={author.avatar} alt={author.name} loading="lazy" decoding="async" className="w-16 h-16 rounded-full border-2 border-white dark:border-slate-700" />
    <div>
      <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">{author.name}</div>
      <div className="text-sm font-medium text-[#1AAE82] mb-3">{author.role}</div>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {author.bio}
      </p>
    </div>
  </div>
);

const CTA = ({ onSignUp }: { onSignUp: () => void }) => (
  <div className="my-16 relative rounded-3xl overflow-hidden bg-[#111827] text-white p-10 md:p-16 text-center">
    <div className="absolute inset-0 opacity-10 mix-blend-soft-light" 
         style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E\")" }}
    />
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1AAE82]/20 rounded-full blur-[80px]" />
    
    <div className="relative z-10 max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1AAE82]/10 border border-[#1AAE82]/20 text-[#1AAE82] text-xs font-bold uppercase tracking-wider mb-6">
        <Zap className="w-3 h-3" /> Growth Tool
      </div>
      <h3 className="text-3xl md:text-4xl font-bold font-display mb-6">
        Want to analyze your own <br/><span className="text-[#1AAE82]">Micro-Hooks?</span>
      </h3>
      <p className="text-gray-400 mb-8 text-lg">
        Our AI analyzes your videos frame-by-frame to identify drop-off points and hook efficiency.
      </p>
      <button 
        onClick={onSignUp}
        className="px-8 py-4 bg-[#1AAE82] hover:bg-[#15956F] text-white font-bold rounded-xl shadow-lg shadow-[#1AAE82]/20 transition-all duration-300 hover:-translate-y-1"
      >
        Analyze My Content Free
      </button>
    </div>
  </div>
);

// --- Main Page ---

export function BlogPostPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  // Use global language context
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  const article = SAMPLE_ARTICLE;

  // Removed local useEffect for dark mode

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-sans selection:bg-[#1AAE82]/30 text-gray-900 dark:text-gray-100">
      
      <ProgressBar />

      <Navbar 
        onTrySample={() => handleNavigate('landing')} 
        onSignUp={() => handleNavigate('auth')}
        onNavigate={handleNavigate}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={t}
      />

      <main className="pt-[72px]">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <button 
            onClick={() => handleNavigate('blog')}
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#1AAE82] transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </button>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1AAE82]/10 text-[#1AAE82] text-xs font-bold uppercase tracking-wider mb-6">
              {article.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-8 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              {article.subtitle}
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 border-t border-b border-gray-100 dark:border-slate-800 py-6">
              <div className="flex items-center gap-2">
                <img src={article.author.avatar} alt={article.author.name} loading="lazy" decoding="async" className="w-8 h-8 rounded-full" />
                <span className="font-medium text-gray-900 dark:text-white">{article.author.name}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-slate-700" />
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {article.date}
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-slate-700" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {article.readTime}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="w-full h-[400px] md:h-[600px] overflow-hidden">
          <img src={article.image} alt={article.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar (Share) */}
            <div className="hidden lg:block lg:col-span-2">
              <SocialShare />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg dark:prose-invert max-w-none prose-emerald prose-headings:font-display prose-headings:font-bold prose-a:text-[#1AAE82] prose-img:rounded-2xl">
                {article.content.map((block, idx) => {
                  switch (block.type) {
                    case 'paragraph':
                      return <p key={idx} className="text-gray-600 dark:text-gray-300 leading-8 mb-8">{block.content}</p>;
                    case 'heading':
                      return <h2 key={idx} className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">{block.content}</h2>;
                    case 'quote':
                      return (
                        <blockquote key={idx} className="border-l-4 border-[#1AAE82] pl-6 py-2 my-10 italic text-xl font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-slate-800/50 rounded-r-xl">
                          "{block.content}"
                        </blockquote>
                      );
                    case 'image':
                      return (
                        <figure key={idx} className="my-10">
                          <img src={block.content as string} alt={block.caption} loading="lazy" decoding="async" className="w-full rounded-2xl shadow-lg" />
                          {block.caption && <figcaption className="text-center text-sm text-gray-500 mt-3">{block.caption}</figcaption>}
                        </figure>
                      );
                    case 'list':
                      return (
                        <ul key={idx} className="space-y-4 my-8">
                          {(block.content as string[]).map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                              <div className="mt-1.5 min-w-5 h-5 rounded-full bg-[#1AAE82]/10 flex items-center justify-center text-[#1AAE82]">
                                <Check className="w-3 h-3" />
                              </div>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    default:
                      return null;
                  }
                })}
              </article>

              <AuthorCard author={article.author} />
              
              <CTA onSignUp={() => handleNavigate('auth')} />
            </div>

            {/* Sidebar (Related) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="sticky top-32">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">Related Articles</h4>
                <div className="space-y-6">
                  {article.relatedPosts.map(post => (
                    <a key={post.id} href="#" onClick={(e) => { e.preventDefault(); /* Navigate to post */ }} className="group block">
                      <div className="aspect-video rounded-lg overflow-hidden mb-3">
                        <img src={post.image} alt={post.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                      </div>
                      <h5 className="font-bold text-gray-900 dark:text-white leading-tight group-hover:text-[#1AAE82] transition-colors mb-2">
                        {post.title}
                      </h5>
                      <div className="text-xs text-gray-500">{post.date}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

/**
 * @page Blog Page - TikTok Strategy Resources
 * 
 * SEO Keywords: TikTok strategy blog | content creator tips | TikTok marketing insights
 * viral video tips | TikTok growth strategies | creator education | social media tips
 * 
 * Long-tail Keywords: how to go viral on TikTok 2026 | TikTok algorithm tips for creators
 * best posting times for TikTok | TikTok content ideas for beginners | TikTok trend predictions
 * 
 * 中文关键词: TikTok策略博客 | 创作者技巧 | 短视频营销洞察 | 病毒视频技巧 | 内容创作者教育
 */

import React, { useState } from 'react';
import { useLanguage } from '../contexts';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search, 
  ChevronRight,
  TrendingUp,
  Sparkles,
  Zap
} from 'lucide-react';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { translations } from '../data/translations';
import { SEO } from './SEO';
import { seoConfig, generateAlternates } from '../data/seoConfig';

// --- Types ---

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

// --- Mock Data ---

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "The Algorithm Shift: Why 'Authenticity' is the New Viral Metric",
    excerpt: "Forget polished production. In 2026, TikTok's algorithm prioritizes raw, unfiltered storytelling. Here's how to pivot your strategy.",
    category: "Strategy",
    author: {
      name: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    date: "Oct 24, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    featured: true
  },
  {
    id: '2',
    title: "Deconstructing the 'Micro-Hook' Phenomenon",
    excerpt: "You have 0.7 seconds to grab attention. We analyzed 10,000 viral videos to find the exact patterns that stop the scroll.",
    category: "Data Insights",
    author: {
      name: "Marcus Neo",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
    },
    date: "Oct 22, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: '3',
    title: "AI-Generated Scripts vs. Human Creativity: The Sweet Spot",
    excerpt: "It's not about replacing creators. It's about augmenting them. How top accounts use AI to iterate 10x faster.",
    category: "AI & Tech",
    author: {
      name: "Elena Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
    },
    date: "Oct 18, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop"
  },
  {
    id: '4',
    title: "Case Study: How 'EcoLife' Grew to 1M Followers in 3 Months",
    excerpt: "A deep dive into the content pillars, posting schedule, and engagement tactics of 2025's fastest-growing sustainable brand.",
    category: "Case Studies",
    author: {
      name: "David Kim",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    },
    date: "Oct 15, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: '5',
    title: "TikTok Shop: The $100B Opportunity You're Missing",
    excerpt: "Social commerce isn't coming; it's here. Strategies to convert viewers into buyers without being salesy.",
    category: "Monetization",
    author: {
      name: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    date: "Oct 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: '6',
    title: "Sound Design: The Silent Viral Factor",
    excerpt: "Why audio retention is just as important as visual retention. A guide to trending sounds and original audio.",
    category: "Production",
    author: {
      name: "Marcus Neo",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
    },
    date: "Oct 05, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop"
  }
];

const CATEGORIES = ["All", "Strategy", "Data Insights", "AI & Tech", "Case Studies", "Monetization", "Production"];

// --- Components ---

const FeaturedPost = ({ post, onClick }: { post: BlogPost; onClick?: () => void }) => (
  <motion.article 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    onClick={onClick}
    className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl border border-gray-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-500 cursor-pointer"
    aria-label={`Featured article: ${post.title}`}
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
      <div className="relative h-64 lg:h-auto overflow-hidden">
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        <img 
          src={post.image} 
          alt={post.title} 
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60 opacity-60" />
      </div>
      <div className="p-8 md:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 font-medium">
            <Calendar className="w-3 h-3" /> {post.date}
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {post.title}
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</div>
            </div>
          </div>
          
          <button 
            className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:gap-3 transition-all"
            aria-label={`Read article: ${post.title}`}
          >
            Read Article <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </motion.article>
);

const BlogCard = ({ post, index, onClick }: { post: BlogPost; index: number; onClick?: () => void }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    onClick={onClick}
    className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800 hover:shadow-xl hover:border-emerald-500/20 transition-all duration-300 cursor-pointer"
    aria-label={`Article: ${post.title}`}
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title} 
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-sm">
          {post.category}
        </span>
      </div>
    </div>
    
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
        <Calendar className="w-3 h-3" /> {post.date}
        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-slate-700" />
        <Clock className="w-3 h-3" /> {post.readTime}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-display line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
        {post.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2 flex-1">
        {post.excerpt}
      </p>
    </div>
  </motion.article>
);

const NewsletterSignup = () => (
  <section 
    className="relative my-24 rounded-3xl overflow-hidden bg-[#111827] dark:bg-black text-white p-12 text-center"
    aria-label="Newsletter subscription"
  >
    <div className="absolute inset-0 opacity-10 mix-blend-soft-light" 
         style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E\")" }}
    />
    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px]" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
    
    <div className="relative z-10 max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
        <Zap className="w-3 h-3" /> Weekly Intelligence
      </div>
      <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
        Join 50,000+ Creators Getting <br/><span className="text-emerald-400">The Weekly Download</span>
      </h2>
      <p className="text-gray-400 mb-8 text-lg">
        No fluff. Just data-backed trends, algorithm updates, and growth strategies delivered to your inbox every Tuesday.
      </p>
      
      <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
        />
        <button 
          type="button"
          className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1"
        >
          Subscribe
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-4">
        Unsubscribe at any time. We respect your privacy.
      </p>
    </div>
  </section>
);

// --- Main Page ---

export function BlogPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate?: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Use global language context
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      console.log('Navigate to:', page);
    }
  };

  const handlePostClick = () => {
    handleNavigate('blog-post');
  };
  
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  const otherPosts = filteredPosts.filter(p => p.id !== featuredPost.id);

  // Get SEO config
  const seo = seoConfig.blog[language as 'en' | 'zh'] || seoConfig.blog.en;

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans selection:bg-emerald-500/30">
      {/* SEO Meta Tags */}
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        lang={language}
        alternates={generateAlternates('/blog')}
      />
      
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
        {/* Header */}
        <section 
          className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
          aria-label="Blog header - Free TikTok strategy tips"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white font-display mb-6 tracking-tight">
              Decode the Algorithm.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Master the Trends.</span>
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Expert insights, data-backed strategies, and engineering deep dives to help you grow faster on TikTok.
            </p>
          </motion.div>

          {/* Featured Post */}
          <FeaturedPost post={featuredPost} onClick={handlePostClick} />
        </section>

        {/* Filters & Search */}
        <section 
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12"
          aria-label="Blog categories and search"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-200 dark:border-slate-800">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                      : 'bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm"
              />
            </div>
          </div>
        </section>

        {/* Post Grid */}
        <section 
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24"
          aria-label="Blog articles list"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} onClick={handlePostClick} />
            ))}
          </div>

          {otherPosts.length === 0 && (
            <div className="text-center py-24">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-slate-800 mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or category filter.</p>
            </div>
          )}

          <NewsletterSignup />
        </section>
      </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}

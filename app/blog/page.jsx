import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Search, Tag } from 'lucide-react';

export const metadata = {
  title: 'Blog | WellPlan - Marketing Automation Tips & Insights',
  description: 'Learn how to grow your business with marketing automation, AI chatbots, omnichannel messaging, and CRM best practices.',
};

// Blog post data - this would typically come from a CMS
const blogPosts = [
  {
    slug: 'whatsapp-business-api-complete-guide',
    title: 'The Complete Guide to WhatsApp Business API in 2026',
    excerpt: 'Everything you need to know about WhatsApp Business API: setup, pricing, templates, and best practices for business messaging.',
    category: 'WhatsApp',
    author: 'WellPlan Team',
    date: '2026-02-01',
    readTime: '12 min read',
    image: '/blog/whatsapp-marketing.jpg',
    featured: true,
  },
  {
    slug: 'ai-chatbots-lead-qualification',
    title: 'How AI Chatbots Are Revolutionizing Lead Qualification',
    excerpt: 'Discover how businesses are using AI-powered chatbots to qualify leads 24/7, reduce response times, and close more deals.',
    category: 'AI & Automation',
    author: 'WellPlan Team',
    date: '2026-01-28',
    readTime: '8 min read',
    image: '/blog/ai-chatbots.jpg',
    featured: true,
  },
  {
    slug: 'omnichannel-messaging-strategy',
    title: 'Building an Omnichannel Messaging Strategy That Actually Converts',
    excerpt: 'How to create a unified messaging experience across WhatsApp, Instagram, Facebook, SMS, and email that drives real results.',
    category: 'Strategy',
    author: 'WellPlan Team',
    date: '2026-01-25',
    readTime: '10 min read',
    image: '/blog/omnichannel.jpg',
    featured: false,
  },
  {
    slug: 'crm-automation-workflows-save-time',
    title: '10 CRM Automation Workflows That Save 20+ Hours Per Week',
    excerpt: 'Copy these proven automation workflows to streamline your sales process, follow-up sequences, and customer onboarding.',
    category: 'Automation',
    author: 'WellPlan Team',
    date: '2026-01-22',
    readTime: '15 min read',
    image: '/blog/crm-automation.jpg',
    featured: false,
  },
  {
    slug: 'instagram-dm-automation-playbook',
    title: 'Instagram DM Automation: The Complete 2026 Playbook',
    excerpt: 'How to automate your Instagram DMs to respond instantly, qualify leads, and book appointments—without losing the personal touch.',
    category: 'Instagram',
    author: 'WellPlan Team',
    date: '2026-01-18',
    readTime: '9 min read',
    image: '/blog/instagram-dm.jpg',
    featured: false,
  },
  {
    slug: 'lead-scoring-best-practices',
    title: 'Lead Scoring Best Practices: Focus on Prospects Who Will Actually Buy',
    excerpt: 'Learn how to implement lead scoring that helps your sales team prioritize the right prospects and close more deals.',
    category: 'Sales',
    author: 'WellPlan Team',
    date: '2026-01-15',
    readTime: '11 min read',
    image: '/blog/lead-scoring.jpg',
    featured: false,
  },
];

const categories = ['All', 'WhatsApp', 'Instagram', 'Facebook', 'AI & Automation', 'Email', 'SMS', 'Sales', 'Strategy'];

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);
  
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/10 via-transparent to-purple-500/5" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              The <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">WellPlan</span> Blog
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Insights, strategies, and best practices for marketing automation, AI chatbots, and omnichannel messaging.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 bg-[#111111] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#214CE5]/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  category === 'All' 
                    ? 'bg-[#214CE5] text-white' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#214CE5]" />
            Featured Articles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#214CE5]/20 to-purple-500/10 border border-white/10 hover:border-[#214CE5]/50 transition-all"
              >
                {/* Placeholder Image Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/30 to-purple-600/30" />
                
                <div className="relative p-8 min-h-[320px] flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#214CE5]/30 text-[#6B8EFF] text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#6B8EFF] transition">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <span className="text-[#214CE5] font-semibold text-sm group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Recent Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl bg-[#111111] border border-white/10 hover:border-white/20 overflow-hidden transition-all hover:-translate-y-1"
              >
                {/* Placeholder Image */}
                <div className="h-48 bg-gradient-to-br from-[#214CE5]/20 to-purple-500/10" />
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 rounded bg-white/10 text-gray-400 text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#6B8EFF] transition line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-gray-500">{formatDate(post.date)}</span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#214CE5] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-[#214CE5]/20 to-purple-500/20 border border-white/10 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Get the latest marketing automation tips, product updates, and industry insights delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#214CE5]/50"
            />
            <button className="px-6 py-3 bg-[#214CE5] hover:bg-[#1a3db8] text-white font-semibold rounded-xl transition">
              Subscribe
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

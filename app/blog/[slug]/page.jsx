import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

// Blog post content - this would typically come from a CMS
const blogPosts = {
  'whatsapp-business-api-complete-guide': {
    title: 'The Complete Guide to WhatsApp Business API in 2026',
    excerpt: 'Everything you need to know about WhatsApp Business API: setup, pricing, templates, and best practices for business messaging.',
    category: 'WhatsApp',
    author: 'WellPlan Team',
    date: '2026-02-01',
    readTime: '12 min read',
    content: `
## What is WhatsApp Business API?

WhatsApp Business API is the enterprise-grade solution for businesses that need to communicate with customers at scale. Unlike the free WhatsApp Business App (limited to one device), the API allows unlimited team members, automation, and integration with your CRM.

### Why It Matters for Your Business

With over 2 billion active users, WhatsApp has become the preferred communication channel for customers worldwide. Here's why businesses are making the switch:

- **98% open rates** compared to 20% for email
- **45% response rates** vs 6% for email
- **Customers prefer it** - 68% say messaging is the most convenient way to contact a business

## Getting Started with WhatsApp Business API

### Step 1: Choose Your Approach

There are two ways to access WhatsApp Business API:

1. **Direct access through Meta** - More control but requires technical expertise
2. **Through a Business Solution Provider (BSP)** - Easier setup, managed infrastructure (WellPlan handles this for you)

### Step 2: Set Up Your Business Profile

Your WhatsApp Business profile is your digital storefront. Include:

- Business name and description
- Website URL
- Business category
- Business hours
- Physical address (if applicable)

### Step 3: Create Message Templates

WhatsApp requires pre-approved templates for outbound messages. Here are template categories that typically get approved:

**Transactional Templates:**
- Order confirmations
- Shipping updates
- Appointment reminders
- Payment receipts

**Marketing Templates:**
- Product announcements
- Special offers (use sparingly)
- Event invitations
- Newsletters

## Best Practices for WhatsApp Marketing

### 1. Get Explicit Opt-In

Always get clear consent before messaging customers on WhatsApp. This protects your account and builds trust.

### 2. Respond Quickly

WhatsApp users expect fast responses. Aim for under 5 minutes during business hours. Use automation for after-hours.

### 3. Keep It Conversational

WhatsApp is a personal channel. Write like a human, not a corporate robot. Use the customer's name and keep messages concise.

### 4. Use Rich Media

WhatsApp supports images, videos, documents, and interactive buttons. Use them to create engaging experiences.

## Common Mistakes to Avoid

❌ Spamming customers with promotional messages
❌ Using WhatsApp without proper opt-in
❌ Slow response times
❌ Generic, impersonal messages
❌ Ignoring the 24-hour messaging window

## How WellPlan Makes WhatsApp Easy

WellPlan provides a complete WhatsApp Business API solution:

- **No technical setup** - We handle the infrastructure
- **Template management** - Easy template creation and approval
- **Unified inbox** - All channels in one place
- **Automation** - AI chatbots and workflow automation
- **Analytics** - Track performance and optimize

Ready to get started? [Book a demo](/demo) and see WhatsApp automation in action.
    `,
  },
  'ai-chatbots-lead-qualification': {
    title: 'How AI Chatbots Are Revolutionizing Lead Qualification',
    excerpt: 'Discover how businesses are using AI-powered chatbots to qualify leads 24/7, reduce response times, and close more deals.',
    category: 'AI & Automation',
    author: 'WellPlan Team',
    date: '2026-01-28',
    readTime: '8 min read',
    content: `
## The Lead Qualification Problem

Every business faces the same challenge: you generate leads, but not all leads are created equal. Your sales team wastes hours talking to people who aren't ready to buy, can't afford your product, or aren't a good fit.

Traditional lead qualification is:
- **Slow** - Leads wait hours or days for a response
- **Inconsistent** - Different reps ask different questions
- **Expensive** - Human time costs money
- **Limited** - Only works during business hours

## Enter AI Chatbots

AI-powered chatbots solve all of these problems. Here's how:

### 24/7 Instant Response

The moment a lead fills out a form or sends a message, your AI chatbot responds. No waiting, no business hours limitation. Research shows that responding within 5 minutes increases conversion by 21x.

### Consistent Qualification

Your AI chatbot asks the same qualifying questions every time:
- Budget range
- Timeline
- Decision-making authority
- Specific needs and pain points

This ensures every lead is scored consistently.

### Intelligent Routing

Based on the qualification responses, your chatbot can:
- Route hot leads directly to sales
- Send warm leads into nurture sequences
- Politely disqualify poor fits with helpful resources

## Real Results from AI Chatbots

Here's what our customers are seeing:

| Metric | Before AI | After AI |
|--------|-----------|----------|
| Response time | 4 hours | Instant |
| Lead qualification rate | 35% | 78% |
| Sales team efficiency | Baseline | +45% |
| After-hours leads captured | 0% | 100% |

## Building Your AI Chatbot Strategy

### Step 1: Define Your Ideal Customer

Before building a chatbot, you need to know who you're qualifying FOR. Create a clear ideal customer profile:

- Industry or vertical
- Company size
- Budget range
- Common pain points
- Buying timeline

### Step 2: Design Your Qualification Flow

Map out the conversation:

1. **Greeting** - Warm, helpful, sets expectations
2. **Discovery** - Ask about their situation
3. **Qualification** - Budget, timeline, authority
4. **Next steps** - Book a call or provide resources

### Step 3: Train Your AI

Modern AI chatbots learn from examples. Provide:
- Sample conversations
- FAQs and answers
- Product information
- Objection handling responses

### Step 4: Monitor and Optimize

Review chatbot conversations regularly. Look for:
- Questions the bot can't answer
- Drop-off points in the flow
- Qualification accuracy

## Why WellPlan's AI Bot is Different

WellPlan's AI chatbot isn't just a decision tree. It's powered by actual AI that can:

- **Understand intent** - Even when customers don't use exact keywords
- **Handle objections** - Respond naturally to concerns
- **Book appointments** - Integrate with your calendar
- **Personalize responses** - Use customer data for relevant conversations
- **Learn over time** - Gets better with every conversation

Ready to put AI to work for your business? [Start your free trial](/demo).
    `,
  },
  'omnichannel-messaging-strategy': {
    title: 'Building an Omnichannel Messaging Strategy That Actually Converts',
    excerpt: 'How to create a unified messaging experience across WhatsApp, Instagram, Facebook, SMS, and email that drives real results.',
    category: 'Strategy',
    author: 'WellPlan Team',
    date: '2026-01-25',
    readTime: '10 min read',
    content: `
## What is Omnichannel Messaging?

Omnichannel isn't just being present on multiple channels. It's creating a seamless, unified experience where customers can start a conversation on one channel and continue it on another without repeating themselves.

**Multichannel** (what most businesses do):
- Present on multiple channels
- Each channel operates independently
- Customers must repeat themselves
- No unified view of customer history

**Omnichannel** (what you should aim for):
- Present on multiple channels
- All channels connected and synchronized
- Conversation history follows the customer
- Unified customer profile

## Why Omnichannel Matters

### 1. Customers Expect It

73% of customers use multiple channels during their buying journey. They might discover you on Instagram, ask questions on WhatsApp, and complete a purchase via email.

### 2. Higher Conversion Rates

Companies with strong omnichannel strategies see:
- 91% higher customer retention
- 23% higher customer satisfaction
- 30% higher lifetime value

### 3. Better Data

When all channels feed into one system, you get a complete picture of customer behavior and preferences.

## Building Your Omnichannel Strategy

### Step 1: Choose Your Channels Wisely

Don't try to be everywhere. Focus on channels where your customers actually are:

**B2C Businesses:**
- WhatsApp (essential for most markets)
- Instagram DM
- Facebook Messenger
- SMS

**B2B Businesses:**
- Email
- LinkedIn
- WhatsApp
- Live chat

### Step 2: Create a Unified Inbox

The foundation of omnichannel is a single place to manage all conversations. Your team should see:

- Complete conversation history
- Customer profile and previous interactions
- Channel the message came from
- Ability to respond on any channel

### Step 3: Design Cross-Channel Workflows

Map out customer journeys that span channels:

**Example: Lead Nurture Flow**
1. Lead comes in via Instagram ad → Conversation starts on Instagram
2. After qualification → Ask permission to continue on WhatsApp
3. Send proposal via email
4. Follow up via WhatsApp
5. Appointment reminder via SMS

### Step 4: Maintain Consistent Branding

Your voice, tone, and messaging should be consistent across all channels:

- Same response time standards
- Similar greeting styles
- Unified product information
- Consistent support quality

## Common Omnichannel Mistakes

❌ **Treating channels independently** - Leads to disjointed customer experiences

❌ **Duplicating messages** - Sending the same message on all channels annoys customers

❌ **No channel preference tracking** - Some customers prefer WhatsApp, others prefer email

❌ **Slow channel switching** - When a customer moves channels, their history should follow instantly

## How WellPlan Enables True Omnichannel

WellPlan was built for omnichannel from day one:

**Unified Inbox**
Every conversation from every channel in one place. Your team never misses a message.

**Customer Profiles**
Complete history across all channels, touchpoints, and interactions.

**Smart Routing**
Messages automatically route to the right team member based on channel, topic, or customer.

**Cross-Channel Automation**
Build workflows that span multiple channels with intelligent triggers and actions.

**Channel Preference Tracking**
Automatically remember and respect customer channel preferences.

[See omnichannel in action](/demo) - Book a personalized demo.
    `,
  },
  'crm-automation-workflows-save-time': {
    title: '10 CRM Automation Workflows That Save 20+ Hours Per Week',
    excerpt: 'Copy these proven automation workflows to streamline your sales process, follow-up sequences, and customer onboarding.',
    category: 'Automation',
    author: 'WellPlan Team',
    date: '2026-01-22',
    readTime: '15 min read',
    content: `
## Why Automation is Non-Negotiable in 2026

The average sales rep spends only 36% of their time actually selling. The rest? Administrative tasks, data entry, and follow-up logistics.

Automation isn't about replacing humans—it's about freeing humans to do what they do best: build relationships and close deals.

## 10 High-Impact Automation Workflows

### 1. Speed-to-Lead Response

**Trigger:** New lead submitted
**Action:** Immediate personalized response + lead assignment + notification to sales rep

**Why it works:** 78% of customers buy from the company that responds first.

### 2. Appointment Reminder Sequence

**Trigger:** Appointment booked
**Sequence:**
- 24 hours before: Email confirmation with details
- 2 hours before: SMS reminder
- 30 minutes before: WhatsApp message with meeting link

**Why it works:** Reduces no-shows by 67%.

### 3. No-Show Follow-Up

**Trigger:** Appointment marked as no-show
**Action:** 
- Immediate: Polite check-in message
- 1 hour later: Offer to reschedule
- 24 hours later: Final attempt with incentive

**Why it works:** Recovers 34% of missed appointments.

### 4. Lead Nurture Drip

**Trigger:** Lead not ready to buy
**Sequence (over 30 days):**
- Day 1: Welcome + quick win resource
- Day 3: Case study relevant to their industry
- Day 7: Blog post on common pain point
- Day 14: Video testimonial
- Day 21: Special offer or consultation
- Day 30: Final check-in

**Why it works:** Nurtured leads produce 50% more sales at 33% lower cost.

### 5. Customer Onboarding Flow

**Trigger:** New customer added
**Sequence:**
- Immediate: Welcome message + next steps
- Day 1: Quick start guide
- Day 3: First check-in
- Day 7: Feature highlight
- Day 14: Advanced tips
- Day 30: Review request

**Why it works:** Good onboarding increases retention by 82%.

### 6. Win-Back Campaign

**Trigger:** Customer inactive for 60 days
**Sequence:**
- Day 1: "We miss you" message
- Day 3: New feature announcement
- Day 7: Special returning customer offer
- Day 14: Final outreach with survey

**Why it works:** Reactivates 12% of churned customers.

### 7. Referral Request

**Trigger:** Positive review or NPS score of 9-10
**Action:** Personalized referral request with easy sharing link
**Follow-up:** Thank you + reward for successful referral

**Why it works:** Happy customers refer 2.5x more.

### 8. Quote Follow-Up

**Trigger:** Quote sent, no response after 48 hours
**Sequence:**
- 48 hours: Friendly check-in
- 5 days: Address common concerns
- 10 days: Limited time offer or final pricing

**Why it works:** Improves quote-to-close by 28%.

### 9. Birthday/Anniversary Messages

**Trigger:** Contact birthday or customer anniversary
**Action:** Personalized message + special offer

**Why it works:** Anniversary emails have 481% higher transaction rate.

### 10. Review Generation

**Trigger:** Positive service completion or survey response
**Action:** 
- Thank you message
- Direct link to Google/Facebook review
- Incentive for leaving review

**Why it works:** Asked customers leave reviews 70% more often.

## Setting Up Automations in WellPlan

WellPlan makes building these workflows easy with our visual workflow builder:

1. **Drag-and-drop triggers** - No coding required
2. **Conditional branching** - Different paths based on behavior
3. **Multi-channel actions** - Email, SMS, WhatsApp, tasks
4. **A/B testing** - Test different approaches
5. **Analytics** - See what's working

[Start automating today](/demo) - We'll help you set up your first workflows.
    `,
  },
  'instagram-dm-automation-playbook': {
    title: 'Instagram DM Automation: The Complete 2026 Playbook',
    excerpt: 'How to automate your Instagram DMs to respond instantly, qualify leads, and book appointments—without losing the personal touch.',
    category: 'Instagram',
    author: 'WellPlan Team',
    date: '2026-01-18',
    readTime: '9 min read',
    content: `
## Why Instagram DMs Are a Goldmine

Instagram has 2 billion monthly active users, and DMs have become a primary way people communicate with businesses. But here's the challenge: managing DMs at scale is nearly impossible manually.

The average business receives:
- 50-200+ DMs per day
- Questions at all hours (including 2am)
- A mix of hot leads and tire-kickers

## What Instagram DM Automation Can Do

### Instant Response to Story Mentions

When someone mentions you in their story, your automation can:
- Thank them immediately
- Ask a qualifying question
- Offer an exclusive discount

### Comment-to-DM Triggers

When someone comments a keyword on your post:
- Automatically DM them the promised content
- Start a conversation
- Add them to your CRM

### Auto-Qualification

When someone DMs you:
- Greet them immediately
- Ask qualifying questions
- Route hot leads to sales
- Send resources to browsers

### Appointment Booking

Your automation can:
- Show available time slots
- Book directly into your calendar
- Send confirmation
- Add to CRM with conversation history

## Setting Up Instagram DM Automation

### Step 1: Connect Your Instagram Business Account

You need:
- Instagram Business or Creator account
- Facebook Page connected
- WellPlan account

### Step 2: Create Your Welcome Flow

Design what happens when someone DMs you:

\`\`\`
👋 Hey [Name]! Thanks for reaching out!

Quick question: What brings you here today?

1️⃣ I want to learn more about [your service]
2️⃣ I'm ready to get started
3️⃣ I have a question
\`\`\`

### Step 3: Build Qualification Branches

Based on their response, route them appropriately:

**Option 1 (Learn more):**
→ Send educational content
→ Schedule follow-up in 3 days

**Option 2 (Ready to start):**
→ Ask qualifying questions
→ Book appointment
→ Notify sales team

**Option 3 (Question):**
→ Try to answer with FAQ
→ If can't answer, route to human

### Step 4: Set Up Keyword Triggers

Create automations for:
- "Price" → Send pricing info
- "Hours" → Send business hours
- "Location" → Send address/map
- "Book" → Show calendar

## Best Practices for Instagram DM Automation

### Do ✅

- **Disclose it's automated** (be transparent)
- **Keep messages short** (Instagram is mobile-first)
- **Use emojis** (they fit the platform)
- **Provide easy human escalation**
- **Test your flows regularly**

### Don't ❌

- **Mass DM people** (this will get you banned)
- **Be too salesy too fast**
- **Use robotic language**
- **Ignore messages that need human touch**
- **Forget to follow up**

## Measuring Success

Track these metrics:
- **Response time** (aim for under 1 minute)
- **Qualification rate** (% of DMs qualified)
- **Conversion rate** (DMs to appointments/sales)
- **Engagement rate** (% who respond to automation)

## WellPlan's Instagram Integration

WellPlan connects directly to Instagram's official API to provide:

- **Instant DM responses** - No delays
- **AI-powered conversations** - Natural, helpful responses
- **CRM integration** - Every conversation tracked
- **Unified inbox** - Instagram + all other channels
- **Compliance** - Within Instagram's guidelines

Ready to automate your Instagram DMs? [Get started free](/demo).
    `,
  },
  'lead-scoring-best-practices': {
    title: 'Lead Scoring Best Practices: Focus on Prospects Who Will Actually Buy',
    excerpt: 'Learn how to implement lead scoring that helps your sales team prioritize the right prospects and close more deals.',
    category: 'Sales',
    author: 'WellPlan Team',
    date: '2026-01-15',
    readTime: '11 min read',
    content: `
## What is Lead Scoring?

Lead scoring is assigning points to leads based on attributes and behaviors that indicate buying intent. Higher scores = more likely to buy.

**Without lead scoring:**
- Sales treats all leads equally
- Time wasted on unqualified leads
- Hot leads go cold waiting for attention
- No systematic prioritization

**With lead scoring:**
- Hot leads get immediate attention
- Sales focuses on highest-value prospects
- Marketing knows which campaigns produce best leads
- Data-driven decisions

## Building Your Lead Scoring Model

### Step 1: Define Your Ideal Customer Profile (ICP)

Score based on how well a lead matches your ICP:

**Demographic Scoring:**
| Attribute | Good Fit (+) | Neutral | Bad Fit (-) |
|-----------|--------------|---------|-------------|
| Industry | Target industry +20 | Adjacent +5 | Non-fit -10 |
| Company size | 50-500 emp +15 | 10-50 +5 | <10 -5 |
| Job title | Decision maker +25 | Influencer +10 | Individual contributor 0 |
| Location | Service area +10 | Nearby +5 | Too far -10 |

### Step 2: Track Behavioral Signals

Score based on engagement and intent:

**Behavioral Scoring:**
| Action | Points |
|--------|--------|
| Visited pricing page | +20 |
| Downloaded case study | +15 |
| Watched demo video | +15 |
| Attended webinar | +20 |
| Opened 3+ emails | +10 |
| Requested demo | +50 |
| Chatted with bot | +10 |
| Visited 5+ pages | +10 |
| Returned visitor | +15 |

### Step 3: Add Negative Scoring

Reduce scores for disqualifying signals:

| Action | Points |
|--------|--------|
| Unsubscribed | -30 |
| Bounced email | -20 |
| Competitor company | -50 |
| Student email | -40 |
| No activity 30+ days | -20 |
| Marked as spam | -100 |

### Step 4: Define Score Thresholds

| Score Range | Label | Action |
|-------------|-------|--------|
| 80+ | Hot | Immediate sales outreach |
| 50-79 | Warm | Sales-ready, prioritize |
| 25-49 | Cool | Continue nurturing |
| <25 | Cold | Marketing automation only |

## Advanced Lead Scoring Techniques

### Time Decay

Recent actions should count more than old ones:
- Action in last 7 days: Full points
- 8-30 days: 75% of points
- 31-60 days: 50% of points
- 60+ days: 25% of points

### Predictive Lead Scoring

Use machine learning to:
- Identify patterns in closed-won deals
- Find attributes that predict conversion
- Continuously improve accuracy

### Multiple Scoring Models

Different scores for different purposes:
- **Fit score** - How well they match your ICP
- **Engagement score** - How active they are
- **Intent score** - Buying signals
- **Composite score** - Weighted combination

## Common Lead Scoring Mistakes

❌ **Too many factors** - Keep it simple (10-15 factors max)
❌ **Not updating regularly** - Review quarterly
❌ **Ignoring negative signals** - Disqualification matters
❌ **Sales not bought in** - Involve sales in building the model
❌ **No feedback loop** - Compare scores to actual conversions

## Lead Scoring in WellPlan

WellPlan's built-in lead scoring:

- **Automatic scoring** - Based on all activities
- **Custom rules** - Build your own scoring model
- **Smart notifications** - Alert sales when leads hit thresholds
- **Visual pipeline** - See scores at a glance
- **AI recommendations** - Suggestions based on patterns

[See lead scoring in action](/demo) - Get a personalized walkthrough.
    `,
  },
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug];
  if (!post) return { title: 'Post Not Found' };
  
  const url = `https://wellplan.io/blog/${params.slug}`;
  
  return {
    title: `${post.title} | WellPlan Blog`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: url,
      siteName: 'WellPlan',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    notFound();
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'WellPlan',
      url: 'https://wellplan.io',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://wellplan.io/blog/${params.slug}`,
    },
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="px-3 py-1 rounded-full bg-[#214CE5]/20 text-[#6B8EFF] text-xs sm:text-sm font-semibold">
              {post.category}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              {post.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8">
            {post.excerpt}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#214CE5] to-purple-500 flex items-center justify-center font-bold text-sm sm:text-base">
                WP
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">{post.author}</p>
                <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  {formatDate(post.date)}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm text-gray-500 mr-1 sm:mr-2">Share:</span>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition">
                <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition">
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition">
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <article className="prose prose-invert prose-base sm:prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-8 sm:prose-h2:mt-12 prose-h2:mb-4 sm:prose-h2:mb-6 prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-6 sm:prose-h3:mt-8 prose-h3:mb-3 sm:prose-h3:mb-4 prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-[#6B8EFF] prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:my-1 prose-table:text-xs sm:prose-table:text-sm prose-th:bg-white/5 prose-th:px-2 sm:prose-th:px-4 prose-th:py-2 prose-td:px-2 sm:prose-td:px-4 prose-td:py-2 prose-td:border-white/10 prose-code:bg-white/10 prose-code:px-1 prose-code:rounded prose-code:text-sm prose-pre:bg-[#111111] prose-pre:border prose-pre:border-white/10 prose-pre:text-xs sm:prose-pre:text-sm prose-pre:overflow-x-auto">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
        
        {/* CTA */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#214CE5]/20 to-purple-500/20 border border-white/10 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Transform Your Business?</h3>
          <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 max-w-xl mx-auto">
            See how WellPlan can help you capture more leads, nurture relationships, and close more deals.
          </p>
          <Link 
            href="/demo"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#214CE5] hover:bg-[#1a3db8] text-white font-semibold rounded-xl transition text-sm sm:text-base"
          >
            Book a Free Demo
          </Link>
        </div>
        
        {/* Related Posts placeholder */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <h3 className="text-2xl font-bold mb-8">Continue Reading</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(blogPosts).filter(([slug]) => slug !== params.slug).slice(0, 2).map(([slug, relatedPost]) => (
              <Link 
                key={slug}
                href={`/blog/${slug}`}
                className="group p-6 rounded-xl bg-[#111111] border border-white/10 hover:border-white/20 transition"
              >
                <span className="text-xs text-[#6B8EFF] font-semibold">{relatedPost.category}</span>
                <h4 className="text-lg font-bold mt-2 group-hover:text-[#6B8EFF] transition line-clamp-2">
                  {relatedPost.title}
                </h4>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{relatedPost.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

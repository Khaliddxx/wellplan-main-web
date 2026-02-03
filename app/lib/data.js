export const siteData = {
  objectives: [
    {
      slug: 'capturing',
      title: 'Lead Capturing',
      description: 'Convert visitors into leads',
      icon: '📥',
      color: 'from-blue-500 to-cyan-500',
      tools: [
        { name: 'Landing Pages', desc: 'High-converting landing pages' },
        { name: 'Forms', desc: 'Smart forms with conditional logic' },
        { name: 'Chatbots', desc: 'AI-powered 24/7 customer engagement' },
        { name: 'SMS Capture', desc: 'Capture leads via SMS' },
        { name: 'Web Forms', desc: 'Embed forms anywhere' },
        { name: 'Pop-ups', desc: 'Exit-intent & timed popups' }
      ],
      benefits: [
        '3x more leads captured',
        '85% automation rate',
        'Zero manual data entry',
        '24/7 lead collection'
      ],
      features: [
        'Drag-and-drop builder',
        'Mobile-optimized',
        'Custom domain support',
        'A/B testing built-in',
        'Analytics dashboard',
        'Conditional logic'
      ]
    },
    {
      slug: 'nurturing',
      title: 'Lead Nurturing',
      description: 'Engage and qualify leads',
      icon: '💬',
      color: 'from-purple-500 to-pink-500',
      tools: [
        { name: 'Email Sequences', desc: 'Automated email campaigns' },
        { name: 'SMS Automation', desc: 'Text message workflows' },
        { name: 'AI Conversations', desc: 'Smart AI responses' },
        { name: 'Workflows', desc: 'Complex automation flows' },
        { name: 'Segmentation', desc: 'Smart audience targeting' },
        { name: 'Broadcasts', desc: 'Multi-channel campaigns' }
      ],
      benefits: [
        '10x engagement increase',
        '60% time saved on manual work',
        'Personalized at scale',
        'Lead scoring automated'
      ],
      features: [
        'Visual workflow builder',
        '100+ automation actions',
        'Advanced segmentation',
        'Dynamic content',
        'Behavioral triggers',
        'Real-time analytics'
      ]
    },
    {
      slug: 'closing',
      title: 'Lead Closing',
      description: 'Convert leads into customers',
      icon: '🎯',
      color: 'from-orange-500 to-red-500',
      tools: [
        { name: 'Sales Pipeline', desc: 'Visual deal management' },
        { name: 'CRM System', desc: 'Complete contact management' },
        { name: 'Booking Calendar', desc: 'Automated scheduling' },
        { name: 'Payment Links', desc: 'One-click checkout' },
        { name: 'Proposals', desc: 'Digital proposal system' },
        { name: 'E-Signatures', desc: 'Legal document signing' }
      ],
      benefits: [
        '5x faster sales cycles',
        '90% close rate improvement',
        'Real-time deal tracking',
        'Automated follow-ups'
      ],
      features: [
        'Custom pipelines',
        'Deal automation',
        'Forecast reporting',
        'Activity tracking',
        'Document management',
        'Revenue analytics'
      ]
    }
  ],

  features: {
    capturing: [
      'Landing Page Builder',
      'Form Builder with Logic',
      'Pop-up & Exit Intent',
      'SMS Capture Forms',
      'Facebook/Instagram Pixel',
      'Google Analytics Integration'
    ],
    nurturing: [
      'Email Automation',
      'SMS Sequences',
      'AI AgentFlow',
      'Workflow Builder',
      'Advanced Segmentation',
      'Broadcast Campaigns'
    ],
    closing: [
      'Sales Pipeline',
      'CRM System',
      'Meeting Scheduler',
      'Payment Processing',
      'Digital Proposals',
      'E-Signature Integration'
    ]
  },

  stats: [
    { value: '50,000+', label: 'Active Users', icon: '👥' },
    { value: '500M+', label: 'Messages/Month', icon: '💬' },
    { value: '25+', label: 'Integrations', icon: '🔗' },
    { value: '99.9%', label: 'Uptime', icon: '⚡' }
  ],

  testimonials: [
    {
      text: "We went from 5 leads/day to 50+ using WellPlan's automation. It's a game-changer.",
      author: 'Sarah Chen',
      title: 'Founder, Digital Agency',
      company: '50+ team',
      stars: 5
    },
    {
      text: "The lead nurturing flows saved us $50k/month in tools. No comparison.",
      author: 'Marcus Johnson',
      title: 'VP Sales, SaaS Company',
      company: '200+ team',
      stars: 5
    },
    {
      text: "Implementation was painless. We had our entire funnel running in 48 hours.",
      author: 'Emma Rodriguez',
      title: 'CEO, Coaching Business',
      company: '5 person team',
      stars: 5
    },
    {
      text: "Best investment we made. Replaced 7 different tools with one platform.",
      author: 'David Kim',
      title: 'Operations Manager',
      company: 'E-commerce Brand',
      stars: 5
    }
  ],

  caseStudies: [
    {
      title: 'Digital Agency: 3x Lead Growth',
      company: 'GrowthCo Digital',
      result: '300% more leads in 90 days',
      metric: 'From 50 → 200 qualified leads/month',
      toolsUsed: ['Landing Pages', 'Email Sequences', 'Lead Scoring']
    },
    {
      title: 'SaaS: 40% Faster Sales Cycle',
      company: 'CloudTech Inc',
      result: '40% reduction in sales cycle',
      metric: '60 days → 36 days average',
      toolsUsed: ['SMS Automation', 'CRM', 'Sales Pipeline']
    },
    {
      title: 'Coaching: 10x Revenue in 6 Months',
      company: 'Elite Coaching Academy',
      result: '$50k → $500k annual revenue',
      metric: '10x growth with same team',
      toolsUsed: ['Chatbots', 'Email Nurturing', 'Booking']
    }
  ],

  pricing: [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      desc: 'Perfect for growing businesses',
      features: [
        'All 3 objectives included',
        'Up to 5,000 contacts',
        'Basic automations',
        'Email & SMS',
        'Standard support'
      ],
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      desc: 'For scaling teams',
      features: [
        'All Starter features',
        'Up to 50,000 contacts',
        'Advanced workflows',
        'AI AgentFlow',
        'Priority support',
        'API access'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact sales',
      desc: 'For large organizations',
      features: [
        'Unlimited everything',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
        '24/7 phone support',
        'Custom training'
      ],
      cta: 'Talk to Sales'
    }
  ],

  faq: [
    { q: 'How long to set up?', a: 'Most users are live in under 30 minutes. We provide setup guidance and templates.' },
    { q: 'Can I import my existing leads?', a: 'Yes, bulk import via CSV or API. We handle all data migration.' },
    { q: 'What integrations do you support?', a: '25+ integrations including Stripe, Zapier, webhooks, and more.' },
    { q: 'Is it GDPR compliant?', a: 'Yes, fully GDPR, CCPA, and SOC 2 Type II compliant.' },
    { q: 'Do you offer templates?', a: 'Yes, 50+ pre-built templates for landing pages, emails, and workflows.' },
    { q: 'What\'s your support like?', a: 'Email, chat, and phone support. Enterprise gets 24/7 dedicated support.' }
  ]
};

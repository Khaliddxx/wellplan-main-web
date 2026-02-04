export interface Integration {
  slug: string
  name: string
  category: string
  icon: string
  description: string
  features?: string[]
  useCases?: string[]
  pricing?: {
    free?: string
    paid?: string
  }
  comingSoon?: boolean
}

export const integrations: Integration[] = [
  // Featured - Full Details
  {
    slug: 'whatsapp',
    name: 'WhatsApp',
    category: 'Messaging',
    icon: '💬',
    description: 'Connect your WhatsApp Business account to WellPlan for seamless messaging and automation.',
    features: [
      'Two-way messaging',
      'Auto-replies and smart responses',
      'Message templates',
      'Group management',
      'Media sharing (images, videos, documents)',
      'Status updates automation',
      'Contact sync',
      'Message analytics'
    ],
    useCases: [
      'Send daily health reminders to clients',
      'Automate appointment confirmations',
      'Share workout plans and meal guides',
      'Conduct group coaching sessions',
      'Collect feedback via surveys'
    ],
    pricing: {
      free: 'Up to 1,000 messages/month',
      paid: 'Starting at $29/mo for unlimited messaging'
    }
  },
  {
    slug: 'instagram',
    name: 'Instagram',
    category: 'Social Media',
    icon: '📸',
    description: 'Integrate Instagram to share content, track engagement, and grow your wellness community.',
    features: [
      'Post scheduling',
      'Story automation',
      'DM management',
      'Comment moderation',
      'Analytics dashboard',
      'Hashtag optimization',
      'Influencer tracking',
      'Reels automation'
    ],
    useCases: [
      'Schedule motivational posts for your fitness community',
      'Auto-respond to common DM questions',
      'Track engagement on wellness content',
      'Run challenges with automated updates',
      'Showcase client transformations'
    ],
    pricing: {
      free: 'Basic posting and analytics',
      paid: 'Starting at $19/mo for advanced automation'
    }
  },
  
  // Messaging Platforms
  {
    slug: 'telegram',
    name: 'Telegram',
    category: 'Messaging',
    icon: '✈️',
    description: 'Leverage Telegram bots for automated conversations and community management.'
  },
  {
    slug: 'facebook-messenger',
    name: 'Facebook Messenger',
    category: 'Messaging',
    icon: '💙',
    description: 'Connect with clients via Facebook Messenger with AI-powered responses.'
  },
  {
    slug: 'wechat',
    name: 'WeChat',
    category: 'Messaging',
    icon: '💚',
    description: 'Reach Chinese audiences with WeChat integration for health coaching.'
  },
  {
    slug: 'sms',
    name: 'SMS',
    category: 'Messaging',
    icon: '📱',
    description: 'Send text message reminders and updates directly to clients\' phones.'
  },
  {
    slug: 'slack',
    name: 'Slack',
    category: 'Messaging',
    icon: '💼',
    description: 'Integrate with Slack workspaces for team wellness programs.'
  },
  {
    slug: 'discord',
    name: 'Discord',
    category: 'Messaging',
    icon: '🎮',
    description: 'Build wellness communities on Discord with automated bot features.'
  },
  
  // CRM & Sales
  {
    slug: 'salesforce',
    name: 'Salesforce',
    category: 'CRM',
    icon: '☁️',
    description: 'Sync client data with Salesforce for comprehensive relationship management.'
  },
  {
    slug: 'hubspot',
    name: 'HubSpot',
    category: 'CRM',
    icon: '🧲',
    description: 'Connect HubSpot CRM to track leads and manage marketing campaigns.'
  },
  {
    slug: 'pipedrive',
    name: 'Pipedrive',
    category: 'CRM',
    icon: '🔄',
    description: 'Manage sales pipelines with Pipedrive integration.'
  },
  {
    slug: 'zendesk',
    name: 'Zendesk',
    category: 'Support',
    icon: '🎧',
    description: 'Provide customer support through Zendesk ticketing system.'
  },
  {
    slug: 'intercom',
    name: 'Intercom',
    category: 'Support',
    icon: '💬',
    description: 'Live chat and customer messaging with Intercom.'
  },
  
  // Email Marketing
  {
    slug: 'mailchimp',
    name: 'Mailchimp',
    category: 'Email Marketing',
    icon: '🐵',
    description: 'Run email campaigns and newsletters with Mailchimp.'
  },
  {
    slug: 'sendgrid',
    name: 'SendGrid',
    category: 'Email Marketing',
    icon: '📧',
    description: 'Transactional and marketing emails via SendGrid.'
  },
  {
    slug: 'klaviyo',
    name: 'Klaviyo',
    category: 'Email Marketing',
    icon: '📬',
    description: 'E-commerce email automation with Klaviyo.'
  },
  
  // Calendar & Scheduling
  {
    slug: 'google-calendar',
    name: 'Google Calendar',
    category: 'Calendar',
    icon: '📅',
    description: 'Sync appointments and events with Google Calendar.'
  },
  {
    slug: 'calendly',
    name: 'Calendly',
    category: 'Scheduling',
    icon: '🗓️',
    description: 'Automate appointment booking with Calendly.'
  },
  {
    slug: 'outlook',
    name: 'Outlook',
    category: 'Calendar',
    icon: '📆',
    description: 'Microsoft Outlook calendar and email integration.'
  },
  
  // Payment & E-commerce
  {
    slug: 'stripe',
    name: 'Stripe',
    category: 'Payments',
    icon: '💳',
    description: 'Accept payments and manage subscriptions with Stripe.'
  },
  {
    slug: 'paypal',
    name: 'PayPal',
    category: 'Payments',
    icon: '💰',
    description: 'Process payments securely through PayPal.'
  },
  {
    slug: 'shopify',
    name: 'Shopify',
    category: 'E-commerce',
    icon: '🛍️',
    description: 'Sell wellness products through Shopify stores.'
  },
  {
    slug: 'woocommerce',
    name: 'WooCommerce',
    category: 'E-commerce',
    icon: '🛒',
    description: 'WordPress e-commerce integration.'
  },
  
  // Health & Fitness Platforms
  {
    slug: 'apple-health',
    name: 'Apple Health',
    category: 'Health',
    icon: '🍎',
    description: 'Sync health data from Apple Health app.'
  },
  {
    slug: 'google-fit',
    name: 'Google Fit',
    category: 'Health',
    icon: '🏃',
    description: 'Track fitness metrics with Google Fit.'
  },
  {
    slug: 'fitbit',
    name: 'Fitbit',
    category: 'Wearables',
    icon: '⌚',
    description: 'Connect Fitbit devices for activity tracking.'
  },
  {
    slug: 'strava',
    name: 'Strava',
    category: 'Fitness',
    icon: '🚴',
    description: 'Import workout data from Strava.'
  },
  {
    slug: 'myfitnesspal',
    name: 'MyFitnessPal',
    category: 'Nutrition',
    icon: '🥗',
    description: 'Track nutrition and calorie intake.'
  },
  {
    slug: 'withings',
    name: 'Withings',
    category: 'Wearables',
    icon: '⚖️',
    description: 'Smart scales and health devices integration.'
  },
  
  // Productivity & Project Management
  {
    slug: 'notion',
    name: 'Notion',
    category: 'Productivity',
    icon: '📝',
    description: 'Organize wellness plans in Notion workspaces.'
  },
  {
    slug: 'trello',
    name: 'Trello',
    category: 'Project Management',
    icon: '📋',
    description: 'Manage projects with Trello boards.'
  },
  {
    slug: 'asana',
    name: 'Asana',
    category: 'Project Management',
    icon: '✅',
    description: 'Task and project tracking with Asana.'
  },
  {
    slug: 'monday',
    name: 'Monday.com',
    category: 'Project Management',
    icon: '📊',
    description: 'Visual project management platform.'
  },
  {
    slug: 'airtable',
    name: 'Airtable',
    category: 'Database',
    icon: '🗃️',
    description: 'Flexible database and spreadsheet hybrid.'
  },
  
  // Analytics & Tracking
  {
    slug: 'google-analytics',
    name: 'Google Analytics',
    category: 'Analytics',
    icon: '📈',
    description: 'Track website and app analytics.'
  },
  {
    slug: 'mixpanel',
    name: 'Mixpanel',
    category: 'Analytics',
    icon: '📉',
    description: 'Product analytics and user behavior tracking.'
  },
  {
    slug: 'segment',
    name: 'Segment',
    category: 'Analytics',
    icon: '🔀',
    description: 'Customer data platform for analytics.'
  },
  
  // Video & Communication
  {
    slug: 'zoom',
    name: 'Zoom',
    category: 'Video',
    icon: '🎥',
    description: 'Host virtual coaching sessions via Zoom.'
  },
  {
    slug: 'teams',
    name: 'Microsoft Teams',
    category: 'Video',
    icon: '👥',
    description: 'Team collaboration and video meetings.'
  },
  {
    slug: 'meet',
    name: 'Google Meet',
    category: 'Video',
    icon: '📹',
    description: 'Video conferencing with Google Meet.'
  },
  
  // Storage & Files
  {
    slug: 'google-drive',
    name: 'Google Drive',
    category: 'Storage',
    icon: '📁',
    description: 'Store and share files via Google Drive.'
  },
  {
    slug: 'dropbox',
    name: 'Dropbox',
    category: 'Storage',
    icon: '📦',
    description: 'Cloud storage and file sharing.'
  },
  {
    slug: 'onedrive',
    name: 'OneDrive',
    category: 'Storage',
    icon: '☁️',
    description: 'Microsoft cloud storage solution.'
  },
  
  // Developer & APIs
  {
    slug: 'zapier',
    name: 'Zapier',
    category: 'Automation',
    icon: '⚡',
    description: 'Connect WellPlan with 5,000+ apps via Zapier.'
  },
  {
    slug: 'make',
    name: 'Make (Integromat)',
    category: 'Automation',
    icon: '🔧',
    description: 'Advanced workflow automation.'
  },
  {
    slug: 'webhook',
    name: 'Webhooks',
    category: 'Developer',
    icon: '🔗',
    description: 'Custom integrations via webhooks.'
  },
  {
    slug: 'rest-api',
    name: 'REST API',
    category: 'Developer',
    icon: '🔌',
    description: 'Full API access for custom development.'
  },
  
  // Coming Soon
  {
    slug: 'tiktok',
    name: 'TikTok',
    category: 'Social Media',
    icon: '🎵',
    description: 'Reach younger audiences with TikTok integration.',
    comingSoon: true
  },
  {
    slug: 'linkedin',
    name: 'LinkedIn',
    category: 'Social Media',
    icon: '💼',
    description: 'Professional networking and content sharing.',
    comingSoon: true
  },
  {
    slug: 'twitter',
    name: 'Twitter/X',
    category: 'Social Media',
    icon: '🐦',
    description: 'Share updates and engage on Twitter.',
    comingSoon: true
  },
  {
    slug: 'youtube',
    name: 'YouTube',
    category: 'Video',
    icon: '📺',
    description: 'Share video content and track channel growth.',
    comingSoon: true
  }
]

export const categories = [
  'All',
  'Messaging',
  'Social Media',
  'CRM',
  'Email Marketing',
  'Calendar',
  'Payments',
  'Health',
  'Productivity',
  'Analytics',
  'Video',
  'Developer'
]

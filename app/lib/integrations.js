export const integrations = [
  // Messaging (8)
  { slug: 'whatsapp', name: 'WhatsApp', category: 'Messaging', icon: '📱', color: 'bg-green-500', description: 'Official WhatsApp Business API integration', features: ['Two-way messaging', 'Auto-replies', 'Group management', 'Media sharing'] },
  { slug: 'facebook-messenger', name: 'Facebook Messenger', category: 'Messaging', icon: '💙', color: 'bg-blue-600', description: 'Connect with customers on Messenger' },
  { slug: 'telegram', name: 'Telegram', category: 'Messaging', icon: '✈️', color: 'bg-blue-400', description: 'Telegram bot integration' },
  { slug: 'wechat', name: 'WeChat', category: 'Messaging', icon: '💚', color: 'bg-green-600', description: 'Reach Chinese audiences' },
  { slug: 'viber', name: 'Viber', category: 'Messaging', icon: '💜', color: 'bg-purple-500', description: 'Viber Business Messages' },
  { slug: 'line', name: 'LINE', category: 'Messaging', icon: '💬', color: 'bg-green-500', description: 'Popular in Japan and Southeast Asia' },
  { slug: 'slack', name: 'Slack', category: 'Messaging', icon: '💼', color: 'bg-purple-600', description: 'Team communication integration' },
  { slug: 'discord', name: 'Discord', category: 'Messaging', icon: '🎮', color: 'bg-indigo-600', description: 'Community server integration' },

  // Social Media (6)
  { slug: 'instagram', name: 'Instagram', category: 'Social', icon: '📸', color: 'bg-pink-500', description: 'Instagram DMs and comments', features: ['Direct messages', 'Story replies', 'Comment management', 'Post scheduling'] },
  { slug: 'facebook', name: 'Facebook', category: 'Social', icon: '👥', color: 'bg-blue-600', description: 'Facebook Pages and Groups' },
  { slug: 'twitter', name: 'Twitter/X', category: 'Social', icon: '🐦', color: 'bg-black', description: 'Twitter DMs and mentions' },
  { slug: 'linkedin', name: 'LinkedIn', category: 'Social', icon: '💼', color: 'bg-blue-700', description: 'Professional networking' },
  { slug: 'tiktok', name: 'TikTok', category: 'Social', icon: '🎵', color: 'bg-black', description: 'TikTok Business integration' },
  { slug: 'youtube', name: 'YouTube', category: 'Social', icon: '📺', color: 'bg-red-600', description: 'YouTube comments and community' },

  // CRM (8)
  { slug: 'salesforce', name: 'Salesforce', category: 'CRM', icon: '☁️', color: 'bg-blue-600', description: 'World\'s #1 CRM platform' },
  { slug: 'hubspot', name: 'HubSpot', category: 'CRM', icon: '🎯', color: 'bg-orange-500', description: 'Inbound marketing & sales' },
  { slug: 'pipedrive', name: 'Pipedrive', category: 'CRM', icon: '🔄', color: 'bg-green-600', description: 'Sales pipeline management' },
  { slug: 'zoho', name: 'Zoho CRM', category: 'CRM', icon: '📊', color: 'bg-red-600', description: 'All-in-one CRM suite' },
  { slug: 'zendesk', name: 'Zendesk', category: 'CRM', icon: '🎧', color: 'bg-green-700', description: 'Customer service platform' },
  { slug: 'intercom', name: 'Intercom', category: 'CRM', icon: '💬', color: 'bg-blue-500', description: 'Customer messaging platform' },
  { slug: 'freshworks', name: 'Freshworks', category: 'CRM', icon: '🌟', color: 'bg-teal-600', description: 'Freshsales CRM' },
  { slug: 'microsoft-dynamics', name: 'Microsoft Dynamics', category: 'CRM', icon: '🪟', color: 'bg-blue-600', description: 'Enterprise CRM' },

  // Email (6)
  { slug: 'gmail', name: 'Gmail', category: 'Email', icon: '✉️', color: 'bg-red-500', description: 'Google email integration' },
  { slug: 'outlook', name: 'Outlook', category: 'Email', icon: '📧', color: 'bg-blue-600', description: 'Microsoft email' },
  { slug: 'sendgrid', name: 'SendGrid', category: 'Email', icon: '📨', color: 'bg-blue-500', description: 'Transactional emails' },
  { slug: 'mailchimp', name: 'Mailchimp', category: 'Email', icon: '🐵', color: 'bg-yellow-500', description: 'Email marketing platform' },
  { slug: 'klaviyo', name: 'Klaviyo', category: 'Email', icon: '📬', color: 'bg-green-600', description: 'E-commerce email marketing' },
  { slug: 'mailgun', name: 'Mailgun', category: 'Email', icon: '🔫', color: 'bg-red-600', description: 'Developer email API' },

  // SMS (4)
  { slug: 'twilio', name: 'Twilio', category: 'SMS', icon: '☎️', color: 'bg-red-600', description: 'SMS and voice API' },
  { slug: 'messagebird', name: 'MessageBird', category: 'SMS', icon: '🐦', color: 'bg-blue-500', description: 'Omnichannel messaging' },
  { slug: 'vonage', name: 'Vonage', category: 'SMS', icon: '📱', color: 'bg-black', description: 'SMS and voice' },
  { slug: 'plivo', name: 'Plivo', category: 'SMS', icon: '📞', color: 'bg-green-600', description: 'Cloud communications' },

  // Automation (5)
  { slug: 'zapier', name: 'Zapier', category: 'Automation', icon: '⚡', color: 'bg-orange-600', description: 'Connect 5000+ apps' },
  { slug: 'make', name: 'Make (Integromat)', category: 'Automation', icon: '🔧', color: 'bg-purple-600', description: 'Visual automation' },
  { slug: 'n8n', name: 'n8n', category: 'Automation', icon: '🔀', color: 'bg-pink-600', description: 'Open-source automation' },
  { slug: 'ifttt', name: 'IFTTT', category: 'Automation', icon: '🔄', color: 'bg-blue-600', description: 'If This Then That' },
  { slug: 'workato', name: 'Workato', category: 'Automation', icon: '⚙️', color: 'bg-indigo-600', description: 'Enterprise automation' },

  // E-Commerce (5)
  { slug: 'shopify', name: 'Shopify', category: 'E-Commerce', icon: '🛒', color: 'bg-green-600', description: 'E-commerce platform' },
  { slug: 'woocommerce', name: 'WooCommerce', category: 'E-Commerce', icon: '🛍️', color: 'bg-purple-600', description: 'WordPress e-commerce' },
  { slug: 'magento', name: 'Magento', category: 'E-Commerce', icon: '🏪', color: 'bg-orange-600', description: 'Adobe Commerce' },
  { slug: 'bigcommerce', name: 'BigCommerce', category: 'E-Commerce', icon: '📦', color: 'bg-blue-600', description: 'Enterprise e-commerce' },
  { slug: 'prestashop', name: 'PrestaShop', category: 'E-Commerce', icon: '🛒', color: 'bg-blue-500', description: 'Open-source e-commerce' },

  // Payments (4)
  { slug: 'stripe', name: 'Stripe', category: 'Payments', icon: '💳', color: 'bg-blue-600', description: 'Online payment processing' },
  { slug: 'paypal', name: 'PayPal', category: 'Payments', icon: '💰', color: 'bg-blue-500', description: 'Global payment platform' },
  { slug: 'square', name: 'Square', category: 'Payments', icon: '◾', color: 'bg-black', description: 'Payment and POS' },
  { slug: 'braintree', name: 'Braintree', category: 'Payments', icon: '🌳', color: 'bg-green-600', description: 'PayPal service' },

  // Productivity (5)
  { slug: 'google-sheets', name: 'Google Sheets', category: 'Productivity', icon: '📊', color: 'bg-green-500', description: 'Spreadsheet integration' },
  { slug: 'notion', name: 'Notion', category: 'Productivity', icon: '📝', color: 'bg-black', description: 'All-in-one workspace' },
  { slug: 'airtable', name: 'Airtable', category: 'Productivity', icon: '🗃️', color: 'bg-yellow-600', description: 'Database meets spreadsheet' },
  { slug: 'trello', name: 'Trello', category: 'Productivity', icon: '📋', color: 'bg-blue-600', description: 'Visual project management' },
  { slug: 'asana', name: 'Asana', category: 'Productivity', icon: '✅', color: 'bg-pink-600', description: 'Team task management' },

  // Custom (2)
  { slug: 'webhooks', name: 'Webhooks', category: 'Custom', icon: '🔌', color: 'bg-slate-600', description: 'Custom webhook integration' },
  { slug: 'rest-api', name: 'REST API', category: 'Custom', icon: '⚙️', color: 'bg-slate-700', description: 'Full API access' },
];

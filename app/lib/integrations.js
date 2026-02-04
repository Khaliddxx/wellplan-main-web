export const integrations = [
  // Messaging (8) - Real brand colors
  { slug: 'whatsapp', name: 'WhatsApp', category: 'Messaging', icon: '💬', brandColor: '#25D366', color: 'bg-[#25D366]', description: 'Official WhatsApp Business API integration', features: ['Two-way messaging', 'Auto-replies', 'Group management', 'Media sharing'] },
  { slug: 'facebook-messenger', name: 'Messenger', category: 'Messaging', icon: '💬', brandColor: '#0084FF', color: 'bg-[#0084FF]', description: 'Connect with customers on Messenger', features: ['Instant replies', 'Chatbots', 'Rich media', 'Persistent menu'] },
  { slug: 'telegram', name: 'Telegram', category: 'Messaging', icon: '✈️', brandColor: '#0088CC', color: 'bg-[#0088CC]', description: 'Telegram bot integration', features: ['Bot API', 'Channels', 'Groups', 'Inline mode'] },
  { slug: 'wechat', name: 'WeChat', category: 'Messaging', icon: '💚', brandColor: '#07C160', color: 'bg-[#07C160]', description: 'Reach Chinese audiences' },
  { slug: 'viber', name: 'Viber', category: 'Messaging', icon: '📱', brandColor: '#7360F2', color: 'bg-[#7360F2]', description: 'Viber Business Messages' },
  { slug: 'line', name: 'LINE', category: 'Messaging', icon: '💬', brandColor: '#00B900', color: 'bg-[#00B900]', description: 'Popular in Japan and Southeast Asia' },
  { slug: 'slack', name: 'Slack', category: 'Messaging', icon: '💼', brandColor: '#4A154B', color: 'bg-[#4A154B]', description: 'Team communication integration', features: ['Channels', 'DMs', 'Notifications', 'Workflows'] },
  { slug: 'discord', name: 'Discord', category: 'Messaging', icon: '🎮', brandColor: '#5865F2', color: 'bg-[#5865F2]', description: 'Community server integration' },

  // Social Media (6) - Real brand colors
  { slug: 'instagram', name: 'Instagram', category: 'Social', icon: '📸', brandColor: '#E4405F', color: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]', description: 'Instagram DMs and comments', features: ['Direct messages', 'Story replies', 'Comment management', 'Post scheduling'] },
  { slug: 'facebook', name: 'Facebook', category: 'Social', icon: '👥', brandColor: '#1877F2', color: 'bg-[#1877F2]', description: 'Facebook Pages and Groups', features: ['Page inbox', 'Comments', 'Leads', 'Ads'] },
  { slug: 'twitter', name: 'Twitter/X', category: 'Social', icon: '✖️', brandColor: '#000000', color: 'bg-black', description: 'Twitter DMs and mentions' },
  { slug: 'linkedin', name: 'LinkedIn', category: 'Social', icon: '💼', brandColor: '#0A66C2', color: 'bg-[#0A66C2]', description: 'Professional networking' },
  { slug: 'tiktok', name: 'TikTok', category: 'Social', icon: '🎵', brandColor: '#000000', color: 'bg-black', description: 'TikTok Business integration' },
  { slug: 'youtube', name: 'YouTube', category: 'Social', icon: '▶️', brandColor: '#FF0000', color: 'bg-[#FF0000]', description: 'YouTube comments and community' },

  // CRM (8) - Real brand colors
  { slug: 'salesforce', name: 'Salesforce', category: 'CRM', icon: '☁️', brandColor: '#00A1E0', color: 'bg-[#00A1E0]', description: 'World\'s #1 CRM platform' },
  { slug: 'hubspot', name: 'HubSpot', category: 'CRM', icon: '🟠', brandColor: '#FF7A59', color: 'bg-[#FF7A59]', description: 'Inbound marketing & sales', features: ['Contacts sync', 'Deals', 'Tasks', 'Automation'] },
  { slug: 'pipedrive', name: 'Pipedrive', category: 'CRM', icon: '🔄', brandColor: '#1A1A1A', color: 'bg-[#1A1A1A]', description: 'Sales pipeline management' },
  { slug: 'zoho', name: 'Zoho CRM', category: 'CRM', icon: '📊', brandColor: '#C8202B', color: 'bg-[#C8202B]', description: 'All-in-one CRM suite' },
  { slug: 'zendesk', name: 'Zendesk', category: 'CRM', icon: '🎧', brandColor: '#03363D', color: 'bg-[#03363D]', description: 'Customer service platform' },
  { slug: 'intercom', name: 'Intercom', category: 'CRM', icon: '💬', brandColor: '#1F8DED', color: 'bg-[#1F8DED]', description: 'Customer messaging platform' },
  { slug: 'freshworks', name: 'Freshworks', category: 'CRM', icon: '🌟', brandColor: '#F26522', color: 'bg-[#F26522]', description: 'Freshsales CRM' },
  { slug: 'microsoft-dynamics', name: 'Dynamics 365', category: 'CRM', icon: '🪟', brandColor: '#002050', color: 'bg-[#002050]', description: 'Enterprise CRM' },

  // Email (6) - Real brand colors
  { slug: 'gmail', name: 'Gmail', category: 'Email', icon: '✉️', brandColor: '#EA4335', color: 'bg-[#EA4335]', description: 'Google email integration', features: ['Two-way sync', 'Tracking', 'Templates', 'Scheduling'] },
  { slug: 'outlook', name: 'Outlook', category: 'Email', icon: '📧', brandColor: '#0078D4', color: 'bg-[#0078D4]', description: 'Microsoft email' },
  { slug: 'sendgrid', name: 'SendGrid', category: 'Email', icon: '📨', brandColor: '#1A82E2', color: 'bg-[#1A82E2]', description: 'Transactional emails' },
  { slug: 'mailchimp', name: 'Mailchimp', category: 'Email', icon: '🐵', brandColor: '#FFE01B', color: 'bg-[#FFE01B]', description: 'Email marketing platform' },
  { slug: 'klaviyo', name: 'Klaviyo', category: 'Email', icon: '📬', brandColor: '#000000', color: 'bg-black', description: 'E-commerce email marketing' },
  { slug: 'mailgun', name: 'Mailgun', category: 'Email', icon: '📩', brandColor: '#F06B66', color: 'bg-[#F06B66]', description: 'Developer email API' },

  // SMS (4) - Real brand colors
  { slug: 'twilio', name: 'Twilio', category: 'SMS', icon: '☎️', brandColor: '#F22F46', color: 'bg-[#F22F46]', description: 'SMS and voice API', features: ['SMS', 'Voice', 'WhatsApp', 'Video'] },
  { slug: 'messagebird', name: 'MessageBird', category: 'SMS', icon: '🐦', brandColor: '#2481D7', color: 'bg-[#2481D7]', description: 'Omnichannel messaging' },
  { slug: 'vonage', name: 'Vonage', category: 'SMS', icon: '📱', brandColor: '#000000', color: 'bg-black', description: 'SMS and voice' },
  { slug: 'plivo', name: 'Plivo', category: 'SMS', icon: '📞', brandColor: '#59C36A', color: 'bg-[#59C36A]', description: 'Cloud communications' },

  // Automation (5) - Real brand colors
  { slug: 'zapier', name: 'Zapier', category: 'Automation', icon: '⚡', brandColor: '#FF4A00', color: 'bg-[#FF4A00]', description: 'Connect 5000+ apps', features: ['Zaps', 'Multi-step', 'Filters', 'Paths'] },
  { slug: 'make', name: 'Make', category: 'Automation', icon: '🔧', brandColor: '#6D00CC', color: 'bg-[#6D00CC]', description: 'Visual automation (Integromat)' },
  { slug: 'n8n', name: 'n8n', category: 'Automation', icon: '🔀', brandColor: '#EA4B71', color: 'bg-[#EA4B71]', description: 'Open-source automation' },
  { slug: 'ifttt', name: 'IFTTT', category: 'Automation', icon: '🔄', brandColor: '#000000', color: 'bg-black', description: 'If This Then That' },
  { slug: 'workato', name: 'Workato', category: 'Automation', icon: '⚙️', brandColor: '#3C4EE8', color: 'bg-[#3C4EE8]', description: 'Enterprise automation' },

  // E-Commerce (5) - Real brand colors
  { slug: 'shopify', name: 'Shopify', category: 'E-Commerce', icon: '🛒', brandColor: '#96BF48', color: 'bg-[#96BF48]', description: 'E-commerce platform', features: ['Orders', 'Customers', 'Products', 'Abandoned carts'] },
  { slug: 'woocommerce', name: 'WooCommerce', category: 'E-Commerce', icon: '🛍️', brandColor: '#96588A', color: 'bg-[#96588A]', description: 'WordPress e-commerce' },
  { slug: 'magento', name: 'Magento', category: 'E-Commerce', icon: '🏪', brandColor: '#F26322', color: 'bg-[#F26322]', description: 'Adobe Commerce' },
  { slug: 'bigcommerce', name: 'BigCommerce', category: 'E-Commerce', icon: '📦', brandColor: '#121118', color: 'bg-[#121118]', description: 'Enterprise e-commerce' },
  { slug: 'prestashop', name: 'PrestaShop', category: 'E-Commerce', icon: '🛒', brandColor: '#DF0067', color: 'bg-[#DF0067]', description: 'Open-source e-commerce' },

  // Payments (4) - Real brand colors
  { slug: 'stripe', name: 'Stripe', category: 'Payments', icon: '💳', brandColor: '#635BFF', color: 'bg-[#635BFF]', description: 'Online payment processing', features: ['Payments', 'Subscriptions', 'Invoices', 'Connect'] },
  { slug: 'paypal', name: 'PayPal', category: 'Payments', icon: '💰', brandColor: '#003087', color: 'bg-[#003087]', description: 'Global payment platform' },
  { slug: 'square', name: 'Square', category: 'Payments', icon: '◾', brandColor: '#000000', color: 'bg-black', description: 'Payment and POS' },
  { slug: 'braintree', name: 'Braintree', category: 'Payments', icon: '🌳', brandColor: '#000000', color: 'bg-black', description: 'PayPal service' },

  // Productivity (5) - Real brand colors
  { slug: 'google-sheets', name: 'Google Sheets', category: 'Productivity', icon: '📊', brandColor: '#34A853', color: 'bg-[#34A853]', description: 'Spreadsheet integration', features: ['Read/write', 'Formulas', 'Triggers', 'Bulk import'] },
  { slug: 'notion', name: 'Notion', category: 'Productivity', icon: '📝', brandColor: '#000000', color: 'bg-black', description: 'All-in-one workspace' },
  { slug: 'airtable', name: 'Airtable', category: 'Productivity', icon: '🗃️', brandColor: '#18BFFF', color: 'bg-[#18BFFF]', description: 'Database meets spreadsheet' },
  { slug: 'trello', name: 'Trello', category: 'Productivity', icon: '📋', brandColor: '#0052CC', color: 'bg-[#0052CC]', description: 'Visual project management' },
  { slug: 'asana', name: 'Asana', category: 'Productivity', icon: '✅', brandColor: '#F06A6A', color: 'bg-[#F06A6A]', description: 'Team task management' },

  // Custom (2)
  { slug: 'webhooks', name: 'Webhooks', category: 'Custom', icon: '🔌', brandColor: '#6B7280', color: 'bg-gray-500', description: 'Custom webhook integration' },
  { slug: 'rest-api', name: 'REST API', category: 'Custom', icon: '⚙️', brandColor: '#374151', color: 'bg-gray-700', description: 'Full API access' },
];

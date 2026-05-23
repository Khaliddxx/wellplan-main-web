export const comparisons = {
  hubspot: {
    competitorName: 'HubSpot',
    competitorTagline: 'Enterprise CRM with high ceiling and a high price tag.',
    summary:
      'HubSpot is the enterprise leader in CRM and marketing automation — but its pricing and complexity put it out of reach for most agencies, coaches, and SMBs. WellPlan delivers the same essential capabilities (CRM, email, SMS, automation, AI) plus first-class WhatsApp and Instagram DM, at a fraction of the cost and complexity.',
    heroPitch:
      'All the marketing automation you need — without the HubSpot bill.',
    rows: [
      { feature: 'Starting price (paid)', wellplan: '$97/mo', competitor: '$890/mo (Pro)' },
      { feature: 'Free trial', wellplan: '14 days, no card', competitor: 'Free CRM, paid features locked' },
      { feature: 'Unlimited contacts', wellplan: 'Yes — all plans', competitor: 'Contact-tier pricing' },
      { feature: 'WhatsApp Business API', wellplan: 'Native', competitor: 'Add-on / 3rd-party' },
      { feature: 'Instagram DM', wellplan: 'Native', competitor: 'Limited / 3rd-party' },
      { feature: 'AI chatbot', wellplan: 'Included', competitor: 'Higher tier only' },
      { feature: 'AI voice agent', wellplan: 'Included', competitor: 'Not offered' },
      { feature: 'White-label', wellplan: 'Yes (Agency plan)', competitor: 'Not offered' },
      { feature: 'Setup time', wellplan: 'Hours', competitor: 'Weeks (Onboarding fee)' },
      { feature: 'Onboarding fee', wellplan: '$0', competitor: '$3,000+ (Pro/Enterprise)' },
    ],
    whenToChoose: [
      'You\'re an agency, coach, or SMB with under 500 employees',
      'You communicate with leads on WhatsApp, Instagram, or SMS (not just email)',
      'You want one platform instead of stitching 5+ tools together',
      'You need to be live in days, not months',
    ],
    whenToChooseCompetitor: [
      'You\'re a 1,000+ employee enterprise with a dedicated RevOps team',
      'You need deep integrations with Salesforce, Marketo, or other enterprise tools',
      'Your budget for marketing automation is $30k+/year',
    ],
  },
  gohighlevel: {
    competitorName: 'GoHighLevel',
    competitorTagline: 'Powerful toolbox — but setup, support, and maintenance are on you.',
    summary:
      'WellPlan and GoHighLevel cover similar territory: CRM, automation, funnels, WhatsApp, SMS, and AI. The honest difference: WellPlan ships configured, with workflows pre-built, onboarding included, and our team behind you. GoHighLevel hands you a toolbox and expects you to learn it.',
    heroPitch:
      'All the power. Without the learning curve.',
    rows: [
      { feature: 'Onboarding included', wellplan: 'Yes — done-for-you', competitor: 'DIY' },
      { feature: 'Setup support', wellplan: 'Included', competitor: 'Self-serve / paid add-ons' },
      { feature: 'Pre-built workflows', wellplan: 'Yes — ready to ship', competitor: 'Build your own' },
      { feature: 'Time to launch', wellplan: 'Hours', competitor: 'Weeks of configuration' },
      { feature: 'WhatsApp / Instagram setup', wellplan: 'Configured', competitor: 'You configure' },
      { feature: 'EU & MENA compliance', wellplan: 'Pre-configured', competitor: 'You configure' },
      { feature: 'Dedicated success manager', wellplan: 'Business+', competitor: 'No' },
      { feature: 'Price', wellplan: 'From $97/mo', competitor: '$97/mo (Starter) – $497/mo (Agency)' },
    ],
    whenToChoose: [
      'You want a fully-featured marketing platform without learning every detail yourself',
      'You\'re a coach, consultant, or SMB without a technical team',
      'You want pre-built workflows for WhatsApp, Instagram, email, and SMS',
      'You operate in Europe or MENA and need regional defaults out of the box',
    ],
    whenToChooseCompetitor: [
      'You\'re a marketing agency planning to white-label and resell — and you have time to learn',
      'You want to build everything from scratch yourself',
      'You don\'t need onboarding or hands-on support',
    ],
  },
  activecampaign: {
    competitorName: 'ActiveCampaign',
    competitorTagline: 'Strong email automation — light on everything else.',
    summary:
      'ActiveCampaign is a great email marketing platform that has been adding CRM features. WellPlan is an all-in-one CRM and marketing platform built from the ground up for omnichannel — WhatsApp, Instagram, SMS, email, and voice in one inbox.',
    heroPitch:
      'Email + WhatsApp + Instagram + SMS + Voice. Not just email.',
    rows: [
      { feature: 'Email marketing', wellplan: 'Full-featured', competitor: 'Full-featured' },
      { feature: 'WhatsApp Business API', wellplan: 'Native', competitor: 'Not offered' },
      { feature: 'Instagram DM', wellplan: 'Native', competitor: 'Not offered' },
      { feature: 'SMS marketing', wellplan: 'Native', competitor: 'Add-on' },
      { feature: 'AI voice agent', wellplan: 'Included', competitor: 'Not offered' },
      { feature: 'CRM pipeline', wellplan: 'Visual + AI lead scoring', competitor: 'Visual pipeline' },
      { feature: 'Calendar booking', wellplan: 'Native', competitor: '3rd-party only' },
      { feature: 'Landing pages & funnels', wellplan: 'Native AI builder', competitor: 'Basic templates' },
      { feature: 'White-label', wellplan: 'Yes (Agency)', competitor: 'Not offered' },
      { feature: 'Starting price', wellplan: '$97/mo', competitor: '$15/mo (Lite, no CRM)' },
    ],
    whenToChoose: [
      'You message customers on WhatsApp, Instagram, or SMS — not just email',
      'You want one platform for marketing, sales, and customer support',
      'You need a built-in calendar booking, pipeline, and AI lead scoring',
      'You want a built-in funnel builder',
    ],
    whenToChooseCompetitor: [
      'Your business is 100% email-based and you don\'t plan to add other channels',
      'You only need email automation and don\'t need a full CRM',
    ],
  },
};

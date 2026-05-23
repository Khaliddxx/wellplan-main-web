// Glossary of CRM, marketing automation, lead generation, messaging, and AI terms.
// Definitions reflect industry-standard meaning. Avoid fabricated statistics.

export const glossaryCategories = [
  { id: 'messaging', label: 'Messaging' },
  { id: 'crm-sales', label: 'CRM & Sales' },
  { id: 'marketing-automation', label: 'Marketing Automation' },
  { id: 'lead-generation', label: 'Lead Generation' },
  { id: 'email-sms', label: 'Email & SMS' },
  { id: 'ai', label: 'AI' },
];

export const glossaryTerms = [
  // ---------- Messaging ----------
  {
    slug: 'whatsapp-business-api',
    term: 'WhatsApp Business API',
    category: 'Messaging',
    shortDefinition:
      'A Meta-owned messaging API that lets medium and large businesses send and receive WhatsApp messages programmatically at scale.',
    definition:
      'The WhatsApp Business API (officially the WhatsApp Business Platform) is the cloud and on-premise API offered by Meta for businesses that need to handle WhatsApp conversations at scale. Unlike the consumer WhatsApp app or the small-business WhatsApp Business app, the API has no user interface of its own — businesses access it through a Business Solution Provider or directly via Meta Cloud API, and connect it to a CRM, helpdesk, or marketing platform. It supports template messages, two-way conversations, media, and webhooks.',
    example:
      'A clinic uses the WhatsApp Business API to send appointment reminders from a verified business profile. When a patient replies, the message is routed into the team inbox where any agent can respond.',
    relatedToWellPlan:
      'WellPlan connects to the WhatsApp Business API so teams can send template messages, run automations, and reply from a shared inbox without juggling Meta\'s tooling directly. See the [WhatsApp integration](/integrations/whatsapp) for setup details.',
    relatedPages: [
      { label: 'WhatsApp integration', href: '/integrations/whatsapp' },
      { label: 'WhatsApp CRM guide', href: '/resources/whatsapp-crm' },
    ],
    relatedTerms: ['business-solution-provider', 'message-template', 'session-window', 'opt-in'],
  },
  {
    slug: 'business-solution-provider',
    term: 'Business Solution Provider (BSP)',
    category: 'Messaging',
    shortDefinition:
      'A Meta-approved company authorized to provide WhatsApp Business API access and onboarding to other businesses.',
    definition:
      'A Business Solution Provider, or BSP, is a vendor approved by Meta to resell access to the WhatsApp Business Platform. BSPs handle the technical onboarding, phone-number registration, message-template approval, and billing of conversation-based pricing. They also typically provide value on top of the raw API — chat inboxes, automations, analytics, and integrations. Businesses can choose between a BSP-managed setup or going direct via the Meta Cloud API, depending on the team\'s technical capacity.',
    example:
      'A SaaS company chooses a BSP to register its WhatsApp number, get its first message templates approved, and integrate WhatsApp with its existing CRM in a few days rather than weeks.',
    relatedToWellPlan:
      'WellPlan works through approved BSP infrastructure so customers get a managed onboarding experience: number registration, template approval, and a ready-to-use [WhatsApp integration](/integrations/whatsapp) without dealing with Meta directly.',
    relatedPages: [
      { label: 'WhatsApp integration', href: '/integrations/whatsapp' },
      { label: 'Partner program', href: '/partners' },
    ],
    relatedTerms: ['whatsapp-business-api', 'message-template', 'opt-in'],
  },
  {
    slug: 'message-template',
    term: 'Message Template',
    category: 'Messaging',
    shortDefinition:
      'A pre-approved WhatsApp message format used to start conversations or message users outside the 24-hour session window.',
    definition:
      'A message template is a structured WhatsApp message — with placeholders for variables like name or order ID — that has been submitted to and approved by Meta before it can be sent. Templates are required when a business wants to initiate a conversation, re-engage a contact outside the 24-hour customer service window, or send notifications such as order updates, appointment reminders, or one-time passcodes. Templates fall into categories (marketing, utility, authentication) that affect pricing and policy.',
    example:
      'An e-commerce brand creates a utility template like "Hi {{1}}, your order {{2}} has shipped and will arrive on {{3}}." Once Meta approves it, the brand can send it to thousands of opted-in customers.',
    relatedToWellPlan:
      'Inside WellPlan you can draft, submit, and manage WhatsApp templates without leaving the platform, then trigger them from workflows. Read more on the [WhatsApp integration](/integrations/whatsapp) page.',
    relatedPages: [
      { label: 'WhatsApp integration', href: '/integrations/whatsapp' },
      { label: 'Marketing automation', href: '/features/nurturing' },
    ],
    relatedTerms: ['whatsapp-business-api', 'session-window', 'opt-in', 'business-solution-provider'],
  },
  {
    slug: 'opt-in',
    term: 'Opt-in',
    category: 'Messaging',
    shortDefinition:
      'A user\'s explicit permission to receive marketing or transactional messages from a business on a given channel.',
    definition:
      'Opt-in is the act of a contact giving clear, recorded consent to receive messages from a business — by checking a box on a form, replying with a keyword, scanning a QR code, or accepting at checkout. Channels like email (GDPR, CAN-SPAM), SMS (TCPA in the U.S.), and WhatsApp all require some form of opt-in, and platforms expect businesses to be able to prove when and how consent was captured. Without it, deliverability suffers and legal risk rises.',
    example:
      'A visitor downloads a lead magnet and checks a box that says "Send me product updates by email and WhatsApp." That timestamped record is the opt-in proof for both channels.',
    relatedToWellPlan:
      'WellPlan captures and stores opt-in evidence on every contact — source, timestamp, and channel — across forms, funnels, and chat widgets. See [lead capture](/features/capturing) for how consent is recorded.',
    relatedPages: [
      { label: 'Lead capture', href: '/features/capturing' },
      { label: 'WhatsApp integration', href: '/integrations/whatsapp' },
    ],
    relatedTerms: ['lead-capture-form', 'sms-marketing', 'whatsapp-business-api'],
  },
  {
    slug: 'session-window',
    term: 'Session Window (24-hour)',
    category: 'Messaging',
    shortDefinition:
      'A 24-hour period after a user messages your business in which you can reply freely on WhatsApp without using a template.',
    definition:
      'On the WhatsApp Business Platform, the 24-hour customer service window (or session window) opens each time a user sends an inbound message to a business. During those 24 hours, the business can send any text, media, or interactive message in reply without using a pre-approved template. Once the window closes, the business must use an approved template — usually a utility or marketing category — to re-initiate the conversation, and that send is billed differently.',
    example:
      'A customer messages a shop at 10 a.m. asking about sizing. The shop has until 10 a.m. the next day to reply with free-form messages. After that, they\'d need a template to follow up.',
    relatedToWellPlan:
      'WellPlan surfaces the remaining session time inside the inbox and switches the composer to template-only mode once the 24-hour window closes, helping teams stay compliant. See the [WhatsApp integration](/integrations/whatsapp).',
    relatedPages: [
      { label: 'WhatsApp integration', href: '/integrations/whatsapp' },
    ],
    relatedTerms: ['whatsapp-business-api', 'message-template', 'opt-in'],
  },
  {
    slug: 'omnichannel-messaging',
    term: 'Omnichannel Messaging',
    category: 'Messaging',
    shortDefinition:
      'A unified approach where customer conversations across email, SMS, WhatsApp, social DMs, and chat live in one connected experience.',
    definition:
      'Omnichannel messaging means treating every channel a customer uses — email, SMS, WhatsApp, Instagram DM, Facebook Messenger, live chat, and more — as part of a single conversation history rather than separate silos. The contact record is shared, agents see the full thread regardless of channel, and automations can hand off between channels based on customer behavior. It\'s distinct from "multichannel," where channels exist but are managed independently.',
    example:
      'A lead asks a question on Instagram DM, books a call through an email link, and confirms attendance over WhatsApp. The sales rep sees all three messages on one timeline against the same contact.',
    relatedToWellPlan:
      'WellPlan\'s shared inbox unifies WhatsApp, SMS, email, Instagram, Messenger, and webchat into a single conversation view per contact — see the [features overview](/features) for the supported channels.',
    relatedPages: [
      { label: 'Features overview', href: '/features' },
      { label: 'Integrations', href: '/integrations' },
    ],
    relatedTerms: ['whatsapp-business-api', 'customer-relationship-management', 'ai-chatbot'],
  },

  // ---------- CRM & Sales ----------
  {
    slug: 'customer-relationship-management',
    term: 'Customer Relationship Management (CRM)',
    category: 'CRM & Sales',
    shortDefinition:
      'Software and processes for managing every interaction a business has with leads and customers across the lifecycle.',
    definition:
      'Customer Relationship Management, usually shortened to CRM, refers both to a category of software and the business practice of centralizing data about prospects and customers — contact details, conversations, deals, support tickets, and history. A CRM is used by sales, marketing, and service teams to track relationships, follow up on opportunities, and report on revenue. Modern CRMs typically include pipelines, activities, automations, and integrations with email, calendar, and messaging tools.',
    example:
      'A sales rep logs into the CRM each morning to see open deals by stage, the activities due today, and recent inbound messages — all tied to the right contact record.',
    relatedToWellPlan:
      'WellPlan is built around a CRM that combines contacts, pipelines, conversations, and automations in one place — designed for small teams that previously juggled separate tools. See the [features overview](/features).',
    relatedPages: [
      { label: 'Features overview', href: '/features' },
      { label: 'For sales teams', href: '/solutions/sales-teams' },
    ],
    relatedTerms: ['sales-pipeline', 'lead-scoring', 'customer-lifecycle', 'marketing-automation'],
  },
  {
    slug: 'sales-pipeline',
    term: 'Sales Pipeline',
    category: 'CRM & Sales',
    shortDefinition:
      'A visual representation of where each open deal sits in your sales process, from first contact to closed-won or closed-lost.',
    definition:
      'A sales pipeline is the structured set of stages an opportunity moves through on the way to becoming a customer — for example: new lead, qualified, proposal sent, negotiation, won, lost. Each stage has criteria for entry and exit, and reps update deals as they progress. Pipelines help forecast revenue, identify bottlenecks, and reveal where deals stall. They\'re typically visualized as a kanban board or funnel and live inside the CRM.',
    example:
      'A B2B SaaS team uses six pipeline stages. By looking at how many deals sit in "Demo Booked" versus "Proposal Sent," they can predict next month\'s revenue and where reps need help.',
    relatedToWellPlan:
      'WellPlan ships with drag-and-drop pipelines, custom stages, and per-stage automations so deals move forward without manual data entry. Learn more on the [closing features page](/features/closing).',
    relatedPages: [
      { label: 'Closing features', href: '/features/closing' },
      { label: 'For sales teams', href: '/solutions/sales-teams' },
    ],
    relatedTerms: ['customer-relationship-management', 'lead-qualification', 'conversion-rate', 'speed-to-lead'],
  },
  {
    slug: 'lead-scoring',
    term: 'Lead Scoring',
    category: 'CRM & Sales',
    shortDefinition:
      'Assigning a numeric value to each lead based on demographic fit and engagement to prioritize sales follow-up.',
    definition:
      'Lead scoring is the practice of ranking leads by readiness to buy. Points are awarded for attributes that match the ideal customer profile (job title, company size, industry) and for behaviors that signal intent (visiting the pricing page, opening emails, attending a webinar). Negative scores can be applied for disqualifying signals. Once a lead crosses a threshold, the system routes it to sales or triggers a workflow. Scores can be rule-based or model-based.',
    example:
      'A lead earns +20 for being a marketing director, +15 for visiting the pricing page twice, and -10 for using a personal email. At 50+ points the CRM auto-assigns them to an account executive.',
    relatedToWellPlan:
      'WellPlan supports rule-based lead scoring inside workflows — increment scores on form submissions, page visits, or replies, then trigger routing when a threshold is hit. See [nurturing features](/features/nurturing).',
    relatedPages: [
      { label: 'Nurturing features', href: '/features/nurturing' },
      { label: 'Features overview', href: '/features' },
    ],
    relatedTerms: ['lead-qualification', 'sales-pipeline', 'behavioral-trigger', 'segmentation'],
  },
  {
    slug: 'lead-qualification',
    term: 'Lead Qualification (MQL / SQL)',
    category: 'CRM & Sales',
    shortDefinition:
      'The process of judging whether a lead is ready for marketing nurture (MQL) or direct sales outreach (SQL).',
    definition:
      'Lead qualification is the process of deciding whether and when a lead deserves attention from sales. A Marketing Qualified Lead (MQL) has shown enough fit and engagement to be worth ongoing nurture by marketing. A Sales Qualified Lead (SQL) has been accepted by sales as ready for direct outreach — usually because they\'ve requested a demo, replied to a rep, or hit a high lead score. Frameworks like BANT, CHAMP, or MEDDIC formalize the criteria.',
    example:
      'A whitepaper download makes someone an MQL. When the same person books a demo through the calendar link, they become an SQL and a rep is alerted within minutes.',
    relatedToWellPlan:
      'WellPlan lets you tag MQL/SQL transitions automatically based on form fills, page visits, or workflow conditions, and route SQLs straight into a sales pipeline. Explore [closing features](/features/closing).',
    relatedPages: [
      { label: 'Closing features', href: '/features/closing' },
      { label: 'For sales teams', href: '/solutions/sales-teams' },
    ],
    relatedTerms: ['lead-scoring', 'sales-pipeline', 'speed-to-lead', 'segmentation'],
  },
  {
    slug: 'speed-to-lead',
    term: 'Speed to Lead',
    category: 'CRM & Sales',
    shortDefinition:
      'The elapsed time between a lead expressing interest and a sales rep making first contact.',
    definition:
      'Speed to lead is the metric that captures how quickly a business responds to a new inbound inquiry — a form submission, a chat message, a missed call. Studies from MIT, Harvard Business Review, and InsideSales have consistently found that response time has an outsized effect on contact and qualification rates, especially when measured in minutes rather than hours. Reducing it usually means combining instant notifications, round-robin assignment, and automated first-touch messages.',
    example:
      'Instead of a rep emailing back the next morning, an automation sends an instant WhatsApp reply, books a call, and pings the on-duty rep within 60 seconds of the form submission.',
    relatedToWellPlan:
      'WellPlan combines instant auto-replies, round-robin routing, and mobile notifications to drive speed-to-lead down to seconds, not hours. See the [capturing features page](/features/capturing).',
    relatedPages: [
      { label: 'Capturing features', href: '/features/capturing' },
      { label: 'AI Voice agent', href: '/features/ai-voice' },
    ],
    relatedTerms: ['conversion-rate', 'lead-capture-form', 'workflow-trigger', 'sales-pipeline'],
  },
  {
    slug: 'customer-lifecycle',
    term: 'Customer Lifecycle',
    category: 'CRM & Sales',
    shortDefinition:
      'The full journey of a relationship with a customer, from awareness through advocacy, broken into measurable stages.',
    definition:
      'The customer lifecycle is the end-to-end set of stages a person moves through with a business: awareness, consideration, purchase, onboarding, retention, and advocacy or churn. Each stage has its own goals, content, and metrics. Lifecycle marketing tailors messaging to the stage — for instance, educational content for awareness, social proof for consideration, and onboarding sequences after purchase. Mapping the lifecycle is a prerequisite for designing automations and reporting.',
    example:
      'A new signup gets a welcome email on day 0, a feature-tour sequence over the first week, and a renewal nudge 30 days before subscription expiry — each tied to a different lifecycle stage.',
    relatedToWellPlan:
      'WellPlan lets you tag contacts with lifecycle stages and trigger automations as people move through them — from first capture to long-term retention. Learn more on the [nurturing features page](/features/nurturing).',
    relatedPages: [
      { label: 'Nurturing features', href: '/features/nurturing' },
      { label: 'Features overview', href: '/features' },
    ],
    relatedTerms: ['customer-relationship-management', 'marketing-automation', 'drip-campaign', 'segmentation'],
  },

  // ---------- Marketing Automation ----------
  {
    slug: 'marketing-automation',
    term: 'Marketing Automation',
    category: 'Marketing Automation',
    shortDefinition:
      'Software that automates repetitive marketing tasks like email sends, segmentation, lead scoring, and multi-step campaigns.',
    definition:
      'Marketing automation is the use of software to execute marketing actions — sending emails, updating contacts, scoring leads, posting on social — based on rules, schedules, and behavior. It typically includes a workflow builder, audience segmentation, multi-channel sends, A/B testing, and analytics. The goal is to scale personalized outreach without scaling headcount, and to keep messaging consistent across the customer journey.',
    example:
      'A workflow watches for a "demo requested" event, sends a confirmation email, waits 24 hours, sends a reminder, and tags the contact if they actually attend.',
    relatedToWellPlan:
      'WellPlan\'s visual workflow builder lets you orchestrate email, SMS, WhatsApp, voice, and CRM actions in one place. See the [AI workflow feature](/features/ai-workflow).',
    relatedPages: [
      { label: 'AI Workflow', href: '/features/ai-workflow' },
      { label: 'Nurturing features', href: '/features/nurturing' },
    ],
    relatedTerms: ['workflow-trigger', 'drip-campaign', 'segmentation', 'behavioral-trigger'],
  },
  {
    slug: 'drip-campaign',
    term: 'Drip Campaign',
    category: 'Marketing Automation',
    shortDefinition:
      'A pre-scheduled sequence of messages sent to a contact over time, usually triggered by a single event like a signup.',
    definition:
      'A drip campaign is a series of messages delivered on a fixed schedule after a trigger — most often a form fill, free trial, or list subscription. Each message has a delay (e.g., day 0, day 2, day 7) and a purpose, like welcoming, educating, or pitching. Drips can run on a single channel such as email, or span email, SMS, and WhatsApp. Unlike behavioral campaigns, classic drips follow the schedule regardless of engagement, though most modern tools branch on opens, clicks, or replies.',
    example:
      'A new newsletter subscriber gets a welcome email on day 0, a best-of links email on day 3, and an invitation to a webinar on day 7 — all queued automatically at signup.',
    relatedToWellPlan:
      'WellPlan supports multi-channel drip sequences with delays, conditions, and channel fallback (e.g., SMS if email isn\'t opened). See the [nurturing features page](/features/nurturing).',
    relatedPages: [
      { label: 'Nurturing features', href: '/features/nurturing' },
      { label: 'AI Workflow', href: '/features/ai-workflow' },
    ],
    relatedTerms: ['marketing-automation', 'workflow-trigger', 'transactional-email', 'sms-marketing'],
  },
  {
    slug: 'workflow-trigger',
    term: 'Workflow Trigger',
    category: 'Marketing Automation',
    shortDefinition:
      'The event or condition that starts an automated workflow — for example, a form submission, tag added, or deal stage change.',
    definition:
      'A workflow trigger is the starting condition for an automation. Triggers can be explicit user actions (form submitted, link clicked, appointment booked), CRM changes (tag added, pipeline stage updated, score crossed a threshold), schedules (every Monday at 9 a.m.), or external webhooks. Each workflow normally has one trigger and many subsequent steps. Choosing the right trigger — and filtering it tightly — is what separates useful automations from noisy ones.',
    example:
      'A workflow triggers when a contact\'s tag is set to "demo-no-show." It waits two hours, sends a friendly WhatsApp reschedule link, then creates a task for the rep if they don\'t click within 24 hours.',
    relatedToWellPlan:
      'WellPlan supports triggers across forms, pipeline stages, tags, calendars, payments, and inbound messages, all configurable in the visual builder. Read more under [AI Workflow](/features/ai-workflow).',
    relatedPages: [
      { label: 'AI Workflow', href: '/features/ai-workflow' },
      { label: 'Features overview', href: '/features' },
    ],
    relatedTerms: ['marketing-automation', 'behavioral-trigger', 'drip-campaign', 'lead-scoring'],
  },
  {
    slug: 'segmentation',
    term: 'Segmentation',
    category: 'Marketing Automation',
    shortDefinition:
      'Dividing your contact list into groups based on shared attributes or behavior so messaging can be tailored to each.',
    definition:
      'Segmentation is the practice of grouping contacts by criteria — demographics, firmographics, lifecycle stage, source, recent activity, purchase history, or any custom field. Segments can be static (a fixed list) or dynamic (auto-updating as contacts meet or leave criteria). Marketers use segments to send relevant content, run A/B tests against specific cohorts, and exclude people who shouldn\'t receive a given message. Good segmentation lifts open, click, and reply rates.',
    example:
      'A coach builds a dynamic segment of "contacts who joined in the last 30 days AND haven\'t attended an onboarding call" and triggers a tailored WhatsApp nudge for that segment only.',
    relatedToWellPlan:
      'WellPlan supports dynamic smart-lists built from any contact field, tag, or activity, and you can target workflows or broadcasts to those segments. See the [features overview](/features).',
    relatedPages: [
      { label: 'Features overview', href: '/features' },
      { label: 'Nurturing features', href: '/features/nurturing' },
    ],
    relatedTerms: ['marketing-automation', 'lead-scoring', 'behavioral-trigger', 'customer-lifecycle'],
  },
  {
    slug: 'lead-magnet',
    term: 'Lead Magnet',
    category: 'Marketing Automation',
    shortDefinition:
      'A free resource — ebook, checklist, template, webinar — offered in exchange for a visitor\'s contact details.',
    definition:
      'A lead magnet is a piece of value-dense content given away to encourage a visitor to share their email, phone number, or other contact info. Common formats include PDF guides, checklists, swipe files, mini-courses, templates, calculators, and webinars. A good lead magnet solves a specific problem for a tightly defined audience and naturally leads into the product or service being sold. It\'s usually delivered through a landing page paired with a thank-you email.',
    example:
      'A B2B agency offers "The 2026 SEO Audit Checklist (PDF)" behind a form. Visitors who download it land in an automated nurture sequence and a sales pipeline.',
    relatedToWellPlan:
      'With WellPlan you can build the landing page, capture the lead, deliver the magnet via email, and start a nurture workflow — all in one tool. See [capturing features](/features/capturing).',
    relatedPages: [
      { label: 'Capturing features', href: '/features/capturing' },
      { label: 'AI Funnel builder', href: '/features/ai-funnel' },
    ],
    relatedTerms: ['landing-page', 'lead-capture-form', 'conversion-rate', 'sales-funnel'],
  },
  {
    slug: 'ab-testing',
    term: 'A/B Testing',
    category: 'Marketing Automation',
    shortDefinition:
      'Comparing two versions of a page, email, or ad against the same audience to see which performs better on a chosen metric.',
    definition:
      'A/B testing — also called split testing — is the process of randomly showing two (or more) variants of a marketing asset to comparable audiences and measuring which produces better results on a defined metric like click-through rate, conversion rate, or revenue per visitor. It requires a single variable change per test, a large enough sample to reach statistical significance, and a clear decision rule. It\'s used on landing pages, emails, ad creatives, and pricing.',
    example:
      'A landing page is split between headline A ("Save hours every week") and headline B ("Cut your admin time in half"). After 2,000 visitors, B converts 18% better and becomes the new default.',
    relatedToWellPlan:
      'WellPlan supports A/B testing on landing pages, funnels, and email subject lines with built-in winner selection. Explore the [AI Funnel builder](/features/ai-funnel).',
    relatedPages: [
      { label: 'AI Funnel builder', href: '/features/ai-funnel' },
      { label: 'Capturing features', href: '/features/capturing' },
    ],
    relatedTerms: ['landing-page', 'conversion-rate', 'click-through-rate', 'sales-funnel'],
  },
  {
    slug: 'behavioral-trigger',
    term: 'Behavioral Trigger',
    category: 'Marketing Automation',
    shortDefinition:
      'An automation that fires in response to something a contact does — a page view, an opened email, an abandoned cart.',
    definition:
      'A behavioral trigger is a workflow-starting event based on a contact\'s observed behavior rather than a fixed schedule or static attribute. Typical signals include visiting a high-intent page, opening or clicking an email, abandoning a cart, replying to a message, or going inactive for a set period. Behavioral triggers make automations feel timely and relevant, and they\'re the foundation of techniques like cart-abandonment recovery, browse-abandonment, and re-engagement sequences.',
    example:
      'A contact visits the pricing page twice in 48 hours. A behavioral trigger sends a personalized WhatsApp message offering a short call with sales.',
    relatedToWellPlan:
      'WellPlan listens for page views, email engagement, form fills, replies, and pipeline changes — any of which can trigger a behavioral workflow. See [AI Workflow](/features/ai-workflow).',
    relatedPages: [
      { label: 'AI Workflow', href: '/features/ai-workflow' },
      { label: 'Nurturing features', href: '/features/nurturing' },
    ],
    relatedTerms: ['workflow-trigger', 'marketing-automation', 'lead-scoring', 'segmentation'],
  },

  // ---------- Lead Generation ----------
  {
    slug: 'landing-page',
    term: 'Landing Page',
    category: 'Lead Generation',
    shortDefinition:
      'A standalone web page built around a single goal — usually capturing a lead or converting a visitor into a buyer.',
    definition:
      'A landing page is a focused, single-purpose web page that a visitor "lands" on after clicking an ad, email, or social link. Unlike a typical homepage, it minimizes navigation and competing calls to action and is designed around one conversion goal — sign up, book a demo, download a guide, buy a product. Landing pages are the workhorses of paid acquisition because they let marketers match the message in the ad to the message on the page, lifting conversion rates.',
    example:
      'An ad for a free meal-plan template sends visitors to a page with only the headline, three bullet benefits, a hero image, and an email field — nothing else competing for attention.',
    relatedToWellPlan:
      'WellPlan includes a drag-and-drop landing-page builder with mobile-ready templates, A/B testing, and built-in forms wired into your CRM. See the [AI Funnel builder](/features/ai-funnel).',
    relatedPages: [
      { label: 'AI Funnel builder', href: '/features/ai-funnel' },
      { label: 'Capturing features', href: '/features/capturing' },
    ],
    relatedTerms: ['sales-funnel', 'lead-capture-form', 'conversion-rate', 'lead-magnet'],
  },
  {
    slug: 'sales-funnel',
    term: 'Sales Funnel',
    category: 'Lead Generation',
    shortDefinition:
      'The multi-step path a visitor follows from first awareness to purchase, often modeled as a series of pages and emails.',
    definition:
      'A sales funnel describes the narrowing journey from a broad audience of potential customers to a smaller set who actually buy. The classic funnel has stages like awareness, interest, decision, and action; in practice it\'s often implemented as a sequence of landing pages, lead magnets, follow-up emails, and offers. Funnel thinking helps marketers identify where prospects drop off, optimize the worst-performing step, and increase overall conversion without simply adding more traffic.',
    example:
      'A funnel: Facebook ad → landing page offering a free training → thank-you page with a low-priced offer → email sequence → sales call → checkout. Each step is measured separately.',
    relatedToWellPlan:
      'WellPlan lets you build multi-step funnels — pages, forms, upsells, and follow-ups — and report on conversion at every step in one place. See the [AI Funnel builder](/features/ai-funnel).',
    relatedPages: [
      { label: 'AI Funnel builder', href: '/features/ai-funnel' },
      { label: 'Features overview', href: '/features' },
    ],
    relatedTerms: ['landing-page', 'conversion-rate', 'lead-magnet', 'lead-capture-form'],
  },
  {
    slug: 'conversion-rate',
    term: 'Conversion Rate',
    category: 'Lead Generation',
    shortDefinition:
      'The percentage of visitors or recipients who take a desired action, like submitting a form or buying.',
    definition:
      'Conversion rate is the share of an audience that completes a defined goal divided by the total who had the chance. It can be measured at any step — landing page visit to lead, lead to qualified opportunity, opportunity to customer, email open to click, ad impression to signup. The right denominator and the right "conversion event" depend on the funnel step being measured. Comparing conversion rates over time and across segments is one of the cleanest ways to see whether changes are helping.',
    example:
      'A landing page gets 1,200 visits and 96 sign-ups in a week. Its conversion rate is 96 / 1,200 = 8%.',
    relatedToWellPlan:
      'WellPlan tracks conversion across funnels, forms, calendars, and campaigns so you can spot the weakest step and improve it. See the [AI Funnel builder](/features/ai-funnel).',
    relatedPages: [
      { label: 'AI Funnel builder', href: '/features/ai-funnel' },
      { label: 'Capturing features', href: '/features/capturing' },
    ],
    relatedTerms: ['landing-page', 'sales-funnel', 'ab-testing', 'click-through-rate'],
  },
  {
    slug: 'lead-capture-form',
    term: 'Lead Capture Form',
    category: 'Lead Generation',
    shortDefinition:
      'A form on a landing page, popup, or chat widget that collects contact details and pushes them into a CRM.',
    definition:
      'A lead capture form is the input mechanism that converts an anonymous visitor into a known contact. Fields can range from a single email to fuller qualification questionnaires. Best practice is to ask only what\'s needed for the next step and progressively enrich later. Forms can live inline on a landing page, in a popup, in a chat widget, embedded in a page, or be replaced by a conversational flow. The captured data is typically sent to a CRM or marketing tool in real time.',
    example:
      'A 3-field form on a pricing page asks for name, email, and company size. On submit, the lead is added to the CRM with a tag and an instant WhatsApp reply is fired.',
    relatedToWellPlan:
      'WellPlan provides drag-and-drop forms, popups, and surveys that sync directly to contacts, with custom fields, conditional logic, and consent capture. See [capturing features](/features/capturing).',
    relatedPages: [
      { label: 'Capturing features', href: '/features/capturing' },
      { label: 'AI Funnel builder', href: '/features/ai-funnel' },
    ],
    relatedTerms: ['landing-page', 'opt-in', 'conversion-rate', 'lead-magnet'],
  },
  {
    slug: 'chatbot',
    term: 'Chatbot',
    category: 'Lead Generation',
    shortDefinition:
      'An automated chat program that converses with website or messaging-app visitors to answer questions and capture leads.',
    definition:
      'A chatbot is software that simulates conversation with users — through a website widget, WhatsApp, Messenger, or another channel — to answer questions, qualify leads, book appointments, or hand off to a human. Chatbots range from simple rule-based decision trees to AI-driven assistants powered by large language models. They\'re widely used for first-line support, lead qualification, and reducing the cost of repetitive inbound questions, especially outside business hours.',
    example:
      'A SaaS site uses a chatbot to ask visitors what they\'re trying to do, route product questions to docs, and book a demo straight into a sales rep\'s calendar when intent is high.',
    relatedToWellPlan:
      'WellPlan includes a chatbot builder for web and messaging channels, plus an AI chatbot powered by your own knowledge base. See [AI Bot](/features/ai-bot).',
    relatedPages: [
      { label: 'AI Bot', href: '/features/ai-bot' },
      { label: 'Capturing features', href: '/features/capturing' },
    ],
    relatedTerms: ['ai-chatbot', 'ai-voice-agent', 'lead-capture-form', 'omnichannel-messaging'],
  },

  // ---------- Email & SMS ----------
  {
    slug: 'transactional-email',
    term: 'Transactional Email',
    category: 'Email & SMS',
    shortDefinition:
      'An email triggered by a specific user action — receipts, password resets, order updates — sent one-to-one.',
    definition:
      'A transactional email is a one-to-one message generated in response to a user action or system event, as opposed to a one-to-many marketing broadcast. Common examples include account confirmations, password resets, receipts, shipping notifications, appointment reminders, and security alerts. Because users expect them, transactional emails see high open and click rates, but they\'re held to stricter deliverability standards and shouldn\'t be mixed with promotional content without consent.',
    example:
      'After a customer pays for a subscription, the system instantly emails a receipt with the invoice attached and a link to manage billing.',
    relatedToWellPlan:
      'WellPlan can send both transactional and marketing email from your domain, with separate templates, suppression handling, and deliverability tooling. See the [features overview](/features).',
    relatedPages: [
      { label: 'Features overview', href: '/features' },
      { label: 'Integrations', href: '/integrations' },
    ],
    relatedTerms: ['bounce-rate', 'click-through-rate', 'drip-campaign', 'opt-in'],
  },
  {
    slug: 'sms-marketing',
    term: 'SMS Marketing',
    category: 'Email & SMS',
    shortDefinition:
      'Sending promotional or transactional text messages to opted-in contacts over the mobile phone network.',
    definition:
      'SMS marketing is the practice of using text messaging to reach customers with offers, reminders, or updates. It typically requires explicit opt-in (in the U.S., under the TCPA), a clear sender identity, and an easy opt-out keyword like STOP. Open rates are very high relative to email, but the channel is intrusive and lightly regulated by carrier rules and country-level laws, so frequency and content discipline matter. SMS is often used together with email and WhatsApp in cross-channel sequences.',
    example:
      'A restaurant texts opted-in customers a 20% off code on Tuesday afternoons. Each text includes "Reply STOP to unsubscribe" and is sent from an approved short code.',
    relatedToWellPlan:
      'WellPlan supports SMS sends and replies through approved providers, with consent tracking and unsubscribe handling built in. See the [features overview](/features).',
    relatedPages: [
      { label: 'Features overview', href: '/features' },
      { label: 'Integrations', href: '/integrations' },
    ],
    relatedTerms: ['opt-in', 'transactional-email', 'omnichannel-messaging', 'drip-campaign'],
  },
  {
    slug: 'bounce-rate',
    term: 'Bounce Rate',
    category: 'Email & SMS',
    shortDefinition:
      'The percentage of sent emails that fail to reach the recipient\'s inbox, split into hard and soft bounces.',
    definition:
      'In email, bounce rate is the share of messages that the receiving server rejects. A hard bounce is a permanent failure — invalid address, domain doesn\'t exist — and the contact should be removed from sending. A soft bounce is temporary — full mailbox, server down — and the message can be retried. Persistently high bounce rates signal poor list hygiene to mailbox providers and hurt deliverability. (In web analytics, "bounce rate" instead means single-page visits, which is a different metric.)',
    example:
      'A list of 10,000 emails returns 250 hard bounces (2.5%) and 80 soft bounces (0.8%). The hard bounces are auto-suppressed before the next send.',
    relatedToWellPlan:
      'WellPlan auto-suppresses hard bounces, retries soft bounces, and surfaces bounce health per domain and per campaign so deliverability stays high. See the [features overview](/features).',
    relatedPages: [
      { label: 'Features overview', href: '/features' },
      { label: 'Integrations', href: '/integrations' },
    ],
    relatedTerms: ['transactional-email', 'click-through-rate', 'opt-in', 'drip-campaign'],
  },
  {
    slug: 'click-through-rate',
    term: 'Click-Through Rate (CTR)',
    category: 'Email & SMS',
    shortDefinition:
      'The percentage of recipients (or impressions) that clicked a link, used for emails, ads, and SMS campaigns.',
    definition:
      'Click-through rate, or CTR, is the number of clicks on a link divided by the number of times the link was seen — recipients for email, impressions for ads, deliveries for SMS. CTR is one of the cleanest engagement signals because it requires the audience to take an explicit action. Compared with open rate, which has become noisy due to privacy features that pre-load images, CTR is harder to game and more directly tied to downstream conversion.',
    example:
      'An email goes to 5,000 contacts and gets 250 unique link clicks. The CTR is 250 / 5,000 = 5%.',
    relatedToWellPlan:
      'WellPlan tracks CTR across email, SMS, and WhatsApp, with breakdowns by link and campaign so you can iterate on the calls to action that work. See the [features overview](/features).',
    relatedPages: [
      { label: 'Features overview', href: '/features' },
      { label: 'AI Funnel builder', href: '/features/ai-funnel' },
    ],
    relatedTerms: ['conversion-rate', 'ab-testing', 'transactional-email', 'bounce-rate'],
  },

  // ---------- AI ----------
  {
    slug: 'ai-voice-agent',
    term: 'AI Voice Agent',
    category: 'AI',
    shortDefinition:
      'An AI-powered phone agent that can take or place calls, hold a natural conversation, and complete tasks like booking or qualification.',
    definition:
      'An AI voice agent is software that handles phone calls using speech recognition, large language models for reasoning, and text-to-speech for replies. Unlike traditional IVR menus, modern voice agents converse in natural language, recognize intent, follow business-defined scripts, and integrate with CRMs, calendars, and ticketing systems. Common use cases include after-hours answering, lead qualification, appointment booking, and outbound follow-up. Quality depends on latency, voice naturalness, interruption handling, and grounding in business data.',
    example:
      'A missed call to a clinic is auto-answered by a voice agent that confirms the caller\'s details, books an appointment in the practice calendar, and texts a confirmation.',
    relatedToWellPlan:
      'WellPlan ships an AI voice agent that can answer missed calls, qualify leads, and book appointments straight into your calendar. See [AI Voice](/features/ai-voice).',
    relatedPages: [
      { label: 'AI Voice', href: '/features/ai-voice' },
      { label: 'AI overview', href: '/features/ai' },
    ],
    relatedTerms: ['ai-chatbot', 'chatbot', 'speed-to-lead', 'omnichannel-messaging'],
  },
  {
    slug: 'ai-chatbot',
    term: 'AI Chatbot',
    category: 'AI',
    shortDefinition:
      'A chatbot powered by a large language model that can hold open-ended conversations grounded in a business\'s own content.',
    definition:
      'An AI chatbot uses a large language model — often combined with retrieval over a knowledge base or product catalog — to answer free-form questions, qualify leads, and take actions through tools and integrations. Unlike rule-based bots that follow a fixed decision tree, AI chatbots can handle phrasing they\'ve never seen before, but they need guardrails: grounded data, scope limits, escalation rules to humans, and logging. They run on web widgets, WhatsApp, Instagram DM, and other channels.',
    example:
      'A site visitor asks "Do you ship to Spain and how long does it take?" and the AI chatbot answers correctly from the shipping policy page, then offers to start the checkout.',
    relatedToWellPlan:
      'WellPlan\'s AI chatbot is trained on your own website, docs, and FAQs, runs across web and messaging channels, and hands off to a human in the shared inbox when needed. See [AI Bot](/features/ai-bot).',
    relatedPages: [
      { label: 'AI Bot', href: '/features/ai-bot' },
      { label: 'AI overview', href: '/features/ai' },
    ],
    relatedTerms: ['chatbot', 'ai-voice-agent', 'omnichannel-messaging', 'speed-to-lead'],
  },
];

export function getTermBySlug(slug) {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getTermsByCategory() {
  const grouped = {};
  for (const cat of glossaryCategories) {
    grouped[cat.label] = glossaryTerms.filter((t) => t.category === cat.label);
  }
  return grouped;
}

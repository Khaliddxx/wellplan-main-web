/**
 * Per-feature-page FAQ content for FAQPage JSON-LD.
 *
 * All answers describe real WellPlan platform capabilities. No invented metrics,
 * customer counts, or testimonials. No mention of underlying platform.
 */

export const featureFaqs = {
  'ai-bot': [
    {
      q: 'What channels does the WellPlan AI chatbot work on?',
      a: 'The AI chatbot works on WhatsApp, Instagram DM, Facebook Messenger, SMS, web chat, Telegram, and Google Business Messages. All conversations route into the same unified inbox so your team can pick up wherever the bot hands off.',
    },
    {
      q: 'Can the AI chatbot book appointments directly?',
      a: 'Yes. The bot integrates with WellPlan\'s native calendar and can show available slots, book the appointment, send a confirmation, and add a reminder sequence — all inside the conversation.',
    },
    {
      q: 'How is the AI chatbot trained on my business?',
      a: 'You train the bot by pointing it at your website URLs, uploading FAQs and product info, or giving it example Q&A pairs. You can also leave feedback on individual responses to improve it over time.',
    },
    {
      q: 'Does the AI chatbot hand off to a human?',
      a: 'Yes. You can configure handoff triggers — keywords, sentiment changes, off-topic questions — to route the conversation to a team member. The bot leaves context so the human picks up seamlessly.',
    },
  ],
  'ai-voice': [
    {
      q: 'What can the AI voice agent do?',
      a: 'The voice agent answers inbound calls, makes outbound calls, qualifies callers with questions you define, books appointments into your calendar, transfers to a human when needed, and logs the full call transcript in the contact record.',
    },
    {
      q: 'Does it sound natural?',
      a: 'The voice agent uses modern conversational AI with natural-sounding voices and real-time turn-taking. You can choose voice, tone, and language during setup.',
    },
    {
      q: 'Can it handle calls in multiple languages?',
      a: 'Yes. The voice agent supports multiple languages and can switch based on the caller. You configure default language and any fallbacks during setup.',
    },
    {
      q: 'What happens if the AI can\'t handle a call?',
      a: 'You define escalation rules. The agent can transfer the call to a team member, take a detailed message, schedule a callback, or send a follow-up SMS with a booking link — your choice.',
    },
  ],
  'ai-reviews': [
    {
      q: 'Which review platforms does WellPlan AI Reviews support?',
      a: 'WellPlan AI Reviews works with Google Business Profile and Facebook reviews. New reviews trigger an AI-generated, on-brand response that you can auto-publish or approve first.',
    },
    {
      q: 'Can I customize the tone of AI-generated review replies?',
      a: 'Yes. You set tone, length, and brand voice during setup. You can also write a reference reply that the AI mimics for similar reviews going forward.',
    },
    {
      q: 'Do I have to publish replies automatically?',
      a: 'No. You can run in approval mode where every reply waits for human review before going live, or auto-publish for 4–5 star reviews only and approve negative ones.',
    },
    {
      q: 'How do I get more reviews in the first place?',
      a: 'WellPlan includes review request workflows: trigger an SMS or email asking for a review after a completed appointment, payment, or workflow event. The link goes straight to your Google or Facebook review form.',
    },
  ],
  'ai-content': [
    {
      q: 'What kinds of content can WellPlan AI generate?',
      a: 'Email subject lines and body copy, SMS messages, WhatsApp templates, social posts, blog drafts, and landing page copy. You give it the topic, audience, and tone and it generates options.',
    },
    {
      q: 'Can the AI use my brand voice?',
      a: 'Yes. Save your brand voice profile (formal/casual, banned phrases, preferred terms) and the AI applies it to every generation. You can also paste a reference piece and ask it to match the style.',
    },
    {
      q: 'Is generated content reviewed before sending?',
      a: 'You stay in control. Generated content lands as a draft that you can edit, approve, schedule, or discard. Nothing sends without your action unless you explicitly configure auto-send for a specific workflow.',
    },
  ],
  'ai-funnel': [
    {
      q: 'How does the AI funnel builder work?',
      a: 'You describe the funnel you want (audience, offer, conversion goal) in plain English. The AI generates a multi-page funnel — landing, form, thank-you, follow-up — with copy and structure. You then edit and publish in the visual builder.',
    },
    {
      q: 'Can I customize the AI-generated pages?',
      a: 'Yes. Every section is editable in the drag-and-drop builder. Change copy, swap sections, upload images, adjust styling — same control as building from scratch, just starting from a working draft.',
    },
    {
      q: 'Are funnels mobile-optimized?',
      a: 'Yes. All AI-generated funnels and landing pages are responsive by default. You can preview and tweak the mobile layout independently if you need to.',
    },
  ],
  'ai-workflow': [
    {
      q: 'What can AI do inside a workflow?',
      a: 'AI can score leads, route by intent, summarize conversations, generate personalized message content, decide which branch to take based on context, and extract data from free-text inputs (like a form note).',
    },
    {
      q: 'Does it require coding?',
      a: 'No. AI actions are drag-and-drop steps in the visual workflow builder, same as any trigger or action. You configure the AI step with a prompt and the surrounding context the workflow already has.',
    },
    {
      q: 'How is AI different from normal automation?',
      a: 'Normal automation runs deterministic rules ("if tag = X then do Y"). AI steps handle judgment calls and unstructured input — like reading a customer message and deciding whether it\'s a complaint, an inquiry, or a sales opportunity.',
    },
  ],
  ai: [
    {
      q: 'What is the WellPlan AI Employee Suite?',
      a: 'A set of six AI tools that work together: Conversation AI (chatbot), Voice AI (phone agent), Reviews AI, Content AI, Funnel AI, and Workflow AI. Each handles a specific job — and they share the same contact data and workflows.',
    },
    {
      q: 'Do I need to pay extra for the AI features?',
      a: 'AI features are included in the standard WellPlan plans, with usage-based pricing for high-volume features like AI voice calls. See the pricing page for current allotments per plan.',
    },
    {
      q: 'Can I use just one AI tool, or do I need all six?',
      a: 'Use any combination. The AI tools are designed to work standalone (e.g. just the chatbot) or stacked together (chatbot qualifies → voice agent calls back → content AI sends a personalized email).',
    },
    {
      q: 'What about data privacy?',
      a: 'Conversation and contact data stays inside your WellPlan account. AI processing is used for the specific request and not used to train shared models. Enterprise plans include additional controls.',
    },
  ],
  capturing: [
    {
      q: 'What lead capture tools come with WellPlan?',
      a: 'Smart forms with conditional logic, drag-and-drop landing pages, funnel builder, web chat widget, AI chatbot, exit-intent and timed pop-ups, and SMS keyword opt-ins.',
    },
    {
      q: 'Where do captured leads go?',
      a: 'Every lead flows into WellPlan\'s CRM with the source tracked. From there you can route to a pipeline, trigger a workflow (welcome email, SMS, WhatsApp), assign to a team member, or tag for segmentation.',
    },
    {
      q: 'Can I embed forms on my existing website?',
      a: 'Yes. Every form, landing page section, and pop-up has an embed code (iframe or JS snippet) that works on any website builder — WordPress, Webflow, Shopify, plain HTML, anywhere.',
    },
  ],
  nurturing: [
    {
      q: 'What channels can I nurture leads on?',
      a: 'Email, SMS, WhatsApp Business API, Instagram DM, Facebook Messenger, voice (via AI agent), and physical mail (via integrations). You can mix channels within a single nurture sequence.',
    },
    {
      q: 'Can I trigger sequences based on behavior?',
      a: 'Yes. Triggers include form submissions, page visits, email opens/clicks, SMS keywords, appointment bookings, pipeline stage changes, tag adds, and custom field updates.',
    },
    {
      q: 'How do I personalize nurture messages?',
      a: 'Use custom fields, tags, and AI-generated content. Every message can include dynamic merge fields, conditional content blocks, and time-of-day or timezone-aware sending.',
    },
  ],
  closing: [
    {
      q: 'What sales tools does WellPlan include?',
      a: 'Visual pipeline CRM, AI lead scoring, opportunity management, calendar booking with team round-robin, payment links and recurring subscriptions (via Stripe/PayPal), proposal sending, and reporting.',
    },
    {
      q: 'Does WellPlan accept payments?',
      a: 'Yes — through Stripe and PayPal integrations. You can send one-time payment links, set up subscriptions, sell memberships, and trigger workflows on successful payment or failed renewal.',
    },
    {
      q: 'How does AI lead scoring work?',
      a: 'AI scores contacts based on behavior (page views, form fills, email engagement), profile attributes (industry, company size, location), and conversation signals. Hot leads surface at the top of your pipeline.',
    },
  ],
};

export function getFeatureFaqs(slug) {
  return featureFaqs[slug] || null;
}

export function buildFaqJsonLd(faqs) {
  if (!faqs?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

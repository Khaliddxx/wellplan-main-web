export const industryContent = {
  'agencies': {
    longDescription: "Digital agencies juggle dozens of client accounts, each with its own leads, channels, and reporting requirements. Switching between client inboxes, ad platforms, and spreadsheets eats into billable hours and creates room for dropped leads. WellPlan gives you a single workspace to manage every client's pipeline, conversations, and automations side by side. White-label dashboards let you present the platform under your own brand, while sub-accounts keep each client's data isolated. From lead capture forms to nurture sequences and review requests, you can build it once and deploy it across accounts.",
    painPoints: [
      "Switching between client tools and inboxes wastes hours every week and slows down lead response times.",
      "Reporting to clients takes manual effort across multiple platforms, with no single source of truth for performance.",
      "Onboarding new clients is repetitive when you rebuild the same funnels, forms, and automations from scratch.",
      "Proving ROI is harder when lead tracking, follow-up, and conversion data live in disconnected systems.",
    ],
    solutions: [
      { title: "White-label client workspaces", description: "Present WellPlan under your agency's brand with custom domains, logos, and color schemes. Each client gets a dedicated sub-account with isolated data, while you keep a parent view across the entire book of business." },
      { title: "Reusable campaign templates", description: "Build a workflow, funnel, or form once and clone it across client accounts. Standardize onboarding, follow-up sequences, and review request flows so new clients go live in days, not weeks." },
      { title: "Unified inbox per client", description: "Handle WhatsApp, Instagram DM, SMS, email, and web chat for every client from one screen. Assign conversations to team members, leave internal notes, and never lose context when switching between accounts." },
      { title: "Client-facing reporting", description: "Share live dashboards or scheduled reports that pull lead volume, pipeline value, conversation activity, and campaign performance directly from each sub-account. Clients see results without needing a meeting." },
    ],
    workflowExamples: [
      {
        name: "New client onboarding",
        trigger: "When a new client signs your service agreement",
        steps: [
          "Clone your standard sub-account template with pipelines, tags, and automations preconfigured",
          "Send the client an onboarding form to collect brand assets, integrations, and access credentials",
          "Trigger an internal task for your team to install tracking and connect channels",
          "Send the client a welcome email with their dashboard login and a kickoff calendar link",
        ],
      },
      {
        name: "Lead handoff to client",
        trigger: "When a qualified lead is captured in a client sub-account",
        steps: [
          "Tag the lead with source and campaign for attribution",
          "Send an instant SMS or email notification to the client's sales rep",
          "Add the lead to the client's pipeline at the appropriate stage",
          "Start a nurture sequence if the client doesn't respond within a defined window",
        ],
      },
      {
        name: "Monthly client reporting",
        trigger: "On the first of each month",
        steps: [
          "Pull lead volume, conversion, and pipeline data from each sub-account",
          "Generate a branded report with campaign-level performance",
          "Email the report to the client contact with a short summary",
          "Create an internal task to review accounts that fell below target",
        ],
      },
    ],
    faqs: [
      { q: "Can I white-label WellPlan for my agency?", a: "Yes. You can apply your own brand, logo, color palette, and custom domain so clients log in to a platform that looks like yours. Sub-accounts inherit the branding, and you control which features each client can access." },
      { q: "How do you keep client data separated?", a: "Each client lives in their own sub-account with isolated contacts, conversations, pipelines, and automations. Your team can move between accounts from a parent view, but clients only see their own data." },
      { q: "Can I reuse funnels and workflows across clients?", a: "Yes. Build a funnel, form, or automation once in a template account, then clone it into any client sub-account with a few clicks. This is how most agencies standardize onboarding and recurring campaigns." },
      { q: "Does WellPlan support team collaboration on client accounts?", a: "You can add team members with role-based permissions, assign conversations and leads, leave internal notes on contacts, and create tasks. Activity is logged so account managers can audit work across clients." },
      { q: "Can clients log in to see their own data?", a: "Yes. You can grant clients access to their sub-account with restricted permissions so they see pipelines, conversations, and reporting but cannot change billing or core settings." },
    ],
  },

  'saas': {
    longDescription: "B2B SaaS sales cycles involve multiple stakeholders, long evaluation windows, and dozens of touchpoints across email, calls, and product trials. Leads who request a demo expect a response in minutes, not hours, and sales reps lose deals when follow-up slips through the cracks. WellPlan unifies your inbound channels, scores leads based on behavior and firmographics, and routes qualified accounts to the right rep instantly. Nurture sequences keep slow-moving accounts warm, while the AI chatbot and voice agent handle initial qualification so reps spend their time on conversations that matter.",
    painPoints: [
      "Demo requests sit unanswered for hours, and prospects move on to a competitor who replied first.",
      "Sales reps waste time on unqualified leads instead of focusing on accounts with real buying intent.",
      "Long sales cycles mean leads go cold between touchpoints, and manual follow-up is inconsistent.",
      "Marketing and sales work from different systems, so lead context is lost in the handoff to a rep.",
    ],
    solutions: [
      { title: "Lead scoring and qualification", description: "Score inbound leads based on form responses, firmographics, email engagement, and on-site behavior. Route high-scoring accounts to sales reps instantly while lower-fit leads enter a nurture track until they show intent." },
      { title: "AI chatbot for demo qualification", description: "Place an AI chatbot on your pricing and demo pages to ask qualifying questions, capture intent, and book meetings on the rep's calendar. Conversations are logged to the contact record so reps see the full context before the call." },
      { title: "Multi-touch nurture sequences", description: "Build drip sequences across email, SMS, and WhatsApp that adapt based on engagement. Long evaluation cycles get consistent touchpoints, and reps are notified the moment a lead opens a proposal or revisits the pricing page." },
      { title: "Pipeline and account management", description: "Track every deal through customizable stages with required fields, tasks, and reminders. Tag contacts by account, role, or persona so you can see every stakeholder in a buying committee on one record." },
    ],
    workflowExamples: [
      {
        name: "Demo request speed-to-lead",
        trigger: "When a prospect submits the demo request form",
        steps: [
          "Score the lead based on company size, role, and stated use case",
          "If high score, route to a sales rep and send an SMS notification within 60 seconds",
          "Send the prospect an instant confirmation with a calendar booking link",
          "If the prospect doesn't book within 30 minutes, trigger an automated follow-up email",
        ],
      },
      {
        name: "Trial-to-paid nurture",
        trigger: "When a free trial starts",
        steps: [
          "Send a welcome email with onboarding resources and a kickoff call link",
          "Drip product education emails over the first 7 days with feature walkthroughs",
          "Trigger a check-in SMS on day 10 if the user has not booked an onboarding call",
          "Notify the account executive when the trial enters its final 3 days",
        ],
      },
      {
        name: "Cold lead re-engagement",
        trigger: "When a lead has had no activity for 60 days",
        steps: [
          "Tag the contact as dormant and remove them from active nurture",
          "Send a re-engagement email referencing their original use case",
          "If they click, move them back into the active pipeline and notify the rep",
          "If no engagement after 3 attempts, archive the contact",
        ],
      },
    ],
    faqs: [
      { q: "How does WellPlan handle lead scoring for B2B?", a: "You define scoring rules based on form data, email engagement, page visits, and contact properties. Leads accumulate points across interactions, and you can trigger routing, notifications, or automations once a contact crosses a threshold." },
      { q: "Can the AI chatbot qualify enterprise leads?", a: "Yes. You can configure the chatbot with custom qualification questions covering company size, role, budget, and timeline. It books meetings on the right rep's calendar and writes the full conversation back to the contact record." },
      { q: "Does WellPlan integrate with my existing CRM?", a: "WellPlan can act as your primary CRM with pipelines, contacts, and deal tracking. It also connects to outside systems through webhooks and native integrations, so you can sync lead data with tools your sales team already uses." },
      { q: "Can I run account-based campaigns?", a: "You can tag contacts by account, persona, and buying stage, then target campaigns to specific account lists across email, SMS, and WhatsApp. Multiple stakeholders inside one account can be tracked and nurtured in parallel." },
      { q: "How do I prevent leads from going cold during long sales cycles?", a: "Build multi-step nurture sequences that send touchpoints over weeks or months across email, SMS, and WhatsApp. Sequences pause when a lead engages directly with a rep and resume automatically if the deal stalls." },
    ],
  },

  'ecommerce': {
    longDescription: "Most e-commerce shoppers leave without buying, and the ones who do convert often never come back. Recovering abandoned carts, answering product questions in real time, and bringing past customers back for a second order are the highest-leverage moves a store can make. WellPlan connects to your storefront and unifies every shopper conversation across WhatsApp, Instagram DM, SMS, and email. Automated cart recovery, post-purchase follow-up, review requests, and win-back campaigns run in the background, while the AI chatbot answers product questions around the clock so browsers convert before they bounce.",
    painPoints: [
      "A large share of shoppers add items to cart but leave before checking out, and you have no system to bring them back.",
      "Product questions on Instagram, WhatsApp, and live chat go unanswered overnight, costing you sales.",
      "Past customers buy once and never return because there's no structured follow-up or win-back campaign.",
      "Review requests are sent manually or not at all, leaving social proof and SEO value on the table.",
    ],
    solutions: [
      { title: "Abandoned cart recovery", description: "Trigger automated recovery sequences across SMS, WhatsApp, and email when a shopper leaves items in their cart. Include the product they viewed, a direct checkout link, and an optional incentive if they don't return after the first reminder." },
      { title: "Always-on product chatbot", description: "The AI chatbot answers product questions on your site, Instagram DM, and WhatsApp around the clock. It can pull up product details, sizing, shipping policies, and pass complex questions to a human agent during business hours." },
      { title: "Post-purchase and win-back flows", description: "Send delivery confirmations, care instructions, and replenishment reminders automatically. Segment past customers by product category and last purchase date to trigger win-back campaigns with relevant offers." },
      { title: "Review and referral automation", description: "Request Google and Facebook reviews automatically a set number of days after delivery. Send referral invitations to satisfied customers and track which buyers drive the most word-of-mouth." },
    ],
    workflowExamples: [
      {
        name: "Abandoned cart recovery",
        trigger: "When a shopper adds to cart but doesn't check out within 1 hour",
        steps: [
          "Send an SMS or WhatsApp reminder with the product image and a direct checkout link",
          "If no purchase after 24 hours, send a follow-up email with a small incentive",
          "If still no purchase after 72 hours, send a final WhatsApp message before exiting the flow",
          "Tag the contact as 'abandoned cart recovered' or 'lost' for future segmentation",
        ],
      },
      {
        name: "Post-purchase follow-up",
        trigger: "When an order is marked as delivered",
        steps: [
          "Send a thank-you message with care or usage instructions for the product",
          "Wait 5 days, then send a review request linking to your Google or Facebook profile",
          "Wait 30 days, then send a replenishment reminder or cross-sell offer",
          "Tag the customer for inclusion in future loyalty campaigns",
        ],
      },
      {
        name: "VIP customer win-back",
        trigger: "When a repeat customer hasn't ordered in 90 days",
        steps: [
          "Segment the customer based on their previous category and order value",
          "Send a personalized WhatsApp message with a curated product recommendation",
          "Follow up with an email featuring new arrivals in their category 3 days later",
          "Move responders into an active campaign list and archive non-responders",
        ],
      },
    ],
    faqs: [
      { q: "Can WellPlan recover abandoned carts across SMS and WhatsApp?", a: "Yes. You can build a recovery sequence that sends across SMS, WhatsApp, and email, including the abandoned product and a direct checkout link. Most stores see strong recovery from the first SMS sent within an hour of abandonment." },
      { q: "How do I manage Instagram and WhatsApp questions in one place?", a: "The unified inbox brings WhatsApp, Instagram DM, Facebook Messenger, web chat, SMS, and email into a single view. Your team responds from one screen, and the AI chatbot can handle common product questions automatically." },
      { q: "Can I automate review requests after delivery?", a: "Yes. Trigger a review request workflow when an order status updates to delivered. The customer receives a message at the optimal time with a direct link to your Google or Facebook profile to leave a review." },
      { q: "Does WellPlan work for both DTC and marketplace sellers?", a: "WellPlan focuses on the conversations and follow-up around your store. DTC brands typically connect their storefront directly, while marketplace sellers can drive traffic to landing pages and capture customer data through forms and chat." },
      { q: "Can I segment customers by purchase behavior?", a: "Yes. Tag and segment customers by product category, order value, frequency, and last purchase date. Use those segments to target win-back, replenishment, and loyalty campaigns across SMS, WhatsApp, and email." },
    ],
  },

  'real-estate': {
    longDescription: "Property inquiries come in fast and from every channel: web forms, WhatsApp, Instagram DM, portal listings, and phone calls. Buyers expect a reply within minutes, and the agent who responds first usually wins the showing. WellPlan unifies every inquiry channel, qualifies leads automatically with the AI chatbot or voice agent, and books property viewings directly into your calendar. Long-cycle buyers and sellers stay engaged through automated nurture sequences with new listings, market updates, and follow-up reminders so deals don't fall through the cracks between contact and close.",
    painPoints: [
      "Buyer inquiries from multiple portals and channels are missed when agents are out showing properties or on calls.",
      "Manually qualifying leads on budget, location, and timeline eats hours that should be spent in front of clients.",
      "Booking and rescheduling viewings by phone or message creates back-and-forth and missed appointments.",
      "Long buying and selling cycles mean leads go cold without consistent follow-up over weeks or months.",
    ],
    solutions: [
      { title: "Instant inquiry response", description: "Capture inquiries from your website, portal listings, WhatsApp, and Instagram into one inbox. Trigger an automatic reply within seconds and route the lead to the right agent based on listing, location, or price range." },
      { title: "AI lead qualification", description: "The AI chatbot or voice agent asks buyers about budget, location, property type, and timeline, then tags the lead and books a viewing for qualified prospects. Agents start every conversation with full context, not from scratch." },
      { title: "Calendar booking for viewings", description: "Share an agent's availability for property showings through a booking link or directly inside an automated conversation. Buyers pick a time, receive confirmations and reminders, and reschedules happen without phone tag." },
      { title: "Long-cycle buyer and seller nurture", description: "Send new listing alerts to buyers based on their saved criteria. Keep sellers engaged with market updates and check-in messages until they're ready to list. Reactivate dormant contacts with targeted SMS or WhatsApp campaigns." },
    ],
    workflowExamples: [
      {
        name: "New listing inquiry",
        trigger: "When a buyer submits a property inquiry form",
        steps: [
          "Send an instant SMS or WhatsApp confirmation with listing details and next steps",
          "Trigger the AI chatbot to ask qualifying questions about budget, timeline, and financing",
          "If qualified, offer the buyer a calendar link to book a viewing with the listing agent",
          "Notify the agent with the full qualification summary on the contact record",
        ],
      },
      {
        name: "Viewing no-show follow-up",
        trigger: "When a scheduled viewing is marked as no-show",
        steps: [
          "Send a friendly WhatsApp message asking if the buyer wants to reschedule",
          "If they respond, share the agent's booking link to pick a new slot",
          "If no response in 48 hours, move the contact into a nurture list with new listings",
          "Notify the agent so they can decide whether to follow up personally",
        ],
      },
      {
        name: "Seller listing anniversary",
        trigger: "When a seller contact has been in the database for 12 months without listing",
        steps: [
          "Send a market update email with recent sales in their neighborhood",
          "Follow up 5 days later with an SMS offering a free valuation",
          "If they respond, book a valuation appointment on the agent's calendar",
          "Tag responders as 'warm sellers' for prioritized agent follow-up",
        ],
      },
    ],
    faqs: [
      { q: "Can WellPlan capture leads from property portals?", a: "Yes. You can route inquiries from your website forms, WhatsApp, Instagram DM, and email into the unified inbox. Portal leads forwarded via email can be parsed into the CRM so every inquiry starts an automated response within seconds." },
      { q: "How does the AI chatbot qualify property buyers?", a: "You configure the chatbot to ask about budget range, preferred locations, property type, financing status, and timeline. Based on the answers, it tags the lead, books a viewing for qualified buyers, or moves the contact into a longer-term nurture sequence." },
      { q: "Can buyers book property viewings without calling the agent?", a: "Yes. Buyers can pick a viewing time directly from an agent's calendar through a booking link, inside a chatbot conversation, or via WhatsApp. They receive automated confirmations and reminders, and rescheduling happens through the same link." },
      { q: "How do I keep long-cycle buyers and sellers engaged?", a: "Build nurture sequences that send new listing alerts to buyers matching their criteria and market updates to sellers. Sequences can run over months, pause when a lead engages an agent directly, and resume automatically if activity goes quiet." },
      { q: "Can I assign leads to specific agents on my team?", a: "Yes. Set routing rules based on listing, neighborhood, price range, or round-robin distribution. Each agent sees their assigned leads in their pipeline, gets notified of new inquiries, and can be held accountable through activity tracking." },
    ],
  },

  'coaching': {
    longDescription: "Coaches and consultants sell expertise that doesn't scale with hours in the day. Every discovery call, intake form, and follow-up message you send manually is time you can't spend with paying clients. WellPlan automates the front end of your business so you can fill your calendar with qualified prospects, not unqualified ones. The AI chatbot screens new inquiries 24/7, automated workflows handle webinar registrations and client onboarding, and nurture sequences keep your audience engaged between launches. You stay focused on coaching while the platform handles the operational load.",
    painPoints: [
      "Discovery calls fill your calendar with unqualified prospects who don't match your offer or pricing.",
      "Webinar and lead magnet registrations require manual follow-up to convert into paying clients.",
      "New client onboarding involves repetitive emails, intake forms, and contract steps that eat into delivery time.",
      "Past clients and warm leads go quiet because there's no consistent nurture between launches or program cohorts.",
    ],
    solutions: [
      { title: "24/7 lead qualification", description: "The AI chatbot engages visitors on your site, asks qualifying questions about their situation and budget, and books discovery calls only with prospects who match your offer. Unqualified leads enter a nurture track instead of cluttering your calendar." },
      { title: "Webinar and event automation", description: "Build registration funnels with landing pages and forms. Send confirmation emails, SMS reminders before the session, and a tailored follow-up sequence to attendees and no-shows based on their behavior." },
      { title: "Client onboarding workflows", description: "When a client signs up, trigger a sequence that delivers welcome materials, intake forms, scheduling links, and program access. Tag the client by program and cohort so future communication and renewals stay organized." },
      { title: "Audience nurture between launches", description: "Keep your list engaged with weekly content drips, success stories, and case-relevant emails between program launches. Re-engage dormant contacts with targeted SMS or WhatsApp messages when a new offer is ready." },
    ],
    workflowExamples: [
      {
        name: "Discovery call qualification",
        trigger: "When a prospect requests a discovery call",
        steps: [
          "Send the AI chatbot or a qualification form to capture goals, budget, and timeline",
          "If qualified, offer a calendar link to book directly into your discovery call schedule",
          "Send confirmation, a pre-call questionnaire, and a reminder 24 hours before the session",
          "If not qualified, route the prospect into a nurture sequence with educational content",
        ],
      },
      {
        name: "Webinar registration and follow-up",
        trigger: "When someone registers for a free webinar",
        steps: [
          "Send a confirmation email with the join link and calendar invite",
          "Send SMS reminders 24 hours and 1 hour before the session starts",
          "After the webinar, send attendees an offer email and no-shows a replay link",
          "Tag responders for sales follow-up and non-responders for a longer nurture track",
        ],
      },
      {
        name: "New client onboarding",
        trigger: "When a new client completes their purchase",
        steps: [
          "Send a welcome email with program access, intake form, and scheduling link",
          "Trigger a reminder if the intake form isn't completed within 48 hours",
          "Send weekly check-in messages aligned with the program timeline",
          "Schedule a renewal or upsell conversation in the final week of the engagement",
        ],
      },
    ],
    faqs: [
      { q: "How does WellPlan help me avoid unqualified discovery calls?", a: "The AI chatbot and qualification forms ask about goals, budget, and timeline before a prospect sees your calendar. Only prospects who match your criteria get a booking link, while others enter a nurture sequence until they're ready or self-select out." },
      { q: "Can I run webinars and live events through WellPlan?", a: "You can build registration landing pages, capture sign-ups through forms, send confirmation and reminder sequences, and follow up with attendees and no-shows differently. WellPlan handles the marketing and follow-up while you use your existing webinar platform to host." },
      { q: "Can I automate client onboarding for a group program?", a: "Yes. When a client joins, you can trigger a workflow that sends welcome materials, intake forms, scheduling links, and program resources. Tag clients by cohort so reminders and check-ins fire in sync with your program timeline." },
      { q: "How do I stay in touch with past clients and warm leads?", a: "Build long-running nurture sequences that send weekly or bi-weekly content. Tag contacts by interest area and program history, then run targeted campaigns when you launch a new offer or open enrollment for a cohort." },
      { q: "Can the AI voice agent handle inbound calls from prospects?", a: "Yes. The AI voice agent can answer inbound calls, ask qualifying questions, share basic information about your offers, and book a discovery call directly on your calendar. Calls are logged to the contact record so you have full context before the conversation." },
    ],
  },

  'healthcare': {
    longDescription: "Healthcare practices lose patients to slow phone response, missed appointments, and inconsistent follow-up. Front-desk teams are stretched thin handling intake, scheduling, and reminders manually. WellPlan helps practices acquire and retain patients by automating appointment reminders, recall sequences, patient feedback collection, and review requests. Two-way SMS and WhatsApp let patients confirm or reschedule appointments without phone tag, while the AI voice agent can handle inbound calls when staff are busy. HIPAA-aligned configurations are available through enterprise plans for practices that require additional safeguards around patient communication.",
    painPoints: [
      "Patients call to book or reschedule and get sent to voicemail, then choose another practice.",
      "No-show rates stay high because reminders are inconsistent or sent only by email.",
      "Recall outreach for annual visits or follow-ups falls behind because it's a manual front-desk task.",
      "Online reviews are scarce because the practice doesn't have a system for asking satisfied patients to share their experience.",
    ],
    solutions: [
      { title: "Appointment reminders and confirmations", description: "Send automated SMS, email, or WhatsApp reminders before each appointment with the option for the patient to confirm or reschedule. Two-way replies are routed to the unified inbox so front-desk staff can handle changes without phone tag." },
      { title: "Patient recall and follow-up", description: "Trigger recall sequences for annual visits, follow-up appointments, and treatment plans. Patients who don't book after the first message receive a structured follow-up so the front desk doesn't have to track who to chase." },
      { title: "Patient feedback and review requests", description: "After an appointment, send a feedback message asking about the patient's experience. Direct happy patients to leave a Google or Facebook review, and route any concerns straight to your team so they can be addressed quickly." },
      { title: "Compliance-ready configurations", description: "HIPAA-aligned messaging configurations are available through enterprise plans for practices that need additional safeguards around patient communication. Speak with the WellPlan team to scope the right setup for your practice." },
    ],
    workflowExamples: [
      {
        name: "Appointment reminder and confirmation",
        trigger: "When an appointment is scheduled",
        steps: [
          "Send a confirmation SMS with appointment date, time, and location",
          "Send a reminder 48 hours before the appointment with a reply option to confirm or reschedule",
          "If the patient replies asking to reschedule, route the message to the front desk",
          "Send a final reminder 2 hours before the appointment to reduce no-shows",
        ],
      },
      {
        name: "No-show recovery",
        trigger: "When a patient misses their appointment",
        steps: [
          "Send a same-day message asking if they'd like to reschedule",
          "If they respond, offer a calendar link or route them to the front desk",
          "If no response after 3 days, send a follow-up message with available slots",
          "Tag the patient for front-desk follow-up if no booking after a week",
        ],
      },
      {
        name: "Post-visit feedback and review",
        trigger: "When an appointment is marked as completed",
        steps: [
          "Send a short feedback message the next day asking how the visit went",
          "If the patient responds positively, send a follow-up with a Google or Facebook review link",
          "If the patient responds with a concern, route the message to the practice manager",
          "Tag the patient for inclusion in future recall and retention campaigns",
        ],
      },
    ],
    faqs: [
      { q: "Is WellPlan HIPAA compliant?", a: "HIPAA-aligned messaging configurations are available through enterprise plans for practices that need to handle protected health information with additional safeguards. The right setup depends on your practice size, channels, and workflows. Speak with the WellPlan team to scope what's appropriate for your specific use case." },
      { q: "Can patients confirm or reschedule appointments by text?", a: "Yes. Reminders go out via SMS, email, or WhatsApp, and patients can reply directly to confirm or request a reschedule. Replies land in the unified inbox where front-desk staff can respond, or you can build automated workflows to handle common requests." },
      { q: "How does WellPlan help reduce no-shows?", a: "Send multi-touch reminder sequences before each appointment across SMS, email, and WhatsApp with confirmation options. Practices that move from a single email reminder to a multi-channel sequence typically see a meaningful drop in no-shows over time." },
      { q: "Can I automate patient recall for annual visits?", a: "Yes. Trigger a recall sequence when a patient is due for a follow-up or annual visit. The sequence sends an initial message, then follows up if the patient doesn't book. Front-desk staff only step in for patients who need a personal touch." },
      { q: "How do I collect more patient reviews?", a: "Trigger a feedback message after each completed appointment. Patients who report a positive experience receive a follow-up with a direct link to your Google or Facebook profile. Negative responses are routed to your practice manager so issues are addressed before they become public." },
    ],
  },
};

export function getIndustryContent(slug) {
  return industryContent[slug] || null;
}

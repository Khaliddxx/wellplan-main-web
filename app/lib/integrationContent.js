/**
 * Per-integration enriched content for SEO and detail pages.
 *
 * Schema:
 *   slug: matches integrations.js slug
 *   longDescription: 60–100 word paragraph describing the integration
 *   useCases: array of { title, description } — 3 items, 30–50 words each
 *   setupSteps: array of strings — 3–5 high-level steps a user takes to connect
 *   faqs: array of { q, a } — 3–4 Q&A pairs (a: 30–60 words)
 *
 * Rules:
 *   - Only information that is generally publicly verifiable about the third-party
 *     tool's capabilities.
 *   - No fabricated metrics, customer names, or testimonials.
 *   - No mention of underlying platform infrastructure.
 *   - All claims describe what is possible through the WellPlan UI.
 */
export const integrationContent = {
  "whatsapp": {
    longDescription: "WhatsApp is the world's most widely used messaging app, with over two billion users across more than 180 countries. The official WhatsApp Business API lets verified businesses send and receive messages at scale, using approved templates for outbound notifications and free-form replies within an active session. Connecting WhatsApp to WellPlan brings every conversation into a unified inbox, lets teams reply two-way from any device, triggers automated workflows when a message arrives, and syncs each contact into the CRM. All chats live alongside email, SMS, and social messages in one timeline.",
    useCases: [
      { title: "Send appointment reminders at scale", description: "A dental clinic uses pre-approved WhatsApp templates to send reminders 24 hours before each appointment. Replies route into WellPlan's unified inbox, where staff confirm, reschedule, or cancel directly inside the contact record without switching apps." },
      { title: "Qualify leads with an AI chatbot", description: "A real estate agency points Facebook and Google ads to a WhatsApp click-to-chat link. WellPlan's AI chatbot greets each lead, asks qualifying questions about budget and location, tags the contact, and books a viewing on the agent's calendar." },
      { title: "Recover abandoned bookings", description: "A travel agency triggers a WhatsApp workflow when a customer starts but does not complete a booking. A short message goes out within the 24-hour service window, and the contact's pipeline stage updates automatically based on their reply." }
    ],
    setupSteps: [
      "Apply for a WhatsApp Business API account through a Meta Business Manager and verify your business.",
      "Connect your WhatsApp Business number to WellPlan from the Integrations settings page.",
      "Submit message templates for any outbound campaigns you plan to send and wait for Meta approval.",
      "Build workflows, assign the inbox to your team, and start replying to inbound messages."
    ],
    faqs: [
      { q: "Can I send marketing messages to anyone on WhatsApp?", a: "No. WhatsApp only allows outbound messages to users who have opted in to receive them, and those messages must use a template approved by Meta. Free-form replies are only permitted inside the 24-hour customer service window opened by an inbound message." },
      { q: "What is the 24-hour session window?", a: "When a customer messages your business, a 24-hour window opens during which you can send free-form replies at no per-message template fee. After the window closes, you must use an approved template to re-engage that contact." },
      { q: "Do I need a verified Meta Business account?", a: "Yes. The official WhatsApp Business API requires a Meta Business Manager account and business verification. Verification involves submitting legal documents and confirming domain ownership before your number can be used for messaging at scale." },
      { q: "Can I use my existing WhatsApp number?", a: "You can migrate an existing personal or WhatsApp Business app number to the API, but once migrated it can no longer be used in the consumer app. Many businesses choose to use a new dedicated number to avoid this trade-off." }
    ]
  },
  "facebook-messenger": {
    longDescription: "Facebook Messenger is Meta's standalone messaging app, with more than a billion active users worldwide. Businesses with a Facebook Page can receive messages from customers who click the Send Message button, reply to an ad, or message the Page directly. Connecting Messenger to WellPlan routes every new conversation into a unified inbox alongside email, SMS, and other channels. Teams can reply two-way, trigger automated workflows, qualify leads with an AI chatbot, and sync each contact into the CRM. No more switching between Page inbox tabs to keep up with customer chats.",
    useCases: [
      { title: "Capture leads from Click-to-Messenger ads", description: "A local gym runs Facebook ads with a Send Message call-to-action. Each new conversation creates a contact in WellPlan, an automated welcome message goes out, and the AI chatbot books a free trial session on the trainer's calendar." },
      { title: "Provide post-purchase support", description: "An e-commerce brand directs order confirmation emails to Messenger for follow-up questions. Customers ask about shipping or returns inside Messenger, and the support team replies from WellPlan's inbox with full order context loaded from a custom field." },
      { title: "Re-engage past Page visitors", description: "A salon segments contacts who messaged the Page more than 30 days ago. A workflow sends a personal check-in inside the 24-hour standard messaging window once a customer replies, then tags responders for a follow-up promotional sequence." }
    ],
    setupSteps: [
      "Make sure you are an admin of the Facebook Page you want to connect.",
      "Open WellPlan's Integrations settings and authorize the Facebook connection with the required Page permissions.",
      "Select the Page or Pages whose Messenger conversations you want to route into WellPlan.",
      "Configure your inbox, set up an AI chatbot or auto-reply if desired, and start handling messages."
    ],
    faqs: [
      { q: "Can I message anyone on Messenger?", a: "No. Meta's platform policies require that a user initiate the conversation, or that you have a valid message tag (such as a confirmed event update or post-purchase update). Promotional broadcasts to people who have not messaged you are not permitted." },
      { q: "What is the 24-hour messaging window?", a: "Once a user messages your Page, you have 24 hours to send standard messages, including promotional content. After that window, you can only send messages that fit specific Meta-approved tags such as account updates or confirmed event reminders." },
      { q: "Do I need a Facebook Page?", a: "Yes. Messenger for business runs on top of a Facebook Page, so you must have a Page that you administer. Personal Messenger accounts cannot be connected to WellPlan or any other business messaging tool." },
      { q: "Will old messages import?", a: "When you connect a Page, recent conversations are typically loaded into the inbox so your team has context. Going forward, every new message and reply syncs in real time alongside email, SMS, and other channels." }
    ]
  },
  "telegram": {
    longDescription: "Telegram is a cloud-based messaging app with more than 800 million users, popular for both personal chats and large public communities. Businesses interact with users through Telegram bots, which can send and receive messages, handle commands, and broadcast updates to subscribers. Connecting a Telegram bot to WellPlan routes every conversation into the unified inbox, lets teams reply two-way, triggers automated workflows on incoming messages, and saves each subscriber as a contact in the CRM. Telegram conversations sit next to WhatsApp, SMS, and email in one timeline.",
    useCases: [
      { title: "Run a crypto or trading community", description: "A trading education business uses a Telegram bot to onboard new subscribers. When a user starts the bot, WellPlan creates a contact, tags them by interest, and runs a drip sequence delivering free lessons before pitching the paid course." },
      { title: "Deliver order and shipping updates", description: "A drop-shipping store invites customers to subscribe to a Telegram bot for order updates. Workflows trigger from order events and push status messages directly into Telegram, with two-way replies routed back to the support inbox." },
      { title: "Qualify leads from paid ads", description: "A SaaS company runs ads that deep-link to a Telegram bot. The AI chatbot collects company size and use case, tags the lead, and creates a deal in the pipeline before notifying a sales rep to take over the conversation." }
    ],
    setupSteps: [
      "Create a new bot in Telegram by messaging @BotFather and following the prompts to get a bot token.",
      "Open WellPlan's Integrations settings and paste the bot token to connect.",
      "Share your bot's t.me link or QR code so users can start a conversation.",
      "Build workflows, assign the inbox, and start handling messages two-way."
    ],
    faqs: [
      { q: "Can a Telegram bot message users first?", a: "No. Telegram requires a user to start a conversation with a bot before the bot can send them messages. After the user starts the bot, you can message them freely until they block the bot or remove the chat." },
      { q: "Do I need a Telegram Business account?", a: "No. The Bot API is available to any Telegram user free of charge. You create a bot through @BotFather, which gives you a token used to authenticate API requests. Telegram Premium and Business features are separate from the Bot API." },
      { q: "Can I broadcast to all my bot subscribers?", a: "Yes, as long as those users have started your bot and have not blocked it. WellPlan workflows can target tagged segments of subscribers, but you are still bound by Telegram's rate limits on outbound bot messages." },
      { q: "What's the difference between a bot and a channel?", a: "A bot is an automated account that handles two-way conversations with individual users. A channel is a one-way broadcast feed to subscribers. WellPlan connects via bots, which is what enables inbox conversations and CRM workflows." }
    ]
  },
  "wechat": {
    longDescription: "WeChat is China's dominant messaging and lifestyle app, with more than 1.3 billion monthly active users. Through Official Accounts, businesses can send messages, run mini-programs, and accept payments inside the app. Connecting a WeChat Official Account to WellPlan brings inbound conversations into the unified inbox, lets teams reply two-way, triggers automated workflows when followers send a message, and saves each follower as a contact in the CRM. For brands targeting Chinese audiences in mainland China or the diaspora, WeChat conversations live next to email and other channels in one timeline.",
    useCases: [
      { title: "Engage Chinese tourism leads", description: "A European luxury hotel attracts inquiries from Chinese travel agents through its WeChat Service Account. Each new follower triggers a welcome flow with brochures and pricing, and the unified inbox lets the multilingual sales team reply during the 48-hour service window." },
      { title: "Onboard cross-border e-commerce customers", description: "A skincare brand exporting to China uses WeChat to support customers buying through Tmall Global. Order confirmation triggers a follow-up message via Official Account, and customer service replies flow back into WellPlan for the support team to handle." },
      { title: "Recruit international students", description: "A university enrolls Chinese students through its WeChat Service Account. Prospective applicants chat with the admissions team, the AI chatbot pre-qualifies them with questions about program interest, and warm leads land on the pipeline for follow-up." }
    ],
    setupSteps: [
      "Register a WeChat Official Account on the official Weixin platform — typically a Service Account for businesses.",
      "Complete WeChat's verification process, which includes submitting business registration documents.",
      "Connect the Official Account to WellPlan from the Integrations settings using the provided credentials.",
      "Build welcome flows, assign the inbox, and start engaging followers."
    ],
    faqs: [
      { q: "Do I need a Chinese business entity to use WeChat for business?", a: "For full Service Account features inside mainland China you generally need a registered business in China or to use an authorized cross-border service provider. Overseas Official Accounts are available but have a more limited feature set than mainland-registered accounts." },
      { q: "What's the difference between Subscription and Service Accounts?", a: "Subscription Accounts are best for content publishing and can send daily mass messages, but appear in a folder rather than the chat list. Service Accounts can send four mass messages per month, integrate with APIs, and appear as a top-level chat — more suitable for CRM workflows." },
      { q: "Can I send marketing broadcasts to followers?", a: "Service Accounts are limited to four mass broadcast messages per month to all followers. Outside that limit, you can only reply to users within a 48-hour customer service window after they've sent you a message, similar to WhatsApp's session rules." },
      { q: "How do users find my Official Account?", a: "Followers typically scan a QR code, search the account name in WeChat, or come from a referral link. WellPlan can host the QR code on landing pages and tag contacts by acquisition source so you know which campaign brought each follower in." }
    ]
  },
  "viber": {
    longDescription: "Viber is a messaging app with hundreds of millions of users, especially strong in Eastern Europe, the Balkans, the Philippines, and parts of the Middle East. Viber Business Messages let verified businesses send transactional and promotional content to opted-in users, while Viber Bots handle two-way conversations. Connecting Viber to WellPlan routes inbound messages into the unified inbox, lets teams reply two-way, triggers automated workflows on incoming messages, and syncs each subscriber as a contact in the CRM. Viber sits alongside WhatsApp, SMS, and other channels in one timeline.",
    useCases: [
      { title: "Send transactional alerts in CEE markets", description: "A logistics provider serving Romania and Bulgaria sends delivery notifications through Viber Business Messages. Customers who reply with questions land in WellPlan's inbox, where dispatchers handle the conversation and update the contact's order status." },
      { title: "Promote retail offers to opted-in subscribers", description: "A regional supermarket chain runs a Viber Bot for loyalty members. Workflow triggers send weekly promotion messages to tagged segments, and members reply to claim offers, which the AI chatbot processes and logs in the CRM." },
      { title: "Support customers in the Philippines", description: "A local bank uses a Viber Bot for balance inquiries and support. The bot handles routine questions through automated responses, and complex cases route to a human agent inside WellPlan's inbox with full conversation history attached." }
    ],
    setupSteps: [
      "Create a Viber Bot or Business Messages account through Rakuten Viber's business portal.",
      "Verify your business and obtain the bot token or API credentials from Viber.",
      "Open WellPlan's Integrations settings, paste the credentials, and confirm the connection.",
      "Configure workflows, assign the inbox to your team, and publish the bot URI or QR code so users can subscribe."
    ],
    faqs: [
      { q: "Who can send Viber Business Messages?", a: "Viber Business Messages require approval from Rakuten Viber and are typically reserved for verified brands. Smaller businesses often start with a Viber Bot, which is more accessible and supports two-way conversations with users who initiate contact." },
      { q: "Do users need to opt in?", a: "Yes. Users must either start a conversation with your bot or explicitly opt in to receive Business Messages. Spam and unsolicited promotional content violate Viber's policies and can result in your account being suspended." },
      { q: "Which countries use Viber the most?", a: "Viber is particularly popular in Eastern European countries such as Bulgaria, Serbia, and Ukraine, in the Philippines and other parts of Southeast Asia, and across the Greek and Middle Eastern diasporas. It's also widely used in Russia and Belarus." },
      { q: "Can I send rich media through Viber?", a: "Yes. Viber supports text, images, videos, files, stickers, and rich button-based templates called Rich Media or Carousels. WellPlan workflows can trigger these message types based on contact tags, pipeline stage, or custom events." }
    ]
  },
  "line": {
    longDescription: "LINE is the dominant messaging app in Japan, Taiwan, and Thailand, with strong adoption in Indonesia as well. Businesses connect with users through LINE Official Accounts, which support broadcast messages, one-to-one chat, automated greetings, and rich menus inside the app. Connecting a LINE Official Account to WellPlan routes friends' messages into the unified inbox, lets teams reply two-way, triggers automated workflows from incoming messages, and saves each follower as a contact in the CRM. LINE chats live alongside email, SMS, and other social channels in one timeline.",
    useCases: [
      { title: "Drive in-store foot traffic in Japan", description: "A Tokyo restaurant group sends weekly LINE broadcasts about new menus to tagged followers. Reservations and questions come back to WellPlan's inbox, the AI chatbot books tables on the calendar, and contacts are segmented by which location they visit." },
      { title: "Support customers in Thailand", description: "A Bangkok-based e-commerce store handles all customer service through its LINE Official Account. Inbound messages create or update contacts in WellPlan, workflows tag conversations by topic, and the support team replies from the unified inbox." },
      { title: "Promote events in Taiwan", description: "A live music venue in Taipei pushes event announcements via LINE broadcasts. When a follower replies to ask about tickets, the AI chatbot answers basic questions, and ticket purchase intent triggers a workflow that moves the contact into the buyer pipeline." }
    ],
    setupSteps: [
      "Create a LINE Official Account on the LINE for Business platform.",
      "Enable the Messaging API and generate a channel access token from the LINE Developers Console.",
      "Open WellPlan's Integrations settings and paste the channel access token and channel secret.",
      "Build greeting messages, rich menus, and workflows, then publish the QR code so users can add your account as a friend."
    ],
    faqs: [
      { q: "What's the difference between LINE Official Account plans?", a: "LINE offers Free, Light, and Standard plans that differ in the number of free monthly broadcast messages. All plans support the Messaging API, but heavier broadcasting volumes require paid plans or purchasing additional message quotas from LINE." },
      { q: "Do users have to add my account as a friend?", a: "Yes. Users become reachable as friends by scanning your account's QR code, tapping an add link, or searching the LINE ID. Once they're friends, you can broadcast to them within your plan's quota or chat one-to-one freely." },
      { q: "Can I send rich content?", a: "Yes. LINE supports text, images, video, audio, location, stickers, and rich templates including carousels, buttons, and Flex Messages. WellPlan workflows can trigger these message types based on tags, custom fields, or pipeline stage changes." },
      { q: "Is there a messaging window like WhatsApp's?", a: "LINE does not enforce a strict 24-hour service window. You can message friends as long as they have not blocked your account, subject to your plan's monthly message quota. Quality content and clear value reduce blocking and unfriend rates." }
    ]
  },
  "slack": {
    longDescription: "Slack is a workplace messaging platform used by millions of teams to organize conversations into channels, threads, and direct messages. While Slack is built for internal communication rather than customer chat, businesses integrate it with their tools so that important events surface where the team already works. Connecting Slack to WellPlan pushes notifications about new leads, won deals, missed calls, or workflow events into chosen channels, and lets team members take basic CRM actions from inside Slack. The result is faster response times without anyone needing to keep a separate CRM tab open all day.",
    useCases: [
      { title: "Notify sales reps of new leads instantly", description: "A B2B agency pipes new inbound leads from forms and landing pages into a dedicated #new-leads Slack channel. Each notification shows the contact's name, source, and assigned rep so the team can react within minutes rather than hours." },
      { title: "Celebrate closed deals as they happen", description: "When a deal moves to Won in WellPlan's pipeline, a workflow posts to a #wins channel with the deal value and rep. The whole company sees momentum in real time without anyone manually announcing each close." },
      { title: "Surface missed calls and unread messages", description: "A service business routes notifications about missed calls and unanswered customer messages into a #urgent channel. Whoever is available claims the task in Slack, then handles the customer inside WellPlan's unified inbox." }
    ],
    setupSteps: [
      "Open WellPlan's Integrations settings and click Connect Slack.",
      "Authorize the WellPlan app in your Slack workspace, choosing which channels it can post to.",
      "Map workflow triggers — new contact, deal stage change, missed call, etc. — to specific Slack channels.",
      "Test a notification, then enable the workflows for your team."
    ],
    faqs: [
      { q: "Will Slack messages from customers come into WellPlan?", a: "Slack is designed for internal team communication, not direct customer messaging. The integration sends event notifications from WellPlan into Slack rather than treating Slack as a customer channel. For customer chat, use WhatsApp, Messenger, SMS, or web chat." },
      { q: "Which Slack plans work with integrations?", a: "Slack apps work on Free, Pro, Business+, and Enterprise Grid plans. Free workspaces have limits on message history and the number of integrations, so heavier users typically upgrade. The integration itself does not require a paid Slack tier to install." },
      { q: "Can I post to private channels?", a: "Yes. When you authorize the WellPlan app in Slack, you can grant access to specific private channels by inviting the app into each one. Public channels can be selected directly during integration setup." },
      { q: "Can I trigger workflows from Slack?", a: "The primary direction is WellPlan → Slack for notifications. Depending on the workflow setup, slash commands or buttons can trigger basic actions such as assigning a contact or marking a task complete inside WellPlan." }
    ]
  },
  "discord": {
    longDescription: "Discord is a community chat platform with hundreds of millions of users, originally built for gamers but now home to communities of every kind — creators, course students, crypto traders, SaaS users, and more. Servers organize conversations into channels and voice rooms, with bots extending functionality. Connecting Discord to WellPlan pushes event notifications into chosen server channels and lets community managers act on important signals where their members already gather. New members, role changes, and key events can flow into the CRM so each community member becomes a contact you can nurture.",
    useCases: [
      { title: "Welcome new community members", description: "A course creator runs a Discord server for students. When someone joins the server, a workflow creates a WellPlan contact, tags them as Active Student, and posts a welcome message in the #introductions channel mentioning the new member." },
      { title: "Notify the team of paid member activity", description: "A trading community gives paid members a special role. When a member upgrades, Discord notifies WellPlan, which moves the contact into the Premium pipeline stage and posts to a private #moderators channel for the team to acknowledge." },
      { title: "Broadcast launches and announcements", description: "A SaaS startup posts product update announcements into Discord from a WellPlan workflow when a new feature ships. The same workflow emails the broader newsletter list so launches go out everywhere from one trigger." }
    ],
    setupSteps: [
      "Create a Discord bot or use the WellPlan-provided app from the Discord Developer Portal.",
      "Invite the bot to your Discord server and grant it permission to read and post in the channels you want.",
      "Open WellPlan's Integrations settings and link the bot token and server ID.",
      "Map workflow triggers to Discord channels and roles, then enable the integration."
    ],
    faqs: [
      { q: "Can I message Discord members one-to-one from WellPlan?", a: "Direct messages from a bot require the user to share a server with the bot and to have DMs from server members enabled. Many users disable DMs from non-friends, so DMs from bots are unreliable. Channel posts are more consistent for community communication." },
      { q: "Will Discord chat history sync into WellPlan?", a: "The integration focuses on event-driven notifications and member lifecycle events rather than mirroring every channel message. Public community chat lives in Discord, while CRM signals like new members, role assignments, and webhook events flow into WellPlan." },
      { q: "Do I need a Discord Nitro or paid plan?", a: "No. Discord servers and bots work on the free tier. Nitro is a personal subscription that gives users perks like larger uploads and custom emoji, but it is not required for running a community server or integrating bots." },
      { q: "Can I use roles to segment contacts?", a: "Yes. Workflows can listen for role assignment events and tag the matching WellPlan contact accordingly. This lets you segment community members by tier — free, paid, VIP, alumni — and run different nurture flows for each segment." }
    ]
  },
  "instagram": {
    longDescription: "Instagram is one of the world's largest social platforms, with more than two billion monthly users and a strong concentration of consumer purchase intent. Business and Creator accounts can receive direct messages, story replies, and comment-triggered DMs through Meta's Instagram Messaging API. Connecting Instagram to WellPlan routes every inbound DM, story reply, and mention into the unified inbox, lets teams reply two-way, triggers automated workflows from comments or keywords, and saves each conversation partner as a contact in the CRM. Instagram chats live alongside Messenger, WhatsApp, and email in one timeline.",
    useCases: [
      { title: "Convert story replies into bookings", description: "A makeup artist posts a story with a call-to-action to reply with the word PRICING. WellPlan's workflow catches the keyword, auto-sends a price list as a DM, qualifies budget through the AI chatbot, and books a consultation on the calendar." },
      { title: "Handle comment-to-DM lead capture", description: "A fitness coach posts a Reel inviting viewers to comment a keyword to get a free workout PDF. The integration sends the PDF as a DM, creates the contact in WellPlan, and starts a five-day drip sequence promoting the paid program." },
      { title: "Run a unified support inbox", description: "A clothing brand consolidates customer questions from DMs and story replies into WellPlan's inbox. Support reps respond inside the 24-hour standard messaging window and tag conversations by topic — sizing, shipping, returns — for easy reporting." }
    ],
    setupSteps: [
      "Convert your Instagram account to a Business or Creator account if it is not already.",
      "Link your Instagram account to a Facebook Page you administer.",
      "Open WellPlan's Integrations settings and authorize Instagram access through Meta's login flow.",
      "Configure DM workflows, comment-to-DM triggers, and AI chatbot responses, then go live."
    ],
    faqs: [
      { q: "Can I message any Instagram user?", a: "No. You can only message users who have first messaged your account, replied to one of your stories, or mentioned your account. Cold outbound DMs from a business account to users you have no prior interaction with are not permitted through the API." },
      { q: "What is Instagram's 24-hour messaging window?", a: "Once a user messages you, replies to a story, or mentions your account, a 24-hour window opens for free-form replies including promotional content. After the window closes, you can only send specific human-agent message tags as defined by Meta." },
      { q: "Do I need a Business or Creator account?", a: "Yes. The Instagram Messaging API only works with Business or Creator accounts linked to a Facebook Page. Personal accounts cannot connect to WellPlan or other DM management tools. Switching account type is free and reversible inside the Instagram app." },
      { q: "Can comments on my posts trigger workflows?", a: "Yes. WellPlan can listen for comments containing specific keywords on your Instagram posts and Reels, then trigger an automated DM to the commenter. This is a common growth pattern often called comment-to-DM automation." }
    ]
  },
  "facebook": {
    longDescription: "Facebook remains one of the largest social platforms in the world, with billions of monthly active users and a deep advertising ecosystem. Businesses operate Facebook Pages, run Lead Ads, host Groups, and engage audiences through posts, comments, and Messenger. Connecting Facebook to WellPlan pulls Lead Ads form submissions directly into the CRM, routes Page Messenger conversations into the unified inbox, and lets workflows respond to comments or new leads automatically. Each lead becomes a contact, each conversation joins the timeline, and your team works from one place instead of bouncing between Ads Manager, the Page inbox, and a separate CRM tab.",
    useCases: [
      { title: "Sync Facebook Lead Ads instantly", description: "A solar installer runs Facebook Lead Ads offering a free quote. Each submission flows into WellPlan in real time, an SMS and email go out within seconds, and the lead lands in the Quote Requested pipeline stage ready for a rep to call." },
      { title: "Respond to Page comments automatically", description: "A restaurant group's marketing posts often get comments asking about reservations. A workflow detects relevant keywords in comments, replies publicly with a booking link, and DMs the commenter through Messenger to follow up one-to-one." },
      { title: "Run promotional retargeting", description: "A coaching business builds Custom Audiences from WellPlan contact tags. Leads who watched the webinar but did not buy get a Facebook ad with a final-day offer, while past buyers get a different ad promoting the next-tier program." }
    ],
    setupSteps: [
      "Make sure you are an admin of the Facebook Page and Ad Account you want to connect.",
      "Open WellPlan's Integrations settings and click Connect Facebook to start Meta's OAuth flow.",
      "Grant the requested Page, Lead Ads, and Messenger permissions.",
      "Map Lead Ads forms to WellPlan workflows, configure inbox routing, and test with a sample lead."
    ],
    faqs: [
      { q: "How quickly do Lead Ads sync?", a: "Lead Ads submissions sync to WellPlan in near real time through Meta's webhooks. The exact speed depends on Meta's delivery, but most leads appear in the CRM within seconds, allowing immediate SMS, email, or call follow-up while interest is highest." },
      { q: "Do I need a Business Manager account?", a: "For Lead Ads and most advanced Page features, yes. Meta increasingly requires Pages and Ad Accounts to live inside Business Manager (now Meta Business Suite) for proper permissions, billing, and integrations to function reliably." },
      { q: "Can I push contacts back to Custom Audiences?", a: "Yes. Workflows can sync tagged contact segments to Facebook Custom Audiences for retargeting or lookalike campaigns. This lets you run ads to specific CRM segments — for example, unconverted leads or churned customers — without manual list uploads." },
      { q: "Will Facebook Group posts sync?", a: "Meta has significantly restricted Group API access, and most Group post and member data is no longer available to third-party tools. Page posts, comments, Lead Ads, and Messenger continue to work; Groups are primarily managed inside Facebook directly." }
    ]
  },
  "twitter": {
    longDescription: "X, formerly Twitter, is a real-time conversation platform used by hundreds of millions of people for news, customer support, and brand discovery. Businesses interact through tweets, replies, mentions, and direct messages. Connecting X to WellPlan routes incoming DMs and mentions into the unified inbox, lets teams reply two-way, triggers workflows when someone mentions your brand or sends a DM, and saves each conversation partner as a contact in the CRM. Treat X as a real customer channel instead of a separate browser tab the team forgets to check.",
    useCases: [
      { title: "Handle support requests publicly and privately", description: "A SaaS company monitors mentions of its brand handle. When a user tweets a support question, a workflow notifies the team, and the rep replies publicly while moving the longer conversation into DMs, all logged in WellPlan's inbox." },
      { title: "Capture interest from viral threads", description: "A consultant's tweet goes viral. Replies expressing interest in the service trigger a workflow that DMs each interested user a calendar booking link, creates a contact in WellPlan, and tags the source as the originating tweet." },
      { title: "Run brand monitoring alerts", description: "A retail brand listens for mentions of common misspellings and competitor comparisons. Each new mention creates a task for the social team in WellPlan, and high-priority complaints route directly to the customer success lead via Slack." }
    ],
    setupSteps: [
      "Make sure you have a developer account on the X/Twitter API platform with an appropriate paid tier for the features you need.",
      "Create an app in the X developer portal and generate API keys and OAuth credentials.",
      "Open WellPlan's Integrations settings and connect your X account using the credentials.",
      "Configure DM and mention workflows, assign the inbox, and start engaging."
    ],
    faqs: [
      { q: "Does X charge for API access?", a: "Yes. X moved to a paid API model in 2023. There are Basic, Pro, and Enterprise tiers with different access levels and rate limits. The capabilities available to your integration depend on which tier your X developer account is on." },
      { q: "Can I DM users who don't follow me?", a: "Only if those users have enabled receiving DMs from anyone in their settings, or if they have messaged you first. Otherwise, DMs to non-followers are blocked. Mentioning the user in a public reply remains an option in either case." },
      { q: "Are there rate limits I should know about?", a: "Yes. X enforces rate limits on posting, DMs, and reads. Limits vary by API tier and have changed several times since the paid model launched. Heavy automation users should monitor usage and choose a tier that fits planned send volume." },
      { q: "Will replies to my tweets sync into WellPlan?", a: "Reply visibility through the API depends on your X tier. Mentions of your handle and direct messages are typically supported on standard tiers, while full conversation thread access often requires higher tiers. Check your tier's documentation for specifics." }
    ]
  },
  "linkedin": {
    longDescription: "LinkedIn is the world's largest professional network, with more than a billion members and the richest B2B audience data of any social platform. Businesses use it to share content from Company Pages, run Lead Gen Forms inside ads, and build relationships through messaging. Connecting LinkedIn to WellPlan pulls Lead Gen Form submissions into the CRM in real time, optionally schedules Company Page posts, and lets workflows respond to new leads with email, SMS, or task assignments. LinkedIn signals stop falling through the cracks the moment a campaign ends.",
    useCases: [
      { title: "Sync LinkedIn Lead Gen Forms into the CRM", description: "A B2B SaaS team runs LinkedIn ads with Lead Gen Forms offering a buyer's guide. Each submission flows into WellPlan instantly, an email delivers the guide, and the lead is routed to an SDR based on company size and seniority pulled from the form." },
      { title: "Nurture event registrants", description: "A consultancy promotes a webinar through LinkedIn Lead Gen ads. Registrants are tagged in WellPlan, added to a reminder sequence by email and SMS, and segmented post-event by attendance so non-attenders get a recording and attenders get a sales follow-up." },
      { title: "Schedule Company Page posts", description: "A marketing agency manages multiple clients' LinkedIn Company Pages. Content calendars built in WellPlan publish on schedule, and engagement metrics route into client reports automatically alongside email and ad campaign performance." }
    ],
    setupSteps: [
      "Be an admin of the LinkedIn Company Page and/or Ad Account you want to connect.",
      "Open WellPlan's Integrations settings and authorize LinkedIn through OAuth.",
      "Map Lead Gen Form IDs to specific WellPlan workflows.",
      "Test with a sample submission and enable the integration for your team."
    ],
    faqs: [
      { q: "Can WellPlan send LinkedIn direct messages?", a: "LinkedIn restricts InMail and direct message sending through partner APIs. Most automation tools, including WellPlan, focus on Lead Gen Form sync, Company Page publishing, and ad-related workflows rather than personal messaging. Personal LinkedIn messaging is generally a manual activity." },
      { q: "How quickly do Lead Gen Forms sync?", a: "LinkedIn Lead Gen Form submissions sync to WellPlan in near real time via LinkedIn's API. The exact latency depends on LinkedIn's delivery, but leads typically reach the CRM within seconds, ready for immediate follow-up via email or SMS." },
      { q: "Do I need a Sales Navigator subscription?", a: "No. Lead Gen Forms run through LinkedIn Ads and do not require Sales Navigator. Sales Navigator is a separate subscription aimed at individual reps for prospecting, and most of its features are not available through external APIs." },
      { q: "Can I post to personal LinkedIn profiles?", a: "LinkedIn's API supports publishing to Company Pages but has tightly restricted publishing to personal profiles for years. Most personal-profile publishing now happens directly in the LinkedIn app rather than through third-party scheduling tools." }
    ]
  },
  "tiktok": {
    longDescription: "TikTok is one of the fastest-growing platforms in the world, with more than a billion monthly users and a powerful algorithm for organic reach. Through TikTok for Business, brands run Spark Ads, In-Feed Ads, and Lead Generation campaigns with native forms inside the app. Connecting TikTok to WellPlan pulls Lead Generation form submissions into the CRM in real time and lets workflows respond instantly with email, SMS, or task assignments. Creators and brands stop manually downloading CSVs from TikTok Ads Manager and start treating TikTok leads with the same speed as leads from any other channel.",
    useCases: [
      { title: "Capture leads from In-Feed ads", description: "A driving school runs TikTok In-Feed ads with a Lead Generation form offering a discount on first lessons. Each submission flows into WellPlan in seconds, an SMS confirms the booking link, and the lead lands in the New Inquiry pipeline stage." },
      { title: "Build a creator's audience funnel", description: "A nutrition coach uses TikTok ads to promote a free meal plan. Leads from the in-app form go straight into WellPlan, get the meal plan via email, and enter a multi-day nurture sequence promoting the paid coaching program." },
      { title: "Coordinate with Spark Ads", description: "A skincare brand boosts a creator's organic video as a Spark Ad with a Lead Gen form. Submissions sync into WellPlan tagged with the creator's name and the originating video, making it easy to attribute revenue back to specific creator partnerships." }
    ],
    setupSteps: [
      "Have access to a TikTok for Business Ads Manager account with Lead Generation campaigns set up.",
      "Open WellPlan's Integrations settings and connect TikTok via OAuth.",
      "Authorize WellPlan to read Lead Generation form submissions.",
      "Map TikTok forms to WellPlan workflows and run a test lead through to confirm sync."
    ],
    faqs: [
      { q: "Will TikTok DMs come into WellPlan?", a: "TikTok's API does not provide third-party access to direct messages in the way Instagram or Messenger do. The integration focuses on Lead Generation form sync and ad-related workflows. DM conversations remain inside the TikTok app and inbox." },
      { q: "How quickly do TikTok leads sync?", a: "Lead Generation form submissions sync via TikTok's API in near real time. Most leads reach WellPlan within seconds of the user submitting the in-app form, enabling immediate SMS or email follow-up while engagement is at its peak." },
      { q: "Do I need a TikTok Business account?", a: "Yes. The integration requires a TikTok for Business Ads Manager account. Personal creator accounts cannot run Lead Generation ads or grant the needed API permissions. Converting between account types is straightforward inside TikTok settings." },
      { q: "Can I retarget existing contacts on TikTok?", a: "TikTok Ads Manager supports Custom Audiences built from customer file uploads. WellPlan contact segments can be exported and uploaded to TikTok Custom Audiences for retargeting or lookalike campaigns, similar to the workflow on Meta platforms." }
    ]
  },
  "youtube": {
    longDescription: "YouTube is the world's largest video platform, with billions of monthly users and a creator economy of every imaginable niche. Channels engage audiences through videos, Shorts, livestreams, comments, and Community posts. Connecting YouTube to WellPlan pulls comment activity into workflows so creators can respond to engaged viewers at scale, optionally tracks new subscribers as CRM contacts where appropriate, and lets teams trigger email or SMS sequences from key channel events. Creators stop missing high-intent comments under a fast-growing video and start converting viewers into leads and customers.",
    useCases: [
      { title: "Convert engaged commenters into leads", description: "A finance educator pins a comment offering a free PDF if viewers reply with a keyword. WellPlan's workflow watches for matching comments, sends a YouTube reply with a sign-up link, and adds new sign-ups to a paid course nurture sequence." },
      { title: "Triage support questions on tutorial videos", description: "A software company's tutorial videos attract real support questions in comments. A workflow flags comments containing keywords like error, bug, or help and assigns them to the support team inside WellPlan for follow-up via email." },
      { title: "Promote livestream sign-ups", description: "A creator announces an upcoming livestream through a Community post. Linked sign-up forms feed WellPlan, registrants get an email and SMS reminder series, and post-stream surveys go out automatically to attendees the next day." }
    ],
    setupSteps: [
      "Be the owner or manager of the YouTube channel you want to connect, with access through a Google account.",
      "Open WellPlan's Integrations settings and connect YouTube via Google OAuth.",
      "Grant the requested YouTube Data permissions for channel and comment access.",
      "Map comment keywords, video IDs, or channel events to workflows and enable the integration."
    ],
    faqs: [
      { q: "Can I message YouTube subscribers directly?", a: "No. YouTube does not provide a direct messaging API to channel owners. The integration focuses on comments, Community posts, and channel-level events. To stay in touch with viewers off-platform, creators typically use a lead magnet that captures email or phone." },
      { q: "Will the integration auto-reply to every comment?", a: "Only if you configure it to. Workflows can target comments containing specific keywords on specific videos, which is more effective and safer than blanket auto-replies. Generic mass replies risk being flagged as spam by YouTube and viewers alike." },
      { q: "Do I need YouTube Studio access?", a: "Yes. The connecting Google account must have at least Editor access to the channel in YouTube Studio so it can authorize the requested scopes. Channel Owner access is required for some advanced actions, such as managing channel settings." },
      { q: "Are there API quotas to worry about?", a: "Yes. The YouTube Data API enforces daily quota units, and read or write operations consume different amounts. Heavy automation — for example, watching comments on a very active channel — should be designed to stay within quota or request a quota increase from Google." }
    ]
  },
  "salesforce": {
    longDescription: "Salesforce is the world's most widely used CRM platform, powering sales, service, marketing, and commerce teams from small businesses to the Fortune 500. Its data model centers on Accounts, Contacts, Leads, and Opportunities, with deep customization through custom objects and fields. Connecting Salesforce to WellPlan keeps contact records, leads, and opportunity stages in sync between systems so marketing automations in WellPlan can react to sales data in Salesforce, and vice versa. Teams running multi-channel campaigns in WellPlan can trust that Salesforce remains the system of record for the revenue pipeline.",
    useCases: [
      { title: "Sync inbound leads to Salesforce", description: "A B2B agency captures leads through WhatsApp and Facebook Lead Ads inside WellPlan. Each new contact creates a matching Lead in Salesforce with the original source, allowing AEs to follow Salesforce reporting while marketing keeps nurturing in WellPlan." },
      { title: "Trigger nurture from opportunity stage changes", description: "When a Salesforce opportunity moves to Closed-Lost, a WellPlan workflow tags the contact and starts a long-term nurture sequence by email and SMS. Reps focus on live deals while marketing keeps the relationship warm in the background." },
      { title: "Unify multichannel conversations on the account", description: "A SaaS sales team views Salesforce as the source of truth for accounts. WellPlan logs SMS, WhatsApp, and email threads against the contact and syncs key activity to Salesforce so AEs see channel history without leaving their CRM." }
    ],
    setupSteps: [
      "Confirm you have a Salesforce edition that supports API access and you are an admin or have integration user credentials.",
      "Open WellPlan's Integrations settings and click Connect Salesforce to start the OAuth flow.",
      "Authorize the connection and map Salesforce objects and fields to WellPlan contacts and custom fields.",
      "Configure two-way sync rules, then run a small batch to validate the field mapping before enabling fully."
    ],
    faqs: [
      { q: "Which Salesforce editions support the integration?", a: "API access is included in Salesforce Enterprise, Performance, Unlimited, and Developer editions. Professional Edition requires an API access add-on. Essentials does not include the REST API, so it generally cannot be used with most third-party integrations including WellPlan." },
      { q: "Is the sync two-way?", a: "Yes. You can configure WellPlan to push contacts, custom fields, and activity into Salesforce, and to pull updates from Salesforce back into WellPlan. Field-level mappings let you control which direction is authoritative for each piece of data." },
      { q: "Will custom objects sync?", a: "Standard objects such as Lead, Contact, Account, and Opportunity are supported out of the box. Custom objects can typically be synced through configuration depending on your plan, but complex custom object hierarchies may require help from your Salesforce admin during mapping." },
      { q: "How do I avoid duplicate records?", a: "WellPlan matches on email and phone by default and respects Salesforce's duplicate rules where configured. For best results, enable Salesforce's standard duplicate management and decide which system wins on conflicts during the initial integration setup." }
    ]
  },
  "hubspot": {
    longDescription: "HubSpot is a leading inbound marketing, sales, and service platform with a free CRM at its core and paid Hubs for marketing automation, sales acceleration, and customer service. Its contact-based data model and clean API make it a common system of record for growing B2B and B2C teams. Connecting HubSpot to WellPlan syncs contacts, companies, deals, and lifecycle stages between platforms so SMS, WhatsApp, and voice workflows in WellPlan can react to HubSpot data and push activity back. Teams keep HubSpot's marketing analytics intact while extending reach through WellPlan's multichannel inbox.",
    useCases: [
      { title: "Trigger SMS from HubSpot lifecycle changes", description: "When a HubSpot contact's lifecycle stage updates to Sales Qualified Lead, a WellPlan workflow sends an SMS introduction from the assigned rep and books a discovery call on their calendar, accelerating outreach while the lead is still warm." },
      { title: "Sync deal stages with multichannel nurture", description: "A consultancy maps HubSpot deal stages to WellPlan pipeline stages. As a deal advances, WellPlan triggers different email and WhatsApp sequences, while HubSpot remains the source of truth for forecasted revenue and reporting." },
      { title: "Add SMS to HubSpot landing page submissions", description: "A coaching business runs landing pages on HubSpot. Form submissions create a WellPlan contact through the integration, an SMS confirms the booking within seconds, and the contact's HubSpot record updates with the engagement activity." }
    ],
    setupSteps: [
      "Sign in to HubSpot with an account that has integration install permissions.",
      "Open WellPlan's Integrations settings and click Connect HubSpot to begin OAuth.",
      "Grant the requested scopes for contacts, companies, deals, and engagements.",
      "Map fields, configure sync direction, and run a test contact through both systems."
    ],
    faqs: [
      { q: "Does the integration work with HubSpot Free?", a: "Yes. The free HubSpot CRM exposes contacts and companies through the API, and most basic sync use cases work without a paid Hub. Some advanced features such as workflows or custom objects require Marketing, Sales, or Service Hub Professional or Enterprise." },
      { q: "Will the integration affect HubSpot's contact-based pricing?", a: "Marketing Hub charges by marketing contacts. Whether a synced contact counts as marketing or non-marketing depends on how you flag them in HubSpot. You can map only sales-relevant contacts to HubSpot and keep general subscribers in WellPlan to manage cost." },
      { q: "Can deals sync between HubSpot and WellPlan?", a: "Yes. HubSpot deals can map to WellPlan opportunities and pipeline stages. Field-level configuration lets you decide which platform is authoritative for stage changes, deal value, and close dates so both teams report against consistent data." },
      { q: "Do I lose HubSpot's email tracking?", a: "No. HubSpot continues to send and track its own emails inside Marketing Hub. WellPlan handles SMS, WhatsApp, voice, and additional email campaigns where helpful. Many teams keep marketing email in HubSpot and use WellPlan for transactional and multichannel automations." }
    ]
  },
  "pipedrive": {
    longDescription: "Pipedrive is a sales-focused CRM designed around the deal pipeline, popular with small and midsize sales teams who want a visual, easy-to-adopt tool. Its data model centers on Deals, People, Organizations, and Activities, with a clean API and an established marketplace. Connecting Pipedrive to WellPlan keeps people and deals in sync between platforms so SMS, WhatsApp, email, and call workflows in WellPlan can fire from Pipedrive activity, and vice versa. Reps work from Pipedrive's deal view while marketing extends reach with WellPlan's multichannel automations.",
    useCases: [
      { title: "Send SMS when deals stall", description: "A real estate brokerage flags deals that haven't moved stage in seven days. WellPlan automatically sends a friendly nudge by SMS to the buyer and creates a follow-up task for the agent in Pipedrive so no opportunity goes cold." },
      { title: "Sync people across both systems", description: "A managed services provider keeps Pipedrive as the sales source of truth. New WellPlan contacts from web chat and Facebook Lead Ads sync to Pipedrive as People with full source attribution so reps can immediately reach out." },
      { title: "Auto-create deals from won bookings", description: "When a discovery call books on the WellPlan calendar, a workflow creates a new Pipedrive deal in the Discovery stage with linked contact and activity, removing the manual data entry reps used to do after every booking." }
    ],
    setupSteps: [
      "Sign in to Pipedrive and confirm you have admin rights or API token access.",
      "Open WellPlan's Integrations settings and connect Pipedrive via OAuth or API token.",
      "Map Pipedrive Persons and Deals to WellPlan contacts and pipeline stages.",
      "Test a sample contact and deal through both systems to confirm field mapping."
    ],
    faqs: [
      { q: "Does the integration support multiple pipelines?", a: "Yes. Pipedrive supports multiple pipelines, each with its own stages. During setup you can choose which pipeline a synced deal lands in and how its stages map to WellPlan's opportunity stages so reporting stays consistent." },
      { q: "Can I sync Pipedrive activities?", a: "Yes. Calls, meetings, and tasks created in WellPlan can be pushed into Pipedrive as activities linked to the matching Person or Deal. This keeps reps' Pipedrive activity feed accurate without manual logging." },
      { q: "Will Pipedrive custom fields sync?", a: "Standard fields sync out of the box. Custom fields on Persons, Organizations, and Deals can usually be mapped during integration setup. Date, dropdown, number, and text fields are typically straightforward; multi-option custom fields may need extra mapping care." },
      { q: "Which Pipedrive plan do I need?", a: "All Pipedrive plans include API access, so the integration works from the Essential plan upward. Higher tiers add features such as more automations, more custom fields, and more users, which may matter at scale but are not required for the integration to work." }
    ]
  },
  "zoho": {
    longDescription: "Zoho CRM is part of Zoho's broader suite of business apps and is widely used by small and midsize businesses around the world for sales pipeline management, lead capture, and customer tracking. Its data model includes Leads, Contacts, Accounts, Deals, and a flexible custom-module system. Connecting Zoho CRM to WellPlan syncs records between platforms so SMS, WhatsApp, email, and voice workflows in WellPlan can fire from Zoho data and push activity back. Sales teams continue working in Zoho while marketing automates multichannel outreach in WellPlan.",
    useCases: [
      { title: "Engage Zoho leads with SMS", description: "A car dealership captures inquiries through Zoho web forms. Each new lead syncs to WellPlan, where a workflow sends an SMS within seconds offering a test-drive slot and books it on the salesperson's calendar." },
      { title: "Track multichannel outreach on Zoho contacts", description: "An accounting firm logs WellPlan calls, SMS conversations, and WhatsApp threads as activities on the matching Zoho contact, giving partners a complete view of client touchpoints without manual data entry." },
      { title: "Reactivate dormant Zoho contacts", description: "A B2B services company segments Zoho contacts that haven't had activity in 90 days. A WellPlan workflow runs a multichannel reactivation sequence by email and SMS, tags responders, and creates a follow-up task in Zoho for the rep." }
    ],
    setupSteps: [
      "Sign in to Zoho CRM with an account that has admin privileges or integration permissions.",
      "Open WellPlan's Integrations settings and connect Zoho CRM via OAuth.",
      "Authorize the requested scopes for Leads, Contacts, Accounts, and Deals.",
      "Map fields and modules, then run a test record through both platforms."
    ],
    faqs: [
      { q: "Which Zoho CRM editions are supported?", a: "API access is available on Standard, Professional, Enterprise, and Ultimate editions of Zoho CRM. The free edition has limited API capacity, which may be enough for small teams testing the integration but is generally not recommended for production sync." },
      { q: "Does the integration cover Zoho Bigin?", a: "Bigin is Zoho's lighter pipeline CRM aimed at small teams. Many integrations support Zoho CRM specifically rather than Bigin, since the APIs and data models differ. Check WellPlan's integrations page or support for current Bigin compatibility." },
      { q: "Can I sync Zoho custom modules?", a: "Standard modules such as Leads, Contacts, and Deals work out of the box. Custom modules can typically be mapped through configuration, though field-by-field mapping may take more setup time depending on how heavily customized your Zoho instance is." },
      { q: "Will Zoho's workflow rules conflict with WellPlan automations?", a: "They can run in parallel if not coordinated. We recommend documenting which platform owns each automation. Many teams keep sales-focused rules in Zoho and marketing or multichannel sequences in WellPlan to avoid duplicate sends or stage thrashing." }
    ]
  },
  "zendesk": {
    longDescription: "Zendesk is a customer service platform that organizes support requests as tickets across email, chat, voice, and social channels. Its data model centers on Users, Organizations, and Tickets, with a robust API and an extensive marketplace. Connecting Zendesk to WellPlan syncs contacts and ticket activity between systems so SMS and WhatsApp workflows in WellPlan can react to ticket events, and so support reps in Zendesk see relevant marketing context on each customer. Teams keep Zendesk as the support system of record while extending engagement through WellPlan's multichannel automations.",
    useCases: [
      { title: "Send SMS updates on ticket status", description: "An e-commerce store sends SMS updates when a Zendesk ticket changes status — for example, from Open to Solved. Customers know their issue is resolved without checking email, and follow-up CSAT requests go out through WellPlan." },
      { title: "Trigger nurture from churn-risk tickets", description: "A SaaS company tags Zendesk tickets as churn risks. A WellPlan workflow runs a multichannel retention sequence, alerts the account manager via Slack, and creates a follow-up task in Zendesk to close the loop with the customer." },
      { title: "Sync new WellPlan contacts as Zendesk users", description: "A service business creates Zendesk users automatically when a new contact opts in through WellPlan. Support reps see the customer's marketing source and recent activity on day one rather than starting from scratch on the first ticket." }
    ],
    setupSteps: [
      "Sign in to Zendesk as an admin or with permission to install integrations.",
      "Open WellPlan's Integrations settings and connect Zendesk via OAuth or API token.",
      "Map Zendesk users and ticket fields to WellPlan contacts and custom fields.",
      "Configure triggers — for example, ticket created or status changed — and test a sample ticket."
    ],
    faqs: [
      { q: "Which Zendesk products are supported?", a: "The integration primarily works with Zendesk Support (the ticketing product). Some workflows can extend to Sell and Chat depending on configuration, but core capabilities are built around tickets, users, organizations, and macros within Zendesk Support." },
      { q: "Can I send SMS replies as ticket comments?", a: "Yes. SMS conversations handled inside WellPlan can be logged as comments on the matching Zendesk ticket, so a unified history exists in the support system of record. Two-way mapping depends on how you configure the integration." },
      { q: "Will the integration trigger CSAT surveys?", a: "Zendesk has its own native CSAT workflow, and you can keep using it. Alternatively, WellPlan can fire CSAT surveys by SMS or WhatsApp when a ticket reaches Solved status, often improving response rates compared to email-only surveys." },
      { q: "Does the integration support Zendesk Sunshine?", a: "Zendesk Sunshine is the underlying customer data platform behind Zendesk. Standard integration uses the public Support API. Sunshine custom objects and events can sometimes be mapped through advanced configuration but typically require involvement from a Zendesk admin." }
    ]
  },
  "intercom": {
    longDescription: "Intercom is a customer messaging platform best known for in-app chat, a powerful inbox, and conversational marketing tools. Its data model centers on Users, Leads, Conversations, and Companies, with an established API and app store. Connecting Intercom to WellPlan keeps contact records and conversation events in sync so SMS, WhatsApp, and email workflows in WellPlan can fire from Intercom signals and push activity back. Teams keep Intercom for in-app and website chat while WellPlan handles multichannel outbound automations and other inboxes.",
    useCases: [
      { title: "Follow up Intercom leads via SMS", description: "A SaaS company captures website chats in Intercom. When a Lead provides a phone number, WellPlan kicks off an SMS sequence with case studies and a calendar link, increasing the chance of booking a demo while the visitor is still warm." },
      { title: "Sync Intercom users for multichannel nurture", description: "A B2C app exports active Intercom users into WellPlan to run reactivation campaigns by email and SMS. Each user's plan and last active date sync as custom fields, so messaging is segmented by behavior rather than blasted to everyone." },
      { title: "Notify the team of high-value conversations", description: "When a paid customer starts an Intercom conversation, a workflow flags it as high priority and posts in Slack through WellPlan. CS reps respond inside Intercom while the alert ensures no premium customer gets overlooked at busy times." }
    ],
    setupSteps: [
      "Sign in to Intercom with an account that has app installation permissions.",
      "Open WellPlan's Integrations settings and click Connect Intercom to start OAuth.",
      "Authorize the requested scopes for Users, Leads, Conversations, and Companies.",
      "Map fields, configure event triggers, and run a sample contact through both systems."
    ],
    faqs: [
      { q: "Will Intercom chat live inside WellPlan's inbox?", a: "Intercom remains the primary surface for in-app and website chat. The integration syncs contact records and key events so WellPlan workflows can react. Most teams keep agents replying inside Intercom for live chat and use WellPlan for outbound multichannel automations." },
      { q: "Can I sync Intercom Companies?", a: "Yes. Companies in Intercom can sync to WellPlan as accounts or as a custom field on contacts, depending on how you model accounts in WellPlan. Custom company attributes can also map to custom fields for segmentation." },
      { q: "Does the integration affect Intercom's seat or contact pricing?", a: "Intercom prices on resolutions, seats, and active people. Syncing contacts into WellPlan does not by itself increase Intercom's active people count, since that count is driven by Intercom's own tracking. Consult Intercom billing docs for current details." },
      { q: "Can I trigger Intercom messages from WellPlan?", a: "Yes, with the right scopes. WellPlan workflows can trigger Intercom outbound messages — for example, sending a chat message or starting a Series — when contacts reach specific conditions, blending Intercom's in-app reach with WellPlan's other channels." }
    ]
  },
  "freshworks": {
    longDescription: "Freshworks offers a suite of business software including Freshsales (CRM), Freshdesk (support), and Freshchat (messaging). Freshsales is built around Contacts, Accounts, Deals, and Sales Activities, with a clean API and broad SMB adoption. Connecting Freshsales to WellPlan syncs records between platforms so SMS, WhatsApp, email, and voice workflows in WellPlan can react to Freshsales data and push activity back. Sales reps keep their pipeline workflow in Freshsales while marketing extends reach with WellPlan's multichannel automations.",
    useCases: [
      { title: "SMS new Freshsales leads instantly", description: "An insurance brokerage captures leads through Freshsales web forms. Each new lead syncs to WellPlan, where a workflow sends a personalized SMS within seconds and books a callback slot on the agent's calendar." },
      { title: "Run drip sequences from deal stage changes", description: "When a Freshsales deal moves into the Proposal Sent stage, a WellPlan workflow starts a follow-up sequence by email and SMS over the next ten days, helping reps stay top of mind without manually chasing every prospect." },
      { title: "Log multichannel activity on Freshsales contacts", description: "A B2B services team uses Freshsales as the deal source of truth. WellPlan logs each SMS, WhatsApp, and call as an activity on the matching Freshsales contact, giving managers visibility into total outreach effort per deal." }
    ],
    setupSteps: [
      "Sign in to Freshsales with an account that has admin rights or integration permissions.",
      "Open WellPlan's Integrations settings and connect Freshsales using OAuth or API key.",
      "Map Freshsales contacts, accounts, and deals to WellPlan contacts and pipeline stages.",
      "Test a sample record and confirm field mapping before enabling the full sync."
    ],
    faqs: [
      { q: "Does this integrate with Freshdesk as well?", a: "Freshsales (CRM) and Freshdesk (support) are different products with different APIs. WellPlan's Freshworks integration typically focuses on Freshsales for CRM sync. Freshdesk integration is often handled through Zapier or Make if a direct connection is not available." },
      { q: "Which Freshsales plan do I need?", a: "API access is included across Freshsales paid plans. The free plan has limited API access, which may be enough for basic testing but is usually not sufficient for production sync. Higher plans add automation features and contact limits useful at scale." },
      { q: "Can custom fields sync?", a: "Yes. Custom fields on Freshsales contacts, accounts, and deals can typically be mapped during integration setup. Dropdowns, dates, numbers, and text fields are usually straightforward, while multi-select fields may need extra handling depending on Freshsales API behavior." },
      { q: "Is the sync real time?", a: "Updates between Freshsales and WellPlan are near real time through webhooks for supported events. Bulk operations or historical backfills may run on a slower schedule depending on the volume of records being moved between the two platforms." }
    ]
  },
  "microsoft-dynamics": {
    longDescription: "Microsoft Dynamics 365 is Microsoft's enterprise CRM and ERP platform, used by mid-market and large organizations for sales, customer service, field service, and marketing. It is part of the broader Microsoft cloud, integrating with Azure Active Directory, Power Platform, and Microsoft 365. Connecting Dynamics 365 to WellPlan syncs Accounts, Contacts, Leads, and Opportunities so SMS, WhatsApp, and email workflows in WellPlan can react to Dynamics data and push activity back. Enterprise teams keep Dynamics as the system of record while extending reach with WellPlan's multichannel automations.",
    useCases: [
      { title: "SMS Dynamics leads from outbound campaigns", description: "A B2B enterprise generates leads through Dynamics Marketing. Each qualified lead syncs to WellPlan, which sends an SMS introduction from the assigned BDR and tracks engagement back against the Dynamics record for accurate attribution." },
      { title: "Trigger workflows from opportunity stage changes", description: "An equipment manufacturer maps Dynamics opportunity stages to WellPlan pipeline stages. As opportunities advance, multichannel sequences fire in WellPlan, while sales reps stay in Dynamics for forecasting and quoting." },
      { title: "Sync field service jobs as customer touches", description: "A field service company logs scheduled jobs from Dynamics Field Service as WellPlan contact events. Customers get an SMS reminder the day before, and post-job CSAT surveys go out automatically by SMS or WhatsApp." }
    ],
    setupSteps: [
      "Confirm you have a Dynamics 365 environment with Sales, Customer Service, or another module deployed and admin access.",
      "Open WellPlan's Integrations settings and connect Dynamics 365 via OAuth using a service account or your admin login.",
      "Map Dynamics entities — Accounts, Contacts, Leads, Opportunities — to WellPlan equivalents.",
      "Test in a sandbox environment, then enable the integration on production after validating field mappings."
    ],
    faqs: [
      { q: "Which Dynamics 365 modules are supported?", a: "The integration typically covers Sales and Customer Service modules, which share the underlying Common Data Service. Modules such as Field Service or Finance & Operations may be supported through additional configuration depending on how data is stored and which APIs are enabled." },
      { q: "Does it work with on-premises Dynamics?", a: "The integration targets Dynamics 365 cloud (online) environments via the Dataverse API. On-premises Dynamics installations may require a hybrid setup with Data Gateway or a custom connector, and capabilities depend on the specific deployment configuration." },
      { q: "Can the integration sync custom entities?", a: "Standard entities such as Account, Contact, Lead, and Opportunity work out of the box. Custom entities and tables in Dataverse can typically be mapped through advanced configuration, often with help from your Dynamics admin to align fields and permissions." },
      { q: "How does authentication work?", a: "Dynamics 365 uses Azure Active Directory for authentication. Most integrations use OAuth 2.0 with a delegated user account or an application user. Enterprise security teams often prefer a dedicated application user to scope permissions and keep the integration auditable." }
    ]
  },
  "gmail": {
    longDescription: "Gmail is Google's email service, used by over a billion people personally and by millions of businesses through Google Workspace. Connecting Gmail to WellPlan lets you send and receive email from your own Gmail address inside the unified inbox, with conversations threaded against the matching contact record. Outbound sequences and one-to-one replies appear in your Sent folder, while replies route back into WellPlan so the team sees the full conversation history alongside SMS, WhatsApp, and social messages. Two-way sync means your CRM stays current without anyone copying and pasting between Gmail and another tab.",
    useCases: [
      { title: "Send sales emails from your own address", description: "An account executive sends personalized outreach from their Gmail address through WellPlan. Replies flow back into the unified inbox, contact records update automatically, and the AE keeps working from one screen instead of toggling between Gmail and the CRM." },
      { title: "Run drip campaigns from a real inbox", description: "A consultancy nurtures leads with a five-email drip sent from the founder's Gmail. Workflow triggers send each step on schedule, replies pause the sequence automatically, and the team handles responses inside WellPlan's inbox." },
      { title: "Triage support requests in one place", description: "A small business routes its support@ Gmail alias into WellPlan. Inbound emails create or update contacts, the AI chatbot suggests responses, and the team replies from WellPlan with full customer history at hand." }
    ],
    setupSteps: [
      "Sign in to WellPlan with the user whose Gmail address you want to connect.",
      "Open WellPlan's Integrations settings and click Connect Gmail to start Google OAuth.",
      "Grant the requested Gmail scopes for reading and sending mail.",
      "Test by sending an email from WellPlan and confirming it appears in Gmail's Sent folder and the contact's timeline."
    ],
    faqs: [
      { q: "Will emails appear in my Gmail Sent folder?", a: "Yes. Emails sent through the Gmail integration are sent via Google's API, so they show up in your Sent folder, threaded with replies, and visible from Gmail on any device. Replies come back into both Gmail and WellPlan's inbox simultaneously." },
      { q: "Does this work with personal Gmail or only Workspace?", a: "Both. Personal @gmail.com accounts and Google Workspace accounts can connect through OAuth. Workspace gives admins additional control over which third-party apps users can connect, so Workspace IT may need to approve the WellPlan app first." },
      { q: "Are there Gmail sending limits?", a: "Yes. Google enforces sending limits per account — typically 500 messages per day for personal Gmail and 2,000 per day for Workspace. High-volume outbound campaigns should use a dedicated sender such as SendGrid, Mailgun, or Mailchimp rather than personal Gmail accounts." },
      { q: "Can multiple users connect their own Gmail?", a: "Yes. Each WellPlan user can connect their personal or Workspace Gmail individually so replies route to the right person. This is common for sales teams where each AE wants outbound and replies on their own address." }
    ]
  },
  "outlook": {
    longDescription: "Outlook is Microsoft's email and calendar product, available as part of Microsoft 365 for business and as a free personal service through Outlook.com. Connecting Outlook to WellPlan lets each user send and receive email from their Outlook or Microsoft 365 mailbox inside the unified inbox, with conversations threaded against the matching contact record. Sequences and one-to-one replies appear in Sent Items, while replies sync back into WellPlan so teams see full conversation history alongside SMS, WhatsApp, and other channels. Sales and support stop bouncing between Outlook and the CRM.",
    useCases: [
      { title: "Run cold outreach from a real Outlook mailbox", description: "A B2B SDR sends prospecting emails from their Microsoft 365 mailbox through WellPlan. Replies flow back into the unified inbox, the SDR works inside WellPlan, and security teams keep emails authenticated by Microsoft's own sending infrastructure." },
      { title: "Sync shared mailbox replies", description: "A professional services firm routes its info@ Outlook shared mailbox into WellPlan. Inbound enquiries create contacts, the team replies from WellPlan with full client history, and Outlook's threading remains intact for the people who still work inside Outlook directly." },
      { title: "Nurture leads with multichannel sequences", description: "A marketing agency builds nurture sequences that send email through each AE's Outlook mailbox and SMS through a shared number. Workflow logic pauses when a lead replies on any channel, so prospects never get a redundant follow-up." }
    ],
    setupSteps: [
      "Sign in to WellPlan with the user whose Outlook mailbox you want to connect.",
      "Open WellPlan's Integrations settings and click Connect Outlook to start Microsoft OAuth.",
      "Grant the requested Mail and Calendar permissions for the Microsoft account.",
      "Send a test email from WellPlan and confirm it appears in Outlook's Sent Items and the contact's timeline."
    ],
    faqs: [
      { q: "Does this support Microsoft 365 and personal Outlook.com?", a: "Yes. Both Microsoft 365 (business) and personal Outlook.com mailboxes connect through Microsoft Graph and OAuth. Microsoft 365 organizations may require admin consent to install third-party apps, depending on tenant security policies." },
      { q: "Are there Outlook sending limits?", a: "Microsoft enforces per-user sending limits — generally 10,000 messages per day for Microsoft 365 mailboxes, with shorter-term rate limits inside that. Personal Outlook.com has lower limits. Heavy outbound campaigns should use a dedicated sender such as SendGrid or Mailgun." },
      { q: "Will the integration sync my Outlook calendar?", a: "If you grant calendar scopes during setup, WellPlan can sync booked calendar events with your Outlook calendar so confirmed bookings appear on your schedule. Time blocks created in Outlook can prevent double-booking when WellPlan checks availability." },
      { q: "Can multiple users on the same domain connect separately?", a: "Yes. Each WellPlan user typically connects their own Outlook mailbox so replies route to the right inbox. Shared mailboxes can also be connected with the right Microsoft 365 permissions for team-wide channels like info@ or support@." }
    ]
  },
  "sendgrid": {
    longDescription: "SendGrid is a transactional and marketing email service from Twilio, widely used by developers and marketing teams to send high-volume email reliably. It manages deliverability infrastructure, dedicated IPs, suppression lists, and detailed event tracking. Connecting SendGrid to WellPlan lets you send campaign and transactional emails through your SendGrid account rather than personal mailboxes, which is essential at higher volumes. Open, click, bounce, and unsubscribe events flow back into WellPlan workflows so triggers and segmentation react to real engagement data. Teams keep deliverability strong while still managing content and audiences inside WellPlan.",
    useCases: [
      { title: "Send high-volume campaigns reliably", description: "An e-commerce brand sends weekly newsletters to a list too large for a personal mailbox. WellPlan composes and segments the campaign while SendGrid handles delivery, IP reputation, and tracking, with events flowing back into the CRM in near real time." },
      { title: "Route transactional emails through SendGrid", description: "A SaaS company sends order confirmations, password resets, and trial expiry notices through SendGrid. WellPlan triggers each email from workflow events, while SendGrid's deliverability infrastructure keeps these critical messages out of the spam folder." },
      { title: "React to bounces and unsubscribes automatically", description: "When SendGrid reports a hard bounce, a WellPlan workflow marks the contact's email as invalid and pauses any active sequences. Unsubscribes update suppression lists on both sides so the contact never gets accidentally re-engaged from another campaign." }
    ],
    setupSteps: [
      "Create or sign in to your SendGrid account and verify the sending domain through DNS records.",
      "Generate a SendGrid API key with permissions to send mail and read event data.",
      "Open WellPlan's Integrations settings, paste the API key, and confirm the sender identity.",
      "Send a test campaign to a small segment and confirm events appear in both SendGrid and WellPlan."
    ],
    faqs: [
      { q: "Do I need to authenticate my domain?", a: "Yes. SendGrid strongly recommends configuring SPF, DKIM, and DMARC for your sending domain. Domain authentication significantly improves deliverability and is increasingly required by Gmail and Yahoo for senders above modest daily volumes." },
      { q: "Can I use a dedicated IP?", a: "Yes. SendGrid offers dedicated IPs on its higher plans, useful for senders with consistent high-volume traffic who want full control over their IP reputation. Most smaller senders are fine on shared IPs, which SendGrid manages on their behalf." },
      { q: "How do bounces and unsubscribes sync back?", a: "SendGrid sends event webhooks for processed, delivered, opened, clicked, bounced, dropped, deferred, and unsubscribed events. WellPlan listens for these events and updates contact records and workflows accordingly so segmentation stays based on real engagement." },
      { q: "Is this different from using Gmail or Outlook?", a: "Yes. Gmail and Outlook send from a personal mailbox and are best for one-to-one sales and support email. SendGrid is built for marketing and transactional volume that would exceed mailbox limits or risk damaging a personal domain's reputation if used at scale." }
    ]
  },
  "mailchimp": {
    longDescription: "Mailchimp is one of the longest-established email marketing platforms, well-known for newsletter campaigns, audience segmentation, and templated design tools. It centers on Audiences (lists) and supports tags, groups, and merge fields for segmentation. Connecting Mailchimp to WellPlan syncs contacts and tags between platforms so subscribers added to a Mailchimp audience can trigger workflows in WellPlan, and contacts created in WellPlan can be added to Mailchimp audiences for newsletter sends. Teams using Mailchimp for design-heavy newsletters keep that workflow while extending reach with WellPlan's multichannel automations.",
    useCases: [
      { title: "Add new WellPlan contacts to a Mailchimp audience", description: "An e-commerce store collects emails through web forms and WhatsApp opt-ins inside WellPlan. New contacts sync to a Mailchimp audience tagged by acquisition source, ready for the next weekly campaign without manual exporting." },
      { title: "Trigger SMS on Mailchimp engagement", description: "A coaching business tags Mailchimp subscribers who clicked the offer link in the latest newsletter. The tag flows to WellPlan, which fires a personalized SMS within minutes and books a free consult on the coach's calendar." },
      { title: "Recover lapsed subscribers across channels", description: "A media brand identifies Mailchimp subscribers who haven't opened any email in 90 days. WellPlan runs a multichannel reactivation sequence by SMS and WhatsApp, then re-tags engaged contacts so the next Mailchimp campaign targets a cleaner list." }
    ],
    setupSteps: [
      "Sign in to Mailchimp and confirm you have permission to install integrations.",
      "Open WellPlan's Integrations settings and connect Mailchimp via OAuth.",
      "Choose the Mailchimp audience(s) to sync and map merge fields to WellPlan custom fields.",
      "Run a test contact through the integration and verify tag and field updates on both sides."
    ],
    faqs: [
      { q: "Is the sync one-way or two-way?", a: "Most Mailchimp integrations support both directions. New WellPlan contacts can flow to a Mailchimp audience, and Mailchimp tags or campaign engagement can flow back to WellPlan workflows. Exact direction is configurable during setup based on which system you treat as authoritative." },
      { q: "Will tags sync between platforms?", a: "Yes. Mailchimp tags and WellPlan tags can map to each other so segmentation stays consistent. Be aware that Mailchimp's billing counts contacts by audience, so unifying tags across many audiences is often cleaner than syncing the same contact into multiple audiences." },
      { q: "Does Mailchimp count synced contacts as paid contacts?", a: "Yes. Mailchimp bills by audience contact count, so anyone you sync into a Mailchimp audience counts toward your plan. To control cost, sync only marketing-relevant contacts and keep transactional or sales-only contacts inside WellPlan." },
      { q: "Can I send transactional email through Mailchimp?", a: "Mailchimp's marketing product handles newsletters. Transactional email is a separate paid product called Mandrill, included only on certain Mailchimp plans. For transactional volume, SendGrid or Mailgun are often the better fit." }
    ]
  },
  "klaviyo": {
    longDescription: "Klaviyo is an e-commerce-focused email and SMS marketing platform with deep native integrations to Shopify, BigCommerce, and other commerce stacks. Its data model is centered on Profiles, Events, and Flows, making it particularly powerful for behavior-triggered campaigns. Connecting Klaviyo to WellPlan syncs profiles and events between systems so workflows in WellPlan can react to Klaviyo behavior and push activity back. Teams running e-commerce keep Klaviyo for store-tied email and SMS while extending reach with WellPlan's multichannel inbox, voice, WhatsApp, and CRM features.",
    useCases: [
      { title: "Send WhatsApp on Klaviyo abandoned cart", description: "A DTC brand uses Klaviyo for abandoned cart emails. The cart event also fires a WellPlan workflow that sends a WhatsApp follow-up two hours later with a discount code, often recovering carts that didn't respond to the first email." },
      { title: "Trigger SMS from a Klaviyo segment", description: "An e-commerce store identifies a VIP segment in Klaviyo. Membership in the segment syncs as a tag in WellPlan, which sends a personal SMS from the founder offering early access to a new product launch." },
      { title: "Run multichannel post-purchase flows", description: "After a Shopify order, Klaviyo handles email confirmation and review requests. WellPlan layers in SMS shipping updates and a WhatsApp loyalty signup, with stop-conditions across channels so customers aren't messaged more than necessary." }
    ],
    setupSteps: [
      "Sign in to Klaviyo and generate a private API key with the scopes you need (profiles, events, lists).",
      "Open WellPlan's Integrations settings and connect Klaviyo using the API key.",
      "Map Klaviyo profile fields and properties to WellPlan custom fields.",
      "Set up trigger events — for example, Placed Order or Started Checkout — and run a test."
    ],
    faqs: [
      { q: "Does Klaviyo replace WellPlan's email?", a: "Not necessarily. Many teams keep Klaviyo for store-tied flows like abandoned cart and post-purchase, where its native Shopify data is strongest, while using WellPlan for SMS, WhatsApp, voice, sales follow-up, and any non-e-commerce email. The two complement each other." },
      { q: "How does Klaviyo's pricing interact with sync?", a: "Klaviyo charges based on active profiles and SMS sends. Syncing contacts into Klaviyo will count toward your active profiles if they receive email or SMS. To manage cost, sync only profiles you actually intend to market to from Klaviyo." },
      { q: "Can Klaviyo events trigger WellPlan workflows?", a: "Yes. Klaviyo events such as Placed Order, Started Checkout, or custom events can fire WellPlan workflows in near real time. This lets you build cross-channel sequences that react to commerce behavior without rebuilding all your event tracking." },
      { q: "Will Klaviyo SMS conflict with WellPlan SMS?", a: "They can if not coordinated. Many teams pick one platform per channel — for example, Klaviyo for transactional and abandoned cart SMS, WellPlan for sales and support SMS — and use suppression or tag rules to avoid sending two SMS messages to the same person on the same day." }
    ]
  },
  "mailgun": {
    longDescription: "Mailgun is a developer-focused transactional email service that handles sending, parsing, and tracking at scale. It is widely used for product notifications, password resets, receipts, and high-volume marketing where deliverability and detailed logs matter. Connecting Mailgun to WellPlan lets you route campaign and transactional email through your Mailgun domain, with delivery, open, click, bounce, and unsubscribe events flowing back into workflows. Teams keep WellPlan's audience and content tools while Mailgun handles deliverability infrastructure, dedicated IPs, and detailed event tracking that's especially helpful for diagnosing inbox placement issues.",
    useCases: [
      { title: "Send transactional notifications at scale", description: "A SaaS platform sends invoice receipts and password reset emails through Mailgun, triggered by WellPlan workflows. Mailgun's deliverability infrastructure keeps these critical emails out of spam, and event logs help debug if a customer reports a missing message." },
      { title: "Run high-volume marketing", description: "A media company sends a daily newsletter to a large list. WellPlan composes and segments the campaign while Mailgun delivers it through dedicated IPs, with engagement events flowing back to power follow-up workflows by SMS or WhatsApp." },
      { title: "Diagnose deliverability problems", description: "An e-commerce brand investigating low open rates uses Mailgun's logs to see which mailboxes accepted, deferred, or rejected each message. Findings feed back into WellPlan list hygiene rules so future campaigns clean themselves automatically." }
    ],
    setupSteps: [
      "Create or sign in to your Mailgun account and add your sending domain.",
      "Configure DNS records — SPF, DKIM, and ideally DMARC — and verify the domain in Mailgun.",
      "Generate a Mailgun API key, open WellPlan's Integrations settings, and paste the key to connect.",
      "Send a test email to a sample contact and confirm events appear in Mailgun's logs and WellPlan."
    ],
    faqs: [
      { q: "How is Mailgun different from SendGrid?", a: "Both are transactional and marketing email services with strong deliverability. Mailgun has historically had a stronger developer and API focus, while SendGrid has more marketing UI. Either works well with WellPlan; the choice often comes down to existing accounts, pricing, and team preference." },
      { q: "Do I need DNS access?", a: "Yes. Adding SPF, DKIM, and DMARC records is required to authenticate sending and reach the inbox reliably, especially after Gmail and Yahoo tightened sender requirements in 2024. Mailgun walks you through the exact records during domain setup." },
      { q: "Will bounces and unsubscribes sync back to WellPlan?", a: "Yes. Mailgun's webhooks send delivery, bounce, complaint, unsubscribe, and open/click events to WellPlan in near real time. WellPlan updates the contact record, pauses sequences for hard bounces, and respects unsubscribes across the system automatically." },
      { q: "Can I use Mailgun for one-to-one sales email?", a: "Mailgun is designed for application-driven sending rather than personal one-to-one email. For one-to-one sales email from a real mailbox, the Gmail or Outlook integration is a better fit. Use Mailgun for campaigns, transactional, and high-volume sends." }
    ]
  },
  "twilio": {
    longDescription: "Twilio is the most widely used cloud communications platform, offering APIs for SMS, MMS, voice, WhatsApp, and email. Many businesses already own Twilio numbers for existing apps or workflows. Connecting your Twilio account to WellPlan lets you send and receive SMS and MMS, place and answer voice calls, and run conversational workflows using numbers you already control. Conversations land in the unified inbox alongside WhatsApp, email, and social messages, with each contact's full history in one timeline. Teams keep their carrier compliance and number inventory in Twilio while WellPlan handles the day-to-day messaging UI.",
    useCases: [
      { title: "Send SMS at scale from existing Twilio numbers", description: "A multi-location healthcare group already owns Twilio long codes for each clinic. WellPlan connects to the Twilio account and sends appointment reminders and reschedule prompts through the right local number per location, while replies route to the unified inbox." },
      { title: "Handle inbound calls with menu and routing", description: "A home services company uses Twilio for its main business line. WellPlan answers calls, plays an IVR menu, routes by skill, and falls back to voicemail-to-text, with each call attached to the matching contact and an automatic follow-up SMS if the call is missed." },
      { title: "Run a verified WhatsApp sender via Twilio", description: "A travel agency uses Twilio's WhatsApp Business API integration. Approved templates send booking confirmations and reminders through Twilio's number, while inbound replies during the 24-hour session land in WellPlan's inbox for two-way chat." }
    ],
    setupSteps: [
      "Sign in to your Twilio Console and locate the Account SID and Auth Token.",
      "Open WellPlan's Integrations settings and paste the Twilio credentials.",
      "Select the Twilio numbers you want to use inside WellPlan and configure messaging or voice routing.",
      "Send a test SMS and place a test call to confirm both inbound and outbound flows work end-to-end."
    ],
    faqs: [
      { q: "Do I need to register for A2P 10DLC in the US?", a: "Yes. The US carriers require A2P 10DLC registration for business SMS sent over standard 10-digit long codes. Twilio handles the registration process, and you must complete it for your brand and campaigns to avoid filtering, throttling, or per-message fees on unregistered traffic." },
      { q: "Will Twilio billing change when I connect WellPlan?", a: "Twilio continues to bill you directly for usage on numbers and calls in your account. WellPlan is just the UI sitting on top of that traffic. Some features such as voice recording or transcription may use additional Twilio capabilities billed in the usual way." },
      { q: "Can I keep using Twilio for other apps too?", a: "Yes. Twilio numbers and accounts aren't exclusive to one tool. Many teams have Twilio serving WellPlan for messaging and voice while a separate internal app continues to use the same account for notifications or two-factor authentication." },
      { q: "Does this support Twilio's WhatsApp integration?", a: "Yes. If you have a Twilio WhatsApp sender approved by Meta, you can route inbound and outbound WhatsApp through WellPlan using Twilio as the provider. Pre-approved message templates and the 24-hour session window rules still apply as defined by Meta." }
    ]
  },
  "messagebird": {
    longDescription: "MessageBird, now branded as Bird, is an omnichannel communications platform with SMS, WhatsApp, email, voice, and other channels delivered through a single API and dashboard. It is particularly popular in Europe and Asia where regional carrier coverage matters. Connecting MessageBird to WellPlan lets you send and receive SMS and other channels through your MessageBird numbers, while conversations land in the unified inbox alongside WhatsApp, email, and social messages. Teams keep their existing MessageBird sender inventory, carrier registrations, and pricing while WellPlan handles the day-to-day inbox and workflow UI.",
    useCases: [
      { title: "Send European SMS through existing numbers", description: "A pan-European logistics company already runs delivery alerts through MessageBird in five countries. WellPlan connects to the account, routes each market through its local sender, and brings inbound replies into one unified inbox for the central support team." },
      { title: "Unify omnichannel messaging in one inbox", description: "A travel brand uses MessageBird for SMS and WhatsApp. By connecting the account to WellPlan, support agents see every channel in one timeline per contact, instead of switching between MessageBird Inbox and the original CRM." },
      { title: "Run multichannel campaign sequences", description: "A subscription business sends a renewal sequence that starts with email, falls back to SMS, then to WhatsApp if there's no response. WellPlan orchestrates the flow while MessageBird delivers the actual messages on each channel." }
    ],
    setupSteps: [
      "Sign in to your MessageBird/Bird account and create an API key with messaging permissions.",
      "Open WellPlan's Integrations settings and paste the MessageBird API key.",
      "Map your MessageBird numbers and senders to WellPlan messaging channels.",
      "Send a test SMS and confirm inbound replies appear in WellPlan's inbox."
    ],
    faqs: [
      { q: "Is MessageBird the same as Bird?", a: "Yes. MessageBird rebranded to Bird in 2023, and the platform name and dashboard now use Bird, with the same underlying messaging products. Integrations and APIs continue to operate, though some endpoints and product names have evolved alongside the rebrand." },
      { q: "Does MessageBird support WhatsApp Business API?", a: "Yes. MessageBird is an authorized WhatsApp Business Solution Provider and can host your WhatsApp Business API number. If your WhatsApp sender is on MessageBird, you can route WhatsApp conversations into WellPlan through the integration." },
      { q: "How does pricing work?", a: "MessageBird/Bird charges per message based on destination country and channel, billed directly through your MessageBird account. WellPlan does not change those rates; it sits on top as the UI. Volume discounts and committed-use pricing remain in MessageBird's contract." },
      { q: "Will my existing MessageBird flows still work?", a: "Yes. Existing MessageBird Flow Builder automations continue to run independently. Many teams gradually migrate flows into WellPlan workflows once they're confident in the integration, while keeping mission-critical flows in MessageBird until the transition is complete." }
    ]
  },
  "vonage": {
    longDescription: "Vonage Communications APIs (formerly Nexmo) provides SMS, voice, video, and messaging APIs to businesses worldwide, with strong reach across Europe, North America, and Asia. Many enterprises use Vonage for high-volume SMS and voice traffic. Connecting Vonage to WellPlan lets you send and receive SMS through your Vonage numbers, and inbound replies appear in the unified inbox alongside WhatsApp, email, and other channels. Teams keep their Vonage carrier relationships, number inventory, and compliance footprint while WellPlan provides the day-to-day messaging UI and workflow automation.",
    useCases: [
      { title: "Send transactional SMS through Vonage", description: "A financial services company uses Vonage for OTP and account alert SMS due to existing carrier relationships. WellPlan triggers these messages from workflows, while Vonage continues to handle delivery with the high-reliability standards the compliance team requires." },
      { title: "Unify Vonage SMS into the team inbox", description: "A logistics provider already runs delivery notifications through Vonage. Connecting Vonage to WellPlan brings inbound replies from drivers and customers into the unified inbox, eliminating the separate Vonage Inbox tab the dispatchers used to monitor." },
      { title: "Run multichannel customer journeys", description: "A telco-adjacent service sends onboarding flows that mix Vonage SMS with WellPlan email and WhatsApp. Workflows pause if the contact responds on any channel, ensuring customers aren't messaged redundantly across providers." }
    ],
    setupSteps: [
      "Sign in to your Vonage API Dashboard and locate your API key and secret.",
      "Open WellPlan's Integrations settings and paste the Vonage credentials.",
      "Map your Vonage numbers to WellPlan messaging channels and configure inbound webhooks.",
      "Send a test SMS and verify two-way messaging through the WellPlan inbox."
    ],
    faqs: [
      { q: "Is Vonage the same company as Nexmo?", a: "Yes. Nexmo was acquired by Vonage in 2016 and its Communications APIs are now branded under the Vonage name. The underlying APIs, products, and number inventory continue, with documentation now hosted at Vonage's developer site." },
      { q: "Do I need US A2P 10DLC registration?", a: "Yes, for business SMS over US 10-digit long codes. Vonage manages the 10DLC registration process with TCR (The Campaign Registry), and brands and campaigns must be registered to avoid carrier filtering, throttling, and per-message fees on unregistered US traffic." },
      { q: "Does Vonage support WhatsApp Business API?", a: "Yes. Vonage is a WhatsApp Business Solution Provider and can host approved WhatsApp senders. If your WhatsApp Business API is on Vonage, you can route conversations into WellPlan through the integration alongside Vonage SMS." },
      { q: "How does pricing work?", a: "Vonage bills directly for SMS and voice usage based on destination country and product, under whatever contract or pay-as-you-go terms you have. WellPlan does not alter those rates; it provides the UI and workflow layer on top of Vonage's existing services." }
    ]
  },
  "plivo": {
    longDescription: "Plivo is a cloud communications platform offering SMS and voice APIs with global coverage and a developer-friendly API. It's commonly used by mid-market and enterprise customers as an alternative to Twilio for SMS and voice traffic. Connecting Plivo to WellPlan lets you send and receive SMS through your Plivo numbers, with inbound messages appearing in the unified inbox alongside WhatsApp, email, and other channels. Teams keep Plivo's carrier relationships, number inventory, and compliance work intact while WellPlan provides the inbox, workflows, calendar, AI chatbot, and CRM features on top.",
    useCases: [
      { title: "Send appointment reminders via Plivo SMS", description: "A multi-location clinic group uses Plivo numbers per region. WellPlan triggers SMS appointment reminders 24 hours before each visit, replies route into the unified inbox, and staff confirm or reschedule directly inside the contact record." },
      { title: "Handle inbound voice with IVR", description: "A home services company points a Plivo voice number at WellPlan. Inbound calls play an IVR, route by service type, and create or update a contact. Missed calls trigger a workflow that sends a follow-up SMS within seconds." },
      { title: "Run promotional SMS to an opted-in list", description: "A retail brand sends promotional SMS to an opted-in segment through Plivo. WellPlan handles audience segmentation by tag, last purchase date, and source, while Plivo's infrastructure handles carrier delivery and short-link tracking." }
    ],
    setupSteps: [
      "Sign in to your Plivo console and locate your Auth ID and Auth Token.",
      "Open WellPlan's Integrations settings and paste the Plivo credentials.",
      "Select the Plivo numbers to use inside WellPlan and configure inbound message and voice webhooks.",
      "Test a sample SMS and a sample call to confirm both directions work as expected."
    ],
    faqs: [
      { q: "How does Plivo compare to Twilio?", a: "Plivo and Twilio offer overlapping SMS and voice capabilities. Plivo is often chosen for competitive SMS pricing, particularly at higher volumes, while Twilio has a wider product surface (WhatsApp, Email, Verify, Studio, etc.). Either works with WellPlan; the choice is usually about pricing and existing accounts." },
      { q: "Do I need A2P 10DLC for US SMS?", a: "Yes. Plivo requires US brands and campaigns to register through TCR (The Campaign Registry) for business SMS over 10-digit long codes. Unregistered traffic gets filtered or throttled and may incur per-message fees, so registration is essential for production volumes." },
      { q: "Does Plivo support WhatsApp?", a: "Plivo offers WhatsApp Business API access. If your WhatsApp sender is on Plivo, you can route WhatsApp conversations into WellPlan alongside Plivo SMS. Meta's template approval and 24-hour session rules still apply as on any WhatsApp Business API setup." },
      { q: "Will my Plivo billing change?", a: "No. Plivo bills directly for SMS, voice, and number usage at your contracted rates. WellPlan sits on top as the UI and workflow layer. Volume discounts and commitments in your Plivo contract remain entirely with Plivo." }
    ]
  },
  "zapier": {
    longDescription: "Zapier is the best-known automation platform, connecting more than 6,000 apps through pre-built triggers and actions. It is widely used by non-developers to wire together SaaS tools without code. Connecting WellPlan to Zapier extends WellPlan's reach to almost any app you already use — accounting tools, project management, e-signature, niche industry software — even when WellPlan doesn't have a native integration. Triggers like New Contact or Pipeline Stage Changed in WellPlan fire Zaps in your other apps, and Zap actions push data back into WellPlan to create contacts, send messages, or update fields automatically.",
    useCases: [
      { title: "Add new WellPlan contacts to Google Sheets", description: "A boutique agency wants every new lead logged in a Google Sheet for reporting. A Zap triggers on New Contact in WellPlan and adds a row to Sheets, eliminating manual copy-paste while the team's existing Sheets dashboards keep working." },
      { title: "Create Xero invoices when a deal closes", description: "A consultancy automates billing by sending closed deals from WellPlan into Xero. A Zap listens for the Deal Won event and creates an invoice with the contact and amount, removing a daily manual task for the finance lead." },
      { title: "Trigger Zapier from a niche industry app", description: "A construction firm uses a vertical-specific project tool with no native WellPlan integration. A Zap watches for new projects in that tool and creates the matching contact and pipeline opportunity in WellPlan automatically." }
    ],
    setupSteps: [
      "Sign in to your Zapier account (or create one).",
      "Search for the WellPlan app in Zapier and connect it using the API key from WellPlan settings.",
      "Build a Zap with a trigger and one or more actions, mapping fields between the apps you want to connect.",
      "Turn the Zap on and monitor the task history for the first few runs to confirm the data flows correctly."
    ],
    faqs: [
      { q: "Do I need a paid Zapier plan?", a: "Zapier's free plan supports a limited number of tasks per month and only single-step Zaps. For multi-step Zaps, conditional logic, and higher task volumes you'll need a paid plan. Most teams running production automations are on a Starter or Professional plan." },
      { q: "Is Zapier real time?", a: "Most Zapier triggers run on polling, typically every 1-15 minutes depending on your plan. Some apps support instant webhook triggers, which fire within seconds. WellPlan supports webhook-based triggers, so most WellPlan-driven Zaps are effectively real time." },
      { q: "Why not just use Zapier for everything?", a: "Native integrations are usually faster and more reliable for high-volume or critical flows because they avoid the extra hop and Zapier task cost. Zapier is best for connecting long-tail apps and one-off workflows where building a native integration isn't worth it." },
      { q: "Will Zapier handle large volumes?", a: "Zapier counts each step in a Zap as a task. High-volume workflows can quickly burn through task allotments and become expensive at scale. For repetitive high-volume operations, consider Make, n8n, or a direct API integration as a more cost-effective option." }
    ]
  },
  "make": {
    longDescription: "Make, formerly Integromat, is a visual automation platform that builds workflows as scenarios on a flow-chart canvas. Compared to Zapier, Make offers more granular control, advanced data manipulation, and typically more operations per dollar at scale. Connecting WellPlan to Make extends WellPlan into custom workflows that combine multiple apps, branching logic, iteration over arrays, and complex error handling. It's a great fit for teams who want to do more than simple A-to-B Zaps without writing code, and who appreciate seeing the entire automation as a visual scenario.",
    useCases: [
      { title: "Build branching logic across multiple apps", description: "A marketing agency builds a Make scenario that takes a new WellPlan contact, looks them up in Clearbit, scores them, and routes leads above a threshold to a Slack channel while sending the rest into a long-term nurture in WellPlan." },
      { title: "Iterate over lists of records", description: "An events business uses Make to import event attendees from Eventbrite into WellPlan in batches. A scenario iterates through each attendee, creates or updates the contact, tags them by event, and adds them to a post-event follow-up workflow." },
      { title: "Handle complex data transformations", description: "A franchise group uses Make to normalize lead data from multiple sources before it lands in WellPlan. Phone numbers get formatted, addresses get standardized, and source tags get applied based on UTM parameters before the contact is created." }
    ],
    setupSteps: [
      "Sign in to Make (formerly Integromat) and locate the WellPlan app in the connectors list.",
      "Generate a WellPlan API key from settings and use it to authorize the Make connection.",
      "Build a scenario starting with a WellPlan trigger module and add the action modules you need.",
      "Run the scenario in test mode, review the execution log, then enable it on a schedule."
    ],
    faqs: [
      { q: "How is Make different from Zapier?", a: "Make uses a visual flow-chart editor with deeper data manipulation, native iteration, and more operations per dollar at scale. Zapier has a simpler step-by-step builder and a larger app catalog. Many teams use both — Zapier for quick connectors, Make for complex multi-step scenarios." },
      { q: "Does Make support real-time triggers?", a: "Yes, for apps that offer webhook-based instant triggers, including WellPlan. Webhook triggers fire within seconds. Other triggers run on a schedule you configure — anything from every minute to once a day — depending on the scenario's needs." },
      { q: "What pricing model does Make use?", a: "Make charges per operation (each module run consumes operations), with monthly bundles starting on a free tier. For workflows that iterate over many records, operations can add up quickly, but the per-operation rate is typically lower than Zapier's per-task rate at comparable plan sizes." },
      { q: "Can Make replace Zapier entirely?", a: "For many teams, yes. Make covers most of the same apps and adds capabilities Zapier doesn't, especially for complex logic. The transition can take time because the editor is more powerful and slightly less beginner-friendly, but the long-run cost and capability benefits are often worth it." }
    ]
  },
  "n8n": {
    longDescription: "n8n is an open-source automation platform that can be self-hosted or used as a managed cloud service. It offers a visual editor, hundreds of nodes, and the ability to write custom JavaScript or Python inside workflows. Connecting WellPlan to n8n is ideal for teams who want full control over their automations, data residency through self-hosting, or custom logic that doesn't fit Zapier or Make. Triggers from WellPlan fire n8n workflows, and n8n actions push data back into WellPlan to create contacts, send messages, update fields, or run any other API-supported action.",
    useCases: [
      { title: "Self-host automations for data residency", description: "A European healthcare provider runs n8n on its own infrastructure to keep all automation data inside the EU. Workflows trigger from WellPlan events, hit internal systems for patient lookup, and create or update contacts without data ever leaving the provider's cloud." },
      { title: "Run custom logic with embedded code", description: "A fintech startup uses n8n's Function node to apply custom scoring logic on each new WellPlan lead. The score writes back to a custom field, which then drives routing rules and sequence selection inside WellPlan." },
      { title: "Avoid per-task automation costs", description: "A high-volume SaaS company moves repetitive integrations from Zapier to self-hosted n8n. Since n8n on their own infrastructure has no per-task fee, large-scale syncs between WellPlan and internal services become substantially cheaper." }
    ],
    setupSteps: [
      "Deploy n8n via self-hosting (Docker, Kubernetes, or a one-click cloud option) or sign up for n8n Cloud.",
      "Generate a WellPlan API key from settings.",
      "In n8n, add an HTTP Request or WellPlan-compatible node and configure it with the API key.",
      "Build a workflow with a trigger and action nodes, run it manually, then activate it on a schedule or webhook."
    ],
    faqs: [
      { q: "What does open-source mean here?", a: "n8n's core is licensed under a fair-code license, which permits self-hosting and modifying the code for internal use. This gives teams full control over the infrastructure, code, and data — a key reason regulated industries and engineering-led teams adopt n8n." },
      { q: "Should I self-host or use n8n Cloud?", a: "Self-hosting gives you full control and is usually cheapest at scale, but you take on operations. n8n Cloud is managed and easier to get started, with usage-based pricing. Many teams start on Cloud, then migrate to self-hosted once their workflows are stable and volume warrants the move." },
      { q: "Is n8n harder to learn than Zapier?", a: "n8n's visual editor is approachable but assumes a bit more comfort with technical concepts like webhooks, JSON, and HTTP. Teams already comfortable with APIs typically pick it up quickly. For non-technical users, Zapier or Make tend to be friendlier first choices." },
      { q: "Can n8n call any API?", a: "Yes. In addition to dedicated nodes for hundreds of apps, n8n has a generic HTTP Request node that can call any REST API. This makes it possible to integrate WellPlan with virtually any service, even ones without dedicated n8n nodes." }
    ]
  },
  "ifttt": {
    longDescription: "IFTTT (If This Then That) is a consumer-friendly automation platform connecting apps, smart-home devices, and online services with simple two-step applets. Compared to Zapier and Make, IFTTT focuses on lightweight personal and SMB use cases, with strong coverage of smart-home, IoT, and consumer apps. Connecting WellPlan to IFTTT through webhooks lets you build applets where a WellPlan event triggers an action in another IFTTT-supported service, or vice versa. It is best for simple workflows and IoT-style triggers rather than heavy data sync.",
    useCases: [
      { title: "Flash a smart light when a new lead arrives", description: "A solo consultant runs a Philips Hue light in their office. An IFTTT applet listens for a WellPlan webhook on New Contact and flashes the light green, giving an immediate physical signal that someone just opted in." },
      { title: "Log won deals to a personal journal", description: "A coach has IFTTT post a one-line entry to their daily journal app whenever a deal closes in WellPlan, building a habit of celebrating wins without making it part of any team workflow." },
      { title: "Connect smart-home triggers to CRM events", description: "A boutique studio uses an IFTTT applet that, when its open sign goes on (via a smart switch), pings WellPlan to send a check-in SMS to local VIP customers, blending physical store actions with CRM outreach." }
    ],
    setupSteps: [
      "Sign in to IFTTT and connect the Webhooks service to obtain your unique webhook URL.",
      "In WellPlan, configure a webhook action in a workflow that posts to the IFTTT webhook URL.",
      "Create an IFTTT applet using Webhooks as the trigger and your chosen service as the action.",
      "Trigger the workflow with a test contact and verify the applet fires the expected action."
    ],
    faqs: [
      { q: "How does IFTTT compare to Zapier or Make?", a: "IFTTT is simpler — applets are limited to a single trigger and a single action, with very little branching or data transformation. It's great for consumer and smart-home automations but generally less capable than Zapier or Make for business workflows that need multi-step logic." },
      { q: "Do I need IFTTT Pro?", a: "IFTTT Pro removes the limit on the number of applets and adds multi-step capability, custom queries, and faster execution. The free plan is enough for a handful of lightweight personal applets; serious business automation typically requires Pro or the higher-tier Pro+." },
      { q: "Is IFTTT real time?", a: "Many IFTTT triggers run on polling, similar to Zapier, so there can be a few seconds to a few minutes of latency depending on the service. Webhook-based triggers from WellPlan are fast, but the downstream IFTTT action may still have some service-specific delay." },
      { q: "Why use IFTTT if I already have Zapier?", a: "Mostly for IoT and smart-home integration. IFTTT has unique support for many consumer-grade smart devices that Zapier doesn't cover. For pure SaaS-to-SaaS workflows, Zapier or Make are almost always the better choice for businesses." }
    ]
  },
  "workato": {
    longDescription: "Workato is an enterprise automation and iPaaS platform used by mid-market and large organizations to integrate business systems and orchestrate workflows across SaaS apps, on-premise systems, and databases. It offers a recipe-based editor, prebuilt connectors for enterprise software, governance features, and strong scalability. Connecting WellPlan to Workato is a fit for organizations that already standardize on Workato as their integration backbone and want to bring WellPlan into the same governed automation environment alongside Salesforce, NetSuite, Workday, and other enterprise systems.",
    useCases: [
      { title: "Sync WellPlan contacts with enterprise CRM and ERP", description: "A mid-market manufacturer uses Workato to keep WellPlan contacts in sync with Salesforce and NetSuite. Recipes handle deduplication, field mapping, and conflict resolution across the three systems, with a single governed source of automation in Workato." },
      { title: "Orchestrate cross-department workflows", description: "An enterprise services firm builds Workato recipes that span marketing (WellPlan), finance (NetSuite), and HR (Workday). When a customer closes a deal in WellPlan, recipes provision the right finance and account records without manual coordination." },
      { title: "Centralize integration governance", description: "An IT team consolidates dozens of point-to-point integrations into Workato. Including WellPlan in this hub gives the security and ops teams a single place to monitor automation health, manage credentials, and audit who can build new integrations." }
    ],
    setupSteps: [
      "Have an active Workato workspace and admin access to install community or custom connectors.",
      "Generate a WellPlan API key from settings and store it in Workato's secrets manager.",
      "Build a recipe with a WellPlan trigger or action using the HTTP connector or a WellPlan community connector.",
      "Test the recipe in a sandbox, then promote it to production through Workato's recipe lifecycle controls."
    ],
    faqs: [
      { q: "Is Workato a fit for small businesses?", a: "Workato is primarily aimed at mid-market and enterprise customers with complex integration needs and governance requirements. Pricing and capabilities reflect that audience. Small businesses typically find Zapier, Make, or native WellPlan integrations more cost-effective and easier to operate." },
      { q: "Does Workato have a native WellPlan connector?", a: "Workato has a large prebuilt connector library and a Community Connector framework that lets partners and customers add support for additional apps. If a native WellPlan connector isn't yet available, the HTTP connector and Workato's REST capabilities let you integrate via WellPlan's API." },
      { q: "How does Workato handle on-prem systems?", a: "Workato's on-premise agent connects to systems behind your firewall — databases, legacy ERPs, internal apps — without exposing them to the public internet. This is a key reason enterprises pick Workato when they need to integrate cloud SaaS like WellPlan with on-prem systems." },
      { q: "Is Workato's pricing per task?", a: "Workato uses a workspace and recipe-based pricing model rather than a strict per-task fee like Zapier. The exact terms depend on your contract and tiers. For very high automation volumes, this can be more predictable and cost-effective than per-task platforms, but it carries higher base costs." }
    ]
  },
  "shopify": {
    longDescription: "Shopify powers millions of online stores worldwide, from solo founders to major brands, and is one of the most popular e-commerce platforms on the web. Connecting Shopify to WellPlan syncs customers, orders, products, and abandoned checkouts into the CRM so every shopper becomes a contact with a full purchase history. Workflows can trigger from order placed, abandoned checkout, fulfillment, or refund events to send email, SMS, and WhatsApp follow-ups. Customer support replies land in the unified inbox alongside order context, and post-purchase sequences run without anyone touching a separate marketing tool.",
    useCases: [
      { title: "Recover abandoned checkouts", description: "A clothing store triggers a three-message recovery sequence when a shopper abandons checkout. An email goes out within an hour, an SMS the next morning if there is consent, and a final discount offer 24 hours later — all tracked against the recovered revenue." },
      { title: "Run post-purchase review and upsell flows", description: "A skincare brand sends an order confirmation immediately, a shipping update on fulfillment, and a review request seven days after delivery. Repeat buyers move into a VIP segment with early access to launches via SMS and email." },
      { title: "Win back lapsed customers", description: "A coffee subscription store identifies customers whose last order was more than 90 days ago. A workflow sends a personalized win-back email with a discount code, and unresponsive contacts get a follow-up via SMS the following week." }
    ],
    setupSteps: [
      "Make sure you have admin access to the Shopify store you want to connect.",
      "Open WellPlan's Integrations settings and click Connect Shopify.",
      "Authorize the WellPlan app inside your Shopify admin to grant customer, order, and product permissions.",
      "Map order events to WellPlan workflows and run a test order to confirm the sync."
    ],
    faqs: [
      { q: "Will historical orders sync into WellPlan?", a: "Yes. On initial connection, Shopify customers and recent order history are imported into WellPlan so each contact has purchase context from day one. Going forward, new orders, fulfillments, and refunds sync via webhooks in near real time." },
      { q: "Does the integration support Shopify Plus?", a: "Yes. The integration works with Shopify, Advanced Shopify, and Shopify Plus stores. Plus merchants benefit from higher API limits and additional workflow capabilities such as multi-store consolidation into a single WellPlan account where supported." },
      { q: "Can I trigger SMS on abandoned checkouts?", a: "Yes, provided you have collected SMS marketing consent from the shopper at checkout in compliance with Shopify's consent capture and your local regulations. WellPlan workflows respect contact-level opt-in status before sending any SMS or WhatsApp messages." },
      { q: "Does it work with Shopify subscriptions?", a: "Subscription order events from supported Shopify subscription apps generally flow into WellPlan through the standard order webhooks. Workflows can branch on whether an order is a first purchase, a recurring billing, or a one-time add-on." }
    ]
  },
  "woocommerce": {
    longDescription: "WooCommerce is the most widely used e-commerce plugin on WordPress, powering a large share of online stores worldwide. Connecting WooCommerce to WellPlan syncs customers, orders, and products into the CRM so each shopper becomes a contact with full order history. Workflows trigger from order created, order completed, refunded, or abandoned cart events to send email, SMS, and WhatsApp follow-ups. Support conversations land in the unified inbox with order context attached, and the visual workflow builder runs post-purchase, recovery, and win-back sequences without leaving your CRM.",
    useCases: [
      { title: "Send order confirmations and shipping updates", description: "A home goods store sends a branded order confirmation email immediately after checkout and an SMS the moment the order ships. The customer's WellPlan contact tracks each stage and stores the order total for future segmentation." },
      { title: "Recover abandoned carts", description: "A supplements store triggers a two-email sequence on abandoned cart, escalating to a discount code 24 hours later. Customers who recover their cart move into a Repeat Buyer pipeline; the rest stay in a long-term re-engagement sequence." },
      { title: "Promote restocks and new collections", description: "A handmade jewelry shop tags customers by past purchase category. When a new collection launches, segmented emails go out only to relevant buyers, with a follow-up SMS to top spenders 24 hours later for a personal touch." }
    ],
    setupSteps: [
      "Install or confirm the WooCommerce plugin is active on your WordPress site.",
      "Open WellPlan's Integrations settings and click Connect WooCommerce.",
      "Generate REST API keys inside WooCommerce and paste them into WellPlan, or use the OAuth handoff if available.",
      "Map order events to workflows, place a test order, and confirm contacts and orders appear in WellPlan."
    ],
    faqs: [
      { q: "Which WooCommerce versions are supported?", a: "The integration uses the standard WooCommerce REST API, which is included in all recent versions of WooCommerce. Stores on modern, supported WordPress and WooCommerce releases work without additional plugins beyond what WooCommerce installs by default." },
      { q: "Do I need a paid WooCommerce extension?", a: "No. Core WooCommerce includes the REST API needed for the integration. Abandoned cart capture works best when shoppers enter an email before payment, which is the default behavior of WooCommerce checkout for guest and registered customers alike." },
      { q: "Will subscription orders sync?", a: "If you use WooCommerce Subscriptions or a similar plugin, recurring order events generally fire through the standard order hooks and are processed by WellPlan. Workflows can branch based on order type, billing schedule, or subscription status." },
      { q: "Can I sync product data?", a: "Yes. Products, variants, prices, and stock levels can sync into WellPlan so workflows can reference what a customer bought. This makes it easy to send category-specific upsell offers or restock alerts based on a contact's purchase history." }
    ]
  },
  "magento": {
    longDescription: "Magento, now Adobe Commerce, is a feature-rich e-commerce platform used by mid-market and enterprise merchants who need deep customization. It supports complex catalogs, multi-store setups, and advanced B2B features. Connecting Magento to WellPlan syncs customers, orders, and product data into the CRM, surfacing each shopper as a contact with full purchase history. Workflows trigger from order placed, invoice generated, shipment created, or credit memo events to drive post-purchase email, SMS, and WhatsApp sequences. For high-volume stores, this turns Magento order data into actionable lifecycle marketing without custom code.",
    useCases: [
      { title: "Drive cross-sell campaigns from order data", description: "A B2B parts distributor on Magento tags customers by purchased product family. When a complementary product launches, only relevant accounts receive a targeted email, and their account managers get a WellPlan task to follow up by phone." },
      { title: "Send branded post-purchase sequences", description: "A luxury retailer sends order confirmations, dispatch notes, and delivery follow-ups through WellPlan rather than Magento's default emails. Each touchpoint is fully designed and personalized, with the customer's order detail pulled from synced custom fields." },
      { title: "Re-engage dormant high-value accounts", description: "An industrial supplier identifies accounts that have not ordered in six months but historically spend large amounts. A workflow alerts the account manager via Slack and queues a personalized SMS plus email cadence for the contact." }
    ],
    setupSteps: [
      "Have admin access to the Magento (Adobe Commerce) store you want to connect.",
      "Create an integration inside Magento's System > Integrations and grant the required API resources.",
      "Open WellPlan's Integrations settings, paste the access token and store URL, and confirm the connection.",
      "Map order, invoice, and shipment events to WellPlan workflows and run a test order to validate the sync."
    ],
    faqs: [
      { q: "Does this work with both Magento Open Source and Adobe Commerce?", a: "Yes. The integration uses Magento's REST API, which is available on both Magento Open Source (the free, community edition) and Adobe Commerce (the paid, enterprise edition). Some advanced B2B features are only available on Adobe Commerce." },
      { q: "Will multi-store views sync into one WellPlan account?", a: "Yes. Multi-store and multi-website Magento setups can sync into a single WellPlan account, with workflows able to branch based on the originating store view. This lets multi-brand merchants centralize CRM while keeping store-specific messaging." },
      { q: "Does the integration support B2B price lists?", a: "Customer-specific pricing and B2B catalog data exposed through the Magento API can be referenced inside WellPlan custom fields and workflows. Heavily customized B2B setups may need a developer to map specific data points during initial configuration." },
      { q: "What about Magento 1?", a: "Magento 1 reached end of life in 2020 and is no longer officially supported by Adobe. The integration targets Magento 2 / Adobe Commerce. Merchants still on Magento 1 should migrate to a supported version before connecting any modern marketing tool." }
    ]
  },
  "bigcommerce": {
    longDescription: "BigCommerce is an enterprise-focused e-commerce platform known for its open APIs, headless capabilities, and strong B2B feature set. Connecting BigCommerce to WellPlan syncs customers, orders, products, and abandoned carts into the CRM, surfacing each shopper as a contact with complete purchase history. Workflows trigger from order created, shipped, refunded, or abandoned cart events to power post-purchase email, SMS, and WhatsApp sequences. Headless and multi-storefront merchants can centralize lifecycle marketing in WellPlan while keeping the storefront experience fully custom on BigCommerce.",
    useCases: [
      { title: "Recover abandoned carts across storefronts", description: "A multi-brand retailer on BigCommerce runs one abandoned cart sequence across all storefronts. WellPlan workflows branch on which brand the cart came from, sending brand-appropriate emails and SMS with the correct recovery link for each storefront." },
      { title: "Run B2B account follow-ups", description: "A wholesale supplier triggers a workflow when a B2B account places its first order. The assigned account rep gets a task and a Slack notification, and the buyer receives a personalized onboarding sequence with payment terms and reorder instructions." },
      { title: "Power post-purchase review collection", description: "A pet supplies store sends a review request seven days after delivery with a one-click rating link. Five-star reviewers get a follow-up asking for a public review; lower scores route to support inside the WellPlan unified inbox." }
    ],
    setupSteps: [
      "Have store owner or admin access to the BigCommerce store you want to connect.",
      "Create an API account inside BigCommerce's Advanced Settings and grant customer, order, and product scopes.",
      "Open WellPlan's Integrations settings, paste the BigCommerce API credentials, and confirm the connection.",
      "Map order events to WellPlan workflows, place a test order, and confirm the data flows through correctly."
    ],
    faqs: [
      { q: "Does the integration support headless BigCommerce?", a: "Yes. Because the integration uses BigCommerce's storefront and admin APIs, it works regardless of whether the front-end is on Stencil, a headless framework like Next.js, or a custom build. Backend order and customer data syncs identically." },
      { q: "Will customer groups sync?", a: "Yes. BigCommerce customer groups can be mapped to WellPlan tags or custom fields so workflows can branch on whether a customer is a wholesale buyer, VIP, or standard shopper. This is useful for B2B and tiered loyalty programs." },
      { q: "Can I sync multiple BigCommerce storefronts?", a: "BigCommerce's Multi-Storefront feature surfaces additional storefront-specific data alongside orders. Workflows can branch on the originating storefront so multi-brand merchants can run different lifecycle sequences from a single WellPlan account." },
      { q: "What about abandoned cart emails?", a: "BigCommerce captures abandoned cart data once a shopper enters an email at checkout. Those events flow into WellPlan, enabling fully customizable recovery sequences that can mix email, SMS, and WhatsApp instead of relying on BigCommerce's built-in templates." }
    ]
  },
  "prestashop": {
    longDescription: "PrestaShop is a popular open-source e-commerce platform with strong adoption in Europe and Latin America, particularly among small and mid-sized merchants. Connecting PrestaShop to WellPlan syncs customers, orders, and products into the CRM so every shopper becomes a contact with order history attached. Workflows trigger from new order, order status change, and refund events to power post-purchase email, SMS, and WhatsApp sequences. Multilingual stores benefit from being able to route each contact to a workflow in their preferred language, all managed from a single CRM rather than the PrestaShop back office.",
    useCases: [
      { title: "Send multilingual order confirmations", description: "A French homeware store with customers in France, Spain, and Belgium sends order confirmations in the customer's chosen language. WellPlan reads the language attribute from the PrestaShop order and routes contacts into language-specific workflows automatically." },
      { title: "Recover abandoned carts on small stores", description: "A boutique olive oil store recovers abandoned carts with a two-email sequence and a personal WhatsApp follow-up where the shopper opted in. The merchant uses one WellPlan workflow instead of installing multiple PrestaShop modules." },
      { title: "Promote loyalty program tiers", description: "A cosmetics retailer tags customers by lifetime spend pulled from PrestaShop. When a buyer crosses the next tier threshold, an automated email announces the upgrade and lists the new perks, while a CRM task alerts the owner for top spenders." }
    ],
    setupSteps: [
      "Have admin access to the PrestaShop store you want to connect.",
      "Enable PrestaShop's Webservice in Advanced Parameters and create an API key with the needed resource permissions.",
      "Open WellPlan's Integrations settings, paste the store URL and API key, and confirm the connection.",
      "Map order and customer events to WellPlan workflows, place a test order, and verify data flow."
    ],
    faqs: [
      { q: "Which PrestaShop versions are supported?", a: "The integration targets modern PrestaShop 1.7 and PrestaShop 8 releases, which share a similar webservice API. Stores on older 1.6 or earlier versions should upgrade to a supported release before connecting, both for security and for compatibility." },
      { q: "Will customer language sync into WellPlan?", a: "Yes. PrestaShop's per-customer language attribute syncs into a WellPlan custom field. Workflows can branch on language so French, Spanish, and English customers each receive sequences written in their preferred language without manual segmentation." },
      { q: "Do I need to install a PrestaShop module?", a: "Not necessarily. PrestaShop's built-in webservice supports the integration out of the box once enabled. Some merchants prefer a dedicated module for richer event triggers, but the standard webservice covers core customer and order sync needs." },
      { q: "Can I trigger workflows on order status changes?", a: "Yes. PrestaShop order statuses such as Payment accepted, Shipped, or Delivered can each trigger separate WellPlan workflows. This makes it easy to send a different message at each step of fulfillment without configuring email templates inside PrestaShop." }
    ]
  },
  "stripe": {
    longDescription: "Stripe is one of the most widely used online payment processors, handling everything from one-time purchases to subscriptions, invoicing, and marketplace payouts for millions of businesses worldwide. Connecting Stripe to WellPlan turns payment events into CRM triggers: each successful charge, new subscription, failed payment, or refund flows into the contact's timeline. Workflows can send receipts via email, recover failed payments with SMS, upsell subscribers via WhatsApp, or alert the team in Slack when high-value transactions happen. Payment data lives next to messaging history so revenue context informs every customer interaction.",
    useCases: [
      { title: "Recover failed subscription payments", description: "A SaaS business triggers a dunning workflow when Stripe reports a failed subscription charge. The contact receives an email with an updated billing link, then an SMS 48 hours later if payment is still outstanding, reducing involuntary churn." },
      { title: "Send branded receipts and onboarding", description: "An online course creator sends a branded receipt and welcome email immediately after Stripe Checkout succeeds. The new customer is tagged by product purchased and enters a multi-day onboarding sequence with course access links and SMS reminders." },
      { title: "Upsell subscribers based on plan", description: "A productivity app segments customers by Stripe plan. Annual subscribers get long-form educational content, while monthly subscribers get periodic upgrade offers via email and SMS. Cancellations trigger a win-back workflow with a discount on returning." }
    ],
    setupSteps: [
      "Sign in to your Stripe Dashboard and ensure you have admin or developer access.",
      "Open WellPlan's Integrations settings and click Connect Stripe.",
      "Authorize WellPlan through Stripe's OAuth flow, choosing the account to connect.",
      "Map Stripe events — charge succeeded, invoice failed, subscription created — to WellPlan workflows and test with a sandbox transaction."
    ],
    faqs: [
      { q: "Will historical Stripe customers sync?", a: "On initial connection, recent Stripe customers and subscriptions are imported into WellPlan so each contact has billing context. Older historical data can typically be backfilled, and going forward all events sync in near real time through Stripe webhooks." },
      { q: "Can I accept payments through WellPlan using Stripe?", a: "Yes. WellPlan can act as a Stripe-connected platform for invoices, payment links, and checkout flows generated inside the CRM. Funds settle directly to your Stripe account just as if they had come through any other Stripe integration." },
      { q: "Does it support subscriptions and Stripe Billing?", a: "Yes. Stripe subscription events, invoice generation, and payment retries flow into WellPlan as discrete triggers. Workflows can react to subscription created, updated, canceled, trial ending, or invoice paid events to power lifecycle automation." },
      { q: "Is Stripe Connect supported?", a: "Stripe Connect is supported for platforms that route payments to multiple sub-merchants. The exact configuration depends on whether you use Standard, Express, or Custom accounts, and the integration handles the standard account model out of the box." }
    ]
  },
  "paypal": {
    longDescription: "PayPal is one of the most recognized digital payment brands in the world, with hundreds of millions of active accounts across more than 200 markets. Many shoppers prefer PayPal at checkout because of its built-in buyer protection. Connecting PayPal to WellPlan brings payment events — completed sales, subscription billings, refunds, disputes — into the CRM as triggers. Workflows can send receipts, recover failed billings, and tag contacts by lifetime PayPal spend. PayPal sits alongside Stripe and other processors so businesses with multiple payment options can run one consistent post-purchase experience.",
    useCases: [
      { title: "Send instant PayPal receipts and follow-up", description: "An online education seller sends a branded receipt immediately after a PayPal sale completes. The customer is enrolled in the right course tag, gets a five-day welcome sequence by email, and receives a checkpoint SMS halfway through." },
      { title: "Recover failed recurring billings", description: "A membership site catches PayPal subscription billing failures via webhooks. A workflow emails the customer with an updated billing link, escalates to SMS after 48 hours, and alerts the team in Slack if no resolution happens within a week." },
      { title: "Track dispute and chargeback activity", description: "A digital products seller monitors PayPal disputes. New dispute events create internal tasks for the team to respond inside the PayPal Resolution Center, and the affected customer's contact is tagged so future campaigns can exclude flagged accounts." }
    ],
    setupSteps: [
      "Have admin access to the PayPal Business account you want to connect.",
      "Create an app in the PayPal Developer Dashboard to generate API credentials.",
      "Open WellPlan's Integrations settings, paste the PayPal client ID and secret, and confirm the connection.",
      "Subscribe to the relevant PayPal webhook events and map them to WellPlan workflows; test with a sandbox transaction."
    ],
    faqs: [
      { q: "Do I need a PayPal Business account?", a: "Yes. The integration uses PayPal's REST APIs, which require a PayPal Business account rather than a personal account. Upgrading from personal to business is free and unlocks both the developer tools and standard merchant features like invoicing and subscriptions." },
      { q: "Will PayPal subscriptions sync into WellPlan?", a: "Yes. PayPal Subscriptions billing events — created, activated, suspended, canceled, payment failed — flow into WellPlan through webhooks. Workflows can branch on subscription status to power retention, dunning, and upgrade sequences." },
      { q: "Can I accept PayPal payments from WellPlan invoices?", a: "Depending on your account configuration, PayPal can be enabled as a payment method on WellPlan-generated invoices and payment links alongside other processors. Customers see PayPal as a checkout option and funds settle into your PayPal Business account." },
      { q: "What about PayPal Disputes?", a: "Dispute and chargeback webhooks can trigger internal alerts inside WellPlan, such as creating a task for the team or posting to a Slack channel. Responding to the dispute itself is handled inside the PayPal Resolution Center as PayPal requires." }
    ]
  },
  "square": {
    longDescription: "Square offers an integrated suite of payments and point-of-sale tools used by retailers, restaurants, service businesses, and online sellers. The Square ecosystem includes in-person POS, online checkout, invoicing, appointments, and a unified customer directory. Connecting Square to WellPlan syncs customers and transactions into the CRM, treating every in-store, in-app, or online sale as a CRM event. Workflows trigger on payment completed, invoice paid, refund, or appointment booked to send email, SMS, and WhatsApp follow-ups. In-person customer data finally lives in the same CRM as your digital marketing.",
    useCases: [
      { title: "Send digital receipts and review requests", description: "A coffee shop using Square Register sends a digital receipt email and asks regular customers for a Google review three days later. Repeat visitors are tagged by visit frequency and segmented for loyalty offers via SMS." },
      { title: "Re-engage in-store customers online", description: "A boutique uses Square POS to capture customer emails at checkout. Those contacts sync into WellPlan and enter a new-customer welcome sequence promoting the online store, with location-aware messaging for any future in-store events." },
      { title: "Confirm and remind appointments", description: "A salon using Square Appointments triggers SMS confirmations the moment a customer books, then a reminder 24 hours before. No-shows automatically receive a follow-up message and a tag to flag potential rebooking in the next campaign." }
    ],
    setupSteps: [
      "Sign in to your Square Dashboard with admin access to the location(s) you want to connect.",
      "Create an application in the Square Developer Dashboard to generate API credentials.",
      "Open WellPlan's Integrations settings, paste the Square credentials, and authorize the connection.",
      "Map Square payment, customer, and appointment events to WellPlan workflows and test with a sample transaction."
    ],
    faqs: [
      { q: "Does the integration cover Square Online and in-person POS?", a: "Yes. Square's unified APIs surface customers and payments from Square POS, Square Online (including Weebly-based stores), Invoices, and Appointments. Workflows can branch by source so in-person, online, and appointment customers each get appropriate follow-up." },
      { q: "Will Square Appointments sync?", a: "Yes. Booking, rescheduling, and cancellation events from Square Appointments trigger WellPlan workflows for confirmations, reminders, and rebooking sequences. This complements WellPlan's own calendar with the broader CRM, marketing, and inbox features." },
      { q: "Can WellPlan accept payments through Square?", a: "Depending on configuration, Square can be enabled as a payment method on WellPlan-generated invoices and payment links. Funds settle to your Square account just like any other Square sale, with the transaction logged against the customer contact." },
      { q: "What about Square's customer directory?", a: "Square's customer directory data — including segments, notes, and groups — can be mirrored into WellPlan contacts and tags. This lets you keep your in-store customer notes from Square while running marketing automation against the same records." }
    ]
  },
  "braintree": {
    longDescription: "Braintree is a PayPal-owned payment platform aimed at larger merchants who want a flexible payments stack with PayPal, card, Apple Pay, Google Pay, and Venmo built in. It is popular with subscription businesses and marketplaces that need recurring billing, vaulting, and merchant account flexibility. Connecting Braintree to WellPlan brings transaction, subscription, and dispute events into the CRM as triggers for email, SMS, and WhatsApp automation. Each customer payment becomes a CRM signal, and dunning, win-back, and post-purchase sequences run from the same place as the rest of your marketing.",
    useCases: [
      { title: "Power dunning for subscription failures", description: "A streaming service catches Braintree subscription transaction failures. A workflow emails the subscriber with an updated billing link, sends a follow-up SMS at 48 hours, and pauses access via a webhook to the product if billing still fails after a week." },
      { title: "Send post-purchase upsell sequences", description: "A boutique brand using Braintree-powered checkout welcomes each new buyer with a confirmation email, a styling tip series, and a one-time upsell offer two weeks later. Repeat buyers are excluded from new-customer flows automatically." },
      { title: "Reduce involuntary churn", description: "A SaaS company alerts customer success in Slack whenever a high-value account's Braintree card fails. The account manager can intervene personally before automated dunning escalates, often saving the renewal entirely." }
    ],
    setupSteps: [
      "Sign in to your Braintree Control Panel with admin access.",
      "Generate an API key under Settings > API and locate your Merchant ID and Public and Private Keys.",
      "Open WellPlan's Integrations settings, paste the Braintree credentials, and confirm the connection.",
      "Subscribe to relevant webhooks and map events to WellPlan workflows; test with a sandbox transaction."
    ],
    faqs: [
      { q: "How is Braintree different from Stripe or PayPal Checkout?", a: "Braintree is PayPal's full-stack gateway aimed at larger merchants who want PayPal, card, and alt-payment methods unified behind one API. It supports vaulting, recurring billing, and marketplace splits similar to Stripe, with PayPal funding baked in by default." },
      { q: "Does the integration support Braintree subscriptions?", a: "Yes. Braintree subscription events — created, charged, charged unsuccessfully, canceled, expired, past due — flow into WellPlan through webhooks. Workflows can react to each status to power dunning, retention, and upgrade automation." },
      { q: "Can I use Braintree's sandbox for testing?", a: "Yes. Braintree provides a sandbox environment with separate credentials for testing. WellPlan can connect to either the sandbox or production environment, making it safe to validate workflows end-to-end before going live with real transactions." },
      { q: "What payment methods does Braintree support?", a: "Braintree supports major credit and debit cards, PayPal, Venmo (US), Apple Pay, Google Pay, ACH Direct Debit in supported regions, and several local payment methods. Each captured method can be vaulted for future charges, which is useful for subscriptions." }
    ]
  },
  "google-sheets": {
    longDescription: "Google Sheets is one of the most widely used spreadsheet applications in the world, often acting as a lightweight database for small teams and a reporting layer for larger ones. Connecting Google Sheets to WellPlan lets contacts, deals, custom fields, and form submissions sync to specific tabs in real time, and lets new rows in a Sheet trigger workflows in the CRM. This makes Sheets useful as both an inbox for external data sources and an export destination for reporting in tools like Looker Studio or pivot tables.",
    useCases: [
      { title: "Build a lightweight reporting layer", description: "A marketing agency exports new leads, deal stage changes, and campaign performance into a Google Sheet daily. The Sheet feeds a Looker Studio dashboard for client reporting, removing manual exports from the team's weekly routine." },
      { title: "Ingest leads from external lists", description: "A B2B sales team buys a targeted list and drops it into a Google Sheet. A WellPlan trigger imports each new row as a contact, applies the right tags and pipeline stage, and assigns the lead to an SDR for outbound outreach." },
      { title: "Sync custom field updates", description: "An e-commerce business tracks supplier lead times in a shared Google Sheet. When a row updates, a WellPlan workflow pushes the new lead time into a contact custom field, which downstream marketing emails reference when promising shipping speeds." }
    ],
    setupSteps: [
      "Have a Google account with edit access to the Sheet you want to connect.",
      "Open WellPlan's Integrations settings and click Connect Google Sheets.",
      "Authorize WellPlan through Google's OAuth flow, granting access to the specific Sheets you select.",
      "Map columns to WellPlan contact fields and configure triggers for new rows or row updates."
    ],
    faqs: [
      { q: "Will rows sync in real time?", a: "New and updated rows typically sync within a short polling interval, often a minute or less depending on volume. For truly instant triggers, many users front their Sheet with a Google Form or use Apps Script to push to a webhook the moment a row is added." },
      { q: "Can I send updates from WellPlan back to a Sheet?", a: "Yes. Workflows can append rows or update existing rows in a connected Sheet — for example, logging every new contact, every deal won, or every form submission. This is the easiest path to ad-hoc reporting without a full BI tool." },
      { q: "What happens if a column is renamed?", a: "If a mapped column is renamed in Google Sheets, the integration may fail until the mapping is updated inside WellPlan. To avoid surprises, treat your synced Sheet as a structured data source and avoid renaming columns once workflows depend on them." },
      { q: "Does it work with Google Workspace accounts?", a: "Yes. Personal Gmail accounts and Google Workspace accounts both support the integration. Workspace admins can control which third-party apps users in their domain are allowed to authorize through Google's standard admin controls." }
    ]
  },
  "notion": {
    longDescription: "Notion is an all-in-one workspace combining documents, databases, wikis, and project boards, used by individuals and teams of all sizes. Many businesses keep their content calendars, client trackers, and internal SOPs inside Notion. Connecting Notion to WellPlan syncs data between Notion databases and the CRM so contacts, deals, or content items can flow either direction. New contacts can create Notion database entries, won deals can publish to a client tracker, and content marked Ready in Notion can trigger campaigns in WellPlan. The integration keeps marketing and operations data aligned without manual copy-paste.",
    useCases: [
      { title: "Sync new contacts to a client database", description: "A consulting firm keeps an active client database in Notion. When a deal moves to Won in WellPlan, a workflow creates a Notion page for the new client with templated tasks, project links, and the deal value populated in properties." },
      { title: "Trigger campaigns from a content calendar", description: "A content team plans posts in a Notion database. When a row's Status moves to Ready, a WellPlan workflow pulls the body and schedules an email broadcast and social posts, removing the need to re-enter copy in multiple tools." },
      { title: "Centralize internal documentation references", description: "A support team links each tagged WellPlan conversation to the relevant Notion SOP. New SOPs published in Notion trigger an internal notification, and updated SOPs flow into a shared dashboard the team checks weekly." }
    ],
    setupSteps: [
      "Create a Notion integration in your workspace's Integrations settings and copy its internal token.",
      "Share the relevant Notion pages or databases with the integration so it can read and write.",
      "Open WellPlan's Integrations settings, paste the Notion token, and select the databases to connect.",
      "Map Notion properties to WellPlan fields and configure the workflows that read or write Notion entries."
    ],
    faqs: [
      { q: "Will the integration read all my Notion pages?", a: "No. Notion integrations only access pages and databases that have been explicitly shared with them. This is a Notion-side permission you control, so you can scope the WellPlan integration to only the databases needed without exposing the rest of your workspace." },
      { q: "Can I create Notion pages from WellPlan workflows?", a: "Yes. Workflow actions can create new database entries in Notion with mapped properties — for example, creating a client page when a deal closes, or logging a new support escalation in a tracking database." },
      { q: "Does it work with Notion's free plan?", a: "Yes. Notion's internal integrations are available on all plans, including free personal workspaces. Larger teams typically prefer paid plans for additional collaboration and permission features, but the integration itself does not require a specific tier." },
      { q: "What about Notion AI?", a: "Notion AI is a separate feature inside Notion and is unrelated to the integration. The connection between WellPlan and Notion focuses on structured data sync — properties, database rows, and page references — rather than generative content." }
    ]
  },
  "airtable": {
    longDescription: "Airtable is a database-spreadsheet hybrid used by product, marketing, and operations teams to manage structured workflows that go beyond what Google Sheets supports. Bases hold tables, views, automations, and rich field types like attachments and linked records. Connecting Airtable to WellPlan syncs records between Airtable tables and the CRM — contacts, deals, projects, or any custom record type. New WellPlan contacts can create Airtable records, Airtable status changes can trigger CRM workflows, and shared dashboards stay in sync without manual exports. The integration is especially useful for teams who treat Airtable as their source of truth for non-CRM operational data.",
    useCases: [
      { title: "Run a content pipeline across both tools", description: "A media brand plans articles in Airtable. When a record's Status moves to Published, a WellPlan workflow sends a broadcast email featuring the new article and posts links to social channels through the unified campaign builder." },
      { title: "Manage a partner or affiliate base", description: "A SaaS company manages partner accounts in Airtable. New partners created in Airtable sync into WellPlan as contacts tagged Partner, and partner deals progress through a Partner Sales pipeline whose stages mirror the Airtable record statuses." },
      { title: "Centralize event registrations", description: "An events team collects registrations across multiple forms into a single Airtable base. The base syncs to WellPlan as contacts tagged by event, and pre-event email and SMS reminders go out from the CRM rather than from a separate event tool." }
    ],
    setupSteps: [
      "Generate an Airtable personal access token in your Airtable account's Builder Hub.",
      "Open WellPlan's Integrations settings and paste the Airtable token.",
      "Select the bases and tables you want to connect and map fields to WellPlan contact properties.",
      "Configure triggers for new or updated records, then test by creating a record in Airtable."
    ],
    faqs: [
      { q: "Do I need an Airtable paid plan?", a: "The integration works on Airtable's free plan for small bases. Larger teams typically need a paid plan for higher record limits, more automation runs, and advanced field types. The integration itself does not require a specific Airtable plan to install." },
      { q: "Will linked records sync?", a: "Airtable's linked record fields can be mapped into WellPlan as text references or used to drive workflow branching. Fully bidirectional linked-record sync is more nuanced and usually configured per table rather than globally, depending on the use case." },
      { q: "Can I trigger WellPlan workflows from Airtable Automations?", a: "Yes. Airtable Automations can call WellPlan webhooks when records change, which then triggers any workflow you have built. This pattern is common when the Airtable base is the source of truth for some operational signal you want to act on in marketing." },
      { q: "What field types are supported?", a: "Standard field types — single line text, long text, numbers, dates, single and multi-select, checkbox, URL, email, and phone — sync cleanly. Attachments, formulas, and computed fields can usually be read but require care if you also want to write back into them." }
    ]
  },
  "trello": {
    longDescription: "Trello is a visual project management tool built around boards, lists, and cards, popular for its simplicity and Kanban-style workflows. Teams use Trello to track tasks, content pipelines, sales handoffs, and onboarding checklists. Connecting Trello to WellPlan creates cards from CRM events and reads card activity back into workflows. A new deal can create a project card, a won deal can move it to the Active Clients list, and a card moved to Done can mark a CRM task complete. The integration keeps operational delivery in Trello connected to the customer record in WellPlan.",
    useCases: [
      { title: "Hand off won deals to delivery", description: "An agency creates a Trello card on the Onboarding board the moment a deal hits Won in WellPlan. The card includes the client name, deal value, account manager, and links back to the contact record, so delivery starts immediately." },
      { title: "Track support escalations as cards", description: "A B2B company creates a Trello card whenever a support conversation is tagged Escalation in WellPlan. The card lives on a Support Triage board, gets assigned to a senior engineer, and updates the CRM contact when the card is marked complete." },
      { title: "Run a content production pipeline", description: "A marketing team uses a Trello content board. When a card moves to Ready to Publish, a WellPlan workflow drafts a campaign email featuring the content, queues it for review, and notifies the editor in the unified inbox." }
    ],
    setupSteps: [
      "Sign in to Trello and generate an API key and token from the Atlassian Power-Up admin or developer page.",
      "Open WellPlan's Integrations settings, paste the Trello credentials, and confirm the connection.",
      "Select the boards and lists workflows are allowed to create or update cards in.",
      "Map CRM events to card creation, movement, or label changes and run a test to validate."
    ],
    faqs: [
      { q: "Does the integration support Trello Workspaces?", a: "Yes. Boards inside any Trello Workspace your authenticated user can access are available for integration. Workspace admins can control which third-party apps members are allowed to authorize through Trello's standard app management settings." },
      { q: "Can I sync custom fields?", a: "Trello's Custom Fields Power-Up exposes additional structured fields per card. The integration can read and write these fields if your account has the Power-Up enabled, which is included on Standard, Premium, and Enterprise Trello plans." },
      { q: "Will card comments come into WellPlan?", a: "Card-level activity such as moves between lists and label changes can trigger workflows. Free-form comment text is less commonly mapped because it is unstructured, but card comments can usually be read into a workflow when needed for context." },
      { q: "What about Trello and Atlassian Jira together?", a: "Trello and Jira are both Atlassian products but use different APIs and integration patterns. WellPlan's Trello integration focuses on Trello boards and cards; Jira ticketing would typically be configured through a separate integration or via webhooks." }
    ]
  },
  "asana": {
    longDescription: "Asana is a team task and project management tool used by organizations to plan, assign, and track work across departments. Projects can be viewed as lists, boards, timelines, or calendars, with rules and custom fields available on paid plans. Connecting Asana to WellPlan creates tasks from CRM events and reads task activity back into workflows. New deals can create onboarding tasks, customer support escalations can become Asana tasks for engineering, and Asana task completions can mark CRM activities done. The integration ties post-sale delivery and operational handoffs directly to the customer record.",
    useCases: [
      { title: "Trigger onboarding tasks on deal won", description: "A consulting firm creates a templated Asana project the moment a deal hits Won in WellPlan. Tasks are assigned to the right team members, due dates calculated from the close date, and the project description links back to the WellPlan contact." },
      { title: "Route support escalations to engineering", description: "A SaaS company creates an Asana task in the Engineering project whenever a support conversation gets tagged Bug Report. The task carries the customer's name and a link to the conversation, and closes when engineering marks the task complete." },
      { title: "Coordinate marketing launches", description: "A marketing team uses Asana to plan a product launch. When the launch project's Go Live task is marked complete, a WellPlan workflow sends a broadcast email, triggers social posts, and notifies sales in Slack with talking points." }
    ],
    setupSteps: [
      "Sign in to Asana with admin or member access to the workspace and projects you want to connect.",
      "Open WellPlan's Integrations settings and click Connect Asana.",
      "Authorize WellPlan through Asana's OAuth flow.",
      "Select the projects workflows can create tasks in, map fields, and run a test event to confirm task creation."
    ],
    faqs: [
      { q: "Do I need a paid Asana plan?", a: "Many of the integration's core features — creating tasks, assigning users, and reading task completion — work on Asana's free Basic plan. Advanced capabilities such as Rules, Custom Fields, and Forms typically require an Asana paid plan." },
      { q: "Can WellPlan read task comments?", a: "Asana task-level activity, including comments, can be read into workflows when needed for context. Most teams use the integration for structured signals — task created, assigned, completed — and keep free-form discussion in Asana itself." },
      { q: "Will I see Asana task status inside WellPlan?", a: "Yes. Workflows can mirror Asana task completion into WellPlan custom fields or activity logs on the related contact or deal. This lets sales and customer success see whether delivery work is on track without opening Asana." },
      { q: "What about Asana subtasks and dependencies?", a: "Subtasks can be created and read through the Asana API and supported in WellPlan workflows. Task dependencies are mostly an Asana-side concept; they can be referenced when creating tasks but are best managed inside Asana for clarity." }
    ]
  },
  "webhooks": {
    longDescription: "Webhooks are the universal glue of the modern web — HTTP POST callbacks that fire from one system to another when an event happens. Connecting webhooks to WellPlan lets any tool that can send an HTTP request push data into the CRM, and lets WellPlan workflows push data out to any tool that can receive one. Inbound webhooks become triggers; outbound webhook actions become integrations with anything custom. Combined with the visual workflow builder, webhooks turn WellPlan into a flexible automation hub even for tools that do not have a native integration listed.",
    useCases: [
      { title: "Catch leads from a custom landing page", description: "A startup runs a bespoke marketing site without a standard form provider. The site POSTs each submission to a WellPlan webhook URL, which creates the contact, applies tags, and starts a welcome sequence — no custom CRM code required." },
      { title: "Notify external systems on CRM events", description: "An e-commerce brand fires an outbound webhook to its warehouse management system whenever a deal in WellPlan moves to Paid. The payload carries the order ID, items, and shipping address so the warehouse can pick and ship within minutes." },
      { title: "Bridge tools without a native integration", description: "An agency wires a niche industry tool to WellPlan using webhooks at both ends. The tool sends events to a WellPlan inbound URL, and WellPlan posts back to a custom endpoint on completion, replacing what would otherwise be a manual sync." }
    ],
    setupSteps: [
      "In WellPlan's workflow builder, add a Webhook trigger to generate a unique inbound URL.",
      "Configure the sending system to POST JSON payloads to that URL on the event you want to capture.",
      "Map the incoming payload fields to contact properties, custom fields, and workflow variables.",
      "For outbound calls, add a Webhook action with the target URL, method, headers, and JSON body, then test end-to-end."
    ],
    faqs: [
      { q: "What content types are supported?", a: "Inbound webhooks accept JSON, form-encoded, and most common content types. JSON is by far the easiest to work with because the payload maps cleanly to nested fields inside the workflow. Outbound webhook actions let you set the Content-Type header explicitly." },
      { q: "How do I secure my webhook endpoints?", a: "Each inbound webhook URL contains a unique token in the path, which acts as a shared secret. You can additionally require a custom header value or signature, and validate the source IP if your sending system uses a fixed range." },
      { q: "Can webhooks include authentication for outbound calls?", a: "Yes. Outbound webhook actions support Bearer tokens, Basic auth, custom headers, and signed payloads. This is enough to integrate with most REST APIs that require an API key or token, without writing custom code." },
      { q: "What happens if the receiving server is down?", a: "Outbound webhook actions can be configured with retries and timeout values. Failed deliveries are logged in the workflow run history, where you can inspect the request and response and re-run the step manually after the receiving system is back online." }
    ]
  },
  "rest-api": {
    longDescription: "The WellPlan REST API exposes contacts, conversations, opportunities, calendars, workflows, custom fields, and more as standard HTTP endpoints, secured with API keys or OAuth depending on the integration model. Developers can read and write data programmatically to power internal tools, mobile apps, headless storefronts, or custom integrations that go beyond the visual workflow builder. Combined with webhooks for event delivery, the REST API turns WellPlan into a platform — anything that runs on the CRM through the UI can also be triggered from code, version-controlled, and deployed alongside the rest of your stack.",
    useCases: [
      { title: "Build a custom client portal", description: "A SaaS company exposes a branded client portal that reads deals, invoices, and conversations from WellPlan via the REST API. Clients see real-time pipeline status without logging into the CRM, and updates from the portal write back through API actions." },
      { title: "Migrate data into WellPlan at scale", description: "A migrating business uses the REST API to import historical contacts, deal history, and notes from a legacy CRM. Scripted batches handle hundreds of thousands of records with proper rate-limit handling, far faster than a manual CSV import." },
      { title: "Power a headless integration", description: "An e-commerce platform sends order events from a custom Node service to WellPlan via the API rather than relying on a pre-built connector. The team gets exactly the fields and flows they want, and treats the integration as code under version control." }
    ],
    setupSteps: [
      "Generate an API key from WellPlan's API settings, or set up an OAuth app for multi-tenant access.",
      "Review the API documentation for the endpoints you need and the rate-limit guidelines.",
      "Make a test request from a tool like curl or Postman to confirm authentication and a successful response.",
      "Implement the calls in your application, handle errors and pagination, and monitor rate-limit headers."
    ],
    faqs: [
      { q: "How is the API authenticated?", a: "The API supports API keys for server-to-server access and OAuth 2.0 for integrations that act on behalf of other accounts. API keys are scoped to your account, and OAuth tokens are scoped to whichever permissions the authorizing user grants the app at install time." },
      { q: "What are the rate limits?", a: "Rate limits are applied per account and per endpoint to protect platform stability. The exact limits are published in the API documentation, and each response includes headers showing remaining quota. Well-behaved clients back off when limits are approached." },
      { q: "Is there a sandbox environment?", a: "Many development workflows use a separate WellPlan account as a sandbox for safe testing of API integrations before going to production. This keeps test contacts and synthetic deals out of the production environment and avoids triggering real customer communications." },
      { q: "What about pagination?", a: "List endpoints return pages of results with cursor or offset-based pagination depending on the endpoint. Clients should follow the pagination metadata in each response rather than hard-coding page sizes, since limits can change as the platform evolves." }
    ]
  }
};

/**
 * Helper: returns enriched content for a slug, or a sensible empty default.
 */
export function getIntegrationContent(slug) {
  return integrationContent[slug] || null;
}

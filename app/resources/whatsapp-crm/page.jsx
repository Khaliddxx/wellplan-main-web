import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { breadcrumbJsonLd } from '@/app/lib/seo';

const faqs = [
  {
    q: 'What is a WhatsApp CRM?',
    a: 'A WhatsApp CRM is a customer relationship management system that uses WhatsApp as a first-class messaging channel. Contacts, conversations, properties, notes, deals, and automations all live in one place, with WhatsApp messages flowing into the same inbox and timeline as email, SMS, web chat, and social DMs. With WellPlan, WhatsApp is wired into the CRM through the official WhatsApp Business API.',
  },
  {
    q: 'Do I need the WhatsApp Business API to use WellPlan?',
    a: 'Yes. WellPlan connects to WhatsApp through the official WhatsApp Business API, provisioned via a Meta-approved Business Solution Provider. You do not need to build anything against the API yourself — WellPlan handles the provisioning, phone number registration, display name approval, and template management inside the platform.',
  },
  {
    q: 'What is the 24-hour customer service window?',
    a: 'After a contact sends you a message on WhatsApp, you have a 24-hour window in which you can reply with free-form messages of any kind. Once that window closes, you can only re-engage that contact with a pre-approved template message. Any new inbound message from the contact resets the window.',
  },
  {
    q: 'What are WhatsApp message templates?',
    a: 'Templates are pre-approved message formats used to start conversations or message contacts outside the 24-hour window. Each template is submitted to Meta for review and assigned a category: Marketing, Utility, or Authentication. Approval typically takes minutes to a few hours, and templates can include variables, media headers, quick-reply buttons, and call-to-action buttons.',
  },
  {
    q: 'Do I need opt-in to message contacts on WhatsApp?',
    a: 'Yes. Meta requires that businesses obtain clear, explicit opt-in from contacts before sending them messages on WhatsApp, and the opt-in must specify that messaging will happen on WhatsApp. WellPlan supports capturing opt-in through forms, checkout, web chat, and existing CRM fields so consent is recorded against the contact record.',
  },
  {
    q: 'What is the WhatsApp quality rating?',
    a: 'Every WhatsApp Business phone number has a quality rating (High, Medium, or Low) based on recent user feedback such as blocks and reports. Low ratings can lead to messaging limits or, in severe cases, a flagged status. Sending relevant, opted-in messages and avoiding spammy template content keeps the rating high.',
  },
  {
    q: 'How does the WhatsApp tier system work?',
    a: 'New WhatsApp Business numbers start in a messaging limit tier that caps how many unique 24-hour business-initiated conversations you can start per day. As you send quality conversations and maintain a healthy rating, your number is automatically upgraded through tiers — 1K, 10K, 100K, and unlimited — over time.',
  },
  {
    q: 'Can I use AI to handle WhatsApp conversations in WellPlan?',
    a: 'Yes. WellPlan includes an AI chatbot that can qualify leads on WhatsApp, answer common questions, collect required fields, and route conversations to the right team member or workflow. The bot operates inside the same unified inbox as your human agents, so handoffs are seamless and the full conversation history is preserved.',
  },
];

export default function WhatsAppCrmPage() {
  const breadcrumb = breadcrumbJsonLd('/resources/whatsapp-crm', {
    resources: 'Resources',
    'whatsapp-crm': 'WhatsApp CRM Guide',
  });

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'WhatsApp CRM — The Complete Guide to Using WhatsApp for Business in 2026',
    description:
      'A practical guide to using WhatsApp as a CRM channel: the official Business API, unified inbox, templates, automation, AI chatbots, and best practices.',
    datePublished: '2026-05-24',
    author: {
      '@type': 'Organization',
      name: 'WellPlan',
      url: 'https://wellplan.io',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WellPlan',
      logo: {
        '@type': 'ImageObject',
        url: 'https://wellplan.io/wellplan-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://wellplan.io/resources/whatsapp-crm',
    },
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Resources</span>
            <span className="mx-2">/</span>
            <span className="text-gray-300">WhatsApp CRM Guide</span>
          </div>
          <div className="inline-block px-3 py-1 rounded-full bg-[#214CE5]/15 border border-[#214CE5]/30 text-[#9DB2FF] text-xs font-semibold mb-5">
            Guide · Updated May 2026
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            WhatsApp CRM — The Complete Guide to Using WhatsApp for Business in 2026
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            WhatsApp now serves more than 2 billion people worldwide, and customers
            increasingly expect to reach the businesses they buy from on the same
            app they use to talk to friends and family. A WhatsApp CRM brings that
            channel directly into the same record where your contacts, deals, notes,
            and automations already live. This guide explains how WhatsApp CRM works,
            what the WhatsApp Business API actually requires, and how to set it up
            with WellPlan end-to-end.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#214CE5] hover:bg-[#1a3db8] rounded-xl font-semibold transition"
            >
              Book a WhatsApp demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition"
            >
              See all features
            </Link>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-4">On this page</h2>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-[#9DB2FF] list-decimal list-inside">
            <li><a href="#what-is-whatsapp-crm" className="hover:text-white">What is WhatsApp CRM?</a></li>
            <li><a href="#why-switch" className="hover:text-white">Why businesses are switching</a></li>
            <li><a href="#app-vs-api" className="hover:text-white">Business App vs Business API</a></li>
            <li><a href="#api-rules" className="hover:text-white">What you need to know about the API</a></li>
            <li><a href="#use-cases" className="hover:text-white">Common WhatsApp CRM use cases</a></li>
            <li><a href="#setup" className="hover:text-white">How to set up WhatsApp CRM with WellPlan</a></li>
            <li><a href="#template-categories" className="hover:text-white">WhatsApp template categories</a></li>
            <li><a href="#best-practices" className="hover:text-white">Best practices</a></li>
            <li><a href="#faq" className="hover:text-white">FAQs</a></li>
          </ol>
        </div>
      </section>

      {/* What is WhatsApp CRM */}
      <section id="what-is-whatsapp-crm" className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">What is WhatsApp CRM?</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
            <p>
              A WhatsApp CRM is a customer relationship management platform that uses
              WhatsApp as a primary messaging channel for sales, support, and marketing
              communication. Every inbound and outbound WhatsApp message is attached to
              a contact record, alongside your email, SMS, calls, web chat, and social
              DMs, so the customer history is one continuous thread instead of a stack
              of disconnected tools.
            </p>
            <p>
              The mechanics matter. A WhatsApp CRM does not screen-scrape the consumer
              WhatsApp app or run on a phone in a closet. It connects to the official
              WhatsApp Business API through a Meta-approved Business Solution Provider
              (BSP). That API is the only sanctioned way for businesses to send
              programmatic WhatsApp messages at scale, use templates, run automations,
              assign conversations to teammates, and avoid the bans that come with
              unofficial workarounds.
            </p>
            <p>
              In WellPlan, WhatsApp is treated like any other channel: messages land in
              the unified inbox, automations can be triggered by WhatsApp events,
              contacts are tagged and scored, and the AI chatbot can pick up
              conversations and qualify leads before a human ever opens the thread.
              That is what differentiates a WhatsApp CRM from a WhatsApp inbox tool —
              the messages are part of the customer record, not a sidecar to it.
            </p>
          </div>
        </div>
      </section>

      {/* Why switch */}
      <section id="why-switch" className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why businesses are switching to WhatsApp CRM</h2>
          <p className="text-gray-300 text-lg mb-6">
            Email and phone are not going away, but the channel mix that customers
            actually use has shifted. The reasons businesses move WhatsApp from a side
            channel to a CRM channel come down to where customers are, how they reply,
            and how the conversations feel.
          </p>
          <ul className="space-y-4 text-gray-300">
            {[
              'WhatsApp has more than 2 billion users globally — the largest messaging platform in the world — and is the default messaging app in most of Europe, Latin America, the Middle East, India, and Africa.',
              'Conversations on WhatsApp are inherently two-way. Customers reply in line, ask follow-up questions, send photos, and treat the thread as an ongoing relationship rather than a one-off broadcast.',
              'Notifications are surfaced like personal messages, not buried in a promotions tab, so important updates — order confirmations, booking reminders, payment links — are seen quickly.',
              'WhatsApp supports rich messaging: images, video, PDFs, audio notes, location, contact cards, quick-reply buttons, and call-to-action buttons. That covers most of what businesses actually need to communicate.',
              'Identity is built in. The phone number is verified, the display name is approved by Meta, and the green checkmark for verified accounts gives customers confidence the conversation is legitimate.',
              'End-to-end encryption applies to messages between the business and the customer, which matters for industries handling sensitive information such as healthcare, finance, and legal.',
            ].map((line, i) => (
              <li key={i} className="flex gap-3">
                <Check className="w-5 h-5 text-[#6B8EFF] flex-shrink-0 mt-1" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* App vs API */}
      <section id="app-vs-api" className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">WhatsApp Business App vs WhatsApp Business API</h2>
          <p className="text-gray-300 text-lg mb-6">
            Meta offers two products for businesses. They share a name but solve
            different problems. The Business App is a free mobile app for very small
            businesses. The Business API is the programmable channel that powers
            actual CRM, automation, and team workflows.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-4 py-3 font-semibold">Capability</th>
                  <th className="px-4 py-3 font-semibold">Business App</th>
                  <th className="px-4 py-3 font-semibold">Business API (via WellPlan)</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  ['Cost', 'Free', 'Per-conversation pricing set by Meta'],
                  ['Multi-device / team access', 'Limited devices, one number, one operator at a time', 'Unlimited team members on one number with assignment'],
                  ['CRM integration', 'None', 'Native — messages attached to contact records'],
                  ['Automation & workflows', 'Basic auto-replies only', 'Full workflow builder triggered by WhatsApp events'],
                  ['Templates', 'Quick replies (manual)', 'Pre-approved templates with variables and buttons'],
                  ['AI chatbots', 'Not supported', 'Built-in AI chatbot for qualifying and routing'],
                  ['Bulk messaging', 'Manual broadcast list (limited)', 'Template broadcasts to opted-in segments'],
                  ['Verified green checkmark', 'Not available', 'Available after Meta verification'],
                  ['Best for', 'Solo owners with low message volume', 'Teams, multi-channel CRM, scaling operations'],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="px-4 py-3 font-medium text-white">{row[0]}</td>
                    <td className="px-4 py-3">{row[1]}</td>
                    <td className="px-4 py-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* API rules */}
      <section id="api-rules" className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">WhatsApp Business API: what you need to know</h2>
          <p className="text-gray-300 text-lg mb-8">
            The API has a small set of rules that shape how every WhatsApp CRM has to
            behave. Knowing them up front saves time during setup and prevents the
            quality and tier issues that quietly throttle accounts later.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">The role of a Business Solution Provider</h3>
              <p className="text-gray-300 leading-relaxed">
                Access to the WhatsApp Business API runs through Meta-approved
                Business Solution Providers (BSPs). The BSP handles phone number
                hosting, display name approval, message routing, and infrastructure.
                WellPlan ships this BSP relationship inside the product, so
                provisioning, number registration, template submission, and quality
                monitoring happen in the same UI as the rest of your CRM.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Opt-in is mandatory</h3>
              <p className="text-gray-300 leading-relaxed">
                Meta requires explicit opt-in before a business sends any WhatsApp
                message to a contact. The opt-in must name WhatsApp specifically, be
                clearly visible at the point of capture, and tie back to a record you
                can produce on request. WellPlan captures opt-in through forms, web
                chat, checkout flows, and CRM custom fields so each contact carries a
                provable consent state.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">The 24-hour customer service window</h3>
              <p className="text-gray-300 leading-relaxed">
                When a contact sends you a message, a 24-hour customer service window
                opens. Inside that window, you can reply with any free-form content —
                text, media, buttons, lists. Once it expires, the next outbound
                message must be a pre-approved template. Each new inbound message
                from the contact resets the window. WellPlan automatically tracks
                this window per conversation and prevents agents from sending
                non-template content after it closes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Quality rating</h3>
              <p className="text-gray-300 leading-relaxed">
                Each WhatsApp Business phone number has a quality rating — High,
                Medium, or Low — calculated from recent user feedback such as blocks
                and reports. A drop in rating can downgrade your messaging tier and,
                if ignored, flag the number. The fix is upstream: ship relevant,
                opted-in templates, segment carefully, and respect contacts who
                disengage.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Phone number messaging tiers</h3>
              <p className="text-gray-300 leading-relaxed">
                New numbers start in a messaging limit tier that caps the number of
                unique business-initiated conversations they can open per 24 hours.
                As you sustain a healthy quality rating and send meaningful volume,
                Meta automatically upgrades the number through tiers — 1K, 10K, 100K,
                and finally unlimited. Tier upgrades are reviewed continuously, so
                this happens in the background without any application required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Common WhatsApp CRM use cases</h2>
          <p className="text-gray-300 text-lg mb-8">
            The patterns below are the ones we see most often when teams move WhatsApp
            from a sidecar channel into the CRM. Each one combines templates, the
            24-hour window, automations, and the unified inbox in a slightly different
            way.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Lead qualification and routing',
                body: 'New form submissions trigger a WhatsApp template that asks qualifying questions. The AI chatbot collects answers, scores the lead, and assigns the conversation to the right rep or workflow.',
              },
              {
                title: 'Appointment booking and reminders',
                body: 'Send the booking link via template, take the appointment through the WellPlan calendar, and automatically follow up with a utility-category reminder 24 hours and 1 hour before the meeting.',
              },
              {
                title: 'Order and shipping notifications',
                body: 'Trigger utility templates from your store, payment processor, or fulfilment system for order confirmation, shipping, delivery, and post-purchase check-in — all routed back into the CRM contact record.',
              },
              {
                title: 'Two-factor authentication and OTPs',
                body: 'Use authentication-category templates to deliver one-time passwords, login codes, and account verification messages with the higher trust and deliverability that authentication templates carry.',
              },
              {
                title: 'Re-engagement and abandoned checkout',
                body: 'When a contact abandons a checkout or goes cold, a marketing-category template can reopen the conversation. Once the contact replies, the 24-hour window opens and the rest of the sequence runs free-form.',
              },
              {
                title: 'Customer support and ticketing',
                body: 'Inbound WhatsApp messages route to a shared team inbox with assignment, internal notes, statuses, and SLAs. The AI chatbot handles tier-one questions and escalates anything it cannot resolve.',
              },
            ].map((uc, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-[#111111] p-6">
                <h3 className="text-lg font-bold mb-2 text-white">{uc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup */}
      <section id="setup" className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">How to set up WhatsApp CRM with WellPlan</h2>
          <p className="text-gray-300 text-lg mb-8">
            Setup runs through a guided flow inside WellPlan. The steps below cover
            the path from a brand-new workspace to a fully operational WhatsApp CRM
            with templates approved and automations live.
          </p>
          <ol className="space-y-6">
            {[
              {
                title: 'Connect your Meta Business account',
                body: 'Inside WellPlan, open the WhatsApp settings and connect a Meta Business Manager. If you do not have one, WellPlan walks you through creating it. This is where business verification will live.',
              },
              {
                title: 'Choose and verify your phone number',
                body: 'Pick a phone number that is not already registered on the consumer WhatsApp or Business app. Verify it via SMS or voice. This number becomes your business WhatsApp identity.',
              },
              {
                title: 'Set your display name and business profile',
                body: 'Submit your display name for Meta approval and fill in your business profile — category, description, website, address, and hours. The profile is what customers see in the contact card.',
              },
              {
                title: 'Submit your first templates',
                body: 'Create the templates you actually need on day one — typically a welcome message, an appointment reminder, and one re-engagement message. Pick the correct category (Marketing, Utility, or Authentication) and submit for review.',
              },
              {
                title: 'Capture opt-in',
                body: 'Add opt-in to your forms, checkout, and web chat. WellPlan stores consent on the contact record and uses it to gate which numbers can be messaged.',
              },
              {
                title: 'Build your first automation',
                body: 'Use the workflow builder to trigger a WhatsApp template from a form submission, new appointment, or pipeline stage change. Add wait steps, conditions, and AI chatbot steps as needed.',
              },
              {
                title: 'Set up the team inbox',
                body: 'Invite teammates, configure assignment rules, and connect the AI chatbot for first-touch qualification. Once a human is needed, the bot hands off cleanly with full conversation context.',
              },
            ].map((step, i) => (
              <li key={i} className="flex gap-5 rounded-2xl border border-white/10 bg-[#111111] p-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#214CE5]/20 border border-[#214CE5]/40 text-[#9DB2FF] font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Template categories */}
      <section id="template-categories" className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">WhatsApp marketing template categories</h2>
          <p className="text-gray-300 text-lg mb-8">
            Every template you submit to Meta has to be classified into one of three
            categories. The category determines pricing, the level of scrutiny in
            review, and what the message is actually allowed to do. Picking the right
            one matters — Meta may re-categorize a template if the content does not
            match the selected category.
          </p>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#111111] p-6">
              <h3 className="text-xl font-bold mb-2">Marketing</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Promotional content: offers, product announcements, newsletters,
                event invitations, cart abandonment, and re-engagement. Marketing
                templates have the highest scrutiny and the strictest opt-in
                requirements. They can be paused if the number experiences a quality
                drop.
              </p>
              <p className="text-gray-400 text-sm">
                Use when: you are starting a conversation for promotional purposes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111111] p-6">
              <h3 className="text-xl font-bold mb-2">Utility</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Transactional messages tied to a specific action the customer has
                taken or expects: order confirmations, shipping updates, appointment
                reminders, payment receipts, account alerts, and post-purchase
                follow-up. Utility templates are less expensive and less restricted
                because they carry information the customer is actively waiting for.
              </p>
              <p className="text-gray-400 text-sm">
                Use when: the message relates directly to an existing transaction or
                customer request.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111111] p-6">
              <h3 className="text-xl font-bold mb-2">Authentication</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                One-time passwords and verification codes. Authentication templates
                have a stricter, narrower format (designed specifically for OTPs) and
                higher trust signals, including a copy-code button. They cannot
                include promotional content or links beyond the code itself.
              </p>
              <p className="text-gray-400 text-sm">
                Use when: you are delivering a code or verification step for login or
                a sensitive action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best practices */}
      <section id="best-practices" className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Best practices</h2>
          <ul className="space-y-4 text-gray-300">
            {[
              'Treat opt-in as the foundation, not a footnote. Name WhatsApp explicitly at the point of capture and store consent on the contact record.',
              'Pick the right template category. Mis-categorizing marketing content as utility is the single most common reason templates get re-categorized or rejected.',
              'Keep templates short and specific. Long, vague templates underperform and erode the quality rating over time.',
              'Use variables to personalize, not to pad. A name, an order ID, a time — that is usually enough.',
              'Reply inside the 24-hour window. The free-form window is where most of the real conversation happens; do not let it lapse on active leads.',
              'Watch the quality rating weekly. A small dip is a leading indicator — adjust segmentation or content before it turns into a tier downgrade.',
              'Segment before broadcasting. Sending a marketing template to your entire list is the fastest way to invite blocks and reports.',
              'Let the AI chatbot handle the first reply. It captures structured data, qualifies, and frees humans to handle the high-value conversations.',
              'Use buttons over open-ended questions when you can. Quick-reply and call-to-action buttons reduce friction and produce cleaner downstream data.',
              'Audit your templates quarterly. Retire ones that underperform and consolidate around the few that consistently get engagement.',
            ].map((tip, i) => (
              <li key={i} className="flex gap-3">
                <Check className="w-5 h-5 text-[#6B8EFF] flex-shrink-0 mt-1" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-[#111111] p-6">
                <h3 className="text-lg font-bold mb-2">{f.q}</h3>
                <p className="text-gray-300 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
            Bring WhatsApp into your CRM
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            See WellPlan handle the official WhatsApp Business API, templates, the
            unified inbox, AI chatbot, and automations end-to-end in one walkthrough.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#214CE5] hover:bg-[#1a3db8] rounded-xl font-semibold transition"
            >
              Book a free demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

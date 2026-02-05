'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Target, CheckCircle, ArrowRight, Zap, Calendar, MessageSquare, Users, TrendingUp, Clock, Bot, Star, Play } from 'lucide-react';

export default function CoachesPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Pain Points */}
      <PainPointsSection />
      
      {/* Features */}
      <FeaturesSection />
      
      {/* Pricing */}
      <PricingSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* FAQ */}
      <FAQSection />
      
      {/* Final CTA */}
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <Target className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Built for Coaches & Consultants</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Scale Your Coaching
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Without Burning Out
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop trading time for money. WellPlan automates your client acquisition, 
            onboarding, and follow-ups so you can focus on what you do best — coaching.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/demo"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="#pricing"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-white/5">
            <div className="text-center">
              <div className="text-3xl font-black text-purple-400">500+</div>
              <div className="text-sm text-gray-500">Coaches Onboarded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-pink-400">10x</div>
              <div className="text-sm text-gray-500">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-purple-400">24/7</div>
              <div className="text-sm text-gray-500">AI Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-pink-400">4.9★</div>
              <div className="text-sm text-gray-500">Client Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PainPointsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const painPoints = [
    {
      icon: Clock,
      title: "Drowning in Admin Work",
      description: "Spending 20+ hours/week on scheduling, follow-ups, and client management instead of coaching"
    },
    {
      icon: Users,
      title: "Inconsistent Lead Flow",
      description: "Feast or famine cycle — either too many leads to handle or radio silence"
    },
    {
      icon: MessageSquare,
      title: "Leads Going Cold",
      description: "Potential clients slip away because you can't respond fast enough"
    },
    {
      icon: TrendingUp,
      title: "Struggling to Scale",
      description: "Hitting an income ceiling because there's only one of you"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-transparent to-purple-500/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Sound <span className="text-purple-400">Familiar?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            You became a coach to change lives, not to become a full-time admin
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-red-500/30 hover:bg-red-500/5 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition">
                  <point.icon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{point.title}</h3>
                  <p className="text-gray-400">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-2xl font-bold text-white">
            What if you could automate <span className="text-purple-400">80% of this</span>?
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Calendar,
      title: "Smart Calendar Booking",
      description: "Let clients book sessions directly. Automatic reminders, rescheduling, and no-show follow-ups.",
      color: "purple"
    },
    {
      icon: Bot,
      title: "AI Lead Qualification",
      description: "24/7 AI chat that qualifies leads, answers FAQs, and books discovery calls while you sleep.",
      color: "pink"
    },
    {
      icon: MessageSquare,
      title: "Automated Nurture Sequences",
      description: "Email, SMS, and WhatsApp sequences that keep leads warm until they're ready to commit.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Client Portal & Community",
      description: "Membership areas for courses, community forums, and resource libraries for your clients.",
      color: "pink"
    },
    {
      icon: TrendingUp,
      title: "Pipeline & CRM",
      description: "Track every lead from first touch to paid client. Know exactly where everyone is.",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Payment & Invoicing",
      description: "Accept payments, set up subscriptions, and send invoices automatically.",
      color: "pink"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Grow Your Coaching Business
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            One platform to capture leads, nurture relationships, and close high-ticket clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-${feature.color}-500/30 transition-all group`}
            >
              <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAIAddon, setShowAIAddon] = useState(false);

  const tiers = [
    {
      name: "Self-Setup",
      subtitle: "DIY with guidance",
      setupFee: 0,
      monthlyFee: 97,
      description: "Perfect for tech-savvy coaches who want to set things up themselves",
      features: [
        "Pre-built coaching snapshot",
        "Video tutorial library",
        "Setup documentation",
        "Community support",
        "All core features"
      ],
      cta: "Get Started",
      popular: false,
      color: "gray"
    },
    {
      name: "Done-With-You",
      subtitle: "We set it up together",
      setupFee: 497,
      monthlyFee: 147,
      description: "We handle the technical setup so you can start generating leads fast",
      features: [
        "Full system setup by our team",
        "Brand customization",
        "Domain & email configuration",
        "1× onboarding call (60 min)",
        "Priority email support",
        "All core features"
      ],
      cta: "Book Setup Call",
      popular: true,
      color: "purple"
    },
    {
      name: "Done-For-You",
      subtitle: "White-glove service",
      setupFee: 997,
      monthlyFee: 197,
      description: "We build your entire system, funnels, and sequences for you",
      features: [
        "Everything in Done-With-You",
        "Complete funnel build",
        "Nurture sequences written",
        "Landing page copywriting",
        "3× strategy calls",
        "Slack support channel"
      ],
      cta: "Book Strategy Call",
      popular: false,
      color: "pink"
    }
  ];

  const aiAddon = {
    name: "AI Employee",
    setupFee: 297,
    monthlyFee: 397,
    description: "Add a 24/7 AI assistant that qualifies leads and books appointments",
    features: [
      "24/7 AI chat on your website",
      "Lead qualification bot",
      "Appointment booking AI",
      "FAQ automation",
      "Custom training on your services"
    ]
  };

  return (
    <section ref={ref} id="pricing" className="py-24 px-6 bg-gradient-to-b from-purple-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Choose Your <span className="text-purple-400">Path to Growth</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you're DIY or want white-glove service, we have a plan that fits
          </p>
        </motion.div>

        {/* Main Pricing Tiers */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                tier.popular 
                  ? 'bg-gradient-to-b from-purple-500/10 to-pink-500/10 border-purple-500/50' 
                  : 'bg-white/[0.02] border-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                <p className="text-gray-500 text-sm">{tier.subtitle}</p>
              </div>

              <div className="text-center mb-6">
                {tier.setupFee > 0 && (
                  <div className="text-sm text-gray-500 mb-1">
                    ${tier.setupFee} setup fee
                  </div>
                )}
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black text-white">${tier.monthlyFee}</span>
                  <span className="text-gray-500">/mo</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm text-center mb-6">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                      tier.popular ? 'text-purple-400' : 'text-gray-500'
                    }`} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/demo"
                className={`block w-full py-3 rounded-xl font-bold text-center transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30'
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* AI Add-on */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    {aiAddon.name}
                    <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs font-bold rounded">ADD-ON</span>
                  </h3>
                  <p className="text-gray-400 text-sm">{aiAddon.description}</p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {aiAddon.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="text-sm text-gray-500 mb-1">
                ${aiAddon.setupFee} setup
              </div>
              <div className="flex items-baseline justify-center lg:justify-end gap-1 mb-4">
                <span className="text-4xl font-black text-white">+${aiAddon.monthlyFee}</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <Link
                href="/demo"
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Add to Any Plan
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      quote: "This software has been a game-changer for my business. It's made managing everything so much easier and quicker.",
      author: "Dr. Sami Osman",
      title: "Physiotherapist & Fitness Coach",
      result: "Business transformed",
      avatar: "SO"
    },
    {
      quote: "This is beyond Awesome! I cannot believe how it addressed my frustrations about having to learn and juggle SO MANY OTHER TOOLS.",
      author: "Dr. Federico Georga",
      title: "Psychotherapist",
      result: "All tools consolidated",
      avatar: "FG"
    },
    {
      quote: "I was always not sure to implement an appointment booking system. It always seemed like an unnecessary expense. This changes Everything!",
      author: "Omar El Alfy",
      title: "Airzone Egypt",
      result: "5 branches automated",
      avatar: "OA"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Coaches <span className="text-purple-400">Love</span> WellPlan
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </div>
              
              <div className="px-3 py-2 bg-purple-500/10 rounded-lg">
                <div className="text-xs text-purple-400 font-semibold">{testimonial.result}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does setup take?",
      answer: "Self-Setup: You can be live in a day with our video tutorials. Done-With-You: We'll have you set up within 3-5 business days. Done-For-You: Full system build takes 1-2 weeks."
    },
    {
      question: "Do I need any technical skills?",
      answer: "Not at all! Our Done-With-You and Done-For-You plans handle everything technical. Even Self-Setup comes with step-by-step video guides that anyone can follow."
    },
    {
      question: "Can I switch plans later?",
      answer: "Yes! You can upgrade anytime. If you start with Self-Setup and decide you want more help, we'll credit your setup fee toward a higher tier."
    },
    {
      question: "What integrations do you support?",
      answer: "WellPlan integrates with 200+ tools including Zoom, Google Calendar, Stripe, PayPal, Calendly, and more. We also have a Zapier integration for anything else."
    },
    {
      question: "Is there a contract or can I cancel anytime?",
      answer: "No long-term contracts. You can cancel your subscription anytime. Setup fees are one-time and non-refundable."
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-transparent to-purple-500/5">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Questions? <span className="text-purple-400">Answered.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ArrowRight className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === idx ? 'rotate-90' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-12 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 border border-purple-500/30 rounded-3xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Ready to Scale Your
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Coaching Business?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Book a free strategy call. We'll show you exactly how to automate your client acquisition.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
            >
              Book Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            No obligation. 30-minute call. We'll map out your entire automation strategy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

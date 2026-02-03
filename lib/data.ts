export interface Benefit {
  icon: string
  title: string
  desc: string
}

export interface CaseStudy {
  title: string
  metric: string
  before: string
  after: string
  timeframe: string
}

export interface Objective {
  id: string
  slug: string
  title: string
  shortTitle: string
  description: string
  icon: string
  color: string
  gradient: string
  heroImage: string
  benefits: Benefit[]
  features: string[]
  caseStudies: CaseStudy[]
}

export const siteConfig = {
  name: 'WellPlan',
  description: 'Enterprise wellness and life planning platform',
}

export const objectives: Objective[] = [
  {
    id: 'health',
    slug: 'health',
    title: 'Physical Health',
    shortTitle: 'Health',
    description: 'Comprehensive wellness tracking and personalized health optimization',
    icon: '❤️',
    color: 'from-red-500 to-pink-500',
    gradient: 'from-red-500/20 to-pink-500/20',
    heroImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=600&fit=crop',
    benefits: [
      { icon: '📊', title: 'Health Metrics', desc: 'Real-time tracking of vital signs and wellness indicators' },
      { icon: '🏃', title: 'Activity Monitor', desc: 'Intelligent exercise recommendations based on your goals' },
      { icon: '🥗', title: 'Nutrition Plans', desc: 'Personalized meal plans aligned with your health objectives' },
      { icon: '💤', title: 'Sleep Optimization', desc: 'Sleep quality tracking and improvement protocols' },
      { icon: '🧘', title: 'Stress Management', desc: 'Guided meditation and stress reduction techniques' },
      { icon: '👨‍⚕️', title: 'Expert Guidance', desc: 'Access to certified health coaches and professionals' },
    ],
    features: [
      'Daily health check-ins',
      'Biometric device integration',
      'Personalized workout plans',
      'Nutrition tracking',
      'Sleep analysis',
      'Mood tracking',
      'Heart rate variability monitoring',
      'VO2 max estimation',
    ],
    caseStudies: [
      {
        title: 'Sarah\'s Transformation',
        metric: '32 lbs lost',
        before: 'Sedentary lifestyle, poor nutrition habits',
        after: 'Consistent exercise routine, balanced diet, 87% sleep quality',
        timeframe: '6 months',
      },
      {
        title: 'Corporate Wellness',
        metric: '42% improvement',
        before: 'Team health insurance costs rising annually',
        after: 'Engaged employees, reduced sick days by 28%',
        timeframe: 'First year',
      },
    ],
  },
  {
    id: 'career',
    slug: 'career',
    title: 'Career Development',
    shortTitle: 'Career',
    description: 'Strategic career planning and professional growth acceleration',
    icon: '🚀',
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    benefits: [
      { icon: '📈', title: 'Career Path Planning', desc: 'Map your ideal career trajectory with data-driven insights' },
      { icon: '💼', title: 'Skill Development', desc: 'Curated learning paths for in-demand professional skills' },
      { icon: '🎯', title: 'Goal Tracking', desc: 'Milestone-based achievement tracking for career goals' },
      { icon: '🤝', title: 'Networking Tools', desc: 'Strategic connection building with industry professionals' },
      { icon: '📊', title: 'Performance Metrics', desc: 'Track progress against industry benchmarks' },
      { icon: '💡', title: 'Mentorship', desc: 'Connect with experienced mentors in your field' },
    ],
    features: [
      'Career assessment tools',
      'Skills gap analysis',
      'Learning recommendations',
      'Job market insights',
      'Salary benchmarking',
      'Interview preparation',
      'Resume optimization',
      'Network management',
    ],
    caseStudies: [
      {
        title: 'Engineering Leadership',
        metric: '3 promotions',
        before: 'Mid-level engineer, no clear advancement path',
        after: 'Director of Engineering, leading 15-person team',
        timeframe: '4 years',
      },
      {
        title: 'Career Pivot Success',
        metric: '18 months transition',
        before: 'Marketing professional wanting to enter tech',
        after: 'Product Manager at Series B startup, $140K salary',
        timeframe: 'In progress',
      },
    ],
  },
  {
    id: 'relationships',
    slug: 'relationships',
    title: 'Relationships & Family',
    shortTitle: 'Relationships',
    description: 'Nurture meaningful connections and build stronger family bonds',
    icon: '💜',
    color: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-500/20 to-pink-500/20',
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop',
    benefits: [
      { icon: '👥', title: 'Connection Insights', desc: 'Understand relationship dynamics and communication patterns' },
      { icon: '📅', title: 'Quality Time Planning', desc: 'Schedule meaningful moments with loved ones' },
      { icon: '💬', title: 'Communication Tips', desc: 'Evidence-based communication and conflict resolution' },
      { icon: '🎁', title: 'Relationship Milestones', desc: 'Never miss important dates and occasions' },
      { icon: '👨‍👩‍👧‍👦', title: 'Family Goals', desc: 'Align family objectives and celebrate together' },
      { icon: '🌱', title: 'Growth Together', desc: 'Grow together with personalized couple/family exercises' },
    ],
    features: [
      'Relationship assessment',
      'Communication guides',
      'Date night ideas',
      'Family calendar',
      'Milestone tracker',
      'Conflict resolution tools',
      'Appreciation exercises',
      'Family projects',
    ],
    caseStudies: [
      {
        title: 'Strengthened Marriage',
        metric: '9/10 satisfaction',
        before: 'Busy careers, quality time declining, communication gaps',
        after: 'Weekly meaningful dates, improved understanding, stronger bond',
        timeframe: '6 months',
      },
      {
        title: 'Multi-generational Family',
        metric: '4 generations',
        before: 'Scattered family, limited communication between distant relatives',
        after: 'Organized reunions, shared goals, stronger family identity',
        timeframe: 'Ongoing',
      },
    ],
  },
]

export const features = [
  {
    icon: '🔄',
    title: 'Holistic Integration',
    description: 'All three life objectives work together seamlessly',
  },
  {
    icon: '📱',
    title: 'Mobile-First',
    description: 'Access your plans anytime, anywhere on any device',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Insights',
    description: 'Machine learning algorithms personalize your experience',
  },
  {
    icon: '🔐',
    title: 'Enterprise Security',
    description: 'Bank-level encryption and HIPAA compliance',
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Deep insights into your progress and patterns',
  },
  {
    icon: '🌍',
    title: 'Global Community',
    description: 'Connect with over 500K members worldwide',
  },
]

export const stats = [
  { value: '500K+', label: 'Active Users' },
  { value: '98.2%', label: 'Success Rate' },
  { value: '47', label: 'Countries' },
  { value: '4.8/5', label: 'Star Rating' },
]

export const testimonials = [
  {
    name: 'Alex Chen',
    title: 'CEO, TechVentures',
    avatar: '👨‍💼',
    quote: 'WellPlan transformed how I manage my life. The integration between health, career, and relationships is seamless.',
    metric: '+40% productivity',
  },
  {
    name: 'Maria Rodriguez',
    title: 'Executive Coach',
    avatar: '👩‍💼',
    quote: 'I recommend WellPlan to all my clients. The insights it provides are game-changing for personal development.',
    metric: 'Recommended to 200+ clients',
  },
  {
    name: 'James Wilson',
    title: 'Entrepreneur',
    avatar: '👨‍🔬',
    quote: 'Finally, a platform that understands that life balance is not a trade-off but a multiplier effect.',
    metric: '3 years, 5/5 stars',
  },
  {
    name: 'Priya Patel',
    title: 'Corporate Wellness Manager',
    avatar: '👩‍⚕️',
    quote: 'Our team engagement scores increased 65% after WellPlan implementation. ROI exceeded expectations.',
    metric: 'Company-wide adoption',
  },
  {
    name: 'David Kim',
    title: 'Life Coach',
    avatar: '🧑‍🏫',
    quote: 'The data-driven approach combined with human touch makes WellPlan the best tool in the industry.',
    metric: '500+ success stories',
  },
  {
    name: 'Sarah Johnson',
    title: 'Mental Health Professional',
    avatar: '👩‍⚕️',
    quote: 'Evidence-based design meets intuitive UX. My patients love the platform.',
    metric: '92% retention rate',
  },
  {
    name: 'Michael Brown',
    title: 'Author & Speaker',
    avatar: '👨‍🎓',
    quote: 'A masterpiece in personal development technology. Highly recommend to anyone serious about growth.',
    metric: 'Featured in bestseller',
  },
  {
    name: 'Lisa Anderson',
    title: 'Fitness Professional',
    avatar: '💪',
    quote: 'The health tracking capabilities rival dedicated health apps while being part of a comprehensive system.',
    metric: '1000+ trained members',
  },
]

export const partners = [
  { name: 'Apple Health', logo: '🍎' },
  { name: 'Google Fit', logo: '🔵' },
  { name: 'Fitbit', logo: '⌚' },
  { name: 'Strava', logo: '🏃' },
  { name: 'Oura Ring', logo: '⭕' },
  { name: 'Garmin', logo: '📍' },
  { name: 'Slack', logo: '💬' },
  { name: 'Microsoft Teams', logo: '💻' },
  { name: 'Calendly', logo: '📅' },
  { name: 'LinkedIn', logo: '🔗' },
  { name: 'Spotify', logo: '🎵' },
  { name: 'OpenAI', logo: '🤖' },
]

export const integrations = [
  'Apple HealthKit',
  'Google Fit',
  'Fitbit API',
  'Oura API',
  'Garmin Connect',
  'Strava API',
  'Slack API',
  'Microsoft 365',
  'Google Workspace',
  'Calendly',
  'Stripe',
  'Zapier',
  'IFTTT',
  'Webhooks',
  'REST API',
  'GraphQL API',
  'Salesforce',
  'HubSpot',
  'Jira',
  'Asana',
  'Monday.com',
  'Notion',
  'Twitter API',
  'LinkedIn API',
  'Spotify API',
]

export const complianceFeatures = [
  { badge: '🔐', label: 'HIPAA Compliant' },
  { badge: '🛡️', label: 'ISO 27001 Certified' },
  { badge: '⚖️', label: 'GDPR Compliant' },
  { badge: '🔒', label: 'SOC 2 Type II' },
]

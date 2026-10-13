import {
  ExperienceItem,
  EducationItem,
  TrainingItem,
  CertificationItem,
  SkillCategory,
  LanguageItem,
} from '../types.ts';

export const PERSONAL_INFO = {
  name: 'Zeyad Haitham',
  title: 'Sales • Business Development • Customer Relations',
  heroEyebrow: 'SALES • BUSINESS DEVELOPMENT • CUSTOMER RELATIONS',
  heroHeadline: 'Turning Conversations Into Business Growth.',
  heroBio:
    "I'm Zeyad Haitham, a results-driven business student with hands-on experience in field sales, tele-sales, market penetration, and customer relationship building. I focus on understanding customer needs, overcoming objections, and turning opportunities into meaningful business results.",
  email: 'zeyadhaitham519@gmail.com',
  phone: '+20 1096601233',
  phoneClean: '+201096601233',
  location: 'Al-Haram, Giza, Egypt',
  linkedInUrl: 'https://linkedin.com/in/zeyad-haitham-23z',
};

export const CORE_PILLARS = [
  {
    title: 'Market Penetration',
    description:
      'Proven field track record of introducing new product lines into contested markets, mapping dealer territories, and building B2B/B2C networks from the ground up.',
    iconName: 'TrendingUp',
  },
  {
    title: 'Consultative Selling',
    description:
      'Active listening and needs-discovery approach that pinpoints customer friction points, tailors recommendations, and handles tough objections with commercial poise.',
    iconName: 'MessageSquare',
  },
  {
    title: 'Client Relationships',
    description:
      'Fostering trust and ongoing communication across diverse client tiers, turning initial skepticism into long-term commercial loyalty and repeat account revenue.',
    iconName: 'Users',
  },
  {
    title: 'Business & Financial Awareness',
    description:
      'Armed with an Accounting & Finance academic background to evaluate margins, assess turnover velocity, reconcile accounts, and understand client business realities.',
    iconName: 'PieChart',
  },
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'trust-auto-parts',
    company: 'Trust Auto Parts',
    role: 'Sales Representative & Market Penetration',
    sector: 'Automotive Sector',
    location: 'Giza, Egypt',
    keyBadge: 'Top-Performing Distributor',
    highlights: [
      'Supported the market entry and sales distribution of an automotive spare parts startup from the ground up.',
      'Built B2B and B2C dealer networks while developing enduring customer trust across target territories.',
      'Executed proactive field sales strategies and persuasive on-site product presentations.',
      'Overcame market skepticism through structured communication, rigorous objection handling, and consultative closing techniques.',
      'Recognized as the top-performing distributor and sales representative in the target market.',
    ],
    skillsUsed: [
      'Field Sales',
      'Market Penetration',
      'B2B & B2C Distribution',
      'Objection Handling',
      'Dealer Relationship Building',
    ],
  },
  {
    id: 'smash-gym',
    company: 'Smash Gym',
    role: 'Sales & Supplements Representative',
    location: 'Giza, Egypt',
    period: 'February 2025 – June 2025',
    highlights: [
      'Recommended nutritional supplements based on individual members’ physical goals, workout regimens, and health requirements.',
      'Applied tailored upselling and cross-selling techniques to increase average transaction value.',
      'Managed daily cash register reconciliation and accurate financial balance reporting.',
      'Conducted inventory audits, monitoring stock turnover, product availability, and member demand patterns.',
    ],
    skillsUsed: [
      'Consultative Upselling',
      'Cross-Selling',
      'Customer Needs Analysis',
      'Cash Reconciliation',
      'Inventory Auditing',
    ],
  },
  {
    id: 'zee-tech',
    company: 'Zee Tech',
    role: 'Tele-sales Representative',
    location: 'Giza, Egypt',
    highlights: [
      'Conducted high-volume outbound calls to identify, engage, and qualify prospective business and individual clients.',
      'Converted potential leads into closed service deals through structured follow-ups.',
      'Managed client conversations professionally, actively gathering requirements and qualifying interest.',
      'Navigated gatekeepers and resolved client objections to continuously improve outbound conversion.',
    ],
    skillsUsed: [
      'Outbound Tele-Sales',
      'Cold Outreach',
      'Lead Qualification',
      'Objection Handling',
      'Pipeline Discipline',
    ],
  },
];

export const EDUCATION_INFO: EducationItem = {
  degree: 'Bachelor of Commerce — Accounting & Finance',
  institution: 'International Academy for Engineering and Media Sciences (IAEMS)',
  location: 'Egypt',
  status: 'Entering third year',
  academicYear: '2026–2027',
  expectedGraduation: '2028',
  gpa: '2.97',
  coursework: [
    'Principles of Marketing',
    'Consumer Behavior',
    'Management Information Systems (MIS)',
    'Financial Accounting',
    'Cost & Management Accounting',
  ],
  description:
    'Developing a rigorous quantitative and strategic foundation. Combining financial analysis, unit economics, and cash flow fundamentals with modern marketing strategy, organizational systems, and consumer buying behavior.',
};

export const TRAININGS: TrainingItem[] = [
  {
    id: 'egx',
    organization: 'The Egyptian Stock Exchange (EGX)',
    title: 'Trainee / Intern',
    period: 'October 2024 – September 2025',
    description:
      'Explored market trends and financial performance, strengthening financial awareness and business understanding.',
    skillsGained: [
      'Financial Market Trends',
      'Corporate Performance Analysis',
      'Commercial Awareness',
    ],
  },
  {
    id: 'raya-cx',
    organization: 'Raya CX',
    title: 'Customer Experience Trainee',
    description:
      'Completed intensive training in corporate communication, active listening, and conflict resolution.',
    skillsGained: [
      'Corporate Communication',
      'Active Listening',
      'Conflict Resolution',
      'Customer Retention Tactics',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'business-plan-kpmg',
    title: 'What is a Business Plan',
    issuer: 'Edraak, in partnership with KPMG',
    date: 'July 2026',
    description:
      'Comprehensive study of commercial business models, market positioning, financial forecasting, and strategic risk evaluation.',
  },
  {
    id: 'ai-skillup',
    title: 'Develop Your Skills with Artificial Intelligence',
    issuer: 'SkillUP AI Course, EMPC & UP Skill',
    date: 'December 2025',
    description:
      'Applied workflow productivity, AI prompting for commercial copywriting, market research acceleration, and data synthesis.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Sales & Business',
    description:
      'Core competencies across the entire sales cycle—from market penetration and prospecting to closing and client retention.',
    skills: [
      'Consultative Selling',
      'Market Penetration',
      'B2B and B2C Sales',
      'Outbound Tele-sales',
      'Cold Calling',
      'Objection Handling',
      'Upselling and Cross-selling',
    ],
  },
  {
    category: 'Technical Skills',
    description:
      'Tools utilized for data tracking, reporting, client communication, presentations, and commercial copywriting.',
    skills: [
      'Microsoft Excel',
      'Microsoft Word',
      'Microsoft PowerPoint',
      'AI Prompting for Copywriting',
    ],
  },
];

export const LEADERSHIP_INFO = {
  organization: 'Enactus IAEMS',
  role: 'Project Management Team Member',
  period: '2025 – Present',
  description:
    'Contributed to project management activities, pitch presentation development, field negotiations, community outreach, and social initiatives.',
  highlights: [
    'Collaborated with cross-functional student teams on social enterprise and business modeling initiatives.',
    'Assisted in structuring persuasive pitch decks and stakeholder presentations.',
    'Engaged in direct community field outreach and relationship building with local partners.',
  ],
};

export const LANGUAGES: LanguageItem[] = [
  {
    language: 'Arabic',
    proficiency: 'Native',
    notes: 'First language; fluent in business, professional negotiation, and everyday communication.',
  },
  {
    language: 'English',
    proficiency: 'Professional Working Proficiency',
    notes: 'Capable of handling professional correspondence, client discussions, and business reports.',
  },
];

export const ROLE_ALIGNMENTS = [
  {
    role: 'Sales Representative',
    fitScore: 'Direct Field & Tele-Sales Match',
    description:
      'Demonstrated capability in field sales and outbound outreach, structured objection handling, consultative pitching, and exceeding distribution goals.',
  },
  {
    role: 'Business Development (BDR/SDR)',
    fitScore: 'Market Penetration & Prospecting',
    description:
      'Skilled at ground-up territory entry, qualifying outbound leads, pitching new service offerings, and building dealer networks from scratch.',
  },
  {
    role: 'Account Management',
    fitScore: 'Trust & Long-term Retention',
    description:
      'Focused on post-sale dealer satisfaction, regular check-ins, upselling complementary product lines, and safeguarding account longevity.',
  },
  {
    role: 'Customer Success',
    fitScore: 'Listening & Problem Solving',
    description:
      'Backed by Raya CX customer experience training in active listening, de-escalation, and matching customer goals to the right solutions.',
  },
];

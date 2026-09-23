export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  industry: string
  rating: number
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Nexora delivered an LMS that completely transformed how we deliver education. The platform is robust, intuitive, and the team was exceptional throughout. I would not hesitate to recommend them.',
    author: 'Dr. Ahmad Farouk',
    role: 'Director of Academic Affairs',
    company: 'National University of Sciences',
    industry: 'Education',
    rating: 5,
  },
  {
    id: '2',
    quote: 'Our finance team can now close the books in 3 days instead of 15. The real-time dashboards give our board unprecedented visibility into our group financials. A game changer.',
    author: "Dato' Siti Rahimah",
    role: 'Group CFO',
    company: 'Meridian Holdings Berhad',
    industry: 'Finance',
    rating: 5,
  },
  {
    id: '3',
    quote: 'The logistics platform Nexora built us has been transformative. Fleet utilisation is up 32%, fuel costs are down, and our customers are happier than ever with real-time delivery tracking.',
    author: 'En. Rizal Mahmud',
    role: 'CEO',
    company: 'SwiftMove Logistics',
    industry: 'Logistics',
    rating: 5,
  },
  {
    id: '4',
    quote: 'Nexora managed a complex ERP rollout across our entire manufacturing group. On time, on budget, and the ROI exceeded our projections by year one. A truly professional team.',
    author: 'Tan Sri Robert Lim',
    role: 'Executive Chairman',
    company: 'PrimeTech Industries',
    industry: 'Manufacturing',
    rating: 5,
  },
  {
    id: '5',
    quote: 'The Student Management System simplified operations across all 18 of our campuses. What used to take days of manual work now takes minutes. The support team is always responsive.',
    author: 'Mr. Khairul Anwar',
    role: 'Group COO',
    company: 'Mayvale College Group',
    industry: 'Education',
    rating: 5,
  },
  {
    id: '6',
    quote: 'We chose Nexora for their deep technical expertise and transparent communication. They delivered our hospital management system on time and continue to support us proactively.',
    author: 'Dr. Priya Nair',
    role: 'Chief Medical Officer',
    company: 'Pinnacle Medical Centre',
    industry: 'Healthcare',
    rating: 5,
  },
]

export const blogPosts = [
  {
    id: '1',
    slug: 'ai-software-development-2024',
    title: 'How AI is Reshaping Software Development in 2024',
    excerpt: 'From AI-assisted coding to intelligent testing and automated deployment — explore how artificial intelligence is transforming the software development lifecycle.',
    category: 'AI & Technology',
    author: 'Nexora Tech Team',
    date: '2024-07-15',
    readTime: '7 min read',
    tags: ['AI', 'Software Development', 'Technology Trends'],
  },
  {
    id: '2',
    slug: 'cloud-migration-strategy',
    title: 'Building a Successful Cloud Migration Strategy',
    excerpt: 'A practical guide to planning and executing a cloud migration with minimal disruption — covering assessment, planning, execution, and optimisation.',
    category: 'Cloud Computing',
    author: 'Cloud Architecture Team',
    date: '2024-06-28',
    readTime: '10 min read',
    tags: ['Cloud', 'Azure', 'Migration', 'DevOps'],
  },
  {
    id: '3',
    slug: 'digital-transformation-sme',
    title: 'Digital Transformation for SMEs: Where to Start',
    excerpt: 'Digital transformation does not have to be overwhelming. Discover practical first steps that deliver quick wins while building towards long-term digital maturity.',
    category: 'Digital Transformation',
    author: 'Business Solutions Team',
    date: '2024-06-10',
    readTime: '8 min read',
    tags: ['Digital Transformation', 'SME', 'Strategy'],
  },
  {
    id: '4',
    slug: 'erp-selection-guide',
    title: 'How to Choose the Right ERP for Your Business',
    excerpt: 'Selecting an ERP is one of the most consequential technology decisions a business makes. This guide walks you through the evaluation framework used by successful enterprises.',
    category: 'ERP & Business Systems',
    author: 'Enterprise Solutions Team',
    date: '2024-05-22',
    readTime: '12 min read',
    tags: ['ERP', 'Software Selection', 'Business Management'],
  },
  {
    id: '5',
    slug: 'cybersecurity-best-practices',
    title: '10 Cybersecurity Best Practices Every Company Must Follow',
    excerpt: 'Cyber threats are evolving rapidly. These 10 cybersecurity practices are non-negotiable for businesses that handle sensitive data and want to maintain customer trust.',
    category: 'Cybersecurity',
    author: 'Security Team',
    date: '2024-05-05',
    readTime: '9 min read',
    tags: ['Cybersecurity', 'Data Protection', 'PDPA Compliance'],
  },
  {
    id: '6',
    slug: 'lms-elearning-adoption',
    title: 'Driving Student Engagement in E-Learning Platforms',
    excerpt: 'High enrolment but low completion rates? Discover proven strategies for designing LMS experiences that keep learners engaged from start to certificate.',
    category: 'EdTech',
    author: 'Education Solutions Team',
    date: '2024-04-18',
    readTime: '6 min read',
    tags: ['LMS', 'E-Learning', 'Education Technology'],
  },
]

export const careers = [
  {
    id: '1',
    title: 'Senior Full-Stack Developer (.NET + React)',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Kuala Lumpur, Malaysia',
    experience: '5+ years',
    description: 'Join our core engineering team building enterprise-grade software solutions for clients across Southeast Asia and beyond.',
  },
  {
    id: '2',
    title: 'DevOps Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Kuala Lumpur, Malaysia',
    experience: '3+ years',
    description: 'Drive our CI/CD pipelines, infrastructure automation, and cloud operations on Azure and AWS.',
  },
  {
    id: '3',
    title: 'AI/ML Engineer',
    department: 'AI Solutions',
    type: 'Full-time',
    location: 'Remote / Kuala Lumpur',
    experience: '3+ years',
    description: 'Design and deploy machine learning models and AI-powered features for our enterprise software products.',
  },
  {
    id: '4',
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Kuala Lumpur, Malaysia',
    experience: '3+ years',
    description: 'Create beautiful, accessible, and user-centred designs for our software products and client projects.',
  },
  {
    id: '5',
    title: 'Business Development Manager',
    department: 'Sales',
    type: 'Full-time',
    location: 'Kuala Lumpur, Malaysia',
    experience: '4+ years',
    description: 'Drive new business growth through consultative selling to enterprise and government clients.',
  },
  {
    id: '6',
    title: 'Project Manager (Software Delivery)',
    department: 'Delivery',
    type: 'Full-time',
    location: 'Kuala Lumpur, Malaysia',
    experience: '4+ years',
    description: 'Lead complex software delivery projects across multiple clients using agile methodologies.',
  },
]

export const teamMembers = [
  {
    id: '1',
    name: 'James Thornton',
    role: 'Chief Executive Officer',
    bio: '20+ years in enterprise software and digital transformation across Asia Pacific.',
    linkedin: '#',
  },
  {
    id: '2',
    name: 'Dr. Mei Lin Chen',
    role: 'Chief Technology Officer',
    bio: 'Expert in cloud architecture, AI systems, and large-scale software engineering.',
    linkedin: '#',
  },
  {
    id: '3',
    name: 'Amirul Hassan',
    role: 'VP of Product',
    bio: 'Leads product strategy for Nexora\'s suite of enterprise software solutions.',
    linkedin: '#',
  },
  {
    id: '4',
    name: 'Sarah Mathews',
    role: 'VP of Client Success',
    bio: 'Ensures every client achieves measurable outcomes from their Nexora investment.',
    linkedin: '#',
  },
]

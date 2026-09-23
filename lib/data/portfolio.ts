export interface PortfolioProject {
  id: string
  slug: string
  title: string
  client: string
  industry: string
  year: number
  duration: string
  challenge: string
  solution: string
  results: string[]
  techStack: string[]
  tags: string[]
  featured: boolean
  testimonial?: {
    quote: string
    author: string
    role: string
    company: string
  }
  metrics: { label: string; value: string; improvement?: string }[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'national-university-lms',
    slug: 'national-university-lms',
    title: 'Learning Management System for National University',
    client: 'National University of Sciences',
    industry: 'Education',
    year: 2023,
    duration: '8 months',
    challenge: 'The university was struggling with fragmented learning systems, manual assessment processing, and poor student engagement in their hybrid learning model.',
    solution: 'We developed a comprehensive LMS with live class integration, AI-powered assessment grading, an interactive mobile app, and a rich analytics dashboard for faculty.',
    results: [
      'Student engagement increased by 65%',
      '90% reduction in manual assessment grading time',
      '98.5% platform uptime across 2 semesters',
      'Onboarded 25,000 students within 30 days of launch',
    ],
    techStack: ['React', 'ASP.NET Core', 'SQL Server', 'Azure', 'SignalR', 'Azure Media Services'],
    tags: ['Education', 'LMS', 'E-Learning', 'Mobile App'],
    featured: true,
    testimonial: {
      quote: 'Nexora delivered beyond our expectations. The LMS transformed how we deliver education and the student feedback has been overwhelmingly positive.',
      author: 'Dr. Ahmad Farouk',
      role: 'Director of Academic Affairs',
      company: 'National University of Sciences',
    },
    metrics: [
      { label: 'Student Engagement', value: '+65%', improvement: 'increase' },
      { label: 'Grading Time', value: '-90%', improvement: 'reduction' },
      { label: 'Platform Uptime', value: '99.5%' },
      { label: 'Active Students', value: '25,000+' },
    ],
  },
  {
    id: 'college-student-management',
    slug: 'college-student-management',
    title: 'Student Management System — Regional College Network',
    client: 'Mayvale College Group',
    industry: 'Education',
    year: 2023,
    duration: '6 months',
    challenge: 'Managing 18 campuses with paper-based student records, manual fee collection, and disconnected administrative systems causing data inconsistencies.',
    solution: 'Centralised Student Management System with real-time synchronisation across all campuses, online fee payment, and a parent communication portal.',
    results: [
      'Administration time reduced by 70%',
      '100% online fee collection adoption',
      'Centralised data across 18 campuses',
      'Parent satisfaction score improved by 40%',
    ],
    techStack: ['Angular', 'ASP.NET Core', 'SQL Server', 'Azure'],
    tags: ['Education', 'Student Management', 'Multi-campus'],
    featured: true,
    testimonial: {
      quote: 'The system transformed our administrative operations. What used to take days now takes minutes.',
      author: 'Mr. Khairul Anwar',
      role: 'Group COO',
      company: 'Mayvale College Group',
    },
    metrics: [
      { label: 'Admin Time', value: '-70%', improvement: 'reduction' },
      { label: 'Fee Collection', value: '100%', improvement: 'online' },
      { label: 'Campuses Unified', value: '18' },
      { label: 'Parent Satisfaction', value: '+40%' },
    ],
  },
  {
    id: 'enterprise-accounting',
    slug: 'enterprise-accounting-finance',
    title: 'Accounting & Finance Management System',
    client: 'Meridian Holdings Berhad',
    industry: 'Finance',
    year: 2022,
    duration: '7 months',
    challenge: 'Multi-entity financial consolidation across 12 subsidiaries with manual spreadsheet-based reporting causing delays and errors in monthly close.',
    solution: 'Deployed a unified accounting system with automated inter-company consolidation, real-time financial dashboards, and integrated payroll processing.',
    results: [
      'Monthly close time reduced from 15 days to 3 days',
      'Financial reporting errors eliminated',
      'Payroll processing automated for 2,400 employees',
      'Audit preparation time cut by 80%',
    ],
    techStack: ['.NET', 'SQL Server', 'React', 'Azure', 'Power BI'],
    tags: ['Finance', 'Accounting', 'ERP', 'Multi-entity'],
    featured: true,
    testimonial: {
      quote: 'Our finance team can now close the books in 3 days. The real-time dashboards give our board unprecedented visibility.',
      author: 'Dato\' Siti Rahimah',
      role: 'Group CFO',
      company: 'Meridian Holdings Berhad',
    },
    metrics: [
      { label: 'Month-end Close', value: '3 days', improvement: 'down from 15' },
      { label: 'Reporting Errors', value: '0%' },
      { label: 'Employees on Payroll', value: '2,400' },
      { label: 'Audit Prep Time', value: '-80%' },
    ],
  },
  {
    id: 'logistics-platform',
    slug: 'national-logistics-platform',
    title: 'National Logistics Management Platform',
    client: 'SwiftMove Logistics',
    industry: 'Logistics',
    year: 2023,
    duration: '10 months',
    challenge: 'Operating a fleet of 3,000+ vehicles with no real-time tracking, manual route planning, and frequent customer complaints about delivery status.',
    solution: 'Built a real-time logistics management platform with GPS tracking, AI-powered route optimisation, automated customer notifications, and driver mobile apps.',
    results: [
      'Fleet utilisation improved by 32%',
      'Fuel costs reduced by 22%',
      'Customer satisfaction (CSAT) increased from 3.2 to 4.7/5',
      'On-time delivery rate reached 96%',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Firebase', 'AWS'],
    tags: ['Logistics', 'Fleet Management', 'GPS Tracking', 'Mobile App'],
    featured: true,
    testimonial: {
      quote: 'The platform completely transformed how we operate. Our customers love the real-time tracking and our drivers love the route guidance.',
      author: 'En. Rizal Mahmud',
      role: 'CEO',
      company: 'SwiftMove Logistics',
    },
    metrics: [
      { label: 'Fleet Utilisation', value: '+32%' },
      { label: 'Fuel Costs', value: '-22%' },
      { label: 'CSAT Score', value: '4.7/5' },
      { label: 'On-time Delivery', value: '96%' },
    ],
  },
  {
    id: 'inventory-retail',
    slug: 'retail-inventory-system',
    title: 'Inventory Management for Retail Chain',
    client: 'FreshMart Group',
    industry: 'Retail',
    year: 2022,
    duration: '5 months',
    challenge: 'Managing inventory across 45 retail outlets with stockouts costing revenue and overstocking increasing holding costs. No real-time stock visibility.',
    solution: 'Centralised inventory management with barcode scanning, automatic reorder triggers, supplier integration, and real-time stock analytics across all outlets.',
    results: [
      'Stockouts reduced by 85%',
      'Holding costs reduced by 30%',
      'Inventory accuracy reached 99.8%',
      'Supplier lead time visibility improved by 100%',
    ],
    techStack: ['React', 'Node.js', 'MySQL', 'AWS', 'Barcode SDK'],
    tags: ['Retail', 'Inventory', 'Supply Chain', 'Analytics'],
    featured: false,
    metrics: [
      { label: 'Stockouts', value: '-85%' },
      { label: 'Holding Costs', value: '-30%' },
      { label: 'Inventory Accuracy', value: '99.8%' },
      { label: 'Outlets Connected', value: '45' },
    ],
  },
  {
    id: 'erp-manufacturing',
    slug: 'enterprise-erp-manufacturing',
    title: 'Enterprise ERP for Manufacturing Group',
    client: 'PrimeTech Industries',
    industry: 'Manufacturing',
    year: 2023,
    duration: '14 months',
    challenge: 'Operating on 8 separate legacy systems that couldn\'t communicate, creating data silos, double-entry, and poor production planning visibility.',
    solution: 'Full ERP implementation covering Finance, Procurement, Production, HR, Inventory, and Sales — all fully integrated with a unified reporting dashboard.',
    results: [
      'Eliminated 8 legacy systems with one unified platform',
      'Production planning accuracy improved by 45%',
      'Procurement cost savings of MYR 2.4M annually',
      'Headcount in admin roles reduced by 28%',
    ],
    techStack: ['.NET', 'SQL Server', 'Angular', 'Azure', 'Power BI', 'Azure AD'],
    tags: ['Manufacturing', 'ERP', 'Digital Transformation', 'Enterprise'],
    featured: false,
    testimonial: {
      quote: 'Nexora managed a complex ERP rollout across our entire group. The project was delivered on time and the ROI exceeded our projections.',
      author: 'Tan Sri Robert Lim',
      role: 'Executive Chairman',
      company: 'PrimeTech Industries',
    },
    metrics: [
      { label: 'Systems Consolidated', value: '8 → 1' },
      { label: 'Production Accuracy', value: '+45%' },
      { label: 'Annual Cost Savings', value: 'MYR 2.4M' },
      { label: 'Admin Headcount', value: '-28%' },
    ],
  },
]

export const featuredProjects = portfolioProjects.filter(p => p.featured)

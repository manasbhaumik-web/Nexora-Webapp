export interface Product {
  id: string
  slug: string
  name: string
  shortName: string
  category: string
  categorySlug: string
  tagline: string
  description: string
  icon: string
  color: string
  image?: string
  modules: string[]
  features: string[]
  industries: string[]
  techStack: string[]
  featured: boolean
}

export const productCategories = [
  { id: 'educational', label: 'Educational Solutions', icon: 'GraduationCap' },
  { id: 'healthcare', label: 'Healthcare Solutions', icon: 'Heart' },
  { id: 'business', label: 'Business & HR', icon: 'Briefcase' },
  { id: 'supply-chain', label: 'Supply Chain & Inventory', icon: 'Package' },
]

export const products: Product[] = [
  {
    id: 'lms',
    slug: 'learning-management-system',
    name: 'Learning Management System',
    shortName: 'LMS',
    category: 'Educational Solutions',
    categorySlug: 'educational',
    tagline: 'Empower learning at every level',
    description: 'A comprehensive LMS platform designed for universities, colleges, and corporate training. Deliver engaging online courses, manage assessments, track progress, and issue digital certificates.',
    icon: 'BookOpen',
    color: 'blue',
    image: '/product-lms.jpg',
    modules: ['Course Management', 'E-Learning & Video', 'Assessments', 'Certifications', 'Analytics', 'Mobile Access', 'Live Classes', 'Forums'],
    features: ['Online Learning', 'Smart Assessments', 'Progress Reporting', 'Mobile App', 'Certificate Generator', 'SCORM Compliant'],
    industries: ['Universities', 'Colleges', 'Training Centres', 'Corporate'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    featured: true,
  },
  {
    id: 'campus',
    slug: 'campus-management-system',
    name: 'Campus Management System',
    shortName: 'Campus',
    category: 'Educational Solutions',
    categorySlug: 'educational',
    tagline: 'Streamline your entire educational institution',
    description: 'End-to-end student and campus administration. Manage admissions, faculty, grading, timetables, and parent communication in one unified, secure platform.',
    icon: 'GraduationCap',
    color: 'indigo',
    image: '/product-campus.jpg',
    modules: ['Admissions', 'Student Profiles', 'Faculty Management', 'Grading', 'Timetables', 'Parent Portal', 'Finance', 'Alumni'],
    features: ['Enrollment Management', 'Gradebooks', 'Automated Scheduling', 'Payment Gateway', 'Parent App', 'Real-time Analytics'],
    industries: ['Universities', 'Colleges', 'K-12 Schools', 'Academies'],
    techStack: ['Next.js', 'Go', 'PostgreSQL', 'Google Cloud'],
    featured: true,
  },
  {
    id: 'clinical',
    slug: 'clinical-management-system',
    name: 'Clinical Management System',
    shortName: 'CMS',
    category: 'Healthcare Solutions',
    categorySlug: 'healthcare',
    tagline: 'Technology that cares for your patients',
    description: 'A comprehensive clinical solution that streamlines patient care, electronic health records (EHR), doctor scheduling, and administration, enabling providers to focus on patients.',
    icon: 'Heart',
    color: 'rose',
    image: '/product-clinical.jpg',
    modules: ['Patient Registration', 'EHR', 'Appointment Scheduling', 'Billing & Insurance', 'Pharmacy', 'Lab Integration', 'Telemedicine', 'Reporting'],
    features: ['Electronic Health Records', 'Smart Scheduling', 'Automated Billing', 'E-Prescriptions', 'Lab Results', 'Patient Portal'],
    industries: ['Hospitals', 'Clinics', 'Medical Centres', 'Diagnostics'],
    techStack: ['React', '.NET Core', 'SQL Server', 'Azure'],
    featured: true,
  },
  {
    id: 'hrms',
    slug: 'hr-management-system',
    name: 'HR Management System',
    shortName: 'HRMS',
    category: 'Business & HR',
    categorySlug: 'business',
    tagline: 'Manage your most valuable asset — your people',
    description: 'A modern HRMS covering the complete employee lifecycle. Handle payroll, attendance, performance reviews, leave requests, and compliance effortlessly.',
    icon: 'Users',
    color: 'emerald',
    image: '/product-hr.jpg',
    modules: ['Onboarding', 'Employee Directory', 'Attendance & Leave', 'Payroll Processing', 'Performance Reviews', 'Benefits', 'Compliance', 'Self-Service'],
    features: ['Automated Payroll', 'Time Tracking', 'Goal Setting', 'Leave Workflows', 'Org Charts', 'Employee App'],
    industries: ['Corporate', 'Healthcare', 'Education', 'Retail'],
    techStack: ['Vue.js', 'Python', 'PostgreSQL', 'AWS'],
    featured: true,
  },
  {
    id: 'inventory',
    slug: 'inventory-management-system',
    name: 'Inventory Management System',
    shortName: 'Inventory',
    category: 'Supply Chain & Inventory',
    categorySlug: 'supply-chain',
    tagline: 'Smart inventory, zero surprises',
    description: 'Take complete control of your stock with real-time tracking, automated procurement, and intelligent analytics. Prevent stockouts and optimise operations.',
    icon: 'Package',
    color: 'orange',
    image: '/product-inventory.jpg',
    modules: ['Stock Tracking', 'Purchase Orders', 'Warehouse Ops', 'Suppliers', 'Analytics', 'Barcode Scanning', 'Multi-location', 'Alerts'],
    features: ['Real-time Tracking', 'Automated Reordering', 'Barcode Scanning', 'Multi-Warehouse', 'Demand Forecasting', 'Supplier Portal'],
    industries: ['Retail', 'Manufacturing', 'Healthcare', 'Distribution'],
    techStack: ['React', 'Node.js', 'MySQL', 'Google Cloud'],
    featured: true,
  },
  {
    id: 'fms',
    slug: 'fleet-management-system',
    name: 'Fleet & Vehicle Management System',
    shortName: 'FMS',
    category: 'Supply Chain & Inventory',
    categorySlug: 'supply-chain',
    tagline: 'Intelligent fleet tracking and optimization',
    description: 'An advanced AI-powered fleet management solution. Track vehicles in real-time, optimize routing, monitor fuel consumption, and schedule predictive maintenance to drastically reduce operational costs.',
    icon: 'Truck',
    color: 'orange',
    modules: ['Real-time GPS Tracking', 'Route Optimization', 'Maintenance Scheduling', 'Fuel Management', 'Driver Behavior', 'Compliance'],
    features: ['Live GPS Tracking', 'AI Route Planning', 'Predictive Maintenance', 'Fuel Monitoring', 'Driver Scoring', 'Geo-fencing'],
    industries: ['Logistics', 'Transportation', 'Delivery Services', 'Manufacturing'],
    techStack: ['React', 'Go', 'PostgreSQL', 'Google Maps API', 'IoT'],
    featured: true,
  },
]

export const featuredProducts = products.filter(p => p.featured)

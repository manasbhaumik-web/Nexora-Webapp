export interface Industry {
  id: string
  slug: string
  name: string
  icon: string
  description: string
  challenges: string[]
  solutions: string[]
  products: string[]
  color: string
  stats: { label: string; value: string }[]
}

export const industries: Industry[] = [
  {
    id: 'education',
    slug: 'education',
    name: 'Education',
    icon: 'GraduationCap',
    color: 'blue',
    description: 'Empowering universities, colleges, schools, and training centres with integrated digital learning and student management platforms.',
    challenges: ['Manual student administration', 'Disconnected systems', 'Limited online learning capability', 'Poor reporting visibility'],
    solutions: ['Learning Management System', 'Student Management System', 'Online Examination Platform', 'Parent Communication Portal'],
    products: ['lms', 'sms'],
    stats: [{ label: 'Institutions Served', value: '80+' }, { label: 'Students Managed', value: '200K+' }, { label: 'Courses Delivered', value: '5,000+' }],
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare',
    icon: 'Heart',
    color: 'red',
    description: 'Digitising hospitals, clinics, and medical centres with secure, compliant healthcare management solutions that improve patient outcomes.',
    challenges: ['Paper-based records', 'Billing complexity', 'Appointment scheduling inefficiency', 'Regulatory compliance'],
    solutions: ['Hospital Management System', 'Electronic Health Records', 'Billing & Insurance Module', 'Appointment System'],
    products: ['hospital'],
    stats: [{ label: 'Facilities Served', value: '35+' }, { label: 'Patients Managed', value: '500K+' }, { label: 'Claims Processed', value: '2M+' }],
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: 'Factory',
    color: 'orange',
    description: 'Streamlining production management, supply chain, and quality control for manufacturers seeking operational excellence.',
    challenges: ['Production planning inefficiency', 'Supply chain visibility', 'Quality management', 'Inventory discrepancies'],
    solutions: ['ERP System', 'Inventory Management', 'Procurement Management', 'Production Planning Module'],
    products: ['erp', 'inventory'],
    stats: [{ label: 'Manufacturers Served', value: '25+' }, { label: 'Production Efficiency Gain', value: '35%' }, { label: 'Inventory Accuracy', value: '99.5%' }],
  },
  {
    id: 'logistics',
    slug: 'logistics',
    name: 'Logistics',
    icon: 'Truck',
    color: 'cyan',
    description: 'Optimising fleet management, warehouse operations, and last-mile delivery for logistics companies and courier services.',
    challenges: ['Fleet visibility', 'Route inefficiency', 'Manual proof of delivery', 'Customer communication gaps'],
    solutions: ['Logistics Management System', 'Fleet Tracking', 'Route Optimisation', 'Customer Notification System'],
    products: ['logistics', 'inventory'],
    stats: [{ label: 'Fleets Managed', value: '10,000+' }, { label: 'Delivery Efficiency Gain', value: '28%' }, { label: 'Fuel Savings', value: '18%' }],
  },
  {
    id: 'retail',
    slug: 'retail',
    name: 'Retail',
    icon: 'ShoppingCart',
    color: 'pink',
    description: 'Helping retailers and e-commerce businesses deliver seamless omnichannel experiences with integrated POS, inventory, and CRM.',
    challenges: ['Omnichannel integration', 'Inventory management', 'Customer loyalty', 'Sales analytics'],
    solutions: ['POS System', 'Inventory Management', 'CRM Solution', 'E-Commerce Platform'],
    products: ['crm', 'inventory'],
    stats: [{ label: 'Retail Chains Served', value: '40+' }, { label: 'Transactions Processed', value: '5M+ / month' }, { label: 'Sales Growth', value: '22% avg.' }],
  },
  {
    id: 'finance',
    slug: 'finance',
    name: 'Finance & Banking',
    icon: 'Landmark',
    color: 'emerald',
    description: 'Delivering secure, compliant financial technology solutions for banks, microfinance institutions, and accounting firms.',
    challenges: ['Regulatory compliance', 'Legacy system modernisation', 'Financial reporting complexity', 'Fraud risk'],
    solutions: ['Core Banking Integration', 'Accounting System', 'Budget Management', 'Financial Analytics'],
    products: ['accounting', 'budget'],
    stats: [{ label: 'Financial Institutions', value: '20+' }, { label: 'Transactions Secured', value: '10M+' }, { label: 'Reporting Time Saved', value: '60%' }],
  },
  {
    id: 'government',
    slug: 'government',
    name: 'Government',
    icon: 'Building2',
    color: 'indigo',
    description: 'Supporting government agencies and public sector organisations with secure, compliant digital service platforms and workflow automation.',
    challenges: ['Manual workflows', 'Citizen service efficiency', 'Data security', 'Inter-department integration'],
    solutions: ['Digital Workflow Automation', 'Budget Management System', 'Document Management', 'Citizen Portal'],
    products: ['budget', 'erp'],
    stats: [{ label: 'Government Clients', value: '15+' }, { label: 'Workflows Automated', value: '500+' }, { label: 'Processing Time Reduced', value: '70%' }],
  },
]

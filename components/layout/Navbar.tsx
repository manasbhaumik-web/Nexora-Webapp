'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
 Menu,
 X,
 ChevronDown,
 GraduationCap,
 Briefcase,
 DollarSign,
 Package,
 Heart,
 Cpu,
 Code2,
 Globe,
 Smartphone,
 Cloud,
 Zap,
 Lightbulb,
 GitMerge,
 Shield,
 RefreshCw,
 Lock,
 ArrowRight,
} from 'lucide-react'
import { productCategories } from '@/lib/data/products'
import { cn } from '@/lib/utils'
import { NexoraLogo } from '@/components/shared/NexoraLogo'

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
 label: string
 href: string
 hasMega?: boolean
 megaKey?: 'products' | 'services'
}

interface ServiceNavItem {
 label: string
 href: string
 icon: React.ElementType
 description: string
}

interface ProductNavItem {
 id: string
 label: string
 href: string
 icon: React.ElementType
 description: string
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PRODUCT_ICON_MAP: Record<string, React.ElementType> = {
 GraduationCap,
 Briefcase,
 DollarSign,
 Package,
 Heart,
 Cpu,
}

const productNavItems: ProductNavItem[] = productCategories.map((cat) => ({
 id: cat.id,
 label: cat.label,
 href: `/products#${cat.id}`,
 icon: PRODUCT_ICON_MAP[cat.icon] ?? Package,
 description: getCategoryDescription(cat.id),
}))

function getCategoryDescription(id: string): string {
 const map: Record<string, string> = {
 educational: 'LMS, SMS and e-learning platforms',
 business: 'ERP, CRM and HRMS systems',
 financial: 'Accounting, budgeting and finance tools',
 'supply-chain': 'Inventory and logistics software',
 healthcare: 'Hospital and clinic management',
 ai: 'AI chatbots and analytics platforms',
 }
 return map[id] ?? ''
}

const serviceNavItems: ServiceNavItem[] = [
 { label: 'Custom Software', href: '/services#custom-software-development', icon: Code2, description: 'Bespoke enterprise applications' },
 { label: 'Web Development', href: '/services#web-development', icon: Globe, description: 'High-performance websites & portals' },
 { label: 'Mobile App', href: '/services#mobile-app-development', icon: Smartphone, description: 'iOS & Android apps' },
 { label: 'Cloud Services', href: '/services#cloud-services', icon: Cloud, description: 'Migrate & manage cloud infrastructure' },
 { label: 'AI & Automation', href: '/services#ai-automation-services', icon: Cpu, description: 'Intelligent automation & ML' },
 { label: 'IT Consulting', href: '/services#it-consulting', icon: Lightbulb, description: 'Strategic technology guidance' },
 { label: 'System Integration', href: '/services#system-integration', icon: GitMerge, description: 'Seamlessly connect your systems' },
 { label: 'Managed Services', href: '/services#managed-services', icon: Shield, description: '24/7 monitoring & support' },
 { label: 'DevOps', href: '/services#devops-services', icon: RefreshCw, description: 'CI/CD and cloud DevOps practices' },
 { label: 'Cybersecurity', href: '/services#cybersecurity-services', icon: Lock, description: 'Enterprise-grade security' },
]

const navItems: NavItem[] = [
 { label: 'Products', href: '/products', hasMega: true, megaKey: 'products' },
 { label: 'Services', href: '/services', hasMega: true, megaKey: 'services' },
 { label: 'Portfolio', href: '/portfolio' },
 { label: 'Resources', href: '/resources' },
 { label: 'Company', href: '/about' },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

const megaMenuVariants = {
 hidden: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.2, ease: "easeInOut" } },
 visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
}

function ProductsMegaMenu({ onClose }: { onClose: () => void }) {
 return (
 <motion.div 
 initial="hidden" animate="visible" exit="hidden" variants={megaMenuVariants}
 className="absolute left-1/2 top-full z-50 mt-1 w-[640px] -translate-x-1/2 border border-white/10 bg-[#0F172A]/85 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-none overflow-hidden"
 >
 <div className="p-8">
 <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Our Products</p>
 <div className="grid grid-cols-2 gap-4">
 {productNavItems.map((item) => {
 const Icon = item.icon
 return (
 <Link
 key={item.id}
 href={item.href}
 onClick={onClose}
 className="group flex items-start gap-4 p-3 transition-all duration-200 hover:bg-white/10 border border-transparent hover:border-white/10 rounded-none"
 >
 <span className="mt-0.5 flex h-10 w-10 rounded-none flex-shrink-0 items-center justify-center bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-[#8B5CF6] group-hover:border-[#8B5CF6] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]" style={{ color: '#00D4FF' }}>
 <Icon size={18} className="transition-colors group-hover:text-white" />
 </span>
 <div>
 <p className="font-heading text-sm font-bold text-white group-hover:text-[#00D4FF] transition-colors">{item.label}</p>
 <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.description}</p>
 </div>
 </Link>
 )
 })}
 </div>
 <div className="mt-6 border-t border-white/10 pt-6">
 <Link
 href="/products"
 onClick={onClose}
 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors"
 >
 View all products <ArrowRight size={14} />
 </Link>
 </div>
 </div>
 </motion.div>
 )
}

function ServicesMegaMenu({ onClose }: { onClose: () => void }) {
 return (
 <motion.div 
 initial="hidden" animate="visible" exit="hidden" variants={megaMenuVariants}
 className="absolute left-1/2 top-full z-50 mt-1 w-[720px] -translate-x-1/2 border border-white/10 bg-[#0F172A]/85 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-none overflow-hidden"
 >
 <div className="p-8 flex flex-col">
 <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">What We Do</p>
 <div className="grid grid-cols-2 gap-4">
 {serviceNavItems.map((item) => {
 const Icon = item.icon
 return (
 <Link
 key={item.href}
 href={item.href}
 onClick={onClose}
 className="group flex items-start gap-4 p-3 transition-all duration-200 hover:bg-white/10 border border-transparent hover:border-white/10 rounded-none"
 >
 <span className="mt-0.5 flex h-10 w-10 rounded-none flex-shrink-0 items-center justify-center bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-[#8B5CF6] group-hover:border-[#8B5CF6] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]" style={{ color: '#00D4FF' }}>
 <Icon size={18} className="transition-colors group-hover:text-white" />
 </span>
 <div>
 <p className="font-heading text-sm font-bold text-white group-hover:text-[#00D4FF] transition-colors">{item.label}</p>
 <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.description}</p>
 </div>
 </Link>
 )
 })}
 </div>
 <div className="mt-6 border-t border-white/10 pt-6">
 <Link
 href="/services"
 onClick={onClose}
 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors"
 >
 View all services <ArrowRight size={14} />
 </Link>
 </div>
 </div>
 </motion.div>
 )
}

// ─── Main Navbar ─────────────────────────────────────────────────────────────

export function Navbar() {
 const [scrolled, setScrolled] = useState(false)
 const [mobileOpen, setMobileOpen] = useState(false)
 const [activeMega, setActiveMega] = useState<'products' | 'services' | null>(null)
 const [mobileExpanded, setMobileExpanded] = useState<'products' | 'services' | null>(null)
 const pathname = usePathname()
 const navRef = useRef<HTMLElement>(null)
 const megaTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

 // Scroll listener
 useEffect(() => {
 const handleScroll = () => setScrolled(window.scrollY > 12)
 handleScroll()
 window.addEventListener('scroll', handleScroll, { passive: true })
 return () => window.removeEventListener('scroll', handleScroll)
 }, [])

 // Close mobile menu on route change
 useEffect(() => {
 setMobileOpen(false)
 setActiveMega(null)
 setMobileExpanded(null)
 }, [pathname])

 // Escape key closes menus
 useEffect(() => {
 const onKey = (e: KeyboardEvent) => {
 if (e.key === 'Escape') {
 setActiveMega(null)
 setMobileOpen(false)
 }
 }
 document.addEventListener('keydown', onKey)
 return () => document.removeEventListener('keydown', onKey)
 }, [])

 // Body scroll lock when mobile open
 useEffect(() => {
 document.body.style.overflow = mobileOpen ? 'hidden' : ''
 return () => { document.body.style.overflow = '' }
 }, [mobileOpen])

 // Click outside to close mega
 useEffect(() => {
 const handleClick = (e: MouseEvent) => {
 if (navRef.current && !navRef.current.contains(e.target as Node)) {
 setActiveMega(null)
 }
 }
 document.addEventListener('mousedown', handleClick)
 return () => document.removeEventListener('mousedown', handleClick)
 }, [])

 const openMega = useCallback((key: 'products' | 'services') => {
 if (megaTimerRef.current) clearTimeout(megaTimerRef.current)
 setActiveMega(key)
 }, [])

 const closeMega = useCallback(() => {
 megaTimerRef.current = setTimeout(() => setActiveMega(null), 120)
 }, [])

 const cancelClose = useCallback(() => {
 if (megaTimerRef.current) clearTimeout(megaTimerRef.current)
 }, [])

 const toggleMobileExpand = (key: 'products' | 'services') => {
 setMobileExpanded((prev) => (prev === key ? null : key))
 }

 return (
 <header
 ref={navRef}
 className={cn(
 'fixed inset-x-0 top-0 z-50 transition-all duration-300 font-sans border-b',
 scrolled 
 ? 'bg-[#0F172A]/70 backdrop-blur-2xl border-white/10 py-3'
 : 'bg-[#0F172A] border-transparent py-5'
 )}
 >
 <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
 
  <NexoraLogo />

 {/* Desktop Nav */}
 <div className="hidden lg:flex items-center gap-1">
 {navItems.map((item) => {
 if (item.hasMega && item.megaKey) {
 const key = item.megaKey
 const isActive = activeMega === key
 return (
 <div
 key={item.label}
 className="relative"
 onMouseEnter={() => openMega(key)}
 onMouseLeave={closeMega}
 >
 <button
 type="button"
 className={cn(
 'nav-link flex items-center gap-1.5 px-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors cursor-pointer',
 isActive ? 'text-[#00D4FF]' : 'text-gray-300 hover:text-white',
 )}
 aria-expanded={isActive}
 aria-haspopup="true"
 onFocus={() => openMega(key)}
 >
 {item.label}
 <ChevronDown
 size={14}
 className={cn(
 'transition-transform duration-300',
 isActive && 'rotate-180 text-[#00D4FF]'
 )}
 />
 </button>
 <AnimatePresence>
 {isActive && (
 <div onMouseEnter={cancelClose} onMouseLeave={closeMega} className="absolute top-full left-1/2 -translate-x-1/2">
 {key === 'products' ? (
 <ProductsMegaMenu onClose={() => setActiveMega(null)} />
 ) : (
 <ServicesMegaMenu onClose={() => setActiveMega(null)} />
 )}
 </div>
 )}
 </AnimatePresence>
 </div>
 )
 }

 return (
 <Link
 key={item.label}
 href={item.href}
 className={cn(
 'nav-link px-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors',
 pathname === item.href ? 'text-[#00D4FF]' : 'text-gray-300 hover:text-white',
 )}
 >
 {item.label}
 </Link>
 )
 })}
 </div>

 {/* Right CTA */}
 <div className="hidden lg:flex items-center">
 <Link
 href="/contact"
 className="btn-primary py-3 px-6 text-xs"
 >
 Request Demo
 <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
 </Link>
 </div>

 {/* Mobile Toggle */}
 <button
 className="lg:hidden p-2 text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
 onClick={() => setMobileOpen(true)}
 aria-label="Open menu"
 >
 <Menu size={24} />
 </button>
 </div>

 {/* Mobile Menu Overlay */}
 <AnimatePresence>
 {mobileOpen && (
 <motion.div 
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: 20 }}
 transition={{ type: "spring", bounce: 0, duration: 0.4 }}
 className="fixed inset-0 z-[100] flex flex-col bg-[#0F172A] lg:hidden overflow-y-auto"
 >
 <div className="flex items-center justify-between border-b border-white/10 p-4">
 <span className="font-heading text-lg font-black tracking-tight text-white">
 Nexora
 </span>
 <button
 className="p-2 text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
 onClick={() => setMobileOpen(false)}
 aria-label="Close menu"
 >
 <X size={24} />
 </button>
 </div>
 
 <nav className="flex flex-col p-4 gap-2">
 {navItems.map((item) => {
 if (item.hasMega && item.megaKey) {
 const key = item.megaKey
 const isExpanded = mobileExpanded === key
 return (
 <div key={item.label} className="flex flex-col border-b border-white/5">
 <button
 className="flex w-full items-center justify-between py-4 text-left font-bold text-sm uppercase tracking-widest text-white"
 onClick={() => toggleMobileExpand(key)}
 >
 {item.label}
 <ChevronDown
 size={18}
 className={cn('transition-transform duration-300', isExpanded && 'rotate-180')}
 />
 </button>
 
 <AnimatePresence>
 {isExpanded && (
 <motion.div 
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: 'auto', opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 className="flex flex-col overflow-hidden"
 >
 <div className="py-2 pl-4 flex flex-col gap-4 border-l border-white/10 ml-2 mb-4">
 {(key === 'products' ? productNavItems : serviceNavItems).map((subItem) => (
 <Link
 key={subItem.href}
 href={subItem.href}
 className="text-[13px] font-bold text-gray-400 hover:text-[#00D4FF]"
 >
 {subItem.label}
 </Link>
 ))}
 <Link
 href={`/${key}`}
 className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] flex items-center gap-2 mt-2"
 >
 View All <ArrowRight size={14} />
 </Link>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 )
 }

 return (
 <Link
 key={item.label}
 href={item.href}
 className="flex w-full items-center justify-between py-4 text-left font-bold text-sm uppercase tracking-widest text-white border-b border-white/5"
 >
 {item.label}
 </Link>
 )
 })}
 
 <Link
 href="/contact"
 className="mt-8 btn-primary w-full py-4 text-sm"
 >
 Request Demo <ArrowRight size={16} />
 </Link>
 </nav>
 </motion.div>
 )}
 </AnimatePresence>
 </header>
 )
}

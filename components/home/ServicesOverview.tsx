'use client'

import { useRef, MouseEvent } from 'react'
import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue, useInView } from 'framer-motion'
import {
 Code2,
 Globe,
 Smartphone,
 Cloud,
 Cpu,
 Zap,
 Lightbulb,
 GitMerge,
 Shield,
 RefreshCw,
 Lock,
 ArrowRight,
} from 'lucide-react'
import { services } from '@/lib/data/services'
import { cn } from '@/lib/utils'

const PRIMARY = "#FFFFFF"
const SECONDARY = "#8B5CF6"

const iconMap: Record<string, React.ElementType> = {
 Code2, Globe, Smartphone, Cloud, Cpu, Zap, Lightbulb, GitMerge, Shield, RefreshCw, Lock,
}

/* ─── Spotlight Bento Box (Flat Color Palette) ──────────────────────────── */

function SharpServiceBox({ children, className, delay = 0, isContrast = false }: { children: React.ReactNode; className?: string; delay?: number; isContrast?: boolean }) {
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, margin: "-50px" })
 const mouseX = useMotionValue(0)
 const mouseY = useMotionValue(0)

 function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
 const { left, top } = currentTarget.getBoundingClientRect()
 mouseX.set(clientX - left)
 mouseY.set(clientY - top)
 }

 const hoverBorderColor = isContrast ? '#8B5CF6' : '#00D4FF'
 const glowColor = isContrast ? 'rgba(139, 92, 246, 0.25)' : 'rgba(0, 212, 255, 0.25)'

 return (
 <motion.div
 ref={ref}
 initial={{ opacity: 0, y: 30 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
 transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
 className={cn('group relative bg-white/5 overflow-hidden transition-all duration-300 border border-white/10 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] cursor-pointer hover:-translate-y-1', className)}
 onMouseMove={handleMouseMove}
 >
 <motion.div
 className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-0"
 style={{
 background: useMotionTemplate`
 radial-gradient(
 400px circle at ${mouseX}px ${mouseY}px,
 ${glowColor},
 transparent 80%
 )
 `,
 }}
 />
 <div className="relative z-10 h-full flex flex-col p-8">{children}</div>
 </motion.div>
 )
}


export function ServicesOverview() {
 const headerRef = useRef(null)
 const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

 const featuredServices = services.slice(0, 8)

 return (
 <section className="relative py-24 lg:py-32 bg-white/5 overflow-hidden font-sans border-t border-white/10 ">
 
 {/* Blueprint Grid Lines */}
 <div 
 className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
 style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}
 />

 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Section Header */}
 <motion.div 
 ref={headerRef}
 initial={{ opacity: 0, y: 20 }}
 animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
 transition={{ duration: 0.6 }}
 className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
 >
 <div className="max-w-2xl">
 <div 
 className="inline-flex items-center gap-3 border px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase mb-6 shadow-sm bg-white/5 border-white/10 text-white rounded-full"
 >
 <span className="w-2 h-2 block" style={{ backgroundColor: SECONDARY }} />
 Capabilities
 </div>
 <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
 End-to-End Technology <br />
 <span style={{ color: PRIMARY }}>Solutions & Consulting.</span>
 </h2>
 </div>
 
 <Link 
 href="/services"
 className="btn-outline"
 >
 View All Services
 <motion.span className="inline-block" whileHover={{ x: 5 }}>
 <ArrowRight size={16} />
 </motion.span>
 </Link>
 </motion.div>

 {/* Uniform Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20 auto-rows-[220px]">
 {featuredServices.map((service, index) => {
 const Icon = iconMap[service.icon] || Code2
 const isContrast = index === 2 || index === 5

 return (
 <SharpServiceBox 
 key={service.id} 
 delay={index * 0.05} 
 className="col-span-1"
 isContrast={isContrast}
 >
 <div className="flex flex-col h-full">
 <div className="flex items-start justify-between mb-6">
 <div 
 className="p-3 bg-white/10 border border-white/5 rounded-2xl transition-colors duration-300 group-hover:text-white dark:hover:text-white"
 style={{ color: isContrast ? SECONDARY : '#00D4FF' }}
 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isContrast ? SECONDARY : '#00D4FF')}
 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
 >
 <Icon size={24} strokeWidth={2} />
 </div>
 </div>

 <div className="mt-auto">
 <h3 className="font-black tracking-tight text-white mb-2 text-lg">
 {service.name}
 </h3>
 <p className="text-gray-400 font-medium text-xs line-clamp-2">
 {service.shortDescription}
 </p>
 </div>
 </div>
 </SharpServiceBox>
 )
 })}
 </div>

 {/* Blueprint Process Pipeline */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.6 }}
 className="border border-white/10 bg-white/5 p-8 lg:p-12 relative overflow-hidden"
 >
 <div className="absolute top-0 right-0 p-4 opacity-10">
 <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle cx="50" cy="50" r="40" stroke="#0f172a" strokeWidth="2" strokeDasharray="4 4" />
 <circle cx="50" cy="50" r="20" stroke="#0f172a" strokeWidth="2" />
 </svg>
 </div>
 
 <div className="relative z-10">
 <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-8">Standardized Delivery Pipeline</h4>
 <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
 {['01. Discovery', '02. Architecture', '03. Engineering', '04. Deployment', '05. Scale'].map((step, i) => (
 <div key={i} className="flex-1 relative group">
 <div className="flex items-center mb-4">
 <div className="w-2 h-2 bg-slate-300 group-hover:bg-[#E67E22] transition-colors" />
 <div className="h-px bg-slate-200 flex-1 ml-4 mr-4 md:mr-0 group-hover:bg-[#E67E22] transition-colors" />
 </div>
 <span className="text-sm font-bold text-white pr-4">{step}</span>
 </div>
 ))}
 </div>
 </div>
 </motion.div>

 </div>
 </section>
 )
}

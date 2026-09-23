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
 Search,
 Layers,
 Terminal,
 Rocket,
 TrendingUp,
 ChevronRight,
} from 'lucide-react'
import { services } from '@/lib/data/services'
import { cn } from '@/lib/utils'

const PRIMARY = "#FFFFFF"
const SECONDARY = "#8B5CF6"

const pipelineSteps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'Requirements analysis, technical feasibility & architecture blueprinting.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'Scalable system design, cloud infrastructure & security protocols.',
    icon: Layers,
  },
  {
    number: '03',
    title: 'Engineering',
    description: 'Agile sprint builds, API integrations & automated code quality checks.',
    icon: Terminal,
  },
  {
    number: '04',
    title: 'Deployment',
    description: 'Automated CI/CD pipelines, staging validation & zero-downtime release.',
    icon: Rocket,
  },
  {
    number: '05',
    title: 'Scale & Optimize',
    description: '24/7 SLA monitoring, autoscaling policies & performance tuning.',
    icon: TrendingUp,
  },
]

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

 {/* Standardized Delivery Pipeline */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.6 }}
 className="border border-white/10 bg-[#0F172A]/80 backdrop-blur-2xl p-8 lg:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
 >
 {/* Ambient Glow Orbs */}
 <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
 <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

 {/* Section Header */}
 <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-white/10 pb-8">
 <div>
 <div className="inline-flex items-center gap-2 border border-[#00D4FF]/30 bg-[#00D4FF]/10 backdrop-blur-md px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-[#00D4FF] mb-3">
 <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
 Engineering Methodology
 </div>
 <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
 Standardized <span className="text-gradient">Delivery Pipeline</span>
 </h3>
 </div>
 <p className="text-xs text-gray-400 font-medium max-w-md leading-relaxed">
 A battle-tested 5-phase delivery framework driving predictable enterprise execution from initial discovery to global infrastructure scaling.
 </p>
 </div>

 {/* 5-Step Connected Timeline Bento Grid */}
 <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
 {pipelineSteps.map((step, i) => {
 const Icon = step.icon
 return (
 <div
 key={step.number}
 className="group relative bg-white/5 border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#00D4FF]/50 hover:bg-white/[0.08] hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,212,255,0.15)]"
 >
 {/* Connecting Arrow for Desktop */}
 {i < 4 && (
 <div className="hidden lg:block absolute top-1/2 -right-3 z-20 -translate-y-1/2 text-gray-600 group-hover:text-[#00D4FF] transition-colors">
 <ChevronRight size={16} />
 </div>
 )}

 <div>
 {/* Step Header: Number Badge & Icon */}
 <div className="flex items-center justify-between mb-5">
 <span className="font-heading text-xs font-black tracking-widest uppercase px-2 py-0.5 bg-white/10 border border-white/10 text-[#00D4FF] group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:border-[#8B5CF6] transition-all duration-300">
 {step.number}
 </span>
 <div className="p-2.5 bg-white/5 border border-white/10 text-gray-300 group-hover:text-[#00D4FF] group-hover:bg-[#00D4FF]/10 group-hover:border-[#00D4FF]/30 transition-all duration-300">
 <Icon size={18} />
 </div>
 </div>

 {/* Title & Description */}
 <h4 className="font-heading text-sm font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-2">
 {step.title}
 </h4>
 <p className="text-[11px] text-gray-400 leading-relaxed font-normal">
 {step.description}
 </p>
 </div>

 {/* Bottom Phase Indicator */}
 <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
 <span>Phase 0{i + 1}</span>
 <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#00D4FF] group-hover:shadow-[0_0_8px_#00D4FF] transition-all" />
 </div>
 </div>
 )
 })}
 </div>
 </motion.div>

 </div>
 </section>
 )
}

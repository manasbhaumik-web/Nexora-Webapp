'use client'

import { useRef, MouseEvent } from 'react'
import { motion, useInView, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { featuredProjects } from '@/lib/data/portfolio'
import { cn } from '@/lib/utils'

function PortfolioBox({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, margin: "-50px" })
 const mouseX = useMotionValue(0)
 const mouseY = useMotionValue(0)

 function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
 const { left, top } = currentTarget.getBoundingClientRect()
 mouseX.set(clientX - left)
 mouseY.set(clientY - top)
 }

 return (
 <motion.div
 ref={ref}
 initial={{ opacity: 0, y: 30 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
 transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
 className={cn('group relative border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-[#00D4FF]/60 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] cursor-pointer', className)}
 onMouseMove={handleMouseMove}
 >
 <motion.div
 className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-0"
 style={{
 background: useMotionTemplate`
 radial-gradient(
 450px circle at ${mouseX}px ${mouseY}px,
 rgba(139, 92, 246, 0.2),
 transparent 80%
 )
 `,
 }}
 />
 <div className="relative z-10 h-full flex flex-col">{children}</div>
 </motion.div>
 )
}

export function PortfolioPreview() {
 const headerRef = useRef(null)
 const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

 return (
 <section className="relative py-24 lg:py-32 bg-[#0F172A] font-sans border-t border-white/10">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Section Header */}
 <motion.div 
 ref={headerRef}
 initial={{ opacity: 0, x: -20 }}
 animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
 transition={{ duration: 0.6 }}
 className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
 >
 <div className="max-w-2xl">
 <div className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase text-gray-300 mb-6 rounded-full">
 <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF] block" />
 Proven Results
 </div>
 <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-[1.1]">
 Impact delivered, <br />
 <span className="text-gradient">metrics validated.</span>
 </h2>
 </div>
 <a href="/portfolio" className="group hidden lg:inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00D4FF] hover:text-white transition-colors">
 View All Case Studies <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
 </a>
 </motion.div>

 {/* Structural Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10 bg-[#050505]/50 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
 {featuredProjects.slice(0, 3).map((project, index) => (
 <PortfolioBox 
 key={project.id} 
 delay={index * 0.1}
 className={cn("border-b lg:border-b-0 lg:border-r border-white/10 ", index === 2 && "lg:border-r-0")}
 >
 <div className="flex flex-col h-full p-8 lg:p-10">
 <div className="flex items-start justify-between mb-8">
 <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#00D4FF] bg-white border border-white/10 px-3 py-1.5 rounded-full">
 {project.industry}
 </span>
 <span className="text-gray-400 font-mono text-xs font-bold">{project.year}</span>
 </div>

 <div className="mb-8">
 <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">{project.client}</p>
 <h3 className="font-black text-2xl tracking-tight text-white group-hover:text-[#00D4FF] transition-colors leading-tight">
 {project.title}
 </h3>
 </div>

 <p className="text-gray-400 text-sm leading-relaxed font-medium mb-10 flex-grow line-clamp-3">
 {project.challenge}
 </p>

 {/* Metrics Grid */}
 <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 mb-8">
 {project.metrics.map(m => (
 <div key={m.label} className="bg-white/5 p-4 flex flex-col justify-center">
 <span className="text-xl font-black text-white tracking-tighter">{m.value}</span>
 <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">{m.label}</span>
 </div>
 ))}
 </div>

 <div className="flex flex-wrap gap-2 mb-8">
 {project.techStack.slice(0, 3).map(tech => (
 <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-white/10 px-2 py-1">
 {tech}
 </span>
 ))}
 {project.techStack.length > 3 && (
 <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-white/10 px-2 py-1 bg-white/5 ">
 +{project.techStack.length - 3}
 </span>
 )}
 </div>

 <a href={`/portfolio/${project.slug}`} className="group/link mt-auto inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-[#00D4FF] transition-colors w-max">
 Read Case Study
 <motion.span className="inline-block" whileHover={{ x: 4 }}>
 <ArrowRight size={14} />
 </motion.span>
 </a>
 </div>
 </PortfolioBox>
 ))}
 </div>
 </div>
 </section>
 )
}

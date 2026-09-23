'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function VisionStatement() {
 const containerRef = useRef<HTMLDivElement>(null)
 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start end", "end start"]
 })

 // Slower parallax effect for massive typography
 const y = useTransform(scrollYProgress, [0, 1], [100, -100])
 const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 0.1])

 return (
 <section 
 ref={containerRef} 
 className="relative py-40 lg:py-56 bg-white/5 overflow-hidden border-y border-white/5"
 >
 {/* Deep cinematic background */}
 <div className="absolute inset-0 z-0">
 <div className="absolute inset-0 bg-[url('/hero-3d-glass.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
 <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]" />
 
 {/* Glow behind the text */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />
 </div>

 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
 <motion.div style={{ y, opacity }} className="flex flex-col items-center">
 <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#00D4FF] font-bold tracking-[0.3em] uppercase text-xs mb-10 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
 The Nexora Standard
 </span>
 <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-white leading-[0.85]">
 We don't just <br className="hidden md:block" />
 build software.<br />
 <span className="text-gradient mt-4 block">
 We engineer unfair advantages.
 </span>
 </h2>
 </motion.div>
 </div>
 </section>
 )
}

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Shield, Award, Calendar } from 'lucide-react'
import { LeadModal, type ModalType } from '@/components/shared/LeadModal'
import { cn } from '@/lib/utils'

const badges = [
 { label: 'ISO 27001 Certified', icon: <Shield size={14} /> },
 { label: 'Microsoft Gold Partner', icon: <Award size={14} /> },
 { label: '12+ Years Experience', icon: <Calendar size={14} /> },
]

const backgroundSlides = [
  '/hero-slide-3.jpg', // Glassmorphism Data Pedestal
  '/hero-slide-2.jpg', // Cinematic Data Core
  '/hero-slide-1.jpg', // Abstract AI Geometry
]

export function HeroSection() {
 const [modalType, setModalType] = useState<ModalType | null>(null)
 const [currentSlide, setCurrentSlide] = useState(0)

 useEffect(() => {
 const timer = setInterval(() => {
 setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length)
 }, 6000)
 return () => clearInterval(timer)
 }, [])

 const containerVars = {
 hidden: { opacity: 0 },
 show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
 }

 const itemVars = {
 hidden: { opacity: 0, y: 30 },
 show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } },
 }

 return (
 <section className="relative min-h-[90vh] flex items-center justify-center font-sans overflow-hidden bg-[#0F172A] pt-24 pb-16">
 
 {/* ── Background Image Slideshow ── */}
 <div className="absolute inset-0 z-0 bg-[#0F172A]">
 <AnimatePresence mode="popLayout">
 <motion.div
 key={currentSlide}
 initial={{ opacity: 0, scale: 1.05, x: 20 }}
 animate={{ opacity: 1, scale: 1, x: 0 }}
 exit={{ opacity: 0, x: -20 }}
 transition={{ duration: 1.2, ease: "easeInOut" }}
 className="absolute inset-0"
 >
 <Image 
 src={backgroundSlides[currentSlide]} 
 alt="AI Architecture Background" 
 fill 
 priority
 className="object-cover object-center opacity-40" 
 />
 </motion.div>
 </AnimatePresence>
 
 {/* Dark gradient overlay for text readability and blending into the next section */}
 <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/40 via-[#0F172A]/60 to-[#0F172A] z-10" />
 </div>

 {/* ── Bleeding Edge Glowing Orbs (Screen blended over image) ── */}
 <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-600/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0" />
 <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0" />

 {/* ── Main Content ── */}
 <motion.div 
 variants={containerVars}
 initial="hidden"
 animate="show"
 className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
 >
 <motion.div variants={itemVars} className="mb-8">
 <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[11px] font-bold tracking-widest uppercase text-gray-300 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)]">
 <span className="w-2 h-2 rounded-full animate-pulse bg-rose-500 shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
 Trusted by 180+ Enterprises
 </div>
 </motion.div>

 <motion.h1 variants={itemVars} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter mb-8 text-white max-w-5xl mx-auto">
 Engineer Your <br className="hidden sm:block" />
 <span className="text-gradient">Unfair Advantage.</span>
 </motion.h1>

 <motion.p variants={itemVars} className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
 Nexora delivers bespoke AI architectures and scalable enterprise platforms that transform operational bottlenecks into massive competitive leverage.
 </motion.p>

 <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
 <button 
 onClick={() => setModalType('consultation')} 
 className="btn-primary w-full sm:w-auto"
 >
 Init Discovery
 <motion.span whileHover={{ x: 5 }} className="inline-block">
 <ArrowRight size={18} />
 </motion.span>
 </button>
 
 <button 
 onClick={() => setModalType('demo')} 
 className="btn-secondary w-full sm:w-auto"
 >
 View Specs
 </button>
 </motion.div>

 <motion.div variants={itemVars} className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
 {badges.map((badge, i) => (
 <div key={i} className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
 <div className="text-violet-400">{badge.icon}</div>
 {badge.label}
 </div>
 ))}
 </motion.div>

 </motion.div>

 <LeadModal
 isOpen={!!modalType}
 type={modalType ?? 'consultation'}
 onClose={() => setModalType(null)}
 />
 </section>
 )
}

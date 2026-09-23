'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/data/content'

const PRIMARY = "#FFFFFF"
const SECONDARY = "#8B5CF6"

export function TestimonialsCarousel() {
 const headerRef = useRef(null)
 const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

 return (
 <section className="relative py-24 lg:py-32 bg-white/5 border-t border-white/10 font-sans overflow-hidden">
 
 {/* Light Blueprint Grid Background */}
 <div 
 className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
 style={{ backgroundImage: `linear-gradient(${PRIMARY} 1px, transparent 1px), linear-gradient(90deg, ${PRIMARY} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
 />

 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Section Header */}
 <motion.div 
 ref={headerRef}
 initial={{ opacity: 0, x: -20 }}
 animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
 transition={{ duration: 0.6 }}
 className="mb-16 max-w-2xl"
 >
 <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase text-gray-300 mb-6 shadow-sm">
 <span className="w-2 h-2 block" style={{ backgroundColor: SECONDARY }} />
 Client Validation
 </div>
 <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-[1.1]">
 Trusted by global <br />
 <span className="text-gradient">technology leaders.</span>
 </h2>
 </motion.div>

 {/* Structural Grid for Testimonials */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10 shadow-sm bg-white/5 ">
 {testimonials.slice(0, 3).map((testimonial, index) => (
 <motion.div 
 key={testimonial.id}
 initial={{ opacity: 0, y: 20 }}
 animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
 transition={{ duration: 0.5, delay: index * 0.1 }}
 className="bg-white/5 p-8 lg:p-12 relative group hover:bg-white/10 hover:border-violet-500/40 transition-colors border-b lg:border-b-0 lg:border-r border-white/10 last:border-0"
 >
 <Quote className="absolute top-8 right-8 opacity-5" size={64} style={{ color: PRIMARY }} />
 
 <div className="mb-8">
 <div className="flex gap-1 mb-6">
 {[...Array(5)].map((_, i) => (
 <svg key={i} className="w-4 h-4" style={{ color: SECONDARY }} fill="currentColor" viewBox="0 0 20 20">
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </svg>
 ))}
 </div>
 <p className="text-sm font-medium leading-relaxed" style={{ color: PRIMARY }}>
 "{testimonial.quote}"
 </p>
 </div>

 <div className="mt-auto border-t border-white/10 pt-6 flex items-center justify-between">
 <div>
 <h4 className="font-bold text-xs tracking-widest uppercase mb-1" style={{ color: PRIMARY }}>{testimonial.author}</h4>
 <p className="text-xs text-gray-400 font-medium">{testimonial.role}</p>
 </div>
 <div className="px-2 py-1 bg-white/10 text-[10px] font-bold tracking-widest uppercase text-gray-400 border border-white/10 ">
 {testimonial.industry}
 </div>
 </div>
 </motion.div>
 ))}
 </div>

 </div>
 </section>
 )
}

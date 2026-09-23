'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Terminal } from 'lucide-react'
import { LeadModal, type ModalType } from '@/components/shared/LeadModal'

const PRIMARY = "#FFFFFF"
const SECONDARY = "#8B5CF6"

export function CTABanner() {
 const [modalType, setModalType] = useState<ModalType | null>(null)

 return (
 <section className="relative font-sans bg-white/5 border-t border-white/10 ">
 
 {/* Blueprint Grid Overlay */}
 <div 
 className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
 style={{ backgroundImage: `linear-gradient(${PRIMARY} 1px, transparent 1px), linear-gradient(90deg, ${PRIMARY} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
 />

 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
 <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/10 bg-white/5 p-8 lg:p-16 shadow-2xl rounded-2xl hover:border-violet-500/40 hover:shadow-[0_0_50px_rgba(139,92,246,0.25)] transition-all duration-300">
 
 <div className="max-w-2xl">
 <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase mb-6 rounded-full text-white">
 <span className="w-2 h-2 rounded-full block animate-pulse bg-violet-500 shadow-[0_0_8px_#8B5CF6]" />
 System Architecture
 </div>
 <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-[1.1] text-white">
 Ready to transform your <br className="hidden sm:block" />
 <span className="text-gradient">technical infrastructure?</span>
 </h2>
 <p className="text-lg font-medium mb-0 text-gray-300">
 Schedule a technical discovery session with our engineering team to map out your architecture and migration plan.
 </p>
 </div>

 <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto flex-shrink-0">
 <button
 onClick={() => setModalType('consultation')}
 className="btn-primary w-full sm:w-auto group"
 >
 <Terminal size={16} />
 Init Discovery
 <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
 </button>
 <a
 href="/portfolio"
 className="btn-secondary w-full sm:w-auto"
 >
 View Docs & Cases
 </a>
 </div>
 
 </div>
 </div>

 <LeadModal
 isOpen={!!modalType}
 type={modalType ?? 'consultation'}
 onClose={() => setModalType(null)}
 />
 </section>
 )
}

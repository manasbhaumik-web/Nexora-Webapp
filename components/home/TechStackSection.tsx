'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Shield, CheckCircle, Cloud, ChevronRight } from 'lucide-react'
import { techStack, certifications } from '@/lib/data/technologies'
import { cn } from '@/lib/utils'

type TabKey = keyof typeof techStack

const tabs: { key: TabKey; label: string }[] = [
 { key: 'frontend', label: 'Frontend' },
 { key: 'backend', label: 'Backend' },
 { key: 'database', label: 'Database' },
 { key: 'cloud', label: 'Cloud' },
 { key: 'ai', label: 'AI & ML' },
]

const certIconMap: Record<string, React.ReactNode> = {
 Award: <Award size={16} />,
 Shield: <Shield size={16} />,
 CheckCircle: <CheckCircle size={16} />,
 Cloud: <Cloud size={16} />,
}

export function TechStackSection() {
 const [activeTab, setActiveTab] = useState<TabKey>('frontend')
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, margin: "-100px" })

 const items = techStack[activeTab]

 return (
 <section ref={ref} className="relative py-24 lg:py-32 bg-white/5 font-sans border-t border-white/10 ">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Section Header */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
 transition={{ duration: 0.6 }}
 className="mb-12 max-w-2xl text-center mx-auto flex flex-col items-center"
 >
 <div className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase text-gray-300 mb-6 rounded-none">
 <span className="w-2 h-2 bg-[#00D4FF] block rounded-none" />
 Technology Stack
 </div>
 <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-[1.1]">
 Enterprise-Grade <br />
 <span className="text-gray-400">Infrastructure.</span>
 </h2>
 </motion.div>

 {/* Category tabs */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
 transition={{ duration: 0.6, delay: 0.1 }}
 className="flex flex-wrap justify-center gap-2 mb-10 bg-white/5 p-2 rounded-full border border-white/10 w-max mx-auto"
 >
 {tabs.map((tab) => (
 <button
 key={tab.key}
 onClick={() => setActiveTab(tab.key)}
 className={cn(
 'px-6 py-2.5 font-bold text-[11px] tracking-widest uppercase transition-all rounded-full cursor-pointer active:scale-95',
 activeTab === tab.key
 ? 'bg-[#8B5CF6] text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]'
 : 'text-gray-400 hover:text-white hover:bg-white/10'
 )}
 >
 {tab.label}
 </button>
 ))}
 </motion.div>

 {/* Tech cards grid */}
 <motion.div
 key={activeTab} // Forces re-mount animation on tab change
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.3 }}
 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border border-white/10 bg-white/5 shadow-2xl overflow-hidden mb-16 rounded-2xl"
 >
 {items.map((item, i) => (
 <div
 key={item.name}
 className={cn(
 "p-8 flex flex-col items-center text-center border-b lg:border-b-0 border-white/10 hover:bg-white/10 hover:border-violet-500/40 transition-all duration-300 group cursor-pointer",
 i !== items.length - 1 && "lg:border-r"
 )}
 >
 <div className="w-16 h-16 bg-white/10 flex items-center justify-center text-2xl border border-white/10 font-mono font-bold text-white mb-6 rounded-2xl group-hover:border-[#00D4FF] group-hover:text-[#00D4FF] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300">
 {item.logo}
 </div>
 <p className="font-black text-lg text-white mb-2 group-hover:text-[#00D4FF] transition-colors">{item.name}</p>
 <p className="text-gray-400 text-xs font-medium leading-relaxed">{item.description}</p>
 </div>
 ))}
 </motion.div>

 {/* Certification badges */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={isInView ? { opacity: 1 } : { opacity: 0 }}
 transition={{ duration: 0.6, delay: 0.4 }}
 className="border-t border-white/10 pt-12"
 >
 <p className="text-center text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
 Certifications & Partnerships
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 {certifications.map((cert) => (
 <div
 key={cert.name}
 className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 bg-white/5 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:border-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:-translate-y-0.5 cursor-pointer transition-all duration-300"
 >
 <span className="text-[#00D4FF]">
 {certIconMap[cert.icon] ?? <Award size={16} />}
 </span>
 {cert.name}
 </div>
 ))}
 </div>
 </motion.div>
 </div>
 </section>
 )
}

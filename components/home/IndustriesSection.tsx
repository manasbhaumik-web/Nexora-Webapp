'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
 GraduationCap,
 Heart,
 Factory,
 Truck,
 ShoppingCart,
 Landmark,
 Building2,
 ArrowRight,
 ChevronRight
} from 'lucide-react'
import { industries } from '@/lib/data/industries'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
 GraduationCap, Heart, Factory, Truck, ShoppingCart, Landmark, Building2,
}

export function IndustriesSection() {
 const [activeTab, setActiveTab] = useState(0)
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, margin: "-100px" })

 const activeIndustry = industries[activeTab]
 const ActiveIcon = iconMap[activeIndustry.icon] ?? Building2

 return (
 <section ref={ref} className="relative py-24 lg:py-32 bg-white/5 font-sans border-t border-white/10 ">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Section Header */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
 transition={{ duration: 0.6 }}
 className="mb-12 lg:mb-16"
 >
 <div className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase text-gray-300 mb-6 rounded-full">
 <span className="w-2 h-2 bg-[#00D4FF] block rounded-full" />
 Vertical Solutions
 </div>
 <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-[1.1]">
 Engineered for <br className="hidden lg:block"/>
 <span className="text-gray-400">every sector.</span>
 </h2>
 </motion.div>

 {/* Structural Tabs Layout */}
 <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-white/5 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
 
 {/* Left: Tab List */}
 <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col bg-white/5 ">
 {industries.map((ind, i) => {
 const Icon = iconMap[ind.icon] ?? Building2
 const isActive = activeTab === i
 return (
 <button
 key={ind.name}
 onClick={() => setActiveTab(i)}
 className={cn(
 "flex items-center justify-between p-6 text-left transition-all duration-200 border-b border-white/5 last:border-b-0 cursor-pointer",
 isActive ? "bg-[#8B5CF6] text-white shadow-[inset_4px_0_0_0_#00D4FF]" : "hover:bg-white/10 text-gray-400 hover:text-white"
 )}
 >
 <div className="flex items-center gap-4">
 <Icon size={20} className={isActive ? "text-white" : "text-gray-400"} />
 <span className={cn("font-bold text-sm tracking-wide text-white")}>
 {ind.name}
 </span>
 </div>
 {isActive && <ChevronRight size={18} className="text-white" />}
 </button>
 )
 })}
 </div>

 {/* Right: Tab Content */}
 <div className="lg:col-span-8 bg-[#0F172A] relative overflow-hidden flex flex-col">
 <AnimatePresence mode="wait">
 <motion.div
 key={activeIndustry.name}
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -20 }}
 transition={{ duration: 0.3, ease: "easeInOut" }}
 className="flex flex-col h-full p-8 lg:p-12"
 >
 {/* Header */}
 <div className="flex items-start justify-between mb-8">
 <div className="flex items-center gap-4">
 <div className="p-3 bg-white/5 border border-violet-500/30 text-[#00D4FF] rounded-xl shadow-[0_0_15px_rgba(0,212,255,0.2)]">
 <ActiveIcon size={28} />
 </div>
 <h3 className="font-black text-3xl tracking-tight text-white">
 {activeIndustry.name}
 </h3>
 </div>
 </div>

 <p className="text-lg text-gray-300 font-medium mb-10 max-w-2xl leading-relaxed">
 {activeIndustry.description}
 </p>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/10 pt-10">
 {/* Challenges */}
 <div>
 <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Key Friction Points</h4>
 <ul className="space-y-4">
 {activeIndustry.challenges.map(c => (
 <li key={c} className="flex items-start gap-3">
 <span className="w-1.5 h-1.5 bg-rose-500 mt-2 flex-shrink-0 rounded-full shadow-[0_0_8px_#F43F5E]" />
 <span className="text-sm font-medium text-gray-300 leading-relaxed">{c}</span>
 </li>
 ))}
 </ul>
 </div>

 {/* Solutions */}
 <div>
 <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Our Infrastructure</h4>
 <ul className="space-y-4">
 {activeIndustry.solutions.map(s => (
 <li key={s} className="flex items-start gap-3">
 <span className="w-1.5 h-1.5 bg-emerald-400 mt-2 flex-shrink-0 rounded-full shadow-[0_0_8px_#34D399]" />
 <span className="text-sm font-medium text-gray-300 leading-relaxed">{s}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>

 <div className="mt-auto pt-10 flex items-center justify-between">
 <div className="flex gap-8">
 {activeIndustry.stats.map(stat => (
 <div key={stat.label} className="flex flex-col">
 <span className="text-2xl font-black tracking-tighter text-white">{stat.value}</span>
 <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">{stat.label}</span>
 </div>
 ))}
 </div>
 
 <a href={`/services`} className="group hidden lg:inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00D4FF] hover:text-white transition-colors cursor-pointer">
 Explore Architecture <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
 </a>
 </div>
 </motion.div>
 </AnimatePresence>
 </div>
 </div>

 </div>
 </section>
 )
}

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
 Calendar,
 CheckSquare,
 Globe,
 Briefcase,
 Clock,
} from 'lucide-react'
import { companyStats } from '@/lib/data/technologies'
import { cn } from '@/lib/utils'

const PRIMARY = "#FFFFFF"
const SECONDARY = "#8B5CF6"

const iconMap: Record<string, React.ReactNode> = {
 Calendar: <Calendar size={20} />,
 CheckSquare: <CheckSquare size={20} />,
 Globe: <Globe size={20} />,
 Briefcase: <Briefcase size={20} />,
 Clock: <Clock size={20} />,
}

function AnimatedCounter({ target, suffix, isVisible }: { target: number, suffix: string, isVisible: boolean }) {
 return (
 <span className="font-black text-4xl lg:text-5xl text-white tabular-nums tracking-tighter">
 {target}
 <span style={{ color: SECONDARY }}>{suffix}</span>
 </span>
 )
}

export function CompanyHighlights() {
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, margin: "-50px" })

 return (
 <section ref={ref} className="bg-white/5 font-sans border-t border-white/10 ">
 <div className="max-w-7xl mx-auto">
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-x border-white/10 ">
 {companyStats.map((stat, i) => (
 <motion.div
 key={stat.label}
 initial={{ opacity: 0, y: 20 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
 transition={{ duration: 0.5, delay: i * 0.1 }}
 className={cn(
 'flex flex-col items-start p-8 border-b lg:border-b-0 border-white/10 hover:bg-white/10 hover:border-violet-500/40 transition-colors',
 i !== 4 && 'border-r'
 )}
 >
 <div 
 className="p-2 mb-6 rounded-xl shadow-[0_0_15px_rgba(255,122,0,0.2)]"
 style={{ backgroundColor: 'rgba(255, 122, 0, 0.1)', borderColor: 'rgba(255, 122, 0, 0.3)', color: '#FF7A00' }}
 >
 {iconMap[stat.icon]}
 </div>
 <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isInView} />
 <p className="mt-2 text-xs font-bold tracking-widest uppercase text-gray-400">
 {stat.label}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 )
}

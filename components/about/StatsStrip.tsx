'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, CheckSquare, Globe, Briefcase, Clock } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
 Calendar,
 CheckSquare,
 Globe,
 Briefcase,
 Clock,
}

interface Stat {
 label: string
 value: number
 suffix: string
 icon: string
}

interface StatsStripProps {
 stats: Stat[]
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
 const [count, setCount] = useState(0)
 const ref = useRef<HTMLSpanElement>(null)
 const started = useRef(false)

 useEffect(() => {
 const el = ref.current
 if (!el) return
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting && !started.current) {
 started.current = true
 const start = performance.now()
 const duration = 2000
 const animate = (now: number) => {
 const elapsed = now - start
 const progress = Math.min(elapsed / duration, 1)
 const ease = 1 - Math.pow(1 - progress, 3)
 setCount(Math.round(ease * value))
 if (progress < 1) requestAnimationFrame(animate)
 }
 requestAnimationFrame(animate)
 }
 },
 { threshold: 0.5 }
 )
 observer.observe(el)
 return () => observer.disconnect()
 }, [value])

 return (
 <span ref={ref} className="tabular-nums">
 {count}
 {suffix}
 </span>
 )
}

export function StatsStrip({ stats }: StatsStripProps) {
 return (
 <section className="bg-[#0F172A] py-14 border-y border-white/10">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
 {stats.map((stat) => {
 const Icon = iconMap[stat.icon] ?? Calendar
 return (
 <div key={stat.label} className="text-center">
 <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-3">
 <Icon className="w-5 h-5 text-violet-400" />
 </div>
 <div className="font-heading font-bold text-3xl lg:text-4xl text-white mb-1">
 <AnimatedCounter value={stat.value} suffix={stat.suffix} />
 </div>
 <p className="text-gray-400 text-sm">{stat.label}</p>
 </div>
 )
 })}
 </div>
 </div>
 </section>
 )
}

'use client'

import { useRef, MouseEvent } from 'react'
import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue, useInView } from 'framer-motion'
import { ArrowRight, Check, Package } from 'lucide-react'
import { featuredProducts } from '@/lib/data/products'
import { cn } from '@/lib/utils'

const PRIMARY = "#FFFFFF"
const SECONDARY = "#8B5CF6"

function BentoBox({ children, className, delay = 0, isContrast = false }: { children: React.ReactNode; className?: string; delay?: number; isContrast?: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const glowColor = isContrast ? "rgba(139, 92, 246, 0.2)" : "rgba(0, 212, 255, 0.2)"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative bg-white/5 overflow-hidden transition-all duration-300 border border-white/10 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] cursor-pointer',
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 h-full flex flex-col p-8 lg:p-10">{children}</div>
    </motion.div>
  )
}

export function FeaturedProducts() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 lg:py-32 bg-[#0F172A] border-t border-white/10 overflow-hidden font-sans">
      {/* Background blueprint grid lines */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase mb-6 rounded-full text-white">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF] block" />
            Core Products
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
            Enterprise architecture, <br />
            <span className="text-gradient">precision engineered.</span>
          </h2>
          <p className="text-lg text-gray-300 font-medium leading-relaxed">
            Explore our suite of scalable, high-performance platforms designed to power the next generation of global businesses.
          </p>
        </motion.div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => {
            const isContrast = index % 3 === 1

            return (
              <BentoBox 
                key={product.id} 
                delay={index * 0.1}
                className="rounded-2xl"
                isContrast={isContrast}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-[#00D4FF] group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:border-[#8B5CF6] transition-all duration-300">
                    <Package size={24} />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-violet-400">
                    {product.shortName}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="font-black tracking-tight text-white mb-3 text-2xl group-hover:text-[#00D4FF] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="mt-4 mb-8 space-y-3">
                  {product.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check size={14} className="mt-0.5 flex-shrink-0 text-emerald-400" />
                      <span className="text-xs font-bold text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link 
                    href={`/products/${product.slug}`}
                    className="group/link inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-colors text-[#00D4FF] hover:text-white"
                  >
                    Explore Architecture
                    <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </BentoBox>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/products"
            className="btn-secondary inline-flex items-center justify-center gap-3 group"
          >
            View All Platforms
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  )
}

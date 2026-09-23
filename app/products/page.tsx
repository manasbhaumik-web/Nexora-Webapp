'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  GraduationCap, Users, LayoutGrid, Users2, UserCheck, BarChart2,
  Package, Truck, Heart, MessageSquare, TrendingUp, PieChart,
  Briefcase, DollarSign, Cpu, ChevronRight, CheckCircle, ArrowRight
} from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { products, productCategories } from '@/lib/data/products'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap, Users, LayoutGrid, Users2, UserCheck, BarChart2,
  Package, Truck, Heart, MessageSquare, TrendingUp, PieChart,
  Briefcase, DollarSign, Cpu,
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const Icon = iconMap[product.icon] ?? Package

  return (
    <article className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] flex flex-col h-full group cursor-pointer">
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#00D4FF] group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:border-[#8B5CF6] transition-all duration-300">
          <Icon className="w-7 h-7" />
        </div>
        <span className="badge-accent">{product.category}</span>
      </div>

      <h2 className="font-heading text-2xl font-bold text-white leading-tight mb-2 group-hover:text-[#00D4FF] transition-colors">
        {product.name}
      </h2>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
        {product.tagline}
      </p>

      {/* Modules */}
      <div className="mb-6 border-t border-white/10 pt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
          Key Modules
        </p>
        <ul className="grid grid-cols-2 gap-2">
          {product.modules.slice(0, 6).map((mod) => (
            <li key={mod} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              {mod}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {product.techStack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-[11px] rounded-md bg-white/5 text-gray-300 border border-white/10">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-auto border-t border-white/10 pt-5 flex items-center justify-between">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors"
        >
          View Specs & Architecture <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#0F172A] pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-white/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-600/25 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gray-400 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 opacity-60" />
              <span className="text-white font-medium">Products</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[11px] font-bold tracking-widest uppercase text-gray-300 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full animate-pulse bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]" />
                Proprietary Software Platforms
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold mb-6 leading-tight tracking-tight">
                Enterprise Products & <span className="text-gradient">Platforms</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                Pre-built, modular enterprise software solutions designed to deploy rapidly and scale effortlessly across education, healthcare, logistics, and finance.
              </p>
            </div>
          </div>
        </section>

        {/* ── Filter Bar ── */}
        <section className="sticky top-0 z-30 border-b border-white/10 bg-[#0F172A]/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveCategory('All')}
                className={cn(
                  'px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer border',
                  activeCategory === 'All'
                    ? 'bg-[#8B5CF6] text-white border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
                )}
              >
                All Products ({products.length})
              </button>
              {productCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.label)}
                  className={cn(
                    'px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer border whitespace-nowrap',
                    activeCategory.toLowerCase() === cat.label.toLowerCase()
                      ? 'bg-[#8B5CF6] text-white border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Product Grid ── */}
        <section className="py-24 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-[#0F172A] border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold mb-4">
              Need a customized platform demonstration?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our solution architects can tailor a live demo with simulated enterprise data for your management team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Schedule Live Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                View Custom Development
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  Filter,
  ArrowRight,
  Quote,
  Briefcase,
  Globe,
  CheckSquare,
  Building2,
  Zap,
  TrendingUp,
  Layers,
  Award,
} from 'lucide-react'
import { portfolioProjects } from '@/lib/data/portfolio'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const industryColors: Record<string, { bar: string; badge: string }> = {
  Education: { bar: 'from-blue-500 to-cyan-400', badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30' },
  Finance: { bar: 'from-emerald-500 to-teal-400', badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' },
  Logistics: { bar: 'from-amber-500 to-orange-400', badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30' },
  Retail: { bar: 'from-violet-500 to-fuchsia-400', badge: 'bg-violet-500/10 text-violet-300 border-violet-500/30' },
  Manufacturing: { bar: 'from-orange-500 to-red-400', badge: 'bg-orange-500/10 text-orange-300 border-orange-500/30' },
  Healthcare: { bar: 'from-rose-500 to-pink-400', badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30' },
}

const industries = ['All', ...Array.from(new Set(portfolioProjects.map((p) => p.industry)))]

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('is-visible'); obs.disconnect() } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref} className={cn('anim-fade-up', className)}>{children}</div>
}

interface StatCounterProps {
  end: number
  suffix?: string
  label: string
  icon: React.ReactNode
}

function StatCounter({ end, suffix = '', label, icon }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        obs.disconnect()
        let start = 0
        const duration = 1800
        const stepTime = 30
        const steps = duration / stepTime
        const increment = end / steps
        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, stepTime)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [end])

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-[#00D4FF] border border-violet-500/30 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
        {icon}
      </div>
      <div className="font-heading text-4xl font-extrabold text-white">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm font-semibold text-gray-300">{label}</div>
    </div>
  )
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.industry === activeFilter)

  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-[#0F172A] text-white selection:bg-violet-500 selection:text-white">
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden bg-[#0F172A] pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-white/10">
          {/* Background Grid & Ambient Blur Orbs */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0" />
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-violet-600/25 rounded-full blur-[130px] pointer-events-none mix-blend-screen z-0" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D4FF]/20 rounded-full blur-[130px] pointer-events-none mix-blend-screen z-0" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4 opacity-60" />
              <span className="text-white font-medium">Portfolio</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 border border-violet-500/30 bg-violet-500/10 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-widest uppercase text-violet-300 rounded-full mb-6 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <Zap className="w-3.5 h-3.5 text-[#00D4FF]" />
                Proven Enterprise Solutions
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
                Our Client <span className="text-gradient">Portfolio & Success Stories</span>
              </h1>
              
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
                Discover how Nexora Technologies powers digital transformation for universities, regional healthcare systems, global logistics hubs, and financial institutions across Southeast Asia.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sticky Filter Bar ── */}
        <section className="sticky top-20 z-30 border-b border-white/10 bg-[#0F172A]/90 backdrop-blur-2xl shadow-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 overflow-x-auto py-4 scrollbar-hide">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mr-2 flex-shrink-0">
                <Filter className="h-4 w-4 text-[#00D4FF]" aria-hidden />
                Industry Filter:
              </div>

              {industries.map((industry) => {
                const isActive = activeFilter === industry
                return (
                  <button
                    key={industry}
                    onClick={() => setActiveFilter(industry)}
                    aria-pressed={isActive}
                    className={cn(
                      'flex-shrink-0 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer',
                      isActive
                        ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white border-violet-400 shadow-[0_0_25px_rgba(139,92,246,0.6)] scale-105'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white active:scale-95'
                    )}
                  >
                    {industry}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Projects Bento Grid ── */}
        <section className="py-20 lg:py-28 bg-[#0F172A]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {filtered.map((project, idx) => {
                const colorConfig = industryColors[project.industry] ?? {
                  bar: 'from-violet-500 to-fuchsia-500',
                  badge: 'bg-violet-500/10 text-violet-300 border-violet-500/30'
                }

                return (
                  <AnimatedSection
                    key={project.id}
                    className={cn(idx % 2 === 1 && 'delay-150')}
                  >
                    <article className="group flex h-full flex-col overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.25)] hover:bg-white/[0.08]">
                      {/* Top Gradient Accent Bar */}
                      <div className={`h-2 w-full bg-gradient-to-r ${colorConfig.bar}`} />

                      <div className="flex flex-1 flex-col p-8 sm:p-9">
                        {/* Header Badges */}
                        <div className="mb-5 flex flex-wrap items-center gap-2">
                          <span className={`badge ${colorConfig.badge}`}>
                            {project.industry}
                          </span>
                          <span className="badge bg-white/5 text-gray-300 border-white/10">
                            Year: {project.year}
                          </span>
                          <span className="badge bg-white/5 text-gray-300 border-white/10">
                            Duration: {project.duration}
                          </span>
                        </div>

                        {/* Title & Client */}
                        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-snug group-hover:text-[#00D4FF] transition-colors mb-2">
                          {project.title}
                        </h2>
                        <div className="flex items-center gap-2 text-sm font-bold text-violet-400 mb-4">
                          <Building2 className="w-4 h-4 text-[#00D4FF]" />
                          {project.client}
                        </div>

                        {/* Challenge Statement */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                          {project.challenge}
                        </p>

                        {/* High-Contrast 2x2 Metric Stat Cards */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {project.metrics.map((m) => (
                            <div
                              key={m.label}
                              className="p-4 rounded-2xl bg-gradient-to-br from-violet-950/40 via-slate-900/60 to-black/40 border border-white/10 group-hover:border-violet-500/30 transition-colors"
                            >
                              <div className="font-heading text-2xl font-extrabold text-[#00D4FF] drop-shadow">
                                {m.value}
                              </div>
                              <div className="text-xs font-semibold text-gray-300 mt-1 leading-tight">
                                {m.label}
                              </div>
                              {m.improvement && (
                                <div className="text-[11px] font-bold text-emerald-400 mt-1">
                                  {m.improvement}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 text-gray-300 border border-white/10">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Client Testimonial Quote */}
                        {project.testimonial && (
                          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 mb-6 relative">
                            <Quote className="h-5 w-5 text-violet-400 mb-2 opacity-80" aria-hidden />
                            <p className="text-sm italic text-gray-200 leading-relaxed">
                              "{project.testimonial.quote}"
                            </p>
                            <div className="mt-3 text-xs font-bold text-violet-300">
                              — {project.testimonial.author}, <span className="text-gray-400 font-normal">{project.testimonial.role} ({project.testimonial.company})</span>
                            </div>
                          </div>
                        )}

                        {/* Action CTA */}
                        <div className="mt-auto border-t border-white/10 pt-6">
                          <Link
                            href={`/case-studies/${project.slug}`}
                            className="btn-primary w-full py-3.5 text-xs flex items-center justify-center gap-2 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
                          >
                            Read Full Case Study
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </AnimatedSection>
                )
              })}
            </div>

            {filtered.length === 0 && (
              <div className="py-24 text-center text-gray-400">
                <Building2 className="mx-auto mb-4 h-14 w-14 text-violet-400 opacity-40 animate-pulse" />
                <h3 className="font-heading text-xl font-bold text-white mb-2">No projects found</h3>
                <p className="text-sm text-gray-400">Try selecting a different industry filter above.</p>
              </div>
            )}
          </div>
        </section>

        {/* ── Stats Strip ── */}
        <section className="bg-white/[0.02] border-y border-white/10 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatCounter
                end={portfolioProjects.length}
                suffix="+"
                label="Case Studies Published"
                icon={<CheckSquare className="h-7 w-7" />}
              />
              <StatCounter
                end={portfolioProjects.length}
                label="Enterprise Clients"
                icon={<Briefcase className="h-7 w-7" />}
              />
              <StatCounter
                end={industries.length - 1}
                label="Core Industry Sectors"
                icon={<Globe className="h-7 w-7" />}
              />
              <StatCounter
                end={250}
                suffix="+"
                label="Total Projects Deployed"
                icon={<Award className="h-7 w-7" />}
              />
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-24 bg-[#0F172A] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-10 lg:p-14 rounded-3xl bg-gradient-to-br from-violet-950/40 via-slate-900/80 to-black/60 border border-violet-500/30 shadow-[0_0_50px_rgba(139,92,246,0.2)]">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Ready to transform your software capabilities?
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Partner with Nexora Technologies to build high-performance, enterprise-grade software solutions tailored to your organization.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary py-4 px-8 text-sm">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies" className="btn-secondary py-4 px-8 text-sm">
                  Explore Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

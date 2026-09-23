import Link from 'next/link'
import { ArrowRight, ChevronRight, Clock } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { portfolioProjects } from '@/lib/data/portfolio'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Case Studies',
  description: 'Real problems. Proven solutions. Measurable results. Read how Nexora Technology transformed organisations across Southeast Asia.',
}

const accentBars: Record<string, string> = {
  Education: 'bg-blue-500',
  Finance: 'bg-emerald-500',
  Logistics: 'bg-amber-500',
  Retail: 'bg-violet-500',
  Manufacturing: 'bg-orange-500',
  Healthcare: 'bg-rose-500',
}

export default function CaseStudiesPage() {
  const [featured, ...rest] = portfolioProjects

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#0F172A] pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-white/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-600/25 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D4FF]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gray-400 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 opacity-60" />
              <span className="text-white font-medium">Case Studies</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[11px] font-bold tracking-widest uppercase text-gray-300 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full animate-pulse bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                Proven Client Outcomes
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold mb-6 leading-tight tracking-tight">
                Enterprise <span className="text-gradient">Case Studies</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                Real problems. Proven solutions. Measurable results. Explore how we have partnered with organisations to deliver transformative outcomes through purposeful software.
              </p>
            </div>
          </div>
        </section>

        {/* ── Featured Case Study ── */}
        <section className="py-24 bg-[#0F172A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D4FF] mb-2">Featured Transformation</div>
              <h2 className="font-heading text-3xl font-bold text-white">Our Most Recent Work</h2>
            </div>

            <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.25)] transition-all duration-300">
              <div className={cn('h-1.5 w-full', accentBars[featured.industry] ?? 'bg-violet-500')} />
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Main content */}
                <div className="lg:col-span-3 p-8 lg:p-12">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="badge-accent">{featured.industry}</span>
                    <span className="badge-gray">{featured.year}</span>
                    <span className="badge-gray flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {featured.duration}
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-white mb-2 leading-snug">
                    {featured.title}
                  </h3>
                  <p className="text-sm font-semibold text-violet-400 mb-6">{featured.client}</p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">The Challenge</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{featured.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">The Solution</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{featured.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {featured.techStack.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/10">{t}</span>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${featured.slug}`}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Read Full Case Study <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Metrics sidebar */}
                <div className="lg:col-span-2 bg-white/5 p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Key Validated Metrics</h4>
                    <div className="space-y-4">
                      {featured.metrics.map((m) => (
                        <div key={m.label} className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="font-heading text-3xl font-bold text-emerald-400">{m.value}</div>
                          <div className="text-xs text-gray-400 mt-1">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {featured.testimonial && (
                    <blockquote className="mt-8 border-t border-white/10 pt-6">
                      <p className="text-xs italic text-gray-300 leading-relaxed mb-3">
                        "{featured.testimonial.quote}"
                      </p>
                      <cite className="not-italic text-xs font-bold text-violet-400 block">
                        — {featured.testimonial.author}, {featured.testimonial.role}
                      </cite>
                    </blockquote>
                  )}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ── Case Studies Grid ── */}
        <section className="py-24 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-2">All Case Studies</div>
              <h2 className="font-heading text-3xl font-bold text-white">More Client Impact Stories</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((project) => (
                <article
                  key={project.id}
                  className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all duration-300 flex flex-col h-full group cursor-pointer"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="badge-accent">{project.industry}</span>
                    <span className="badge-gray">{project.year}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs font-bold text-violet-400 mb-4">{project.client}</p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {project.challenge}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                        <div className="font-heading text-lg font-bold text-emerald-400">{m.value}</div>
                        <div className="text-[10px] text-gray-400 truncate mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-4 mt-auto flex items-center justify-between">
                    <Link
                      href={`/case-studies/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors"
                    >
                      View Case Study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

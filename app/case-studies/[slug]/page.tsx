import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
 ChevronRight,
 Clock,
 Calendar,
 Building2,
 Tag,
 Quote,
 ArrowRight,
 CheckCircle,
 TrendingUp,
 BarChart3,
 Layers,
} from 'lucide-react'
import { portfolioProjects } from '@/lib/data/portfolio'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

interface Props {
 params: { slug: string }
}

export async function generateStaticParams() {
 return portfolioProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
 const project = portfolioProjects.find((p) => p.slug === params.slug)
 if (!project) return {}
 return {
 title: project.title,
 description: `Case study: ${project.challenge.slice(0, 155)}`,
 }
}

const accentBars: Record<string, string> = {
 Education: 'bg-blue-500',
 Finance: 'bg-emerald-500',
 Logistics: 'bg-amber-500',
 Retail: 'bg-violet-500',
 Manufacturing: 'bg-orange-500',
 Healthcare: 'bg-rose-500',
}

const industryBadge: Record<string, string> = {
  Education: 'badge-accent',
  Finance: 'badge-success',
  Logistics: 'bg-amber-500/10 text-amber-300 border border-amber-500/30 badge',
  Retail: 'bg-violet-500/10 text-violet-300 border border-violet-500/30 badge',
  Manufacturing: 'bg-orange-500/10 text-orange-300 border border-orange-500/30 badge',
  Healthcare: 'bg-rose-500/10 text-rose-300 border border-rose-500/30 badge',
}

export default function CaseStudyPage({ params }: Props) {
 const project = portfolioProjects.find((p) => p.slug === params.slug)
 if (!project) notFound()

 const related = portfolioProjects
 .filter((p) => p.slug !== project.slug)
 .sort(() => 0.5 - Math.random())
 .slice(0, 2)

 const approachPoints = project.solution
 .split(/[.!?]+/)
 .map((s) => s.trim())
 .filter((s) => s.length > 20)
 .slice(0, 3)

 return (
    <>
      <Navbar />
      <main id="main-content">
 {/* ── Hero ── */}
 <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28">
 <div className="absolute inset-0 bg-grid-pattern opacity-40" />
 <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
 {/* Breadcrumb */}
 <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-blue-300 flex-wrap">
 <Link href="/" className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="h-4 w-4 opacity-60" />
 <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
 <ChevronRight className="h-4 w-4 opacity-60" />
 <span className="text-white font-medium line-clamp-1">{project.title}</span>
 </nav>

 {/* Badges */}
 <div className="mb-5 flex flex-wrap gap-2">
 <span className={cn(industryBadge[project.industry] ?? 'badge-accent')}>{project.industry}</span>
 <span className="badge bg-white/5 text-blue-200 border-white/10">
 <Calendar className="h-3 w-3" aria-hidden /> {project.year}
 </span>
 <span className="badge bg-white/5 text-blue-200 border-white/10">
 <Clock className="h-3 w-3" aria-hidden /> {project.duration}
 </span>
 </div>

 <h1 className="font-heading text-display-sm font-bold text-white lg:text-display-md max-w-3xl leading-tight">
 {project.title}
 </h1>
 <p className="mt-3 text-xl font-semibold text-accent-light">{project.client}</p>
 </div>
 </section>

 {/* ── Body ── */}
 <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
 <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
 {/* ── Main Content ── */}
 <div className="lg:col-span-2 space-y-14">

 {/* 1. Business Challenge */}
 <section aria-labelledby="section-challenge">
 <div className="flex items-center gap-3 mb-5">
 <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 border border-red-100">
 <BarChart3 className="h-5 w-5 text-red-600" aria-hidden />
 </div>
 <h2 id="section-challenge" className="font-heading text-heading-xl font-bold text-white">
 The Business Challenge
 </h2>
 </div>
 <div className="rounded-2xl border border-border bg-red-50/30 p-6 lg:p-8">
 <p className="text-body-lg text-gray-300 leading-relaxed">{project.challenge}</p>
 <div className="mt-5 rounded-xl bg-white/5 border border-red-100 px-5 py-4">
 <p className="text-sm font-semibold text-muted-fg uppercase tracking-wide mb-1">Industry Context</p>
 <p className="text-body-sm text-gray-300">
 This challenge is common across the <strong>{project.industry}</strong> sector in Southeast Asia, where digital transformation pressure is accelerating and legacy systems struggle to meet modern demands.
 </p>
 </div>
 </div>
 </section>

 {/* 2. Proposed Solution */}
 <section aria-labelledby="section-solution">
 <div className="flex items-center gap-3 mb-5">
 <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-blue-100">
 <Layers className="h-5 w-5 text-blue-600" aria-hidden />
 </div>
 <h2 id="section-solution" className="font-heading text-heading-xl font-bold text-white">
 Our Proposed Solution
 </h2>
 </div>
 <div className="rounded-2xl border border-border bg-white/5/30 p-6 lg:p-8">
 <p className="text-body-lg text-gray-300 leading-relaxed">{project.solution}</p>
 {approachPoints.length > 0 && (
 <div className="mt-6">
 <h3 className="font-heading text-sm font-semibold text-muted-fg uppercase tracking-wide mb-3">Key Approach Points</h3>
 <ul className="space-y-3">
 {approachPoints.map((point, i) => (
 <li key={i} className="flex items-start gap-3">
 <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" aria-hidden />
 <span className="text-body-sm text-gray-300">{point}.</span>
 </li>
 ))}
 </ul>
 </div>
 )}
 </div>
 </section>

 {/* 3. Technology Stack */}
 <section aria-labelledby="section-tech">
 <div className="flex items-center gap-3 mb-5">
 <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 border border-violet-100">
 <Tag className="h-5 w-5 text-violet-600" aria-hidden />
 </div>
 <h2 id="section-tech" className="font-heading text-heading-xl font-bold text-white">
 Technology Stack
 </h2>
 </div>
 <div className="rounded-2xl border border-border bg-white/5 p-6 lg:p-8">
 <p className="text-body-sm text-muted-fg mb-5">
 We selected a purpose-built stack tailored to the scale, integration complexity, and security requirements of this project.
 </p>
 <div className="flex flex-wrap gap-3">
 {project.techStack.map((tech) => (
 <div
 key={tech}
 className="rounded-xl border border-border bg-muted px-4 py-2.5 text-sm font-semibold font-heading text-white"
 >
 {tech}
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* 4. Results Achieved */}
 <section aria-labelledby="section-results">
 <div className="flex items-center gap-3 mb-5">
 <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
 <TrendingUp className="h-5 w-5 text-emerald-600" aria-hidden />
 </div>
 <h2 id="section-results" className="font-heading text-heading-xl font-bold text-white">
 Results Achieved
 </h2>
 </div>

 {/* Metrics large stat cards */}
 <div className="grid grid-cols-2 gap-4 mb-6">
 {project.metrics.map((m) => (
 <div
 key={m.label}
 className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6"
 >
 <div className="font-heading text-3xl font-bold text-emerald-400">{m.value}</div>
 <div className="mt-1 text-sm text-muted-fg font-medium">{m.label}</div>
 {m.improvement && (
 <div className="mt-1 text-xs text-emerald-600 font-semibold">{m.improvement}</div>
 )}
 </div>
 ))}
 </div>

 <div className="rounded-2xl border border-border bg-white/5 p-6 lg:p-8">
 <h3 className="font-heading text-sm font-semibold text-muted-fg uppercase tracking-wide mb-4">Detailed Outcomes</h3>
 <ul className="space-y-3">
 {project.results.map((result, i) => (
 <li key={i} className="flex items-start gap-3">
 <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-600 mt-0.5" aria-hidden />
 <span className="text-body-md text-gray-300">{result}</span>
 </li>
 ))}
 </ul>
 </div>
 </section>

 {/* 5. Client Testimonial */}
 {project.testimonial && (
 <section aria-labelledby="section-testimonial">
 <div className="flex items-center gap-3 mb-5">
 <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-navy/20">
 <Quote className="h-5 w-5 text-white" aria-hidden />
 </div>
 <h2 id="section-testimonial" className="font-heading text-heading-xl font-bold text-white">
 Client Testimonial
 </h2>
 </div>
 <div className="relative rounded-2xl bg-gradient-to-br from-navy to-slate-800 p-8 lg:p-10">
 <Quote className="absolute top-6 right-6 h-10 w-10 text-slate-200" aria-hidden />
 <p className="text-xl italic font-light text-white leading-relaxed">
 "{project.testimonial.quote}"
 </p>
 <div className="mt-8 flex items-center gap-4">
 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-heading text-lg font-bold text-white">
 {project.testimonial.author.charAt(0)}
 </div>
 <div>
 <p className="font-heading font-bold text-white">{project.testimonial.author}</p>
 <p className="text-sm text-blue-300">{project.testimonial.role}</p>
 <p className="text-sm text-blue-400">{project.testimonial.company}</p>
 </div>
 </div>
 </div>
 </section>
 )}
 </div>

 {/* ── Sidebar ── */}
 <aside className="space-y-6">
 {/* Client info card */}
 <div className="card p-6">
 <h3 className="font-heading text-heading-sm font-bold text-white mb-4 flex items-center gap-2">
 <Building2 className="h-5 w-5 text-accent" aria-hidden /> Client Details
 </h3>
 <dl className="space-y-3 text-sm">
 <div>
 <dt className="text-xs font-semibold text-muted-fg uppercase tracking-wide">Client</dt>
 <dd className="mt-0.5 font-semibold text-white">{project.client}</dd>
 </div>
 <div>
 <dt className="text-xs font-semibold text-muted-fg uppercase tracking-wide">Industry</dt>
 <dd className="mt-0.5">
 <span className={cn(industryBadge[project.industry] ?? 'badge-accent')}>{project.industry}</span>
 </dd>
 </div>
 <div>
 <dt className="text-xs font-semibold text-muted-fg uppercase tracking-wide">Year</dt>
 <dd className="mt-0.5 text-gray-300">{project.year}</dd>
 </div>
 <div>
 <dt className="text-xs font-semibold text-muted-fg uppercase tracking-wide">Duration</dt>
 <dd className="mt-0.5 text-gray-300">{project.duration}</dd>
 </div>
 </dl>
 </div>

 {/* Tech used */}
 <div className="card p-6">
 <h3 className="font-heading text-heading-sm font-bold text-white mb-4">Technologies Used</h3>
 <div className="flex flex-wrap gap-2">
 {project.techStack.map((t) => (
 <span key={t} className="badge-gray text-xs">{t}</span>
 ))}
 </div>
 </div>

 {/* CTA card */}
 <div className="rounded-2xl bg-gradient-cta p-6 text-center">
 <h3 className="font-heading text-heading-sm font-bold text-white mb-2">
 Have a similar challenge?
 </h3>
 <p className="text-sm text-blue-200 mb-4">
 Let us design a solution for your organisation.
 </p>
 <Link href="/contact" className="btn-primary w-full justify-center">
 Get in Touch <ArrowRight className="h-4 w-4" aria-hidden />
 </Link>
 <Link href="/portfolio" className="btn-outline mt-3 w-full justify-center">
 More Projects
 </Link>
 </div>
 </aside>
 </div>
 </div>

 {/* ── Related Case Studies ── */}
 <section className="section-padding bg-background border-t border-border">
 <div className="mx-auto max-w-7xl px-6 lg:px-8">
 <div className="mb-10">
 <div className="section-eyebrow mb-2">More Success Stories</div>
 <h2 className="font-heading text-heading-xl font-bold text-white">Related Case Studies</h2>
 </div>
 <div className="grid gap-8 sm:grid-cols-2">
 {related.map((rel) => (
 <article key={rel.id} className="card-hover overflow-hidden">
 <div className={cn('h-1.5 w-full', accentBars[rel.industry] ?? 'bg-accent')} />
 <div className="p-6">
 <div className="mb-4 flex flex-wrap gap-2">
 <span className={cn(industryBadge[rel.industry] ?? 'badge-accent')}>{rel.industry}</span>
 <span className="badge-gray">{rel.year}</span>
 </div>
 <h3 className="font-heading text-heading-md font-bold text-white">{rel.title}</h3>
 <p className="mt-1 text-sm font-semibold text-accent">{rel.client}</p>
 <p className="mt-3 line-clamp-2 text-body-sm text-muted-fg">{rel.challenge}</p>
 <div className="mt-4 flex flex-wrap gap-1.5">
 {rel.metrics.slice(0, 2).map((m) => (
 <div key={m.label} className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-xs">
 <span className="font-bold text-emerald-400">{m.value}</span>
 <span className="ml-1 text-muted-fg">{m.label}</span>
 </div>
 ))}
 </div>
 <div className="mt-5 border-t border-border pt-4">
 <Link
 href={`/case-studies/${rel.slug}`}
 className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-accent hover:gap-3 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
 >
 Read Case Study <ArrowRight className="h-4 w-4" aria-hidden />
 </Link>
 </div>
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

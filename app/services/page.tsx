import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Code2, Globe, Smartphone, Cloud, Cpu, Zap, Lightbulb, GitMerge,
  Shield, RefreshCw, Lock, ChevronRight, CheckCircle, ArrowRight,
  Search, FileText, Wrench, LifeBuoy, Users, Award, MessageCircle
} from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { services } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Technology Services',
  description:
    'From custom software development and cloud migration to AI automation and cybersecurity — explore Nexora Technology\'s full suite of enterprise IT services.',
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Globe, Smartphone, Cloud, Cpu, Zap, Lightbulb, GitMerge, Shield, RefreshCw, Lock,
}

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We invest time to deeply understand your business context, goals, current systems, and pain points.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Assess',
    description: 'Our architects assess your technical landscape, risks, and opportunities to define the optimal solution path.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Propose',
    description: 'We present a detailed solution proposal — scope, architecture, timeline, and investment — with full transparency.',
    icon: Lightbulb,
  },
  {
    number: '04',
    title: 'Build',
    description: 'Agile delivery in short sprints. Regular demos, continuous integration, and client feedback built into every cycle.',
    icon: Wrench,
  },
  {
    number: '05',
    title: 'Support',
    description: 'Post-launch, our team monitors, maintains, and iterates. Long-term partnership, not one-and-done delivery.',
    icon: LifeBuoy,
  },
]

const differentiators = [
  {
    icon: Award,
    title: 'Deep Domain Expertise',
    description:
      'Our consultants and engineers carry domain knowledge across 12+ industries. We understand your sector\'s regulatory requirements, workflows, and terminology — not just the technology.',
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    description:
      'We deliver in iterative sprints with working software every two weeks. Faster value, tighter feedback loops, and the flexibility to adapt as your needs evolve.',
  },
  {
    icon: MessageCircle,
    title: 'Transparent Communication',
    description:
      'No surprises. Dedicated project managers, weekly status reports, and real-time project dashboards keep you fully informed at every stage.',
  },
  {
    icon: Users,
    title: 'Long-Term Partnership',
    description:
      'Our clients have an average tenure of 6+ years. We measure success by your outcomes — and we stay engaged long after go-live to ensure you achieve them.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#0F172A] pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-white/10">
          <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity z-0" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920&auto=format&fit=crop')` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/90 to-[#0F172A] z-0" />
          <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-600/25 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D4FF]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gray-400 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 opacity-60" />
              <span className="text-white font-medium">Services</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[11px] font-bold tracking-widest uppercase text-gray-300 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full animate-pulse bg-violet-500 shadow-[0_0_8px_#8B5CF6]" />
                Full-Lifecycle IT Capabilities
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold mb-6 leading-tight tracking-tight">
                Enterprise <span className="text-gradient">Technology Services</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                End-to-end IT capabilities designed to modernise legacy systems, accelerate cloud adoption, automate workflows, and build proprietary software assets.
              </p>
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="py-24 bg-[#0F172A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Code2
                const isNeonAccent = index % 2 === 1

                return (
                  <div
                    key={service.id}
                    id={service.slug}
                    className={`p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer group flex flex-col ${
                      isNeonAccent ? 'hover:border-[#00D4FF]/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]' : 'hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 transition-all duration-300 ${
                      isNeonAccent ? 'text-[#00D4FF] group-hover:bg-[#00D4FF] group-hover:text-white' : 'text-violet-400 group-hover:bg-violet-600 group-hover:text-white'
                    }`}>
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h2 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    <div className="border-t border-white/10 pt-6 mt-auto">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Core Deliverables</div>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.items.slice(0, 4).map((item) => (
                          <span key={item} className="px-2.5 py-1 text-[11px] rounded-md bg-white/5 text-gray-300 border border-white/10">
                            {item}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/contact?service=${service.slug}`}
                        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                          isNeonAccent ? 'text-[#00D4FF] hover:text-white' : 'text-violet-400 hover:text-white'
                        }`}
                      >
                        Request Consultation <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Standardized Delivery Process ── */}
        <section className="py-24 bg-[#0F172A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D4FF] mb-3">Proven Framework</div>
              <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold">
                Our 5-Step Delivery Pipeline
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step) => {
                const IconComponent = step.icon
                return (
                  <div key={step.number} className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition-all duration-300 cursor-pointer text-center group">
                    <span className="font-mono text-2xl font-bold text-[#00D4FF] mb-4 block">{step.number}</span>
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-4 text-white group-hover:bg-violet-600 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Differentiators ── */}
        <section className="py-24 bg-[#0F172A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-3">Why Choose Nexora</div>
              <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold">
                Engineered for High-Stakes Environments
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {differentiators.map((diff) => {
                const IconComponent = diff.icon
                return (
                  <div key={diff.title} className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#00D4FF]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#00D4FF]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white mb-2">{diff.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{diff.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold mb-4">
              Need a custom engineering solution?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a technical discovery call with our solutions team to map your requirements and timeline.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Init Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import Link from 'next/link'
import {
  Award, Shield, CheckCircle, Cloud, ArrowRight,
  Layers, Server, Database, Globe, Cpu, Zap, Lock, TrendingUp, ChevronRight
} from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { techStack, certifications } from '@/lib/data/technologies'

export const metadata = {
  title: 'Technology Stack',
  description: 'Explore the proven, enterprise-grade technologies Nexora uses to build secure, scalable, and high-performance software solutions.',
}

const categoryMeta: Record<
  string,
  { label: string; description: string; icon: React.ReactNode }
> = {
  frontend: {
    label: 'Frontend Frameworks',
    description: 'Modern, component-based UI frameworks that deliver fast, accessible, and responsive user interfaces.',
    icon: <Layers className="h-6 w-6" />,
  },
  backend: {
    label: 'Backend & APIs',
    description: 'High-performance server-side frameworks and microservice runtimes powering secure, scalable business logic.',
    icon: <Server className="h-6 w-6" />,
  },
  database: {
    label: 'Databases & Storage',
    description: 'Reliable relational and NoSQL databases selected for high transaction volume and analytical speed.',
    icon: <Database className="h-6 w-6" />,
  },
  cloud: {
    label: 'Cloud & Infrastructure',
    description: 'Enterprise cloud platforms and container orchestration enabling 99.99% uptime and dynamic autoscaling.',
    icon: <Globe className="h-6 w-6" />,
  },
  ai: {
    label: 'AI & Machine Learning',
    description: 'Cutting-edge AI models, vector search, and intelligent automation platforms that power enterprise insights.',
    icon: <Cpu className="h-6 w-6" />,
  },
}

const certIconMap: Record<string, React.ReactNode> = {
  Award: <Award className="h-6 w-6 text-amber-400" />,
  Shield: <Shield className="h-6 w-6 text-[#00D4FF]" />,
  CheckCircle: <CheckCircle className="h-6 w-6 text-emerald-400" />,
  Cloud: <Cloud className="h-6 w-6 text-violet-400" />,
}

const whyPoints = [
  {
    icon: <CheckCircle className="h-6 w-6 text-emerald-400" />,
    title: 'Battle-Tested & Proven',
    body: 'Every technology in our stack has been proven across 250+ enterprise projects. We never use unproven tools in production.',
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-[#00D4FF]" />,
    title: 'Built to Scale',
    body: 'Our architecture decisions are made with scale in mind — from high-velocity startups to multi-region enterprise traffic.',
  },
  {
    icon: <Lock className="h-6 w-6 text-violet-400" />,
    title: 'Security-First Design',
    body: 'Security is embedded at every layer. We apply ISO 27001 controls and PDPA data protection across all stack layers.',
  },
  {
    icon: <Zap className="h-6 w-6 text-amber-400" />,
    title: 'Vendor Partnered',
    body: 'We maintain Gold/Advanced partner status with Microsoft, AWS, and Google Cloud — giving clients priority support.',
  },
]

export default function TechnologiesPage() {
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
              <span className="text-white font-medium">Technologies</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[11px] font-bold tracking-widest uppercase text-gray-300 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full animate-pulse bg-violet-500 shadow-[0_0_8px_#8B5CF6]" />
                Enterprise Infrastructure
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold mb-6 leading-tight tracking-tight">
                Our <span className="text-gradient">Technology Stack</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                We build exclusively with modern, industry-standard frameworks and cloud platforms — delivering exceptional performance, maintainability, and security.
              </p>
            </div>
          </div>
        </section>

        {/* ── Categories Sections ── */}
        <section className="py-24 bg-[#0F172A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {Object.entries(techStack).map(([catKey, items], idx) => {
              const meta = categoryMeta[catKey] ?? {
                label: catKey,
                description: '',
                icon: <Layers className="h-6 w-6" />,
              }
              const isEven = idx % 2 === 0

              return (
                <div key={catKey} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center ${isEven ? 'text-[#00D4FF]' : 'text-violet-400'}`}>
                      {meta.icon}
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-white">{meta.label}</h2>
                      <p className="text-gray-400 text-sm max-w-2xl mt-0.5">{meta.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {items.map((item) => (
                      <div
                        key={item.name}
                        className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
                      >
                        <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center font-mono font-bold text-2xl text-white mb-4 group-hover:border-[#00D4FF] group-hover:text-[#00D4FF] group-hover:scale-110 transition-all duration-300">
                          {item.logo}
                        </div>
                        <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">{item.name}</h3>
                        <p className="text-gray-400 text-xs leading-relaxed font-medium">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Why Our Stack ── */}
        <section className="py-24 bg-[#0F172A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D4FF] mb-3">Architecture Principles</div>
              <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold">
                Why We Select These Technologies
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyPoints.map((pt) => (
                <div key={pt.title} className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                    {pt.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{pt.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{pt.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Certifications Strip ── */}
        <section className="py-24 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-2">Verified Standard</div>
              <h2 className="font-heading text-3xl font-bold text-white">Partner Certifications</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="inline-flex items-center gap-4 px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl text-white font-bold text-xs uppercase tracking-widest hover:border-[#00D4FF] hover:shadow-[0_0_25px_rgba(0,212,255,0.3)] transition-all duration-300 cursor-pointer"
                >
                  {certIconMap[cert.icon] ?? <Award className="h-6 w-6 text-[#00D4FF]" />}
                  <span>{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-[#0F172A] border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold mb-4">
              Have specific technology requirements?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our architects are experienced in integrating with existing legacy systems, enterprise ERPs, and custom internal APIs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss Tech Architecture
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

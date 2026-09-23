import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronRight, Quote, Star, Target, Lightbulb, Shield, Users,
  Zap, Handshake, Award, CheckCircle, Cloud, Globe,
  Linkedin, ArrowRight
} from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { teamMembers } from '@/lib/data/content'
import { StatsStrip } from '@/components/about/StatsStrip'
import { companyStats } from '@/lib/data/technologies'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Nexora Technology — our story, mission, leadership team, core values, and the certifications that set us apart in enterprise software.',
}

const timeline = [
  {
    year: '2012',
    title: 'Founded',
    description:
      'Nexora Technology was founded in Kuala Lumpur with a vision to deliver world-class enterprise software solutions to businesses across Asia.',
    icon: '🚀',
  },
  {
    year: '2015',
    title: '50 Clients Milestone',
    description:
      'Reached 50 happy clients — including universities, hospitals, and manufacturing firms — cementing our reputation for on-time, on-budget delivery.',
    icon: '🎯',
  },
  {
    year: '2018',
    title: '100+ Employees',
    description:
      'Our team surpassed 100 talented engineers, consultants, and designers. Expanded to Singapore and Indonesia to serve the wider ASEAN market.',
    icon: '👥',
  },
  {
    year: '2020',
    title: 'Cloud-First Pivot',
    description:
      'Achieved Microsoft Gold Partner status and launched our managed cloud practice. Accelerated cloud migration for 40+ clients during the pandemic.',
    icon: '☁️',
  },
  {
    year: '2022',
    title: 'AI Solutions Launched',
    description:
      'Launched our AI & Analytics practice — bringing machine learning, NLP, and intelligent automation to enterprise clients across Southeast Asia.',
    icon: '🤖',
  },
  {
    year: '2024',
    title: '180+ Clients, 12 Countries',
    description:
      'Today Nexora serves 180+ organisations across 12 countries. ISO 27001 & ISO 9001 certified with a portfolio spanning 12+ industry sectors.',
    icon: '🌏',
  },
]

const coreValues = [
  {
    icon: Star,
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standards in every line of code, every client interaction, and every deliverable we produce.',
    color: 'text-amber-400',
    border: 'hover:border-amber-400/40',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We continuously explore emerging technologies and creative solutions to help our clients stay ahead of the curve.',
    color: 'text-violet-400',
    border: 'hover:border-violet-400/40',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We operate with radical transparency — honest advice, realistic timelines, and clear communication at every step.',
    color: 'text-emerald-400',
    border: 'hover:border-emerald-400/40',
  },
  {
    icon: Target,
    title: 'Client-Focus',
    description:
      'Our clients\' success is our success. We measure outcomes, not outputs — and stay engaged long after go-live.',
    color: 'text-rose-400',
    border: 'hover:border-rose-400/40',
  },
  {
    icon: Zap,
    title: 'Agility',
    description:
      'We adapt quickly. Agile delivery means faster value, shorter feedback loops, and resilience in the face of change.',
    color: 'text-cyan-400',
    border: 'hover:border-cyan-400/40',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    description:
      'Great software is built together. We embed with our clients\' teams to co-create solutions that truly fit.',
    color: 'text-fuchsia-400',
    border: 'hover:border-fuchsia-400/40',
  },
]

const certifications = [
  { name: 'ISO 27001', subtitle: 'Information Security', icon: Shield, color: 'text-[#00D4FF]' },
  { name: 'ISO 9001', subtitle: 'Quality Management', icon: CheckCircle, color: 'text-emerald-400' },
  { name: 'Microsoft Gold Partner', subtitle: 'Cloud & Software', icon: Award, color: 'text-amber-400' },
  { name: 'AWS Advanced Partner', subtitle: 'Cloud Infrastructure', icon: Cloud, color: 'text-orange-400' },
  { name: 'Google Cloud Partner', subtitle: 'AI & Data Services', icon: Globe, color: 'text-violet-400' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#0F172A] pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-white/10">
          <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity z-0" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop')` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/90 to-[#0F172A] z-0" />
          <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-600/25 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gray-400 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 opacity-60" />
              <span className="text-white font-medium">About Us</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[11px] font-bold tracking-widest uppercase text-gray-300 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full animate-pulse bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]" />
                Our Heritage & Mission
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold mb-6 leading-tight tracking-tight">
                Engineering <span className="text-gradient">Purposeful Software</span> Since 2012
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                Partnering with enterprises across Southeast Asia to engineer scalable cloud platforms, custom enterprise applications, and intelligent AI architectures that transform business outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className="py-24 bg-[#0F172A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission */}
              <div className="p-8 lg:p-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center mb-6 text-violet-400">
                  <Target className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-2">Our Mission</div>
                <h2 className="font-heading text-2xl lg:text-3xl text-white font-bold mb-4">
                  Turning technology into competitive advantage
                </h2>
                <div className="relative pl-6 border-l-2 border-violet-500 mb-6">
                  <Quote className="w-6 h-6 text-violet-400/40 absolute -top-1 -left-1" />
                  <p className="text-gray-300 italic leading-relaxed">
                    &ldquo;To empower every organisation we work with through purposeful technology — software that simplifies operations, accelerates growth, and creates lasting value.&rdquo;
                  </p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We believe enterprise software should be a strategic asset, not a operational bottleneck. Every architecture we design starts with a deep understanding of your business goals.
                </p>
              </div>

              {/* Vision */}
              <div className="p-8 lg:p-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#00D4FF]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center mb-6 text-[#00D4FF]">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D4FF] mb-2">Our Vision</div>
                <h2 className="font-heading text-2xl lg:text-3xl text-white font-bold mb-4">
                  Southeast Asia&apos;s most trusted technology partner
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We envision a region where organisations of every scale leverage world-class software infrastructure to compete globally.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Through continuous innovation, engineering excellence, and unwavering commitment to client outcomes, we aim to lead the digital transformation of enterprise Asia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Strip ── */}
        <StatsStrip stats={companyStats} />

        {/* ── Core Values ── */}
        <section className="py-24 bg-[#0F172A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-3">Our Culture</div>
              <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold">
                Values That Guide <span className="text-gradient">Every Line of Code</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((val) => {
                const Icon = val.icon
                return (
                  <div
                    key={val.title}
                    className={`p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 ${val.border} hover:-translate-y-1 hover:shadow-2xl cursor-pointer group`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 ${val.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-xl text-white font-bold mb-2 group-hover:text-white transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{val.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-24 bg-[#0F172A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D4FF] mb-3">Our Journey</div>
              <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold">
                A Decade of Enterprise Growth
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timeline.map((item) => (
                <div key={item.year} className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-bold text-[#00D4FF]">{item.year}</span>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-heading text-lg text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Certifications & Leadership ── */}
        <section className="py-24 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-3">Trust & Standards</div>
              <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold mb-4">
                Certified Enterprise Partners
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {certifications.map((cert) => {
                const Icon = cert.icon
                return (
                  <div key={cert.name} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-center hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300">
                    <div className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 ${cert.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="font-heading text-sm font-bold text-white mb-1">{cert.name}</div>
                    <div className="text-[11px] text-gray-400 font-medium">{cert.subtitle}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-[#0F172A] border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold mb-4">
              Ready to partner with an engineering leader?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our technology strategists and explore how we can elevate your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Work Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

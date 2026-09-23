'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ChevronRight, MapPin, Clock, Briefcase, Users, Zap, TrendingUp,
  Heart, DollarSign, Shield, Home, BookOpen, Calendar, Gift,
  Star, Coffee, X, Send, CheckCircle, GraduationCap, Award, Cpu, ArrowRight
} from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { careers } from '@/lib/data/content'
import { cn } from '@/lib/utils'

interface CultureCard {
  icon: React.ReactNode
  title: string
  body: string
}

const cultureCards: CultureCard[] = [
  {
    icon: <Zap className="h-7 w-7 text-violet-400" />,
    title: 'Innovation First',
    body: 'We encourage bold thinking and give every engineer space to experiment, propose, and build cutting-edge solutions.',
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-[#00D4FF]" />,
    title: 'Accelerated Growth',
    body: 'Career paths here are accelerated. We invest in certifications, technical mentorship, and high-impact enterprise projects.',
  },
  {
    icon: <Users className="h-7 w-7 text-emerald-400" />,
    title: 'Cross-Domain Collaboration',
    body: 'Siloed work doesn\'t exist at Nexora. We cross-pollinate across engineering, AI research, cloud architecture, and design.',
  },
  {
    icon: <Heart className="h-7 w-7 text-rose-400" />,
    title: 'High-Stakes Impact',
    body: 'Every line of code creates real-world impact — powering national universities, regional hospitals, and global logistics networks.',
  },
]

const benefits = [
  { icon: <DollarSign className="h-5 w-5 text-emerald-400" />, title: 'Competitive Compensation', desc: 'Market-leading pay reviewed annually' },
  { icon: <Shield className="h-5 w-5 text-[#00D4FF]" />, title: 'Comprehensive Health', desc: 'Medical, dental & optical coverage' },
  { icon: <Home className="h-5 w-5 text-violet-400" />, title: 'Flexible Work Model', desc: 'Hybrid model with remote flexibility' },
  { icon: <BookOpen className="h-5 w-5 text-amber-400" />, title: 'Annual Learning Budget', desc: 'MYR 3,000/year for certs & courses' },
  { icon: <Calendar className="h-5 w-5 text-rose-400" />, title: 'Generous Leave', desc: '18 days annual leave + public holidays' },
  { icon: <Gift className="h-5 w-5 text-fuchsia-400" />, title: 'Performance Bonus', desc: 'Annual bonus tied to outcomes' },
  { icon: <Star className="h-5 w-5 text-orange-400" />, title: 'Clear Career Tracks', desc: 'Defined paths to Lead & Principal roles' },
  { icon: <Coffee className="h-5 w-5 text-gray-300" />, title: 'Quarterly Offsites', desc: 'Team retreats & technical hackathons' },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof careers[0] | null>(null)
  const [applied, setApplied] = useState(false)

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault()
    setApplied(true)
  }

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
              <span className="text-white font-medium">Careers</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[11px] font-bold tracking-widest uppercase text-gray-300 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full animate-pulse bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                Join Our Engineering Team
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold mb-6 leading-tight tracking-tight">
                Build the Future of <span className="text-gradient">Enterprise Software</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                We are looking for passionate software engineers, cloud architects, AI researchers, and solution consultants who thrive on solving complex enterprise problems.
              </p>
            </div>
          </div>
        </section>

        {/* ── Culture Section ── */}
        <section className="py-24 bg-[#0F172A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D4FF] mb-3">Our Culture</div>
              <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold">
                Why Engineers Thrive at Nexora
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cultureCards.map((c) => (
                <div key={c.title} className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                    {c.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits Grid ── */}
        <section className="py-24 bg-[#0F172A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-3">Perks & Benefits</div>
              <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold">
                Designed for Performance & Well-being
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#00D4FF]/40 transition-all duration-300 flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex-shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white mb-1">{b.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Open Positions ── */}
        <section id="open-positions" className="py-24 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D4FF] mb-3">Current Opportunities</div>
              <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold">
                Explore Open Roles
              </h2>
            </div>
            <div className="space-y-4">
              {careers.map((job) => (
                <div
                  key={job.id}
                  className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="badge-accent">{job.department}</span>
                      <span className="text-xs text-gray-400 font-mono">{job.type}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-violet-400" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-violet-400" /> {job.experience}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="btn-primary sm:w-auto text-xs py-3 px-6 uppercase tracking-widest font-bold"
                  >
                    View Job & Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-[#0F172A] border border-white/10 rounded-2xl p-8 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => { setSelectedJob(null); setApplied(false) }}
                className="absolute top-6 right-6 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              {applied ? (
                <div className="py-12 text-center">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                  <p className="text-gray-300 text-sm mb-6">Our talent acquisition team will review your application for {selectedJob.title}.</p>
                  <button onClick={() => { setSelectedJob(null); setApplied(false) }} className="btn-secondary">Close</button>
                </div>
              ) : (
                <div>
                  <span className="badge-accent mb-3">{selectedJob.department}</span>
                  <h2 className="font-heading text-2xl font-bold text-white mb-2">{selectedJob.title}</h2>
                  <p className="text-gray-400 text-sm mb-6">{selectedJob.location} • {selectedJob.type}</p>
                  
                  <div className="border-t border-white/10 pt-6 mb-6 space-y-4 text-sm text-gray-300">
                    <p className="leading-relaxed">{selectedJob.description}</p>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-gray-400">
                      <strong className="text-white block mb-1">Requirements:</strong>
                      Experience level required: {selectedJob.experience}. Looking for passionate engineers and designers ready to solve complex technical challenges.
                    </div>
                  </div>

                  <form onSubmit={handleApply} className="border-t border-white/10 pt-6 space-y-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-1">Full Name</label>
                      <input required type="text" className="form-input" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-1">Email Address</label>
                      <input required type="email" className="form-input" placeholder="you@domain.com" />
                    </div>
                    <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2">
                      Submit Application <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}

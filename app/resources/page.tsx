'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen, FileText, Download, Mail, ArrowRight,
  Clock, Tag, User, ChevronRight, CheckCircle, Building2,
  Cloud, Cpu, Layers, Send
} from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { blogPosts } from '@/lib/data/content'
import { cn } from '@/lib/utils'

interface Whitepaper {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  pages: string
  updated: string
}

const whitepapers: Whitepaper[] = [
  {
    id: 'dt-guide',
    icon: <Layers className="h-7 w-7 text-violet-400" />,
    title: 'Digital Transformation Guide 2024',
    description:
      'A practical framework for planning and executing a digital transformation. Covers readiness assessment, roadmap design, change management, and measuring ROI.',
    pages: '42 pages',
    updated: 'July 2024',
  },
  {
    id: 'erp-framework',
    icon: <Building2 className="h-7 w-7 text-[#00D4FF]" />,
    title: 'ERP Selection Framework',
    description:
      'A vendor-neutral guide to selecting and implementing an ERP. Includes evaluation scorecards, RFP templates, and a decision matrix for mid-market enterprises.',
    pages: '28 pages',
    updated: 'June 2024',
  },
  {
    id: 'cloud-checklist',
    icon: <Cloud className="h-7 w-7 text-emerald-400" />,
    title: 'Cloud Migration Checklist',
    description:
      'A 120-point checklist for planning and executing a cloud migration to Azure or AWS. Covers discovery, planning, execution, security, and optimisation phases.',
    pages: '18 pages',
    updated: 'May 2024',
  },
  {
    id: 'ai-enterprise',
    icon: <Cpu className="h-7 w-7 text-amber-400" />,
    title: 'AI in Enterprise: Practical Guide',
    description:
      'Cut through the hype — this guide covers practical AI use cases for enterprise, how to identify high-ROI AI opportunities, and implementation considerations.',
    pages: '35 pages',
    updated: 'August 2024',
  },
]

function WhitepaperCard({ paper }: { paper: Whitepaper }) {
  const [downloaded, setDownloaded] = useState(false)
  return (
    <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 flex flex-col h-full group cursor-pointer">
      <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {paper.icon}
      </div>
      <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
        {paper.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
        {paper.description}
      </p>
      <div className="border-t border-white/10 pt-4 mt-auto flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
          <span>{paper.pages}</span>
          <span>•</span>
          <span>{paper.updated}</span>
        </div>
        <button
          onClick={() => setDownloaded(true)}
          className={cn(
            'inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer',
            downloaded ? 'text-emerald-400' : 'text-[#00D4FF] hover:text-white'
          )}
        >
          {downloaded ? (
            <>
              <CheckCircle className="h-4 w-4" /> PDF Sent
            </>
          ) : (
            <>
              <Download className="h-4 w-4" /> Download PDF
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default function ResourcesPage() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSent, setNewsletterSent] = useState(false)

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail) return
    setNewsletterSent(true)
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
              <span className="text-white font-medium">Resources</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[11px] font-bold tracking-widest uppercase text-gray-300 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full animate-pulse bg-violet-500 shadow-[0_0_8px_#8B5CF6]" />
                Knowledge Base & Insights
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold mb-6 leading-tight tracking-tight">
                Insights for <span className="text-gradient">Technology Leaders</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                Explore our technical whitepapers, architecture guides, and engineering articles to help guide your organization&apos;s digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* ── Whitepapers Section ── */}
        <section className="py-24 bg-[#0F172A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D4FF] mb-3">Free Downloads</div>
              <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold">
                Enterprise Whitepapers & Frameworks
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whitepapers.map((paper) => (
                <WhitepaperCard key={paper.id} paper={paper} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Articles Grid ── */}
        <section className="py-24 bg-[#0F172A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-3">Latest Articles</div>
              <h2 className="font-heading text-3xl lg:text-4xl text-white font-bold">
                Engineering & Architecture Insights
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 flex flex-col h-full group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge-accent">{post.category}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="border-t border-white/10 pt-4 mt-auto flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1.5 font-medium">
                      <User className="w-3.5 h-3.5 text-violet-400" /> {post.author}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Newsletter Section ── */}
        <section className="py-24 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 lg:p-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-center relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center mx-auto mb-6 text-violet-400">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-white mb-3">
                Stay Ahead of Technology Trends
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
                Join 12,000+ technology leaders receiving our monthly breakdown of enterprise cloud, AI architectures, and software engineering best practices.
              </p>
              {newsletterSent ? (
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold">
                  <CheckCircle className="w-5 h-5" /> You are subscribed! Thank you.
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work email..."
                    className="form-input flex-1"
                  />
                  <button type="submit" className="btn-primary sm:w-auto flex items-center gap-2">
                    Subscribe <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

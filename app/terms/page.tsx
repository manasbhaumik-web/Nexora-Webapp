import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, FileText, Scale } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service and legal agreements for Nexora Technologies software solutions.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden bg-[#0F172A] pt-32 pb-20 border-b border-white/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gray-400 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 opacity-60" />
              <span className="text-white font-medium">Terms of Service</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[#00D4FF]">
                <Scale className="w-5 h-5" />
              </div>
              <span className="badge-accent">Legal Agreements</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-400 text-sm">Effective Date: January 15, 2026</p>
          </div>
        </section>

        <section className="py-16 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 space-y-8 leading-relaxed">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <h2 className="font-heading text-xl font-bold text-white mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-violet-400" /> 1. Agreement Overview
              </h2>
              <p className="text-sm text-gray-300">
                These Terms of Service govern your access to and use of Nexora Technologies websites, products, APIs, and enterprise cloud solutions. By accessing our services, you agree to comply with these terms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">2. Enterprise Software Licensing</h2>
              <p className="text-sm text-gray-300">
                All software products (LMS, CMS, ERP, HRMS, and proprietary modules) are delivered under formal Master Services Agreements (MSA) or Software-as-a-Service (SaaS) subscription contracts signed with authorized client representatives.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">3. Intellectual Property Rights</h2>
              <p className="text-sm text-gray-300">
                Nexora Technologies retains all intellectual property rights to its core frameworks, proprietary algorithms, and brand assets. Custom code built under client SOWs is assigned according to contract specifications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">4. Contact Information</h2>
              <p className="text-sm text-gray-300">
                For legal inquiries regarding our terms, please contact legal counsel at <a href="mailto:legal@nexoratech.com" className="text-[#00D4FF] underline">legal@nexoratech.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

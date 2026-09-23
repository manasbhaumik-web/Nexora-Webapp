import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, Lock, FileText } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and data protection practices for Nexora Technologies.',
}

export default function PrivacyPage() {
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
              <span className="text-white font-medium">Privacy Policy</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="badge-accent">Legal & Compliance</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-sm">Last updated: January 15, 2026</p>
          </div>
        </section>

        <section className="py-16 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 space-y-8 leading-relaxed">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <h2 className="font-heading text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#00D4FF]" /> 1. Commitment to Privacy
              </h2>
              <p className="text-sm text-gray-300">
                At Nexora Technologies, we take data privacy and enterprise security with utmost priority. This policy outlines how we collect, process, and safeguard information provided by visitors, clients, and partners using our software products and services.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">2. Information Collection & Usage</h2>
              <p className="text-sm">We collect information provided directly through website forms (such as demo requests, consultations, and job applications). This includes:</p>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-400">
                <li>Contact Information (Full Name, Business Email Address, Phone Number, Organization Name)</li>
                <li>Project Specifications & Service Preferences</li>
                <li>Employment Application Details for Career Seekers</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">3. Data Security & Storage</h2>
              <p className="text-sm">
                All transmitted data is encrypted in-transit (TLS 1.3) and at-rest (AES-256). We maintain strict role-based access controls, vulnerability scanning, and ISO 27001-aligned security frameworks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">4. Your Rights</h2>
              <p className="text-sm">
                You retain full right to access, rectify, or request deletion of your personal contact data stored in our communication systems. For privacy requests, email <a href="mailto:privacy@nexoratech.com" className="text-[#00D4FF] underline">privacy@nexoratech.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

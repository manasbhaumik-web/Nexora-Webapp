'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Mail, Phone, MapPin, Linkedin, MessageSquare, ChevronRight,
  CheckCircle, Send, Clock, Calendar, BarChart3, ArrowRight, Building2
} from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { services } from '@/lib/data/services'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  name: z.string().min(2, 'Full name must be at least 2 characters.'),
  company: z.string().min(2, 'Company name is required.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  country: z.string().min(1, 'Please select your country.'),
  service: z.string().min(1, 'Please select a service.'),
  description: z.string().min(30, 'Please describe your project in at least 30 characters.'),
})
type FormValues = z.infer<typeof formSchema>

const asianCountries = [
  'Malaysia', 'Singapore', 'Indonesia', 'Thailand', 'Philippines', 'Vietnam',
  'Myanmar', 'Cambodia', 'Brunei', 'Laos', 'India', 'Bangladesh', 'Sri Lanka',
  'Pakistan', 'China', 'Hong Kong', 'Taiwan', 'Japan', 'South Korea',
  'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
  'Australia', 'New Zealand', 'United Kingdom', 'United States', 'Global / Other',
]

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) })

  const onSubmit = async (_data: FormValues) => {
    await new Promise((res) => setTimeout(res, 1200))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-16 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-5 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
        <p className="max-w-sm text-gray-300 text-sm leading-relaxed mb-6">
          Thank you for reaching out. Our engineering team will review your inquiry and respond within 2 business hours.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-secondary">
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className={cn('form-input', errors.name && 'border-rose-500 focus:ring-rose-500')}
            placeholder="Ahmad Farouk"
          />
          {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name.message}</p>}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300">
            Company Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="company"
            type="text"
            {...register('company')}
            className={cn('form-input', errors.company && 'border-rose-500 focus:ring-rose-500')}
            placeholder="Acuity Holdings"
          />
          {errors.company && <p className="mt-1 text-xs text-rose-400">{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300">
            Work Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={cn('form-input', errors.email && 'border-rose-500 focus:ring-rose-500')}
            placeholder="ahmad@acuity.com"
          />
          {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="form-input"
            placeholder="+60 12-345 6789"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Country */}
        <div>
          <label htmlFor="country" className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300">
            Country / Region <span className="text-rose-500">*</span>
          </label>
          <select
            id="country"
            {...register('country')}
            className={cn('form-input bg-[#0F172A]', errors.country && 'border-rose-500')}
          >
            <option value="">Select country...</option>
            {asianCountries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.country && <p className="mt-1 text-xs text-rose-400">{errors.country.message}</p>}
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300">
            Service Required <span className="text-rose-500">*</span>
          </label>
          <select
            id="service"
            {...register('service')}
            className={cn('form-input bg-[#0F172A]', errors.service && 'border-rose-500')}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
            <option value="other">Other / General Inquiry</option>
          </select>
          {errors.service && <p className="mt-1 text-xs text-rose-400">{errors.service.message}</p>}
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300">
          Project Details & Requirements <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          {...register('description')}
          className={cn('form-input resize-none', errors.description && 'border-rose-500')}
          placeholder="Tell us about your project scope, target timeline, key integrations, and expected outcomes..."
        />
        {errors.description && <p className="mt-1 text-xs text-rose-400">{errors.description.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full py-4 uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 group"
      >
        {isSubmitting ? 'Transmitting Request...' : 'Submit Inquiry'}
        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  )
}

export default function ContactPage() {
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
              <span className="text-white font-medium">Contact</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[11px] font-bold tracking-widest uppercase text-gray-300 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full animate-pulse bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                2 Business Hour Response Guarantee
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold mb-6 leading-tight tracking-tight">
                Let&apos;s Build <span className="text-gradient">Something Remarkable</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                Have a project in mind, need technical advice, or want a demo of our software platforms? Our engineering team is ready.
              </p>
            </div>
          </div>
        </section>

        {/* ── Main Contact Section ── */}
        <section className="py-24 bg-[#0F172A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Form */}
              <div className="lg:col-span-7 p-8 lg:p-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-300">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-2">Direct Inquiry</div>
                <h2 className="font-heading text-2xl lg:text-3xl text-white font-bold mb-6">
                  Start Your Consultation
                </h2>
                <ContactForm />
              </div>

              {/* Right Column: Office info */}
              <div className="lg:col-span-5 space-y-6">
                {/* KL Office */}
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#00D4FF]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#00D4FF]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white">Kuala Lumpur HQ</h3>
                      <p className="text-xs text-gray-400 font-medium">Headquarters — Malaysia</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300 pt-2">
                    <p className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-violet-400 flex-shrink-0 mt-1" />
                      <span>Level 28, Menara Horizon, Jalan Tun Razak, 50400 Kuala Lumpur</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      <span>+60 (3) 2170 8888</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      <span>hello@nexoratech.com</span>
                    </p>
                  </div>
                </div>

                {/* Singapore Office */}
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-violet-400">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white">Singapore Office</h3>
                      <p className="text-xs text-gray-400 font-medium">ASEAN Hub — Singapore</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300 pt-2">
                    <p className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-1" />
                      <span>#14-02 Marina One West Tower, 9 Straits View, Singapore 018937</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#00D4FF] flex-shrink-0" />
                      <span>+65 6709 3100</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

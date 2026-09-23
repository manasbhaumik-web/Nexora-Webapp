'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { X, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────────

export type ModalType = 'demo' | 'consultation' | 'quote' | 'brochure'

interface LeadModalProps {
 /** Whether the modal is visible */
 isOpen: boolean
 /** Callback to close the modal */
 onClose: () => void
 /** Determines the modal copy */
 type?: ModalType
 /** Override the default title derived from type */
 title?: string
}

// ─── Copy Map ─────────────────────────────────────────────────────────────────

const MODAL_COPY: Record<ModalType, { title: string; subtitle: string; cta: string }> = {
 demo: {
 title: 'Request a Free Demo',
 subtitle: 'See our software in action. Fill in the form and our team will get back to you within 1 business day.',
 cta: 'Request Demo',
 },
 consultation: {
 title: 'Book a Consultation',
 subtitle: 'Get expert advice tailored to your business. Completely free, no commitment.',
 cta: 'Book Consultation',
 },
 quote: {
 title: 'Get a Custom Quote',
 subtitle: 'Tell us about your project and we\'ll prepare a detailed proposal for you.',
 cta: 'Get Quote',
 },
 brochure: {
 title: 'Download Brochure',
 subtitle: 'Enter your details and we\'ll send the full product brochure to your inbox.',
 cta: 'Send Brochure',
 },
}

const SERVICE_OPTIONS = [
 'Custom Software Development',
 'Web Development',
 'Mobile App Development',
 'Cloud Services',
 'AI & Automation',
 'Digital Transformation',
 'IT Consulting',
 'System Integration',
 'Managed Services',
 'DevOps Services',
 'Cybersecurity Services',
 'Learning Management System',
 'Student Management System',
 'ERP System',
 'CRM Solution',
 'HRMS',
 'Accounting & Finance System',
 'Inventory Management',
 'Logistics Management',
 'Hospital Management System',
]

const COUNTRIES = [
 'Malaysia', 'Singapore', 'Indonesia', 'Philippines', 'Thailand',
 'Vietnam', 'Myanmar', 'Cambodia', 'Brunei', 'India',
 'United Kingdom', 'United States', 'Australia', 'Other',
]

// ─── Form State ───────────────────────────────────────────────────────────────

interface FormData {
 name: string
 company: string
 email: string
 phone: string
 country: string
 service: string
 description: string
}

const INITIAL_FORM: FormData = {
 name: '',
 company: '',
 email: '',
 phone: '',
 country: '',
 service: '',
 description: '',
}

// ─── Component ───────────────────────────────────────────────────────────────

export function LeadModal({
 isOpen,
 onClose,
 type = 'demo',
 title,
}: LeadModalProps) {
 const [formData, setFormData] = useState<FormData>(INITIAL_FORM)
 const [errors, setErrors] = useState<Partial<FormData>>({})
 const [loading, setLoading] = useState(false)
 const [submitted, setSubmitted] = useState(false)
 const overlayRef = useRef<HTMLDivElement>(null)
 const firstInputRef = useRef<HTMLInputElement>(null)
 const copy = MODAL_COPY[type]
 const displayTitle = title ?? copy.title

 // Body scroll lock
 useEffect(() => {
 if (isOpen) {
 document.body.style.overflow = 'hidden'
 // Focus first input after short delay
 setTimeout(() => firstInputRef.current?.focus(), 80)
 } else {
 document.body.style.overflow = ''
 }
 return () => { document.body.style.overflow = '' }
 }, [isOpen])

 // Reset on open
 useEffect(() => {
 if (isOpen) {
 setFormData(INITIAL_FORM)
 setErrors({})
 setSubmitted(false)
 }
 }, [isOpen])

 // Escape key
 useEffect(() => {
 const handleKey = (e: KeyboardEvent) => {
 if (e.key === 'Escape' && isOpen) onClose()
 }
 document.addEventListener('keydown', handleKey)
 return () => document.removeEventListener('keydown', handleKey)
 }, [isOpen, onClose])

 // Backdrop click
 const handleBackdropClick = useCallback(
 (e: React.MouseEvent<HTMLDivElement>) => {
 if (e.target === overlayRef.current) onClose()
 },
 [onClose],
 )

 const handleChange = (
 e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
 ) => {
 const { name, value } = e.target
 setFormData((prev) => ({ ...prev, [name]: value }))
 if (errors[name as keyof FormData]) {
 setErrors((prev) => ({ ...prev, [name]: undefined }))
 }
 }

 const validate = (): boolean => {
 const newErrors: Partial<FormData> = {}
 if (!formData.name.trim()) newErrors.name = 'Full name is required'
 if (!formData.company.trim()) newErrors.company = 'Company name is required'
 if (!formData.email.trim()) {
 newErrors.email = 'Email is required'
 } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
 newErrors.email = 'Please enter a valid email'
 }
 if (!formData.country) newErrors.country = 'Please select a country'
 if (!formData.service) newErrors.service = 'Please select a service'
 setErrors(newErrors)
 return Object.keys(newErrors).length === 0
 }

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault()
 if (!validate()) return
 setLoading(true)
 // Simulate API request to CRM/Marketing system
 setTimeout(() => {
 setLoading(false)
 setSubmitted(true)
 // Auto-close after reading success message
 setTimeout(() => {
 onClose()
 }, 4000)
 }, 1200)
 }

 if (!isOpen) return null

 return (
 <div
 ref={overlayRef}
 role="dialog"
 aria-modal="true"
 aria-labelledby="lead-modal-title"
 className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
 onClick={handleBackdropClick}
 >
 <div
 className={cn(
 'relative w-full max-w-xl rounded-2xl bg-[#0F172A] border border-white/10 shadow-2xl shadow-violet-500/20',
 'max-h-[90vh] overflow-y-auto',
 'animate-fade-up',
 )}
 role="document"
 >
 {/* Close Button */}
 <button
 type="button"
 onClick={onClose}
 aria-label="Close modal"
 className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg text-muted-fg hover:bg-muted hover:text-white transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
 >
 <X size={18} />
 </button>

 {/* Header */}
 <div className="border-b border-border px-6 py-5 bg-gradient-subtle rounded-t-2xl">
 <div className="flex items-center gap-3">
 <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent font-heading text-lg font-bold text-white shadow-accent">
 N
 </span>
 <div>
 <h2 id="lead-modal-title" className="font-heading text-lg font-bold text-white">
 {displayTitle}
 </h2>
 <p className="text-xs text-muted-fg">{copy.subtitle}</p>
 </div>
 </div>
 </div>

 {/* Success State */}
 {submitted ? (
 <div className="flex flex-col items-center justify-center gap-5 px-6 py-14 text-center">
 <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
 <CheckCircle2 size={36} strokeWidth={1.5} />
 </div>
 <div>
 <h3 className="font-heading text-xl font-bold text-white">Request Received!</h3>
 <p className="mt-2 font-body text-muted-fg">
 Thank you, <strong className="text-white">{formData.name}</strong>. Our team will reach
 out to <strong className="text-white">{formData.email}</strong> within 1 business day.
 </p>
 </div>
 <button
 type="button"
 onClick={onClose}
 className="btn-primary"
 >
 Close <ArrowRight size={16} />
 </button>
 </div>
 ) : (
 /* Form */
 <form onSubmit={handleSubmit} noValidate className="px-6 py-6 space-y-4">
 {/* Row 1: Name + Company */}
 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
 <div>
 <label htmlFor="lead-name" className="mb-1.5 block text-sm font-semibold text-white">
 Full Name <span className="text-red-500" aria-hidden="true">*</span>
 </label>
 <input
 ref={firstInputRef}
 id="lead-name"
 name="name"
 type="text"
 autoComplete="name"
 value={formData.name}
 onChange={handleChange}
 className={cn(
 'form-input',
 errors.name && 'border-red-400 focus:ring-red-400',
 )}
 placeholder="John Smith"
 aria-describedby={errors.name ? 'lead-name-error' : undefined}
 aria-invalid={!!errors.name}
 />
 {errors.name && (
 <p id="lead-name-error" role="alert" className="mt-1 text-xs text-red-500">
 {errors.name}
 </p>
 )}
 </div>

 <div>
 <label htmlFor="lead-company" className="mb-1.5 block text-sm font-semibold text-white">
 Company <span className="text-red-500" aria-hidden="true">*</span>
 </label>
 <input
 id="lead-company"
 name="company"
 type="text"
 autoComplete="organization"
 value={formData.company}
 onChange={handleChange}
 className={cn(
 'form-input',
 errors.company && 'border-red-400 focus:ring-red-400',
 )}
 placeholder="Acme Corp"
 aria-describedby={errors.company ? 'lead-company-error' : undefined}
 aria-invalid={!!errors.company}
 />
 {errors.company && (
 <p id="lead-company-error" role="alert" className="mt-1 text-xs text-red-500">
 {errors.company}
 </p>
 )}
 </div>
 </div>

 {/* Row 2: Email + Phone */}
 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
 <div>
 <label htmlFor="lead-email" className="mb-1.5 block text-sm font-semibold text-white">
 Work Email <span className="text-red-500" aria-hidden="true">*</span>
 </label>
 <input
 id="lead-email"
 name="email"
 type="email"
 autoComplete="email"
 value={formData.email}
 onChange={handleChange}
 className={cn(
 'form-input',
 errors.email && 'border-red-400 focus:ring-red-400',
 )}
 placeholder="john@company.com"
 aria-describedby={errors.email ? 'lead-email-error' : undefined}
 aria-invalid={!!errors.email}
 />
 {errors.email && (
 <p id="lead-email-error" role="alert" className="mt-1 text-xs text-red-500">
 {errors.email}
 </p>
 )}
 </div>

 <div>
 <label htmlFor="lead-phone" className="mb-1.5 block text-sm font-semibold text-white">
 Phone
 </label>
 <input
 id="lead-phone"
 name="phone"
 type="tel"
 autoComplete="tel"
 value={formData.phone}
 onChange={handleChange}
 className="form-input"
 placeholder="+60 12-345 6789"
 />
 </div>
 </div>

 {/* Row 3: Country + Service */}
 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
 <div>
 <label htmlFor="lead-country" className="mb-1.5 block text-sm font-semibold text-white">
 Country <span className="text-red-500" aria-hidden="true">*</span>
 </label>
 <select
 id="lead-country"
 name="country"
 value={formData.country}
 onChange={handleChange}
 className={cn(
 'form-input',
 !formData.country && 'text-muted-fg',
 errors.country && 'border-red-400 focus:ring-red-400',
 )}
 aria-describedby={errors.country ? 'lead-country-error' : undefined}
 aria-invalid={!!errors.country}
 >
 <option value="" disabled>Select country</option>
 {COUNTRIES.map((c) => (
 <option key={c} value={c}>{c}</option>
 ))}
 </select>
 {errors.country && (
 <p id="lead-country-error" role="alert" className="mt-1 text-xs text-red-500">
 {errors.country}
 </p>
 )}
 </div>

 <div>
 <label htmlFor="lead-service" className="mb-1.5 block text-sm font-semibold text-white">
 Service Required <span className="text-red-500" aria-hidden="true">*</span>
 </label>
 <select
 id="lead-service"
 name="service"
 value={formData.service}
 onChange={handleChange}
 className={cn(
 'form-input',
 !formData.service && 'text-muted-fg',
 errors.service && 'border-red-400 focus:ring-red-400',
 )}
 aria-describedby={errors.service ? 'lead-service-error' : undefined}
 aria-invalid={!!errors.service}
 >
 <option value="" disabled>Select service</option>
 {SERVICE_OPTIONS.map((s) => (
 <option key={s} value={s}>{s}</option>
 ))}
 </select>
 {errors.service && (
 <p id="lead-service-error" role="alert" className="mt-1 text-xs text-red-500">
 {errors.service}
 </p>
 )}
 </div>
 </div>

 {/* Project Description */}
 <div>
 <label htmlFor="lead-description" className="mb-1.5 block text-sm font-semibold text-white">
 Project Description
 </label>
 <textarea
 id="lead-description"
 name="description"
 value={formData.description}
 onChange={handleChange}
 rows={3}
 className="form-input resize-none"
 placeholder="Briefly describe your project or requirements..."
 />
 </div>

 {/* Privacy note + Submit */}
 <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
 <p className="text-xs text-muted-fg">
 By submitting, you agree to our{' '}
 <a href="/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
 Privacy Policy
 </a>.
 We never share your data.
 </p>
 <button
 type="submit"
 disabled={loading}
 className={cn(
 'btn-primary flex-shrink-0',
 loading && 'opacity-75 cursor-not-allowed',
 )}
 >
 {loading ? (
 <>
 <Loader2 size={16} className="animate-spin" />
 Sending…
 </>
 ) : (
 <>
 {copy.cta}
 <ArrowRight size={16} />
 </>
 )}
 </button>
 </div>
 </form>
 )}
 </div>
 </div>
 )
}

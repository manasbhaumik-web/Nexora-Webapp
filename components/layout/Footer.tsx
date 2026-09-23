'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
 Linkedin,
 Twitter,
 Facebook,
 Youtube,
 ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface FooterLink {
 label: string
 href: string
}

const productLinks: FooterLink[] = [
 { label: 'Learning Management System', href: '/products/learning-management-system' },
 { label: 'Campus Management System', href: '/products/campus-management-system' },
 { label: 'Clinical Management System', href: '/products/clinical-management-system' },
 { label: 'HR Management System', href: '/products/hr-management-system' },
 { label: 'Inventory Management', href: '/products/inventory-management-system' },
]

const serviceLinks: FooterLink[] = [
  { label: 'Custom Software', href: '/services#custom-software-development' },
  { label: 'Web Development', href: '/services#web-development' },
  { label: 'Mobile App Development', href: '/services#mobile-app-development' },
  { label: 'Cloud Services', href: '/services#cloud-services' },
  { label: 'AI & Automation', href: '/services#ai-automation-services' },
  { label: 'IT Consulting', href: '/services#it-consulting' },
]

const companyLinks: FooterLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Resources', href: '/resources' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'X (Twitter)', href: 'https://twitter.com', icon: Twitter },
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { label: 'YouTube', href: 'https://youtube.com', icon: Youtube },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <footer className="bg-[#0F172A] border-t border-white/10 font-sans text-gray-400">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Tabular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-x border-white/10">
        
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-1 border-b lg:border-b-0 border-white/10 p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center bg-gradient-to-br from-violet-600 via-fuchsia-600 to-[#00D4FF] text-xl font-black text-white rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.5)] mb-6">
                N
              </div>
              <h3 className="font-heading text-lg font-black leading-none tracking-tight text-white mb-1">
                Nexora
              </h3>
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
                Technologies
              </p>
              
              <div className="mb-8">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Subscribe to updates</p>
                {submitted ? (
                  <div className="border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-4 py-3 text-xs font-bold tracking-widest uppercase rounded-xl">
                    Subscribed Successfully
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex">
                    <input 
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-violet-500 rounded-l-xl"
                    />
                    <button type="submit" className="bg-[#8B5CF6] text-white px-4 py-3 hover:bg-[#7C3AED] transition-colors rounded-r-xl shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                      <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map(social => {
                const Icon = social.icon
                return (
                  <a key={social.label} href={social.href} aria-label={social.label} className="text-gray-400 hover:text-[#00D4FF] transition-colors">
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-l border-white/10 p-8">
            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Products</h4>
            <ul className="flex flex-col gap-4">
              {productLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-medium hover:text-[#00D4FF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-l border-white/10 p-8">
            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-medium hover:text-[#00D4FF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links & Contact */}
          <div className="lg:col-span-1 lg:border-l border-white/10 p-8 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Company</h4>
              <ul className="flex flex-col gap-4">
                {companyLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-medium hover:text-[#00D4FF] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">HQ Global Office</h4>
              <p className="text-sm font-medium text-white mb-1">Nexora Technologies Inc.</p>
              <p className="text-sm font-medium text-gray-400">123 Innovation Drive<br/>Tech District, CA 94103</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border border-t-0 border-white/10 bg-black/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-gray-400">
            &copy; {new Date().getFullYear()} Nexora Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-bold tracking-widest uppercase text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

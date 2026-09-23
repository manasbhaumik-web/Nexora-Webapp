'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────────

interface SectionHeaderProps {
 /** Small label rendered above the title — displayed in section-eyebrow style */
 eyebrow: string
 /** Main section title. The last word will receive the text-gradient treatment */
 title: string
 /** Optional supporting paragraph rendered below the title */
 description?: string
 /** Whether to centre-align the content (default: true) */
 centered?: boolean
 /** Extra Tailwind classes on the wrapper element */
 className?: string
 /** Disable the last-word gradient if the title doesn't suit it */
 disableGradient?: boolean
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function splitTitle(title: string): { main: string; last: string } {
 const words = title.split(' ')
 if (words.length === 1) return { main: '', last: words[0] }
 const last = words.pop()!
 return { main: words.join(' ') + ' ', last }
}

// ─── Component ───────────────────────────────────────────────────────────────

export function SectionHeader({
 eyebrow,
 title,
 description,
 centered = true,
 className,
 disableGradient = false,
}: SectionHeaderProps) {
 const wrapperRef = useRef<HTMLDivElement>(null)

 useEffect(() => {
 const el = wrapperRef.current
 if (!el) return

 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 el.querySelectorAll<HTMLElement>('.anim-fade-up').forEach((child) => {
 child.classList.add('is-visible')
 })
 observer.unobserve(el)
 }
 })
 },
 { threshold: 0.15 },
 )

 observer.observe(el)
 return () => observer.disconnect()
 }, [])

 const { main, last } = splitTitle(title)

 return (
 <div
 ref={wrapperRef}
 className={cn(
 centered ? 'text-center' : 'text-left',
 'max-w-3xl',
 centered && 'mx-auto',
 className,
 )}
 >
 {/* Eyebrow */}
 <p className="anim-fade-up section-eyebrow mb-3">
 {eyebrow}
 </p>

 {/* Title */}
 <h2 className="anim-fade-up delay-100 font-heading text-display-sm font-bold text-white leading-tight">
 {main}
 {disableGradient ? (
 <span>{last}</span>
 ) : (
 <span className="text-gradient">{last}</span>
 )}
 </h2>

 {/* Description */}
 {description && (
 <p className="anim-fade-up delay-200 mt-4 font-body text-body-lg text-muted-fg leading-relaxed">
 {description}
 </p>
 )}
 </div>
 )
}

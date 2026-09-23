'use client'

import { useEffect, useRef, useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface AnimatedCounterProps {
 /** The target number to animate to */
 end: number
 /** Animation duration in milliseconds (default: 2000) */
 duration?: number
 /** String appended after the number, e.g. '+', '%', 'x' */
 suffix?: string
 /** String prepended before the number, e.g. '$', '~' */
 prefix?: string
 /** Additional CSS class for the wrapper span */
 className?: string
 /** Locale for number formatting — defaults to 'en-US' */
 locale?: string
}

// ─── Easing ──────────────────────────────────────────────────────────────────

function easeOutCubic(t: number): number {
 return 1 - Math.pow(1 - t, 3)
}

// ─── Component ───────────────────────────────────────────────────────────────

export function AnimatedCounter({
 end,
 duration = 2000,
 suffix = '',
 prefix = '',
 className,
 locale = 'en-US',
}: AnimatedCounterProps) {
 const [count, setCount] = useState(0)
 const [hasTriggered, setHasTriggered] = useState(false)
 const containerRef = useRef<HTMLSpanElement>(null)
 const rafRef = useRef<number | null>(null)
 const startTimeRef = useRef<number | null>(null)

 // Animate from 0 → end using requestAnimationFrame
 const startAnimation = () => {
 startTimeRef.current = null

 const step = (timestamp: number) => {
 if (startTimeRef.current === null) {
 startTimeRef.current = timestamp
 }

 const elapsed = timestamp - startTimeRef.current
 const progress = Math.min(elapsed / duration, 1)
 const easedProgress = easeOutCubic(progress)
 const current = Math.round(easedProgress * end)

 setCount(current)

 if (progress < 1) {
 rafRef.current = requestAnimationFrame(step)
 }
 }

 rafRef.current = requestAnimationFrame(step)
 }

 // IntersectionObserver to trigger on scroll-into-view
 useEffect(() => {
 const el = containerRef.current
 if (!el) return

 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting && !hasTriggered) {
 setHasTriggered(true)
 startAnimation()
 observer.unobserve(el)
 }
 })
 },
 { threshold: 0.4 },
 )

 observer.observe(el)
 return () => {
 observer.disconnect()
 if (rafRef.current !== null) {
 cancelAnimationFrame(rafRef.current)
 }
 }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [end, duration])

 const formatted = new Intl.NumberFormat(locale).format(count)

 return (
 <span ref={containerRef} className={className} aria-label={`${prefix}${end.toLocaleString(locale)}${suffix}`}>
 {prefix}
 {formatted}
 {suffix}
 </span>
 )
}

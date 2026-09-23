import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────────

type Variant = 'primary' | 'secondary' | 'outline-white'
type Size = 'sm' | 'md' | 'lg'
type IconPosition = 'left' | 'right'

interface CTAButtonProps {
 /** Visual style of the button */
 variant?: Variant
 /** Size of the button */
 size?: Size
 /** If provided, renders the button as a Next.js Link */
 href?: string
 /** Click handler (only used when href is not provided) */
 onClick?: () => void
 /** Button label / content */
 children: React.ReactNode
 /** Extra Tailwind classes on the root element */
 className?: string
 /** Optional Lucide icon component to render alongside the label */
 icon?: LucideIcon
 /** Whether the icon appears before or after the label (default: 'right') */
 iconPosition?: IconPosition
 /** Sets aria-disabled and disables pointer events */
 disabled?: boolean
 /** HTML button type (only used when href is absent) */
 type?: 'button' | 'submit' | 'reset'
 /** Target for external links */
 target?: '_blank' | '_self'
 /** Accessible label, useful when the visible label alone is ambiguous */
 ariaLabel?: string
}

// ─── Style Maps ───────────────────────────────────────────────────────────────

const variantClasses: Record<Variant, string> = {
 primary: 'btn-primary',
 secondary: 'btn-secondary',
 'outline-white': 'btn-outline',
}

const sizeClasses: Record<Size, string> = {
 sm: 'px-4 py-2 text-sm gap-1.5',
 md: 'px-6 py-3 text-base gap-2',
 lg: 'px-8 py-4 text-lg gap-2.5',
}

// ─── Component ───────────────────────────────────────────────────────────────

export function CTAButton({
 variant = 'primary',
 size = 'md',
 href,
 onClick,
 children,
 className,
 icon: Icon,
 iconPosition = 'right',
 disabled = false,
 type = 'button',
 target,
 ariaLabel,
}: CTAButtonProps) {
 // Derive icon to render: explicit icon OR default ArrowRight for primary
 const ResolvedIcon: LucideIcon | undefined =
 Icon ?? (variant === 'primary' ? ArrowRight : undefined)

 const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16

 const content = (
 <>
 {ResolvedIcon && iconPosition === 'left' && (
 <ResolvedIcon size={iconSize} aria-hidden="true" />
 )}
 {children}
 {ResolvedIcon && iconPosition === 'right' && (
 <ResolvedIcon size={iconSize} aria-hidden="true" />
 )}
 </>
 )

 const classes = cn(
 variantClasses[variant],
 sizeClasses[size],
 disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
 className,
 )

 if (href) {
 const isExternal = href.startsWith('http')
 return (
 <Link
 href={href}
 className={classes}
 target={target ?? (isExternal ? '_blank' : undefined)}
 rel={isExternal ? 'noopener noreferrer' : undefined}
 aria-label={ariaLabel}
 aria-disabled={disabled}
 tabIndex={disabled ? -1 : undefined}
 >
 {content}
 </Link>
 )
 }

 return (
 <button
 type={type}
 className={classes}
 onClick={disabled ? undefined : onClick}
 aria-label={ariaLabel}
 aria-disabled={disabled}
 disabled={disabled}
 >
 {content}
 </button>
 )
}

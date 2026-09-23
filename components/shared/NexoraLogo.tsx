'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface NexoraLogoProps {
  className?: string
  iconSize?: string
  textSize?: string
  showSubtitle?: boolean
  size?: number
}

export function NexoraLogo({
  className,
  iconSize = 'h-10 w-10 text-xl',
  textSize = 'text-lg',
  showSubtitle = true,
}: NexoraLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'group flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-4 rounded-xl',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center bg-gradient-to-br from-violet-600 via-fuchsia-600 to-[#00D4FF] font-black text-white rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-transform group-hover:scale-105',
          iconSize
        )}
      >
        N
      </div>
      <div className="flex flex-col">
        <span className={cn('font-heading font-black leading-none tracking-tight text-white group-hover:text-[#00D4FF] transition-colors', textSize)}>
          Nexora
        </span>
        {showSubtitle && (
          <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-0.5">
            Technologies
          </span>
        )}
      </div>
    </Link>
  )
}

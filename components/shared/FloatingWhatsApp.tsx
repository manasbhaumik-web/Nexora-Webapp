'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Component ───────────────────────────────────────────────────────────────

export function FloatingWhatsApp() {
 const [hovered, setHovered] = useState(false)

 const whatsappUrl = 'https://wa.me/60123456789?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.'

 return (
 <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
 {/* Tooltip */}
 <div
 role="tooltip"
 id="whatsapp-tooltip"
 className={cn(
 'rounded-lg bg-white/5 px-3 py-1.5 font-body text-xs font-semibold text-white shadow-card-md',
 'transition-all duration-200 origin-bottom-right',
 hovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-1 pointer-events-none',
 )}
 >
 Chat on WhatsApp
 {/* Arrow */}
 <span
 className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 bg-white/5 "
 aria-hidden="true"
 />
 </div>

 {/* Button + Pulse rings */}
 <div className="relative">
 {/* Outer pulse ring */}
 <span
 className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"
 aria-hidden="true"
 />
 {/* Inner static ring */}
 <span
 className="absolute inset-0 rounded-full bg-[#25D366] opacity-10 scale-110"
 aria-hidden="true"
 />

 <a
 href={whatsappUrl}
 target="_blank"
 rel="noopener noreferrer"
 aria-label="Chat with us on WhatsApp"
 aria-describedby="whatsapp-tooltip"
 onMouseEnter={() => setHovered(true)}
 onMouseLeave={() => setHovered(false)}
 onFocus={() => setHovered(true)}
 onBlur={() => setHovered(false)}
 className={cn(
 'relative flex h-14 w-14 items-center justify-center rounded-full shadow-card-md',
 'bg-[#25D366] text-white',
 'transition-all duration-200',
 'hover:bg-[#1EBE59] hover:scale-110 hover:shadow-[0_4px_20px_rgba(37,211,102,0.40)]',
 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#25D366] focus-visible:outline-offset-2',
 'active:scale-95',
 )}
 >
 <MessageCircle
 size={26}
 fill="currentColor"
 strokeWidth={0}
 aria-hidden="true"
 />
 </a>
 </div>
 </div>
 )
}

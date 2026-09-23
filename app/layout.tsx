import type { Metadata } from 'next'
import '@/styles/globals.css'
import { FloatingWhatsApp } from '@/components/shared/FloatingWhatsApp'
import { LoadingScreen } from '@/components/shared/LoadingScreen'

export const metadata: Metadata = {
  title: {
    default: 'Nexora Technologies — Enterprise Software Solutions & Digital Transformation',
    template: '%s | Nexora Technologies',
  },
  description:
    'Nexora Technologies delivers enterprise software products, custom software development, AI solutions, and digital transformation services. Trusted by 180+ clients across 15+ industries.',
  keywords: [
    'enterprise software', 'custom software development', 'digital transformation',
    'ERP system', 'LMS platform', 'CRM solution', 'AI solutions', 'cloud services',
    'Malaysia software company', 'IT consulting',
  ],
  authors: [{ name: 'Nexora Technology' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexoratech.com',
    siteName: 'Nexora Technology',
    title: 'Nexora Technology — Enterprise Software Solutions',
    description: 'Transforming businesses through innovative software solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Technology',
    description: 'Enterprise software, AI solutions, and digital transformation.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://nexoratech.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-body bg-background text-foreground antialiased">
        <LoadingScreen />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}

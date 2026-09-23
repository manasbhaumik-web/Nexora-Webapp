import { Navbar, Footer } from '@/components/layout'
import { FloatingWhatsApp } from '@/components/shared/FloatingWhatsApp'
import { HeroSection } from '@/components/home/HeroSection'
import { CompanyHighlights } from '@/components/home/CompanyHighlights'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { IndustriesSection } from '@/components/home/IndustriesSection'
import { TechStackSection } from '@/components/home/TechStackSection'
import { PortfolioPreview } from '@/components/home/PortfolioPreview'
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel'
import { CTABanner } from '@/components/home/CTABanner'

export default function HomePage() {
 return (
 <>
 <Navbar />

 <main id="main-content" tabIndex={-1} className="outline-none bg-[#0F172A] relative overflow-hidden">
 
 {/* Global ambient lights to break dark mode monotony */}
 <div className="absolute top-[25%] left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
 <div className="absolute top-[50%] right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
 <div className="absolute top-[75%] left-1/4 w-[700px] h-[700px] bg-rose-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

 <HeroSection />
 <CompanyHighlights />
 
 <div className="relative">
 <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent z-10" />
 <FeaturedProducts />
 </div>

 <ServicesOverview />
 
 <div className="relative">
 <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-10" />
 <IndustriesSection />
 </div>

 <TechStackSection />
 <PortfolioPreview />
 
 <div className="relative">
 <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent z-10" />
 <TestimonialsCarousel />
 </div>

 <CTABanner />
 </main>

 <Footer />
 <FloatingWhatsApp />
 </>
 )
}

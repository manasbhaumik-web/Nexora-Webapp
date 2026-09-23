import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
 GraduationCap, Users, LayoutGrid, Users2, UserCheck, BarChart2,
 Package, Truck, Heart, MessageSquare, TrendingUp, PieChart,
 CheckCircle, ArrowRight, ChevronRight, Layers, TrendingDown, Clock,
 DollarSign, Cpu, Zap, Star
} from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { products } from '@/lib/data/products'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
 GraduationCap, Users, LayoutGrid, Users2, UserCheck, BarChart2,
 Package, Truck, Heart, MessageSquare, TrendingUp, PieChart,
 DollarSign, Cpu,
}

const colorMap: Record<string, { icon: string; badge: string; bg: string; gradient: string; ring: string }> = {
  blue: { icon: 'text-blue-400', badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30', bg: 'bg-blue-500/10', gradient: 'from-blue-600 to-cyan-500', ring: 'ring-blue-500/30' },
  indigo: { icon: 'text-indigo-400', badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30', bg: 'bg-indigo-500/10', gradient: 'from-indigo-600 to-violet-500', ring: 'ring-indigo-500/30' },
  violet: { icon: 'text-violet-400', badge: 'bg-violet-500/10 text-violet-300 border-violet-500/30', bg: 'bg-violet-500/10', gradient: 'from-violet-600 to-fuchsia-500', ring: 'ring-violet-500/30' },
  rose: { icon: 'text-rose-400', badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30', bg: 'bg-rose-500/10', gradient: 'from-rose-600 to-pink-500', ring: 'ring-rose-500/30' },
  emerald: { icon: 'text-emerald-400', badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30', bg: 'bg-emerald-500/10', gradient: 'from-emerald-600 to-teal-500', ring: 'ring-emerald-500/30' },
  amber: { icon: 'text-amber-400', badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30', bg: 'bg-amber-500/10', gradient: 'from-amber-600 to-orange-500', ring: 'ring-amber-500/30' },
  orange: { icon: 'text-orange-400', badge: 'bg-orange-500/10 text-orange-300 border-orange-500/30', bg: 'bg-orange-500/10', gradient: 'from-orange-600 to-amber-500', ring: 'ring-orange-500/30' },
  cyan: { icon: 'text-[#00D4FF]', badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30', bg: 'bg-cyan-500/10', gradient: 'from-cyan-500 to-blue-500', ring: 'ring-cyan-500/30' },
  red: { icon: 'text-red-400', badge: 'bg-red-500/10 text-red-300 border-red-500/30', bg: 'bg-red-500/10', gradient: 'from-red-600 to-rose-500', ring: 'ring-red-500/30' },
  purple: { icon: 'text-purple-400', badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30', bg: 'bg-purple-500/10', gradient: 'from-purple-600 to-violet-500', ring: 'ring-purple-500/30' },
  fuchsia: { icon: 'text-fuchsia-400', badge: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30', bg: 'bg-fuchsia-500/10', gradient: 'from-fuchsia-600 to-pink-500', ring: 'ring-fuchsia-500/30' },
  teal: { icon: 'text-teal-400', badge: 'bg-teal-500/10 text-teal-300 border-teal-500/30', bg: 'bg-teal-500/10', gradient: 'from-teal-600 to-emerald-500', ring: 'ring-teal-500/30' },
}

// Product-specific business benefits
const benefitsMap: Record<string, { icon: React.ComponentType<{ className?: string }>; title: string; description: string }[]> = {
 default: [
 { icon: TrendingUp, title: 'Measurable ROI', description: 'Drive quantifiable returns through process automation, reduced manual effort, and optimised operations.' },
 { icon: Clock, title: 'Faster Operations', description: 'Eliminate bottlenecks and manual handoffs. Accelerate your core processes from days to minutes.' },
 { icon: Star, title: 'Better User Experience', description: 'Intuitive interfaces designed for real users — high adoption, low training cost.' },
 { icon: DollarSign, title: 'Reduced Total Cost', description: 'Consolidate multiple tools into one platform. Lower IT overhead, licensing, and support costs.' },
 ],
}

export async function generateStaticParams() {
 return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
 params,
}: {
 params: Promise<{ slug: string }>
}): Promise<Metadata> {
 const { slug } = await params
 const product = products.find((p) => p.slug === slug)
 if (!product) return { title: 'Product Not Found' }
 return {
 title: product.name,
 description: product.description,
 }
}

export default async function ProductDetailPage({
 params,
}: {
 params: Promise<{ slug: string }>
}) {
 const { slug } = await params
 const product = products.find((p) => p.slug === slug)
 if (!product) notFound()

 const colors = colorMap[product.color] ?? colorMap.blue
 const Icon = iconMap[product.icon] ?? Package
 const benefits = benefitsMap.default

 // Related products: same category first, then others, exclude self, take 3
 const related = products
 .filter((p) => p.slug !== slug)
 .sort((a, b) => {
 if (a.categorySlug === product.categorySlug && b.categorySlug !== product.categorySlug) return -1
 if (b.categorySlug === product.categorySlug && a.categorySlug !== product.categorySlug) return 1
 return 0
 })
 .slice(0, 3)

 return (
 <>
 <Navbar />
 <main id="main-content">
 {/* ── Hero ── */}
 <section className="bg-gradient-hero relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
 <div className="bg-dot-pattern absolute inset-0 opacity-40" />
 <div className="bg-grid-pattern absolute inset-0" />
 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 {/* Breadcrumb */}
 <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-gray-400 text-sm mb-8 flex-wrap">
 <Link href="/" className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-3.5 h-3.5" />
 <Link href="/products" className="hover:text-white transition-colors">Products</Link>
 <ChevronRight className="w-3.5 h-3.5" />
 <span className="text-white/90">{product.shortName}</span>
 </nav>

 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <div className="flex items-center gap-3 mb-6 flex-wrap">
 <span className={`badge border ${colors.badge}`}>{product.category}</span>
 {product.featured && (
 <span className="badge bg-amber-400/20 text-amber-300 border border-amber-400/30">
 <Star className="w-3 h-3" />
 Featured Product
 </span>
 )}
 </div>
 <h1 className="font-heading text-display-sm lg:text-display-md text-white font-bold mb-4 leading-tight">
 {product.name}
 </h1>
 <p className="text-accent-light text-xl font-heading font-medium mb-5 italic">
 &ldquo;{product.tagline}&rdquo;
 </p>
 <p className="text-gray-400 text-body-lg mb-8 max-w-xl">
 {product.description}
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Link href="/contact#demo" className="btn-primary">
 Request a Demo
 <ArrowRight className="w-4 h-4" />
 </Link>
 <Link href="/contact" className="btn-outline">
 Contact Sales
 </Link>
 </div>
 </div>

 {/* Icon block */}
 <div className="flex items-center justify-center">
 <div className={`w-48 h-48 lg:w-56 lg:h-56 rounded-3xl bg-gradient-to-br ${colors.gradient} bg-opacity-20 flex items-center justify-center shadow-2xl ring-8 ${colors.ring}`}>
 <Icon className="w-24 h-24 lg:w-28 lg:h-28 text-white drop-shadow-lg" />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ── Overview & Features ── */}
 <section className="section-padding bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-14 items-start">
 {/* Description */}
 <div>
 <p className="section-eyebrow mb-3">Overview</p>
 <h2 className="font-heading text-display-sm text-white font-bold mb-6">
 What is {product.shortName}?
 </h2>
 <p className="text-muted-fg text-body-lg leading-relaxed mb-6">
 {product.description}
 </p>
 <p className="text-muted-fg leading-relaxed">
 Designed for enterprise scale, {product.name} is built on a modern, cloud-native architecture
 that ensures reliability, security, and performance — even as your organisation grows. Our team
 provides full implementation support, training, and ongoing managed services.
 </p>
 </div>

 {/* Key Features */}
 <div>
 <p className="section-eyebrow mb-3">Key Features</p>
 <h2 className="font-heading text-display-sm text-white font-bold mb-6">
 Built-in capabilities
 </h2>
 <ul className="grid sm:grid-cols-2 gap-3">
 {product.features.map((feature) => (
 <li
 key={feature}
 className="flex items-start gap-3 p-4 bg-gradient-subtle rounded-xl border border-border"
 >
 <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
 <span className="text-white font-medium text-sm">{feature}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </section>

 {/* ── Modules ── */}
 <section className="section-padding bg-gradient-subtle">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center max-w-2xl mx-auto mb-14">
 <p className="section-eyebrow mb-3">Platform Modules</p>
 <h2 className="font-heading text-display-sm text-white font-bold mb-4">
 Everything in one platform
 </h2>
 <p className="text-muted-fg text-body-lg">
 {product.name} ships with {product.modules.length} fully integrated modules — configured to your
 needs during implementation.
 </p>
 </div>

 <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
 {product.modules.map((module, idx) => (
 <div
 key={module}
 className="card p-5 flex items-start gap-3 hover:shadow-card-hover transition-shadow duration-300"
 >
 <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
 <Layers className={`w-4 h-4 ${colors.icon}`} />
 </div>
 <div>
 <p className="font-heading font-semibold text-white text-sm leading-snug">{module}</p>
 <p className="text-muted-fg text-xs mt-0.5">Module {idx + 1}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── Industries ── */}
 <section className="section-padding bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-14 items-center">
 <div>
 <p className="section-eyebrow mb-3">Industries Served</p>
 <h2 className="font-heading text-display-sm text-white font-bold mb-6">
 Trusted across sectors
 </h2>
 <p className="text-muted-fg text-body-lg mb-8">
 {product.name} is deployed across a broad range of industries. Our team has deep
 domain expertise in each sector — ensuring the solution is configured to match your
 industry workflows, compliance requirements, and reporting needs.
 </p>
 <ul className="space-y-3">
 {product.industries.map((industry) => (
 <li key={industry} className="flex items-center gap-3">
 <div className={`w-2 h-2 rounded-full ${colors.gradient.includes('to-') ? 'bg-accent' : 'bg-accent'}`} />
 <span className="text-white font-medium">{industry}</span>
 </li>
 ))}
 </ul>
 </div>
 <div className="grid grid-cols-2 gap-4">
 {product.industries.map((industry, idx) => (
 <div
 key={industry}
 className={`card p-6 text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1`}
 >
 <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mx-auto mb-3`}>
 <Icon className={`w-6 h-6 ${colors.icon}`} />
 </div>
 <p className="font-heading font-bold text-white text-sm">{industry}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* ── Tech Stack ── */}
 <section className="section-padding bg-background relative overflow-hidden">
 <div className="bg-grid-pattern absolute inset-0" />
 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center max-w-2xl mx-auto mb-12">
 <p className="section-eyebrow text-accent-light mb-3">Technology</p>
 <h2 className="font-heading text-display-sm text-white font-bold mb-4">
 Built on proven technology
 </h2>
 <p className="text-gray-400 text-body-lg">
 {product.name} is engineered on a modern, battle-tested technology stack — ensuring
 performance, security, and longevity.
 </p>
 </div>

 <div className="flex flex-wrap justify-center gap-4">
 {product.techStack.map((tech) => (
 <div
 key={tech}
 className="px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors duration-200"
 >
 <span className="font-heading font-bold text-white text-sm">{tech}</span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── Benefits ── */}
 <section className="section-padding bg-gradient-subtle">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center max-w-2xl mx-auto mb-14">
 <p className="section-eyebrow mb-3">Business Benefits</p>
 <h2 className="font-heading text-display-sm text-white font-bold mb-4">
 Why organisations choose {product.shortName}
 </h2>
 <p className="text-muted-fg text-body-lg">
 Beyond features — the measurable business outcomes our clients achieve.
 </p>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {benefits.map((benefit, idx) => {
 const BenIcon = benefit.icon
 return (
 <div key={benefit.title} className="card-hover p-7 text-center">
 <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto mb-5`}>
 <BenIcon className={`w-7 h-7 ${colors.icon}`} />
 </div>
 <h3 className="font-heading text-heading-md text-white font-bold mb-2">
 {benefit.title}
 </h3>
 <p className="text-muted-fg text-sm leading-relaxed">{benefit.description}</p>
 </div>
 )
 })}
 </div>
 </div>
 </section>

 {/* ── CTA ── */}
 <section className="section-padding bg-gradient-cta relative overflow-hidden">
 <div className="bg-dot-pattern absolute inset-0 opacity-30" />
 <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <p className="section-eyebrow text-accent-light mb-4">Get Started</p>
 <h2 className="font-heading text-display-sm lg:text-display-md text-white font-bold mb-6">
 Ready to see {product.shortName} in action?
 </h2>
 <p className="text-gray-400 text-body-lg mb-10 max-w-xl mx-auto">
 Book a personalised demo with our product specialists. See exactly how{' '}
 {product.name} fits your workflows — no generic slides, just your use case.
 </p>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <Link href="/contact#demo" className="btn-primary">
 Request a Demo
 <ArrowRight className="w-4 h-4" />
 </Link>
 <Link href="/contact" className="btn-outline">
 Contact Sales
 </Link>
 </div>
 </div>
 </section>

 {/* ── Related Products ── */}
 <section className="section-padding bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <p className="section-eyebrow mb-3">More Products</p>
 <h2 className="font-heading text-heading-xl text-white font-bold">
 You might also be interested in
 </h2>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 {related.map((rel) => {
 const RelIcon = iconMap[rel.icon] ?? Package
 const relColors = colorMap[rel.color] ?? colorMap.blue
 return (
 <Link
 key={rel.slug}
 href={`/products/${rel.slug}`}
 className="card-hover p-6 group block"
 >
 <div className={`w-12 h-12 rounded-xl ${relColors.bg} flex items-center justify-center mb-4`}>
 <RelIcon className={`w-6 h-6 ${relColors.icon}`} />
 </div>
 <span className={`badge border text-xs ${relColors.badge} mb-3 inline-flex`}>{rel.category}</span>
 <h3 className="font-heading text-heading-md text-white font-bold mb-1.5 group-hover:text-accent transition-colors">
 {rel.name}
 </h3>
 <p className="text-muted-fg text-sm mb-4">{rel.tagline}</p>
 <span className="text-accent text-sm font-semibold font-heading flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
 Learn more <ArrowRight className="w-3.5 h-3.5" />
 </span>
 </Link>
 )
 })}
 </div>

 <div className="text-center mt-10">
 <Link href="/products" className="btn-secondary">
 View All Products
 <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Wrench, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'SW13 — Conservatory Window Supply & Fit — AA Windows & Doors',
  description: 'Case study: anthracite aluminium windows and frames supplied and fitted for a full conservatory renovation in SW13 Barnes. AA Windows & Doors, Sutton Surrey.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects/sw13-conservatory' },
  openGraph: {
    title: 'SW13 — Conservatory Window Supply & Fit — AA Windows & Doors',
    description: 'Case study: anthracite aluminium windows and frames supplied and fitted for a conservatory renovation in SW13 Barnes.',
    url: 'https://www.aawindowsanddoors.co.uk/projects/sw13-conservatory',
    images: [{ url: '/images/conservatory-sw13-barnes-after.jpg', width: 1200, height: 630, alt: 'Conservatory windows SW13 Barnes before and after' }],
  },
}

export default function SW13ConservatoryPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/30 font-outfit font-semibold text-xs text-yellow-400 px-3 py-1.5 rounded-full">
              <MapPin size={11} weight="bold" /> SW13 · Barnes
            </span>
            <span className="inline-flex items-center gap-1.5 bg-stone-800 font-outfit font-semibold text-xs text-stone-300 px-3 py-1.5 rounded-full">
              <Wrench size={11} weight="bold" /> Aluminium Windows & Frames · Supply & Fit
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Conservatory Windows<br /><span className="text-yellow-400">SW13 Barnes.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            Anthracite aluminium windows and frames specified, sourced and supplied for a full conservatory renovation in SW13 Barnes — handled end-to-end from measurement to delivery and fit.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 h-[400px] lg:h-[520px]">
        <div className="relative overflow-hidden">
          <Image src="/images/conservatory-sw13-barnes-before.jpg" alt="Before — old white uPVC conservatory SW13 Barnes" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-aa-black/40 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-outfit font-bold tracking-widest">BEFORE</span>
        </div>
        <div className="relative overflow-hidden border-l-2 border-white/20">
          <Image src="/images/conservatory-sw13-barnes-after.jpg" alt="After — new anthracite aluminium conservatory SW13 Barnes" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-aa-black/40 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-outfit font-bold tracking-widest">AFTER</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="font-outfit font-extrabold text-3xl text-aa-black mb-6">Specification to Delivery — Handled Perfectly.</h2>
            <div className="font-sans text-base text-aa-stone leading-relaxed space-y-4 mb-10">
              <p>The client in SW13 Barnes was undertaking a full renovation of their existing conservatory — replacing the tired old structure with a contemporary anthracite aluminium design. They needed a specialist to handle the windows and frames: the right specification, the right sizing, sourced and delivered without hassle.</p>
              <p>Sonny visited the property, measured all the openings, and agreed the full specification — anthracite aluminium thermally broken frames matched to the renovation design. AA Windows & Doors then managed the order through manufacturing and supply, coordinating with the wider renovation team to ensure everything arrived correctly and was fitted in place.</p>
              <p>Manuel Jorge left a Checkatrade review confirming the whole process from specification through to delivery was handled perfectly — professional, reliable and great quality throughout.</p>
            </div>

            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">What We Did</p>
            <div className="flex flex-col gap-4">
              {[
                'Visited site and measured all conservatory openings accurately',
                'Agreed full specification — anthracite aluminium thermally broken frames to match the renovation design',
                'Sourced all window and door frame units from the manufacturer to the exact sizes required',
                'Managed the manufacturing process and quality-checked all units on arrival',
                'Supplied and fitted all aluminium frames and glazing units to the property',
                'Coordinated with the wider renovation team to ensure correct sequencing and fit',
                'Available throughout for specification queries and any snagging through to completion',
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-outfit font-bold text-xs text-yellow-500 shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-sans text-sm text-aa-stone leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white border border-aa-border rounded-2xl p-7 shadow-[0_4px_16px_rgba(17,17,16,0.04)]">
              <p className="font-outfit font-bold text-sm text-aa-black uppercase tracking-wide mb-5">Project Details</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Location', value: 'SW13 — Barnes, London' },
                  { label: 'Property Type', value: 'Detached residential' },
                  { label: 'Scope', value: 'Windows & frames — supply and fit for conservatory renovation' },
                  { label: 'Frame', value: 'Anthracite aluminium — thermally broken' },
                  { label: 'Glazing', value: 'Double glazed units throughout' },
                  { label: 'Process', value: 'Specification, sourcing, delivery and fit' },
                  { label: 'Rating', value: '10/10 — verified on Checkatrade' },
                ].map(d => (
                  <div key={d.label} className="flex justify-between border-b border-aa-border pb-3 last:border-0 last:pb-0">
                    <p className="font-sans text-xs text-aa-stone">{d.label}</p>
                    <p className="font-outfit font-semibold text-xs text-aa-black text-right max-w-[55%]">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-aa-black rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <ShieldCheck size={20} weight="bold" className="text-yellow-400 shrink-0" />
                <p className="font-outfit font-bold text-sm text-yellow-400">Why Specification Matters</p>
              </div>
              <p className="font-sans text-sm text-stone-400 leading-relaxed">
                Getting the windows right for a conservatory renovation isn&apos;t just about size — it&apos;s material, thermal performance, sightlines and finish. Anthracite aluminium thermally broken frames give you slim profiles, good energy efficiency and a contemporary look that uPVC cannot match. We handle the full specification so you get exactly what the project needs.
              </p>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-black mb-1">Checkatrade Review — Manuel Jorge, SW13</p>
              <p className="font-sans text-sm text-yellow-900 leading-relaxed italic">&ldquo;Sonny supplied us with windows and frames for our conservatory. The whole process from specification through to delivery was handled perfectly — professional, reliable and great quality.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-50 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Planning a Conservatory Renovation?</p>
          <h3 className="font-outfit font-extrabold text-3xl text-aa-black mb-4">We supply and fit aluminium windows and frames for conservatory renovations</h3>
          <p className="font-sans text-aa-stone mb-8 max-w-[46ch] mx-auto">Full specification, sourcing and supply across Sutton, London & Surrey. Sonny visits, measures and quotes — no obligation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=Conservatories"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px]">
              Get Free Estimate <ArrowRight size={15} weight="bold" />
            </Link>
            <Link href="/services/conservatories"
              className="flex items-center gap-2 border border-aa-border hover:border-stone-400 text-aa-stone font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300">
              Conservatory Service
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

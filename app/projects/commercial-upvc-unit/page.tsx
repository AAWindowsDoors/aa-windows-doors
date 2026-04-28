import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Wrench, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Commercial uPVC Windows & Door Installation — AA Windows & Doors',
  description: 'Case study: uPVC windows and door supplied and fitted to a commercial unit in Sutton, Surrey. Next-day turnaround. AA Windows & Doors.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects/commercial-upvc-unit' },
  openGraph: {
    title: 'Commercial uPVC Windows & Door Installation — AA Windows & Doors',
    description: 'Case study: uPVC windows and door supplied and fitted to a commercial unit in Sutton, Surrey. Next-day turnaround.',
    url: 'https://www.aawindowsanddoors.co.uk/projects/commercial-upvc-unit',
    images: [{ url: '/images/project-commercial-upvc.jpg', width: 1200, height: 630, alt: 'Commercial uPVC installation Sutton Surrey' }],
  },
}

export default function CommercialUPVCPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/30 font-outfit font-semibold text-xs text-yellow-400 px-3 py-1.5 rounded-full">
              <MapPin size={11} weight="bold" /> Sutton · Surrey
            </span>
            <span className="inline-flex items-center gap-1.5 bg-stone-800 font-outfit font-semibold text-xs text-stone-300 px-3 py-1.5 rounded-full">
              <Wrench size={11} weight="bold" /> Commercial · uPVC Windows & Door
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Commercial uPVC<br /><span className="text-yellow-400">Windows & Door.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            White uPVC casement windows and a half-glazed entrance door supplied and fitted to a commercial unit. Multiple openings, measured and installed in a single day — zero downtime for the client.
          </p>
        </div>
      </div>

      <div className="relative h-[460px] lg:h-[560px]">
        <Image src="/images/project-commercial-upvc.jpg" alt="Commercial uPVC windows and door installation Sutton Surrey" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-aa-black/30 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="font-outfit font-extrabold text-3xl text-aa-black mb-6">Commercial Glazing, Done the Next Day</h2>
            <div className="font-sans text-base text-aa-stone leading-relaxed space-y-4 mb-10">
              <p>The client needed multiple uPVC windows and an entrance door fitted to a commercial unit — a straightforward brief but one where speed mattered. Downtime on a working commercial property costs money, so getting the job measured, ordered and installed as quickly as possible was the priority.</p>
              <p>Sonny visited to survey the openings, confirmed the specification — white uPVC casement windows with trickle vents and a half-glazed entrance door — and the units were manufactured to the exact measurements. The full installation was completed in a single day with no disruption to the client&apos;s operations.</p>
              <p>The result is a clean, well-finished installation that seals the unit properly, provides good natural light and meets all commercial glazing requirements.</p>
            </div>

            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">What We Did</p>
            <div className="flex flex-col gap-4">
              {[
                'Surveyed all openings and confirmed exact dimensions for manufacturing',
                'Specified white uPVC casement windows with trickle vents and top-hung sections',
                'Specified a half-glazed uPVC entrance door with multipoint lock',
                'Coordinated rapid manufacture — units ready for next-day installation',
                'Installed all window frames, sashes and glazing units to each opening',
                'Hung and adjusted the entrance door — smooth operation confirmed',
                'Made good all external seals and sills — clean, weather-tight finish',
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
                  { label: 'Location', value: 'Sutton, Surrey' },
                  { label: 'Property Type', value: 'Commercial unit' },
                  { label: 'Product', value: 'White uPVC casement windows + half-glazed door' },
                  { label: 'Openings', value: 'Multiple — casement, fixed and door' },
                  { label: 'Glazing', value: 'Double glazed — trickle vents fitted' },
                  { label: 'Duration', value: 'Single day — measured and fitted' },
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
                <p className="font-outfit font-bold text-sm text-yellow-400">We Work Commercial Too</p>
              </div>
              <p className="font-sans text-sm text-stone-400 leading-relaxed">
                Shop fronts, commercial units, offices and warehouses — we handle commercial glazing across the full scope. If you need windows or doors for a commercial property, Sonny can visit, quote and get the work done fast with no subcontractors involved.
              </p>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-black mb-1">Checkatrade Review — Martha Cooper, BR2</p>
              <p className="font-sans text-sm text-yellow-900 leading-relaxed italic">&ldquo;Had double glazing repaired and window hinges replaced. They measured up and had everything fitted the very next day. Impressively fast and the finish was perfect.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-50 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Commercial Glazing</p>
          <h3 className="font-outfit font-extrabold text-3xl text-aa-black mb-4">uPVC windows and doors for commercial properties — fast turnaround</h3>
          <p className="font-sans text-aa-stone mb-8 max-w-[46ch] mx-auto">Shop fronts, units and offices across Sutton, London & Surrey. Free estimates, no subcontractors, minimum disruption.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=Windows+%26+Glazing"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px]">
              Get Free Estimate <ArrowRight size={15} weight="bold" />
            </Link>
            <Link href="/services/emergency-glazing"
              className="flex items-center gap-2 border border-aa-border hover:border-stone-400 text-aa-stone font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300">
              Commercial & Emergency
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

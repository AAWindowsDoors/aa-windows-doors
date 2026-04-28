import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Wrench } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Sutton — Glass Balustrade Installation — AA Windows & Doors',
  description: 'Case study: stainless steel and glass balustrade system installed on a first-floor terrace in Sutton, Surrey. AA Windows & Doors.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects/sutton-glass-balustrades' },
  openGraph: {
    title: 'Sutton — Glass Balustrade Installation — AA Windows & Doors',
    description: 'Case study: stainless steel and glass balustrade system installed on a first-floor terrace in Sutton, Surrey.',
    url: 'https://www.aawindowsanddoors.co.uk/projects/sutton-glass-balustrades',
    images: [{ url: '/images/service-balustrade-terrace.png', width: 1200, height: 630, alt: 'Glass balustrade installation Sutton Surrey' }],
  },
}

export default function SuttonBalustradesPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/30 font-outfit font-semibold text-xs text-yellow-400 px-3 py-1.5 rounded-full">
              <MapPin size={11} weight="bold" /> Sutton, Surrey
            </span>
            <span className="inline-flex items-center gap-1.5 bg-stone-800 font-outfit font-semibold text-xs text-stone-300 px-3 py-1.5 rounded-full">
              <Wrench size={11} weight="bold" /> Glass Balustrades
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Stainless Steel &<br /><span className="text-yellow-400">Glass Balustrade.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            A full-width stainless steel post-and-rail system with toughened glass infill panels installed to the edge of a first-floor flat roof terrace — meeting building regulations and built to last.
          </p>
        </div>
      </div>

      <div className="relative h-[520px] lg:h-[620px]">
        <Image src="/images/service-glass-balustrade.png" alt="Glass balustrade on brick building terrace" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-aa-black/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="font-outfit font-extrabold text-3xl text-aa-black mb-6">New Terrace. Safe Edge.</h2>
            <div className="font-sans text-base text-aa-stone leading-relaxed space-y-4 mb-10">
              <p>The property — a brick-built house in Sutton — had undergone a rear extension creating a first-floor flat roof terrace accessible from the master bedroom. The structural slab and bi-fold doors were already in place when AA Windows & Doors were brought in to deliver the balustrade system.</p>
              <p>The client wanted something contemporary: no timber, no painted metal, just clean stainless steel and glass. The system had to meet the Building Regulations requirement for 1100mm minimum height at balcony level, and the glass specification had to meet BS EN 12150 for toughened safety glass.</p>
              <p>The building also had grey aluminium bi-fold doors already installed — so the stainless finish complemented the existing metalwork without clashing.</p>
            </div>

            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">What We Did</p>
            <div className="flex flex-col gap-4">
              {[
                'Surveyed the slab edge and agreed fixing positions with the structural engineer',
                'Installed 316-grade stainless steel core-drilled post bases into the concrete slab',
                'Fixed posts at compliant centres with no movement in any direction',
                'Top rail fitted and levelled across the full width of the terrace',
                'Toughened 12mm safety glass panels cut to size and clipped in',
                'All fixings torqued to specification and covered with matching satin caps',
                'Final height check confirmed 1100mm compliance at all points',
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
                  { label: 'Application', value: 'First-floor flat roof terrace' },
                  { label: 'System', value: 'Stainless steel post & rail with glass infill' },
                  { label: 'Steel Grade', value: '316 marine-grade stainless' },
                  { label: 'Glass', value: '12mm toughened safety glass (BS EN 12150)' },
                  { label: 'Height', value: '1100mm (Building Regs compliant)' },
                  { label: 'Duration', value: '2 days on-site' },
                ].map(d => (
                  <div key={d.label} className="flex justify-between border-b border-aa-border pb-3 last:border-0 last:pb-0">
                    <p className="font-sans text-xs text-aa-stone">{d.label}</p>
                    <p className="font-outfit font-semibold text-xs text-aa-black text-right max-w-[55%]">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-aa-black rounded-2xl p-6">
              <p className="font-outfit font-bold text-yellow-400 text-sm mb-3">Why Stainless Steel?</p>
              <p className="font-sans text-sm text-stone-400 leading-relaxed">316-grade stainless steel is highly resistant to corrosion in outdoor UK conditions. Unlike powder-coated steel, it will not chip, rust or require repainting. The satin finish weathers gracefully and maintains its appearance for decades with minimal care.</p>
            </div>

            <Link href="/services/glass-balustrades"
              className="flex items-center justify-center gap-2 border border-aa-border hover:border-yellow-400 text-aa-black font-outfit font-semibold text-sm px-6 py-3.5 rounded-2xl transition-all duration-300">
              Learn about our Glass Balustrade service <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-stone-50 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Planning a Balustrade?</p>
          <h3 className="font-outfit font-extrabold text-3xl text-aa-black mb-4">Terrace, balcony or staircase — we design and install</h3>
          <p className="font-sans text-aa-stone mb-8">Post-and-rail, frameless or spigot systems. All to Building Regs compliance.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=Glass+Specialist+Work"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px]">
              Get Free Estimate <ArrowRight size={15} weight="bold" />
            </Link>
            <Link href="/#projects"
              className="flex items-center gap-2 border border-aa-border hover:border-stone-400 text-aa-stone font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300">
              View More Projects
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

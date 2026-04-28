import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Wrench, Clock } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'SM3 — Roof Lantern Installation — AA Windows & Doors',
  description: 'Case study: 20 double-glazed units and roof lanterns installed on a residential extension in SM3 Cheam. AA Windows & Doors, Sutton Surrey.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects/sm3-roof-lantern' },
  openGraph: {
    title: 'SM3 — Roof Lantern Installation — AA Windows & Doors',
    description: 'Case study: 20 double-glazed units and roof lanterns installed on a residential extension in SM3 Cheam.',
    url: 'https://www.aawindowsanddoors.co.uk/projects/sm3-roof-lantern',
    images: [{ url: '/images/project-roof-lanterns-grid.png', width: 1200, height: 630, alt: 'Roof lantern installation SM3 Cheam' }],
  },
}

export default function SM3RoofLanternPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/30 font-outfit font-semibold text-xs text-yellow-400 px-3 py-1.5 rounded-full">
              <MapPin size={11} weight="bold" /> SM3 · Cheam, Sutton
            </span>
            <span className="inline-flex items-center gap-1.5 bg-stone-800 font-outfit font-semibold text-xs text-stone-300 px-3 py-1.5 rounded-full">
              <Wrench size={11} weight="bold" /> Glazing · Roof Lanterns
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-3xl">
            20 Double-Glazed Units<br />+ <span className="text-yellow-400">Roof Lanterns</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            A full glazing package for a substantial residential extension in Cheam — double-glazed unit replacements throughout the property plus roof lanterns fitted to the new flat roof.
          </p>
        </div>
      </div>

      <div className="relative h-[420px] lg:h-[520px]">
        <Image src="/images/project-sm3-hero.png" alt="Roof lanterns installed on flat roof — SM3 Cheam" fill className="object-cover object-left" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-6">What the Client Needed</h2>
            <div className="font-sans text-base text-aa-stone leading-relaxed space-y-4 mb-10">
              <p>The homeowner had completed a significant rear and side extension and needed the full glazing package delivered by a single reliable contractor — not multiple subcontractors.</p>
              <p>The brief covered two distinct elements: first, replacing 20 existing double-glazed units across the main property with new, energy-efficient units matching the existing frames; second, supplying and fitting roof lanterns to the new flat-roof extension to flood the kitchen-diner with natural daylight.</p>
              <p>Timing was critical — the build team needed the glazing completed before plastering could begin.</p>
            </div>

            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">What We Did</p>
            <div className="flex flex-col gap-4">
              {[
                'Surveyed all 20 existing frames and measured each unit to tolerance',
                'Ordered matched double-glazed units with warm-edge spacer bars',
                'Replaced all 20 units across two days with no disruption to the household',
                'Surveyed the flat roof opening and designed the lantern layout',
                'Installed aluminium-framed roof lanterns with thermally broken sections',
                'Sealed, flashed and weatherproofed all lantern upstands',
                'Final pressure-test check — zero air or water ingress confirmed',
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-outfit font-bold text-xs text-yellow-500 shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-sans text-sm text-aa-stone leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative h-[360px] rounded-2xl overflow-hidden">
              <Image src="/images/project-roof-lantern-install.png" alt="Roof lantern installation process" fill className="object-cover" />
            </div>

            <div className="bg-white border border-aa-border rounded-2xl p-7 shadow-[0_4px_16px_rgba(17,17,16,0.04)]">
              <p className="font-outfit font-bold text-sm text-aa-black uppercase tracking-wide mb-5">Project Details</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Location', value: 'SM3 — Cheam, Sutton' },
                  { label: 'Scope', value: '20x DGU replacements + roof lanterns' },
                  { label: 'Frame Material', value: 'Existing uPVC frames retained; aluminium lanterns' },
                  { label: 'Glazing', value: 'Low-E double glazed with warm-edge spacer' },
                  { label: 'Duration', value: '3 days on-site' },
                  { label: 'Rating', value: '10/10 — verified on Checkatrade' },
                ].map(d => (
                  <div key={d.label} className="flex justify-between border-b border-aa-border pb-3 last:border-0 last:pb-0">
                    <p className="font-sans text-xs text-aa-stone">{d.label}</p>
                    <p className="font-outfit font-semibold text-xs text-aa-black text-right max-w-[55%]">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6 flex items-start gap-4">
              <Clock size={20} weight="bold" className="text-black shrink-0 mt-0.5" />
              <div>
                <p className="font-outfit font-bold text-sm text-black mb-1">AA&apos;s Checkatrade Review</p>
                <p className="font-sans text-sm text-yellow-900 leading-relaxed italic">&ldquo;AA windows review — say in the description, 20X double glazed unit replacements, Glass Balustrade supply & installation. Sonny & the AA team completed all this work in a timely and professional manner. Highly recommended!&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-50 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Similar Project?</p>
          <h3 className="font-outfit font-extrabold text-3xl text-aa-black mb-4">Planning a glazing or lantern project?</h3>
          <p className="font-sans text-aa-stone mb-8">We survey, supply and fit — no subcontractors. Get a free estimate from Sonny.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=Roof+Lanterns"
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

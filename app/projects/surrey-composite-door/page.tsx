import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Wrench, Star } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Surrey — Composite Front Door Installation — AA Windows & Doors',
  description: 'Case study: black composite front door with glass canopy and matching sidelights installed in Surrey. AA Windows & Doors, Sutton.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects/surrey-composite-door' },
  openGraph: {
    title: 'Surrey — Composite Front Door Installation — AA Windows & Doors',
    description: 'Case study: black composite front door with glass canopy and matching sidelights installed in Surrey.',
    url: 'https://www.aawindowsanddoors.co.uk/projects/surrey-composite-door',
    images: [{ url: '/images/project-composite-door-hero.png', width: 1200, height: 630, alt: 'Composite front door installation Surrey' }],
  },
}

export default function SurreyCompositeDoorPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/30 font-outfit font-semibold text-xs text-yellow-400 px-3 py-1.5 rounded-full">
              <MapPin size={11} weight="bold" /> Surrey
            </span>
            <span className="inline-flex items-center gap-1.5 bg-stone-800 font-outfit font-semibold text-xs text-stone-300 px-3 py-1.5 rounded-full">
              <Wrench size={11} weight="bold" /> Composite Door · Canopy · Sidelights
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Composite Door +<br /><span className="text-yellow-400">Canopy + Sidelights.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            A complete front entrance transformation — black composite door with brushed chrome hardware, glazed lean-to canopy for weather protection, and matching slim sidelights either side for natural light.
          </p>
        </div>
      </div>

      <div className="relative h-[420px] lg:h-[520px]">
        <Image src="/images/project-composite-door-hero.png" alt="Composite and timber door installations — Surrey" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-aa-black/30 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="font-outfit font-extrabold text-3xl text-aa-black mb-6">A Complete Entrance, Not Just a Door</h2>
            <div className="font-sans text-base text-aa-stone leading-relaxed space-y-4 mb-10">
              <p>The client — a homeowner in Surrey — wanted to transform the front entrance of their white-rendered detached house. The existing timber door was draughty, single-glazed and dated. They wanted something contemporary: black, bold, with the feel of a high-specification property.</p>
              <p>But a door alone was not enough. The original entrance was fully exposed — no weather protection and limited natural light in the hallway. The brief expanded to include a glazed lean-to canopy above the door and matching slim sidelights either side.</p>
              <p>The entire job was designed to be delivered in a single day: one team, one visit, one sign-off at the end.</p>
            </div>

            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">What We Did</p>
            <div className="flex flex-col gap-4">
              {[
                'Removed the original timber door and frame cleanly',
                'Built out the reveals to accept the new composite frame',
                'Installed the composite door frame plumb and square',
                'Hung the door — checked operation, adjusted hinges for smooth swing',
                'Set and aligned the multi-point locking mechanism',
                'Fitted brushed chrome lever handles and matching letter plate',
                'Installed the aluminium lean-to canopy above the door on wall fixings',
                'Fitted slim sidelight frames and glazed units either side of the door',
                'Made good all pointing and weatherproofing around every junction',
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
                  { label: 'Location', value: 'Surrey' },
                  { label: 'Door Type', value: 'GRP composite — black, smooth finish' },
                  { label: 'Hardware', value: 'Brushed chrome lever handles + letter plate' },
                  { label: 'Security', value: 'Multi-point locking, anti-snap cylinder' },
                  { label: 'Canopy', value: 'Aluminium lean-to with glass infill' },
                  { label: 'Sidelights', value: 'Slim aluminium frame, obscure glass' },
                  { label: 'Duration', value: 'Single day' },
                  { label: 'Rating', value: '10/10 — verified on Checkatrade' },
                ].map(d => (
                  <div key={d.label} className="flex justify-between border-b border-aa-border pb-3 last:border-0 last:pb-0">
                    <p className="font-sans text-xs text-aa-stone">{d.label}</p>
                    <p className="font-outfit font-semibold text-xs text-aa-black text-right max-w-[55%]">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" className="text-yellow-800" />)}
                <span className="font-outfit font-bold text-sm text-black ml-1">10/10</span>
              </div>
              <p className="font-outfit font-bold text-sm text-black mb-2">Checkatrade Review — Aurora Clark, SM7</p>
              <p className="font-sans text-sm text-yellow-900 leading-relaxed italic">&ldquo;The boys were absolutely fantastic. Turned up on time, did a brilliant job and left everything spotless. Could not fault them at all — would 100% recommend.&rdquo;</p>
            </div>

            <div className="bg-aa-black rounded-2xl p-6">
              <p className="font-outfit font-bold text-yellow-400 text-sm mb-3">Why Composite?</p>
              <p className="font-sans text-sm text-stone-400 leading-relaxed">GRP composite doors combine a glass-reinforced polymer skin with an insulated foam core. They don&apos;t warp, swell or crack like timber — and they will not fade or discolour like cheaper doors. With the right hardware, they look and feel premium indefinitely.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-50 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Transform Your Entrance</p>
          <h3 className="font-outfit font-extrabold text-3xl text-aa-black mb-4">New door, canopy and sidelights — one team, one day</h3>
          <p className="font-sans text-aa-stone mb-8">Sonny visits, measures and quotes. No subcontractors, no delays.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=Doors+%E2%80%94+All+Types"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px]">
              Get Free Estimate <ArrowRight size={15} weight="bold" />
            </Link>
            <Link href="/services/door-installation"
              className="flex items-center gap-2 border border-aa-border hover:border-stone-400 text-aa-stone font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300">
              Door Installation Service
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Wrench, CheckCircle } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'London — Flat Roof Skylights — AA Windows & Doors',
  description: 'Case study: Two black aluminium flat roof skylights supplied and installed on a London flat felt roof. AA Windows & Doors, Sutton Surrey.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects/london-skylights' },
  openGraph: {
    title: 'London — Flat Roof Skylights — AA Windows & Doors',
    description: 'Two aluminium flat roof skylights installed on a central London property — thermally broken, flush to the roof.',
    url: 'https://www.aawindowsanddoors.co.uk/projects/london-skylights',
    images: [{ url: '/images/project-skylights-flatroof.jpeg', width: 1200, height: 800, alt: 'Two flat roof skylights installed — London' }],
  },
}

export default function LondonSkylightsPage() {
  return (
    <PageShell>
      {/* Hero Header */}
      <div className="bg-aa-black text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <Link href="/projects" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> All Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/30 font-outfit font-semibold text-xs text-yellow-400 px-3 py-1.5 rounded-full">
              <MapPin size={11} weight="bold" /> Central London
            </span>
            <span className="inline-flex items-center gap-1.5 bg-stone-800 font-outfit font-semibold text-xs text-stone-300 px-3 py-1.5 rounded-full">
              <Wrench size={11} weight="bold" /> Flat Roof Skylights · Aluminium
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-4xl">
            Two Skylights.<br /><span className="text-yellow-400">Twice the Light.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            A pair of thermally broken aluminium flat roof skylights installed on a central London property — precision-fitted flush to the felt roof with sealed upstands.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-[380px] sm:h-[500px] lg:h-[600px]">
        <Image
          src="/images/project-skylights-flatroof.jpeg"
          alt="Two aluminium flat roof skylights installed on a central London flat felt roof"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">

          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-6">Daylight Through a Flat Roof</h2>
            <div className="font-sans text-base text-aa-stone leading-relaxed space-y-4 mb-12">
              <p>
                Flat roof properties in London often struggle with natural light — the roof is the only option when you can&apos;t add windows to the walls. This client had recently had a flat roof covering renewed and wanted to take the opportunity to add two skylights while access was easy.
              </p>
              <p>
                Two aluminium-framed flat roof skylights were surveyed, ordered and installed — thermally broken frames to minimise heat loss, double-glazed units with a neutral solar control coating to manage summer heat gain. The upstands were built up and flashed to match the new felt covering.
              </p>
              <p>
                The result floods the room below with natural light across two points in the ceiling — a significant quality-of-life improvement for a top-floor flat.
              </p>
            </div>

            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-6">Scope of Works</p>
            <div className="flex flex-col gap-4">
              {[
                { item: 'Roof Survey', detail: 'Full assessment of the flat roof structure, felt covering, and ceiling below to determine optimal skylight positions' },
                { item: 'Two Aluminium Skylights', detail: 'Thermally broken frames with double-glazed solar control units — minimising heat loss and summer overheating' },
                { item: 'Upstand Construction', detail: 'Upstands built to correct height and lead-flashed to ensure watertight seal against the felt covering' },
                { item: 'Interior Finish', detail: 'Clean plasterboard reveals to frames — no raw edges, ready to decorate' },
              ].map((s, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-aa-border bg-white hover:border-yellow-400/40 transition-colors">
                  <CheckCircle size={20} weight="fill" className="text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-outfit font-bold text-sm text-aa-black mb-1">{s.item}</p>
                    <p className="font-sans text-sm text-aa-stone leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white border border-aa-border rounded-2xl p-7 shadow-[0_4px_16px_rgba(17,17,16,0.04)]">
              <p className="font-outfit font-bold text-sm text-aa-black uppercase tracking-wide mb-5">Project Details</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Location', value: 'Central London' },
                  { label: 'Property', value: 'Residential flat — top floor' },
                  { label: 'Skylights', value: '2 × aluminium flat roof units' },
                  { label: 'Frame', value: 'Thermally broken aluminium' },
                  { label: 'Glazing', value: 'Double glazed, solar control coating' },
                  { label: 'Flashing', value: 'Lead-dressed upstands to felt roof' },
                ].map(d => (
                  <div key={d.label} className="flex justify-between border-b border-aa-border pb-3 last:border-0 last:pb-0">
                    <p className="font-sans text-xs text-aa-stone">{d.label}</p>
                    <p className="font-outfit font-semibold text-xs text-aa-black text-right max-w-[55%]">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-black mb-3">The Outcome</p>
              <p className="font-sans text-sm text-yellow-900 leading-relaxed italic">
                &ldquo;Skylights on a flat roof are one of the best investments for a top-floor property. Two well-positioned units transform a dark room — and properly flashed, they&apos;ll outlast the roof covering beneath them.&rdquo;
              </p>
              <p className="font-outfit font-semibold text-xs text-yellow-800 mt-3">— AA Windows & Doors</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-stone-50 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Flat Roof?</p>
          <h3 className="font-outfit font-extrabold text-3xl text-aa-black mb-4">Want more light through your flat roof?</h3>
          <p className="font-sans text-aa-stone mb-8">We survey, supply and install skylights and roof lanterns across London & Surrey.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=Roof+Lanterns"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px]">
              Get Free Estimate <ArrowRight size={15} weight="bold" />
            </Link>
            <Link href="/projects"
              className="flex items-center gap-2 border border-aa-border hover:border-stone-400 text-aa-stone font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300">
              View More Projects
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

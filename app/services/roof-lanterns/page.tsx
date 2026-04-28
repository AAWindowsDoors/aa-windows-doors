import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Phone } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Roof Lanterns — AA Windows & Doors, Sutton Surrey',
  description: 'Roof lantern supply and installation on flat roof extensions. Thermally broken aluminium frames, energy-efficient glazing. Sutton, London & Surrey.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/services/roof-lanterns' },
  openGraph: {
    title: 'Roof Lanterns — AA Windows & Doors, Sutton Surrey',
    description: 'Roof lantern supply and installation on flat roof extensions. Thermally broken aluminium frames, energy-efficient glazing. Sutton, London & Surrey.',
    url: 'https://www.aawindowsanddoors.co.uk/services/roof-lanterns',
    images: [{ url: '/images/hero-roof-lanterns.png', width: 1200, height: 630, alt: 'Roof lantern installation Surrey' }],
  },
}

const lanternTypes = [
  { name: 'Pyramid Roof Lantern', desc: 'A single central apex rising from a rectangular base. Classic profile, suits most flat roof extensions. Available from small kitchen extensions to large orangeries.' },
  { name: 'Ridge / Gable Lantern', desc: 'An elongated ridge running the length of the roof. Ideal for longer extensions — allows multiple units in a row to flood the room with daylight.' },
  { name: 'Flat Glass Rooflight', desc: 'Minimal frame, flush with the roof surface. Suited to contemporary designs where the lantern profile is not wanted but natural light is still required.' },
]

const glassOptions = [
  { name: 'Self-Cleaning Glass', desc: 'Titanium dioxide coating breaks down dirt in UV light, then rain rinses it away. Ideal for hard-to-reach roof installations.' },
  { name: 'Solar Control Glass', desc: 'Reduces heat gain in summer while maintaining daylight. Prevents the room beneath from overheating — essential for south-facing extensions.' },
  { name: 'Triple Glazed', desc: 'Maximum thermal performance for the highest energy efficiency. Reduces heat loss in winter and meets or exceeds current Part L building requirements.' },
]

export default function RoofLanternsPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Services
          </Link>
          <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">Roof Lanterns</p>
          <h1 className="font-outfit font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] mb-6 max-w-3xl">
            Fill Your Extension<br /><span className="text-yellow-400">With Natural Light.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch] mb-10">
            We supply and install roof lanterns and flat rooflights on residential extensions across Sutton, London & Surrey — fully fitted, sealed and weather-tight.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact?service=Roof+Lanterns"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px] shadow-[0_8px_24px_rgba(234,179,8,0.35)]">
              Get Free Estimate <ArrowRight size={15} weight="bold" />
            </Link>
            <a href="tel:+447585586388"
              className="flex items-center gap-2 border border-stone-700 hover:border-yellow-400 text-stone-300 hover:text-yellow-400 font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300">
              <Phone size={15} weight="bold" /> 07585 586388
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-[480px] lg:h-[580px]">
        <Image src="/images/hero-roof-lanterns.png" alt="Two roof lanterns installed on flat roof" fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Lantern Types</p>
        <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-12 max-w-xl">The Right Profile for Your Roof</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {lanternTypes.map(l => (
            <div key={l.name} className="bg-white border border-aa-border rounded-2xl p-6 shadow-[0_4px_16px_rgba(17,17,16,0.04)]">
              <h3 className="font-outfit font-bold text-base text-aa-black mb-3">{l.name}</h3>
              <p className="font-sans text-sm text-aa-stone leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-start">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Glass Options</p>
            <h3 className="font-outfit font-extrabold text-2xl text-aa-black mb-8">Glass That Works as Hard as the Frame</h3>
            <div className="flex flex-col gap-5">
              {glassOptions.map(g => (
                <div key={g.name} className="flex gap-4 border-b border-aa-border pb-5 last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  </div>
                  <div>
                    <p className="font-outfit font-semibold text-sm text-aa-black mb-1">{g.name}</p>
                    <p className="font-sans text-sm text-aa-stone leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-aa-black rounded-2xl p-7">
              <p className="font-outfit font-bold text-sm text-yellow-400 mb-3">Our Installation Process</p>
              <div className="flex flex-col gap-4">
                {['Survey roof structure and measure the opening', 'Prepare and weather-proof the structural upstand', 'Position and fix the aluminium frame', 'Fit glazing units and seal all joints', 'Final check — no leaks, no movement guaranteed'].map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="font-outfit font-bold text-xs text-yellow-400 mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <p className="font-sans text-sm text-stone-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[280px] rounded-2xl overflow-hidden">
              <Image src="/images/project-roof-lantern-install.png" alt="Roof lantern installation process" fill className="object-cover" />
            </div>

            <Link href="/contact?service=Roof+Lanterns"
              className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-6 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-[1px]">
              Get Your Free Lantern Estimate <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, Phone } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Conservatories & Orangeries — AA Windows & Doors, Sutton Surrey',
  description: 'Conservatory installation, repairs, roof insulation and glass heat reduction film across Sutton, London & Surrey. Free estimates.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/services/conservatories' },
  openGraph: {
    title: 'Conservatories & Orangeries — AA Windows & Doors, Sutton Surrey',
    description: 'Conservatory installation, repairs, roof insulation and glass heat reduction film across Sutton, London & Surrey. Free estimates.',
    url: 'https://www.aawindowsanddoors.co.uk/services/conservatories',
    images: [{ url: '/images/service-conservatory-hero.png', width: 1200, height: 630, alt: 'Conservatory installation Sutton Surrey' }],
  },
}

const conservatoryTypes = [
  { name: 'Victorian Conservatory', desc: 'Multi-faceted front with a ridge roof. The most popular style — suits period and modern homes alike. Available in uPVC, aluminium and timber frames.' },
  { name: 'Edwardian (Georgian)', desc: 'Square or rectangular footprint with a pitched roof. Maximises usable floor space — ideal for dining rooms and garden rooms.' },
  { name: 'Lean-To / Mediterranean', desc: 'Simple sloped roof butting against the house wall. Suits bungalows and properties with restricted height. Cost-effective and clean.' },
  { name: 'Orangery', desc: 'Brick or rendered piers with a flat perimeter roof and central glazed roof lantern. More substantial than a conservatory — feels like a true room extension.' },
  { name: 'Gable-End Conservatory', desc: 'A full-height front panel with a pitched roof. Taller and more imposing — works well on newer detached properties with space to make a statement.' },
]

const repairServices = [
  'Conservatory Roof Replacement',
  'Polycarbonate to Glass Roof Upgrade',
  'Conservatory Roof Insulation',
  'Conservatory Glass Heat Reduction Film',
  'Misted or Failed Double-Glazed Unit Replacement',
  'Frame Repairs (uPVC, Aluminium, Timber)',
  'Lock & Hardware Replacement',
  'Draught Proofing & Sealing',
  'Conservatory Roof Panel Replacement',
]

export default function ConservatoriesPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Services
          </Link>
          <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">Conservatories & Orangeries</p>
          <h1 className="font-outfit font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] mb-6 max-w-3xl">
            More Space.<br /><span className="text-yellow-400">More Light.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch] mb-10">
            Conservatory installation, orangeries, repairs and roof upgrades across Sutton, London & Surrey. From a simple lean-to to a full orangery — we supply, fit and finish.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact?service=Conservatories+%26+Orangeries"
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

      <div className="relative h-[420px] lg:h-[520px] overflow-hidden">
        <Image src="/images/service-conservatory-hero.png" alt="Conservatory installations in Surrey" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Styles</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-10">Find the Right Style for Your Home</h2>
            <div className="flex flex-col gap-5">
              {conservatoryTypes.map(c => (
                <div key={c.name} className="bg-white border border-aa-border rounded-2xl p-5 shadow-[0_2px_8px_rgba(17,17,16,0.04)]">
                  <h3 className="font-outfit font-bold text-base text-aa-black mb-2">{c.name}</h3>
                  <p className="font-sans text-sm text-aa-stone leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <div className="bg-aa-black rounded-2xl p-7">
              <p className="font-outfit font-bold text-yellow-400 text-sm mb-4">Frame Options</p>
              <div className="flex flex-col gap-4">
                {[
                  { f: 'uPVC', d: 'Most popular. Low maintenance, thermally efficient, available in a wide range of colours and woodgrain finishes.' },
                  { f: 'Aluminium', d: 'Slim frames, maximum glazing area. Ideal for contemporary and minimalist designs. Powder-coated to any RAL colour.' },
                  { f: 'Timber', d: 'Classic warmth and character. Suits traditional and period properties. Requires periodic repainting but is unmatched aesthetically.' },
                ].map(({ f, d }) => (
                  <div key={f} className="border-b border-stone-800 pb-4 last:border-0 last:pb-0">
                    <p className="font-outfit font-semibold text-sm text-white mb-1">{f}</p>
                    <p className="font-sans text-xs text-stone-400 leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Repairs & Upgrades</p>
              <p className="font-sans text-sm text-aa-stone mb-4">Already have a conservatory that needs attention? We repair, upgrade and improve existing structures.</p>
              <div className="flex flex-col gap-2">
                {repairServices.map(r => (
                  <div key={r} className="flex gap-3">
                    <Check size={14} weight="bold" className="text-yellow-500 shrink-0 mt-0.5" />
                    <p className="font-sans text-sm text-aa-stone">{r}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-aa-black mb-2">Too Hot in Summer?</p>
              <p className="font-sans text-sm text-aa-stone leading-relaxed">Conservatory Glass Heat Reduction Film and roof insulation can transform an unusable summer room into a comfortable living space year-round — at a fraction of the cost of a full rebuild.</p>
            </div>

            <Link href="/contact?service=Conservatories+%26+Orangeries"
              className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-6 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-[1px]">
              Get Your Free Estimate <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

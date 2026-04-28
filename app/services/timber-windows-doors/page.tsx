import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Phone, Check } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Timber Windows & Doors — AA Windows & Doors, Sutton Surrey',
  description: 'Hardwood and softwood timber windows and doors for period properties, conservation areas and listed buildings. Sutton, London & Surrey.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/services/timber-windows-doors' },
  openGraph: {
    title: 'Timber Windows & Doors — AA Windows & Doors, Sutton Surrey',
    description: 'Hardwood and softwood timber windows and doors for period properties, conservation areas and listed buildings. Sutton, London & Surrey.',
    url: 'https://www.aawindowsanddoors.co.uk/services/timber-windows-doors',
    images: [{ url: '/images/service-timber-windows-new.webp', width: 1200, height: 630, alt: 'Timber windows and doors Surrey' }],
  },
}

const timberProducts = [
  { name: 'Casement Windows', desc: 'The most popular timber window style — side-hung panels that open outward. Available as single or dual casement with traditional or contemporary glazing bars.' },
  { name: 'Sash Windows', desc: 'Authentic sliding sash windows for period properties. Traditional box-sash with weights and cords, or spring-balanced for a slimmer frame profile.' },
  { name: 'Bay & Bow Windows', desc: 'Timber bay windows add space and character to Victorian and Edwardian homes. We fabricate to match existing profiles and match period joinery details.' },
  { name: 'Timber Entrance Doors', desc: 'Solid hardwood and engineered timber front doors — panelled, glazed or stable-door styles. Factory-primed or finished in your chosen colour.' },
  { name: 'Stable Doors', desc: 'Top and bottom independently opening — popular for kitchens and back doors. Available in oak, idigbo and softwood.' },
  { name: 'Timber French Doors', desc: 'Double outward-opening French doors in hardwood or softwood. Supplied with multi-point locks and your choice of glazing.' },
]

const whyTimber = [
  'Character and warmth that uPVC cannot replicate',
  'Essential for listed buildings and conservation areas',
  'FSC-certified sustainably sourced timber available',
  'Painted to any colour — including RAL and BS ranges',
  'Can be made to match existing joinery profiles exactly',
  'Hardwood options last 50+ years with periodic maintenance',
]

export default function TimberWindowsDoorsPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Services
          </Link>
          <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">Timber Range</p>
          <h1 className="font-outfit font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] mb-6 max-w-3xl">
            Timber Windows<br /><span className="text-yellow-400">& Doors.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch] mb-10">
            Hardwood and softwood timber windows and doors for period properties, listed buildings and conservation areas. Supplied and fitted across Sutton, London & Surrey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact?service=Windows+%26+Glazing"
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

      <div className="relative h-[460px] lg:h-[560px]">
        <Image src="/images/service-timber-windows-new.webp" alt="Hardwood and softwood timber windows and doors for period properties, Surrey" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 mb-20">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Timber Products</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-10">What We Supply & Fit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {timberProducts.map(p => (
                <div key={p.name} className="bg-white border border-aa-border rounded-2xl p-5 shadow-[0_2px_8px_rgba(17,17,16,0.04)]">
                  <h3 className="font-outfit font-bold text-sm text-aa-black mb-2">{p.name}</h3>
                  <p className="font-sans text-xs text-aa-stone leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <div>
              <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Why Choose Timber</p>
              <div className="flex flex-col gap-3">
                {whyTimber.map(w => (
                  <div key={w} className="flex gap-3">
                    <Check size={15} weight="bold" className="text-yellow-500 shrink-0 mt-0.5" />
                    <p className="font-sans text-sm text-aa-stone leading-relaxed">{w}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-aa-black rounded-2xl p-6">
              <p className="font-outfit font-bold text-yellow-400 text-sm mb-3">Hardwood vs Softwood</p>
              <div className="flex flex-col gap-4">
                <div className="border-b border-stone-800 pb-4">
                  <p className="font-outfit font-semibold text-sm text-white mb-1">Hardwood (Oak, Idigbo, Meranti)</p>
                  <p className="font-sans text-xs text-stone-400 leading-relaxed">Denser grain, naturally more durable. Better suited to exposed locations. Requires repainting or re-staining every 7–10 years. 50+ year lifespan with care.</p>
                </div>
                <div>
                  <p className="font-outfit font-semibold text-sm text-white mb-1">Softwood (Pine, Redwood)</p>
                  <p className="font-sans text-xs text-stone-400 leading-relaxed">More affordable. Requires factory primer and periodic painting every 5–7 years. Suitable for most domestic applications.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
              <p className="font-outfit font-semibold text-sm text-aa-black mb-1">Lead Times</p>
              <p className="font-sans text-sm text-aa-stone">Timber windows and doors are made to measure and typically take 6–10 weeks from order to delivery. We will confirm lead times at estimate stage.</p>
            </div>
          </div>
        </div>

        <div className="bg-aa-black rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-outfit font-semibold text-xs text-yellow-400 uppercase tracking-widest mb-3">Period Properties & Conservation Areas</p>
            <h3 className="font-outfit font-extrabold text-2xl text-white mb-3 max-w-lg">Working in a conservation area or listed building?</h3>
            <p className="font-sans text-stone-400 text-sm leading-relaxed max-w-[46ch]">We have experience supplying timber joinery that satisfies planning and listed building consent conditions. We can advise on what is and isn&apos;t permissible before you order.</p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link href="/contact?service=Windows+%26+Glazing"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px]">
              Get Free Estimate <ArrowRight size={15} weight="bold" />
            </Link>
            <a href="tel:+447585586388"
              className="flex items-center gap-2 border border-stone-700 hover:border-yellow-400 text-stone-300 hover:text-yellow-400 font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 justify-center">
              <Phone size={15} weight="bold" /> 07585 586388
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, Phone } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Door Installation — AA Windows & Doors, Sutton Surrey',
  description: 'Composite, fire, bi-fold, sliding and French door supply and installation across Sutton, London & Surrey. Free estimates. 10/10 Checkatrade rated.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/services/door-installation' },
  openGraph: {
    title: 'Door Installation — AA Windows & Doors, Sutton Surrey',
    description: 'Composite, fire, bi-fold, sliding and French door supply and installation across Sutton, London & Surrey. Free estimates. 10/10 Checkatrade rated.',
    url: 'https://www.aawindowsanddoors.co.uk/services/door-installation',
    images: [{ url: '/images/service-doors-collage.png', width: 1200, height: 630, alt: 'Door installation Sutton Surrey' }],
  },
}

const doorTypes = [
  {
    name: 'Composite Front Doors',
    desc: 'GRP-skinned composite doors offer the look of timber with none of the maintenance. Available in hundreds of styles and colours, with multi-point locking as standard.',
  },
  {
    name: 'Fire Doors (FD30 / FD60)',
    desc: 'Correctly fitted fire doors save lives. We supply and install FD30 and FD60-rated oak veneer and flush fire doors with correct intumescent strips, smoke seals and hinges — essential for flats and HMOs.',
  },
  {
    name: 'Bi-Fold & Sliding Doors',
    desc: 'Open up your living space with full-width aluminium or timber bi-folds. Slim sightlines, thermally broken frames, and smooth operation guaranteed.',
  },
  {
    name: 'French & Patio Doors',
    desc: 'Traditional outward-opening French doors or smooth sliding patio sets — uPVC, aluminium or timber, double or triple glazed.',
  },
  {
    name: 'Stable Doors',
    desc: 'Top and bottom independently opening doors — popular for kitchen and back doors. Available in timber, composite and uPVC. Supply and fit.',
  },
  {
    name: 'Door Canopies & Porches',
    desc: 'Glazed lean-to canopies and full porch installations. Adds weather protection and kerb appeal. Aluminium and uPVC frames, fitted the same day as the door where required.',
  },
  {
    name: 'Shop Fronts & Commercial Doors',
    desc: 'We install aluminium shopfronts, automatic entrance doors and commercial-grade fire exit sets for businesses across South London and Surrey.',
  },
]

const materials = ['uPVC', 'Aluminium', 'Timber / Wooden', 'Composite (GRP)']
const hardware = ['Multi-point locks', 'Deadbolts', 'Letterboxes', 'Door knockers', 'Pull handles', 'Spy holes', 'Cat Flaps', 'Dog Flaps']
const repairs = ['Composite Front Doors Repair', 'Bifold Doors Repair', 'French Doors Repair', 'Patio Doors Repair', 'Fire Doors Repair', 'UPVC Doors Repair', 'Aluminium Doors Repair', 'Timber / Wooden Doors Repair', 'Exterior Doors Repair', 'Doors Supply']

export default function DoorInstallationPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Services
          </Link>
          <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">Door Installation</p>
          <h1 className="font-outfit font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] mb-6 max-w-3xl">
            Doors That Open Right.<br /><span className="text-yellow-400">Every Time.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch] mb-10">
            Composite front doors, fire doors, bi-folds, sliding and French doors — supplied, fitted and set perfectly. We cover all door types for residential and commercial properties.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact?service=Doors+%E2%80%94+All+Types"
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

      <div className="w-full bg-aa-black overflow-hidden">
        <Image src="/images/service-doors-5panel.png" alt="Door installation — composite, fire, French and timber doors" width={3530} height={1060} className="w-full h-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Door Types</p>
        <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-12 max-w-2xl">Every Door Type, Fitted Right First Time</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {doorTypes.map(d => (
            <div key={d.name} className="bg-white border border-aa-border rounded-2xl p-6 shadow-[0_4px_16px_rgba(17,17,16,0.04)]">
              <h3 className="font-outfit font-bold text-base text-aa-black mb-3">{d.name}</h3>
              <p className="font-sans text-sm text-aa-stone leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Frame Materials</p>
            <div className="flex flex-wrap gap-2">
              {materials.map(m => (
                <span key={m} className="inline-flex items-center gap-1.5 bg-stone-50 border border-aa-border font-sans text-sm text-aa-stone px-3 py-1.5 rounded-full">
                  <Check size={12} weight="bold" className="text-yellow-500" /> {m}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Hardware & Accessories</p>
            <div className="flex flex-wrap gap-2">
              {hardware.map(h => (
                <span key={h} className="inline-flex items-center gap-1.5 bg-stone-50 border border-aa-border font-sans text-sm text-aa-stone px-3 py-1.5 rounded-full">
                  <Check size={12} weight="bold" className="text-yellow-500" /> {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Repairs & Supply</p>
          <div className="flex flex-wrap gap-2">
            {repairs.map(r => (
              <span key={r} className="inline-flex items-center gap-1.5 bg-stone-50 border border-aa-border font-sans text-sm text-aa-stone px-3 py-1.5 rounded-full">
                <Check size={12} weight="bold" className="text-yellow-500" /> {r}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-aa-black py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit font-semibold text-xs text-yellow-400 uppercase tracking-widest mb-4">Free Estimate</p>
          <h3 className="font-outfit font-extrabold text-3xl text-white mb-4">Need a door replaced or upgraded?</h3>
          <p className="font-sans text-stone-400 text-base mb-8">Sonny visits your property, assesses the opening, and gives you a clear quote. No call centres, no surprises.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=Doors+%E2%80%94+All+Types"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px]">
              Get Free Estimate <ArrowRight size={15} weight="bold" />
            </Link>
            <a href="tel:+447585586388"
              className="flex items-center gap-2 border border-stone-700 hover:border-yellow-400 text-stone-300 hover:text-yellow-400 font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300">
              <Phone size={15} weight="bold" /> 07585 586388
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

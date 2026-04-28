import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, Phone } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Window Installation — AA Windows & Doors, Sutton Surrey',
  description: 'UPVC, aluminium and timber window supply, installation and repair across Sutton, London & Surrey. Free estimates. 10/10 Checkatrade rated.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/services/window-installation' },
  openGraph: {
    title: 'Window Installation — AA Windows & Doors, Sutton Surrey',
    description: 'UPVC, aluminium and timber window supply, installation and repair across Sutton, London & Surrey. Free estimates. 10/10 Checkatrade rated.',
    url: 'https://www.aawindowsanddoors.co.uk/services/window-installation',
    images: [{ url: '/images/service-windows-collage.png', width: 1200, height: 630, alt: 'Window installation Sutton Surrey' }],
  },
}

const frameTypes = [
  { name: 'uPVC Windows', desc: 'Low maintenance, high insulation, excellent value. Available in white, woodgrain and a full range of foiled colours.' },
  { name: 'Aluminium Windows', desc: 'Slim sight lines for maximum glass area. Powder-coated in any RAL colour. Ideal for modern and commercial properties.' },
  { name: 'Timber Windows', desc: 'Natural warmth and character. Suitable for period homes, listed buildings and conservation areas. Hardwood and softwood options.' },
]

const styles = ['Casement', 'Bay & Bow', 'Sash / Wooden Sash', 'Tilt & Turn', 'Fixed Light', 'Loft Windows', 'Roof Windows', 'Bi-fold', 'Sliding', 'Secondary Glazing', 'Frosted Windows', 'Window Shutters']
const glazing = ['Single Glazed', 'Double Glazed', 'Triple Glazed', 'Misted Unit Replacement', 'Acoustic Glass', 'Solar Control', 'Self-Cleaning', 'Conservatory Glass Heat Reduction Film']
const extras = ['Window Film & Tinting', 'Window Shutters & Interior Shutter Fitting', 'UPVC Spraying (colour change)', 'Draught Proofing', 'UPVC Repairs', 'Aluminium Window Repair', 'Timber / Wooden Window Repair', 'Windows Supply']

export default function WindowInstallationPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Services
          </Link>
          <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">Window Installation</p>
          <h1 className="font-outfit font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] mb-6 max-w-3xl">
            Windows That Work.<br /><span className="text-yellow-400">Every Frame.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch] mb-10">
            Supply, installation and repair of uPVC, aluminium and timber windows for homes and commercial properties across Sutton, London & Surrey.
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

      <div className="relative h-[420px] lg:h-[520px] overflow-hidden">
        <Image src="/images/service-windows-collage.png" alt="Window installation — timber, sash and bay windows" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-aa-white via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 lg:gap-24">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Frame Materials</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-10">Three Materials. One Specialist.</h2>
            <div className="flex flex-col gap-6">
              {frameTypes.map(f => (
                <div key={f.name} className="border border-aa-border rounded-2xl p-6">
                  <h3 className="font-outfit font-bold text-lg text-aa-black mb-2">{f.name}</h3>
                  <p className="font-sans text-sm text-aa-stone leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div>
              <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Window Styles</p>
              <div className="flex flex-wrap gap-2">
                {styles.map(s => (
                  <span key={s} className="inline-flex items-center gap-1.5 bg-stone-50 border border-aa-border font-sans text-sm text-aa-stone px-3 py-1.5 rounded-full">
                    <Check size={12} weight="bold" className="text-yellow-500" /> {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Glazing Options</p>
              <div className="flex flex-wrap gap-2">
                {glazing.map(g => (
                  <span key={g} className="inline-flex items-center gap-1.5 bg-stone-50 border border-aa-border font-sans text-sm text-aa-stone px-3 py-1.5 rounded-full">
                    <Check size={12} weight="bold" className="text-yellow-500" /> {g}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Repairs & Additional Services</p>
              <div className="flex flex-wrap gap-2">
                {extras.map(e => (
                  <span key={e} className="inline-flex items-center gap-1.5 bg-stone-50 border border-aa-border font-sans text-sm text-aa-stone px-3 py-1.5 rounded-full">
                    <Check size={12} weight="bold" className="text-yellow-500" /> {e}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <p className="font-outfit font-bold text-base text-aa-black mb-2">Also Available: Timber Range</p>
              <p className="font-sans text-sm text-aa-stone leading-relaxed mb-4">Period homes, conservation areas and listed buildings often need timber. See our full timber window and door range.</p>
              <Link href="/services/timber-windows-doors" className="inline-flex items-center gap-1.5 font-outfit font-semibold text-sm text-yellow-700 hover:text-yellow-800 transition-colors">
                View Timber Range <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[300px] overflow-hidden">
        <Image src="/images/service-windows-collage.png" alt="UPVC, aluminium and timber window installation across Surrey" fill className="object-cover" />
        <div className="absolute inset-0 bg-aa-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-outfit font-semibold text-xs text-yellow-400 uppercase tracking-widest mb-3">Sutton · London · Surrey</p>
          <h3 className="font-outfit font-extrabold text-3xl md:text-4xl text-white mb-6">Ready for a Free Window Survey?</h3>
          <Link href="/contact?service=Windows+%26+Glazing"
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-outfit font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px] shadow-[0_8px_24px_rgba(234,179,8,0.4)]">
            Get Free Estimate <ArrowRight size={15} weight="bold" />
          </Link>
        </div>
      </div>
    </PageShell>
  )
}

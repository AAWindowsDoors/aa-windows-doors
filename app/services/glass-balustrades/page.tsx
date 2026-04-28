import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Phone } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Glass Balustrades — AA Windows & Doors, Sutton Surrey',
  description: 'Stainless steel and glass balustrade systems for balconies, terraces and stairs. Residential and commercial. Sutton, London & Surrey.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/services/glass-balustrades' },
  openGraph: {
    title: 'Glass Balustrades — AA Windows & Doors, Sutton Surrey',
    description: 'Stainless steel and glass balustrade systems for balconies, terraces and stairs. Residential and commercial. Sutton, London & Surrey.',
    url: 'https://www.aawindowsanddoors.co.uk/services/glass-balustrades',
    images: [{ url: '/images/service-balustrade-terrace.png', width: 1200, height: 630, alt: 'Glass balustrades Surrey' }],
  },
}

const applications = [
  { title: 'Balconies & Terraces', desc: 'First-floor and flat-roof terraces need compliant balustrade systems. We design and install post-and-rail and frameless systems to meet building regs — without blocking your view.' },
  { title: 'Staircases & Landings', desc: 'Replace old spindle railings with clean glass panels for an open, modern feel. Suits both new-build and period properties.' },
  { title: 'Garden & Pool Edges', desc: 'Unobstructed garden views with a safety barrier. Stainless steel posts and toughened glass panels withstand the UK climate without rusting or warping.' },
  { title: 'Commercial & Mezzanines', desc: 'Offices, retail units and mezzanine floors — we install frameless and semi-frameless glass balustrade systems that meet commercial building standards.' },
]

const allGlassServices = [
  'Glass Balustrades', 'Glass Shower Screens', 'Glass Splashbacks', 'Mirrors',
  'Glass Polishing', 'Glass Restoration', 'Stained Glass Restoration', 'Leadwork',
  'Roof Lanterns', 'Conservatories & Orangeries', 'Glass Replacement', 'Glazier',
]

export default function GlassBalustradesPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Services
          </Link>
          <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">Glass Balustrades</p>
          <h1 className="font-outfit font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] mb-6 max-w-3xl">
            Glass Balustrades.<br /><span className="text-yellow-400">Built to Last.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch] mb-10">
            Stainless steel and glass balustrade systems for balconies, terraces, staircases and commercial spaces across Sutton, London & Surrey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact?service=Glass+Specialist+Work"
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

      <div className="relative h-[480px] lg:h-[600px]">
        <Image src="/images/service-glass-balustrade.png" alt="Glass balustrade system on brick building" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-16">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Applications</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-10">Where We Install</h2>
            <div className="flex flex-col gap-5">
              {applications.map(a => (
                <div key={a.title} className="flex gap-4">
                  <div className="w-1 shrink-0 bg-yellow-400 rounded-full mt-1" />
                  <div>
                    <h3 className="font-outfit font-bold text-base text-aa-black mb-1">{a.title}</h3>
                    <p className="font-sans text-sm text-aa-stone leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-white border border-aa-border rounded-2xl p-7 shadow-[0_4px_16px_rgba(17,17,16,0.04)]">
              <p className="font-outfit font-bold text-base text-aa-black mb-4">System Types</p>
              <div className="flex flex-col gap-4">
                <div className="border-b border-aa-border pb-4">
                  <p className="font-outfit font-semibold text-sm text-aa-black mb-1">Post & Rail</p>
                  <p className="font-sans text-sm text-aa-stone">Stainless steel posts with a top rail and toughened glass infill panels. Most common system — compliant, clean, and proven.</p>
                </div>
                <div className="border-b border-aa-border pb-4">
                  <p className="font-outfit font-semibold text-sm text-aa-black mb-1">Frameless (Standoff / Channel)</p>
                  <p className="font-sans text-sm text-aa-stone">Glass panels fixed via discreet standoff bolts or a low-profile base channel. Maximum transparency — minimum hardware.</p>
                </div>
                <div>
                  <p className="font-outfit font-semibold text-sm text-aa-black mb-1">Spigot Systems</p>
                  <p className="font-sans text-sm text-aa-stone">Individual floor-mounted spigots grip each glass panel from below, with no top rail required. Sleek and contemporary.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-7">
              <p className="font-outfit font-bold text-sm text-aa-black mb-2">Glass Specification</p>
              <p className="font-sans text-sm text-aa-stone leading-relaxed">All panels are toughened safety glass (toughened to BS EN 12150) or laminated safety glass. Minimum 10mm toughened or 8.8mm laminated for balustrade applications.</p>
            </div>

            <div className="bg-aa-black rounded-2xl p-7">
              <p className="font-outfit font-bold text-sm text-yellow-400 mb-2">Building Regulations</p>
              <p className="font-sans text-sm text-stone-400 leading-relaxed mb-5">All balustrade systems are installed to UK Building Regulations (Part K). We can advise on height requirements (typically 1100mm for balconies) and load specifications.</p>
              <Link href="/contact?service=Glass+Specialist+Work"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-outfit font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200">
                Discuss your project <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-aa-border">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">All Glass Services</p>
          <p className="font-sans text-sm text-aa-stone mb-6 max-w-[60ch]">We handle all specialist glass work — not just balustrades. Here is the full list of glass services we provide:</p>
          <div className="flex flex-wrap gap-2">
            {allGlassServices.map(s => (
              <span key={s} className="inline-flex items-center gap-1.5 bg-stone-50 border border-aa-border font-sans text-sm text-aa-stone px-3 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" /> {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Wrench, CheckCircle, Star } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'The Gallop, Sutton — Full Property Transformation — AA Windows & Doors',
  description: 'Case study: 10 casement windows, 3 centre column windows, bespoke gable window and 6m aluminium sliding door installed at a detached property in Sutton, Surrey.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects/gallop-sutton-windows' },
  openGraph: {
    title: 'The Gallop, Sutton — Full Property Transformation — AA Windows & Doors',
    description: 'Complete window and door transformation: 10 casement windows, centre column windows, bespoke gable window and 6m black aluminium sliding door.',
    url: 'https://www.aawindowsanddoors.co.uk/projects/gallop-sutton-windows',
    images: [{ url: '/images/sutton-gallop-hero.jpeg', width: 1200, height: 800, alt: 'Full property transformation at The Gallop, Sutton — AA Windows & Doors' }],
  },
}

const scope = [
  { item: '10 Casement Windows', detail: 'Black aluminium casements throughout the property, precision-fitted to match the contemporary aesthetic' },
  { item: '3 Centre Column Windows', detail: 'Statement centre column feature windows adding architectural detail to the facade' },
  { item: 'Bespoke Gable Window', detail: 'Custom-designed to fill the full gable apex — engineered to match perfectly with the centre column feature' },
  { item: '6m Black Aluminium Sliding Door', detail: 'Six-metre sliding door with two flanking side windows, opening the rear of the property to the garden' },
]

const gallery = [
  { src: '/images/sutton-gallop-hero.jpeg', alt: 'Full front view of transformed property — bespoke gable window and 6m sliding door, The Gallop Sutton', wide: true },
  { src: '/images/sutton-gallop-gable-casements.jpeg', alt: 'Close-up of bespoke gable window and casement windows — The Gallop Sutton' },
  { src: '/images/sutton-gallop-centre-column.jpeg', alt: 'Centre column windows detail — The Gallop Sutton' },
  { src: '/images/sutton-gallop-corner-windows.jpeg', alt: 'Bay corner casement windows — The Gallop Sutton' },
  { src: '/images/sutton-gallop-casement-detail.jpeg', alt: 'Casement window detail with black aluminium frame — The Gallop Sutton' },
  { src: '/images/sutton-gallop-sliding-door-rear.jpeg', alt: '6m aluminium sliding door installation from garden — The Gallop Sutton' },
  { src: '/images/sutton-gallop-aerial-van.jpeg', alt: 'AA Windows & Doors van outside completed project — The Gallop Sutton' },
  { src: '/images/sutton-gallop-van-front.jpeg', alt: 'AA Windows & Doors branded van outside completed The Gallop, Sutton transformation', wide: true },
]

export default function GallopSuttonPage() {
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
              <MapPin size={11} weight="bold" /> The Gallop · Sutton, Surrey
            </span>
            <span className="inline-flex items-center gap-1.5 bg-stone-800 font-outfit font-semibold text-xs text-stone-300 px-3 py-1.5 rounded-full">
              <Wrench size={11} weight="bold" /> Windows · Aluminium Sliding Door
            </span>
            <span className="inline-flex items-center gap-1.5 bg-yellow-400 font-outfit font-bold text-xs text-black px-3 py-1.5 rounded-full">
              Featured Project
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-4xl">
            A Complete Property<br /><span className="text-yellow-400">Transformation</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[58ch]">
            Sixteen individual installations — windows, centre columns, a bespoke gable unit and a six-metre sliding door — that completely changed the look and feel of this Sutton detached home.
          </p>
        </div>
      </div>

      {/* Hero — Double Spread */}
      <div className="grid grid-cols-1 sm:grid-cols-[60%_40%] h-[380px] sm:h-[480px] lg:h-[600px]">
        <div className="relative overflow-hidden h-full">
          <Image
            src="/images/sutton-gallop-hero.jpeg"
            alt="Full front elevation of The Gallop, Sutton — bespoke gable window, casement windows and 6m aluminium sliding door by AA Windows & Doors"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-aa-black/20" />
        </div>
        <div className="relative overflow-hidden hidden sm:block border-l-2 border-yellow-400 h-full">
          <Image
            src="/images/sutton-gallop-van-front.jpeg"
            alt="AA Windows & Doors branded van parked outside completed project — The Gallop, Sutton"
            fill
            className="object-cover object-[center_20%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-aa-black/10" />
          <div className="absolute bottom-5 left-5">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400 font-outfit font-bold text-xs text-black px-3 py-1.5 rounded-full shadow-lg">
              <Star size={11} weight="fill" /> Featured Project
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-16">

          {/* Left: Brief + Scope */}
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-6">What the Client Needed</h2>
            <div className="font-sans text-base text-aa-stone leading-relaxed space-y-4 mb-12">
              <p>
                The owners of this detached property on The Gallop in Sutton wanted to modernise the entire exterior — moving from a dated aesthetic to something high-end and contemporary while preserving the character of the building.
              </p>
              <p>
                Brought in by our partners at DC Roofing Specialists, the scope was substantial: a complete window package across multiple elevations, a custom-designed gable window to fill the apex above the centre columns, and a six-metre black aluminium sliding door to open the property to the garden.
              </p>
              <p>
                Every element was specified in black aluminium — a deliberate design choice to complement the dark roof and white render, delivering the high-contrast modern finish the owners were after.
              </p>
            </div>

            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-6">Full Scope of Works</p>
            <div className="flex flex-col gap-5">
              {scope.map((s, i) => (
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

          {/* Right: Details Card + Quote */}
          <div className="flex flex-col gap-6">
            <div className="relative h-[300px] lg:h-[360px] rounded-2xl overflow-hidden">
              <Image
                src="/images/sutton-gallop-aerial-van.jpeg"
                alt="AA Windows & Doors van outside The Gallop, Sutton after completion"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-white border border-aa-border rounded-2xl p-7 shadow-[0_4px_16px_rgba(17,17,16,0.04)]">
              <p className="font-outfit font-bold text-sm text-aa-black uppercase tracking-wide mb-5">Project Details</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Location', value: 'The Gallop · Sutton, Surrey' },
                  { label: 'Property Type', value: 'Detached Residential' },
                  { label: 'Total Installations', value: '16 individual units' },
                  { label: 'Material', value: 'Black aluminium throughout' },
                  { label: 'Sliding Door Width', value: '6 metres + 2 side windows' },
                  { label: 'Referred by', value: 'DC Roofing Specialists Ltd' },
                ].map(d => (
                  <div key={d.label} className="flex justify-between border-b border-aa-border pb-3 last:border-0 last:pb-0">
                    <p className="font-sans text-xs text-aa-stone">{d.label}</p>
                    <p className="font-outfit font-semibold text-xs text-aa-black text-right max-w-[55%]">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-black mb-3">The Result</p>
              <p className="font-sans text-sm text-yellow-900 leading-relaxed italic">
                &ldquo;This project completely changed the look of the home and gave it a much more modern, high-end finish while still keeping the character of the property.&rdquo;
              </p>
              <p className="font-outfit font-semibold text-xs text-yellow-800 mt-3">— AA Windows & Doors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="bg-stone-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-3">Photo Gallery</p>
          <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-10">Every Detail, Captured</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden bg-stone-200 ${img.wide ? 'sm:col-span-2' : ''}`}
                style={{ aspectRatio: img.wide ? '16/7' : '4/3' }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Made It Different */}
      <div className="bg-aa-black text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">What Made This Special</p>
              <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                Bespoke design.<br />Precision engineering.
              </h2>
              <p className="font-sans text-base text-stone-400 leading-relaxed mb-6">
                The bespoke gable window was the centrepiece of this project — custom-engineered to fit the exact apex angle and designed to read as a seamless continuation of the centre column windows below it. No off-the-shelf unit could have achieved this.
              </p>
              <p className="font-sans text-base text-stone-400 leading-relaxed">
                The 6m sliding door was surveyed, specified and installed as a single continuous unit with two structural side windows — giving the rear elevation a floor-to-ceiling glass wall that floods the interior with light.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image src="/images/sutton-gallop-gable-casements.jpeg" alt="Bespoke gable window and casements" fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src="/images/sutton-gallop-centre-column.jpeg" alt="Centre column windows" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src="/images/sutton-gallop-casement-detail.jpeg" alt="Casement window detail" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-stone-50 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Start Your Project</p>
          <h3 className="font-outfit font-extrabold text-3xl text-aa-black mb-4">Ready for a transformation like this?</h3>
          <p className="font-sans text-aa-stone mb-8">We survey, supply and fit — no subcontractors. Get a free estimate from Sonny.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=Windows"
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

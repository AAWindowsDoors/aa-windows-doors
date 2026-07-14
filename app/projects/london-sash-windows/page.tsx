import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Wrench, CheckCircle } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'London — Sash Window Package — AA Windows & Doors',
  description: 'Case study: Full sash window replacement across a Victorian London terrace — bedrooms, bathroom, and reception rooms. AA Windows & Doors, Sutton Surrey.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects/london-sash-windows' },
  openGraph: {
    title: 'London — Sash Window Package — AA Windows & Doors',
    description: 'Full sash window replacement across a Victorian London terrace. uPVC sash throughout including frosted privacy pane for bathroom.',
    url: 'https://www.aawindowsanddoors.co.uk/projects/london-sash-windows',
    images: [{ url: '/images/project-sash-sw-van.jpeg', width: 1200, height: 800, alt: 'New sash windows installed at Victorian terrace, London' }],
  },
}

const gallery = [
  { src: '/images/project-sash-sw-van.jpeg', alt: 'New sash window with AA Windows & Doors van outside — London Victorian terrace', wide: true },
  { src: '/images/project-sash-exterior.jpeg', alt: 'Two new white sash windows on Victorian brick exterior — London' },
  { src: '/images/project-sash-garden.jpeg', alt: 'New sash window interior with garden view — London' },
  { src: '/images/project-sash-frosted-bathroom.jpeg', alt: 'Bathroom sash window with frosted lower pane for privacy — London' },
]

export default function LondonSashWindowsPage() {
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
              <MapPin size={11} weight="bold" /> London
            </span>
            <span className="inline-flex items-center gap-1.5 bg-stone-800 font-outfit font-semibold text-xs text-stone-300 px-3 py-1.5 rounded-full">
              <Wrench size={11} weight="bold" /> uPVC Sash Windows · Full Package
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-4xl">
            Victorian Terrace.<br /><span className="text-yellow-400">Full Sash Package.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[54ch]">
            Complete sash window replacement across every room of a London Victorian terrace — matched white uPVC throughout, including a privacy-glazed bathroom window.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-[380px] sm:h-[480px] lg:h-[580px]">
        <Image
          src="/images/project-sash-sw-van.jpeg"
          alt="New sash window installation with AA Windows & Doors van visible outside — London Victorian terrace"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">

          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-6">What the Client Needed</h2>
            <div className="font-sans text-base text-aa-stone leading-relaxed space-y-4 mb-12">
              <p>
                The owners of this Victorian terrace had been living with draughty, single-glazed timber sash windows for years. The frames had warped and the sash cords had worn, making windows difficult to open and causing significant heat loss.
              </p>
              <p>
                They wanted a full replacement package — matched throughout the property so every room benefited equally. The choice was white uPVC slide-and-tilt sash: thermally efficient, low maintenance, and designed to replicate the visual proportions of the originals without the upkeep.
              </p>
              <p>
                The bathroom window was specified with a frosted lower pane — clear above for light and ventilation, private below where it faces the street. A clean detail that makes a practical difference.
              </p>
            </div>

            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-6">Scope of Works</p>
            <div className="flex flex-col gap-4">
              {[
                { item: 'Full Survey', detail: 'Every window measured and assessed — opening weights, frame conditions, and lintel clearances checked before order' },
                { item: 'uPVC Sash Windows', detail: 'White slide-and-tilt sash units throughout — thermally broken, double glazed with low-E coating' },
                { item: 'Bathroom Privacy Glaze', detail: 'Frosted lower pane on the bathroom window — clear above, obscure below' },
                { item: 'Like-for-Like Fitting', detail: 'All windows fitted to existing openings — no structural alteration, clean finishes throughout' },
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

          <div className="flex flex-col gap-5">
            <div className="bg-white border border-aa-border rounded-2xl p-7 shadow-[0_4px_16px_rgba(17,17,16,0.04)]">
              <p className="font-outfit font-bold text-sm text-aa-black uppercase tracking-wide mb-5">Project Details</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Location', value: 'London' },
                  { label: 'Property', value: 'Victorian terraced residential' },
                  { label: 'Material', value: 'White uPVC slide-and-tilt sash' },
                  { label: 'Glazing', value: 'Double glazed, low-E coating' },
                  { label: 'Bathroom', value: 'Frosted lower pane (privacy)' },
                  { label: 'Scope', value: 'Full property — all elevations' },
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
                &ldquo;A full sash package done right — matched frames throughout, every detail consistent. The slide-and-tilt mechanism makes cleaning easy and the thermal improvement is immediate.&rdquo;
              </p>
              <p className="font-outfit font-semibold text-xs text-yellow-800 mt-3">— AA Windows & Doors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-stone-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-3">Photo Gallery</p>
          <h2 className="font-outfit font-extrabold text-3xl tracking-tight text-aa-black mb-8">Every Window, Captured</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <div key={i}
                className={`relative rounded-2xl overflow-hidden bg-stone-200 ${img.wide ? 'sm:col-span-2' : ''}`}
                style={{ aspectRatio: img.wide ? '16/7' : '4/3' }}>
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-aa-black py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">Sash Windows?</p>
          <h3 className="font-outfit font-extrabold text-3xl text-white mb-4">Thinking about replacing your sash windows?</h3>
          <p className="font-sans text-stone-400 mb-8">We survey, supply and fit — no subcontractors, no mess.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=Windows+%26+Glazing"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-outfit font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px]">
              Get Free Estimate <ArrowRight size={15} weight="bold" />
            </Link>
            <Link href="/projects"
              className="flex items-center gap-2 border border-white/20 hover:border-yellow-400/50 text-stone-300 hover:text-yellow-400 font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300">
              View More Projects
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

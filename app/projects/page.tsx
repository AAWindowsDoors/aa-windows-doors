import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, CheckCircle, MapPin, House, Star } from '@phosphor-icons/react/dist/ssr'

function InstagramGradientIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="white" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Projects — AA Windows & Doors',
  description: 'Browse our recent window, door, conservatory and glazing installations across London & Surrey. Every project surveyed, supplied and fitted by our own team.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects' },
  openGraph: {
    title: 'Projects — AA Windows & Doors',
    description: 'Recent installations across London & Surrey — windows, doors, conservatories, roof lanterns and more.',
    url: 'https://www.aawindowsanddoors.co.uk/projects',
    images: [{ url: '/images/sutton-gallop-hero.jpeg', width: 1200, height: 800, alt: 'AA Windows & Doors project gallery' }],
  },
}

const featuredScope = [
  '10 Casement Windows',
  '3 Centre Column Windows',
  'Bespoke Gable Window — custom-engineered for the apex',
  '6m Black Aluminium Sliding Door + 2 Side Windows',
]

const allProjects = [
  {
    title: 'SM3 — Roof Lanterns',
    type: 'Glazing · Roof Lanterns',
    detail: '20 double-glazed unit replacements and roof lanterns fitted to a flat-roof extension.',
    location: 'Cheam, Sutton · SM3',
    img: '/images/project-roof-lanterns-grid.png',
    imgAlt: 'Roof lantern installation on flat roof extension SM3 Cheam Surrey',
    href: '/projects/sm3-roof-lantern',
  },
  {
    title: 'SW18 — Bifold Doors',
    type: 'Aluminium Bifolds',
    detail: 'Aluminium bifold doors installed in a residential flat in Wandsworth.',
    location: 'Wandsworth · SW18',
    img: '/images/project-bifold-sw18-install.jpg',
    imgAlt: 'Aluminium bifold door installation SW18 Wandsworth London',
    href: '/projects/sw18-bifold-doors',
    dark: true,
  },
  {
    title: 'Surrey — Composite Door',
    type: 'Composite Door · Canopy · Sidelights',
    detail: 'Black composite front door with glass canopy and matching sidelights.',
    location: 'Surrey',
    img: '/images/project-composite-door-2panel.png',
    imgAlt: 'Black composite front door with glass canopy and sidelights Surrey',
    href: '/projects/surrey-composite-door',
  },
  {
    title: 'SW13 — Conservatory',
    type: 'Aluminium Windows',
    detail: 'Full conservatory renovation — anthracite aluminium frames replacing old white uPVC.',
    location: 'Barnes · SW13',
    img: '/images/conservatory-sw13-barnes-after.jpg',
    imgAlt: 'New anthracite aluminium conservatory after renovation SW13 Barnes',
    href: '/projects/sw13-conservatory',
    beforeImg: '/images/conservatory-sw13-barnes-before.jpg',
  },
  {
    title: 'SE24 — Timber Front Door',
    type: 'Solid Timber Door',
    detail: 'Sage green solid timber front door installed on a Victorian terrace in Herne Hill.',
    location: 'Herne Hill · SE24',
    img: '/images/project-timber-door-se24.jpg',
    imgAlt: 'Sage green solid timber front door installed SE24 Herne Hill London',
    href: '/projects/se24-timber-door',
  },
  {
    title: 'SE26 — Fire Door',
    type: 'FD30 Fire Door',
    detail: 'Oak veneer FD30 fire door installed in a residential flat following a fire risk assessment.',
    location: 'Sydenham · SE26',
    img: '/images/project-fire-door-se26.jpg',
    imgAlt: 'FD30 oak veneer fire door installed SE26 Sydenham London',
    href: '/projects/se26-fire-door',
  },
  {
    title: 'SW18 — Flat Fire Door',
    type: 'Fire Door · FRA Compliance',
    detail: 'FD30 flat entrance fire door installed following a formal Fire Risk Assessment.',
    location: 'Wandsworth · SW18',
    img: '/images/project-fire-door-sw18.jpg',
    imgAlt: 'FD30 flat entrance fire door installed following Fire Risk Assessment SW18 Wandsworth',
    href: '/projects/sw18-fire-door',
  },
  {
    title: 'Commercial uPVC Unit',
    type: 'uPVC Windows & Door',
    detail: 'Full commercial unit fit-out — uPVC windows and entrance door, Sutton Surrey.',
    location: 'Sutton, Surrey',
    img: '/images/project-commercial-upvc.jpg',
    imgAlt: 'Commercial uPVC windows and door supply and installation Sutton Surrey',
    href: '/projects/commercial-upvc-unit',
  },
  {
    title: 'London — Sash Windows',
    type: 'uPVC Sash · Full Package',
    detail: 'Full sash window replacement throughout a Victorian terrace — all rooms including frosted bathroom pane.',
    location: 'London',
    img: '/images/project-sash-sw-van.jpeg',
    imgAlt: 'New white uPVC sash windows installed at Victorian terrace London — AA van outside',
    href: '/projects/london-sash-windows',
  },
  {
    title: 'SW17 — Door Unit',
    type: 'Double Laminated Unit',
    detail: 'Wired glass panel replaced with a double laminated safety unit in a Victorian red front door, Tooting.',
    location: 'Tooting · SW17',
    img: '/images/project-tooting-door-unit.jpeg',
    imgAlt: 'Double laminated unit installed in red Victorian front door Tooting SW17 London',
    href: '/projects/sw17-door-unit',
  },
  {
    title: 'London — Flat Roof Skylights',
    type: 'Aluminium Skylights · Flat Roof',
    detail: 'Two thermally broken aluminium skylights installed on a central London flat roof — lead-dressed upstands.',
    location: 'Central London',
    img: '/images/project-skylights-flatroof.jpeg',
    imgAlt: 'Two aluminium flat roof skylights installed on a London flat roof property',
    href: '/projects/london-skylights',
  },
  {
    title: 'London — Conservatory Re-Glaze',
    type: 'Conservatory Glazing · Emergency',
    detail: 'Emergency response to stress-fractured roof panels — full re-glaze with new laminated safety glass.',
    location: 'London',
    img: '/images/project-conservatory-after.jpeg',
    imgAlt: 'New laminated glass conservatory roof installation London — emergency re-glaze',
    href: '/projects/conservatory-glazing',
  },
]

export default function ProjectsPage() {
  return (
    <PageShell>
      {/* Header */}
      <div className="bg-aa-black text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-stone-500 text-xs font-sans mb-8">
            <Link href="/" className="hover:text-yellow-400 transition-colors flex items-center gap-1">
              <House size={11} weight="bold" /> Home
            </Link>
            <span>/</span>
            <span className="text-stone-400">Projects</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">Our Work</p>
              <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-3xl">
                Every Project.<br /><span className="text-yellow-400">No Exceptions.</span>
              </h1>
              <p className="font-sans text-base text-stone-400 leading-relaxed max-w-[52ch]">
                A full archive of our installations across London and Surrey. Surveyed, supplied and fitted by our own team — no subcontractors, no shortcuts.
              </p>
            </div>

            {/* Stats + Instagram */}
            <div className="flex flex-col gap-3 shrink-0">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '9+', label: 'Case Studies' },
                  { value: '122', label: 'Reviews' },
                  { value: '10/10', label: 'Checkatrade' },
                ].map(s => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                    <p className="font-outfit font-extrabold text-xl text-yellow-400 leading-none mb-1">{s.value}</p>
                    <p className="font-sans text-xs text-stone-500 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
              <a href="https://www.instagram.com/_aa_windows_doors" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-outfit font-bold text-sm text-white px-5 py-3 rounded-full transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px]"
                style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 20%, #d6249f 50%, #285AEB 90%)' }}>
                <InstagramGradientIcon size={15} />
                Follow @_aa_windows_doors
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Project */}
      <div className="bg-stone-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-6 flex items-center gap-1.5"><Star size={12} weight="fill" /> Featured Project</p>
          <Link href="/projects/gallop-sutton-windows" className="group block">
            <div className="relative rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-[38%_22%_40%] h-[400px] lg:h-[520px] border border-white/10 hover:border-yellow-400/40 transition-colors duration-500">

              {/* Architecture photo */}
              <div className="relative overflow-hidden h-full">
                <Image
                  src="/images/sutton-gallop-hero.jpeg"
                  alt="Full front elevation of The Gallop, Sutton — bespoke gable window and 6m sliding door by AA Windows & Doors"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  priority
                />
              </div>

              {/* Van / brand photo */}
              <div className="relative overflow-hidden hidden lg:block h-full border-l-2 border-yellow-400">
                <Image
                  src="/images/sutton-gallop-van-front.jpeg"
                  alt="AA Windows & Doors branded van parked outside The Gallop, Sutton"
                  fill
                  className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-[1.03]"
                  priority
                />
              </div>

              <div className="bg-stone-950 flex flex-col justify-center p-8 lg:p-10 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={12} weight="bold" className="text-yellow-400" />
                    <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest">The Gallop · Sutton, Surrey</p>
                  </div>
                  <h2 className="font-outfit font-extrabold text-2xl lg:text-3xl text-white leading-tight mb-3">
                    Complete Property Transformation
                  </h2>
                  <p className="font-sans text-sm text-stone-400 leading-relaxed">
                    Sixteen individual window and door installations — a cohesive black aluminium package that transformed a period home into a modern statement property.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5">
                  {featuredScope.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={14} weight="fill" className="text-yellow-400 shrink-0 mt-0.5" />
                      <p className="font-sans text-sm text-stone-300">{item}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 group-hover:bg-yellow-400 group-hover:border-yellow-400 font-outfit font-semibold text-sm text-yellow-400 group-hover:text-black px-4 py-2.5 rounded-full transition-all duration-300">
                    View full case study
                    <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* All Projects Grid */}
      <div className="bg-stone-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-3">All Installs</p>
          <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-10">More Recent Work</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allProjects.map((project) => (
              <Link key={project.title} href={project.href} className="group flex flex-col rounded-2xl overflow-hidden border border-aa-border hover:border-yellow-400/50 bg-white transition-all duration-300 hover:shadow-[0_8px_32px_rgba(17,17,16,0.08)] hover:-translate-y-0.5">
                <div className={`relative aspect-[4/3] ${project.dark ? 'bg-stone-900' : 'bg-stone-100'} overflow-hidden`}>
                  {project.beforeImg ? (
                    <div className="absolute inset-0 grid grid-cols-2">
                      <div className="relative overflow-hidden">
                        <Image src={project.beforeImg} alt="Before renovation" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                        <span className="absolute top-2 left-2 z-10 bg-black/70 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded font-outfit font-bold tracking-widest">BEFORE</span>
                      </div>
                      <div className="relative overflow-hidden border-l border-white/20">
                        <Image src={project.img} alt={project.imgAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                        <span className="absolute top-2 left-2 z-10 bg-yellow-400 text-black text-[10px] px-2 py-0.5 rounded font-outfit font-bold tracking-widest">AFTER</span>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={project.img}
                      alt={project.imgAlt}
                      fill
                      className={`${project.dark ? 'object-contain p-4' : 'object-cover'} transition-transform duration-700 group-hover:scale-[1.05]`}
                    />
                  )}
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-outfit font-bold text-base text-aa-black leading-tight mb-0.5">{project.title}</p>
                      <p className="font-sans text-xs text-yellow-600 font-semibold">{project.type}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-aa-border flex items-center justify-center shrink-0 group-hover:border-yellow-400/50 group-hover:bg-yellow-400/5 transition-all duration-300">
                      <ArrowUpRight size={14} weight="bold" className="text-aa-stone group-hover:text-yellow-500 transition-colors" />
                    </div>
                  </div>
                  <p className="font-sans text-sm text-aa-stone leading-relaxed">{project.detail}</p>
                  <div className="flex items-center gap-1.5 mt-auto pt-2">
                    <MapPin size={11} weight="bold" className="text-stone-400" />
                    <p className="font-sans text-xs text-stone-400">{project.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-aa-black py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">Start Your Project</p>
          <h3 className="font-outfit font-extrabold text-3xl text-white mb-4">Ready to add yours to the list?</h3>
          <p className="font-sans text-stone-400 mb-8">Free estimates, fast turnaround. London & Surrey.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-outfit font-bold text-sm px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-[1px]">
            Get Free Estimate <ArrowRight size={15} weight="bold" />
          </Link>
        </div>
      </div>
    </PageShell>
  )
}

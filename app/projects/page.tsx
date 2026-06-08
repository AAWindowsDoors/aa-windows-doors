import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, CheckCircle, MapPin } from '@phosphor-icons/react/dist/ssr'
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
]

export default function ProjectsPage() {
  return (
    <PageShell>
      {/* Header */}
      <div className="bg-aa-black text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">Our Work</p>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Every Project.<br /><span className="text-yellow-400">No Exceptions.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            A full archive of our installations across London and Surrey. Surveyed, supplied and fitted by our own team — no subcontractors, no shortcuts.
          </p>
        </div>
      </div>

      {/* Featured Project */}
      <div className="bg-stone-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-6">★ Featured Project</p>
          <Link href="/projects/gallop-sutton-windows" className="group block">
            <div className="relative rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-[60%_40%] min-h-[460px] lg:min-h-[520px] border border-white/10 hover:border-yellow-400/40 transition-colors duration-500">

              <div className="grid grid-cols-[62%_38%] min-h-[300px] lg:min-h-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/sutton-gallop-hero.jpeg"
                    alt="Full front elevation of The Gallop, Sutton — bespoke gable window and 6m sliding door by AA Windows & Doors"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    priority
                  />
                </div>
                <div className="relative overflow-hidden border-l-2 border-yellow-400">
                  <Image
                    src="/images/sutton-gallop-van-front.jpeg"
                    alt="AA Windows & Doors branded van parked outside The Gallop, Sutton"
                    fill
                    className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-[1.03]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-stone-950/60 hidden lg:block" />
                </div>
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
                <div className="flex items-center gap-2 font-outfit font-semibold text-sm text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  View full case study <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-1" />
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

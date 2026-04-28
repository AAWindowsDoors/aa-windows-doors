'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from '@phosphor-icons/react'

const projects = [
  {
    title: 'SM3 — Roof Lantern Installation',
    type: '20x Double Glazed Units + Roof Lanterns',
    img: '/images/project-roof-lanterns-grid.png',
    imgAlt: 'Roof lantern installation on flat roof extension, SM3 Cheam Surrey',
    href: '/projects/sm3-roof-lantern',
    span: 'lg:row-span-2',
    aspect: 'aspect-[3/4] lg:aspect-auto lg:h-full',
    imgClass: 'object-cover',
    bgClass: '',
  },
  {
    title: 'SE26 — Fire Door Installation',
    type: 'Oak Fire Door · Flat Installation',
    img: '/images/project-fire-door-se26.jpg',
    imgAlt: 'FD30 oak veneer fire door installed in residential flat, SE26 Sydenham London',
    href: '/projects/se26-fire-door',
    span: '',
    aspect: 'aspect-[4/3]',
    imgClass: 'object-contain',
    bgClass: 'bg-stone-100',
  },
  {
    title: 'Sutton — Glass Balustrades',
    type: 'Stainless Steel & Glass Balustrade System',
    img: '/images/service-glass-balustrade.png',
    imgAlt: 'Stainless steel and glass balustrade system on terrace, Sutton Surrey',
    href: '/projects/sutton-glass-balustrades',
    span: '',
    aspect: 'aspect-[4/3]',
    imgClass: 'object-cover',
    bgClass: '',
  },
  {
    title: 'Surrey — Composite Front Door',
    type: 'Composite Door + Canopy + Sidelights',
    img: '/images/project-composite-door-2panel.png',
    imgAlt: 'Black composite front door with glass canopy and sidelights, Surrey',
    href: '/projects/surrey-composite-door',
    span: 'lg:col-span-2',
    aspect: 'aspect-[16/9]',
    imgClass: 'object-cover',
    bgClass: '',
  },
  {
    title: 'SW18 — Bifold Door Installation',
    type: 'Bifold Doors · Residential Flat',
    img: '/images/project-bifold-sw18-install.jpg',
    imgAlt: 'Aluminium bifold door installation in residential flat, SW18 Wandsworth London',
    href: '/projects/sw18-bifold-doors',
    span: 'lg:col-span-2',
    aspect: 'aspect-[16/9]',
    imgClass: 'object-contain',
    bgClass: 'bg-stone-900',
  },
  {
    title: 'SW13 — Conservatory Windows',
    type: 'Aluminium Windows & Frames · Barnes',
    img: '/images/project-conservatory-sw13.webp',
    imgAlt: 'Anthracite aluminium conservatory windows and frames, SW13 Barnes London',
    href: '/projects/sw13-conservatory',
    span: '',
    aspect: 'aspect-[4/3]',
    imgClass: 'object-contain',
    bgClass: 'bg-stone-900',
  },
  {
    title: 'SE24 — Timber Front Door',
    type: 'Solid Timber Door · Herne Hill',
    img: '/images/project-timber-door-se24.jpg',
    imgAlt: 'Sage green solid timber front door installed, SE24 Herne Hill London',
    href: '/projects/se24-timber-door',
    span: '',
    aspect: 'aspect-[4/3]',
    imgClass: 'object-cover',
    bgClass: '',
  },
  {
    title: 'SW18 — Flat Entrance Fire Door',
    type: 'Fire Door · FRA Compliance',
    img: '/images/project-fire-door-sw18.jpg',
    imgAlt: 'FD30 flat entrance fire door installed following Fire Risk Assessment, SW18 Wandsworth',
    href: '/projects/sw18-fire-door',
    span: '',
    aspect: 'aspect-[4/3]',
    imgClass: 'object-cover',
    bgClass: '',
  },
  {
    title: 'Commercial uPVC Installation',
    type: 'uPVC Windows & Door · Commercial Unit',
    img: '/images/project-commercial-upvc.jpg',
    imgAlt: 'Commercial uPVC windows and door supply and installation, Sutton Surrey',
    href: '/projects/commercial-upvc-unit',
    span: '',
    aspect: 'aspect-[4/3]',
    imgClass: 'object-cover',
    bgClass: '',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-3">Recent Installs</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight text-aa-black leading-tight">Work We Stand Behind</h2>
          </div>
          <Link href="/contact" className="group inline-flex items-center gap-2 font-outfit font-semibold text-sm text-yellow-600 hover:text-yellow-700 transition-colors w-fit shrink-0">
            Start your project
            <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`${project.span} ${project.aspect}`}
            >
              <Link href={project.href} className={`group relative block w-full h-full rounded-2xl overflow-hidden cursor-pointer ${project.bgClass}`}>
                {project.href === '/projects/sw13-conservatory' ? (
                  <div className="absolute inset-0 grid grid-cols-2">
                    <div className="relative overflow-hidden">
                      <Image src="/images/conservatory-sw13-barnes-before.jpg" alt="Old white uPVC conservatory before renovation, SW13 Barnes" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                      <span className="absolute top-2 left-2 z-10 bg-black/70 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded font-outfit font-bold tracking-widest">BEFORE</span>
                    </div>
                    <div className="relative overflow-hidden border-l border-white/20">
                      <Image src="/images/conservatory-sw13-barnes-after.jpg" alt="New anthracite aluminium conservatory after renovation, SW13 Barnes" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                      <span className="absolute top-2 left-2 z-10 bg-yellow-400 text-black text-[10px] px-2 py-0.5 rounded font-outfit font-bold tracking-widest">AFTER</span>
                    </div>
                  </div>
                ) : (
                  <Image src={project.img} alt={project.imgAlt} fill
                    className={`${project.imgClass} transition-transform duration-700 group-hover:scale-[1.05]`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-aa-black/70 via-aa-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <p className="font-sans text-xs text-yellow-400 mb-1">{project.type}</p>
                  <h3 className="font-outfit font-bold text-lg text-white leading-tight">{project.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                  <ArrowUpRight size={14} weight="bold" className="text-white" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

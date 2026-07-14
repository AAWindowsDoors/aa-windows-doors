'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle, ArrowRight, Star } from '@phosphor-icons/react'

function InstagramGradientIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="white" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

const featuredScope = [
  '10 Casement Windows',
  '3 Centre Column Windows',
  'Bespoke Gable Window',
  '6m Aluminium Sliding Door + 2 Side Windows',
]

const supporting = [
  {
    title: 'London — Sash Windows',
    type: 'uPVC Sash · Full Package',
    location: 'London',
    img: '/images/project-sash-sw-van.jpeg',
    imgAlt: 'New sash window installation with AA Windows & Doors van outside, London Victorian terrace',
    href: '/projects/london-sash-windows',
  },
  {
    title: 'London — Conservatory Re-Glaze',
    type: 'Conservatory Glazing · Emergency',
    location: 'London',
    img: '/images/project-conservatory-after.jpeg',
    imgAlt: 'New laminated safety glass panels installed on conservatory roof, London',
    href: '/projects/conservatory-glazing',
  },
  {
    title: 'London — Flat Roof Skylights',
    type: 'Aluminium Skylights · Flat Roof',
    location: 'Central London',
    img: '/images/project-skylights-flatroof.jpeg',
    imgAlt: 'Two aluminium flat roof skylights installed on a central London felt roof',
    href: '/projects/london-skylights',
  },
  {
    title: 'SW17 — Door Unit',
    type: 'Double Laminated Unit',
    location: 'Tooting, London',
    img: '/images/project-tooting-door-unit.jpeg',
    imgAlt: 'Before and after: double laminated safety unit fitted to red Victorian front door, Tooting SW17',
    href: '/projects/sw17-door-unit',
  },
  {
    title: 'SM3 — Roof Lanterns',
    type: 'Glazing · Roof Lanterns',
    location: 'Cheam, Sutton',
    img: '/images/project-roof-lanterns-grid.png',
    imgAlt: 'Roof lantern installation on flat roof extension, SM3 Cheam Surrey',
    href: '/projects/sm3-roof-lantern',
  },
  {
    title: 'SW18 — Bifold Doors',
    type: 'Aluminium Bifolds · Residential',
    location: 'Wandsworth, London',
    img: '/images/project-bifold-sw18-install.jpg',
    imgAlt: 'Aluminium bifold door installation SW18 Wandsworth London',
    href: '/projects/sw18-bifold-doors',
    dark: true,
  },
  {
    title: 'Surrey — Composite Door',
    type: 'Composite Door · Canopy · Sidelights',
    location: 'Surrey',
    img: '/images/project-composite-door-2panel.png',
    imgAlt: 'Black composite front door with glass canopy and sidelights, Surrey',
    href: '/projects/surrey-composite-door',
  },
  {
    title: 'SW13 — Conservatory',
    type: 'Aluminium Windows · Barnes',
    location: 'Barnes, London',
    img: '/images/conservatory-sw13-barnes-after.jpg',
    imgAlt: 'New anthracite aluminium conservatory after renovation SW13 Barnes',
    href: '/projects/sw13-conservatory',
  },
  {
    title: 'SE24 — Timber Door',
    type: 'Solid Timber · Herne Hill',
    location: 'Herne Hill, London',
    img: '/images/project-timber-door-se24.jpg',
    imgAlt: 'Sage green solid timber front door SE24 Herne Hill London',
    href: '/projects/se24-timber-door',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-aa-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-3">Recent Installs</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
              Work That Speaks<br />For Itself
            </h2>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-2 font-outfit font-semibold text-sm text-stone-400 hover:text-yellow-400 transition-colors w-fit shrink-0">
            View all projects
            <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Featured Project — The Gallop, Sutton */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <Link href="/projects/gallop-sutton-windows" className="group block">
            <div className="relative rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-[38%_22%_40%] h-[420px] lg:h-[540px] border border-white/10 hover:border-yellow-400/40 transition-colors duration-500">

              {/* Architecture photo */}
              <div className="relative overflow-hidden h-full">
                <Image
                  src="/images/sutton-gallop-hero.jpeg"
                  alt="Full front elevation of The Gallop, Sutton — bespoke gable window and 6m sliding door"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  priority
                />
                {/* Featured badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-yellow-400 font-outfit font-bold text-xs text-black px-3 py-1.5 rounded-full shadow-lg">
                    <Star size={11} weight="fill" /> Featured Project
                  </span>
                </div>
              </div>

              {/* Van / brand photo */}
              <div className="relative overflow-hidden hidden lg:block h-full border-l-2 border-yellow-400">
                <Image
                  src="/images/sutton-gallop-van-front.jpeg"
                  alt="AA Windows & Doors branded van parked outside The Gallop, Sutton"
                  fill
                  className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-[1.04]"
                  priority
                />
              </div>

              {/* Details Panel */}
              <div className="relative bg-stone-950 flex flex-col justify-center p-8 lg:p-10 gap-6">
                <div>
                  <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-2">
                    The Gallop · Sutton, Surrey
                  </p>
                  <h3 className="font-outfit font-extrabold text-2xl lg:text-3xl text-white leading-tight mb-3">
                    Complete Property<br />Transformation
                  </h3>
                  <p className="font-sans text-sm text-stone-400 leading-relaxed">
                    Sixteen installations across all elevations — a cohesive black aluminium package that gave a period home a stunning modern finish.
                  </p>
                </div>

                {/* Scope list */}
                <div className="flex flex-col gap-2.5">
                  {featuredScope.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={15} weight="fill" className="text-yellow-400 shrink-0 mt-0.5" />
                      <p className="font-sans text-sm text-stone-300">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="border-l-2 border-yellow-400/50 pl-4">
                  <p className="font-sans text-sm text-stone-400 italic leading-relaxed">
                    &ldquo;Completely changed the look of the home — modern, high-end finish while keeping the character of the property.&rdquo;
                  </p>
                </div>

                {/* CTA */}
                <div>
                  <span className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 group-hover:bg-yellow-400 group-hover:border-yellow-400 font-outfit font-semibold text-sm text-yellow-400 group-hover:text-black px-4 py-2.5 rounded-full transition-all duration-300">
                    View full case study
                    <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Supporting Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {supporting.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={project.href} className={`group relative block w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer ${project.dark ? 'bg-stone-900' : 'bg-stone-800'}`}>
                <Image
                  src={project.img}
                  alt={project.imgAlt}
                  fill
                  className={`${project.dark ? 'object-contain' : 'object-cover'} transition-transform duration-700 group-hover:scale-[1.05]`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-outfit text-xs text-yellow-400 mb-1 uppercase tracking-widest font-semibold">{project.location}</p>
                  <h3 className="font-outfit font-bold text-base text-white leading-tight mb-0.5">{project.title}</h3>
                  <p className="font-sans text-xs text-stone-400">{project.type}</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight size={14} weight="bold" className="text-white" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col items-center gap-6 mt-12 pt-10 border-t border-white/10 text-center"
        >
          <p className="font-sans text-sm text-stone-500">
            Every project surveyed, supplied and fitted by our own team — no subcontractors.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/projects"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-yellow-400/50 text-stone-300 hover:text-yellow-400 font-outfit font-semibold text-sm px-5 py-3 rounded-full transition-all duration-300">
              All Projects <ArrowUpRight size={14} weight="bold" />
            </Link>
            <a href="https://www.instagram.com/_aa_windows_doors" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-outfit font-bold text-sm text-white px-5 py-3 rounded-full transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px]"
              style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 20%, #d6249f 50%, #285AEB 90%)' }}>
              <InstagramGradientIcon size={15} /> @_aa_windows_doors
            </a>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-outfit font-bold text-sm px-5 py-3 rounded-full transition-all duration-300">
              Get Free Estimate <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

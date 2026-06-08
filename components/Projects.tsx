'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle, ArrowRight } from '@phosphor-icons/react'

const featuredScope = [
  '10 Casement Windows',
  '3 Centre Column Windows',
  'Bespoke Gable Window',
  '6m Aluminium Sliding Door + 2 Side Windows',
]

const supporting = [
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
  {
    title: 'SE26 — Fire Door',
    type: 'FD30 Fire Door · Flat',
    location: 'Sydenham, London',
    img: '/images/project-fire-door-se26.jpg',
    imgAlt: 'FD30 oak veneer fire door installed SE26 Sydenham London',
    href: '/projects/se26-fire-door',
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
          className="mb-4"
        >
          <Link href="/projects/gallop-sutton-windows" className="group block">
            <div className="relative rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-[60%_40%] min-h-[480px] lg:min-h-[540px] border border-white/10 hover:border-yellow-400/40 transition-colors duration-500">

              {/* Image Panel — double spread */}
              <div className="grid grid-cols-[62%_38%] min-h-[320px] lg:min-h-0 relative">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/sutton-gallop-hero.jpeg"
                    alt="Full front elevation of The Gallop, Sutton — bespoke gable window and 6m sliding door"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aa-black/60 via-transparent to-transparent lg:hidden" />
                </div>
                <div className="relative overflow-hidden border-l-2 border-yellow-400">
                  <Image
                    src="/images/sutton-gallop-van-front.jpeg"
                    alt="AA Windows & Doors branded van parked outside The Gallop, Sutton"
                    fill
                    className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-[1.04]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-aa-black/50 lg:to-aa-black/70" />
                </div>

                {/* Featured badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-yellow-400 font-outfit font-bold text-xs text-black px-3 py-1.5 rounded-full shadow-lg">
                    ★ Featured Project
                  </span>
                </div>
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
                <div className="flex items-center gap-2 font-outfit font-semibold text-sm text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  View full case study
                  <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Supporting Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  <p className="font-sans text-[11px] text-yellow-400 mb-1 uppercase tracking-widest font-semibold">{project.location}</p>
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
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-10 border-t border-white/10"
        >
          <p className="font-sans text-sm text-stone-500 text-center sm:text-left">
            Every project surveyed, supplied and fitted by our own team — no subcontractors.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link href="/projects"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-yellow-400/50 text-stone-300 hover:text-yellow-400 font-outfit font-semibold text-sm px-5 py-3 rounded-full transition-all duration-300">
              All Projects <ArrowUpRight size={14} weight="bold" />
            </Link>
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

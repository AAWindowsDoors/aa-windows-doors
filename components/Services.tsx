'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from '@phosphor-icons/react'

const services = [
  {
    title: 'Windows & Glazing',
    desc: 'UPVC, aluminium and timber windows supplied, fitted and repaired. Single, double and triple glazing for domestic and commercial properties across London & Surrey.',
    detail: 'Casement · Bay · Sash · Loft · Roof · Secondary · Frosted · Window Film & Tinting · Window Shutters · Draught Proofing · UPVC Spraying · uPVC · Aluminium · Timber',
    img: '/images/service-windows-collage.png',
    imgAlt: 'UPVC, aluminium and timber window installation across Sutton, London and Surrey',
    flipped: false,
    serviceParam: 'Windows & Glazing',
    href: '/services/window-installation',
    overlay: { label: 'View Timber Range', href: '/services/timber-windows-doors' },
  },
  {
    title: 'Doors — All Types',
    desc: 'Composite front doors, fire doors, bi-folds, sliders and French doors — supplied, fitted and repaired. Every door is aligned precisely so it opens, closes and locks as it should.',
    detail: 'Composite · Fire Doors (FD30/FD60) · Bi-fold · French · Patio · Sliding · Stable · Exterior · Door Canopies · Porch Installation · Cat & Dog Flaps · uPVC · Aluminium · Timber',
    img: '/images/service-doors-collage.png',
    imgAlt: 'Composite, fire door, bifold and timber door installation, Sutton Surrey',
    flipped: true,
    serviceParam: 'Doors — All Types',
    href: '/services/door-installation',
    overlay: null,
  },
  {
    title: 'Glass Specialist Work',
    desc: 'Roof lanterns, glass balustrades, shower screens, stained glass restoration, mirrors, leadwork and glass polishing. We handle specialist glass work most companies won\'t touch.',
    detail: 'Roof Lanterns · Balustrades · Shower Screens · Splashbacks · Stained Glass · Leadwork · Mirrors · Glass Polishing · Glass Restoration · Conservatories & Orangeries',
    img: '/images/service-balustrade-terrace.png',
    imgAlt: 'Glass balustrade and roof lantern specialist installation, Surrey',
    flipped: false,
    serviceParam: 'Glass Specialist Work',
    href: '/services/glass-balustrades',
    overlay: null,
  },
  {
    title: 'Commercial & Emergency',
    desc: '24-hour emergency boarding, glazing and locksmith service. We also take on shop fronts, insurance work and all aspects of commercial glazing across a 20-mile radius of Sutton.',
    detail: '24hr Call-Out · Boarding · Locksmith · Shop Fronts · Insurance Work · Misted Unit Replacement · uPVC Repairs · Aluminium Repairs · Emergency Windows & Doors',
    img: '/images/service-emergency-commercial.png',
    imgAlt: '24-hour emergency glazing and commercial window installation, Sutton Surrey',
    flipped: true,
    serviceParam: 'Emergency & Commercial',
    href: '/services/emergency-glazing',
    overlay: null,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-aa-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }} className="mb-20"
        >
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-3">What We Do</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight text-aa-black max-w-xl leading-tight">
              Windows, Doors & Glass — All Under One Roof
            </h2>
            <p className="font-sans text-base text-aa-stone leading-relaxed max-w-[44ch] lg:text-right">
              Sutton-based, serving London & Surrey. No subcontractors — Sonny and the AA team handle every job directly.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-20 lg:gap-28">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${svc.flipped ? 'lg:[direction:rtl]' : ''}`}
            >
              <div className={`relative rounded-[20px] overflow-hidden aspect-[4/3] shadow-[0_20px_40px_-12px_rgba(17,17,16,0.12)] ${svc.flipped ? 'lg:[direction:ltr]' : ''}`}>
                <Image src={svc.img} alt={svc.imgAlt} fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent" />
                {svc.overlay && (
                  <Link href={svc.overlay.href}
                    className="absolute bottom-4 left-4 flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-xs px-4 py-2 rounded-full transition-all duration-200 shadow-[0_4px_12px_rgba(234,179,8,0.4)] hover:-translate-y-[1px]">
                    {svc.overlay.label}
                    <ArrowRight size={13} weight="bold" />
                  </Link>
                )}
              </div>

              <div className={`flex flex-col ${svc.flipped ? 'lg:[direction:ltr]' : ''}`}>
                <span className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">0{i + 1}</span>
                <h3 className="font-outfit font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight text-aa-black mb-5 leading-tight">{svc.title}</h3>
                <p className="font-sans text-base text-aa-stone leading-relaxed max-w-[50ch] mb-6">{svc.desc}</p>
                <div className="border-t border-aa-border pt-5 mb-8">
                  <p className="font-sans text-sm text-aa-stone">{svc.detail}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href={svc.href}
                    className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-outfit font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-[1px] shadow-[0_4px_14px_rgba(234,179,8,0.3)]">
                    View Service
                    <ArrowRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                  <Link href={`/contact?service=${encodeURIComponent(svc.serviceParam)}`}
                    className="group inline-flex items-center gap-2 font-outfit font-semibold text-sm text-yellow-600 hover:text-yellow-700 transition-colors duration-200 w-fit">
                    Get a quote
                    <ArrowUpRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

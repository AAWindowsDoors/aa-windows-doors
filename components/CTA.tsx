'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Phone } from '@phosphor-icons/react'

export default function CTA() {
  return (
    <section className="relative bg-aa-black py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-roof-lanterns.png" alt="" fill
          className="object-cover opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-aa-black via-aa-black/90 to-aa-black/70" />
      </div>

      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-400/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">Ready to Start?</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-5xl lg:text-6xl tracking-tight text-aa-white leading-[1.05] mb-6">
              Your Home Deserves Frames Built Right.
            </h2>
            <p className="font-sans text-base text-stone-400 leading-relaxed max-w-[50ch] mb-10">
              Get a free, no-pressure estimate from Sonny and the team. We cover Sutton, London & Surrey — domestic and commercial. Cards accepted.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/contact"
                className="group flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-outfit font-semibold text-sm px-6 py-4 rounded-full transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] shadow-[0_8px_28px_rgba(234,179,8,0.35)]">
                Get Free Estimate
                <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="tel:+447585586388"
                className="flex items-center gap-2 border border-stone-700 hover:border-yellow-400 text-stone-300 hover:text-yellow-400 font-outfit font-semibold text-sm px-6 py-4 rounded-full transition-all duration-300 hover:-translate-y-[1px]">
                <Phone size={16} weight="bold" />
                Call Us Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] rounded-2xl p-8"
          >
            <p className="font-outfit font-bold text-sm text-yellow-400 mb-6 uppercase tracking-wider">Contact</p>

            <div className="flex flex-col gap-5">
              {[
                { label: 'Phone', value: '07585 586388', href: 'tel:+447585586388' },
                { label: 'Email', value: 'AA.windowsanddoorss@gmail.com', href: 'mailto:AA.windowsanddoorss@gmail.com' },
                { label: 'Location', value: 'Sutton, Surrey', href: null },
                { label: 'Service Area', value: 'London & Surrey (20-mile radius)', href: null },
              ].map((item) => (
                <div key={item.label} className="border-b border-white/[0.08] pb-5 last:border-0 last:pb-0">
                  <p className="font-sans text-xs text-stone-500 mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-outfit font-semibold text-base text-aa-white hover:text-yellow-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-outfit font-semibold text-base text-aa-white">{item.value}</p>
                  )}
                </div>
              ))}

              <div className="pt-2">
                <p className="font-sans text-xs text-stone-500 mb-2">Hours</p>
                <p className="font-sans text-sm text-stone-300">Mon–Fri: 7am–6pm</p>
                <p className="font-sans text-sm text-stone-300">Sat: 8am–2pm</p>
                <p className="font-sans text-sm text-yellow-500 mt-1">Emergency: 24/7</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

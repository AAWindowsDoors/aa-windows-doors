'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from '@phosphor-icons/react'

const faqs = [
  {
    q: 'Do you provide free estimates?',
    a: 'Yes — all estimates are completely free, no-obligation, and done in person at your property. Sonny will visit, assess the job, and give you a clear quote before any work begins.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We are based in Sutton, Surrey and cover a 20-mile radius — including all surrounding areas of London and Surrey. Both domestic and commercial properties are welcome.',
  },
  {
    q: 'Do you offer 24-hour emergency call-outs?',
    a: 'Yes. We offer a 24-hour emergency boarding, glazing and locksmith service. If you have a broken window, failed lock, or compromised door after a break-in or storm, call us immediately.',
  },
  {
    q: 'Are you Checkatrade verified?',
    a: 'Yes. AA Windows & Doors has been a Checkatrade member since February 2023 and has passed up to 12 individual and business vetting checks. We hold a 10/10 rating from 122 verified reviews.',
  },
  {
    q: 'What types of windows and doors do you supply and fit?',
    a: 'We supply, fit and repair UPVC, aluminium and timber windows and doors — including casement, bay, sash, bi-fold, composite, fire doors, French doors, sliding doors and shop fronts. We also handle single, double and triple glazing.',
  },
  {
    q: 'Do you carry out insurance and commercial work?',
    a: 'Yes. We undertake insurance work and all aspects of commercial repairs, glazing and locksmith services. We accept cards and can provide documentation for insurance purposes.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="contact" className="py-24 lg:py-32 bg-aa-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight text-aa-black leading-tight mb-6">
              Common Questions
            </h2>
            <p className="font-sans text-base text-aa-stone leading-relaxed max-w-[44ch] mb-10">
              Still have questions? Call us directly — we answer the phone.
            </p>
            <a href="tel:+447585586388"
              className="inline-flex items-center gap-2 bg-aa-black text-aa-white font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-stone-800 hover:-translate-y-[1px] active:scale-[0.98]">
              07585 586388
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="divide-y divide-aa-border"
          >
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 text-left group">
                  <span className={`font-outfit font-semibold text-base leading-snug transition-colors duration-200 ${open === i ? 'text-yellow-600' : 'text-aa-black group-hover:text-yellow-600'}`}>
                    {faq.q}
                  </span>
                  <span className="shrink-0 mt-0.5 text-aa-stone">
                    {open === i ? <Minus size={18} weight="bold" /> : <Plus size={18} weight="bold" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-sm text-aa-stone leading-relaxed pt-3 max-w-[60ch]">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

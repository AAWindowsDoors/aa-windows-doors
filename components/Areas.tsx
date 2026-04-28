'use client'

import { motion } from 'framer-motion'
import { MapPin } from '@phosphor-icons/react'

const locations = [
  'Sutton', 'Croydon', 'Wimbledon', 'Kingston upon Thames', 'Epsom',
  'Cheam', 'Carshalton', 'Wallington', 'Morden', 'Mitcham',
  'Tooting', 'Streatham', 'Balham', 'Purley', 'Banstead',
  'Reigate', 'Woking', 'Guildford', 'South London',
]

export default function Areas() {
  return (
    <section className="py-16 lg:py-20 bg-aa-white border-t border-aa-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-start gap-10"
        >
          <div className="shrink-0 lg:w-56">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={14} weight="bold" className="text-yellow-500" />
              <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest">Areas We Cover</p>
            </div>
            <p className="font-sans text-sm text-aa-stone leading-relaxed">
              Based in Sutton — 20-mile radius across London & Surrey.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {locations.map((loc) => (
              <span key={loc}
                className="font-sans text-sm text-aa-stone bg-white border border-aa-border px-3.5 py-1.5 rounded-full shadow-[0_1px_4px_rgba(17,17,16,0.04)]">
                {loc}
              </span>
            ))}
            <span className="font-sans text-sm text-yellow-700 bg-yellow-50 border border-yellow-200 px-3.5 py-1.5 rounded-full font-semibold">
              + surrounding areas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

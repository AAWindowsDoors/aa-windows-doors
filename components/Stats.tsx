'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '10+', label: 'Years experience', sub: 'Windows, Doors & Glass trade' },
  { value: '122', label: 'Checkatrade reviews', sub: 'All verified, all genuine' },
  { value: '10/10', label: 'Customer rating', sub: 'Quality · Reliability · Communication' },
  { value: '24hr', label: 'Emergency call-out', sub: 'Boarding, glazing & locksmith' },
]

export default function Stats() {
  return (
    <section className="bg-aa-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-stone-800">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 py-10 lg:px-10 flex flex-col"
            >
              <span className="font-outfit font-extrabold text-4xl md:text-5xl text-aa-white tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="font-outfit font-semibold text-sm text-yellow-400 mt-3 mb-1">
                {stat.label}
              </span>
              <span className="font-sans text-xs text-stone-500">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

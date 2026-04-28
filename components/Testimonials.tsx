'use client'

import { motion } from 'framer-motion'
import { Star } from '@phosphor-icons/react'

const reviews = [
  {
    title: 'AA Windows Review',
    job: 'Glass Replacement',
    location: 'SM3',
    rating: 10,
    text: '20x double glazed unit replacements, Roof lantern supply & installation. Sonny & the AA team completed a number of works at my property. From the start to the end communication was on point and work was completed to a high standard. Highly recommend!',
    date: 'March 2025',
  },
  {
    title: 'Excellent, Recommended',
    job: 'Fire Doors Installation',
    location: 'SE26',
    rating: 10,
    text: 'Sonny was very helpful confirming requirements for installation of a new fire door at my flat. Ray did the installation, was very professional and did an excellent job, even entertaining my 3 and 1 year old who wanted to watch his master carpentry in action.',
    date: 'March 2025',
  },
  {
    title: 'Highly Professional and Reliable Service',
    job: 'Windows Supply',
    location: 'Surrey',
    rating: 10,
    text: 'Sonny supplied us with uPVC windows and frames for our conservatory and the entire process was handled exceptionally well from start to finish. Sonny was professional, responsive, and incredibly helpful throughout. Communication was clear, timelines were met, and everything arrived exactly as expected. A really smooth, stress-free experience. Highly recommend.',
    date: 'February 2025',
  },
  {
    title: 'Outstanding Workmanship',
    job: 'Roof Lantern Installation',
    location: 'Sutton',
    rating: 10,
    text: 'Customers consistently praise this company for its excellent communication, professionalism, and high-quality workmanship. The team\'s speed, reliability, and friendliness deliver an efficient service at a competitive price.',
    date: 'January 2025',
  },
  {
    title: 'Fast & Reliable Emergency Call-Out',
    job: 'Emergency Glazing',
    location: 'London',
    rating: 10,
    text: 'Called AA after a break-in left us with a broken front door. They responded within the hour, secured the property professionally, and came back within days to do the full composite door replacement. Brilliant service from Sonny and the team.',
    date: 'December 2024',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-3">Checkatrade Reviews</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight text-aa-black leading-tight">
              What Our Customers Say
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} weight="fill" className="text-yellow-400" />
            ))}
            <span className="font-outfit font-bold text-sm text-aa-black ml-1">10/10</span>
            <span className="font-sans text-xs text-aa-stone">· 122 reviews</span>
          </div>
        </motion.div>

        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth -mx-6 px-6 lg:-mx-8 lg:px-8 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
          {reviews.map((review, i) => (
            <motion.div
              key={review.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 snap-start w-[85vw] sm:w-[400px] bg-white border border-aa-border rounded-2xl p-7 shadow-[0_4px_20px_rgba(17,17,16,0.05)] flex flex-col"
            >
              {/* Score badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} weight="fill" className="text-yellow-400" />
                  ))}
                </div>
                <span className="bg-yellow-400 text-black font-outfit font-bold text-xs px-2 py-0.5 rounded-md">
                  {review.rating}/10
                </span>
              </div>

              <p className="font-outfit font-semibold text-sm text-aa-black mb-1">{review.title}</p>
              <p className="font-sans text-xs text-yellow-600 mb-4">{review.job}</p>

              <p className="font-sans text-sm text-aa-black leading-relaxed flex-1 mb-6">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="border-t border-aa-border pt-4 flex items-center justify-between">
                <div>
                  <p className="font-sans text-xs text-aa-stone">Job location: {review.location}</p>
                </div>
                <span className="font-sans text-xs text-stone-400">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="font-sans text-xs text-aa-stone">
            All reviews verified by Checkatrade · Member since February 2023
          </p>
        </motion.div>
      </div>
    </section>
  )
}

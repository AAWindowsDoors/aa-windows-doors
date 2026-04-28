'use client'

import { motion } from 'framer-motion'
import { MagnifyingGlass, Ruler, Wrench, CheckCircle } from '@phosphor-icons/react'

const steps = [
  {
    num: '01',
    icon: MagnifyingGlass,
    title: 'Free Estimate',
    desc: 'Sonny visits your property, assesses the full scope, and gives you a clear itemised quote — no pressure, no call centres, no surprises.',
  },
  {
    num: '02',
    icon: Ruler,
    title: 'Precise Measurement',
    desc: 'Every opening is measured twice by our own team. We account for structure, plumb, and weather exposure before anything is ordered.',
  },
  {
    num: '03',
    icon: Wrench,
    title: 'Expert Installation',
    desc: 'Our experienced installers arrive on time, protect your home, and complete the job cleanly — most installs are done in a single day.',
  },
  {
    num: '04',
    icon: CheckCircle,
    title: 'Final Sign-Off',
    desc: "We inspect every seal, latch, and lock with you before we leave. You don't sign off until you're fully satisfied with the result.",
  },
]


export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-aa-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-500 uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
              Simple Process.<br />Zero Guesswork.
            </h2>
          </div>
          <a href="#contact"
            className="shrink-0 self-start lg:self-auto bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-[1px] active:scale-[0.98] shadow-[0_6px_16px_rgba(234,179,8,0.35)]">
            Schedule Free Estimate
          </a>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div className="hidden lg:block absolute top-[26px] left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-yellow-500/30 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col bg-stone-900 border border-stone-800 rounded-2xl p-6"
            >
              <div className="w-[52px] h-[52px] rounded-full bg-yellow-400/10 border border-yellow-500/30 flex items-center justify-center mb-5 shadow-[0_4px_16px_rgba(234,179,8,0.12)]">
                <step.icon size={22} weight="bold" className="text-yellow-400" />
              </div>
              <span className="font-outfit font-extrabold text-xs text-yellow-600 tracking-widest mb-2">{step.num}</span>
              <h3 className="font-outfit font-bold text-xl text-white mb-3 leading-tight">{step.title}</h3>
              <p className="font-sans text-sm text-stone-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Star, Clock, Certificate } from '@phosphor-icons/react'

const trustBadges = [
  { icon: ShieldCheck, label: 'Checkatrade Verified' },
  { icon: Star, label: '10/10 Rated' },
  { icon: Clock, label: '24hr Emergency' },
  { icon: Certificate, label: '10+ Years Experience' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative h-[100svh]">

      {/* Background photo — clean image, no text baked in */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-bifold-card.webp"
          alt="Bifold doors and roof lantern — AA Windows & Doors, Sutton Surrey"
          fill className="object-cover object-center" priority
        />
        {/* Gradient: gentle left darkening so text is readable, right side stays bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        {/* Slight bottom darkening for the badge strip */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* All website content — sits above the photo, nothing overlapping */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-8 flex flex-col justify-between pt-20 sm:pt-28 pb-6 sm:pb-10">

        {/* Text block — fills upper portion, vertically centred */}
        <div className="flex flex-col justify-center flex-1 max-w-2xl py-4">

          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 w-fit border border-yellow-400/60 bg-yellow-400/10 px-3 py-1.5 rounded-full mb-5 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span className="font-outfit text-xs font-semibold text-yellow-300 tracking-wide uppercase">
              Sutton & Surrey&apos;s Trusted Specialists
            </span>
          </motion.div>

          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-outfit font-extrabold text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[84px] leading-[1.0] tracking-tight text-white mb-4 sm:mb-6"
          >
            Precision<br />
            <span className="text-yellow-400">Installs.</span><br />
            Every Frame.
          </motion.h1>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="font-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-[48ch] mb-8 sm:mb-10"
          >
            AA Windows & Doors brings 10+ years of hands-on expertise to Sutton,
            London & Surrey — UPVC, aluminium, timber, glazing, roof lanterns and
            emergency call-outs, all done right, first time.
          </motion.p>

          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-4"
          >
            <a href="/contact"
              className="group flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] shadow-[0_8px_24px_rgba(234,179,8,0.45)]">
              Get Free Estimate
              <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#projects"
              className="flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px] active:scale-[0.98]">
              View Our Work
            </a>
          </motion.div>
        </div>

        {/* Bottom strip: 4 trust badges left, review card right */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-5"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label}
                className="flex items-center gap-2 bg-black/45 backdrop-blur-sm border border-white/15 px-3 py-2.5 rounded-xl">
                <Icon size={15} weight="bold" className="text-yellow-400 shrink-0" />
                <span className="font-sans text-xs text-white/90 leading-tight">{label}</span>
              </div>
            ))}
          </div>

          <div className="bg-white shadow-[0_16px_40px_rgba(0,0,0,0.3)] px-5 py-4 rounded-2xl shrink-0 w-full sm:w-auto">
            <p className="font-outfit font-extrabold text-2xl text-aa-black leading-none">122</p>
            <p className="font-sans text-xs text-aa-stone mt-1">Verified Checkatrade reviews</p>
            <div className="mt-2.5 flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} weight="fill" className="text-yellow-400" />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Star, Clock, Certificate } from '@phosphor-icons/react'

/* White Instagram logo — sits on top of the gradient circle background */
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="white">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

const trustBadges = [
  { icon: ShieldCheck, label: 'Checkatrade Verified' },
  { icon: Star,        label: '10/10 Rated' },
  { icon: Clock,       label: '24hr Emergency' },
  { icon: Certificate, label: '10+ Years Experience' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative h-[100svh]">

      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-bifold-card.webp"
          alt="Bifold doors and roof lantern — AA Windows & Doors, Sutton Surrey"
          fill className="object-cover object-center" priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-8 flex flex-col justify-between pt-20 sm:pt-28 pb-6 sm:pb-10">

        {/* Main text block */}
        <div className="flex flex-col justify-center flex-1 max-w-2xl py-4">

          {/* Location pill */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 w-fit border border-yellow-400/60 bg-yellow-400/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span className="font-outfit text-[11px] font-semibold text-yellow-300 tracking-[0.12em] uppercase">
              Sutton & Surrey&apos;s Trusted Specialists
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-outfit font-extrabold text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[86px] leading-[1.0] tracking-tight text-white mb-5 sm:mb-6"
          >
            Precision<br />
            <span className="text-yellow-400">Installs.</span><br />
            Every Frame.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="font-sans text-base md:text-lg text-white/75 leading-[1.7] max-w-[44ch] mb-8 sm:mb-10"
          >
            AA Windows &amp; Doors — 10+ years of hands-on expertise across Sutton,
            London &amp; Surrey. UPVC, aluminium, timber, glazing, roof lanterns
            and 24hr emergency call-outs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap items-center gap-3"
          >
            <a href="/contact"
              className="group flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-outfit font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] shadow-[0_8px_24px_rgba(234,179,8,0.4)]">
              Get Free Estimate
              <ArrowRight size={15} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="/projects"
              className="flex items-center gap-2 border border-white/35 bg-white/10 backdrop-blur-sm hover:bg-white/18 text-white font-outfit font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-[1px] active:scale-[0.98]">
              View Our Work
            </a>
            {/* Instagram — icon-only circle, same height as buttons */}
            <a href="https://www.instagram.com/_aa_windows_doors"
              target="_blank" rel="noopener noreferrer"
              aria-label="AA Windows & Doors on Instagram"
              className="flex items-center justify-center w-[46px] h-[46px] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_20px_rgba(214,36,159,0.55)] active:scale-[0.96]"
              style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 20%, #d6249f 50%, #285AEB 90%)' }}>
              <InstagramIcon size={20} />
            </a>
          </motion.div>
        </div>

        {/* Bottom strip — trust badges left, review card right */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label}
                className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/12 px-3 py-2.5 rounded-xl">
                <Icon size={14} weight="bold" className="text-yellow-400 shrink-0" />
                <span className="font-outfit text-[11px] font-medium text-white/85 leading-tight">{label}</span>
              </div>
            ))}
          </div>

          <div className="bg-white shadow-[0_16px_48px_rgba(0,0,0,0.35)] px-5 py-4 rounded-2xl shrink-0 w-full sm:w-auto">
            <p className="font-outfit font-extrabold text-2xl text-aa-black leading-none">122</p>
            <p className="font-sans text-xs text-aa-stone mt-1 leading-snug">Verified Checkatrade reviews</p>
            <div className="mt-2 flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} weight="fill" className="text-yellow-400" />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

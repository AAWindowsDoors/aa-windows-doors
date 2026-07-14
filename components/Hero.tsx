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

/* WhatsApp glyph in brand green — sits on the white pill */
function WhatsAppIcon({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
            <a href="https://wa.me/447585586388?text=Hi%20Sonny%2C%20I%27d%20like%20a%20free%20estimate%20please."
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-white hover:bg-stone-50 text-black font-outfit font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
              <WhatsAppIcon size={19} />
              WhatsApp Us
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

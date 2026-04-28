'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X, Phone } from '@phosphor-icons/react'
import { AALogo } from './AALogo'

export default function Navbar({ dark = false }: { dark?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Services', 'Projects', 'Process', 'Contact']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        dark
          ? scrolled
            ? 'bg-aa-black/98 backdrop-blur-md border-b border-stone-800 shadow-[0_1px_20px_rgba(0,0,0,0.3)]'
            : 'bg-aa-black'
          : scrolled
            ? 'bg-aa-white/95 backdrop-blur-md border-b border-aa-border shadow-[0_1px_20px_rgba(17,17,16,0.04)]'
            : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <AALogo size={38} idPrefix="nav" />
          <div>
            <p className="font-outfit font-semibold text-[12px] sm:text-[13px] text-yellow-500 leading-none">AA Windows & Doors</p>
            <p className={`font-sans text-[10px] sm:text-[11px] leading-none mt-[3px] hidden sm:block ${dark || !scrolled ? 'text-stone-400' : 'text-aa-stone'}`}>Installs & Repairs · Sutton, Surrey</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <a key={item} href={`/#${item.toLowerCase()}`}
              className={`font-sans text-sm transition-colors duration-200 ${
                dark
                  ? 'text-yellow-400 hover:text-yellow-300'
                  : scrolled
                    ? 'text-aa-stone hover:text-aa-black'
                    : 'text-white/90 hover:text-white'
              }`}>
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a href="tel:+447585586388" className={`flex items-center gap-1.5 font-sans text-sm transition-colors duration-200 ${
            dark
              ? 'text-yellow-400 hover:text-yellow-300'
              : scrolled
                ? 'text-aa-stone hover:text-aa-black'
                : 'text-white/90 hover:text-white'
          }`}>
            <Phone size={14} weight="bold" />
            07585 586388
          </a>
          <a href="/contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-[1px] active:scale-[0.98] shadow-[0_4px_12px_rgba(234,179,8,0.35)]">
            Free Estimate
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <a href="tel:+447585586388"
            className={`flex items-center gap-1.5 font-outfit font-semibold text-xs px-3 py-2 rounded-full border transition-colors duration-200 ${
              dark
                ? 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10'
                : scrolled
                  ? 'text-aa-stone border-aa-border bg-white'
                  : 'text-white border-white/30 bg-white/10 backdrop-blur-sm'
            }`}>
            <Phone size={12} weight="bold" />
            07585 586388
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
              dark
                ? 'hover:bg-stone-800 text-yellow-400'
                : scrolled
                  ? 'hover:bg-stone-100 text-aa-black'
                  : 'hover:bg-white/10 text-white'
            }`}
            aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`md:hidden overflow-hidden ${dark ? 'bg-aa-black border-t border-stone-800' : 'bg-white border-t border-aa-border shadow-lg'}`}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((item) => (
                <a key={item} href={`/#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                  className={`font-outfit font-semibold text-base ${dark ? 'text-yellow-400' : 'text-aa-black'}`}>{item}</a>
              ))}
              <div className={`pt-2 border-t flex flex-col gap-3 ${dark ? 'border-stone-800' : 'border-aa-border'}`}>
                <a href="tel:+447585586388" className={`flex items-center gap-2 font-outfit font-semibold text-sm ${dark ? 'text-yellow-400' : 'text-aa-black'}`}>
                  <Phone size={14} weight="bold" />07585 586388
                </a>
                <a href="/contact" onClick={() => setMenuOpen(false)}
                  className="bg-yellow-400 text-black font-outfit font-semibold text-sm px-5 py-3 rounded-full text-center">
                  Get Free Estimate
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

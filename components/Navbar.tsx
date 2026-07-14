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

  const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

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
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className={`font-sans text-sm transition-colors duration-200 ${
                dark
                  ? 'text-yellow-400 hover:text-yellow-300'
                  : scrolled
                    ? 'text-aa-stone hover:text-aa-black'
                    : 'text-white/90 hover:text-white'
              }`}>
              {link.label}
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
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                  className={`font-outfit font-semibold text-base ${dark ? 'text-yellow-400' : 'text-aa-black'}`}>{link.label}</a>
              ))}
              <div className={`pt-2 border-t flex flex-col gap-3 ${dark ? 'border-stone-800' : 'border-aa-border'}`}>
                <a href="tel:+447585586388" className={`flex items-center gap-2 font-outfit font-semibold text-sm ${dark ? 'text-yellow-400' : 'text-aa-black'}`}>
                  <Phone size={14} weight="bold" />07585 586388
                </a>
                <a href="https://wa.me/447585586388?text=Hi%20Sonny%2C%20I%27d%20like%20a%20free%20estimate%20please."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-outfit font-semibold text-sm px-5 py-3 rounded-full">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Sonny
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

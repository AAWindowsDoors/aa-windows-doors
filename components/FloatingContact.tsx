'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, WhatsappLogo, X } from '@phosphor-icons/react'

export default function FloatingContact() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                key="buttons"
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2.5 items-end"
              >
                <a
                  href="https://wa.me/447585586388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-outfit font-semibold text-sm text-white px-5 py-3 rounded-full shadow-[0_8px_24px_rgba(22,163,74,0.45)] transition-all duration-200 hover:-translate-y-[2px]"
                  style={{ backgroundColor: '#16a34a' }}
                >
                  <WhatsappLogo size={18} weight="bold" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+447585586388"
                  className="flex items-center gap-2.5 font-outfit font-semibold text-sm text-white px-5 py-3 rounded-full shadow-[0_8px_24px_rgba(17,17,16,0.4)] transition-all duration-200 hover:-translate-y-[2px]"
                  style={{ backgroundColor: '#111110' }}
                >
                  <Phone size={18} weight="bold" />
                  07585 586388
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? 'Close contact options' : 'Contact us'}
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_28px_rgba(234,179,8,0.55)] transition-all duration-300 hover:-translate-y-[2px]"
            style={{ backgroundColor: '#FACC15' }}
          >
            {!expanded && (
              <span className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ backgroundColor: '#FACC15' }} />
            )}
            {expanded
              ? <X size={22} weight="bold" style={{ color: '#111110' }} />
              : <Phone size={22} weight="bold" style={{ color: '#111110' }} />
            }
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

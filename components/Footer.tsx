import { Phone, EnvelopeSimple, MapPin } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { AALogo } from './AALogo'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Process', href: '/#process' },
  { label: 'FAQ', href: '/#contact' },
]

const services = [
  { label: 'Window Installation', href: '/services/window-installation' },
  { label: 'Door Installation', href: '/services/door-installation' },
  { label: 'Conservatories & Orangeries', href: '/services/conservatories' },
  { label: 'Glass Balustrades', href: '/services/glass-balustrades' },
  { label: 'Timber Windows & Doors', href: '/services/timber-windows-doors' },
  { label: 'Roof Lanterns', href: '/services/roof-lanterns' },
  { label: 'Emergency Glazing', href: '/services/emergency-glazing' },
  { label: 'Locksmith Services', href: '/services/locksmith-services' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0C] border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <AALogo size={44} idPrefix="footer" />
              <div>
                <p className="font-outfit font-semibold text-[13px] text-stone-100 leading-none">AA Windows & Doors</p>
                <p className="font-sans text-[11px] text-stone-500 leading-none mt-[3px]">Installs & Repairs</p>
              </div>
            </div>
            <p className="font-sans text-sm text-stone-500 leading-relaxed max-w-[32ch]">
              Sutton-based specialists serving London & Surrey. Checkatrade verified · 10/10 rating · 122 reviews.
            </p>
          </div>

          <div>
            <p className="font-outfit font-semibold text-xs text-stone-400 uppercase tracking-widest mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-sans text-sm text-stone-500 hover:text-stone-200 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-outfit font-semibold text-xs text-stone-400 uppercase tracking-widest mb-5">Services</p>
            <ul className="flex flex-col gap-3">
              {services.map((svc) => (
                <li key={svc.label}>
                  <Link href={svc.href} className="font-sans text-sm text-stone-500 hover:text-stone-200 transition-colors duration-200">
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-outfit font-semibold text-xs text-stone-400 uppercase tracking-widest mb-5">Contact</p>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+447585586388" className="flex items-start gap-2.5 font-sans text-sm text-stone-500 hover:text-stone-200 transition-colors">
                  <Phone size={14} weight="bold" className="mt-0.5 shrink-0 text-yellow-500" />
                  07585 586388
                </a>
              </li>
              <li>
                <a href="mailto:AA.windowsanddoorss@gmail.com" className="flex items-start gap-2.5 font-sans text-sm text-stone-500 hover:text-stone-200 transition-colors">
                  <EnvelopeSimple size={14} weight="bold" className="mt-0.5 shrink-0 text-yellow-500" />
                  AA.windowsanddoorss@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} weight="bold" className="mt-0.5 shrink-0 text-yellow-500" />
                  <span className="font-sans text-sm text-stone-500">Sutton, Surrey · London & Surrey</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-stone-600">
            &copy; {new Date().getFullYear()} AA Windows & Doors, Installs & Repairs. All rights reserved.
          </p>
          <p className="font-sans text-xs text-stone-700">Checkatrade Verified · Sutton, Surrey</p>
        </div>
      </div>
    </footer>
  )
}

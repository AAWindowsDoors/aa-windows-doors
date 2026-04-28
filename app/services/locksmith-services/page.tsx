import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Phone, Lock, Clock, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Locksmith Services — AA Windows & Doors, Sutton Surrey',
  description: '24-hour locksmith services across Sutton, London & Surrey. Emergency entry, lock replacement, uPVC mechanisms. Call 07585 586388.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/services/locksmith-services' },
  openGraph: {
    title: 'Locksmith Services — AA Windows & Doors, Sutton Surrey',
    description: '24-hour locksmith services across Sutton, London & Surrey. Emergency entry, lock replacement, uPVC mechanisms. Call 07585 586388.',
    url: 'https://www.aawindowsanddoors.co.uk/services/locksmith-services',
    images: [{ url: '/images/hero-bifold-card.webp', width: 1200, height: 630, alt: 'Locksmith services Sutton Surrey' }],
  },
}

const locksmithServices = [
  { title: 'Emergency Lock-Out', desc: 'Locked out of your home? We gain entry with minimal damage and replace the lock on the spot. We do not drill unless there is no alternative.' },
  { title: 'Lock Replacement & Upgrade', desc: 'Old or damaged locks replaced with BS3621 insurance-grade deadlocks, multi-point lock systems or high-security cylinders. Anti-snap, anti-pick, anti-drill.' },
  { title: 'uPVC Door Mechanisms', desc: 'Failed uPVC multi-point locks are one of the most common call-outs we receive. We carry the most common Mila, Yale and Fullex gearboxes for same-day repair.' },
  { title: 'Broken Key Extraction', desc: 'A snapped key in the lock does not mean a new lock. We extract broken keys cleanly from Yale and Mortice cylinders without damage in most cases.' },
  { title: 'Post-Break-In Security', desc: 'After a forced entry we replace the compromised door hardware, refit the frame if needed, and upgrade to higher-security locks — often on the same visit.' },
  { title: 'Commercial Locks', desc: 'Office lock-outs, master key systems, panic bars and push-bar exit hardware for commercial premises across South London and Surrey.' },
]

export default function LocksmithServicesPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Services
          </Link>
          <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">Locksmith Services</p>
          <h1 className="font-outfit font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] mb-8 max-w-3xl">
            Locked Out?<br /><span className="text-yellow-400">We&apos;re On Our Way.</span>
          </h1>

          <a href="tel:+447585586388"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-outfit font-bold text-xl px-7 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-[1px] shadow-[0_8px_28px_rgba(234,179,8,0.45)] mb-8">
            <Phone size={22} weight="bold" /> 07585 586388
          </a>

          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            24-hour locksmith response across Sutton, London & Surrey. Emergency entry, lock replacement and uPVC mechanism repair — all by the same team that fits your windows and doors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Our Locksmith Services</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-10">What We Can Do For You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {locksmithServices.map(s => (
                <div key={s.title} className="bg-white border border-aa-border rounded-2xl p-6 shadow-[0_2px_8px_rgba(17,17,16,0.04)]">
                  <Lock size={18} weight="bold" className="text-yellow-500 mb-3" />
                  <h3 className="font-outfit font-bold text-sm text-aa-black mb-2">{s.title}</h3>
                  <p className="font-sans text-xs text-aa-stone leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-aa-black rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={20} weight="bold" className="text-yellow-400" />
                <p className="font-outfit font-bold text-yellow-400 text-sm uppercase tracking-wider">24/7 Response</p>
              </div>
              <a href="tel:+447585586388">
                <p className="font-outfit font-extrabold text-4xl text-white mb-1 hover:text-yellow-400 transition-colors">07585 586388</p>
              </a>
              <p className="font-sans text-stone-500 text-sm mb-8">Call any time — nights, weekends, bank holidays.</p>

              <div className="flex flex-col gap-4 border-t border-stone-800 pt-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={16} weight="bold" className="text-yellow-400 shrink-0 mt-0.5" />
                  <p className="font-sans text-sm text-stone-400">Checkatrade verified — ID checked, background vetted</p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck size={16} weight="bold" className="text-yellow-400 shrink-0 mt-0.5" />
                  <p className="font-sans text-sm text-stone-400">No hidden call-out fees — price quoted before we start</p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck size={16} weight="bold" className="text-yellow-400 shrink-0 mt-0.5" />
                  <p className="font-sans text-sm text-stone-400">Non-destructive entry preferred — we only drill as a last resort</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-aa-black mb-2">Insurance Work</p>
              <p className="font-sans text-sm text-aa-stone leading-relaxed mb-4">We provide written reports and itemised invoices for lock replacement following a break-in — accepted by most insurers.</p>
              <Link href="/contact?service=Locksmith+Services"
                className="inline-flex items-center gap-2 font-outfit font-semibold text-sm text-yellow-700 hover:text-yellow-800 transition-colors">
                Request a quote <ArrowRight size={14} weight="bold" />
              </Link>
            </div>

            <div className="bg-white border border-aa-border rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-aa-black mb-3">Coverage</p>
              <p className="font-sans text-sm text-aa-stone leading-relaxed">Sutton · Croydon · Kingston · Wimbledon · Epsom · Carshalton · Cheam · Morden · Mitcham · Streatham · and surrounding areas within 20 miles</p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

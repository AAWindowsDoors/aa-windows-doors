import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Phone, Clock, ShieldCheck, FileText } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: '24-Hour Emergency Glazing — AA Windows & Doors, Sutton Surrey',
  description: '24/7 emergency glazing and boarding across Sutton, London & Surrey. Broken windows, break-ins, storm damage. Call 07585 586388 now.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/services/emergency-glazing' },
  openGraph: {
    title: '24-Hour Emergency Glazing — AA Windows & Doors, Sutton Surrey',
    description: '24/7 emergency glazing and boarding across Sutton, London & Surrey. Broken windows, break-ins, storm damage. Call 07585 586388 now.',
    url: 'https://www.aawindowsanddoors.co.uk/services/emergency-glazing',
    images: [{ url: '/images/service-emergency-commercial.png', width: 1200, height: 630, alt: 'Emergency glazing Sutton Surrey' }],
  },
}

const scenarios = [
  { title: 'Break-In & Forced Entry', desc: 'If your property has been broken into, we board up and re-glaze to make it secure the same night. We can provide a written report for your insurance claim.' },
  { title: 'Smashed or Cracked Windows', desc: 'Accidental breakage, vandalism or failed units — we board up immediately and return to re-glaze once the replacement is measured and ordered.' },
  { title: 'Storm & Weather Damage', desc: 'High winds, fallen branches and flying debris can shatter or dislodge glazing. We respond 24 hours a day to make your property wind and weathertight.' },
  { title: 'Failed Door Locks & Mechanisms', desc: 'If a door lock fails and you cannot secure your property, our emergency locksmith service responds alongside the glazing team.' },
  { title: 'Commercial Properties', desc: 'Shop fronts, offices and retail units — a broken window or door overnight is a serious security risk. We board and glaze commercial properties with urgency.' },
]

export default function EmergencyGlazingPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Services
          </Link>
          <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">Emergency Glazing</p>
          <h1 className="font-outfit font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] mb-8 max-w-3xl">
            24-Hour Emergency.<br /><span className="text-yellow-400">We Answer.</span>
          </h1>

          <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl px-6 py-5 mb-10">
            <div className="flex items-center gap-3">
              <Clock size={24} weight="bold" className="text-yellow-400 shrink-0" />
              <p className="font-outfit font-semibold text-white text-base">Available 24 hours, 7 days a week</p>
            </div>
            <a href="tel:+447585586388"
              className="flex items-center gap-2 bg-yellow-400 text-black font-outfit font-bold text-lg px-6 py-3 rounded-xl transition-all duration-200 hover:bg-yellow-300 hover:-translate-y-[1px] shadow-[0_6px_20px_rgba(234,179,8,0.4)]">
              <Phone size={18} weight="bold" /> 07585 586388
            </a>
          </div>

          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            Broken window? Break-in? Storm damage? Call us now — we board up and make your property secure, then return to re-glaze once the replacement glass is ready.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">What We Cover</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-10">Emergency Situations We Handle</h2>
            <div className="flex flex-col gap-4">
              {scenarios.map(s => (
                <div key={s.title} className="bg-white border border-aa-border rounded-2xl p-5 shadow-[0_2px_8px_rgba(17,17,16,0.04)]">
                  <h3 className="font-outfit font-bold text-base text-aa-black mb-2">{s.title}</h3>
                  <p className="font-sans text-sm text-aa-stone leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-aa-black rounded-2xl p-7">
              <p className="font-outfit font-bold text-yellow-400 text-sm uppercase tracking-widest mb-6">Call Us Now</p>
              <a href="tel:+447585586388" className="block">
                <p className="font-outfit font-extrabold text-5xl text-white mb-1 hover:text-yellow-400 transition-colors">07585 586388</p>
              </a>
              <p className="font-sans text-stone-500 text-sm mb-6">We answer — day or night. No voicemail queues.</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={16} weight="bold" className="text-yellow-400 mt-0.5 shrink-0" />
                  <p className="font-sans text-sm text-stone-400">Checkatrade verified — you know exactly who&apos;s coming</p>
                </div>
                <div className="flex items-start gap-3">
                  <FileText size={16} weight="bold" className="text-yellow-400 mt-0.5 shrink-0" />
                  <p className="font-sans text-sm text-stone-400">Insurance reports provided on request</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} weight="bold" className="text-yellow-400 mt-0.5 shrink-0" />
                  <p className="font-sans text-sm text-stone-400">Available every day including weekends and bank holidays</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-aa-black mb-2">Coverage Area</p>
              <p className="font-sans text-sm text-aa-stone leading-relaxed">
                Based in Sutton, we cover a 20-mile radius — including Croydon, Kingston, Wimbledon, Epsom, Carshalton, Cheam, Morden, Mitcham, Streatham and surrounding areas.
              </p>
            </div>

            <div className="bg-white border border-aa-border rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-aa-black mb-2">What Happens When You Call</p>
              <div className="flex flex-col gap-3 mt-3">
                {['We take your details and address', 'We give you an estimated arrival time', 'We board or secure the property on arrival', 'We measure for replacement glass', 'We return to re-glaze — usually next day'].map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="font-outfit font-bold text-xs text-yellow-600 mt-0.5 shrink-0">{i + 1}.</span>
                    <p className="font-sans text-sm text-aa-stone">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

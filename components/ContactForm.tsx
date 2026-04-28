'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Phone, EnvelopeSimple, ArrowRight, CheckCircle } from '@phosphor-icons/react'

const services = [
  'Windows & Glazing',
  'Doors — All Types',
  'Conservatories & Orangeries',
  'Roof Lanterns',
  'Glass Balustrades',
  'Glass Shower Screens',
  'Glass Splashbacks',
  'Stained Glass / Leadwork',
  'Secondary Glazing',
  'Misted Unit Replacement',
  'Window Shutters',
  'Window Film & Tinting',
  'UPVC Spraying',
  'Draught Proofing',
  'Porch Installation',
  'Door Canopies',
  'Emergency Glazing (24hr)',
  'Locksmith Services',
  'Insurance Work',
  'Commercial / Shop Fronts',
  'Other / Not Sure',
]

function FormInner() {
  const searchParams = useSearchParams()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const s = searchParams.get('service')
    if (s) setService(s)
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\n${message}`
    )
    window.location.href = `mailto:AA.windowsanddoorss@gmail.com?subject=Free Estimate Request — ${service || 'General'}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <CheckCircle size={56} weight="fill" className="text-yellow-400 mb-6" />
        <h3 className="font-outfit font-bold text-2xl text-aa-black mb-3">Your email app should have opened</h3>
        <p className="font-sans text-base text-aa-stone max-w-[44ch] mb-8">
          If it didn&apos;t open automatically, email us directly at{' '}
          <a href="mailto:AA.windowsanddoorss@gmail.com" className="text-yellow-600 hover:underline">AA.windowsanddoorss@gmail.com</a>
          {' '}or call us now.
        </p>
        <a href="tel:+447585586388"
          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px]">
          <Phone size={16} weight="bold" />
          07585 586388
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-outfit font-semibold text-xs text-aa-stone uppercase tracking-wider mb-2">Your Name *</label>
          <input required value={name} onChange={e => setName(e.target.value)}
            placeholder="e.g. John Smith"
            className="w-full font-sans text-sm text-aa-black bg-white border border-aa-border rounded-xl px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all" />
        </div>
        <div>
          <label className="block font-outfit font-semibold text-xs text-aa-stone uppercase tracking-wider mb-2">Phone Number *</label>
          <input required value={phone} onChange={e => setPhone(e.target.value)}
            placeholder="e.g. 07700 900123" type="tel"
            className="w-full font-sans text-sm text-aa-black bg-white border border-aa-border rounded-xl px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all" />
        </div>
      </div>

      <div>
        <label className="block font-outfit font-semibold text-xs text-aa-stone uppercase tracking-wider mb-2">Email Address</label>
        <input value={email} onChange={e => setEmail(e.target.value)}
          placeholder="e.g. john@example.com" type="email"
          className="w-full font-sans text-sm text-aa-black bg-white border border-aa-border rounded-xl px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all" />
      </div>

      <div>
        <label className="block font-outfit font-semibold text-xs text-aa-stone uppercase tracking-wider mb-2">Service Required *</label>
        <select required value={service} onChange={e => setService(e.target.value)}
          className="w-full font-sans text-sm text-aa-black bg-white border border-aa-border rounded-xl px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all appearance-none">
          <option value="">Select a service…</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="block font-outfit font-semibold text-xs text-aa-stone uppercase tracking-wider mb-2">Tell Us More</label>
        <textarea value={message} onChange={e => setMessage(e.target.value)}
          rows={4} placeholder="Describe your job — property type, window/door count, any urgency…"
          className="w-full font-sans text-sm text-aa-black bg-white border border-aa-border rounded-xl px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all resize-none" />
      </div>

      <button type="submit"
        className="group flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] shadow-[0_8px_24px_rgba(234,179,8,0.35)]">
        Send Estimate Request
        <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
      </button>
      <p className="font-sans text-xs text-aa-stone text-center">This will open your email app. Prefer to talk? Call <a href="tel:+447585586388" className="text-aa-black hover:text-yellow-600 font-semibold">07585 586388</a></p>
    </form>
  )
}

export default function ContactForm() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 lg:gap-24 items-start">
        <div>
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-3">Free Estimate</p>
          <h1 className="font-outfit font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight text-aa-black leading-tight mb-6">
            Tell Us About Your Project
          </h1>
          <p className="font-sans text-base text-aa-stone leading-relaxed mb-10 max-w-[44ch]">
            Fill in the form and Sonny will get back to you within one business day to arrange a free, no-obligation visit.
          </p>

          <div className="flex flex-col gap-5">
            <a href="tel:+447585586388"
              className="flex items-center gap-4 p-5 bg-aa-black rounded-2xl hover:bg-stone-800 transition-colors group">
              <div className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                <Phone size={18} weight="bold" className="text-black" />
              </div>
              <div>
                <p className="font-outfit font-bold text-xl text-white">07585 586388</p>
                <p className="font-sans text-xs text-stone-400">Call or text — we answer</p>
              </div>
            </a>

            <a href="mailto:AA.windowsanddoorss@gmail.com"
              className="flex items-center gap-4 p-5 bg-white border border-aa-border rounded-2xl hover:border-yellow-400 transition-colors">
              <div className="w-11 h-11 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center shrink-0">
                <EnvelopeSimple size={18} weight="bold" className="text-yellow-600" />
              </div>
              <div>
                <p className="font-outfit font-semibold text-base text-aa-black">AA.windowsanddoorss@gmail.com</p>
                <p className="font-sans text-xs text-aa-stone">We reply within one business day</p>
              </div>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-aa-border">
            <p className="font-outfit font-semibold text-xs text-aa-stone uppercase tracking-widest mb-4">Coverage</p>
            <p className="font-sans text-sm text-aa-stone leading-relaxed">
              Sutton-based. We cover a 20-mile radius across London & Surrey including Croydon, Kingston, Wimbledon, Epsom, Carshalton and surrounding areas.
            </p>
          </div>
        </div>

        <div className="bg-white border border-aa-border rounded-3xl p-8 shadow-[0_8px_32px_rgba(17,17,16,0.06)]">
          <h2 className="font-outfit font-bold text-xl text-aa-black mb-6">Request Your Free Estimate</h2>
          <Suspense fallback={<div className="h-64 flex items-center justify-center text-aa-stone font-sans text-sm">Loading form…</div>}>
            <FormInner />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

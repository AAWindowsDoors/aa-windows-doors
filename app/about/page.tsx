import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Star, Phone, EnvelopeSimple, MapPin } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'About Us — AA Windows & Doors, Sutton Surrey',
  description: 'AA Windows & Doors is a Sutton-based specialist with 10+ years experience, 122 verified Checkatrade reviews and a 10/10 rating. Meet the team behind every installation.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/about' },
  openGraph: {
    title: 'About AA Windows & Doors — Sutton, Surrey',
    description: '10+ years experience · 122 verified reviews · 10/10 Checkatrade rating. Specialists in windows, doors, glass and emergency glazing across London & Surrey.',
    url: 'https://www.aawindowsanddoors.co.uk/about',
    images: [{ url: '/images/hero-bifold-clean.webp', width: 1200, height: 630, alt: 'AA Windows & Doors — bifold door installation' }],
  },
}

const stats = [
  { value: '10+', label: 'Years Experience', sub: 'Windows, Doors & Glass trade' },
  { value: '122', label: 'Checkatrade Reviews', sub: 'All verified, all genuine' },
  { value: '10/10', label: 'Customer Rating', sub: 'Quality · Reliability · Communication' },
  { value: '24/7', label: 'Emergency Call-Out', sub: 'Boarding, glazing & locksmith' },
]

const values = [
  {
    title: 'No Call Centres. No Subcontractors.',
    desc: 'When you call AA Windows & Doors, you speak directly to Sonny. When the team arrive, they are our own — not agency labour. That is how we maintain standards job after job.',
  },
  {
    title: 'Measured Twice. Fitted Once.',
    desc: 'Every opening is assessed and measured in person before anything is ordered. We account for structure, level and weather exposure, so there are no surprises on installation day.',
  },
  {
    title: 'Clean & Tidy, Always.',
    desc: 'We protect your floors and furniture, and we clear up fully before we leave. Most of our customers comment on how clean the site is after we finish — that is a deliberate standard.',
  },
  {
    title: 'Priced Honestly.',
    desc: 'Estimates are free, written and itemised. There are no hidden add-ons, no pressure tactics and no day-of surprises. The price you are quoted is the price you pay.',
  },
]

export default function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-outfit text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">About Us</p>
          <h1 className="font-outfit font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] mb-6 max-w-3xl">
            Built on Craft.<br /><span className="text-yellow-400">Proven by 122 Reviews.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            AA Windows & Doors is a Sutton-based specialist with over 10 years of hands-on trade experience.
            Checkatrade verified · 10/10 rated · domestic and commercial.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-stone-950 border-t border-stone-900 border-b border-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-stone-900">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-10 lg:px-10 flex flex-col">
                <span className="font-outfit font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-none">{stat.value}</span>
                <span className="font-outfit font-semibold text-sm text-yellow-400 mt-3 mb-1">{stat.label}</span>
                <span className="font-sans text-xs text-stone-500">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story section */}
      <div className="bg-aa-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100 shadow-[0_24px_64px_rgba(17,17,16,0.12)]">
              <Image
                src="/images/hero-bifold-clean.webp"
                alt="Bifold door installation — AA Windows & Doors, Sutton Surrey"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aa-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 bg-yellow-400 text-black px-5 py-4 rounded-xl shadow-[0_8px_24px_rgba(234,179,8,0.45)]">
                <p className="font-outfit font-extrabold text-3xl leading-none">10+</p>
                <p className="font-sans text-xs mt-1 text-black/80">Years in the trade</p>
              </div>
            </div>

            <div>
              <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Who We Are</p>
              <h2 className="font-outfit font-extrabold text-4xl md:text-5xl tracking-tight text-aa-black leading-[1.05] mb-6">
                Specialists, Not Salespeople.
              </h2>
              <p className="font-sans text-base text-aa-stone leading-relaxed mb-5">
                AA Windows & Doors was built on a simple premise: do the job right, leave the site tidy, and be someone your customer would call again. That approach has earned us 122 verified 5-star reviews and a 10/10 Checkatrade rating.
              </p>
              <p className="font-sans text-base text-aa-stone leading-relaxed mb-5">
                Sonny heads up the business, handles all enquiries personally, and leads the team on every major installation. There are no subcontractors, no call centres, and no cutting corners to hit a margin.
              </p>
              <p className="font-sans text-base text-aa-stone leading-relaxed mb-10">
                From a single window replacement in a Victorian terrace to a full glazing package for a commercial development — the same care goes into every job, regardless of size.
              </p>

              <div className="flex flex-col gap-3.5">
                {[
                  'Checkatrade member since February 2023 — 12 vetting checks passed',
                  '122 verified reviews · 10/10 rating across Quality, Reliability & Communication',
                  'Domestic and commercial — single repairs to full-building installs',
                  'UPVC, aluminium, timber — windows, doors, glass, roof lanterns',
                  '24-hour emergency glazing, boarding and locksmith service',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <Check size={17} weight="bold" className="shrink-0 mt-0.5 text-yellow-500" />
                    <p className="font-sans text-sm text-aa-stone leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-stone-50 py-20 lg:py-28 border-t border-aa-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14 max-w-xl">
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="font-outfit font-extrabold text-4xl md:text-5xl tracking-tight text-aa-black leading-[1.05]">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="p-7 bg-white rounded-2xl border border-aa-border shadow-[0_4px_20px_rgba(17,17,16,0.04)]">
                <h3 className="font-outfit font-bold text-lg text-aa-black mb-3">{v.title}</h3>
                <p className="font-sans text-sm text-aa-stone leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Checkatrade trust strip */}
      <div className="bg-aa-black py-14 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} weight="fill" className="text-yellow-400" />
                ))}
              </div>
              <p className="font-outfit font-extrabold text-3xl text-white mb-1">10/10 · 122 Reviews</p>
              <p className="font-sans text-sm text-stone-400">All reviews verified independently by Checkatrade · Member since February 2023</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-outfit font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-[2px] shadow-[0_8px_28px_rgba(234,179,8,0.45)]"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Contact details */}
      <div className="bg-aa-white py-20 border-t border-aa-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-3">Get in Touch</p>
              <h2 className="font-outfit font-extrabold text-4xl md:text-5xl tracking-tight text-aa-black leading-[1.05] mb-6">
                Ready to Start<br />Your Project?
              </h2>
              <p className="font-sans text-base text-aa-stone leading-relaxed mb-8 max-w-[44ch]">
                All estimates are free, written, and no-obligation. Sonny will visit your property and give you a clear, itemised quote before any commitment is made.
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-outfit font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-[2px] shadow-[0_8px_24px_rgba(234,179,8,0.35)]">
                Request Free Estimate
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <a href="tel:+447585586388" className="flex items-center gap-4 p-5 bg-aa-black rounded-2xl hover:bg-stone-800 transition-colors">
                <div className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                  <Phone size={18} weight="bold" className="text-black" />
                </div>
                <div>
                  <p className="font-outfit font-bold text-xl text-white">07585 586388</p>
                  <p className="font-sans text-xs text-stone-400">Call or text — we answer</p>
                </div>
              </a>
              <a href="mailto:AA.windowsanddoorss@gmail.com" className="flex items-center gap-4 p-5 bg-white border border-aa-border rounded-2xl hover:border-yellow-400 transition-colors">
                <div className="w-11 h-11 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center shrink-0">
                  <EnvelopeSimple size={18} weight="bold" className="text-yellow-600" />
                </div>
                <div>
                  <p className="font-outfit font-semibold text-base text-aa-black">AA.windowsanddoorss@gmail.com</p>
                  <p className="font-sans text-xs text-aa-stone">We reply within one business day</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-5 bg-white border border-aa-border rounded-2xl">
                <div className="w-11 h-11 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center shrink-0">
                  <MapPin size={18} weight="bold" className="text-yellow-600" />
                </div>
                <div>
                  <p className="font-outfit font-semibold text-base text-aa-black">Sutton, Surrey</p>
                  <p className="font-sans text-xs text-aa-stone">Covering 20-mile radius across London & Surrey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

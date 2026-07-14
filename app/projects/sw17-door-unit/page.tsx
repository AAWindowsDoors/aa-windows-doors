import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Wrench, CheckCircle } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'SW17 — Double Laminated Door Unit, Tooting — AA Windows & Doors',
  description: 'Case study: Wired glass door panel replaced with a double laminated safety unit in Tooting, SW17. AA Windows & Doors, Sutton Surrey.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects/sw17-door-unit' },
  openGraph: {
    title: 'SW17 — Double Laminated Door Unit, Tooting — AA Windows & Doors',
    description: 'Wired glass door panel replaced with a clear double laminated safety unit in Tooting SW17.',
    url: 'https://www.aawindowsanddoors.co.uk/projects/sw17-door-unit',
    images: [{ url: '/images/project-tooting-door-unit.jpeg', width: 1200, height: 800, alt: 'Double laminated door unit installed Tooting SW17' }],
  },
}

export default function SW17DoorUnitPage() {
  return (
    <PageShell>
      {/* Hero Header */}
      <div className="bg-aa-black text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <Link href="/projects" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> All Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/30 font-outfit font-semibold text-xs text-yellow-400 px-3 py-1.5 rounded-full">
              <MapPin size={11} weight="bold" /> Tooting · SW17
            </span>
            <span className="inline-flex items-center gap-1.5 bg-stone-800 font-outfit font-semibold text-xs text-stone-300 px-3 py-1.5 rounded-full">
              <Wrench size={11} weight="bold" /> Double Laminated Unit · Door Glass
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-4xl">
            Wired Glass Out.<br /><span className="text-yellow-400">Laminated Safety In.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            A classic Victorian front door in Tooting — the outdated wired glass panel swapped for a double laminated safety unit. Cleaner look, better security, fully compliant.
          </p>
        </div>
      </div>

      {/* Before / After hero */}
      <div className="relative h-[420px] sm:h-[540px] lg:h-[640px]">
        <Image
          src="/images/project-tooting-door-unit.jpeg"
          alt="Before and after: double laminated unit installed in red Victorian front door, Tooting SW17"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">

          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-6">One Unit. Big Difference.</h2>
            <div className="font-sans text-base text-aa-stone leading-relaxed space-y-4 mb-12">
              <p>
                This Victorian terraced property in Tooting had its original wired glass panel — that distinctive mesh-embedded glass that was standard in front doors from the 1970s through the early 2000s. It&apos;s outdated, thermally poor, and no longer meets modern building safety standards.
              </p>
              <p>
                The homeowner wanted a clean, modern replacement that kept the character of the red door while upgrading the glass spec. We supplied and fitted a double laminated safety unit — which holds together on impact rather than shattering — providing genuine security improvement and a sharper finish.
              </p>
              <p>
                Job completed in under two hours. No mess, no disruption. The difference is immediately visible.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { item: 'Wired Glass Removed', detail: 'Old panel carefully extracted without damaging the existing door frame or rebate' },
                { item: 'Double Laminated Unit Fitted', detail: 'New clear laminated safety glass — two panes bonded together so breakage stays in place' },
                { item: 'Sealed & Finished', detail: 'New glazing bars and putty finish — clean, professional, period-appropriate' },
              ].map((s, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-aa-border bg-white hover:border-yellow-400/40 transition-colors">
                  <CheckCircle size={20} weight="fill" className="text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-outfit font-bold text-sm text-aa-black mb-1">{s.item}</p>
                    <p className="font-sans text-sm text-aa-stone leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white border border-aa-border rounded-2xl p-7 shadow-[0_4px_16px_rgba(17,17,16,0.04)]">
              <p className="font-outfit font-bold text-sm text-aa-black uppercase tracking-wide mb-5">Project Details</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Location', value: 'Tooting · SW17, London' },
                  { label: 'Property', value: 'Victorian terraced — front door' },
                  { label: 'Existing Glass', value: 'Wired (Georgian wire) glass panel' },
                  { label: 'New Specification', value: 'Double laminated safety glass' },
                  { label: 'Time on Site', value: 'Under 2 hours' },
                  { label: 'Result', value: 'Cleaner finish, improved security' },
                ].map(d => (
                  <div key={d.label} className="flex justify-between border-b border-aa-border pb-3 last:border-0 last:pb-0">
                    <p className="font-sans text-xs text-aa-stone">{d.label}</p>
                    <p className="font-outfit font-semibold text-xs text-aa-black text-right max-w-[55%]">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-black mb-3">Quick. Clean. Done.</p>
              <p className="font-sans text-sm text-yellow-900 leading-relaxed italic">
                &ldquo;Unit replacements like this are one of the most cost-effective upgrades a homeowner can make — out with dated wired glass, in with a proper safety unit. The red door looks sharper for it.&rdquo;
              </p>
              <p className="font-outfit font-semibold text-xs text-yellow-800 mt-3">— AA Windows & Doors</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-stone-50 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Got a Similar Job?</p>
          <h3 className="font-outfit font-extrabold text-3xl text-aa-black mb-4">Misted, cracked, or wired glass in your door?</h3>
          <p className="font-sans text-aa-stone mb-8">We replace glass panels in all types of doors — same day where possible.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=Doors+%E2%80%94+All+Types"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px]">
              Get Free Estimate <ArrowRight size={15} weight="bold" />
            </Link>
            <Link href="/projects"
              className="flex items-center gap-2 border border-aa-border hover:border-stone-400 text-aa-stone font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300">
              View More Projects
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

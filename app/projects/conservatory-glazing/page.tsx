import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Wrench, CheckCircle, Warning } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Conservatory Glazing Replacement — AA Windows & Doors',
  description: 'Case study: Emergency conservatory re-glaze — full roof glass replacement after thermal stress failure. AA Windows & Doors, Sutton Surrey.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects/conservatory-glazing' },
  openGraph: {
    title: 'Conservatory Glazing Replacement — AA Windows & Doors',
    description: 'Emergency conservatory re-glaze — full roof glass replacement after thermal stress failure.',
    url: 'https://www.aawindowsanddoors.co.uk/projects/conservatory-glazing',
    images: [{ url: '/images/project-conservatory-after.jpeg', width: 1200, height: 800, alt: 'New conservatory glazing installation — AA Windows & Doors' }],
  },
}

const scope = [
  { item: 'Emergency Make-Safe', detail: 'Immediate response to contain shattered toughened glass and secure the roof from the elements' },
  { item: 'Full Roof Re-Glaze', detail: 'All failed roof panels removed and replaced with new laminated safety glass units' },
  { item: 'Frame Assessment', detail: 'Full inspection of existing aluminium framework — confirmed structurally sound and retained' },
  { item: 'Scaffold & Access', detail: 'Full scaffold erection for safe working at height across the entire roof span' },
]

export default function ConservatoryGlazingPage() {
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
              <MapPin size={11} weight="bold" /> London
            </span>
            <span className="inline-flex items-center gap-1.5 bg-stone-800 font-outfit font-semibold text-xs text-stone-300 px-3 py-1.5 rounded-full">
              <Wrench size={11} weight="bold" /> Conservatory Glazing · Emergency
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-4xl">
            Complete Conservatory<br /><span className="text-yellow-400">Re-Glaze</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[56ch]">
            Thermal stress fractures had shattered multiple roof panes on this large conservatory. Emergency make-safe followed by a full roof re-glaze — new laminated safety glass throughout.
          </p>
        </div>
      </div>

      {/* Hero images — before / after */}
      <div className="grid grid-cols-1 sm:grid-cols-2 h-[320px] sm:h-[440px] lg:h-[560px]">
        <div className="relative overflow-hidden h-full">
          <Image
            src="/images/project-conservatory-broken.jpeg"
            alt="Shattered toughened glass panels on conservatory roof before replacement"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-5 left-5">
            <span className="inline-flex items-center gap-1.5 bg-black/80 backdrop-blur-sm font-outfit font-bold text-xs text-white px-3 py-1.5 rounded-full">
              <Warning size={11} weight="fill" className="text-red-400" /> Before — Failed Glass
            </span>
          </div>
        </div>
        <div className="relative overflow-hidden h-full border-l-2 border-yellow-400">
          <Image
            src="/images/project-conservatory-after.jpeg"
            alt="New laminated glass panels installed on conservatory roof"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400 font-outfit font-bold text-xs text-black px-3 py-1.5 rounded-full shadow-lg">
              <CheckCircle size={11} weight="fill" /> After — Complete
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-16">

          {/* Left */}
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl tracking-tight text-aa-black mb-6">What Happened</h2>
            <div className="font-sans text-base text-aa-stone leading-relaxed space-y-4 mb-12">
              <p>
                Toughened glass in older conservatories is susceptible to nickel sulphide inclusion — a tiny impurity in the glass that can cause spontaneous fracturing, often triggered by thermal stress on hot days. That&apos;s exactly what happened here.
              </p>
              <p>
                Multiple roof panels had shattered simultaneously, leaving the interior fully exposed to the elements. AA Windows & Doors were called out immediately to make the structure safe, before returning to complete a full roof re-glaze.
              </p>
              <p>
                The aluminium framework was inspected and found to be structurally sound. All new panels were specified in laminated safety glass — which, if it ever breaks, holds together rather than shattering — making this conservatory significantly safer than the original specification.
              </p>
            </div>

            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-6">Scope of Works</p>
            <div className="flex flex-col gap-4">
              {scope.map((s, i) => (
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

          {/* Right */}
          <div className="flex flex-col gap-6">
            <div className="relative h-[280px] lg:h-[320px] rounded-2xl overflow-hidden">
              <Image
                src="/images/project-conservatory-after.jpeg"
                alt="New conservatory glazing installation complete"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-white border border-aa-border rounded-2xl p-7 shadow-[0_4px_16px_rgba(17,17,16,0.04)]">
              <p className="font-outfit font-bold text-sm text-aa-black uppercase tracking-wide mb-5">Project Details</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Location', value: 'London' },
                  { label: 'Type', value: 'Conservatory Roof Re-Glaze' },
                  { label: 'Glass Spec', value: 'Laminated safety glass throughout' },
                  { label: 'Framework', value: 'Existing aluminium retained' },
                  { label: 'Access', value: 'Full scaffold erection' },
                  { label: 'Response', value: 'Emergency call-out, same day' },
                ].map(d => (
                  <div key={d.label} className="flex justify-between border-b border-aa-border pb-3 last:border-0 last:pb-0">
                    <p className="font-sans text-xs text-aa-stone">{d.label}</p>
                    <p className="font-outfit font-semibold text-xs text-aa-black text-right max-w-[55%]">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-black mb-3">The Outcome</p>
              <p className="font-sans text-sm text-yellow-900 leading-relaxed italic">
                &ldquo;Made safe same day, fully re-glazed within the week. The new laminated spec means this conservatory is now safer than it was when it was first built.&rdquo;
              </p>
              <p className="font-outfit font-semibold text-xs text-yellow-800 mt-3">— AA Windows & Doors</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-stone-50 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Conservatory Problem?</p>
          <h3 className="font-outfit font-extrabold text-3xl text-aa-black mb-4">Misted units, cracked panels, or a failing roof?</h3>
          <p className="font-sans text-aa-stone mb-8">We survey, supply and fit — no subcontractors. Get a free estimate from Sonny.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=Conservatories+%26+Orangeries"
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

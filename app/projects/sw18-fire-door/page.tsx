import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Wrench, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'SW18 — Flat Entrance Fire Door — AA Windows & Doors',
  description: 'Case study: FD30 flat entrance fire door installed in SW18 Wandsworth following a Fire Risk Assessment. Fast turnaround. AA Windows & Doors, Sutton Surrey.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects/sw18-fire-door' },
  openGraph: {
    title: 'SW18 — Flat Entrance Fire Door — AA Windows & Doors',
    description: 'Case study: FD30 flat entrance fire door installed in SW18 Wandsworth following a Fire Risk Assessment. Fast turnaround.',
    url: 'https://www.aawindowsanddoors.co.uk/projects/sw18-fire-door',
    images: [{ url: '/images/project-fire-door-sw18.jpg', width: 1200, height: 630, alt: 'Fire door installation SW18 Wandsworth' }],
  },
}

export default function SW18FireDoorPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/30 font-outfit font-semibold text-xs text-yellow-400 px-3 py-1.5 rounded-full">
              <MapPin size={11} weight="bold" /> SW18 · Wandsworth
            </span>
            <span className="inline-flex items-center gap-1.5 bg-stone-800 font-outfit font-semibold text-xs text-stone-300 px-3 py-1.5 rounded-full">
              <Wrench size={11} weight="bold" /> Flat Entrance Fire Door · FRA
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Flat Entrance<br /><span className="text-yellow-400">Fire Door.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            FD30-rated flat entrance fire door installed in SW18 Wandsworth following a Fire Risk Assessment. Correctly hung, sealed and latching — job completed fast with no disruption to residents.
          </p>
        </div>
      </div>

      <div className="relative h-[460px] lg:h-[560px]">
        <Image src="/images/project-fire-door-sw18.jpg" alt="Flat entrance fire door installation SW18 Wandsworth" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-aa-black/30 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="font-outfit font-extrabold text-3xl text-aa-black mb-6">FRA Action — Handled Fast</h2>
            <div className="font-sans text-base text-aa-stone leading-relaxed space-y-4 mb-10">
              <p>Following a Fire Risk Assessment at a purpose-built block in SW18, the assessor required the flat entrance doors on the communal corridor to be upgraded to FD30-rated fire doors. These are the doors that sit between each flat and the shared escape route — they must be self-closing, correctly sealed and rated to contain a fire for at least 30 minutes.</p>
              <p>The client contacted AA Windows & Doors and was able to book an appointment quickly. Sonny visited the property, confirmed the door size and specification required by the FRA, and the new fire door was installed with minimum disruption to other residents in the block.</p>
              <p>Maria Asmar left a verified Checkatrade review noting the appointment was arranged quickly and the work was completed efficiently — exactly what&apos;s needed when a fire safety compliance deadline is in play.</p>
            </div>

            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">What We Did</p>
            <div className="flex flex-col gap-4">
              {[
                'Visited promptly — measured the existing opening and confirmed FRA specification',
                'Supplied an FD30-rated flush door to size, matching the existing corridor aesthetic',
                'Removed the old non-compliant door and checked frame condition',
                'Hung the new fire door on three fire-rated hinges at correct positions',
                'Fitted intumescent strip and cold smoke seal around all three sides',
                'Installed overhead self-closer — door latches unassisted from fully open',
                'Confirmed correct clearances, latch engagement and self-close function',
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-outfit font-bold text-xs text-yellow-500 shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-sans text-sm text-aa-stone leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white border border-aa-border rounded-2xl p-7 shadow-[0_4px_16px_rgba(17,17,16,0.04)]">
              <p className="font-outfit font-bold text-sm text-aa-black uppercase tracking-wide mb-5">Project Details</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Location', value: 'SW18 — Wandsworth, London' },
                  { label: 'Property Type', value: 'Purpose-built flat — communal corridor' },
                  { label: 'Trigger', value: 'Fire Risk Assessment action' },
                  { label: 'Door Type', value: 'FD30-rated flush flat entrance fire door' },
                  { label: 'Spec', value: 'Intumescent strip, smoke seal, 3× fire-rated hinges, self-closer' },
                  { label: 'Turnaround', value: 'Fast appointment — completed with minimal disruption' },
                  { label: 'Rating', value: '10/10 — verified on Checkatrade' },
                ].map(d => (
                  <div key={d.label} className="flex justify-between border-b border-aa-border pb-3 last:border-0 last:pb-0">
                    <p className="font-sans text-xs text-aa-stone">{d.label}</p>
                    <p className="font-outfit font-semibold text-xs text-aa-black text-right max-w-[55%]">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-aa-black rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <ShieldCheck size={20} weight="bold" className="text-yellow-400 shrink-0" />
                <p className="font-outfit font-bold text-sm text-yellow-400">Why Flat Entrance Fire Doors Matter</p>
              </div>
              <p className="font-sans text-sm text-stone-400 leading-relaxed">
                In a residential block, the flat entrance door is the first line of defence — it separates the flat from the communal escape route. If it isn&apos;t FD30-rated, correctly hung and self-closing, it doesn&apos;t provide the protection the law requires. We ensure every installation meets the full specification so the FRA action can be signed off without issue.
              </p>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-black mb-1">Checkatrade Review — Maria Asmar, SW18</p>
              <p className="font-sans text-sm text-yellow-900 leading-relaxed italic">&ldquo;Had a fire door installed following a Fire Risk Assessment. Appointment was arranged quickly and the work was completed efficiently. Very happy with the result.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-50 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Need a Flat Entrance Fire Door?</p>
          <h3 className="font-outfit font-extrabold text-3xl text-aa-black mb-4">FRA action? We install flat entrance fire doors fast and to full compliance</h3>
          <p className="font-sans text-aa-stone mb-8 max-w-[46ch] mx-auto">FD30-rated flat entrance doors for residential blocks and HMOs. Fast appointment scheduling — we understand FRA deadlines.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=Doors+%E2%80%94+All+Types"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px]">
              Get Free Estimate <ArrowRight size={15} weight="bold" />
            </Link>
            <Link href="/services/door-installation"
              className="flex items-center gap-2 border border-aa-border hover:border-stone-400 text-aa-stone font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300">
              Door Installation Service
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

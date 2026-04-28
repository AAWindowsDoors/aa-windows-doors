import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Wrench, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'SE24 — Timber Front Door Installation — AA Windows & Doors',
  description: 'Case study: solid timber front door installation in SE24 Herne Hill. Professional, responsive and highly rated. AA Windows & Doors, Sutton Surrey.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects/se24-timber-door' },
  openGraph: {
    title: 'SE24 — Timber Front Door Installation — AA Windows & Doors',
    description: 'Case study: solid timber front door installation in SE24 Herne Hill. Professional, responsive and highly rated.',
    url: 'https://www.aawindowsanddoors.co.uk/projects/se24-timber-door',
    images: [{ url: '/images/project-timber-door-se24.jpg', width: 1200, height: 630, alt: 'Timber front door SE24 Herne Hill' }],
  },
}

export default function SE24TimberDoorPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/30 font-outfit font-semibold text-xs text-yellow-400 px-3 py-1.5 rounded-full">
              <MapPin size={11} weight="bold" /> SE24 · Herne Hill
            </span>
            <span className="inline-flex items-center gap-1.5 bg-stone-800 font-outfit font-semibold text-xs text-stone-300 px-3 py-1.5 rounded-full">
              <Wrench size={11} weight="bold" /> Timber Front Door Installation
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Timber Front Door<br /><span className="text-yellow-400">SE24 Herne Hill.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            Solid timber front door supplied and fitted in SE24. Fast response, accurate measurement, thoroughly professional installation — 10/10 on Checkatrade.
          </p>
        </div>
      </div>

      <div className="relative h-[460px] lg:h-[560px]">
        <Image src="/images/project-timber-door-se24.jpg" alt="Timber front door installation SE24 Herne Hill" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-aa-black/30 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="font-outfit font-extrabold text-3xl text-aa-black mb-6">Responsive From First Call</h2>
            <div className="font-sans text-base text-aa-stone leading-relaxed space-y-4 mb-10">
              <p>The client in SE24 needed a new timber front door — both as an upgrade and to improve security and kerb appeal on their period property. They contacted AA Windows & Doors and were impressed from the first point of contact.</p>
              <p>Sonny was quick to respond, visited the property to take measurements, and confirmed the specification. The door was ordered, manufactured and fitted with minimal disruption to the household.</p>
              <p>Jonathan Blunden left a verified Checkatrade review describing the team as highly responsive and thoroughly professional throughout the entire process.</p>
            </div>

            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">What We Did</p>
            <div className="flex flex-col gap-4">
              {[
                'Responded quickly to initial enquiry and arranged a site visit',
                'Measured the existing door opening — frame, step and reveal',
                'Agreed specification — timber type, colour and hardware',
                'Removed the old door and frame cleanly',
                'Fitted the new timber door with multi-point lock and hinges',
                'Adjusted for correct alignment and smooth operation throughout',
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
                  { label: 'Location', value: 'SE24 — Herne Hill, London' },
                  { label: 'Property Type', value: 'Period residential' },
                  { label: 'Door Type', value: 'Solid timber front door' },
                  { label: 'Hardware', value: 'Multi-point lock, quality hinges' },
                  { label: 'Duration', value: 'Single day' },
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
                <p className="font-outfit font-bold text-sm text-yellow-400">Timber Doors for Period Properties</p>
              </div>
              <p className="font-sans text-sm text-stone-400 leading-relaxed">
                Period properties often have non-standard opening sizes that off-the-shelf doors simply won&apos;t fit. We supply timber doors made to measure — matching the profile and proportions of the original joinery so the result looks like it always belonged.
              </p>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-black mb-1">Checkatrade Review — Jonathan Blunden, SE24</p>
              <p className="font-sans text-sm text-yellow-900 leading-relaxed italic">&ldquo;Highly responsive and thoroughly professional throughout the entire process. Would not hesitate to recommend.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-50 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Need a New Front Door?</p>
          <h3 className="font-outfit font-extrabold text-3xl text-aa-black mb-4">Timber, composite and aluminium front doors — supplied and fitted</h3>
          <p className="font-sans text-aa-stone mb-8 max-w-[46ch] mx-auto">Made to measure for any opening, including non-standard sizes in period properties. Free estimates across Sutton, London & Surrey.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=Doors+%E2%80%94+All+Types"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[1px]">
              Get Free Estimate <ArrowRight size={15} weight="bold" />
            </Link>
            <Link href="/services/timber-windows-doors"
              className="flex items-center gap-2 border border-aa-border hover:border-stone-400 text-aa-stone font-outfit font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300">
              Timber Windows & Doors
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Wrench, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'SE26 — Fire Door Installation — AA Windows & Doors',
  description: 'Case study: FD30 oak veneer fire door installed to full Building Regulations compliance in SE26 Sydenham. AA Windows & Doors, Sutton Surrey.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects/se26-fire-door' },
  openGraph: {
    title: 'SE26 — Fire Door Installation — AA Windows & Doors',
    description: 'Case study: FD30 oak veneer fire door installed to full Building Regulations compliance in SE26 Sydenham.',
    url: 'https://www.aawindowsanddoors.co.uk/projects/se26-fire-door',
    images: [{ url: '/images/project-fire-door-se26.jpg', width: 1200, height: 630, alt: 'Fire door installation SE26 Sydenham' }],
  },
}

export default function SE26FireDoorPage() {
  return (
    <PageShell>
      <div className="bg-aa-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 font-sans text-sm text-stone-400 hover:text-yellow-400 transition-colors mb-10">
            <ArrowLeft size={14} weight="bold" /> Back to Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/30 font-outfit font-semibold text-xs text-yellow-400 px-3 py-1.5 rounded-full">
              <MapPin size={11} weight="bold" /> SE26 · Sydenham
            </span>
            <span className="inline-flex items-center gap-1.5 bg-stone-800 font-outfit font-semibold text-xs text-stone-300 px-3 py-1.5 rounded-full">
              <Wrench size={11} weight="bold" /> Fire Door Installation
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Oak Fire Door<br /><span className="text-yellow-400">Flat Installation.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            FD30-rated oak veneer fire door, correctly hung with intumescent strips, smoke seals and fire-rated hinges — installed to full Building Regulations compliance in a residential flat in SE26.
          </p>
        </div>
      </div>

      <div className="relative h-[460px] lg:h-[560px]">
        <Image src="/images/project-fire-door-se26.jpg" alt="Fire exit door with overhead closer installed SE26 Sydenham" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-aa-black/30 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="font-outfit font-extrabold text-3xl text-aa-black mb-6">Compliance Came First</h2>
            <div className="font-sans text-base text-aa-stone leading-relaxed space-y-4 mb-10">
              <p>The client — a leaseholder in a purpose-built flat — was required by their management company to replace an existing hollow-core internal door with an FD30-rated fire door as part of a building-wide fire safety improvement programme.</p>
              <p>The replacement had to be an FD30-rated door with the correct intumescent seals, smoke seals and fire-rated hinges. It also needed to match the aesthetic of the hallway — an oak veneer finish was agreed.</p>
              <p>Ray, who manages the building, confirmed the fire door installation was excellent and allowed the entire process to proceed without complication.</p>
            </div>

            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">What We Did</p>
            <div className="flex flex-col gap-4">
              {[
                'Measured the existing opening — frame, reveal and architrave',
                'Supplied an FD30-rated solid oak veneer door to size',
                'Fitted intumescent strip and smoke seal around all three hanging sides',
                'Hung the door on three fire-rated hinges at correct positions',
                'Adjusted the door to achieve consistent clearances all round',
                'Fitted the latch and confirmed correct engagement with the keep',
                'Checked self-close function — door closes and latches unassisted',
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-outfit font-bold text-xs text-yellow-500 shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-sans text-sm text-aa-stone leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image src="/images/project-fire-door-se26-fitting.jpg" alt="Oak veneer fire doors being fitted on site" fill className="object-cover" />
            </div>

            <div className="bg-white border border-aa-border rounded-2xl p-7 shadow-[0_4px_16px_rgba(17,17,16,0.04)]">
              <p className="font-outfit font-bold text-sm text-aa-black uppercase tracking-wide mb-5">Project Details</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Location', value: 'SE26 — Sydenham, London' },
                  { label: 'Property Type', value: 'Purpose-built flat' },
                  { label: 'Door Type', value: 'FD30 oak veneer fire door' },
                  { label: 'Spec', value: 'Intumescent strips, smoke seals, 3x fire-rated hinges' },
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
                <p className="font-outfit font-bold text-sm text-yellow-400">Why Fire Door Compliance Matters</p>
              </div>
              <p className="font-sans text-sm text-stone-400 leading-relaxed">
                In a block of flats, every fire door on the escape route must be FD30-rated and correctly fitted. A fire door hung without the proper seals and hardware provides little protection. We ensure every installation meets the spec — not just approximately.
              </p>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-black mb-1">Checkatrade Review — Ray</p>
              <p className="font-sans text-sm text-yellow-900 leading-relaxed italic">&ldquo;Excellent, recommended. Sonny was very helpful confirming requirements for installation of a new fire door at my flat. Ray did the installation, was very professional and friendly. Highly recommended.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-50 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Need a Fire Door?</p>
          <h3 className="font-outfit font-extrabold text-3xl text-aa-black mb-4">We install fire doors to full Building Regs compliance</h3>
          <p className="font-sans text-aa-stone mb-8 max-w-[46ch] mx-auto">FD30 and FD60 rated doors for flats, HMOs, commercial premises and internal fire compartmentation.</p>
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

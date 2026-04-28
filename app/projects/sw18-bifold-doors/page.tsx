import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Wrench, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'SW18 — Bifold Door Installation — AA Windows & Doors',
  description: 'Case study: bifold door installation in a flat in SW18 Wandsworth. High quality fit, clean finish. AA Windows & Doors, Sutton Surrey.',
  alternates: { canonical: 'https://www.aawindowsanddoors.co.uk/projects/sw18-bifold-doors' },
  openGraph: {
    title: 'SW18 — Bifold Door Installation — AA Windows & Doors',
    description: 'Case study: bifold door installation in a flat in SW18 Wandsworth. High quality fit, clean finish.',
    url: 'https://www.aawindowsanddoors.co.uk/projects/sw18-bifold-doors',
    images: [{ url: '/images/project-bifold-sw18-install.jpg', width: 1200, height: 630, alt: 'Bifold door installation SW18 Wandsworth' }],
  },
}

export default function SW18BifoldDoorsPage() {
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
              <Wrench size={11} weight="bold" /> Bifold Door Installation
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Bifold Doors<br /><span className="text-yellow-400">Flat Installation.</span>
          </h1>
          <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-[52ch]">
            Full bifold door installation in a residential flat in SW18. Measured, supplied and fitted in a single visit — high quality finish, flat left clean and tidy on completion.
          </p>
        </div>
      </div>

      <div className="relative h-[460px] lg:h-[560px] bg-stone-900">
        <Image src="/images/project-bifold-sw18-install.jpg" alt="Bifold door installation SW18 Wandsworth" fill className="object-contain" />
        <div className="absolute inset-0 bg-gradient-to-t from-aa-black/30 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">
          <div>
            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="font-outfit font-extrabold text-3xl text-aa-black mb-6">Clean Install, No Fuss</h2>
            <div className="font-sans text-base text-aa-stone leading-relaxed space-y-4 mb-10">
              <p>The client in SW18 wanted bifold doors installed in their flat. They reached out for a quote and Sonny came out quickly to assess and measure the opening. A competitive quote was turned around fast and the installation was booked promptly.</p>
              <p>The bifold unit was supplied and fitted by the AA Windows & Doors team. All panels were aligned, the locking mechanism checked, and the flat left completely clean and tidy on completion — no mess left behind.</p>
              <p>Emily left a verified Checkatrade review describing the job as brilliant and high quality, with the team praised for both the standard of work and the clean-up afterwards.</p>
            </div>

            <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">What We Did</p>
            <div className="flex flex-col gap-4">
              {[
                'Visited promptly to assess and measure the opening',
                'Supplied and delivered the bifold door unit to specification',
                'Installed the track, frame and all panels correctly aligned',
                'Checked and adjusted panel alignment and locking mechanism',
                'Fitted all seals and ensured smooth operation across full width',
                'Left the flat completely clean and tidy on completion',
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
                  { label: 'Property Type', value: 'Residential flat' },
                  { label: 'Product', value: 'Bifold doors — full installation' },
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
                <p className="font-outfit font-bold text-sm text-yellow-400">Why Bifold Quality Matters</p>
              </div>
              <p className="font-sans text-sm text-stone-400 leading-relaxed">
                Bifold doors live or die by the precision of the installation. Panels out of alignment bind, drag and leak. We measure twice, set the track level, and adjust every panel before sign-off — so your doors open and close perfectly every time.
              </p>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6">
              <p className="font-outfit font-bold text-sm text-black mb-1">Checkatrade Review — Emily Cantor, SW18</p>
              <p className="font-sans text-sm text-yellow-900 leading-relaxed italic">&ldquo;Quick to come see and give a quote for windows. Brilliant high quality job, left the flat clean and tidy.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-50 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4">Interested in Bifold Doors?</p>
          <h3 className="font-outfit font-extrabold text-3xl text-aa-black mb-4">We supply and fit bifold doors across Sutton, London & Surrey</h3>
          <p className="font-sans text-aa-stone mb-8 max-w-[46ch] mx-auto">Aluminium and uPVC bifold doors for residential and commercial properties. Free estimates, fast turnaround.</p>
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

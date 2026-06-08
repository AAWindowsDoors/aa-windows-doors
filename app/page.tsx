import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'AA Windows & Doors — Window & Door Specialists, Sutton Surrey',
  description:
    'AA Windows & Doors: Sutton-based specialists in window installation, door installation, conservatories, roof lanterns and emergency glazing across London & Surrey. Checkatrade verified, 10/10 rated, 122 reviews.',
  alternates: {
    canonical: 'https://www.aawindowsanddoors.co.uk',
  },
}
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Projects from '@/components/Projects'
import Process from '@/components/Process'
import Areas from '@/components/Areas'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Projects />
      <Process />
      <Areas />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingContact />
    </main>
  )
}

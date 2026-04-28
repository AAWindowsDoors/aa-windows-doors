import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Free Estimate — AA Windows & Doors, Sutton Surrey',
  description: 'Request a free, no-obligation estimate from AA Windows & Doors. Serving Sutton, London & Surrey. Call 07585 586388.',
}

export default function ContactPage() {
  return (
    <PageShell>
      <ContactForm />
    </PageShell>
  )
}

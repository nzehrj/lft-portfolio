import type { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact — Lemonade Fizz Tech',
  description:
    'Get in touch with Lemonade Fizz Tech. Tell us about your project and we will respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="bg-surface">
        <div className="container-x pb-16 md:pb-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  )
}
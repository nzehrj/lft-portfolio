import type { Metadata } from 'next'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesList from '@/components/services/ServicesList'
import Process from '@/components/services/Process'
import CallToAction from '@/components/home/CallToAction'

export const metadata: Metadata = {
  title: 'Services — Lemonade Fizz Tech',
  description:
    'Web development, mobile apps, eCommerce, custom design, backend systems, and UI/UX consulting from Lemonade Fizz Tech.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <Process />
      <CallToAction />
    </>
  )
}
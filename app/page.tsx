import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Services from '@/components/home/Services'
import Work from '@/components/home/Work'
import Testimonials from '@/components/home/Testimonials'
import CallToAction from '@/components/home/CallToAction'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Work />
      <Testimonials />
      <CallToAction />
    </>
  )
}
import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import Story from '@/components/about/Story'
import Values from '@/components/about/Values'
import Experience from '@/components/about/Experience'
import CallToAction from '@/components/home/CallToAction'

export const metadata: Metadata = {
  title: 'About — Lemonade Fizz Tech',
  description:
    'Lemonade Fizz Tech is a Nigerian web development studio led by Rejoice Nzeh, building fast, scalable digital products for clients across Nigeria and beyond.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Values />
      <Experience />
      <CallToAction />
    </>
  )
}
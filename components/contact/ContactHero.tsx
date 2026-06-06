'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-orange-light blur-3xl opacity-60" />
      <div className="container-x relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl py-16 text-center sm:py-20 md:py-24"
        >
          <motion.span variants={fadeUp} className="eyebrow">Get in touch</motion.span>
          <motion.h1 variants={fadeUp} className="mt-4 h-hero">
            Let&apos;s build something <span className="font-serif-display text-orange">great</span> together
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-body">
            Whether you have a project in mind, want a quote, or just want to say hello — we&apos;d
            love to hear from you. We typically respond within 24 hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
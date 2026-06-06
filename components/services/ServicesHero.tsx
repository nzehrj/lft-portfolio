'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-orange-light blur-3xl opacity-60" />
      <div className="container-x relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl py-16 text-center sm:py-20 md:py-28"
        >
          <motion.span variants={fadeUp} className="eyebrow">What we offer</motion.span>
          <motion.h1 variants={fadeUp} className="mt-4 h-hero">
            Everything you need to <span className="font-serif-display text-orange">launch</span> &amp; grow
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-body">
            From the first wireframe to the final deployment, we handle every layer of your
            digital product — design, frontend, backend, and everything in between.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
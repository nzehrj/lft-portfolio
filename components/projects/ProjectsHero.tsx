'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-orange-light blur-3xl opacity-60" />
      <div className="container-x relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl py-16 text-center sm:py-20 md:py-28"
        >
          <motion.span variants={fadeUp} className="eyebrow">Our work</motion.span>
          <motion.h1 variants={fadeUp} className="mt-4 h-hero">
            Projects that <span className="font-serif-display text-orange">speak</span> for themselves
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-body">
            Real products, real clients, real impact. Every project here was designed,
            developed, and deployed by Lemonade Fizz Tech.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/animations'

const values = [
  { title: 'Quality over quantity', desc: 'We take fewer projects so each one gets the depth and attention it deserves. Every line of code is written with intention.' },
  { title: 'Deadlines are sacred', desc: "We don't miss deadlines. Every project is scoped, planned, and delivered when promised, no excuses, no delays." },
  { title: 'Clients are partners', desc: 'We treat every client relationship as a long-term partnership transparent communication and shared goals.' },
  { title: 'Mobile-first always', desc: 'Most users are on mobile. Every product we build is designed and tested for mobile first, desktop second.' },
  { title: 'Built to scale', desc: "We don't build only for today. Our architecture always accounts for where your business is going next." },
  { title: 'Detail obsessed', desc: 'We sweat the small things, spacing, motion, performance because polish is what separates good products from great ones.' },
]

export default function Values() {
  return (
    <section className="bg-white">
      <div className="container-x py-16 md:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">What we stand for</span>
          <h2 className="mt-4 h-section">
            Our core <span className="font-serif-display text-orange">values</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-orange-mid"
            >
              <h3 className="text-xl font-bold tracking-tight text-ink">{v.title}</h3>
              <p className="text-base leading-relaxed text-muted">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
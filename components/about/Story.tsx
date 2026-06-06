'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/animations'

const highlights = [
  { num: '20+', label: 'Projects delivered worldwide' },
  { num: '3+', label: 'Years of active development' },
  { num: '5+', label: 'Industries served' },
  { num: '100%', label: 'Delivered on time and to brief' },
]

export default function Story() {
  return (
    <section className="bg-surface">
      <div className="container-x py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.span variants={fadeUp} className="eyebrow">Our story</motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 h-section">
              From an idea to <span className="font-serif-display text-orange">real impact</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-4 text-body">
              <p>
                Lemonade Fizz Tech started with one goal — to build world-class web products
                that genuinely move businesses forward. What began as a freelance operation has
                grown into a trusted name for clients who want more than just a website.
              </p>
              <p>
                We&apos;ve built platforms for NGOs, national government initiatives, startups,
                and educational institutions. Every project is treated with the same care: clean
                code, thoughtful design, and a product that genuinely works for its users.
              </p>
              <p>
                Today we operate as a lean, expert studio — no bloated teams, no outsourced work.
                When you work with us, you work directly with the people building your product.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {highlights.map((h) => (
              <motion.div
                key={h.label}
                variants={fadeUp}
                className="flex flex-col gap-2 rounded-2xl border border-line bg-white p-6"
              >
                <div className="text-4xl font-extrabold tracking-tight text-orange">{h.num}</div>
                <div className="text-base leading-relaxed text-muted">{h.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
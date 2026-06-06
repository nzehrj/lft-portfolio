'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/animations'

const steps = [
  { num: '01', title: 'Discovery', desc: 'We learn about your business, goals, and users — then scope the project clearly so there are no surprises.' },
  { num: '02', title: 'Design', desc: 'We create wireframes and visual designs, refining together until the look and flow feel exactly right.' },
  { num: '03', title: 'Development', desc: 'We build your product with clean, maintainable code — keeping you updated at every milestone.' },
  { num: '04', title: 'Launch', desc: 'We deploy, test thoroughly, and hand over a polished product — with support to keep it running smoothly.' },
]

export default function Process() {
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
          <span className="eyebrow">How we work</span>
          <h2 className="mt-4 h-section">
            A simple, proven <span className="font-serif-display text-orange">process</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s) => (
            <motion.div key={s.num} variants={fadeUp} className="flex flex-col gap-3">
              <span className="text-5xl font-extrabold tracking-tight text-orange/20">{s.num}</span>
              <h3 className="text-xl font-bold tracking-tight text-ink">{s.title}</h3>
              <p className="text-base leading-relaxed text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
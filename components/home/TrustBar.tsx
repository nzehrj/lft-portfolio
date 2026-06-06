'use client'

import { motion } from 'framer-motion'
import { fadeIn, viewportOnce } from '@/lib/animations'

const clients = ['Viewdicon LLC', 'EcoFDI', 'OCO Academy', 'Seasons of Legends', 'Protocomz Ltd']

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-x">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-6 py-10 md:flex-row md:items-center md:justify-between md:gap-10"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-muted whitespace-nowrap">
            Trusted by teams at
          </span>
          <div className="flex flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10 md:justify-between">
            {clients.map((c) => (
              <span key={c} className="text-lg font-bold tracking-tight text-ink-soft/70 transition-colors hover:text-ink sm:text-xl">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
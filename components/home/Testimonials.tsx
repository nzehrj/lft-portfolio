'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/animations'

const testimonials = [
  {
    quote: 'Working with Rejoice was a pleasure. They translated our vision into a beautiful and functional website that exceeded our expectations entirely.',
    name: 'Jacob Thompson',
    role: 'Business Owner',
    initials: 'JT',
  },
  {
    quote: "Rejoice's expertise in UI/UX design greatly improved our user experience, resulting in more engagement and significantly better conversions.",
    name: 'Emily Johnson',
    role: 'Product Manager',
    initials: 'EJ',
  },
  {
    quote: "Thanks to Rejoice's attention to detail and responsive design, our website looks great on any device — a seamless experience for all our customers.",
    name: 'Michael Anderson',
    role: 'Startup Founder',
    initials: 'MA',
  },
]

export default function Testimonials() {
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
          <span className="eyebrow">What clients say</span>
          <h2 className="mt-4 h-section">
            Trusted by people who <span className="font-serif-display text-orange">mean it</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-orange-mid"
            >
              <div className="flex gap-1 text-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="flex-1 text-lg leading-relaxed text-ink-soft">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4 border-t border-line pt-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange to-red-brand text-base font-extrabold text-white">
                  {t.initials}
                </span>
                <div>
                  <div className="text-base font-bold text-ink">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
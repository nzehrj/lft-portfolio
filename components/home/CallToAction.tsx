'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeUp, stagger, viewportOnce } from '@/lib/animations'

export default function CallToAction() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center sm:px-12 md:py-20"
        >
          {/* glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/3 rounded-full bg-orange/20 blur-3xl" />

          <motion.span
            variants={fadeUp}
            className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70"
          >
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Let&apos;s work together
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="relative mx-auto mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl"
          >
            Have a project <span className="font-serif-display text-orange">in mind?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="relative mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/50"
          >
            Let&apos;s build something exceptional together. Tell us what you&apos;re working on
            and we&apos;ll get back to you within 24 hours.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="relative mt-8 flex w-full flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange px-7 py-4 text-lg font-semibold text-white transition-all hover:bg-orange-hover hover:-translate-y-0.5 sm:w-auto"
            >
              Start a conversation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-7 py-4 text-lg font-semibold text-white transition-all hover:bg-white/5 hover:-translate-y-0.5 sm:w-auto"
            >
              View our work
            </Link>
          </motion.div>

          <motion.p variants={fadeUp} className="relative mt-6 text-sm text-white/30">
            Based in Enugu State, Nigeria · Working with clients globally
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
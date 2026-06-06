'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { fadeUp, stagger } from '@/lib/animations'

const stats = [
  { num: '3+', label: 'Years in business' },
  { num: '20+', label: 'Projects delivered' },
  { num: '100%', label: 'On-time delivery' },
]

const techStack = ['React', 'Next.js', 'Node.js', 'TypeScript']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-orange-light blur-3xl opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-light blur-3xl opacity-40" />

      <div className="container-x relative">
        <div className="grid grid-cols-1 items-center gap-12 py-12 sm:py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* LEFT */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center lg:text-left">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-orange-mid bg-orange-light px-4 py-2 text-sm font-semibold text-orange"
            >
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Available for new projects
            </motion.span>

            <motion.h1 variants={fadeUp} className="mt-6 h-hero">
              We build websites that{' '}
              <span className="font-serif-display text-orange">work</span> for your business
            </motion.h1>

            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-body lg:mx-0">
              Lemonade Fizz Tech is a Nigerian web development studio crafting fast, scalable,
              and beautifully designed digital products — from landing pages to full-stack
              platforms. We turn ideas into experiences that convert.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
              <Link
                href="/projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange px-7 py-4 text-lg font-semibold text-white transition-all hover:bg-orange-hover hover:-translate-y-0.5 sm:w-auto"
              >
                See our work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-white px-7 py-4 text-lg font-semibold text-ink transition-all hover:border-ink hover:-translate-y-0.5 sm:w-auto"
              >
                Get a free quote
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 flex justify-center gap-8 border-t border-line pt-8 sm:gap-10 lg:justify-start">
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <div className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{num}</div>
                  <div className="mt-1 text-sm text-muted sm:text-base">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm sm:max-w-md"
          >
            <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[4/5] w-full bg-surface">
                <Image
                  src="https://fizz-tech.vercel.app/image/IMG_1846 (1).png"
                  alt="Rejoice Nzeh — Founder, Lemonade Fizz Tech"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="text-xl font-extrabold tracking-tight text-ink">Rejoice Nzeh</div>
                <div className="mt-1 text-base text-muted">Founder · Full-Stack Developer</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {techStack.map((t) => (
                    <span key={t} className="rounded-md border border-line bg-white px-3 py-1.5 text-sm font-semibold text-ink-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -left-3 top-6 flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-lg sm:-left-4 sm:top-8"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <div>
                <div className="text-sm font-bold text-ink">Open to work</div>
                <div className="text-xs text-muted">Freelance &amp; contract</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeUp, stagger } from '@/lib/animations'

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-orange-light blur-3xl opacity-60" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 items-center gap-12 py-12 sm:py-16 md:py-24 lg:grid-cols-2 lg:gap-16">

          <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center lg:text-left">
            <motion.span variants={fadeUp} className="eyebrow">About us</motion.span>
            <motion.h1 variants={fadeUp} className="mt-4 h-hero">
              A studio built on <span className="font-serif-display text-orange">craft</span> &amp; care.
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-body lg:mx-0">
              Lemonade Fizz Tech is a web development studio founded and led by Rejoice Nzeh —
              a full-stack developer building digital products that are fast, functional, and
              beautifully designed. We serve clients worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-sm sm:max-w-md"
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
                <div className="mt-1 text-base text-muted">Founder &amp; Lead Developer</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Full-Stack', 'Next.js', 'TypeScript', 'Available globally'].map((t) => (
                    <span key={t} className="rounded-md border border-line bg-white px-3 py-1.5 text-sm font-semibold text-ink-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
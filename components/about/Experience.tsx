'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/animations'

const timeline = [
  {
    date: '2025 — Present',
    role: 'Frontend Developer — Viewdicon LLC',
    place: 'Abuja, Nigeria',
    desc: 'Building a large-scale African professional networking platform across 50+ React TypeScript components, featuring cultural authentication, Redux state management, and Framer Motion animations.',
  },
  {
    date: '2025 — Present',
    role: 'Lead Developer — Seasons of Legends',
    place: 'Tournament Platform',
    desc: 'Building a tournament management platform for a knockout gaming competition — player registration, location-aware brackets, and live match tracking, built with Next.js and TypeScript.',
  },
  {
    date: '2026 — Present',
    role: 'Contract Developer — EcoFDI',
    place: 'Port Harcourt, Nigeria',
    desc: 'Delivered a complete Next.js 14 website for an environmental NGO — database schema, admin dashboard, email integration, gallery system, and Vercel deployment.',
  },
  {
    date: '2026',
    role: 'Lead Developer — NYDTP',
    place: 'National Youth Digital Talent Pipeline',
    desc: 'Rapidly built a national digital competition and learning platform for Nigerian youth, delivered within days for a government directorate presentation.',
  },
  {
    date: '2025 — Present',
    role: 'Web Development Instructor — OCO Academy',
    place: 'Enugu State, Nigeria',
    desc: 'Designed and delivered a structured web development programme, teaching students from HTML fundamentals through to full-stack React.',
  },
  {
    date: '2022 — Present',
    role: 'Founder — Lemonade Fizz Tech',
    place: 'Enugu State, Nigeria',
    desc: 'Running a freelance web development studio — delivering client projects, building in-house products, and developing education programmes.',
  },
]

export default function Experience() {
  return (
    <section className="bg-surface">
      <div className="container-x py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.span variants={fadeUp} className="eyebrow">Experience</motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 h-section">
              Work that <span className="font-serif-display text-orange">shaped us</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-body">
              Real client projects, real platforms, real users. Here&apos;s what we&apos;ve shipped.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative border-l-2 border-line pl-8"
          >
            {timeline.map((item, i) => (
              <motion.div key={item.role} variants={fadeUp} className={i === timeline.length - 1 ? '' : 'mb-10'}>
                <span className={`absolute -left-[9px] h-4 w-4 rounded-full border-2 ${i === 0 ? 'border-orange bg-orange' : 'border-line bg-white'}`} />
                <div className="text-sm font-bold uppercase tracking-widest text-orange">{item.date}</div>
                <h3 className="mt-1 text-xl font-bold tracking-tight text-ink">{item.role}</h3>
                <div className="mt-0.5 text-base font-medium text-muted">{item.place}</div>
                <p className="mt-2 text-base leading-relaxed text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
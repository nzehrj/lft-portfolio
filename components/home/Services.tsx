'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeUp, stagger, viewportOnce } from '@/lib/animations'

const services = [
  { num: '01', title: 'Website Development', desc: 'High-performance, responsive websites engineered for speed, search visibility, and a seamless experience across every device.' },
  { num: '02', title: 'Mobile App Development', desc: 'Cross-platform mobile applications that deliver native-quality performance, intuitive interfaces, and lasting reliability.' },
  { num: '03', title: 'eCommerce Integration', desc: 'End-to-end online store solutions with secure payment processing, streamlined product management, and conversion-focused checkout.' },
  { num: '04', title: 'Custom Web Design', desc: 'Brand-driven UI and UX design that elevates your identity, engages your audience, and turns visitors into customers.' },
  { num: '05', title: 'Backend Development', desc: 'Secure, scalable server architecture and APIs built on modern frameworks to power your product as it grows.' },
  { num: '06', title: 'UI/UX Consulting', desc: 'Strategic design audits, research, and prototyping that refine usability and remove friction at every touchpoint.' },
]

export default function Services() {
  return (
    <section className="bg-white">
      <div className="container-x py-16 md:py-24">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <span className="eyebrow">What we do</span>
            <h2 className="mt-4 h-section">
              Services built for <span className="font-serif-display text-orange">real results</span>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-body lg:pb-2"
          >
            From a simple landing page to a complex web application. We design and build digital
            products that solve real problems and drive business growth.
          </motion.p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              className="group flex flex-col gap-3 bg-white p-8 transition-colors hover:bg-orange-light"
            >
              <span className="text-sm font-bold tracking-widest text-orange">{s.num}</span>
              <h3 className="text-xl font-bold tracking-tight text-ink">{s.title}</h3>
              <p className="text-base leading-relaxed text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 flex justify-center lg:justify-start"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-lg font-semibold text-orange transition-all hover:gap-3"
          >
            View all services
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
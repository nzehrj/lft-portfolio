'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/animations'

const services = [
  {
    title: 'Website Development',
    desc: 'Fast, responsive, SEO-optimised websites built with modern frameworks. From marketing sites to complex web platforms.',
    features: ['Responsive design', 'SEO optimisation', 'Performance tuning', 'CMS integration'],
  },
  {
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile apps that feel native, perform smoothly, and deliver clean, intuitive experiences on any device.',
    features: ['iOS & Android', 'Cross-platform', 'Offline support', 'App store deployment'],
  },
  {
    title: 'eCommerce Integration',
    desc: 'Complete online stores with secure payment gateways, product management, and conversion-focused checkout flows.',
    features: ['Payment gateways', 'Inventory management', 'Cart & checkout', 'Order tracking'],
  },
  {
    title: 'Custom Web Design',
    desc: 'Brand-first UI/UX design that looks sharp and converts. Every pixel chosen to reflect your brand and guide your users.',
    features: ['Brand identity', 'Wireframing', 'Prototyping', 'Design systems'],
  },
  {
    title: 'Backend Development',
    desc: 'Secure, scalable APIs and server-side systems engineered to handle growth, built on Node.js and modern databases.',
    features: ['REST APIs', 'Database design', 'Authentication', 'Cloud deployment'],
  },
  {
    title: 'UI/UX Consulting',
    desc: 'Design audits, user-flow analysis, and prototypes that reduce friction, improve usability, and boost engagement.',
    features: ['Design audits', 'User research', 'Usability testing', 'Flow optimisation'],
  },
]

export default function ServicesList() {
  return (
    <section className="bg-surface">
      <div className="container-x py-16 md:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-8 transition-colors hover:border-orange-mid"
            >
              <h3 className="text-2xl font-bold tracking-tight text-ink">{s.title}</h3>
              <p className="text-base leading-relaxed text-muted">{s.desc}</p>
              <ul className="mt-auto grid grid-cols-2 gap-3 border-t border-line pt-5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-base text-ink-soft">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M20 6L9 17l-5-5" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { fadeUp, stagger, viewportOnce } from '@/lib/animations'

const projects = [
  {
    title: 'EcoFDI — Environmental NGO Platform',
    desc: 'A complete web presence for a Nigerian environmental organisation. Built with Next.js 14, featuring a full admin dashboard, gallery system, contact forms, and Open Graph metadata.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Resend'],
    image: '/images/ecofdi.png',
    href: 'https://ecofdi.org/',
    type: 'Full-Stack Web Application',
    featured: true,
  },
  {
    title: 'Seasons of Legends — Gaming Tournament',
    desc: 'Tournament management platform with player registration, location-aware knockout brackets, and live match tracking.',
    tags: ['Next.js', 'TypeScript', 'Full-Stack'],
    image: '/images/seasonoflegend.png',
    href: '#',
    featured: false,
  },
  {
    title: 'CarMaker Dealership',
    desc: 'Responsive car dealership website with browsable listings, detailed product pages, and an integrated contact system.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/carmaker.png',
    href: 'https://carmakerfizz.netlify.app/',
    featured: false,
  },
  {
    title: 'Viewdicon Platform',
    desc: 'African professional networking platform with cultural authentication, village-based roles, and biometric security across 50+ components.',
    tags: ['React', 'TypeScript', 'Redux'],
    image: '/images/viewdiconllc.png',
    href: '#',
    featured: false,
  },
]

export default function Work() {
  return (
    <section className="bg-surface">
      <div className="container-x py-16 md:py-24">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <span className="eyebrow">Selected work</span>
            <h2 className="mt-4 h-section">
              Projects that <span className="font-serif-display text-orange">speak</span> for us
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-lg font-semibold text-orange transition-all hover:gap-3"
            >
              View all projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((p) => (
            <motion.div key={p.title} variants={fadeUp}>
              <Link
                href={p.href}
                target={p.href.startsWith('http') ? '_blank' : undefined}
                rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                    </div>
                  )}
                  {p.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-orange px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs font-semibold text-ink-soft">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-ink">{p.title}</h3>
                  <p className="mt-2 flex-1 text-base leading-relaxed text-muted">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-orange">
                    {p.href === '#' ? 'View case study' : 'Visit live site'}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
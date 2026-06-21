import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'EcoFDI — Environmental NGO Platform',
    desc: 'A complete web presence for a Nigerian environmental organisation. Built with Next.js, featuring a full admin dashboard, gallery system, contact forms, and Open Graph metadata.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Resend', 'Vercel'],
    image: '/images/ecofdi2.png',
    href: 'https://ecofdi.org/',
    type: 'Full-Stack Website',
    featured: true,
  },
  {
    title: 'Viewdicon Platform',
    desc: 'African professional networking platform with village-based roles, cultural authentication, and biometric security across 50+ components.',
    tags: ['React', 'TypeScript', 'Redux'],
    image: '/images/viewdiconchat.png',
    href: '#',
    type: 'Networking Platform',
    featured: false,
  },
  {
    title: 'Seasons of Legends Gaming Tournament',
    desc: 'A tournament management platform featuring player registration, location-aware knockout fixtures, and real-time match tracking.',
    tags: ['Next.js', 'TypeScript', 'Full-Stack'],
    image: '/images/seasonoflegend.png',
    href: '#',
    type: 'Tournament Platform',
    featured: false,
  },
  {
    title: 'CarMaker Dealership',
    desc: 'Responsive car dealership website with browsable listings, detailed product pages, and an integrated contact system.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/carmaker2.png',
    href: 'https://carmakerfizz.netlify.app/',
    type: 'Business Website',
    featured: false,
  },
  {
    title: 'OCO Academy — Web Dev Programme',
   desc: 'Designed and launched a structured programme teaching HTML, CSS, and JavaScript, taking students from fundamentals to building real, functional websites.',
    tags: ['Curriculum', 'Education'],
    image: '/images/ococlass.jpg',
    href: '#',
    type: 'Education Programme',
    featured: false,
  },
]

export default function ProjectsGrid() {
  return (
    <section className="bg-surface">
      <div className="container-x py-16 md:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className={p.featured ? 'md:col-span-2' : ''}>
              <Link
                href={p.href}
                target={p.href.startsWith('http') ? '_blank' : undefined}
                rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              >
                <div className={`relative w-full overflow-hidden bg-surface ${p.featured ? 'aspect-[16/7]' : 'aspect-[16/10]'}`}>
                  {p.image ? (
                    <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                    </div>
                  )}
                  {p.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-orange px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">Featured</span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="text-sm font-semibold uppercase tracking-widest text-orange">{p.type}</div>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">{p.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-muted">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs font-semibold text-ink-soft">{t}</span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-orange">
                    {p.href === '#' ? 'View case study' : 'Visit live site'}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
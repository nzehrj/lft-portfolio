import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  'Website Development',
  'Mobile App Development',
  'eCommerce Integration',
  'Custom Web Design',
  'Backend Development',
  'UI/UX Consulting',
]

const socials = [
  { href: 'https://github.com/', label: 'GitHub' },
  { href: 'https://linkedin.com/', label: 'LinkedIn' },
  { href: 'https://twitter.com/', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] md:gap-10">
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.jpg"
                alt="Lemonade Fizz Tech"
                width={100}
                height={100}
                className="rounded-xl object-contain p-1"
              />
            </Link>
            <p className="max-w-xs text-lg leading-relaxed text-white/50">
              A web development studio crafting fast, scalable, and beautifully designed
              digital products for forward-thinking businesses worldwide.
            </p>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white/70">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Available for new projects
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">Pages</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-lg text-white/60 transition-colors hover:text-orange">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-lg text-white/60 transition-colors hover:text-orange">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">Get in touch</h4>
            <a href="mailto:rejoicen477@gmail.com" className="text-lg text-white/60 transition-colors hover:text-orange">
              rejoicen477@gmail.com
            </a>
            <p className="text-lg leading-relaxed text-white/60">
              Enugu State<br />Nigeria
            </p>
            <div className="mt-1 flex gap-4">
              {socials.map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-base font-medium text-white/50 transition-colors hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 text-center sm:flex-row sm:text-left">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Lemonade Fizz Tech. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Registered in Nigeria. RC/BN: 9635547
            </p>
          </div>
          <p className="text-sm text-white/40">Designed &amp; built by Engr Rejoice Nzeh</p>
        </div>
      </div>
    </footer>
  )
}
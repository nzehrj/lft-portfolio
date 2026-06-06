'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-200 ${
        scrolled ? 'border-b border-line shadow-sm' : 'border-b border-transparent'
      }`}
    >
      <div className="container-x">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Lemonade Fizz Tech"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-lg px-4 py-2 text-lg font-semibold transition-colors ${
                    pathname === href ? 'text-orange' : 'text-ink-soft hover:bg-surface hover:text-ink'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-orange"
            >
              Let&apos;s Talk
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink"
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-line bg-white">
          <div className="container-x py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center justify-between rounded-lg px-4 py-3.5 text-xl font-semibold transition-colors ${
                      pathname === href ? 'text-orange' : 'text-ink hover:bg-surface'
                    }`}
                  >
                    {label}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3.5 text-lg font-semibold text-white"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
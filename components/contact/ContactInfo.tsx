'use client'

const availability = [
  { label: 'Freelance projects', open: true },
  { label: 'Contract work', open: true },
  { label: 'Long-term retainers', open: true },
  { label: 'Full-time roles (selective)', open: false },
]

const socials = [
  { href: 'https://github.com/', label: 'GitHub' },
  { href: 'https://linkedin.com/', label: 'LinkedIn' },
  { href: 'https://x.com/fizz_lemonade?s=21', label: 'Twitter / X' },
]

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {/* DETAILS */}
      <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
        <h3 className="text-xl font-bold tracking-tight text-ink">Contact details</h3>
        <div className="mt-5 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold uppercase tracking-widest text-muted">Email</span>
            <a href="mailto:rejoicen477@gmail.com" className="text-lg font-medium text-ink transition-colors hover:text-orange">
              rejoicen477@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold uppercase tracking-widest text-muted">Location</span>
            <span className="text-lg font-medium text-ink">Enugu State, Nigeria</span>
          </div>
        </div>
      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/2348052614263?text=Hi%20Lemonade%20Fizz%20Tech%2C%20I%27d%20like%20to%20talk%20about%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between rounded-2xl border border-line bg-white p-6 transition-colors hover:border-orange-mid sm:p-8"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 00-8.6 15l-1.4 5 5.1-1.3A10 10 0 1012 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3-1.3-5-4.4-5.1-4.6-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5l.9 2.1c.1.2.1.4 0 .6l-.4.5c-.2.2-.3.4-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.6-.1l.7-.9c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3z" />
            </svg>
          </span>
          <div>
            <div className="text-lg font-bold text-ink">Chat on WhatsApp</div>
            <div className="text-sm text-muted">Usually replies within minutes</div>
          </div>
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
      </a>

      {/* AVAILABILITY */}
      <div className="rounded-2xl bg-ink p-6 sm:p-8">
        <h3 className="text-xl font-bold tracking-tight text-white">Current availability</h3>
        <div className="mt-5 flex flex-col gap-3">
          {availability.map((a) => (
            <div key={a.label} className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${a.open ? 'bg-green-400' : 'bg-orange'}`} />
              <span className="text-base text-white/70">{a.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL */}
      <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
        <h3 className="text-xl font-bold tracking-tight text-ink">Find us online</h3>
        <div className="mt-5 flex flex-col gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-line bg-surface px-4 py-3 text-base font-medium text-ink transition-colors hover:border-orange-mid hover:text-orange"
            >
              {s.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
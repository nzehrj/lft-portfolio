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
  { href: 'https://twitter.com/', label: 'Twitter / X' },
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
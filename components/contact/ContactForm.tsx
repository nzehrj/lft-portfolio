'use client'

import { useState } from 'react'

const services = [
  'Website Development',
  'Mobile App Development',
  'eCommerce Integration',
  'Custom Web Design',
  'Backend Development',
  'UI/UX Consulting',
  'Something else',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError('')

    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Failed to send')
      }

      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  const inputClasses =
    'w-full rounded-lg border border-line bg-surface px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-orange focus:bg-white'

  return (
    <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
      <h2 className="text-2xl font-bold tracking-tight text-ink">Send us a message</h2>
      <p className="mt-2 text-base text-muted">
        Fill in the details below and we&apos;ll get back to you within 24 hours.
      </p>

      {submitted ? (
        <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-orange-mid bg-orange-light p-8 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
          </span>
          <h3 className="text-xl font-bold text-ink">Message sent!</h3>
          <p className="text-base text-muted">Thanks for reaching out. We&apos;ll be in touch shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-ink-soft">First name</label>
              <input name="firstName" type="text" required placeholder="John" className={inputClasses} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-ink-soft">Last name</label>
              <input name="lastName" type="text" required placeholder="Doe" className={inputClasses} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-ink-soft">Email address</label>
            <input name="email" type="email" required placeholder="john@example.com" className={inputClasses} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-ink-soft">Phone number (optional)</label>
            <input name="phone" type="tel" placeholder="+234 800 000 0000" className={inputClasses} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-ink-soft">What do you need?</label>
            <select name="service" required defaultValue="" className={inputClasses}>
              <option value="" disabled>Select a service…</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-ink-soft">Tell us about your project</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Describe what you're building, your timeline, and any details that help us understand the scope…"
              className={`${inputClasses} resize-none`}
            />
          </div>

          {error && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange px-7 py-4 text-lg font-semibold text-white transition-all hover:bg-orange-hover hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {sending ? 'Sending…' : 'Send message'}
            {!sending && (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
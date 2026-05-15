'use client'

import { useState, useRef } from 'react'

interface WaitlistPayload {
  name: string
  email: string
  note?: string
  source: string
  submittedAt: string
}

async function submitWaitlist(data: WaitlistPayload): Promise<void> {
  const res = await fetch('/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const json = (await res.json()) as { ok: boolean; error?: string }

  if (!res.ok || !json.ok) {
    throw new Error(json.error ?? 'Submission failed.')
  }
}

type Status = 'idle' | 'loading' | 'success' | 'error'

interface FieldErrors {
  name?: string
  email?: string
}

function validate(name: string, email: string): FieldErrors {
  const errors: FieldErrors = {}
  if (!name.trim()) errors.name = 'Please enter your name.'
  if (!email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  return errors
}

const SOCIAL_LINKS = [
  { label: 'Substack', href: 'https://substack.com/@mirarlife' },
  { label: 'Instagram', href: 'https://www.instagram.com/mirar.life' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/mirarlife/' },
  { label: 'Facebook', href: 'https://www.facebook.com/people/Mirar/61577255832081/' },
]

function SuccessState() {
  return (
    <div className="py-12 px-6 max-w-md mx-auto text-center">
      <div className="w-10 h-10 rounded-full border border-peach/50 flex items-center justify-center mx-auto mb-5">
        <span className="text-peach text-base">✓</span>
      </div>
      <h3 className="font-serif text-2xl font-light text-ivory mb-3">
        You&apos;re on the waitlist.
      </h3>
      <p className="font-sans text-sm text-ivory/50 leading-relaxed mb-8">
        We&apos;ll reach out personally when the next version of Mirar opens.
        No spam, no newsletter. Just a direct note.
      </p>
      <SocialConnectLinks />
    </div>
  )
}

function SocialConnectLinks() {
  return (
    <div className="mt-6">
      <p className="font-sans text-xs text-ivory/30 mb-4 tracking-wide">
        Until then, follow the rebuild
      </p>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-ivory/40 hover:text-ivory/70 transition-colors duration-200 underline underline-offset-2"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Waitlist() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'loading' || status === 'success') return

    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const note = (form.elements.namedItem('note') as HTMLTextAreaElement).value

    const fieldErrors = validate(name, email)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    setErrors({})
    setFormError(null)
    setStatus('loading')

    try {
      await submitWaitlist({
        name: name.trim(),
        email: email.trim(),
        note: note.trim() || undefined,
        source: 'mirar-landing-v2',
        submittedAt: new Date().toISOString(),
      })
      formRef.current?.reset()
      setStatus('success')
    } catch {
      setStatus('error')
      setFormError(
        'Something went wrong. Please try again or reach us at info@mirar.life.'
      )
    }
  }

  const inputClass =
    'w-full bg-transparent border border-ivory/15 text-ivory placeholder:text-ivory/25 rounded-xl px-4 py-3.5 font-sans text-sm focus:outline-none focus:border-peach/50 transition-colors duration-200'

  const labelClass =
    'block font-sans text-xs tracking-[0.12em] uppercase text-ivory/40 mb-2'

  return (
    <section id="waitlist" className="py-14 sm:py-18 lg:py-24 bg-dark-section">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-lg mx-auto lg:mx-0">
          {status === 'success' ? (
            <SuccessState />
          ) : (
            <>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-ivory/30 mb-4">
                Join the waitlist
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-ivory leading-[1.1] mb-4">
                Be part of the next Mirar.
              </h2>
              <p className="font-sans text-base text-ivory/60 leading-relaxed mb-3">
                The rebuilt Mirar opens to a small founding group first. They get early access, influence the direction, and pay nothing — their feedback helps shape something built to last.
              </p>
              <p className="font-sans text-base text-ivory/40 leading-relaxed mb-10">
                If you&apos;ve been looking for a quiet, daily way to understand what&apos;s happening inside you — this is for you.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputClass}
                    onChange={() =>
                      errors.name && setErrors((e) => ({ ...e, name: undefined }))
                    }
                  />
                  {errors.name && (
                    <p className="mt-1.5 font-sans text-xs text-peach/80">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClass}
                    onChange={() =>
                      errors.email && setErrors((e) => ({ ...e, email: undefined }))
                    }
                  />
                  {errors.email && (
                    <p className="mt-1.5 font-sans text-xs text-peach/80">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Optional note */}
                <div>
                  <label htmlFor="note" className={labelClass}>
                    What made you curious about Mirar?{' '}
                    <span className="normal-case opacity-50">(optional)</span>
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows={3}
                    maxLength={300}
                    placeholder="Optional — one line is enough"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-peach text-charcoal font-sans font-medium text-sm hover:brightness-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {status === 'loading' ? (
                      <>
                        <span
                          className="w-3.5 h-3.5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin"
                          aria-hidden
                        />
                        Joining…
                      </>
                    ) : (
                      'Join waitlist'
                    )}
                  </button>

                  {status === 'error' && formError && (
                    <p className="font-sans text-xs text-peach/80 leading-relaxed">
                      {formError}
                    </p>
                  )}

                  <p className="font-sans text-[11px] text-ivory/20 leading-relaxed">
                    No spam, no newsletter. A direct note when Mirar v2 opens.
                  </p>
                </div>
              </form>

              {/* Social follow — secondary */}
              <div className="mt-10 pt-8 border-t border-ivory/8">
                <p className="font-sans text-xs text-ivory/30 mb-4">
                  Until then, follow the rebuild through Mirar Notes and our
                  social channels.
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {SOCIAL_LINKS.map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs text-ivory/40 hover:text-ivory/70 transition-colors duration-200 underline underline-offset-2"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

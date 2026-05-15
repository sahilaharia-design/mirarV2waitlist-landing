import { NextRequest, NextResponse } from 'next/server'

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL

export async function POST(req: NextRequest) {
  if (!APPS_SCRIPT_URL) {
    console.error('[Waitlist API] APPS_SCRIPT_URL env var is not set')
    return NextResponse.json(
      { ok: false, error: 'Server misconfiguration. Please contact info@mirar.life.' },
      { status: 500 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, note, source, submittedAt } = body as Record<string, string>

  // Basic server-side guard (client also validates, but belt-and-suspenders)
  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ ok: false, error: 'Name and email are required.' }, { status: 400 })
  }

  try {
    const upstream = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, note, source, submittedAt }),
      // Apps Script redirects the POST — follow them
      redirect: 'follow',
    })

    const data = (await upstream.json()) as { ok: boolean; error?: string; message?: string }

    if (!data.ok && data.error === 'duplicate') {
      // Treat a duplicate as a soft success — don't alarm the user
      return NextResponse.json({ ok: true, message: data.message }, { status: 200 })
    }

    if (!data.ok) {
      return NextResponse.json(
        { ok: false, error: data.error ?? 'Upstream error.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    console.error('[Waitlist API] Upstream fetch failed:', err)
    return NextResponse.json(
      { ok: false, error: 'Could not reach the server. Please try again.' },
      { status: 502 }
    )
  }
}

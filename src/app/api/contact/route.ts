import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  let body: Record<string, string>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, company, email, role, service, challenge, message, website, locale } = body

  // Honeypot: a real visitor never fills this hidden field. If it's set, silently
  // report success without sending anything, so bots don't learn it was rejected.
  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !company || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const gmailUser = process.env.CONTACT_GMAIL_USER
  const gmailPass = process.env.CONTACT_GMAIL_APP_PASSWORD

  if (!gmailUser || !gmailPass) {
    console.error('Contact form: missing CONTACT_GMAIL_USER or CONTACT_GMAIL_APP_PASSWORD env vars')
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
  }

  const isEs = locale === 'es'
  const subject = `${isEs ? 'Nuevo contacto' : 'New contact'} — ${company}`

  const textBody = [
    `${isEs ? 'Nombre' : 'Name'}: ${name}`,
    `${isEs ? 'Empresa' : 'Company'}: ${company}`,
    `Email: ${email}`,
    `${isEs ? 'Cargo' : 'Role'}: ${role || '—'}`,
    `${isEs ? 'Servicio de interés' : 'Service of interest'}: ${service || '—'}`,
    '',
    `${isEs ? 'Principal desafío' : 'Main challenge'}:`,
    challenge || '—',
    '',
    `${isEs ? 'Mensaje' : 'Message'}:`,
    message,
  ].join('\n')

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailPass },
    })

    await transporter.sendMail({
      from: `"Henao Intelligence — Sitio Web" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject,
      text: textBody,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form send error:', err)
    return NextResponse.json({ error: 'Send failed' }, { status: 502 })
  }
}

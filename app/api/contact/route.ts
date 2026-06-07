import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, service, message } = body

    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Lemonade Fizz Tech <onboarding@resend.dev>',
      to: ['rejoicen477@gmail.com'],
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName} — ${service}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #0D0D0D;">
          <h2 style="color: #F97316;">New project enquiry</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #F6F6F4; padding: 16px; border-radius: 8px;">${message}</p>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
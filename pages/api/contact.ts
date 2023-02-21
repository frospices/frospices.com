import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { subject, email, message } = req.body

  const msg = {
    to: 'hello@frospices.com',
    from: {
      email: 'hello@frospices.com',
      name: 'Contact Form'
    },
    subject: `Contact Form ${subject}`,
    text: message,
    html: `New email from ${email}.\n\n${message}`
  }

  try {
    await sgMail.send(msg)
    res.status(200).json({ message: 'Message sent successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

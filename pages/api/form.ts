import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body

  if (!body.email) {
    return res.status(400).json({ message: 'Email address is required.' })
  }

  const msg = {
    to: body.email, // Change to your recipient
    from: 'hello@frospices.com', // Change to your verified sender
    subject: 'Welcome to the Frospices Newsletter',
    html: `
      <!DOCTYPE html>
<html>
  <head>
    <title>Frospices Newsletter Signup Confirmation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        font-size: 14px;
        line-height: 1.6;
        color: #333;
      }

      h1 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 30px;
      }

      p {
        margin-bottom: 20px;
      }

      .button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        color: #fff;
        background-color: #2f5be8;
        border-radius: 4px;
        text-decoration: none;
      }

      .button:hover {
        background-color: #1a3da8;
      }

      .logo {
        display: block;
        margin: 0 auto;
        max-width: 200px;
      }
    </style>
  </head>
  <body>
    <img src="https://www.frospices.com/logo.svg" alt="Frospices Logo" class="logo">
    <p>Thank you for subscribing to the Frospices newsletter! We're excited to have you on board, and we can't wait to share our latest news and updates with you.</p>

<p>As a subscriber, you'll receive regular emails from us with exclusive recipes, news about upcoming events and promotions, and much more. We'll keep you informed on everything happening at Frospices.</p>

<p>If you have any questions or feedback, don't hesitate to reach out to us at frospices.com/contact. We always love hearing from our subscribers.</p>

<p>Thanks again for joining us, and we look forward to keeping in touch!</p>

<p>Best regards,</p>
<p>The Frospices Team</p> 
  </body>
</html>

    `,
  }
  
  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: "Email sent successfully." });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Error sending email." });   
  }
}
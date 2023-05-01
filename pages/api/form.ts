import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail';
import sgClient from '@sendgrid/client'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
sgClient.setApiKey(process.env.SENDGRID_API_KEY || "")

const addContact = async (email: string) => {
 const data = {
  "list_ids": [process.env.SENDGRID_NEWSLETTER_ID],
   "contacts": [{
     "email": email,
   }]
 }; 
 
 const request = {
   url: `/v3/marketing/contacts`,
   method: 'PUT' as const,
   body: data
 }
 
 return await sgClient.request(request);
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body

  if (!body.email) {
    return res.status(400).json({ message: 'Email address is required.' })
  }

  const msg = {
    to: body.email,
    from: process.env.SENDGRID_VERIFIED_EMAIL!,
    subject: 'Welcome to the Frospices Newsletter',
    html: `
      <!DOCTYPE html>
<html>
  <head>
    <title>Frospices Newsletter Signup Confirmation</title>
    <style>
      p {
        font-family: Arial, sans-serif;
        color: #333;
        font-size: 14px;
        line-height: 1.6;
        max-width: 600px;
        margin: 0 auto;
        margin-bottom: 20px;
      }

      .logo {
        display: block;
        margin: 0 auto;
        max-width: 200px;
        margin-bottom: 20px;
      }

      #team-name {
        margin-bottom: 0;
      }
    </style>
  </head>
  <body>
    <img src="https://www.frospices.com/logo.png" alt="Frospices Logo" class="logo">
    <p>Thank you for subscribing to the Frospices newsletter! We're excited to have you on board, and we can't wait to share our latest news and updates with you.</p>

<p>As a subscriber, you'll receive regular emails from us with exclusive recipes, news about upcoming events and promotions, and much more. We'll keep you informed on everything happening at Frospices.</p>

<p>If you have any questions or feedback, don't hesitate to reach out to us at frospices.com/contact. We always love hearing from our subscribers.</p>

<p>Thanks again for joining us, and we look forward to keeping in touch!</p>

<p id="team-name">Best regards,</p>
<p>The Frospices Team</p> 
  </body>
</html>

    `,
  }
  
  try {
    await addContact(body.email);
    await sgMail.send(msg);
    return res.status(200).json({ message: "Email sent successfully." });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Error sending email." });   
  }
}
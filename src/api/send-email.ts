/**
 * API Route for sending emails via Resend
 * This is for Vite/React with a backend
 * 
 * Setup:
 * 1. npm install resend
 * 2. Get API key from https://resend.com
 * 3. Add VITE_RESEND_API_KEY to .env
 */

interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * POST /api/send-email
 * Sends an email using Resend API
 */
export async function POST(request: Request) {
  try {
    const data: EmailRequest = await request.json();

    // Validate input
    if (!data.name || !data.email || !data.subject || !data.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Send email using Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Portfolio <onboarding@resend.dev>',
        to: 'muaddhalsway@gmail.com',
        replyTo: data.email,
        subject: `[Portfolio Contact] ${data.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

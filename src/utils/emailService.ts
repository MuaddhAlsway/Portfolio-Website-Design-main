/**
 * Gmail API Email Service
 * Handles sending emails through Gmail API
 */

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Send email using Web3Forms (recommended for static sites)
 * Alternative: Use Resend, SendGrid, or other email services
 */
export async function sendEmailViaWeb3Forms(data: EmailData): Promise<boolean> {
  try {
    const formData = new FormData();
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY || '');
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', data.subject);
    formData.append('message', data.message);
    formData.append('from_name', 'Portfolio Contact Form');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending email via Web3Forms:', error);
    return false;
  }
}

/**
 * Send email using Resend API
 * Requires: npm install resend
 */
export async function sendEmailViaResend(data: EmailData): Promise<boolean> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending email via Resend:', error);
    return false;
  }
}

/**
 * Fallback: Send email using mailto
 * Opens user's default email client
 */
export function sendEmailViaMailto(data: EmailData): void {
  const mailtoLink = `mailto:muaddhalsway@gmail.com?subject=${encodeURIComponent(
    `[Portfolio Contact] ${data.subject}`
  )}&body=${encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
  )}`;
  
  window.location.href = mailtoLink;
}

/**
 * Primary email sending function
 * Tries Web3Forms first, then falls back to mailto
 */
export async function sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  try {
    // Try Web3Forms first (recommended for static sites)
    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;
    
    if (web3FormsKey) {
      const success = await sendEmailViaWeb3Forms(data);
      if (success) {
        return { success: true, message: 'Email sent successfully!' };
      }
    }

    // Fallback to mailto
    sendEmailViaMailto(data);
    return { success: true, message: 'Opening your email client...' };
  } catch (error) {
    console.error('Error in sendEmail:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
}

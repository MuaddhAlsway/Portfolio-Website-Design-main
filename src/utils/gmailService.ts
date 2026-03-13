/**
 * Gmail API Service
 * Sends emails directly to Gmail inbox via Gmail API
 */

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Create email message in RFC 2822 format
 */
function createEmailMessage(data: EmailData): string {
  const emailContent = `From: ${data.email}
To: muaddhalsway@gmail.com
Subject: [Portfolio Contact] ${data.subject}
Content-Type: text/html; charset="UTF-8"

<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #e8ab61; border-bottom: 2px solid #e8ab61; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      
      <div style="margin: 20px 0;">
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
        <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
      </div>
      
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #333;">Message:</h3>
        <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
      </div>
      
      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
        <p>This email was sent from your portfolio contact form.</p>
      </div>
    </div>
  </body>
</html>`;

  return Buffer.from(emailContent).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Get access token using refresh token
 */
async function getAccessToken(): Promise<string> {
  try {
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: import.meta.env.VITE_GMAIL_CLIENT_ID || '',
        client_secret: import.meta.env.VITE_GMAIL_API_KEY || '',
        refresh_token: import.meta.env.VITE_GMAIL_REFRESH_TOKEN || '',
        grant_type: 'refresh_token',
      }).toString(),
    });

    if (!response.ok) {
      throw new Error('Failed to get access token');
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

/**
 * Send email via Gmail API
 */
export async function sendEmailViaGmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  try {
    // Get access token
    const accessToken = await getAccessToken();

    // Create email message
    const encodedMessage = createEmailMessage(data);

    // Send email via Gmail API
    const response = await fetch('https://www.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        raw: encodedMessage,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Gmail API error:', error);
      throw new Error(error.error?.message || 'Failed to send email');
    }

    return {
      success: true,
      message: 'Email sent successfully to your Gmail inbox!',
    };
  } catch (error) {
    console.error('Error sending email via Gmail:', error);
    return {
      success: false,
      message: `Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}

/**
 * Initialize Gmail API (call this on app load)
 */
export async function initializeGmailAPI(): Promise<boolean> {
  try {
    const clientId = import.meta.env.VITE_GMAIL_CLIENT_ID;
    const refreshToken = import.meta.env.VITE_GMAIL_REFRESH_TOKEN;

    if (!clientId || !refreshToken) {
      console.warn('Gmail API credentials not configured');
      return false;
    }

    // Test connection by getting access token
    await getAccessToken();
    console.log('Gmail API initialized successfully');
    return true;
  } catch (error) {
    console.error('Failed to initialize Gmail API:', error);
    return false;
  }
}

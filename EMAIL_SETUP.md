# Email Service Setup Guide

This portfolio uses a flexible email system with multiple options. Choose the one that works best for you.

## Option 1: Web3Forms (Recommended for Static Sites) ⭐

**Easiest setup - No backend required**

### Steps:
1. Go to [web3forms.com](https://web3forms.com)
2. Sign up for a free account
3. Create a new form and get your Access Key
4. Add to `.env.local`:
   ```
   VITE_WEB3FORMS_KEY=your_access_key_here
   ```

### Pros:
- ✅ No backend needed
- ✅ Free tier available
- ✅ Easy setup
- ✅ Works with static hosting

### Cons:
- Limited customization

---

## Option 2: Resend (Modern Email API)

**Best for production - Requires backend**

### Steps:
1. Go to [resend.com](https://resend.com)
2. Sign up and get your API key
3. Install Resend:
   ```bash
   npm install resend
   ```
4. Add to `.env.local`:
   ```
   VITE_RESEND_API_KEY=your_api_key_here
   ```
5. Set up backend route at `/api/send-email`

### Pros:
- ✅ Professional email service
- ✅ Beautiful email templates
- ✅ Detailed analytics
- ✅ Reliable delivery

### Cons:
- Requires backend
- Paid after free tier

---

## Option 3: Gmail API (Advanced)

**Full control - Requires OAuth setup**

### Steps:
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable Gmail API
4. Create OAuth 2.0 credentials (Desktop application)
5. Download credentials JSON
6. Add to `.env.local`:
   ```
   VITE_GMAIL_CLIENT_ID=your_client_id_here
   VITE_GMAIL_API_KEY=your_api_key_here
   ```

### Pros:
- ✅ Full Gmail integration
- ✅ No third-party service
- ✅ Complete control

### Cons:
- Complex setup
- Requires OAuth authentication
- User must authorize first time

---

## Option 4: Fallback (Mailto)

**Always available - Opens user's email client**

No setup needed! If other services fail, the form opens the user's default email client.

---

## Current Setup

The contact form currently uses:
1. **Web3Forms** (if API key provided)
2. **Resend** (if backend available)
3. **Mailto** (fallback)

## Testing

To test the email functionality:

```bash
# Development
npm run dev

# Fill out the contact form and submit
# Check your email at muaddhalsway@gmail.com
```

## Environment Variables

Create `.env.local` in the project root:

```env
# Web3Forms
VITE_WEB3FORMS_KEY=your_web3forms_key

# Resend
VITE_RESEND_API_KEY=your_resend_api_key

# Gmail
VITE_GMAIL_CLIENT_ID=your_gmail_client_id
VITE_GMAIL_API_KEY=your_gmail_api_key
```

## Troubleshooting

### Emails not sending?
1. Check `.env.local` is in project root
2. Verify API keys are correct
3. Check browser console for errors
4. Try the mailto fallback

### CORS errors?
- Use Web3Forms or Resend (they handle CORS)
- Gmail API requires backend proxy

### Rate limiting?
- Web3Forms: 50 submissions/day free
- Resend: 100 emails/day free
- Gmail: 1000 emails/day

## Recommended Setup

For this portfolio, I recommend:

**Development**: Web3Forms (free, easy)
**Production**: Resend (professional, reliable)

---

## Support

For issues:
- Web3Forms: [docs.web3forms.com](https://docs.web3forms.com)
- Resend: [resend.com/docs](https://resend.com/docs)
- Gmail API: [developers.google.com/gmail](https://developers.google.com/gmail)

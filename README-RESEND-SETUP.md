# Resend contact setup

1. Install Resend:
   npm install resend

2. Copy the included files into your project:
   - src/components/ContactForm.tsx
   - src/app/api/contact/route.ts

3. Remove `output: "export"` from next.config.ts.
   An API route needs the Next.js server runtime on Vercel.

4. Copy `.env.local.example` to `.env.local` and add your real values.

5. In Vercel → Project → Settings → Environment Variables add:
   - RESEND_API_KEY
   - CONTACT_TO_EMAIL
   - CONTACT_FROM_EMAIL

6. For local testing:
   npm run dev

7. For deployment testing:
   npm run build

8. Once you have a custom domain, verify it in Resend and change:
   CONTACT_FROM_EMAIL=Justina Smith Portfolio <website@yourdomain.co.uk>

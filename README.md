# Nexloris Technology Website

A production-ready initial website for Nexloris Technology built with Next.js, TypeScript and plain CSS.

## Included

- Responsive premium dark-tech design
- Home / Services / Work / About / Process / Contact sections
- Nexloris logo + brand styling
- Design Evolution and Chart Academy project cards
- Netlify-ready contact form
- Thank-you page
- Static export for easy free deployment
- SEO metadata

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build

```bash
npm run build
```

The static website will be generated in the `out` folder.

## Deploy to Netlify

1. Push this folder to a new GitHub repository.
2. In Netlify, choose **Add new site > Import an existing project**.
3. Select the GitHub repository.
4. Build command: `npm run build`
5. Publish directory: `out`
6. Deploy.

`netlify.toml` is already included, so Netlify should detect these settings automatically.

### Contact form

The contact form is prepared for Netlify Forms. After the first successful production deployment, open Netlify > Forms to confirm the `contact` form has been detected. Test the form once after deployment.

## Later: custom domain

When `nexloristechnology.com` is purchased, connect it to the same Netlify site. No website rebuild is required.

## Edit content

Main page content: `app/page.tsx`

Design/colors: `app/globals.css`

Logo: `public/nexloris-logo.png`

## Vercel contact form setup

The contact form uses a Next.js API route and Gmail SMTP.

1. Enable 2-Step Verification on `nexloristechnology@gmail.com`.
2. Create a Google App Password for Mail.
3. In Vercel open **Project -> Settings -> Environment Variables**.
4. Add `GMAIL_USER` = `nexloristechnology@gmail.com`.
5. Add `GMAIL_APP_PASSWORD` = your Google 16-character App Password.
6. Redeploy the latest deployment.
7. Submit a test enquiry from the live site.

Never commit the real App Password to GitHub.


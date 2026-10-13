# Nikolaj Krog van Gool Portfolio

A personal portfolio website built with Next.js and TypeScript to present software engineering experience, academic projects, technical skills, and contact information.

## Overview

This project showcases:

- an introduction and professional profile
- selected software and academic projects
- technical skills and experience areas
- a clear contact section for inquiries and opportunities
- a responsive, modern single-page portfolio layout

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint

## Project Structure

```text
.
├── app/
│   ├── components/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── public/
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── next-env.d.ts
└── README.md
```

## Prerequisites

- Node.js 20.9.0 or newer
- npm

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the local development server:

   ```bash
   npm run dev
   ```

3. Open the site in your browser:

   ```text
   http://localhost:3000
   ```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

- `npm run dev` starts the local dev server.
- `npm run build` creates a production build.
- `npm run start` runs the production build locally.
- `npm run lint` checks the codebase with ESLint.

## Deployment

Deployed on Vercel as nvangool.dk

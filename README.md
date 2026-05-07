# Saurabh Sharma — Portfolio

A React + Vite portfolio built with craft-level design: Instrument Serif + DM Mono typography, Z-pattern layout, annotated UX decisions, and progressive disclosure case studies.

## Tech Stack

- **React 18** — component architecture
- **Vite 5** — fast dev server and build
- **CSS Variables** — design token system (no CSS framework)
- **Google Fonts** — Instrument Serif + DM Sans + DM Mono

## Project Structure

```
src/
├── components/
│   ├── Nav.jsx           # Sticky nav with availability status
│   ├── Hero.jsx          # Hero section with single CTA
│   ├── Positioning.jsx   # PivotStrip + WhyPM cards
│   ├── CaseStudy.jsx     # Hero case study with progressive disclosure
│   ├── Sections.jsx      # Projects, Experience, Builder, Contact, Footer
│   └── useReveal.js      # Scroll-triggered reveal hook
├── styles/
│   └── global.css        # CSS variables + reset
├── App.jsx               # Root component
└── main.jsx              # Entry point
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Before Deploying

Update these two things in `src/components/Sections.jsx`:

1. Email link: `href: 'mailto:saurabh@email.com'`
2. LinkedIn link: `href: 'https://linkedin.com/in/saurabhsharma'`

## Design Decisions (Annotated)

Every visual decision on this site is intentional and documented:

- **Single CTA** — one action per screen, attention is scarce
- **Left gutter** — editorial structure, signals whitespace is intentional
- **Instrument Serif** — strategic thinker, not just a builder
- **DM Mono annotations** — code-comment syntax bridges dev-to-PM identity
- **Progressive disclosure** — respects reader's time, 30s summary always visible
- **No skill bars** — percentage bars on skills aren't data
- **No form in contact** — forms add friction
- **No dark patterns** — no popups, no fake urgency

## Deployment

Deploy to **Vercel** (recommended):

```bash
npm install -g vercel
vercel
```

Or **Netlify**:
```bash
npm run build
# Upload dist/ folder to Netlify
```

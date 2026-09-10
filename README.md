# SetShow Landing Page

Modern, interactive marketing and product landing page for **SetShow** ("Get Your Set Together"). Built with React 19, Tailwind CSS v4, and Vite.

Features custom scroll animations simulating production countdowns, Dynamic Island / Live Activity lock-screen relays, and department workflow overviews.

---

## Workspace Structure

This directory is part of the unified SetShow workspace:
```
SetShow/
├── Code/             # Backend APIs, mobile application, and web application
├── Logos/            # Visual branding assets and logos
├── SetShow Landing/  # (This directory) Vite + React landing page
└── SetShow UI/       # Design mocks and UI assets
```

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Wix Bundle
```bash
npm run build
```
This runs Vite configured with `vite-plugin-singlefile`, compiling all CSS, JavaScript, and assets into a single self-contained [`dist/index.html`](dist/index.html) file ready for embedding into Wix Studio or other web builders.

---

## Key Files & Architecture

- [`src/App.jsx`](src/App.jsx) — Main landing page application component, containing scroll-driven animation logic, hero phone mockups, countdown calculations, and feature grid.
- [`src/index.css`](src/index.css) — Tailwind CSS v4 entry point with styling definitions.
- [`vite.config.js`](vite.config.js) — Vite build configuration including `vite-plugin-singlefile`.
- [`dist/index.html`](dist/index.html) — Self-contained HTML build output.
- [`WIX_EMBED.md`](WIX_EMBED.md) — Step-by-step instructions for embedding into Wix Studio.
- [`CONVERSATION_HISTORY.md`](CONVERSATION_HISTORY.md) — Complete log of design decisions, copy changes, and adjustments made during development.

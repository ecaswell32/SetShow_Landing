# SetShow Landing Page — Development History & Change Log

This file permanently records all requirements, design iterations, copy changes, and solutions developed during the original **[SetShow Landing Page](conversation://efdf106a-7b8f-43db-964b-df08efc19b58)** thread.

---

## Timeline of Requirements & Changes

### 1. Initial Scaffold
- Bootstrapped project using Vite and React 19 inside `SetShow Landing/`.
- Configured Tailwind CSS v4 and `lucide-react`.
- Implemented `src/App.jsx` with full landing page UI, hero scroll animation, phone mockup, and feature cards.

### 2. Copy Refinement
- **Live Activity Relay**: Updated copy from:
  > *"Push critical scene changes directly to the crew's lock screen. Dynamic Island keeps the source of truth visible at all times."*
  
  to:
  > *"Push critical scene changes directly to the crew's lock screen. Live Activities keeps the source of truth visible at all times."*

### 3. Scroll Animation Calibration
- **Hero Scroll Speed**: Slowed down progression by doubling scroll thresholds across the timeline:
  - Hero container expanded to `h-[600vh]`.
  - Countdown: `Math.max(40 - Math.floor((scrollY / 6000) * 45), 0)`
  - Hero progress: `Math.min(scrollY / 1600, 1)`
  - Phone reveal: `Math.max(0, Math.min((scrollY - 2000) / 1200, 1))`
- **Notification Visibility**: Extended the lock-screen notification opacity window to ensure users have enough time to read the alert while scrolling as the phone elevates into position.

### 4. Wix Studio Embeddable Bundle
- User requested a standalone, foolproof HTML/JS bundle for pasting into Wix Studio's HTML embed element.
- Added `vite-plugin-singlefile` into `vite.config.js`.
- Running `npm run build` generates a single file at `dist/index.html` (~340 KB) that embeds all CSS, JavaScript, and base64-encoded SVG/image assets without needing an external web server.

### 5. Cross-Device Performance & Touch Scroll
- **iPad / Touch Devices**: Reviewed scroll performance differences on touchscreens vs. mouse wheel input.
- **Mobile Scaling**: Adjusted layout and font sizing so the workflow/system architecture section scales cleanly on smaller displays (such as iPhone 13 mini) without affecting desktop spacing.

### 6. Sharing Options
- **Standalone File**: `dist/index.html` can be sent directly to collaborators.
- **Hosted Link**: Dragging the `dist/` directory into [Netlify Drop](https://app.netlify.com/drop) creates an instant public test URL.

---

## Future Reference & Continuity
All future enhancements and maintenance for the landing page are managed within the main `SetShow` workspace conversation. You can also view the historical conversation anytime via the link below:
- **Original Conversation Link**: [SetShow Landing Page](conversation://efdf106a-7b8f-43db-964b-df08efc19b58)

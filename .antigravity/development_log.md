# Development Log (Changelog)

This document tracks all development activities, feature implementations, and code modifications for Jobber.ai. Use this log to align on progress before starting each session.

## [2025-12-26] - v1.2.0: Hero Animation Upgrade
### Added
- Created a premium, multi-stage **Job Matching Animation** in the `Hero` section.
- Added custom Tailwind keyframes: `marquee`, `pulse-glow`, and `progress-fill`.
- Implemented a "Job Feed" marquee and a "Match Analysis" progress interface with 98.4% score visualization.
- Interactive "Match Found" card with entrance animation.
- **Visual Polish**: Added `backdrop-blur-xl`, deep shadows, and grid backgrounds for depth.
- **Accessibility**: Improved text contrast ratios and added `aria-hidden` to decorative elements (Lighthouse optimization).
- **Footer Redesign**: Switched to brand primary color background, updated company name to "GreenerAI", and fixed mixed-language navigation.
- **Layout Optimization**: Increased vertical padding (`py-32`) across sections to reduce visual stiffness and improve flow.

## [2025-12-25] - v1.1.0: i18n & Meta-Tracking
### Added
- Created `.antigravity/` meta-folder with `blueprint.md`, `architecture.md`, and `requirements.md`.
- Implemented **Astro Native i18n** support.
- Added **Chinese (zh)** as the default locale and **English (en)** as the secondary locale.
- Developed a **Language Switcher** component in the `Navbar`.
- Initialized **Git** repository for scientific version control.
- Created `development_log.md` to track project evolution.

### Changed
- Refactored `Layout.astro` to support dynamic language detection.
- Externalized all UI strings into `src/i18n/ui.ts`.
- Updated all landing page components (`Hero`, `Features`, `CTA`, `Footer`) to use translatable strings.
- Restructured `/src/pages` to include localized routes (`/` and `/en/`).

---

## [2025-12-25] - v1.0.0: Initial Landing Page
### Added
- Initialized Astro 5.x project with Tailwind CSS.
- Designed premium, "Google-style" Hero section with animations.
- Implemented responsive `Navbar`, `Features`, `CTA`, and `Footer` components.
- Added custom branding tokens (`#97dd1e`) and persistent **Dark Mode**.
- Verified static build for performance and structure.

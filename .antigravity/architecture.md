# Architecture & Design Decisions

## 1. Modular Components
Each section of the landing page is a self-contained Astro component. This ensures that features can be added or modified without affecting the rest of the site.

## 2. i18n Strategy
We use Astro's native `i18n` routing.
- **Default Locale**: `zh` (Chinese)
- **Supported Locales**: `zh`, `en`
- **Routing Strategy**: Prefix-based. Default locale is served at `/` (can be configured to hide prefix or redirect).
- **Structure**: Localized content will be stored in `/src/pages/[lang]/` or via dynamic routing if scales. For the landing page, we will use static paths.

## 3. UI/UX Principles
- **Aesthetic**: Premium, minimal, dark-first.
- **Animations**: Subtle `slide-up` and `fade-in` to guide the eye.
- **Accessibility**: Semantic HTML and ARIA labels.
- **Speed**: Minimal heavy JS; mostly static HTML with client:load only for theme and language selectors.

## 4. Design Tokens
Shared variables for colors, typography, and spacing are defined in `global.css` and `tailwind.config.mjs` to ensure brand consistency.

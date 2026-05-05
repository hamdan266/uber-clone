# 🚗 Uber Clone

A pixel-perfect, fully animated Uber-inspired web application built with **Next.js 15**, **React 19**, and vanilla CSS — following Uber's official design system.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![CSS](https://img.shields.io/badge/CSS-Vanilla-1572B6?style=for-the-badge&logo=css3)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

- **4 Fully Designed Pages** — Home, Login, Sign Up, About
- **Uber Design System** — Black & white aesthetic, pill-shaped buttons, 8px spacing grid
- **Rich Animations** — 20+ unique micro-animations throughout the site
- **Responsive Design** — Mobile, tablet, and desktop breakpoints
- **App Router** — Next.js 15 App Router with server and client components
- **Optimized Fonts** — Inter loaded via `next/font` (zero layout shift)
- **SEO Ready** — Per-page metadata with title templates

---

## 🎬 Animations

| Area | Animation |
|------|-----------|
| **Hero** | Floating particles canvas, blur-in text reveal, animated SVG route with pulsing destination |
| **Buttons** | Shine sweep on hover, lift + shadow, scale-down on click |
| **Cards** | 3D lift + scale on hover, icon rotation, deep shadow |
| **Drive Section** | Spinning wheels with spokes, bouncing car, waving driver, speed lines, dust particles |
| **Stats** | Animated counting numbers with ease-out curve |
| **CTA Banner** | Animated dark gradient background with radial pulse glow |
| **Navigation** | Logo scale, link lift, scroll-triggered shadow |
| **Footer** | Underline sweep on hover, scroll-to-top button spin |
| **Login/Signup** | Blur-in form entrance, staggered field cascade |
| **About Hero** | 6-color animated gradient, blur-in title reveal |
| **About Social** | Icon invert to black on hover with bounce |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 15](https://nextjs.org/) | React framework with App Router |
| [React 19](https://react.dev/) | UI component library |
| Vanilla CSS | Design system & animations |
| [Inter Font](https://fonts.google.com/specimen/Inter) | Typography (via next/font) |
| SVG Animations | Inline animated illustrations |
| Canvas API | Floating particle system |

---

## 📁 Project Structure

```
uber/
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout (Inter font, global CSS)
│   │   ├── page.js                # Home page
│   │   ├── globals.css            # Design system
│   │   ├── sections/              # Home page sections
│   │   │   ├── HeroSection.js
│   │   │   ├── StatsSection.js
│   │   │   ├── DriveSection.js
│   │   │   ├── EatsSection.js
│   │   │   ├── BusinessSection.js
│   │   │   └── CtaBanner.js
│   │   ├── login/page.js          # Login page
│   │   ├── signup/page.js         # Sign up page
│   │   └── about/page.js          # About page
│   ├── components/
│   │   ├── Navbar.js              # Sticky navigation
│   │   ├── Footer.js              # Site footer
│   │   ├── ScrollToTop.js         # Floating scroll button
│   │   ├── AnimateOnScroll.js     # IntersectionObserver wrapper
│   │   ├── StatCounter.js         # Animated number counter
│   │   └── FloatingParticles.js   # Canvas particle system
│   └── styles/
│       ├── auth.css               # Login/Signup styles
│       └── about.css              # About page styles
├── package.json
├── next.config.mjs
└── DESIGN.md                      # Design system specification
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hamdan266/uber-clone.git

# Navigate to the project
cd uber-clone

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, stats, features, business cards, CTA |
| `/login` | Authentication page with social login (Google, Apple) |
| `/signup` | Registration with password toggle and form validation |
| `/about` | Company info, CEO letter, sustainability, careers |

---

## 🎨 Design System

Based on [DESIGN.md](./DESIGN.md) specifications:

- **Colors** — Pure black `#000000` and white `#ffffff` foundation
- **Border Radius** — Pill-shaped components (`999px`)
- **Typography** — Inter font family with 7 weight variants
- **Spacing** — 8px base grid system
- **Shadows** — Whisper-soft (`rgba(0,0,0,0.12)`)

---

## 📝 License

This project is for educational purposes. Uber brand and design elements are property of Uber Technologies Inc.

---

## 👤 Author

**Hamdan** — [@hamdan266](https://github.com/hamdan266)

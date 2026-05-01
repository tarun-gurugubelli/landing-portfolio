# Tarun's Portfolio Hub

A professional portfolio landing page built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. It serves as a central hub that directs visitors to two specialized portfolio sites: a **MEAN Stack** portfolio and a **DevOps** portfolio.

---

## 🚀 Live

- **Portfolio Hub**: [tarun.win](https://tarun.win) *(root landing page)*
- **MEAN Stack Portfolio**: [mean.tarun.win](https://mean.tarun.win)
- **DevOps Portfolio**: [devops.tarun.win](https://devops.tarun.win)

---

## ✨ Features

- **Dual Portfolio Navigation** — Clean card-based UI to route visitors to either the MEAN Stack or DevOps portfolio
- **Dark / Light Mode** — System-aware theme with a toggle; defaults to dark mode
- **Contact Modal** — "Get In Touch" dialog with links to GitHub, LinkedIn, and email
- **Responsive Design** — Mobile-first layout using Tailwind CSS grid and spacing utilities
- **Static Export** — Built as a fully static site (`output: 'export'`) for easy deployment to any CDN
- **Smooth Animations** — Hover effects, scale transforms, and transition animations throughout

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 + `tailwindcss-animate` |
| UI Components | Radix UI primitives (via shadcn/ui) |
| Icons | [Lucide React](https://lucide.dev/) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Font | Inter (Google Fonts) |
| Forms | React Hook Form + Zod |
| Package Manager | pnpm |

---

## 📁 Project Structure

```
landing-portfolio/
├── app/
│   ├── layout.tsx          # Root layout — metadata, font, ThemeProvider
│   ├── page.tsx            # Main landing page (Hero + About sections)
│   ├── globals.css         # Global styles & CSS variables
│   ├── devops/
│   │   └── page.tsx        # /devops route (placeholder)
│   └── mean-stack/
│       └── page.tsx        # /mean-stack route (placeholder)
├── components/
│   ├── contact-modal.tsx   # "Get In Touch" modal with GitHub/LinkedIn/Email
│   ├── theme-provider.tsx  # next-themes wrapper
│   ├── theme-toggle.tsx    # Sun/Moon icon toggle button
│   └── ui/
│       └── button.tsx      # shadcn/ui Button component
├── lib/
│   └── utils.ts            # cn() utility (clsx + tailwind-merge)
├── public/                 # Static assets
├── next.config.mjs         # Next.js config (static export, trailing slash)
├── tailwind.config.ts      # Tailwind theme + CSS variable tokens
├── tsconfig.json
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** (recommended) — `npm install -g pnpm`

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
```

The static output will be generated in the `out/` directory (configured via `output: 'export'` in `next.config.mjs`).

### Other scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start local dev server |
| `pnpm build` | Build static export to `out/` |
| `pnpm start` | Serve the production build locally |
| `pnpm lint` | Run ESLint |

---

## 🎨 Theming

The app uses CSS custom properties for its color system, wired through Tailwind's `extend.colors` config. All tokens (`--background`, `--foreground`, `--primary`, etc.) are defined in `app/globals.css` for both light and dark variants. The default theme is **dark**.

---

## 📬 Contact

| Platform | Link |
|---|---|
| GitHub | [github.com/tarun-gurugubelli](https://github.com/tarun-gurugubelli) |
| LinkedIn | [linkedin.com/in/tarun-gurugubelli](https://linkedin.com/in/tarun-gurugubelli) |
| Email | tarungurugubelli@outlook.com |

---

© 2025 Tarun's Portfolio Hub. Crafted with passion.

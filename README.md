# Tarun's Portfolio Hub

Tarun's Portfolio Hub is a static portfolio landing web app that helps visitors choose between two focused portfolio experiences: MEAN Stack development and DevOps engineering. The root page presents a responsive portfolio hub with dark/light theme support, social links, a contact modal, and navigation cards that point to the live MEAN and DevOps portfolio sites.

## Live Application

- Portfolio Hub: [https://tarun.win](https://tarun.win)
- MEAN Stack Portfolio: [https://mean.tarun.win](https://mean.tarun.win)
- DevOps Portfolio: [https://devops.tarun.win](https://devops.tarun.win)

## Web App Summary

This application is built with the Next.js App Router and exported as a static site. It is designed for simple hosting on GitHub Pages or any static hosting provider.

Key features:

- Landing page for choosing between MEAN Stack and DevOps portfolios
- Responsive layout for desktop, tablet, and mobile screens
- Dark and light theme support using `next-themes`
- Contact modal with GitHub, LinkedIn, and email actions
- Static export output generated into the `out/` directory
- GitHub Actions workflow for automatic GitHub Pages deployment

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 15 with App Router |
| Language | TypeScript |
| UI Library | React 18 |
| Styling | Tailwind CSS |
| Theme Mode | next-themes |
| Components | Radix UI primitives and shadcn-style components |
| Icons | Lucide React |
| Utility Styling | clsx, tailwind-merge, class-variance-authority |
| Forms/Validation Packages | React Hook Form, Zod, @hookform/resolvers |
| Charts/UI Packages Available | Recharts, Sonner, Vaul, Embla Carousel, React Day Picker |
| Deployment | GitHub Actions and GitHub Pages |

## Modules Used

Main application modules:

- `app/layout.tsx` - Root layout, metadata, Inter font setup, and theme provider wrapper.
- `app/page.tsx` - Main portfolio hub page with hero section, portfolio cards, about section, footer, and contact modal state.
- `app/mean-stack/page.tsx` - Placeholder route for the MEAN Stack portfolio section.
- `app/devops/page.tsx` - Placeholder route for the DevOps portfolio section.
- `components/contact-modal.tsx` - Contact dialog with GitHub, LinkedIn, and email actions.
- `components/theme-toggle.tsx` - Dark/light theme toggle button.
- `components/theme-provider.tsx` - `next-themes` provider wrapper.
- `components/ui/button.tsx` - Reusable button component built with Radix Slot and class variance utilities.
- `lib/utils.ts` - Shared `cn()` utility for combining Tailwind class names.
- `app/globals.css` - Global styles and theme CSS variables.
- `tailwind.config.ts` - Tailwind theme configuration and animation plugin setup.
- `next.config.mjs` - Next.js static export configuration.

## Prerequisites

Install the following before running the app:

- Node.js 20 or later is recommended because the deployment workflow uses Node.js 20.
- npm, which is included with Node.js.

The repository also includes a `pnpm-lock.yaml`, so pnpm can be used locally if preferred. The GitHub Actions workflow uses npm.

## Install Packages

Using npm:

```bash
npm install --legacy-peer-deps
```

For a clean CI-style install:

```bash
npm ci --legacy-peer-deps
```

Using pnpm:

```bash
pnpm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Open the app at:

```text
http://localhost:3000
```

With pnpm:

```bash
pnpm dev
```

## Build

Create a production static export:

```bash
npm run build
```

With pnpm:

```bash
pnpm build
```

The build output is generated in:

```text
out/
```

This happens because `next.config.mjs` uses:

```js
output: "export"
```

## Run Production Build Locally

Because this project is configured as a static export, the production artifact is the `out/` folder. After building, serve it with any static file server.

Example:

```bash
npx serve out
```

## Deployment

The app is deployed to GitHub Pages through the workflow at:

```text
.github/workflows/deploy.yml
```

Deployment flow:

1. Push changes to the `main` branch, or manually run the workflow from the GitHub Actions tab.
2. GitHub Actions checks out the repository.
3. Node.js 20 is installed.
4. Dependencies are installed with `npm ci --legacy-peer-deps`.
5. The app is built with `npm run build`.
6. The generated `out/` folder is uploaded as the GitHub Pages artifact.
7. GitHub Pages deploys the static site.

GitHub Pages setup:

1. Go to the repository settings in GitHub.
2. Open `Settings > Pages`.
3. Set the source to `GitHub Actions`.
4. Add the custom domain `tarun.win` if needed.
5. Enable HTTPS after GitHub verifies the domain.

The custom domain file is stored at:

```text
public/CNAME
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local Next.js development server. |
| `npm run build` | Builds the application and exports static files to `out/`. |
| `npm run start` | Runs `next start`; this is not the preferred command for the static export output. |
| `npm run lint` | Runs the configured Next.js lint command. |

## Project Structure

```text
landing-portfolio/
├── app/
│   ├── devops/
│   │   └── page.tsx
│   ├── mean-stack/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   └── button.tsx
│   ├── contact-modal.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── CNAME
├── styles/
│   └── globals.css
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Contact

- GitHub: [github.com/tarun-gurugubelli](https://github.com/tarun-gurugubelli)
- LinkedIn: [linkedin.com/in/tarun-gurugubelli](https://linkedin.com/in/tarun-gurugubelli)
- Email: [tarungurugubelli@outlook.com](mailto:tarungurugubelli@outlook.com)

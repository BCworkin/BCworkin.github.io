# Bryan Chiam — Portfolio

Personal portfolio built with **Next.js 14**, **TypeScript**, and now **Tailwind CSS** (was actually traditional CSS).
To learn on the go, I've used Claude alongside Next.js to develop my personal portfolio to 
try and understand what I know and what I don't. This also gives me a chance to understand Github Actions workflow.

---

## Tech Stack

- **Framework** — Next.js 14 (App Router, static export)
- **Language** — TypeScript
- **Styling** — Tailwind CSS
- **Deploy** — GitHub Pages (via `next build` → `out/`)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Updating Your Content

**All portfolio content lives in one file:**

```
src/data/index.ts
```

Edit that file to:
- Add / remove **skills** (name, icon, proficiency level, percentage, group)
- Add / remove **projects** (title, description, tags, links, status)
- Update **experience** entries (role, company, bullets, stack)
- Change the **ticker** items that scroll across the page

No other files need to change for content updates.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout — fonts, metadata
│   ├── page.tsx          # Main page — assembles all sections
│   └── globals.css       # Design tokens + global reset
├── components/
│   ├── Cursor.tsx        # Custom cursor (client component)
│   ├── Navbar.tsx        # Fixed navigation bar
│   ├── Hero.tsx          # Cover / masthead section
│   ├── Ticker.tsx        # Scrolling marquee strip
│   ├── Skills.tsx        # Filterable skills grid
│   ├── Projects.tsx      # Filterable project cards
│   ├── Experience.tsx    # Timeline section
│   ├── Contact.tsx       # Contact links section
│   ├── Footer.tsx        # Site footer
│   ├── useScrollFade.ts  # Scroll animation hook
│   └── *.module.css      # Per-component CSS modules
└── data/
    └── index.ts          # ← ALL YOUR CONTENT LIVES HERE
```

---

## Deploying to GitHub Pages

### First-time setup

```bash
npm run build          # builds into /out
```

Then push the repo — GitHub Pages will serve from the `out/` folder
if you configure it in repo Settings → Pages → Deploy from branch.

**Or** use the GitHub Action below for automatic deploys on every push.

### GitHub Actions (automatic deploy)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install & Build
        run: |
          npm ci
          npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

After adding this file, every push to `main` will:
1. Build the site
2. Push the `out/` folder to the `gh-pages` branch
3. GitHub Pages serves from `gh-pages`

In repo Settings → Pages, set source to **gh-pages** branch.

---


# Dream Team — Portfolio

Next.js 16 + React 19 + Tailwind v4 portfolio for a 3-person full-stack engineering team. Stack mirrors `fitmeapp/sierra-bar` (same Next version, same Dockerfile, same standalone output), so it deploys on the same server pipeline.

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run build     # emits .next/standalone/server.js
```

Production (standalone) smoke test:

```bash
HOSTNAME=0.0.0.0 PORT=3000 node .next/standalone/server.js
```

## Environment

Copy `.env.example` → `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://dream-team.dev
```

## Docker

```bash
docker build -t dream-team .
docker run -p 3000:3000 dream-team
```

## Content

All content is code — no CMS.

- `src/lib/constants.ts` — site name, tagline, domain, contact email, nav, stats
- `src/lib/team.ts` — 3 team members (Milan Blaz, Milan Šušnjar, Ensar Bavrk)
- `src/lib/projects.ts` — 8 case studies pulled from the team's CVs

To update copy, edit these three files. Everything else (sections, layout) is presentational.

## Cloudinary assets

Account: `dekljoqsm` · Folder root: `dream-team/`

All images are referenced via:

```
https://res.cloudinary.com/dekljoqsm/image/upload/<transforms>/dream-team/<folder>/<slug>
```

### Required uploads

Upload to the Cloudinary Media Library (https://console.cloudinary.com) with the exact slugs below — `f_auto` handles format, so `.jpg` or `.png` both work.

**`dream-team/team/`** (square, min 600×600, face centered — Cloudinary will crop with `g_face`):

| Slug            | Person         |
| --------------- | -------------- |
| `milan-blaz`    | Milan Blaz     |
| `milan-susnjar` | Milan Šušnjar  |
| `ensar-bavrk`   | Ensar Bavrk    |

**`dream-team/projects/`** (16:10, min 1600×1000):

| Slug              | Project                          |
| ----------------- | -------------------------------- |
| `coop-finance`    | Coop Finance Plus                |
| `credit-agricole` | Crédit Agricole next bank        |
| `myvaillant-pro`  | myVAILLANT Pro                   |
| `abs-safety`      | ABS Safety                       |
| `vivant`          | Vivant                           |
| `additiv-rnd`     | Additiv R&D framework            |
| `sparwk`          | Sparwk                           |
| `medion-iot`      | Medion IoT                       |

**`dream-team/brand/`**:

| Slug         | Purpose                                 |
| ------------ | --------------------------------------- |
| `og-image`   | Open Graph social image (1200×630)      |

### Upload steps (web UI)

1. https://console.cloudinary.com → Media Library
2. Create folder `dream-team/` (then `team/`, `projects/`, `brand/` inside)
3. Drag files in; use the **public_id** field to name them exactly as the slugs above (no extension needed — Cloudinary auto-detects format when `f_auto` is used)
4. Once uploaded, refresh the site — no code changes needed

### Verify a file rendered correctly

Open in a browser:

```
https://res.cloudinary.com/dekljoqsm/image/upload/f_auto,q_auto/dream-team/team/milan-blaz
```

Should serve the image directly.

## Visual direction

- Dark-tech terminal aesthetic
- Space Mono for headlines & labels, Inter for body
- Neon mint (`#7CFFB3`) accent, used strictly for CTAs, active state, data callouts
- Motion: framer-motion scroll reveals, subtle hover lifts, blinking caret in terminal mark
- Background: fixed SVG noise + 48px grid overlay + radial spotlight at top

## Tweaking content or brand

- Change site name, email, domain → `src/lib/constants.ts` → `SITE_CONFIG`
- Change redirect host in prod → `next.config.ts`
- Tweak palette → CSS vars in `src/app/globals.css`
- Add/remove a project → edit `src/lib/projects.ts` (and upload a matching image)

## Deploy

Same pattern as sierra-bar:

1. `git push` to the deploy branch
2. Server's Docker build picks up the new commit
3. Runs the 3-stage Dockerfile (`deps` → `builder` → `runner`)
4. Standalone server starts on port 3000
5. nginx terminates TLS and routes `dream-team.dev` → container

# Deployment Notes

## Current status

- Local Next.js build passes.
- Git repository initialized locally.
- Remote configured as SSH:

```text
git@github.com:manavner/joy-yaelman-art.git
```

## Required once GitHub/Vercel auth is available in this WSL runtime

### 1. Create GitHub repo

If using GitHub web UI:

- Create repo: `joy-yaelman-art`
- Owner: `manavner`
- Do not initialize with README/gitignore/license, because this project already has local commits.

If using `gh` CLI:

```bash
gh repo create manavner/joy-yaelman-art --public --source . --remote origin --push
```

### 2. Push

```bash
git remote -v
GIT_TERMINAL_PROMPT=0 git push -u origin main
```

### 3. Deploy to Vercel

Option A — Vercel dashboard:

- Go to https://vercel.com/new
- Import `manavner/joy-yaelman-art`
- Framework: Next.js
- Build command: `npm run build`
- Output: default Next.js/Vercel

Option B — Vercel CLI:

```bash
npx vercel login
npx vercel deploy --prod --yes
```

## Publication caveat

The current site uses public Tumblr image URLs as prototype material. Before a real public/production launch, confirm Joy Yaelman's approval, official bio, image rights, and contact details.

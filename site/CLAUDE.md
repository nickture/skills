# site/: nickture.com/skills

Astro 7, static. Builds the section from `../skills/*/` on every build, so the site keeps no copy of the rules: `SKILL.md` gives a skill's title, intro and the order of its sections, `rules/*.md` become one page each, and `sources.md` becomes the sources page.

- **Run:** `bun run dev` here (port 4322), then open http://localhost:4321/skills/. nickture.com's dev server (`bun run dev` in `~/Projects/Coding/nickture`) proxies `/skills` here. On port 4322 alone the pages have no fonts or images: they come from nickture.com's root (`/fonts`, `/images`, `/icons`), as on the server.
- **Search** is Pagefind. Its index exists only after `bun run build` (`dist/skills/pagefind`), so in dev the search button is missing.
- **The build fails** when a rules file is missing from the table in `SKILL.md` or a rule (a `- **…**` line) gets no anchor: `src/content.config.ts`.
- `src/lib/rules.ts` turns rendered rules into pages: an id on every rule, `x.md` links to `/skills/<skill>/x/#rule`, source keys to the sources page. `src/lib/copy.ts` places non-breaking spaces; it is a copy of nickture.com's, keep the two in step.
- **Deploy** is not set up yet. On the server, nickture.com's nginx will serve `/skills/` from this site's `dist/skills`.
- **Commands:** `bun run dev`, `bun run build`, `bun run test` (runs in parallel).

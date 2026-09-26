# AGENTS.md — Portfolio Site

Guidance for any AI agent (or human) working on this repo. This is a design
system reference, not a build trigger — see **Workflow** at the bottom
before touching any code.

## Project

Personal portfolio for John Lester, a fourth-year CS student and web
developer. Visual language: a technical, editorial "engineer's notebook on a
coordinate plane" — precise, restrained, not templated, not a generic SaaS
landing page.

## Typography

Three typefaces, each with exactly one job. Do not introduce a fourth or
reassign a role without discussing it first.

| Typeface | Role | Weights used |
|---|---|---|
| **Space Grotesk** | Headlines, section titles, nav brand mark | 500, 600, 700 |
| **Inter** | Body copy, UI text, buttons, nav links | 400, 500, 600 |
| **JetBrains Mono** | Technical accents only: coordinate labels, nav index numbers (`01`, `02`), project tags | 400, 500 |

Rules:
- Mono is for *technical decoration only* — coordinates, indices, tags. Never use it for body copy or general labels; that's a generic-template tell.
- Headline sizes use `clamp()` for fluid scaling (e.g. hero headline `clamp(40px, 7vw, 84px)`), not fixed breakpoint jumps.
- Letter-spacing on large headlines is slightly negative (`-0.01em` to `-0.015em`) to keep Space Grotesk tight at display size.

## Color System

CSS custom properties, defined once in `:root`, with a dark-mode override
block. Never hardcode hex values in components — always reference the
token.

```css
--bg:          #F5F6F3   /* page background, light mode */
--ink:         #15181C   /* primary text */
--ink-soft:    #4B5158   /* secondary text, metadata */
--line:        rgba(21,24,28,0.10)   /* visible grid/borders */
--line-soft:   rgba(21,24,28,0.055) /* faint grid/dividers */
--accent:      #1E3AF0   /* electric cobalt — the one accent color */
--accent-soft: rgba(30,58,240,0.10) /* accent tints, selection */
--paper:       #FFFFFF   /* card surfaces, sits above --bg */
```

Dark mode (`prefers-color-scheme: dark` or `[data-theme="dark"]`):

```css
--bg: #101214   --ink: #F2F3F1   --ink-soft: #9AA0A6
--line: rgba(242,243,241,0.12)   --line-soft: rgba(242,243,241,0.05)
--accent: #5C7CFF   --accent-soft: rgba(92,124,255,0.14)   --paper: #17191C
```

Rules:
- **One accent color, used sparingly** — buttons, links, hover states, the one highlighted headline word. Never add a second accent.
- No gradients, no glassmorphism beyond the scroll-state nav blur, no neon glow, no drop shadows on cards.
- Avoid warm cream backgrounds / terracotta accents and near-black-with-neon — both are the current "generic AI portfolio" defaults. Stay in the cool off-white / cobalt lane this system already establishes.

## Design System

**Concept:** Cartesian coordinate plane / technical grid, used as atmosphere,
not decoration. The grid should never compete with content.
S
- **Axis lines:** at most one faint horizontal + one vertical line, scoped to the hero section only (`position: absolute` inside `.hero`, not `fixed` on the whole page). Don't let axis lines run the full page height.
- **Coordinate labels:** small mono-font annotations (`x: 04.21`, lat/lng strings) placed in hero corners only. Decorative, never load-bearing, hidden on narrow viewports.
- **Cards/surfaces:** `--paper` background, 1px `--line-soft` border, sharp or barely-rounded corners (`--radius: 2px`). No shadows.
- **Numbering/eyebrows:** only where content is genuinely sequential (section order, experience timeline). Don't add numbered eyebrows to things that aren't a sequence.

## Motion

Motion should feel like precision engineering — deliberate and a little
satisfying — not ambient or decorative. More is welcome than the earlier
"color/border only" version of this doc allowed, but each animation still
needs to earn its place.

- **Load-in:** a single orchestrated entrance is good — headline, subhead and CTAs in the hero can stagger in on page load (short delays, ~60–100ms apart), rather than everything appearing at once.
- **Scroll reveals:** sections/cards can fade + slide up a short distance (8–16px) as they enter the viewport. Keep the distance small and the easing snappy (150–250ms) — this should read as "settling into place," not a slow drift.
- **Hover states:** more than color/border is fine now — a small lift (`translateY(-2px to -4px)`) or a subtle scale (1.01–1.02) on cards and buttons is okay. Avoid horizontal shifts (`translateX`) on hover; those were the ones that read as jittery/discomforting before. Keep any hover transform under ~4px or ~2% scale.
- **Micro-interactions:** small directional cues are welcome — an arrow nudging on button hover, a tag underline sliding in, a number ticking, grid lines briefly highlighting near an active element.
- **Still avoid:** cursor-tracking backgrounds (the whole page shifting with the mouse), infinite/looping pulse or glow animations, parallax scrolling, and any animation on the grid/dot background itself — the background stays static so it never competes with content.
- Respect `prefers-reduced-motion` for all of the above — everything above should degrade to instant/no motion when it's set.

## Layout

- Max content width `1180px`, left-aligned throughout — no centered marketing-style layout.
- Editorial asymmetry in the projects section (large/small card rhythm) is encouraged; uniform equal-width card grids are not.
- Mobile: stack everything, keep type large, drop the coordinate/axis decoration rather than shrinking it.

## Code Style & Formatting

- **Indentation:** Use tabs (`\t`), not spaces, for indentations across all code files (HTML, CSS, JS/TS, React/JSX).

## Workflow — read this before writing any code

**Do not start implementing.** Before writing or modifying any code:

1. Restate the task as you understand it.
2. Lay out a short implementation plan — what files/components will change, what's new, roughly how.
3. Stop and wait for an explicit go-ahead ("go", "yes", "proceed", etc.) before touching the codebase.

Re-run this plan-and-wait step **every time**, even for small follow-up
requests in the same session — don't chain multiple implementations off one
approval.
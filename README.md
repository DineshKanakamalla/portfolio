# Siva Dinesh - Portfolio

Personal portfolio for **Kanakamalla Siva Dinesh**, an embedded software and networking engineer
based in Bangalore. Built with React 18, Vite 6 and Tailwind CSS 3, with a warm light theme and a
deep charcoal dark theme that share a single muted-teal accent.

## Highlights

- **Theme system** - CSS custom properties drive every surface, so light and dark stay in sync. The
  palette follows `prefers-color-scheme` until the visitor uses the toggle, after which the choice is
  persisted in `localStorage`. An inline script in `index.html` applies the theme before first paint
  to avoid a flash of the wrong colours.
- **Content as data** - all copy lives in `src/data/profile.js`, so the navigation, hero facts,
  sections and footer never drift apart.
- **Motion with restraint** - scroll reveals, animated PCB traces and a reading-progress bar, all
  disabled under `prefers-reduced-motion: reduce`.
- **No external media** - the hero board and project artwork are inline SVG, so there are no image
  requests and both themes colour them automatically.
- **Accessibility** - skip link, landmarks, `aria-labelledby` on each section, a scroll-spy nav with
  `aria-current`, labelled icon buttons, visible focus rings and a mobile menu that dismisses on link
  click, <kbd>Escape</kbd> (returning focus to the toggle) or a tap outside.

## Project layout

```
portfolio/
├─ package.json
├─ vite.config.js
├─ tailwind.config.cjs      # darkMode: 'class', token-backed colour scale
├─ postcss.config.cjs
├─ index.html               # metadata, fonts, pre-paint theme bootstrap
└─ src/
   ├─ main.jsx
   ├─ App.jsx               # page composition
   ├─ index.css             # design tokens, layout primitives, keyframes
   ├─ data/
   │  └─ profile.js         # profile, nav, skills, experience, projects, awards, education
   ├─ hooks/
   │  └─ useTheme.js        # theme state, persistence, system preference sync
   └─ components/
      ├─ Navbar.jsx         # sticky header, scroll-spy, theme toggle, mobile menu
      ├─ Hero.jsx           # headline, facts strip, inline PCB illustration
      ├─ About.jsx
      ├─ Experience.jsx     # timeline of roles
      ├─ Projects.jsx       # project cards with inline SVG artwork
      ├─ Skills.jsx
      ├─ Education.jsx
      ├─ Recognition.jsx    # award plus working-style strengths
      ├─ Contact.jsx        # direct mailto / LinkedIn / GitHub links
      ├─ Footer.jsx
      ├─ Reveal.jsx         # IntersectionObserver scroll-reveal wrapper
      ├─ SectionHeading.jsx # shared eyebrow + title + intro block
      ├─ ScrollProgress.jsx # top reading-progress bar
      └─ BackToTop.jsx
```

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # serve the built output
```

## Editing content

Update `src/data/profile.js` - it holds the contact details, hero facts, about copy, skill groups,
experience entries (including the grouped workstreams), projects, awards, strengths and education.
Components read from it directly, so no markup changes are needed for routine content edits.

The content mirrors `SivaDinesh_Resume.pdf`; when the resume changes, update both together. An
experience entry supports either a flat `highlights` array or grouped `groups` (each with a `title`
and `points`), plus an optional `note` for things like a promotion date.

## Theming

Colours are defined as RGB triplets in `src/index.css` under `:root` (light) and `.dark`. Add a token
there and expose it in `tailwind.config.cjs` to use it as a Tailwind utility:

```css
:root { --accent: 13 116 106; }
.dark { --accent: 45 212 191; }
```

```js
colors: { accent: 'rgb(var(--accent) / <alpha-value>)' }
```

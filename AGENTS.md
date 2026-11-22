# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## User design requirements
- Main brand: Key2Enable; marketing website for products, schools, teachers, families, and children.
- No AI-generated pictures. Use typography, purposeful motion, and approved authentic assets when supplied.
- Games belong in a dedicated tab titled Game, with an eventual public trial. Actual games will be added by the user.
- This is a frontend preview. Do not imply forms send messages, subscriptions charge, or trials are connected.

- Redesign feedback: retain DM Sans and Instrument Serif families; entirely new visual style and button styling, different colors, larger legible type. No arrows anywhere, including native disclosure markers.

- Latest font preference overrides earlier feedback: remove DM Sans and Instrument Serif. Use a consistent upright Arial/Helvetica sans-serif stack; no decorative serif or italic headlines.

- Latest visual direction: minimal white and dark text with one blue accent. Avoid multiple colored surfaces. Homepage priority is Book a demo and Arrange a call, visible first; supporting product and audience content follows.

- Use a formal brand approach: informative tagline, specific headline, concise product/service descriptions and intentional editorial hierarchy. Avoid generic slogans or a bare text-only composition. Preserve restrained white/dark/blue palette and prominent demo/call actions.

- Latest direction: add controlled color and the official Key2Enable logo, real product photography, and a large educational-games showcase. Avoid repetitive text sections.
- Actual linked catalog: Keyboard Grove free exploration; Robot Workshop proposed levels 1–10 free; Floral Artistry, Sky Catch, Typing Teacher proposed membership. All current hosted builds are externally accessible; do not claim paid controls or trial limits are enforced.
- Trainer access codes must not appear in public UI, source bundle, URLs or screenshots. Use game URLs as supplied; do not copy codes into client code.
- Logo and Key-X/Colibri photos sourced from www.key2enable.ae; game previews captured from supplied live games. No newly generated images.

- Latest feedback: no black or dark section backgrounds. Use light surfaces and purple accents, including the games showcase, tabs, filters, and modal backdrop.

- Audience pages must communicate specific school, family, and Academy offers with real lab photos, published network figures, and evidence. Show ZHO as a collaboration, not ownership. Homepage games are concise visual discovery cards inspired by CodeMonkey; full catalog and player remain in Game. No generated imagery. All metrics require source links; distinguish network reach from measured outcomes and proposed Academy content.

- Add purposeful motion: viewport-triggered rolling numeric reels, subtle section reveals and game transition motion. Respect reduced-motion OS setting and site toggle. Game route should be a focused tabbed studio with tabs above selected game, no duplicate intros, access filters, thumbnail rows, or extra closing sales block.

- Latest Game page preference supersedes tabbed studio: simple visual grid of all five games, one Games heading, game names, brief access labels, and Play buttons. Remove slogans, subheadings, skill tags, and marketing paragraphs.

- Game page visual source is the user’s live Game Hub: warm off-white background, illustrated hub covers, 20px rounded white cards, one short description, and full-width colored pill Play buttons. Match its fonts within this section. Include Brick Builder (sixth live hub game); keep prior access plans labeled planned. Reuse existing source art; generate no new images.

- Latest marketing priorities: lead the homepage and global navigation with Book a call, put Academy membership near the top, and make the lab reach figures easy to notice. Use one restrained plum accent across warm-white and pale neutral surfaces. The Academy page is the main entry to the demo dashboard. Remove the standalone For teachers route. Use published family stories and official videos, accurate founding history, and an eight-country lab network map. Preview booking links use the public company contact form and published general inbox until team recipients are supplied.

- Latest homepage direction: use a short, readable sans-serif headline and lead with real classroom photography. Reserve game artwork for small game previews. Animate booking buttons briefly and carry subtle motion through the site with the reduced-motion control. Route call requests through the on-site form to Rubinger, Ernest and the confirmed rt2609 inbox. The production domain is key2enableacademy.com.

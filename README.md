# Pokémon Choose-Your-Adventure

A standalone, browser-based Pokémon choose-your-adventure experience built with HTML, CSS (Tailwind via CDN), and vanilla JavaScript. The game tracks trainer state (name, party, tools, badges, locations) across branching story nodes with codex tabs for trainers, gyms, stadiums, tools, and Pokémon.

## Local preview

1. Clone the repo
   ```bash
   git clone <your-fork-url>.git
   cd kid-os-app
   ```
2. Open `index.html` in your browser (no build step required). If you prefer a local server:
   ```bash
   python -m http.server 8000
   # then open http://localhost:8000
   ```

## Using GitHub effectively

- **Create a fork or feature branch** on GitHub before editing. Example:
  ```bash
  git checkout -b feature/your-change
  ```
- **Make changes and commit often** with descriptive messages:
  ```bash
  git add .
  git commit -m "Improve adventure flow"
  ```
- **Push to GitHub** and open a Pull Request:
  ```bash
  git push origin feature/your-change
  ```
  Then use GitHub's UI to create a PR, summarize changes, and request review.
- **Preview with GitHub Pages (optional)** by enabling Pages in repo settings and setting the source to `main` (or a `gh-pages` branch). The static site will be served from `index.html`.
- **Track issues and feedback** using GitHub Issues/Projects to capture story bugs, balancing tweaks, or UI ideas.

## Files of interest
- `index.html` – Layout and DOM containers for the adventure card, status, and codex panels.
- `style.css` – Theme, layout, and focus-visible styling.
- `script.js` – Story nodes, game state management, codex data, and interaction wiring.

## Contributing checklist
- Validate the story flow still starts at the name prompt and progresses through branches without console errors.
- Test keyboard navigation: buttons should show focus-visible outlines.
- If you add assets or new branches, keep codex data in `script.js` aligned with narrative changes.

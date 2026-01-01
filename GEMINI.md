# GEMINI.md - Context for "Michael Francazzi | Digital Architect"

This project is a bespoke personal portfolio website for Michael Francazzi, designed as a "Linux Terminal Rice" (inspired by WezTerm and Arch Linux). It is a single-page static HTML application optimized for performance, aesthetics, and interactivity.

## Project Overview
- **Purpose**: Interactive portfolio showcasing digital architectural philosophy.
- **Main Technologies**: 
    - **HTML5/CSS3**: Static implementation with advanced CSS animations.
    - **Dracula Theme**: Official color palette for a professional dark-mode aesthetic.
    - **Web Audio API**: Low-latency mechanical keyboard sound effects.
    - **Intersection Observer API**: Scroll-triggered sequential typing animations.
    - **Google Fonts & Custom Typography**: Utilizing "Inter" and the dot-matrix "Ndot 57 Aligned" font.

## Structure
- `index.html`: The core logic, styles (Dracula theme), and content.
- `assets/images/background.jpg`: Optimized background image (2560px, ~500KB) for fast rendering.
- `assets/audio/keypress.mp3`: Local audio asset for typewriter sound effects.
- `CNAME`: Custom domain configuration (`michaelfrancazzi.com`).
- `.nojekyll`: Disables Jekyll processing on GitHub Pages.

## Key Design Elements
- **Terminal Window UI**: Glassmorphism effect (opacity 0.7, blur 10px) with window controls and custom title bar (`michelio@michaelfrancazzi.com`).
- **ASCII Art Header**: Large, responsive "Slant" style header that scales with the window width.
- **Hyper-Realistic Typewriter**: Sequential typing effect with variable speed, random typos, and automatic backspace corrections to simulate human input.
- **Interactive Audio**: Mechanical keyboard sounds triggered by both the auto-typing effect and manual user keyboard input.

## Deployment
- Hosted on **GitHub Pages** (main branch).
- Domain managed via **Cloudflare** (Caching enabled).

## Notes for Gemini
- **Do not** re-introduce MkDocs/Jekyll.
- **Maintain the Rice Aesthetic**: High-contrast colors, terminal-style prompts (`> `), and monospace/dot-matrix typography.
- **Asset Optimization**: Ensure any new images or audio are optimized for the web before pushing.
- **Audio Context**: Remember that browser security requires a user gesture (click/scroll) before audio can play.
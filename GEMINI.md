# GEMINI.md - Context for "Michael Francazzi | Architetto Digitale"

This project is a bespoke personal portfolio website for Michael Francazzi, designed as a "Linux Terminal Rice" (inspired by Tokyo Night theme and Arch Linux). It is a single-page static HTML application optimized for performance, aesthetics, and interactivity.

## Project Overview
- **Purpose**: Interactive portfolio and personal diary showcasing digital architecture and automation.
- **Main Technologies**: 
    - **HTML5/CSS3**: Static implementation with advanced CSS animations and Glassmorphism.
    - **Tokyo Night Theme**: Official color palette for a deep-blue cyber-punk aesthetic.
    - **Web Audio API**: Low-latency mechanical keyboard sound effects (keypress.mp3).
    - **AbortController API**: Used to manage and cancel concurrent typing animations during view switches.
    - **Google Fonts**: Utilizing "Roboto Mono" for main text and "Ndot 57 Aligned" for headers.

## Structure
- `index.html`: The core logic, styles (Tokyo Night), and localized Italian content.
- `assets/images/background.jpg`: Optimized background image.
- `assets/audio/keypress.mp3`: Local audio asset for typewriter sound effects.
- `CNAME`: Custom domain configuration (`michaelfrancazzi.com`).
- `.nojekyll`: Disables Jekyll processing on GitHub Pages.

## Key Design Elements
- **Terminal Window UI**: Centered container anchored to the top, with blur (12px) and adaptive width (max 1200px).
- **Functional Terminal Controls**: The close button reopens the start screen, simulating native window behavior.
- **Italic ASCII Art Header**: Slanted "Michael Francazzi" header in Tokyo Night blue with a custom bloom effect.
- **Multi-View Navigation**: Virtual directory system (`about_me`, `business`, `hobbies`, `projects`) simulating a shell terminal.
- **Dynamic Typewriter**: Sequential typing effect with variable speed, dynamic prompt indicators (`>`), and optimized mobile scaling.
- **Contact Area**: Monochrome SVG buttons for Email, GitHub, and Telegram with coherent hover effects.

## Deployment
- Hosted on **GitHub Pages** (main branch).
- Domain managed via **Cloudflare** (Caching enabled).

## Notes for Gemini
- **Do not** re-introduce MkDocs/Jekyll.
- **Language**: The site is fully localized in **Italian**. Maintain this for all content updates.
- **Maintain the Rice Aesthetic**: High-contrast colors, terminal-style prompts (`> `), and monospace typography.
- **Animation Logic**: Always use the `AbortController` to prevent animation glitches. The state of typed-out views is cached, so the animation only runs once per view per session.
- **Audio Context**: Browser security requires a user gesture (click/scroll) before audio can play.

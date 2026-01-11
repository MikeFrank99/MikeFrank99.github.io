# GEMINI.md - Context for "Michael Francazzi | Architetto Digitale"

This project is a bespoke personal portfolio website for Michael Francazzi, designed as a "Linux Terminal Rice" (inspired by Tokyo Night theme and Arch Linux). It is a single-page static HTML application optimized for performance, aesthetics, and interactivity.

## Project Overview
- **Purpose**: Interactive portfolio and personal diary showcasing digital architecture and automation.
- **Main Technologies**: 
    - **HTML5/CSS3**: Static implementation with advanced CSS animations and Glassmorphism.
    - **Tokyo Night Theme**: Official color palette for a deep-blue cyber-punk aesthetic.
    - **Web Audio API**: Low-latency mechanical keyboard sound effects (keypress.mp3).
    - **AbortController API**: Used to manage and cancel concurrent typing animations during view switches.
    - **sessionStorage API**: Used for character-level progress checkpointing and persistence of the typing state during a session.
    - **Service Worker & Manifest**: Full PWA (Progressive Web App) support for offline caching and installation.
    - **GitHub API**: Dynamically fetches recent public repositories for the `projects` view.
    - **Google Fonts**: Utilizing "Roboto Mono" for main text and "Ndot 57 Aligned" for headers.

## Structure
- `index.html`: The core logic, styles (Tokyo Night), and localized Italian content.
- `manifest.json`: PWA configuration for app-like behavior on mobile and desktop.
- `sw.js`: Service worker handling caching of assets for offline performance.
- `assets/images/background.jpg`: Optimized background image (used as PWA icon placeholder).
- `assets/audio/keypress.mp3`: Local audio asset for typewriter sound effects.
- `CNAME`: Custom domain configuration (`michaelfrancazzi.com`).
- `.nojekyll`: Disables Jekyll processing on GitHub Pages.

## Key Design Elements
- **Terminal Window UI**: Centered glassmorphic container with 20px lateral padding.
    - **Title Bar**: Centered title text (`michelio@michaelfrancazzi.com`) with macOS-style window controls.
    - **CRT Overlay**: Fixed scanlines and subtle flickering effects for a retro-tech vibe.
- **Interactive CLI**: Functional prompt area accepting commands like `help`, `ls`, `cd`, `clear`, `whoami`.
- **Skip Animation**: 
    - **Keyboard**: Pressing `Esc` immediately finishes the typing animation.
    - **Visual**: A dynamic `[ SKIP ]` button appears next to the section header during typing.
- **Dynamic Typewriter**: Sequential typing effect with variable speed and dynamic prompt indicators (`>`).
    - **Checkpointing**: Typing progress is persistent across view switches via `sessionStorage`.
    - **Pre-typing Delay**: 1-second delay with a blinking cursor before typing begins on a new element.
- **Accessibility**: ASCII art is tagged with ARIA roles and labels; keyboard-first navigation for the CLI.

## Deployment
- Hosted on **GitHub Pages** (main branch).
- Domain managed via **Cloudflare** (Caching enabled).

## Notes for Gemini
- **Do not** re-introduce MkDocs/Jekyll.
- **Language**: The site is fully localized in **Italian**.
- **Animation Logic**: Always use the `AbortController`. Typing state is persistent across view switches but resets on manual page reload or terminal closure.
- **Visuals**: Maintain the "Rice" aesthetic (high contrast, monospace, Tokyo Night colors).
- **Audio Context**: Requires a user gesture (click/scroll) before audio can play.

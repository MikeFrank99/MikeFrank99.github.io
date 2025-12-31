# GEMINI.md - Context for "Sotterranei & Dragoni"

This project is a static documentation site for Dungeons & Dragons campaign lore, built using **MkDocs** and the **Material for MkDocs** theme. It is titled "Sotterranei & Dragoni" and is hosted on GitHub Pages.

## Project Overview
- **Purpose**: To document and share lore, history, creatures, and NPC information from D&D campaigns.
- **Main Technologies**: 
    - [MkDocs](https://www.mkdocs.org/): Static site generator.
    - [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/): A highly customizable theme.
    - [mkdocs-roamlinks-plugin](https://github.com/ulgard/mkdocs-roamlinks-plugin): Enables [[roam-style]] internal linking.
- **Key Features**:
    - Custom "Tomo" (Book) aesthetic on the index page and lore entries.
    - GitHub-style flat design for the header and links.
    - Dark and Light mode support with custom color palettes.
    - Admonitions, emojis, and copy-to-clipboard for code blocks.

## Building and Running
To work with this project locally, you will need Python installed.

### Installation
```bash
pip install mkdocs-material mkdocs-roamlinks-plugin
```

### Key Commands
- **Run Local Server**: `mkdocs serve` (Launches a preview at `http://localhost:8000`).
- **Build Site**: `mkdocs build` (Generates the static files in the `site/` directory).
- **Deploy**: `mkdocs gh-deploy` (Builds and pushes the site to the `gh-pages` branch).

### Deployment
Deployment is automated via GitHub Actions (see `.github/workflows/publish.yml`). Any push to the `main` branch triggers a build and deploy to GitHub Pages.

## Directory Structure
- `mkdocs.yml`: The central configuration file for theme, navigation, and plugins.
- `docs/`: Contains all content in Markdown.
    - `creature/`: Bestiary entries (Dragons, Monsters).
    - `npc/`: Non-Player Characters (Allies, Enemies).
    - `storia/`: World history and origins.
    - `stylesheets/extra.css`: Custom CSS for site-wide styling.
- `index.md`: The landing page with a custom "Book Index" layout.

## Development Conventions
- **Internal Linking**: Use standard Markdown links or the `roamlinks` syntax if preferred.
- **Styling**: 
    - Use `extra_css` for global style adjustments.
    - The `index.md` and some lore pages use custom HTML classes (`book-container`, `book-page`, `page-stain`, `drop-cap`) to achieve a thematic "Ancient Book" look.
- **Language**: The site content and primary language setting in `mkdocs.yml` is Italian (`it`).
- **Media**: Currently uses Material icons for logo and favicon.

## Notes for Gemini
- When adding new lore, ensure the entry is added to the `nav` section in `mkdocs.yml`.
- Maintain the "ancient tome" atmosphere when editing thematic pages like `index.md` or `creature/draghi.md`.
- Be aware of the `dampirere` and `geocrittocomune` terminology used in technical guides like `guida_rapida.md`.

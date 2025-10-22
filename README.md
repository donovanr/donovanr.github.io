# Rory Donovan-Maiye Personal Website

Personal academic website built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

## About

This site showcases my research in computational biology and machine learning, with a focus on:

- Foundation models for biological data
- Generative AI applications in drug discovery
- Single-cell modeling and analysis
- Multimodal data integration

## Structure

- **About**: Homepage with biography and professional summary
- **Research**: Portfolio of current and past research projects
- **CV**: Curriculum vitae with work experience, education, publications, and skills

## Local Development

### Using Docker (Recommended)

```bash
docker compose pull
docker compose up
```

Visit `http://localhost:8080`

### Using Ruby/Bundler

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000`

## Deployment

This site is deployed via GitHub Pages. Any push to the `main` branch will trigger an automatic rebuild and deployment.

1. Push changes to `main` branch
2. GitHub Actions will build the site (~4-5 minutes)
3. Site will be available at `https://donovanr.github.io`

## Adding Content

### New Research Project

1. Create a new markdown file in `_projects/` (e.g., `10_new_project.md`)
2. Add front matter:

```yaml
---
layout: page
title: Project Title
description: Brief description
img: assets/img/project-image.png
importance: 10
category: current
---
```

3. Write project content in Markdown below the front matter
4. Add project image to `assets/img/`

### Updating Biography

Edit `_pages/about.md`

### Updating CV

Edit `assets/json/resume.json` following the [JSON Resume](https://jsonresume.org/) format.

## License

The theme is available as open source under the terms of the [MIT License](LICENSE).

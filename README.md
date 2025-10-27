# Rory Donovan-Maiye - Personal Academic Website

This is my personal website, showcasing my research, publications, and professional experience in computational biology and machine learning.

## Built With

This site is built using [Astro Academia](https://github.com/george-gca/astro-academia), an excellent academic website template by [@george-gca](https://github.com/george-gca). Astro Academia uses [Astro](https://astro.build/), a modern static site generator that's fast, responsive, and easy to maintain.

## Local Development

To run the site locally:

```bash
npm install
npm run dev
```

## Customization Guide

### Profile Settings

Edit `src/settings.ts` to update:

- Your name, title, and institution
- Social media links
- SEO settings (site title, description, default image)
- Website URL and base path

### CV Content

Edit `src/data/cv.ts` to update your:

- Work experience
- Education history
- Skills
- Publications list

### Projects

Projects are located in `src/content/Projects/`. Each project is a Markdown file with frontmatter:

```markdown
---
title: "Project Title"
description: "Brief description"
img: "/images/project-image.png"
importance: 1
category: "current"
---

# Project Title

Full project content goes here...
```

### Blog Posts

Blog posts are located in `src/content/BlogPosts/`. To add a new post, create a Markdown file:

```markdown
---
title: "Post Title"
date: "2024-01-01"
tags: ["tag1", "tag2"]
excerpt: "Brief summary"
---

# Post Title

Your content here...
```

### Profile Picture

Replace `src/assets/prof_pic.jpg` with your own photo.

## Deployment

This site deploys automatically to GitHub Pages via GitHub Actions whenever changes are pushed to the main branch.

## Credits

Template: [Astro Academia](https://github.com/george-gca/astro-academia) by [@george-gca](https://github.com/george-gca)

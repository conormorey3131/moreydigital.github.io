# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a static HTML website for Morey Digital, a web development and digital marketing company based in Limerick, Ireland. The site is designed to be deployed to GitHub Pages and uses the custom domain `moreydigital.ie`.

## Architecture & Structure

### File Organization
- **HTML Pages**: All pages are individual HTML files in the root directory
  - `index.html` - Homepage with hero section, services overview, and portfolio
  - `about.html` - Company information and team member profiles
  - `portfolio.html` - Project showcase with links to live sites
  - `services.html` - Detailed service offerings
  - `contact.html` - Contact information and social media links
- **Static Assets**: Located in `/images/` directory containing project screenshots and logos
- **Domain Configuration**: `CNAME` file contains the custom domain `moreydigital.ie`

### Design System
- **Typography**: Uses Google Fonts (Montserrat primary, Open Sans secondary)
- **Color Scheme**: 
  - Primary: `#333333` (dark text)
  - Accent: `#ff6600` (orange for CTAs and highlights)
  - Background: `#ffffff` (white)
  - Footer: `#222222` (dark background)
- **Layout Pattern**: Consistent header/nav, main content, footer structure across all pages
- **Responsive Design**: Mobile-first approach with hamburger menu for mobile navigation

### Key Components
- **Navigation**: Consistent across all pages with active state indicators
- **Hero Sections**: Large typography with call-to-action buttons
- **Portfolio Cards**: Hover effects with project images and visit links
- **Contact Forms**: Email and phone contact information
- **Footer**: Three-column layout with social media icons and contact details

## Development Commands

Since this is a static HTML site with no build process:

### Local Development
```bash
# Serve locally using any static server
python -m http.server 8000
# OR
npx serve .
# OR
php -S localhost:8000
```

### Validation & Quality Checks
```bash
# HTML validation (if tools are installed)
html5validator *.html

# Link checking
linkchecker http://localhost:8000
```

### Deployment
- **GitHub Pages**: Automatically deploys from the main branch
- **Custom Domain**: Configured via CNAME file pointing to `moreydigital.ie`
- **No build step required** - files are served directly

## Code Patterns & Conventions

### HTML Structure
- Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- SEO optimized with comprehensive meta tags, Open Graph, and structured data
- Accessibility features including ARIA labels and semantic markup

### CSS Organization
- Inline styles within each HTML file for simplicity
- Consistent naming conventions for classes
- Mobile-first responsive design patterns
- Reusable component styles (buttons, cards, sections)

### JavaScript
- Minimal vanilla JavaScript for mobile menu toggle functionality
- Google Analytics integration on all pages
- No external dependencies or frameworks

## Content Management

### Adding New Portfolio Projects
1. Add project image to `/images/` directory
2. Update `portfolio.html` with new project card
3. Ensure consistent card structure and hover effects
4. Update homepage featured portfolio section if needed

### Updating Contact Information
- Primary contact: `conor@moreydigital.ie`
- Phone: `+353 87 399 9296`
- Location: Limerick, Ireland
- Social media links are consistent across all pages

### SEO & Analytics
- Google Analytics ID: `G-36R7DYFRZD`
- Structured data markup on all pages
- Open Graph and Twitter Card meta tags
- Canonical URLs for each page

## Common Tasks

### Adding a New Page
1. Copy structure from existing page (e.g., `about.html`)
2. Update title, meta description, and structured data
3. Modify navigation to include new page
4. Update canonical URL and Open Graph URL
5. Ensure consistent header/footer structure

### Updating Styles
- Styles are inline within each HTML file
- Maintain consistency across pages when making changes
- Test responsive behavior on mobile devices
- Preserve hover effects and transitions

### Content Updates
- Update copyright year in footer (currently 2025)
- Maintain consistent tone and messaging
- Ensure all external links open in new tabs (`target="_blank"`)
- Keep social media links updated across all pages
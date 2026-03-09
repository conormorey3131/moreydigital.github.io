#!/usr/bin/env node

// Bulk update script to apply consistent changes across all HTML files
const fs = require('fs');
const path = require('path');

// Files to update
const files = [
  'index.html',
  'portfolio.html', 
  'contact.html',
  'services.html',
  'thank-you.html'
];

// Geographic replacements (Clare-only to Ireland-wide)
const geoReplacements = [
  // SEO Title updates
  ['Web Design Story in Clare', 'Website Design & Development in Limerick, Clare & Ireland'],
  ['Web Development Services | Morey Digital Clare', 'Web Development & Shopify Services | Morey Digital Limerick, Clare & Ireland'],
  ['Clare web design', 'website design serving Limerick, Clare, and Ireland'],
  ['based in Clare', 'serving Limerick, Clare, and businesses across Ireland'],
  ['Clare, Ireland', 'Limerick, Clare & Ireland'],
  
  // Address updates in structured data
  ['"addressLocality": "Clare"', '"addressLocality": "Limerick, Clare",\n        "addressRegion": "Munster"'],
  
  // Navigation updates (standardize menu)
  ['<li><a href="about.html">About Us</a></li>', '<li><a href="about.html">About</a></li>'],
  ['<li><a href="services.html">Services</a></li>', ''],
  ['<li><a href="pricing.html">Pricing</a></li>', '<li><a href="pricing.html">Packages</a></li>'],
  
  // Footer location updates
  ['<h4>Location Details</h4>\n        <p>Clare, Ireland</p>', '<h4>Serving</h4>\n        <p>Limerick, Clare & all of Ireland</p>\n        <p><a href="tel:+353873999296">087 399 9296</a></p>'],
  
  // Content updates
  ['specializing in the construction, trade, and B2B sectors', 'serving Limerick, Clare, and businesses across Ireland'],
  ['Based in Clare, Ireland', 'Serving clients across Ireland'],
];

// Add shared stylesheet
const sharedStylesheetInsert = `  <!-- Font Awesome CDN -->
  <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" as="style" onload="this.onload=null;this.rel='stylesheet';" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer">
  <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer"></noscript>
  <!-- Shared Stylesheet -->
  <link rel="stylesheet" href="shared-styles.css">`;

// WhatsApp button HTML
const whatsappButton = `
  <!-- WhatsApp Floating Button -->
  <a href="https://wa.me/353873999296" target="_blank" class="whatsapp-float" aria-label="Chat on WhatsApp">
    <i class="fab fa-whatsapp"></i>
  </a>`;

// Navigation with CTA button
const newNavigation = `    <nav>
      <ul id="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="pricing.html">Packages</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
    <a href="pricing.html" class="header-cta-btn">View Packages</a>`;

function updateFile(filename) {
  console.log(`Updating ${filename}...`);
  
  if (!fs.existsSync(filename)) {
    console.log(`File ${filename} not found, skipping.`);
    return;
  }
  
  let content = fs.readFileSync(filename, 'utf8');
  
  // Apply geographic replacements
  geoReplacements.forEach(([old, new_]) => {
    content = content.replace(new RegExp(old, 'g'), new_);
  });
  
  // Add shared stylesheet if not already present
  if (!content.includes('shared-styles.css') && content.includes('<!-- Stylesheet -->')) {
    content = content.replace('  <!-- Stylesheet -->', sharedStylesheetInsert + '\n  <!-- Page-specific Stylesheet -->');
  }
  
  // Add WhatsApp button before closing body tag if not present
  if (!content.includes('whatsapp-float') && content.includes('</body>')) {
    content = content.replace('</body>', whatsappButton + '\n</body>');
  }
  
  // Update navigation if it doesn't already have the new structure
  if (content.includes('<nav>') && !content.includes('header-cta-btn')) {
    // Find and replace the navigation section
    const navRegex = /<nav>[\s\S]*?<\/nav>/;
    if (navRegex.test(content)) {
      content = content.replace(navRegex, newNavigation);
    }
  }
  
  // Update active navigation state for current page
  const pageMap = {
    'index.html': 'Home',
    'pricing.html': 'Packages', 
    'portfolio.html': 'Portfolio',
    'about.html': 'About',
    'contact.html': 'Contact'
  };
  
  if (pageMap[filename]) {
    content = content.replace(
      new RegExp(`<li><a href="${filename}"([^>]*)>`, 'g'),
      `<li><a href="${filename}" class="active">`
    );
  }
  
  fs.writeFileSync(filename, content);
  console.log(`✓ Updated ${filename}`);
}

// Update all files
files.forEach(updateFile);

console.log('Bulk update complete!');
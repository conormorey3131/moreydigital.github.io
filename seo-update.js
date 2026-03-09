#!/usr/bin/env node

// SEO optimization script to update meta tags across all pages
const fs = require('fs');

const seoUpdates = {
  'index.html': {
    title: 'Morey Digital | Website Design & Shopify Development in Limerick, Clare & Ireland',
    description: 'Professional website design and Shopify development services in Limerick, Clare, and across Ireland. Custom websites, e-commerce stores, and monthly care packages with clear pricing.',
    keywords: 'website design Limerick, web development Clare, Shopify Ireland, e-commerce development, website care packages, custom websites Ireland, web design agency'
  },
  'about.html': {
    title: 'About Morey Digital | Website Design & Development in Limerick, Clare & Ireland',
    description: 'Meet Morey Digital - a boutique web design agency serving Limerick, Clare, and businesses across Ireland. Expert website development and Shopify solutions.',
    keywords: 'About Morey Digital, Conor Morey, Limerick web design, Clare web design, Ireland web development, Shopify development, boutique agency'
  },
  'portfolio.html': {
    title: 'Portfolio | Website & Shopify Projects by Morey Digital Ireland',
    description: 'View our portfolio of website and Shopify projects for Irish businesses. Custom web development and e-commerce solutions in Limerick, Clare, and nationwide.',
    keywords: 'web design portfolio Ireland, Shopify projects Limerick, website examples Clare, Irish web development, e-commerce portfolio'
  },
  'services.html': {
    title: 'Web Development & Shopify Services | Morey Digital Limerick, Clare & Ireland',
    description: 'Professional web development and Shopify services in Limerick, Clare, and across Ireland. Custom websites, e-commerce stores, and monthly care packages.',
    keywords: 'web development Limerick, website design Clare, Shopify Ireland, e-commerce development, website care packages, custom websites Ireland'
  },
  'contact.html': {
    title: 'Contact Morey Digital | Website Design & Shopify Development Ireland',
    description: 'Get in touch with Morey Digital for professional website design and Shopify development in Limerick, Clare, and across Ireland. Free consultations available.',
    keywords: 'contact Morey Digital, website design Limerick, web development Clare, Shopify Ireland, get quote website'
  },
  'pricing.html': {
    title: 'Website Pricing Packages | Morey Digital Limerick, Clare & Ireland',
    description: 'Transparent website pricing packages for Irish businesses. Starter websites from €499, Website-as-a-Service €150/mo, Shopify stores €349/mo. Serving Limerick, Clare & Ireland.',
    keywords: 'website pricing Ireland, web design cost Limerick, affordable websites Clare, Shopify pricing, website packages Ireland'
  },
  'thank-you.html': {
    title: 'Thank You | Morey Digital Website Design & Development Ireland',
    description: 'Thank you for contacting Morey Digital. We provide professional website design and development services in Limerick, Clare, and across Ireland.',
    keywords: 'thank you, website design Ireland, web development Limerick, Shopify Clare'
  }
};

function updateSEO(filename) {
  if (!fs.existsSync(filename) || !seoUpdates[filename]) {
    console.log(`Skipping ${filename} - no SEO updates defined`);
    return;
  }

  console.log(`Updating SEO for ${filename}...`);
  
  let content = fs.readFileSync(filename, 'utf8');
  const seo = seoUpdates[filename];
  
  // Update title tag
  content = content.replace(
    /<title>.*?<\/title>/g,
    `<title>${seo.title}</title>`
  );
  
  // Update meta description
  content = content.replace(
    /<meta name="description" content=".*?">/g,
    `<meta name="description" content="${seo.description}">`
  );
  
  // Update meta keywords
  content = content.replace(
    /<meta name="keywords" content=".*?">/g,
    `<meta name="keywords" content="${seo.keywords}">`
  );
  
  // Update Open Graph title
  content = content.replace(
    /<meta property="og:title" content=".*?">/g,
    `<meta property="og:title" content="${seo.title}">`
  );
  
  // Update Open Graph description
  content = content.replace(
    /<meta property="og:description" content=".*?">/g,
    `<meta property="og:description" content="${seo.description}">`
  );
  
  // Update Twitter title
  content = content.replace(
    /<meta name="twitter:title" content=".*?">/g,
    `<meta name="twitter:title" content="${seo.title}">`
  );
  
  // Update Twitter description
  content = content.replace(
    /<meta name="twitter:description" content=".*?">/g,
    `<meta name="twitter:description" content="${seo.description}">`
  );
  
  // Update structured data name/description
  content = content.replace(
    /"name":\s*".*?",\s*"description":\s*".*?",/g,
    `"name": "${seo.title}",\n    "description": "${seo.description}",`
  );
  
  fs.writeFileSync(filename, content);
  console.log(`✓ Updated SEO for ${filename}`);
}

// Update all files
Object.keys(seoUpdates).forEach(updateSEO);

console.log('SEO optimization complete!');
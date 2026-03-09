// =====================================================
// MOREY DIGITAL SHARED SCRIPTS
// Universal JavaScript for consistency across all pages
// =====================================================

// =====================================================
// GOOGLE ANALYTICS 4 EVENT TRACKING
// =====================================================

// Safe wrapper for GA4 events - only tracks if gtag is available
function trackGA4Event(eventName, parameters = {}) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, parameters);
    console.log('GA4 Event:', eventName, parameters);
  }
}

// Track specific CTA button clicks with location context
function setupGA4Tracking() {
  // Track Call Now button clicks
  document.querySelectorAll('a[href^="tel:+353873999296"], a[href*="087 399 9296"]').forEach(function(button) {
    button.addEventListener('click', function() {
      const location = getElementLocation(this);
      trackGA4Event('call_click', {
        location: location,
        phone_number: '+353873999296',
        button_text: this.textContent.trim()
      });
    });
  });

  // Track WhatsApp button clicks
  document.querySelectorAll('a[href*="wa.me/353873999296"], a[href*="whatsapp"]').forEach(function(button) {
    button.addEventListener('click', function() {
      const location = getElementLocation(this);
      trackGA4Event('whatsapp_click', {
        location: location,
        button_text: this.textContent.trim(),
        destination_url: this.href
      });
    });
  });

  // Track "View Packages" button clicks
  document.querySelectorAll('a').forEach(function(link) {
    const text = link.textContent.toLowerCase().trim();
    const href = link.getAttribute('href');
    
    if ((text.includes('view packages') || text.includes('packages & pricing')) && 
        (href && (href.includes('pricing') || href.includes('#packages')))) {
      link.addEventListener('click', function() {
        const location = getElementLocation(this);
        trackGA4Event('view_packages_click', {
          location: location,
          button_text: this.textContent.trim(),
          destination_url: this.href
        });
      });
    }
  });

  // Track "Get Started" button clicks
  document.querySelectorAll('a').forEach(function(link) {
    const text = link.textContent.toLowerCase().trim();
    const href = link.getAttribute('href');
    
    if (text.includes('get started') && href && 
        (href.includes('contact') || href.includes('pricing'))) {
      link.addEventListener('click', function() {
        const location = getElementLocation(this);
        trackGA4Event('get_started_click', {
          location: location,
          button_text: this.textContent.trim(),
          destination_url: this.href
        });
      });
    }
  });

  // Track form submissions
  document.querySelectorAll('.lead-form, .contact-form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      const formId = getFormIdentifier(this);
      const formData = getFormData(this);
      
      trackGA4Event('form_submit', {
        form_id: formId,
        form_type: formData.type,
        package_interest: formData.package || 'unknown',
        location: getElementLocation(this)
      });
    });
  });
}

// Helper function to determine element's page location
function getElementLocation(element) {
  const page = window.location.pathname.replace('/', '').replace('.html', '') || 'home';
  
  // Check if element is in hero section
  if (element.closest('.hero, .contact-hero, .about-hero, .hero-cta-group')) {
    return page + '_hero';
  }
  
  // Check if element is in header
  if (element.closest('header')) {
    return page + '_header';
  }
  
  // Check if element is in footer
  if (element.closest('footer')) {
    return page + '_footer';
  }
  
  // Check if element is in packages/pricing section
  if (element.closest('.packages, .package-card, .pricing')) {
    return page + '_packages';
  }
  
  // Check if element is in lead magnet
  if (element.closest('.lead-magnet')) {
    return page + '_lead_magnet';
  }
  
  return page + '_content';
}

// Helper function to identify form type
function getFormIdentifier(form) {
  if (form.classList.contains('contact-form')) {
    return 'contact';
  }
  if (form.classList.contains('lead-form')) {
    return 'audit_lead';
  }
  if (form.action && form.action.includes('formspree')) {
    return 'formspree_form';
  }
  return 'unknown_form';
}

// Helper function to extract form data for tracking
function getFormData(form) {
  const formData = new FormData(form);
  return {
    type: getFormIdentifier(form),
    package: formData.get('package') || formData.get('package_interest') || formData.get('service_type'),
    hasEmail: !!formData.get('email'),
    hasPhone: !!formData.get('phone'),
    hasWebsite: !!formData.get('website')
  };
}

// Enhanced mobile menu toggle - Premium full-screen overlay version
function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');

  // Fallback to old nav-links if new overlay doesn't exist
  const navLinks = document.getElementById('nav-links');

  if (!menuIcon) return;

  // If new overlay exists, use it; otherwise fall back to legacy
  if (mobileOverlay) {
    mobileOverlay.classList.toggle('show');
    menuIcon.classList.toggle('active');

    const isExpanded = mobileOverlay.classList.contains('show');
    menuIcon.setAttribute('aria-expanded', isExpanded);
    document.body.style.overflow = isExpanded ? 'hidden' : 'auto';
  } else if (navLinks) {
    navLinks.classList.toggle('show');
    menuIcon.classList.toggle('active');

    const isExpanded = navLinks.classList.contains('show');
    menuIcon.setAttribute('aria-expanded', isExpanded);
    document.body.style.overflow = isExpanded ? 'hidden' : 'auto';
  }
}

// Close mobile menu (can be called from anywhere)
function closeMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');
  const navLinks = document.getElementById('nav-links');

  if (menuIcon) {
    menuIcon.classList.remove('active');
    menuIcon.setAttribute('aria-expanded', 'false');
  }

  if (mobileOverlay) {
    mobileOverlay.classList.remove('show');
  }

  if (navLinks) {
    navLinks.classList.remove('show');
  }

  document.body.style.overflow = 'auto';
}

// Initialize shared functionality when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize GA4 event tracking
  setupGA4Tracking();
  
  // Close mobile menu when clicking on mobile overlay background
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', function(e) {
      // Only close if clicking directly on overlay, not on menu items
      if (e.target === mobileOverlay) {
        closeMenu();
      }
    });
  }

  // Close mobile menu when clicking on mobile menu links
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav a');
  mobileMenuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });

  // Legacy: Close mobile menu when clicking outside (for old nav-links)
  document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.getElementById('nav-links');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');

    // Skip if using new overlay system
    if (mobileOverlay) return;

    if (!nav || !menuIcon || !navLinks) return;

    if (!nav.contains(e.target) && !menuIcon.contains(e.target)) {
      closeMenu();
    }
  });

  // Legacy: Close mobile menu when clicking on nav links
  const navLinks = document.querySelectorAll('#nav-links a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
  
  // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
  
  // Form validation and submission handling
  const forms = document.querySelectorAll('.lead-form, .contact-form');
  
  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      let isValid = true;
      
      // Remove any existing error messages
      const errorMessages = form.querySelectorAll('.error-message');
      errorMessages.forEach(function(error) {
        error.remove();
      });
      
      // Validate required fields
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
          showError(field, 'This field is required');
          isValid = false;
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
          showError(field, 'Please enter a valid email address');
          isValid = false;
        } else if (field.type === 'url' && field.value.trim() && !isValidUrl(field.value)) {
          showError(field, 'Please enter a valid URL (e.g., https://example.com)');
          isValid = false;
        }
      });
      
      if (!isValid) {
        e.preventDefault();
      } else {
        // Show loading state
        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Reset button after a delay in case form submission fails
        setTimeout(function() {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 10000);
      }
    });
  });
  
  function showError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '14px';
    errorDiv.style.marginTop = '5px';
    
    field.style.borderColor = '#e74c3c';
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
  
  // Clear error styling when user starts typing
  const allInputs = document.querySelectorAll('input, select, textarea');
  allInputs.forEach(function(input) {
    input.addEventListener('input', function() {
      this.style.borderColor = '';
      const errorMessage = this.parentNode.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.remove();
      }
    });
  });
  
  // Page loader (if present)
  const loader = document.getElementById('pageLoader');
  if (loader) {
    window.addEventListener('load', function() {
      setTimeout(function() {
        loader.classList.add('hidden');
        // Add fade-in class to main content
        document.querySelectorAll('.content, .featured-portfolio, .google-review').forEach(function(el, index) {
          setTimeout(function() {
            el.classList.add('fade-in');
          }, index * 200);
        });
      }, 500);
    });
  }
  
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.project, .stat, .trust-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
  
});
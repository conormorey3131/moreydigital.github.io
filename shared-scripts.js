// =====================================================
// MOREY DIGITAL SHARED SCRIPTS
// Universal JavaScript for consistency across all pages
// =====================================================

// Enhanced mobile menu toggle
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  const menuIcon = document.querySelector('.menu-icon');
  
  if (!navLinks || !menuIcon) return;
  
  navLinks.classList.toggle('show');
  menuIcon.classList.toggle('active');
  
  const isExpanded = navLinks.classList.contains('show');
  menuIcon.setAttribute('aria-expanded', isExpanded);
  
  // Prevent body scroll when menu is open
  document.body.style.overflow = isExpanded ? 'hidden' : 'auto';
}

// Initialize shared functionality when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.getElementById('nav-links');
    
    if (!nav || !menuIcon || !navLinks) return;
    
    if (!nav.contains(e.target) && !menuIcon.contains(e.target)) {
      navLinks.classList.remove('show');
      menuIcon.classList.remove('active');
      menuIcon.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = 'auto';
    }
  });
  
  // Close mobile menu when clicking on nav links
  const navLinks = document.querySelectorAll('#nav-links a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      const navLinksContainer = document.getElementById('nav-links');
      const menuIcon = document.querySelector('.menu-icon');
      
      if (navLinksContainer && menuIcon) {
        navLinksContainer.classList.remove('show');
        menuIcon.classList.remove('active');
        menuIcon.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto';
      }
    });
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
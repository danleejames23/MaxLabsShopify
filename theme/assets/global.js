// Max Labs - Global JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initQuantitySelectors();
  initProductVariants();
  initFAQ();
  initAddToCart();
  initSmoothScroll();
  initLazyLoading();
});

// Quantity Selectors
function initQuantitySelectors() {
  document.querySelectorAll('.quantity-selector').forEach(selector => {
    const minusBtn = selector.querySelector('.quantity-minus');
    const plusBtn = selector.querySelector('.quantity-plus');
    const input = selector.querySelector('.quantity-input');

    if (minusBtn && plusBtn && input) {
      minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(input.value) || 1;
        if (currentValue > 1) {
          input.value = currentValue - 1;
          input.dispatchEvent(new Event('change'));
        }
      });

      plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(input.value) || 1;
        const max = parseInt(input.max) || 99;
        if (currentValue < max) {
          input.value = currentValue + 1;
          input.dispatchEvent(new Event('change'));
        }
      });
    }
  });
}

// Product Variants
function initProductVariants() {
  document.querySelectorAll('.variant-option').forEach(option => {
    option.addEventListener('click', function() {
      const parent = this.closest('.variant-options');
      parent.querySelectorAll('.variant-option').forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
      
      // Update hidden input if exists
      const variantInput = document.querySelector('input[name="id"]');
      if (variantInput && this.dataset.variantId) {
        variantInput.value = this.dataset.variantId;
      }
    });
  });
}

// FAQ Accordion
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isActive = this.classList.contains('active');

      // Close all other FAQs
      document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('active');
      });

      // Toggle current FAQ
      if (!isActive) {
        this.classList.add('active');
        answer.classList.add('active');
      }
    });
  });
}

// Add to Cart - handled by page-specific scripts
function initAddToCart() {
  // Disabled - each page handles its own add to cart
}

// Update Cart Count
async function updateCartCount() {
  try {
    const response = await fetch('/cart.js');
    const cart = await response.json();
    
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = cart.item_count;
    });
  } catch (error) {
    console.error('Failed to update cart count:', error);
  }
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Lazy Loading
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Cart Functions
window.updateCartItem = async function(key, quantity) {
  try {
    const response = await fetch('/cart/change.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: key, quantity: quantity })
    });

    if (response.ok) {
      window.location.reload();
    }
  } catch (error) {
    console.error('Failed to update cart:', error);
  }
};

window.removeCartItem = async function(key) {
  await updateCartItem(key, 0);
};

// Product Image Gallery
window.changeProductImage = function(src, thumbnail) {
  const mainImage = document.querySelector('.product-main-image img');
  if (mainImage) {
    mainImage.src = src;
  }
  
  document.querySelectorAll('.product-thumbnail').forEach(thumb => {
    thumb.classList.remove('active');
  });
  
  if (thumbnail) {
    thumbnail.classList.add('active');
  }
};

// Newsletter Form
document.querySelectorAll('.newsletter-form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const btn = this.querySelector('button');
    
    btn.textContent = 'Subscribed!';
    btn.style.background = '#00CC66';
    
    setTimeout(() => {
      btn.textContent = 'Subscribe';
      btn.style.background = '';
      this.reset();
    }, 3000);
  });
});

// Animate on Scroll
function initAnimateOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Initialize animations
initAnimateOnScroll();

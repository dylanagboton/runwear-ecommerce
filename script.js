// ===== GESTION DU PANIER =====

/**
 * Ajoute un produit au panier
 * @param {number} id - ID du produit
 * @param {string} name - Nom du produit
 * @param {number} price - Prix du produit
 * @param {string} image - URL de l'image
 * @param {number} quantity - Quantité (défaut: 1)
 */
function addToCart(id, name, price, image, quantity = 1) {
  // Récupérer le panier actuel depuis localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Vérifier si le produit existe déjà dans le panier
  const existingProductIndex = cart.findIndex((item) => item.id === id);

  if (existingProductIndex !== -1) {
    // Produit déjà dans le panier, augmenter la quantité
    cart[existingProductIndex].quantity += quantity;
  } else {
    // Nouveau produit, l'ajouter au panier
    cart.push({
      id: id,
      name: name,
      price: price,
      image: image,
      quantity: quantity,
    });
  }

  // Sauvegarder le panier dans localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Mettre à jour l'affichage du compteur
  updateCartCount();

  // Afficher une notification
  showNotification(`${name} ajouté au panier !`);
}

/**
 * Met à jour le compteur d'articles dans le panier
 */
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const cartCountElements = document.querySelectorAll('#cartCount');
  cartCountElements.forEach((element) => {
    element.textContent = totalItems;
  });
}

/**
 * Vide complètement le panier
 */
function clearCart() {
  localStorage.removeItem('cart');
  updateCartCount();

  // Si on est sur la page panier, recharger l'affichage
  if (window.location.pathname.includes('panier.html')) {
    if (typeof displayCartItems === 'function') {
      displayCartItems();
    }
  }
}

// ===== NOTIFICATIONS =====

/**
 * Affiche une notification temporaire
 * @param {string} message - Message à afficher
 * @param {string} type - Type de notification ('success', 'error', 'info')
 */
function showNotification(message, type = 'success') {
  // Créer l'élément de notification
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

  // Ajouter les styles CSS pour la notification
  if (!document.querySelector('#notification-styles')) {
    const styles = document.createElement('style');
    styles.id = 'notification-styles';
    styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 10000;
                animation: slideIn 0.3s ease-out;
                max-width: 300px;
            }
            .notification-success {
                border-left: 4px solid #10b981;
            }
            .notification-error {
                border-left: 4px solid #ef4444;
            }
            .notification-info {
                border-left: 4px solid #3b82f6;
            }
            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1rem;
            }
            .notification-message {
                color: #333;
                font-weight: 500;
            }
            .notification-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
                margin-left: 1rem;
            }
            .notification-close:hover {
                color: #333;
            }
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
    document.head.appendChild(styles);
  }

  // Ajouter la notification au body
  document.body.appendChild(notification);

  // Supprimer automatiquement après 3 secondes
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 3000);
}

// ===== NAVIGATION MOBILE =====

/**
 * Initialise la navigation mobile
 */
function initMobileNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      // Toggle de la classe active
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');

      // Animation du hamburger
      const spans = hamburger.querySelectorAll('span');
      if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Fermer le menu en cliquant sur un lien
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');

        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }
}

// ===== VALIDATION DE FORMULAIRES =====

/**
 * Valide un email
 * @param {string} email - Email à valider
 * @returns {boolean} - True si l'email est valide
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valide un numéro de téléphone français
 * @param {string} phone - Numéro de téléphone à valider
 * @returns {boolean} - True si le numéro est valide
 */
function isValidPhone(phone) {
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  return phoneRegex.test(phone);
}

/**
 * Valide un champ de formulaire
 * @param {HTMLElement} field - Champ à valider
 * @param {Object} rules - Règles de validation
 * @returns {boolean} - True si le champ est valide
 */
function validateField(field, rules) {
  const value = field.value.trim();
  const errorElement = document.getElementById(field.id + 'Error');
  let isValid = true;
  let errorMessage = '';

  // Validation selon les règles
  if (rules.required && !value) {
    isValid = false;
    errorMessage = 'Ce champ est obligatoire';
  } else if (value) {
    if (rules.email && !isValidEmail(value)) {
      isValid = false;
      errorMessage = "Format d'email invalide";
    } else if (rules.phone && !isValidPhone(value)) {
      isValid = false;
      errorMessage = 'Format de téléphone invalide';
    } else if (rules.minLength && value.length < rules.minLength) {
      isValid = false;
      errorMessage = `Minimum ${rules.minLength} caractères`;
    } else if (rules.maxLength && value.length > rules.maxLength) {
      isValid = false;
      errorMessage = `Maximum ${rules.maxLength} caractères`;
    }
  }

  // Affichage de l'erreur
  if (!isValid) {
    field.classList.add('error');
    if (errorElement) {
      errorElement.textContent = errorMessage;
    }
  } else {
    field.classList.remove('error');
    if (errorElement) {
      errorElement.textContent = '';
    }
  }

  return isValid;
}

// ===== ANIMATIONS ET EFFETS =====

/**
 * Ajoute un effet de parallaxe léger au scroll
 */
function initParallaxEffect() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero');

    parallaxElements.forEach((element) => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

/**
 * Ajoute des animations au scroll
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observer les éléments à animer
  const animatedElements = document.querySelectorAll(
    '.product-card, .benefit, .form-card'
  );
  animatedElements.forEach((el) => observer.observe(el));
}

// ===== UTILITAIRES =====

/**
 * Formate un prix en euros
 * @param {number} price - Prix à formater
 * @returns {string} - Prix formaté
 */
function formatPrice(price) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
}

/**
 * Débounce une fonction
 * @param {Function} func - Fonction à débouncer
 * @param {number} wait - Délai d'attente en ms
 * @returns {Function} - Fonction débouncée
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Vérifie si l'utilisateur est sur mobile
 * @returns {boolean} - True si sur mobile
 */
function isMobile() {
  return window.innerWidth <= 768;
}

// ===== GESTION DES IMAGES =====

/**
 * Charge une image avec lazy loading
 * @param {HTMLImageElement} img - Élément image
 */
function lazyLoadImage(img) {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    imageObserver.observe(img);
  } else {
    // Fallback pour les navigateurs plus anciens
    img.src = img.dataset.src;
  }
}

/**
 * Initialise le lazy loading pour toutes les images
 */
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach((img) => lazyLoadImage(img));
}

// ===== GESTION DES PERFORMANCES =====

/**
 * Optimise les performances en désactivant certaines animations sur mobile
 */
function optimizePerformance() {
  if (isMobile()) {
    // Réduire les animations sur mobile
    document.documentElement.style.setProperty('--transition', 'all 0.2s ease');
  }

  // Désactiver les animations si l'utilisateur préfère moins de mouvement
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition', 'none');
  }
}

// ===== GESTION DES ERREURS =====

/**
 * Gestionnaire d'erreurs global
 */
function initErrorHandling() {
  window.addEventListener('error', (event) => {
    console.error('Erreur JavaScript:', event.error);

    // Envoyer l'erreur à un service de monitoring (optionnel)
    // sendErrorToMonitoring(event.error);
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Promesse rejetée:', event.reason);
  });
}

// ===== ANALYTICS ET TRACKING =====

/**
 * Track un événement (pour analytics)
 * @param {string} eventName - Nom de l'événement
 * @param {Object} data - Données de l'événement
 */
function trackEvent(eventName, data = {}) {
  // Intégration avec Google Analytics (si disponible)
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, data);
  }

  // Intégration avec Facebook Pixel (si disponible)
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, data);
  }

  // Log local pour debug
  console.log('Event tracked:', eventName, data);
}

/**
 * Track l'ajout au panier
 * @param {Object} product - Données du produit
 */
function trackAddToCart(product) {
  trackEvent('add_to_cart', {
    currency: 'EUR',
    value: product.price,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        quantity: product.quantity || 1,
      },
    ],
  });
}

// ===== INITIALISATION =====

/**
 * Initialise toutes les fonctionnalités au chargement de la page
 */
function initApp() {
  // Initialiser le compteur du panier
  updateCartCount();

  // Initialiser la navigation mobile
  initMobileNavigation();

  // Initialiser les animations au scroll
  initScrollAnimations();

  // Initialiser le lazy loading
  initLazyLoading();

  // Optimiser les performances
  optimizePerformance();

  // Initialiser la gestion d'erreurs
  initErrorHandling();

  // Initialiser l'effet parallaxe (optionnel)
  // initParallaxEffect();

  console.log('RUNWEAR - Application initialisée avec succès');
}

// ===== ÉVÉNEMENTS GLOBAUX =====

// Initialiser l'app quand le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Réinitialiser le compteur du panier quand la page devient visible
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    updateCartCount();
  }
});

// Optimiser les performances au redimensionnement
window.addEventListener(
  'resize',
  debounce(() => {
    optimizePerformance();
  }, 250)
);

// ===== EXPORT DES FONCTIONS (pour compatibilité) =====

// Exposer les fonctions globalement pour les appels depuis HTML
window.addToCart = addToCart;
window.updateCartCount = updateCartCount;
window.clearCart = clearCart;
window.showNotification = showNotification;
window.trackEvent = trackEvent;
window.trackAddToCart = trackAddToCart;
window.formatPrice = formatPrice;
window.isMobile = isMobile;

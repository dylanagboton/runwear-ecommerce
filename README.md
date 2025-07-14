# 🏃‍♀️ RUNWEAR - Site E-commerce Vêtements de Sport Femme

## 📋 Description du Projet

**RUNWEAR** est un site e-commerce statique complet dédié aux vêtements de sport pour femmes. Ce projet pédagogique démontre l'implémentation d'une stratégie SEO intégrée avec des fonctionnalités e-commerce modernes.

### 🎯 Objectifs du Projet

- **Site e-commerce fonctionnel** avec panier dynamique
- **Optimisation SEO complète** avec données structurées
- **Design responsive** et moderne
- **Interface utilisateur intuitive** avec animations
- **Code propre et commenté** pour l'apprentissage

## 🎨 Identité Visuelle

- **Marque** : RUNWEAR
- **Couleurs** : Bleu foncé (#1e3a8a), Bleu clair (#3b82f6), Fond blanc
- **Style** : Sportswear moderne, épuré, accessible
- **Logo** : RUNWEAR en italique

## 📁 Structure du Projet

```
keyiah/
├── index.html              # Page d'accueil
├── catalogue.html          # Liste des produits
├── produit.html            # Détail d'un produit
├── panier.html             # Panier dynamique
├── contact.html            # Formulaire de contact
├── style.css               # Styles CSS
├── script.js               # JavaScript
├── robots.txt              # Configuration SEO
├── sitemap.xml             # Sitemap XML
└── README.md               # Documentation
```

## 🛍️ Catalogue de Produits

Le site propose **6 ensembles de sport pour femmes** :

1. **Ensemble Stretch Bleu Ciel** - 49,99 €
2. **Set Noir Performance** - 59,99 €
3. **Ensemble Rose Pastel** - 44,99 €
4. **Ensemble Gris Zip** - 54,99 €
5. **Ensemble Violet Training** - 49,99 €
6. **Ensemble Vert Zen** - 39,99 €

## 🚀 Fonctionnalités

### ✅ Fonctionnalités E-commerce

- **Panier dynamique** avec localStorage
- **Gestion des quantités** (ajout/suppression)
- **Calcul automatique** des totaux
- **Livraison gratuite** dès 50€
- **Barre de progression** pour la livraison gratuite

### ✅ Optimisation SEO

- **Meta tags** optimisés pour chaque page
- **Données structurées JSON-LD** (Schema.org)
- **Sitemap XML** complet
- **Robots.txt** configuré
- **Mots-clés ciblés** :
  - ensemble de sport femme
  - vêtements de sport femme
  - ensemble femme décontracté
  - ensemble pas cher
  - tenue de sport tendance

### ✅ Interface Utilisateur

- **Design responsive** (mobile + desktop)
- **Animations hover** sur les produits
- **Navigation mobile** avec menu hamburger
- **Notifications** en temps réel
- **Validation de formulaires** JavaScript

### ✅ Performance

- **Images optimisées** avec lazy loading
- **CSS et JS minifiés** (prêt pour production)
- **Animations optimisées** pour mobile
- **Gestion des erreurs** globale

## 🛠️ Technologies Utilisées

- **HTML5** sémantique
- **CSS3** avec variables CSS et Flexbox/Grid
- **JavaScript ES6+** vanilla
- **localStorage** pour la persistance des données
- **Unsplash API** pour les images
- **Schema.org** pour les données structurées

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints :

- **Desktop** : > 768px
- **Tablet** : 768px - 480px
- **Mobile** : < 480px

## 🔧 Installation et Utilisation

### Prérequis

- Navigateur web moderne
- Serveur web local (optionnel)

### Installation

1. Clonez ou téléchargez le projet
2. Ouvrez `index.html` dans votre navigateur
3. Ou servez les fichiers via un serveur web local

### Serveur Local (Recommandé)

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis accédez à `http://localhost:8000`

## 📊 Fonctionnalités Techniques

### Gestion du Panier

```javascript
// Ajouter un produit
addToCart(id, name, price, image, quantity);

// Mettre à jour le compteur
updateCartCount();

// Vider le panier
clearCart();
```

### Validation de Formulaires

- Validation en temps réel
- Messages d'erreur personnalisés
- Support des emails et téléphones français

### Animations et Effets

- Animations au scroll
- Effets hover sur les produits
- Transitions fluides
- Support `prefers-reduced-motion`

## 🎯 Stratégie SEO Implémentée

### 1. Structure HTML Sémantique

- Balises `<header>`, `<main>`, `<footer>`
- Hiérarchie des titres (H1, H2, H3)
- Navigation avec `<nav>`
- Articles avec `<article>`

### 2. Meta Tags Optimisés

```html
<title>
  RUNWEAR - Vêtements de Sport Femme | Ensemble de Sport Femme Pas Cher
</title>
<meta name="description" content="Découvrez notre collection..." />
<meta
  name="keywords"
  content="ensemble de sport femme, vêtements de sport femme..."
/>
```

### 3. Données Structurées JSON-LD

- **Organization** pour la marque
- **Product** pour chaque produit
- **ItemList** pour le catalogue
- **ContactPage** pour la page contact

### 4. Optimisation Technique

- **Sitemap XML** avec priorités
- **Robots.txt** configuré
- **Images optimisées** avec alt text
- **URLs propres** et descriptives

## 🎨 Design System

### Couleurs

```css
:root {
  --primary-color: #1e3a8a; /* Bleu foncé */
  --secondary-color: #3b82f6; /* Bleu clair */
  --accent-color: #60a5fa; /* Bleu accent */
  --success-color: #10b981; /* Vert succès */
  --error-color: #ef4444; /* Rouge erreur */
}
```

### Typographie

- **Police principale** : Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Logo** : Italique, gras
- **Hiérarchie** : Tailles cohérentes et contrastées

### Composants

- **Boutons** : Styles cohérents avec états hover
- **Cartes produits** : Ombres et animations
- **Formulaires** : Validation visuelle
- **Navigation** : Sticky header avec compteur panier

## 📈 Analytics et Tracking

Le code inclut des hooks pour :

- **Google Analytics** (gtag)
- **Facebook Pixel** (fbq)
- **Événements personnalisés** (ajout au panier, etc.)

## 🔒 Sécurité et Performance

### Sécurité

- Validation côté client et serveur
- Protection contre les injections XSS
- Gestion sécurisée du localStorage

### Performance

- **Lazy loading** des images
- **Debouncing** des événements
- **Optimisation mobile** automatique
- **Compression** des assets (prêt pour production)

## 🧪 Tests et Compatibilité

### Navigateurs Supportés

- ✅ Chrome (dernière version)
- ✅ Firefox (dernière version)
- ✅ Safari (dernière version)
- ✅ Edge (dernière version)

### Tests Fonctionnels

- [x] Ajout au panier
- [x] Gestion des quantités
- [x] Calcul des totaux
- [x] Validation de formulaires
- [x] Navigation responsive
- [x] Animations et transitions

## 📝 Commentaires et Documentation

Le code est entièrement commenté avec :

- **JSDoc** pour les fonctions JavaScript
- **Commentaires CSS** pour les sections
- **Explications HTML** pour les structures complexes
- **Documentation inline** pour les fonctionnalités

## 🚀 Déploiement

### Hébergement Recommandé

- **Netlify** (gratuit, déploiement automatique)
- **Vercel** (gratuit, optimisé pour le statique)
- **GitHub Pages** (gratuit, intégré Git)

### Optimisations Production

1. Minifier CSS et JS
2. Optimiser les images (WebP)
3. Activer la compression Gzip
4. Configurer le cache navigateur
5. Ajouter un CDN

## 🤝 Contribution

Ce projet est conçu comme un exemple pédagogique. Pour contribuer :

1. Fork le projet
2. Créez une branche feature
3. Committez vos changements
4. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation pour des fins éducatives et commerciales.

## 👨‍💻 Auteur

**Projet Pédagogique** - Développement Web E-commerce avec SEO

---

## 🎓 Objectifs Pédagogiques Atteints

✅ **Site e-commerce complet et fonctionnel**  
✅ **Stratégie SEO intégrée et optimisée**  
✅ **Code propre, commenté et maintenable**  
✅ **Design moderne et responsive**  
✅ **Fonctionnalités utilisateur avancées**  
✅ **Performance et accessibilité optimisées**

---

_Ce projet démontre les meilleures pratiques de développement web moderne pour un site e-commerce avec une approche SEO-first._

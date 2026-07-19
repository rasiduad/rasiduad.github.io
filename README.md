# RASID-UAD — Site web

Site officiel de **RASID-UAD** (Réseau des Anciens et Sympathisants de l'Informatique Décisionnelle — Université Alioune Diop de Bambey).

## 🌐 Accès au site

Le site est accessible à l'adresse : **[https://rasiduad.github.io/](https://rasiduad.github.io/)**

## 📁 Structure des fichiers

```
rasiduad.github.io/
├── index.html        # Page d'accueil
├── apropos.html      # Page À propos
├── missions.html     # Page Missions
├── activites.html    # Page Activités
├── carriere.html     # Page Carrière
├── rejoindre.html    # Page Nous rejoindre (formulaire d'adhésion)
├── contact.html      # Page Contact
├── style.css         # Feuille de style principale
├── script.js         # JavaScript (menu burger, interactions)
└── README.md         # Ce fichier
```

## 🚀 Déploiement via GitHub Pages

Le site est déployé automatiquement via **GitHub Pages** depuis la **branche principale** (`main`) à la **racine du dépôt** (`/`).

### Configuration dans GitHub :
1. Aller dans **Settings** > **Pages**
2. Source : **Deploy from a branch**
3. Branche : `main` / dossier `/ (root)`
4. Sauvegarder

Le site sera accessible à `https://rasiduad.github.io/` après quelques minutes.

## ✏️ Comment modifier le contenu

### Modifier le texte d'une page
1. Ouvrez le fichier HTML correspondant (ex. `apropos.html`)
2. Modifiez le texte entre les balises HTML
3. Les placeholders `[À COMPLÉTER]` ou `[Date à venir]` indiquent les endroits à remplir

### Modifier le style
- Éditez `style.css` — toutes les couleurs sont définies dans les variables CSS (`:root`) en haut du fichier

### Liens réseaux sociaux
- Recherchez les `href="#"` dans les fichiers HTML pour mettre à jour les liens vers Facebook, LinkedIn, WhatsApp, etc.

### Formulaires de contact
- Les formulaires nécessitent un service tiers pour fonctionner (le site est statique).
- Options recommandées : **[Formspree](https://formspree.io)**, Google Forms, ou EmailJS
- Des commentaires dans le code de `rejoindre.html` et `contact.html` expliquent comment configurer Formspree

### Email de contact
- L'email `contact@rasid-uad.sn` est un placeholder — remplacez-le par l'adresse email réelle de l'association

## 🛠 Stack technique

- **HTML5** + **CSS3** + **JavaScript vanilla**
- Aucun framework, aucun build step
- Icônes via [Font Awesome](https://fontawesome.com/) (CDN)
- Design responsive mobile-first

## 📝 Licence

© 2026 RASID-UAD — Association des anciens du Master SID, UADB

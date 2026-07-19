# RASID — Réseau des Alumni de Statistique et Informatique Décisionnelle

Site officiel du réseau des alumni **SID** de l'Université Alioune Diop de Bambey (UAD), accessible à l'adresse :

🌐 **https://rasiduad.github.io**

---

## À propos

**RASID** (*Réseau des Alumni de Statistique et Informatique Décisionnelle*) est la communauté des anciens diplômés du programme SID de l'UAD. Le site présente le réseau, ses membres, ses événements, ses partenaires et permet aux nouveaux alumni de rejoindre la communauté.

---

## Structure du projet

```
rasiduad.github.io/
└── index.html    # Site complet (une seule page, HTML/CSS/JS pur)
```

Le site est une **single-page application** statique composée des sections :

- **Hero** — présentation de RASID et statistiques clés
- **À propos** — mission, description du programme SID, carte de fonctionnalités
- **Notre Réseau** — grille de profils membres (alumni)
- **Événements** — agenda des prochains événements RASID
- **Partenaires** — logos et noms des partenaires institutionnels et entreprises
- **Contact / Rejoindre** — formulaire d'adhésion + liens réseaux sociaux
- **Footer** — navigation rapide, liens utiles, copyright

---

## Technologies utilisées

| Technologie | Usage |
|---|---|
| HTML5 / CSS3 / JS vanilla | Structure, style et interactivité |
| [Tailwind CSS via CDN](https://cdn.tailwindcss.com) | Framework CSS utilitaire |
| [Font Awesome 6 via CDN](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/) | Icônes |
| [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) | Typographie |

Aucun outil de build n'est requis. Le fichier `index.html` est directement servi par GitHub Pages.

---

## GitHub Pages

GitHub Pages sert automatiquement le contenu de la branche par défaut (`main`). Dès qu'un commit est poussé sur `main`, le site est mis à jour en quelques secondes à l'adresse **https://rasiduad.github.io**.

> **Paramètre GitHub Pages :** aller dans *Settings → Pages → Source* et sélectionner la branche `main`, dossier `/ (root)`.

---

## Comment contribuer

1. **Forker** ce dépôt
2. Créer une branche : `git checkout -b feature/ma-modification`
3. Modifier `index.html` (ou tout autre fichier)
4. Pousser et ouvrir une **Pull Request** vers `main`

### Mettre à jour les données

Toutes les données (membres, événements, partenaires) se trouvent directement dans `index.html` sous forme de HTML statique. Rechercher les sections commentées `<!-- ===== NOM DE SECTION ===== -->` pour naviguer facilement dans le fichier.

---

## Licence

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

---

*Fait avec ❤️ par les Alumni SID de l'UAD — "Connecter les talents, valoriser l'expertise, construire l'avenir"*

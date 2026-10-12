# PMA Concept – site web

Reconstruction du site [pma-concept.fr](https://www.pma-concept.fr/) en Next.js 14 + Tailwind CSS.

**Site en ligne : https://maxencemartin45.github.io/pma-concept-website/**

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # export statique dans ./out
```

## Structure

- `src/content/pages/` : le contenu des pages produit (données pures).
- `src/components/sections/` : sections réutilisables (hero, lignes produit, tableaux, bannières, FAQ…).
- `src/app/[slug]/page.tsx` : une seule route pour toutes les pages produit.
- `public/images/` : images récupérées sur le site d'origine.

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml`, qui construit l'export statique
et le publie sur GitHub Pages (`NEXT_PUBLIC_BASE_PATH` = nom du dépôt).
Réglage requis une seule fois : **Settings → Pages → Source : GitHub Actions**.

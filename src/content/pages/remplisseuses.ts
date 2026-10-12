import type { PageData } from "@/lib/blocks";

export const remplisseuses: PageData = {
  slug: "remplisseuses",
  title: "Remplisseuses industrielles à Orléans | Appelez-nous",
  description:
    "Découvrez nos remplisseuses industrielles pour poudres, granulés, liquides et pâteux à Orléans. Profitez de machines fiables et précises.",
  hero: {
    title: "Remplisseuses industrielles à Orléans",
    text: "PMA Concept propose à la **vente des remplisseuses industrielles** adaptées à vos lignes de conditionnement. Nos machines permettent de remplir avec précision des contenants variés, qu’il s’agisse de poudres, granulés, liquides ou produits pâteux. Nous accompagnons chaque client pour proposer la solution la plus adaptée à ses besoins et garantir l’efficacité et la fiabilité de ses installations.",
    cta: { label: "Demandez plus de détails", href: "/contact" },
    image: "remplisseuse-bouteilles-pe-ou-gericanes-3.png",
  },
  blocks: [
    {
      type: "intro",
      title: "Remplisseuses pour poudres et granulés",
      text: "Nos remplisseuses pour poudres et granulés sont conçues pour gérer différents types de produits en vrac, assurant un dosage précis et une distribution homogène. Ces machines conviennent aux produits secs, aux mélanges de granulés ou aux ingrédients fins nécessitant une manipulation délicate.",
      divider: true,
    },
    {
      type: "rows",
      items: [
        {
          image: "remplisseuse-bouteilles-pe-ou-gericanes.png",
          title: "Remplisseuses linéaires",
          text: "Les **remplisseuses linéaires** sont idéales pour les petites et les moyennes productions, offrant un contrôle précis du débit et une cadence adaptée à vos besoins. Leur configuration permet un accès facile pour le nettoyage et [la maintenance](/maintenance-depannage), et une gestion simple des différentes recettes de production.",
        },
        {
          image: "remplisseuse-bouteilles-pe-ou-gericanes-2.png",
          title: "Remplisseuses rotatives",
          text: "Les **remplisseuses rotatives** conviennent aux lignes à plus haute cadence. Elles assurent un remplissage rapide et uniforme tout en maintenant la précision, même sur des volumes importants. Leur conception modulable permet d’adapter le nombre de postes en fonction des besoins de production.",
        },
      ],
    },
    {
      type: "banner",
      image: "fond11-pma-concept-machines-industrielles-automatisees-a-orleans.webp",
      title: "Remplisseuses pour liquides et produits pâteux",
      text: "Nos remplisseuses pour liquides et pâteux garantissent un [dosage précis](/doseuses) et constant, avec un contrôle du flux pour éviter les débordements ou les pertes de produit. Elles sont adaptées à différents contenants et viscosités, permettant une production fiable et répétable.",
      cta: { label: "Choisissez votre ensacheuse", href: "/ensacheuses" },
    },
    {
      type: "rows",
      items: [
        {
          image: "remplisseuse-tube-pe-2.png",
          title: "Remplisseuses volumétriques",
          text: "Les **remplisseuses volumétriques** mesurent le produit à distribuer selon un volume défini. Elles sont adaptées aux produits fluides ou semi-fluides et permettent un contrôle précis pour une distribution uniforme.",
        },
        {
          image: "remplisseuse-e-liquide.png",
          title: "Remplisseuses gravimétriques",
          text: "Les **remplisseuses gravimétriques** se basent sur la pesée exacte du produit pour assurer un remplissage précis. Elles sont particulièrement adaptées aux produits nécessitant une précision élevée, même à forte cadence.",
        },
      ],
    },
    {
      type: "cta",
      title: "Bénéficiez d’une solution de remplissage fiable à Orléans",
      text: "Pour vos besoins en remplisseuses industrielles, contactez notre équipe à Orléans. Nous vous accompagnons dans le choix des machines adaptées à vos produits et vos lignes de production.",
      cta: { label: "Contactez-nous", href: "/contact" },
    },
  ],
};

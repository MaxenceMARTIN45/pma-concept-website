import type { PageData } from "@/lib/blocks";

export const doseuses: PageData = {
  slug: "doseuses",
  title: "Vente de doseuses à Orléans | Demandez une estimation",
  description:
    "Découvrez nos doseuses industrielles pour poudre, granulés, liquides et pâteux à Orléans. Contactez-nous pour un devis sur mesure ou une démonstration.",
  hero: {
    title: "Vente de doseuses à Orléans",
    text: "PMA Concept propose des **doseuses industrielles adaptées aux poudres**, granulés, liquides et pâteux. Nos équipements permettent un dosage précis et fiable pour vos lignes de production. Faire appel à nous signifie proximité, adaptabilité et réactivité pour répondre exactement à vos besoins industriels.",
    cta: { label: "Appelez-nous", href: "tel:+33673081794" },
    image: "doseur-1-couloir.png",
  },
  blocks: [
    {
      type: "intro",
      title: "Nos doseuses disponibles à la vente",
      text: "Nous proposons une **gamme complète de doseuses industrielles**, adaptées à chaque type de produit et à différents modes de production. Chaque machine est dimensionnée pour assurer précision, cadence optimale et facilité d’exploitation sur vos lignes de conditionnement.",
      divider: true,
    },
    {
      type: "rows",
      items: [
        {
          image: "doseur-lineaire-2-couloirs-poudre-ou-granules.png",
          title: "Doseuses poudre & granulés",
          text: "Les doseuses pour poudre et granulés permettent un dosage linéaire ou pondéral précis, avec régulation PID pour optimiser la vitesse de remplissage. La structure en INOX 304 ou 316 sur demande assure hygiène et résistance à l’usure, tandis que l’écran tactile permet le paramétrage rapide des doses et la mémorisation de recettes multiples.",
        },
        {
          image: "doseur-lineaire-4-couloirs.png",
          title: "Doseuses liquides & pâteux",
          text: "Nos doseuses liquides et pâteux garantissent un débit constant et un **contrôle précis de la quantité distribuée**. Elles sont adaptées aux viscosités variables et permettent un réglage fin des doses via l’écran tactile, assurant un remplissage régulier et reproductible.",
        },
        {
          image: "peseuse-associative.png",
          title: "Peseuses associatives",
          text: "Les peseuses associatives sont conçues pour le dosage combiné de plusieurs composants, assurant précision et homogénéité dans les mélanges complexes. Elles permettent un contrôle strict des quantités avec une intégration optimale dans des lignes de production automatisées.",
        },
      ],
    },
    {
      type: "banner",
      image: "fond9-pma-concept-machines-industrielles-automatisees-a-orleans.webp",
      title: "Caractéristiques techniques des doseuses",
      rows: [
        ["Modèle", "Sur demande"],
        ["Structure", "INOX 304 ou 316 sur demande"],
        ["Produits", "Poudre, granulés, liquides ou pâteux"],
        ["Trémie alimentation", "15-30 litres (personnalisable)"],
        ["Trémie peseuse", "0.5-10 litres selon modèle"],
        ["Fonction", "Dosage – Mélange"],
        ["Vitesse de remplissage", "Régulation PID pour cadence optimisée"],
        ["Doses automatiques", "0.1-10 kg ajustable via écran tactile"],
        ["Précision", "+/- 0.1-1 g"],
        ["Cadence", "Dépend de la configuration et du produit"],
        ["Puissance électrique", "230V – 50Hz"],
        ["Pression", "5-6 bars"],
        ["Accessoires", "Pédale de remplissage, 100 recettes mémorisables"],
      ],
    },
    {
      type: "cta",
      title: "Découvrez nos doseuses disponibles à la vente à Orléans",
      text: "Nous proposons une gamme complète de doseuses industrielles, adaptées à chaque type de produit et à différents modes de production. Chaque machine est dimensionnée pour assurer précision, cadence optimale et facilité d’exploitation sur vos lignes de conditionnement.",
      cta: { label: "Demandez plus d’informations", href: "/contact" },
    },
  ],
};

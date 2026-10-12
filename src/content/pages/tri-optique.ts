import type { PageData } from "@/lib/blocks";

export const triOptique: PageData = {
  slug: "tri-optique",
  title: "Machines de tri optique à Orléans | Appelez notre équipe",
  description:
    "Parcourez nos machines de tri optique pour céréales, granulés et coques à Orléans. Contactez-nous pour bénéficier de plus d’informations.",
  hero: {
    title: "Machines de tri optique à Orléans",
    text: "PMA Concept propose des **machines de tri optique adaptées à la sélection de grains**, céréales, coques, déchets, gravillons et granules divers. Ces équipements permettent d’optimiser vos lignes de production en séparant efficacement les produits conformes des impuretés, tout en garantissant précision et fiabilité.",
    cta: { label: "Appelez-nous", href: "tel:+33673081794" },
    image: "trieur-optique-horizontal.png",
  },
  blocks: [
    {
      type: "intro",
      title: "Principe de fonctionnement des trieurs optiques",
      text: "Le tri optique repose sur la détection visuelle des anomalies dans le produit grâce à des **caméras haute précision**. Le produit, en chute contrôlée, est analysé et séparé en 2 ou 3 catégories, puis les éléments indésirables sont éjectés par un jet d’air pneumatique.",
    },
    {
      type: "banner",
      image: "fond12-pma-concept-machines-industrielles-automatisees-a-orleans.webp",
      title: "Gammes des trieurs optiques",
      text: "Nos machines de tri optique sont disponibles en plusieurs configurations afin de répondre aux différents besoins industriels. Chaque machine est conçue pour s’intégrer facilement à vos installations existantes et pour **améliorer la productivité**.",
    },
    {
      type: "products",
      items: [
        {
          title: "Trieurs 2 à 10 canaux",
          images: ["trieur-optique-1-ou-2-couloir-pme.png"],
          rows: [
            ["Largeur de chute", "300 mm par canal"],
            ["Capacité", "3 à 30 tonnes/heure selon type de produit et largeur de chute"],
            ["Technologie", "Caméra CCD RGB 2048 pixels, algorithme de tri géré par chipset DSP+FPGA Alteral USA et Xiling"],
            ["Éjecteurs", "Type Matrix 4 sorties, 1,6 million de manœuvres"],
            ["Éclairage et pilotage", "Éclairage LED, pilotage par écran tactile, gestion de 100 recettes possibles"],
          ],
        },
        {
          title: "Configuration des trieurs optiques",
          images: ["trieur-optique-laboratoire.png"],
          rows: [
            ["Alimentation", "230V – 50Hz, 6 bar, 400 l/mn par canal"],
            ["Construction", "Robuste pour usage industriel intensif"],
            ["Certification", "Machine certifiée CE, garantie 1 an"],
            ["Délais de livraison", "6 semaines"],
            ["Remarques", "Assure un tri précis et rapide pour optimiser la qualité des produits tout en réduisant les pertes"],
          ],
        },
      ],
    },
    {
      type: "band",
      title: "FAQ sur les trieurs optiques",
      image: "trieur-optique-x-couloir-pmi.png",
      faq: true,
    },
    {
      type: "cta",
      title: "Installez un trieur optique performant à Orléans",
      text: "Demandez un devis ou des conseils techniques pour sélectionner le trieur optique correspondant à vos besoins et améliorer la qualité de vos lots. Nous vous accompagnons dans le choix de la configuration la plus adaptée à vos produits.",
      cta: { label: "Commandez votre trieur", href: "/contact" },
    },
  ],
};

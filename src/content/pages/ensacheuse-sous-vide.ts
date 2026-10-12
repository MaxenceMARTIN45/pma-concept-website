import type { PageData } from "@/lib/blocks";

const head: [string, string] = ["Caractéristique", "Détails"];

export const ensacheuseSousVide: PageData = {
  slug: "ensacheuse-sous-vide-tubes-horizontales",
  title: "Ensacheuse horizontale à Orléans | Demandez votre devis",
  description:
    "PMA Concept propose des ensacheuses horizontales sous vide pour poudre, granulés ou liquides à Orléans. Contactez-nous pour passer une commande.",
  hero: {
    title: "Ensacheuse horizontale à Orléans",
    text: "PMA Concept propose des **ensacheuses horizontales à film tube** et sous vide, adaptées aux produits en poudre, granulés ou liquides. Nos solutions permettent de conditionner vos produits avec précision et fiabilité, tout en s’adaptant à vos besoins spécifiques. Faire appel à nous signifie proximité, adaptabilité et réactivité pour répondre à vos exigences industrielles.",
    cta: { label: "Demandez une estimation", href: "/contact" },
    image: "ensacheuse-horizontale-a-la-rochelle.webp",
  },
  blocks: [
    {
      type: "intro",
      title: "Ensacheuse sous vide horizontale",
      text: "Nos ensacheuses sous vide horizontales sont conçues pour le **conditionnement en sachets coussins** ou sous vide, assurant un emballage sécurisé et professionnel. Elles sont disponibles avec une structure en INOX 304 ou 316 sur demande, garantissant robustesse et hygiène dans vos lignes de production.",
      divider: true,
    },
    {
      type: "products",
      items: [
        {
          title: "Caractéristiques techniques",
          images: ["a-ensacheuse-horizontale.png"],
          head,
          rows: [
            ["Modèle", "Sur demande"],
            ["Cadence", "Selon configuration et type de produit"],
            ["Puissance électrique", "230V – 50Hz"],
            ["Pression", "5-6 bars"],
            ["Produits compatibles", "Poudre, granulés ou liquides"],
            ["Maintenance et utilisation", "Simple et intuitive"],
          ],
        },
        {
          title: "Types de sachets et options",
          images: ["b-rendu-sachets-ensacheuse-film-tube.png", "a-sachet-machine-horizontale.png"],
          head,
          rows: [
            ["Types de sachets", "Coussin ou sous vide : PE, ALU, PET, OPC ou Kraft"],
            ["Zippé", "Oui ou non"],
            ["Épaisseur", "30 à 100 microns"],
            ["Taille des sachets", "Personnalisable"],
            ["Type de fermeture", "Soudée à chaud"],
          ],
        },
      ],
    },
    {
      type: "band",
      title: "FAQ sur les ensacheuses sous vide",
      image: "ensacheuse-horizontale-a-la-rochelle.webp",
      faq: true,
    },
    {
      type: "cta",
      title: "Commandez votre ensacheuse sous vide à Orléans",
      text: "Nous mettons notre expertise au service de vos projets industriels grâce à nos **ensacheuses horizontales sous vide**. Contactez-nous pour obtenir des conseils personnalisés et planifier la mise en œuvre de vos équipements.",
      cta: { label: "Demandez plus d’informations", href: "/contact" },
    },
  ],
};

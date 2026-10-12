import type { PageData } from "@/lib/blocks";

const head: [string, string] = ["Caractéristique", "Détails"];

export const ensacheusePreformes: PageData = {
  slug: "ensacheuse-pour-sachets-preformes-et-gueule-ouverte",
  title: "Ensacheuse pour sachets préformés Orléans | Appelez-nous",
  description:
    "PMA Concept propose des ensacheuses linéaires, carrousel et à gueule ouverte à Orléans pour poudre, granulés ou liquides. Demandez un devis.",
  hero: {
    title: "Ensacheuse pour sachets préformés à Orléans",
    text: "PMA Concept à Orléans vous propose sa gamme d’**ensacheuses pour sachets préformés** et à gueule ouverte, adaptées aux produits en poudre, granulés ou liquides. Nos solutions permettent d’optimiser vos lignes de conditionnement avec fiabilité et précision. Faire appel à nous signifie proximité, adaptabilité et réactivité pour répondre au plus près de vos besoins industriels.",
    cta: { label: "Contactez-nous", href: "/contact" },
    image: "ensacheuse-pour-sachets-preformes-a-la-rochelle.webp",
  },
  blocks: [
    {
      type: "intro",
      title: "Ensacheuse sachets préformés linéaire ou carrousel",
      text: "Nos **ensacheuses pour sachets préformés** peuvent être configurées en version linéaire 5-6 postes ou carrousel, selon vos besoins de production. Elles sont conçues pour un conditionnement de qualité avec une structure en INOX 304 et porte en plexiglass pour faciliter la sécurité et la visibilité.",
      divider: true,
    },
    {
      type: "products",
      items: [
        {
          title: "Caractéristiques techniques",
          images: ["a-ensacheuse-lineaire-doypack-ou-sachets-coussins.png", "a-ensacheuse-pouch-rotary-poudre.png"],
          head,
          rows: [
            ["Cadence", "Selon configuration et type de produit"],
            ["Puissance électrique", "230V – 50Hz"],
            ["Pression", "5-6 bars"],
            ["Produits compatibles", "Poudre, granulés ou liquides"],
            ["Maintenance et utilisation", "Simple et intuitive"],
          ],
        },
        {
          title: "Types de sachets et options",
          images: ["a2-sachets-doypack-ou-sachets-coussins.png"],
          head,
          rows: [
            ["Types de sachets", "Plats ou doypack : PE, ALU, PET, OPC ou Kraft"],
            ["Zippé", "Oui ou non"],
            ["Épaisseur", "30 à 100 microns"],
            ["Taille des sachets", "Personnalisable"],
            ["Type de fermeture", "Soudée à chaud"],
          ],
        },
      ],
    },
    {
      type: "banner",
      image: "fond8-pma-concept-machines-industrielles-automatisees-a-orleans.webp",
      title: "Ensacheuse à gueule ouverte",
      text: "Nos **ensacheuses semi-automatiques** et automatiques à gueule ouverte sont conçues pour les granulés et les produits en vrac. Elles permettent d’atteindre des performances élevées tout en s’adaptant à différents types de sacs, qu’ils soient tissés ou en papier, de 5 à 25 kg ou 50 kg.",
    },
    {
      type: "products",
      items: [
        {
          title: "Caractéristiques techniques",
          images: ["c3-ensacheuse-5-25-kg-a-gueule-ouverte-avec-chargeur-auto.png"],
          head,
          rows: [
            ["Cadence", "600 à 900 sacs/heure selon produit et dextérité de l’opérateur"],
            ["Tension", "380-400V – 50Hz"],
            ["Puissance", "1 à 3 kW selon modèle"],
            ["Pression", "5-6 bars / 3-5 m³ selon modèle"],
            ["Certification", "Machine certifiée CE"],
            ["Garantie", "1 an"],
            ["Délais de livraison", "8-12 semaines"],
          ],
        },
      ],
    },
    {
      type: "cta",
      title: "Achetez votre ensacheuse à gueule ouverte à Orléans",
      text: "Pour vos besoins en ensacheuses préformées ou à gueule ouverte, nous vous invitons à nous contacter. Nous vous accompagnons dans le choix du modèle le plus adapté à votre production et assurons un **suivi technique complet**.",
      cta: { label: "Posez vos questions", href: "/contact" },
    },
  ],
};

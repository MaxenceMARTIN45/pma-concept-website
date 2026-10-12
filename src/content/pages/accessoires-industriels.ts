import type { PageData } from "@/lib/blocks";

const head: [string, string] = ["Caractéristique", "Détails"];

export const accessoiresIndustriels: PageData = {
  slug: "accessoires-industriels",
  title: "Accessoires industriels à Orléans | Posez vos questions",
  description:
    "Découvrez nos accessoires pour machines d’ensachage à Orléans : transport, soudure de sachets et impression. Laissez votre demande dès aujourd’hui.",
  hero: {
    title: "Accessoires industriels à Orléans",
    text: "PMA Concept propose des **accessoires pour machines d’ensachage** permettant d’optimiser vos lignes de production. Nos solutions couvrent le transport, la soudure des sachets, l’impression et la distribution des produits avec précision et fiabilité. Chaque équipement est conçu pour s’intégrer parfaitement aux ensacheuses et aux doseuses de votre installation.",
    cta: { label: "Demandez plus de détails", href: "/contact" },
    image: "b-impression-jet-d-encre-sur-tapis-en-continue.png",
  },
  blocks: [
    {
      type: "intro",
      title: "Accessoires de transport",
      text: "Les **accessoires de transport** sont essentiels pour garantir un flux continu et régulier des produits vers les ensacheuses et [les doseuses](/doseuses). Ils permettent d’alimenter vos machines sans interruption et de minimiser les pertes de produit.",
      divider: true,
    },
    {
      type: "rows",
      items: [
        {
          image: "a-depose-etiquette-simple-face-doypack-ou-sachets-plats.png",
          title: "Solutions de transport",
          list: [
            "Alimentation à godets, tapis élévateur ou par vis sans fin",
            "Sortie par tapis élévateur ou table de distribution",
            "Entièrement en INOX 304 pour robustesse et hygiène",
            "Compatible avec tous types de produits, poudre, granulés ou liquide",
          ],
        },
      ],
    },
    {
      type: "strip",
      images: [
        "elevateur-granules-ou-copeaux.png",
        "elevateur-a-vis-sans-fin-pour-poudre.png",
        "a-depose-etiquettes-bouteilles-flacons.png",
        "a-etiqueteuse-sur-pieds.png",
        "a-etquetage-double-face-doypack-ou-sachets-plat.png",
        "c-detecteur-de-metaux.png",
        "c-tapis-de-controle-de-poids-et-ejecteur.png",
        "c-tapis-ejecteur-de-controle-de-poids.png",
        "d-plieuse-de-cartons.png",
        "d-scotcheuse-de-cartons.png",
      ],
    },
    {
      type: "banner",
      image: "fond10-pma-concept-machines-industrielles-automatisees-a-orleans.webp",
      title: "Soudure sachets",
      text: "Nos **accessoires de soudure** permettent la fermeture précise et régulière des sachets sur vos [lignes d’ensachage](/ensacheuses). Ils sont adaptés aux différents types de sachets : fibre de maïs, papier filtre, mousseline ou thermosoudable.",
    },
    {
      type: "products",
      items: [
        {
          title: "Modèle JX012-P (sachets fibre de maïs pyramide ou coussins)",
          images: ["b1-ensacheuse-a-the-a-soudure-ultrason.png", "b2-sachets-de-the-en-fibre-de-mais.png"],
          head,
          rows: [
            ["Dosage", "Linéaire, ajustable sur écran tactile"],
            ["Trémie", "4*30 litres"],
            ["Dosage produit", "1-5 g (dépend du produit)"],
            ["Précision dosage", "+/- 0.1 g à l’affichage"],
            ["Soudure", "2 systèmes Ultrason haute fréquence"],
            ["Taille sachets maxi", "W 55-75 mm * L 40-80 mm"],
            ["Cadence", "4 têtes : 25-35 sachets/mn\n6 têtes : 35-50 sachets/mn"],
            ["Alimentation électrique", "230V – 50Hz"],
            ["Pression", "5-6 bars"],
            ["Machine certifiée CE", "Oui"],
            ["Garantie", "1 an"],
            ["Délais de livraison", "6 semaines"],
          ],
        },
        {
          title: "Modèle C18 (sachets thé plats mousseline)",
          images: ["b1-ensacheuse-a-the-papier-filtre.png", "b3-sachets-de-the-avec-enveloppe-externe.png"],
          head,
          rows: [
            ["Trémie", "15-20 litres"],
            ["Dosage", "1-5 g à coupe, 2 g en standard"],
            ["Taille sachets mousseline", "W 50-75 mm * L 50-75 mm"],
            ["Taille sachets extérieur PE", "W 75 mm * L 90 mm"],
            ["Taille étiquettes", "W 28 mm * L 1-23 mm"],
            ["Ficelle longueur", "155 mm"],
            ["Diamètre bobine maximum", "300-450 mm"],
            ["Mandrin diamètre", "76 mm"],
            ["Cadence", "30-50 sachets/mn"],
            ["Alimentation électrique", "220V – 50Hz"],
            ["Puissance", "3700 W"],
            ["Pression", "5-6 bars"],
            ["Dimensions", "L 900 * W 700 * H 1700 mm"],
            ["Poids", "350 kg"],
          ],
        },
      ],
    },
    {
      type: "band",
      tone: "blue",
      title: "Impression",
      text: "Les **accessoires d’impression** permettent de marquer vos sachets avec précision pour l’identification des produits, des informations légales, des dates de péremption ou des codes de traçabilité. Ils sont compatibles avec différents types de sachets et de films.",
      image: "a-etiquetage-double-face-doypack-ou-sachets-plat.jpg",
      flush: true,
    },
    {
      type: "cta",
      title: "Passez votre commande d’accessoires industriels à Orléans",
      text: "Demandez un devis ou une démonstration pour choisir les accessoires industriels correspondant à vos exigences techniques et améliorer vos lignes de production. Nous proposons un accompagnement complet pour l’installation, la maintenance et le suivi opérationnel.",
      cta: { label: "Contactez-nous", href: "/contact" },
    },
  ],
};

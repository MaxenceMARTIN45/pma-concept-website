import type { PageData } from "@/lib/blocks";

export const accessoiresIndustriels: PageData = {
  slug: "accessoires-industriels",
  title: "Accessoires industriels à Orléans | Posez vos questions",
  description:
    "Découvrez nos accessoires pour machines de conditionnement à Orléans : transport, étiquetage, contrôle, encartonnage et impression. Laissez votre demande dès aujourd’hui.",
  hero: {
    title: "Accessoires industriels à Orléans",
    text: "PMA Concept propose des **accessoires pour machines de conditionnement** permettant d’optimiser vos lignes de production. Nos solutions couvrent le transport, la soudure des sachets, l’impression et l’étiquetage des produits. Chaque équipement est conçu pour s’intégrer parfaitement à votre installation.",
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
            "Alimentation à godets, tapis élévateur, par vis sans fin ou pompe à fût",
            "Sortie par tapis élévateur ou table de distribution",
            "Entièrement en INOX 304 (316 sur demande) pour robustesse et hygiène",
            "Compatible avec tous types de produits, poudre, granulés ou liquide",
          ],
        },
      ],
    },
    {
      type: "gallery",
      groups: [
        { title: "Élévateur à godets à tasseaux ou à vis", images: ["elevateur-granules-ou-copeaux.png", "elevateur-a-vis-sans-fin-pour-poudre.png"] },
        {
          title: "Étiquetage",
          images: ["a-depose-etiquettes-bouteilles-flacons.png", "a-etiqueteuse-sur-pieds.png", "a-etquetage-double-face-doypack-ou-sachets-plat.png"],
        },
        {
          title: "Détection de métaux ou contrôle de poids",
          images: ["c-detecteur-de-metaux.png", "c-tapis-de-controle-de-poids-et-ejecteur.png", "c-tapis-ejecteur-de-controle-de-poids.png"],
        },
        { title: "Encartonnage", images: ["d-plieuse-de-cartons.png", "d-scotcheuse-de-cartons.png"] },
      ],
    },
    {
      type: "banner",
      image: "fond10-pma-concept-machines-industrielles-automatisees-a-orleans.webp",
      title: "Pliage et fermeture des cartons automatiques",
      text: "Ces accessoires permettent de réaliser un gain de temps en sortie de ligne d’ensachage en assurant une régularité de la finition.",
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

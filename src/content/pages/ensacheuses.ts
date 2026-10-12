import type { PageData } from "@/lib/blocks";

export const ensacheuses: PageData = {
  slug: "ensacheuses",
  title: "Vente d’ensacheuses à Orléans | Demandez plus de détails",
  description:
    "PMA Concept commercialise des ensacheuses verticales, sous vide et pour sachets préformés en France et en Europe. Contactez-nous pour plus d’informations.",
  hero: {
    title: "Vente d’ensacheuses à Orléans",
    text: "Nous proposons la **vente d’ensacheuses pour poudre**, liquide ou granulés, adaptées à différents types de production industrielle. À Orléans, nous accompagnons nos clients dans la gestion de machines industrielles et la mise en œuvre de solutions automatisées pour le conditionnement. Notre objectif est de vous fournir des équipements fiables et adaptés à vos besoins.",
    cta: { label: "Laissez un message", href: "/contact" },
    image: "vente-densacheuses-a-la-rochelle.webp",
  },
  blocks: [
    {
      type: "intro",
      title: "Ensacheuses verticales",
      text: "Nos [ensacheuses verticales](/ensacheuse-verticale) sont conçues pour les produits en poudre et en granulés. Elles permettent un remplissage précis et régulier, tout en s’intégrant facilement dans vos lignes de production. Ces machines facilitent le conditionnement en sacs de différentes tailles et formes.",
      cta: { label: "Découvrez nos modèles", href: "/ensacheuse-verticale" },
      divider: true,
    },
    {
      type: "rows",
      items: [
        {
          image: "a2-ensacheuses-verticales-poudre-granules.png",
          title: "Ensacheuses pour poudre et granulés",
          text: "Ces modèles spécifiques assurent un **dosage contrôlé** et une fermeture fiable des sachets. Ils conviennent à divers produits, des poudres alimentaires aux granulés techniques. Nous accompagnons nos clients dans le choix du modèle le mieux adapté à leur flux de production.",
        },
        {
          image: "b1-ensacheuse-a-the-a-soudure-ultrason.png",
          title: "Ensacheuses à thé",
          text: "Nous commercialisons des **ensacheuses pour thé avec soudure ultrason**, garantissant une fermeture précise et hygiénique. Ces machines sont adaptées aux sachets individuels et facilitent le conditionnement en série. Chaque équipement est calibré pour optimiser la productivité tout en minimisant les pertes.",
        },
        {
          image: "b1-ensacheuse-a-the-papier-filtre.png",
          title: "Ensacheuses thé papier filtre",
          text: "Nos **ensacheuses pour thé en papier filtre** permettent de préparer des sachets prêts à l’emploi avec une précision constante. Elles s’adaptent aux lignes industrielles et assurent une manutention sécurisée des produits. Ces machines sont faciles à intégrer dans vos processus de conditionnement existants.",
        },
      ],
    },
    {
      type: "banner",
      image: "fond7-pma-concept-machines-industrielles-automatisees-a-orleans.webp",
      title: "Ensacheuse sous vide",
      text: "Nos [ensacheuses sous vide et tubes horizontales](/ensacheuse-sous-vide-tubes-horizontales) permettent un conditionnement hermétique et **sécurisé des produits sensibles**. Elles conviennent aux applications alimentaires ou techniques, en garantissant la conservation et la présentation des produits. Chaque machine est accompagnée de conseils pour son installation et son paramétrage.",
      cta: { label: "Choisissez votre ensacheuse", href: "/ensacheuse-sous-vide-tubes-horizontales" },
    },
    {
      type: "band",
      title: "Ensacheuse pour sachets préformés et gueule ouverte",
      text: "Nous proposons des [ensacheuses pour sachets préformés](/ensacheuse-pour-sachets-preformes-et-gueule-ouverte) et gueule ouverte, idéales pour les **produits liquides**, poudres ou granulés. Ces machines combinent rapidité et précision dans le remplissage et le scellement des sachets. Elles sont adaptées à différents formats et facilitent l’intégration dans vos lignes automatisées.",
      cta: { label: "Parcourez nos modèles disponibles", href: "/ensacheuse-pour-sachets-preformes-et-gueule-ouverte" },
      image: "a-ensacheuse-pouch-rotary.png",
    },
    {
      type: "cta",
      title: "Achetez votre ensacheuse à Orléans",
      text: "Pour vos besoins en ensacheuses verticales, pour sachets préformés ou sous vide, nous vous invitons à nous contacter.\nDemandez un devis ou une démonstration pour intégrer nos machines dans vos installations industrielles.",
      cta: { label: "Contactez-nous", href: "/contact" },
    },
  ],
};

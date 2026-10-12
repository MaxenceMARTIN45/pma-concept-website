import type { PageData } from "@/lib/blocks";

export const maintenanceDepannage: PageData = {
  slug: "maintenance-depannage",
  title: "SAV de machines industrielles à Orléans | Appelez-nous",
  description:
    "PMA Concept assure le SAV, la maintenance et le dépannage de vos machines industrielles à Orléans, sur site ou à distance. Contactez-nous.",
  hero: {
    title: "SAV de machines industrielles à Orléans",
    text: "PMA Concept, basé à Orléans, assure un **service après-vente** fiable pour vos équipements industriels, qu’il s’agisse de remplisseuses, ensacheuses, doseuses ou trieurs optiques. Nous intervenons sur site ou à distance, avec des solutions rapides et adaptées. Nous proposons également des contrats de maintenance industrielle pour garantir la continuité de votre production.",
    cta: { label: "Demandez une intervention", href: "/contact" },
    image: "sav-de-machines-industrielles-a-la-rochelle.webp",
  },
  blocks: [
    {
      type: "intro",
      title: "Maintenance industrielle",
      text: "Nous mettons en place un entretien préventif pour sécuriser vos machines et limiter les arrêts imprévus. Nos services s’adaptent aux contraintes de cadence, de production et du type de la machine.",
    },
    {
      type: "rows",
      items: [
        {
          image: "controle-regulier-de-vos-equipements-industriels-a-la-rochelle.webp",
          title: "Opérations de maintenance industrielle",
          text: "Nous assurons le nettoyage des buses, le **remplacement des joints**, le contrôle des capteurs, la vérification des alimentations et des systèmes de dosage. Ce suivi périodique améliore la durée de vie de vos ensacheuses, doseuses, trieurs et remplisseuses, tout en garantissant un rendement constant.",
        },
        {
          image: "reparation-dequipements-industriels-a-la-rochelle.webp",
          title: "Contrat de maintenance industrielle",
          text: "Nos contrats permettent d’assurer un **suivi continu de votre parc de machines**. Ils incluent des visites programmées, un accès prioritaire au SAV et des conditions tarifaires préférentielles. Ce dispositif est conseillé pour les sites exploitant plusieurs lignes ou des équipements à cadence élevée.",
        },
      ],
    },
    {
      type: "banner",
      image: "fond13-pma-concept-machines-industrielles-automatisees-a-orleans.webp",
      title: "Service de dépannage industriel",
      text: "Notre **service de dépannage industriel** couvre toutes vos machines, qu’il s’agisse d’ensacheuses, [doseuses](/doseuses), remplisseuses ou [trieurs optiques](/tri-optique). Nous combinons expertise technique et réactivité pour minimiser les temps d’arrêt et garantir une production continue.",
    },
    {
      type: "rows",
      items: [
        {
          image: "reparation-dequipements-industriels-a-la-rochelle.webp",
          title: "Dépannage industriel sur site",
          text: "Nous nous déplaçons directement sur vos installations pour diagnostiquer et remettre en service vos machines, qu’il s’agisse d’ensacheuses, [remplisseuses](/remplisseuses) ou doseuses. Ce service est destiné aux arrêts critiques ou aux pannes bloquantes, avec une intervention planifiée selon votre localisation et l’urgence signalée.",
        },
        {
          image: "depannage-industriel-a-distance.webp",
          title: "Dépannage industriel à distance",
          text: "Dans certains cas, une assistance technique suffit pour redémarrer votre installation. Grâce à nos outils de contrôle à distance, nous vous guidons dans la remise en marche de vos équipements. Ce service permet un gain de temps considérable, notamment sur les machines automatisées compatibles avec une supervision à distance.",
        },
      ],
    },
    {
      type: "cta",
      title: "Contactez votre service maintenance industrielle à Orléans",
      text: "Pour toute demande de maintenance ou de dépannage d’équipements industriels, contactez PMA Concept. Nous proposons des solutions adaptées, fiables et professionnelles pour sécuriser vos lignes de production et optimiser vos installations.",
      cta: { label: "Optez pour un dépannage", href: "/contact" },
    },
  ],
};

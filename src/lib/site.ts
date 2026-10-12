export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Ensacheuses",
    href: "/ensacheuses",
    children: [
      { label: "Ensacheuse verticale", href: "/ensacheuse-verticale" },
      { label: "Ensacheuse pour sachets préformés et gueule ouverte", href: "/ensacheuse-pour-sachets-preformes-et-gueule-ouverte" },
      { label: "Ensacheuse sous vide – tubes horizontales", href: "/ensacheuse-sous-vide-tubes-horizontales" },
    ],
  },
  { label: "Doseuses", href: "/doseuses" },
  { label: "Accessoires industriels", href: "/accessoires-industriels" },
  { label: "Remplisseuses", href: "/remplisseuses" },
  { label: "Tri optique", href: "/tri-optique" },
  { label: "Maintenance – Dépannage", href: "/maintenance-depannage" },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  phone: "+33673081794",
  email: "ph.martin@pma-concept.com",
  maps: "https://maps.app.goo.gl/9ogeK5FRqu1iYLAX6",
};

/** Set at build time when the site is served from a sub-path (GitHub Pages). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** URL of a file from /public, prefixed with the base path. */
export const asset = (path: string) => `${basePath}${path}`;

export const img = (name: string) => asset(`/images/${name}`);

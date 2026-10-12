export type Cta = { label: string; href: string };
/** [label, value] – value may contain "\n" for multi-line cells */
export type SpecRow = [string, string];

export type RowItem = {
  image: string;
  alt?: string;
  title: string;
  text?: string;
  list?: string[];
  /** shows the arrow link column (home page) */
  href?: string;
};

export type ProductItem = {
  images: string[];
  title: string;
  /** column headers; omit for header-less tables */
  head?: [string, string];
  rows: SpecRow[];
};

export type Block =
  | { type: "intro"; title: string; text?: string; cta?: Cta; divider?: boolean; ctaCentered?: boolean }
  | { type: "rows"; items: RowItem[]; divider?: boolean }
  | { type: "products"; items: ProductItem[]; divider?: boolean }
  | { type: "banner"; bg?: string; image: string; alt?: string; title: string; text?: string; cta?: Cta; rows?: SpecRow[] }
  | { type: "band"; tone?: "dark" | "blue"; title: string; text?: string; cta?: Cta; image: string; alt?: string; faq?: boolean; flush?: boolean }
  | { type: "strip"; images: string[] }
  | { type: "cta"; title: string; text: string; cta: Cta };

export type PageData = {
  slug: string;
  title: string;
  description: string;
  hero: { title: string; text: string; cta: Cta; image: string; alt?: string };
  blocks: Block[];
};

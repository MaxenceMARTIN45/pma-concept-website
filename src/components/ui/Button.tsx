import Link from "next/link";

const tones = {
  primary: "border-brand bg-brand text-white hover:bg-transparent hover:text-brand",
  outline: "border-black bg-transparent text-black hover:bg-black hover:text-white",
  light: "border-white bg-white text-brand hover:bg-transparent hover:text-white",
} as const;

type Props = {
  href: string;
  children: React.ReactNode;
  tone?: keyof typeof tones;
  /** full width of its column (hero buttons) instead of content width */
  block?: boolean;
};

export default function Button({ href, children, tone = "primary", block = false }: Props) {
  const cls = `btn ${block ? "" : "btn-wide"} ${tones[tone]}`;
  const external = /^(https?:|tel:|mailto:)/.test(href);
  return external ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

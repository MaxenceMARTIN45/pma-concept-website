import Button from "@/components/ui/Button";
import Rich from "@/components/ui/Rich";
import { img } from "@/lib/site";
import type { Cta } from "@/lib/blocks";

type Props = {
  tone?: "dark" | "blue";
  title: string;
  text?: string;
  cta?: Cta;
  image: string;
  alt?: string;
  children?: React.ReactNode;
  /** image keeps its width but sits flush against the band (no white area) */
  flush?: boolean;
};

const tones = { dark: "bg-[#2c26a9]", blue: "bg-brand" } as const;

/** Colored band: text on the left, picture on the right. */
export default function SplitBand({ tone = "dark", title, text, cta, image, alt, children, flush = false }: Props) {
  return (
    <div className={`${tones[tone]} text-white md:flex md:items-stretch`}>
      <div className="px-[6%] py-[5%] md:ml-[8.333%] md:w-2/3 md:px-[3%]">
        <h2 className="m-0 px-[3%] py-[1%] text-[calc(1.5em+.2vw)] font-semibold leading-[1.1]">{title}</h2>
        {text && (
          <p className="m-0 px-[3%] py-[1.3%]">
            <Rich text={text} />
          </p>
        )}
        {children}
        {cta && (
          <div className="px-[3%] py-[2%]">
            <Button href={cta.href} tone="light">
              {cta.label}
            </Button>
          </div>
        )}
      </div>
      <div className={`flex items-start justify-center md:w-1/4 ${flush ? "" : "bg-white"} md:ml-auto`}>
        <img src={img(image)} alt={alt ?? title} loading="lazy" className="h-auto w-full" />
      </div>
    </div>
  );
}

import Button from "@/components/ui/Button";
import Rich from "@/components/ui/Rich";
import SpecTable from "./SpecTable";
import { img } from "@/lib/site";
import type { SpecRow, Cta } from "@/lib/blocks";

type Props = {
  /** textured background; defaults to the site-wide swoosh */
  bg?: string;
  image: string;
  alt?: string;
  title: string;
  text?: string;
  cta?: Cta;
  rows?: SpecRow[];
  /** extra content rendered inside the blue box (home page bullet list…) */
  children?: React.ReactNode;
  /** home variant: left-aligned medium-weight title */
  titleClass?: string;
};

/** Wide picture over a textured background, with a blue card overlapping its bottom edge. */
export default function BannerCard({ bg = "fond3.webp", image, alt, title, text, cta, rows, children, titleClass }: Props) {
  return (
    <div className="bg-cover bg-center pb-[3%]" style={{ backgroundImage: `url(${img(bg)})` }}>
      <div className="p-0 text-center md:ml-[8.333%] md:w-[83.333%]">
        <img src={img(image)} alt={alt ?? title} loading="lazy" className="h-auto w-full" />
      </div>
      <div className="relative bg-brand px-[3%] py-[.5%] text-white md:ml-[16.667%] md:mt-[-6%] md:w-2/3">
        <div className="p-[1%] md:mt-[2.5%]">
          <h2 className={titleClass ?? `m-0 px-[3%] text-[calc(1.7em+1vw)] font-medium leading-[1.15] ${rows ? "" : "text-center"}`}>{title}</h2>
          {text && (
            <p className="m-0 px-[3%] py-[1.5%] leading-[2.4]">
              <Rich text={text} />
            </p>
          )}
          {rows && (
            <div className="px-[3%] py-[1.5%]">
              <SpecTable rows={rows} tone="inverted" />
            </div>
          )}
          {children}
          {cta && (
            <div className="flex justify-center p-[3%]">
              <Button href={cta.href} tone="light">
                {cta.label}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

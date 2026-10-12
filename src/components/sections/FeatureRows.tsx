import Link from "next/link";
import Rich from "@/components/ui/Rich";
import { img } from "@/lib/site";
import type { RowItem } from "@/lib/blocks";

/** Picture | title | text (| arrow) rows, separated by hairlines on mobile. */
export default function FeatureRows({ items, divider = false }: { items: RowItem[]; divider?: boolean }) {
  // with the arrow column the text is 1/2 wide; without it the picture/title columns grow
  const arrows = items.some((i) => i.href);
  const imgW = arrows ? "md:w-1/6" : "md:w-1/4";
  return (
    <div className="md:ml-[16.667%] md:w-2/3">
      {items.map((it, i) => (
        <div
          key={it.title}
          className={`p-[1%] md:flex ${i > 0 ? "mt-[1.5%] border-t border-black/[.17] md:border-t-0" : ""} ${
            divider && i === items.length - 1 ? "md:border-b md:border-black" : ""
          }`}
        >
          <div className={`p-[1%] md:mt-[1%] ${imgW}`}>
            <img src={img(it.image)} alt={it.alt ?? it.title} loading="lazy" className={`h-auto ${arrows ? "w-full" : "w-[72%]"}`} />
          </div>
          <h3 className="m-0 px-[3%] py-[1.3%] text-[1.4em] font-bold leading-[1.1] text-brand-title md:mt-[5%] md:w-1/4">{it.title}</h3>
          <div className="px-[3%] py-[1.3%] md:w-1/2">
            {it.text && (
              <p className="m-0">
                <Rich text={it.text} />
              </p>
            )}
            {it.list && (
              <ul className="m-0 list-disc pl-5">
                {it.list.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            )}
          </div>
          {it.href && (
            <div className="p-[1%] md:mt-[4%] md:w-[8.333%]">
              <Link href={it.href}>
                <img src={img("arrow.png")} alt="Voir" className="w-full max-w-[86px] transition-transform hover:translate-y-1" />
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

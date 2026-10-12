import SpecTable from "./SpecTable";
import { img } from "@/lib/site";
import type { ProductItem } from "@/lib/blocks";

/** Stacked pictures on the left, title + spec table on the right. */
export default function ProductList({ items, divider = false }: { items: ProductItem[]; divider?: boolean }) {
  return (
    <div className="md:ml-[16.667%] md:w-2/3">
      {items.map((p, i) => (
        <div key={p.title} className={`p-[1%] md:mb-[3%] md:flex ${divider && i === 0 ? "md:mt-[2%]" : ""}`}>
          <div className="flex flex-col gap-[6px] p-[3%] md:w-1/3 md:px-[5%]">
            {p.images.map((im) => (
              <img key={im} src={img(im)} alt={p.title} loading="lazy" className="h-auto w-full" />
            ))}
          </div>
          <div className="px-[3%] md:w-2/3 md:pr-[6%]">
            <h3 className="m-0 mb-[2%] text-[1.35em] font-bold leading-[1.15] text-brand-title">{p.title}</h3>
            <SpecTable rows={p.rows} head={p.head} />
          </div>
        </div>
      ))}
    </div>
  );
}

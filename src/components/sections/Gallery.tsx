import { img } from "@/lib/site";

type Group = { title: string; images: string[] };

/** Captioned groups of product pictures (accessories page). */
export default function Gallery({ groups }: { groups: Group[] }) {
  return (
    <div className="bg-[#f6f6f6] px-[3%] py-[2%]">
      <div className="grid gap-6 md:ml-[8.333%] md:w-[83.333%] md:grid-cols-2">
        {groups.map((g) => (
          <figure key={g.title} className="m-0 rounded-2xl bg-white p-4">
            <figcaption className="mb-3 text-[1.15em] font-bold leading-[1.2] text-brand-title">{g.title}</figcaption>
            <div className="flex flex-wrap gap-3">
              {g.images.map((im) => (
                <img key={im} src={img(im)} alt={g.title} loading="lazy" className="h-[120px] min-w-0 flex-1 basis-[30%] object-contain md:h-[150px]" />
              ))}
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

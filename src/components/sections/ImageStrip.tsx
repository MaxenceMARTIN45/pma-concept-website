import { img } from "@/lib/site";

/** Row of small product pictures sharing the full width. */
export default function ImageStrip({ images }: { images: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 bg-[#f6f6f6] px-[3%] py-[2%] md:flex-nowrap">
      {images.map((im) => (
        <img key={im} src={img(im)} alt="" loading="lazy" className="h-[90px] min-w-0 flex-1 basis-1/4 object-cover md:h-[130px] md:basis-0" />
      ))}
    </div>
  );
}

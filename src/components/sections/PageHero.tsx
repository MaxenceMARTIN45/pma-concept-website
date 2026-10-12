import Image from "next/image";
import Button from "@/components/ui/Button";
import Rich from "@/components/ui/Rich";
import { img } from "@/lib/site";
import type { PageData } from "@/lib/blocks";

/** Banner background + white rounded card: title, intro, CTA and a picture. */
export default function PageHero({ hero }: { hero: PageData["hero"] }) {
  return (
    <section className="bg-cover bg-center px-[2%] py-[2%]" style={{ backgroundImage: `url(${img("bandeau.webp")})` }}>
      <div className="rounded-[20px] bg-white p-[2%] md:ml-[10%] md:flex md:w-[80%] md:items-center md:gap-[2%]">
        <div className="p-[3%] md:w-[46%]">
          <h1 className="m-0 mb-[4%] text-[calc(1.5em+0.2vw)] font-semibold leading-[1.15] text-black">{hero.title}</h1>
          <p className="mb-[6%]">
            <Rich text={hero.text} />
          </p>
          <Button href={hero.cta.href}>{hero.cta.label}</Button>
        </div>
        <div className="p-[1%] md:w-[52%]">
          <Image
            src={img(hero.image)}
            alt={hero.alt ?? hero.title}
            width={900}
            height={600}
            priority
            className="h-auto w-full rounded-[16px]"
          />
        </div>
      </div>
    </section>
  );
}

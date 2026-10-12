import Button from "@/components/ui/Button";
import Rich from "@/components/ui/Rich";
import type { Cta } from "@/lib/blocks";

/** Closing call-to-action: white card with a soft offset shadow. */
export default function CtaCard({ title, text, cta }: { title: string; text: string; cta: Cta }) {
  return (
    <div className="px-[3%] py-[3%]">
      <div className="bg-white p-[3%] shadow-[-10px_10px_6px_rgb(0_0_0/.1)] md:ml-[16.667%] md:w-2/3">
        <div className="px-[3%] py-[1%] md:px-[6%]">
          <h2 className="m-0 py-[1%] text-[calc(1.5em+.2vw)] font-semibold leading-[1.15] text-black">{title}</h2>
          <p className="m-0 py-[1%]">
            <Rich text={text} />
          </p>
          <div className="py-[2%]">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import Button from "@/components/ui/Button";
import Rich from "@/components/ui/Rich";
import type { Cta } from "@/lib/blocks";

type Props = { title: string; text?: string; cta?: Cta; divider?: boolean; ctaCentered?: boolean; narrow?: boolean };

/** Grey-section heading + paragraph (+ optional button), centered 8-col container; `narrow` keeps the text in the left half (home page). */
export default function SectionIntro({ title, text, cta, divider = false, ctaCentered = false, narrow = false }: Props) {
  return (
    <div className={`md:ml-[16.667%] md:w-2/3 px-[2%] pb-[2%] pt-[.5%] ${divider ? "border-b border-black" : ""}`}>
      <div className={`p-[1%] ${narrow ? "md:w-1/2 md:min-w-[460px]" : ""}`}>
        <h2 className="h-title m-0 px-[3%] py-[1%] leading-[1.1]">{title}</h2>
        {text && (
          <p className="m-0 px-[3%] py-[1.3%]">
            <Rich text={text} />
          </p>
        )}
        {cta && !ctaCentered && (
          <div className="px-[3%] py-[1.3%]">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        )}
      </div>
      {cta && ctaCentered && (
        <div className="flex justify-center p-[3%]">
          <Button href={cta.href}>{cta.label}</Button>
        </div>
      )}
    </div>
  );
}

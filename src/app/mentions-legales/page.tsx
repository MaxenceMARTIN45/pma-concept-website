import type { Metadata } from "next";
import Rich from "@/components/ui/Rich";
import { legal, legalTitle } from "@/content/legal";

export const metadata: Metadata = {
  title: "Mentions Légales - PMA CONCEPT",
  description:
    "Les contenus et les photos présents sur ce site Internet sont la propriété exclusive de PMA CONCEPT situé au 14 rue du devidet, 45000 ORLÉANS, France.",
};

export default function MentionsLegales() {
  return (
    <article className="bg-[#f6f6f6] px-[5%] py-[3%] text-[.85em] text-[#444]">
      <h1 className="m-0 mb-[1.5%] text-[1.9em] font-semibold text-[#333]">{legalTitle}</h1>
      {legal.map((b, i) => {
        switch (b.t) {
          case "h2":
            return (
              <h2 key={i} className="mb-[.5%] mt-[1.8%] text-[1.1em] font-bold text-[#333]">
                {b.text}
              </h2>
            );
          case "h4":
            return (
              <h4 key={i} className="mb-0 mt-[1%] font-bold">
                {b.text}
              </h4>
            );
          case "li":
            return (
              <li key={i} className="ml-8 list-disc">
                {b.text}
              </li>
            );
          default:
            return (
              <p key={i} className="m-0 leading-[1.5]">
                <Rich text={b.text} />
              </p>
            );
        }
      })}
    </article>
  );
}

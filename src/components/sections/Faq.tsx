"use client";

import { useState } from "react";
import { faq } from "@/content/faq";

/** Accordion used inside a SplitBand; one question open at a time. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="px-[3%] py-[1.3%]">
      {faq.map((f, i) => (
        <div key={f.q} className="border-b border-white/60">
          <button
            type="button"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-0 py-[16px] text-left font-[inherit] text-[1em] font-bold text-white"
          >
            {f.q}
            <svg
              className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {open === i && <p className="m-0 pb-[12px] text-[.9em]">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

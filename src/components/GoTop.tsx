"use client";

import { img } from "@/lib/site";

export default function GoTop() {
  return (
    <button
      type="button"
      aria-label="Retour en haut"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-[3px] right-[10px] z-[700] w-[60px] cursor-pointer border-0 bg-transparent p-0"
    >
      <img src={img("gotop.webp")} alt="" height={45} className="mx-auto h-[45px] w-auto" />
    </button>
  );
}

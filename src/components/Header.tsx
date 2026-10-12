"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, img } from "@/lib/site";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="16" height="16">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

/** A parent entry (Ensacheuses) stays active on its sub-pages. */
function useActive() {
  const path = usePathname();
  return (href: string, children?: { href: string }[]) =>
    path === href || (children?.some((c) => c.href === path) ?? false);
}

function DesktopHeader() {
  const isActive = useActive();
  // the home hero already shows the logo; inner pages carry it in the header
  const showLogo = usePathname() !== "/";
  return (
    <header className="relative z-[500] hidden border border-black bg-black text-white md:flex">
      {showLogo && (
        <Link href="/" className="flex w-[16%] items-center justify-center bg-white p-[.5%]">
          <img alt="PMA Concept" src={img("logo.webp")} className="w-full max-w-[150px]" />
        </Link>
      )}
      <nav className={`${showLogo ? "w-[67.333%]" : "w-[83.333%]"} p-[1%] text-[1.02em] font-semibold uppercase tracking-[.5px]`}>
        <ul className="m-0 flex list-none flex-wrap justify-center p-0">
          {nav.map((it) => (
            <li key={it.label} className="group relative">
              <Link href={it.href} className={`menu-link ${isActive(it.href, it.children) ? "font-bold underline" : ""}`}>
                {it.label}
                {it.children && <Chevron className="transition-transform duration-500 group-hover:rotate-180" />}
              </Link>
              {it.children && (
                <ul className="invisible absolute left-0 top-full z-10 m-0 list-none bg-[#1f1f1f] p-0 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
                  {it.children.map((c) => (
                    <li key={c.label} className="bg-[#1f1f1f]">
                      <Link href={c.href} className={`menu-link whitespace-nowrap ${isActive(c.href) ? "font-bold underline" : ""}`}>
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-[16.667%] px-[2%] py-[1.2%] font-bold">
        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center bg-white px-4 py-[10px] text-center text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
        >
          Contactez-nous
        </Link>
      </div>
    </header>
  );
}

function MobileHeader() {
  const isActive = useActive();
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <header className="fixed left-0 top-0 z-[500] flex w-full flex-wrap border border-black bg-black text-white md:hidden">
        <div className="w-[40%] bg-white p-[1%] text-center">
          <Link href="/" onClick={close}>
            <img alt="PMA Concept" src={img("logo.webp")} style={{ maxWidth: 185, width: "100%" }} className="inline" />
          </Link>
        </div>
        <div className="mt-[2%] w-[60%] p-[.7%] text-[1.08em] font-semibold uppercase tracking-[.5px]">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="ml-auto flex cursor-pointer items-center gap-1 border-0 bg-transparent p-2 font-semibold uppercase tracking-[.5px] text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <>
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <path d="M18 8H8M18 12H8M18 16H8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                  <path d="M4 7h2v2H4zM4 11h2v2H4zM4 15h2v2H4z" fill="currentColor" />
                </>
              )}
            </svg>
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
        {open && (
          <ul className="m-0 max-h-[calc(100vh-110px)] w-full list-none overflow-y-auto bg-black p-0 text-[1.02em] font-semibold uppercase tracking-[.5px]">
            {nav.map((it) => (
              <li key={it.label} className="border-t border-white/20">
                <div className="flex items-center justify-between">
                  <Link
                    href={it.href}
                    onClick={close}
                    className={`block flex-1 px-[15px] py-[10px] text-white no-underline ${isActive(it.href, it.children) ? "font-bold underline" : ""}`}
                  >
                    {it.label}
                  </Link>
                  {it.children && (
                    <button type="button" aria-label="Sous-menu" aria-expanded={sub} onClick={() => setSub(!sub)} className="mr-3 cursor-pointer border-0 bg-transparent text-white">
                      <Chevron className={`transition-transform ${sub ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {it.children && sub && (
                  <ul className="m-0 list-none bg-[#1f1f1f] p-0">
                    {it.children.map((c) => (
                      <li key={c.label}>
                        <Link href={c.href} onClick={close} className="block px-[30px] py-[10px] text-white no-underline">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </header>
      <div className="min-h-[113px] md:hidden" />
    </>
  );
}

export default function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}

"use client";

import type { MouseEvent } from "react";
import { PrimaryButton } from "./buttons";

const links = [["Home", "#home"], ["Services", "#services"], ["How It Works", "#how-it-works"], ["About", "#about"]];

function Logo() {
  return (
    <a href="#home" aria-label="PaintSwitch home" className="text-lg font-semibold tracking-[-0.03em] text-[#253231] sm:text-xl">
      PaintSwitch
    </a>
  );
}

function closeMobileMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#A99D91]/55 bg-[#F5F1E8]/95 text-[#253231] backdrop-blur">
      <a href="#main-content" className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:not-sr-only focus:bg-[#253231] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#F5F1E8]">
        Skip to content
      </a>
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-9 lg:flex">
          <ul className="flex items-center gap-8">
            {links.map(([label, href]) => (
              <li key={href}>
                <a className="text-xs font-semibold uppercase tracking-[0.14em] text-[#596563] transition-colors hover:text-[#253231]" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <PrimaryButton href="#quote">Request a Quote</PrimaryButton>
        </nav>
        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-[#A99D91] [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Toggle navigation menu</span>
            <span aria-hidden="true" className="space-y-1.5 group-open:hidden">
              <span className="block h-px w-5 bg-[#253231]" />
              <span className="block h-px w-5 bg-[#253231]" />
              <span className="block h-px w-5 bg-[#253231]" />
            </span>
            <span aria-hidden="true" className="hidden text-2xl font-light leading-none group-open:block">×</span>
          </summary>
          <nav aria-label="Mobile navigation" className="absolute right-0 top-14 w-[min(20rem,calc(100vw-2.5rem))] border border-[#A99D91] bg-[#F5F1E8] p-4 shadow-[0_20px_50px_rgba(37,50,49,0.15)]">
            <ul>
              {links.map(([label, href]) => (
                <li key={href}>
                  <a className="block border-b border-[#A99D91]/45 px-3 py-4 text-sm font-semibold uppercase tracking-[0.12em]" href={href} onClick={closeMobileMenu}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#quote" onClick={closeMobileMenu} className="mt-4 inline-flex min-h-12 w-full items-center justify-center bg-[#2D5A5A] px-6 py-3 text-sm font-semibold text-[#F5F1E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2D5A5A]">
              Request a Quote
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

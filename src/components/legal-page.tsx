import type { ReactNode } from "react";
import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { Footer } from "./footer";

type LegalPageProps = {
  title: string;
  intro: string;
  effectiveDate?: string;
  children: ReactNode;
};

export function LegalPage({ title, intro, effectiveDate = "August 4, 2026", children }: LegalPageProps) {
  return (
    <>
      <header className="border-b border-[#A99D91]/60 bg-[#F5F1E8] text-[#253231]">
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:not-sr-only focus:bg-[#012765] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#F5F1E8]"
        >
          Skip to content
        </a>
        <div className="mx-auto flex min-h-20 max-w-5xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <Link
            href="/"
            aria-label="PaintSwitch home"
            className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0658FE]"
          >
            <BrandLogo className="h-12 w-auto sm:h-14" loading="eager" />
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-sm border border-[#012765] px-5 py-2 text-sm font-semibold text-[#012765] transition-colors hover:bg-[#012765] hover:text-[#F5F1E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0658FE]"
          >
            Back to website
          </Link>
        </div>
      </header>
      <main id="main-content" tabIndex={-1} className="bg-[#D1C4B8] px-5 py-14 sm:px-8 sm:py-20">
        <article className="mx-auto max-w-3xl border border-[#A99D91] bg-[#F5F1E8] p-7 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#012765]">Effective {effectiveDate}</p>
          <h1 className="font-editorial mt-5 text-4xl font-normal tracking-[-0.04em] text-[#253231] sm:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-[#596563]">{intro}</p>
          <div className="mt-10 space-y-10 text-base leading-7 text-[#3D4E4E] [&_a]:font-semibold [&_a]:text-[#012765] [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-editorial [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:tracking-[-0.03em] [&_h2]:text-[#253231] [&_li]:pl-1 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

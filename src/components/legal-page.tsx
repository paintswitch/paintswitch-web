import type { ReactNode } from "react";
import Link from "next/link";
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
      <header className="border-b border-slate-200 bg-white text-[#0F172A]">
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:not-sr-only focus:rounded-full focus:bg-[#0F172A] focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <div className="mx-auto flex min-h-20 max-w-5xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <Link href="/" aria-label="PaintSwitch home" className="text-xl font-bold tracking-tight">
            Paint<span className="text-[#0F766E]">Switch</span>
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-sm font-bold transition hover:border-slate-500 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F172A]"
          >
            Back to website
          </Link>
        </div>
      </header>
      <main id="main-content" tabIndex={-1} className="bg-slate-50 px-5 py-14 sm:px-8 sm:py-20">
        <article className="mx-auto max-w-3xl rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">Effective {effectiveDate}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#0F172A] sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{intro}</p>
          <div className="mt-10 space-y-10 text-base leading-7 text-slate-700 [&_a]:font-semibold [&_a]:text-[#0F766E] [&_a]:underline [&_a]:underline-offset-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-[#0F172A] [&_li]:pl-1 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

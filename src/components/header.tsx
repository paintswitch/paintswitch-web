import { PrimaryButton } from "./buttons";

const links = [["Home", "#home"], ["Services", "#services"], ["How It Works", "#how-it-works"], ["Reviews", "#reviews"], ["About", "#about"], ["Contact", "#contact"]];

function Logo() { return <a href="#home" aria-label="PaintSwitch home" className="flex items-center gap-2 text-xl font-bold tracking-tight"><span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2DD4BF] text-[#0F172A]">P</span><span>Paint<span className="text-[#0F766E]">Switch</span></span></a>; }

export function Header() {
  return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 text-[#0F172A] backdrop-blur">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"><Logo />
      <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex"><ul className="flex items-center gap-7">{links.map(([label, href]) => <li key={href}><a className="text-sm font-medium text-slate-600 transition hover:text-[#0F172A]" href={href}>{label}</a></li>)}</ul><PrimaryButton href="#contact">Get Free Estimate</PrimaryButton></nav>
      <details className="group relative lg:hidden"><summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-slate-300 [&::-webkit-details-marker]:hidden"><span className="sr-only">Toggle navigation menu</span><span aria-hidden="true" className="text-xl group-open:hidden">☰</span><span aria-hidden="true" className="hidden text-xl group-open:block">×</span></summary><nav aria-label="Mobile navigation" className="absolute right-0 top-14 w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"><ul>{links.map(([label, href]) => <li key={href}><a className="block rounded-xl px-4 py-3 font-medium hover:bg-slate-50" href={href}>{label}</a></li>)}</ul><PrimaryButton href="#contact" className="mt-3 w-full">Get Free Estimate</PrimaryButton></nav></details>
    </div>
  </header>;
}

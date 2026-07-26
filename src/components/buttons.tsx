import type { ReactNode } from "react";

type ButtonProps = { children: ReactNode; href: string; className?: string };

export function PrimaryButton({ children, href, className = "" }: ButtonProps) {
  return <a href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2DD4BF] px-6 py-3 text-sm font-bold text-[#0F172A] transition hover:bg-[#5EEAD4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2DD4BF] ${className}`}>{children}</a>;
}

export function SecondaryButton({ children, href, className = "" }: ButtonProps) {
  return <a href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-[#0F172A] transition hover:border-slate-500 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F172A] ${className}`}>{children}</a>;
}

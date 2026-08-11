import type { ReactNode } from "react";

type ButtonProps = { children: ReactNode; href: string; className?: string };

export function PrimaryButton({ children, href, className = "" }: ButtonProps) {
  return <a href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#012765] px-6 py-3 text-sm font-semibold tracking-[0.02em] text-[#F5F1E8] transition-colors hover:bg-[#0658FE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0658FE] ${className}`}>{children}</a>;
}

export function SecondaryButton({ children, href, className = "" }: ButtonProps) {
  return <a href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-[#012765] bg-transparent px-6 py-3 text-sm font-semibold tracking-[0.02em] text-[#012765] transition-colors hover:bg-[#012765] hover:text-[#F5F1E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0658FE] ${className}`}>{children}</a>;
}

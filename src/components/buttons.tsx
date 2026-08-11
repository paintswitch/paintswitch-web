import type { ReactNode } from "react";

type ButtonProps = { children: ReactNode; href: string; className?: string };

export function PrimaryButton({ children, href, className = "" }: ButtonProps) {
  return <a href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#2D5A5A] px-6 py-3 text-sm font-semibold tracking-[0.02em] text-[#F5F1E8] transition-colors hover:bg-[#3D4E4E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2D5A5A] ${className}`}>{children}</a>;
}

export function SecondaryButton({ children, href, className = "" }: ButtonProps) {
  return <a href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-[#3D4E4E] bg-transparent px-6 py-3 text-sm font-semibold tracking-[0.02em] text-[#253231] transition-colors hover:bg-[#3D4E4E] hover:text-[#F5F1E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3D4E4E] ${className}`}>{children}</a>;
}

import Link from "next/link";
import { BrandLogo } from "./brand-logo";

const groups = [
  { title: "Company", links: [["About", "/#about"], ["How It Works", "/#how-it-works"], ["Privacy", "/privacy"], ["Terms", "/terms"]] },
  { title: "Services", links: [["Interior", "/#services"], ["Exterior", "/#services"], ["Cabinet", "/#services"], ["Commercial", "/#services"]] },
  { title: "Contact", links: [["Request a Quote", "/#quote"], ["hello@paintswitch.com", "mailto:hello@paintswitch.com"], ["(571) 565-9491", "tel:+15715659491"]] },
];

export function Footer() {
  return (
    <footer className="bg-[#253231] px-5 py-14 text-[#F5F1E8] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-[#D1C4B8]/25 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label="PaintSwitch home"
              className="inline-flex rounded-sm bg-[#F5F1E8] p-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0658FE]"
            >
              <BrandLogo className="h-auto w-36 sm:w-40" />
            </Link>
            <p className="font-editorial mt-5 max-w-xs text-2xl leading-8 text-[#D1C4B8]">Transformation through color.</p>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D1C4B8]">{group.title}</h2>
              <ul className="mt-5 space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <a className="text-sm text-[#F5F1E8]/75 transition-colors hover:text-[#F5F1E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D1C4B8]" href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 pt-7 text-xs uppercase tracking-[0.12em] text-[#D1C4B8]/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PaintSwitch. All rights reserved.</p>
          <p>Painting for the DMV</p>
        </div>
      </div>
    </footer>
  );
}

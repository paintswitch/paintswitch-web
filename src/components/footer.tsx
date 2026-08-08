import Link from "next/link";

const groups = [
  { title: "Company", links: [["About", "/#about"], ["How It Works", "/#how-it-works"], ["Privacy", "/privacy"], ["Terms", "/terms"]] },
  { title: "Services", links: [["Interior", "/#services"], ["Exterior", "/#services"], ["Cabinet", "/#services"], ["Commercial", "/#services"]] },
  { title: "Contact", links: [["Request a Quote", "/#quote"], ["hello@paintswitch.com", "mailto:hello@paintswitch.com"]] },
];

export function Footer() {
  return (
    <footer className="bg-[#0F172A] px-5 py-14 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-2xl font-bold">Paint<span className="text-[#2DD4BF]">Switch</span></Link>
            <p className="mt-4 max-w-xs leading-7 text-slate-400">Painting. Simplified.<br />A clearer way to transform your space.</p>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={label}><a className="rounded-sm text-sm text-slate-400 transition hover:text-[#2DD4BF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2DD4BF]" href={href}>{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-7 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} PaintSwitch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

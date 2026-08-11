export type ServiceIcon = "interior" | "exterior" | "cabinet" | "commercial";

const numbers: Record<ServiceIcon, string> = { interior: "01", exterior: "02", cabinet: "03", commercial: "04" };

export function ServiceCard({ title, description, icon }: { title: string; description: string; icon: ServiceIcon }) {
  return (
    <article className="group flex min-h-72 flex-col justify-between border-t border-[#A99D91] py-7 sm:py-8">
      <div className="flex items-start justify-between gap-6">
        <span aria-hidden="true" className="font-editorial text-3xl italic text-[#2D5A5A]">{numbers[icon]}</span>
        <span aria-hidden="true" className="h-2 w-2 bg-[#2D5A5A] transition-transform duration-300 group-hover:rotate-45" />
      </div>
      <div className="pt-12">
        <h3 className="font-editorial text-3xl font-normal tracking-[-0.03em] text-[#253231]">{title}</h3>
        <p className="mt-4 max-w-sm leading-7 text-[#596563]">{description}</p>
      </div>
    </article>
  );
}

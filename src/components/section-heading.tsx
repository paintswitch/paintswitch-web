type Props = { eyebrow: string; title: string; description?: string; light?: boolean };

export function SectionHeading({ eyebrow, title, description, light = false }: Props) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-[#D1C4B8]" : "text-[#2D5A5A]"}`}>{eyebrow}</p>
      <h2 className={`font-editorial mt-5 text-4xl font-normal leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl ${light ? "text-[#F5F1E8]" : "text-[#253231]"}`}>{title}</h2>
      {description && <p className={`mt-6 max-w-2xl text-lg leading-8 ${light ? "text-[#D1C4B8]" : "text-[#3D4E4E]"}`}>{description}</p>}
    </div>
  );
}

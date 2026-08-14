const services = ["Interior", "Exterior", "Cabinets", "Commercial"];

export function TrustBar() {
  return (
    <aside aria-label="PaintSwitch DMV painting services" className="border-y border-[#A99D91]/60 bg-[#F5F1E8] px-5 sm:px-8">
      <ol className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
        {services.map((service, index) => (
          <li key={service} className="flex min-h-24 items-center gap-4 border-[#A99D91]/60 px-3 odd:border-r sm:border-r sm:last:border-r-0 sm:px-6">
            <span aria-hidden="true" className="font-editorial text-2xl italic text-[#012765]">0{index + 1}</span>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#253231]">{service}</span>
          </li>
        ))}
      </ol>
    </aside>
  );
}

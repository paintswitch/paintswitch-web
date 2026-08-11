import { SectionHeading } from "./section-heading";

const steps = [
  ["01", "Request a Quote", "Share your contact information, project location, service, and project details."],
  ["02", "Project Review", "We review your request before confirming service availability or pricing."],
  ["03", "Human Follow-Up", "A PaintSwitch team member contacts you to discuss the project and next steps."],
  ["04", "Choose Your Next Step", "Review the information provided and decide how you would like to move forward."],
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 border-y border-[#A99D91]/60 bg-[#D1C4B8] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How it works"
          title="From request to a clear next step"
          description="Every request is reviewed before PaintSwitch confirms service availability or pricing."
        />
        <ol className="mt-14 border-t border-[#3D4E4E]/45 lg:grid lg:grid-cols-4">
          {steps.map(([number, title, description]) => (
            <li key={number} className="grid grid-cols-[4rem_1fr] gap-4 border-b border-[#3D4E4E]/45 py-7 lg:block lg:min-h-80 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <span className="font-editorial text-3xl italic text-[#012765]">{number}</span>
              <div>
                <h3 className="font-editorial text-2xl font-normal tracking-[-0.03em] text-[#253231] lg:mt-16">{title}</h3>
                <p className="mt-4 leading-7 text-[#3D4E4E]">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

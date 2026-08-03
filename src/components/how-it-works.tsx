import { SectionHeading } from "./section-heading";
const steps = [
  ["01", "Request a Quote", "Share your contact information, project location, service, and project details."],
  ["02", "Project Review", "We review your request before confirming service availability or pricing."],
  ["03", "Human Follow-Up", "A PaintSwitch team member contacts you to discuss the project and next steps."],
  ["04", "Choose Your Next Step", "Review the information provided and decide how you would like to move forward."],
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-[#F1F5F9] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How it works"
          title="From request to a clear next step"
          description="Every request is reviewed before PaintSwitch confirms service availability or pricing."
        />
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, description], index) => (
            <li key={number} className="relative">
              <div className="flex items-center">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0F172A] font-mono text-sm font-bold text-[#2DD4BF]">{number}</span>
                {index < 3 && <span aria-hidden="true" className="ml-4 hidden h-px flex-1 bg-slate-300 lg:block" />}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#0F172A]">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

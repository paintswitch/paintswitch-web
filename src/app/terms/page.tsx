import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Website Terms | PaintSwitch",
  description: "Terms for the PaintSwitch lead-generation quote-request website.",
};

export default function WebsiteTerms() {
  return (
    <LegalPage
      title="Website Terms"
      intro="These terms apply to the PaintSwitch website and its lead-generation quote-request service."
    >
      <section>
        <h2>Website purpose</h2>
        <p>
          PaintSwitch accepts Virginia project requests for individual service-area review across interior, exterior, cabinet, and commercial painting. The website allows you to submit project information for review. PaintSwitch reviews each request before confirming service availability, pricing, scheduling, or any other project commitment.
        </p>
      </section>

      <section>
        <h2>Quote requests are not contracts</h2>
        <p>Submitting a quote request:</p>
        <ul>
          <li>Does not confirm that PaintSwitch serves the project location</li>
          <li>Does not provide or accept a firm price</li>
          <li>Does not schedule or book a project</li>
          <li>Does not authorize a deposit or payment</li>
          <li>Does not create a painting or service contract</li>
        </ul>
        <p>If PaintSwitch decides to proceed with a project, any later proposal or separate agreement will govern the confirmed work.</p>
      </section>

      <section>
        <h2>Adult users</h2>
        <p>You must be at least 18 years old to submit a quote request through the website.</p>
      </section>

      <section>
        <h2>Contact about your project</h2>
        <p>
          By submitting a quote request, you authorize PaintSwitch to contact you about that project using the contact information you provide. Selecting <strong>Text</strong> as your preferred contact method is only a communication preference. It is not consent to automated SMS messages. PaintSwitch does not send automated customer SMS during the beta.
        </p>
      </section>

      <section>
        <h2>Response target</h2>
        <p>
          PaintSwitch&apos;s response target is within five minutes for requests received between <strong>8:00 a.m. and 8:00 p.m. Eastern Time, daily</strong>. Requests received after hours have a response target of <strong>9:00 a.m. Eastern Time the following day</strong>.
        </p>
        <p>These are operating targets and do not guarantee an exact response time, project acceptance, availability, or booking.</p>
      </section>

      <section>
        <h2>Privacy</h2>
        <p>
          PaintSwitch handles website and quote-request information as described in the <a href="/privacy">PaintSwitch Privacy Policy</a>.
        </p>
      </section>

      <section>
        <h2>Maryland law</h2>
        <p>These terms are governed by Maryland law. They do not require mandatory arbitration or include a class-action waiver.</p>
      </section>

      <section>
        <h2>Changes to these terms</h2>
        <p>PaintSwitch may update these terms as the beta website and services change. The effective date above identifies the current version.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms may be sent to <a href="mailto:hello@paintswitch.com">hello@paintswitch.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}

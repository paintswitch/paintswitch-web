import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | PaintSwitch",
  description: "How PaintSwitch handles information submitted through its quote-request website.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains how PaintSwitch collects, uses, shares, and retains information through its lead-generation website."
      effectiveDate="August 22, 2026"
    >
      <section>
        <h2>Information we collect</h2>
        <p>When you request a quote, we collect:</p>
        <ul>
          <li>Your name, phone number, and email address</li>
          <li>Your project ZIP code or address</li>
          <li>The requested painting service and project description</li>
          <li>Your preferred contact method</li>
          <li>A website submission identifier and basic source and campaign information</li>
        </ul>
        <p>
          Our website infrastructure also processes limited technical request and IP-address information needed to operate and protect the form, including submission rate limiting.
        </p>
        <p>
          If you use the optional live chat, PaintSwitch collects the messages you send, message timestamps, and limited browser, device, visitor, and session information needed to operate and protect the chat. The approved chat widget does not ask for your name, phone number, email address, payment information, or documents. Use the separate Request a Quote form if you want PaintSwitch to review a project request.
        </p>
      </section>

      <section>
        <h2>How we use information</h2>
        <p>PaintSwitch uses this information only to:</p>
        <ul>
          <li>Review and respond to your quote request</li>
          <li>Evaluate project and service-area availability</li>
          <li>Qualify and manage the lead</li>
          <li>Contact you about the project</li>
          <li>Notify the responsible PaintSwitch team member</li>
          <li>Record basic lead-source and campaign attribution</li>
          <li>Prevent duplicate submissions, fraud, and abuse</li>
          <li>Maintain and secure the lead-delivery process</li>
          <li>Operate the optional AI-assisted live chat and review its performance</li>
        </ul>
        <p>PaintSwitch does not use beta lead information for unrelated marketing.</p>
      </section>

      <section>
        <h2>Service providers</h2>
        <p>PaintSwitch uses service providers to operate the beta website and lead process:</p>
        <ul>
          <li><strong>Vercel</strong> hosts the website and server-side lead endpoint.</li>
          <li><strong>GoHighLevel/LeadConnector</strong> stores and manages Contact and Opportunity records, operates the internal owner-notification workflow, and processes live-chat messages and AI activity.</li>
          <li><strong>Upstash</strong> provides technical lead-delivery state, duplicate protection, and rate limiting.</li>
          <li><strong>Microsoft 365</strong> supports the PaintSwitch business mailbox and internal notification delivery.</li>
          <li><strong>Google Analytics</strong> collects aggregated website traffic and usage data to help PaintSwitch understand how visitors use the site.</li>
        </ul>
        <p>These providers process information for PaintSwitch in connection with the services they provide.</p>
      </section>

      <section>
        <h2>AI-assisted live chat</h2>
        <p>
          The website chat identifies itself as Switch bot, PaintSwitch&apos;s AI assistant. It can answer basic questions using approved PaintSwitch information and direct you to the Request a Quote form or the PaintSwitch email address. It cannot provide or accept a firm price, confirm service availability, schedule or book a project, collect a payment, or create a contract.
        </p>
        <p>
          A PaintSwitch team member may review chat messages and AI activity. Chat is not a private channel for sensitive information. Do not send payment-card data, bank information, government identification numbers, medical information, account passwords, or other sensitive personal information through chat.
        </p>
        <p>
          PaintSwitch does not export chat transcripts through a transcript or summary workflow in the approved beta configuration. The separate Request a Quote form is the supported way to give PaintSwitch the contact and project details needed for human follow-up.
        </p>
      </section>

      <section>
        <h2>No sale or targeted advertising</h2>
        <p>
          PaintSwitch does not sell or rent beta lead information. PaintSwitch does not share beta lead information for targeted advertising or use it to create advertising audiences.
        </p>
      </section>

      <section>
        <h2>Retention</h2>
        <p>
          Unconverted lead records in GoHighLevel are retained for up to 12 months after the last meaningful interaction and are then deleted or anonymized.
        </p>
        <p>
          Live-chat messages that are not associated with an active project follow the same period: up to 12 months after the last meaningful interaction, followed by deletion or anonymization. PaintSwitch may delete unneeded conversations sooner. HighLevel does not publish a fixed active-account conversation-retention period, so PaintSwitch is responsible for applying this schedule.
        </p>
        <p>
          Upstash technical lead-delivery records expire after 30 days. Submission rate-limit records expire after the applicable 10-minute window.
        </p>
        <p>
          Information may be retained longer when necessary for an active project, a verified security matter, a dispute, or an applicable legal obligation.
        </p>
        <p>
          PaintSwitch also generates other limited operational records while running the website and beta, such as notification-email delivery logs and website traffic data. It keeps those records only as long as reasonably needed for the approved purposes in this policy, then deletes or anonymizes them.
        </p>
      </section>

      <section>
        <h2>Communications</h2>
        <p>
          Submitting a quote request authorizes PaintSwitch to contact you about that project using the contact information you provide. Selecting <strong>Text</strong> as a preferred contact method does not provide consent to automated SMS messages. Automated customer SMS is disabled during the beta.
        </p>
      </section>

      <section>
        <h2>Your privacy requests</h2>
        <p>
          You may ask to access, correct, or delete your information by emailing <a href="mailto:hello@paintswitch.com">hello@paintswitch.com</a>. Before acting on a request, PaintSwitch verifies that it came from the email address associated with your submission, plus one additional identifier such as your phone number or project ZIP code.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          The website sends quote requests through an encrypted connection. PaintSwitch keeps provider credentials on the server and does not expose them in customer-delivered website code. Upstash technical delivery records do not contain the raw lead-intake fields.
        </p>
        <p>No system can guarantee absolute security, but PaintSwitch limits beta data use and access to the purposes described in this policy.</p>
      </section>

      <section>
        <h2>Adults only</h2>
        <p>The PaintSwitch website and quote-request service are intended for adults age 18 or older.</p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>PaintSwitch may update this policy as the website, services, or data practices change. The effective date above identifies the current version.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For privacy questions or requests, contact <a href="mailto:hello@paintswitch.com">hello@paintswitch.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}

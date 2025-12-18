import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-3xl font-bold mb-8">AIRMANA Privacy Policy</h1>

      <div className="space-y-6 text-sm leading-relaxed">
        <p>
          AIRMANA recognises the importance of protecting the privacy and the
          rights of individuals in relation to their personal information. This
          document explains how we collect and manage your personal information.
        </p>

        <h2 className="text-xl font-semibold">What is your personal information?</h2>
        <p>
          Personal information has the meaning given to it in the Privacy Act
          1998 (Cth). It includes information that can identify you such as your
          name, address, phone number, email address, and occupation.
        </p>

        <h2 className="text-xl font-semibold">What personal information do we collect?</h2>
        <p>
          We may collect your name, address, email, phone number, date of birth,
          occupation, and any other information you provide directly or
          indirectly through our website, services, surveys, or communications.
        </p>

        <h2 className="text-xl font-semibold">How do we collect personal information?</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Through your use of our website</li>
          <li>Via phone, email, or written correspondence</li>
          <li>Through service enquiries or applications</li>
          <li>From surveys, promotions, or feedback</li>
        </ul>

        <h2 className="text-xl font-semibold">Cookies & IP addresses</h2>
        <p>
          We may use cookies and log IP addresses to analyse website usage and
          improve our services. Cookies do not collect personal information.
        </p>

        <h2 className="text-xl font-semibold">
          Why we collect and use personal information
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>To provide products and services</li>
          <li>To respond to enquiries</li>
          <li>To improve website performance</li>
          <li>For marketing and communication purposes</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-xl font-semibold">Disclosure of information</h2>
        <p>
          We may disclose personal information to employees, contractors, service
          providers, and professional advisers as required to operate our
          business.
        </p>

        <h2 className="text-xl font-semibold">Direct marketing</h2>
        <p>
          You may opt out of marketing communications at any time using the
          unsubscribe link or by contacting us directly.
        </p>

        <h2 className="text-xl font-semibold">Access and correction</h2>
        <p>
          You may request access to or correction of your personal information by
          contacting us. We may charge reasonable administrative fees where
          applicable.
        </p>

        <h2 className="text-xl font-semibold">Overseas disclosure</h2>
        <p>
          Your information may be stored on servers located outside Australia.
          We take reasonable steps to ensure overseas recipients comply with
          privacy obligations.
        </p>

        <h2 className="text-xl font-semibold">Security</h2>
        <p>
          While we take reasonable steps to protect your information, data
          transmission over the internet is at your own risk.
        </p>

        <h2 className="text-xl font-semibold">Contacting us</h2>
        <p>
          Privacy Officer: <br />
          <strong>Paul Anderson</strong><br />
          8 Electra St, Bundaberg Central QLD 4670<br />
          <a
            href="mailto:info@airmana.com.au"
            className="text-blue-600 underline"
          >
            info@airmana.com.au
          </a>
        </p>
      </div>
    </main>
  );
}

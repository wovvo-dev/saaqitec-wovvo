"use client";

import useModalStore from "../../zustand-hooks/consent-modal";
import React from "react";

const TermsAndConditionsModal = () => {
  const { setIAgree, setTermsAndConditions, openTermAndCondition } =
    useModalStore();

  if (!openTermAndCondition) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white max-w-2xl w-full max-h-[90vh] rounded-lg shadow-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Terms and Conditions
          </h2>
          <button
            onClick={() => setTermsAndConditions(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-4 text-sm text-gray-800 space-y-5 scroll-auto">
          <p className="text-base font-bold text-gray-900">WOVVO INC.</p>
          <p className="italic text-gray-600 font-bold">
            Release of Liability and Contribution Acknowledgment Agreement
            <br />
            Effective Date: April 21, 2025
            <br />
            Governing Jurisdiction: Vancouver, British Columbia, Canada
          </p>
          <hr className="" />
          <p className="font-bold">
            IMPORTANT: THIS IS A LEGALLY BINDING AGREEMENT.
          </p>
          <p className="py-1 text-sm">
            BY SUBMITTING A CONTRIBUTION TO WOVVO INC., YOU EXPRESSLY
            ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO THE TERMS
            AND CONDITIONS SET FORTH BELOW.
          </p>

          <p className="py-1 text-sm">
            This{" "}
            <strong>
              Release of Liability and Contribution Acknowledgment
            </strong>{" "}
            Agreement (“Agreement”) is entered into by and between{" "}
            <strong className="">you</strong> (“Contributor”) and{" "}
            <strong>Wovvo Inc.</strong>, a company duly incorporated under the
            laws of the <strong>Province of British Columbia, Canada,</strong>
            with its principal place of business at{" "}
            <strong>595 Burrard St., Vancouver, BC V7X 1L4</strong>, and
            operating under Business Number <strong>766819874BC0001</strong>.
            For purposes of this Agreement, “Wovvo Inc.” may also be referred to
            as “we,” “us,” “our,” or the “Company.”
          </p>
          <p className="py-1 text-sm">
            Wovvo Inc. is a brand and project operated by{" "}
            <strong>Pulse Marketing Inc</strong>., the legally registered
            corporate entity under which this initiative is developed and
            managed.{" "}
          </p>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              1. Purpose of Contribution
            </h3>
            <p className="py-1 text-sm">
              The purpose of your contribution is to voluntarily support the
              early-stage development of Wovvo Inc., a platform intended to
              serve creators of user-generated content (UGC) by aggregating and
              presenting relevant job opportunities, tools, and resources.
            </p>
            <p className="py-1 text-sm">
              You acknowledge and understand that your contribution is made
              solely for the advancement of this initiative and does{" "}
              <strong>not constitute</strong> an investment, equity purchase,
              loan, security, or donation under any federal, provincial, state,
              or international law.
            </p>
            <p>
              Your contribution <strong>does not</strong> entitle you to:
            </p>
            <ul className="list-disc ml-6 space-y-2 py-2">
              <li>
                Equity or ownership in Wovvo Inc., Pulse Marketing Inc., or any
                affiliated entity.
              </li>
              <li>Voting rights, dividends, profits, or revenue shares.</li>
              <li>
                Any claim on company assets, intellectual property, or future
                decision-making.
              </li>
            </ul>
            <p className="py-1 text-sm">
              Founding contributor status is symbolic and refers exclusively to
              early access and recognition features as outlined on the
              associated funding page. It does not confer legal or operational
              status within the Company
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              2. No Representations or Guarantees
            </h3>
            <p className="py-1 text-sm">
              Wovvo Inc. has made good faith efforts to describe its vision,
              intended functionality, proposed timelines, and community
              offerings as accurately as possible on its funding page. However,
              you expressly acknowledge that all forward-looking statements are{" "}
              <strong>aspirational and not binding</strong>, and that Wovvo Inc.
              makes <strong>no express or implied guarantees</strong> regarding:
            </p>
            <ul className="list-disc ml-6 space-y-2 py-2">
              <li>The success or market performance of the Wovvo platform.</li>
              <li>The specific timing or availability of any feature.</li>
              <li>Continued development or operation beyond current phases.</li>
              <li>
                Any economic or personal benefit to you resulting from your
                contribution.
              </li>
            </ul>
            <p className="py-1 text-sm">
              All timelines, benefits, and development roadmaps are subject to
              change, delay, or cancellation at the sole discretion of Wovvo
              Inc.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              3. Limitation of Liability and Indemnity
            </h3>
            <p className="py-1 text-sm">
              To the fullest extent permitted by applicable law, you agree to
              irrevocably waive, release, and hold harmless Wovvo Inc., Pulse
              Marketing Inc., their respective affiliates, officers, directors,
              employees, contractors, and agents from any and all claims,
              losses, liabilities, damages, expenses, or causes of
              action—whether foreseeable or unforeseeable, known or unknown,
              direct or indirect—arising from or in connection with:
            </p>
            <ul className="list-disc ml-6 space-y-2 py-2">
              <li>Your participation in the campaign.</li>
              <li>
                Your reliance on any marketing or promotional material provided
                by Wovvo Inc.
              </li>
              <li>
                Any platform delays, changes, interruptions, or discontinuation.
              </li>
              <li>
                Data handling or processing conducted via third-party payment
                providers (e.g., Stripe, Apple Pay, PayPal).
              </li>
            </ul>
            <p className="py-1 text-sm">
              You further agree to indemnify and defend Wovvo Inc. and Pulse
              Marketing Inc. from any third-party claims, liabilities, or losses
              related to your breach of this Agreement.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              4. Non-Refundable Contribution
            </h3>
            <p className="py-1 text-sm">
              All contributions made to Wovvo Inc. are considered{" "}
              <strong>final, non-cancellable, and non-refundable.</strong>{" "}
              <br />
              You understand and expressly waive any right to:
            </p>
            <ul className="list-disc ml-6 space-y-2 py-2">
              <li>Request a refund.</li>
              <li>
                Dispute the transaction through a chargeback, reversal, or bank
                dispute.
              </li>
              <li>
                Claim misrepresentation, non-delivery, or project deviation as
                grounds for monetary compensation.
              </li>
            </ul>
            <p className="py-1 text-sm">
              You will receive a formal transaction receipt from{" "}
              <strong>Stripe</strong> (or other approved third-party payment
              processor, such as Apple Pay or PayPal), issued on behalf of{" "}
              <strong>Wovvo Inc.</strong>, which may be used for your personal
              or business records. However, you acknowledge that this
              contribution is not a charitable donation and is{" "}
              <strong>not tax-deductible</strong> in Canada or the United
              States.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              5. Communications and Consent to Contact
            </h3>
            <p className="py-1 text-sm">
              By submitting your contribution, you provide full and informed
              consent to be contacted by Wovvo Inc. and Pulse Marketing Inc. for
              operational, promotional, and administrative purposes, including
              but not limited to:
            </p>
            <ul className="list-disc ml-6 space-y-2 py-2">
              <li>Confirmation of your contribution and access status.</li>
              <li>Product development updates and surveys.</li>
              <li>
                Invitations to early-access releases, events, and feedback
                sessions.
              </li>
              <li>
                Marketing content relevant to platform features and expansion.
              </li>
            </ul>
            <p className="py-1 text-sm">
              Your contact information may be stored in accordance with
              applicable privacy laws and will not be sold or transferred to
              unrelated third parties. <br />
              You may unsubscribe from non-essential communications at any time;
              however, this will not affect the validity or enforcement of this
              Agreement.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              6. No Misrepresentation of Status
            </h3>
            <p className="py-1 text-sm">
              By contributing, you agree not to falsely represent
              yourself—publicly or privately—as a company founder, partner,
              investor, or owner. The term &ldquo;Founding Creator&ldquo; refers
              only to early-stage platform supporters and{" "}
              <strong>does not</strong> imply or confer any ownership,
              governance, or employment rights.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              7. Force Majeure
            </h3>
            <p className="py-1 text-sm">
              Wovvo Inc. and its affiliates shall not be liable for any failure
              or delay in the performance of obligations under this Agreement
              due to causes beyond their reasonable control, including but not
              limited to: acts of God, natural disasters, labor disputes,
              cyberattacks, governmental orders, or outages of essential
              services and third-party platforms (e.g., Stripe, PayPal)
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              8. Dispute Resolution and Arbitration
            </h3>
            <p className="py-1 text-sm">
              Any dispute arising from or related to this Agreement shall first
              be resolved through informal discussion. If unresolved, the matter
              shall be settled by <strong>binding arbitration</strong> conducted
              in <strong>Vancouver, British Columbia</strong>, in accordance
              with the rules of the{" "}
              <strong>
                British Columbia International Commercial Arbitration Centre
                (BCICAC).
              </strong>
              You waive your right to participate in a class action or jury
              trial and agree that any dispute will be resolved individually.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              9. Governing Law and Jurisdiction
            </h3>
            <p className="py-1 text-sm">
              This Agreement shall be governed by and interpreted in accordance
              with the laws of the <strong>Province of British Columbia</strong>{" "}
              and the <strong>federal laws of Canada</strong> applicable
              therein. Any judicial proceedings shall be brought exclusively
              before the courts of <strong>Vancouver, BC</strong>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              10. Age of Majority
            </h3>
            <p className="py-1 text-sm">
              By accepting this Agreement, you confirm that you are at least{" "}
              <strong>18 years of age</strong>, or the age of majority in your
              jurisdiction, and legally competent to enter into binding
              agreements
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              11. Severability
            </h3>
            <p className="py-1 text-sm">
              If any provision of this Agreement is held to be invalid or
              unenforceable, that provision shall be modified only to the extent
              necessary to make it enforceable, and all remaining provisions
              shall remain in full force and effect.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              12. Entire Agreement
            </h3>
            <p className="py-1 text-sm">
              This document constitutes the <strong>entire agreement</strong>{" "}
              between you and Wovvo Inc. with respect to your contribution and
              supersedes all prior communications, discussions, or
              representations, whether oral or written.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              13. Acknowledgment and Acceptance
            </h3>
            <p className="py-1 text-sm">
              By clicking “I Agree” and submitting your contribution, you affirm
              that you have read, understood, and voluntarily accepted the terms
              and conditions of this Agreement in full. If you do not agree to
              these terms, do not proceed with your contribution.
            </p>
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-end px-6 py-4 border-t border-gray-200">
          <button
            onClick={() => {
              setIAgree(true);
              setTermsAndConditions(false);
            }}
            className="text-white bg-primary hover:bg-primary-dark font-medium rounded-lg text-sm px-5 py-2.5"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsModal;

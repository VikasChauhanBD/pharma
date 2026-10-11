import React from "react";
import CancellationPolicy from "../components/policies/CancellationPolicy";
import { Helmet } from "react-helmet";

function CancellationPolicyPage() {
  return (
    <div>
      <Helmet>
        <title>Cancellation & Refund Policy | Pharmacology by Dr. GRG</title>

        <meta
          name="description"
          content="Review the Cancellation & Refund Policy of Pharmacology by Dr. GRG for details on cancellations, refund eligibility, rescheduling, exceptions and payment issues."
        />
      </Helmet>

      <CancellationPolicy />
    </div>
  );
}

export default CancellationPolicyPage;

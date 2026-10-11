import React from "react";
import TermsAndConditions from "../components/policies/TermsAndConditions";
import { Helmet } from "react-helmet";

function TermsAndConditionsPage() {
  return (
    <div>
      <Helmet>
        <title>Terms and Conditions | Pharmacology by Dr. GRG</title>

        <meta
          name="description"
          content="Read the Terms and Conditions of Pharmacology by Dr. GRG to understand account rules, subscriptions, payments, refunds, content usage and user responsibilities."
        />
      </Helmet>

      <TermsAndConditions />
    </div>
  );
}

export default TermsAndConditionsPage;

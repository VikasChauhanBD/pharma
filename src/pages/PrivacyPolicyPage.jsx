import React from "react";
import PrivacyPolicy from "../components/policies/PrivacyPolicy";
import { Helmet } from "react-helmet";

function PrivacyPolicyPage() {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy | Pharmacology by Dr. GRG</title>

        <meta
          name="description"
          content="Learn about the Privacy Policy of Pharmacology by Dr. GRG, including user data protection, account security, and policies for using our website and app."
        />
      </Helmet>

      <PrivacyPolicy />
    </div>
  );
}

export default PrivacyPolicyPage;

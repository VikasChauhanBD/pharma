import React from "react";
import DevicePolicy from "../components/policies/DevicePolicy";
import { Helmet } from "react-helmet";

function DevicePolicyPage() {
  return (
    <div>
      <Helmet>
        <title>Device & Fair Usage Policy | Pharmacology by Dr. GRG</title>

        <meta
          name="description"
          content="Understand the Device & Fair Usage Policy of Pharmacology by Dr. GRG, including device limits, app access, account security, session rules and content protection."
        />
      </Helmet>

      <DevicePolicy />
    </div>
  );
}

export default DevicePolicyPage;

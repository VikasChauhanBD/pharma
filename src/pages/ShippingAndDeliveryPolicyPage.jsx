import React from "react";
import ShippingAndDeliveryPolicy from "../components/policies/ShippingAndDeliveryPolicy";
import { Helmet } from "react-helmet";

function ShippingAndDeliveryPolicyPage() {
  return (
    <div>
      <Helmet>
        <title>Shipping & Delivery Policy | Pharmacology by Dr. GRG</title>

        <meta
          name="description"
          content="Read the Shipping & Delivery Policy of Pharmacology by Dr. GRG for shipping charges, delivery timelines, order tracking, damaged items and return-related support."
        />
      </Helmet>

      <ShippingAndDeliveryPolicy />
    </div>
  );
}

export default ShippingAndDeliveryPolicyPage;

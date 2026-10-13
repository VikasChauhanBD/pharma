import React from "react";
import ContactUs from "../components/contact/ContactUs";
import { Helmet } from "react-helmet";

function ContactPage() {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Pharmacology by Dr. GRG</title>

        <meta
          name="description"
          content="Contact Pharmacology by Dr. GRG for course enquiries, app support, payment assistance, workbook delivery, privacy queries and student support."
        />
      </Helmet>

      <ContactUs />
    </div>
  );
}

export default ContactPage;

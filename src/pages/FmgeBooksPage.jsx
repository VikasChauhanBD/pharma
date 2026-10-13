import React from "react";
import FmgeBooksHeader from "../components/fmge/books/fmgeBooksHeader/FmgeBooksHeader";
import FmgeBooksDetails from "../components/fmge/books/fmgeBooksDetails/FmgeBooksDetails";
import FmgeBooksExperience from "../components/fmge/books/fmgeBooksExperience/FmgeBooksExperience";
import { Helmet } from "react-helmet";

function FmgeBooksPage() {
  return (
    <div>
      <Helmet>
        <title>
          Best Pharmacology Books for FMGE Exam | Pharmacology by Dr. GRG
        </title>

        <meta
          name="description"
          content="Explore the best Pharmacology books for FMGE focused content by Dr. GRG, featuring concept-based learning, efficient revision for exam preparation."
        />
      </Helmet>

      <FmgeBooksHeader />
      <FmgeBooksDetails />
      <FmgeBooksExperience />
    </div>
  );
}

export default FmgeBooksPage;

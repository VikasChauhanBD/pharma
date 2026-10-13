import React from "react";
import FmgePlansHeader from "../components/fmge/plans/fmgePlansHeader/FmgePlansHeader";
import FmgePlansFeature from "../components/fmge/plans/fmgePlansFeature/FmgePlansFeature";
import FmgePlansShowcase from "../components/fmge/plans/fmgePlansShowcase/FmgePlansShowcase";
import PlanCTA from "../components/fmge/plans/planCTA/PlanCTA";
import { Helmet } from "react-helmet";

function FmgePlansPage() {
  return (
    <div>
      <Helmet>
        <title>FMGE Course Plans | Pharmacology by Dr. GRG</title>

        <meta
          name="description"
          content="Explore FMGE course plans for Pharmacology preparation by Dr. GRG with live sessions, concept-based learning, exam-focused discussions & doubt-solving."
        />
      </Helmet>

      <FmgePlansHeader />
      <FmgePlansFeature />
      <FmgePlansShowcase />
      <PlanCTA />
    </div>
  );
}

export default FmgePlansPage;

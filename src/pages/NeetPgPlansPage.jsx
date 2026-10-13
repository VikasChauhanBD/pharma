import React from "react";
import PgPlansHeader from "../components/neet-pg/plans/pgPlansHeader/PgPlansHeader";
import PgPlansFeature from "../components/neet-pg/plans/pgPlansFeature/PgPlansFeature";
import PgPlansShowcase from "../components/neet-pg/plans/pgPlansShowcase/PgPlansShowcase";
import PlanCTA from "../components/neet-pg/plans/planCTA/PlanCTA";
import { Helmet } from "react-helmet";

function NeetPgPlansPage() {
  return (
    <div>
      <Helmet>
        <title>NEET PG Course Plans | Pharmacology by Dr. GRG</title>

        <meta
          name="description"
          content="Explore NEET PG course plans by Dr. GRG with live sessions, master classes, revision modules, question banks & GOGA tests for Pharmacology preparation."
        />
      </Helmet>

      <PgPlansHeader />
      <PgPlansFeature />
      <PgPlansShowcase />
      <PlanCTA />
    </div>
  );
}

export default NeetPgPlansPage;

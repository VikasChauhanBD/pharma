import React from "react";
import PgBooksHeader from "../components/neet-pg/books/pgBooksHeader/PgBooksHeader";
import PgBooksDetails from "../components/neet-pg/books/pgBooksDetails/PgBooksDetails";
import PgBooksExperience from "../components/neet-pg/books/pgBooksExperience/PgBooksExperience";
import { Helmet } from "react-helmet";

function NeetPgBooksPage() {
  return (
    <div>
      <Helmet>
        <title>
          Best Pharmacology Books for NEET PG & INI-CET Exam | Pharmacology by
          Dr. GRG
        </title>

        <meta
          name="description"
          content="Explore the best Pharmacology books by Dr. Garg to build a strong Pharmacology foundation for NEET PG & INI-CET preparation with focused revision."
        />
      </Helmet>

      <PgBooksHeader />
      <PgBooksDetails />
      <PgBooksExperience />
    </div>
  );
}

export default NeetPgBooksPage;

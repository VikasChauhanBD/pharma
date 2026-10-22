import React from "react";
import AppDownload from "../components/appdownload/AppDownload";
import { Helmet } from "react-helmet";

function AppDownloadPage() {
  return (
    <div>
      <Helmet>
        <title>Download App | Pharmacology by Dr.GRG</title>

        <meta
          name="description"
          content="Download App to master Pharmacology with Dr. GRG through concept-based learning, effective revision and exam-focused preparation for NEET PG,INICET and FMGE."
        />
      </Helmet>

      <AppDownload />
    </div>
  );
}

export default AppDownloadPage;

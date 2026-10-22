import React from "react";
import "./AppDownload.css";
import appleStoreBadge from "../../assets/images/app.png";
import googlePlayBadge from "../../assets/images/ps1.png";

const AppDownload = () => {
  return (
    <section className="app-download">
      <div className="app-download__content">
        <h1 className="app-download__title">
          Go from Pharmacophobia to Pharmacophilia!
        </h1>

        <p className="app-download__para">
          Master Pharmacology with Dr. GRG! Understand concepts, remember
          high-yield topics and apply your knowledge with a complete
          Pharmacology learning and revision ecosystem for NEET PG, INI-CET and
          FMGE aspirants.
        </p>

        <h6>
          Download now and make Pharmacology easier to learn, revise and recall.
        </h6>

        <span>Available on Android | Coming Soon on iOS</span>

        <div className="app-download__buttons">
          <a
            href="https://play.google.com/store/apps/details?id=com.pharmacologybydrgrg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
          >
            <img src={googlePlayBadge} alt="Get it on Google Play" />
          </a>

          {/* <a
            href="https://apps.apple.com/in/app/corebtr/id6760164235"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
          >
            <img src={appleStoreBadge} alt="Download on the App Store" />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default AppDownload;

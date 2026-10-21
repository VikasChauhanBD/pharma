import React, { useEffect, useState } from "react";
import "./PharmacologyHeader.css";
import AppStore from "../../../../assets/images//app.png";
import PlayStore from "../../../../assets/images/ps1.png";

const BG_IMAGE =
  "https://cdn.dribbble.com/userupload/49285896/file/55d25155713c2efd5948c4ec66d31371.png";
const IMAGE_ONE =
  "https://cdn.dribbble.com/userupload/49285897/file/c00840d79aab446b1e1d734986dac634.png";
const IMAGE_TWO =
  "https://cdn.dribbble.com/userupload/49286602/file/bbd41eeb3129cbcaeccbf870f93dc859.png";

const INTRO_DURATION = 2000; // how long the first content stays visible
const FADE_DURATION = 700; // fade-out time of the first content

export default function PharmacologyHeader() {
  // "intro" -> "exit" (fading out) -> "main" (slides in)
  const [stage, setStage] = useState("intro");

  useEffect(() => {
    const exitTimer = setTimeout(() => setStage("exit"), INTRO_DURATION);
    const mainTimer = setTimeout(
      () => setStage("main"),
      INTRO_DURATION + FADE_DURATION,
    );
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(mainTimer);
    };
  }, []);

  const scrollToVideo = () => {
    const section = document.getElementById("experience-teaching");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className="fmge-pharma-header"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      <div className="fmge-pharma-header-overlay" />

      {stage !== "main" && (
        <div
          className={
            stage === "exit"
              ? "fmge-pharma-intro fmge-pharma-intro-exit"
              : "fmge-pharma-intro fmge-pharma-intro-enter"
          }
        >
          <div className="fmge-pharma-intro-text">
            <p className="fmge-pharma-welcome">Welcome To</p>
            <h1 className="fmge-pharma-intro-title">Pharmacology by Dr. GRG</h1>
            <p className="fmge-pharma-exams">NEET PG | INICET | FMGE</p>
            <p className="fmge-pharma-powered">Powered by eConceptual</p>
          </div>
          <img
            className="fmge-pharma-intro-image"
            src={IMAGE_ONE}
            alt="Pharmacology by Dr. GRG app preview"
          />
        </div>
      )}

      {stage === "main" && (
        <div className="fmge-pharma-main">
          <div className="fmge-pharma-main-text">
            <p className="fmge-pharma-main-exams">FMGE</p>
            <h1 className="fmge-pharma-main-title">
              Pharmacology By Dr. Gobind Rai Garg
            </h1>
            <p className="fmge-pharma-powered">Powered by eConceptual</p>
            <h2 className="fmge-pharma-tagline">
              From Pharmacophobia To{" "}
              <span className="fmge-pharma-highlight">Pharmacophilia</span>
            </h2>
            <p className="fmge-pharma-desc">
              <b>Understand</b> the concept. <b>Remember</b> what matters.{" "}
              <b>Apply</b> it when it counts.
              <br />
              <br />A complete Pharmacology learning and revision ecosystem for{" "}
              <b>FMGE</b>
            </p>
            <div className="fmge-pharma-cta-row">
              <button
                type="button"
                className="fmge-pharma-btn fmge-pharma-cta-1"
                onClick={scrollToVideo}
              >
                Watch a Sample Class →
              </button>
              <a
                className="fmge-pharma-btn fmge-pharma-cta-2"
                href="https://learn.pharmacologybydrgrg.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pre-Book Now →
              </a>
            </div>

            {/* <h3 className="fmge-pharma-app">App is LIVE</h3>
            <div className="fmge-pharma-store">
              <a
                href="https://apps.apple.com/in/app/corebtr/id6760164235"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={AppStore} alt="Download on App Store" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.corebtr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={PlayStore} alt="Get it on Google Play" />
              </a>
            </div> */}
          </div>

          <div className="fmge-pharma-main-image-wrap">
            <img
              className="fmge-pharma-main-image"
              src={IMAGE_TWO}
              alt="Dr. Gobind Rai Garg"
            />
          </div>
        </div>
      )}
    </header>
  );
}

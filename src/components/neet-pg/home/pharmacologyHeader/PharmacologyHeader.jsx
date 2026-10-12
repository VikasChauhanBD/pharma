import React, { useEffect, useState } from "react";
import "./PharmacologyHeader.css";

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
      className="pg-pharma-header"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      <div className="pg-pharma-header-overlay" />

      {stage !== "main" && (
        <div
          className={
            stage === "exit"
              ? "pg-pharma-intro pg-pharma-intro-exit"
              : "pg-pharma-intro pg-pharma-intro-enter"
          }
        >
          <div className="pg-pharma-intro-text">
            <p className="pg-pharma-welcome">Welcome To</p>
            <h1 className="pg-pharma-intro-title">Pharmacology by Dr. GRG</h1>
            <p className="pg-pharma-exams">NEET PG | INICET | FMGE</p>
            <p className="pg-pharma-powered">Powered by eConceptual</p>
          </div>
          <img
            className="pg-pharma-intro-image"
            src={IMAGE_ONE}
            alt="Pharmacology by Dr. GRG app preview"
          />
        </div>
      )}

      {stage === "main" && (
        <div className="pg-pharma-main">
          <div className="pg-pharma-main-text">
            <p className="pg-pharma-main-exams">NEET PG | INI CET</p>
            <h1 className="pg-pharma-main-title">
              Pharmacology By Dr. Gobind Rai Garg
            </h1>
            <p className="pg-pharma-powered">Powered by eConceptual</p>
            <h2 className="pg-pharma-tagline">
              From Pharmacophobia To{" "}
              <span className="pg-pharma-highlight">Pharmacophilia</span>
            </h2>
            <p className="pg-pharma-desc">
              <b>Understand</b> the concept. <b>Remember</b> what matters.{" "}
              <b>Apply</b> it when it counts.
              <br />
              <br />A complete Pharmacology learning and revision ecosystem for{" "}
              <b>NEET PG | INI CET</b>
            </p>
            <div className="pg-pharma-cta-row">
              <button
                type="button"
                className="pg-pharma-btn pg-pharma-cta-1"
                onClick={scrollToVideo}
              >
                Watch a Sample Class →
              </button>
              <a
                className="pg-pharma-btn pg-pharma-cta-2"
                href="https://learn.pharmacologybydrgrg.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pre-Book Now →
              </a>
            </div>
          </div>

          <div className="pg-pharma-main-image-wrap">
            <img
              className="pg-pharma-main-image"
              src={IMAGE_TWO}
              alt="Dr. Gobind Rai Garg"
            />
          </div>
        </div>
      )}
    </header>
  );
}

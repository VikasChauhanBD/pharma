import React from "react";
import AboutHero from "../components/about/aboutHero/AboutHero";
import ThePerson from "../components/about/thePerson/ThePerson";
import AboutTimeline from "../components/about/aboutTimeline/AboutTimeline";
import { Helmet } from "react-helmet";

function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>About Us | Pharmacology by Dr. GRG</title>

        <meta
          name="description"
          content="Discover about us @pharmacologybydrgrg & join to learn how Dr. Garg simplifies pharmacology through concepts, clinical examples and digital learning."
        />
      </Helmet>

      <AboutHero />
      <ThePerson />
      <AboutTimeline />
    </div>
  );
}
export default AboutPage;

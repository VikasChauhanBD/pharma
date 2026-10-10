import React from "react";
import IntroSection from "../components/about/IntroSection.jsx";
function AboutPage() {
  return (
    <div className="about-page">
      <IntroSection showCta={false} showFullContent />
    </div>
  );
}
export default AboutPage;

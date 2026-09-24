import React, { useEffect, useRef } from "react";
import "./HeroSection.css";
import gsap from "gsap";

function HeroSection() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Initial states
      gsap.set(headingRef.current, {
        y: 70,
        opacity: 0,
      });

      gsap.set(subHeadingRef.current, {
        y: 35,
        opacity: 0,
      });

      // Hero animation
      tl.to(heroRef.current, {
        opacity: 1,
        duration: 0.5,
      })
        .to(
          headingRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          "-=0.2",
        )
        .to(
          subHeadingRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.5",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-container" ref={heroRef} id="home">
      <video
        className="hero-background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://cdn.dribbble.com/userupload/49117125/file/7ad9bf57473f6fad669b1132870e1eb4.mp4"
          type="video/mp4"
        />
      </video>

      <h1 className="hero-heading" ref={headingRef}>
        Welcome To Pharmacology
      </h1>

      <h2 className="hero-sub-heading" ref={subHeadingRef}>
        By Dr. Gobind Rai Garg
      </h2>
    </section>
  );
}

export default HeroSection;

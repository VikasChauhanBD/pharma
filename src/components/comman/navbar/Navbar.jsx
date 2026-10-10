import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../../assets/images/grg.jpeg";
import gsap from "gsap";
function Navbar() {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const desktopMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navbarRef.current,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
      );
      gsap.fromTo(
        logoRef.current,
        {
          scale: 0.7,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          delay: 0.2,
          ease: "back.out(1.7)",
        },
      );
      gsap.fromTo(
        desktopMenuRef.current,
        {
          x: 40,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.3,
          ease: "power3.out",
        },
      );
    }, navbarRef);
    return () => ctx.revert();
  }, []);
  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (menuOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
      });
      gsap.fromTo(
        menuItemsRef.current,
        {
          y: -15,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.08,
          delay: 0.1,
          ease: "power2.out",
        },
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [menuOpen]);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="navbar-container" ref={navbarRef}>
      {/* Navbar Top */}
      <div className="navbar-inner">
        {/* Logo */}
        <div className="navbar-logo" ref={logoRef}>
          <a href="/" onClick={closeMenu}>
            <img src={Logo} alt="GRG Logo" />
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="navbar-content navbar-desktop" ref={desktopMenuRef}>
          <a href="/">Home</a>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        {/* Hamburger */}
        <button
          className={`navbar-hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {/* Mobile Menu - OUTSIDE navbar-inner */}
      <div className="navbar-mobile-wrapper" ref={mobileMenuRef}>
        <div className="navbar-mobile">
          <div ref={(el) => (menuItemsRef.current[0] = el)}>
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </div>
          <div ref={(el) => (menuItemsRef.current[1] = el)}>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </div>
          <div ref={(el) => (menuItemsRef.current[2] = el)}>
            <a href="#why-we" onClick={closeMenu}>
              Why We
            </a>
          </div>
          <div ref={(el) => (menuItemsRef.current[3] = el)}>
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
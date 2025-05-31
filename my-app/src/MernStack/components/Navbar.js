// src/components/Navbar.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
  const [hoverProduct, setHoverProduct] = useState(false);
  const [hoverSupport, setHoverSupport] = useState(false);

  const navbarRef = useRef(null);
  const productMenuRef = useRef(null);
  const supportMenuRef = useRef(null);

  // Animate navbar on mount
  useEffect(() => {
    gsap.from(navbarRef.current, {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "power2.out",
    });
  }, []);

  // Animate Product dropdown
  useEffect(() => {
    if (hoverProduct) {
      gsap.fromTo(productMenuRef.current,
        { autoAlpha: 0, y: -10 },
        { autoAlpha: 1, y: 0, duration: 0.3 }
      );
    }
  }, [hoverProduct]);

  // Animate Support dropdown
  useEffect(() => {
    if (hoverSupport) {
      gsap.fromTo(supportMenuRef.current,
        { autoAlpha: 0, y: -10 },
        { autoAlpha: 1, y: 0, duration: 0.3 }
      );
    }
  }, [hoverSupport]);

  return (
    <nav ref={navbarRef}>
      <div className="navbar-left">
        <Link to="/Home" className='Solutionz'><h1>G&B Solutionz</h1></Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/template">Template</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>

        <li
          onMouseEnter={() => setHoverProduct(true)}
          onMouseLeave={() => setHoverProduct(false)}
        >
          Product
          {hoverProduct && (
            <ul className="dropdown" ref={productMenuRef}>
              <li><Link to="/website-builder"><h1>Website Builder</h1></Link></li>
              <h3>Build Professional website within a minutes</h3>
              <li><Link to="/e-commerce-website-builder"><h1>E-Commerce Website Builder</h1></Link></li>
              <h3>Easily Set-up your offline shop on online platform</h3>
              <li><Link to="/buy-domain"><h1>Buy Domain</h1></Link></li>
              <h3>Connect with simple Domain Setup</h3>
            </ul>
          )}
        </li>

        <li
          onMouseEnter={() => setHoverSupport(true)}
          onMouseLeave={() => setHoverSupport(false)}
        >
          Support
          {hoverSupport && (
            <ul className="dropdown" ref={supportMenuRef}>
              <li><Link to="/contact-us"><h1>Contact Us</h1></Link></li>
              <h3>Find Answer to your Questions</h3>
              <li><Link to="/help-center"><h1>Help Center</h1></Link></li>
              <h3>Our Support team is here for you</h3>
            </ul>
          )}
        </li>
      </ul>

      <div className="auth-actions">
        <li><Link to="/signin" className='SignIn'>Sign In</Link></li>
        <div className="get-started-btn">
          <Link to="/signUp"><button className='Get-S'>Get Started</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

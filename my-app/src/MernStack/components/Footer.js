import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import gsap from 'gsap';
import Image9 from './Template_images/m9.jpg'; // Import your image for payment options

function Footer() {
  const f1Ref = useRef(null);
  const f2Ref = useRef(null);
  const f3Ref = useRef(null);
  const papalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animating F1 section
      gsap.from(f1Ref.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
      });

      // Animating F2 section (Product, Company, Other Pages)
      gsap.from(f2Ref.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        delay: 0.3,
      });

      // Animating F3 section (Social Media & Footer Info)
      gsap.from(f3Ref.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.out',
        delay: 0.8,
      });

      // Animating Image with a scale-up effect
      gsap.from(papalRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 1,
        ease: 'back.out(1.7)',
      });
    });

    return () => ctx.revert(); // Clean up the animations
  }, []);

  return (
    <div className='Footer'>
      {/* F1 Section */}
      <div className='F1' ref={f1Ref}>
        <div className='Pt1'>
          <h1>Create a Beautiful Website. It's Easier than you Think.</h1>
          <p>G&B empowers you to create a Professional site, even with no coding experience</p>
          <Link to="/signUp">
            <button className='btn7'>Get Started</button>
          </Link>
        </div>
      </div>

      {/* F2 Section */}
      <div className='F2' ref={f2Ref}>
        <div className='Pt1'>
          <h4>G&B Solutionz</h4>
          <p>G&B is a platform where users can create and develop their own high-quality websites. Whether you're advertising your company, displaying your work, opening an online store, or beginning a blog — you can do it all here.</p>
        </div>
        <div className='Pt2'>
          <div className='hdg'>
            <h5>Product</h5>
          </div>
          <div className='lks'>
            <Link to="/Website-Builder">Website Builder</Link>
            <Link to="/e-commerce-website-builder">E-Commerce Builder</Link>
            <Link to="/blog">Blog Builder</Link>
            <Link to="/buy-domain">Domains</Link>
            <Link to="/busemail">Business Email</Link>
          </div>
        </div>
        <div className='Pt3'>
          <div className='hdg'>
            <h5>Company</h5>
          </div>
          <div className='lks'>
            <Link to="/about">About G&B Solutionz</Link>
            <Link to="/join">Join Affiliate</Link>
            <Link to="/use">Terms of Use</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
        <div className='Pt4'>
          <div className='hdg'>
            <h5>Other Pages</h5>
          </div>
          <div className='lks'>
            <Link to="/pricing">Pricing</Link>
            <Link to="/help-center">Help Center</Link>
            <Link to="/contact-us">Contact</Link>
            <Link to="/blogs">Blogs</Link>
          </div>
        </div>
      </div>

      {/* F3 Section */}
      <div className='F3' ref={f3Ref}>
        <span>© 2018-2025, G&B Solutionz Pvt Ltd</span>
        <main>Made in Pakistan</main>
      </div>

      {/* Payment Options Image */}
      <div className='papal' ref={papalRef}>
        <img src={Image9} alt='Payment Options' />
      </div>
    </div>
  );
}

export default Footer;

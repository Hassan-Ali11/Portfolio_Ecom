import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../CSS-files/ContactUs.css'; // Optional: your styles
import Image9 from './Template_images/m9.jpg'; // Unused but kept for reference

const ContactUs = () => {
  const part1Ref = useRef(null);
  const part2Ref = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Part1 (heading and input)
      gsap.from(part1Ref.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power2.out',
      });

      // Animate Part2 (paragraph)
      gsap.from(part2Ref.current, {
        opacity: 0,
        x: -40,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
      });

      // Animate each box in Part3
      gsap.from(boxRefs.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.6,
      });
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div className='ContactUs'>
      <div className='Part1' ref={part1Ref}>
        <span>Help Center</span>
        <main>Contact Us</main>
        <input placeholder='What do you need help with?' className='input' />
      </div>

      <div className='Part2' ref={part2Ref}>
        <h1>We're here to help 24/7</h1>
        <p>Our Experts can help you every step of the way, from building a great website to setting up your entire online presence.</p>
      </div>

      <div className='Part3'>
        <div className='Box-1' ref={el => boxRefs.current[0] = el}>
          <h3>Call Us</h3>
          <p>Get in touch with our top-notch</p>
          <pre>Support team</pre>
          <span>+91 11 42478041</span>
          <h4>Monday-Saturday: 10:00 AM - 6:30 PM</h4>
          <h5>Note:</h5>
          <main>Support hours are in Pakistan Standard Time (PST)</main>
          <h6>Some Major Pakistani Festivals may be observed as office holidays</h6>
        </div>

        <div className='Box-2' ref={el => boxRefs.current[1] = el}>
          <h3>24/7 Support</h3>
          <p>Chat with us for fast assistance with product problems, your account and other inquiries</p>
          <div className='whatsapp'>
            <h4>WhatsApp</h4>
            <h5>Email</h5>
          </div>
        </div>

        <div className='Box-3' ref={el => boxRefs.current[2] = el}>
          <h3>Office Address</h3>
          <p>814-15, 9th floor, DHA Phase 4, Lahore</p>
          <h2>Get Direction</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

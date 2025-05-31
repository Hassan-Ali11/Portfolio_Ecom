// import React from 'react'
// import Img1 from './img/m43.jpeg';
// function About() {
//   return (
//     <div className='About'>      
//     <div className='Pat1'>
//       <h2>What we're all about</h2>
//     </div>
//     <div className='Pat2'>
//     <div className='side1'>
//       <h5>About Us</h5>
//       <h2>When and why was G&B Solutionz Created?</h2>
//       <p>G&B Solutionz, part of Solutionz Corporation founded in January 2018, is a Made in India website and eCommerce builder. Since its inception, G&B Solutionz has evolved into a leading platform for website development, offering the latest features and capabilities to help anyone create a professional website easily.</p>
//     </div>
//     <div className='side2'>
//       <img src={Img1} alt='About image1 is not working' />
//     </div>
//     </div>
//     <div className='Pat3'>
//       <h3>Make your own professional web presence the way you want it</h3>
//       <p>Our cutting-edge technology enables anyone to go online and establish a personalized, professional web presence. Whether you're an amateur or an experienced person, you'll find the features and solutions that you need to create a professional website with complete creative freedom.</p>
//     </div>
//     </div>
//   )
// }

// export default About












import React, { useEffect } from 'react';
import { gsap } from 'gsap'; // Import GSAP
import Img1 from './img/m43.jpeg'; // Import Image

function About() {
  
  // GSAP Animation Logic
  useEffect(() => {
    // Fade in animation for the whole page content
    gsap.from('.Pat1 h2', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.Pat2 .side1', { opacity: 0, x: -100, duration: 1 });
    gsap.from('.Pat2 .side2 img', { opacity: 0, x: 100, duration: 1 });
    gsap.from('.Pat3 h3', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('.Pat3 p', { opacity: 0, y: 50, duration: 1, delay: 1 });

    // Scroll-based animation
    gsap.from('.Pat2', {
      scrollTrigger: {
        trigger: '.Pat2',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });

  }, []);

  return (
    <div className='About'>
      {/* Section 1 */}
      <div className='Pat1'>
        <h2>What we're all about</h2>
      </div>

      {/* Section 2 */}
      <div className='Pat2'>
        <div className='side1'>
          <h5>About Us</h5>
          <h2>When and why was G&B Solutionz Created?</h2>
          <p>
            G&B Solutionz, part of Solutionz Corporation founded in January 2018, is a Made in India website and eCommerce builder.
            Since its inception, G&B Solutionz has evolved into a leading platform for website development, offering the latest features and capabilities to help anyone create a professional website easily.
          </p>
        </div>
        <div className='side2'>
          <img src={Img1} alt='About image1 is not working' />
        </div>
      </div>

      {/* Section 3 */}
      <div className='Pat3'>
        <h3>Make your own professional web presence the way you want it</h3>
        <p>
          Our cutting-edge technology enables anyone to go online and establish a personalized, professional web presence.
          Whether you're an amateur or an experienced person, you'll find the features and solutions that you need to create a professional website with complete creative freedom.
        </p>
      </div>
    </div>
  );
}

export default About;

// // src/components/HelpUs.js
// import React from 'react';
// import Image9 from './Template_images/m9.jpg'
// import Footer from './Footer';
// const HelpC = () => {
//   return (
//     <div className='HelpC'>
//     <div className='Upper'>
//       <h1>G&B Solutionz Support Center</h1>
//       <input placeholder='What do you need help with?' className='Input'/>
//     </div>
//     <div className='Middle'>
//       <div className='P1'>
//         <div className='B1'>
//           <h1>Start with G&B Solutionz</h1>
//           <p>Getting Start with G&B Solutionz</p>
//           <h3>Creating More Than one G&B Solutionz A..</h3>
//           <h4>Sign Up at G&B Solutionz</h4>
//           <button className='P1-B1'>Show All</button>
//         </div>
//         <div className='B2'>
//           <h1>Domain</h1>
//           <p>Free Trial Vs Premium</p>
//           <h3>Subdomain Overview</h3>
//           <h4>Key Features Of A Domain</h4>
//           <button className='P1-B2'>Show All</button>
//         </div>
//         <div className='B3'>
//           <h1>Billing and Payments</h1>
//           <p>How can I download and save invo...</p>
//           <h3>Bussiness and E-Commerce Premium Plans</h3>
//           <h4>View Your Premium Plans</h4>
//           <button className='P1-B3'>Show All</button>
//         </div>
//       </div>
//       <div className='P2'>
//         <div className='B1'>
//           <h1>G&B Solutionz Paid Plans</h1>
//           <p>Upgrading to Premium</p>
//           <h3>Premium Plans Refund Policy</h3>
//           <h4>G&B Solutionz Basic website Plan Overview</h4>
//           <button className='P2-B1'>Show All</button>
//         </div>
//         <div className='B2'>
//           <h1>Managing Your Site</h1>
//           <p>Changing Your Free Trial G&B Solutionz...</p>
//           <h3>Main Dashboard</h3>
//           <h4>Site Actions</h4>
//           <button className='P2-B2'>Show All</button>
//         </div>
//         <div className='B3'>
//           <h1>Managing Your Accounts</h1>
//           <p>Finding Your G&B Solutionz Username </p>
//           <h3>Changing Your G&B Solutionz Accounts Name</h3>
//           <h4>Changing Your G&B Solutionz Password</h4>
//           <button className='P2-B3'>Show All</button>
//         </div>
//       </div>
//       <div className='P3'>
//         <div className='B1'>
//           <h1>website Builder</h1>
//           <p>Getting Started with the website...</p>
//           <h3>How to create a website at G&B Solutionz...</h3>
//           <h4>Previewing Your website</h4>
//           <button className='P3-B1'>Show All</button>
//         </div>
//         <div className='B2'>
//           <h1>SEO</h1>
//           <p>How to Connects Google Analytics...</p>
//           <h3>How to change Page's Meta Descrip...</h3>
//           <h4>How to Change the Title tage of Y...</h4>
//           <button className='P3-B2'>Show All</button>
//         </div>
//         <div className='B3'>
//           <h1>Contacts and Forms</h1>
//           <p>Accessing Your Contact list</p>
//           <h3>Editing Your Contacts</h3>
//           <button className='P3-B3'>Show All</button>
//         </div>
//       </div>
//       <div className='P4'>
//         <div className='B1'>
//           <h1>G&B Solutionz Automations</h1>
//            <p>G&B Solutionz Automations Overview</p>
//           <h3>Accessing Your G&B Solutionz Automations...</h3>
//           <h4>G&B Solutionz Automations Structure</h4>
//           <button className='P4-B1'>Show All</button>
//         </div>
//         <div className='B2'>
//           <h1>Bussiness E-mails</h1>
//           <p>How to Buy Bussiness E-mails AT G&B...</p>
//           <button className='P4-B2'>Show All</button>
//         </div>
//         <div className='B3'>
//           <h1>E-Commerce Builder</h1>
//           <p>Add and Setup a Popup/Light</p>
//           <h3>How to Create an E-Commerce websit...</h3>
//           <h4>How to Add a new Collection to Y...</h4>
//           <button className='P4-B3'>Show All</button>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default HelpC;













// src/components/HelpUs.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image9 from './Template_images/m9.jpg';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const HelpC = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Animate header
    gsap.from('.Upper', {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    // Animate each section on scroll
    gsap.utils.toArray(['.P1', '.P2', '.P3', '.P4']).forEach((panel, i) => {
      gsap.from(panel, {
        scrollTrigger: {
          trigger: panel,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power2.out',
      });
    });

    // Animate each box inside sections
    gsap.utils.toArray('.B1, .B2, .B3').forEach((box) => {
      gsap.from(box, {
        scrollTrigger: {
          trigger: box,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power1.out',
      });
    });
  }, []);

  return (
    <div className='HelpC' ref={containerRef}>
      <div className='Upper'>
        <h1>G&B Solutionz Support Center</h1>
        <input placeholder='What do you need help with?' className='Input' />
      </div>
      <div className='Middle'>
        <div className='P1'>
          <div className='B1'>
            <h1>Start with G&B Solutionz</h1>
            <p>Getting Start with G&B Solutionz</p>
            <h3>Creating More Than one G&B Solutionz A..</h3>
            <h4>Sign Up at G&B Solutionz</h4>
            <button className='P1-B1'>Show All</button>
          </div>
          <div className='B2'>
            <h1>Domain</h1>
            <p>Free Trial Vs Premium</p>
            <h3>Subdomain Overview</h3>
            <h4>Key Features Of A Domain</h4>
            <button className='P1-B2'>Show All</button>
          </div>
          <div className='B3'>
            <h1>Billing and Payments</h1>
            <p>How can I download and save invo...</p>
            <h3>Bussiness and E-Commerce Premium Plans</h3>
            <h4>View Your Premium Plans</h4>
            <button className='P1-B3'>Show All</button>
          </div>
        </div>

        <div className='P2'>
          <div className='B1'>
            <h1>G&B Solutionz Paid Plans</h1>
            <p>Upgrading to Premium</p>
            <h3>Premium Plans Refund Policy</h3>
            <h4>G&B Solutionz Basic website Plan Overview</h4>
            <button className='P2-B1'>Show All</button>
          </div>
          <div className='B2'>
            <h1>Managing Your Site</h1>
            <p>Changing Your Free Trial G&B Solutionz...</p>
            <h3>Main Dashboard</h3>
            <h4>Site Actions</h4>
            <button className='P2-B2'>Show All</button>
          </div>
          <div className='B3'>
            <h1>Managing Your Accounts</h1>
            <p>Finding Your G&B Solutionz Username </p>
            <h3>Changing Your G&B Solutionz Accounts Name</h3>
            <h4>Changing Your G&B Solutionz Password</h4>
            <button className='P2-B3'>Show All</button>
          </div>
        </div>

        <div className='P3'>
          <div className='B1'>
            <h1>website Builder</h1>
            <p>Getting Started with the website...</p>
            <h3>How to create a website at G&B Solutionz...</h3>
            <h4>Previewing Your website</h4>
            <button className='P3-B1'>Show All</button>
          </div>
          <div className='B2'>
            <h1>SEO</h1>
            <p>How to Connects Google Analytics...</p>
            <h3>How to change Page's Meta Descrip...</h3>
            <h4>How to Change the Title tage of Y...</h4>
            <button className='P3-B2'>Show All</button>
          </div>
          <div className='B3'>
            <h1>Contacts and Forms</h1>
            <p>Accessing Your Contact list</p>
            <h3>Editing Your Contacts</h3>
            <button className='P3-B3'>Show All</button>
          </div>
        </div>

        <div className='P4'>
          <div className='B1'>
            <h1>G&B Solutionz Automations</h1>
            <p>G&B Solutionz Automations Overview</p>
            <h3>Accessing Your G&B Solutionz Automations...</h3>
            <h4>G&B Solutionz Automations Structure</h4>
            <button className='P4-B1'>Show All</button>
          </div>
          <div className='B2'>
            <h1>Bussiness E-mails</h1>
            <p>How to Buy Bussiness E-mails AT G&B...</p>
            <button className='P4-B2'>Show All</button>
          </div>
          <div className='B3'>
            <h1>E-Commerce Builder</h1>
            <p>Add and Setup a Popup/Light</p>
            <h3>How to Create an E-Commerce websit...</h3>
            <h4>How to Add a new Collection to Y...</h4>
            <button className='P4-B3'>Show All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpC;

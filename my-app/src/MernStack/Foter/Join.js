import React from 'react'
import { Link } from 'react-router'
import ig1 from './img/m27.jpg'
function Join() {
  return (
    <div className='Join'>
        <div className='Pat1'>
          <div className='Side1'><img src={ig1} alt='image 27 is not working' /></div>
          <div className='Side2'>
        <h1>BECOME A G&B AFFILIATE</h1>
        <h2>Make money with G&B Affiliate Program</h2>
        <p>Get Your Unique Affiliate Link and Start Earning.Content Creator, Course Educator,influencers and 
        view Sites are helping their audience launch successful Bussinesson G&B Solutionz They earn Competative
       referrels Commission and elevate themselves as leader in the industry</p>
        <Link to="/signUp"><button className='join-btn1'>Join Affiliate</button></Link>
          </div>
        </div>
        <div className='Pat2'>
        <div className='p1'>
          <h1>15 Days Free Trials</h1>
          <p>Try our Builder For 15 Days without any payment information</p>
        </div>
        <div className='p2'>
          <h1>24/7 Call Support</h1>
          <p>Our Experts will Provide unhindered anytime you want</p>
        </div>
        <div className='p3'>
          <h1>MoneyBack Gurentee</h1>
          <p>Try G&B Solutionz For 15 Days and if you'r are not satisfied,get your money back</p>
        </div>
        </div>
    </div>
  )
}

export default Join









// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { gsap } from 'gsap'; // Import GSAP for animations
// import Footer from '../components/Footer';
// import ig1 from './img/m27.jpg';

// function Join() {
//   useEffect(() => {
//     // GSAP animation for page load
//     gsap.from('.Pat1', {
//       opacity: 0,
//       x: -200,
//       duration: 1.5,
//       ease: 'power2.out',
//     });

//     gsap.from('.Pat2', {
//       opacity: 0,
//       y: 100,
//       duration: 1.5,
//       ease: 'power2.out',
//       delay: 0.5, // Delay to make the second part appear after the first
//     });

//     gsap.from('.join-btn1', {
//       opacity: 0,
//       y: 20,
//       duration: 1,
//       delay: 1,
//       ease: 'power2.out',
//     });

//     gsap.from('.Side1 img', {
//       opacity: 0,
//       scale: 0.5,
//       duration: 1.5,
//       ease: 'power2.out',
//       delay: 0.5,
//     });
//   }, []);

//   return (
//     <div className='Join'>
//       <div className='Pat1'>
//         <div className='Side1'>
//           <img src={ig1} alt='image 27 is not working' />
//         </div>
//         <div className='Side2'>
//           <h1>BECOME A G&B AFFILIATE</h1>
//           <h2>Make money with G&B Affiliate Program</h2>
//           <p>Get Your Unique Affiliate Link and Start Earning. Content Creators, Course Educators, Influencers, and View Sites are helping their audience launch successful businesses on G&B Solutionz. They earn competitive referral commissions and elevate themselves as leaders in the industry.</p>
//           <Link to="/signUp">
//             <button className='join-btn1'>Join Affiliate</button>
//           </Link>
//         </div>
//       </div>
//       <div className='Pat2'>
//         <div className='p1'>
//           <h1>15 Days Free Trials</h1>
//           <p>Try our Builder For 15 Days without any payment information</p>
//         </div>
//         <div className='p2'>
//           <h1>24/7 Call Support</h1>
//           <p>Our Experts will provide unhindered support anytime you need it</p>
//         </div>
//         <div className='p3'>
//           <h1>Money-Back Guarantee</h1>
//           <p>Try G&B Solutionz For 15 Days and if you're not satisfied, get your money back</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Join;

// import React from 'react'
// import { Link } from 'react-router';
// import Imge1 from './img/m28.jpg'
// import Imge2 from './img/m29.avif'
// import Imge3 from './img/m30.avif'
// import Imge4 from './img/m31.webp'
// import Imge5 from './img/m32.avif'
// import Imge6 from './img/m33.jpg'
// import Imge7 from './img/m34.webp'
// import Imge8 from './img/m35.png'
// import Imge9 from './img/m36.jpeg'
// import Imge10 from './img/m37.png'

// import Footer from '../components/Footer';
// function BusEmail() {
//   return (
//     <div className='BusEmail'>
//       <div className='Prt1'>
//       <div className='Sid1'>
//       <img src={Imge1} alt='Image 28 is not working' />
//       </div>
//       <div className='Sid2'>
//       <h1>G&B Bussiness Email</h1>
//       <h2>Get a Professional Email address for your Bussiness</h2>
//       <p>Maintain a Professional image for your Bussiness by Using Email Accounts with your own domain name</p>
//       <Link to="/signUp"><button className='Email-btn1'>Get Now</button></Link>
//       </div>
//       </div>
//       <div className='Prt2'>
//         <h2>Benefits of Bussiness Email</h2>
//         <p>Creating bussiness Email for your company can provide you with numerous advantages.</p>
//       </div>
//       <div className='Prt3'>
//         <div className='Boxes1'>
//           <div className='Box1'>
//             <img src={Imge2} alt='Imge2 is not working' />
//             <h4>Private Labeled Email</h4>
//             <h5>Email that are toiled to your domain name</h5>
//           </div>
//           <div className='Box2'>
//             <img src={Imge3} alt='Imge2 is not working' />
//             <h4>Private Labeled Email</h4>
//             <h5>Plan your appointments from anywhere, at anytime</h5>
//           </div>
//           <div className='Box3'>
//             <img src={Imge4} alt='Imge2 is not working' />
//             <h4>Private Labeled Email</h4>
//             <h5>POP3/IMAP Email synchronization for better experience</h5>
//           </div>
//           <div className='Box4'>
//             <img src={Imge5} alt='Imge2 is not working' />
//             <h4>Private Labeled Email</h4>
//             <h5>Protect your company's Email from cyber attacks</h5>
//           </div>
//           <div className='Box5'>
//             <img src={Imge6} alt='Imge2 is not working' />
//             <h4>Private Labeled Email</h4>
//             <h5>Each Bussiness Email mailbox has plenty of space</h5>
//           </div>
//         </div>
//         <div className='Boxes2'>
//         <div className='Box1'>
//           <img src={Imge7} alt='Imge2 is not working' />
//             <h4>Private Labeled Email</h4>
//             <h5>Not Concern about running out of storage capacity</h5>
//         </div>
//         <div className='Box2'>
//           <img src={Imge8} alt='Imge2 is not working' />
//             <h4>Private Labeled Email</h4>
//             <h5>Get top-of-the-line assistance from our support team</h5>
//         </div>
//         <div className='Box3'>
//           <img src={Imge9} alt='Imge2 is not working' />
//             <h4>Private Labeled Email</h4>
//             <h5>Protect Email with a digital certificate of your own</h5>
//         </div>
//         <div className='Box4'>
//           <img src={Imge10} alt='Imge2 is not working' />
//             <h4>Private Labeled Email</h4>
//             <h5>Get highly reliable & streamlined Email for your bussiness</h5>
//         </div>
//         <div className='Box5'>
//           {/* <img src={Imge11} alt='Imge2 is not working' /> */}
//             <h4>Private Labeled Email</h4>
//             <h5>Set up pre-written automatic Email replies for recipients</h5>
//         </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BusEmail





















import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';  // Updated to 'react-router-dom'
import Imge1 from './img/m28.jpg'
import Imge2 from './img/m29.avif'
import Imge3 from './img/m30.avif'
import Imge4 from './img/m31.webp'
import Imge5 from './img/m32.avif'
import Imge6 from './img/m33.jpg'
import Imge7 from './img/m34.webp'
import Imge8 from './img/m35.png'
import Imge9 from './img/m36.jpeg'
import Imge10 from './img/m37.png'
import Footer from '../components/Footer';
import { gsap } from 'gsap';  // Import GSAP

function BusEmail() {

  useEffect(() => {
    // GSAP animations on page load
    gsap.from('.Prt1', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.Sid1 img', { opacity: 0, scale: 0.8, duration: 1, delay: 0.2 });
    gsap.from('.Sid2', { opacity: 0, y: 50, duration: 1, delay: 0.4 });
    gsap.from('.Email-btn1', { opacity: 0, scale: 0.5, duration: 1, delay: 0.6 });

    gsap.from('.Prt2', { opacity: 0, y: 50, duration: 1, delay: 0.8 });
    gsap.from('.Boxes1 .Box1', { opacity: 0, x: -100, duration: 1, stagger: 0.3 });
    gsap.from('.Boxes2 .Box1', { opacity: 0, x: 100, duration: 1, stagger: 0.3, delay: 1 });
  }, []);

  return (
    <div className='BusEmail'>
      <div className='Prt1'>
        <div className='Sid1'>
          <img src={Imge1} alt='Image 28 is not working' />
        </div>
        <div className='Sid2'>
          <h1>G&B Bussiness Email</h1>
          <h2>Get a Professional Email address for your Bussiness</h2>
          <p>Maintain a Professional image for your Bussiness by Using Email Accounts with your own domain name</p>
          <Link to="/signUp">
            <button className='Email-btn1'>Get Now</button>
          </Link>
        </div>
      </div>

      <div className='Prt2'>
        <h2>Benefits of Bussiness Email</h2>
        <p>Creating bussiness Email for your company can provide you with numerous advantages.</p>
      </div>

      <div className='Prt3'>
        <div className='Boxes1'>
          <div className='Box1'>
            <img src={Imge2} alt='Imge2 is not working' />
            <h4>Private Labeled Email</h4>
            <h5>Email that are toiled to your domain name</h5>
          </div>
          <div className='Box2'>
            <img src={Imge3} alt='Imge2 is not working' />
            <h4>Private Labeled Email</h4>
            <h5>Plan your appointments from anywhere, at anytime</h5>
          </div>
          <div className='Box3'>
            <img src={Imge4} alt='Imge2 is not working' />
            <h4>Private Labeled Email</h4>
            <h5>POP3/IMAP Email synchronization for better experience</h5>
          </div>
          <div className='Box4'>
            <img src={Imge5} alt='Imge2 is not working' />
            <h4>Private Labeled Email</h4>
            <h5>Protect your company's Email from cyber attacks</h5>
          </div>
          <div className='Box5'>
            <img src={Imge6} alt='Imge2 is not working' />
            <h4>Private Labeled Email</h4>
            <h5>Each Bussiness Email mailbox has plenty of space</h5>
          </div>
        </div>
        <div className='Boxes2'>
          <div className='Box1'>
            <img src={Imge7} alt='Imge2 is not working' />
            <h4>Private Labeled Email</h4>
            <h5>Not Concern about running out of storage capacity</h5>
          </div>
          <div className='Box2'>
            <img src={Imge8} alt='Imge2 is not working' />
            <h4>Private Labeled Email</h4>
            <h5>Get top-of-the-line assistance from our support team</h5>
          </div>
          <div className='Box3'>
            <img src={Imge9} alt='Imge2 is not working' />
            <h4>Private Labeled Email</h4>
            <h5>Protect Email with a digital certificate of your own</h5>
          </div>
          <div className='Box4'>
            <img src={Imge10} alt='Imge2 is not working' />
            <h4>Private Labeled Email</h4>
            <h5>Get highly reliable & streamlined Email for your bussiness</h5>
          </div>
          <div className='Box5'>
            {/* <img src={Imge11} alt='Imge2 is not working' /> */}
            <h4>Private Labeled Email</h4>
            <h5>Set up pre-written automatic Email replies for recipients</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusEmail;

// import React from 'react'
// import { Link } from 'react-router'
// import Image9 from './Template_images/m9.jpg'
// function Domain() {
//   return (
//     <div className='Domain'>
//         <div className='Part-1'>
//             <h1>Find Domain Name For Your</h1>
//             <h2>Bussiness</h2>
//             <input placeholder='Enter Your Domain Name' className='pla-hol'/>
//             <div className='Category'>
//             <h3>.COM at £1199*</h3>
//             <h4>.IN at £649*</h4>
//             <h5>.ORG at £1277*</h5>
//             <h6>.NET at £1349*</h6>
//             </div>
//         </div>
//         <div className='Boxes'>
//         <div className='Box-P1'>
//             <div className='Box1'>
//                 <h2>.COM</h2>
//                 <div className='Price1'>
//                 <h4>1199*</h4>
//                 <h5>1449</h5></div>
//                 <main>REGISTER NOW</main>
//             </div>
//             <div className='Box2'>
//                 <h2>.IN</h2>
//                 <div className='Price1'>
//                 <h4>649*</h4>
//                 <h5>699</h5></div>
//                 <main>REGISTER NOW</main>
//             </div>
//             <div className='Box3'>
//                 <h2>.ORG</h2>
//                 <div className='Price1'>
//                 <h4>1277*</h4>
//                 <h5>1399</h5></div>
//                 <main>REGISTER NOW</main>
//             </div>
//             </div>
//             <div className='Box-P2'>
//             <div className='Box1'><h2>.NET</h2>
//                 <div className='Price1'>
//                 <h4>1349*</h4>
//                 <h5>1500</h5></div>
//                 <main>REGISTER NOW</main>
//             </div>
//             <div className='Box2'><h2>.CO</h2>
//                 <div className='Price1'>
//                 <h4>2599*</h4>
//                 <h5>1699</h5></div>
//                 <main>REGISTER NOW</main></div>
//             <div className='Box3'><h2>.CO.IN</h2>
//                 <div className='Price1'>
//                 <h4>550*</h4>
//                 <h5>649</h5></div>
//                 <main>REGISTER NOW</main></div>
//             </div>
//             <div className='Box-P3'>
//             <div className='Box1'>
//                 <h2>.BIZ</h2>
//                 <div className='Price1'>
//                 <h4>1699*</h4>
//                 <h5>1799</h5></div>
//                 <main>REGISTER NOW</main>
//             </div>
//             <div className='Box2'>
//                 <h2>.INFO</h2>
//                 <div className='Price1'>
//                 <h4>1799*</h4>
//                 <h5>1999</h5></div>
//                 <main>REGISTER NOW</main>
//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Domain












import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image9 from './Template_images/m9.jpg'; // Optional
import '../CSS-files/Domain.css'; // ✅ Corrected import

function Domain() {
  const headingRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(boxesRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className='Domain'>
      <div className='Part-1' ref={headingRef}>
        <h1>Find Domain Name For Your</h1>
        <h2>Business</h2>
        <input placeholder='Enter Your Domain Name' className='pla-hol' />
        <div className='Category'>
          <h3>.COM at £1199*</h3>
          <h4>.IN at £649*</h4>
          <h5>.ORG at £1277*</h5>
          <h6>.NET at £1349*</h6>
        </div>
      </div>

      <div className='Boxes'>
        {/* Box-P1 */}
        <div className='Box-P1'>
          {[
            { name: '.COM', price: '1199*', old: '1449' },
            { name: '.IN', price: '649*', old: '699' },
            { name: '.ORG', price: '1277*', old: '1399' },
          ].map((domain, index) => (
            <div
              className={`Box${index + 1}`}
              key={index}
              ref={(el) => (boxesRef.current[index] = el)}
            >
              <h2>{domain.name}</h2>
              <div className='Price1'>
                <h4>{domain.price}</h4>
                <h5>{domain.old}</h5>
              </div>
              <main>REGISTER NOW</main>
            </div>
          ))}
        </div>

        {/* Box-P2 */}
        <div className='Box-P2'>
          {[
            { name: '.NET', price: '1349*', old: '1500' },
            { name: '.CO', price: '2599*', old: '1699' },
            { name: '.CO.IN', price: '550*', old: '649' },
          ].map((domain, index) => (
            <div
              className={`Box${index + 1}`}
              key={index + 3}
              ref={(el) => (boxesRef.current[index + 3] = el)}
            >
              <h2>{domain.name}</h2>
              <div className='Price1'>
                <h4>{domain.price}</h4>
                <h5>{domain.old}</h5>
              </div>
              <main>REGISTER NOW</main>
            </div>
          ))}
        </div>

        {/* Box-P3 */}
        <div className='Box-P3'>
          {[
            { name: '.BIZ', price: '1699*', old: '1799' },
            { name: '.INFO', price: '1799*', old: '1999' },
          ].map((domain, index) => (
            <div
              className={`Box${index + 1}`}
              key={index + 6}
              ref={(el) => (boxesRef.current[index + 6] = el)}
            >
              <h2>{domain.name}</h2>
              <div className='Price1'>
                <h4>{domain.price}</h4>
                <h5>{domain.old}</h5>
              </div>
              <main>REGISTER NOW</main>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Domain;

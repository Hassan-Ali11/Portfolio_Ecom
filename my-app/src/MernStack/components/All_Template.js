import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import Img1 from './Template_images/m18.avif';
import Img2 from './Template_images/m53.avif';
import Img3 from './Template_images/m19.avif';
import Img4 from './Template_images/m21.avif';
import Img5 from './Template_images/m51.jpg';
import Img6 from './Template_images/m52.jpg';
import Img7 from './Template_images/m54.avif';
import Img8 from './Template_images/m55.avif';
import Img9 from './Template_images/m56.avif';
import Img10 from './Template_images/m57.avif';
import Img11 from './Template_images/m88.avif';
import Img12 from './Template_images/m89.avif';
import Img13 from './Template_images/m61.avif';
import Img14 from './Template_images/m60.avif';
import Img15 from './Template_images/n10.jpg';
import Img16 from './Template_images/n11.jpg';
import Img17 from './Template_images/n9.jpg';
import Img18 from './Template_images/m62.webp';
import Img19 from './Template_images/m66.webp';
import Img20 from './Template_images/m67.jpg';

function All_Template() {
  const categoryImages = {
    "All Templates": [
      Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,
      Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20
    ],
    "Animal Care & Services": [Img1, Img2],
    "Architecture": [Img3, Img4],
    "Restaurants": [Img5, Img6],
    "Gaming Shop": [Img7, Img8],
    "Gym & Spa": [Img9, Img10],
    "Manufacture And Supply": [Img11, Img12],
    "Property And Estate": [Img13, Img14],
    "Travel": [Img15, Img16],
    "Health Care": [Img17, Img18],
    "Wedding": [Img19, Img20]
  };

  const [selectedCategory, setSelectedCategory] = useState('All Templates');
  const allImages = categoryImages['All Templates'];

  return (
    <div className='Container'>
      <div className='Part1'>
        <h1>Website Templates</h1>
        <h4>Find Your Website Template. What's the purpose of Your Website?</h4>
        <Link to="/signUp"><button className='btn'>Try For Free</button></Link>
      </div>

      <div className='Part2'>
        <div className='Sides'>
          <div className='Side1'>
            <ul>
              {Object.keys(categoryImages).map((category) => (
                <li key={category} onClick={() => setSelectedCategory(category)}>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className='Side2'>
            {categoryImages[selectedCategory].map((image, index) => {
              const realIndex = allImages.indexOf(image);
              return (
                <Link to={`/template/${realIndex}`} key={index}>
                  <img src={image} alt={`Template ${realIndex}`} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default All_Template;
















// import { Link } from 'react-router-dom';
// import React, { useState, useEffect, useRef } from 'react';
// import gsap from 'gsap';

// // Image Imports
// import Img1 from './Template_images/m1.jpeg';
// import Img2 from './Template_images/m2.webp';
// import Img3 from './Template_images/m3.webp';
// import Img4 from './Template_images/m6.webp';
// import Img5 from './Template_images/m7.jpg';
// import Img6 from './Template_images/m8.jpeg';
// import Img7 from './Template_images/m9.jpg';
// import Img8 from './Template_images/m58.webp';
// import Img9 from './Template_images/m11.jpg';
// import Img10 from './Template_images/m12.jpeg';
// import Img11 from './Template_images/m13.jpg';
// import Img12 from './Template_images/m14.jpeg';
// import Img13 from './Template_images/m15.png';
// import Img14 from './Template_images/m16.png';
// import Img15 from './Template_images/m17.jpeg';
// import Img16 from './Template_images/m23.webp';
// import Img17 from './Template_images/m24.png';
// import Img18 from './Template_images/m26.avif';
// import Img19 from './Template_images/m4.avif';
// import Img20 from './Template_images/m5.avif';

// function All_Template() {
//   const categoryImages = {
//     "All Templates": [
//       Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,
//       Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20
//     ],
//     "Animal Care & Services": [Img1, Img2],
//     "Architecture": [Img3, Img4],
//     "Restaurants": [Img5, Img6],
//     "Gaming Shop": [Img7, Img8],
//     "Gym & Spa": [Img9, Img10],
//     "Manufacture And Supply": [Img11, Img12],
//     "Property And Estate": [Img13, Img14],
//     "Travel": [Img15, Img16],
//     "Health Care": [Img17, Img18],
//     "Wedding": [Img19, Img20]
//   };

//   const [selectedCategory, setSelectedCategory] = useState('All Templates');
//   const allImages = categoryImages['All Templates'];

//   const part1Ref = useRef(null);
//   const categoryRef = useRef(null);
//   const imagesRef = useRef([]);

//   // Initial animation for header and sidebar
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(part1Ref.current, {
//         y: -40,
//         opacity: 0,
//         duration: 1,
//         ease: 'power2.out'
//       });

//       gsap.from(categoryRef.current.children, {
//         x: -30,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: 'power2.out'
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   // Animate images when category changes
//   useEffect(() => {
//     imagesRef.current = []; // clear refs on category change

//     const ctx = gsap.context(() => {
//       gsap.from(imagesRef.current, {
//         opacity: 0,
//         y: 30,
//         scale: 0.95,
//         duration: 0.6,
//         stagger: 0.1,
//         ease: 'power2.out'
//       });
//     });

//     return () => ctx.revert();
//   }, [selectedCategory]);

//   return (
//     <div className='Container'>
//       <div className='Part1' ref={part1Ref}>
//         <h1>Website Templates</h1>
//         <h4>Find Your Website Template. What's the purpose of Your Website?</h4>
//         <Link to="/signUp"><button className='btn'>Try For Free</button></Link>
//       </div>

//       <div className='Part2'>
//         <div className='Sides'>
//           <div className='Side1'>
//             <ul ref={categoryRef}>
//               {Object.keys(categoryImages).map((category) => (
//                 <li
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   style={{
//                     cursor: 'pointer',
//                     fontWeight: selectedCategory === category ? 'bold' : 'normal'
//                   }}
//                 >
//                   {category}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className='Side2'>
//             {categoryImages[selectedCategory].map((image, index) => {
//               const realIndex = allImages.indexOf(image);
//               return (
//                 <Link to={`/template/${realIndex}`} key={index}>
//                   <img
//                     ref={(el) => (imagesRef.current[index] = el)}
//                     src={image}
//                     alt={`Template ${realIndex}`}
//                     style={{ width: '200px', margin: '10px', borderRadius: '6px' }}
//                   />
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default All_Template;

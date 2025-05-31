import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import templates from './templateData'; // Assumes only 4 templates exist in this file

function All_Temp_details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedTemplateIndex = parseInt(id);

  const [activeTab, setActiveTab] = useState('features');
  const [selectedTemplate, setSelectedTemplate] = useState(templates[selectedTemplateIndex]);

  useEffect(() => {
    if (templates[selectedTemplateIndex]) {
      setSelectedTemplate(templates[selectedTemplateIndex]);
    }
  }, [selectedTemplateIndex]);

  const handleImageClick = (index) => {
    setActiveTab('features');
    navigate(`/template/${index}`);
  };

  return (
    <div className='All_Temp_details'>
      {/* Top Section: Image + Info */}
      <div className='Row1'>
        <div className='Itm1'>
          <img src={selectedTemplate.image} alt='Main Img' />
        </div>
        <div className='Itm2'>
          <h4>{selectedTemplate.title}</h4>
          <p>by <Link to="/Home">{selectedTemplate.developer}</Link></p>
          <span>{selectedTemplate.description}</span>
        </div>
      </div>

      {/* Tab Section */}
      <div className='Row2'>
        <ul>
          <li
            onClick={() => setActiveTab('features')}
            style={{ cursor: 'pointer', fontWeight: activeTab === 'features' ? 'bold' : 'normal' }}
          >
            Features
          </li>
          <li
            onClick={() => setActiveTab('reviews')}
            style={{ cursor: 'pointer', fontWeight: activeTab === 'reviews' ? 'bold' : 'normal' }}
          >
            Reviews
          </li>
        </ul>
        <div className='TabContent'>
          {activeTab === 'features' && (
            <div>
              <p>The new standard in customizability and speed. Here's how you can start using JoonWeb:</p>
              <p>Special Features</p>
              <p>Media Variant</p>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div>
              <p>No reviews yet. Using this theme? Let us know what you think.</p>
              <button><Link to="/Signin">Write your review</Link></button>
            </div>
          )}
        </div>
      </div>

      {/* Link back to all templates */}
      <div className='Row3'>
        <h5>Informative website Templates</h5>
        <button><Link to="/All_Template">View</Link></button>
      </div>

      {/* Bottom Row with 4 Thumbnails */}
      <div className='Row4'>
        {templates.slice(0, 4).map((temp, index) => (
          <img
            key={index}
            src={temp.image}
            alt={`Template ${index}`}
            onClick={() => handleImageClick(index)}
            style={{
              cursor: 'pointer',
              border: index === selectedTemplateIndex ? '2px solid black' : 'none',
              margin: '5px',
              width: '100px',
              height: 'auto'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default All_Temp_details;












// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import templates from './templateData';
// import gsap from 'gsap';

// function All_Temp_details() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const selectedTemplateIndex = parseInt(id);

//   const [activeTab, setActiveTab] = useState('features');
//   const [selectedTemplate, setSelectedTemplate] = useState(templates[selectedTemplateIndex]);

//   // Refs for animation targets
//   const row1Ref = useRef(null);
//   const row2Ref = useRef(null);
//   const row4Ref = useRef(null);

//   useEffect(() => {
//     if (templates[selectedTemplateIndex]) {
//       setSelectedTemplate(templates[selectedTemplateIndex]);
//     }
//   }, [selectedTemplateIndex]);

//   // Animation on mount and template change
//   useEffect(() => {
//     gsap.fromTo(row1Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.7 });
//     gsap.fromTo(row2Ref.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.3 });
//     gsap.fromTo(row4Ref.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1 });
//   }, [selectedTemplateIndex]);

//   const handleImageClick = (index) => {
//     setActiveTab('features');
//     navigate(`/template/${index}`);
//   };

//   return (
//     <div className='All_Temp_details'>
//       {/* Top Section */}
//       <div className='Row1' ref={row1Ref}>
//         <div className='Itm1'>
//           <img src={selectedTemplate.image} alt='Main Img' />
//         </div>
//         <div className='Itm2'>
//           <h4>{selectedTemplate.title}</h4>
//           <p>by <Link to="/Home">{selectedTemplate.developer}</Link></p>
//           <span>{selectedTemplate.description}</span>
//         </div>
//       </div>

//       {/* Tab Section */}
//       <div className='Row2' ref={row2Ref}>
//         <ul>
//           <li
//             onClick={() => setActiveTab('features')}
//             style={{ cursor: 'pointer', fontWeight: activeTab === 'features' ? 'bold' : 'normal' }}
//           >
//             Features
//           </li>
//           <li
//             onClick={() => setActiveTab('reviews')}
//             style={{ cursor: 'pointer', fontWeight: activeTab === 'reviews' ? 'bold' : 'normal' }}
//           >
//             Reviews
//           </li>
//         </ul>
//         <div className='TabContent'>
//           {activeTab === 'features' && (
//             <div>
//               <p>The new standard in customizability and speed. Here's how you can start using JoonWeb:</p>
//               <p>Special Features</p>
//               <p>Media Variant</p>
//             </div>
//           )}
//           {activeTab === 'reviews' && (
//             <div>
//               <p>No reviews yet. Using this theme? Let us know what you think.</p>
//               <button><Link to="/Signin">Write your review</Link></button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Link Back */}
//       <div className='Row3'>
//         <h5>Informative website Templates</h5>
//         <button><Link to="/All_Template">View</Link></button>
//       </div>

//       {/* Thumbnails */}
//       <div className='Row4' ref={row4Ref}>
//         {templates.slice(0, 4).map((temp, index) => (
//           <img
//             key={index}
//             src={temp.image}
//             alt={`Template ${index}`}
//             onClick={() => handleImageClick(index)}
//             style={{
//               cursor: 'pointer',
//               border: index === selectedTemplateIndex ? '2px solid black' : 'none',
//               margin: '5px',
//               width: '100px',
//               height: 'auto'
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default All_Temp_details;

import React, { useState } from 'react';
import { Link } from 'react-router';
import Img1 from './img/n1.jpg';
import Img2 from './img/m99.avif';
import Img3 from './img/m100.jpg';
import Img4 from './img/n3.avif';
import Img5 from './img/n2.jpg';
import Img6 from './img/n8.avif';
// import Img7 from './img/m6.webp';
// import Img8 from './img/m7.jpg';
import Img9 from './img/n4.avif';
import Img10 from './img/n5.avif';
import Img11 from './img/n6.avif';
import Img12 from './img/n7.avif';
const additionalFaq = [
  { question: 'How easy is it to create a website at G&B.com?',
     answer: 'Users rate it Easiest. G&B.com offers you an easiest way to create your own website. Here your unique ideas can be best-fitted in your website in most real and reliable way.' },
  { question: 'Is coding required to create a website?',
     answer: 'if you do know coding, that will surely help you in adding extra functionality to your site.' },
  { question: 'How do I optimize my site for SEO?',
     answer: 'if you want your desired domain address and eyeing to appear in Google or any other search result with keywords' },
  { question: 'Can I create a free website with a custom domain?',
     answer: 'You can create a free website with G&B domain. For more professional look and quick online searchable results' },
  { question: 'Will hosting cost extra?',
     answer: 'Abosolutely Not. When you create a website with G&B.com, you get reliable free web hosting. Here at servers provided by G&B.Com your web content will be stored on secure servers located around the world. ' }
];

function Blog() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="Blog">
      <div className="BL1">
        <div className="P1"><img src={Img1} alt="Img1 not working" /></div>
        <div className="P2">
          <h1>G&B Blog Builder</h1>
          <h2>Make Your Mark by Starting a Blog</h2>
          <p>G&B Blog Builder provides thousands of design options to help you establish your brand.</p>
          <Link to="/signUp"><button className="BL1-P2">Create a Website</button></Link>
        </div>
      </div>

      <div className="BL2">
        <div className="P1">
          <h1>15 Days Free Trial</h1>
          <p>Try our builder for 15 days without any payment information.</p>
        </div>
        <div className="P2">
          <h1>24/7 Call Support</h1>
          <p>Our experts are available anytime you need support.</p>
        </div>
        <div className="P3">
          <h1>Money Back Guarantee</h1>
          <p>If you're not satisfied within 15 days, get your money back.</p>
        </div>
      </div>

      <div className="BLhdg1">
        <h1>Blog Builder Features</h1>
        <h4>Features that help you create, manage, and develop a blog website</h4>
        <h5>with an amazing user experience</h5>
      </div>

      <div className="BL3">
        <div className="P1"><img src={Img2} alt="SEO tools" /></div>
        <div className="P2">
          <h1>CUSTOMIZABLE BLOG DESIGN</h1>
          <h2>Customize your blog as per your needs</h2>
          <p>Start with free designer-made templates that you may customize & enjoy complete control.</p>
        </div>
      </div>

      <div className="BL4">
        <div className="P1">
          <h1>CATEGORIES & TAGS</h1>
          <h2>Choose the most suitable category & tag</h2>
          <p>Like chapters in a book, categories provide a broad overview of the topics you blog about.</p>
        </div>
        <div className="P2"><img src={Img3} alt="SSL Certificate" /></div>
      </div>

      <div className="BL5">
        <div className="P1"><img src={Img4} alt="Custom Colors and Fonts" /></div>
        <div className="P2">
          <h1>VIDEOS & PHOTOS</h1>
          <h2>Add videos & social media posts</h2>
          <p>To share fresh content with your audience, embed videos, and photos, and create social posts.</p>
        </div>
      </div>

      <div className="BL6">
        <div className="P1">
          <h1>MANAGE COMMENTS</h1>
          <h2>Easy-to-use comment system</h2>
          <p>Using the G&B blog builder, provide a smooth & user-friendly comment system to interact with your followers.</p>
        </div>
        <div className="P2"><img src={Img5} alt="Custom Domains" /></div>
      </div>

      <div className="BL7">
        <div className="P1"><img src={Img9} alt="Responsive Design" /></div>
        <div className="P2">
          <h1>Responsive Design</h1>
          <h2>Build mobile-friendly websites</h2>
          <p>Our builder ensures a great experience across all devices with responsive templates.</p>
        </div>
      </div>
<div className="BL9">
        <div className="P1">
          <h1>Website Templates</h1>
          <h2>With a professional look</h2>
          <p>Choose from 90+ templates that match your business needs.</p>
        </div>
        <div className="P2">
 <Link to="/template/0"><img src={Img10} alt='Image6 is not working' className='Img6' /></Link>
  <Link to="/template/1"><img src={Img11} alt='Image7 is not working' className='Img7' /></Link>
  <Link to="/template/2"><img src={Img12} alt='Image8 is not working' className='Img8' /></Link>
        </div>
    <Link to="/All_Template"><button className="BL-tamp">See All Templates</button></Link>
      </div>
      <div className="BLhdg2">
        <h1>How to Create a Website?</h1>
        <p>Follow these steps to get your site up and running in minutes.</p>
      </div>
      <div className="BL8">
        <div className="P1">
          <li>START BUILDING A WEBSITE</li>
          <p>Click on 'Try For Now' or 'SignIn'. If you don't have an account, Signup using your email.</p>
          <li>CHOOSE YOUR WEBSITE TYPE</li>
          <p>Choose it's a website or an online store. Name it and select a suitable category.</p>
          <li>SELECT FONTS AND COLORS</li>
          <p>Pick fonts and colors match your style. You can change later anytime.</p>
          <li>PUBLISHED YOUR WEBSITE</li>
          <p>On ready, publish your site and make adjustments whenever needed.</p>
          <li>BRING A WEBSITE TRAFFIC</li>
          <p>Use our SEO tools and marketing integrations to grow your audience.</p>
        </div>
        <div className="P2"><img src={Img6} alt="Website creation steps" /></div>
      </div>
      <div className="BL10">
        <div className="heading">
          <h1>Frequently Asked Questions</h1>
          <p>FAQs about creating a website using G&B Website Builder</p>
        </div>

        <div className="questionBL">
          <ul>
            {additionalFaq.map((item, index) => (
              <li
                key={index}
                onClick={() => handleToggle(index)}
                style={{ cursor: 'pointer', marginBottom: '10px' }}
              >
                <strong>{item.question}</strong>
                {openIndex === index && (
                  <div className="faq-answerBL">
                    {item.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Blog;




















// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router';
// import Img1 from './img/m24.png';
// import Img2 from './img/m10.avif';
// import Img3 from './img/m11.jpg';
// import Img4 from './img/m15.png';
// import Img5 from './img/m23.webp';
// import Img6 from './img/m1.jpeg';
// import Img7 from './img/m6.webp';
// import Img8 from './img/m7.jpg';
// import gsap from 'gsap';

// const additionalFaq = [
//   { 
//     question: 'How easy is it to create a website at G&B.com?',
//     answer: 'Users rate it Easiest. G&B.com offers you an easiest way to create your own website. Here your unique ideas can be best-fitted in your website in most real and reliable way.'
//   },
//   { 
//     question: 'Is coding required to create a website?',
//     answer: 'If you do know coding, that will surely help you in adding extra functionality to your site.'
//   },
//   { 
//     question: 'How do I optimize my site for SEO?',
//     answer: 'If you want your desired domain address and are aiming to appear in Google or any other search result with keywords.'
//   },
//   { 
//     question: 'Can I create a free website with a custom domain?',
//     answer: 'You can create a free website with a G&B domain. For a more professional look and quick online searchable results.'
//   },
//   { 
//     question: 'Will hosting cost extra?',
//     answer: 'Absolutely not. When you create a website with G&B.com, you get reliable free web hosting. Your web content will be stored on secure servers located around the world.'
//   }
// ];

// function Blog() {
//   const [openIndex, setOpenIndex] = useState(null);

//   useEffect(() => {
//     gsap.from('.BL1', { opacity: 0, y: 50, duration: 1 });
//     gsap.from('.BL2', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
//     gsap.from('.BL3', { opacity: 0, y: 50, duration: 1, delay: 1 });
//     gsap.from('.BL4', { opacity: 0, y: 50, duration: 1, delay: 1.5 });
//     gsap.from('.BL5', { opacity: 0, y: 50, duration: 1, delay: 2 });
//     gsap.from('.BL6', { opacity: 0, y: 50, duration: 1, delay: 2.5 });
//     gsap.from('.BL7', { opacity: 0, y: 50, duration: 1, delay: 3 });
//     gsap.from('.BL9', { opacity: 0, y: 50, duration: 1, delay: 3.5 });
//     gsap.from('.BLhdg1', { opacity: 0, x: -100, duration: 1, delay: 4 });
//     gsap.from('.BLhdg2', { opacity: 0, x: -100, duration: 1, delay: 4.5 });
//   }, []);

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="Blog">
//       <div className="BL1">
//         <div className="P1">
//           <img src={Img1} alt="Img1 not working" />
//         </div>
//         <div className="P2">
//           <h1>G&B Blog Builder</h1>
//           <h2>Make Your Mark by Starting a Blog</h2>
//           <p>G&B Blog Builder provides thousands of design options to help you establish your brand.</p>
//           <Link to="/signUp"><button className="BL1-P2">Create a Website</button></Link>
//         </div>
//       </div>

//       <div className="BL2">
//         <div className="P1">
//           <h1>15 Days Free Trial</h1>
//           <p>Try our builder for 15 days without any payment information.</p>
//         </div>
//         <div className="P2">
//           <h1>24/7 Call Support</h1>
//           <p>Our experts are available anytime you need support.</p>
//         </div>
//         <div className="P3">
//           <h1>Money Back Guarantee</h1>
//           <p>If you're not satisfied within 15 days, get your money back.</p>
//         </div>
//       </div>

//       <div className="BLhdg1">
//         <h1>Blog Builder Features</h1>
//         <h4>Features that help you create, manage, and develop a blog website</h4>
//         <h5>with an amazing user experience</h5>
//       </div>

//       <div className="BL3">
//         <div className="P1">
//           <img src={Img2} alt="SEO tools" />
//         </div>
//         <div className="P2">
//           <h1>CUSTOMIZABLE BLOG DESIGN</h1>
//           <h2>Customize your blog as per your needs</h2>
//           <p>Start with free designer-made templates that you may customize & enjoy complete control.</p>
//         </div>
//       </div>

//       <div className="BL4">
//         <div className="P1">
//           <h1>CATEGORIES & TAGS</h1>
//           <h2>Choose the most suitable category & tag</h2>
//           <p>Like chapters in a book, categories provide a broad overview of the topics you blog about.</p>
//         </div>
//         <div className="P2">
//           <img src={Img3} alt="SSL Certificate" />
//         </div>
//       </div>

//       <div className="BL5">
//         <div className="P1">
//           <img src={Img4} alt="Custom Colors and Fonts" />
//         </div>
//         <div className="P2">
//           <h1>VIDEOS & PHOTOS</h1>
//           <h2>Add videos & social media posts</h2>
//           <p>To share fresh content with your audience, embed videos, and photos, and create social posts.</p>
//         </div>
//       </div>

//       <div className="BL6">
//         <div className="P1">
//           <h1>MANAGE COMMENTS</h1>
//           <h2>Easy-to-use comment system</h2>
//           <p>Using the G&B blog builder, provide a smooth & user-friendly comment system to interact with your followers.</p>
//         </div>
//         <div className="P2">
//           <img src={Img5} alt="Custom Domains" />
//         </div>
//       </div>

//       <div className="BL7">
//         <div className="P1">
//           <img src={Img1} alt="Responsive Design" />
//         </div>
//         <div className="P2">
//           <h1>Responsive Design</h1>
//           <h2>Build mobile-friendly websites</h2>
//           <p>Our builder ensures a great experience across all devices with responsive templates.</p>
//         </div>
//       </div>

//       <div className="BL9">
//         <div className="P1">
//           <h1>Website Templates</h1>
//           <h2>With a professional look</h2>
//           <p>Choose from 90+ templates that match your business needs.</p>
//         </div>
//         <div className="P2">
//           <Link to="/template/0"><img src={Img2} alt="Image6 is not working" className="Img6" /></Link>
//           <Link to="/template/1"><img src={Img7} alt="Image7 is not working" className="Img7" /></Link>
//           <Link to="/template/2"><img src={Img8} alt="Image8 is not working" className="Img8" /></Link>
//         </div>
//         <Link to="/All_Template"><button className="BL-tamp">See All Templates</button></Link>
//       </div>

//       <div className="BLhdg2">
//         <h1>How to Create a Website?</h1>
//         <p>Follow these steps to get your site up and running in minutes.</p>
//       </div>

//       <div className="BL8">
//         <div className="P1">
//           <li>START BUILDING A WEBSITE</li>
//           <p>Click on 'Try For Now' or 'SignIn'. If you don't have an account, Sign up using your email.</p>
//           <li>CHOOSE YOUR WEBSITE TYPE</li>
//           <p>Choose whether it's a website or an online store. Name it and select a suitable category.</p>
//           <li>SELECT FONTS AND COLORS</li>
//           <p>Pick fonts and colors that match your style. You can change later anytime.</p>
//           <li>PUBLISH YOUR WEBSITE</li>
//           <p>Once ready, publish your site and make adjustments whenever needed.</p>
//           <li>BRING WEBSITE TRAFFIC</li>
//           <p>Use our SEO tools and marketing integrations to grow your audience.</p>
//         </div>
//         <div className="P2">
//           <img src={Img6} alt="Website creation steps" />
//         </div>
//       </div>

//       <div className="BL10">
//         <div className="heading">
//           <h1>Frequently Asked Questions</h1>
//           <p>FAQs about creating a website using G&B Website Builder</p>
//         </div>

//         <div className="questionBL">
//           <ul>
//             {additionalFaq.map((item, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleToggle(index)}
//                 style={{ cursor: 'pointer', marginBottom: '10px' }}
//               >
//                 <strong>{item.question}</strong>
//                 {openIndex === index && (
//                   <div className="faq-answerBL">
//                     {item.answer}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blog;

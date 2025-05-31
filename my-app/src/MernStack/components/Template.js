// src/components/Template.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Img_Info1 from './Template_images/m58.webp';
import Img_Info2 from './Template_images/m11.jpg';
import Img_Info3 from './Template_images/m12.jpeg';
import Img_Info4 from './Template_images/m13.jpg';
import Img_EC1 from './Template_images/m14.jpeg';
import Img_EC2 from './Template_images/m15.png';
import Img_EC3 from './Template_images/m16.png';
import Img_EC4 from './Template_images/m17.jpeg';

const Template = () => {
  const part1Ref = useRef(null);
  const infoImagesRef = useRef([]);
  const ecImagesRef = useRef([]);
  const headingsRef = useRef([]);
  
  useEffect(() => {
    gsap.from(part1Ref.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(headingsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      delay: 0.5,
    });

    gsap.from(infoImagesRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      delay: 1,
      ease: 'power2.out',
    });

    gsap.from(ecImagesRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      delay: 1.5,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className='Templates-Container'>
      <div className='Part1' ref={part1Ref}>
        <h1>Website Templates</h1>
        <h4>Find Your Website Template. What's the purpose of Your Website?</h4>
        <Link to="/signUp"><button className='btn'>Try For Free</button></Link>
      </div>

      <div className='heading' ref={el => headingsRef.current[0] = el}>
        <h4>Informative Website Templates</h4>
        <Link to="/All_Template"><button className='btn-Info'>View All</button></Link>
      </div>

      <div className='Part2'>
        <div className='Images'>
          {[Img_Info1, Img_Info2, Img_Info3, Img_Info4].map((img, i) => (
            <div className={`img${i + 1}`} key={i} ref={el => infoImagesRef.current[i] = el}>
              <Link to={`/template/${i}`}><img src={img} alt={`Template ${i}`} /></Link>
              <main>{['EV Mobile', 'Write Web', 'Techigen', 'ITravel'][i]}</main>
            </div>
          ))}
        </div>
      </div>

      <div className='Part3'>
        <div className='heading' ref={el => headingsRef.current[1] = el}>
          <h4>E-Commerce Website Templates</h4>
          <Link to="/All_Template"><button className='btn-EC'>View All</button></Link>
        </div>

        <div className='Images'>
          {[Img_EC1, Img_EC2, Img_EC3, Img_EC4].map((img, i) => (
            <div className={`img${i + 1}`} key={i} ref={el => ecImagesRef.current[i] = el}>
              <Link to={`/template/${i + 4}`}><img src={img} alt={`EComm Template ${i}`} /></Link>
              <main>{['Cloth Store', 'Dreamy Delights', 'Book Store', 'Davito Electro'][i]}</main>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template;

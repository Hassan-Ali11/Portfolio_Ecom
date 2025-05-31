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
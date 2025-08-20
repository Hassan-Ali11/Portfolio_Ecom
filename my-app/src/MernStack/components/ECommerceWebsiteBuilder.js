import React, { useState } from 'react';
import { Link } from 'react-router';
import Img1 from './Template_images/m87.avif';
import Img2 from './Template_images/m98.avif';
import Img3 from './Template_images/m89.avif';
import Img4 from './Template_images/m90.avif';
import Img5 from './Template_images/m91.avif';
import Img6 from './Template_images/m94.avif';
import Img9 from './Template_images/m95.avif';
import Img11 from './Template_images/m88.avif';
import Img12 from './Template_images/m96.avif';
import Img13 from './Template_images/m97.avif';

// FAQ Data
const faqs = [
  {
    question: 'How easy is it to create a website at G&B website Builder?',
    answer: 'Users rate it Easiest. G&B.com offers you an easiest way to create your own website. Here your unique ideas can be best-fitted in your website in most real and reliable way.',
  },
  {
    question: 'Is coding required in order to create a website?',
    answer: 'Absolutely Not. G&B is a user-friendly Ecommerce website builder and helps you in all possible ways to build your own ecommerce website without knowing coding or any data science.',
  },
  {
    question: 'How do I optimize my site for SEO at G&B website Builder?',
    answer: 'G&B.com provides you the auto facility to go with custom sub-domain (G&B.com/sub-domain) free of cost. ',
  },
  {
    question: 'How to make my site Mobile friendly?',
    answer: 'According to a global report, mobile-friendliness of a website is one of the most effective ways to bring more visitors and keep them longer on site.',
  },
  {
    question: 'Can I create a free website with a custom domain?',
    answer: 'You can create a free Ecommerce website with G&B domain. For more professional look and quick online searchable results, you will have to opt for a custom domain name (G&B ecommerce website builder is ready to facilitate the Domain search facility by its own). ',
  },
  {
    question: 'Can I make changes to my website thereafter?',
    answer: 'G&B Ecommerce website builder is designed to suit everyone. But, in case you seek any change in design of your will to enable on your website.',
  },
  {
    question: 'Will hosting cost extra charges?',
    answer: 'So no matter where you login to your site and from where your visitors come from, your website will run smoothly and speed will remain fast.',
  },
  {
    question: 'How can I optimize my site for SEO at G&B Solutionz?',
    answer: 'At G&B you will be notified for a suitable built-in SEO tools to help you compete in industry. SEO services by G&B.com will help you dominate in organic search. ',
  },
];

// FAQ Accordion Component
function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="Ec-question">
      <ul>
        {faqs.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleAnswer(index)}>
            <strong>{item.question}</strong>
            {activeIndex === index && (
              <div>
                {item.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main WebBuild Component
function WebBuild() {
  return (
    <div className='E-Com'>
      <div className='Ec-1'>
        <div className='P1'>
          <img src={Img1} alt='Img1 is not working' />
        </div>
        <div className='P2'>
          <h1>ECommerce Website Builder</h1>
          <h2>Build ECommerce Website and sell Products online</h2>
          <p>G&B Solutionz comes with a slew of fascinating Features to assist you in creating a visually appealing and professional online store</p>
           <Link to="/signUp"><button className="btn-p2">create a website</button></Link>
        </div>
      </div>

      <div className='Ec-2'>
        <div className='P1'>
          <h1>15 Days Free Trials</h1>
          <p>Try our Builder For 15 Days without any payment information</p>
        </div>
        <div className='P2'>
          <h1>24/7 Call Support</h1>
          <p>Our Experts will provide unhindered support anytime you want</p>
        </div>
        <div className='P3'>
          <h1>MoneyBack Guarantee</h1>
          <p>Try G&B Solutionz for 15 Days and if you’re not satisfied, get your money back</p>
        </div>
      </div>

      <div className='Echdg1'>
        <h1>E-Commerce Website Features</h1>
        <h4>Following Features at G&B Website Builder will enable you to create, design, manage and develop</h4>
        <h5>a website with an unforgettable user experience.</h5>
      </div>

      <div className='Ec-3'>
        <div className='P1'>
          <img src={Img11} alt='img is not working' />
        </div>
        <div className='P2'>
          <h1>PRODUCT VARIANT</h1>
          <h2>Sell Products with multiple variants</h2>
          <p>A Product variant is a distinct item grouped by options like size or color. Example: a shirt in S, M, L, XL, XXL, etc.</p>
        </div>
      </div>

      <div className='Ec-4'>
        <div className='P1'>
          <h1>INVENTORY BY LOCATION</h1>
          <h2>Multi-location inventory management</h2>
          <p>Assign and manage inventory across locations. Manage SKUs separately to avoid inventory issues.</p>
        </div>
        <div className='P2'>
          <img src={Img3} alt='img3 is not working' />
        </div>
      </div>

      <div className='Ec-5'>
        <div className='P1'>
          <img src={Img4} alt='Img is not working' />
        </div>
        <div className='P2'>
          <h1>PAYMENT GATEWAY</h1>
          <h2>Manage all transactions in one place</h2>
          <p>Accept payments online, and manage transactions, refunds, and payouts from a single dashboard.</p>
        </div>
      </div>

      <div className='Ec-6'>
        <div className='P1'>
          <h1>UNLIMITED PRODUCTS</h1>
          <h2>Sell unlimited products</h2>
          <p>Scale your business as much as you want. No product limits apply.</p>
        </div>
        <div className='P2'>
          <img src={Img5} alt='img is not working' />
        </div>
      </div>

      <div className='Ec-7'>
        <div className='P1'>
          <img src={Img2} alt='Img1 is not working' />
        </div>
        <div className='P2'>
          <h1>MOBILE-FRIENDLY</h1>
          <h2>Manage your store using your smartphone</h2>
          <p>Control your ecommerce site from anywhere with your smartphone or tablet.</p>
        </div>
      </div>

      <div className='Echdg2'>
        <h1>How to Create an E-Commerce Website?</h1>
        <p>Follow these steps to launch your own website within minutes</p>
      </div>

      <div className='Ec-8'>
        <div className="P1">
          <li>START BUILDING WEBSITE</li>
          <p>Click on ‘Try For Now’ or 'Sign-In' if you already have an account. If you don’t have an account, sign-up using your mail.</p>
          <li>CHOOSE TYPE OF WEBSITE</li>
          <p>Choose your Website Type as an Website or Online Store. Name your website & choose a suitable category for your website.</p>
          <li>SELLECT FONTS COLORS</li>
          <p>Choose suitable font & color as per your needs. You can update the design & content anytime if the need arises.</p>
          <li>PUBLISH YOUR WEBSITE</li>
          <p>The website is live now. Here you can make suitable changes. Adjust content, add images, videos & much more.</p>
          <li>BRING WEBSITE TRAFFIC</li>
          <p>Utilize our cutting-edge SEO tools and integrated marketing solutions to bring traction to your site.</p>
        </div>
        <div className="P2">
          <img src={Img6} alt='m2 image is not working' />
        </div>
      </div>

      <div className='Ec-9'>
        <div className='P1'>
          <h1>Stunning an E-Commerce</h1>
          <h2>Website Templates</h2>
          <p>Choose from 90 templates tailored to your business needs.</p>
        </div>
        <div className='P2'>
   <Link to="/template/0"><img src={Img9} alt='Image6 is not working' className='Img6' /></Link>
   <Link to="/template/1"><img src={Img12} alt='Image7 is not working' className='Img7' /></Link>
  <Link to="/template/2"><img src={Img13} alt='Image8 is not working' className='Img8' /></Link>
</div>
        <Link to="/All_Template"><button className="btn-tamp">See All Templates</button></Link>
      </div>

      <div className='Ec-10'>
        <div className='heading'>
          <h1>Frequently Asked Questions</h1>
          <p>FAQ regarding creating a website at G&B Website Builder</p>
        </div>
        <FAQAccordion />
      </div>
    </div>
  );
}

export default WebBuild;

import React, { useState } from 'react';
import { Link } from 'react-router';
import Img1 from './Template_images/m73.jpg';
import Img22 from './Template_images/m80.avif';
import Img2 from './Template_images/m58.webp';
import Img11 from './Template_images/m77.jpg';
import Img3 from './Template_images/m74.jpg';
import Img4 from './Template_images/m75.avif';
import Img5 from './Template_images/m76.jpg';
import Img6 from './Template_images/m78.avif';
import Img77 from './Template_images/m81.avif';
import Img88 from './Template_images/m82.avif';
// FAQ data
const additionalFaq = [
  {
    question: 'How easy is it to create a website at G&B Website Builder?',
    answer: 'It’s very easy! Use pre-built templates and drag-and-drop tools to build your site without technical skills.'
  },
  {
    question: 'Is coding required in order to create a website?',
    answer: 'No coding is needed. Everything can be built using visual tools. However, you can add custom code if desired.'
  },
  {
    question: 'How do I optimize my site for SEO at G&B Website Builder?',
    answer: 'Use built-in SEO tools to add meta tags, titles, descriptions, and alt text. Our platform guides you through it.'
  },
  {
    question: 'How to make my site mobile-friendly?',
    answer: 'All G&B websites are responsive by default. You can also preview and tweak mobile layouts easily.'
  },
  {
    question: 'Can I create a free website with a custom domain?',
    answer: 'You can start for free, but connecting a custom domain requires a paid plan.'
  },
  {
    question: 'Can I make changes to my website later?',
    answer: 'Yes! You can edit your site anytime using the builder dashboard.'
  },
  {
    question: 'Will hosting cost extra charges?',
    answer: 'No. Hosting is included with all G&B plans at no extra cost.'
  },
  {
    question: 'How can I optimize my site for SEO at G&B Solutionz?',
    answer: 'You can optimize using our SEO tools: keyword suggestions, meta-data editing, and page speed enhancements.'
  }
];

// FAQ Component
function ExtraFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="questionW">
      <ul>
        {additionalFaq.map((item, index) => (
          <li key={index} onClick={() => handleToggle(index)} style={{ cursor: 'pointer', marginBottom: '10px' }}>
            <strong>{item.question}</strong>
            {openIndex === index && (
              <div className="faq-answerW" >
                {item.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main Component
function WebBuild() {
  return (
    <div className='Website-Builder'>
      <div className='web1'>
        <div className='P1'>
          <img src={Img1} alt='Img1 is not working' />
        </div>
        <div className='P2'>
          <h1>G&B Solutionz Website Builder</h1>
          <h2>Create Your Website with ease</h2>
          <p>G&B Solutionz Website Builder Provide You to Flexibility and Latest Features to Create a Website as per your needs</p>
          <Link to="/signUp"><button className='web1-p2'>Create a Website</button></Link>
        </div>
      </div>

      <div className='web2'>
        <div className='P1'>
          <h1>15 Days Free Trials</h1>
          <p>Try our Builder For 15 Days without any payment information</p>
        </div>
        <div className='P2'>
          <h1>24/7 Call Support</h1>
          <p>Our Experts will Provide unhindered support anytime you want</p>
        </div>
        <div className='P3'>
          <h1>MoneyBack Guarantee</h1>
          <p>Try G&B Solutionz For 15 Days and if you are not satisfied, get your money back</p>
        </div>
      </div>

      <div className='hdg1'>
        <h1>Website Builder Features</h1>
        <h4>Following Features at G&B Website Builder will enable you to Create, design, manage and develop</h4>
        <h5>Websites with an Unforgettable user experience.</h5>
      </div>

      <div className='web3'>
        <div className='P1'>
          <img src={Img2} alt='img is not working' />
        </div>
        <div className='P2'>
          <h1>SEO Tools</h1>
          <h2>Drive Traffic to your Website Using our built-in SEO tools</h2>
          <p>Use our Website Builder's SEO tools to Create SEO-optimized websites. Use free SEO tools to increase traffic to your mobile-friendly Website.</p>
        </div>
      </div>

      <div className='web4'>
        <div className='P1'>
          <h1>SSL CERTIFICATE</h1>
          <h2>Protect Your Website Through SSL certificate</h2>
          <p>Every G&B Website includes SSL/HTTPS encryption for safety and protection from cyber-attacks.</p>
        </div>
        <div className='P2'>
          <img src={Img3} alt='img3 is not working' />
        </div>
      </div>

      <div className='web5'>
        <div className='P1'>
          <img src={Img4} alt='Img is not working' />
        </div>
        <div className='P2'>
          <h1>CUSTOM COLORS AND FONTS</h1>
          <h2>Give a Stylish Look to your Website</h2>
          <p>Use custom colors & fonts to give your website a professional and stylish look.</p>
        </div>
      </div>

      <div className='web6'>
        <div className='P1'>
          <h1>CUSTOM DOMAINS</h1>
          <h2>Get a Unique Custom Domain & Create Your Brand</h2>
          <p>With annual packages, G&B Solutionz provides a free custom domain registration to help you establish your online identity.</p>
        </div>
        <div className='P2'>
          <img src={Img5} alt='img5 is not working' />
        </div>
      </div>

      <div className='web7'>
        <div className='P1'>
          <img src={Img11} alt='Img1 is not working' />
        </div>
        <div className='P2'>
          <h1>RESPONSIVE DESIGN</h1>
          <h2>Create Mobile-friendly Website with better user-experience</h2>
          <p>Our builder ensures that your site is responsive and optimized for mobile traffic with step-by-step guidance tools.</p>
        </div>
      </div>

      <div className='hdg2'>
        <h1>How to Create a Website?</h1>
        <p>By following these steps you can create your own Website within minutes</p>
      </div>

      <div className='web8'>
        <div className="P1">
          <li>START BUILDING A WEBSITE</li>
          <p>Click on 'Try For Now' or 'SignIn'. If you don't have an account, Signup using your email.</p>
          <li>CHOOSE YOUR WEBSITE TYPE</li>
          <p>Choose it's a website or an online store. Name it and select a suitable category.</p>
          <li>SELECT FONTS AND COLORS</li>
          <p>Pick fonts and colors match your style. You can change later anytime.</p>
          <li>PUBLISHED YOUR WEBSITE</li>
          <p>Once ready, publish your site and make adjustments whenever needed.</p>
          <li>BRING A WEBSITE TRAFFIC</li>
          <p>Use our SEO tools and marketing integrations to grow your audience.</p>
        </div>
        <div className="P2">
          <img src={Img6} alt='m2 image is not working' />
        </div>
      </div>

      <div className='web9'>
        <div className='P1'>
          <h1>Website Templates with a</h1>
          <h2>Professional Look</h2>
          <p>90 Website Templates to meet your Business needs.</p>
        </div>
        <div className='P2'>
  <Link to="/template/0"><img src={Img22} alt='Image6 is not working' className='Img6' /></Link>
  <Link to="/template/1"><img src={Img77} alt='Image7 is not working' className='Img7' /></Link>
  <Link to="/template/2"><img src={Img88} alt='Image8 is not working' className='Img8' /></Link>
</div>
        <Link to="/All_Template"><button className="btn-tamp">See All Templates</button></Link>
      </div>

      <div className='web10'>
        <div className='heading'>
          <h1>Frequently Asked Questions</h1>
          <p>FAQ regarding Creating a Website at G&B Website Builder</p>
        </div>
        <ExtraFAQ />
      </div>
    </div>
  );
}

export default WebBuild;

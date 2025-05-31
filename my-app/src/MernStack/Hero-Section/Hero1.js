import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image1 from './images/m2.jpg';
import Image2 from './images/m1.avif';
import Image3 from './images/m3.jpg';
import Image4 from './images/m71.avif';
import Image5 from './images/m72.avif';
import Image6 from './images/m68.avif';
import Image7 from './images/m69.avif';
import Image8 from './images/m65.avif';
import Image10 from './images/m70.avif';
import Image11 from './images/m47.avif';
import Image12 from './images/m50.avif';

const Hero = () => {
  const [templateType, setTemplateType] = useState('website'); // Default view
  const [openIndex, setOpenIndex] = useState(null); // For FAQ toggling

  const websiteTemplates = [
    { id: 1, image: Image6 },
    { id: 2, image: Image7 },
    { id: 3, image: Image8 },
  ];

  const ecommerceTemplates = [
    { id: 4, image: Image10 },
    { id: 5, image: Image11 },
    { id: 6, image: Image12 },
  ];

  const templatesToShow =
    templateType === 'website' ? websiteTemplates : ecommerceTemplates;

  const questions = [
    {
      title: 'How to create a Website?',
      details:
        '1. The first question that pops into your mind before you start ‘Is it easy to create a website?” Well, \n2.  the answer to that would vary on the type of website you want to create (informative, eCommerce, blog, portfolio etc.) or the path you would like to choose (website builders or professional developers & designers) while creating a website.\n3. In order to create a website, you would first need a website-building platform like G&B Solutionz',
    },
    {
      title: 'Is it Easy to Create a Website?',
      details:
        '1. As previously mentioned, it will totally depend on the scale & type of your website. If you build a 5-page informative website, then is a single-day process, at max. However, if you are running a vast eCommerce business, then it might take days until your desired Ecommerce Website Builder is fully operational. There are basically two ways to create a website:\n2. Hiring Professionals: Another factor would be the method or platform you are choosing to create your website. In case you are hiring professional developers & designers, you may be able to highly customize your website as per your needs, but you are bound to incur huge costs. This could seriously put a lot of financial burden upon you.\n3. Website Builders: There is an alternate way for those who want to spend less money & in a rational way. Website builders are platforms where users can take monthly (or yearly) plans to create a website without any knowledge of coding. These platforms provide pre-made customizable website templates & dashboards for the users, where they can many modifications to their website anytime, anywhere.',
    },
    {
      title: 'How do I create a Website with a Custom Domain?',
      details:
         '1. An individual brand name that distinguishes a website is known as a custom domain. As an illustration, G&B Solutionz unique domain is G&B.com. Vanity URLs usually referred to as custom domains, are shown in the address bar at the top of every browser.\n2. If you want to create a website with a custom domain, then JoonWeb is the perfect place for you. Here you can purchase & connect a custom domain of your choice & build your website as per your requirements\n3. Different domain extensions are also available for you to choose from. Prices may vary as per the domain extension you choose.',
    },
    {
      title: 'Can I use a website builder to create a landing page?',
      details:
          '1. A standalone web page made especially for marketing or advertising effort is called a landing page\n2. Website builders are a perfect place to start your own landing page to bring more customers to your business. By using JoonWeb.\n3. Different domain extensions are also available for you to choose from. Prices may vary as per the domain extension you choose.',
    },
    {
      title: 'Why G&B Website Builder is the Best Choice for You',
      details:
        '1. G&B builder is a specially optimized platform for those who have absolutely no to little knowledge about coding or web designing. G&B offers\n2. It is a one-stop shop for all problems relating to web development and design. G&B is a centralized platform. \n3.G&B Solutonz provides you with free-of-cost in-built SEO tools like Google Analytics',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="Hero-Container">
      {/* First Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Create a Website through Simple Steps</h1>
<p>Create a desired website at G&B Solutionz. The professional website builder allows you to create a website within minutes</p>
          <Link to="/signUp"><button className="button">Get Started</button></Link>
        </div>
        <div className="image">
          <img src={Image1} alt="Website creation illustration" />
        </div>
      </section>

      {/* Second Hero Section */}
      <div className="hero2">
        <h1>Begin from Scratch or Utilize a</h1>
        <h2>Pre-made Template</h2>
        <p>
          Quickly choose a stylish and appropriate appearance for your website
          and start creating it right away!
        </p>
        <div className="counter">
          <div className="stat">
            <h4>90+</h4>
            <p>Categories</p>
          </div>
          <div className="stat">
            <h4>232+</h4>
            <p>Themes</p>
          </div>
          <div className="stat">
            <h4>70,765+</h4>
            <p>Users</p>
          </div>
        </div>
        <Link to="/signUp">
          <button className="hr2-btn">Get Started</button>
        </Link>
      </div>

      {/* Third Hero Section */}
      <div className="hero3">
        <h1>How to Create a Website?</h1>
        <p>By following these steps, you can create a website in minutes.</p>
        <div className="sides">
          <div className="side1">
            <ul>
                <h3>START CREATING A WEBSITE</h3>
                <li>Before you create a website, click on 'Start Now' & 'Sign-In' if you already have an account. If you don't have an account,sign up using your email.</li>
                <h3>CHOOSE YOUR WEBSITE TYPE</h3>
                <li>
                  Select the type of website you want to create and choose the
                  suitable website category. Add details and logo.
                </li>
                <h4>SELECT PERFECT LAYOUT</h4>
              <li>
                <p>Choose a suitable layout as per your needs. You can update the design and content anytime if needed.</p>
              </li>
                <h4>PUBLISH YOUR WEBSITE</h4>
              <li>
                <p>
                  Your website is live now. Here you can make changes. Adjust
                  content, add images, videos, and much more.
                </p>
              </li>
                <h5>BRING TRAFFIC</h5>
              <li>
                <p>
                  Utilize our cutting-edge SEO tools and marketing solutions to
                  bring traffic to your site.
                </p>
              </li>
            </ul>
          </div>
          <div className="side2">
            <img
              src={Image2}
              alt="Step-by-step website creation process"
            />
          </div>
        </div>
      </div>

      {/* Fourth Hero Section */}
      <div className="hero4">
        <div className="Part1">
          <div className="side1">
            <h5>WEBSITE BUILDER</h5>
            <h2>The Next Level Ability to create Your Own Websites</h2>
            <main>
              Using G&B Solutionz, create your website within minutes without
              any prior knowledge of coding. On desktops, smartphones, and
              tablets, we give the experienced with excellent responsive design.
            </main>
            <span>Unlimited Pages</span>
            <p>SEO Tools</p>
            <Link to="/website-builder">
              <button className="hr4-P1-btn1">Create a website</button>
            </Link>
          </div>
          <div className="side2">
            <img src={Image3} alt="Responsive website builder" />
          </div>
        </div>

        <div className="Part2">
          <div className="side1">
            <img src={Image4} alt="E-commerce website builder" />
          </div>
          <div className="side2">
            <h5>E-COMMERCE WEBSITE BUILDER</h5>
            <h2>Create Your E-Commerce Website and Sell Your Products</h2>
            <main>
              E-commerce websites are multi-location online stores that include
              online payment systems, marketing tools, shipping, and customer
              engagement tools.
            </main>
            <span>Unlimited Products</span>
            <p>Mobile Responsive</p>
            <Link to="/e-commerce-website-builder">
              <button className="hr4-P1-btn2">Create online store</button>
            </Link>
          </div>
        </div>

        <div className="Part3">
          <div className="side1">
            <h5>BUY DOMAIN</h5>
            <h2>Custom Domain As Per Your Brand Name</h2>
            <main>
              Purchase a professional domain name that corresponds to your
              company's and brand's identity. G&B Solutionz offers a panel from
              which you can build your own free domain name.
            </main>
            <span>300+ Domain Extensions</span>
            <p>24/7 Customer Support</p>
            <Link to="/buy-domain">
              <button className="hr4-P1-btn3">Create your Domain</button>
            </Link>
          </div>
          <div className="side2">
            <img src={Image5} alt="Custom domain purchase" />
          </div>
        </div>
      </div>

      {/* Fifth Hero Section - Templates */}
      <div className="hero5">
        <div className="header">
          <h1>Website Templates</h1>
          <p>90+ Website Templates to meet your business needs.</p>
          <button
            className={`h5-btn1 ${templateType === 'website' ? 'active' : ''}`}
            onClick={() => setTemplateType('website')}
          >
            Website Templates
          </button>
          <button
            className={`h5-btn2 ${
              templateType === 'ecommerce' ? 'active' : ''
            }`}
            onClick={() => setTemplateType('ecommerce')}
          >
            E-Commerce Templates
          </button>
        </div>

        <div className="templates">
          {templatesToShow.map((template) => (
            <Link key={template.id} to={`/template/${template.id}`}>
              <img src={template.image} alt={`Template ${template.id}`} />
            </Link>
          ))}
        </div>

        <Link to="/All_Template">
          <button className="btn5">See All Templates</button>
        </Link>
      </div>

      {/* Sixth Hero Section (FAQs) */}
      <div className="hero6">
        <div className="heading">
          <h1>Frequently Asked Questions</h1>
          <p>FAQ regarding creating a website with G&B Website Builder</p>
        </div>

        <div className="questionH">
          <ul>
            {questions.map((q, index) => (
              <li key={index} onClick={() => toggleFAQ(index)} className="faq-itemH">
                <div className="title">{q.title}</div>
                {openIndex === index && (
                  <div className="detailsH">
                    {q.details.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;











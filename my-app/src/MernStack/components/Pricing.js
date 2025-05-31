import React, { useState } from 'react';
import '../CSS-files/pricing.css';

const faqData = [
  {
    question: 'How do I sign up?',
    answer: [
      'Visit our website and click "Sign Up".',
      'Fill in your basic details and create a password.',
      'Click submit and verify your email.'
    ]
  },
  {
    question: 'How long are your contracts?',
    answer: [
      'We offer monthly and yearly plans.',
      'No long-term commitments are required.',
      'You can cancel or change anytime.'
    ]
  },
  {
    question: 'How do I cancel service?',
    answer: [
      'Log into your account dashboard.',
      'Go to the "Billing" section.',
      'Click "Cancel Plan" and follow the prompts.'
    ]
  },
  {
    question: 'Is there a discount for yearly service?',
    answer: [
      'Yes, we offer 20% off on yearly billing.',
      'It’s automatically applied at checkout.',
      'You’ll also get bonus features with yearly plans.'
    ]
  },
  {
    question: 'Can I switch plans?',
    answer: [
      'Yes, you can upgrade or downgrade anytime.',
      'Go to "Account Settings" > "Plans".',
      'Select a new plan and confirm.'
    ]
  },
  {
    question: 'What is meant by Unlimited?',
    answer: [
      'Unlimited refers to no fixed limits on usage.',
      'It’s subject to our fair use policy.',
      'No hidden charges or overage fees.'
    ]
  },
  {
    question: 'Do I need another web host?',
    answer: [
      'No, G&B Solutionz includes hosting.',
      'Everything is managed in one place.',
      'You don’t need any external provider.'
    ]
  },
  {
    question: 'Can I download or shift a Website created at G&B Solutionz?',
    answer: [
      'Yes, you can export your site content.',
      'We support full site backups.',
      'Contact support for migration help.'
    ]
  },
  {
    question: 'Can I buy multiple domains?',
    answer: [
      'Absolutely! You can register many domains.',
      'Manage them all from your dashboard.',
      'Bundle pricing available for bulk purchases.'
    ]
  },
  {
    question: 'How do I accept payments with G&B Solutionz?',
    answer: [
      'Integrate Stripe or PayPal in your site.',
      'Set up your products in the store section.',
      'Start accepting payments within minutes.'
    ]
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="questionsP">
      <ul>
        {faqData.map((item, index) => (
          <li key={index} onClick={() => toggleQuestion(index)} className="faq-itemP">
            <div className="faq-questionP">{item.question}</div>
            {openIndex === index && (
              <div className="faq-answerP">
                {item.answer.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('informative');

  return (
    <div className="pricing-pg">
      <div className="pricing">
        <h1>Pick the Perfect Plan for your</h1>
        <h2>needs.</h2>
        <span>Plans that scale with your business – upgrade and downgrade anytime</span>
        <div className="buttons">
          <button
            className={`Info-btn ${selectedPlan === 'informative' ? 'active' : ''}`}
            onClick={() => setSelectedPlan('informative')}
          >
            Informative
          </button>
          <button
  className={`Ecom-btn ${selectedPlan === 'ecommerce' ? 'active' : ''}`}
  onClick={() => setSelectedPlan('ecommerce')}
>
  E-Commerce
</button>

        </div>
      </div>

      {/* Informative Plan Section */}
      {selectedPlan === 'informative' && (
        <div className="Info-pg">
          {/* --- LANDING PAGE --- */}
          <div className="landing-Page">
            <div className="heading"><h1>Landing Page</h1></div>
            <p>For Simple Page</p>
            <h3>£219</h3>
            <span>£119/P.M.</span>
            <h4>Save 46% Annually</h4>
            <main>Just £148.00/year with Annual Payment</main>
            <div className="Features">
              <h1>Features</h1>
              <main>Single Website page</main>
              <span>Mobile-Optimized Website</span>
              <pre>Staff Accounts</pre>
              <p>Priority Customer Support</p>
            </div>
            <div className="Hosting">
              <h1>Hosting</h1>
              <main>Connect Your Domain</main>
              <span>Unlimited Storage & Bandwidth</span>
              <p>SSL Certificate</p>
            </div>
            <div className="Marketing">
              <h1>Marketing</h1>
              <p>SEO tools</p>
              <h3>Form Builder</h3>
              <h4>Form Payment</h4>
              <span>Built in Blog</span>
              <main>Promotional Pop-ups</main>
              <h6>Automations (E-mails + Whatsapp)</h6>
            </div>
          </div>

          {/* --- Basic Plan --- */}
          <div className="Basic">
            <div className="heading"><h1>Basic</h1></div>
            <p>For Personal use</p>
            <h3>£389</h3>
            <span>£249/P.M.</span>
            <h4>Save 36% Annually</h4>
            <main>Just £2988.00/year with Annual Payment</main>
            <div className="Features">
              <h1>Features</h1>
              <main>10 Website page</main>
              <span>Mobile-Optimized Website</span>
              <pre>1 Staff Accounts</pre>
              <p>Priority Customer Support</p>
            </div>
            <div className="Hosting">
              <h1>Hosting</h1>
              <main>Connect Your Domain</main>
              <span>Unlimited Storage & Bandwidth</span>
              <p>SSL Certificate</p>
            </div>
            <div className="Marketing">
              <h1>Marketing</h1>
              <p>SEO tools</p>
              <h3>Form Builder</h3>
              <h4>Form Payment</h4>
              <span>Built in Blog</span>
              <main>Promotional Pop-ups</main>
              <h6>Automations (E-mails + Whatsapp)</h6>
            </div>
          </div>

          {/* --- Standard Plan --- */}
          <div className="Standard">
            <div className="heading"><h1>Standard</h1></div>
            <p>For Business use</p>
            <h3>£649</h3>
            <span>£425/P.M.</span>
            <h4>Save 35% Annually</h4>
            <main>Just £51.00/year with Annual Payment</main>
            <div className="Features">
              <h1>Features</h1>
              <main>Unlimited Website page</main>
              <span>Mobile-Optimized Website</span>
              <pre>3 Staff Accounts</pre>
              <p>Priority Customer Support</p>
            </div>
            <div className="Hosting">
              <h1>Hosting</h1>
              <main>Connect Your Domain</main>
              <span>Unlimited Storage & Bandwidth</span>
              <p>SSL Certificate</p>
            </div>
            <div className="Marketing">
              <h1>Marketing</h1>
              <p>SEO tools</p>
              <h3>Form Builder</h3>
              <h4>Form Payment</h4>
              <span>Built in Blog</span>
              <main>Promotional Pop-ups</main>
              <h6>Automations (E-mails + Whatsapp)</h6>
            </div>
          </div>
        </div>
      )}

{selectedPlan === 'ecommerce' && (
  <div className="Ecom-page">

    {/* --- Startup Plan --- */}
    <div className="E-pg">
      <div className="heading"><h1>eCommerce Startup</h1></div>
      <p>For few products</p>
      <h3>₹847</h3>
      <span>₹549 / P.M.</span>
      <h4>Save 35% Annually</h4>
      <main>Just ₹6588.00/year with Annual Payment!</main>
      <div className="Features">
        <h1>Features</h1>
        <main>100 Products</main>
        <span>Product Variants</span>
        <pre>Product reviews and ratings</pre>
        <p>1 Inventory Location (Warehouse)</p>
        <p>1 Staff Accounts</p>
        <p>Basic Reports</p>
        <p>Inventory Management</p>
        <p>3rd Party Shipping Integration</p>
        <p>Priority customer support</p>
        <p>Sales channels</p>
      </div>
      <div className="Hosting">
        <h1>Hosting</h1>
        <main>Connect Your Domain</main>
        <span>Unlimited Storage & Bandwidth</span>
        <p>SSL certificate</p>
      </div>
      <div className="Checkout">
        <h1>Checkout</h1>
        <p>0% Transaction fees</p>
        <p>Abandoned checkout recovery</p>
        <p>3rd Party Payment Gateways</p>
        <p>Advanced COD options</p>
        <p>Autocomplete address</p>
        <p>Partial payment</p>
      </div>
      <div className="Marketing">
        <h1>Marketing</h1>
        <p>Automations (Email + WhatsApp)</p>
        <p>Built in Blog</p>
        <p>Coupon & Discounts</p>
        <p>Form Builder</p>
        <p>Promotional Pop-Ups</p>
        <p>SEO Tools</p>
      </div>
      <div className="Customization">
        <h1>Customization</h1>
        <p>Templates and Themes</p>
        <p>Unlimited Website Page</p>
        <p>Mobile-Optimized Website</p>
        <p>Customization with Code</p>
        <p>3rd party app integrations</p>
        <p>Custom Apps (Additional Paid Service)</p>
      </div>
      <div className="International">
        <h1>International</h1>
        <p>1 Custom Market</p>
        <p>Payment Options by Market</p>
      </div>
    </div>

    {/* --- Business Plan --- */}
    <div className="E-pg">
      <div className="heading"><h1>eCommerce Business</h1></div>
      <p>For few products</p>
      <h3>₹847</h3>
      <span>₹549 / P.M.</span>
      <h4>Save 35% Annually</h4>
      <main>Just ₹6588.00/year with Annual Payment!</main>
      <div className="Features">
        <h1>Features</h1>
        <main>100 Products</main>
        <span>Product Variants</span>
        <pre>Product reviews and ratings</pre>
        <p>1 Inventory Location (Warehouse)</p>
        <p>1 Staff Accounts</p>
        <p>Basic Reports</p>
        <p>Inventory Management</p>
        <p>3rd Party Shipping Integration</p>
        <p>Priority customer support</p>
        <p>Sales channels</p>
      </div>
      <div className="Hosting">
        <h1>Hosting</h1>
        <main>Connect Your Domain</main>
        <span>Unlimited Storage & Bandwidth</span>
        <p>SSL certificate</p>
      </div>
      <div className="Checkout">
        <h1>Checkout</h1>
        <p>0% Transaction fees</p>
        <p>Abandoned checkout recovery</p>
        <p>3rd Party Payment Gateways</p>
        <p>Advanced COD options</p>
        <p>Autocomplete address</p>
        <p>Partial payment</p>
      </div>
      <div className="Marketing">
        <h1>Marketing</h1>
        <p>Automations (Email + WhatsApp)</p>
        <p>Built in Blog</p>
        <p>Coupon & Discounts</p>
        <p>Form Builder</p>
        <p>Promotional Pop-Ups</p>
        <p>SEO Tools</p>
      </div>
      <div className="Customization">
        <h1>Customization</h1>
        <p>Templates and Themes</p>
        <p>Unlimited Website Page</p>
        <p>Mobile-Optimized Website</p>
        <p>Customization with Code</p>
        <p>3rd party app integrations</p>
        <p>Custom Apps (Additional Paid Service)</p>
      </div>
      <div className="International">
        <h1>International</h1>
        <p>1 Custom Market</p>
        <p>Payment Options by Market</p>
    </div>
    </div>

    {/* --- Enterprise Plan --- */}
    <div className="E-pg">
      <div className="heading"><h1>eCommerce Enterprise</h1></div>
      <p>For few products</p>
      <h3>₹847</h3>
      <span>₹549 / P.M.</span>
      <h4>Save 35% Annually</h4>
      <main>Just ₹6588.00/year with Annual Payment!</main>
      <div className="Features">
        <h1>Features</h1>
        <main>100 Products</main>
        <span>Product Variants</span>
        <pre>Product reviews and ratings</pre>
        <p>1 Inventory Location (Warehouse)</p>
        <p>1 Staff Accounts</p>
        <p>Basic Reports</p>
        <p>Inventory Management</p>
        <p>3rd Party Shipping Integration</p>
        <p>Priority customer support</p>
        <p>Sales channels</p>
      </div>
      <div className="Hosting">
        <h1>Hosting</h1>
        <main>Connect Your Domain</main>
        <span>Unlimited Storage & Bandwidth</span>
        <p>SSL certificate</p>
      </div>
      <div className="Checkout">
        <h1>Checkout</h1>
        <p>0% Transaction fees</p>
        <p>Abandoned checkout recovery</p>
        <p>3rd Party Payment Gateways</p>
        <p>Advanced COD options</p>
        <p>Autocomplete address</p>
        <p>Partial payment</p>
      </div>
      <div className="Marketing">
        <h1>Marketing</h1>
        <p>Automations (Email + WhatsApp)</p>
        <p>Built in Blog</p>
        <p>Coupon & Discounts</p>
        <p>Form Builder</p>
        <p>Promotional Pop-Ups</p>
        <p>SEO Tools</p>
      </div>
      <div className="Customization">
        <h1>Customization</h1>
        <p>Templates and Themes</p>
        <p>Unlimited Website Page</p>
        <p>Mobile-Optimized Website</p>
        <p>Customization with Code</p>
        <p>3rd party app integrations</p>
        <p>Custom Apps (Additional Paid Service)</p>
      </div>
      <div className="International">
        <h1>International</h1>
        <p>1 Custom Market</p>
        <p>Payment Options by Market</p>
        </div>
    </div>

  </div>
)}
 <div className='pricing2'>
        <div className='item1'>
          <h2>Enterprise Solutions</h2>
          <p>Streamline Website Deployment, enhance Business Management, and increase work flexibility.</p>
        </div>
        <div className='item2'>
          <h4>Effortless Scalability</h4>
          <p>Craft large-scale websites with custom templates and reusable components.</p>
        </div>
        <div className='item3'>
          <h4>Streamlined Integration</h4>
          <p>Seamlessly connect your business software, apps, and third-party APIs.</p>
        </div>
        <div className='item4'>
          <h4>Dedicated Account Support</h4>
          <p>Get a dedicated account manager, priority support, and customized training for your team.</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='quest-heading'>
        <h1>Frequently Asked Questions</h1>
        <p>FAQs about creating a website with G&B Solutionz Website Builder</p>
      </div>
      <FAQ />
    </div>
)}

export default Pricing;
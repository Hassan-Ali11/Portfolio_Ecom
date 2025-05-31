// src/App.js 
import React, { useEffect, useState } from 'react';
import { BrowserRouter,Navigate, Route, Routes, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './MernStack/CSS-files/Navbar.css';
import './MernStack/CSS-files/HeroSection.css';
import './MernStack/CSS-files/pricing.css';
import './MernStack/CSS-files/Template.css';
import './MernStack/CSS-files/All_Tem.css';
import './MernStack/CSS-files/Domain.css';
import './MernStack/CSS-files/ContactUs.css';
import './MernStack/CSS-files/HelpC.css';
import './MernStack/CSS-files/Temp_details.css';
import './MernStack/CSS-files/WebBuild.css';
import './MernStack/CSS-files/Footer.css';
import './MernStack/CSS-files/E-Com.css';
import './MernStack/FoterCSs/Blog.css';
import './MernStack/FoterCSs/join.css';
import './MernStack/FoterCSs/E-mail.css';
import './MernStack/FoterCSs/About.css';
import './MernStack/FoterCSs/Use.css';

import Navbar from './MernStack/components/Navbar';
import Home from './MernStack/Hero-Section/Hero1';
import Template from './MernStack/components/Template';
import Pricing from './MernStack/components/Pricing';
import WebsiteBuilder from './MernStack/components/WebsiteBuilder';
import ECommerceWebsiteBuilder from './MernStack/components/ECommerceWebsiteBuilder';
import BuyDomain from './MernStack/components/BuyDomain';
import ContactUs from './MernStack/components/ContactUs';
import HelpCenter from './MernStack/components/HelpCenter';
import SignIn from './MernStack/components/SignIn';
import SignUp from './MernStack/components/SignUp';
import Footer from './MernStack/components/Footer';
import Blog from './MernStack/Foter/Blog';
import BusEmail from './MernStack/Foter/BusEmail';
import About from './MernStack/Foter/About';
import Use from './MernStack/Foter/Use';
import Privacy from './MernStack/Foter/Privacy';
import Join from './MernStack/Foter/Join';
import Blogs from './MernStack/Foter/Blogs';
import BlogDetail from './MernStack/Foter/BlogDetail';  // Import BlogDetail component
import All_Template from './MernStack/components/All_Template';
import All_Temp_details from './MernStack/components/All_Temp_details';
import templates from './MernStack/components/templateData'; 


const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();  // Hook to get current route location

  useEffect(() => {
    // Fetch all blogs from the backend
    axios.get('http://localhost:5000/api/blogs')
      .then(response => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError('Failed to load blogs.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="content">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/template" element={<Template />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/website-builder" element={<WebsiteBuilder />} />
        <Route path="/e-commerce-website-builder" element={<ECommerceWebsiteBuilder />} />
        <Route path="/buy-domain" element={<BuyDomain />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/busEmail" element={<BusEmail />} />
        <Route path="/All_Template" element={<All_Template />} />
        <Route path="/template/details" element={<All_Temp_details />} />
        <Route path="/template/:id" element={<All_Temp_details />} />
        <Route path="/templateData" element={<templateData />} />
        <Route path="/about" element={<About />} />
        <Route path="/use" element={<Use />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>

      {/* Show Blog List only on /blogs path */}
      <div className="blog-list">
        {/* Conditional rendering: Only show the blog list on /blogs route */}
        {location.pathname === '/blogs' && blogs.map(blog => (
          <div key={blog._id} className="blog-box">
            {/* <Link to={`/blog/${blog._id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h3>{blog.title}</h3>
              <p>{new Date(blog.date).toLocaleDateString()}</p>
              <img src={blog.image} alt={blog.title} />
            </Link> */}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default App;
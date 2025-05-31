import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { gsap } from 'gsap';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(response.data);
      } catch (err) {
        console.error(err);
        setError('Blog not found or an error occurred.');
      }
    };

    fetchBlog();
  }, [id]);

  useEffect(() => {
    if (blog) {
      gsap.from('.blog-title', { opacity: 0, y: -50, duration: 1 });
      gsap.from('.blog-date', { opacity: 0, y: 20, duration: 1, delay: 0.2 });
      gsap.from('.blog-image', { opacity: 0, scale: 0.95, duration: 1, delay: 0.3 });
      gsap.from('.blog-section', { opacity: 0,y: 30,duration: 1,delay: 0.5,stagger: 0.2});
    }}, [blog]);

  const handleShowMore = () => setShowMore(prev => !prev);

  if (error) return <div style={{ padding: '20px', color: 'red' }}>{error}</div>;
  if (!blog) return <div style={{ padding: '20px' }}>Loading...</div>;

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      {blog.image ? (
        <img
          src={blog.image}
          alt={blog.title}
          className="blog-image"
          style={{ width: '100%', height: 'auto', marginBottom: '20px', borderRadius: '8px' }}
        />
      ) : (
        <p>No image available</p>
      )}

      <p className="blog-date" style={{ color: '#888', marginBottom: '10px' }}>
        {blog.date ? new Date(blog.date).toLocaleDateString() : 'No date provided'}
      </p>

      <h1 className="blog-title" style={{ fontSize: '32px', marginBottom: '20px' }}>{blog.title}</h1>

      <div className="blog-content">
        {Array.isArray(blog.content) ? (
          blog.content.map((section, index) => (
            <div className="blog-section" key={index} style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{section.heading}</h3>
              <p style={{ fontSize: '16px', color: '#333' }}>{section.paragraph}</p>
            </div>
          ))
        ) : (
          <p>{blog.content || 'No content available.'}</p>
        )}
      </div>

      <button
        onClick={handleShowMore}
        style={{
          marginTop: '20px',
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>

      {showMore && (
        <div className="blog-section" style={{ marginTop: '20px' }}>
          <h3>Additional Details</h3>
          <p>{blog.additionalDetails || 'No additional details available.'}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;

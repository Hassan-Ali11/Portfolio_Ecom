






















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { gsap } from 'gsap';
// import ImgFallback from './img/m38.avif'; // Use a default fallback image

// const IMAGE_BASE_URL = 'http://localhost:5000'; // Adjust if needed

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/blogs');
//         setBlogs(response.data);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to load blogs.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   useEffect(() => {
//     if (blogs.length > 0) {
//       gsap.from('.blog-item', {
//         opacity: 0,
//         y: 20,
//         stagger: 0.1,
//         duration: 1,
//         ease: 'power2.out',
//       });
//     }
//   }, [blogs]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Blogs</h1>
//       <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
//         {blogs.length === 0 ? (
//           <p>No blogs available at the moment.</p>
//         ) : (
//           blogs.map(blog => {
//             const imageUrl = blog.image
//               ? blog.image.startsWith('http')
//                 ? blog.image
//                 : `${IMAGE_BASE_URL}/${blog.image.replace(/^\//, '')}`
//               : ImgFallback;

//             return (
//               <div key={blog._id} className="blog-item" style={{
//                 border: '1px solid #ccc',
//                 borderRadius: '8px',
//                 padding: '16px',
//                 backgroundColor: '#fff',
//                 boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//               }}>
//                 <Link to={`/blog/${blog._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                   <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>{blog.title}</h2>

//                   <img
//                     src={imageUrl}
//                     alt={blog.title}
//                     style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
//                     onError={(e) => { e.target.src = ImgFallback }}
//                   />

//                   <p style={{ marginTop: '12px', color: '#555' }}>
//                     {blog.description?.slice(0, 100) || 'No description available'}...
//                   </p>
//                 </Link>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default Blogs;






















import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import Img1 from './img/m76.jpg';
import Img2 from './img/m82.avif';
import Img3 from './img/n18.jpg';
import Img4 from './img/n19.jpg';
import Img5 from './img/m51.jpg';
import Img6 from './img/n20.jpg';
import Img7 from './img/n21.jpg'; 
import Img8 from './img/n22.jpg'; 
import Img9 from './img/n23.jpg'; 
import Img10 from './img/n24.jpg'; 

const fallbackImages = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8,Img9, Img10];

const IMAGE_BASE_URL = 'http://localhost:5000'; // Adjust as needed

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load blogs.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      gsap.from('.blog-item', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
      });
    }
  }, [blogs]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Blogs</h1>
      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {blogs.length === 0 ? (
          <p>No blogs available at the moment.</p>
        ) : (
          blogs.map((blog, index) => {
            // Use blog.image if valid, otherwise cycle fallback images
            const fallbackImage = fallbackImages[index % fallbackImages.length];
            const imageUrl = blog.image
              ? blog.image.startsWith('http')
                ? blog.image
                : `${IMAGE_BASE_URL}/${blog.image.replace(/^\//, '')}`
              : fallbackImage;

            return (
              <div key={blog._id} className="blog-item" style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}>
                <Link to={`/blog/${blog._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>{blog.title}</h2>

                  <img
                    src={imageUrl}
                    alt={blog.title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
                    onError={(e) => { e.target.src = fallbackImage }}
                  />

                  <p style={{ marginTop: '12px', color: '#555' }}>
                    {blog.description?.slice(0, 100) || 'No description available'}...
                  </p>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Blogs;


















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { gsap } from 'gsap';

// import Img1 from './img/m38.avif';
// import Img2 from './img/m39.webp';
// import Img3 from './img/m40.png';
// import Img4 from './img/m41.jpg';
// import Img5 from './img/m42.jpeg';
// import Img6 from './img/m38.avif'; // fallback reused

// const fallbackImages = [Img1, Img2, Img3, Img4, Img5, Img6];
// const IMAGE_BASE_URL = 'http://localhost:5000';

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(10); // Show first 10 initially
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/blogs');
//         setBlogs(response.data);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to load blogs.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   useEffect(() => {
//     if (blogs.length > 0) {
//       gsap.from('.blog-item', {
//         opacity: 0,
//         y: 20,
//         stagger: 0.1,
//         duration: 1,
//         ease: 'power2.out',
//       });
//     }
//   }, [blogs, visibleCount]);

//   const handleShowMore = () => {
//     setVisibleCount((prev) => prev + 10);
//   };

//   const visibleBlogs = blogs.slice(0, visibleCount);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Blogs</h1>
//       <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
//         {visibleBlogs.length === 0 ? (
//           <p>No blogs available at the moment.</p>
//         ) : (
//           visibleBlogs.map((blog, index) => {
//             const fallbackImage = fallbackImages[index % fallbackImages.length];
//             const imageUrl = blog.image
//               ? blog.image.startsWith('http')
//                 ? blog.image
//                 : `${IMAGE_BASE_URL}/${blog.image.replace(/^\//, '')}`
//               : fallbackImage;

//             return (
//               <div key={blog._id} className="blog-item" style={{
//                 border: '1px solid #ccc',
//                 borderRadius: '8px',
//                 padding: '16px',
//                 backgroundColor: '#fff',
//                 boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//               }}>
//                 <Link to={`/blog/${blog._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                   <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>{blog.title}</h2>

//                   <img
//                     src={imageUrl}
//                     alt={blog.title}
//                     style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
//                     onError={(e) => { e.target.src = fallbackImage }}
//                   />

//                   <p style={{ marginTop: '12px', color: '#555' }}>
//                     {blog.description?.slice(0, 100) || 'No description available'}...
//                   </p>
//                 </Link>
//               </div>
//             );
//           })
//         )}
//       </div>

//       {/* Show More Button */}
//       {visibleCount < blogs.length && (
//         <div style={{ textAlign: 'center', marginTop: '30px' }}>
//           <button onClick={handleShowMore} style={{
//             padding: '10px 20px',
//             fontSize: '16px',
//             cursor: 'pointer',
//             border: 'none',
//             backgroundColor: '#007bff',
//             color: '#fff',
//             borderRadius: '5px',
//           }}>
//             Show More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Blogs;

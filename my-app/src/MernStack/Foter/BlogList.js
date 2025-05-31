// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch blogs from the backend
//     axios.get('http://localhost:5000/api/blogs')
//       .then(response => {
//         setBlogs(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.log(error);
//         setError('Failed to load blogs.');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Blogs</h1>
//       <div>
//         {blogs.length === 0 ? (
//           <p>No blogs available at the moment.</p>
//         ) : (
//           blogs.map(blog => (
//             <div key={blog._id} style={{ marginBottom: '20px' }}>
//               <Link to={`/blog/${blog._id}`} style={{ textDecoration: 'none', color: 'black' }}>
//                 <h2>{blog.title}</h2>
//                 {blog.image ? (
//                   <img src={blog.image} alt={blog.title} style={{ width: '100%', height: 'auto' }} />
//                 ) : (
//                   <p>No image available</p>
//                 )}
//               </Link>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogList;

















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch blogs from the backend
//     axios.get('http://localhost:5000/api/blogs')
//       .then(response => {
//         setBlogs(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.log(error);
//         setError('Failed to load blogs.');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Blogs</h1>
//       <div>
//         {blogs.length === 0 ? (
//           <p>No blogs available at the moment.</p>
//         ) : (
//           blogs.map(blog => (
//             <div key={blog._id} style={{ marginBottom: '20px' }}>
//               <Link to={`/blog/${blog._id}`} style={{ textDecoration: 'none', color: 'black' }}>
//                 <h2>{blog.title}</h2>
//                 {blog.image ? (
//                   <img src={blog.image} alt={blog.title} style={{ width: '100%', height: 'auto' }} />
//                 ) : (
//                   <p>No image available</p>
//                 )}
//               </Link>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Blogs;


















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch blogs on component mount
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

//   if (loading) return <div style={{ padding: '20px' }}>Loading...</div>;
//   if (error) return <div style={{ padding: '20px', color: 'red' }}>{error}</div>;

//   return (
//     <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
//       <h1 style={{ fontSize: '32px', marginBottom: '30px' }}>Blogs</h1>

//       {blogs.length === 0 ? (
//         <p>No blogs available at the moment.</p>
//       ) : (
//         <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
//           {blogs.map(blog => (
//             <div key={blog._id} style={{
//               border: '1px solid #ccc',
//               borderRadius: '8px',
//               overflow: 'hidden',
//               backgroundColor: '#fff',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//               transition: '0.3s ease-in-out',
//             }}>
//               <Link to={`/blog/${blog._id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
//                 {blog.image ? (
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//                   />
//                 ) : (
//                   <div style={{
//                     height: '200px',
//                     backgroundColor: '#eee',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: '#666',
//                   }}>
//                     No image available
//                   </div>
//                 )}
//                 <div style={{ padding: '16px' }}>
//                   <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>{blog.title}</h2>
//                   <p style={{ color: '#555' }}>
//                     {blog.description?.slice(0, 100) || 'No description available'}...
//                   </p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Blogs;

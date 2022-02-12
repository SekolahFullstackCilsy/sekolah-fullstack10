import React, { useState, useEffect } from "react";
import Blog from "../../components/blog";

const BlogPage = () => {
  const initialData = [];
  const [blogs, setBlogs] = useState(initialData);

  //load DBase?
  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs"));
    if (blogs.length > 0) {
      setBlogs(blogs);
    } else {
      localStorage.setItem("blogs", JSON.stringify(initialData));
    }
  }, []);

  const deleteBlog = (id) => {
    const filteredBlog = blogs.filter((blog) => blog.id !== id);
    localStorage.setItem("blogs", JSON.stringify(filteredBlog));
    setBlogs(filteredBlog);
  };

  return (
    <div>
      <h1>Blogs</h1>
      <div style={{ display: "flex" }}>
        {blogs.map((blog, key) => (
          <Blog key={key} blog={blog} deleteBlog={deleteBlog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

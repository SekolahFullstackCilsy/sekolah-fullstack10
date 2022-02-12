import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Blog = ({ blog, deleteBlog }) => {
  return (
    <div className="blog-post">
      <Link to={`/blog/${blog.id}`}>
        <h3>{blog.title}</h3>
      </Link>
      <p>{blog.body}</p>

      <Link to={`/edit-blog/${blog.id}`}>
        <h6 style={{ color: "darkblue" }}>Edit Blog</h6>
      </Link>
      <h6 onClick={() => deleteBlog(blog.id)} style={{ color: "red" }}>
        Delete Blog
      </h6>
    </div>
  );
};

export default Blog;

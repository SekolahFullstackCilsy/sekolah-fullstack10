import React, { useState, useEffect } from "react";

const BlogDetailPage = ({ match }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const blogs = localStorage.getItem("blogs");
    setBlogs(JSON.parse(blogs));
  }, []);

  /*
  const test = [{ id: 1, name: "test" }];
  console.log(JSON.stringify(test));
  const testString = JSON.stringify(test);
  console.log(JSON.parse(testString));
  */
  console.log(match);
  const findBlog = blogs.find((blog) => blog.id === +match.params.id);
  console.log(findBlog);

  return (
    <div>
      <h1>{findBlog && findBlog.title}</h1>
      <p>{findBlog && findBlog.body}</p>
    </div>
  );
};

export default BlogDetailPage;

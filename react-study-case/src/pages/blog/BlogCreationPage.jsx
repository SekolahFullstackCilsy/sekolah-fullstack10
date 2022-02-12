import React, { useState, useEffect } from "react";

const BlogCreationPage = ({ history }) => {
  const [state, setState] = useState({
    title: "",
    body: "",
  });
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogs = localStorage.getItem("blogs");
    setBlogs(JSON.parse(blogs));
    console.log(JSON.parse(blogs));
  }, []);

  const handleChangeForm = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };
  //preventDefault() default browser
  const saveBlog = (e) => {
    e.preventDefault();

    const lastId = blogs.length + 1;
    blogs.push({
      id: lastId,
      title: state.title,
      body: state.body,
    });

    console.log(blogs);

    localStorage.setItem("blogs", JSON.stringify(blogs));

    history.push("/blog");
  };

  return (
    <div style={{ marginTop: "5rem" }}>
      <form onSubmit={(e) => saveBlog(e)}>
        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="Masukan title"
            name="title"
            value={state.title}
            onChange={(e) => handleChangeForm(e, "title")}
          />
        </div>
        <div>
          <label>Body</label>
          <input
            type="text"
            placeholder="Masukan body"
            name="body"
            value={state.body}
            //handleChangeForm
            onChange={(e) => handleChangeForm(e, "body")}
          />
        </div>
        <button type="submit">Save Blog</button>
      </form>
    </div>
  );
};

export default BlogCreationPage;

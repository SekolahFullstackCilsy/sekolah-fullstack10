import React, { useState, useEffect } from "react";

const BlogEditPage = ({ history, match }) => {
  const [state, setState] = useState({
    id: "",
    title: "",
    body: "",
  });
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs"));
    const findBlog = blogs.find((blog) => blog.id === +match.params.id);

    setBlogs(blogs);
    setState(findBlog);
  }, []);

  const handleChangeForm = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const saveBlog = (e) => {
    e.preventDefault();

    const findBlog = blogs.find((blog) => blog.id === +match.params.id);
    findBlog.title = state.title;
    findBlog.body = state.body;

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
          <textarea
            cols={20}
            rows={10}
            placeholder="Masukan body"
            name="body"
            value={state.body}
            //handleChangeForm
            onChange={(e) => handleChangeForm(e, "body")}
          >
            {state.body}
          </textarea>
        </div>
        <button type="submit">Save Blog</button>
      </form>
    </div>
  );
};

export default BlogEditPage;

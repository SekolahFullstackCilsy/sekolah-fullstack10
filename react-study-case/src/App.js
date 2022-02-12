import "./App.css";
import { NavLink, Route, Switch } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import BlogPage from "./pages/blog/BlogPage";
import BlogDetailPage from "./pages/blog/BlogDetailPage";
import BlogCreationPage from "./pages/blog/BlogCreationPage";
import BlogEditPage from "./pages/blog/BlogEditPage";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/create-blog">Create Blog</NavLink>
      </div>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route path="/blog/:id" component={BlogDetailPage} />
        <Route path="/create-blog/" component={BlogCreationPage} />
        <Route path="/edit-blog/:id" component={BlogEditPage} />
      </Switch>
    </div>
  );
}

export default App;

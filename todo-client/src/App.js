import "./App.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Auth from "./pages/Auth/Auth";
import Todos from "./pages/Todos/Todos";
import TodoAdd from "./pages/Todos/TodoAdd";
import TodoEdit from "./pages/Todos/TodoEdit";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todo" component={Todos} />
          <Route exact path="/add-todo" component={TodoAdd} />
          <Route exact path="/edit-todo/:id" component={TodoEdit} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Todo from './pages/todo/Todo';
import DetailTodo from './pages/todo/DetailTodo';
import AddTodo from './pages/todo/AddTodo';
import EditTodo from './pages/todo/EditTodo';
import DeleteTodo from './pages/todo/DeleteTodo';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Auth Route */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        {/* Todo Route */}
        <Route path="/todo" exact component={Todo} />
        <Route path="/todo/add" component={AddTodo} />
        <Route path="/todo/edit/:id" component={EditTodo} />
        <Route path="/todo/delete/:id" component={DeleteTodo} />
        <Route path="/todo/detail/:id" component={DetailTodo} />

        {/* Arahkan / ke /todo */}
        <Redirect from="/" to="/todo" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import ProfilePage from './pages/profile/ProfilePage';
import AboutPage from './pages/about/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Product from './pages/product/Product';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <div className="App">
      <NavLink activeClassName="menu-active" to="/">Home</NavLink>
      <NavLink activeClassName="menu-active" to="/profile">Profile</NavLink>
      <NavLink activeClassName="menu-active" to="/about">About</NavLink>
      <NavLink activeClassName="menu-active" to="/product">Product</NavLink>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/profile" component={ProfilePage} />
        <Redirect from="/tentang" to="/about/1" /> 
        <PrivateRoute path="/about/:id" component={AboutPage} />
        <PrivateRoute path="/product" component={Product}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;

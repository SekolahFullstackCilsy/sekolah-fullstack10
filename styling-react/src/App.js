import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Person from './components/Person';
import Auth from './pages/Auth';

function App() {
  const [name, setName] = useState('john');
  const [age, setAge] = useState(20);
  const [person, setPerson] = useState({
    name: 'john',
    age: 24
  });
  // console.log('helo')

  // useEffect(() => {
  //   console.log('mounting')
  // }, []);

  // useEffect(() => {
  //   console.log('updating: ' + name)
  //   console.log('umur: ' + age)
  // }, [name, age]);

  // useEffect(() => {
  //   return () => {
  //     console.log('unmounting')
  //   }
  // }, []);


  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/auth">Auth</NavLink>
          </li>
        </ul>
      </nav>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

      <div>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/auth" component={Auth} />
          <Route component={NotFound} />
        </Switch>
{/* 
        <button onClick={() => setName('Steven')}>Change Name</button>
        <button onClick={() => setAge(24)}>Change Age</button>
        <button onClick={() => setPerson({name: 'Stevent', age: 20})}>Change Person</button> */}
      </div>
      {/* <h1>Hallo {name}</h1>
      <Person person={person}/> */}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;

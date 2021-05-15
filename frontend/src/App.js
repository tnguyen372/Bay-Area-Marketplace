import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
//import Login from './pages/Login';
//import Signup from './pages/Signup';
import UserPage from './pages/UserPage.js';

const App = ({ ws }) => {
  // todo, add more pages!
  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/user"> User Page</Link>
      </nav>
      <Switch>
      <Route path="/user">
          <UserPage ws = { ws } />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
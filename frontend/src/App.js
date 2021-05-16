import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PostListing from './pages/PostListing';
//import Login from './pages/Login';
//import Signup from './pages/Signup';
import UserPage from './pages/UserPage';


const App = ({ ws }) => {
  // todo, add more pages!
  return (
    <div>
      <nav className="nav-bar">
      <Link to="/"> <button className="btn">Home</button></Link>
        <Link to="/postListing"><button className="btn">Post a Listing</button></Link>
        <Link to="/user"><button className="btn">User Page</button></Link>
      </nav>
      <Switch>
        <Route path="/user">
          <UserPage ws = { ws } />
        </Route>
        <Route path="/postListing">
          <PostListing ws = { ws } />
        </Route>
        <Route path="/">
          <Home ws = { ws }/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Home from './pages/Home';
import PostListing from './pages/PostListing';
//import Login from './pages/Login';
//import Signup from './pages/Signup';
import UserPage from './pages/UserPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = ({ ws }) => {
  // todo, add more pages!
  return (
    <div>
      <nav className="nav-bar">
      <Link to="/"> <Button id="button">Home</Button></Link>
        <Link to="/postListing"><Button id="button">Post a Listing</Button></Link>
        <Link to="/user"><Button id="button">User Page</Button></Link>
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
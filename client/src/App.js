import React from 'react';
import './App.css';
import NavBar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import {Home,Signin,Profile,Signup,CreatePost} from './components/screens'

function App() {
  return (
    <BrowserRouter>   
      <NavBar />
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/signup'>
          <Signup/>
        </Route>

        <Route path='/signin'>
          <Signin/>
        </Route>

        <Route path='/profile'>
          <Profile/>
        </Route>

        <Route path='/create'>
          <CreatePost/>
        </Route>
    </BrowserRouter>
  );
}

export default App;
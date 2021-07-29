import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home.js';
import Blog from './pages/blog.js';
import Post from './pages/post.js';
import Profile from './pages/profile.js';

import Login from './pages/login.js';
import Signup from './pages/signup.js';
import Create from './pages/create.js';

import TestUpload from './pages/testupload.js'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter >
        <Switch>
        
          <Route path='/' exact component={Home} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/post' exact component={Post} />
          <Route path='/post/:slug' exact render={props => <Post {...props} />} />
          <Route path='/profile/:slug' exact render={props => <Profile {...props} />} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/create' exact component={Create} />
          <Route path='/upload' exact component={TestUpload} />
        </Switch>

      </BrowserRouter>
    </div>
  )
}

export default App;

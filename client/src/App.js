import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home.js';
import Blog from './pages/blog.js';
import Post from './pages/post.js';

import Login from './pages/login.js';
import Create from './pages/create.js';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter >
        <Switch>
        
          <Route path='/' exact component={Home} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/post' exact component={Post} />

          <Route path='/login' exact component={Login} />
          <Route path='/create' exact component={Create} />
        </Switch>

      </BrowserRouter>
    </div>
  )
}

export default App;

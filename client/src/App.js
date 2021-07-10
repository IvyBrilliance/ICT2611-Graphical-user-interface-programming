import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home.js';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter >
        <Switch>
        
          <Route path='/' exact component={Home} />
        </Switch>

      </BrowserRouter>
    </div>
  )
}

export default App;

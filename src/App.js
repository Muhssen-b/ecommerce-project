import React from 'react';
import './App.css';
import Homepage from './Homepage/Homepage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShopPage from './Shop/Shop.js'


function App() {
  return ( 
  <div>
    <Router>
    <Switch>
      <Route exact path='/' component={Homepage} />
       <Route path='/shop' component={ShopPage} />
    </Switch>
    </Router>
  </div>
  );
}

export default App;

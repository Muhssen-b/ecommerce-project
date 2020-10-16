import React from 'react';
import './App.css';
import Homepage from './Homepage/Homepage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShopPage from './Shop/Shop.js'
import Header from './Header/Header'

function App() {
  return ( 
  <div>
    <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
       <Route path='/shop' component={ShopPage} />
    </Switch>
    </Router>
  </div>
  );
}

export default App;

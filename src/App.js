
import React from 'react';
import './App.css';
import Homepage from './Homepage/Homepage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShopPage from './Shop/Shop.js'
import Header from './Header/Header'
import SignInUp from './SignInUp/SignInUp'
import { auth } from './firebase/firebase.utils'

class App extends React.Component  {
  constructor(props) {
  super(props);

    this.state = {
      currentUser : null
    }
  }
  

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
   // auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user})
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const {currentUser} = this.state
  return ( 
  <div>
    <Router>
    <Header currentUser = {currentUser }/>
    <Switch>
      <Route exact path='/' component={Homepage} />
       <Route path='/shop' component={ShopPage} />
       <Route path='/signin' component={SignInUp} />
    </Switch>
    </Router>
  </div>
  );
}
};

export default App;
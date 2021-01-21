
import React from 'react';
import './App.css';
import Homepage from './Homepage/Homepage'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './Shop/Shop.js'
import Header from './Header/Header'
import SignInUp from './SignInUp/SignInUp'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component  {
  /*constructor(props) {
  super(props);

    this.state = {
      currentUser : null
    };
  }*/

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot(snapShot => {
      setCurrentUser ({
            id: snapShot.id,
            ...snapShot.data()
        });
        console.log(this.state)
      });
    }
    
    setCurrentUser({ userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
  return ( 
  <div>
    <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
       <Route path='/shop' component={ShopPage} />
       <Route exact path='/signin' render ={() => this.props.currentUser ? <Redirect to= '/' /> : (<SignInUp />)} component={SignInUp} />
    </Switch>
    </Router>
  </div>
  );
}
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
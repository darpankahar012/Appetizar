// import React from 'react';
// import './App.css';
// import { connect } from 'react-redux'
// import LoginComponent from './components/LoginComponentt'
// import SignUpComponent from './components/SignUpComponent'
// import { autoLogin, logout } from './actions/userActions'

// class App extends React.Component {

//   // componentDidMount(){
//   //   this.props.autoLogin()
//   // }

//   render() {
//     return (
//       <div className="App">
//         {
//           !this.props.userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome, {this.props.userReducer.user.username}</h1>
//         }
//         <SignUpComponent />
//         <LoginComponent />
//         <button>Logout</button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     userReducer: state.userReducer
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     autoLogin: () => dispatch(autoLogin()),
//     logout: () => dispatch(logout())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);



import React, { useEffect } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Sidebar from './components/Sidebar/Sidebar';

import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import LoginComponent from './components/LoginComponentt'
import SignUpComponent from './components/SignUpComponent'
import ForgotPassComponent from './components/ForgotPassComponent'
import VerifyOtpComponent from './components/VerifyOtpComponent'
// import {autoLogin} from './actions/userActions'

class App extends React.Component {

  render() {
    return (
      <>
        <Router>

        <Sidebar />

          <Switch>
            <Route exact path="/" render={(props) => <LoginComponent {...props} />} />
            <Route exact path="/signup" render={(props) => <SignUpComponent {...props} />} />
            <Route exact path="/forgot-password" render={(props) => <ForgotPassComponent {...props} />} />
            <Route exact path="/verify-otp" render={(props) => <VerifyOtpComponent {...props} />} />
          </Switch>

          {/* {
          !userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome, {userReducer.user.email}</h1>
        } */}
          {/* <SignUpComponent/> */}
          {/* <LoginComponent /> */}
        </Router>
      </>
    )
  }
}

export default App
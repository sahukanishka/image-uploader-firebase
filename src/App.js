import './App.css';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import React, { Component } from 'react';
import Signin from "./components/signin";
import Signup from "./components/signup";
import Hedaer from './components/header';
import Signout from './components/signout'
import Dashboard from './components/dashboard';
import Forgetpassword from './components/forgetpassword'
import { withFirebase } from "./components/firebase";
import * as ROUTES from "./routes/routes";




class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      authUser : null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }
 
  componentWillUnmount() {
    this.listener();
  }
  
  render(){
    return(
      <Router>
        <div className="App">
        <Hedaer authUser={this.state.authUser}/>
        <Route exact path={ROUTES.SIGNUP} component={Signup} />
        <Route exact path={ROUTES.SIGNIN} component={Signin}/>
        <Route exact path={ROUTES.SIGNOUT} component={Signout}/>
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard}/>
        <Route exact path={ROUTES.FORGETPASSWORD} component={Forgetpassword}/>
        </div>
      </Router>
  
    );
  }
}

export default withFirebase(App);

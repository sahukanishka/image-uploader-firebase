import './App.css';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import React from 'react';
import * as ROUTES from "./routes/routes"
import Signin from "./components/signin";
import Signup from "./components/signup";
import Hedaer from './components/header';
import Signout from './components/signout'
import Dashboard from './components/dashboard';
import Forgetpassword from './components/forgetpassword'


function App() {
  return (
    <div className="App">
      <Router>
        <Hedaer />
        <Route path={ROUTES.SIGNUP} component={Signup} />
        <Route path={ROUTES.SIGNIN} component={Signin}/>
        <Route path={ROUTES.SIGNOUT} component={Signout}/>
        <Route  path={ROUTES.DASHBOARD} component={Dashboard}/>
        <Route path={ROUTES.FORGETPASSWORD} component={Forgetpassword}/>
      </Router>
    </div>
  );
}

export default App;

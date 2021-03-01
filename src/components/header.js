import React from 'react'
import { Link } from 'react-router-dom'; 
import * as ROUTES from '../routes/routes';
import SignOut from '../components/signout';

const Hedaer = () => (
<div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ">
                <li class="nav-item">
                    <Link to={ROUTES.SIGNIN}>SIGN IN </Link></li>
                <li>
                </li>
                <li class="nav-item">
                    <Link to={ROUTES.SIGNUP}>Sign Up</Link> 
                </li>
                <li class="nav-item">
                  <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
                </li>
                <li class="nav-item">
                    <Link to={ROUTES.FORGETPASSWORD}>forgetpassword</Link>
                </li>
                <li>
                  <SignOut/>
                </li>
              </ul>
            </div>
            </nav>
    </div>



   
);

export default Hedaer ; 





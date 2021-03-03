import React from 'react'
import {withAuthorization} from './session';
const Home = () => (
            <div> 
              <h1>
                Home page 
              </h1>
              <p>Only for signin users</p>
            </div>
          );
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home); 
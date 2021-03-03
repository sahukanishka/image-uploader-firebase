import React from 'react';
import Upload from "./uploaderbox";
import {withAuthorization , AuthUserContext } from './session';


const Dashboard = () => (
    
    <AuthUserContext.Consumer>
      
        { authUser => (
             <div>
             <h1>Dashboard</h1>
             <h3>Upload your images</h3>
             <Upload/>
             </div>
        )}
       
  </AuthUserContext.Consumer>
);

const condition = authUser => authUser != null;
export default withAuthorization(condition)(Dashboard)     

import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'

import {withFirebase} from '../firebase'
import * as ROUTES from '../../routes/routes';
import { AuthUserContext } from '.';

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {
      componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
          authUser => {
            if (!condition(authUser)) {
              this.props.history.push(ROUTES.SIGNIN);
            }
          },
        );
      }
  
      componentWillUnmount() {
        this.listener();
      }
  
      render() {
        return (
          <Component {...this.props} />
          // <AuthUserContext.Consumer>
          //   {authUser =>
          //     {
                
          //         // return condition(authUser) ? <Component {...this.props} /> : null
          //     }
          //   }
          // </AuthUserContext.Consumer>
        );
      }
    }
  
    return compose(
      withRouter,
      withFirebase,
    )(WithAuthorization);
  };
  
  export default withAuthorization;
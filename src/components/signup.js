import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../components/firebase";
import * as ROUTES from "../../src/routes/routes";
import { compose } from 'recompose';

const Signup = () => (
  <div>
    <h1>Signup</h1>
    <Signupform />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordone: "",
  passwordtwo: "",
  error: null,
};

class Signupformbase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
      const {passwordone,email} = this.state ; 
      this.props.firebase
      .doCreateUserWithEmailAndPassword(email,passwordone)
      .then(authUser => {
          this.setState({ ...INITIAL_STATE});
          this.props.history.push(ROUTES.DASHBOARD);
          console.log("sucess*****")
      })
      .catch(error => {
          this.setState({error});
          console.log(error)

      });

      e.preventDefault();
  };

  render() {
    const { username, email, passwordone, passwordtwo, error } = this.state;

    const isInvalid =
        passwordtwo !== passwordone ||
        passwordone === "" ||
        email === "" ||
        username === "";
    return (
      <form onSubmit={this.onSubmit}>
        <ul>
          <li>
            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />
          </li>
          <li>
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email"
            />
          </li>

          <li>
            <input
              name="passwordone"
              value={passwordone}
              onChange={this.onChange}
              type="text"
              placeholder="Password"
            />
          </li>

          <li>
            <input
              name="passwordtwo"
              value={passwordtwo}
              onChange={this.onChange}
              type="text"
              placeholder="Confirm Password"
            />
          </li>
        </ul>

        <button disabled={isInvalid} type="submit">Sign Up</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const Signuplink = () => (
  <h6>
    Signup <Link to={ROUTES.SIGNUP}>Sign Up</Link>
  </h6>
);
const Signupform = withRouter(withFirebase(Signupformbase));

export default Signup;
export { Signupform, Signuplink };

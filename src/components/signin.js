import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../components/firebase";
import { compose } from 'recompose';
import * as ROUTES from "../../src/routes/routes";

const signin = () => (
    <div>
        <h1>Signin</h1>
        <Signinform />
    </div>
)

const INITIAL_DATA = {
    email : "",
    password : "",
    error : null
}


class Signinformbase extends Component{
    constructor(props){
        super(props);
        this.state={...INITIAL_DATA}
    }


    onSubmit = e => {
        const {email,password} = this.state ; 
        this.props.firebase
        .doSignInWithEmailAndPassword(email,password)
        .then(()=>{
            this.setState({...INITIAL_DATA});
            this.props.history.push(ROUTES.DASHBOARD);
        
        })
        .catch(error=>{
            this.setState({error});
        });

        e.preventDefault();

    };

  
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        };


    render(){
        const {email,password,error} = this.state ; 

        const isInValid = 
        password === "" || 
            email === ""; 

        return(
        <form onSubmit={this.onSubmit}>
            <ul>
                <li>
            <input
            name="email"
            value = {email}
            type="text"
            onChange = {this.onChange}
            placeholder="email"
            />
            </li>
            <li>
            <input
            name="password"
            value ={password}
            type="text"
            onChange={this.onChange}
            placeholder="Password"
            />
            </li>
            </ul>

            <button disabled={isInValid} type="submit">Sign in</button>
            {error && <p>{error.message}</p>}

        </form>
        );
    }
}

const Signinform = compose(withRouter,withFirebase)(Signinformbase);

export {Signinform} ; 
export default signin ;
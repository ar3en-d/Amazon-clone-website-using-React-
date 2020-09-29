import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    
         const login = (event) => {
        event.preventDefault(); // stops refresh. 
        // login logic
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in, redirect to homepage
                history.push("/");
            })
            .catch((e) => alert(e.message));
    };


 
    const register = (event) => {
        event.preventDefault(); // stops refresh. 
        // register logic

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //created a user and logged in, redirect to homepage
                history.push("/");
            })
            .catch((e) => alert(e.message));
    };



    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://1000logos.net/wp-content/uploads/2019/07/Amazon-logo-2000%E2%80%93present.jpg" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail (phone for mobile accounts)</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__Signin">Sign in</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
               Need help?</p>
                <button onClick={register} className="login_Register">Create your Amazon account </button>
            </div>


        </div>
    );
}

export default Login;

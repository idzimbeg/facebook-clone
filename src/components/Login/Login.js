import React, { useState } from "react";
import "firebase/compat/app";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";

import classes from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classes.login} id="login-page">
      <h1>Facebook-Clone</h1>
      <div className={classes.login__container}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          className={classes.login__textBox}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={classes.login__textBox}
        />
        <button
          className={classes.login__btn}
          onClick={() => auth.logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button
          onClick={() => auth.signInWithRedirect(new GoogleAuthProvider())}
          className={classes.login__btn}
        >
          Login with Google
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
export default Login;

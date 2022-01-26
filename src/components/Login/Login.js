import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase/firebase";
import { useAuthState } from "../../hooks/hooks";
import classes from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, initializing } = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (initializing) {
      return;
    }
    if (user) navigate("/home");
  }, [user, initializing]);
  return (
    <div className={classes.login}>
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
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button onClick={signInWithGoogle} className={classes.login__btn}>
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

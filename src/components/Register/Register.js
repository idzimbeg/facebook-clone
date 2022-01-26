import React, { useEffect, useState } from "react";
import { useAuthState } from "../../hooks/hooks";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Register.module.css";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase/firebase";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { user, initializing } = useAuthState(auth);
  const history = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (initializing) return;
    if (user) history.replace("/dashboard");
  }, [user, initializing]);

  return (
    <div className={classes.register}>
      <div className={classes.register__container}>
        <input
          type="text"
          className={classes.register__textBox}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className={classes.register__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className={classes.register__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={register} className={classes.register__btn}>
          Register
        </button>
        <button onClick={signInWithGoogle} className={classes.register__btn}>
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}
export default Register;

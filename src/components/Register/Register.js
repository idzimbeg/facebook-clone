import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { auth } from "../../firebase/firebase";

import classes from "./Register.module.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { user } = auth;
  const navigate = useNavigate();
  const db = getFirestore();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (user) navigate.replace("/home");
  }, [user]);

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className={classes.register}>
      <h1>Facebook-Clone</h1>
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
        <div>
          Already have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}
export default Register;

import React from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "./hooks/Hooks";

import Home from "./components/Home/Home";

import classes from "./App.module.css";

firebase.initializeApp({
  apiKey: "AIzaSyC-5edXzqLNXllj_waVsOdkZ0u1NYm4f2g",
  authDomain: "facebook-clone-f08e8.firebaseapp.com",
  projectId: "facebook-clone-f08e8",
  storageBucket: "facebook-clone-f08e8.appspot.com",
  messagingSenderId: "16918220334",
  appId: "1:16918220334:web:e6fc92abc324b841d759bf",
});

function App() {
  const { user, initializing } = useAuthState(firebase.auth());

  const signIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error(error.message);
    }
  };

  const renderContent = () => {
    if (initializing) {
      return <div>Loading...</div>;
    }

    if (user) return <Home user={user} />;

    return (
      <div className={classes.app}>
        <div>
          <h1>facebook</h1>
          <p>
            Facebook vas povezuje s drugima i olakšava razmjenu informacija.
          </p>
        </div>
        <div className={classes.card}>
          <input
            type="email"
            placeholder="E-mail address"
            required
            className={classes.input}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className={classes.input}
          />
          <button onClick={signIn} className={classes.button}>
            Sign in
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div style={{ maxHeight: "calc(100% - var(--topbar-height))" }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;

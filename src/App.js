import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { AuthProvider } from "../src/contexts/AuthContext";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import "./App.css";

function App() {
  return (
    <div style={{ maxHeight: "calc(100% - var(--topbar-height))" }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

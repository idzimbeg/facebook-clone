import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import './App.css';

function App() {
  return (
    <div>
      <div style={{ maxHeight: "calc(100% - var(--topbar-height))" }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

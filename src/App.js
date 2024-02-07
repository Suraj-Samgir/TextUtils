import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import About from "./About";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343A46";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          home="Home"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

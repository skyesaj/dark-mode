import React, { useState } from "react";
import DarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = DarkMode("dark_mode", false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  // console.log("dark mode", darkMode);
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;

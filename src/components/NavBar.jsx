// src/components/Navbar.js

import { NavLink } from "react-router-dom";

import { useContext } from "react"; // <== ADD
import { ThemeContext } from "./../context/theme.context"; // <== ADD

function Navbar() {
  const { toggleTheme, mode } = useContext(ThemeContext); // <== ADD
  return (
    <nav className={"Navbar " + mode}>
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>
      <button className="theme-btn" onClick={toggleTheme}>
        {mode}
      </button>
    </nav>
  );
}

export default Navbar;

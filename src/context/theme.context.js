// src/context/theme.context.js

import { createContext } from "react";
import { useState } from "react";
const ThemeContext = createContext();

function ThemeProviderWrapper({ children }) {
  const [toggle, setToggle] = useState(false);
  const [mode, setMode] = useState("light");
  //   const mode = "dark";
  //   let lightMode = "light";
  const toggleTheme = () => {
    setToggle(!toggle);
    setMode(toggle ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      {" "}
      {/* <== UPDATE */}
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProviderWrapper };

import React, { createContext, useState} from "react";

export const Theme = createContext();
const ThemeContext = ({ children }) => {
  const getTheme =
    localStorage.getItem("theme") || localStorage.setItem("theme", "light");
  const [theme, setTheme] = useState(getTheme);


  const toggleDarkTheme = () => {
    setTheme("dark");
    localStorage.setItem('theme','dark');
  };
  const toggleLightTheme = () => {
    setTheme("light");
    localStorage.setItem('theme','light');
  };
  return (
    <Theme.Provider value={{ theme, toggleDarkTheme, toggleLightTheme }}>
      {children}
    </Theme.Provider>
  );
};

export default ThemeContext;

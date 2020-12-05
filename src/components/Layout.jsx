import React, { useContext } from "react";
import { Theme } from "../context/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useContext(Theme);
  return (
    <div
      className="wrapper"
      style={{
        backgroundColor: theme === "light" ? "" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;

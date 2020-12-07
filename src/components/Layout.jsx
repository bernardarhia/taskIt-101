import React, { useContext } from "react";
import { Theme } from "../context/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useContext(Theme);
  return (
    <div
      className="wrapper"
      style={{
        backgroundColor: theme === "light" ? "#cec9c054" : "#2c2c2c",
        color: theme === "light" ? "#383c47" : "#fff",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;

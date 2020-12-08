import React, { useContext } from "react";
import { Theme } from "../context/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useContext(Theme);
  return (
    <div
      className="wrapper"
      style={{
        backgroundColor: theme === "light" ? "#cec9c000" : "#161616",
        color: theme === "light" ? "#383c47" : "#fff",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;

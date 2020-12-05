import React, { useState, useContext } from "react";
import { Theme } from "../../context/ThemeContext";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import { Link } from "react-router-dom";
import { FiCalendar, FiFolder, FiGrid, FiTrash } from "react-icons/fi";

const Sidebar = () => {
  const { toggleDarkTheme, toggleLightTheme, theme } = useContext(Theme);
  const [toggleTheme, setToggleTheme] = useState(true);

  const handleTheme = () => {
    if (toggleTheme) {
      toggleDarkTheme();
      setToggleTheme(!toggleTheme);
    } else {
      toggleLightTheme();
      setToggleTheme(!toggleTheme);
    }
  };
  return (
    <div className="sidebar">
      <div className="lists">
        <div className="icon">
          {[
            { icon: <FiGrid />, route: "/" },
            { icon: <FiFolder />, route: "/tasks" },
            { icon: <FiCalendar />, route: "/calendar" },
            { icon: <FiTrash />, route: "/trash" },
          ].map((i, index) => {
            return (
              <Link
                to={i.route}
                style={{ color: theme === "light" ? "#333" : "#fff" }}
                key={index}
              >
                {i.icon}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="icons" onClick={handleTheme}>
        {theme === "light" ? (
          <img src={moon} alt={moon} />
        ) : (
          <img src={sun} alt={sun} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;

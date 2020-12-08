import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiMoreHorizontal, FiEdit2, FiTrash } from "react-icons/fi";
import { findTable, deleteTable } from "../../utils/query";
import DisplayTags from "../minor/DisplayTags";
import { Theme } from "../../context/ThemeContext";
const TaskTitle = ({ title, setTaskTitles }) => {
  const { theme } = useContext(Theme);

  const [showDropdown, setShowDropdown] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      try {
        const response = await findTable(title);
        setTags([...tags, response.tags]);
      } catch (e) {
        console.log(e);
      }
    };
    getTags();
  }, [title, tags]);

  const handleDelete = async (title) => {
    const result = await deleteTable(title);
    setTaskTitles([...result]);
    setShowDropdown(false);
  };
  return (
    <div
      className="task-title"
      style={{ backgroundColor: theme === "light" ? "#fff" : "#2c2c2c" }}
    >
      <div className="title-content">
        <div className="head">
          <h2>{title && title}</h2>
        </div>
        <div className="dropdown">
          <Link to="#" style={{ color: theme === "light" ? "#222" : "#fff" }}>
            <FiMoreHorizontal onClick={() => setShowDropdown(!showDropdown)} />
          </Link>

          <div
            className={`dropdown-menu ${showDropdown ? "show" : ""}`}
            style={{ backgroundColor: theme === "light" ? "#fff" : "#ccc" }}
          >
            <Link to={`/tasks/${title}`} style={{ color: theme === "light" ? "#222" : "#fff" }}>
              <span className="icon">
                <FiEye />
              </span>
              <span className="text">View</span>
            </Link>

            <Link to="#" style={{ color: theme === "light" ? "#222" : "#fff" }}>
              <span className="icon">
                <FiEdit2 />
              </span>
              <span className="text">Edit</span>
            </Link>

            <Link to="#" onClick={() => handleDelete(title)} style={{ color: theme === "light" ? "#222" : "#fff" }}>
              <span className="icon">
                <FiTrash />
              </span>
              <span className="text">Delete</span>
            </Link>
          </div>
        </div>
      </div>
      {tags && <DisplayTags tag={tags} title={title} />}
    </div>
  );
};

export default TaskTitle;

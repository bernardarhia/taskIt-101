import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiMoreHorizontal, FiEdit2, FiTrash } from "react-icons/fi";
import { findTable, deleteTable } from "../../utils/query";
import { addOneToTrash } from "../../utils/trash";

import DisplayTags from "../minor/DisplayTags";
import { Theme } from "../../context/ThemeContext";
import { TaskListContext } from "../../context/TaskContext";
const TaskTitle = ({ title, setTaskTitles, isInTrash }) => {
  const { theme } = useContext(Theme);
  const { trashItems, setTrashItems } = useContext(TaskListContext);

  const [showDropdown, setShowDropdown] = useState(false);
  const [tags, setTags] = useState([]);

  // console.log(isInTrash);
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

  // useEffect(()=>{
  //   console.log(isInTrash);
  // },[])

  const handleDelete = async (title) => {
    const response = await findTable(title);
    // setTrashItems([response]);
    // console.log(response);
    await addOneToTrash(title, response);
    const result = await deleteTable(title);
    setTaskTitles([...result]);
    setShowDropdown(false);
  };
  return (
    <div
      className="task-title"
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#2c2c2c",
        boxShadow: theme === "dark" ? "none" : "0 0 15px #c8c8c84a",
      }}
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
            {!isInTrash && (
              <Link
                to={`/tasks/${title}`}
                style={{ color: theme === "light" ? "#222" : "#fff" }}
              >
                <span className="icon">
                  <FiEye />
                </span>
                <span className="text">View</span>
              </Link>
            )}
            {isInTrash ? (
              <Link
                to="#"
                style={{ color: theme === "light" ? "#222" : "#fff" }}
              >
                <span className="icon">
                  <FiEdit2 />
                </span>
                <span className="text">Restore</span>
              </Link>
            ) : (
              <Link
                to="#"
                style={{ color: theme === "light" ? "#222" : "#fff" }}
              >
                <span className="icon">
                  <FiEdit2 />
                </span>
                <span className="text">Edit</span>
              </Link>
            )}

            {isInTrash ? (
              <Link
                to="#"
                onClick={() => handleDelete(title)}
                style={{ color: theme === "light" ? "#222" : "#fff" }}
              >
                <span className="icon">
                  <FiTrash />
                </span>
                <span className="text">Remove</span>
              </Link>
            ) : (
              <Link
                to="#"
                onClick={() => handleDelete(title)}
                style={{ color: theme === "light" ? "#222" : "#fff" }}
              >
                <span className="icon">
                  <FiTrash />
                </span>
                <span className="text">Delete</span>
              </Link>
            )}
          </div>
        </div>
      </div>
      {tags && <DisplayTags tag={tags} title={title} />}
    </div>
  );
};

export default TaskTitle;

import React, { useContext, useState, useEffect } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { FiCalendar, FiTrash } from "react-icons/fi";
import { Theme } from "../../context/ThemeContext";
import { deleteItem, updateItem } from "../../utils/query";
import Input from "../major/Input";
const Item = ({ item, table, setAllItems }) => {
  const { theme } = useContext(Theme);

  const deleteTask = async (id) => {
    const deleted = await deleteItem(table, id);
    setAllItems([...deleted]);
  };

  const handleDone = (id) =>{
    const updateTaskAsCompleted = async ()=>{
      const result = await updateItem(table,id)
      setAllItems([...result]);
    }
    updateTaskAsCompleted()
  }
  return (
    <div
      className="list"
      style={{
        color: theme === "light" ? "#222" : "#fff",
        backgroundColor: theme === "dark" ? "#2c2c2c" : "#fff",
        boxShadow: theme === "dark" ? "none" : "0 0 15px #c8c8c84a",
      }}
    >
      <div className="title-info">
        <div className="check">
          <Input
            type="checkbox"
            defaultChecked={item && item.isCompleted}
        onChange={()=>handleDone(item.id)}
            id={item.id}
          />
        </div>
        <div className="text">{item && item.text}</div>
      </div>

      <div className="priority">
        <div className="title">
          {item && item.priority.toLowerCase() === "high" ? (
            <span>🔥</span>
          ) : (
            <span>
              <AiOutlineFire />
            </span>
          )}

          <span>Priority</span>
        </div>
        <div
          className="text"
          style={{
            color:
              item && item.priority.toLowerCase() === "high"
                ? "red"
                : item.priority.toLowerCase() === "low"
                ? "green"
                : "yellow",
          }}
        >
          {item && item.priority}
        </div>
      </div>
      <div className="time">
        <div className="title">
          <span>
            <FiCalendar />
          </span>
          <span>Time</span>
        </div>
        <div className="text">yesterday</div>
      </div>

      <div className="stage">
        <button
          style={{
            backgroundColor: item && item.isCompleted ? "#ffffac82" : "",
            color: item && item.isCompleted ? "#bebe2e" : "",
          }}
        >
          completed
        </button>
        {item && item.isCompleted && (
          <FiTrash onClick={() => deleteTask(item.id)} />
        )}
      </div>
    </div>
  );
};

export default Item;

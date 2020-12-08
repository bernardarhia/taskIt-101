import React, { useContext, useState } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { FiCalendar, FiTrash } from "react-icons/fi";
import { Theme } from "../../context/ThemeContext";
import { deleteItem } from "../../utils/query";
import Input from "../major/Input";
const Item = ({ item, table, setAllItems }) => {
  const { theme } = useContext(Theme);

  const deleteTask = async (id)=>{
    const deleted = await deleteItem(table,id)
    setAllItems([...deleted])
  
  }
  const [done, setDone] = useState('')
  return (
    <div
      className="list"
      style={{
        color: theme === "light" ? "#222" : "#fff",
        backgroundColor:theme === "dark" ? "#2c2c2c" : "#fff",
      }}
    >
      <div className="title-info">
        <div className="check">
          <Input
            type="checkbox"
            defaultChecked={item && item.isCompleted}
          value={done}
onChange={(e)=>{
  setDone(e.target.value)
  console.log(done);
}}            />
        </div>
        <div className="text">{item && item.text}</div>
      </div>

      <div className="priority">
        <div className="title">
          <span>
            <AiOutlineFire />
          </span>
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
      {item && item.isCompleted && <FiTrash  onClick={()=>deleteTask(item.id)}/>}
      </div>
    </div>
  );
};

export default Item;

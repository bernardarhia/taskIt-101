import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiMoreHorizontal, FiEdit2, FiTrash } from "react-icons/fi";
import { findTable,deleteTable } from "../../utils/query";
import DisplayTags from "../minor/DisplayTags";
const TaskTitle = ({title,setTaskTitles}) => {
  const [showDropdown, setShowDropdown] = useState(false);
    const [tags, setTags] = useState([]);

  useEffect(()=>{
      const getTags = async ()=>{
         try{
            const response = await findTable(title)
            setTags([...tags, response.tags]);
         }catch(e){
             console.log(e);
         }
      }
      getTags()
  },[title])

  const handleDelete = async (title) => {
    const result = await deleteTable(title)
    setTaskTitles([...result])
    setShowDropdown(false)
  }
  return (
    <div className="task-title">
        <div className="title-content">
      <div className="head">
        <h2>{title && title}</h2>
      </div>
      <div className="dropdown">
        <Link to="#">
          <FiMoreHorizontal onClick={()=> setShowDropdown(!showDropdown)} />
        </Link>
       
          <div className={`dropdown-menu ${showDropdown ? 'show':''}`}>
            <Link to={`/tasks/${title}`}>
              <span className="icon">
                <FiEye />
              </span>
              <span className="text">View</span>
            </Link>

            <Link to="#">
              <span className="icon">
                <FiEdit2 />
              </span>
              <span className="text">Edit</span>
            </Link>

            <Link to="#" onClick={()=> handleDelete(title)}>
              <span className="icon" >
                <FiTrash />
              </span>
              <span className="text">Delete</span>
            </Link>
          </div>
      </div>
        </div>
    {tags && <DisplayTags tag={tags} title={title}/>}
    </div>
  );
};

export default TaskTitle;

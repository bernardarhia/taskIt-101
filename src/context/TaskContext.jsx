import React, { createContext, useState } from "react";

export const TaskListContext = createContext();
const TaskContextProvider = ({ children }) => {
  
  // adding a single task
 const [showInput, setShowInput] = useState(false)
  const [AllItems, setAllItems] = useState([])
  const [trashItems, setTrashItems] = useState([])
  const [tasksTitles, setTaskTitles] = useState([])
  const [countTrash, setCountTrash] = useState(0)
 
  return (
    <TaskListContext.Provider
      value={{  showInput, setShowInput, setAllItems, AllItems,tasksTitles, setTaskTitles,trashItems, setTrashItems,countTrash, setCountTrash}}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskContextProvider;

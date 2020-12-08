import React, { createContext, useState } from "react";

export const TaskListContext = createContext();
const TaskContextProvider = ({ children }) => {
  
  // adding a single task
 const [showInput, setShowInput] = useState(false)
  const [AllItems, setAllItems] = useState([])
  const [tasksTitles, setTaskTitles] = useState([])
 
  return (
    <TaskListContext.Provider
      value={{  showInput, setShowInput, setAllItems, AllItems,tasksTitles, setTaskTitles}}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskContextProvider;

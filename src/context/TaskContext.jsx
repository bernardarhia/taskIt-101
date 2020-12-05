import React, { createContext, useState } from "react";

export const TaskListContext = createContext();
const TaskContextProvider = ({ children }) => {
  
  // adding a single task
 const [showInput, setShowInput] = useState(false)

 
  return (
    <TaskListContext.Provider
      value={{  showInput, setShowInput}}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskContextProvider;

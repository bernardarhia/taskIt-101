import React, { useState } from "react";

import TaskContextProvider from "./context/TaskContext";
import ThemeContext from "./context/ThemeContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trash from "./pages/Trash";
import Calendar from "./pages/Calender";
import Tasks from "./pages/Tasks";
const App = () => {

  return (
    <ThemeContext>
      <TaskContextProvider>
        <>
          <Router>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/trash' exact component={Trash} />
            <Route path='/tasks' exact component={Tasks} />
            <Route path='/calendar' exact component={Calendar} />
            </Switch>
          </Router>
        </>
      </TaskContextProvider>
    </ThemeContext>
  );
};

export default App;



import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import Layout from "../components/Layout";
import Button from "../components/major/Button";
import MainContent from "../components/major/MainContent";
import Sidebar from "../components/major/Sidebar";
import Input from "../components/major/Input";
import {
  addItem,
  addOne,
  createTable,
  deleteTable,
  findTable,
  deleteItem,
  findItem,
  updateItem,
} from "../utils/query";
const Tasks = ({ match }) => {
  useEffect(() => {
    var myDate = new Date(new Date().getTime());
    const isToday = (someDate) => {
      const today = new Date();
      const result =
        someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear();
      return result || someDate;
    };
    console.log(isToday(myDate));
  }, [match]);
  return (
    <Layout>
      <Sidebar />
      <MainContent>
        <div className="task-lists">
          <div className="list">
            <div className="title-info">
              <div className="check">
                <Input type="checkbox" />
              </div>
              <div className="text">First title of project</div>
            </div>

            <div className="priority">
              <div className="title">Priority</div>
              <div className="text">High</div>
            </div>
            <div className="time">
              <div className="title">Time</div>
              <div className="text">Today</div>
            </div>


            <div className="stage">
              <button>completed</button>
            </div>
          </div>





          <div className="add-item">
            <Button size="btn__normal">
              <FiPlus /> Add Item
            </Button>
          </div>
        </div>
      </MainContent>
    </Layout>
  );
};

export default Tasks;

/*

{id:uuidv4(),text:'hello world',isComleted:false, duration:10}



 */

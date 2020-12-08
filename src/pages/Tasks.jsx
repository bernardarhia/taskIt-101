import React, { useEffect, useState, useContext } from "react";
import {FiPlus } from "react-icons/fi";
import Layout from "../components/Layout";
import Button from "../components/major/Button";
import MainContent from "../components/major/MainContent";
import Sidebar from "../components/major/Sidebar";
import { TaskListContext } from "../context/TaskContext";
import AddItemForm from "../components/minor/AddItemForm";
import Item from "../components/minor/Item";
import { getAllItems } from "../utils/query";
import localForage from "localforage"
const Tasks = ({ match }) => {
  const [showForm, setShowForm] = useState(false);
  const hideShowForm = () => {
    setShowForm(!showForm);
  };

  const { AllItems, setAllItems } = useContext(TaskListContext);

  useEffect(()=>{
    const table = match.params.name
   const getAll = async ()=>{
    const response = await getAllItems(table)
      response && setAllItems([...response]);
    }
    getAll();
  },[setAllItems, match.params.name]);
  return (
    <>
      <AddItemForm
        hideShowForm={hideShowForm}
        showForm={showForm}
        table={match.params.name}
        setShowForm={setShowForm}
      />
      <Layout>
        <Sidebar />
        <MainContent>
          <div className="task-lists">
            {AllItems &&
              AllItems.map((item, index) => (
                <Item key={index} item={item} table={match.params.name} setAllItems={setAllItems} />
              ))}

            <div className="add-item">
              <Button size="btn__normal" onClick={hideShowForm}>
                <FiPlus /> Add Item
              </Button>
            </div>
          </div>
        </MainContent>
      </Layout>
    </>
  );
};

export default Tasks;

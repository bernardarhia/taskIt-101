import React, { useEffect } from "react";
import Layout from "../components/Layout";
import MainContent from "../components/major/MainContent";
import Sidebar from "../components/major/Sidebar";
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
import { v4 as uuidv4 } from "uuid"; // import {c}
const Tasks = () => {
  useEffect(() => {
    // addOne("facebook", {
    //     id: uuidv4(),
    //     tags: ["Web Development", "Mobile App"],
    //     date: new Date(),
    //     startDate: new Date(),
    //     finishDate: new Date("2020-12-03"),
    //       item:[]
    //   })
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err.message));
    // addItem("facebook", {
    //   id: uuidv4(),
    //   text: "hello world",
    //   isCompleted: false,
    //   duration: 10,
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err.message));

    // updateItem('facebook','bf321c56-4f2a-4612-825d-598683ab19dc',{text:'Yoo you got updated'})
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err.message));
  }, []);
  return (
    <Layout>
      <Sidebar />
      <MainContent>
        <h1>This is testing the layout of the component</h1>
      </MainContent>
    </Layout>
  );
};

export default Tasks;

/**
 *  addOne("google", {
      id: uuidv4(),
      tags: ["Web Development", "Mobile App"],
      date: new Date(),
      startDate: new Date(),
      finishDate: new Date("2020-12-03"),
        item:[]
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));

{id:uuidv4(),text:'hello world',isComleted:false, duration:10}



 */

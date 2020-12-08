import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import Container from "../components/major/Container";
import Sidebar from "../components/major/Sidebar";
import TaskTitle from "../components/major/TaskTitle";
import { TaskListContext } from "../context/TaskContext";
import MainContent from '../components/major/MainContent';
const Trash = () => {
  const { trashItems, setTrashItems } = useContext(TaskListContext);

  useEffect(() => {
    
  }, [trashItems, setTrashItems]);
  return (
    <Layout>
      <Sidebar />
      <MainContent>

      <Container>
     <div className="title-container">
     <TaskTitle title={trashItems} isInTrash />
     </div>
      </Container>
      </MainContent>
    </Layout>
  );
};

export default Trash;

import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import Container from "../components/major/Container";
import Sidebar from "../components/major/Sidebar";
import TaskTitle from "../components/major/TaskTitle";
import { TaskListContext } from "../context/TaskContext";
import MainContent from "../components/major/MainContent";
import { fetchTrashTables } from "../utils/trash";
const Trash = () => {
  const { trashItems, setTrashItems } = useContext(TaskListContext);

  useEffect(() => {
    async function allTrash() {
      const data = await fetchTrashTables();
      setTrashItems([...Object.keys(data)]);
    }
    allTrash();
  }, [trashItems, setTrashItems]);
  return (
    <Layout>
      <Sidebar />
      <MainContent>
        <Container>
          <div className="title-container">
            {trashItems &&
              trashItems.map((item, index) => (
                <TaskTitle title={item} isInTrash key={index} />
              ))}
          </div>
        </Container>
      </MainContent>
    </Layout>
  );
};

export default Trash;

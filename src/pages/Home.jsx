import { Alert, AlertIcon, CloseButton } from '@chakra-ui/react'
import React,{useState, useEffect, useContext} from 'react'
import Layout from '../components/Layout'
import MainContent from '../components/major/MainContent'
import Sidebar from '../components/major/Sidebar'
import TaskTitle from '../components/major/TaskTitle'
import TaskForm from '../components/minor/TaskForm'
import { TaskListContext } from '../context/TaskContext'
import { getTables } from '../utils/query'
// import 
const Home = () => {

    const {tasksTitles, setTaskTitles} = useContext(TaskListContext);

    useEffect(()=>{
        const fetchTables = async ()=>{
            try{
                const response = await getTables();
                if(response)setTaskTitles([...response])
                console.log(response);
            }catch(err){
                console.log(err);
            }
        }
        fetchTables()
    },[setTaskTitles]);
    return (
        <>
        <TaskForm />
         <Layout>
              <Sidebar />
              <MainContent containBtn>
                  <div className="title-container">
                  {tasksTitles && tasksTitles.map((title, index)=><TaskTitle title={title} setTaskTitles={setTaskTitles} key={index} />)}
                  {tasksTitles.length === 0 && <h1>No Tasks</h1>}
                  </div>
              </MainContent>
            </Layout>   
        </>
    )
}

export default Home

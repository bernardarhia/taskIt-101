import React from 'react'
import Layout from '../components/Layout'
import MainContent from '../components/major/MainContent'
import Sidebar from '../components/major/Sidebar'
import RightSidebar from '../components/minor/RightSidebar'
import TaskForm from '../components/minor/TaskForm'

const Home = () => {
    return (
        <>
        <TaskForm />
         <Layout>
              <Sidebar />
              <MainContent />
            <RightSidebar />
            </Layout>   
        </>
    )
}

export default Home

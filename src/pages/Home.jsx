import React from 'react'
import Layout from '../components/Layout'
import MainContent from '../components/major/MainContent'
import Sidebar from '../components/major/Sidebar'

const Home = () => {
    return (
        <>
         <Layout>
        
              <Sidebar />
              <MainContent />
            
            </Layout>   
        </>
    )
}

export default Home

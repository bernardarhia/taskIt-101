import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/major/Container'
import Sidebar from '../components/major/Sidebar'

const Calender = () => {
    return (
        <Layout>
            <Sidebar />
            <Container>
                This is the calendar page
            </Container>
        </Layout>
    )
}

export default Calender

import Container  from './Container';
import React,{useState, useEffect, useContext} from 'react'

import Button from './Button';
import { FiPlus } from 'react-icons/fi';
import { TaskListContext } from '../../context/TaskContext';
const MainContent = ({children, containBtn}) => {
    const {showInput, setShowInput} = useContext(TaskListContext)
    const showForm = ()=>{
        setShowInput(true)
    }
    return (
        <div className='main-content'>
            <Container>
               
                {containBtn && <div className="add-task__btn">
                    <Button shape="rounded" onClick={showForm} color="blue"><FiPlus /></Button>
                </div>}
               
                {children}
            </Container>
        </div>
    )
}

export default MainContent

// shower your blessing - be magnified

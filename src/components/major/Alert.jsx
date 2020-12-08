import React from 'react'

const Alert = ({text, type}) => {
 
    return (
        <>
      
        <div className={`${type}`}>
           <p>{text}</p>
        </div>
        </>
    )
}

export default Alert

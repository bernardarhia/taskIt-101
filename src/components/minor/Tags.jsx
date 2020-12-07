import React,{ useState } from 'react'
import { FiX } from 'react-icons/fi'

const Tags = ({tags, setTags}) => {
    const removeTag = (tag)=>{
        const removed = tags.filter((el)=>el !== tag)
        setTags(removed)
    }
    return (
        <>
        {tags && tags.map((tag,index)=>{
           return <p className="tag-body" key={index}>
                    <span className="tag">{tag}</span>
                    <span className="close">
                      <FiX onClick={()=>removeTag(tag)}/>
                    </span>
                  </p>
        })}
        </>
    )
}

export default Tags

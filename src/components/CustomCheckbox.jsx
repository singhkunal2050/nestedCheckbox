import React, { useState } from 'react'
import data from '../data/data.js'
// import Checkbox from './Checkbox.jsx'

function CustomCheckbox({ parentId }) {
  const [checkboxState, setcheckboxState] = useState(data)
  const [expanded , setexpanded] = useState(true);

  const handleToggle = (e) => {
    console.log(e)
    setexpanded(!expanded)
  }

  const hasChildren = (name) =>{
    let results = checkboxState.filter(elem=>elem.parentId==name)
    return results.length > 0
  }

  const getChildren = (name) => {
    let children = checkboxState.filter(elem=>elem.parentId==name)
    return children.map(elem => <CustomCheckbox parentId={elem.parentId} /> )
  }

  const idToRender = data.filter(elem=>elem.parentId==parentId);
  let obj = {};
  idToRender.forEach((e) => obj[e] = { checked: false, intermediate: false })

  console.log({data , idToRender , m: Math.random() })
  return (
    <>
      {idToRender.map(elem => {
        return <div className="list" key={elem.name }>
          <span className='icon' onClick={handleToggle} data-has-child={ hasChildren(elem.name)}>{expanded ? "-" : "+"}</span>
          <input type="checkbox" checked={false} onChange={()=>{}} className={expanded ? 'expanded' : '' }   /> {elem.name}
          {expanded && getChildren(elem.name)}
        </div>
        // return <Checkbox  />
      })}
    </>
  )
}

export default CustomCheckbox
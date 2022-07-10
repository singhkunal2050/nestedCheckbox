import React, { useState } from 'react'
import data from '../data/data.js'
// import Checkbox from './Checkbox.jsx'

function CustomCheckbox({ parentId }) {
  const [checkboxState, setcheckboxState] = useState(data)
  const [expanded , setexpanded] = useState(true);

  const handleClick = (e) => {
    console.log(e)
    setexpanded(!expanded)
  }

  const hasChildren = (name) =>{
    let results = checkboxState.filter(elem=>elem.parentId==name)
    console.log(results.length > 0)
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
          <input type="checkbox" checked={false} onChange={handleClick} className={expanded && 'expanded' }  data-has-child={ hasChildren(elem.name)} /> {elem.name}
          {expanded && getChildren(elem.name)}
        </div>
        // return <Checkbox  />
      })}
    </>
  )
}

export default CustomCheckbox
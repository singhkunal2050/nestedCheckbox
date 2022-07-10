import React, { useState } from 'react'
import data from '../data/data.js'
// import Checkbox from './Checkbox.jsx'

function CustomCheckbox({ parentId }) {
  // const [checkboxState, setcheckboxState] = useState(data)
  const [expanded, setexpanded] = useState([]);

  // let CheckBoxStateObj = {};
  // data.forEach(elem=> CheckBoxStateObj[elem.name]={ checked : false , intermediate : false , expanded : false }  )
  

  const handleToggle = (e) => {
    let current = e.target.dataset.name
    console.log(current)
    if(expanded.includes(current)){
      console.log('gotit')
      setexpanded([...expanded.filter(elem=>elem!=current)])
    }else{
       setexpanded([...expanded , current])
    }
  }

  const hasChildren = (name) => {
    let results = data.filter(elem => elem.parentId == name)
    return results.length > 0
  }

  const getChildren = (name) => {
    let children = data.filter(elem => elem.parentId == name)
    return children.map(elem => <CustomCheckbox parentId={elem.parentId} />)
  }

  const idToRender = data.filter(elem => elem.parentId == parentId);
  let obj = {};
  idToRender.forEach((e) => obj[e] = { checked: false, intermediate: false })

  console.log({ data, idToRender, m: Math.random() })
  return (
    <>
      {idToRender.map(elem => {
        return <div className="list" key={elem.name}>
          <span className='icon' data-name={elem.name} onClick={handleToggle} data-has-child={hasChildren(elem.name)}>{expanded.includes(elem.name)  ? "-" : "+"}</span>
          <input type="checkbox" value={elem.name} checked={false} onChange={() => { }} className={expanded.includes(elem.name) ? 'expanded' : ''} /> {elem.name}
          {expanded.includes(elem.name) && getChildren(elem.name)}
        </div>
        // return <Checkbox  />
      })}
    </>
  )
}

export default CustomCheckbox
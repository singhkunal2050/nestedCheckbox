import React, { useState } from 'react'
import data from '../data/data.js'

function CustomCheckbox({ parentId }) {
  const [checkboxState, setcheckboxState] = useState(data)

  // const handleChange = (e) => {
  //   console.log(e)
  //   setchecked(!checked)
  // }

  const getChildren = (name) => {
    let children = checkboxState.filter(elem=>elem.parentId==name)
    return children.map(elem => <CustomCheckbox parentId={name} /> )
  }

  const idToRender = data.filter(elem=>elem.parentId==parentId);
  let obj = {};
  idToRender.forEach((e) => obj[e] = { checked: false, intermediate: false })

  console.log({data , idToRender , m: Math.random() })
  return (
    <>
      {idToRender.map(elem => {
        return <li key={elem.name}>
          <input type="checkbox" checked={false} onChange={()=>{}} /> {elem.name}
          {getChildren(elem.name)}
        </li>
      })}
    </>
  )
}

export default CustomCheckbox
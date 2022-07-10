import React, { useState } from 'react'
import data from '../data/data.js'
// import Checkbox from './Checkbox.jsx'

const isVisited = []; //nodes which are already visited

function CustomCheckbox({ parentId }) {
  const [checkboxState, setcheckboxState] = useState(data)
  const [expanded, setexpanded] = useState([]);
  const [checked, setchecked] = useState([])

  // let CheckBoxStateObj = {};
  // data.forEach(elem=> CheckBoxStateObj[elem.name]={ checked : false , intermediate : false , expanded : false }  )
  // setcheckboxState(CheckBoxStateObj)
  // console.log(CheckBoxStateObj)

  const handleToggle = (e) => {
    let current = e.target.closest('.icon').dataset.name
    console.log(current)
    if (expanded.includes(current)) {
      setexpanded([...expanded.filter(elem => elem != current)])
    } else {
      setexpanded([...expanded, current])
    }
  }


  const handlecheckToggle = (e) => {
    let current = e.target.value
    if (checked.includes(current)) {
      setchecked([...checked.filter(elem => elem != current)])
    } else {
      setchecked([...checked, current])
    }
  }

  const hasChildren = (name) => {
    let results = data.filter(elem => elem.parentId == name)
    return results.length > 0
  }

  const getChildren = (name) => {
      // let children = data.filter(elem => elem.parentId == name)
      // isVisited.push(name)
      // console.log(isVisited)
      // if(isVisited.includes(name))
      // return children.map(elem => <CustomCheckbox key={elem.name} parentId={elem.parentId} />)
      return <CustomCheckbox key={name} parentId={name} />
    }

  const idToRender = data.filter(elem => elem.parentId == parentId);
  console.log({idToRender , t:Math.random()})
  // let obj = {};
  // idToRender.forEach((e) => obj[e] = { checked: false, intermediate: false })
  // console.log({ data, idToRender, m: Math.random() })

  return (
    <>
      {idToRender.map(elem => {
        return <div className="list" key={elem.name}>
          <div className="parent">
            <span className='icon' data-name={elem.name} onClick={handleToggle} data-has-child={hasChildren(elem.name)}>{expanded.includes(elem.name) ? <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.25 0.25C0.835786 0.25 0.5 0.585787 0.5 1C0.5 1.41421 0.835786 1.75 1.25 1.75L1.25 0.25ZM8.75 1.75C9.16421 1.75 9.5 1.41421 9.5 1C9.5 0.585786 9.16421 0.25 8.75 0.25V1.75ZM1.25 1.75L8.75 1.75V0.25L1.25 0.25L1.25 1.75Z" fill="#74838F" />
            </svg>
              :
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.75 1.25C5.75 0.835786 5.41421 0.5 5 0.5C4.58579 0.5 4.25 0.835786 4.25 1.25H5.75ZM4.25 8.75C4.25 9.16421 4.58579 9.5 5 9.5C5.41421 9.5 5.75 9.16421 5.75 8.75H4.25ZM1.25 4.25C0.835786 4.25 0.5 4.58579 0.5 5C0.5 5.41421 0.835786 5.75 1.25 5.75V4.25ZM8.75 5.75C9.16421 5.75 9.5 5.41421 9.5 5C9.5 4.58579 9.16421 4.25 8.75 4.25V5.75ZM4.25 1.25V8.75H5.75V1.25H4.25ZM1.25 5.75H8.75V4.25H1.25V5.75Z" fill="#74838F" />
              </svg>
            }</span>
            <label htmlFor={elem.name}>
              <input type="checkbox" id={elem.name} value={elem.name} checked={checked.includes(elem.name)} onChange={handlecheckToggle} className={expanded.includes(elem.name) ? 'expanded' : ''} /> 
              <span className="input-title" data-bold-title={hasChildren(elem.name) ? true : false } >{elem.name}</span>
            </label>
          </div>
          <div className="children">
            {expanded.includes(elem.name) && getChildren(elem.name)}
          </div>
        </div>
        // return <Checkbox  />
      })}

   
    </>
  )
}

export default CustomCheckbox
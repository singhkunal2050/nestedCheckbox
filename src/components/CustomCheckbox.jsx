import React, { useState } from 'react'
import data from '../data/data.js'


function CustomCheckbox({ parentId }) {
  const [checkboxState, setcheckboxState] = useState(data.reduce((c, v) => {
    c[v.name] = c[v.name] || {};
    c[v.name].data = v;
    c[v.name].intermediate = false;
    c[v.name].expanded = false;
    c[v.name].checked = false;
    return c;
  }, {}))

  // console.log(checkboxState);

  const handleToggle = (e) => {
    let current = e.target.closest('.icon').dataset.name
    setcheckboxState({
      ...checkboxState,
      [current]: { ...checkboxState[current], expanded: !checkboxState[current].expanded }
    })
  }

  const handlecheckToggle = (e) => {
    let current = e.target.value
    const parentOfCurrentChild = checkboxState[current].data.parentId
    // console.log({ parentOfCurrentChild })

    if (parentOfCurrentChild == null) {
      setcheckboxState({
        ...checkboxState,
        [current]: { ...checkboxState[current], checked: !checkboxState[current].checked }
      })
    } else {
      setcheckboxState({
        ...checkboxState,
        [current]: { ...checkboxState[current], checked: !checkboxState[current].checked },
        [parentOfCurrentChild]: { ...checkboxState[parentOfCurrentChild], intermediate: true }
      })
    }


    // Firing Custom Event on Change
    const customChangeEvent = new Event('customChange');
    e.target.dispatchEvent(customChangeEvent);
    // handleIntermediateState(current);
  }

  const hasChildren = (name) => {
    let results = data.filter(elem => elem.parentId == name)
    return results.length > 0
  }

  const getChildren = (name) => {
    return <CustomCheckbox key={name} parentId={name} />
  }

  return (
    <>
      {data.filter(elem => elem.parentId == parentId).map(elem => {
        return <div className="list" key={elem.name}>
          <div className="parent">
            <span className='icon' data-name={elem.name} onClick={handleToggle} data-has-child={hasChildren(elem.name)}>{checkboxState[elem.name].expanded ? <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.25 0.25C0.835786 0.25 0.5 0.585787 0.5 1C0.5 1.41421 0.835786 1.75 1.25 1.75L1.25 0.25ZM8.75 1.75C9.16421 1.75 9.5 1.41421 9.5 1C9.5 0.585786 9.16421 0.25 8.75 0.25V1.75ZM1.25 1.75L8.75 1.75V0.25L1.25 0.25L1.25 1.75Z" fill="#74838F" />
            </svg>
              :
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.75 1.25C5.75 0.835786 5.41421 0.5 5 0.5C4.58579 0.5 4.25 0.835786 4.25 1.25H5.75ZM4.25 8.75C4.25 9.16421 4.58579 9.5 5 9.5C5.41421 9.5 5.75 9.16421 5.75 8.75H4.25ZM1.25 4.25C0.835786 4.25 0.5 4.58579 0.5 5C0.5 5.41421 0.835786 5.75 1.25 5.75V4.25ZM8.75 5.75C9.16421 5.75 9.5 5.41421 9.5 5C9.5 4.58579 9.16421 4.25 8.75 4.25V5.75ZM4.25 1.25V8.75H5.75V1.25H4.25ZM1.25 5.75H8.75V4.25H1.25V5.75Z" fill="#74838F" />
              </svg>
            }</span>
            <label htmlFor={elem.name}>
              <input type="checkbox" id={elem.name} value={elem.name} checked={checkboxState[elem.name].checked} onChange={handlecheckToggle} className={checkboxState[elem.name].expanded ? 'expanded' : ''} data-intermediate={checkboxState[elem.name].intermediate} />
              <span className="input-title" data-bold-title={hasChildren(elem.name) ? true : false} >{elem.name}</span>
            </label>
          </div>
          <div className="children">
            {checkboxState[elem.name].expanded && getChildren(elem.name)}
          </div>
        </div>
        // return <Checkbox  />
      })}


    </>
  )
}

export default CustomCheckbox
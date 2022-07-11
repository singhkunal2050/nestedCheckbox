import { useState } from 'react'
import './App.css'
import CustomCheckbox from './components/CustomCheckbox'
import data from './data/data.js'

function App() {
  const [count, setCount] = useState(0)

  const [checkboxState, setcheckboxState] = useState(data.reduce((c, v) => {
    c[v.name] = c[v.name] || {};
    c[v.name].data = v;
    c[v.name].intermediate = false;
    c[v.name].expanded = false;
    c[v.name].checked = false;
    return c;
  }, {}))


  return (
    <div className='app'>
      <h4 className="heading">Custom Recursive Nested Checkbox by  <a href="https://singhkunal2050.dev/" target="_blank"> singhkunal2050 </a> </h4>
      <CustomCheckbox data={data} checkboxState={checkboxState} setcheckboxState={setcheckboxState} parentId={null} />

      <footer>
        <p> Fork me on Github <a target="_blank" href="https://github.com/singhkunal2050/nestedCheckbox">https://github.com/singhkunal2050/nestedCheckbox</a>
        </p>
      </footer>

    </div>
  )
}

export default App

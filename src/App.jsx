import { useState } from 'react'
import './App.css'
import CustomCheckbox from './components/CustomCheckbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h4 class="heading">Custom Recursive Nested Checkbox by  <a href="https://singhkunal2050.dev/" target="_blank"> singhkunal2050 </a> </h4>
      <CustomCheckbox parentId={null} />

      <footer>
        <p> Fork me on Github <a target="_blank" href="https://github.com/singhkunal2050/nestedCheckbox">https://github.com/singhkunal2050/nestedCheckbox</a>
        </p>
      </footer>

    </div>
  )
}

export default App

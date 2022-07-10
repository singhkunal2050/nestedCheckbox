import { useState } from 'react'
import './App.css'
import CustomCheckbox from './components/CustomCheckbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <CustomCheckbox parentId={null} />
    </div>
  )
}

export default App

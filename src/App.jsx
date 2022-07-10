import { useState } from 'react'
import './App.css'
import CustomCheckbox from './components/CustomCheckbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CustomCheckbox parentId={null} />
  )
}

export default App

import { useState } from 'react'
import './App.css'
import CustomCheckbox from './components/CustomCheckbox'
import data from './data/data.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CustomCheckbox data={data} />
  )
}

export default App

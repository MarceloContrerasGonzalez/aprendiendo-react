import { useState } from 'react'
import './App.css'

const Button = ({operation, children, setCount}) => {
  
  const handleClick = () => {
    if (operation === 'suma'){
      setCount((prev) => prev + 1)
    } else if (operation === 'resta'){
      setCount((prev) => (prev > 0 ? prev - 1 : 0))
    } else if (operation === 'limpiar')
      setCount(0)
  }
  
  return(
    <div>
    <button onClick={handleClick}>
      {children}
    </button>
  </div>
  )
}


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>{count}</div>
      <Button operation={'suma'} setCount={setCount}>aumentar</Button>
      <Button operation={'limpiar'} setCount={setCount}>resetear</Button>
      <Button operation={'resta'} setCount={setCount}>restar</Button>      

    </>    
  )
}

export default App

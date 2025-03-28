import { useState } from 'react'
import { Task } from './components/Task.jsx'
import './App.css'

function App() {
  
  const [text, setText] = useState('')
  const [tareas, setTareas] = useState([])
  
  const agregarTarea = () =>{
   if (text.trim() !== ''){
     setTareas([...tareas, text]) 
     setText('')
   }
  }

  const eliminarTarea = (index) =>{
    console.log('eliminando tarea')
    let copia = [...tareas]
    copia.splice(index, 1)
    setTareas(copia)
   }

  const limpiarTareas = () =>{
    setTareas([])
  }

  return(
    <main className='base'>
      <h1 className='title'>Lista</h1>
      <section className='uppertask'>
        <button className='buttons-base' onClick={limpiarTareas}>Limpiar</button>
        <input className='input-base' value={text} onChange={(e) => setText(e.target.value)} placeholder='Ingere una tarea'></input>
        <button className='buttons-base' onClick={agregarTarea}>Añadir</button>
      </section>

      <Task eliminarTarea={eliminarTarea} tareas={tareas}></Task>
    </main>
  )
}

export default App

import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useEffect, useState, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(()=>{

    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('no se puede buscar una pelicula vacia')
      return
    }
  
    if (search.match(/^\d+$/)){
      setError('no se puede buscar una pelicula con un numero')
      return
    }
  
    if (search.length < 1){
      setError('La busqueda debe tener al menos 1 caracter')
      return
    }
  
    setError(null)
  },[search])

  return {search, setSearch, error}
}

function App() {
  const [sort, setSort] = useState(false)
  const {search, setSearch, error } = useSearch()
  const {movies, loading, getMovies} = useMovies({search, sort})

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log('search', search)
      getMovies({ search })
    }, 1000), [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
  }

  const handleChange = (event) =>{
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () =>{
    setSort(!sort)
  }


  return (
    <div className='page'>
    
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{border: '1px solid transparet', borderColor: error ? 'red' : 'transparent'}} onChange={handleChange} value={search} name='query' placeholder='Ingresa la pelicula de interes...'/>
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p >{error}</p>}
      </header>
      
      <main>
      {
        loading ? <p>Cargando...</p>: <Movies movies={movies}/>
      }
        
      </main>
    </div>
  )
}

export default App
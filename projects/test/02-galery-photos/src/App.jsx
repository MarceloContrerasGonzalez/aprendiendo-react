import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const apiKey = import.meta.env.VITE_UNPLASH_API_KEY; 
  const [galery, setGalery] = useState("")
  const [search, setSearch] = useState("")
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    if (!search) return;
    setLoading(true)
    fetch(`https://api.unsplash.com/search/photos?query=${search}`, {
      headers: {
          "Authorization": `Client-ID ${apiKey}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setImages(data.results.map(img => img.urls.small)); // Extrae las URLs de las imágenes en tamaño pequeño     
    })
    . catch(error => console.error("Error:", error))
     .finally(setLoading(false)) 
  } ,[search])


  
  return (
    <main>
      <h1>App Galery</h1>
      <p>Write what you want to see on this page!</p>
      <section>
        <input value={galery} onChange={(e) => setGalery(e.target.value)} placeholder='Ingrese lo que desea buscar en la galeria'/>
        <button onClick={()=> setSearch(galery)}>Buscar</button>
      </section>

      <section>
      {loading && <p>Loading Gallery</p>}
      {images.map((img, index) => (
        <img key={index} src={img} />
      ))
        }
      </section>
    </main>
  )
}

export default App

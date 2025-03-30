import { useEffect, useState } from "react"
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT ='https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL =  'https://cataas.com/cat/says/'


export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    
    //hacemos fetching de las frases
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }, [])

    //Conseguimos la imagen en caso de actualizar el fact
    useEffect(() =>{
        // Extraer las tres primeras palabras
        if(!fact) return
        const threeFirstWords = fact.split(' ', 3).join(' ')

        // Construir directamente la URL de la imagen
        setImageUrl(`${CAT_PREFIX_IMAGE_URL}${threeFirstWords}`)
    }, [fact])


    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            <img src={imageUrl} alt={`Imagen extraida de las 3 primeras palabras de una frase aleatoria.`}/>
        </main>
    )
}

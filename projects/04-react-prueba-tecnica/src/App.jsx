import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"

export function App () {
    const { fact, refreshRandomFact} = useCatFact()
    const { imageUrl} = useCatImage({ fact})
    
    const handleClick = async () => {
        refreshRandomFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Change Quote & Image</button>
            {fact && <p>{fact}</p>}
            <img src={imageUrl} alt={`Imagen extraida de las 3 primeras palabras de una frase aleatoria.`}/>
        </main>
    )
}

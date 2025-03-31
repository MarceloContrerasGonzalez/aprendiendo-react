import { useEffect, useState } from "react"
import { CAT_PREFIX_IMAGE_URL } from "../CONST"


export function useCatImage ({fact}){

    const [imageUrl, setImageUrl] = useState()
    
    useEffect(() =>{
        // Extraer las tres primeras palabras
        if(!fact) return
        
        const threeFirstWords = fact.split(' ', 3).join(' ')

        // Construir directamente la URL de la imagen
        setImageUrl(`${CAT_PREFIX_IMAGE_URL}${threeFirstWords}`)
    }, [fact])

    return { imageUrl }
}
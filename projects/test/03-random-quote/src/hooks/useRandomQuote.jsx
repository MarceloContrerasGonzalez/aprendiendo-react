import { useEffect, useState } from "react"

const useRandomQuote = () =>{
    const [quote, setQuote] = useState('')

    const fetchQuote = () => {
        fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setQuote(data.content)
        })
        .catch((error) =>{
            console.error("Error fetching quote: ",error)
        })
    };

    useEffect(()=>{
        fetchQuote()
    },[])

    return {quote, fetchQuote}
    }

export default useRandomQuote
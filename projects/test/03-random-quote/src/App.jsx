import './App.css'
import useRandomQuote from './hooks/useRandomQuote'

function App() {

const {quote, fetchQuote} = useRandomQuote();

  return (
    <main>
      <h1>Quote App</h1>
      <section>
        <p>{quote}</p>
      </section>
      <section>
        <button onClick={fetchQuote}>Cambiar Frase</button>
      </section>
    </main>
  )
}

export default App

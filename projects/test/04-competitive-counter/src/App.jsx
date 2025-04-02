import './App.css'

function App() {

  return (
    <main>
    <h1>COMPETITIVE COUNTER</h1>
    <p>CLICK THE BUTTON FROM THE TEAM YOU WANT TO SUPPORT</p>
    <section className='teamboard'>
      <article className='minusboard'>
        <p>TEAM ➖</p>
        <button>DISMINUIR</button>
      </article>
      <article className='plusboard'>
        <p>TEAM ➕</p>
        <button>AUMENTAR</button>
      </article>
    </section>
    </main>
  )
}

export default App

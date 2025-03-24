import { useState } from 'react'
import './App.css'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import confetti from 'canvas-confetti'

function App() {

  /* const board = Array(9).fill(null) */
  /* creamos un estado del tablero para poder definir cada casilla y si contiene 'X' o 'O' */
  const [board, setBoard] = useState(Array(9).fill(null))

  /*  ademas necesitamos un estado para saber de que jugador es el turno actualmente */
  const [turn, setTurn] = useState(TURNS.X) /* seteamos con X para definir que la X partira jugando */

  const [winner, setWinner] = useState(null)

 
  const updateBoard = (index) => {
    //no actualizamos posicion si ya fue registrado algo.
    if (board[index] || winner) return

    //Actualizar el tablero
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    //Cambiamos el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X /* Basicamente si el turno es X entonces el nuevo turno es O. si no, el nuevo turno es X */
    setTurn(newTurn)

    //revisamos si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
      /* alert(`El ganador es ${newWinner}`)  */
    } else if (checkEndGame(newBoard)){
      setWinner(false)// esto seria un empate
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  

  return (
    <main className="board">
      <h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        {
          board.map((square, index) => {
            return(
              <Square key={index} index={index} updateBoard={updateBoard}> {/* ya que renderizaremos una lista de elementos es importante que usemos una key. */}
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O} >
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  )
}

export default App

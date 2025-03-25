import { WINNER_COMBINATION } from "../constants"

WINNER_COMBINATION
//Revisamos si gano alguien
export const checkWinnerFrom = (boardToCheck) =>{
    for (const combo of WINNER_COMBINATION){
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a] 
      } 
    }
    //si no ha ganado nadie
    return null
  }

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }
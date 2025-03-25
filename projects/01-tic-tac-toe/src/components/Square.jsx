export const Square = ({ children, isSelected, updateBoard, index}) => {
    //constante para alternar el turno en el diseño
    const className = `square ${isSelected ? 'is-selected' : ''}`
  
    //funcion para cuando se haga click en los cuadrados y se marque
    const handleClick = () => {
      updateBoard(index)
    }
  
    //Aqui tenemos como se veria cada cuadrado
    return(
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }
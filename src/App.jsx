/* eslint-disable react/prop-types */
/* 
Game
    Board
        Square
    Histoty

*/

import { useState } from "react"



function Square({ value, onSquareClick }) {


  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg hover:bg-teal-200 cursor-pointer"
    >
      {value}
    </button>
  )
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext,setXIsNext]=useState(true)

  function handleClick(i) {
    // console.log(i)
    if (squares[i]) {
      return 
    }

    const nextSquares = squares.slice() //make copy of array
    if(xIsNext){
      nextSquares[i] = "❎" //this set new ith index value to X
    }else{
      nextSquares[i] = "⭕"
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext)
  }

  return (
    <>
      <div className="flex ">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

    </>
  )

}

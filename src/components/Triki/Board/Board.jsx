import Square from '../Square/Square';
import {calculateWinner} from '../../../utils/calculateWinner';
import { useContext, useState } from 'react';
import { LanguageContext } from '../../../context/ProviderLanguage';
import style from './style.module.css';



// eslint-disable-next-line react/prop-types
function Board({ xIsNext, squares, onPlay }) {
  
  const {changeLanguage} = useContext(LanguageContext);
   
  
  function handleClick(i) {
  const winner = calculateWinner(squares).winner;
    if (winner || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const { winner, line } = calculateWinner(squares);
  
  
  let status;
  if (winner) {
    status = `${changeLanguage('won-game')} ${winner}`;
  } else if (squares.every(square => square !== null)) {
    status = `${changeLanguage('tied-game')}`;
  } else {
    status = `${changeLanguage('next-player')} ${xIsNext ? 'X' : 'O'}`;
  }
  


 


  


  return (
    <>
      <div className={style.status}>{status}</div>
      <div className={style["board-row"]}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} isMatch={line.includes(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} isMatch={line.includes(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} isMatch={line.includes(2)} />
      </div>
      <div className={style["board-row"]}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} isMatch={line.includes(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} isMatch={line.includes(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} isMatch={line.includes(5)}/>
      </div>
      <div className={style["board-row"]}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} isMatch={line.includes(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} isMatch={line.includes(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} isMatch={line.includes(8)}/>
      </div>
    </>
  );
}


export default Board;

import { useContext, useEffect, useState } from 'react';
import Board from '../Board/Board'
import { LanguageContext } from '../../../context/ProviderLanguage';
import style from './style.module.css';

export default function Game() {
 
 const initialHistory = JSON.parse(localStorage.getItem('gameHistory')) || [Array(9).fill(null)];

 
  const [history, setHistory] = useState(initialHistory);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];


  const {changeLanguage} = useContext(LanguageContext);
   
     useEffect(() => {
    localStorage.setItem('gameHistory', JSON.stringify(history));
    }, [history]);


  function handlePlay(nextSquares) {
    
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
     
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handleReset(){
     
      setHistory([Array(9).fill(null)]);
       jumpTo(0);
     
  }

 

  const moves = history.map((squares, move) => {

    
    let description;
    if (move > 0) {
      description = `${changeLanguage("move")} ` + move;
    
    } else{
      description =  `${changeLanguage("move-0")} `;
      
    }
    return (
      <li key={move}>
        <button className={style.btnMove} onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className={style.game}>
      <div className={style["game-board"]}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={style["game-info"]}>
         <button className={style.btnReset} onClick={()=>handleReset()} >{changeLanguage("reset-button")}</button>
         <p>{changeLanguage("go-to")} : </p>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}



import style from './style.module.css';

// eslint-disable-next-line react/prop-types
function Square({ value, onSquareClick, isMatch }) {
  
  return (
    <button className={`${style.square}  ${isMatch &&(style.match)} `} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
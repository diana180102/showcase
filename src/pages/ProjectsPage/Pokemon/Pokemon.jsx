import { useContext, useRef } from "react";
import style from "./style.module.css";
import {useNavigate } from "react-router-dom";
import { PokemonContext } from "../../../context/ProviderPokemon";

function Pokemon() {
  
  const usernameRef = useRef();
  
  const {setUsername} = useContext(PokemonContext);
   const navigate = useNavigate();
  

  

 

  const handleSubmit = (e) =>{
     e.preventDefault();
     const newUsername = usernameRef.current.value;
     setUsername(newUsername );
     localStorage.setItem('username', newUsername );

     navigate("/pokemonFavorites");
  }

  

  

  return (
    <div className="container">
      <div className={style.login}>
        <img src="/assets/pokeapi.png" alt="pokemon" />
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            className={`${"input"}`}
            type="text"
            placeholder="username"
            ref={usernameRef}
            
          />
          <button className={`${"btn"} ${style.btnLogin}`} type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default Pokemon;

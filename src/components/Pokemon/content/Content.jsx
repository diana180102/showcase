import style from "./style.module.css";
import CardsPokemon from "../CardsPokemon/CardsPokemon";
import { useContext } from "react";
import { PokemonContext } from "../../../context/ProviderPokemon";

function Content() {
  const { setUsername, favoritesPokemon } = useContext(PokemonContext);

  const exit = () => {
    setUsername("");
    localStorage.setItem("username", "");
  };

 

  return (
    <div className={style.content}>
      <div className={style["content-header"]}>
        <h2>Favorites</h2>
        <button 
        className={`${"btn"} ${style["btn-exit"]}`} 
        type="button"
        onClick={exit}>
          {" "}
          Exit{" "}
        </button>
      </div>
      <div className={style["container-cards"]}>
        {favoritesPokemon.map(pokemon =>(
          <CardsPokemon 
          key={pokemon.id} 
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.avatarUrl}
          types={pokemon.types}
          />
        ))
          
        }
        
      </div>
    </div>
  );
}

export default Content;

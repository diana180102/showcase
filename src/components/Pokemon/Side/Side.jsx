import { useContext, useRef, useState } from "react";
import style from "./style.module.css";
import { PokemonContext } from "../../../context/ProviderPokemon";
import {
  createFavorite,
  removeFavorite,
} from "../../../services/favoritesPokemon";
import { typeColors } from "../../../styles/typePokemon";

function Side() {
  const pokemonRef = useRef();
  const {
    setPokemonName,
    selectPokemon,
    favoritesPokemon,
    setFavoritesPokemon,
  } = useContext(PokemonContext);

  console.log(selectPokemon);
  

  const [loading, setLoading] = useState(false);

  const isFavorite = favoritesPokemon.some(
    (favorite) => favorite.name === selectPokemon?.name
  )
    ? true
    : false;
  
  //Remover favoritos
  function handleRemoveFavorite() {
    const favorites = favoritesPokemon.find(
      (f) => f.name === selectPokemon?.name
    );

    removeFavorite(favorites.id)
      .then(() => {
        setFavoritesPokemon((prev) =>
         prev.filter(
          (fav) => fav.name !== selectPokemon?.name)
        );
      })
      .catch((e) => console.log("No se ha podido eliminar" + e));
  }
   
   //agregar favoritos
  function handleFavorite(e) {
    e.preventDefault();

    if (selectPokemon) {
      const pokemonFavorite = {
        id: selectPokemon.id,
        name: selectPokemon.name,
        types: selectPokemon.types,
        avatarUrl:
          selectPokemon.sprites.other["official-artwork"].front_default,
      };

       if (!isFavorite){
         setFavoritesPokemon((prev) =>[
            ...prev, pokemonFavorite
         ]);
       }

      createFavorite(pokemonFavorite)
       .catch((error) => console.log(error));
    }
  }
  
  //Acción de busque de pokemon
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPokemonName(pokemonRef.current.value.toLowerCase());
    setLoading(false);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className={style.side}>
      <form onSubmit={handleSearch} className={style.search}>
        <input
          className="input"
          type="text"
          ref={pokemonRef}
          placeholder="Pokemon name"
        />
        <button className="btn">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : selectPokemon && selectPokemon.sprites ? (
        <div className={style.pokemonView}>
          <h2>{capitalizeFirstLetter(selectPokemon.name)}</h2>
          <p className={style.subtitle}>#00{selectPokemon.id}</p>
          <img
            className={style["pokemon-image"]}
            src={
              selectPokemon.sprites.other["official-artwork"].front_default ||
              "/path/to/placeholder-image.png"
            }
            alt={selectPokemon.name || "Pokémon"}
          />
          <div className={`${style["types-container"]} `}>
            {selectPokemon.types?.map((type, index) => (
              <p
                key={index}
                style={{ backgroundColor: typeColors[type.type.name] }}
              >
                {capitalizeFirstLetter(type.type.name)}
              </p>
            )) || <p>Unknown</p>}
          </div>
          <div className={style.containerStats}>
            <div className={style.typeStat}>
              <div className={style.stats}>
                <img src="/assets/weight.svg" alt="Weight" />
                <p>{selectPokemon.weight / 10 || 0} kg</p>
              </div>
              <p>Weight</p>
            </div>
            <div className={style.divisor}></div>
            <div className={style.typeStat}>
              <div className={style.stats}>
                <img src="/assets/heigth.svg" alt="Height" />
                <p>{selectPokemon.height / 10 || 0} m</p>
              </div>
              <p>Height</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No Pokémon selected</p>
      )}
      <button
        className={`btn ${style["btn-favorite"]}`}
        onClick={isFavorite ? handleRemoveFavorite : handleFavorite}
      >
        <img
          src={
            isFavorite
              ? "/assets/isfavorite.svg"
              : "/assets/favorite.svg"
          }
          alt={isFavorite ? "Remove Favorite" : "Add to Favorites"}
        />
        {isFavorite ? "Remove Favorite" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default Side;

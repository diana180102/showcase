import { useContext, useRef, useState } from "react";
import style from "./style.module.css";
import { PokemonContext } from "../../../context/ProviderPokemon";

function Side() {
    
    const pokemonRef = useRef();
    const { setPokemonName, selectPokemon } = useContext(PokemonContext);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setPokemonName(pokemonRef.current.value.toLowerCase());
        setLoading(false);
    }

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    console.log(selectPokemon);

    return (
        <div className={style.side}>
            <form onSubmit={handleSearch} className={style.search}>
                <input 
                    className={style.input} 
                    type="text" 
                    ref={pokemonRef}
                    placeholder="Pokemon name" 
                />
                <button 
                    className={style.btn}
                >
                    Search
                </button>
            </form>
            {loading ? (
                <p>Loading...</p>
            ) : (
                selectPokemon && selectPokemon.sprites ? (
                    <div className={style.pokemonView}>
                        <h2>{capitalizeFirstLetter(selectPokemon.name)}</h2>
                        <p className={style.subtitle}>#00{selectPokemon.id}</p>
                        <img 
                            className={style["pokemon-image"]} 
                            src={selectPokemon.sprites.other["official-artwork"].front_default || "/path/to/placeholder-image.png"} 
                            alt={selectPokemon.name || 'Pokémon'} 
                        />
                        <div className={style["types-container"]}>
                            {selectPokemon.types?.map((type, index) => (
                                <p key={index}>{capitalizeFirstLetter(type.type.name)}</p>
                            )) || <p>Unknown</p>}
                        </div>
                        <div className={style.containerStats}>
                            <div className={style.typeStat}>
                                <div className={style.stats}>
                                    <img src="/src/assets/weight.svg" alt="Weight" />
                                    <p>{(selectPokemon.weight / 10) || 0} kg</p>
                                </div>
                                <p>Weight</p>
                            </div>
                            <div className={style.divisor}></div>
                            <div className={style.typeStat}>
                                <div className={style.stats}>
                                    <img src="/src/assets/height.svg" alt="Height" />
                                    <p>{(selectPokemon.height / 10) || 0} m</p>
                                </div>
                                <p>Height</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>No Pokémon selected</p>
                )
            )}
            <button className={`${style.btn} ${style["btn-favorite"]}`}>
                <img src="/src/assets/favorite.svg" alt="Favorite" /> Add to Favorites
            </button>
        </div>
    );
}

export default Side;

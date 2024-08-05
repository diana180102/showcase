
import PokemonFavorites from "./PokemonFavorites";
import Pokemon from "./Pokemon";

function AuthenticatedPokemon() {
    const username = localStorage.getItem('username');
   
    return username ? <PokemonFavorites/> : <Pokemon/>
        
}

export default AuthenticatedPokemon;
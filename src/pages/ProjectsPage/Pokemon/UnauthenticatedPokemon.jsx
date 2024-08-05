import Pokemon from "./Pokemon";


function UnauthenticatedPokemon() {
    
    const username = localStorage.getItem('username');
    
    return !username && <Pokemon/>
}

export default UnauthenticatedPokemon;
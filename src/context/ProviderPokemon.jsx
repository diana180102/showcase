import { createContext, useEffect, useState } from "react";
import {getPokemon} from '../services/services';

const PokemonContext = createContext({
    fetchPokemon: () => {},
    selectPokemon: []
});

// eslint-disable-next-line react/prop-types
function ProviderPokemon({children}) {
    
    const [pokemonName, setPokemonName] = useState('bulbasaur');
    const [username, setUsername] = useState('');
    
    const [selectPokemon, setSelectPokemon] = useState([]);

     useEffect(() => {
        const fetchPokemon = async () => {
            if (pokemonName) {
                try {
                    const data = await getPokemon(pokemonName);
                    setSelectPokemon(data);
                } catch (error) {
                    console.error('Error finding pokemon', error);
                }
            }
        }

        fetchPokemon();
    }, [pokemonName]);
   
    
    
    return (
        <PokemonContext.Provider value={{setPokemonName, selectPokemon, username, setUsername}}>
            {children}
        </PokemonContext.Provider>
    )
}

export{
    PokemonContext,
    ProviderPokemon
}
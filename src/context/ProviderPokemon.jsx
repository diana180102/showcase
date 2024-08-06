import { createContext, useEffect, useState } from "react";
import {getPokemon} from '../services/services';
import { getFavorite } from "../services/favoritesPokemon";

const PokemonContext = createContext({
    fetchPokemon: () => {},
    selectPokemon: []
});

// eslint-disable-next-line react/prop-types
function ProviderPokemon({children}) {
    
    const [pokemonName, setPokemonName] = useState('bulbasaur');
    const [username, setUsername] = useState('');
    
    
    const [selectPokemon, setSelectPokemon] = useState([]);
    const [favoritesPokemon, setFavoritesPokemon] = useState([]);

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
     
        
     useEffect(() => {
        
        getFavorite()
         .then(data => {
            setFavoritesPokemon(data);
         }).catch(error => console.error('Error fetching favorites:', error));
            
        

    }, [username]);

   
     
    

    
   
    
    
   
    
    
    return (
        <PokemonContext.Provider value={{
            setPokemonName, 
            selectPokemon, 
            username, 
            setUsername, 
            favoritesPokemon,
            setFavoritesPokemon }}>
            {children}
        </PokemonContext.Provider>
    )
}

export{
    PokemonContext,
    ProviderPokemon
}
const API_URL = `https://pokeapi.co/api/v2`;

const handleResponse = async (response) =>{
    
    if(!response.ok){
        const error = await response.text();
        throw new Error(error);
    }
    return response.json();
}


const getTypePokemon = async () => {
    const response = await fetch(`${API_URL}/type`);
    
    return handleResponse(response);
}


const getPokemon = async (pokemon) => {
   const response = await fetch(`${API_URL}/pokemon/${pokemon}/`);
   return handleResponse(response)
}

export {
    getTypePokemon,
    getPokemon
}
 

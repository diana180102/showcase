
const username = localStorage.getItem('username');

const URL = `https://poke-collection-lite-production.up.railway.app/api/${username}/favorites`;



function handleResponse(options) {
    return fetch(URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // console.log('Data received:', data.data); // Debug: Verifica qué datos estás recibiendo
            return data.data;
        })
        .catch(err => {
            console.error('Fetch error:', err);
            throw err;
        });
}

 function getFavorite(){
    
   const options = { 
   method: 'GET', 
   headers: { 'User-Agent': 'insomnia/2023.5.8' } };

    return handleResponse(options);
     
 }

function createFavorite(body){

    console.log(body);
    
    
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }

    handleResponse(options);
}

export {
    createFavorite,
    getFavorite
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProviderPokemon } from './context/ProviderPokemon.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
     <ProviderPokemon>
       <App />
     </ProviderPokemon>
     
      
    </BrowserRouter>
  </React.StrictMode>,
)

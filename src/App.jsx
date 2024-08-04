import "./App.css";
import Header from "./components/Header/Header";
import { ProviderLanguage } from "./context/ProviderLanguage";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/ProjectsPage/Projects";
import TicTac from "./pages/ProjectsPage/Tictac";
import Pokemon from "./pages/ProjectsPage/Pokemon/Pokemon";
import PokemonFavorites from "./pages/ProjectsPage/Pokemon/PokemonFavorites";
import { ProviderPokemon } from "./context/ProviderPokemon";

function App() {
  return (
    <>
      <ProviderLanguage>
        <Header />

        <ProviderPokemon>
          

      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/tictac" element={<TicTac />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemonFavorites" element={<PokemonFavorites/>}/>
      </Routes>
        </ProviderPokemon>
      </ProviderLanguage>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header/Header";
import { ProviderLanguage } from "./context/ProviderLanguage";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/ProjectsPage/Projects";
import TicTac from "./pages/ProjectsPage/Tictac";
import Pokemon from "./pages/ProjectsPage/Pokemon/Pokemon";
// import { ProviderPokemon } from "./context/ProviderPokemon";
import PokemonFavorites from "./pages/ProjectsPage/Pokemon/PokemonFavorites";

function App() {
  return (
    <>
      <ProviderLanguage>
        <Header />

        
          <main>
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/tictac" element={<TicTac />} />
              <Route path="/pokemon" element={<Pokemon />} />
              <Route path="/pokemonFavorites" element={<PokemonFavorites />} />
            </Routes>
          </main>
        
      </ProviderLanguage>
    </>
  );
}

export default App;

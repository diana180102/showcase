
import Side  from "../../../components/Pokemon/Side/Side";
import Content from "../../../components/Pokemon/content/Content"
import style from "./style.module.css";
import {ProviderPokemon} from '../../../context/ProviderPokemon'


function PokemonFavorites() {
    
   

    return ( 
        <ProviderPokemon>
            <div className="container">
               <div className={style.containerFavorite}>
                  <Side/>
                  <Content/>
               </div>
            </div>
        </ProviderPokemon>
    );
}

export default PokemonFavorites;
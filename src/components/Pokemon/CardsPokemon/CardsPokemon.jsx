import style from "./style.module.css";

function CardsPokemon() {
    return ( 
        <div className={style.card}>
            <h2>Charmander</h2>
            <p className="subtitle">#004</p>
            <img src="/src/assets/pokemon.png" alt="" />
             <div className={style.typePokemon}>
                <p>Fire</p>
             </div>
        </div>  
    );
}

export default CardsPokemon;
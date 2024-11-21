import { useId } from "react";
import style from "./style.module.css";
import { typeColors } from "../../../styles/typePokemon";

// eslint-disable-next-line react/prop-types
function CardsPokemon({ id,  name, image, types }) {
  let idType = useId();
  if (id < 10) {
    id = "#00" + id;
  } else if (id >= 10 && id < 99) {
    id = "#0" + id;
  } else {
    id = "#" + id;
  }

  return (
    <div key={id} className={style.card} onClick={() => console.log(name)}>
      <h2>{name}</h2>
      <p className="subtitle">{id}</p>
      <img src={image} alt="" />
      <div className={style.containerTypes}>
        {
          // eslint-disable-next-line react/prop-types
          types.map((t, index) => (
            <div
              key={`${idType}-${t.type.name}-${index}`}

              className={style.typePokemon}
              style={{ backgroundColor: typeColors[t.type.name] }}
            >
              <p> {t.type.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CardsPokemon;

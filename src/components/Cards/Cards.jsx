import Tags from "../Tags/Tags";
import projects from "../../data/projects.json";
import style from './style.module.css';

import { Link } from "react-router-dom";

function Cards() {
    

    return (
        <>
            {projects.map((project) => {
                let route = "";
                
                if( project.name === "ReactDev Tic-Tac-Toe"){
                    route = "/tictac";
                }else if(project.name === "Poke Collection"){
                    route = "/pokemon"; 
                }else{
                    route = "";
                }

                return (
                    <Link to={route} key={project.id}>
                        <div className={style.card}>
                            <img src={project.image} alt="" />
                            <div className={style.cardDetails}>
                                <p className={style.nameProject}>{project.name}</p>
                                <Tags tags={project.tags} />
                            </div>
                        </div>
                    </Link>
                );
            })}
        </>
    );
}

export default Cards;

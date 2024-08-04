import Language from "../Language/Language";
import style from './style.module.css';

function Header() {
    return ( 
    <header>
        <div className={style.headerContainer}>
            <h1>React Showcase</h1>
            <div className={style.containerNameProject}>
                <p className={style.nameProject}>ReactDev Tic-Tac-Toe</p>
            </div>
             <Language/>
        </div>
    </header> );
}

export default Header;
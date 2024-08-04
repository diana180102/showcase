import style from './style.module.css';
import pickers from '../../data/picker.json'
import { useContext } from 'react';
import { LanguageContext } from '../../context/ProviderLanguage';

function Language() {

    const {setLanguage} = useContext(LanguageContext);

    
    const handleLanguage = (language) =>{
        setLanguage(language)
    }
    
    return ( 
        <div className={style.languages}>
            <div className={style.containerPickers}>
                {
                    pickers.map ( picker => (
                        <button className={style.btnPicker} key={picker.id} onClick={() => handleLanguage(picker.language)} >
                            <img src={picker.image} alt="language english" />
                        </button>
                    ))
                }
               
            </div>
        </div>
     );
}

export default Language;
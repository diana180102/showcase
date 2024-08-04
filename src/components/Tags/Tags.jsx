import style from './style.module.css';
// eslint-disable-next-line react/prop-types
function Tags({tags}) {

    
    
    return ( 
        <div className={style.containerTag}>
         
         { 
         
         // eslint-disable-next-line react/prop-types
         tags.map((tag, index) => (
            <div className={style.tag} key={index}>
                <p>{tag}</p>
            </div>
          ))
         }   
        </div>
     );
}

export default Tags;
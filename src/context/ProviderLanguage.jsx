import { createContext, useState } from 'react';
import en from '../data/en.json';
import es from '../data/es.json';

const LanguageContext = createContext({
   language: "en",
   changeLanguage: () =>{}
});

function ProviderLanguage ({children}) {

   const [language, setLanguage] = useState();

   function changeLanguage(key){
      
      const translations = language === "en" ? en : es;

      return translations[key] || key;

   }
   
   return (
     <LanguageContext.Provider value={{changeLanguage, setLanguage}}>
        {children}
     </LanguageContext.Provider>
   );
}

export {
    LanguageContext,
    ProviderLanguage
}
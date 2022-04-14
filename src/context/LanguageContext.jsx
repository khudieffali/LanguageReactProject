import { createContext, useContext, useEffect, useState } from "react"

const LanguageContext=createContext();
export function LanguageProvider({children}){
    const langLocal=localStorage.getItem("myLanguage")
    const[langCode,setLangCode]=useState(langLocal? langLocal:"AZ")
    const values={
       langCode,
       setLangCode,
    }
    useEffect(()=>{
      localStorage.setItem("myLanguage",langCode)
    },[langCode])
    return(
      <LanguageContext.Provider value={values}>
          {children}
      </LanguageContext.Provider>
    )
}
export const LangContext=()=>useContext(LanguageContext)
export default {LangContext};
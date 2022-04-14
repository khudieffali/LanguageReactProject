import {createContext, useContext, useEffect, useState} from 'react';

const ThemeContext=createContext();
export function ThemeProvider({children}){
    const localDark=localStorage.getItem("myTheme");
    const[theme,setTheme]=useState(localDark? localDark : "light")
    const values={
        theme,
        setTheme,
    }
    useEffect(()=>{
     localStorage.setItem("myTheme",theme)
    },[theme])
return(
 <ThemeContext.Provider value={values}>
   {children}
 </ThemeContext.Provider>
)
}
export const useTheme=()=> useContext(ThemeContext)
export default {useTheme};
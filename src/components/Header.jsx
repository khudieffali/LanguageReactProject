import { LangContext } from '../context/LanguageContext'
import  { useTheme } from '../context/ThemeContext'

const Header = () => {
    const {theme,setTheme}=useTheme()
    const {langCode,setLangCode}=LangContext()
   
  return (
   <div>
       Active Theme :{theme}
       <button onClick={()=>setTheme(theme ==="light"? 'dark':'light')}>
           Change Color
    </button>
     <h1>Language</h1>
     <button onClick={()=>setLangCode("AZ")}>
          AZ
    </button>
    <button onClick={()=>setLangCode("EN")}>
         EN
    </button>
   </div>
  )
}

export default Header
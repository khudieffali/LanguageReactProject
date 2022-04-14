import {useTheme} from '../context/ThemeContext'

const Button = () => {
    const {theme,setTheme}=useTheme()
  return (
    <div>Active Theme : ({theme})
    <button onClick={()=>setTheme(theme ==="light"? 'dark':'light')}>
        Change Color
    </button>
   </div>
  )
}

export default Button